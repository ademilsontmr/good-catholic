import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Moon, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutMarriage() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Marriage: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses About Marriage for Catholics — Ephesians 5:25 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"bible verses about marriage, catholic bible verses about marriage, bible verses marriage"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-marriage/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Marriage: Scriptures Catholics Pray and Memorize"}
        description={"Bible Verses About Marriage for Catholics — Ephesians 5:25 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/bible-verses-about-marriage/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Marriage", url: "https://guidecatholic.com/blog/bible-verses-about-marriage/" },
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
              <span className="text-text">Bible Verses About Marriage</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />13 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Marriage: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses about marriage help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Moon className="w-24 h-24 text-yellow-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-rose-50/70 border border-rose-200/50 rounded-2xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses about marriage include Ephesians 5:25 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-marriage">
                Catholic marriage is a covenant, not a contract. These verses sustain spouses through romance, conflict, infertility, blended households, and ordinary Tuesday evenings.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Covenant of Marriage</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Genesis 2:24</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Therefore a man leaves his father and his mother and cleaves to his wife, and they become one flesh.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Pause after this verse and tell God one honest sentence.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Mark 10:9</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;What therefore God has joined together, let not man put asunder.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ephesians 5:25</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Husbands, love your wives, as Christ loved the church and gave himself up for her.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ephesians 5:31-32</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;The two shall become one. This is a great mystery, and I mean in reference to Christ and the church.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 19:6</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;So they are no longer two but one.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-marriage">
                Ephesians 5 is mutual self-gift, not domination. Spouses who pray these verses together often find conflict softens into dialogue.
              </LinkedText>
              <QuizCTA
                title={"Where do you need grace connected to marriage?"}
                description={"Answer a few questions and get a roadmap for deeper Catholic life."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Love That Endures</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 Corinthians 13:4-7</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Love is patient and kind... Love bears all things, believes all things, hopes all things, endures all things.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ecclesiastes 4:9-10</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Two are better than one... if they fall, one will lift up his fellow.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Colossians 3:14</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;And above all these put on love, which binds everything together in perfect harmony.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Sit with One Verse Today (Marriage)</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li><strong>Silence</strong> — one slow breath before reading.</li>
                <li><strong>Listen</strong> — read the verse you marked as most needed.</li>
                <li><strong>Respond</strong> — one sentence of honest prayer about this theme.</li>
                <li><strong>Act</strong> — one concrete charity before bedtime.</li>
              </ol>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Offer These Verses on Marriage</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-marriage">
                Read Ephesians 5:25-33 together or alone. Ask: where am I seeking to be served more than to serve? Act on one answer within 24 hours.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mistakes to Avoid with Verses on Marriage</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Treating verses on marriage like a quick fix instead of a relationship with Christ</li>
                <li>Isolating one line from the Gospel and the Church's teaching</li>
                <li>Skipping Confession when sin is tangled with marriage</li>
                <li>Comparing your progress on marriage with someone else's highlight reel</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Therefore a man leaves his father and his mother and cleaves to his wife, and they become one flesh.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Genesis 2:24</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-marriage"
              faqs={[
                { question: "What are the best bible verses about marriage?", answer: "Key bible verses about marriage include Ephesians 5:25 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "Which love verses are used at Catholic weddings?", answer: "1 Corinthians 13 and Ephesians 5 are frequent; use your diocese's approved reading list." },
                { question: "Can I share bible verses about marriage with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-marriage" />
            <ArticleBottomCTA
              title={"Bring Marriage from the page into your week"}
              description={"Answer a few questions and get a roadmap for deeper Catholic life."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
