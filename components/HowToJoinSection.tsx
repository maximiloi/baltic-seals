'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Trophy, Users, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group rounded-2xl border border-slate-700/50 bg-linear-to-br from-slate-900/60 to-slate-800/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:from-slate-900/80 hover:to-slate-800/60 hover:shadow-lg hover:shadow-cyan-500/20 sm:p-8"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 transition-all duration-300 group-hover:from-cyan-500/30 group-hover:to-blue-500/30">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">{title}</h3>
      <p className="text-sm text-slate-300 sm:text-base">{description}</p>
    </motion.div>
  );
}

export function HowToJoinSection() {
  const handleScrollToPractices = () => {
    const practicesSection = document.getElementById('practices');
    if (practicesSection) {
      practicesSection.scrollIntoView({ behavior: 'smooth' });
      // Add highlight effect
      practicesSection.classList.add('animate-pulse');
      setTimeout(() => {
        practicesSection.classList.remove('animate-pulse');
      }, 2000);
    }
  };

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Дружелюбное сообщество',
      description:
        'Присоединись к молодой команде по флаг-футболу со своей уникальной культурой',
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: 'Турниры и соревнования',
      description:
        'Участвуй в официальных турнирах и развивай свои навыки в реальных играх',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Профессиональные тренировки',
      description:
        'Обучайся под руководством опытных тренеров на регулярных тренировках',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Активный образ жизни',
      description:
        'Улучшай физическую форму, знакомься с новым спортом и получай удовольствие',
    },
  ];

  return (
    <section id="how-to-join" className="relative w-full py-24 text-white">
      <div className="absolute inset-0 bg-slate-900" />
      {/* Animated background glows - cyan/blue tones transitioning to rose/pink */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
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
            className="section-title mb-4 bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Как присоединиться
          </motion.h2>

          <motion.p
            className="body-text mx-auto max-w-2xl text-slate-300"
            variants={itemVariants}
          >
            Попробовать может каждый желающий — просто приди на любую регулярную
            тренировку. Не нужно никакого опыта!
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit, idx) => (
            <BenefitCard
              key={idx}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-2xl border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-blue-500/10 p-8 text-center backdrop-blur-sm sm:p-12"
        >
          <motion.h3
            className="mb-2 text-2xl font-bold text-white sm:text-3xl"
            variants={itemVariants}
          >
            Готов присоединиться?
          </motion.h3>

          <motion.p
            className="body-text mx-auto mb-8 max-w-2xl text-slate-300"
            variants={itemVariants}
          >
            Выбери удобный для тебя день, и приходи на тренировку. Рады каждому,
            кто хочет попробовать!
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={handleScrollToPractices}
            className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 sm:px-10 sm:py-4"
          >
            Смотреть тренировки
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
