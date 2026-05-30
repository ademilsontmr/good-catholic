import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaForAnxietyCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena for Anxiety: 9-Day Catholic Prayer for Peace & Calm | Guide Catholic</title>
        <meta name="description" content="Novena for anxiety — 9-day Catholic prayer for peace, calm, and trust when worry overwhelms you. Full prayer text, step-by-step guide, and FAQs." />
        <meta name="keywords" content="novena for anxiety, catholic prayer for anxiety 9 days, novena peace calm, prayer for worry catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-for-anxiety-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena for Anxiety: 9-Day Catholic Prayer for Peace & Calm" description="Novena for anxiety — 9-day Catholic prayer for peace, calm, and trust when worry overwhelms you. Full prayer text, step-by-step guide, and FAQs." url="https://guidecatholic.com/blog/novena-for-anxiety-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Novena for Anxiety", url: "https://guidecatholic.com/blog/novena-for-anxiety-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena for Anxiety</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena for Anxiety: 9-Day Catholic Prayer for Peace & Calm</h1>
              <p className="text-xl text-text-muted leading-relaxed">Novena for anxiety — 9-day Catholic prayer for peace, calm, and trust when worry overwhelms you.</p>
            </header>
            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10"><Brain className="w-24 h-24 text-blue-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">A novena for anxiety is a nine-day Catholic prayer asking Christ, Mary, and Saint Dymphna for peace when worry overwhelms you. Pray once daily for nine consecutive days, naming your intention and combining prayer with professional care when needed.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Do Catholics Pray To?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-anxiety-catholic">Catholics facing anxiety turn first to Christ, who calmed the storm on the Sea of Galilee. Many also invoke Mary as Comforter of the Afflicted and Saint Dymphna — patroness of those with mental and nervous disorders — whose shrine in Massillon, Ohio, draws thousands of American pilgrims each year. Anxiety is not weak faith; it is a human condition Christ entered in the Incarnation.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-anxiety-catholic">A novena is a nine-day prayer rooted in the time the apostles and Mary spent in prayer between the Ascension and Pentecost (Acts 1:14). The word comes from the Latin <em>novem</em>, meaning nine. Unlike a single spontaneous prayer, a novena builds sustained trust over consecutive days.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray This Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-anxiety-catholic">Anxiety disorders affect tens of millions of Americans. A novena creates structure: nine days of returning to God with the same intention. Prayer does not replace therapy or medication — grace works through natural means — but sustained prayer can bring the peace that surpasses understanding (Philippians 4:7).</LinkedText>

              <QuizCTA title="How deep is your Catholic faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li><strong>Name your intention on day one</strong> — financial worry, health fears, or social anxiety.</li>
                <li>Choose a consistent time each day.</li>
                <li>Pray for nine consecutive days; resume if you miss a day.</li>
                <li>Combine with therapy or medical care when needed.</li>
                <li><strong>Surrender the outcome</strong> — ask for peace, not only changed circumstances.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer for Anxiety</h3>
                <p className="text-text italic leading-relaxed text-sm">In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Lord Jesus, you calmed the storm and told your disciples not to be afraid. I bring my anxiety before you today: [name your intention]. Grant me the peace that surpasses understanding. Quiet my racing heart and help me trust you one day at a time. Mary, Comforter of the Afflicted, and Saint Dymphna, pray for me. Sacred Heart of Jesus, I place all my trust in you. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-anxiety-catholic">If anxiety is linked to a major decision, try a novena for clarity. For impossible situations, many Catholics turn to Saint Jude. Return to this prayer for nine days and let Christ carry what you cannot carry alone.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "Can a novena cure my anxiety disorder?", answer: "A novena is persevering prayer, not a substitute for medical or psychological treatment. Many Catholics find spiritual peace through nine days of prayer; clinical anxiety often requires therapy or medication." },
              { question: "Which saints help with anxiety?", answer: "Christ, Mary as Comforter of the Afflicted, Saint Dymphna, Saint Padre Pio, and Saint Teresa of Calcutta are commonly invoked for inner peace." },
              { question: "How long is this novena?", answer: "Nine consecutive days at a consistent time. If you miss a day, resume rather than abandoning the novena." },
              { question: "Can I pray for someone else?", answer: "Yes. Name the person and situation in your intention — parents often pray for anxious children." },
              { question: "When should I start?", answer: "Any day — before a stressful event or whenever worry becomes overwhelming." },
              { question: "Should I also see a therapist?", answer: "Yes when anxiety is severe or persistent. The Church teaches that prayer and responsible care belong together." },
            ]} />
            <RelatedArticles currentSlug="novena-for-anxiety-catholic" />
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
