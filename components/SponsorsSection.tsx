'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Heart, Mail, Zap, ExternalLink } from 'lucide-react';
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

export function SponsorsSection() {
  const sponsors = [
    {
      id: 1,
      name: 'Стоматологический центр "Базель"',
      logo: '/sponsors/basel-logo.jpg',
      alt: 'Логотип Стоматологического центра "Базель"',
    },
    {
      id: 2,
      name: 'RISE-GYM | Спортивный клуб в СПб',
      logo: '/sponsors/rise-logo.png',
      alt: 'Логотип Спортивный клуба "RISE-GYM"',
      url: 'https://rise-gym.ru/',
    },
  ];

  const sponsorshipBenefits = [
    {
      icon: Zap,
      title: 'Высокая видимость',
      description:
        'Ваш логотип будет виден на всех материалах команды и сайте с высокой посещаемостью',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Heart,
      title: 'Связь с аудиторией',
      description:
        'Ассоциация с молодым, динамичным видом спорта и активной аудиторией спортсменов',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
    },
    {
      icon: Mail,
      title: 'Прямой контакт',
      description:
        'Возможность взаимодействия с командой, спортсменами и фанатами на турнирах и мероприятиях',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
    },
  ];

  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden py-24 text-white"
    >
      {/* Gradient continues from practices section */}
      <div className="via-slate-850 absolute inset-0 bg-linear-to-b from-slate-900 to-slate-950" />

      {/* Animated background glows - distributed, pink/rose tones */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/3 right-1/3 h-96 w-96 rounded-full bg-rose-500/15 blur-3xl"
          animate={{
            y: [0, 35, 0],
            x: [0, -35, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"
          animate={{
            y: [0, -35, 0],
            x: [0, 30, 0],
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
            className="section-title mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Наши спонсоры
          </motion.h2>
          <motion.p
            className="body-text mx-auto max-w-2xl text-slate-300"
            variants={itemVariants}
          >
            Благодарим компании, которые верят в нас и поддерживают развитие
            флаг-футбола в России
          </motion.p>
        </motion.div>

        {/* Current Sponsors */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            className="subsection-title mb-12 text-center text-white"
            variants={itemVariants}
          >
            Официальные партнёры
          </motion.h3>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-8"
            variants={containerVariants}
          >
            {sponsors.map((sponsor) => {
              const CardContent = (
                <Card className="group relative overflow-hidden border-2 border-slate-700/50 bg-slate-900/50 p-8 backdrop-blur transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="flex h-62 w-62 items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.alt}
                        width={250}
                        height={250}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="body-text mt-4 flex items-center justify-center gap-2 text-center text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
                      <span>{sponsor.name}</span>
                      {sponsor.url && (
                        <ExternalLink className="h-4 w-4 shrink-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                      )}
                    </div>
                  </div>
                </Card>
              );

              return (
                <motion.div key={sponsor.id} variants={itemVariants}>
                  {sponsor.url ? (
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 rounded-lg"
                      aria-label={`Посетить сайт ${sponsor.name}`}
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Sponsorship Benefits */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            className="subsection-title mb-8 text-center text-white"
            variants={itemVariants}
          >
            Преимущества спонсорства
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={containerVariants}
          >
            {sponsorshipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    className={`border-2 ${benefit.borderColor} ${benefit.bgColor} group relative overflow-hidden bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/20`}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div
                        className={`mb-4 inline-flex rounded-lg ${benefit.bgColor} p-3`}
                        aria-hidden="true"
                      >
                        <Icon className={`h-6 w-6 ${benefit.color}`} />
                      </div>

                      <h4 className="subsection-title mb-2 text-white">
                        {benefit.title}
                      </h4>
                      <p className="body-text text-slate-300">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="rounded-2xl border-2 border-purple-500/30 bg-purple-500/10 p-8 text-center backdrop-blur md:p-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            className="subsection-title mb-4 text-white"
            variants={itemVariants}
          >
            Заинтересованы в спонсорстве?
          </motion.h3>
          <motion.p
            className="body-text mb-6 text-slate-300"
            variants={itemVariants}
          >
            Мы активно ищем партнёров, которые разделяют нашу страсть к
            флаг-футболу и хотят быть частью растущего сообщества. Свяжитесь с
            нами, чтобы обсудить возможности сотрудничества!
          </motion.p>
          <motion.button
            className="label-text rounded-lg bg-linear-to-r from-purple-600 to-purple-700 px-8 py-3 font-bold text-white shadow-lg shadow-purple-500/25 transition-shadow hover:shadow-purple-500/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Связаться с командой о спонсорстве"
          >
            Связаться с нами
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
