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
  {
    id: "examination-of-conscience",
    title: "Examination of conscience: the series",
    items: [
      { slug: "examination-of-conscience-before-confession", label: "Examination of conscience by the Ten Commandments", note: "The full examination for adults before Confession.", hub: true },
      { slug: "examination-conscience", label: "Examination for returning to Confession after years", note: "Mortal and venial sin, and where to start after a long absence." },
      { slug: "examination-of-conscience-guide", label: "The daily Examen and scrupulosity", note: "St. Ignatius’s five-step evening review, and a healthy conscience." },
    ],
  },
  {
    id: "catholic-mass",
    title: "Understanding the Mass: the series",
    items: [
      { slug: "complete-guide-to-the-catholic-mass", label: "Every part of the Mass, explained", note: "The complete walkthrough, with postures and responses.", hub: true },
      { slug: "catholic-mass-complete-guide", label: "Order of Mass at a glance", note: "The parts of the Mass as a short outline to follow or print." },
      { slug: "what-is-the-catholic-mass-guide", label: "The Mass as sacrifice and the Last Supper", note: "What Catholics mean by re-presentation, not mere memorial." },
      { slug: "what-is-the-catholic-mass", label: "Your first time at Mass", note: "A guide for visitors and non-Catholics: what to expect and do." },
    ],
  },
  {
    id: "rosary",
    title: "Praying the Rosary: the series",
    items: [
      { slug: "complete-rosary-guide", label: "The complete Rosary guide", note: "History, every prayer, all 20 mysteries, and how to meditate.", hub: true },
      { slug: "how-to-pray-the-rosary-step-by-step", label: "How to pray the Rosary, bead by bead", note: "A beginner’s walk around the beads, decade by decade." },
      { slug: "how-to-pray-the-rosary-complete-guide", label: "The mysteries for each day, with meditations", note: "Which mysteries to pray on which day, and what to ponder." },
      { slug: "rosary-complete-guide", label: "The 15 Rosary promises and the Rosary in history", note: "Lepanto, St. Louis de Montfort, and how to read the promises." },
    ],
  },
  {
    id: "confession",
    title: "Going to Confession: the series",
    items: [
      { slug: "complete-guide-to-catholic-confession", label: "The complete guide to Confession", note: "The sacrament, the five steps, fears, and how often to go.", hub: true },
      { slug: "how-to-go-to-confession-guide", label: "What to say in the confessional", note: "A word-for-word script from the greeting to the absolution." },
      { slug: "how-to-go-to-confession", label: "Going back to Confession after many years", note: "For Catholics returning after a long absence." },
      { slug: "catholic-confession-guide", label: "Why confess to a priest?", note: "The biblical basis for Confession and the seal of the confessional." },
    ],
  },
  {
    id: "baptism",
    title: "Catholic Baptism: the series",
    items: [
      { slug: "catholic-baptism-explained", label: "What Baptism is and what it does", note: "The theology and effects of the sacrament.", hub: true },
      { slug: "catholic-baptism-guide", label: "Adult Baptism, and baptism of desire and blood", note: "Becoming Catholic as an adult, and the Church’s teaching on salvation." },
      { slug: "catholic-baptism-preparation-guide", label: "Preparing for your baby’s Baptism", note: "Steps, classes, and godparent requirements for parents." },
    ],
  },
  {
    id: "liturgy-of-the-hours",
    title: "The Liturgy of the Hours: the series",
    items: [
      { slug: "liturgy-of-the-hours-guide", label: "The Liturgy of the Hours, hour by hour", note: "The complete structure of the Divine Office.", hub: true },
      { slug: "divine-office-laity", label: "How a lay Catholic can start praying the Office", note: "Books, apps, and a realistic minimum routine." },
    ],
  },
  {
    id: "ash-wednesday",
    title: "Ash Wednesday: the series",
    items: [
      { slug: "ash-wednesday-guide", label: "What Ash Wednesday means", note: "The ashes, repentance, and the start of Lent, for any year.", hub: true },
      { slug: "ash-wednesday", label: "Ash Wednesday 2027: date, Mass, and rules", note: "This year’s practical guide." },
      { slug: "ash-wednesday-2026", label: "Fasting and abstinence rules in detail", note: "Who must fast, who is exempt, and what counts as a meal." },
    ],
  },
  {
    id: "st-michaels-lent",
    title: "St. Michael’s Lent: the series",
    items: [
      { slug: "st-michaels-lent-novena-prayer-guide-us-2026", label: "St. Michael’s Lent: the complete guide", note: "The 46-day devotion from August 15 to September 29.", hub: true },
      { slug: "st-michaels-lent-46-day-novena", label: "How the 46 days are counted", note: "The calendar, the start and end dates, and missed days." },
      { slug: "st-michaels-lent-novena-how-to-pray", label: "What to pray each day", note: "The daily prayers of St. Michael’s Lent." },
      { slug: "st-michael-lent-2026", label: "A practical plan and penances", note: "Choosing a penance and keeping going when you miss a day." },
      { slug: "st-michael-lent-guide", label: "The origins: St. Francis at La Verna", note: "Where St. Michael’s Lent comes from, and the nine choirs of angels." },
    ],
  },
];

const BY_SLUG = new Map<string, TopicSeries>();
for (const series of TOPIC_SERIES) for (const item of series.items) BY_SLUG.set(item.slug, series);

export function seriesForSlug(slug: string): TopicSeries | undefined {
  return BY_SLUG.get(slug);
}
