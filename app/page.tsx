import { HeroSection } from '@/components/HeroSection';
import { FlagFootballSection } from '@/components/FlagFootballSection';
import { StatsSection } from '@/components/StatsSection';
import { TournamentsSection } from '@/components/TournamentsSection';
import { PracticesSectionContentClient } from '@/components/PracticesSection';
import { HowToJoinSection } from '@/components/HowToJoinSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { Footer } from '@/components/Footer';
import { getTournaments } from '@/lib/tournaments';
import { getPractices } from '@/lib/practices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Балтийские Нерпы | Команда флаг-футбола из СПб',
  description: 'Профессиональная команда по флаг-футболу из Санкт-Петербурга. Участвуем в турнирах по всей России. Тренировки, спонсорство и динамичный спорт.',
};

export default async function Home() {
  const [tournaments, practices] = await Promise.all([
    getTournaments(),
    getPractices(),
  ]);

  return (
    <main id="main-content">
      <HeroSection />
      <FlagFootballSection />
      <StatsSection tournaments={tournaments} />
      <TournamentsSection tournaments={tournaments} />
      <PracticesSectionContentClient practices={practices} />
      <HowToJoinSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
