import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaForMarriageCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena for Marriage: 9-Day Catholic Prayer for Your Spouse & Relationship | Guide Catholic</title>
        <meta name="description" content="Novena for marriage — 9-day Catholic prayer for your spouse, struggling relationship, or healing in marriage. Full prayer text and how to pray as a couple or alone." />
        <meta name="keywords" content="novena for marriage, catholic prayer for marriage, 9 day novena for spouse, prayer to save marriage catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-for-marriage-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena for Marriage: 9-Day Catholic Prayer for Your Spouse & Relationship" description="Novena for marriage — 9-day Catholic prayer for your spouse, struggling relationship, or healing in marriage. Full prayer text and how to pray as a couple or alone." url="https://guidecatholic.com/blog/novena-for-marriage-catholic/" datePublished="2026-06-01" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena for Marriage</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena for Marriage: 9-Day Catholic Prayer for Your Spouse & Relationship</h1>
              <p className="text-xl text-text-muted leading-relaxed">Whether your marriage needs healing, your spouse has drifted from faith, or you seek unity in daily life, this nine-day novena asks God to strengthen the sacramental bond.</p>
            </header>
            <div className="aspect-video bg-pink-100 rounded-2xl flex items-center justify-center mb-10"><Heart className="w-24 h-24 text-pink-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-marriage-catholic">Marriage is a sacrament — not merely a contract. Prayer invites grace into conflict, distance, and ordinary weariness. One spouse can pray alone; praying together when possible multiplies the fruit.</LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena for Marriage</h3>
                <p className="text-text italic leading-relaxed text-sm">Lord, you joined us in holy matrimony. Renew our love, heal what is broken, and teach us to forgive as you forgive. Bless my spouse [name] and our marriage. Mary and Joseph, model of holy spouses, pray for us. Saint Rita and Saint Monica, intercede for unity and peace in our home. Amen.</p>
              </div>
              <QuizCTA title="Faith in family life" description="Take the Catholic life assessment for guidance on marriage and domestic church." />
            </div>
            <BlogFAQ faqs={[
              { question: "Can one spouse pray the marriage novena alone?", answer: "Yes. Many spouses pray when the other will not join — trusting God to work through hidden intercession." },
              { question: "Is this novena for engaged couples too?", answer: "Yes. Adapt the intention for preparation for marriage and unity before the wedding." },
              { question: "Does prayer replace marriage counseling?", answer: "No. Serious conflict may need a priest, counselor, or Retrouvaille. Prayer and practical help belong together." },
              { question: "Which saints help marriages?", answer: "Holy Family, Saint Rita (difficult marriages), and Saint Monica (conversion of spouse or children) are common intercessors." },
            ]} />
            <RelatedArticles currentSlug="novena-for-marriage-catholic" />
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
