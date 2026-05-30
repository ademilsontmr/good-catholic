import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StAnthonyNovenaLostThings() {
  return (
    <>
      <Helmet>
        <title>St. Anthony Novena for Lost Things: 9-Day Prayer (Full Text) | Guide Catholic</title>
        <meta name="description" content="St. Anthony Novena for lost things — 9-day Catholic prayer with full text to find missing items, keys, wallets, and documents." />
        <meta name="keywords" content="st anthony novena lost things, novena to find lost item, st anthony prayer 9 days, patron saint of lost things" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-anthony-novena-lost-things/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Anthony Novena for Lost Things: 9-Day Prayer (Full Text)" description="St. Anthony Novena for lost things — 9-day Catholic prayer with full text to find missing items, keys, wallets, and documents." url="https://guidecatholic.com/blog/st-anthony-novena-lost-things/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Anthony Novena for Lost Things", url: "https://guidecatholic.com/blog/st-anthony-novena-lost-things/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Anthony Novena for Lost Things</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Anthony Novena for Lost Things: 9-Day Prayer (Full Text)</h1>
              <p className="text-xl text-text-muted leading-relaxed">St.</p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10"><Search className="w-24 h-24 text-amber-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The St. Anthony novena for lost things asks the Franciscan Doctor of the Church to intercede when items are missing — keys, wallets, documents, or peace of mind. Catholics pray for nine days (or use the short rhyming prayer immediately); many report finding items during the novena.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Do Catholics Pray To?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-anthony-novena-lost-things">Saint Anthony of Padua (1195–1231) was a Franciscan friar and Doctor of the Church, famed for preaching across Italy and France. Devotion to him for lost things arose when a novice stole his psalter and returned it after Anthony prayed. His feast is June 13 — among the most popular saint days in U.S. parishes.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-anthony-novena-lost-things">A novena is a nine-day prayer rooted in the time the apostles and Mary spent in prayer between the Ascension and Pentecost (Acts 1:14). The word comes from the Latin <em>novem</em>, meaning nine. Unlike a single spontaneous prayer, a novena builds sustained trust over consecutive days.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray This Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-anthony-novena-lost-things">Lost keys, wallets, passports, or wedding rings trigger panic in millions of households. Catholics pray to Anthony not for magic but for intercession. Many find the item during the novena; others receive peace even if it is never recovered.</LinkedText>

              <QuizCTA title="How deep is your Catholic faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>Name the lost item specifically on day one.</li>
                <li>Begin any day, or nine days before June 13.</li>
                <li>Pray daily with the Sign of the Cross.</li>
                <li>Retrace steps and search while praying.</li>
                <li>Offer thanks or alms when the item is found.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">St. Anthony Prayer for Lost Things</h3>
                <p className="text-text italic leading-relaxed text-sm">St. Anthony, St. Anthony, please come around; something is lost and must be found. St. Anthony, perfect imitator of Jesus, who received from God the special power of restoring lost things, grant that I may find [what is lost]. At least restore peace of mind, which afflicts me more than the material loss. Through Christ our Lord. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-anthony-novena-lost-things">For legal documents or deeper crises, combine this novena with professional help. When situations feel impossible, many also pray to Saint Jude. St. Anthony, pray for us.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "Why is Anthony patron of lost things?", answer: "Tradition holds a novice stole his psalter and returned it after Anthony prayed — devotion spread from that story." },
              { question: "Must it be nine days?", answer: "Nine days is classic; many pray once and find the item quickly. Use nine days for valuable or long-missing items." },
              { question: "Can I pray for someone else?", answer: "Yes — for a child&apos;s backpack, spouse&apos;s wallet, or parent&apos;s hearing aids." },
              { question: "When is his feast day?", answer: "June 13. Parishes bless St. Anthony&apos;s Bread and hold special Masses." },
              { question: "What if I never find it?", answer: "The prayer asks for peace of mind even without recovery — that is itself a grace." },
              { question: "Is the rhyming prayer Catholic?", answer: "Yes — the short rhyme and longer prayer are both widely used in U.S. Catholic devotion." },
            ]} />
            <RelatedArticles currentSlug="st-anthony-novena-lost-things" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to Catholic prayer and devotion.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
