import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesForAnxietyAndFear() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses for Anxiety and Fear: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses for Anxiety and Fear for Catholics — Philippians 4:6 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"bible verses for anxiety and fear, catholic bible verses for anxiety and fear, bible verses anxiety fear"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-for-anxiety-and-fear/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses for Anxiety and Fear: Scriptures Catholics Pray and Memorize"}
        description={"Bible Verses for Anxiety and Fear for Catholics — Philippians 4:6 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/bible-verses-for-anxiety-and-fear/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses for Anxiety and Fear", url: "https://guidecatholic.com/blog/bible-verses-for-anxiety-and-fear/" },
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
              <span className="text-text">Bible Verses for Anxiety and Fear</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses for Anxiety and Fear: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses for anxiety and fear help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10">
              <Cross className="w-24 h-24 text-slate-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses for anxiety and fear include Philippians 4:6 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-for-anxiety-and-fear">
                Anxiety and fear often arrive as a pair — the body races, the mind invents disasters. This page gathers verses that slow both by returning the heart to God's nearness.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Worry and Fear Combine</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Isaiah 41:10</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Fear not, for I am with you, be not dismayed, for I am your God.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Pray this verse once slowly before reading the rest of the list.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">2 Timothy 1:7</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For God did not give us a spirit of timidity but a spirit of power and love and self-control.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 27:1</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;The Lord is my light and my salvation; whom shall I fear?&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Joshua 1:9</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Be strong and of good courage; be not frightened.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 11:28-30</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Come to me, all who labor and are heavy laden, and I will give you rest.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-for-anxiety-and-fear">
                Pair a fear verse with a body practice: slow breathing while whispering the line. Grace and the nervous system are not enemies.
              </LinkedText>
              <QuizCTA
                title={"Where do you need grace connected to anxiety and fear?"}
                description={"Answer a few questions and get a roadmap for deeper Catholic life."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Peace in the Storm</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Philippians 4:6-7</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Have no anxiety about anything... the peace of God will keep your hearts.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 55:22</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Cast your burden on the Lord, and he will sustain you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 14:27</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Peace I leave with you... Let not your hearts be troubled.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Breathe with These Verses on Anxiety and Fear</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-for-anxiety-and-fear">
                Pair Philippians 4:6 with slow breathing for two minutes. Name the fear, thank God for one mercy, then do the next necessary task.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Anxiety and Fear: Three Faithful Habits</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Keep one verse on anxiety and fear visible where you make coffee.</li>
                <li>Offer a decade of the Rosary asking for grace related to anxiety and fear.</li>
                <li>Tell a trusted Catholic friend which verse on anxiety and fear you need most.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Anxiety and Fear Feels Most Urgent</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Before a conversation shaped by anxiety and fear</li>
                <li>During a quiet holy hour when anxiety and fear surfaces</li>
                <li>After Mass, when the week presses on anxiety and fear</li>
                <li>Late at night when thoughts about anxiety and fear return</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Fear not, for I am with you, be not dismayed, for I am your God.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Isaiah 41:10</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-for-anxiety-and-fear"
              faqs={[
                { question: "What are the best bible verses for anxiety and fear?", answer: "Key bible verses for anxiety and fear include Philippians 4:6 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about anxiety and fear?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses for anxiety and fear with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-for-anxiety-and-fear" />
            <ArticleBottomCTA
              title={"Keep Anxiety and Fear close when life gets loud"}
              description={"Answer a few questions and get a roadmap for deeper Catholic life."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
