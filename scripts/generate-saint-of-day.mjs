#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function trimMeta(s, max = 155) {
  if (!s || s.length <= max) return s || "";
  return s.slice(0, 152).replace(/\s+\S*$/, "") + "...";
}

function ensurePeriod(s) {
  const t = (s || "").trim();
  if (!t) return "";
  return t.endsWith(".") ? t : `${t}.`;
}

function joinSentences(...parts) {
  return parts.filter(Boolean).map(ensurePeriod).join(" ");
}

function formatDate(month, day) {
  return `${MONTH_NAMES[month - 1]} ${day}`;
}

function dayOfYear(month, day) {
  const dim = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let t = day;
  for (let m = 1; m < month; m++) t += dim[m - 1];
  return t;
}

function estimateReadTime(...texts) {
  const words = texts.join(" ").split(/\s+/).length;
  return `${Math.min(16, Math.max(9, Math.round(words / 220)))} min`;
}

function patronList(patrons) {
  if (patrons.length === 1) return patrons[0];
  if (patrons.length === 2) return `${patrons[0]} and ${patrons[1]}`;
  return `${patrons.slice(0, -1).join(", ")}, and ${patrons[patrons.length - 1]}`;
}

function primaryName(name) {
  return name.split(" and ")[0];
}

function isLiturgicalFeast(s) {
  if (s.category === "solemnity") return true;
  const n = s.name.toLowerCase();
  if (s.category === "feast" && (n.includes("lord") || n.includes("nativity") || n.includes("all saints"))) {
    return true;
  }
  return false;
}

const CATEGORY_LABELS = {
  martyr: "martyr of the Catholic Church",
  confessor: "confessor and bishop or monk of the Church",
  virgin: "consecrated virgin and saint",
  doctor: "Doctor of the Church",
  apostle: "apostle of the Lord",
  solemnity: "solemnity on the universal calendar",
  memorial: "memorial on the Roman calendar",
  feast: "feast celebrated throughout the Church",
};

const VOCATION_FOCUS = {
  martyr: "witness unto blood when the state or mob demanded apostasy",
  confessor: "preaching, governance, and service to the poor under heavy responsibility",
  virgin: "consecrated chastity, prayer, and often founding or reforming communities",
  doctor: "writing, teaching, and defending orthodoxy when doctrine was contested",
  apostle: "planting churches and proclaiming Christ where the Gospel was unknown",
  memorial: "hidden holiness in ordinary duties performed with extraordinary love",
  feast: "public celebration of a mystery or saint whose life the Church holds up for imitation",
  solemnity: "solemn liturgical proclamation of a saving mystery",
};

// --- Person saints (unique fact distribution) ---

function buildPersonIntro(s) {
  const patrons = patronList(s.patronOf);
  return joinSentences(
    `On ${formatDate(s.month, s.day)}, the Catholic Church honors ${s.name} — a ${CATEGORY_LABELS[s.category] || "canonized saint"} from ${s.origin} (${s.lifespan}).`,
    s.facts[0],
    `${s.titleHook} captures what makes this life memorable centuries later.`,
    `Catholics invoke ${primaryName(s.name)} as patron of ${patrons}; this guide explains the history, virtue, and practical ways to honor the feast today.`
  );
}

function buildPersonEarlyLife(s) {
  return joinSentences(
    `${primaryName(s.name)} belongs to the history of ${s.origin} during ${s.lifespan}.`,
    s.facts[1],
    `Hagiography preserves both documented events and pious memory; the Church canonizes saints when their holiness is clear, not when every anecdote is verified like a modern biography.`,
    `Geography and era matter: knowing where this saint lived helps readers understand the political, religious, and economic pressures that shaped choices of courage, poverty, or exile.`
  );
}

function buildPersonVocation(s) {
  return joinSentences(
    `The heart of ${primaryName(s.name)}'s vocation was ${VOCATION_FOCUS[s.category] || "faithful service to Christ and neighbor"}.`,
    s.facts[2],
    `Sanctity here was not a single heroic hour but a pattern — prayer, sacraments, repentance, and love repeated until death.`,
    `Readers discerning their own call can ask which virtue in this life they most need: ${s.patronOf[0] ? `perhaps something connected to ${s.patronOf[0]}` : "perseverance under ordinary trials"}.`
  );
}

