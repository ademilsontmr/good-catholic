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

function ensurePeriod(s) {
  const t = (s || "").trim();
  if (!t) return "";
  return t.endsWith(".") ? t : `${t}.`;
}

function joinSentences(...parts) {
  return parts.filter(Boolean).map(ensurePeriod).join(" ");
}

function formatList(items) {
  const list = items.filter(Boolean);
  if (list.length === 0) return "";
  if (list.length === 1) return ensurePeriod(list[0]);
  const body = list.slice(0, -1).map((item) => ensurePeriod(item).replace(/\.$/, ""));
  const last = list[list.length - 1].trim().replace(/\.$/, "");
  return `${body.join("; ")}; and ${last}.`;
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

function rankWithArticle(rank) {
  const label = RANK_LABELS[rank] || "important date on the Catholic liturgical calendar";
  if (/^(solemnity|feast|memorial|seasonal|widely|sacred|day)/.test(label)) {
    return `a ${label}`;
  }
  return `an ${label}`;
}

function whenPhrase(f) {
  return f.isMoveable
    ? `celebrated on ${f.dateLabel}`
    : `observed each year on ${f.dateLabel}`;
}

const SEASON_WHY = {
  Advent:
    "Advent interrupts the rush toward consumption with prophecy, silence, and longing — skills almost no secular app teaches.",
  Christmas:
    "When retail Christmas ends on December 26, the Church's Christmas season continues, insisting that incarnation is not a one-day sale but a mystery worth an octave.",
  Lent:
    "Culture offers detox programs; Lent offers repentance, almsgiving, and prayer rooted in baptism — a far deeper reset than any wellness trend.",
  "Holy Week":
    "Holy Week refuses to let the Passion be reduced to a long weekend; the Church walks day by day through betrayal, cross, and tomb.",
  Easter:
    "Easter proclaims that death is not the final word — a claim smartphones and headlines challenge hourly.",
  Pentecost:
    "Pentecost reminds a fragmented world that the Spirit creates communion, not merely individual spirituality.",
  "Ordinary Time":
    "Ordinary Time is when discipleship is practiced without seasonal spotlight — the steady work of living what Christmas and Easter proclaim.",
};

const SEASON_CELEBRATE = {
  Advent:
    "Keep Advent penitential unless the day is Gaudete Sunday; violet tones and restrained festivity help children feel the season's arc toward Christmas.",
  Christmas:
    "During the Christmas season, extend celebration beyond a single meal — display the crèche through Epiphany and keep Christmas hymns in family prayer.",
  Lent:
    "Honor Lenten fast and abstinence on the days the Church requires; even festive memorials within Lent retain a sober tone unless the rubrics specify otherwise.",
  "Holy Week":
    "Holy Week calls for clearing unnecessary commitments so you can attend the Triduum liturgies that cannot be replicated at home.",
  Easter:
    "The fifty days of Easter favor joy, alleluia, and mercy — resist collapsing the season back into ordinary routines on Easter Monday.",
  Pentecost:
    "The Pentecost novena and confirmandi in many parishes make this season ideal for praying explicitly for the gifts of the Holy Spirit.",
  "Ordinary Time":
    "Use Ordinary Time to build one sustainable habit — daily Gospel reading, a weekly holy hour, or regular confession.",
};

function buildDirectAnswer(f) {
  const holyDay =
    f.holyDayUS
      ? "It is a Holy Day of Obligation in the United States."
      : "It is not a U.S. Holy Day of Obligation, though Catholics are encouraged to attend Mass.";
  return joinSentences(
    `${f.name} is ${rankWithArticle(f.rank)} ${whenPhrase(f)}`,
    f.facts[0],
    holyDay
  );
}

function buildIntro(f) {
  return joinSentences(
    `${f.titleHook} — that is the spiritual lens Catholics use when ${f.shortName} arrives each year in the ${f.season} season.`,
    `This guide answers what the feast means, what happens at Mass, which traditions American families keep, and how the day fits the wider liturgical calendar.`,
    f.facts[1]
  );
}

function buildScriptureAndTradition(f) {
  return joinSentences(
    `Scripture and Tradition anchor ${f.shortName}; the Church does not celebrate arbitrary anniversaries.`,
    f.facts[2],
    f.facts[3],
    `The Roman Missal's prayers for this day translate doctrine into speech the assembly can pray together — a catechism sung and spoken.`,
    `When homilists connect the readings to current events, they follow a patristic habit: the Bible is always read in light of Christ and the Church he founded.`
  );
}

function buildBiblicalRoots(f) {
  const eraNote = {
    Advent: "Advent sermons from the fourth century already sounded themes of watchfulness that modern parishes still preach.",
    Christmas: "Christmas homilies of St. Leo the Great and St. Augustine shaped how the West understands the Incarnation.",
    Lent: "Lenten catechesis in the early Church prepared catechumens for baptism at Easter — a pattern RCIA still mirrors.",
    "Holy Week": "Holy Week liturgies developed in Jerusalem pilgrimage practice before spreading to Rome and the world.",
    Easter: "Easter is the feast of feasts because the Resurrection is the cornerstone of Christian faith (1 Cor 15:14).",
    Pentecost: "Pentecost reverses Babel: one Spirit, many tongues, one Church.",
    "Ordinary Time": "Ordinary Time unfolds the public ministry of Christ Sunday by Sunday in semi-continuous Gospels.",
  }[f.season];

  return joinSentences(
    eraNote || `The ${f.season} season gives ${f.shortName} its liturgical color and context.`,
    `Historians of liturgy trace how local churches kept memory alive until feasts entered the universal calendar.`,
    `When you celebrate ${f.shortName}, you stand in continuity with communities that preserved faith through persecution, migration, and renewal.`
  );
}

function buildTheology(f) {
  const rankNote = {
    solemnity: "Solemnities proclaim mysteries at the heart of the Creed — worthy of Gloria, Creed, and the Church's highest ceremonial.",
    feast: "Feasts of the Lord or the Blessed Virgin highlight particular facets of Christ's work or Mary's cooperation in salvation.",
    memorial: "Memorials insert a saint or mystery into the seasonal flow of prayer, teaching that holiness takes concrete form in real lives.",
    season: "Seasonal milestones orient the entire year — they teach Catholics how to wait, rejoice, repent, or persevere.",
    devotion: "Calendar devotions keep doctrine tactile — candles, processions, and novenas that children can see and remember.",
    holy_week: "Holy Week theology is Christological and paschal: every day discloses a facet of the one saving Passion.",
    triduum: "Triduum theology is Eucharistic and paschal — baptism, sacrifice, and resurrection held in three inseparable days.",
  }[f.rank];

  return joinSentences(
    `Liturgy and doctrine are inseparable: what Catholics celebrate on ${f.shortName}, they are invited to believe more deeply.`,
    f.facts[0],
    rankNote,
    `Catechists can build one session from the collect and Gospel alone; parents can explain the feast with a single sentence drawn from ${f.titleHook}.`,
    `The day is not nostalgia — it is the Church's annual invitation to let this mystery reshape conscience and hope.`
  );
}

function buildLiturgy(f) {
  const notes = f.liturgyNotes.map(ensurePeriod).join(" ");
  const moveableNote = f.isMoveable
    ? "Because the date is moveable, musicians and sacristans confirm the Ordo entry each year before printing worship aids."
    : `The fixed date (${f.dateLabel}) allows parishes to publish music lists and minister schedules well in advance.`;

  return joinSentences(
    `${f.name} is celebrated in the ${f.season} season with ${f.liturgicalColor} vestments unless rubrics direct otherwise.`,
    notes,
    `The Roman Missal assigns proper collects and prefaces that belong only to this observance — worth reading aloud at home before Mass.`,
    moveableNote,
    `Participating consciously — following the Roman Missal responses, listening to the homily, and noting one phrase from the Eucharistic Prayer — transforms attendance from routine into formation.`
  );
}

function buildTraditions(f) {
  return joinSentences(
    `Popular devotions for ${f.shortName} extend worship into the home without replacing the Eucharist.`,
    formatList(f.traditions),
    `Multicultural parishes in the United States often add regional customs — foods, processions, or blessings — that express the same faith in different accents.`,
    `The Church evaluates piety by harmony with liturgy and Scripture; longstanding customs that pass that test deserve pride of place in family life.`,
    `Choose one or two practices your household can repeat annually; depth beats novelty every time.`
  );
}

function buildHowToCelebrate(f) {
  const massNote = f.holyDayUS
    ? `${f.shortName} is a Holy Day of Obligation in the United States. Schedule Mass on the feast day or an authorized vigil, and verify your diocese's calendar if the date falls near a weekend.`
    : `${f.shortName} is not a U.S. Holy Day of Obligation, but attending Mass when your parish offers it remains the most fitting centerpiece of the day.`;

  return joinSentences(
    massNote,
    `Read the day's Gospel the night before and bring one question to church — engagement starts before the opening hymn.`,
    f.traditions[0],
    SEASON_CELEBRATE[f.season] || SEASON_CELEBRATE["Ordinary Time"],
    `If illness or travel prevents church attendance, read the Mass texts from the USCCB website, pray a decade of the Rosary, and make an act of spiritual communion — then return in person when possible.`,
    `Invite children to draw or narrate one symbol from the feast; ${f.season} formation sticks when it is simple and repeated.`
  );
}

function buildHolyDay(f) {
  if (f.holyDayUS) {
    return joinSentences(
      `${f.name} binds Catholics in the United States to Mass on the feast itself or at an evening vigil where the diocese permits anticipation.`,
      `Legitimate excuses — serious illness, caring for infants, impeded travel — remain pastoral realities; priests and parish staff can clarify edge cases.`,
      `When a solemnity falls on Saturday or Monday, the bishops' conference may transfer or suspend the obligation; always read your diocesan decree for the current year.`,
      `Even when obligation is dispensed, the feast keeps full liturgical rank: proper readings, Gloria where required, and Creed on solemnities.`,
      `Confession before major feasts is a classic preparation to receive Communion with a quiet conscience.`
    );
  }
  if (f.rank === "solemnity") {
    return joinSentences(
      `${f.name} is not listed among U.S. Holy Days of Obligation, yet it retains solemnity rank — the highest ordinary celebration short of Easter and Christmas.`,
      `Catholics should still prioritize Mass, rest from unnecessary work, and mark the day at home when pastoral schedules allow extra liturgies.`,
      f.isMoveable
        ? `Moveable dating means your parish bulletin and the USCCB calendar are the authoritative sources each year.`
        : `The stable date ${f.dateLabel} makes long-range planning easier for families and RCIA teams.`,
      `Pastors often add confessions, novenas, or processions when the faithful request them — your presence encourages that ministry.`
    );
  }
  return joinSentences(
    `${f.name} is not a Holy Day of Obligation in the United States but remains spiritually significant within ${f.season}.`,
    `Many Catholics attend Mass, pray novenas, or keep local customs even without canonical requirement.`,
    f.isMoveable
      ? `Confirm the exact date annually through your parish or diocesan Ordo.`
      : `Mark ${f.dateLabel} on household calendars as you would a baptism anniversary — a fixed anchor in the year.`,
    `Catechists frequently build lessons around this date; participating reinforces the Church year rhythm for children and adults alike.`
  );
}

function buildWhyItMatters(f) {
  return joinSentences(
    SEASON_WHY[f.season] || SEASON_WHY["Ordinary Time"],
    `${f.titleHook} speaks to concrete struggles — grief, gratitude, fear, reconciliation — that do not expire because the calendar turns.`,
    `Returning to ${f.shortName} each cycle is formation, not redundancy: the mystery is stable, the believer is not.`,
    `English-speaking Catholics search feast-day guides in huge numbers because they want time sanctified by God, not only managed by apps — the Church's calendar answers that hunger with dates that remember salvation history.`
  );
}

function buildHighlights(f) {
  return [
    `Date: ${f.dateLabel}`,
    `Liturgical season: ${f.season}`,
    `Rank: ${f.rank.replace(/_/g, " ")}${f.holyDayUS ? " — Holy Day of Obligation (USA)" : ""}`,
    `Liturgical color: ${f.liturgicalColor}`,
    ...f.facts,
  ];
}

function buildFaqs(f, prev, next) {
  const rankLabel = rankWithArticle(f.rank);
  const faqs = [
    {
      question: `What is ${f.name} in the Catholic Church?`,
      answer: joinSentences(
        `${f.name} is ${rankLabel}.`,
        f.isMoveable
          ? `It is ${whenPhrase(f)}.`
          : `It is observed each year on ${f.dateLabel}.`,
        f.facts[0],
        `Catholics honor it through Mass, prayer, and customs such as: ${formatList(f.traditions).replace(/\.$/, "")}.`
      ),
    },
    {
      question: `When is ${f.shortName} celebrated?`,
      answer: f.isMoveable
        ? joinSentences(
            `${f.shortName} follows a moveable schedule: ${f.dateLabel}.`,
            `Check your parish bulletin or diocesan Ordo each year for the exact date and Mass times.`
          )
        : joinSentences(
            `${f.shortName} is celebrated each year on ${f.dateLabel}.`,
            `The fixed date makes it easy to plan travel, choir rehearsals, and family gatherings around parish liturgies.`
          ),
    },
    {
      question: `Is ${f.shortName} a Holy Day of Obligation in the United States?`,
      answer: f.holyDayUS
        ? joinSentences(
            `Yes. ${f.name} is a Holy Day of Obligation for Catholics in the United States.`,
            `Faithful are required to attend Mass unless legitimately excused; verify diocesan transfers when the feast falls near a weekend.`
          )
        : joinSentences(
            `No. ${f.name} is not currently a Holy Day of Obligation on the U.S. calendar.`,
            `It remains an important feast within ${f.season}, and Catholics are encouraged to attend Mass when available.`
          ),
    },
    {
      question: `How do Catholics celebrate ${f.shortName}?`,
      answer: joinSentences(
        formatList(f.traditions),
        `At Mass, ${f.liturgyNotes.map(ensurePeriod).join(" ")}`
      ),
    },
    {
      question: `Why is ${f.shortName} important for Catholic faith?`,
      answer: joinSentences(
        f.facts[1],
        f.facts[2],
        `${f.titleHook} summarizes why the Church keeps returning to this observance in every generation.`
      ),
    },
  ];
  if (prev) {
    faqs.push({
      question: `What Catholic feast comes before ${f.shortName} in the liturgical year?`,
      answer: joinSentences(
        `${prev.shortName} (${prev.dateLabel}) precedes ${f.shortName} in the liturgical sequence.`,
        `See the full calendar at Guide Catholic's Catholic Feast Days hub.`
      ),
    });
  } else if (next) {
    faqs.push({
      question: `What Catholic feast comes after ${f.shortName}?`,
      answer: joinSentences(
        `${next.shortName} (${next.dateLabel}) follows in the liturgical sequence.`,
        `Browse all dates on Guide Catholic's Catholic Feast Days hub.`
      ),
    });
  }
  return faqs.slice(0, 6);
}

function buildArticle(f, index, all) {
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const title = `${f.name}: Catholic Feast Day Guide — ${f.titleHook}`;
  const directAnswer = buildDirectAnswer(f);
  const intro = buildIntro(f);
  const scriptureAndTradition = buildScriptureAndTradition(f);
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
    directAnswer,
    intro,
    scriptureAndTradition,
    biblicalRoots,
    theologicalMeaning,
    liturgicalCelebration,
    traditionsAndDevotions,
    howToCelebrate,
    holyDayAndMassObligation,
    whyItMatters
  );
  const metaDescription = trimMeta(
    `Catholic feast day guide: ${f.name} (${f.dateLabel}). ${f.titleHook}. Scripture, Mass, traditions & U.S. Holy Day rules explained.`
  );
  const excerpt = trimMeta(`${f.name} — ${f.titleHook}. ${f.facts[0]}`, 160);

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
    directAnswer,
    intro,
    scriptureAndTradition,
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
  path.join(root, "src/data/catholicFeastDateArticles.ts"),
  `/** Auto-generated — run scripts/generate-catholic-feast-dates.mjs */
import type { CatholicFeastDateArticleContent } from "@/lib/catholicFeastDateSlugs";

export const CATHOLIC_FEAST_DATE_ARTICLES: CatholicFeastDateArticleContent[] = ${JSON.stringify(articles, null, 2)};

export const CATHOLIC_FEAST_DATE_BY_SLUG: Record<string, CatholicFeastDateArticleContent> = Object.fromEntries(
  CATHOLIC_FEAST_DATE_ARTICLES.map((a) => [a.slug, a])
);
`
);

fs.writeFileSync(
  path.join(root, "src/data/catholicFeastDateInterlinks.ts"),
  `/** Auto-generated — run scripts/generate-catholic-feast-dates.mjs */
export const CATHOLIC_FEAST_DATE_INTERLINK_MAP: Record<string, string> = ${JSON.stringify(interlinks, null, 2)};
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
