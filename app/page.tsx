import { HeroSection } from '@/components/HeroSection';
import { FlagFootballSection } from '@/components/FlagFootballSection';
import { StatsSection } from '@/components/StatsSection';
import { TournamentsSection } from '@/components/TournamentsSection';
import { PracticesSectionContentClient } from '@/components/PracticesSection';
import { getTournaments } from '@/lib/tournaments';
import { getPractices } from '@/lib/practices';

export default async function Home() {
  const [tournaments, practices] = await Promise.all([
    getTournaments(),
    getPractices(),
  ]);

  return (
    <>
      <HeroSection />
      <FlagFootballSection />
      <StatsSection tournaments={tournaments} />
      <TournamentsSection tournaments={tournaments} />
      <PracticesSectionContentClient practices={practices} />
    </>
  );
}
