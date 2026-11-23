import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, CalendarDays, ChevronLeft, ChevronRight, ExternalLink, RotateCcw, Sparkles } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import {
  MYSTERY_SETS,
  PRAYERS,
  ROSARY_FAQS,
  WEEKDAY_NAMES,
  WEEKDAY_SETS,
  buildRosarySteps,
  cboChapter,
  setById,
  type BeadRef,
  type MysterySetId,
} from "@/data/rosary";

const PAGE_URL = "https://guidecatholic.com/rosary/";
const TITLE = "Pray the Rosary Online: Today's Mysteries";
const DESCRIPTION =
  "Pray the Holy Rosary online, bead by bead, with today's mysteries, all 20 mysteries with Scripture, every Rosary prayer in full, and the weekday schedule.";
const OG_IMAGE = "https://guidecatholic.com/images/rosary/rosary-og.jpg";
const DIAGRAM = "/images/rosary/parts-of-the-rosary.svg";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";
const ORDINALS = ["First", "Second", "Third", "Fourth", "Fifth"];
const STEPS = buildRosarySteps();

const HOW_TO = [
  { name: "Make the Sign of the Cross and pray the Apostles' Creed", text: "Hold the crucifix, make the Sign of the Cross, then pray the Apostles' Creed." },
  { name: "Pray an Our Father", text: "On the first large bead, pray the Our Father." },
  { name: "Pray three Hail Marys", text: "On the next three small beads, pray a Hail Mary on each for an increase of faith, hope and charity." },
  { name: "Pray the Glory Be", text: "Pray the Glory Be before the first mystery." },
  { name: "Announce the mystery and pray the Our Father", text: "Name the first mystery of the day, then pray the Our Father on the large bead." },
  { name: "Pray ten Hail Marys", text: "On the ten small beads, pray ten Hail Marys while meditating on the mystery." },
  { name: "Pray the Glory Be and the Fatima Prayer", text: "Close the decade with the Glory Be and, if you wish, the Fatima Prayer. Repeat steps 5 to 7 for the other four mysteries." },
  { name: "Pray the Hail, Holy Queen and the closing prayer", text: "After the fifth decade, pray the Hail, Holy Queen on the medal, then the closing prayer, and end with the Sign of the Cross." },
];

