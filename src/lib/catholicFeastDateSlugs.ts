export interface CatholicFeastDateArticleContent {
  sortOrder: number;
  slug: string;
  name: string;
  shortName: string;
  dateLabel: string;
  month: number | null;
  day: number | null;
  isMoveable: boolean;
  rank: string;
  holyDayUS: boolean;
  liturgicalColor: string;
  season: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  readTime: string;
  titleHook: string;
  directAnswer: string;
  intro: string;
  scriptureAndTradition: string;
  biblicalRoots: string;
  theologicalMeaning: string;
  liturgicalCelebration: string;
  traditionsAndDevotions: string;
  howToCelebrate: string;
  holyDayAndMassObligation: string;
  whyItMatters: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
}

export function catholicFeastDatePath(slug: string): string {
  return `/blog/catholic-feast-days/${slug}/`;
}

export function catholicFeastDateBlogSlug(slug: string): string {
  return `catholic-feast-days/${slug}`;
}
