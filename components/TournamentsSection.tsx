import { Tournament } from '@/types/tournament';
import { TournamentsContentClient } from './TournamentsContentClient';

interface TournamentsSectionProps {
  tournaments: Tournament[];
}

export async function TournamentsSection({
  tournaments,
}: TournamentsSectionProps) {
  const upcoming = tournaments
    .filter((t) => t.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const past = tournaments
    .filter((t) => t.status === 'past')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <TournamentsContentClient upcoming={upcoming} past={past} />;
}
