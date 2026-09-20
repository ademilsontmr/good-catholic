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

function feastSeed(f) {
  let h = f.sortOrder * 17;
  for (const ch of f.slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

function pick(seed, variants) {
  return variants[seed % variants.length];
}

function expandFeastFact(fact, f) {
  return joinSentences(
    fact,
    pick(feastSeed(f) + fact.length, [
      `That detail is what most Catholics actually search when they type “${f.shortName}” into a browser.`,
      `Keep this fact in view when explaining ${f.shortName} to children or RCIA candidates — specificity beats slogans.`,
      `Homilists and parents can build an entire short talk from this single concrete point about ${f.shortName}.`,
      `It is the kind of precision that separates a useful feast guide from recycled seasonal filler.`,
    ])
  );
}

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
  const seed = feastSeed(f);
  return joinSentences(
    pick(seed, [
      `${f.titleHook} — that is the spiritual key Catholics reach for when ${f.shortName} arrives in ${f.season}.`,
      `When ${f.shortName} comes around in the ${f.season} season, ${f.titleHook} names what the day is for.`,
      `${f.shortName} sits inside ${f.season} with a clear purpose: ${f.titleHook}.`,
    ]),
    pick(seed + 1, [
      `This Guide Catholic page focuses on meaning, Mass shape, U.S. family customs, and how ${f.shortName} fits the wider liturgical year.`,
      `Below you will find Scripture roots, theology, liturgical notes, and practical ways American households keep ${f.shortName}.`,
      `Rather than a generic seasonal essay, this guide stays locked on ${f.name} — its readings, rank, and lived practice.`,
    ]),
    expandFeastFact(f.facts[1], f)
  );
}

function buildScriptureAndTradition(f) {
  const seed = feastSeed(f);
  return joinSentences(
    pick(seed, [
      `${f.shortName} is anchored in Scripture and living Tradition; the Church does not invent feast days as branding exercises.`,
      `What Catholics celebrate on ${f.shortName} is received faith — biblical memory handed on in the Church's worship.`,
      `Remove Scripture and Tradition and ${f.shortName} collapses into a themed Sunday; with them, it becomes proclamation.`,
    ]),
    expandFeastFact(f.facts[2], f),
    expandFeastFact(f.facts[3], f),
    pick(seed + 3, [
      `The Roman Missal's collects and prefaces for ${f.shortName} already catechize: doctrine prayed aloud by the assembly.`,
      `Reading the proper orations for ${f.shortName} before Mass is one of the fastest ways to grasp what the Church wants believed that day.`,
      `When a homilist ties the readings of ${f.shortName} to present wounds, that is the patristic habit — Christ proclaimed in the Church he founded.`,
    ])
  );
}

function buildBiblicalRoots(f) {
  const seed = feastSeed(f);
  const eraNote = {
    Advent: pick(seed, [
      "Fourth-century Advent preaching already stressed watchfulness — the same chord modern parishes still strike.",
      "Advent's biblical spine is prophecy and promise: Isaiah's hope meeting the Baptist's urgency.",
      "The season trains desire; ${f.shortName} is one of the calendar's tools for that training.",
    ].map((t) => t.replace("${f.shortName}", f.shortName))),
    Christmas: pick(seed, [
      "Christmas preaching from St. Leo and St. Augustine still shapes how the West names the Incarnation.",
      "The Nativity cycle insists God entered history in a body — ${f.shortName} keeps that claim concrete.".replace("${f.shortName}", f.shortName),
      "Biblical infancy narratives and Johannine prologue together ground what ${f.shortName} celebrates.".replace("${f.shortName}", f.shortName),
    ]),
    Lent: pick(seed, [
      "Early Lenten catechesis prepared candidates for Easter baptism — RCIA still echoes that pattern around days like ${f.shortName}.".replace("${f.shortName}", f.shortName),
      "Lent's Scriptures of repentance and covenant renew the baptismal identity ${f.shortName} also serves.".replace("${f.shortName}", f.shortName),
      "The desert, the commandments, and the call to convert form the biblical weather around ${f.shortName}.".replace("${f.shortName}", f.shortName),
    ]),
    "Holy Week": pick(seed, [
      "Holy Week's shape grew from Jerusalem pilgrimage before Rome exported it worldwide — ${f.shortName} is part of that inheritance.".replace("${f.shortName}", f.shortName),
      "Passion narratives read slowly across the week refuse to let ${f.shortName} become a vague religious mood.".replace("${f.shortName}", f.shortName),
      "The Church walks day by day through betrayal, Cross, and tomb; ${f.shortName} is one station on that path.".replace("${f.shortName}", f.shortName),
    ]),
    Easter: pick(seed, [
      "Easter stands on 1 Corinthians 15:14 — if Christ is not raised, preaching is empty; ${f.shortName} shares that claim.".replace("${f.shortName}", f.shortName),
      "Resurrection appearances and empty-tomb accounts supply the biblical fuel for ${f.shortName}.".replace("${f.shortName}", f.shortName),
      "Fifty days of alleluia keep the biblical shock of Easter from collapsing into a single brunch.".replace("${f.shortName}", f.shortName),
    ]),
    Pentecost: pick(seed, [
      "Acts 2 is the biblical engine of Pentecost: one Spirit, many tongues, one Church — ${f.shortName} draws from that fire.".replace("${f.shortName}", f.shortName),
      "Babel reversed is not a slogan; it is the mission ${f.shortName} still announces.".replace("${f.shortName}", f.shortName),
      "Confirmation catechesis leans on Pentecost texts that also illuminate ${f.shortName}.".replace("${f.shortName}", f.shortName),
    ]),
    "Ordinary Time": pick(seed, [
      "Ordinary Time unfolds Christ's public ministry Sunday by Sunday; ${f.shortName} borrows that steady Gospel weather.".replace("${f.shortName}", f.shortName),
      "Without Christmas or Easter fireworks, ${f.shortName} still asks for discipleship in the semi-continuous readings.".replace("${f.shortName}", f.shortName),
      "The biblical gift of Ordinary Time is patience — ${f.shortName} participates in that long obedience.".replace("${f.shortName}", f.shortName),
    ]),
  }[f.season];

  return joinSentences(
    eraNote || `The ${f.season} season supplies color, readings, and mood for ${f.shortName}.`,
    pick(seed + 5, [
      `Liturgical historians show how local churches kept memory until observances like ${f.shortName} entered wider calendars.`,
      `Celebrating ${f.shortName} places you in continuity with communities that guarded faith through persecution and renewal.`,
      `You are not inventing piety on ${f.shortName}; you are entering a stream older than your parish founding date.`,
    ])
  );
}

function buildTheology(f) {
  const seed = feastSeed(f);
  const rankNote = {
    solemnity: "Solemnities carry Creed-level weight — Gloria, Creed, and the Church's fuller ceremonial when rubrics allow.",
    feast: "Feasts of the Lord or Mary spotlight particular facets of salvation without diluting the Sunday mystery.",
    memorial: "Memorials insert a saint or mystery into seasonal prayer, proving holiness has names and dates.",
    season: "Seasonal milestones teach Catholics how to wait, rejoice, repent, or persevere across months.",
    devotion: "Calendar devotions make doctrine tactile — candles, processions, and novenas children can remember.",
    holy_week: "Holy Week theology is Christological and paschal: each day discloses a facet of one Passion.",
    triduum: "Triduum theology is Eucharistic and paschal — baptism, sacrifice, and resurrection held together.",
  }[f.rank];

  return joinSentences(
    pick(seed, [
      `What Catholics celebrate on ${f.shortName}, they are invited to believe more deeply — liturgy and doctrine refuse to split.`,
      `${f.shortName} is not seasonal décor; it is an annual invitation to let a revealed mystery reshape conscience.`,
      `The theological claim of ${f.shortName} is enacted first at the altar, then explained in classrooms and homes.`,
    ]),
    expandFeastFact(f.facts[0], f),
    rankNote,
    pick(seed + 2, [
      `Catechists can build a session from the collect and Gospel alone; parents can explain the day with ${f.titleHook}.`,
      `If you need one sentence for children, use ${f.titleHook} and then point to one symbol at Mass.`,
      `${f.titleHook} is already a portable catechesis — unpack it rather than replacing it with vague inspiration.`,
    ])
  );
}

function buildLiturgy(f) {
  const notes = f.liturgyNotes.map(ensurePeriod).join(" ");
  const moveableNote = f.isMoveable
    ? "Because the date moves, musicians and sacristans should confirm the Ordo before printing worship aids."
    : `The fixed date (${f.dateLabel}) lets parishes publish music and minister schedules early.`;

  return joinSentences(
    `${f.name} is celebrated in the ${f.season} season with ${f.liturgicalColor} vestments unless rubrics direct otherwise.`,
    notes,
    `Proper collects and prefaces belong to ${f.shortName} — worth reading aloud at home before Mass.`,
    moveableNote,
    pick(feastSeed(f), [
      `Conscious participation means following the responses, hearing the homily, and carrying one line from the Eucharistic Prayer into the week.`,
      `Treat the Missal texts of ${f.shortName} as the day's syllabus; everything else is enrichment.`,
      `Arrive early enough to notice the color, the Gloria (or its absence), and the preface — those cues preach before the sermon starts.`,
    ])
  );
}

function buildTraditions(f) {
  const seed = feastSeed(f);
  return joinSentences(
    pick(seed, [
      `Popular customs for ${f.shortName} extend worship into kitchens and sidewalks without replacing the Eucharist.`,
      `Home and parish traditions around ${f.shortName} should feel like aftershocks of Mass, not competitors to it.`,
      `The best ${f.shortName} customs are repeatable: simple enough for next year, rich enough to form memory.`,
    ]),
    formatList(f.traditions),
    pick(seed + 1, [
      `Multicultural U.S. parishes often add regional foods, processions, or blessings that confess the same faith in different accents.`,
      `Immigrant communities frequently keep ${f.shortName} with melodies and recipes that catechize as effectively as lectures.`,
      `Ask older parishioners how they kept ${f.shortName}; recovered memory is often better than imported novelty.`,
    ]),
    `Choose one or two practices your household can sustain; depth on ${f.shortName} beats a cluttered checklist.`
  );
}

function buildHowToCelebrate(f) {
  const seed = feastSeed(f);
  const massNote = f.holyDayUS
    ? `${f.shortName} is a Holy Day of Obligation in the United States. Schedule Mass on the feast or an authorized vigil, and verify diocesan rules if the date falls near a weekend.`
    : `${f.shortName} is not a U.S. Holy Day of Obligation, yet Mass remains the most fitting centerpiece when your parish offers it.`;

  const seasonTip = {
    Advent: "Keep Advent penitential unless the day is Gaudete Sunday; violet tones and restrained festivity help children feel the arc toward Christmas.",
    Christmas: "Extend Christmas joy beyond one meal — keep the crèche through Epiphany and leave Christmas hymns in family prayer.",
    Lent: "Honor required fast and abstinence; even festive memorials inside Lent keep a sober tone unless rubrics say otherwise.",
    "Holy Week": "Clear nonessential commitments so Triduum liturgies can take priority — they cannot be replaced by private devotion alone.",
    Easter: "Let alleluia and mercy mark the fifty days; resist collapsing Easter back into ordinary routine on Monday.",
    Pentecost: "Pray explicitly for the Spirit's gifts; confirmation seasons make this especially natural.",
    "Ordinary Time": "Build one sustainable habit — daily Gospel reading, a weekly holy hour, or regular confession — around days like this.",
  }[f.season] || "Build one sustainable faith habit that outlasts the feast day itself.";

  return joinSentences(
    massNote,
    pick(seed, [
      `Read the day's Gospel the night before and bring one question to church.`,
      `Preview the readings for ${f.shortName} so the liturgy is recognition, not surprise.`,
      `Let children hear one Gospel sentence at dinner the evening before ${f.shortName}.`,
    ]),
    f.traditions[0],
    seasonTip,
    pick(seed + 4, [
      `If illness or travel blocks church, pray the Mass texts from a trusted Catholic source, offer a decade of the Rosary, and make a spiritual communion — then return in person.`,
      `When you cannot attend, do not invent a private replacement liturgy; use the Church's texts and rejoin the assembly ASAP.`,
      `Absent from Mass? Keep the bond with Scripture and a simple act of charity tied to ${f.shortName}, then go when you can.`,
    ])
  );
}

function buildHolyDay(f) {
  if (f.holyDayUS) {
    return joinSentences(
      `${f.name} binds Catholics in the United States to Mass on the feast itself or at an evening vigil where the diocese permits anticipation.`,
      `Serious illness, care for infants, and impeded travel remain legitimate pastoral excuses; ask parish staff when unsure.`,
      `If the solemnity falls on Saturday or Monday, check whether the bishops' conference transfers or suspends obligation that year.`,
      `Even when obligation is lifted, liturgical rank remains: proper readings, Gloria where required, Creed on solemnities.`,
      `Confession before major feasts is classic preparation for Communion with a quiet conscience — especially fitting around ${f.shortName}.`
    );
  }
  if (f.rank === "solemnity") {
    return joinSentences(
      `${f.name} is not among U.S. Holy Days of Obligation, yet it keeps solemnity rank — among the Church's highest ordinary celebrations.`,
      `Prioritize Mass, unnecessary work rest, and home marking of the day when extra liturgies are offered.`,
      f.isMoveable
        ? `Moveable dating means the parish bulletin and USCCB calendar are authoritative each year for ${f.shortName}.`
        : `The stable date ${f.dateLabel} helps families and RCIA teams plan around ${f.shortName}.`,
      `Your presence encourages pastors who add confessions, novenas, or processions when the faithful ask.`
    );
  }
  return joinSentences(
    `${f.name} is not a Holy Day of Obligation in the United States, yet it remains spiritually weighty inside ${f.season}.`,
    `Many Catholics still attend Mass, keep novenas, or honor local customs without canonical requirement.`,
    f.isMoveable
      ? `Confirm the exact date yearly through your parish or diocesan Ordo.`
      : `Mark ${f.dateLabel} on household calendars the way you mark a baptism anniversary.`,
    `Participating in ${f.shortName} reinforces liturgical-year rhythm for children and adults alike.`
  );
}

function buildWhyItMatters(f) {
  const seed = feastSeed(f);
  const seasonWhy = {
    Advent: pick(seed, [
      "Advent interrupts consumption culture with prophecy, silence, and holy longing.",
      "The season teaches waiting as a Christian skill — something secular calendars rarely reward.",
      `Violet weeks train hope; ${f.shortName} is one concrete lesson inside that school.`,
    ]),
    Christmas: pick(seed, [
      "Retail Christmas ends on December 26; the Church insists incarnation deserves an octave and more.",
      `Christmas season claims God entered history — ${f.shortName} keeps that claim from becoming décor.`,
      "Extending celebration past one morning is itself a catechesis against disposable joy.",
    ]),
    Lent: pick(seed, [
      "Culture sells detox; Lent offers repentance, almsgiving, and prayer rooted in baptism.",
      `${f.shortName} participates in that deeper reset when kept with honesty.`,
      "Lenten days refuse self-improvement theater; they ask for conversion before God.",
    ]),
    "Holy Week": pick(seed, [
      "Holy Week refuses to shrink the Passion into a long weekend brand.",
      `${f.shortName} is one day of that refusal — slow, scriptural, and communal.`,
      "Walking day by day with Christ is how the Church inoculates against vague spirituality.",
    ]),
    Easter: pick(seed, [
      "Easter proclaims death is not final — a claim headlines challenge hourly.",
      `${f.shortName} keeps resurrection faith from becoming a single emotional high.`,
      "Alleluia season is formation for a world that prefers cynicism.",
    ]),
    Pentecost: pick(seed, [
      "Pentecost insists the Spirit creates communion, not isolated spirituality.",
      `${f.shortName} shares that missionary fire.`,
      "A fragmented culture needs the Church's language of one Body again.",
    ]),
    "Ordinary Time": pick(seed, [
      "Ordinary Time is discipleship without seasonal spotlight — steady fidelity.",
      `${f.shortName} belongs to that long obedience of Sundays and weekdays.`,
      "Holiness here is practiced, not performed for holidays.",
    ]),
  }[f.season];

  return joinSentences(
    seasonWhy || "The liturgical year sanctifies time so faith is not only managed by apps.",
    pick(seed + 2, [
      `${f.titleHook} answers grief when families need hope more than decoration.`,
      `${f.titleHook} speaks into fear without pretending the calendar erases it.`,
      `${f.titleHook} names gratitude when abundance makes prayer feel optional.`,
      `${f.titleHook} opens a door to reconciliation that secular “fresh starts” rarely offer.`,
    ]),
    pick(seed + 8, [
      `Returning to ${f.shortName} each cycle is formation, not redundancy: the mystery is stable; the believer is not.`,
      `You will meet ${f.shortName} again next year as a different person — that is why repetition is mercy.`,
      `Guide Catholic keeps this feast guide detailed so English-speaking Catholics can prepare ${f.shortName} with substance, not last-minute generic quotes.`,
      `Keep ${f.shortName} on your household calendar the way you keep birthdays — as a date that forms identity.`,
    ])
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
