/**
 * Groups of articles that cover one topic from different angles.
 * Each URL keeps its own focus; the series box links the siblings with descriptive anchors
 * so readers (and search engines) can tell which page answers which question.
 */
export interface SeriesItem {
  slug: string;
  /** Anchor text: what this page answers */
  label: string;
  /** One-line description of the angle */
  note: string;
  /** The complete guide of the series */
  hub?: boolean;
}

export interface TopicSeries {
  id: string;
  title: string;
  items: SeriesItem[];
}

export const TOPIC_SERIES: TopicSeries[] = [
  {
    id: "st-joseph-house",
    title: "St. Joseph and your home: the complete series",
    items: [
      {
        slug: "st-joseph-novena-for-buying-a-house",
        label: "St. Joseph novena for buying a house: complete guide",
        note: "The full picture: novena, statue custom, virtues, and home blessing.",
        hub: true,
      },
      {
        slug: "novena-to-st-joseph-to-buy-a-house",
        label: "The nine daily prayers, written out",
        note: "One short prayer for each morning of the novena.",
      },
      {
        slug: "st-joseph-novena-house",
        label: "Prayers for your housing situation",
        note: "First home, renting, relocating, financing, bidding wars.",
      },
      {
        slug: "catholic-prayer-to-buy-a-house",
        label: "A short prayer to say tonight",
        note: "When you need the words, not a nine-day program.",
      },
      {
        slug: "st-joseph-house-novena-2026",
        label: "When to start the novena",
        note: "Timing the nine days around offers, inspections, and Joseph's feasts.",
      },
      {
        slug: "st-joseph-novena-buying-house-guide",
        label: "The St. Joseph statue custom",
        note: "Where it comes from, how families do it, and why it is not a charm.",
      },
      {
        slug: "how-to-pray-st-joseph-novena-buying-house",
        label: "What you may (and may not) ask St. Joseph",
        note: "Praying for a house without superstition or bargaining.",
      },
      {
        slug: "st-joseph-novena-selling-house",
        label: "Novena for selling a house",
        note: "When you are on the other side of the sale.",
      },
    ],
  },
];

const BY_SLUG = new Map<string, TopicSeries>();
for (const series of TOPIC_SERIES) for (const item of series.items) BY_SLUG.set(item.slug, series);

export function seriesForSlug(slug: string): TopicSeries | undefined {
  return BY_SLUG.get(slug);
}
