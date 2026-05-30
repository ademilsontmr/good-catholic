import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BeatitudesCatholicExplained() {
  return (
    <>
      <Helmet>
        <title>What Are the Beatitudes? Catholic Meaning of All 8 (Matthew 5) | Guide Catholic</title>
        <meta name="description" content="The Beatitudes from Matthew 5 explained for Catholics — all eight blessings, what poor in spirit and peacemakers mean, and how to live the Beatitudes in American life today." />
        <meta name="keywords" content="beatitudes catholic, what are the beatitudes, beatitudes meaning, matthew 5 beatitudes, blessed are the poor in spirit" />
        <link rel="canonical" href="https://guidecatholic.com/blog/beatitudes-catholic-explained/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="What Are the Beatitudes? Catholic Meaning of All 8 (Matthew 5)" description="The Beatitudes from Matthew 5 explained for Catholics — all eight blessings, what poor in spirit and peacemakers mean, and how to live the Beatitudes in American life today." url="https://guidecatholic.com/blog/beatitudes-catholic-explained/" datePublished="2026-05-31" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "The Beatitudes", url: "https://guidecatholic.com/blog/beatitudes-catholic-explained/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">The Beatitudes</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">What Are the Beatitudes? Catholic Meaning of All 8 (Matthew 5)</h1>
              <p className="text-xl text-text-muted leading-relaxed">In the Sermon on the Mount, Jesus names eight ways of being that open the kingdom of heaven. Catholics hear the Beatitudes at Mass, in RCIA, and in every call to discipleship.</p>
            </header>
            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10"><Mountain className="w-24 h-24 text-emerald-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Eight Beatitudes (Matthew 5:3–10)</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-8">
                <li><strong>Blessed are the poor in spirit</strong>, for theirs is the kingdom of heaven.</li>
                <li><strong>Blessed are they who mourn</strong>, for they will be comforted.</li>
                <li><strong>Blessed are the meek</strong>, for they will inherit the land.</li>
                <li><strong>Blessed are they who hunger and thirst for righteousness</strong>, for they will be satisfied.</li>
                <li><strong>Blessed are the merciful</strong>, for they will be shown mercy.</li>
                <li><strong>Blessed are the clean of heart</strong>, for they will see God.</li>
                <li><strong>Blessed are the peacemakers</strong>, for they will be called children of God.</li>
                <li><strong>Blessed are they who are persecuted for the sake of righteousness</strong>, for theirs is the kingdom of heaven.</li>
              </ol>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="beatitudes-catholic-explained">The Beatitudes are not a checklist of feelings but a portrait of Christ — and of the Christian life shaped by grace. The Catechism teaches that they "express the vocation of the faithful associated with the glory of his Passion and Resurrection" (CCC 1717).</LinkedText>
              <QuizCTA title="How is your discipleship going?" description="Take the Catholic life assessment for a personalized guide to Scripture, virtue, and daily prayer." />
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Living the Beatitudes in North America Today</h2>
              <p className="text-text leading-relaxed mb-6">Poor in spirit means trusting God more than status or self-sufficiency. Peacemakers reject both violence and cynical division. Clean of heart pursue purity in a culture that often treats the body as a commodity. Each Beatitude challenges American defaults — but also reveals the happiness the Gospel actually promises.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "Where are the Beatitudes in the Bible?", answer: "They are in Matthew 5:3–10, at the beginning of the Sermon on the Mount. Luke 6:20–26 presents a similar list with some differences (the 'Woes')." },
              { question: "Are the Beatitudes commandments?", answer: "They are blessings that describe attitudes and actions flowing from grace. They reveal the new law of the kingdom and the perfection of the Ten Commandments." },
              { question: "When do Catholics hear the Beatitudes?", answer: "They appear in the Lectionary, especially on All Saints Day and related feasts, and are studied in RCIA, Confirmation prep, and Bible study." },
              { question: "What does poor in spirit mean?", answer: "It is not poverty alone but spiritual humility — recognizing that we need God for everything and cannot save ourselves." },
            ]} />
            <RelatedArticles currentSlug="beatitudes-catholic-explained" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Grow in Catholic faith</h3>
              <p className="text-text-muted mb-6">Receive a personalized spiritual growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
