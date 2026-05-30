import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function UndoerOfKnotsNovenaGuide() {
  return (
    <>
      <Helmet>
        <title>Undoer of Knots Novena: 9-Day Prayer to Mary (Full Text & How to Pray) | Guide Catholic</title>
        <meta name="description" content="Mary Undoer of Knots novena — 9-day Catholic prayer with full text. How to pray when life feels tangled: marriage, family, work, and impossible situations." />
        <meta name="keywords" content="undoer of knots novena, mary undoer of knots prayer, 9 day novena undoer of knots, novena to mary undoer of knots full text" />
        <link rel="canonical" href="https://guidecatholic.com/blog/undoer-of-knots-novena-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Undoer of Knots Novena: 9-Day Prayer to Mary (Full Text & How to Pray)" description="Mary Undoer of Knots novena — 9-day Catholic prayer with full text. How to pray when life feels tangled: marriage, family, work, and impossible situations." url="https://guidecatholic.com/blog/undoer-of-knots-novena-guide/" datePublished="2026-06-01" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Undoer of Knots Novena", url: "https://guidecatholic.com/blog/undoer-of-knots-novena-guide/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Undoer of Knots Novena</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Undoer of Knots Novena: 9-Day Prayer to Mary (Full Text & How to Pray)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Mary, Undoer of Knots, is a devotion Pope Francis popularized worldwide. When problems feel tangled beyond human fixing, Catholics pray this nine-day novena for her intercession.</p>
            </header>
            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10"><Link2 className="w-24 h-24 text-indigo-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="undoer-of-knots-novena-guide">The image depicts Mary untying a ribbon full of knots — symbolizing sins, conflicts, and dead ends she loosens by bringing them to her Son. Name the "knot" in your intention: a feud, addiction, infertility, legal battle, or inner wound.</LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Novena</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Pray nine consecutive days at a set time.</li>
                <li>Begin with the Sign of the Cross; optionally meditate on the Undoer of Knots image.</li>
                <li>Recite the prayer below; add a Hail Mary and Glory Be if you wish.</li>
              </ol>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Mary, Undoer of Knots — Daily Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">Virgin Mary, Mother of fair love, Mother who never refuses to come to the aid of a child in need, Mother whose hands do not tire, whose eyes do not grow weary of watching over us, untier of knots in our life, I place this knot [name it] in your hands. You know how much it torments me. Take it, Mother, and with your long fingers deftly undo it. Amen.</p>
              </div>
              <QuizCTA title="Marian devotion in daily life" description="Take the Catholic life assessment for guidance on prayer and trust in Mary." />
            </div>
            <BlogFAQ faqs={[
              { question: "Who started the Undoer of Knots devotion?", answer: "The painting dates to early 1700s Germany. Pope Francis discovered it in Augsburg and spread the devotion in Latin America and globally." },
              { question: "What kinds of knots can I bring to Mary?", answer: "Any persistent problem — family conflict, unemployment, illness, sin, or situations that seem stuck." },
              { question: "Is there an official feast day?", answer: "There is no universal feast solely for Undoer of Knots; many pray on Saturdays in honor of Mary or anytime in need." },
              { question: "How many days is the Undoer of Knots novena?", answer: "Nine consecutive days is the standard novena format." },
            ]} />
            <RelatedArticles currentSlug="undoer-of-knots-novena-guide" />
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
