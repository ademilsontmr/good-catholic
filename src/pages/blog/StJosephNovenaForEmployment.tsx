import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StJosephNovenaForEmployment() {
  return (
    <>
      <Helmet>
        <title>St. Joseph Novena for Employment: 9-Day Prayer to Find a Job (Full Text) | Guide Catholic</title>
        <meta name="description" content="St. Joseph Novena for employment and finding a job — 9-day Catholic prayer with full text, step-by-step guide, and when to pray for work and financial stability." />
        <meta name="keywords" content="st joseph novena for employment, st joseph novena for job, novena to find a job catholic, st joseph prayer for work" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-joseph-novena-for-employment/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Joseph Novena for Employment: 9-Day Prayer to Find a Job (Full Text)" description="St. Joseph Novena for employment and finding a job — 9-day Catholic prayer with full text, step-by-step guide, and when to pray for work and financial stability." url="https://guidecatholic.com/blog/st-joseph-novena-for-employment/" datePublished="2026-06-01" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Joseph Novena for Employment", url: "https://guidecatholic.com/blog/st-joseph-novena-for-employment/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Joseph Novena for Employment</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Joseph Novena for Employment: 9-Day Prayer to Find a Job (Full Text)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Saint Joseph worked with his hands to provide for the Holy Family. Catholics across the United States pray this novena when searching for work, facing layoffs, or seeking a better job.</p>
            </header>
            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10"><Briefcase className="w-24 h-24 text-yellow-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-joseph-novena-for-employment">Saint Joseph is patron of workers and fathers. A novena unites your job search with daily trust — while you send résumés and attend interviews, you also ask heaven for doors that match God's plan.</LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">9-Day St. Joseph Novena for Employment</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Pray for nine consecutive days; do not skip.</li>
                <li>State your intention clearly (new job, promotion, stable income).</li>
                <li>Offer one concrete act of charity or diligence each day.</li>
              </ol>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">Glorious Saint Joseph, foster father of Jesus and protector of the Holy Family, you who provided through honest labor, intercede for me in my need for work. Obtain for me employment that supports my vocation and duties, and grant me patience while I wait on God's timing. Jesus, Mary, and Joseph, assist me in this novena. Amen.</p>
              </div>
              <QuizCTA title="Integrate faith and daily work" description="Take the Catholic life assessment for guidance on prayer, work, and providence." />
            </div>
            <BlogFAQ faqs={[
              { question: "Can I pray the St. Joseph novena for someone else's job search?", answer: "Yes. Offer the novena for a spouse, child, or friend, naming them in your intention." },
              { question: "Is this the same as the St. Joseph novena for buying a house?", answer: "No. That novena focuses on housing. This one is specifically for employment and work." },
              { question: "When is St. Joseph's feast day?", answer: "March 19 (Saint Joseph, Husband of Mary) and May 1 (Saint Joseph the Worker) — popular times to begin this novena." },
              { question: "Should I still apply for jobs while praying?", answer: "Yes. Prayer and practical effort go together. The novena sustains hope; your applications are part of responsible stewardship." },
            ]} />
            <RelatedArticles currentSlug="st-joseph-novena-for-employment" />
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
