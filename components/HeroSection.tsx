'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { WavesSVG } from './WavesSVG';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 opacity-60" />

      {/* Animated gradient glows */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-10 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
      />
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/20 blur-[120px]"
      />

      <motion.div
        className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 sm:px-6 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo and Team Name - Side by side */}
        <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:flex-row">
          {/* Logo */}
          <motion.div variants={logoVariants} className="shrink-0">
            <motion.div
              className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            >
              <Image
                src="/baltic-seals_logo.png"
                alt="Baltic Seals Logo"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Team Name */}
          <motion.div
            variants={nameVariants}
            className="text-center lg:text-left"
          >
            <h1
              className="section-title text-white"
              style={{
                fontFamily: "'Mr Vokiar', sans-serif",
              }}
            >
              Балтийские
              <br />
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
                Нерпы
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Team Info */}
        <motion.div variants={infoVariants} className="max-w-2xl text-center">
          <motion.h2
            className="label-text mb-2 text-white/95"
            style={{ fontFamily: "'Inter', sans-serif" }}
            variants={infoVariants}
          >
            Профессиональная команда по флаг-футболу
          </motion.h2>
          <motion.p
            className="body-text mb-6 text-blue-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
            variants={infoVariants}
          >
            из Санкт-Петербурга
          </motion.p>
          <motion.p
            className="body-text mb-8 text-white/75"
            style={{ fontFamily: "'Inter', sans-serif" }}
            variants={infoVariants}
          >
            Участвуем в турнирах по всей России. Объединяем спортсменов, которые
            любят динамичный спорт и командный дух.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={infoVariants}
          >
            <motion.button
              className="label-text rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/25"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              Узнать больше
            </motion.button>
            <motion.button
              className="label-text rounded-lg border-2 border-blue-400 px-8 py-3 font-bold text-blue-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { scale: 1.05, backgroundColor: 'rgba(96, 165, 250, 0.1)' }
              }
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              Контакты
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Waves at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 overflow-hidden sm:h-48 md:h-56 lg:h-64">
        <WavesSVG />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2 transform"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="label-text text-white/50"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Прокрутите вниз
          </span>
          <svg
            className="h-6 w-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
