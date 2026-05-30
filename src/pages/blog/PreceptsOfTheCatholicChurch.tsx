import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function PreceptsOfTheCatholicChurch() {
  return (
    <>
      <Helmet>
        <title>Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know | Guide Catholic</title>
        <meta name="description" content="The five precepts of the Catholic Church explained — Mass on Sundays, Confession, Communion, fasting, and supporting the Church. U.S. Catholic guide for adults and teens." />
        <meta name="keywords" content="precepts of the catholic church, 5 precepts catholic, catholic church laws, sunday mass obligation, easter duty confession communion" />
        <link rel="canonical" href="https://guidecatholic.com/blog/precepts-of-the-catholic-church/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know" description="The five precepts of the Catholic Church explained — Mass on Sundays, Confession, Communion, fasting, and supporting the Church. U.S. Catholic guide for adults and teens." url="https://guidecatholic.com/blog/precepts-of-the-catholic-church/" datePublished="2026-05-31" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Precepts of the Church", url: "https://guidecatholic.com/blog/precepts-of-the-catholic-church/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Precepts of the Church</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 31, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know</h1>
              <p className="text-xl text-text-muted leading-relaxed">The precepts are the Church's minimum blueprint for a Catholic life — binding practices that keep believers connected to worship, sacraments, and the community of faith.</p>
            </header>
            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10"><Scale className="w-24 h-24 text-blue-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Five Precepts (Catechism 2041–2043)</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-8">
                <li><strong>Attend Mass</strong> on Sundays and holy days of obligation and rest from servile labor.</li>
                <li><strong>Confess sins</strong> at least once a year (Easter duty).</li>
                <li><strong>Receive Holy Communion</strong> at least during the Easter season.</li>
                <li><strong>Observe days of fasting and abstinence</strong> established by the Church.</li>
                <li><strong>Provide for the needs of the Church</strong> according to one's ability.</li>
              </ol>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">In the United States, holy days of obligation include six feasts (with some transferred when they fall on certain weekdays). The precepts are a floor, not a ceiling — saints exceed them through love.</LinkedText>
              <QuizCTA title="How is your Catholic life?" description="Take the Catholic life assessment for a personalized guide to sacraments and spiritual growth." />
            </div>
            <BlogFAQ faqs={[
              { question: "What are the precepts of the Catholic Church?", answer: "They are five minimum practices the Church sets for the faithful: Sunday Mass, annual Confession, Easter Communion, fasting/abstinence, and supporting the Church." },
              { question: "Are precepts the same as the Ten Commandments?", answer: "No. The Commandments are divine law. The precepts are ecclesiastical laws that apply the Commandments to Catholic life in the Church." },
              { question: "What is the Easter duty?", answer: "Catholics should receive Communion at least once during Easter time (from the First Sunday of Lent through Trinity Sunday) and confess serious sins at least once a year." },
              { question: "Do precepts bind under pain of mortal sin?", answer: "Serious violation of the Sunday Mass obligation or intentional neglect of Easter duties can be grave matter; full culpability requires knowledge and consent." },
            ]} />
            <RelatedArticles currentSlug="precepts-of-the-catholic-church" />
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
