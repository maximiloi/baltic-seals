import { Practice, PracticeSession } from '@/types/practice';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const API_KEY = process.env.GOOGLE_SHEET_API_KEY;
const SHEET_NAME = 'Practice';

const MOCK_PRACTICES: Practice[] = [
  {
    id: '1',
    namePlace: 'Футбольное поле СПб ГБУ «Центр ФКСиЗ»',
    address: 'Кирочная ул., д.50, лит. А',
    coordinates: { lat: 59.944852, lon: 30.376142 },
    details: 'Понедельник | 20-00 до 22-00; Пятница | 20-00 до 22-00;',
    startDate: '05-06-2026',
    endDate: '31-08-2026',
    status: 'permanent',
    isActive: true,
  },
  {
    id: '2',
    namePlace: 'Стадион СОШ № 298',
    address: 'Альпийский переулок, 19к2',
    coordinates: { lat: 59.944852, lon: 30.376142 },
    details: 'Воскресенье | 09-30 до 11-30;',
    startDate: '01-06-2026',
    endDate: '31-08-2026',
    status: 'optional',
    isActive: true,
  },
];

function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function isDateActive(startDate: string, endDate: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  return today >= start && today <= end;
}

function parseSessions(details: string): PracticeSession[] {
  const sessions: PracticeSession[] = [];

  const entries = details.split(';').map(e => e.trim()).filter(e => e);

  for (const entry of entries) {
    const parts = entry.split('|').map(p => p.trim());
    if (parts.length === 2) {
      const day = parts[0];
      const timeRange = parts[1];

      const timeParts = timeRange.split('до').map(t => t.trim());
      if (timeParts.length === 2) {
        sessions.push({
          day,
          startTime: timeParts[0],
          endTime: timeParts[1],
        });
      }
    }
  }

  return sessions;
}

export async function getPractices(): Promise<Practice[]> {
  if (!SHEET_ID || !API_KEY) {
    console.warn(
      '⚠️ [Server] Google Sheets credentials are missing. Using mock data.'
    );
    return MOCK_PRACTICES.map(p => ({
      ...p,
      isActive: isDateActive(p.startDate, p.endDate),
    }));
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      console.error(
        '❌ [Server] Google Sheets API error:',
        response.status,
        response.statusText
      );
      return MOCK_PRACTICES.map(p => ({
        ...p,
        isActive: isDateActive(p.startDate, p.endDate),
      }));
    }

    const data = await response.json();

    if (!data.values || data.values.length < 2) {
      console.warn('⚠️ [Server] Practice sheet is empty or contains only headers.');
      return MOCK_PRACTICES.map(p => ({
        ...p,
        isActive: isDateActive(p.startDate, p.endDate),
      }));
    }

    const headers = data.values[0].map((h: string) => h.trim().toLowerCase());
    const rows = data.values.slice(1);

    return rows
      .filter((row: string[]) => row.length > 0 && row[0])
      .map((row: string[], index: number) => {
        const getVal = (header: string) => {
          const idx = headers.indexOf(header.toLowerCase());
          return idx !== -1 ? (row[idx] || '').trim() : '';
        };

        const startDate = getVal('startdate');
        const endDate = getVal('enddate');

        // Парсим координаты из формата "59.944852, 30.376142"
        const coordStr = getVal('coordinates');
        const [latStr, lonStr] = coordStr.split(',').map(c => c.trim());
        const lat = parseFloat(latStr) || 0;
        const lon = parseFloat(lonStr) || 0;

        return {
          id: String(index + 1),
          namePlace: getVal('nameplace'),
          address: getVal('address'),
          coordinates: { lat, lon },
          details: getVal('details'),
          startDate,
          endDate,
          status: (getVal('status') || 'permanent') as 'permanent' | 'optional',
          isActive: isDateActive(startDate, endDate),
        };
      });
  } catch (error) {
    console.error('💥 [Server] Failed to fetch practices:', error);
    return MOCK_PRACTICES.map(p => ({
      ...p,
      isActive: isDateActive(p.startDate, p.endDate),
    }));
  }
}

export function parsePracticeSessions(details: string): PracticeSession[] {
  return parseSessions(details);
}
