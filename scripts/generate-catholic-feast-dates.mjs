#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function trimMeta(s, max = 155) {
  if (!s || s.length <= max) return s || "";
  return s.slice(0, 152).replace(/\s+\S*$/, "") + "...";
}

function estimateReadTime(...texts) {
  const words = texts.join(" ").split(/\s+/).length;
  return `${Math.min(16, Math.max(9, Math.round(words / 220)))} min`;
}

const RANK_LABELS = {
  solemnity: "solemnity — among the highest ranks on the Catholic calendar",
  feast: "feast of the Lord or the Blessed Virgin Mary",
  memorial: "memorial observed throughout the Church",
  season: "seasonal milestone in the liturgical year",
  devotion: "widely practiced Catholic devotion tied to the calendar",
  holy_week: "sacred day in Holy Week leading to Easter",
  triduum: "day of the Easter Triduum — the holiest days of the year",
};

function buildIntro(f) {
  const rank = RANK_LABELS[f.rank] || "important date on the Catholic liturgical calendar";
  const when = f.isMoveable
    ? `celebrated on ${f.dateLabel}`
    : `observed each year on ${f.dateLabel}`;
  return `${f.name} is a ${rank} ${when}. ${f.facts[0]} Catholics in the United States and around the world mark this day with Mass, prayer, and customs that connect family life to the Church's public worship. Whether you are preparing for the liturgy, teaching faith formation, planning parish ministry, or searching "what is ${f.shortName} in the Catholic Church," this guide explains the biblical roots, theological meaning, liturgical celebration, and practical ways to honor the day. ${f.facts[1]} ${f.titleHook} captures why this date remains one of the most searched Catholic topics online — and why the Church keeps returning to it year after year.`;
}

function buildBiblicalRoots(f) {
  return `Sacred Scripture and Tradition together ground the celebration of ${f.name}. ${f.facts[2] || f.facts[1]} From the earliest centuries, Christians read the Old Testament through the lens of Christ — seeing prophecies fulfilled, types prefigured, and promises completed in the New Covenant. The Church does not invent feasts arbitrarily; she discerns in history and revelation where God has acted decisively for salvation. ${f.facts[3] || f.facts[0]} When Catholics celebrate ${f.shortName}, they join a chorus of believers across centuries who heard the same Word, received the same sacraments, and found in these mysteries a reason to hope, repent, and rejoice.`;
}

function buildTheology(f) {
  return `The theology of ${f.name} reaches into the heart of Catholic faith. ${f.facts[0]} Doctrine and devotion are never separate on the liturgical calendar: what the Church believes, she also celebrates. ${f.facts[2]} For catechists, the day offers a ready-made lesson in the Creed — not as abstract propositions but as living memory. For ordinary believers, it answers the question "why does this date matter?" with clarity: because God entered time, and the Church marks the moments when that presence became unmistakable. ${f.titleHook} is not nostalgia; it is an annual renewal of faith in what God has done and continues to do through Christ and the Holy Spirit.`;
}

function buildLiturgy(f) {
  const notes = f.liturgyNotes.join(" ");
  const color = f.liturgicalColor;
  return `Liturgically, ${f.name} belongs to the ${f.season} season and is celebrated with ${color} vestments and sacred furnishings where rubrics assign them. ${notes} The Roman Missal provides proper prayers — collect, prayer over the offerings, and post-communion — that express the unique grace of this day. Parishes may use particular readings, sequences, or hymns that Catholics recognize instantly: the same texts year after year form spiritual memory. ${f.facts[1]} Music ministers, lectors, and sacristans prepare differently for this date because the assembly expects the liturgy to look, sound, and feel like ${f.shortName}. Understanding these details helps the faithful participate consciously rather than passively — every response, every gesture, every silence is part of the Church's praise.`;
}

function buildTraditions(f) {
  const trads = f.traditions.join(" ");
  return `Popular piety has enriched ${f.name} with customs that extend from church to home. ${trads} These traditions are not superstition; they are the laity's way of living the feast when the dismissal sends them "to love and serve the Lord." Ethnic parishes in the United States — Irish, Polish, Mexican, Filipino, Italian, and many others — often preserve particular foods, processions, or blessings linked to this day. ${f.facts[3] || f.facts[2]} The Church approves devotions that harmonize with liturgy and rejects what contradicts faith; most longstanding customs fall in the first category. Families can adopt one or two practices without overwhelming their schedule: a special meal, a decade of the Rosary, a visit to church, or an act of charity in the spirit of the feast.`;
}

