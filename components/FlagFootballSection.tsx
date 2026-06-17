'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Activity,
  Clock,
  ExternalLink,
  Heart,
  Shield,
  Target,
  Users,
  Wind,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

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

export function FlagFootballSection() {
  const whatIsIt = [
    {
      icon: Shield,
      title: 'Без контакта',
      description:
        'Флаг-футбол — это форма американского футбола, где вместо захватов используются ленты (флаги).',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
    },
    {
      icon: Zap,
      title: 'Быстро и динамично',
      description:
        'Игра идет 30-40 минут. Игра идёт по полю 70 ярдов с конечными зонами — быстрые тактические ходы и тактический расчёт.',
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/20',
    },
    {
      icon: Users,
      title: 'Командный спорт',
      description:
        'На поле 5 игроков с каждой стороны в зависимости от формата. Каждый имеет роль — навык каждого важен для победы.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
    },
    {
      icon: Activity,
      title: 'Всем доступен',
      description:
        'Независимо от размера и силы — в флаг-футболе выигрывает ум, скорость и командная работа. Есть место каждому.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
    },
  ];

  const whyFlagFootball = [
    {
      icon: Heart,
      title: 'Здоровье и форма',
      description:
        'Интенсивная кардионагрузка, развитие ловкости и стратегического мышления',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
    },
    {
      icon: Target,
      title: 'Командный дух',
      description:
        'Вы учитесь работать как единая система, где успех команды важнее личных достижений',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Wind,
      title: 'Безопасность',
      description:
        'Отсутствие жёстких столкновений делает флаг-футбол безопаснее чем традиционный футбол',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
    {
      icon: Clock,
      title: 'Включённость',
      description:
        'В отличие от традиционного футбола, почти все игроки задействованы в атаке и защите',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
    },
  ];

  const basicRules = [
    {
      title: 'Цель игры',
      points: [
        'Перемещение мяча по полю в зачетную зону противника',
        'Приземление мяча в зачетной зоне = 6 очков (тачдаун)',
        'Точные броски за дополнительный балл или 2 балла',
      ],
    },
    {
      title: 'Как начинается атака',
      points: [
        'Мяч центром отправляется квотербеку (главный бросающий)',
        'Квотербек делает пас мячом своим товарищам по команде',
        'У каждой атаки есть 4 попытки продвинуться на 25 ярдов',
      ],
    },
    {
      title: 'Как играют защитники',
      points: [
        'Срыв флага на поясе нападающего = останавливает игру',
        'Защитники могут перехватывать передачи',
        'После перехвата команды меняются ролями (защита становится атакой)',
      ],
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-24 text-white">
      {/* Gradient background from hero to this section */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated background glows */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
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
          <motion.div
            className="mb-6 flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Image
              src="/flf.svg"
              alt="Логотип флаг-футбола"
              width={48}
              height={48}
              className="h-12 w-12 invert"
            />
            <motion.h2
              className="section-title bg-linear-to-r from-blue-400 via-cyan-400 to-orange-500 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Что такое флаг-футбол?
            </motion.h2>
          </motion.div>

          <motion.div
            className="mb-6 inline-block rounded-lg border-2 border-yellow-500/30 bg-yellow-500/10 px-4 py-2"
            variants={itemVariants}
          >
            <p className="label-text font-bold text-yellow-400">
              🏅 Новый олимпийский вид спорта
            </p>
          </motion.div>

          <motion.p
            className="body-text mx-auto max-w-2xl text-slate-300"
            variants={itemVariants}
          >
            Динамичный, безопасный и доступный каждому вид спорта, признанный
            Олимпийским движением.
          </motion.p>

          <motion.a
            href="https://www.olympics.com/ru/news/flag-football-rules-players-origins-things-to-know"
            target="_blank"
            rel="noopener noreferrer"
            className="body-text mt-4 inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            Подробнее на Olympics.com
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* What is Flag Football */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            className="subsection-title mb-8 text-white"
            variants={itemVariants}
          >
            Основы флаг-футбола
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={containerVariants}
          >
            {whatIsIt.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    className={`border-2 ${item.borderColor} ${item.bgColor} group relative overflow-hidden bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/20`}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div
                        className={`mb-4 inline-flex rounded-lg ${item.bgColor} p-3`}
                        aria-hidden="true"
                      >
                        <Icon className={`h-6 w-6 ${item.color}`} />
                      </div>

                      <h4 className="subsection-title mb-3 text-white">
                        {item.title}
                      </h4>
                      <p className="body-text text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Why Flag Football */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            className="subsection-title mb-8 text-white"
            variants={itemVariants}
          >
            Почему флаг-футбол?
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
          >
            {whyFlagFootball.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    className={`border-2 ${item.borderColor} ${item.bgColor} group relative overflow-hidden bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/20`}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div
                        className={`mb-4 inline-flex rounded-lg ${item.bgColor} p-3`}
                        aria-hidden="true"
                      >
                        <Icon className={`h-6 w-6 ${item.color}`} />
                      </div>

                      <h4 className="subsection-title mb-2 text-white">
                        {item.title}
                      </h4>
                      <p className="body-text text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Basic Rules */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {basicRules.map((rule, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden border-2 border-slate-700/50 bg-slate-900/50 p-8 backdrop-blur transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <h4 className="subsection-title mb-4 text-white transition-colors duration-300 group-hover:text-blue-300">
                    {rule.title}
                  </h4>
                  <ul className="space-y-3">
                    {rule.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="body-text flex gap-3 text-slate-300 transition-colors duration-300 group-hover:text-slate-200"
                      >
                        <span
                          className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-blue-400"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-20 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="body-text mb-6 text-slate-300">
            Заинтересовались? Присоединяйтесь к «Балтийским Нерпам» и откройте
            для себя новый мир флаг-футбола!
          </p>
          <motion.button
            className="label-text rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Узнать больше о команде"
          >
            Узнать больше
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
