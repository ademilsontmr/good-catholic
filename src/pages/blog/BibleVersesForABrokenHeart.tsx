import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Hand, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesForABrokenHeart() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses for a Broken Heart: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses for a Broken Heart for Catholics — Psalm 34:18 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"bible verses for a broken heart, catholic bible verses for a broken heart, bible verses broken heart"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-for-a-broken-heart/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses for a Broken Heart: Scriptures Catholics Pray and Memorize"}
        description={"Bible Verses for a Broken Heart for Catholics — Psalm 34:18 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/bible-verses-for-a-broken-heart/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses for a Broken Heart", url: "https://guidecatholic.com/blog/bible-verses-for-a-broken-heart/" },
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
              <span className="text-text">Bible Verses for a Broken Heart</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses for a Broken Heart: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses for a broken heart help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10">
              <Hand className="w-24 h-24 text-emerald-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses for a broken heart include Psalm 34:18 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-for-a-broken-heart">
                Heartbreak after a breakup, betrayal, or dashed hope needs more than platitudes. Scripture names the wound and points toward the Sacred Heart who knows rejection.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">God Near the Brokenhearted</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 34:18</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;The Lord is near to the brokenhearted, and saves the crushed in spirit.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Pray this verse once slowly before reading the rest of the list.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 147:3</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;He heals the brokenhearted, and binds up their wounds.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Isaiah 61:1</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;He has sent me to bind up the brokenhearted.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 5:4</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Blessed are those who mourn, for they shall be comforted.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Revelation 21:4</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;He will wipe away every tear from their eyes.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-for-a-broken-heart">
                A broken heart needs truth and tenderness. Avoid forcing "closure"; ask for the grace to love without bitterness.
              </LinkedText>
              <QuizCTA
                title={"How is a broken heart affecting your walk with Christ?"}
                description={"Get personalized next steps for Mass, Confession, and Scripture in a busy American schedule."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">New Mercy After Pain</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Joel 2:25</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I will restore to you the years which the swarming locust has eaten.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Romans 8:28</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;In everything God works for good with those who love him.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 30:5</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Weeping may tarry for the night, but joy comes with the morning.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Hold These Verses on a Broken Heart</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-for-a-broken-heart">
                Bring the wound to the crucifix. Pray Psalm 34:18. Ask for the grace to love without bitterness, and for wise companionship.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">a Broken Heart: Three Faithful Habits</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Keep one verse on a broken heart visible where you make coffee.</li>
                <li>Offer a decade of the Rosary asking for grace related to a broken heart.</li>
                <li>Tell a trusted Catholic friend which verse on a broken heart you need most.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When a Broken Heart Feels Most Urgent</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Before a conversation shaped by a broken heart</li>
                <li>During a quiet holy hour when a broken heart surfaces</li>
                <li>After Mass, when the week presses on a broken heart</li>
                <li>Late at night when thoughts about a broken heart return</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;The Lord is near to the brokenhearted, and saves the crushed in spirit.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Psalm 34:18</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-for-a-broken-heart"
              faqs={[
                { question: "What are the best bible verses for a broken heart?", answer: "Key bible verses for a broken heart include Psalm 34:18 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about a broken heart?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses for a broken heart with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-for-a-broken-heart" />
            <ArticleBottomCTA
              title={"Grow Catholic habits around a Broken Heart"}
              description={"Get personalized next steps for Mass, Confession, and Scripture in a busy American schedule."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
