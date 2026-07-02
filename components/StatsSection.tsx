'use client';

import { Card } from '@/components/ui/card';
import { getMatchResult } from '@/lib/match-utils';
import { Tournament } from '@/types/tournament';
import { football } from '@lucide/lab';
import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  Icon,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';

interface StatsSectionProps {
  tournaments: Tournament[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function StatsSection({ tournaments }: StatsSectionProps) {
  // Рассчитываем статистику из турниров (исключаем турниры "Корюшки")
  const pastTournaments = tournaments.filter(
    (t) => t.status === 'past' && !t.farm
  );

  let wins = 0;
  let totalMatches = 0;

  pastTournaments.forEach((tournament) => {
    tournament.matches.forEach((match) => {
      totalMatches++;
      const result = getMatchResult(match.score);
      if (result === 'win') wins++;
    });
  });

  const winPercentage =
    totalMatches > 0 ? Math.round((wins / totalMatches) * 100) : 0;

  // Ищем самую длинную серию побед (сквозь все турниры с учётом дат)
  let currentStreak = 0;
  let maxStreak = 0;

  // Сортируем турниры по датам и собираем матчи в хронологическом порядке
  const sortedTournaments = [...pastTournaments].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const allMatches: Array<{ score: string; date: string }> = [];
  sortedTournaments.forEach((tournament) => {
    tournament.matches.forEach((match) => {
      allMatches.push({ ...match, date: tournament.date });
    });
  });

  // Считаем серию побед сквозь все матчи в хронологическом порядке
  allMatches.forEach((match) => {
    const result = getMatchResult(match.score);
    if (result === 'win') {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });

  const foundingYear = 2025;

  // Рассчитываем общее количество заработанных очков
  let totalPoints = 0;
  pastTournaments.forEach((tournament) => {
    tournament.matches.forEach((match) => {
      const [ourScore] = match.score.split(':').map(Number);
      totalPoints += ourScore || 0;
    });
  });

  const stats = [
    {
      icon: Award,
      label: 'Год основания',
      value: foundingYear.toString(),
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
    },
    {
      icon: Calendar,
      label: 'Сыграно турниров',
      value: pastTournaments.length.toString(),
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/20',
    },
    {
      icon: Trophy,
      label: 'Турниров выиграно',
      value: pastTournaments
        .filter((t) => t.finalPlace === '1')
        .length.toString(),
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
    },
    {
      icon: null,
      label: 'Сыграно игр',
      value: totalMatches.toString(),
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
      isFootball: true,
    },
    {
      icon: Trophy,
      label: 'Выиграно игр',
      value: wins.toString(),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Trophy,
      label: 'Заработано очков',
      value: totalPoints.toString(),
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
    },
    {
      icon: Zap,
      label: 'Серия побед подряд',
      value: maxStreak.toString(),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
    },
    {
      icon: Target,
      label: 'Процент побед',
      value: `${winPercentage}%`,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'Чемпионский класс',
      description:
        'Опытные спортсмены, которые знают, как побеждать. Присоединись к лучшим и докажи свой уровень на поле.',
    },
    {
      icon: TrendingUp,
      title: 'Постоянный рост',
      description:
        'Интенсивные тренировки, разбор игр, скримеджи. Развивайся вместе с командой, которая стремится к большему.',
    },
    {
      icon: Users,
      title: 'Настоящая команда',
      description:
        'Не просто спорт — это семья. Вместе мы ходим на мероприятия, путешествуем, поддерживаем друг друга и создаём историю.',
    },
  ];

  return (
    <section id="stats" className="relative w-full py-24 text-white">
      <div className="absolute inset-0 bg-linear-to-b from-slate-800 via-slate-850 to-slate-900" />
      {/* Animated background glows - distributed, warm tones */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/3 right-1/2 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl"
          animate={{
            y: [0, 35, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/4 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -35, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="section-title mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-orange-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            О команде Балтийские Нерпы
          </motion.h2>
          <motion.p
            className="body-text mx-auto max-w-2xl text-slate-300"
            variants={itemVariants}
          >
            Молодая команда по флаг-футболу из Санкт-Петербурга, мы начинаем
            свою историю побед и достижений
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          role="region"
          aria-label="Статистика команды"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`border-2 ${stat.borderColor} ${stat.bgColor} group hover:border-opacity-100 relative overflow-hidden bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/20`}
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div
                      className={`mb-4 inline-flex rounded-lg ${stat.bgColor} p-3`}
                      aria-hidden="true"
                    >
                      {stat.isFootball ? (
                        <Icon
                          iconNode={football}
                          className={`h-6 w-6 ${stat.color}`}
                        />
                      ) : IconComponent ? (
                        <IconComponent className={`h-6 w-6 ${stat.color}`} />
                      ) : null}
                    </div>

                    <p className="label-text mb-1 text-slate-400">
                      {stat.label}
                    </p>
                    <p
                      className="stat-value text-white"
                      aria-label={`${stat.label}: ${stat.value}`}
                    >
                      {stat.value}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border-2 border-slate-700/50 bg-slate-900/50 p-8 backdrop-blur transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div
                      className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-3 transition-all duration-300 group-hover:bg-blue-500/20"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6 text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />
                    </div>

                    <h3 className="subsection-title mb-2 text-white transition-colors duration-300 group-hover:text-blue-300">
                      {feature.title}
                    </h3>
                    <p className="body-text text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
