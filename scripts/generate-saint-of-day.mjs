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
  confessor: "confessor whose steadfast preaching and service shaped local churches",
  virgin: "consecrated virgin whose chastity and prayer bore fruit for the Church",
  doctor: "Doctor of the Church whose teaching still guides Catholic theology",
  apostle: "apostle sent to plant the Gospel where Christ was not yet known",
  solemnity: "solemnity ranked among the highest days of the Roman calendar",
  memorial: "memorial inscribed on the General Roman Calendar",
  feast: "feast kept widely across the Catholic world",
};

function seedOf(s) {
  let h = s.month * 100 + s.day;
  for (const ch of s.slug) h = (h * 33 + ch.charCodeAt(0)) >>> 0;
  return h;
}

function pick(seed, variants) {
  return variants[seed % variants.length];
}

function expandFact(fact, name, dateLabel) {
  const bare = primaryName(name);
  return joinSentences(
    fact,
    pick(bare.length + dateLabel.length, [
      `That detail is why ${bare} still appears in parish bulletins and school religion lessons around ${dateLabel}.`,
      `Readers searching for ${bare} usually want this concrete memory, not a vague slogan.`,
      `Catechists often open a short talk on ${dateLabel} with this episode from ${bare}'s story.`,
      `It is the sort of specific witness that separates ${bare} from generic “holy person” summaries.`,
    ])
  );
}

// --- Person saints (fact-led, low shared boilerplate) ---

function buildPersonIntro(s) {
  const seed = seedOf(s);
  const patrons = patronList(s.patronOf);
  const bare = primaryName(s.name);
  return joinSentences(
    pick(seed, [
      `${formatDate(s.month, s.day)} belongs to ${s.name} on the Catholic calendar — a ${CATEGORY_LABELS[s.category] || "canonized saint"} formed in ${s.origin} during ${s.lifespan}.`,
      `Each year on ${formatDate(s.month, s.day)}, Guide Catholic highlights ${s.name}, remembered as a ${CATEGORY_LABELS[s.category] || "saint"} from ${s.origin} (${s.lifespan}).`,
      `The Church keeps ${s.name} on ${formatDate(s.month, s.day)} because this life from ${s.origin} (${s.lifespan}) still teaches discipleship today.`,
    ]),
    expandFact(s.facts[0], s.name, formatDate(s.month, s.day)),
    pick(seed + 1, [
      `${s.titleHook} is the angle most Catholics look for when they open a page about ${bare}.`,
      `If you only remember one line about ${bare}, remember this: ${s.titleHook}.`,
      `${s.titleHook} — that is the shorthand families and RCIA teams use for ${bare}.`,
    ]),
    `As patron of ${patrons}, ${bare} is asked for intercession in needs that match that patronage; the sections below unpack history, vocation, and practical observance for ${formatDate(s.month, s.day)}.`
  );
}

function buildPersonEarlyLife(s) {
  const seed = seedOf(s);
  const bare = primaryName(s.name);
  return joinSentences(
    pick(seed, [
      `${bare}'s story is rooted in ${s.origin}, across the years ${s.lifespan}.`,
      `To understand ${bare}, start with place and time: ${s.origin}, ${s.lifespan}.`,
      `The setting of ${s.origin} during ${s.lifespan} explains pressures ${bare} faced long before later legends.`,
    ]),
    expandFact(s.facts[1], s.name, formatDate(s.month, s.day)),
    pick(seed + 3, [
      `Sources mix chronicles, liturgical memory, and later devotion; the Church still presents ${bare} as a model of holiness even when minor anecdotes remain debated.`,
      `Not every anecdote about ${bare} is equally documented, yet the core virtues the Church praises are stable enough for feast-day preaching.`,
      `Modern readers should expect a mix of history and pious tradition when studying ${bare}; what matters for faith is the pattern of fidelity the calendar hands on.`,
    ]),
    `Knowing that landscape — language, rulers, poverty or privilege in ${s.origin} — keeps ${bare} from becoming a floating icon detached from real cost.`
  );
}

