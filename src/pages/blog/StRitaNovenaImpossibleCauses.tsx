import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StRitaNovenaImpossibleCauses() {
  return (
    <>
      <Helmet>
        <title>St. Rita Novena for Impossible Causes: 9-Day Prayer (Full Text) | Guide Catholic</title>
        <meta name="description" content="St. Rita Novena for impossible causes — 9-day Catholic prayer with full text. Patron of hopeless cases, how to pray, and when to start the novena." />
        <meta name="keywords" content="st rita novena impossible causes, saint rita novena 9 days, st rita prayer impossible, novena to st rita full text" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-rita-novena-impossible-causes/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Rita Novena for Impossible Causes: 9-Day Prayer (Full Text)" description="St. Rita Novena for impossible causes — 9-day Catholic prayer with full text. Patron of hopeless cases, how to pray, and when to start the novena." url="https://guidecatholic.com/blog/st-rita-novena-impossible-causes/" datePublished="2026-06-01" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Rita Novena</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer & Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 1, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Rita Novena for Impossible Causes: 9-Day Prayer (Full Text)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Saint Rita of Cascia — the "Saint of the Impossible" — endured suffering with heroic patience. Catholics pray her novena when human solutions seem exhausted.</p>
            </header>
            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10"><Sparkles className="w-24 h-24 text-purple-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-rita-novena-impossible-causes">Saint Rita (1381–1457) is invoked for impossible marriages, family strife, and situations without visible hope. Her feast day is May 22 — a natural time to begin this novena.</LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Traditional St. Rita Novena Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">O holy patron of those in need, Saint Rita, so humble, so pure, so mortified, so patient and of such compassionate love for the Crucified Jesus that you could obtain from him whatever you asked, obtain for me also my petition, if it be for the greater glory of God and the good of my soul. Help me to imitate your virtues so that I may one day share your glory in heaven. Amen.</p>
              </div>
              <QuizCTA title="Grow in patient trust" description="Take the Catholic life assessment for guidance on prayer and perseverance." />
            </div>
            <BlogFAQ faqs={[
              { question: "What is St. Rita patron saint of?", answer: "Impossible causes, abused wives, widows, and difficult marriages — among other intentions." },
              { question: "St. Rita vs St. Jude for impossible causes?", answer: "Both are invoked for hopeless cases. Many Catholics pray whichever devotion they feel drawn to, or both with distinct intentions." },
              { question: "When should I start the St. Rita novena?", answer: "Any time of need, or nine days before May 22 (her feast)." },
              { question: "How many days is the St. Rita novena?", answer: "Nine consecutive days, praying the novena prayer once daily." },
            ]} />
            <RelatedArticles currentSlug="st-rita-novena-impossible-causes" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
