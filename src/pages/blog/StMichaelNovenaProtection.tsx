import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StMichaelNovenaProtection() {
  return (
    <>
      <Helmet>
        <title>St. Michael Novena for Protection: 9-Day Prayer (Full Text) | Guide Catholic</title>
        <meta name="description" content="St. Michael Novena for protection — 9-day Catholic prayer against evil, danger, and spiritual attack. Full prayer text, step-by-step guide, and FAQs." />
        <meta name="keywords" content="st michael novena protection, novena to st michael archangel, st michael prayer 9 days" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-michael-novena-protection/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Michael Novena for Protection: 9-Day Prayer (Full Text)" description="St. Michael Novena for protection — 9-day Catholic prayer against evil, danger, and spiritual attack. Full prayer text, step-by-step guide, and FAQs." url="https://guidecatholic.com/blog/st-michael-novena-protection/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Michael Novena for Protection: 9-Da...", url: "https://guidecatholic.com/blog/st-michael-novena-protection/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Michael Novena for Protection: 9-Da...</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Michael Novena for Protection: 9-Day Prayer (Full Text)</h1>
              <p className="text-xl text-text-muted leading-relaxed">St.</p>
            </header>
            <div className="aspect-video bg-cyan-100 rounded-2xl flex items-center justify-center mb-10"><Shield className="w-24 h-24 text-cyan-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The St. Michael novena for protection invokes the archangel against spiritual evil, danger, and temptation over nine days. Catholics pray during Lent, before travel, or amid spiritual attack — combining prayer with sacraments, prudence, and avoiding occult practices the Church forbids.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Do Catholics Pray To?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-novena-protection">Saint Michael is invoked for protection against evil — a novena many families pray in times of fear or spiritual attack. Catholics across the United States pray this novena in parishes, homes, and online prayer groups, trusting in God&apos;s mercy and the intercession of the saints.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-novena-protection">A novena is a nine-day prayer rooted in the time the apostles and Mary spent in prayer between the Ascension and Pentecost (Acts 1:14). The word comes from the Latin <em>novem</em>, meaning nine. Unlike a single spontaneous prayer, a novena builds sustained trust over consecutive days.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray This Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-novena-protection">Nine days of sustained prayer imitate the apostles waiting for Pentecost (Acts 1:14). Unlike a single hurried prayer, a novena builds trust and discipline — especially when the need is urgent or long-standing. The Church encourages novenas as persevering prayer, not as magic.</LinkedText>

              <QuizCTA title="How deep is your Catholic faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>Name your intention clearly on day one.</li>
                <li>Choose the same time each day for nine consecutive days.</li>
                <li>Begin with the Sign of the Cross; end with Glory Be if you wish.</li>
                <li><strong>Combine prayer with practical steps</strong> — medical, legal, financial, or family action.</li>
                <li>Offer thanks when you receive grace, even if the answer differs from your first hope.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, cast into hell Satan and all evil spirits. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-novena-protection">If this need continues, you may repeat the novena or seek related devotions on Guide Catholic. Ask your parish priest for guidance on serious moral or sacramental questions.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "How many days is this novena?", answer: "Nine consecutive days is the standard Catholic form." },
              { question: "Can I start on any day?", answer: "Yes — some begin before a relevant saint&apos;s feast day but any day is valid." },
              { question: "Can someone pray the novena for me?", answer: "Yes — family and friends often offer novenas for others by name." },
              { question: "Does prayer replace practical help?", answer: "No — especially for legal, medical, or financial needs, prayer and action belong together." },
              { question: "What if I miss a day?", answer: "Resume the next day; many Catholics complete nine days of prayer without strict calendar reset." },
              { question: "Is this approved by the Church?", answer: "Private novenas with orthodox content are widely encouraged; they are not the same as liturgical sacraments." },
            ]} />
            <RelatedArticles currentSlug="st-michael-novena-protection" />
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
