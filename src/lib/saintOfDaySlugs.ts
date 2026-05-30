export interface SaintOfDayArticleContent {
  dayOfYear: number;
  month: number;
  day: number;
  dateSlug: string;
  saintSlug: string;
  name: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  readTime: string;
  feastDateLabel: string;
  category: string;
  contentType: "person" | "liturgical";
  patronOf: string[];
  intro: string;
  earlyLife: string;
  vocationAndMinistry: string;
  historicalContext: string;
  miraclesAndDevotion: string;
  patronages: string;
  legacy: string;
  howToHonorToday: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatFeastDate(month: number, day: number): string {
  return `${MONTH_NAMES[month - 1]} ${day}`;
}

export function saintOfDayArticlePath(dateSlug: string): string {
  return `/blog/saint-of-the-day/${dateSlug}/`;
}

export function getDayOfYear(month: number, day: number): number {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let total = day;
  for (let m = 1; m < month; m++) total += daysInMonth[m - 1];
  return total;
}

export function getTodayDateSlug(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return `${MONTH_NAMES[month - 1].toLowerCase()}-${day}`;
}

export function parseDateSlug(dateSlug: string | undefined): { month: number; day: number } | null {
  if (!dateSlug) return null;
  const match = dateSlug.match(/^([a-z]+)-(\d{1,2})$/);
  if (!match) return null;
  const monthIndex = MONTH_NAMES.findIndex((m) => m.toLowerCase() === match[1]);
  if (monthIndex === -1) return null;
  const day = parseInt(match[2], 10);
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day < 1 || day > daysInMonth[monthIndex]) return null;
  return { month: monthIndex + 1, day };
}
