export type MatchResult = 'win' | 'loss' | 'draw';

/**
 * Определяет результат матча по строке счёта.
 * Примеры: "14:12" → win, "13:21" → loss, "12:12" → draw,
 */
export function getMatchResult(score: string): MatchResult {
  const mainMatch = score.match(/(\d+)\s*[:\-–]\s*(\d+)/);

  const ourScore = parseInt(mainMatch![1], 10);
  const theirScore = parseInt(mainMatch![2], 10);

  if (ourScore > theirScore) return 'win';
  if (ourScore < theirScore) return 'loss';
  return 'draw';
}

export const resultStyles: Record<MatchResult, string> = {
  win: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  loss: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  draw: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
};