function buildPersonVocation(s) {
  const seed = seedOf(s);
  const bare = primaryName(s.name);
  const vocationLine = {
    martyr: `${bare}'s vocation climaxed in blood witness when fidelity to Christ became a public crime.`,
    confessor: `${bare}'s vocation unfolded in preaching, pastoral care, and perseverance under long responsibility rather than a single dramatic hour.`,
    virgin: `${bare}'s vocation centered on consecrated chastity, contemplative prayer, and often the founding or reform of communities.`,
    doctor: `${bare}'s vocation was intellectual charity — writing and teaching so the Church could confess the faith without confusion.`,
    apostle: `${bare}'s vocation was missionary: announcing Christ and ordering young churches where the Gospel was new.`,
    memorial: `${bare}'s vocation looked ordinary from outside — daily fidelity that the Church later recognized as extraordinary.`,
    feast: `${bare}'s vocation is held up publicly so the Church can imitate concrete holiness, not abstract ideals.`,
    solemnity: `On this solemnity the Church proclaims a saving mystery that shaped ${bare}'s path of discipleship.`,
  }[s.category] || `${bare}'s vocation was faithful service to Christ and neighbor in the concrete duties of ${s.origin}.`;

  return joinSentences(
    vocationLine,
    expandFact(s.facts[2], s.name, formatDate(s.month, s.day)),
    pick(seed + 5, [
      `The pattern behind the headlines is familiar: sacraments, repentance, charity, and courage repeated until death.`,
      `Strip away later art and you still find prayer, the Church's worship, and love of neighbor at the center of ${bare}'s decisions.`,
      `What the calendar preserves is not celebrity but a repeatable Christian shape — worship of God and mercy toward people.`,
    ]),
    s.patronOf[0]
      ? `Anyone discerning a call connected to ${s.patronOf[0]} can ask: which virtue of ${bare} do I lack most this week?`
      : `Anyone discerning a vocation can ask which virtue of ${bare} is most missing in ordinary duties this week.`
  );
}

function buildPersonHistoricalContext(s) {
  const seed = seedOf(s);
  const bare = primaryName(s.name);
  return joinSentences(
    expandFact(s.facts[3], s.name, formatDate(s.month, s.day)),
    pick(seed, [
      `Fixing ${bare} on ${formatDate(s.month, s.day)} synchronizes memory worldwide: the same date for missals, schools, and family prayer.`,
      `${formatDate(s.month, s.day)} is how the Roman calendar refuses to let ${bare} become a private hobby of specialists.`,
      `Because ${bare} is assigned to ${formatDate(s.month, s.day)}, parishes can plan music, schools can plan lessons, and households can plan a simple remembrance.`,
    ]),
    pick(seed + 7, [
      `That shared date is older than modern national holidays and still quieter than them — which is part of its power.`,
      `In a noisy news cycle, a fixed feast for ${bare} is a small act of Christian timekeeping.`,
      `When Catholics on different continents open the same day's calendar entry for ${bare}, the communion of saints becomes practical, not theoretical.`,
    ])
  );
}

function buildPersonMiracles(s) {
  const seed = seedOf(s);
  const patrons = patronList(s.patronOf);
  const bare = primaryName(s.name);
  return joinSentences(
    pick(seed, [
      `Devotion to ${bare} rests on the communion of saints: those who see God face to face still love the Church on earth.`,
      `Catholics ask ${bare} to pray with them because heaven is not a retirement from the Body of Christ.`,
      `Turning to ${bare} is not bypassing Jesus; it is asking a friend of Jesus to plead for needs we carry.`,
    ]),
    `As patron of ${patrons}, ${bare} is a natural companion for novenas, parish festivals, and quiet kitchen-table intentions that match those causes.`,
    pick(seed + 2, [
      `Where shrines or relics of ${bare} exist, pilgrims still arrive looking for conversion as much as consolation.`,
      `Local foods, processions, and school plays about ${bare} hand the story to children who may never open a thick biography.`,
      `Art and hymnody about ${bare} keep the memory sensory — something eyes and ears can learn before theology books do.`,
    ]),
    `On ${formatDate(s.month, s.day)}, even a short visit to a statue or image of ${bare} can become a deliberate act of communion rather than nostalgia.`
  );
}

