import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StMonicaNovenaForChildren() {
  return (
    <>
      <Helmet>
        <title>St. Monica Novena for Children: 9-Day Prayer for Conversion & Return | Guide Catholic</title>
        <meta name="description" content="St. Monica Novena for children — 9-day Catholic prayer for wayward sons and daughters, conversion, and return to the faith. Full text for parents in the USA." />
        <meta name="keywords" content="st monica novena for children, st monica prayer for son, novena for wayward child, st monica novena conversion" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-monica-novena-for-children/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Monica Novena for Children: 9-Day Prayer for Conversion & Return" description="St. Monica Novena for children — 9-day Catholic prayer for wayward sons and daughters, conversion, and return to the faith. Full text for parents in the USA." url="https://guidecatholic.com/blog/st-monica-novena-for-children/" datePublished="2026-06-01" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Monica Novena for Children", url: "https://guidecatholic.com/blog/st-monica-novena-for-children/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Monica Novena for Children</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Monica Novena for Children: 9-Day Prayer for Conversion & Return</h1>
              <p className="text-xl text-text-muted leading-relaxed">Saint Monica prayed for decades before her son Augustine converted. Parents across America still pray her novena when children leave the Church or struggle with faith.</p>
            </header>
            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10"><Users className="w-24 h-24 text-orange-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-monica-novena-for-children">Monica's tears were not wasted — Augustine became a Doctor of the Church. Her novena teaches patient, persistent love without nagging: pray, fast when able, and remain a witness of joy.</LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">St. Monica Novena Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">Exemplary Mother of the great Augustine, you perseveringly pursued your wayward son not with wild threats but with prayerful sighs to God. I thank you, O Saint Monica, for your intercession. Obtain for me, through your intercession, the conversion of [name], that they may return to God and the Catholic faith. Teach me to pray and wait with your holy patience. Amen.</p>
              </div>
              <QuizCTA title="Family faith at home" description="Take the Catholic life assessment for guidance on parenting and prayer." />
            </div>
            <BlogFAQ faqs={[
              { question: "How long did St. Monica pray for Augustine?", answer: "Tradition speaks of many years of tears and prayer — far longer than nine days. The novena is a focused beginning, not a limit." },
              { question: "Can grandparents pray the St. Monica novena?", answer: "Yes. Anyone who loves a child or grandchild away from the faith can offer this novena." },
              { question: "When is St. Monica's feast day?", answer: "August 27 — nine days before is a common time to start." },
              { question: "Should I tell my child I am praying?", answer: "That is your discernment. Some parents pray quietly; others mention it as an act of love, not pressure." },
            ]} />
            <RelatedArticles currentSlug="st-monica-novena-for-children" />
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
