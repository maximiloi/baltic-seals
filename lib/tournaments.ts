import { MatchResult, Tournament } from '@/types/tournament';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const API_KEY = process.env.GOOGLE_SHEET_API_KEY;
const SHEET_NAME = 'Tournaments';

// Fallback данные, если Google Sheets недоступны
const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    name: 'St. Petersburg Flag Football Cup 2024',
    league: 'RFLF',
    city: 'Санкт-Петербург',
    date: '2024-09-15',
    endDate: '2024-09-17',
    status: 'past',
    finalPlace: '1',
    matches: [
      { opponent: 'Невские Викинги', score: '21:14' },
      { opponent: 'Балтийские Морские Волки', score: '28:21' },
      { opponent: 'Питер Львы', score: '35:28' },
    ],
  },
  {
    id: '2',
    name: 'Moscow Open Flag Football 2024',
    league: 'RFLF',
    city: 'Москва',
    date: '2024-10-05',
    endDate: '2024-10-06',
    status: 'past',
    finalPlace: '3',
    matches: [
      { opponent: 'Moscow Rhinos', score: '21:24' },
      { opponent: 'Kremlin Eagles', score: '28:21' },
    ],
  },
  {
    id: '3',
    name: 'Baltic Championship 2025',
    league: 'RFLF',
    city: 'Санкт-Петербург',
    date: '2025-07-10',
    status: 'upcoming',
    matches: [],
  },
];

export async function getTournaments(): Promise<Tournament[]> {
  if (!SHEET_ID || !API_KEY) {
    console.warn(
      '⚠️ [Server] Google Sheets credentials are missing. Using mock data.'
    );
    return MOCK_TOURNAMENTS;
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
      return MOCK_TOURNAMENTS;
    }

    const data = await response.json();

    if (!data.values || data.values.length < 2) {
      console.warn('⚠️ [Server] Таблица пуста или содержит только заголовки.');
      return MOCK_TOURNAMENTS;
    }

    // Нормализуем заголовки: убираем пробелы и приводим к нижнему регистру
    const headers = data.values[0].map((h: string) => h.trim().toLowerCase());
    const rows = data.values.slice(1);

    return rows
      .filter((row: string[]) => row.length > 0 && row[0]) // Фильтруем пустые строки
      .map((row: string[]) => {
        const getVal = (header: string) => {
          const index = headers.indexOf(header.toLowerCase());
          return index !== -1 ? (row[index] || '').trim() : '';
        };

        // Парсим результаты матчей из строки "Команда 1 | 2:1; Команда 2 | 3:0"
        const resultsRaw = getVal('results');
        const matches: MatchResult[] = [];

        if (resultsRaw) {
          const matchStrings = resultsRaw.split(';');
          for (const matchStr of matchStrings) {
            const parts = matchStr.split('|').map((p) => p.trim());
            if (parts.length >= 2 && parts[0] && parts[1]) {
              matches.push({
                opponent: parts[0],
                score: parts[1],
              });
            }
          }
        }

        return {
          id: getVal('id'),
          name: getVal('name'),
          league: getVal('league'),
          city: getVal('city'),
          date: getVal('date'),
          endDate: getVal('enddate') || undefined,
          status: (getVal('status') || 'upcoming') as 'upcoming' | 'past',
          finalPlace: getVal('finalplace') || undefined,
          matches: matches,
          farm: getVal('farm')?.toLowerCase() === 'true',
        };
      });
  } catch (error) {
    console.error('💥 [Server] Failed to fetch tournaments:', error);
    return MOCK_TOURNAMENTS;
  }
}
