export const DAILY_PRAYERS_HUB = "/blog/daily-catholic-prayers/";

export type PrayerGroupId =
  | "essential"
  | "morning"
  | "evening"
  | "marian"
  | "devotion"
  | "protection"
  | "thanksgiving"
  | "intention"
  | "scripture";

export interface RelatedPrayer {
  href: string;
  label: string;
}

export interface DailyPrayerGuide {
  title: string;
  href: string;
  meaning: string;
  purpose: string;
  when: string;
  linkText: string;
  groups: PrayerGroupId[];
  related: RelatedPrayer[];
}

export const PRAYER_GROUPS: { id: PrayerGroupId; title: string; description: string }[] = [
  {
    id: "essential",
    title: "Essential Catholic Prayers",
    description: "The prayers most Catholics learn first and return to for a lifetime.",
  },
  {
    id: "morning",
    title: "Morning Prayers",
    description: "Ways to place the day’s work, decisions, and relationships in God’s hands.",
  },
  {
    id: "evening",
    title: "Evening Prayers",
    description: "Gratitude, repentance, and trust before sleep.",
  },
  {
    id: "marian",
    title: "Marian Prayers",
    description: "Prayers that ask Mary to lead us to her Son.",
  },
  {
    id: "devotion",
    title: "Traditional Catholic Devotions",
    description: "Practices the Church commends, without making them a law for every person.",
  },
  {
    id: "protection",
    title: "Prayers for Protection",
    description: "Prayers that ask for God’s care. They do not guarantee physical safety.",
  },
  {
    id: "thanksgiving",
    title: "Prayers of Thanksgiving",
    description: "Praise for gifts already received, at the table and at the end of the day.",
  },
  {
    id: "intention",
    title: "Prayers for Specific Intentions",
    description: "Family life, illness, meals, peace, and trust in ordinary circumstances.",
  },
  {
    id: "scripture",
    title: "Scripture and Daily Meditation",
    description: "Reading the Gospel and staying with one passage long enough to pray it.",
  },
];