const LIBRARY: { title: string; links: { to: string; label: string; note: string }[] }[] = [
  {
    title: "Learn the Rosary",
    links: [
      { to: "/blog/complete-rosary-guide/", label: "The Complete Rosary Guide", note: "Every prayer, all 20 mysteries and the history of the Rosary" },
      { to: "/blog/how-to-pray-the-rosary-step-by-step/", label: "How to Pray the Rosary Step by Step", note: "A beginner's walk around the beads" },
      { to: "/blog/how-to-pray-the-rosary-complete-guide/", label: "Rosary Mysteries by Day of the Week", note: "Which mysteries to pray each day, with meditations" },
      { to: "/blog/rosary-mysteries-meditation/", label: "Meditating on the 20 Mysteries", note: "How to pray each mystery instead of reciting it" },
      { to: "/blog/rosary-complete-guide/", label: "The 15 Rosary Promises", note: "The promises and the Rosary in Church history" },
      { to: "/blog/how-many-beads-on-a-rosary/", label: "How Many Beads on a Rosary?", note: "Every part of the beads, explained" },
      { to: "/blog/family-rosary-with-children/", label: "The Rosary With Kids", note: "Age-by-age tips and a weekly family plan" },
      { to: "/blog/can-you-wear-a-rosary/", label: "Can You Wear a Rosary?", note: "Wearing, blessing and caring for your beads" },
    ],
  },
  {
    title: "The four sets of mysteries",
    links: [
      { to: "/blog/joyful-mysteries-of-the-rosary/", label: "The Joyful Mysteries", note: "Monday and Saturday" },
      { to: "/blog/luminous-mysteries-of-the-rosary/", label: "The Luminous Mysteries", note: "Thursday" },
      { to: "/blog/sorrowful-mysteries-of-the-rosary/", label: "The Sorrowful Mysteries", note: "Tuesday and Friday" },
      { to: "/blog/glorious-mysteries-of-the-rosary/", label: "The Glorious Mysteries", note: "Wednesday and Sunday" },
      { to: "/blog/scriptural-rosary/", label: "The Scriptural Rosary", note: "A Bible verse before each Hail Mary" },
    ],
  },
  {
    title: "The prayers of the Rosary",
    links: [
      { to: "/blog/apostles-creed-prayer/", label: "Apostles' Creed", note: "Full text and meaning" },
      { to: "/blog/our-father-prayer/", label: "Our Father", note: "Full text, meaning and Latin" },
      { to: "/blog/hail-mary-prayer/", label: "Hail Mary", note: "Full text, meaning and Latin" },
      { to: "/blog/glory-be-prayer/", label: "Glory Be", note: "Full text and when to pray it" },
      { to: "/blog/fatima-prayer-o-my-jesus/", label: "Fatima Prayer", note: "O my Jesus, and where it comes from" },
      { to: "/blog/hail-holy-queen-prayer/", label: "Hail, Holy Queen", note: "English and Latin Salve Regina" },
      { to: "/blog/rosary-in-latin/", label: "The Rosary in Latin", note: "Every prayer in Latin, with pronunciation" },
    ],
  },
  {
    title: "Rosary devotions and Marian feasts",
    links: [
      { to: "/blog/october-month-of-the-holy-rosary-2026/", label: "October, Month of the Rosary", note: "Why the Church gives October to the Rosary" },
      { to: "/blog/our-lady-of-the-rosary-october-7-how-to-pray/", label: "Our Lady of the Rosary, October 7", note: "The feast and Lepanto" },
      { to: "/blog/rosary-for-the-dead/", label: "Rosary for the Dead", note: "Offering the Rosary for the souls in purgatory" },
      { to: "/blog/seven-sorrows-rosary-guide/", label: "Seven Sorrows Rosary", note: "The Servite chaplet of Our Lady of Sorrows" },
      { to: "/blog/divine-mercy-chaplet/", label: "Divine Mercy Chaplet", note: "Prayed on ordinary rosary beads" },
      { to: "/blog/our-lady-of-fatima-guide/", label: "Our Lady of Fatima", note: "Pray the Rosary every day: the 1917 message" },
      { to: "/blog/54-day-rosary-novena/", label: "The 54-Day Rosary Novena", note: "27 days of petition, 27 of thanksgiving" },
      { to: "/blog/history-of-the-rosary/", label: "History of the Rosary", note: "Who began it, and how it grew" },
      { to: "/blog/is-the-rosary-biblical/", label: "Is the Rosary Biblical?", note: "The Scripture behind every prayer" },
    ],
  },
];

/* ---------- Bead drawing ---------- */

const CX = 160;
const CY = 150;
const R = 118;
const LARGE_LOOP = new Set([10, 21, 32, 43]);

function loopPoint(i: number) {
  // 55 slots around the circle: slot 0 is the medal at the bottom, slots 1–54 the loop beads.
  const angle = ((90 + ((i + 1) * 360) / 55) * Math.PI) / 180;
  return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
}
const MEDAL = { x: CX, y: CY + R };
const PENDANT_Y = [384, 358, 340, 322, 298]; // index 0 = first large bead … 4 = large bead below the medal

function sameBead(a: BeadRef, b: BeadRef) {
  if (a.kind !== b.kind) return false;
  if (a.kind === "loop" && b.kind === "loop") return a.index === b.index;
  if (a.kind === "pendant" && b.kind === "pendant") return a.index === b.index;
  return true;
}

