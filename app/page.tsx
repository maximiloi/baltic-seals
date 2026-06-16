import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { TournamentsSection } from '@/components/TournamentsSection';
import { getTournaments } from '@/lib/tournaments';

export default async function Home() {
  const tournaments = await getTournaments();

  return (
    <>
      <HeroSection />
      <StatsSection tournaments={tournaments} />
      <TournamentsSection tournaments={tournaments} />
    </>
  );
}