export const DAILY_PRAYER_GUIDES: DailyPrayerGuide[] = [
  {
    title: "The Sign of the Cross",
    href: "/blog/sign-of-the-cross-catholic/",
    meaning: "A short prayer that names the Father, the Son, and the Holy Spirit and traces the cross on the body.",
    purpose: "It marks the start and end of prayer and recalls baptism.",
    when: "Before any prayer, when leaving the house, and at the beginning of the Rosary.",
    linkText: "Read the complete guide to the Sign of the Cross",
    groups: ["essential", "morning"],
    related: [
      { href: "/blog/our-father-prayer/", label: "the Our Father" },
      { href: "/blog/morning-offering-prayer/", label: "the Morning Offering" },
    ],
  },
  {
    title: "The Lord's Prayer (Our Father)",
    href: "/blog/our-father-prayer/",
    meaning: "The prayer Jesus taught his disciples, recorded in Matthew 6 and Luke 11.",
    purpose: "It gives Christian prayer its shape: praise, petition, forgiveness, and trust.",
    when: "Morning and night, at Mass, and once in each decade of the Rosary.",
    linkText: "Read the complete Our Father prayer",
    groups: ["essential", "morning", "evening"],
    related: [
      { href: "/blog/hail-mary-prayer/", label: "the Hail Mary" },
      { href: "/blog/apostles-creed-prayer/", label: "the Apostles' Creed" },
    ],
  },
  {
    title: "The Hail Mary",
    href: "/blog/hail-mary-prayer/",
    meaning: "The angel’s greeting to Mary, Elizabeth’s words, and the Church’s request for her prayers.",
    purpose: "It honors Mary and asks her intercession, especially at the hour of death.",
    when: "In the Rosary, at the Angelus, and as a short morning prayer.",
    linkText: "Read the complete Hail Mary prayer",
    groups: ["essential", "morning", "marian"],
    related: [
      { href: "/blog/how-to-pray-the-rosary-complete-guide/", label: "how to pray the Rosary" },
      { href: "/blog/how-to-pray-the-angelus/", label: "the Angelus" },
    ],
  },
  {
    title: "The Glory Be",
    href: "/blog/glory-be-prayer/",
    meaning: "A doxology that praises the Trinity, as it was in the beginning, is now, and will be forever.",
    purpose: "It ends a decade of the Rosary and many other prayers with praise rather than with another request.",
    when: "After each decade, and at the close of a short morning or evening prayer.",
    linkText: "Read the complete Glory Be prayer",
    groups: ["essential", "devotion", "thanksgiving"],
    related: [
      { href: "/blog/how-to-pray-the-rosary-complete-guide/", label: "the Rosary" },
      { href: "/blog/apostles-creed-prayer/", label: "the Apostles' Creed" },
    ],
  },
  {
    title: "The Apostles' Creed",
    href: "/blog/apostles-creed-prayer/",
    meaning: "An ancient summary of the faith professed at baptism.",
    purpose: "It states what the Church believes before the Rosary turns to meditation.",
    when: "At the start of the Rosary, and whenever you want to renew the faith of your baptism.",
    linkText: "Read the complete Apostles' Creed",
    groups: ["essential", "devotion"],
    related: [
      { href: "/blog/how-to-pray-the-rosary-complete-guide/", label: "the Rosary" },
      { href: "/blog/our-father-prayer/", label: "the Our Father" },
    ],
  },
  {
    title: "The Guardian Angel Prayer",
    href: "/blog/guardian-angel-prayer/",
    meaning: "A request that the angel given to you at life’s beginning would light, guard, rule, and guide you.",
    purpose: "It asks for spiritual care through the day. It does not promise that no harm will occur.",
    when: "In the morning, before travel, and when you are afraid.",
    linkText: "Read the complete Guardian Angel Prayer",
    groups: ["essential", "morning", "protection"],
    related: [
      { href: "/blog/morning-prayer-catholic/", label: "Catholic morning prayer" },
      { href: "/blog/saint-michael-prayer/", label: "the prayer to Saint Michael" },
    ],
  },
  {
    title: "The Morning Offering",
    href: "/blog/morning-offering-prayer/",
    meaning: "A prayer that gives God the work, prayers, joys, and sufferings of the day about to begin.",
    purpose: "It turns ordinary hours into an offering, joined to the Mass.",
    when: "Soon after waking, before the day’s decisions crowd in.",
    linkText: "Read the complete Morning Offering",
    groups: ["essential", "morning"],
    related: [
      { href: "/blog/morning-prayer-catholic/", label: "Catholic morning prayer" },
      { href: "/blog/sign-of-the-cross-catholic/", label: "the Sign of the Cross" },
    ],
  },
  {
    title: "The Act of Contrition",
    href: "/blog/act-of-contrition/",
    meaning: "A prayer of sorrow for sin, with a purpose to amend your life and to confess when the Church asks it.",
    purpose: "It expresses contrition at night and inside the sacrament of Reconciliation.",
    when: "During an evening examination, and when you go to confession.",
    linkText: "Read the complete Act of Contrition",
    groups: ["essential", "evening"],
    related: [
      { href: "/blog/examination-of-conscience-guide/", label: "the Examination of Conscience" },
      { href: "/blog/how-to-go-to-confession/", label: "how to go to confession" },
    ],
  },
  {
    title: "The Rosary",
    href: "/blog/how-to-pray-the-rosary-complete-guide/",
    meaning: "A meditation on the life of Christ with Mary, prayed with the Creed, the Our Father, the Hail Mary, and the Glory Be.",
    purpose: "It keeps the mysteries of Jesus in front of you while the repeated prayers quiet the mind.",
    when: "Whenever you can give it twenty minutes. Many people pray it in the evening. It is not a universal daily obligation.",
    linkText: "Learn how to pray the Catholic Rosary",
    groups: ["essential", "devotion", "marian", "evening"],
    related: [
      { href: "/blog/hail-mary-prayer/", label: "the Hail Mary" },
      { href: "/blog/hail-holy-queen-prayer/", label: "the Hail, Holy Queen" },
      { href: "/blog/our-father-prayer/", label: "the Our Father" },
    ],
  },
  {
    title: "The Angelus",
    href: "/blog/how-to-pray-the-angelus/",
    meaning: "A brief recollection of the Incarnation: the angel’s message, Mary’s yes, and the Word made flesh.",
    purpose: "It interrupts the day with the central fact of the Gospel.",
    when: "Traditionally in the morning, at noon, and in the evening. During Easter, the Regina Caeli often replaces it.",
    linkText: "Read the complete guide to the Angelus",
    groups: ["essential", "devotion", "marian"],
    related: [
      { href: "/blog/hail-mary-prayer/", label: "the Hail Mary" },
      { href: "/blog/regina-caeli-prayer/", label: "the Regina Caeli" },
    ],
  },
  {
    title: "The Hail, Holy Queen",
    href: "/blog/hail-holy-queen-prayer/",
    meaning: "A medieval prayer that greets Mary as mother of mercy and asks her to show us Jesus.",
    purpose: "It closes the Rosary after the decades and turns the meditation back toward Christ.",
    when: "At the end of the Rosary, where that closing is customary.",
    linkText: "Read the complete Hail, Holy Queen",
    groups: ["essential", "marian", "devotion"],
    related: [
      { href: "/blog/how-to-pray-the-rosary-complete-guide/", label: "the Rosary" },
      { href: "/blog/hail-mary-prayer/", label: "the Hail Mary" },
    ],
  },
  {
    title: "The Prayer to Saint Michael the Archangel",
    href: "/blog/saint-michael-prayer/",
    meaning: "The prayer associated with Pope Leo XIII, asking Saint Michael to defend us in the spiritual battle.",
    purpose: "It asks for spiritual defense. It is not a promise of physical safety or of victory in every conflict.",
    when: "After Mass in some parishes, and privately in times of temptation.",
    linkText: "Read the complete prayer to Saint Michael",
    groups: ["essential", "protection", "devotion"],
    related: [
      { href: "/blog/guardian-angel-prayer/", label: "the Guardian Angel Prayer" },
      { href: "/blog/catholic-prayer-for-protection/", label: "Catholic prayers for protection" },
    ],
  },
  {
    title: "The Morning Prayer",
    href: "/blog/morning-prayer-catholic/",
    meaning: "A practical way to begin the day with the Sign of the Cross, offering, and a few traditional prayers.",
    purpose: "It gives beginners a shape for the first ten minutes after waking.",
    when: "On waking, before email and before the first task.",
    linkText: "Explore this Catholic morning prayer",
    groups: ["essential", "morning"],
    related: [
      { href: "/blog/morning-offering-prayer/", label: "the Morning Offering" },
      { href: "/blog/our-father-prayer/", label: "the Our Father" },
      { href: "/blog/guardian-angel-prayer/", label: "the Guardian Angel Prayer" },
    ],
  },
  {
    title: "The Night Prayer",
    href: "/blog/night-prayer-catholic/",
    meaning: "A way to end the day with gratitude, a look at what went wrong, and trust that God keeps watch.",
    purpose: "It helps you sleep without dragging the whole day unresolved into the night.",
    when: "Before bed, after the house is quiet if you can manage it.",
    linkText: "Explore this Catholic night prayer",
    groups: ["essential", "evening"],
    related: [
      { href: "/blog/examination-of-conscience-guide/", label: "the Examination of Conscience" },
      { href: "/blog/act-of-contrition/", label: "the Act of Contrition" },
    ],
  },
  {
    title: "The Examination of Conscience",
    href: "/blog/examination-of-conscience-guide/",
    meaning: "A review of the day in God’s presence: what you did, what you failed to do, and where you need mercy.",
    purpose: "It prepares a sincere Act of Contrition and, when needed, a good confession.",
    when: "In the evening, and before the sacrament of Reconciliation.",
    linkText: "Follow this guide to the Examination of Conscience",
    groups: ["essential", "evening"],
    related: [
      { href: "/blog/examination-of-conscience-before-confession/", label: "an examination for confession" },
      { href: "/blog/act-of-contrition/", label: "the Act of Contrition" },
    ],
  },
  {
    title: "The Prayer of Thanksgiving",
    href: "/blog/prayer-of-thanksgiving/",
    meaning: "Gratitude for gifts already given, distinct from a request for something still wanted.",
    purpose: "It trains the heart to notice grace before it asks for more.",
    when: "After meals, at night, and after news that is simply good.",
    linkText: "Read this Catholic prayer of thanksgiving",
    groups: ["essential", "thanksgiving", "evening"],
    related: [
      { href: "/blog/grace-after-meals-catholic/", label: "grace after meals" },
      { href: "/blog/te-deum-prayer-catholic/", label: "the Te Deum" },
    ],
  },
  {
    title: "The Gospel of the Day: Reading and Meditation",
    href: "/blog/gospel-reading-today-catholic/",
    meaning: "The day’s Gospel, read slowly enough that one sentence can become prayer.",
    purpose: "It keeps daily prayer attached to Scripture and to the Church’s liturgical year.",
    when: "Morning, or any quiet interval when you can read one passage twice.",
    linkText: "Learn how to read and meditate on the Gospel of the day",
    groups: ["essential", "scripture", "morning"],
    related: [
      { href: "/daily-verses/", label: "the daily Bible verse" },
      { href: "/blog/how-to-read-the-catholic-bible-online/", label: "how to read the Catholic Bible" },
    ],
  },
  {
    title: "The Prayer Before Meals",
    href: "/blog/prayer-before-meals-catholic/",
    meaning: "A blessing of the food and of the people who grew, cooked, and will share it.",
    purpose: "It pauses hunger long enough to thank God and to remember those who are hungry.",
    when: "Before breakfast, lunch, or dinner, including a meal eaten alone.",
    linkText: "Read the Catholic prayer before meals",
    groups: ["essential", "intention", "thanksgiving"],
    related: [
      { href: "/blog/grace-after-meals-catholic/", label: "grace after meals" },
      { href: "/blog/how-to-pray-as-a-family/", label: "praying as a family" },
    ],
  },
  {
    title: "The Prayer for the Family",
    href: "/blog/how-to-pray-as-a-family/",
    meaning: "A way for a household to pray the same short prayers together, without turning the living room into a performance.",
    purpose: "It puts marriage, children, and the people under one roof inside the day’s prayer.",
    when: "After a meal, or for a few minutes in the evening.",
    linkText: "Read this guide to prayer for the family",
    groups: ["essential", "intention", "evening"],
    related: [
      { href: "/blog/prayer-before-meals-catholic/", label: "the prayer before meals" },
      { href: "/blog/night-prayer-catholic/", label: "Catholic night prayer" },
    ],
  },
  {
    title: "The Prayer for the Sick",
    href: "/blog/catholic-prayer-for-the-sick/",
    meaning: "Intercession for someone who is ill, together with the Church’s care through the sacrament of the Anointing of the Sick when a priest can come.",
    purpose: "It asks for healing, courage, and the presence of Christ. It does not promise a cure.",
    when: "Beside a sickbed, or from a distance when you cannot be there.",
    linkText: "Read this Catholic prayer for the sick",
    groups: ["essential", "intention"],
    related: [
      { href: "/blog/prayers-for-healing-catholic/", label: "Catholic prayers for healing" },
      { href: "/blog/prayer-of-trust-in-god/", label: "a prayer of trust in God" },
    ],
  },
  {
    title: "The Prayer for Peace",
    href: "/blog/prayer-for-peace/",
    meaning: "A prayer for reconciliation in the heart, in a household, and among peoples.",
    purpose: "It asks God for peace and for the courage to stop returning evil for evil. It does not promise that a war will end on a timetable.",
    when: "When the news is violent, or when a relationship at home is strained.",
    linkText: "Read this Catholic prayer for peace",
    groups: ["essential", "intention"],
    related: [
      { href: "/blog/prayer-of-st-francis-catholic/", label: "the Peace Prayer" },
      { href: "/blog/catholic-teaching-on-peace/", label: "Catholic teaching on peace" },
    ],
  },
  {
    title: "The Prayer of Trust in God",
    href: "/blog/prayer-of-trust-in-god/",
    meaning: "A prayer that places work, people, and the future you cannot control into God’s hands.",
    purpose: "It is the opposite of a bargain. Trust remains even when the outcome is not the one you wanted.",
    when: "In the morning, and whenever anxiety starts to run the day.",
    linkText: "Read this prayer of trust in God",
    groups: ["essential", "intention", "morning"],
    related: [
      { href: "/blog/prayer-of-abandonment-catholic/", label: "the Prayer of Abandonment" },
      { href: "/blog/saint-faustina-kowalska/", label: "Saint Faustina and Divine Mercy" },
    ],
  },
];

export const CLUSTER_LINKS: Record<string, RelatedPrayer[]> = {
  "/blog/divine-office-laity/": [
    { href: "/blog/liturgy-of-the-hours-guide/", label: "the Liturgy of the Hours" },
    { href: "/blog/regina-caeli-prayer/", label: "the Regina Caeli" },
    { href: "/blog/night-prayer-catholic/", label: "Catholic night prayer" },
  ],
  "/blog/regina-caeli-prayer/": [
    { href: "/blog/how-to-pray-the-angelus/", label: "the Angelus" },
    { href: "/blog/divine-office-laity/", label: "the Divine Office for lay people" },
  ],
  "/blog/examination-of-conscience-before-confession/": [
    { href: "/blog/how-to-go-to-confession/", label: "how to go to confession" },
    { href: "/blog/act-of-contrition/", label: "the Act of Contrition" },
  ],
};

export function prayerGuidesIn(group: PrayerGroupId): DailyPrayerGuide[] {
  return DAILY_PRAYER_GUIDES.filter((guide) => guide.groups.includes(group));
}