function RosaryBeads({ current, done }: { current: BeadRef; done: (b: BeadRef) => boolean }) {
  const fill = (b: BeadRef) => (sameBead(b, current) ? "hsl(var(--accent))" : done(b) ? "hsl(var(--primary))" : "hsl(var(--background))");
  const stroke = (b: BeadRef) => (sameBead(b, current) ? "hsl(var(--accent))" : "hsl(var(--primary) / 0.55)");
  return (
    <svg viewBox="0 0 320 450" className="w-full max-w-[220px] md:max-w-[300px] mx-auto" role="img" aria-label="Rosary beads showing your place in the prayer">
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1.5" />
      <line x1={CX} y1={MEDAL.y} x2={CX} y2={404} stroke="hsl(var(--primary) / 0.25)" strokeWidth="1.5" />
      {Array.from({ length: 54 }, (_, i) => {
        const p = loopPoint(i);
        const b: BeadRef = { kind: "loop", index: i };
        const large = LARGE_LOOP.has(i);
        return <circle key={i} cx={p.x} cy={p.y} r={large ? 8 : 5.2} fill={fill(b)} stroke={stroke(b)} strokeWidth="1.6" />;
      })}
      <rect x={MEDAL.x - 10} y={MEDAL.y - 12} width="20" height="24" rx="9" fill={fill({ kind: "medal" })} stroke={stroke({ kind: "medal" })} strokeWidth="1.8" />
      {PENDANT_Y.map((y, index) => {
        const b: BeadRef = { kind: "pendant", index };
        const large = index === 0 || index === 4;
        return <circle key={index} cx={CX} cy={y} r={large ? 8 : 5.2} fill={fill(b)} stroke={stroke(b)} strokeWidth="1.6" />;
      })}
      <g fill={fill({ kind: "crucifix" })} stroke={stroke({ kind: "crucifix" })} strokeWidth="1.6">
        <rect x={CX - 4} y={404} width="8" height="40" rx="2" />
        <rect x={CX - 14} y={413} width="28" height="8" rx="2" />
      </g>
    </svg>
  );
}

/* ---------- Page ---------- */

