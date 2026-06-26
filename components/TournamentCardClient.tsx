'use client';

import { Card } from '@/components/ui/card';
import { getMatchResult } from '@/lib/match-utils';
import { Tournament } from '@/types/tournament';
import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  Check,
  Fish,
  MapPin,
  Medal,
  Minus,
  Trophy,
  X,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

function formatDateRange(startDate: string, endDate?: string) {
  const start = new Date(startDate);
  const startDay = start.toLocaleDateString('ru-RU', {
    day: 'numeric',
  });
  const startMonth = start.toLocaleDateString('ru-RU', {
    month: 'long',
  });
  const year = start.getFullYear();

  if (!endDate || startDate === endDate) {
    // Заменяем неправильные окончания на правильные
    const monthMap: { [key: string]: string } = {
      январь: 'января',
      февраль: 'февраля',
      март: 'марта',
      апрель: 'апреля',
      май: 'мая',
      июнь: 'июня',
      июль: 'июля',
      август: 'августа',
      сентябрь: 'сентября',
      октябрь: 'октября',
      ноябрь: 'ноября',
      декабрь: 'декабря',
    };
    const correctMonth = monthMap[startMonth] || startMonth;
    return `${startDay} ${correctMonth} ${year} г.`;
  }

  const end = new Date(endDate);
  const endDay = end.toLocaleDateString('ru-RU', {
    day: 'numeric',
  });
  const endMonth = end.toLocaleDateString('ru-RU', {
    month: 'long',
  });

  const monthMap: { [key: string]: string } = {
    январь: 'января',
    февраль: 'февраля',
    март: 'марта',
    апрель: 'апреля',
    май: 'мая',
    июнь: 'июня',
    июль: 'июля',
    август: 'августа',
    сентябрь: 'сентября',
    октябрь: 'октября',
    ноябрь: 'ноября',
    декабрь: 'декабря',
  };

  // Если месяцы одинаковые, показываем "11 – 12 июня 2026 г."
  if (startMonth === endMonth) {
    const correctMonth = monthMap[startMonth] || startMonth;
    return `${startDay} – ${endDay} ${correctMonth} ${year} г.`;
  }

  // Если месяцы разные, показываем "11 июня – 12 июля 2026 г."
  const startMonthCorrect = monthMap[startMonth] || startMonth;
  const endMonthCorrect = monthMap[endMonth] || endMonth;
  return `${startDay} ${startMonthCorrect} – ${endDay} ${endMonthCorrect} ${year} г.`;
}

function formatDateShort(startDate: string, endDate?: string) {
  const start = new Date(startDate);
  const startDay = String(start.getDate()).padStart(2, '0');
  const startMonth = String(start.getMonth() + 1).padStart(2, '0');
  const year = start.getFullYear();

  if (!endDate || startDate === endDate) {
    return `${startDay}/${startMonth}/${year}`;
  }

  const end = new Date(endDate);
  const endDay = String(end.getDate()).padStart(2, '0');
  const endMonth = String(end.getMonth() + 1).padStart(2, '0');

  // Если месяцы одинаковые, показываем "11–12/06/2026"
  if (start.getMonth() === end.getMonth()) {
    return `${startDay}–${endDay}/${startMonth}/${year}`;
  }

  // Если месяцы разные, показываем "11/06–12/07/2026"
  return `${startDay}/${startMonth}–${endDay}/${endMonth}/${year}`;
}

function ResultIcon({ result }: { result: 'win' | 'loss' | 'draw' }) {
  if (result === 'win') {
    return (
      <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
    );
  }
  if (result === 'loss') {
    return <X className="h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />;
  }
  return (
    <Minus className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
  );
}

function PlaceIcon({ place }: { place: string }) {
  if (place === '1') {
    return <Trophy className="h-4 w-4 text-amber-300" aria-hidden="true" />;
  }
  if (place === '2' || place === '3') {
    return <Medal className="h-4 w-4 text-slate-300" aria-hidden="true" />;
  }
  return <Award className="h-4 w-4 text-slate-400" aria-hidden="true" />;
}