function buildPersonPatronages(s) {
  const seed = seedOf(s);
  const patrons = patronList(s.patronOf);
  const bare = primaryName(s.name);
  return joinSentences(
    `${s.name} is especially invoked by people whose lives touch ${patrons}.`,
    pick(seed, [
      `Catholic teaching is clear: saints intercede; they do not replace the mediation of Christ.`,
      `Patronage names a friendship in heaven, not a superstition that bypasses the Cross.`,
      `To call ${bare} “patron” is to ask for prayer, not to treat holiness like a lucky charm.`,
    ]),
    `A simple ${formatDate(s.month, s.day)} practice: name one intention aloud, pray an Our Father and Hail Mary, then do one work of mercy that mirrors ${bare}'s charity.`,
    pick(seed + 4, [
      `Baptism and confirmation patrons become lifelong companions when families return to this feast each year.`,
      `If ${bare} is your confirmation name, ${formatDate(s.month, s.day)} is a yearly checkup on the promises that name implies.`,
      `Parishes named for ${bare} can treat this date as a soft “patronal day” even when it is only a memorial.`,
    ])
  );
}

function buildPersonLegacy(s) {
  const seed = seedOf(s);
  const bare = primaryName(s.name);
  return joinSentences(
    pick(seed, [
      `${bare} survives in missals, church titles, and art because concrete holiness still draws people tired of cynicism.`,
      `The lasting imprint of ${bare} is pastoral: a finished race that now encourages others still on the road.`,
      `What endures from ${bare} is less a brand than a usable example — courage, purity, teaching, or mercy depending on the life.`,
    ]),
    pick(seed + 1, [
      `A five-minute classroom mention on ${formatDate(s.month, s.day)} beats a forgotten unit buried in May.`,
      `Homilists who name ${bare} when the calendar aligns give the faithful a person, not only a principle.`,
      `Parents can treat ${formatDate(s.month, s.day)} as a micro-feast: one story, one prayer, one act of kindness.`,
    ]),
    `Guide Catholic keeps this profile online so English-speaking Catholics can find ${bare} quickly when ${formatDate(s.month, s.day)} arrives — or when a need connected to ${patronList(s.patronOf)} suddenly becomes personal.`
  );
}

function buildPersonHowToHonor(s) {
  const seed = seedOf(s);
  const patrons = patronList(s.patronOf);
  const bare = primaryName(s.name);
  return joinSentences(
    pick(seed, [
      `If your schedule allows, attend Mass on ${formatDate(s.month, s.day)}; even a quiet weekday memorial joins you to the universal Church remembering ${bare}.`,
      `Make Mass the centerpiece of ${formatDate(s.month, s.day)} when possible — the Eucharist is how Catholics most fittingly honor ${bare}.`,
      `Prioritize the liturgy on ${formatDate(s.month, s.day)}; everything else is optional decoration around that center.`,
    ]),
    `At home, read one short paragraph about ${bare} and pray for someone whose struggle relates to ${patrons}.`,
    pick(seed + 6, [
      `Add one concrete deed: a donation, a visit, a decade of the Rosary, or a message of reconciliation offered in ${bare}'s spirit.`,
      `Choose a single act that ${bare} would recognize — mercy toward the poor, defense of truth, or hidden fidelity.`,
      `Keep the observance small enough to repeat next year; sustainable memory beats an exhausting one-off celebration.`,
    ]),
    `If church is impossible that day, read ${bare} in the Roman Martyrology or a trusted Catholic reference, then make an act of spiritual communion and return to the sacraments when you can.`
  );
}

// --- Liturgical feasts on the saint calendar ---

function buildLiturgicalIntro(s) {
  const seed = seedOf(s);
  return joinSentences(
    pick(seed, [
      `${formatDate(s.month, s.day)} centers on ${s.name}: ${s.titleHook}.`,
      `The Catholic calendar sets ${s.name} on ${formatDate(s.month, s.day)} — ${s.titleHook}.`,
      `On ${formatDate(s.month, s.day)} the Roman Rite proclaims ${s.name}, summarized as ${s.titleHook}.`,
    ]),
    expandFact(s.facts[0], s.name, formatDate(s.month, s.day)),
    pick(seed + 2, [
      `This is liturgical proclamation, not a museum anniversary: parishes that keep the General Roman Calendar preach and sing what the day reveals.`,
      `Roman Rite communities treat the date as living doctrine — prayed, not merely remembered.`,
      `The feast asks for faith now: what God has done is celebrated so believers can entrust him again.`,
    ]),
    `Below, Scripture-memory, doctrine, Mass shape, and household practice are separated so each section adds something ${s.name} uniquely requires.`
  );
}

