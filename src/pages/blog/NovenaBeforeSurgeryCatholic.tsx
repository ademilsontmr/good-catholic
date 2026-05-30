import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaBeforeSurgeryCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace | Guide Catholic</title>
        <meta name="description" content="Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States." />
        <meta name="keywords" content="novena before surgery, catholic prayer before surgery, 9 day novena healing surgery, prayer for operation catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-before-surgery-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace" description="Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States." url="https://guidecatholic.com/blog/novena-before-surgery-catholic/" datePublished="2026-06-01" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Novena Before Surgery", url: "https://guidecatholic.com/blog/novena-before-surgery-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena Before Surgery</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace</h1>
              <p className="text-xl text-text-muted leading-relaxed">Facing an operation brings fear and uncertainty. A nine-day novena unites patient and family in prayer for the surgeon's hands, recovery, and trust in God's will.</p>
            </header>
            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10"><HeartPulse className="w-24 h-24 text-rose-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Begin the novena nine days before the scheduled surgery, or as soon as you know the date. Receive the Sacraments if possible — especially Confession and Anointing of the Sick for serious procedures.</LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">Lord Jesus, Divine Physician, I entrust this surgery and recovery to you. Guide the hands of the medical team, calm my anxiety, and grant healing according to your holy will. Mary, Health of the Sick, and Saint Luke, pray for [name]. Saint Padre Pio and Saint Peregrine, intercede for a successful operation and peaceful recovery. Amen.</p>
              </div>
              <QuizCTA title="Prayer in illness" description="Take the Catholic life assessment for guidance on suffering, prayer, and hope." />
            </div>
            <BlogFAQ faqs={[
              { question: "When should I start a novena before surgery?", answer: "Ideally nine days before the operation. If surgery is sooner, pray daily until the procedure and continue after if needed." },
              { question: "Can family members pray the novena for the patient?", answer: "Yes. This is one of the most common forms — loved ones praying nine days for someone undergoing surgery." },
              { question: "Should I receive Anointing of the Sick?", answer: "For serious surgery or illness, yes. Ask your parish priest; it is not only for the dying but for the seriously ill." },
              { question: "Which saint is patron of surgery?", answer: "Saint Luke (physician), Saint Peregrine (cancer), and Saint Padre Pio (healing) are often invoked alongside Mary, Health of the Sick." },
            ]} />
            <RelatedArticles currentSlug="novena-before-surgery-catholic" />
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
