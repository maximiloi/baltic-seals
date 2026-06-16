'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Tournament } from '@/types/tournament';
import { motion } from 'framer-motion';
import { Calendar, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TournamentCardClient } from './TournamentCardClient';

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

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer({ date }: { date: string }) {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date(date).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      {/* Days */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-16 w-14 items-center justify-center rounded-lg border-2 border-blue-400/50 bg-blue-500/20">
          <span className="text-2xl font-bold text-blue-200">
            {String(countdown.days).padStart(2, '0')}
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-400">дней</p>
      </motion.div>

      {/* Hours */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <div className="flex h-16 w-14 items-center justify-center rounded-lg border-2 border-blue-400/50 bg-blue-500/20">
          <span className="text-2xl font-bold text-blue-200">
            {String(countdown.hours).padStart(2, '0')}
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-400">часов</p>
      </motion.div>

      {/* Minutes */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex h-16 w-14 items-center justify-center rounded-lg border-2 border-blue-400/50 bg-blue-500/20">
          <span className="text-2xl font-bold text-blue-200">
            {String(countdown.minutes).padStart(2, '0')}
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-400">минут</p>
      </motion.div>

      {/* Seconds */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <div className="flex h-16 w-14 items-center justify-center rounded-lg border-2 border-blue-400/50 bg-blue-500/20">
          <span className="text-2xl font-bold text-blue-200">
            {String(countdown.seconds).padStart(2, '0')}
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-400">секунд</p>
      </motion.div>
    </div>
  );
}

interface TournamentCarouselProps {
  items: Tournament[];
  isPast: boolean;
}

function TournamentCarousel({ items, isPast }: TournamentCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  if (items.length === 0) {
    return (
      <motion.div
        className="rounded-lg border-2 border-slate-700/50 bg-slate-900/50 px-6 py-12 text-center backdrop-blur"
        variants={itemVariants}
      >
        <p className="text-slate-400">
          {isPast
            ? 'История выступлений пуста'
            : 'Пока нет анонсированных турниров'}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div className="space-y-6" variants={containerVariants}>
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items.map((tournament) => (
              <CarouselItem
                key={tournament.id}
                className="mb-4 pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div variants={itemVariants} className="h-full">
                  <TournamentCardClient
                    tournament={tournament}
                    isPast={isPast}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons - Positioned absolutely at sides */}
          {count > 1 && (
            <>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 left-0 hidden -translate-y-1/2 md:block"
              >
                <CarouselPrevious
                  className={
                    isPast
                      ? 'border-amber-500/50 bg-amber-500/20 text-amber-400 hover:bg-amber-500/40'
                      : 'border-blue-500/50 bg-blue-500/20 text-blue-400 hover:bg-blue-500/40'
                  }
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 right-0 hidden -translate-y-1/2 md:block"
              >
                <CarouselNext
                  className={
                    isPast
                      ? 'border-amber-500/50 bg-amber-500/20 text-amber-400 hover:bg-amber-500/40'
                      : 'border-blue-500/50 bg-blue-500/20 text-blue-400 hover:bg-blue-500/40'
                  }
                />
              </motion.div>
            </>
          )}
        </Carousel>
      </div>

      {/* Dots Indicators Below - Centered */}
      {count > 1 && (
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {Array.from({ length: count }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                index + 1 === current
                  ? isPast
                    ? 'h-2 w-8 bg-amber-400 focus-visible:outline-amber-400'
                    : 'h-2 w-8 bg-blue-400 focus-visible:outline-blue-400'
                  : isPast
                    ? 'h-2 w-2 bg-amber-400/40 hover:bg-amber-400/60'
                    : 'h-2 w-2 bg-blue-400/40 hover:bg-blue-400/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}

      {/* Swipe hint for mobile */}
      {count > 1 && (
        <div className="text-center text-xs text-slate-400 md:hidden">
          Свайпайте для навигации
        </div>
      )}
    </motion.div>
  );
}

export function TournamentsContentClient({
  upcoming,
  past,
}: {
  upcoming: Tournament[];
  past: Tournament[];
}) {
  return (
    <section className="relative w-full bg-linear-to-b from-slate-900 via-slate-950 to-slate-900 py-24 text-white">
      {/* Animated background glows */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 -right-96 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-96 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
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
            className="section-title mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-orange-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Турниры
          </motion.h2>

          {/* Dynamic Statistics */}
          <motion.div className="mb-6 inline-block" variants={itemVariants}>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              {/* Total Tournaments */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {upcoming.length + past.length}
                </motion.div>
                <p className="text-sm text-slate-400">всего турниров</p>
              </div>

              {/* Completed Tournaments */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-4xl font-bold text-transparent"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {past.length}
                </motion.div>
                <p className="text-sm text-slate-400">прошло</p>
              </div>

              {/* Upcoming Tournaments */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-bold text-transparent"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {upcoming.length}
                </motion.div>
                <p className="text-sm text-slate-400">впереди</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="body-text mx-auto mb-6 max-w-2xl text-slate-300"
            variants={itemVariants}
          >
            Мы постоянно участвуем в турнирах по всей России, расширяя опыт и
            совершенствуя своё мастерство
          </motion.p>

          {/* Countdown to next tournament */}
          {upcoming.length > 0 && (
            <motion.div
              className="mb-6 rounded-lg border-2 border-blue-500/30 bg-blue-500/10 p-6 text-center backdrop-blur"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-sm text-slate-400">Ближайший турнир</p>
              <h3 className="mb-4 text-xl font-bold text-blue-200">
                {upcoming[0].name}
              </h3>
              <CountdownTimer date={upcoming[0].date} />
              <p className="mt-4 text-xs text-slate-400">
                {upcoming[0].city} • {upcoming[0].league || 'Турнир'}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Будущие турниры */}
        <motion.div
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="subsection-title mb-8 flex items-center gap-3"
            variants={itemVariants}
          >
            <div className="rounded-lg bg-blue-500/20 p-3">
              <Calendar className="h-6 w-6 text-blue-400" />
            </div>
            Будущие турниры
          </motion.div>

          <TournamentCarousel items={upcoming} isPast={false} />
        </motion.div>

        {/* Прошедшие турниры */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="subsection-title mb-8 flex items-center gap-3"
            variants={itemVariants}
          >
            <div className="rounded-lg bg-amber-500/20 p-3">
              <Trophy className="h-6 w-6 text-amber-400" />
            </div>
            Прошедшие турниры
          </motion.div>

          <TournamentCarousel items={past} isPast={true} />
        </motion.div>
      </div>
    </section>
  );
}
