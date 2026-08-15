/**
 * Generate 46 unique St. Michael's Lent Novena day articles (Aug 15–Sep 29 2026).
 * Each page has distinct copy; all CTA to CBO novena index + day page.
 *
 * node scripts/generate-st-michaels-lent-novena-days.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../src/pages/blog");
const START_ID = 1393;
const CBO_INDEX = "https://catholicbibleonline.com/novenas/st-michaels-lent-novena/";
const CBO_DAY = (n) => `${CBO_INDEX}day-${n}/`;

function dateForDay(n) {
  // Day 1 = Aug 15, 2026
  const d = new Date(Date.UTC(2026, 7, 14 + n)); // month 7 = August
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return {
    iso: d.toISOString().slice(0, 10),
    month: months[d.getUTCMonth()],
    monthNum: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    weekday: weekdays[d.getUTCDay()],
    short: `${months[d.getUTCMonth()]} ${d.getUTCDate()}, 2026`,
    slugDate: `${months[d.getUTCMonth()].toLowerCase()}-${d.getUTCDate()}`,
  };
}

const feastNotes = {
  1: "The Assumption of Mary — begin under Our Lady's mantle.",
  8: "Queenship of Mary — renew a Marian consecration if you have one.",
  13: "Memorial of St. Monica — pray for family conversions.",
  14: "Memorial of St. Augustine — ask for a restless heart to rest in God.",
  25: "Nativity of the Blessed Virgin Mary.",
  31: "Exaltation of the Holy Cross — let penance kiss the Cross.",
  32: "Our Lady of Sorrows — pray for those who grieve.",
  46: "Feast of the Archangels (Michaelmas) — finish with thanksgiving.",
};

// 46 unique "why pray this novena" openers
const whyOpeners = [
  "Because spiritual combat is ordinary Christian life, not a hobby for specialists.",
  "Because August dryness often hides quiet despair that needs a named prayer.",
  "Because parents need a season longer than a weekend retreat.",
  "Because the Church already gave you the dates — Assumption to Michaelmas.",
  "Because pride still whispers that you are enough without grace.",
  "Because addiction recovery needs daily structure, not only inspiration.",
  "Because parish life frays when nobody prays between Sundays.",
  "Because St. Francis kept a similar season and the Cross answered.",
  "Because your children watch whether you finish what you begin.",
  "Because evil is patient, and so must your prayer be.",
  "Because Confession is easier when the heart has been praying for weeks.",
  "Because the short St. Michael Prayer deserves a season, not only a moment.",
  "Because back-to-school anxiety deserves consecration, not only logistics.",
  "Because first responders carry burdens that need heavenly backup.",
  "Because returning Catholics need a clear on-ramp that ends on a feast.",
  "Because gossip and resentment are real battles with real casualties.",
  "Because the internet catechizes fear faster than the parish catechizes hope.",
  "Because Sundays alone cannot carry a whole month of temptation.",
  "Because humility is learned by repetition, not by a single emotional night.",
  "Because Mary’s Assumption week is a natural door into angelic help.",
  "Because September harvests whatever August planted in the will.",
  "Because the dragon in Revelation is not a metaphor you can ignore forever.",
  "Because your parish priests need lay people who actually pray.",
  "Because marriage fights often need deliverance from stubborn pride.",
  "Because teens need adults who model spiritual courage without drama.",
  "Because almsgiving without prayer becomes philanthropy without God.",
  "Because prayer without penance becomes sentiment without steel.",
  "Because the hour of death will ask what habits you practiced in life.",
  "Because “Who is like God?” is still the best answer to modern ego.",
  "Because the liturgy already marks September 29 — join the calendar.",
  "Because missed spring Lent does not have to mean a wasted year.",
  "Because spiritual boredom is often a call to steadier devotion.",
  "Because communities heal when members intercede by name.",
  "Because angels are not optional décor in Catholic cosmology.",
  "Because Scripture names Michael for a reason — protection and war in heaven.",
  "Because your zip code has schools, hospitals, and homes that need covering.",
  "Because consistency beats intensity after the second week.",
  "Because the Cross on September 14 refreshes any soft penance.",
  "Because Our Lady of Sorrows teaches compassion amid combat.",
  "Because finishing matters more than starting loud.",
  "Because gratitude at Michaelmas requires something to thank God for.",
  "Because the novena text is free and waiting — excuses are not.",
  "Because holiness is communal: Gabriel, Raphael, and your guardian join Michael.",
  "Because fear of missing a day is cured by beginning again today.",
  "Because the Church’s popular piety still forms saints in ordinary kitchens.",
  "Because today is either Day One for someone or Day Forty-Six for someone else — both need prayer.",
];

const intentions = [
  "protection of children and schools",
  "freedom from a named addiction",
  "peace in a divided family",
  "courage for a hard conversation",
  "healing after betrayal",
  "purity of heart and eyes",
  "perseverance in a dry prayer life",
  "protection for police and military friends",
  "conversion of someone you love",
  "wisdom for a vocational decision",
  "relief from crippling anxiety",
  "unity in your parish",
  "sobriety for a relative",
  "protection during travel",
  "humility at work",
  "reconciliation after a fight",
  "strength for caregivers",
  "faith for a teenager drifting",
  "deliverance from resentment",
  "provision in financial fear",
  "chastity in dating",
  "healing of memories",
  "boldness to invite someone to Mass",
  "protection of the unborn",
  "peace for the dying",
  "clarity against confusion",
  "defense against despair",
  "growth in the fear of the Lord",
  "renewal of marriage vows in practice",
  "patience with aging parents",
  "zeal without burnout",
  "silence from gossip",
  "holy friendships",
  "fidelity in small duties",
  "joy that does not deny the Cross",
  "trust after unanswered prayer",
  "protection of priests",
  "end to a cycle of rage",
  "hunger for Scripture",
  "gratitude instead of comparison",
  "mercy for an enemy",
  "steadiness in grief",
  "hope after failure",
  "love that serves the poor",
  "a holy death someday",
  "thanksgiving for graces already given",
];

const midAngles = [
  "Notice how today’s prayer asks you to stand under God, not above your neighbor.",
  "If the litany feels long, slow down rather than skip — attention is the sacrifice.",
  "Name your intention out loud before the Sign of the Cross; vagueness starves prayer.",
  "Let one line from the St. Michael Prayer stay on your lips during errands today.",
  "Pair today’s novena with a two-minute examen tonight — combat includes memory.",
  "If shame rises, remember Michael serves mercy’s King, not your perfectionism.",
  "Offer today’s penance for someone who cannot pray yet.",
  "Read Jude 1:9 slowly after the novena — Michael’s contest was real and humble.",
  "Text one friend that you prayed for them; intercession should leave the private chapel.",
  "If you miss a section, finish with the short prayer and return tomorrow without drama.",
  "Place your phone face down; the dragon loves notifications.",
  "Ask Raphael’s company if you are traveling, Gabriel’s if you must speak truth.",
  "Guardian angels are not rivals to Michael — pray the four Our Fathers with meaning.",
  "Let housework become the oratory: stir, wipe, and whisper “Who is like God?”",
  "If anger flares after prayer, you uncovered a wound — bring it to Confession soon.",
  "Today’s fidelity is more valuable than yesterday’s enthusiasm.",
  "Teach a child one sentence of the prayer; formation is shorter than you think.",
  "Do not compare your Day N to someone else’s highlight on social media.",
  "Military metaphors in prayer are about holiness, not hostility toward people.",
  "If liturgy today is a feast, let the Mass readings interpret the novena.",
  "Write your intention on paper; ink helps the will remember.",
  "A short walk after praying can seal the words in the body.",
  "Refuse one complaint today as a companion penance.",
  "If you lead a group, model calm pacing — racing holy words trains distraction.",
  "Ask for protection of your parish staff by name.",
  "Let almsgiving today be specific: one meal, one bill, one visit.",
  "Dryness on this day is not failure; it is training for love without consolations.",
  "Keep Sunday Mass non-negotiable even inside this seasonal push.",
  "If fear of evil spikes, shrink to the short prayer and call a trusted Catholic.",
  "Bless your doorway with the Sign of the Cross after praying.",
  "Remember the poor who have no quiet room — pray for them as you enjoy yours.",
  "Today’s page on Catholic Bible Online is the text; this article is the why.",
  "If you started late, you are still in the vineyard — pray today’s day number.",
  "Ask Mary, Queen of Angels, to keep your intention pure.",
  "Let one act of hidden kindness follow the novena within an hour.",
  "Speak less about demons today; speak more about Christ.",
  "If marriage is tense, pray first, then listen ten minutes without defending yourself.",
  "Students: put the prayer before scrolling class chats.",
  "Retirees: your intercession may be the parish’s quiet engine — do not despise it.",
  "Night-shift workers: your “today” is whenever you begin; God is not trapped in clocks.",
  "If you break penance, resume prayer anyway — the novena is not a hostage.",
  "Keep a glass of water nearby; the body prays too.",
  "End with gratitude for any protection you did not notice.",
  "Ask St. Michael to guard your speech online for the next twenty-four hours.",
  "If this is near the end, resist the urge to binge days — pray one well.",
  "On Michaelmas eve or day, let thanksgiving outrank self-critique.",
];

const whyBodies = [
  "Catholics do not pray novenas to force God’s hand; we pray to place our freedom inside His. A forty-day rhythm from Assumption to Michaelmas trains the will the way athletes train muscle — through honest repetition.",
  "Search traffic spikes every August because ordinary disciples feel the need for covering. This day answers that need with a concrete page to open and a concrete intention to name.",
  "The Church’s calendar already walks from Mary’s Assumption to the archangels’ feast. The novena simply puts words on that road so you do not wander without a map.",
  "Spiritual warfare language can be abused; it can also be ignored until a crisis. Today’s prayer keeps the middle path: sober, sacramental, and steady.",
  "Families collapse more often from neglected prayer than from spectacular temptation. A shared daily text gives a household something stronger than mood.",
  "St. Michael’s name — Who is like God? — confronts the cult of self that shapes ads, feeds, and even some spiritual talk. Pray it until pride loses vocabulary.",
  "Penance without prayer becomes self-help; prayer without penance becomes fog. Today holds both if you choose one small sacrifice beside the novena.",
  "Pastors cannot fight every battle alone. Lay people praying this novena become quiet reinforcements for the parish.",
  "Converts often ask for structure. Day-by-day pages give structure without pretending optional devotion is a precept.",
  "Fear sells online; fidelity rarely trends. Choosing this novena is a vote for fidelity.",
];

const practiceHooks = [
  "Set a phone alarm labeled only “SM” — mystery reduces snooze excuses.",
  "Pray before opening email; let heaven speak first.",
  "Kneel if you can; sit if you must; do not postpone until perfect posture.",
  "Keep the Catholic Bible Online tab pinned until September 29.",
  "Whisper the short St. Michael Prayer at every red light today.",
  "Offer dishwashing as the “Amen” of the novena.",
  "Invite one person to pray Day N with you by link.",
  "Write Day N and the date on a sticky note by the coffee maker.",
  "If you commute, pray audio-free in silence for the first five minutes of the drive.",
  "End the day by telling God one sentence about how the prayer met your real life.",
];

const ctrTitles = (n, dt) => {
  const forms = [
    `St Michael's Lent Novena Day ${n} (${dt.short}): Pray Today`,
    `Day ${n} St Michael's Lent Novena — ${dt.short} Prayer Guide`,
    `St. Michael's Lent Novena Day ${n}: ${dt.weekday}, ${dt.short}`,
    `St Michaels Lent Novena Day ${n} (2026): Free Catholic Prayer`,
    `Novena to St Michael Day ${n} — ${dt.month} ${dt.day} Guide`,
  ];
  return forms[(n - 1) % forms.length];
};

const h1s = (n, dt) => {
  const forms = [
    `St Michael's Lent Novena Day ${n}: ${dt.short}`,
    `Day ${n} of St. Michael's Lent Novena (${dt.short})`,
    `St. Michael's Lent Novena — Day ${n} for ${dt.weekday}`,
    `Pray St Michael's Lent Novena Day ${n} (${dt.month} ${dt.day}, 2026)`,
    `St Michaels Lent Day ${n} Novena Prayer — ${dt.short}`,
  ];
  return forms[(n - 1) % forms.length];
};

const metas = (n, dt) => {
  const forms = [
    `St Michael's Lent Novena Day ${n} for ${dt.short}. Why pray today, how to begin, and the free daily prayer text on Catholic Bible Online.`,
    `Day ${n} of St. Michael's Lent Novena (${dt.weekday}, ${dt.short}). Unique Catholic guide with intention, penance tip, and link to today's full novena page.`,
    `Pray St Michaels Lent Novena Day ${n} on ${dt.short}. Clear intro, reasons to continue, and free 46-day novena prayers from Assumption to Michaelmas.`,
    `Catholic St. Michael's Lent Novena Day ${n} (${dt.short}). Search-friendly guide for U.S. Catholics — why this day matters and where to pray the full text free.`,
    `St Michael Lent Novena Day ${n}: ${dt.short} prayer guide. Build spiritual courage with today's unique reflection and the complete novena on Catholic Bible Online.`,
  ];
  return forms[(n - 1) % forms.length];
};

function pick(arr, n, salt = 0) {
  return arr[(n - 1 + salt) % arr.length];
}

function uniqueWhy(n) {
  return `${whyOpeners[n - 1]} ${pick(whyBodies, n, 3)} On Day ${n}, that means showing up again with a named intention — not collecting spiritual content.`;
}

function uniqueIntro(n, dt) {
  const a = [
    `Welcome to Day ${n} of St. Michael's Lent Novena — ${dt.weekday}, ${dt.short}.`,
    `It is Day ${n} (${dt.short}) in the Assumption-to-Michaelmas novena many U.S. Catholics are praying this year.`,
    `Day ${n} falls on ${dt.weekday}, ${dt.short}, inside the 46-day St. Michael's Lent novena calendar.`,
    `If you searched for St Michael's Lent Novena Day ${n}, you are in the right place for ${dt.short}.`,
    `This page is the Day ${n} companion for ${dt.short}: why to pray, what to intend, and where the full text lives.`,
  ];
  const b = [
    `You do not need to have started on August 15 to pray today with integrity.`,
    `Whether this is your first day or your fortieth, the mercy of beginning again still applies.`,
    `Keep this short reflection beside the full novena text — orientation here, oration there.`,
    `Let today’s date on the civil calendar match today’s page on the novena index.`,
    `American parish life is busy; a day-numbered page removes decision fatigue.`,
  ];
  const feast = feastNotes[n] ? ` Liturgical note: ${feastNotes[n]}` : "";
  return `${a[(n - 1) % a.length]} ${b[(n + 2) % b.length]}${feast}`;
}

function uniquePractice(n) {
  return `${pick(practiceHooks, n)} Today’s suggested intention focus: ${intentions[n - 1]}. Write it once before you open the prayer text.`;
}

function uniqueMid(n) {
  return `${midAngles[n - 1]} That is the Day ${n} examination — concrete enough to obey before bedtime.`;
}

function uniqueDeep(n, dt) {
  const deeps = [
    `Experienced directors will tell you that Day ${n} is less about feelings and more about keeping the appointment. If consolation comes, receive it; if not, keep the words anyway.`,
    `On ${dt.short}, the temptation is to skim because you “already know” the prayer. Knowing is not the same as praying. Slow the first paragraph until it costs attention.`,
    `Day ${n} sits in a larger story from August 15 to September 29. Zoom out for ten seconds, then zoom back to today’s page only.`,
    `If your household is loud, pray with eyes open. God is not offended by realism; He is offended by despair that refuses to ask for help.`,
    `Use Day ${n} to reconnect Confession to combat. Prayer reveals sin; the sacrament heals it. Schedule the appointment if the same fault keeps winning.`,
  ];
  return deeps[(n - 1) % deeps.length] + ` Intention reminder: ${intentions[(n + 5) % intentions.length]}.`;
}

function faqs(n, dt) {
  return [
    [
      `What is St Michael's Lent Novena Day ${n}?`,
      `It is the Day ${n} page in the 46-day St. Michael's Lent novena running from August 15 to September 29, 2026 (today’s date in the cycle: ${dt.short}).`,
    ],
    [
      `Do I have to start on August 15 to pray Day ${n}?`,
      `No. Begin with today’s day number and continue through September 29. Consistency matters more than a perfect start.`,
    ],
    [
      `Where is the full Day ${n} prayer text?`,
      `On Catholic Bible Online’s St. Michael's Lent Novena — open the main novena index or the Day ${n} page for the complete prayers.`,
    ],
    [
      `How long does Day ${n} take?`,
      `About 10–15 minutes for the full novena text; the short St. Michael Prayer alone takes under a minute if that is all you can give today.`,
    ],
    [
      `What intention fits Day ${n}?`,
      `A focused choice for this page is ${intentions[n - 1]}, but you may name any need under St. Michael’s protection.`,
    ],
  ];
}

const icons = ["Shield", "Sword", "Flame", "Cross", "Heart", "Church", "Sun", "Moon"];
const bgs = [
  "bg-orange-100",
  "bg-amber-100",
  "bg-sky-100",
  "bg-violet-100",
  "bg-rose-100",
  "bg-emerald-100",
  "bg-stone-100",
  "bg-indigo-100",
];
const iconColors = [
  "text-orange-700",
  "text-amber-700",
  "text-sky-700",
  "text-violet-700",
  "text-rose-700",
  "text-emerald-700",
  "text-stone-700",
  "text-indigo-700",
];

function variantSections(n, slug, dt) {
  const v = (n - 1) % 5;
  const why = uniqueWhy(n);
  const practice = uniquePractice(n);
  const mid = uniqueMid(n);
  const deep = uniqueDeep(n, dt);
  const intro = uniqueIntro(n, dt);

  const cboBlock = `
              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Pray Day ${n} on Catholic Bible Online
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  This Guide Catholic page is your Day ${n} briefing. The full novena text — St. Michael Prayer, litany, consecration, and angelic Our Fathers — is free on Catholic Bible Online.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="${CBO_INDEX}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                  >
                    Open full St. Michael&apos;s Lent Novena
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="${CBO_DAY(n)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                  >
                    Go to Day ${n} prayer page
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>`;

  const commonTail = `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to pray Day ${n} without rushing</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${practice} If you only have one minute, pray the short St. Michael Prayer with your Day ${n} intention and return to the full text later — do not let all-or-nothing thinking cancel the day.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Day ${n} focus for the heart</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${mid}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Going deeper on ${dt.short}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${deep}
              </LinkedText>

              <p className="text-text leading-relaxed mb-6">
                Ready to pray? Open the{" "}
                <a href="${CBO_INDEX}" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">
                  St. Michael&apos;s Lent Novena on Catholic Bible Online
                </a>
                {" "}or jump straight to{" "}
                <a href="${CBO_DAY(n)}" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">
                  Day ${n}
                </a>
                .
              </p>`;

  if (v === 0) {
    return `
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${intro}
              </LinkedText>
${cboBlock}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why pray St Michael&apos;s Lent Novena Day ${n}?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${why}
              </LinkedText>
${commonTail}`;
  }
  if (v === 1) {
    return `
${cboBlock}
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${intro}
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The reason Day ${n} still matters</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${why}
              </LinkedText>
${commonTail}`;
  }
  if (v === 2) {
    return `
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${intro}
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics keep Day ${n} on the calendar</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${why}
              </LinkedText>
${cboBlock}
${commonTail}`;
  }
  if (v === 3) {
    return `
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${intro}
              </LinkedText>
              <div className="bg-background-muted/50 border border-border rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed font-medium">${why}</p>
              </div>
${cboBlock}
${commonTail}`;
  }
  return `
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${intro}
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Start with why — then open Day ${n}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${why}
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Name your intention: ${intentions[n - 1]}.</li>
                <li>Open the Day ${n} novena text on Catholic Bible Online.</li>
                <li>Add one small penance before midnight.</li>
                <li>Tell one Catholic friend you prayed.</li>
              </ol>
${cboBlock}
${commonTail}`;
}

function generatePage(n) {
  const dt = dateForDay(n);
  const slug = `st-michaels-lent-novena-day-${n}-${dt.slugDate}-2026`;
  const component = `StMichaelsLentNovenaDay${n}`;
  const icon = icons[(n - 1) % icons.length];
  const bg = bgs[(n - 1) % bgs.length];
  const iconColor = iconColors[(n - 1) % iconColors.length];
  const title = `${ctrTitles(n, dt)} | Guide Catholic`;
  const h1 = h1s(n, dt);
  const desc = metas(n, dt);
  const keywords = `st michael's lent novena day ${n}, st michaels lent novena day ${n}, st michael lent day ${n} ${dt.month.toLowerCase()} ${dt.day}, michaelmas novena day ${n} 2026`;
  const answer = `<strong>St Michael&apos;s Lent Novena Day ${n}</strong> is ${dt.weekday}, <strong>${dt.short}</strong> — part of the 46-day Catholic novena from the Assumption (August 15) to the Feast of the Archangels (September 29). Pray the full free text on Catholic Bible Online, then live one concrete intention today.`;
  const lead = `Day ${n} of the St. Michael&apos;s Lent Novena for ${dt.short}. Unique guidance for why to pray today — then the full prayer pages on Catholic Bible Online.`;
  const faq = faqs(n, dt)
    .map(([q, a]) => `                { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} }`)
    .join(",\n");

  const prev =
    n > 1
      ? `<li><Link to="/blog/st-michaels-lent-novena-day-${n - 1}-${dateForDay(n - 1).slugDate}-2026/" className="text-accent underline underline-offset-2">Day ${n - 1}</Link></li>`
      : "";
  const next =
    n < 46
      ? `<li><Link to="/blog/st-michaels-lent-novena-day-${n + 1}-${dateForDay(n + 1).slugDate}-2026/" className="text-accent underline underline-offset-2">Day ${n + 1}</Link></li>`
      : "";

  return {
    n,
    slug,
    component,
    icon,
    bg,
    iconColor,
    title,
    h1,
    desc,
    keywords,
    dt,
    tsx: `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ${icon}, Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ${component}() {
  return (
    <>
      <Helmet>
        <title>{${JSON.stringify(title)}}</title>
        <meta name="description" content={${JSON.stringify(desc)}} />
        <meta name="keywords" content={${JSON.stringify(keywords)}} />
        <link rel="canonical" href="https://guidecatholic.com/blog/${slug}/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={${JSON.stringify(h1)}}
        description={${JSON.stringify(desc)}}
        url="https://guidecatholic.com/blog/${slug}/"
        datePublished="2026-08-14"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: ${JSON.stringify(`Day ${n}`)}, url: "https://guidecatholic.com/blog/${slug}/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Day ${n}</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers &amp; Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />${dt.short}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />${10 + (n % 6)} min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                ${h1.replace(/'/g, "&apos;")}
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                ${lead}
              </p>
            </header>

            <div className="aspect-video ${bg} rounded-2xl flex items-center justify-center mb-10">
              <${icon} className="w-24 h-24 ${iconColor}" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">${answer}</p>
              </div>
${variantSections(n, slug, dt)}

              <QuizCTA
                title={${JSON.stringify(`Day ${n}: is prayer shaping your week?`)}}
                description={"Take our Catholic life assessment for Mass, Confession, and daily fidelity."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Continue the 46-day journey</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                ${prev}
                ${next}
                <li><Link to="/blog/st-michaels-lent-2026/" className="text-accent underline underline-offset-2">St Michael&apos;s Lent 2026 hub</Link></li>
                <li><Link to="/blog/st-michaels-lent-novena-prayer-guide-us-2026/" className="text-accent underline underline-offset-2">Full season overview on Guide Catholic</Link></li>
                <li><a href="${CBO_INDEX}" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">All 46 days on Catholic Bible Online</a></li>
              </ul>
            </div>

            <BlogFAQ
              linkAnswersSlug="${slug}"
              faqs={[
${faq}
              ]}
            />
            <RelatedArticles currentSlug="${slug}" />
            <ArticleBottomCTA
              title={${JSON.stringify(`Keep Day ${n} from being only a search`)}}
              description={"Build Catholic habits that last past Michaelmas."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
`,
  };
}

// Uniqueness audit helpers
const intros = new Set();
const whys = new Set();
const mids = new Set();
const practices = new Set();
const titles = new Set();

const blog = [];
const lazy = [];
const routes = [];
const links = [];

for (let n = 1; n <= 46; n++) {
  const p = generatePage(n);
  const intro = uniqueIntro(n, p.dt);
  const why = uniqueWhy(n);
  const mid = uniqueMid(n);
  const practice = uniquePractice(n);
  if (intros.has(intro) || whys.has(why) || mids.has(mid) || practices.has(practice) || titles.has(p.title)) {
    console.error("DUPLICATE detected on day", n);
    process.exit(1);
  }
  intros.add(intro);
  whys.add(why);
  mids.add(mid);
  practices.add(practice);
  titles.add(p.title);

  fs.writeFileSync(path.join(OUT, `${p.component}.tsx`), p.tsx);

  const id = START_ID + n - 1;
  blog.push(`  {
    id: ${id},
    slug: "${p.slug}",
    title: ${JSON.stringify(p.h1)},
    excerpt: ${JSON.stringify(p.desc.slice(0, 140) + (p.desc.length > 140 ? "..." : ""))},
    date: "2026-08-14",
    readTime: "${10 + (n % 6)} min",
    category: "Prayers & Devotions",
    icon: ${p.icon},
    bgColor: "${p.bg}",
    iconColor: "${p.iconColor}"
  }`);
  lazy.push(`const ${p.component} = lazy(() => import("./pages/blog/${p.component}"));`);
  routes.push(`            <Route path="/blog/${p.slug}/" element={<${p.component} />} />`);
  links.push(`  ${JSON.stringify(`St Michael's Lent Novena Day ${n}`)}: "/blog/${p.slug}/",`);
  links.push(`  ${JSON.stringify(`Day ${n} St Michael's Lent Novena`)}: "/blog/${p.slug}/",`);
  console.log("day", n, p.slug);
}

fs.writeFileSync(path.join(__dirname, "st-michael-novena-days-blog.txt"), blog.join(",\n") + ",\n");
fs.writeFileSync(path.join(__dirname, "st-michael-novena-days-lazy.txt"), lazy.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "st-michael-novena-days-routes.txt"), routes.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "st-michael-novena-days-interlinks.txt"), links.join("\n") + "\n");

console.log("OK 46 unique pages");
console.log("unique intros", intros.size, "whys", whys.size, "mids", mids.size, "practices", practices.size, "titles", titles.size);