function buildLiturgicalHistory(s) {
  const seed = seedOf(s);
  return joinSentences(
    expandFact(s.facts[1], s.name, formatDate(s.month, s.day)),
    expandFact(s.facts[2], s.name, formatDate(s.month, s.day)),
    pick(seed, [
      `Placing the mystery on ${formatDate(s.month, s.day)} forces annual rehearsal — salvation history learned by returning, not by cramming once.`,
      `${formatDate(s.month, s.day)} is how the Church refuses to let this mystery become a one-time seminar.`,
      `The calendar date is a catechetical technology older than textbooks: repeat ${s.name} every year until it shapes instinct.`,
    ])
  );
}

function buildLiturgicalTheology(s) {
  const seed = seedOf(s);
  return joinSentences(
    expandFact(s.facts[3], s.name, formatDate(s.month, s.day)),
    pick(seed, [
      `Doctrine on this day is meant to become praise: Catholics thank God for the deed the feast names.`,
      `The point is doxology before debate — worship first, then explanation.`,
      `Good preaching on ${formatDate(s.month, s.day)} ties the mystery to baptismal identity and Eucharistic life, not only to feelings.`,
    ]),
    `${s.titleHook} remains a one-line catechesis children can carry after the decorations come down.`
  );
}

function buildLiturgicalCelebration(s) {
  const seed = seedOf(s);
  return joinSentences(
    pick(seed, [
      `Expect proper readings and orations for ${s.name} on ${formatDate(s.month, s.day)}; musicians follow the Ordo when festive options appear.`,
      `Parish bulletins usually list extra Masses or blessings when ${formatDate(s.month, s.day)} carries solemn weight.`,
      `Gloria, Creed, and fuller ceremonial appear when rank and rubrics allow — check locally rather than assuming every year looks identical.`,
    ]),
    `In the United States, if diocesan law makes the date a Holy Day of Obligation, planning travel around Mass becomes part of the witness.`,
    `Arrive a few minutes early: silence before the opening hymn is often the difference between “checking a box” and receiving the feast.`
  );
}

function buildLiturgicalDevotion(s) {
  const seed = seedOf(s);
  return joinSentences(
    pick(seed, [
      `At home on ${formatDate(s.month, s.day)}, let Scripture, a candle, or a hymn echo what the sanctuary proclaimed about ${s.name}.`,
      `Household customs should point to the same mystery as Mass — not invent a parallel religion of crafts alone.`,
      `Foods and processions from ethnic parishes can enrich ${formatDate(s.month, s.day)} when they stay tethered to the liturgy.`,
    ]),
    `Charity tied to the feast — a gift, a visit, a forgiven grudge — keeps ${s.name} from collapsing into sentiment.`,
    `The Church asks for conversion and mission flowing from revelation, not nostalgia for childhood aesthetics.`
  );
}

function buildLiturgicalPatronages(s) {
  const patrons = patronList(s.patronOf);
  return joinSentences(
    `Intentions on this day often place ${patrons} under the care of ${primaryName(s.name)} and the wider communion of saints.`,
    `Pray the Collect from the Roman Missal if you have a missal or online text — it is the Church's own summary of what to ask.`,
    `Families can renew baptismal promises, bless children, or read the related Gospel passage before bed on ${formatDate(s.month, s.day)}.`
  );
}

function buildLiturgicalLegacy(s) {
  const seed = seedOf(s);
  return joinSentences(
    pick(seed, [
      `Each generation meets ${s.name} on ${formatDate(s.month, s.day)} with new wounds — grief, anxiety, family fracture, or cultural pressure against faith.`,
      `${formatDate(s.month, s.day)} keeps returning whether or not apps remind us; that stubbornness is part of Catholic formation.`,
      `The feast answers modern questions by pointing to God's action named in ${s.name}, not to human self-improvement slogans.`,
    ]),
    `Guide Catholic publishes this guide so English readers can prepare the day with substance — Scripture, meaning, and practice — instead of last-minute generic quotes.`
  );
}

function buildLiturgicalHowToHonor(s) {
  return joinSentences(
    `Begin with Mass when schedule or obligation allows; silence before the liturgy is already a gift on ${formatDate(s.month, s.day)}.`,
    `Read the Gospel the night before and choose one phrase to carry into the day.`,
    `If an octave or extended season belongs to this mystery, do not crush the celebration into a single hurried hour.`,
    `Close with one work of mercy — visiting the sick, sharing food, or reconciling a relationship — as a lived Amen to ${s.name}.`
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
