import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Copy, Share2, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { catholicVerses, chapterUrl, type CatholicVerse } from "@/data/catholicVerses";
import { toast } from "sonner";

const PAGE_URL = "https://guidecatholic.com/random-bible-verse/";
const TITLE = "Random Bible Verse Generator | Guide Catholic";
const DESCRIPTION =
  "Generate a random Bible verse in one click. Filter by theme, copy it, share it, or open the full chapter. A free Catholic Scripture generator.";

const faqs = [
  {
    question: "What is a random Bible verse?",
    answer:
      "A random Bible verse is one passage drawn from this Catholic collection each time you ask. It changes when you click, so you can read another line without waiting until tomorrow.",
  },
  {
    question: "How is a random Bible verse different from the verse of the day?",
    answer:
      "The verse of the day stays the same for 24 hours so a household can share one line. A random Bible verse is a new draw. Use the daily page for a stable habit, and this generator when you want another passage now.",
  },
  {
    question: "Can I get a random Bible verse on one theme?",
    answer:
      "Yes. Choose a theme such as hope, peace, prayer, or the Eucharist, then generate. The next verse will come from that theme. Choose All themes to draw from the full collection.",
  },
  {
    question: "How many verses are in this generator?",
    answer: `This generator draws from ${catholicVerses.length} short Catholic passages — Psalms, Gospels, the letters of St. Paul, and the wisdom books. Open the full chapter on Catholic Bible Online when you want the surrounding text.`,
  },
  {
    question: "Can I copy or share a random Bible verse?",
    answer:
      "Yes. Copy places the verse and its reference on your clipboard. Share uses your phone or computer share sheet, or copies the same text with a link back to this page.",
  },
];

function pickVerse(pool: CatholicVerse[], current: CatholicVerse | null) {
  if (pool.length === 0) return current;
  if (pool.length === 1) return pool[0];
  let next = pool[Math.floor(Math.random() * pool.length)];
  if (current && next.text === current.text && next.ref === current.ref) {
    const index = pool.findIndex((verse) => verse.text === next.text && verse.ref === next.ref);
    next = pool[(index + 1) % pool.length];
  }
  return next;
}

export default function RandomBibleVersePage() {
  const themes = useMemo(
    () => Array.from(new Set(catholicVerses.map((verse) => verse.theme))).sort(),
    [],
  );
  const [theme, setTheme] = useState("All themes");
  const [verse, setVerse] = useState<CatholicVerse>(catholicVerses[0]);
  const [recent, setRecent] = useState<CatholicVerse[]>([]);

  const pool = theme === "All themes" ? catholicVerses : catholicVerses.filter((item) => item.theme === theme);

  const draw = () => {
    const next = pickVerse(pool, verse);
    if (!next) return;
    setVerse(next);
    setRecent((list) => [next, ...list.filter((item) => item.text !== next.text || item.ref !== next.ref)].slice(0, 5));
  };

  const versePlain = `"${verse.text}" — ${verse.ref}`;

  const copy = async () => {
    await navigator.clipboard.writeText(versePlain);
    toast.success("Verse copied.");
  };

  const share = async () => {
    const text = `${versePlain}\n\nRandom Bible Verse from Guide Catholic`;
    if (navigator.share) {
      await navigator.share({ title: "Random Bible Verse", text, url: PAGE_URL });
    } else {
      await navigator.clipboard.writeText(`${text}\n${PAGE_URL}`);
      toast.success("Verse copied to clipboard!");
    }
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://guidecatholic.com/" },
                { "@type": "ListItem", position: 2, name: "Random Bible Verse", item: PAGE_URL },
              ],
            },
            {
              "@type": "WebApplication",
              name: "Random Bible Verse Generator",
              applicationCategory: "ReferenceApplication",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              description: DESCRIPTION,
              url: PAGE_URL,
              publisher: { "@type": "Organization", name: "Guide Catholic", url: "https://guidecatholic.com" },
            },
          ],
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="text-text">Random Bible Verse</span>
            </nav>
          </div>
        </div>

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">Catholic Scripture generator</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-3">Random Bible Verse</h1>
              <p className="text-text-muted leading-relaxed max-w-xl mx-auto">
                Draw a new Catholic Bible verse whenever you want one. Filter by theme, then copy it, share it, or read the chapter.
              </p>
            </div>

            <div className="mb-8 rounded-xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-text leading-relaxed">
                <strong>A random Bible verse</strong> is a passage chosen when you click, not a line that stays fixed all day. Guide Catholic also keeps a{" "}
                <Link to="/daily-verses/" className="text-accent font-semibold underline underline-offset-2">verse of the day</Link>{" "}
                that renews every 24 hours.
              </p>
            </div>

            <article className="bg-surface border border-border rounded-3xl p-8 md:p-12 mb-8 text-center shadow-sm">
              <label className="block text-sm font-semibold text-text mb-2" htmlFor="verse-theme">Theme</label>
              <select
                id="verse-theme"
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
                className="mb-8 w-full max-w-xs rounded-full border border-border bg-background px-4 py-2 text-sm text-text"
              >
                <option>All themes</option>
                {themes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-4">{verse.theme}</p>
              <blockquote className="font-display text-2xl md:text-3xl italic text-text leading-relaxed mb-6">
                “{verse.text}”
              </blockquote>
              <p className="text-text-muted text-lg mb-8">— {verse.ref}</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button onClick={draw} className="gap-2">
                  <Shuffle className="w-4 h-4" />
                  New random Bible verse
                </Button>
                <Button onClick={copy} variant="outline" className="gap-2">
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
                <Button onClick={share} variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
              <div className="mt-4">
                <a href={chapterUrl(verse.ref)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold underline underline-offset-2">
                  <BookOpen className="w-4 h-4" />
                  Read {verse.ref} in full
                </a>
              </div>
              <p className="text-xs text-text-muted mt-6">{pool.length} verses in this draw · {catholicVerses.length} in the full collection</p>
            </article>

            {recent.length > 0 && (
              <div className="mb-10">
                <h2 className="font-display text-xl font-bold text-text mb-4">Verses you just drew</h2>
                <div className="space-y-3">
                  {recent.map((item) => (
                    <div key={`${item.ref}-${item.text}`} className="bg-surface border border-border rounded-xl p-4">
                      <p className="text-text italic">“{item.text}”</p>
                      <p className="text-sm text-accent font-medium mt-1">— {item.ref} · {item.theme}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-10">
              <h2 className="font-display text-xl font-bold text-text mb-3">How the random Bible verse generator works</h2>
              <div className="space-y-3 text-text leading-relaxed">
                <p>Choose a theme or leave it on all themes. Each click draws a different passage from the collection, so the same line does not repeat immediately.</p>
                <p>Copy the verse for a note or a message. Share sends the text and a link to this page. Read the full chapter when one line is not enough.</p>
                <p>For one stable line each morning, use the verse of the day. For another passage right now, stay here and draw again.</p>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="font-display text-xl font-bold text-text mb-3">Bible verses by theme</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Pick a theme to narrow the next random Bible verse. The themes below are the ones in this generator.
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setTheme("All themes")}
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${theme === "All themes" ? "bg-accent text-white border-accent" : "bg-surface border-border text-text"}`}
                >
                  All themes
                </button>
                {themes.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTheme(item)}
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${theme === item ? "bg-accent text-white border-accent" : "bg-surface border-border text-text"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <BlogFAQ title="Questions about the random Bible verse generator" faqs={faqs} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
