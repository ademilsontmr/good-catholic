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
  const mins = Math.min(14, Math.max(8, Math.round(words / 220)));
  return `${mins} min`;
}

function patronList(patrons) {
  if (patrons.length === 1) return patrons[0];
  if (patrons.length === 2) return `${patrons[0]} and ${patrons[1]}`;
  return `${patrons.slice(0, -1).join(", ")}, and ${patrons[patrons.length - 1]}`;
}

const CATEGORY_LABELS = {
  martyr: "martyr and witness to the faith",
  confessor: "confessor and servant of the Church",
  virgin: "consecrated virgin and model of holiness",
  doctor: "Doctor of the Church and master of theology",
  apostle: "apostle and pillar of the early Church",
  solemnity: "solemnity of the universal Church",
  memorial: "memorial on the Catholic calendar",
  feast: "feast day celebrated throughout the Church",
};

const ERA_CONTEXT = {
  martyr: (name, origin) =>
    `${name} lived in an age when professing Christianity could cost one's life. Martyrs like ${name.split(" and ")[0]} remind Catholics that the faith was purchased in blood — and that witness under persecution remains the highest form of discipleship.`,
  confessor: (name, origin) =>
    `${name} served the Church during a period when bishops, monks, and missionaries were reshaping Christian civilization across ${origin.includes(",") ? origin.split(",").pop().trim() : origin}. Confessors who never shed blood for Christ nonetheless transformed entire regions through preaching, charity, and institutional reform.`,
  virgin: (name, origin) =>
    `In the patristic and medieval Church, consecrated virgins like ${name.split(" and ")[0]} embodied the Church as Bride of Christ. Their renunciation of marriage for the sake of the Kingdom challenged worldly values and inspired generations of women and men to pursue radical holiness.`,
  doctor: (name, origin) =>
    `${name} belongs to the small company of Doctors of the Church — saints whose theological writings carry magisterial weight centuries after their death. Their era demanded clarity amid heresy, and their pens became instruments of orthodoxy.`,
  apostle: (name, origin) =>
    `${name} walked in the shadow of the Resurrection, when the Gospel was still spreading from Jerusalem to the ends of the earth. Apostolic saints connect every Catholic today to the living memory of those who knew Christ or were commissioned directly by the Twelve.`,
  solemnity: (name, origin) =>
    `Solemnities rank among the highest celebrations on the Catholic liturgical calendar. Honoring ${name} on this day unites the universal Church in a feast that interrupts ordinary time and calls the faithful to deeper contemplation of the mysteries of salvation.`,
  memorial: (name, origin) =>
    `Memorials like this one invite Catholics to pause in the rhythm of ordinary time and draw inspiration from a particular saint whose life illuminates some facet of the Gospel. ${name} offers a model of holiness accessible to believers in every century.`,
  feast: (name, origin) =>
    `Feast days mark moments when the Church celebrates not only a saint's virtue but the action of grace in history. The feast of ${name.split(" and ")[0]} has been kept for generations, preserving memory and devotion across cultures and continents.`,
};

function buildIntro(s) {
  const cat = CATEGORY_LABELS[s.category] || "saint honored on the Catholic calendar";
  const patrons = patronList(s.patronOf);
  return `${s.name} is the Catholic Saint of the Day for ${formatDate(s.month, s.day)} — a ${cat} whose intercession Catholics seek especially as patron of ${patrons}. ${s.facts[0]} On this feast, parishes, schools, and families around the world remember ${s.name.split(" and ")[0]} through Mass, prayer, and acts of charity aligned with this saint's legacy. Whether you discovered this page searching for today's saint, preparing a homily, or deepening your devotional life, this guide offers a complete biography: origins in ${s.origin}, key moments from ${s.lifespan}, and the reasons this holy figure remains among the most beloved saints in Catholic tradition. ${s.facts[1] || ""}`.trim();
}

function buildEarlyLife(s) {
  const f2 = s.facts[1] || s.facts[0];
  const f3 = s.facts[2] || "";
  return `${s.name} was associated with ${s.origin} during the period ${s.lifespan}. Early biographical details vary by source — hagiography, local tradition, and historical records sometimes blend — but the Church's recognition of this saint rests on a consistent core of witness and virtue. ${f2} From youth or early adulthood, ${s.name.split(" and ")[0]} showed the qualities that would later define a life of holiness: courage, humility, zeal for God, and love of neighbor. ${f3} Understanding where and when this saint lived helps modern readers grasp why particular struggles — persecution, poverty, theological controversy, or missionary frontier — shaped their path to sanctity. Catholics honor not only the destination (canonization and feast day) but the ordinary steps of conversion, discipline, and trust in Providence that preceded it.`;
}

