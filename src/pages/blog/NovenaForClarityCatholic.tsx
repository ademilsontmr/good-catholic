import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaForClarityCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena for Clarity: 9-Day Catholic Prayer When You Need Direction | Guide Catholic</title>
        <meta name="description" content="Pray the Novena for Clarity over 9 days — full Catholic prayer text, when to start, and how to ask God for direction in decisions, work, and relationships." />
        <meta name="keywords" content="novena for clarity, 9 day novena clarity, catholic prayer for direction, novena when confused, prayer for discernment novena" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-for-clarity-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena for Clarity: 9-Day Catholic Prayer When You Need Direction" description="Pray the Novena for Clarity over 9 days — full Catholic prayer text, when to start, and how to ask God for direction in decisions, work, and relationships." url="https://guidecatholic.com/blog/novena-for-clarity-catholic/" datePublished="2026-06-01" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena for Clarity</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena for Clarity: 9-Day Catholic Prayer When You Need Direction</h1>
              <p className="text-xl text-text-muted leading-relaxed">When a decision feels heavy and the path ahead is unclear, many Catholics pray a nine-day novena asking the Holy Spirit for clarity, peace, and right judgment.</p>
            </header>
            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10"><Compass className="w-24 h-24 text-sky-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-clarity-catholic">A novena is nine days of sustained prayer — imitating the apostles waiting for the Spirit. Clarity rarely means God removes every crossroad; it means you gain the light to choose faithfully.</LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray This Novena</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Name your intention (job, relationship, vocation, health decision).</li>
                <li>Pray each day for nine consecutive days at the same time if possible.</li>
                <li>Begin with the Sign of the Cross; end with Glory Be and a brief silence.</li>
                <li>Combine with Confession and Sunday Mass if the decision is serious.</li>
              </ol>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer for Clarity</h3>
                <p className="text-text italic leading-relaxed text-sm">Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love. Send forth your Spirit and they shall be created, and you shall renew the face of the earth. O God, who taught the hearts of the faithful by the light of the Holy Spirit, grant that by the same Spirit I may be truly wise and ever rejoice in his consolation. Through Christ our Lord. Amen.</p>
                <p className="text-text italic leading-relaxed text-sm mt-4">Lord, I ask for clarity about [your intention]. Give me a mind enlightened by faith, a heart docile to your will, and the courage to follow where you lead — even when the path is not what I expected. Mary, Seat of Wisdom, pray for me. Amen.</p>
              </div>
              <QuizCTA title="Need help with discernment?" description="Take the Catholic life assessment for practical guidance on prayer and vocational decisions." />
            </div>
            <BlogFAQ faqs={[
              { question: "How long is a novena for clarity?", answer: "Nine consecutive days. Some people extend the same intention with a second novena, but the classic form is nine days." },
              { question: "Which saint is best for clarity?", answer: "Many pray to the Holy Spirit, Saint Joseph (for practical decisions), or Mary, Seat of Wisdom. This novena invokes the Holy Spirit directly." },
              { question: "Can I start a novena on any day?", answer: "Yes. You do not need to wait for a feast day, though some begin before Pentecost or a major decision deadline." },
              { question: "Is clarity the same as getting the answer I want?", answer: "No. Clarity is knowing God's will and having peace to accept it, which may differ from your first preference." },
            ]} />
            <RelatedArticles currentSlug="novena-for-clarity-catholic" />
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