function buildPersonHistoricalContext(s) {
  return joinSentences(
    s.facts[3],
    `Assigning ${primaryName(s.name)} to ${formatDate(s.month, s.day)} lets the whole Church remember this witness on the same day each year — a rhythm older than national holidays.`,
    `When you read about this saint in ${formatDate(s.month, s.day)}, you join Catholics in every time zone who opened missals, school religion classes, and family prayer books for the same feast.`
  );
}

function buildPersonMiracles(s) {
  const patrons = patronList(s.patronOf);
  return joinSentences(
    `Catholics turn to ${primaryName(s.name)} because intercession is real in the communion of saints — those in heaven remain members of the Body of Christ.`,
    `Patron of ${patrons}, this saint is a frequent choice for novenas, parish festivals, and quiet prayers at kitchen tables.`,
    `Shrines and relics associated with ${primaryName(s.name)} continue to draw pilgrims; local customs (foods, processions, school plays) keep memory alive for children who may never read a formal biography.`
  );
}

function buildPersonPatronages(s) {
  const patrons = s.patronOf;
  return joinSentences(
    `${s.name} is invoked especially by those connected to ${patronList(patrons)}.`,
    `Patronage is not magic: the Church teaches that saints pray for us; they do not replace Christ.`,
    `On ${formatDate(s.month, s.day)}, name one intention aloud, pray an Our Father and Hail Mary, and perform one work of mercy linked to this saint's example.`,
    `Families sometimes choose a patron at baptism or confirmation; returning to that saint's feast day each year renews the bond.`
  );
}

function buildPersonLegacy(s) {
  return joinSentences(
    `${primaryName(s.name)} remains in missals, art, and parish names because holiness still attracts a world tired of cynicism.`,
    `Teachers can use this feast for a five-minute virtue lesson; pastors can mention the saint in the homily when the calendar aligns with local devotion.`,
    `The legacy is pastoral: a life that already reached heaven and now helps others get there.`
  );
}

function buildPersonHowToHonor(s) {
  const patrons = patronList(s.patronOf);
  return joinSentences(
    `Attend Mass on ${formatDate(s.month, s.day)} if possible — even a weekday memorial is a public act of communion with the whole Church.`,
    `Read one paragraph about ${primaryName(s.name)} aloud at dinner and ask who needs prayer for matters related to ${patrons}.`,
    `Choose one concrete act: visit a shrine online or in person, donate to a cause this saint cared about, or pray a decade of the Rosary for someone struggling.`,
    `If you cannot attend church, read the saint's entry in the Roman Martyrology or a trusted Catholic encyclopedia and make an act of spiritual communion.`
  );
}

// --- Liturgical feasts on the saint calendar (Nativity, solemnities) ---

function buildLiturgicalIntro(s) {
  return joinSentences(
    `${formatDate(s.month, s.day)} on the Catholic calendar centers on ${s.name} — ${s.titleHook}.`,
    s.facts[0],
    `This is not merely a historical anniversary but a solemn proclamation of faith celebrated in every Roman Rite parish that keeps the General Roman Calendar.`,
    `The sections below treat Scripture, doctrine, liturgy, and family observance separately so each adds new information.`
  );
}

function buildLiturgicalHistory(s) {
  return joinSentences(
    s.facts[1],
    s.facts[2],
    `The date ${formatDate(s.month, s.day)} places this mystery in the Church's annual cycle so believers rehearse salvation history rather than reading it once and moving on.`,
    `Lex orandi, lex credendi — the way the Church prays on this day is the way she teaches what she believes.`
  );
}

function buildLiturgicalTheology(s) {
  return joinSentences(
    s.facts[3],
    `Theology here is doxology: Catholics praise God for what he has done, not only study it.`,
    `Preachers on ${formatDate(s.month, s.day)} connect this feast to baptism, Eucharist, and moral life — showing that liturgy and ethics are one piece.`,
    `${s.titleHook} gives catechists a single sentence children can remember long after details fade.`
  );
}

