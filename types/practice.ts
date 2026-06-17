export interface Practice {
  id: string;
  namePlace: string;
  address: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  details: string; // "Понедельник | 20-00 до 22-00; Пятница | 20-00 до 22-00;"
  startDate: string; // "05-06-2026"
  endDate: string; // "31-08-2026"
  status: 'permanent' | 'optional';
  isActive: boolean; // Вычисляется на основе текущей даты
}

export interface PracticeSession {
  day: string;
  startTime: string;
  endTime: string;
}
