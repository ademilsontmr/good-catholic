import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function LitanyOfHumilityCatholic() {
  return (
    <>
      <Helmet>
        <title>Litany of Humility: Full Text & Why Catholics Pray It Daily | Guide Catholic</title>
        <meta name="description" content="The Litany of Humility with full Catholic text, attributed to Cardinal Merry del Val, meaning of each petition, and why it is popular in U.S. Catholic devotion." />
        <meta name="keywords" content="litany of humility, litany of humility full text, catholic humility prayer, deliver me jesus litany, cardinal merry del val prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/litany-of-humility-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Litany of Humility: Full Text & Why Catholics Pray It Daily" description="The Litany of Humility with full Catholic text, attributed to Cardinal Merry del Val, meaning of each petition, and why it is popular in U.S. Catholic devotion." url="https://guidecatholic.com/blog/litany-of-humility-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Litany of Humility", url: "https://guidecatholic.com/blog/litany-of-humility-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Litany of Humility</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Litany of Humility: Full Text & Why Catholics Pray It Daily</h1>
              <p className="text-xl text-text-muted leading-relaxed">From fear of being humiliated to desire to be forgotten — the Litany of Humility names the hidden pride that blocks holiness. It has spread rapidly among American Catholics seeking authenticity.</p>
            </header>
            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10"><Flower2 className="w-24 h-24 text-violet-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Litany of Humility (Sample Petitions)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text text-sm leading-relaxed space-y-2">
                <p>O Jesus, meek and humble of heart, hear me. <em>From the desire of being esteemed, deliver me, Jesus.</em></p>
                <p><em>From the desire of being loved, deliver me, Jesus.</em></p>
                <p><em>From the desire of being extolled, deliver me, Jesus.</em></p>
                <p><em>From the fear of being humiliated, deliver me, Jesus.</em></p>
                <p><em>From the fear of being calumniated, deliver me, Jesus.</em></p>
                <p className="text-text-muted text-xs pt-2">The litany continues with paired petitions — deliver me from fear of… / grant me the grace to desire… — ending with trust in Jesus, meek and humble of heart.</p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-humility-catholic">Humility is not self-hatred; it is truth about ourselves before God. This litany is sharp because it names social media-era temptations — reputation, likes, visibility — as spiritual obstacles.</LinkedText>
              <QuizCTA title="Grow in virtue and self-knowledge" description="Take the Catholic life assessment for guidance on humility, prayer, and daily holiness." />
            </div>
            <BlogFAQ faqs={[
              { question: "Who wrote the Litany of Humility?", answer: "It is widely attributed to Cardinal Rafael Merry del Val (1865–1930), Secretary of State under Pope Pius X." },
              { question: "How do you pray the Litany of Humility?", answer: "Pray the opening invocation, then respond Deliver me, Jesus or Grant me the grace to desire it, Jesus to each petition, as in other litanies." },
              { question: "Is the Litany of Humility approved?", answer: "It is used widely in private and parish devotion. It is not part of the official Liturgy of the Hours but is printed in many Catholic prayer books." },
              { question: "Why is it popular among young Catholics?", answer: "It honestly names interior struggles with ego and approval-seeking, offering concrete language for repentance and trust in Christ." },
            ]} />
            <RelatedArticles currentSlug="litany-of-humility-catholic" />
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
