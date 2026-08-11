import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Compass, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ShortBibleVersesAboutLove() {
  return (
    <>
      <Helmet>
        <title>{"Short Bible Verses About Love: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Short Bible Verses About Love for Catholics — 1 John 4:8 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"short bible verses about love, catholic short bible verses about love, bible verses short love"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/short-bible-verses-about-love/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Short Bible Verses About Love: Scriptures Catholics Pray and Memorize"}
        description={"Short Bible Verses About Love for Catholics — 1 John 4:8 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/short-bible-verses-about-love/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Short Bible Verses About Love", url: "https://guidecatholic.com/blog/short-bible-verses-about-love/" },
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
              <span className="text-text">Short Bible Verses About Love</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Word</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Short Bible Verses About Love: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These short bible verses about love help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Compass className="w-24 h-24 text-purple-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-rose-50/70 border border-rose-200/50 rounded-2xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key short bible verses about love include 1 John 4:8 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="short-bible-verses-about-love">
                Short love verses travel well: texts to a spouse, cards for Confirmation, notes in a lunchbox. Brief lines still carry the weight of charity.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Short Love Verses</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 John 4:8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;He who does not love does not know God; for God is love.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Pause after this verse and tell God one honest sentence.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 3:16</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For God so loved the world that he gave his only Son.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 Corinthians 13:13</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;So faith, hope, love abide, these three; but the greatest of these is love.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Colossians 3:14</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Above all these put on love.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 Peter 4:8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Love covers a multitude of sins.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="short-bible-verses-about-love">
                A short verse on a sticky note can redirect a sharp reply before it leaves your mouth. That is charity in real time.
              </LinkedText>
              <QuizCTA
                title={"How is love affecting your walk with Christ?"}
                description={"Get personalized next steps for Mass, Confession, and Scripture in a busy American schedule."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">More Short Love Lines</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 15:12</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Love one another as I have loved you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Romans 13:8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Owe no one anything, except to love one another.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 John 4:19</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;We love, because he first loved us.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Sit with One Verse Today (Short Love Lines)</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li><strong>Silence</strong> — one slow breath before reading.</li>
                <li><strong>Listen</strong> — read the verse you marked as most needed.</li>
                <li><strong>Respond</strong> — one sentence of honest prayer about this theme.</li>
                <li><strong>Act</strong> — one concrete charity before bedtime.</li>
              </ol>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Write These Verses on Short Love Lines</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="short-bible-verses-about-love">
                Text a short love verse to your spouse, child, or friend — without a lecture. Let the Word do the work.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mistakes to Avoid with Verses on Short Love Lines</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Treating verses on short love lines like a quick fix instead of a relationship with Christ</li>
                <li>Isolating one line from the Gospel and the Church's teaching</li>
                <li>Skipping Confession when sin is tangled with short love lines</li>
                <li>Comparing your progress on short love lines with someone else's highlight reel</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;He who does not love does not know God; for God is love.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— 1 John 4:8</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="short-bible-verses-about-love"
              faqs={[
                { question: "What are the best short bible verses about love?", answer: "Key short bible verses about love include 1 John 4:8 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about love?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share short bible verses about love with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="short-bible-verses-about-love" />
            <ArticleBottomCTA
              title={"Turn reading on Short Love Lines into lived prayer"}
              description={"Get personalized next steps for Mass, Confession, and Scripture in a busy American schedule."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
