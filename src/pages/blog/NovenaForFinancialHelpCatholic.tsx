import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaForFinancialHelpCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena for Financial Help: 9-Day Catholic Prayer for Money & Debt | Guide Catholic</title>
        <meta name="description" content="Novena for financial help — 9-day Catholic prayer for money, debt, and bills. Full prayer text, how to pray when struggling financially, and trust in God's providence." />
        <meta name="keywords" content="novena for financial help, catholic prayer for money, novena for debt, 9 day prayer financial help" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-for-financial-help-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena for Financial Help: 9-Day Catholic Prayer for Money & Debt" description="Novena for financial help — 9-day Catholic prayer for money, debt, and bills. Full prayer text, how to pray when struggling financially, and trust in God's providence." url="https://guidecatholic.com/blog/novena-for-financial-help-catholic/" datePublished="2026-06-01" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena for Financial Help</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena for Financial Help: 9-Day Catholic Prayer for Money & Debt</h1>
              <p className="text-xl text-text-muted leading-relaxed">When bills pile up or debt feels crushing, a nine-day novena turns anxiety into sustained prayer — asking God for provision while you take responsible steps forward.</p>
            </header>
            <div className="aspect-video bg-green-100 rounded-2xl flex items-center justify-center mb-10"><Coins className="w-24 h-24 text-green-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-financial-help-catholic">Financial stress is one of the most common reasons Catholics turn to novenas. Prayer does not replace budgeting or counsel, but it anchors you in trust while you seek work, negotiate debt, or accept help.</LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">Lord Jesus, you multiplied loaves for the hungry and cared for the poor. I bring my financial need before you: [name your intention]. Provide what is necessary for my duties and grant wisdom to use resources well. Saint Anthony and Saint Jude, intercede for me. Our Lady of Good Help, pray for us. Amen.</p>
              </div>
              <QuizCTA title="Stewardship and trust" description="Take the Catholic life assessment for practical faith guidance in daily life." />
            </div>
            <BlogFAQ faqs={[
              { question: "Which saint is best for financial help?", answer: "Saint Jude (desperate cases), Saint Anthony (lost things and needs), and Saint Joseph (workers) are common. This novena invokes Jesus with several intercessors." },
              { question: "Can I pray a novena for debt relief?", answer: "Yes. Name the debt or bill in your intention and combine prayer with a realistic payment plan or counseling if needed." },
              { question: "Is it wrong to pray for money?", answer: "No. It is right to ask God for daily bread and what you need for your state in life, with detachment from greed." },
              { question: "How many days is a financial novena?", answer: "Nine consecutive days is the standard Catholic novena form." },
            ]} />
            <RelatedArticles currentSlug="novena-for-financial-help-catholic" />
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