function buildLiturgicalCelebration(s) {
  return joinSentences(
    `Parishes mark ${formatDate(s.month, s.day)} with proper readings, prayers, and often festive music when rubrics allow.`,
    `Check your parish bulletin for Mass times; solemnities may include Gloria, Creed, and extended processions or blessings.`,
    `In the United States, when this date is a Holy Day of Obligation, Catholics plan travel and work schedules around Mass — a countercultural witness in itself.`
  );
}

function buildLiturgicalDevotion(s) {
  return joinSentences(
    `Home customs on ${formatDate(s.month, s.day)} should echo the sanctuary: Scripture before meals, candles, hymns, or charitable giving tied to the mystery celebrated.`,
    `Ethnic parishes enrich the feast with foods and processions; the unity of faith expresses itself in legitimate diversity.`,
    `Avoid reducing the day to sentiment alone — the Church calls for conversion, joy, and mission flowing from what God has revealed.`
  );
}

function buildLiturgicalPatronages(s) {
  const patrons = patronList(s.patronOf);
  return joinSentences(
    `Devotion on this day often entrusts ${patrons} to the intercession of ${primaryName(s.name)} and the whole communion of saints.`,
    `Pray the Collect of the day from the Roman Missal — it condenses the Church's intention in authoritative language.`,
    `Families can bless children, renew baptismal promises, or read the Gospel account associated with this feast before bedtime.`
  );
}

function buildLiturgicalLegacy(s) {
  return joinSentences(
    `Every generation re-encounters ${s.name} on ${formatDate(s.month, s.day)} with new questions — suffering, hope, family fracture, or cultural hostility to faith.`,
    `The feast answers by pointing to God's action, not human achievement.`,
    `That is why calendar feasts remain among the most durable teachers in Catholic life: they return whether or not smartphones remind us.`
  );
}

function buildLiturgicalHowToHonor(s) {
  return joinSentences(
    `Begin with Mass when obligation or schedule allows; arrive early for silence before the opening hymn.`,
    `Read the day's Gospel the night before and discuss one phrase at table — formation beats elaborate programs.`,
    `Extend celebration through the octave or season when rubrics provide one; do not collapse the mystery into a single hour.`,
    `Perform one work of mercy: visit the sick, donate food, or forgive a family grudge as a living response to the feast.`
  );
}

function buildHighlights(s, liturgical) {
  const base = [
    `Feast date: ${formatDate(s.month, s.day)}`,
    liturgical ? `Liturgical observance: ${s.category}` : `Patron of ${patronList(s.patronOf)}`,
    `Origin / setting: ${s.origin}${s.lifespan ? ` (${s.lifespan})` : ""}`,
    ...s.facts,
  ];
  if (s.category === "doctor") base.push("Doctor of the Church — magisterial weight in theology");
  if (s.category === "martyr") base.push("Witness unto death for the faith");
  return [...new Set(base)].slice(0, 8);
}

