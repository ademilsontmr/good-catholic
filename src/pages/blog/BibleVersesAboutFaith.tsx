import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutFaith() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Faith: Scriptures Catholics Turn To in Faith | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses About Faith for Catholics — Hebrews 11:1 and RSV-CE scriptures for prayer, comfort, and daily discipleship."} />
        <meta name="keywords" content={"bible verses about faith, catholic bible verses about faith, scripture faith"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-faith/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Faith: Scriptures Catholics Turn To in Faith"}
        description={"Bible Verses About Faith for Catholics — Hebrews 11:1 and RSV-CE scriptures for prayer, comfort, and daily discipleship."}
        url="https://guidecatholic.com/blog/bible-verses-about-faith/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Faith", url: "https://guidecatholic.com/blog/bible-verses-about-faith/" },
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
              <span className="text-text">Bible Verses About Faith</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Faith: Scriptures Catholics Turn To in Faith
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses about faith help Catholics pray with the Church, find comfort in trials, and keep Scripture close in daily life.
              </p>
            </header>

            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-emerald-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses about faith include the passages below — pray them slowly, memorize one this week, and share them with someone who needs faith.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-faith">
                Faith is not a mood. Hebrews defines it as assurance of things hoped for — the kind of trust that still shows up for Sunday Mass after a dry week of prayer.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Verses That Define Faith</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Hebrews 11:1</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Now faith is the assurance of things hoped for, the conviction of things not seen.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Pray this verse once slowly before reading the rest of the list.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">2 Corinthians 5:7</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For we walk by faith, not by sight.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Romans 10:17</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;So faith comes from what is heard, and what is heard comes by the preaching of Christ.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Mark 11:22-23</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Have faith in God.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">James 2:17</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;So faith by itself, if it has no works, is dead.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-faith">
                Romans 10 reminds us faith comes through hearing. Reading these verses aloud — even alone — is already a small act of belief.
              </LinkedText>
              <QuizCTA
                title={"How is faith affecting your walk with Christ?"}
                description={"Get personalized next steps for Mass, Confession, and Scripture in a busy American schedule."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Faith Under Trial</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 17:20</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;If you have faith as a grain of mustard seed, nothing will be impossible to you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Luke 17:5</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;The apostles said to the Lord, Increase our faith!&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Galatians 2:20</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;It is no longer I who live, but Christ who lives in me; and the life I now live in the flesh I live by faith in the Son of God.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ephesians 2:8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For by grace you have been saved through faith; and this is not your own doing, it is the gift of God.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Hold These Verses on Faith</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-faith">
                Speak Hebrews 11:1 aloud. Then attend one weekday Mass this week as a bodily act of faith when feelings lag behind.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Faith: Three Faithful Habits</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Keep one verse on faith visible where you make coffee.</li>
                <li>Offer a decade of the Rosary asking for grace related to faith.</li>
                <li>Tell a trusted Catholic friend which verse on faith you need most.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Faith Feels Most Urgent</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Before a conversation shaped by faith</li>
                <li>During a quiet holy hour when faith surfaces</li>
                <li>After Mass, when the week presses on faith</li>
                <li>Late at night when thoughts about faith return</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Now faith is the assurance of things hoped for, the conviction of things not seen.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Hebrews 11:1</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-faith"
              faqs={[
                { question: "What are the best bible verses about faith?", answer: "Key bible verses about faith include the passages below — pray them slowly, memorize one this week, and share them with someone who needs faith." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about faith?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses about faith with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-faith" />
            <ArticleBottomCTA
              title={"Bring Faith from the page into your week"}
              description={"Get personalized next steps for Mass, Confession, and Scripture in a busy American schedule."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