function buildHowToCelebrate(f) {
  return `For Catholics in the United States wondering how to celebrate ${f.shortName} practically, start with Mass — the summit and source of Christian life. ${f.holyDayUS ? `This date is a Holy Day of Obligation in the United States; Catholics are obliged to attend Mass unless legitimately impeded.` : `While not a Holy Day of Obligation on the U.S. calendar, attending Mass is the most fitting way to honor the feast when your parish schedule allows.`} Arrive early to pray, sing the hymns fully, and receive Communion with intention. At home, read the day's Gospel as a family and discuss one sentence that struck you. ${f.traditions[0]} Consider fasting or abstinence if the season calls for it (Lent, Advent penance, or Friday discipline). Share the meaning of the day with children using simple language — feasts teach faith better than lectures. If you cannot attend in person, many parishes livestream major solemnities; still make the day distinct from ordinary time through prayer and gratitude.`;
}

function buildHolyDay(f) {
  if (f.holyDayUS) {
    return `${f.name} is a Holy Day of Obligation in the United States — Catholics must attend Mass on the day itself or on the evening vigil where permitted, unless excused by serious reason (illness, caring for infants, distance, or other grave causes described in canon law and pastoral practice). When the feast falls on a Saturday or Monday, the U.S. bishops' conference has sometimes transferred or abrogated the obligation for specific days; always check your diocese's current calendar. Even when obligation is lifted, the solemnity retains full liturgical rank: Gloria, Creed, and proper readings are used. Confession before major feasts is a longstanding custom that prepares the soul to receive Christ in the Eucharist. If you are unsure about your obligation, your parish bulletin or diocesan website lists Holy Days for the current year.`;
  }
  if (f.rank === "solemnity") {
    return `Although ${f.name} is not on the United States list of Holy Days of Obligation, it remains a solemnity with the highest liturgical rank short of Easter and Christmas. That means Catholics should treat the day with special reverence: attending Mass if possible, resting from unnecessary work, and marking the feast at home. Moveable feasts such as this one shift dates each year; parish bulletins and the USCCB liturgical calendar announce the exact date well in advance. Pastors often schedule additional Masses or devotions because demand increases when the faithful recognize a solemnity's importance.`;
  }
  return `${f.name} is not a Holy Day of Obligation in the United States, but it remains spiritually significant within the ${f.season} season. Many Catholics choose to attend Mass, pray a novena, or observe customs associated with the day even without canonical obligation. ${f.isMoveable ? `Because this feast is moveable, confirm the date each year through your parish or the USCCB liturgical calendar.` : `The fixed date ${f.dateLabel} makes planning easier — mark your calendar and prepare as you would for any major family anniversary.`} School and parish catechists often build lessons around this date; participating reinforces the Church year rhythm for children and adults alike.`;
}

function buildWhyItMatters(f) {
  return `Why does ${f.name} still matter in the twenty-first century? Because secular calendars offer holidays without holiness, while the Church offers feasts that unite earth and heaven. ${f.facts[2]} ${f.facts[3] || f.facts[1]} In a culture of constant distraction, fixed and moveable feasts interrupt ordinary time and demand attention to God. ${f.titleHook} — the heart of this celebration — speaks to struggles Catholics actually face: grief, hope, guilt, joy, fear of death, longing for mercy. Returning to this date each liturgical cycle is not repetition for its own sake; it is formation. Every year the same mysteries, yet the believer is different — older, perhaps wounded or healed — and the feast meets them where they are. That is why Catholic feast days remain among the most searched religious topics in English: people hunger for meaning, and the Church answers with dates that remember God's saving acts.`;
}

