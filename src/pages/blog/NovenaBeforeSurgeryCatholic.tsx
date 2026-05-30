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
      <ArticleSchema title="Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace" description="Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States." url="https://guidecatholic.com/blog/novena-before-surgery-catholic/" datePublished="2026-05-30" />
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace</h1>
              <p className="text-xl text-text-muted leading-relaxed">Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation.</p>
            </header>
            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10"><HeartPulse className="w-24 h-24 text-rose-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">A novena before surgery is nine days of Catholic prayer for the patient, medical team, and successful recovery — invoke Christ the Divine Physician, Mary Health of the Sick, St. Luke, St. Peregrine, and St. Padre Pio. Receive Anointing of the Sick for serious operations; prayer complements medicine.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Do Catholics Pray To?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Catholics invoke Christ the Divine Physician, Mary Health of the Sick, Saint Luke the evangelist-physician, Saint Peregrine (patron of cancer patients), and Saint Padre Pio for healing. Hospital chaplains across the U.S. offer sacraments before major operations.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">A novena is a nine-day prayer rooted in the time the apostles and Mary spent in prayer between the Ascension and Pentecost (Acts 1:14). The word comes from the Latin <em>novem</em>, meaning nine. Unlike a single spontaneous prayer, a novena builds sustained trust over consecutive days.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray This Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Surgery brings fear of pain, complications, or death. Nine days unite family prayer with medical expertise. The Church blesses anesthesia and surgery as good when used to heal — prayer sanctifies the wait before going under.</LinkedText>

              <QuizCTA title="How deep is your Catholic faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>Start nine days before surgery when the date is known.</li>
                <li><strong>Ask the parish for Anointing of the Sick</strong> — not only for the dying.</li>
                <li>Family prays daily even if the patient is weak.</li>
                <li>Follow all pre-op medical instructions.</li>
                <li>Continue prayer through recovery.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer Before Surgery</h3>
                <p className="text-text italic leading-relaxed text-sm">Lord Jesus, Divine Physician, I entrust this surgery and recovery to you. Guide the hands of the medical team, calm my anxiety, and grant healing according to your holy will. Mary, Health of the Sick, Saint Luke, Saint Padre Pio, and Saint Peregrine, intercede for [name] and a successful operation. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Family members often pray this novena at the bedside. Combine with St. Padre Pio novena for healing. Offer Mass intentions for the patient&apos;s recovery.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "When should I start?", answer: "Nine days before surgery; if sooner, pray daily until and after the procedure." },
              { question: "Can family pray for the patient?", answer: "Yes — one of the most common intercessory novenas." },
              { question: "Should I receive Anointing?", answer: "Yes for serious surgery or illness — it is for the seriously ill, not only the dying." },
              { question: "Which saints for surgery?", answer: "Saint Luke, Saint Peregrine, Saint Padre Pio, and Mary Health of the Sick." },
              { question: "Does prayer replace medical care?", answer: "No — follow doctors&apos; orders; prayer complements medicine." },
              { question: "Can I pray after surgery too?", answer: "Yes — extend prayer through rehabilitation." },
            ]} />
            <RelatedArticles currentSlug="novena-before-surgery-catholic" />
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