function buildVocation(s) {
  const f0 = s.facts[0];
  const f3 = s.facts[3] || s.facts[2] || s.facts[1];
  const role =
    s.category === "martyr"
      ? "bearing witness unto death"
      : s.category === "doctor"
        ? "teaching, writing, and defending Catholic doctrine"
        : s.category === "virgin"
          ? "consecrated life and prayer"
          : s.category === "apostle"
            ? "evangelization and church-building"
            : "service to the Church and the poor";
  return `The vocation of ${s.name} unfolded through ${role}. ${f0} Whether as priest, religious, lay apostle, or bishop, this saint answered a call that demanded sacrifice — leaving home, accepting ridicule, enduring illness, or facing violence. ${f3} Catholic hagiography preserves stories of specific decisions: entering a monastery, founding a congregation, converting from paganism, defending the oppressed, or crossing continents as a missionary. These choices matter because they show sanctity is not accidental; it is the fruit of repeated yes to grace. Devotees of ${s.name.split(" and ")[0]} often find in these episodes a mirror for their own vocational discernment — proof that God writes straight with crooked lines and that holiness is possible in every state of life.`;
}

function buildHistoricalContext(s) {
  const opener = ERA_CONTEXT[s.category]?.(s.name, s.origin) ||
    `${s.name} lived during a formative era in Catholic history, when Church and culture were intertwined in ways that shaped doctrine, worship, and daily piety across ${s.origin}.`;
  const f4 = s.facts[s.facts.length - 1] || s.facts[0];
  return `${opener} The lifespan ${s.lifespan} places this saint within concrete historical currents — empire and collapse, reformation and renewal, plague and pilgrimage — that no biography can ignore. ${f4} When Catholics celebrate this feast on ${formatDate(s.month, s.day)}, they connect personal prayer to centuries of collective memory. The General Roman Calendar and national calendars assign saints to particular dates so the whole Church year becomes a procession of holiness, each day offering a new intercessor and a new lesson in the Gospel lived boldly.`;
}

function buildMiraclesAndDevotion(s) {
  const patrons = patronList(s.patronOf);
  const facts = s.facts.slice(0, 3);
  return `Devotion to ${s.name} has flourished because the faithful experience this saint as a powerful intercessor before God. Patron of ${patrons}, ${s.name.split(" and ")[0]} is invoked in novenas, parish feast-day celebrations, and private prayer — especially by those who see their struggles reflected in this saint's life. ${facts.join(" ")} Shrines, relics, and icons associated with this saint attract pilgrims seeking healing, guidance, and conversion. Popular piety sometimes preserves customs linked to this feast: special foods, processions, school celebrations, or charitable collections for the causes this saint championed. The Church distinguishes between public revelation and private devotion, yet countless Catholics testify that praying through ${s.name.split(" and ")[0]} opened doors when human effort alone failed. That living tradition — not merely historical curiosity — is why "Saint of the Day" features remain among the most searched Catholic topics online.`;
}

function buildPatronages(s) {
  const patrons = s.patronOf;
  return `${s.name} is widely invoked as patron of ${patronList(patrons)}. Patron saints function in Catholic spirituality as elder siblings in faith: they have triumphed, they understand human weakness, and they present our needs before Christ. Choosing ${s.name.split(" and ")[0]} as a heavenly advocate is never superstition; it is the communion of saints made practical. ${patrons[0].charAt(0).toUpperCase() + patrons[0].slice(1)} find particular comfort under this patronage, but the Church's calendar teaches that every saint overflows with grace for anyone who asks. On ${formatDate(s.month, s.day)}, consider entrusting a specific intention — health, employment, conversion of a loved one, peace in your nation — to ${s.name}. Many Catholics also name children, parishes, or apostolates after their patron saint, creating a lifelong bond of prayer and imitation.`;
}

function buildLegacy(s) {
  const fLast = s.facts[s.facts.length - 1];
  const fMid = s.facts[Math.floor(s.facts.length / 2)] || s.facts[0];
  return `The legacy of ${s.name} extends far beyond a single feast on ${formatDate(s.month, s.day)}. ${fMid} ${fLast} Popes, councils, and local churches have confirmed this saint's importance through canonization, liturgical ranking, and the inclusion of their name in missals worldwide. Artists, composers, and writers continue to depict ${s.name.split(" and ")[0]} because holiness is attractive — it answers the deepest hunger of the human heart. For catechists and parents, this saint offers ready-made material: a story of virtue, a date to circle on the calendar, and a name to invoke at bedtime. For scholars, the same life opens windows into the history of ${s.origin} and the development of Catholic spirituality. In every case, the legacy is the same: ${s.name} still leads souls to Christ.`;
}