function buildHighlights(f) {
  const items = [
    `Date: ${f.dateLabel}`,
    `Liturgical season: ${f.season}`,
    `Rank: ${f.rank}${f.holyDayUS ? " — Holy Day of Obligation (USA)" : ""}`,
    `Liturgical color: ${f.liturgicalColor}`,
    ...f.facts.slice(0, 2),
    f.traditions[0],
  ];
  return [...new Set(items)].slice(0, 7);
}

function buildFaqs(f, prev, next) {
  const faqs = [
    {
      question: `What is ${f.name} in the Catholic Church?`,
      answer: `${f.name} is ${RANK_LABELS[f.rank] || "an important liturgical celebration"} observed ${f.isMoveable ? f.dateLabel : `on ${f.dateLabel}`}. ${f.facts[0]} Catholics celebrate with Mass, prayer, and traditions such as ${f.traditions[0]?.toLowerCase() || "parish devotions"}.`,
    },
    {
      question: `When is ${f.shortName} celebrated?`,
      answer: `${f.shortName} is celebrated ${f.isMoveable ? `on a moveable date: ${f.dateLabel}. Check your parish bulletin each year for the exact date.` : `each year on ${f.dateLabel}.`}`,
    },
    {
      question: `Is ${f.shortName} a Holy Day of Obligation in the United States?`,
      answer: f.holyDayUS
        ? `Yes. ${f.name} is a Holy Day of Obligation for Catholics in the United States, requiring Mass attendance unless legitimately excused.`
        : `No. ${f.name} is not currently a Holy Day of Obligation on the U.S. calendar, though it remains an important feast and Catholics are encouraged to attend Mass.`,
    },
    {
      question: `How do Catholics celebrate ${f.shortName}?`,
      answer: `${f.traditions.join(" ")} The liturgy uses ${f.liturgicalColor} vestments and proper prayers for ${f.season}. ${f.liturgyNotes[0] || ""}`,
    },
    {
      question: `Why is ${f.shortName} important for Catholic faith?`,
      answer: `${f.facts[1]} ${f.facts[2]} Celebrating this date forms Catholics in doctrine and devotion year after year.`,
    },
  ];
  if (prev) {
    faqs.push({
      question: `What Catholic feast comes before ${f.shortName} in the liturgical year?`,
      answer: `In the Church calendar, ${prev.shortName} (${prev.dateLabel}) precedes this celebration. Explore the full guide at Guide Catholic's Catholic Feast Days hub.`,
    });
  }
  if (next) {
    faqs.push({
      question: `What Catholic feast comes after ${f.shortName}?`,
      answer: `Next in the liturgical sequence is ${next.shortName} (${next.dateLabel}). See the complete Catholic feast calendar on Guide Catholic.`,
    });
  }
  return faqs.slice(0, 6);
}

function buildArticle(f, index, all) {
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const title = `${f.name}: Catholic Feast Day Guide — ${f.titleHook}`;
  const intro = buildIntro(f);
  const biblicalRoots = buildBiblicalRoots(f);
  const theologicalMeaning = buildTheology(f);
  const liturgicalCelebration = buildLiturgy(f);
  const traditionsAndDevotions = buildTraditions(f);
  const howToCelebrate = buildHowToCelebrate(f);
  const holyDayAndMassObligation = buildHolyDay(f);
  const whyItMatters = buildWhyItMatters(f);
  const highlights = buildHighlights(f);
  const faqs = buildFaqs(f, prev, next);
  const readTime = estimateReadTime(
    intro,
    biblicalRoots,
    theologicalMeaning,
    liturgicalCelebration,
    traditionsAndDevotions,
    howToCelebrate,
    holyDayAndMassObligation,
    whyItMatters
  );
  const metaDescription = trimMeta(
    `Catholic feast day guide: ${f.name} (${f.dateLabel}). ${f.titleHook}. Mass in the USA, traditions, liturgy & meaning explained.`
  );
  const excerpt = trimMeta(
    `${f.name} — ${f.titleHook}. ${f.facts[0]}`,
    160
  );

  return {
    sortOrder: f.sortOrder,
    slug: f.slug,
    name: f.name,
    shortName: f.shortName,
    dateLabel: f.dateLabel,
    month: f.month,
    day: f.day,
    isMoveable: f.isMoveable,
    rank: f.rank,
    holyDayUS: f.holyDayUS,
    liturgicalColor: f.liturgicalColor,
    season: f.season,
    titleHook: f.titleHook,
    title,
    metaDescription,
    excerpt,
    readTime,
    intro,
    biblicalRoots,
    theologicalMeaning,
    liturgicalCelebration,
    traditionsAndDevotions,
    howToCelebrate,
    holyDayAndMassObligation,
    whyItMatters,
    highlights,
    faqs,
  };
}

