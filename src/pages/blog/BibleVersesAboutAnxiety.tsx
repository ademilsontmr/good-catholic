import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutAnxiety() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Anxiety: Scriptures for Peace When You Worry | Guide Catholic"}</title>
        <meta name="description" content={"Bible verses about anxiety for Catholics — Philippians 4, Matthew 6, Psalm 94, and RSV-CE scriptures for calm when worry overwhelms you."} />
        <meta name="keywords" content={"bible verses about anxiety, scripture for anxiety, catholic bible verses anxiety"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-anxiety/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Anxiety: Scriptures for Peace When You Worry"}
        description={"Bible verses about anxiety for Catholics — Philippians 4, Matthew 6, Psalm 94, and RSV-CE scriptures for calm when worry overwhelms you."}
        url="https://guidecatholic.com/blog/bible-verses-about-anxiety/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Anxiety", url: "https://guidecatholic.com/blog/bible-verses-about-anxiety/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Bible Verses About Anxiety</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Bible &amp; Faith</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Anxiety: Scriptures for Peace When You Worry
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                When your mind races at night and worry crowds out prayer, Scripture gives words stronger than fear.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Brain className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The best Bible verses about anxiety include Philippians 4:6-7, Matthew 6:34, 1 Peter 5:7, Isaiah 41:10, and Psalm 94:19.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-anxiety">
                Nighttime spirals, Sunday distraction, and dread before appointments are common confession topics in U.S. parishes. These verses train the anxious mind to pray with thanksgiving instead of rehearsing catastrophe.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Core Verses When Anxiety Feels Overwhelming</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Philippians 4:6-7</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Have no anxiety about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which passes all understanding, will keep your hearts and your minds in Christ Jesus.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Pray this verse once slowly before reading the rest of the list.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 Peter 5:7</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Cast all your anxieties on him, for he cares about you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 6:34</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Let the day's own trouble be sufficient for the day.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 94:19</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;When the cares of my heart are many, thy consolations cheer my soul.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 14:27</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Peace I leave with you; my peace I give to you; not as the world gives do I give to you.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-anxiety">
                Philippians 4 does not say "pretend you are fine." It says bring everything to God — with thanks — and receive a peace that guards the heart.
              </LinkedText>
              <QuizCTA
                title={"Is worry crowding out your prayer life?"}
                description={"Find Catholic habits that calm the mind through Mass, Confession, and daily Scripture."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Old Testament Comfort for a Restless Heart</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Isaiah 41:10</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Fear not, for I am with you, be not dismayed, for I am your God; I will strengthen you, I will help you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 55:22</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Cast your burden on the Lord, and he will sustain you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Joshua 1:9</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Be strong and of good courage; be not frightened, neither be dismayed; for the Lord your God is with you wherever you go.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 46:1</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;God is our refuge and strength, a very present help in trouble.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Pray These Verses on Anxiety</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-anxiety">
                Stand still. Pray 1 Peter 5:7 once. Name the fear out loud to God. Then make the call. If anxiety is constant, add pastoral care and professional support — Scripture walks with treatment.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Anxiety: Three Faithful Habits</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Keep one verse on anxiety visible where you make coffee.</li>
                <li>Offer a decade of the Rosary asking for grace related to anxiety.</li>
                <li>Tell a trusted Catholic friend which verse on anxiety you need most.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Anxiety Feels Most Urgent</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Before a conversation shaped by anxiety</li>
                <li>During a quiet holy hour when anxiety surfaces</li>
                <li>After Mass, when the week presses on anxiety</li>
                <li>Late at night when thoughts about anxiety return</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Have no anxiety about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which passes all understanding, will keep your hearts and your minds in Christ Jesus.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Philippians 4:6-7</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-anxiety"
              faqs={[
                { question: "What is the best Bible verse for anxiety?", answer: "Philippians 4:6-7 is the most used Catholic verse for anxiety because it turns worry into prayer with thanksgiving." },
                { question: "Can faithful Catholics struggle with anxiety?", answer: "Yes. Anxiety is not automatically sin. Bring it to Christ, and seek help when it impairs daily life." },
                { question: "Should prayer replace therapy?", answer: "No. The Church supports medical and psychological care alongside prayer." },
                { question: "How do I pray when panic starts?", answer: "Whisper a short verse, breathe slowly, and contact someone if you feel unsafe. In the U.S., call or text 988." },
                { question: "Is anxiety a lack of trust?", answer: "Not necessarily. It can be neurological, situational, or spiritual dryness. Trust is practiced, not pretended." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-anxiety" />
            <ArticleBottomCTA
              title={"Let verses on Anxiety shape your next step"}
              description={"Find Catholic habits that calm the mind through Mass, Confession, and daily Scripture."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