function buildHighlights(s) {
  const items = [
    `Feast day: ${formatDate(s.month, s.day)} on the Catholic calendar`,
    `Patron of ${patronList(s.patronOf)}`,
    `Origin: ${s.origin} (${s.lifespan})`,
    ...s.facts.slice(0, 2),
  ];
  if (s.category === "doctor") items.push("Honored as a Doctor of the Church for theological writings");
  if (s.category === "martyr") items.push("Martyred for refusing to renounce the Catholic faith");
  if (s.category === "solemnity") items.push("Celebrated as a solemnity — among the highest liturgical ranks");
  return [...new Set(items)].slice(0, 6);
}

function buildFaqs(s, prev, next) {
  const patrons = patronList(s.patronOf);
  const faqs = [
    {
      question: `Who is the Catholic saint for ${formatDate(s.month, s.day)}?`,
      answer: `${s.name} is honored as the Saint of the Day on ${formatDate(s.month, s.day)}. ${s.facts[0]} Catholics celebrate this feast with Mass, prayer, and devotion to ${s.name.split(" and ")[0]} as patron of ${patrons}.`,
    },
    {
      question: `What is ${s.name} the patron saint of?`,
      answer: `${s.name} is patron of ${patrons}. The faithful invoke this saint for intercession in needs related to these areas, trusting in the communion of saints taught by the Catholic Church.`,
    },
    {
      question: `When is ${s.name}'s feast day?`,
      answer: `The feast day of ${s.name} is ${formatDate(s.month, s.day)} each year on the Roman Catholic calendar. On this date, the Church remembers ${s.name.split(" and ")[0]} (${s.lifespan}) and encourages imitation of their virtues.`,
    },
    {
      question: `Why is ${s.name} important in Catholic history?`,
      answer: `${s.facts[1] || s.facts[0]} ${s.facts[2] || ""} As a ${CATEGORY_LABELS[s.category] || "saint"}, ${s.name.split(" and ")[0]} continues to inspire Catholics worldwide through liturgy, art, and popular devotion.`,
    },
  ];
  if (prev) {
    faqs.push({
      question: `What was yesterday's saint of the day?`,
      answer: `On ${formatDate(prev.month, prev.day)}, the Catholic Church honors ${prev.name}. Read the full biography at the Saint of the Day calendar on Guide Catholic.`,
    });
  }
  if (next) {
    faqs.push({
      question: `Who is tomorrow's saint of the day?`,
      answer: `On ${formatDate(next.month, next.day)}, Catholics celebrate ${next.name}. Visit the Saint of the Day hub for the complete calendar of 365 famous saints.`,
    });
  }
  return faqs.slice(0, 5);
}

function buildArticle(s, index, all) {
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const feastDateLabel = formatDate(s.month, s.day);
  const title = `Saint of the Day (${feastDateLabel}): ${s.name} — ${s.titleHook}`;
  const intro = buildIntro(s);
  const earlyLife = buildEarlyLife(s);
  const vocationAndMinistry = buildVocation(s);
  const historicalContext = buildHistoricalContext(s);
  const miraclesAndDevotion = buildMiraclesAndDevotion(s);
  const patronages = buildPatronages(s);
  const legacy = buildLegacy(s);
  const highlights = buildHighlights(s);
  const faqs = buildFaqs(s, prev, next);
  const readTime = estimateReadTime(intro, earlyLife, vocationAndMinistry, historicalContext, miraclesAndDevotion, patronages, legacy);
  const metaDescription = trimMeta(
    `Saint of the Day ${feastDateLabel}: ${s.name} — ${s.titleHook}. Patron of ${patronList(s.patronOf)}. Complete Catholic biography, feast day, miracles & devotion.`
  );
  const excerpt = trimMeta(`${s.name} (${feastDateLabel}) — ${s.titleHook}. Patron of ${s.patronOf[0]}. ${s.facts[0]}`, 160);

  return {
    dayOfYear: dayOfYear(s.month, s.day),
    month: s.month,
    day: s.day,
    dateSlug: s.dateSlug,
    saintSlug: s.slug,
    name: s.name,
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
    const first = a.name.split(" and ")[0];
    if (first !== a.name) map[first] = url;
  }
  return map;
}

// --- Main ---
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
console.log("Generated", Object.keys(interlinks).length, "saint interlink phrases");

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
  date: "2026-05-29",
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
    `  <url><loc>https://guidecatholic.com/blog/saint-of-the-day/</loc><lastmod>2026-05-29</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>`,
    ...articles.map(
      (a) =>
        `  <url><loc>https://guidecatholic.com/blog/saint-of-the-day/${a.dateSlug}/</loc><lastmod>2026-05-29</lastmod><changefreq>yearly</changefreq><priority>0.85</priority></url>`
    ),
  ].join("\n")
);

console.log("Done. Run build to verify.");