export default function RosaryPage() {
  const [setId, setSetId] = useState<MysterySetId>("joyful");
  const [today, setToday] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const chosenByUser = useRef(false);
  const prayerRef = useRef<HTMLDivElement>(null);

  // The page is prerendered, so today's set is only known in the browser.
  useEffect(() => {
    const day = new Date().getDay();
    setToday(day);
    if (!chosenByUser.current) setSetId(WEEKDAY_SETS[day]);
  }, []);

  const set = setById(setId);
  const current = STEPS[step];
  const mystery = current.decade ? set.mysteries[current.decade - 1] : null;
  const progress = Math.round(((step + 1) / STEPS.length) * 100);

  const go = useCallback((delta: number) => {
    setStep((s) => Math.min(STEPS.length - 1, Math.max(0, s + delta)));
  }, []);

  const chooseSet = (id: MysterySetId) => {
    chosenByUser.current = true;
    setSetId(id);
    setStep(0);
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  // Beads already prayed: every bead used by an earlier step and not by the current one.
  const prayedBeads = useMemo(() => STEPS.slice(0, step).map((s) => s.bead), [step]);
  const done = (b: BeadRef) => prayedBeads.some((p) => sameBead(p, b));

  const todaySet = today === null ? null : setById(WEEKDAY_SETS[today]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: { "@type": "WebSite", name: "Guide Catholic", url: "https://guidecatholic.com/" },
        about: { "@type": "Thing", name: "Rosary", sameAs: "https://en.wikipedia.org/wiki/Rosary" },
        primaryImageOfPage: { "@id": `${PAGE_URL}#diagram` },
        image: [OG_IMAGE, `https://guidecatholic.com${DIAGRAM}`],
        publisher: { "@type": "Organization", name: "Guide Catholic", url: "https://guidecatholic.com/" },
      },
      {
        "@type": "HowTo",
        name: "How to pray the Rosary",
        description: "The order of prayers for one Rosary of five decades, from the crucifix to the closing prayer.",
        totalTime: "PT20M",
        supply: [{ "@type": "HowToSupply", name: "Rosary beads (optional)" }],
        image: { "@id": `${PAGE_URL}#diagram` },
        step: HOW_TO.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text, url: `${PAGE_URL}#how-to-pray` })),
      },
      {
        "@type": "ImageObject",
        "@id": `${PAGE_URL}#diagram`,
        contentUrl: `https://guidecatholic.com${DIAGRAM}`,
        name: "Parts of the Rosary",
        caption: "Labeled diagram of rosary beads: crucifix, Our Father beads, the three Hail Mary beads, the centerpiece medal and a decade",
        width: 900,
        height: 700,
      },
      {
        "@type": "ItemList",
        name: "The 20 mysteries of the Rosary",
        url: `${PAGE_URL}#mysteries`,
        itemListElement: MYSTERY_SETS.flatMap((s, si) =>
          s.mysteries.map((m, mi) => ({ "@type": "ListItem", position: si * 5 + mi + 1, name: `${s.name.replace(" Mysteries", "")}: ${m.name}` })),
        ),
      },
      {
        "@type": "FAQPage",
        mainEntity: ROSARY_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://guidecatholic.com/" },
          { "@type": "ListItem", position: 2, name: "Holy Rosary", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`${TITLE} | Guide Catholic`}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="pray the rosary online, rosary, holy rosary, how to pray the rosary, rosary mysteries today, joyful mysteries, sorrowful mysteries, glorious mysteries, luminous mysteries, rosary prayers"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Guide Catholic" />
        <meta property="og:title" content="Pray the Holy Rosary Online, Bead by Bead" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pray the Holy Rosary: a golden rosary on a deep blue background" />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="text-text">Holy Rosary</span>
            </nav>
          </div>
        </div>

        <main>
          {/* Hero */}
          <header className="py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-5xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-1.5 text-sm font-medium mb-5">
                <Sparkles className="w-4 h-4" /> Free, no account, works on any phone
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-text mb-5">Pray the Holy Rosary</h1>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto">
                A guided Rosary you can pray bead by bead, today's mysteries, all twenty mysteries with their Scripture, and every
                prayer in full. Five decades take about twenty minutes.
              </p>

              <div className="mt-8 grid sm:grid-cols-[1fr_auto] gap-4 items-center text-left rounded-2xl border border-accent/30 bg-surface p-5 md:p-6 shadow-sm max-w-3xl mx-auto">
                <div>
                  <p className="text-sm text-text-muted flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {today === null ? "Today's mysteries" : `Today is ${WEEKDAY_NAMES[today]}`}
                  </p>
                  {todaySet ? (
                    <>
                      <p className="font-display text-2xl font-bold text-text mt-1">The {todaySet.name}</p>
                      <p className="text-sm text-text-muted mt-1">{todaySet.summary}</p>
                    </>
                  ) : (
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-text">
                      <li><strong>Monday, Saturday:</strong> Joyful</li>
                      <li><strong>Tuesday, Friday:</strong> Sorrowful</li>
                      <li><strong>Wednesday, Sunday:</strong> Glorious</li>
                      <li><strong>Thursday:</strong> Luminous</li>
                    </ul>
                  )}
                </div>
                <a
                  href="#pray"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-accent px-6 py-3 font-semibold text-button-text hover:opacity-90 transition-opacity"
                >
                  Start praying
                </a>
              </div>

              <nav aria-label="On this page" className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
                {[
                  ["#pray", "Guided Rosary"],
                  ["#schedule", "Mysteries by day"],
                  ["#mysteries", "The 20 mysteries"],
                  ["#how-to-pray", "How to pray"],
                  ["#prayers", "Rosary prayers"],
                  ["#library", "Rosary guides"],
                  ["#faq", "FAQ"],
                ].map(([href, label]) => (
                  <a key={href} href={href} className="rounded-full border border-border px-3.5 py-1.5 text-text-muted hover:text-accent hover:border-accent/50 transition-colors">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          {/* Ad unit "guide rosary", above the guided Rosary */}
          <div className="container mx-auto px-4 max-w-4xl">
            <BlogArticleAd slot="4761486940" onlyOnBlog={false} />
          </div>

          {/* Guided Rosary */}
          <section id="pray" className="py-12 bg-background-muted/40 scroll-mt-20" aria-labelledby="pray-title">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 id="pray-title" className="font-display text-3xl md:text-4xl font-bold text-text mb-2 text-center">Guided Rosary</h2>
              <p className="text-text-muted text-center mb-6">Tap Next after each prayer, or use the arrow keys. Your place is lit on the beads.</p>

              <div role="group" aria-label="Choose the mysteries" className="flex flex-wrap justify-center gap-2 mb-8">
                {MYSTERY_SETS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={s.id === setId}
                    onClick={() => chooseSet(s.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      s.id === setId ? "bg-accent text-accent-foreground" : "bg-surface border border-border text-text hover:border-accent/50"
                    }`}
                  >
                    {s.name.replace(" Mysteries", "")}
                    {today !== null && WEEKDAY_SETS[today] === s.id ? " · today" : ""}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                <div className="order-2 md:order-1 rounded-2xl bg-surface border border-border p-4">
                  <RosaryBeads current={current.bead} done={done} />
                  <div className="mt-3">
                    <div className="h-2 rounded-full bg-background-muted overflow-hidden" aria-hidden="true">
                      <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
                    </div>
                    <p className="text-xs text-text-muted mt-2 text-center">
                      Prayer {step + 1} of {STEPS.length} · {progress}%
                    </p>
                  </div>
                </div>

                <div
                  ref={prayerRef}
                  tabIndex={0}
                  onKeyDown={onKey}
                  aria-live="polite"
                  className="order-1 md:order-2 rounded-2xl bg-surface border border-border p-6 md:p-8 md:min-h-[420px] flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <p className="text-sm font-medium text-accent">{set.name} · {current.label}</p>

                  {current.announce && mystery && (
                    <div className="mt-4 rounded-xl bg-accent/5 border border-accent/20 p-4">
                      <p className="text-xs uppercase tracking-wide text-text-muted">The {ORDINALS[mystery.number - 1]} {set.name.replace(" Mysteries", "")} Mystery</p>
                      <p className="font-display text-2xl font-bold text-text mt-1">{mystery.name}</p>
                      <p className="text-text mt-2 leading-relaxed">{mystery.meditation}</p>
                      <p className="text-sm text-text-muted mt-2">
                        Read{" "}
                        <a href={cboChapter(mystery.scripture.book, mystery.scripture.chapter)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {mystery.scripture.label}
                        </a>{" "}
                        · Fruit of the mystery: <strong className="text-text">{mystery.fruit}</strong>
                      </p>
                    </div>
                  )}

                  {!current.announce && mystery && (
                    <p className="mt-3 text-sm text-text-muted">
                      Meditating on <strong className="text-text">{mystery.name}</strong> · {mystery.fruit}
                    </p>
                  )}

                  {current.intention && <p className="mt-3 text-sm text-text-muted italic">{current.intention}</p>}

                  <p className="font-display text-2xl md:text-3xl font-bold text-text mt-5 mb-3">{current.prayer.name}</p>
                  <div className="space-y-3 text-lg leading-relaxed text-text flex-1">
                    {current.prayer.text.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1 rounded-xl border border-border px-4 py-3 text-text hover:border-accent/50 disabled:opacity-40 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    {step < STEPS.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => go(1)}
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-accent px-5 py-3 font-semibold text-button-text hover:opacity-90 transition-opacity"
                      >
                        Next prayer <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setStep(0)}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-5 py-3 font-semibold text-button-text hover:opacity-90 transition-opacity"
                      >
                        <RotateCcw className="w-4 h-4" /> Pray again
                      </button>
                    )}
                  </div>
                  {step === STEPS.length - 1 && (
                    <p className="mt-4 text-sm text-text-muted">
                      You have prayed the {set.name}. Thank you for praying with us. To go deeper, read the{" "}
                      <Link to="/blog/rosary-mysteries-meditation/" className={linkClass}>meditations on the 20 mysteries</Link>.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-4xl">
            <BlogArticleAd slot="3458521905" onlyOnBlog={false} />
          </div>

          {/* Schedule */}
          <section id="schedule" className="py-12 scroll-mt-20" aria-labelledby="schedule-title">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 id="schedule-title" className="font-display text-3xl font-bold text-text mb-3">Rosary mysteries by day of the week</h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Saint John Paul II proposed this weekly pattern in <em>Rosarium Virginis Mariae</em> (2002), when he added the Luminous
                Mysteries. It is a custom, not a rule: you may pray any mysteries on any day. Many Catholics pray the Joyful Mysteries on the
                Sundays of Advent and Christmas and the Sorrowful Mysteries on the Sundays of Lent.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm md:text-base">
                  <caption className="sr-only">Which Rosary mysteries to pray on each day</caption>
                  <thead className="bg-background-muted">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold text-text">Day</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-text">Mysteries</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-text hidden sm:table-cell">Theme</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 0].map((d) => {
                      const s = setById(WEEKDAY_SETS[d]);
                      const isToday = today === d;
                      return (
                        <tr key={d} className={`border-t border-border ${isToday ? "bg-accent/10" : ""}`}>
                          <th scope="row" className="px-4 py-3 font-medium text-text">
                            {WEEKDAY_NAMES[d]}
                            {isToday && <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">Today</span>}
                          </th>
                          <td className="px-4 py-3">
                            <a href={`#${s.id}`} className={linkClass}>{s.name}</a>
                          </td>
                          <td className="px-4 py-3 text-text-muted hidden sm:table-cell">{s.summary}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-text-muted mt-4">
                For meditations on each day's mysteries, see{" "}
                <Link to="/blog/how-to-pray-the-rosary-complete-guide/" className={linkClass}>the Rosary mysteries by day of the week</Link>.
              </p>
            </div>
          </section>

          {/* 20 mysteries */}
          <section id="mysteries" className="py-12 bg-background-muted/40 scroll-mt-20" aria-labelledby="mysteries-title">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 id="mysteries-title" className="font-display text-3xl font-bold text-text mb-3">The 20 mysteries of the Rosary</h2>
              <p className="text-text-muted leading-relaxed mb-8 max-w-3xl">
                Each mystery is a scene from the life of Jesus and Mary. While the lips pray the Hail Marys, the heart stays with the scene.
                The traditional fruit is the grace to ask for in that decade. Scripture links open the chapter on Catholic Bible Online.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {MYSTERY_SETS.map((s) => (
                  <article key={s.id} id={s.id} className="rounded-2xl bg-surface border border-border p-6 scroll-mt-24">
                    <h3 className="font-display text-2xl font-bold text-text">{s.name}</h3>
                    <p className="text-sm text-accent font-medium mt-1">Prayed on {s.days}</p>
                    <ol className="mt-4 space-y-4">
                      {s.mysteries.map((m) => (
                        <li key={m.name} className="flex gap-3">
                          <span className="shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent text-sm font-bold flex items-center justify-center">{m.number}</span>
                          <div>
                            <p className="font-semibold text-text">{m.name}</p>
                            <p className="text-sm text-text-muted">
                              <a href={cboChapter(m.scripture.book, m.scripture.chapter)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                {m.scripture.label}
                              </a>{" "}
                              · Fruit: {m.fruit}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <Link to={`/blog/${s.id}-mysteries-of-the-rosary/`} className="mt-5 mr-4 inline-block text-sm font-semibold text-accent hover:underline">
                      Meaning of the {s.name} →
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        chooseSet(s.id);
                        document.getElementById("pray")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-5 text-sm font-semibold text-accent hover:underline"
                    >
                      Pray the {s.name} now →
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* How to */}
          <section id="how-to-pray" className="py-12 scroll-mt-20" aria-labelledby="how-title">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 id="how-title" className="font-display text-3xl font-bold text-text mb-3">How to pray the Rosary</h2>
              <p className="text-text-muted leading-relaxed mb-6">
                One Rosary is five decades. Begin on the crucifix, go up the short strand, then around the circle, and finish on the medal.
              </p>
              <figure className="my-8 rounded-2xl border border-border bg-surface p-3 md:p-4">
                <img
                  src={DIAGRAM}
                  width={900}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  alt="Parts of the Rosary diagram: the crucifix, the Our Father beads, three Hail Mary beads, the centerpiece medal and a decade of ten Hail Mary beads"
                  className="w-full h-auto rounded-xl"
                />
                <figcaption className="text-sm text-text-muted text-center mt-2">
                  The parts of the Rosary: start on the crucifix, go up the short strand, then pray the five decades around the loop.
                </figcaption>
              </figure>
              <ol className="space-y-4">
                {HOW_TO.map((s, i) => (
                  <li key={s.name} className="flex gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-accent text-button-text font-bold flex items-center justify-center">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-text">{s.name}</h3>
                      <p className="text-text-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-sm text-text-muted mt-6">
                New to the beads? Read{" "}
                <Link to="/blog/how-to-pray-the-rosary-step-by-step/" className={linkClass}>how to pray the Rosary step by step</Link> or the{" "}
                <Link to="/blog/complete-rosary-guide/" className={linkClass}>complete Rosary guide</Link>.
              </p>
            </div>
          </section>

          {/* Prayers */}
          <section id="prayers" className="py-12 bg-background-muted/40 scroll-mt-20" aria-labelledby="prayers-title">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 id="prayers-title" className="font-display text-3xl font-bold text-text mb-3">The prayers of the Rosary</h2>
              <p className="text-text-muted leading-relaxed mb-6">The full text of every prayer, in the order you pray them.</p>
              <div className="space-y-5">
                {[PRAYERS.signOfCross, PRAYERS.creed, PRAYERS.ourFather, PRAYERS.hailMary, PRAYERS.gloryBe, PRAYERS.fatima, PRAYERS.hailHolyQueen, PRAYERS.closing].map((p) => (
                  <article key={p.id} id={p.id} className="rounded-2xl bg-surface border border-border p-6 scroll-mt-24">
                    <h3 className="font-display text-xl font-bold text-text mb-3">{p.name}</h3>
                    <div className="space-y-2 text-text leading-relaxed">
                      {p.text.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    {p.href && (
                      <Link to={p.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                        <BookOpen className="w-4 h-4" /> Meaning and history of the {p.name.replace(" (O My Jesus)", "")}
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Library */}
          <section id="library" className="py-12 scroll-mt-20" aria-labelledby="library-title">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 id="library-title" className="font-display text-3xl font-bold text-text mb-6">Rosary guides on Guide Catholic</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {LIBRARY.map((group) => (
                  <nav key={group.title} aria-label={group.title} className="rounded-2xl border border-border bg-surface p-5">
                    <h3 className="font-semibold text-text mb-3">{group.title}</h3>
                    <ul className="space-y-3">
                      {group.links.map((l) => (
                        <li key={l.to}>
                          <Link to={l.to} className="font-medium text-accent hover:underline">{l.label}</Link>
                          <p className="text-sm text-text-muted">{l.note}</p>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
              <p className="text-sm text-text-muted mt-6">
                Prefer to pray from a prayer book? The{" "}
                <a href="https://catholicbibleonline.com/prayers/holy-rosary/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Holy Rosary on Catholic Bible Online <ExternalLink className="inline w-3.5 h-3.5" />
                </a>{" "}
                has the same prayers in a printable layout.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-12 bg-background-muted/40 scroll-mt-20" aria-labelledby="faq-title">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 id="faq-title" className="font-display text-3xl font-bold text-text mb-6">Rosary questions</h2>
              <div className="space-y-3">
                {ROSARY_FAQS.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-surface p-5">
                    <summary className="cursor-pointer list-none font-semibold text-text flex justify-between gap-4">
                      <h3 className="text-base">{f.q}</h3>
                      <span className="text-accent group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <p className="mt-3 text-text-muted leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-4xl py-8">
            <ArticleBottomCTA
              title="Pray the Rosary every day"
              description="Build a steady prayer life with the Catholic life assessment: personal next steps for prayer, Mass and the sacraments."
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
