export interface MatchResult {
  opponent: string;
  score: string;
}

export interface Tournament {
  id: string;
  name: string;
  league: string;
  city: string;
  date: string;
  endDate?: string; // Необязательно, для многодневных турниров
  status: 'upcoming' | 'past';
  finalPlace?: string;
  matches: MatchResult[]; // Массив матчей вместо простой строки
  farm?: boolean; // Турниры "Корюшки" (farm team)
}