export function TournamentCardClient({
  tournament,
  isPast,
}: {
  tournament: Tournament;
  isPast: boolean;
}) {
  return (
    <Card
      className={twMerge(
        'group relative flex h-full flex-col overflow-hidden border-2 bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-lg',
        isPast
          ? 'border-amber-500/40 focus-within:ring-amber-400 focus-within:ring-offset-slate-900 hover:border-amber-400/80 hover:shadow-amber-500/30'
          : 'border-blue-500/40 focus-within:ring-blue-400 focus-within:ring-offset-slate-900 hover:border-blue-400/80 hover:shadow-blue-500/30'
      )}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        {isPast && (tournament.finalPlace || tournament.farm) && (
          <motion.div
            className="mb-4 flex flex-wrap items-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            {tournament.farm && (
              <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-teal-400/60 bg-teal-500/20 px-3 py-1.5 text-sm font-semibold text-teal-100">
                <Fish className="h-4 w-4 shrink-0" aria-hidden="true" />
                Корюшки
              </div>
            )}
            {tournament.finalPlace && (
              <div
                className={twMerge(
                  'inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold',
                  tournament.finalPlace === '1'
                    ? 'border-amber-400/60 bg-amber-500/20 text-amber-100'
                    : 'border-slate-400/60 bg-slate-600/20 text-slate-100'
                )}
              >
                <PlaceIcon place={tournament.finalPlace} />
                {tournament.finalPlace} место
              </div>
            )}
          </motion.div>
        )}

        <div className="mb-4 flex items-center justify-between gap-3">
          <h4 className="line-clamp-2 flex-1 text-lg font-bold text-slate-50 transition-colors duration-300 group-hover:text-blue-200">
            {tournament.name}
          </h4>
          {tournament.league && (
            <div
              className={twMerge(
                'inline-flex shrink-0 rounded-lg border px-2.5 py-1 text-xs font-semibold tracking-wider uppercase transition-all duration-300',
                isPast
                  ? 'border-amber-400/40 bg-amber-500/20 text-amber-300 group-hover:bg-amber-500/30 group-hover:text-amber-200'
                  : 'border-blue-400/40 bg-blue-500/20 text-blue-300 group-hover:bg-blue-500/30 group-hover:text-blue-200'
              )}
            >
              {tournament.league}
            </div>
          )}
        </div>

        <div
          className={twMerge(
            'mb-6 flex items-center justify-between gap-3 rounded-lg p-3 text-sm transition-all duration-300',
            isPast
              ? 'bg-amber-500/10 group-hover:bg-amber-500/15'
              : 'bg-blue-500/10 group-hover:bg-blue-500/15'
          )}
        >
          <div className="flex items-center gap-2">
            <Calendar
              className={twMerge(
                'h-4 w-4 shrink-0 transition-colors duration-300',
                isPast ? 'text-amber-400' : 'text-blue-400'
              )}
              aria-hidden="true"
            />
            {/* Mobile: short format, Desktop: long format */}
            <span className="text-slate-100 sm:hidden">
              {formatDateShort(tournament.date, tournament.endDate)}
            </span>
            <span className="hidden text-slate-100 sm:inline">
              {formatDateRange(tournament.date, tournament.endDate)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin
              className={twMerge(
                'h-4 w-4 shrink-0 transition-colors duration-300',
                isPast ? 'text-amber-400' : 'text-blue-400'
              )}
              aria-hidden="true"
            />
            <span className="text-slate-100">{tournament.city}</span>
          </div>
        </div>

        {/* Match Results */}
        {isPast && tournament.matches.length > 0 && (
          <motion.div
            className={twMerge(
              'border-t pt-4 transition-all duration-300',
              isPast ? 'border-amber-500/30' : 'border-blue-500/30'
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className={twMerge(
                'mb-3 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase',
                isPast ? 'text-amber-300' : 'text-blue-300'
              )}
            >
              <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
              Результаты матчей
            </div>
            <div className="space-y-2">
              {tournament.matches.map((match, idx) => {
                const result = getMatchResult(match.score);

                return (
                  <div
                    key={idx}
                    className="group/match flex items-center justify-between rounded px-2 py-1 text-sm transition-all duration-200 hover:bg-white/5"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-2">
                      <ResultIcon result={result} />
                      <span className="truncate font-medium text-slate-200 group-hover/match:text-slate-50">
                        vs. {match.opponent}
                      </span>
                    </div>

                    <span
                      className={twMerge(
                        'min-w-fit rounded px-2 py-0.5 text-center font-mono text-xs font-bold transition-all duration-300',
                        result === 'win'
                          ? 'border border-emerald-400/40 bg-emerald-500/25 text-emerald-200'
                          : result === 'loss'
                            ? 'border border-red-400/40 bg-red-500/25 text-red-200'
                            : 'border border-slate-400/40 bg-slate-600/25 text-slate-200'
                      )}
                    >
                      {match.score}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Registration Button for Upcoming Tournaments */}
        {!isPast && (
          <motion.div
            className="mt-auto flex flex-wrap items-center gap-2 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            {tournament.farm && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-teal-400/60 bg-teal-500/20 px-3 py-2 text-xs font-medium text-teal-100 transition-all duration-300">
                <Fish className="h-4 w-4 shrink-0" aria-hidden="true" />
                Корюшки
              </span>
            )}
            {new Date(tournament.date).getTime() - new Date().getTime() >
              7 * 24 * 60 * 60 * 1000 && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-400/50 bg-blue-500/20 px-3 py-2 text-xs font-medium text-blue-200 transition-all duration-300 group-hover:border-blue-300/70 group-hover:bg-blue-500/30 group-hover:text-blue-100">
                Регистрация открыта
              </span>
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );
}