function buildFaqs(s, prev, next, liturgical) {
  const patrons = patronList(s.patronOf);
  const faqs = liturgical
    ? [
        {
          question: `What does the Catholic Church celebrate on ${formatDate(s.month, s.day)}?`,
          answer: joinSentences(
            `On ${formatDate(s.month, s.day)}, Catholics celebrate ${s.name}.`,
            s.facts[0],
            s.facts[1]
          ),
        },
        {
          question: `Why is ${s.name} important in Catholic faith?`,
          answer: joinSentences(s.facts[2], s.facts[3], `${s.titleHook} summarizes the heart of the feast.`)
        },
        {
          question: `How should Catholics observe ${formatDate(s.month, s.day)}?`,
          answer: joinSentences(
            `Attend Mass when possible, read the proper Scripture texts, and mark the day at home with prayer and charity.`,
            `Check your diocese for Holy Day schedules if the date carries obligation in the United States.`
          ),
        },
      ]
    : [
        {
          question: `Who is the Catholic saint for ${formatDate(s.month, s.day)}?`,
          answer: joinSentences(
            `${s.name} is honored on ${formatDate(s.month, s.day)}.`,
            s.facts[0],
            `Catholics know ${primaryName(s.name)} as patron of ${patrons}.`
          ),
        },
        {
          question: `What is ${s.name} the patron saint of?`,
          answer: joinSentences(
            `${s.name} is patron of ${patrons}.`,
            `Faithful ask this saint's intercession in the communion of saints — a practice rooted in Scripture and Tradition.`
          ),
        },
        {
          question: `When is ${primaryName(s.name)}'s feast day?`,
          answer: joinSentences(
            `The feast of ${s.name} is ${formatDate(s.month, s.day)} each year on the Roman Catholic calendar.`,
            `The saint lived in ${s.origin} during ${s.lifespan}.`
          ),
        },
        {
          question: `Why is ${primaryName(s.name)} important in Catholic history?`,
          answer: joinSentences(s.facts[1], s.facts[2], `${s.titleHook} explains why the Church keeps this memory alive.`)
        },
      ];

  if (prev) {
    faqs.push({
      question: `Who was yesterday's saint of the day?`,
      answer: joinSentences(
        `On ${formatDate(prev.month, prev.day)}, the Church honors ${prev.name}.`,
        `See the full Saint of the Day calendar on Guide Catholic.`
      ),
    });
  } else if (next) {
    faqs.push({
      question: `Who is tomorrow's saint of the day?`,
      answer: joinSentences(
        `On ${formatDate(next.month, next.day)}, Catholics celebrate ${next.name}.`,
        `Browse all 365 dates on Guide Catholic's Saint of the Day hub.`
      ),
    });
  }
  return faqs.slice(0, 6);
}

function buildArticle(s, index, all) {
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const liturgical = isLiturgicalFeast(s);
  const feastDateLabel = formatDate(s.month, s.day);
  const title = liturgical
    ? `Saint of the Day (${feastDateLabel}): ${s.name} — ${s.titleHook}`
    : `Saint of the Day (${feastDateLabel}): ${s.name} — ${s.titleHook}`;

  const intro = liturgical ? buildLiturgicalIntro(s) : buildPersonIntro(s);
  const earlyLife = liturgical ? buildLiturgicalHistory(s) : buildPersonEarlyLife(s);
  const vocationAndMinistry = liturgical ? buildLiturgicalTheology(s) : buildPersonVocation(s);
  const historicalContext = liturgical ? buildLiturgicalCelebration(s) : buildPersonHistoricalContext(s);
  const miraclesAndDevotion = liturgical ? buildLiturgicalDevotion(s) : buildPersonMiracles(s);
  const patronages = liturgical ? buildLiturgicalPatronages(s) : buildPersonPatronages(s);
  const legacy = liturgical ? buildLiturgicalLegacy(s) : buildPersonLegacy(s);
  const howToHonorToday = liturgical ? buildLiturgicalHowToHonor(s) : buildPersonHowToHonor(s);
  const highlights = buildHighlights(s, liturgical);
  const faqs = buildFaqs(s, prev, next, liturgical);

  const readTime = estimateReadTime(
    intro,
    earlyLife,
    vocationAndMinistry,
    historicalContext,
    miraclesAndDevotion,
    patronages,
    legacy,
    howToHonorToday
  );

  const metaDescription = trimMeta(
    liturgical
      ? `Catholic calendar ${feastDateLabel}: ${s.name}. ${s.titleHook}. Scripture, Mass, meaning & how to celebrate explained.`
      : `Saint of the Day ${feastDateLabel}: ${s.name}. Patron of ${patronList(s.patronOf)}. Biography, history, devotion & how to honor the feast.`
  );
  const excerpt = trimMeta(`${s.name} (${feastDateLabel}) — ${s.titleHook}. ${s.facts[0]}`, 160);

  return {
    dayOfYear: dayOfYear(s.month, s.day),
    month: s.month,
    day: s.day,
    dateSlug: s.dateSlug,
    saintSlug: s.slug,
    name: s.name,
    contentType: liturgical ? "liturgical" : "person",
    title,
    metaDescription,
    excerpt,
    readTime,
    feastDateLabel,
    category: s.category,
    patronOf: s.patronOf,
    intro,
    earlyLife,
    vocationAndMinistry,
    historicalContext,
    miraclesAndDevotion,
    patronages,
    legacy,
    howToHonorToday,
    highlights,
    faqs,
  };
}

