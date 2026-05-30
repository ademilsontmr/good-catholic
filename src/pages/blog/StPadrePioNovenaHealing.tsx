import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StPadrePioNovenaHealing() {
  return (
    <>
      <Helmet>
        <title>St. Padre Pio Novena for Healing: 9-Day Prayer (Full Text) | Guide Catholic</title>
        <meta name="description" content="St. Padre Pio Novena for healing — 9-day Catholic prayer with full text. Physical and spiritual healing through the intercession of Padre Pio." />
        <meta name="keywords" content="st padre pio novena healing, padre pio novena 9 days, padre pio prayer for healing, novena to padre pio full text" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-padre-pio-novena-healing/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Padre Pio Novena for Healing: 9-Day Prayer (Full Text)" description="St. Padre Pio Novena for healing — 9-day Catholic prayer with full text. Physical and spiritual healing through the intercession of Padre Pio." url="https://guidecatholic.com/blog/st-padre-pio-novena-healing/" datePublished="2026-06-01" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Padre Pio Novena for Healing", url: "https://guidecatholic.com/blog/st-padre-pio-novena-healing/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Padre Pio Novena for Healing</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Padre Pio Novena for Healing: 9-Day Prayer (Full Text)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Saint Pio of Pietrelcina bore the stigmata and spent hours in the confessional. Catholics worldwide pray his novena for healing of body and soul.</p>
            </header>
            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10"><Cross className="w-24 h-24 text-red-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-padre-pio-novena-healing">Padre Pio's feast day is September 23. His intercession is sought for illness, chronic pain, and spiritual wounds. Pray nine consecutive days, offering your suffering united to Christ's cross.</LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Padre Pio Novena Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">Beloved Padre Pio, you bore the wounds of Christ and spent your life in service of souls. Intercede for me before the Lord that I may obtain healing [name your intention]. Help me to accept God's will with trust, and to offer my pain for the conversion of sinners and the salvation of souls. Amen.</p>
              </div>
              <QuizCTA title="Prayer in suffering" description="Take the Catholic life assessment for guidance on illness, hope, and faith." />
            </div>
            <BlogFAQ faqs={[
              { question: "What is Padre Pio the patron saint of?", answer: "He is widely invoked for healing, stress relief, and civil defense volunteers; he is not officially listed as patron of one cause but devotion focuses on healing and confession." },
              { question: "Can I pray the Padre Pio novena for someone else?", answer: "Yes. Offer each day for a sick friend or family member by name." },
              { question: "When is Padre Pio's feast day?", answer: "September 23 — begin the novena on September 14 or any time of need." },
              { question: "Does Padre Pio guarantee physical healing?", answer: "No saint guarantees a cure. We ask for healing according to God's will, which may include spiritual healing and peace even when illness remains." },
            ]} />
            <RelatedArticles currentSlug="st-padre-pio-novena-healing" />
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
