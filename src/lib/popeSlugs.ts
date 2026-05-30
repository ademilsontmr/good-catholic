export interface PopeArticleContent {
  num: number;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  readTime: string;
  intro: string;
  earlyLife: string;
  historicalContext: string;
  pontificate: string;
  papalActs: string;
  legacy: string;
  succession: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedPopes: { num: number; slug: string; name: string; relation: string }[];
}

/** URL slug without the `pope-` prefix: e.g. `st-peter`, `leo-xiv` */
export function popeToSlug(name: string): string {
  return name
    .replace(/^St\.\s+/i, "st-")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Ordinal label for a pope number, e.g. 267 → "267º" */
export function popeOrdinal(n: number): string {
  return `${n}º`;
}

/** Full blog path segment: e.g. `pope-st-peter`, `pope-leo-xiv` */
export function popeArticlePath(slug: string): string {
  return `/blog/pope-${slug}/`;
}

const POPE_ARTICLE_PREFIX = "pope-";

/** Parse pope slug from a blog URL segment like `pope-leo-xiv` */
export function parsePopeArticleSlug(articleSlug: string | undefined): string | null {
  if (!articleSlug?.startsWith(POPE_ARTICLE_PREFIX)) return null;
  const slug = articleSlug.slice(POPE_ARTICLE_PREFIX.length);
  return slug || null;
}