function buildSaintInterlinks(articles) {
  const map = {};
  for (const a of articles) {
    const url = `/blog/saint-of-the-day/${a.dateSlug}/`;
    map[a.name] = url;
    const short = a.name.replace(/^St\.\s+/, "Saint ");
    if (short !== a.name) map[short] = url;
    const first = primaryName(a.name);
    if (first !== a.name) map[first] = url;
  }
  return map;
}

const calendarPath = path.join(__dirname, "saints-of-day-calendar.json");
const saints = JSON.parse(fs.readFileSync(calendarPath, "utf8"));
if (saints.length !== 365) throw new Error(`Expected 365 saints, got ${saints.length}`);

const articles = saints.map((s, i) => buildArticle(s, i, saints));
console.log(`Built ${articles.length} saint-of-the-day articles`);

const interlinks = buildSaintInterlinks(articles);
fs.writeFileSync(
  path.join(root, "src/data/saintOfDayInterlinks.ts"),
  `/** Auto-generated — run scripts/generate-saint-of-day.mjs */
export const SAINT_OF_DAY_INTERLINK_MAP: Record<string, string> = ${JSON.stringify(interlinks, null, 2)};
`
);

fs.writeFileSync(
  path.join(root, "src/data/saintOfDayArticles.ts"),
  `/** Auto-generated — run scripts/generate-saint-of-day.mjs to regenerate */
import type { SaintOfDayArticleContent } from "@/lib/saintOfDaySlugs";

export const SAINT_OF_DAY_ARTICLES: SaintOfDayArticleContent[] = ${JSON.stringify(articles, null, 2)};

export const SAINT_OF_DAY_BY_DATE: Record<string, SaintOfDayArticleContent> = Object.fromEntries(
  SAINT_OF_DAY_ARTICLES.map((a) => [a.dateSlug, a])
);

export const SAINT_OF_DAY_BY_SLUG: Record<string, SaintOfDayArticleContent> = Object.fromEntries(
  SAINT_OF_DAY_ARTICLES.map((a) => [a.saintSlug, a])
);
`
);

const blogPosts = articles.map((a) => ({
  id: 4000 + a.dayOfYear,
  slug: `saint-of-the-day/${a.dateSlug}`,
  title: a.title,
  excerpt: a.excerpt,
  date: "2026-05-30",
  readTime: a.readTime,
  category: "Saint of the Day",
  icon: "Heart",
  bgColor: "bg-rose-50",
  iconColor: "text-rose-500",
}));

fs.writeFileSync(
  path.join(root, "src/data/saintOfDayBlogPosts.ts"),
  `/** Auto-generated — run scripts/generate-saint-of-day.mjs */
import { Heart, type LucideIcon } from "lucide-react";

export interface SaintOfDayBlogPostEntry {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export const SAINT_OF_DAY_BLOG_POSTS: SaintOfDayBlogPostEntry[] = ${JSON.stringify(blogPosts, null, 2).replace(/"icon": "Heart"/g, '"icon": Heart as LucideIcon')};
`
);

fs.writeFileSync(
  path.join(root, "scripts/saint-of-day-sitemap-urls.txt"),
  [
    `  <url><loc>https://guidecatholic.com/blog/saint-of-the-day/</loc><lastmod>2026-05-30</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>`,
    ...articles.map(
      (a) =>
        `  <url><loc>https://guidecatholic.com/blog/saint-of-the-day/${a.dateSlug}/</loc><lastmod>2026-05-30</lastmod><changefreq>yearly</changefreq><priority>0.85</priority></url>`
    ),
  ].join("\n")
);

console.log("Done. Run build to verify.");
