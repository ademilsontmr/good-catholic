import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { BookOpen, ArrowRight, RefreshCw, Share2, Shuffle, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { copyForDate } from "@/data/dailyVerseReflections";
import { faqsForDate } from "@/data/dailyVerseFaqs";
import { catholicVerses as verses, chapterUrl } from "@/data/catholicVerses";
import { toast } from "sonner";

const themeArticles: Record<string, { href: string; label: string }> = {
  Love: { href: "/blog/bible-verses-about-love/", label: "Bible verses about love" },
  Peace: { href: "/blog/bible-verses-about-peace/", label: "Bible verses about peace" },
  Strength: { href: "/blog/bible-verses-about-strength/", label: "Bible verses about strength" },
  Faith: { href: "/blog/bible-verses-about-faith/", label: "Bible verses about faith" },
  Hope: { href: "/blog/bible-verses-about-hope/", label: "Bible verses about hope" },
  Prayer: { href: "/blog/bible-verses-about-prayer/", label: "Bible verses about prayer" },
  Courage: { href: "/blog/bible-verses-about-fear/", label: "Bible verses about fear" },
  Comfort: { href: "/blog/bible-verses-about-healing/", label: "Bible verses about healing" },
  Trust: { href: "/blog/bible-verses-about-anxiety/", label: "Bible verses about anxiety" },
  Protection: { href: "/blog/bible-verses-about-protection/", label: "Bible verses about protection" },
  Eucharist: { href: "/blog/eucharist-real-presence/", label: "the Real Presence of the Eucharist" },
};

const faqs = [
  {
    question: "What is the Catholic verse of the day?",
    answer: "It is one short passage of Scripture chosen for this calendar day on Guide Catholic. The verse stays the same for 24 hours, then changes. It is for prayer and memory. It is not a replacement for the readings at Mass.",
  },
  {
    question: "What is the difference between the verse of the day and a random Bible verse?",
    answer: "The verse of the day is stable until midnight so a household can share the same line. A random Bible verse is a new passage each time you ask for one — useful when you want another text without waiting until tomorrow.",
  },
  {
    question: "Is this the same as the daily Mass readings?",
    answer: "No. The Lectionary at Mass follows the liturgical calendar and usually includes a first reading, a psalm, and a Gospel. This page offers one Catholic verse of the day for personal prayer, plus links to read the chapter in full.",
  },
  {
    question: "How do I use a daily Bible verse?",
    answer: "Read it slowly three times, pray one sentence back to God, and carry a short phrase through the day. Catholics often pair a verse with the Sign of the Cross, an Our Father, or a visit to the Blessed Sacrament.",
  },
  {
    question: "Where can I read the full chapter?",
    answer: "Open the Catholic Bible on Catholic Bible Online and find the book and chapter named in the reference. A single verse is a door. The chapter is the room.",
  },
];

const themeColors: Record<string, string> = {
  Love: "bg-rose-100 text-rose-700",
  Peace: "bg-blue-100 text-blue-700",
  Strength: "bg-orange-100 text-orange-700",
  Faith: "bg-indigo-100 text-indigo-700",
  Hope: "bg-emerald-100 text-emerald-700",
  Prayer: "bg-violet-100 text-violet-700",
  Eucharist: "bg-amber-100 text-amber-700",
  Courage: "bg-red-100 text-red-700",
  Humility: "bg-teal-100 text-teal-700",
  Holiness: "bg-purple-100 text-purple-700",
  default: "bg-accent/10 text-accent",
};

function atMidnight(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatISODate(date: Date) {
  const day = atMidnight(date);
  return `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`;
}

function formatLongDate(date: Date) {
  return atMidnight(date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function addDays(date: Date, days: number) {
  const next = atMidnight(date);
  next.setDate(next.getDate() + days);
  return next;
}

function verseForDate(date: Date) {
  const day = atMidnight(date);
  const start = new Date(day.getFullYear(), 0, 0);
  const dayOfYear = Math.round((day.getTime() - start.getTime()) / 86400000);
  const index = ((dayOfYear % verses.length) + verses.length) % verses.length;
  return verses[index];
}

const ARCHIVE_START = new Date(2026, 8, 29);
const dailyArchive = Array.from({ length: 100 }, (_, index) => {
  const date = addDays(ARCHIVE_START, index);
  return { index, date, iso: formatISODate(date), verse: verseForDate(date) };
});

const themeIndex = Array.from(
  verses.reduce((map, verse) => {
    if (!map.has(verse.theme)) map.set(verse.theme, verse);
    return map;
  }, new Map<string, (typeof verses)[number]>()),
);

export default function DailyVersesPage() {
  const { date: dateParam } = useParams();
  const entry = dateParam ? dailyArchive.find((day) => day.iso === dateParam) ?? null : null;
  const invalidDate = Boolean(dateParam) && !entry;
  const todayIso = formatISODate(new Date());
  const hubToday = dailyArchive.find((day) => day.iso === todayIso) ?? null;
  const active = entry ?? hubToday ?? dailyArchive[0];
  const [randomVerse, setRandomVerse] = useState<(typeof verses)[number] | null>(null);
  const [themeFilter, setThemeFilter] = useState<string | null>(null);
  const todayVerse = active.verse;
  const today = formatLongDate(active.date);
  const shortDate = active.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const isoDate = active.iso;
  const isDated = Boolean(entry);
  const pageUrl = isDated
    ? `https://guidecatholic.com/daily-verses/${isoDate}/`
    : "https://guidecatholic.com/daily-verses/";
  const prevDay = active.index > 0 ? dailyArchive[active.index - 1] : null;
  const nextDay = active.index < dailyArchive.length - 1 ? dailyArchive[active.index + 1] : null;
  const upcoming = dailyArchive.slice(active.index + 1, active.index + 8);
  const quote = todayVerse.text.length > 78 ? `${todayVerse.text.slice(0, 75).trim()}…` : todayVerse.text;
  const pageTitle = isDated
    ? `${todayVerse.ref} — Verse of the Day (${shortDate}) | Guide Catholic`
    : `Verse of the Day (${shortDate}) | Guide Catholic`;
  const description = `"${quote}" — ${todayVerse.ref}. Catholic verse of the day for ${shortDate}, with a reflection and a prayer.`;
  const dailyCopy = copyForDate(isoDate, todayVerse.ref);
  const themeArticle = themeArticles[todayVerse.theme];
  const filtered = themeFilter ? verses.filter((verse) => verse.theme === themeFilter) : [];

  const drawRandom = () => {
    let next = verses[Math.floor(Math.random() * verses.length)];
    if (randomVerse && next.text === randomVerse.text && verses.length > 1) {
      next = verses[(verses.indexOf(next) + 1) % verses.length];
    }
    setRandomVerse(next);
  };

  const versePlain = `"${todayVerse.text}" — ${todayVerse.ref}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(versePlain);
    toast.success("Verse copied.");
  };

  const handleShare = async () => {
    const text = `${versePlain}\n\nDaily Bible Verse from Guide Catholic`;
    if (navigator.share) {
      await navigator.share({ title: `${todayVerse.ref} — Verse of the Day`, text, url: pageUrl });
    } else {
      await navigator.clipboard.writeText(`${text}\n${pageUrl}`);
      toast.success("Verse copied to clipboard!");
    }
  };

  const themeColor = themeColors[todayVerse.theme] || themeColors.default;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="verse of the day, catholic verse of the day, bible verse of the day, daily catholic bible verse, daily scripture, bible verse for today, random bible verse" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={`"${todayVerse.text}" — ${todayVerse.ref}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="article:modified_time" content={isoDate} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://guidecatholic.com/" },
                { "@type": "ListItem", "position": 2, "name": "Daily Bible Verse", "item": "https://guidecatholic.com/daily-verses/" },
                ...(isDated ? [{ "@type": "ListItem", "position": 3, "name": todayVerse.ref, "item": pageUrl }] : [])
              ]
            },
            {
              "@type": "Article",
              "headline": pageTitle.replace(" | Guide Catholic", ""),
              "description": description,
              "dateModified": isoDate,
              "url": pageUrl,
              "author": { "@type": "Organization", "name": "Guide Catholic", "url": "https://guidecatholic.com" },
              "publisher": { "@type": "Organization", "name": "Guide Catholic", "url": "https://guidecatholic.com" },
              "mainEntityOfPage": pageUrl
            },
            {
              "@type": "ItemList",
              "name": "Bible verses coming up this week",
              "itemListElement": upcoming.map((day, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": `${day.verse.ref}: ${day.verse.text}`,
                "url": `https://guidecatholic.com/daily-verses/${day.iso}/`
              }))
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Breadcrumb — with top padding for fixed navbar */}
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              {isDated ? (
                <>
                  <Link to="/daily-verses/" className="hover:text-accent">Daily Verses</Link>
                  <span>/</span>
                  <span className="text-text">{todayVerse.ref}</span>
                </>
              ) : (
                <span className="text-text">Daily Verses</span>
              )}
            </nav>
          </div>
        </div>

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">

            {/* Page title */}
            <div className="text-center mb-8">
              {isDated ? (
                <>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">Catholic Verse of the Day</p>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-3">{todayVerse.ref} — Verse of the Day</h1>
                  <p className="text-text-muted leading-relaxed max-w-xl mx-auto">
                    Catholic Bible verse for {today}, with reflection, prayer, and a link to the full chapter.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-accent mb-3">Daily Bible Verse</h1>
                  <p className="text-text-muted leading-relaxed max-w-xl mx-auto">
                    A new Catholic Bible verse every 24 hours, with a reflection, a prayer, and themes you can browse anytime.
                  </p>
                  {hubToday && (
                    <p className="text-sm text-text-muted mt-4">
                      Stable link for today:{" "}
                      <Link to={`/daily-verses/${hubToday.iso}/`} className="text-accent font-semibold underline underline-offset-2">
                        /daily-verses/{hubToday.iso}/
                      </Link>
                    </p>
                  )}
                </>
              )}
              {invalidDate && (
                <p className="text-sm text-text mt-4">This date is outside the next 100 daily verses. The verse below is today's.</p>
              )}
            </div>

            <article className="bg-surface border border-border rounded-3xl p-8 md:p-12 mb-8 text-center shadow-sm">
              <div className="inline-flex rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white mb-3">
                {today}
              </div>
              <div className="mb-8">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${themeColor}`}>
                  Theme: {todayVerse.theme}
                </span>
              </div>
              <blockquote className="font-display text-2xl md:text-3xl italic text-text leading-relaxed mb-6">
                “{todayVerse.text}”
              </blockquote>
              <p className="text-text-muted text-lg mb-10">— {todayVerse.ref}</p>

              <div className="text-left border-t border-border pt-8">
                <h2 className="font-display text-xl font-bold text-text mb-3">Reflection on {todayVerse.ref}</h2>
                <p className="text-text leading-relaxed">{dailyCopy.reflection}</p>
                {themeArticle && (
                  <p className="text-text leading-relaxed mt-4">
                    More on this theme:{" "}
                    <Link to={themeArticle.href} className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">
                      {themeArticle.label}
                    </Link>
                    .
                  </p>
                )}
              </div>

              <div className="text-left mt-8 border-l-4 border-accent bg-accent/5 rounded-r-xl p-5">
                <p className="text-text leading-relaxed">
                  {dailyCopy.prayer}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                <a href={chapterUrl(todayVerse.ref)} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Full Chapter
                  </Button>
                </a>
                <Button onClick={handleCopy} variant="outline" className="gap-2">
                  <Copy className="w-4 h-4" />
                  Copy Verse
                </Button>
              </div>

              <div className="border-t border-border mt-10 pt-8">
                <h2 className="font-display text-xl font-bold text-text mb-2">Share God's Word with Friends</h2>
                <p className="text-text-muted mb-4">Send today's verse to someone who needs it.</p>
                <Button onClick={handleShare} variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-border mt-8 pt-6 text-sm">
                {prevDay ? (
                  <Link to={`/daily-verses/${prevDay.iso}/`} className="text-left text-accent font-medium hover:underline">
                    ← Previous day
                  </Link>
                ) : <span />}
                <Link to="/daily-verses/" className="text-accent font-medium hover:underline">
                  Today's hub
                </Link>
                {nextDay ? (
                  <Link to={`/daily-verses/${nextDay.iso}/`} className="text-right text-accent font-medium hover:underline">
                    Next day →
                  </Link>
                ) : <span />}
              </div>
            </article>

            <div id="random-bible-verse" className="bg-surface border border-border rounded-2xl p-6 mb-8">
              <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2">
                <Shuffle className="w-5 h-5 text-accent" />
                Random Bible Verse
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                The verse of the day stays fixed for 24 hours. A random Bible verse is a different passage each time you ask — or open the{" "}
                <Link to="/random-bible-verse/" className="text-accent font-semibold underline underline-offset-2">
                  random Bible verse generator
                </Link>
                .
              </p>
              {randomVerse && (
                <blockquote className="border-l-4 border-accent pl-4 mb-4">
                  <p className="font-display text-xl text-text leading-relaxed">"{randomVerse.text}"</p>
                  <cite className="text-accent font-medium not-italic">— {randomVerse.ref} · {randomVerse.theme}</cite>
                </blockquote>
              )}
              <Button onClick={drawRandom} variant="outline" className="gap-2">
                <Shuffle className="w-4 h-4" />
                {randomVerse ? "Another random Bible verse" : "Show a random Bible verse"}
              </Button>
            </div>

            {/* Quiz CTA */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 mb-10 text-center">
              <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-text mb-3">
                How deep is your Catholic life?
              </h2>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                This verse is just one dimension of faith. Discover how you're living across all 5 areas — Eucharist, Prayer, Formation, Devotions, and Witness — with our free assessment.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="group">
                  Take the Catholic Life Assessment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-xs text-text-muted mt-3">30 questions · 10 minutes · Personalized guide</p>
            </div>

            {/* Coming up */}
            <div className="mb-10">
              <h2 className="font-display text-xl font-bold text-text mb-5 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-accent" />
                Coming Up This Week
              </h2>
              <div className="space-y-3">
                {upcoming.map((day) => {
                  const color = themeColors[day.verse.theme] || themeColors.default;
                  return (
                    <Link key={day.iso} to={`/daily-verses/${day.iso}/`} className="bg-surface border border-border rounded-xl p-4 flex items-start gap-4 hover:border-accent/40">
                      <div className="text-center min-w-[52px]">
                        <p className="text-xs text-text-muted">{day.date.toLocaleDateString("en-US", { weekday: "short" })}</p>
                        <p className="font-bold text-lg text-text">{day.date.getDate()}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color}`}>{day.verse.theme}</span>
                        </div>
                        <p className="text-sm text-text italic line-clamp-2">"{day.verse.text}"</p>
                        <p className="text-xs text-accent font-medium mt-1">— {day.verse.ref}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Why daily verses */}
            <div className="bg-surface border border-border rounded-2xl p-6 mb-8">
              <h2 className="font-display text-xl font-bold text-text mb-4">Why Read a Daily Catholic Bible Verse?</h2>
              <div className="space-y-3 text-text leading-relaxed">
                <p>The Catholic Church has always encouraged the faithful to nourish themselves with Sacred Scripture. The Second Vatican Council taught that "ignorance of Scripture is ignorance of Christ" (St. Jerome, quoted in Dei Verbum).</p>
                <p>A verse of the day is a small, repeatable habit: one line you can memorize, pray, and share. It does not replace the readings at Mass. The Lectionary follows the liturgical year. This page is personal prayer between Sundays — Psalms, Gospels, the letters of St. Paul, and the wisdom books.</p>
                <p>Bookmark this page and return each morning. The title shows today's reference so you can see, before you click, which passage is waiting.</p>
              </div>
            </div>

            <div id="bible-verses-by-theme" className="mb-4">
              <h2 className="font-display text-xl font-bold text-text mb-3">Bible Verses by Theme</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Choose a theme to see every verse on this page that belongs to it. Each theme also appears on the verse of the day when that day's passage is drawn.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {themeIndex.map(([theme]) => (
                  <button
                    key={theme}
                    type="button"
                    onClick={() => setThemeFilter(themeFilter === theme ? null : theme)}
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${themeFilter === theme ? "bg-accent text-white border-accent" : "bg-surface border-border text-text"}`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
              {themeFilter && (
                <div className="space-y-3 mb-6">
                  <h3 className="font-display text-lg font-bold text-text">{themeFilter} verses</h3>
                  {filtered.map((verse) => (
                    <div key={`${verse.ref}-${verse.text}`} className="bg-surface border border-border rounded-xl p-4">
                      <p className="text-text italic">"{verse.text}"</p>
                      <p className="text-sm text-accent font-medium mt-1">— {verse.ref}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {isDated ? (
              <BlogFAQ title={`Questions about ${todayVerse.ref}`} faqs={faqsForDate(isoDate)} />
            ) : (
              <BlogFAQ faqs={faqs} />
            )}

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
