'use client';

import { parsePracticeSessions } from '@/lib/practices';
import { Practice } from '@/types/practice';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, MapPin } from 'lucide-react';
import { YandexMapBlock } from './YandexMapBlock';

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

interface PracticeCardProps {
  practice: Practice;
}

function PracticeCard({ practice }: PracticeCardProps) {
  const sessions = parsePracticeSessions(practice.details);

  return (
    <motion.div
      variants={itemVariants}
      className="flex h-full flex-col rounded-2xl border border-slate-700/50 bg-slate-900/50 p-4 backdrop-blur sm:p-6"
    >
      {/* Название места и адрес */}
      <div className="mb-4 sm:mb-6">
        <h4 className="line-clamp-2 text-base font-bold text-white sm:text-lg">
          {practice.namePlace}
        </h4>
        <div className="mt-2 flex items-start gap-2 text-slate-400">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
          <span className="line-clamp-2 text-xs sm:text-sm">
            {practice.address}
          </span>
        </div>
      </div>

      {/* Расписание */}
      <div className="mb-4 space-y-2 border-t border-slate-700/50 pt-3 sm:mb-6 sm:pt-4">
        {sessions.map((session, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2 text-xs text-slate-300 sm:text-sm"
          >
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
            <span className="wrap-break-words">
              <strong className="block sm:inline">{session.day}:</strong>
              <span className="block sm:inline">
                c {session.startTime} до {session.endTime}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* Карта Яндекс */}
      <div className="mb-4 sm:mb-6">
        <YandexMapBlock practice={practice} />
      </div>

      {/* Статус optional - внизу */}
      {practice.status === 'optional' && (
        <div className="mt-auto rounded-lg bg-amber-500/10 p-2 sm:p-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="mt-0.5 h-8 w-8 shrink-0 text-amber-400" />
            <div className="text-xs text-amber-200">
              <p className="text-xs font-semibold sm:text-sm">
                Проведение уточняйте в группе ВКонтакте:
              </p>
              <a
                href="https://vk.ru/baltic_seals"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-xs font-semibold hover:underline sm:text-sm"
              >
                vk.ru/baltic_seals →
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

interface PracticesSectionContentClientProps {
  practices: Practice[];
}

export function PracticesSectionContentClient({
  practices,
}: PracticesSectionContentClientProps) {
  const activePractices = practices.filter((p) => p.isActive);

  if (activePractices.length === 0) {
    return null;
  }

  return (
    <section id="practices" className="relative w-full py-24 text-white">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-850 to-slate-900" />
      {/* Animated background glows - distributed, teal/green tones */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/2 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -35, 0],
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
          <motion.h2
            className="section-title mb-4 bg-linear-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Тренировки
          </motion.h2>

          <motion.p
            className="body-text mx-auto max-w-2xl text-slate-300"
            variants={itemVariants}
          >
            Присоединяйся к нам на регулярных тренировках в этом сезоне
          </motion.p>
        </motion.div>

        {/* Карточки тренировок */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {activePractices.map((practice) => (
            <PracticeCard key={practice.id} practice={practice} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