function buildInterlinks(articles) {
  const map = {};
  for (const a of articles) {
    map[a.name] = `/blog/catholic-feast-days/${a.slug}/`;
    map[a.shortName] = `/blog/catholic-feast-days/${a.slug}/`;
    if (a.name.includes("—")) {
      map[a.name.split("—")[0].trim()] = `/blog/catholic-feast-days/${a.slug}/`;
    }
  }
  map["Catholic feast days"] = "/blog/catholic-feast-days/";
  map["liturgical calendar"] = "/blog/catholic-feast-days/";
  map["Holy Day of Obligation"] = "/blog/catholic-feast-days/immaculate-conception/";
  return map;
}

// --- Main ---
const feasts = JSON.parse(
  fs.readFileSync(path.join(__dirname, "catholic-feast-dates-calendar.json"), "utf8")
);
if (feasts.length !== 55) throw new Error(`Expected 55 feasts, got ${feasts.length}`);

const articles = feasts.map((f, i) => buildArticle(f, i, feasts));
console.log(`Built ${articles.length} Catholic feast date articles`);

const interlinks = buildInterlinks(articles);
fs.writeFileSync(
  path.join(root, "src/data/catholicFeastDateInterlinks.ts"),
  `/** Auto-generated — run scripts/generate-catholic-feast-dates.mjs */
export const CATHOLIC_FEAST_DATE_INTERLINK_MAP: Record<string, string> = ${JSON.stringify(interlinks, null, 2)};
`
);

fs.writeFileSync(
  path.join(root, "src/data/catholicFeastDateArticles.ts"),
  `/** Auto-generated — run scripts/generate-catholic-feast-dates.mjs */
import type { CatholicFeastDateArticleContent } from "@/lib/catholicFeastDateSlugs";

export const CATHOLIC_FEAST_DATE_ARTICLES: CatholicFeastDateArticleContent[] = ${JSON.stringify(articles, null, 2)};

export const CATHOLIC_FEAST_DATE_BY_SLUG: Record<string, CatholicFeastDateArticleContent> = Object.fromEntries(
  CATHOLIC_FEAST_DATE_ARTICLES.map((a) => [a.slug, a])
);
`
);

const blogPosts = articles.map((a) => ({
  id: 5000 + a.sortOrder,
  slug: `catholic-feast-days/${a.slug}`,
  title: a.title,
  excerpt: a.excerpt,
  date: "2026-05-30",
  readTime: a.readTime,
  category: "Catholic Feast Days",
  icon: "Calendar",
  bgColor: "bg-violet-50",
  iconColor: "text-violet-600",
}));

fs.writeFileSync(
  path.join(root, "src/data/catholicFeastDateBlogPosts.ts"),
  `/** Auto-generated — run scripts/generate-catholic-feast-dates.mjs */
import { Calendar, type LucideIcon } from "lucide-react";

export interface CatholicFeastDateBlogPostEntry {
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

export const CATHOLIC_FEAST_DATE_BLOG_POSTS: CatholicFeastDateBlogPostEntry[] = ${JSON.stringify(blogPosts, null, 2).replace(/"icon": "Calendar"/g, '"icon": Calendar as LucideIcon')};
`
);

fs.writeFileSync(
  path.join(root, "scripts/catholic-feast-dates-sitemap-urls.txt"),
  [
    `  <url><loc>https://guidecatholic.com/blog/catholic-feast-days/</loc><lastmod>2026-05-30</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`,
    ...articles.map(
      (a) =>
        `  <url><loc>https://guidecatholic.com/blog/catholic-feast-days/${a.slug}/</loc><lastmod>2026-05-30</lastmod><changefreq>yearly</changefreq><priority>0.88</priority></url>`
    ),
  ].join("\n")
);

console.log("Done.");
