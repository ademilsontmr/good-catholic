import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function PrayerOfStFrancisCatholic() {
  return (
    <>
      <Helmet>
        <title>Prayer of St. Francis (Make Me a Channel): Full Text & Meaning | Guide Catholic</title>
        <meta name="description" content="The Prayer of St. Francis — Make me a channel of your peace — with full text, meaning line by line, and how Catholics pray it for peace, service, and daily life." />
        <meta name="keywords" content="prayer of st francis, make me a channel of your peace, st francis prayer full text, peace prayer catholic, where there is hatred let me sow love" />
        <link rel="canonical" href="https://guidecatholic.com/blog/prayer-of-st-francis-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Prayer of St. Francis (Make Me a Channel): Full Text & Meaning" description="The Prayer of St. Francis — Make me a channel of your peace — with full text, meaning line by line, and how Catholics pray it for peace, service, and daily life." url="https://guidecatholic.com/blog/prayer-of-st-francis-catholic/" datePublished="2026-05-31" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Prayer of St. Francis", url: "https://guidecatholic.com/blog/prayer-of-st-francis-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Prayer of St. Francis</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 31, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Prayer of St. Francis (Make Me a Channel): Full Text & Meaning</h1>
              <p className="text-xl text-text-muted leading-relaxed">Lord, make me an instrument of your peace — this prayer is loved across the United States in parishes, schools, and times of crisis, even though its authorship is debated.</p>
            </header>
            <div className="aspect-video bg-lime-100 rounded-2xl flex items-center justify-center mb-10"><Bird className="w-24 h-24 text-lime-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer of St. Francis (Full Text)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed space-y-3">
                <p>Lord, make me an instrument of your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy.</p>
                <p>O Divine Master, grant that I may not so much seek to be consoled as to console, to be understood as to understand, to be loved as to love. For it is in giving that we receive, in pardoning that we are pardoned, and in dying that we are born to eternal life. Amen.</p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-of-st-francis-catholic">The spirit of St. Francis of Assisi — poverty, peace, love of creation — shines through this prayer whether or not he wrote it. Catholics pray it to ask God to remake the heart in the pattern of Christ.</LinkedText>
              <QuizCTA title="Grow in peace and charity" description="Take the Catholic life assessment for a personalized spiritual growth plan." />
            </div>
            <BlogFAQ faqs={[
              { question: "Did St. Francis of Assisi write this prayer?", answer: "The prayer first appeared in French in the early 20th century. It reflects Franciscan spirituality but was likely written later and attributed to Francis through popular devotion." },
              { question: "Is the Peace Prayer Catholic?", answer: "Yes. Its content is fully orthodox and widely used in Catholic churches, schools, and prayer groups in the U.S. and worldwide." },
              { question: "When should I pray it?", answer: "Any time — especially when facing conflict, before service work, at the start of the day, or when asking for a missionary heart." },
              { question: "Is this the same as the Canticle of the Sun?", answer: "No. The Canticle of Brother Sun is an authentic work of St. Francis in Italian. The Peace Prayer is a separate modern text." },
            ]} />
            <RelatedArticles currentSlug="prayer-of-st-francis-catholic" />
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
