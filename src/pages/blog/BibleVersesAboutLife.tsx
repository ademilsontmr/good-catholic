import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Zap, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutLife() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Life: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses About Life for Catholics — John 10:10 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"bible verses about life, catholic bible verses about life, bible verses life"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-life/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Life: Scriptures Catholics Pray and Memorize"}
        description={"Bible Verses About Life for Catholics — John 10:10 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/bible-verses-about-life/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Life", url: "https://guidecatholic.com/blog/bible-verses-about-life/" },
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
              <span className="text-text">Bible Verses About Life</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Daily Discipleship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Life: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses about life help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center mb-10">
              <Zap className="w-24 h-24 text-neutral-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-5 bg-background-muted/60 border border-border rounded-lg">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses about life include John 10:10 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-life">
                Life is gift from conception to natural death, and every ordinary day is material for sanctity. These verses reclaim purpose beyond productivity.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Abundant and Eternal Life</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 10:10</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I came that they may have life, and have it abundantly.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Save this reference on your phone before you continue scrolling the page.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 14:6</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I am the way, and the truth, and the life.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Deuteronomy 30:19</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I have set before you life and death, blessing and curse; therefore choose life.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 139:13-14</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Thou didst form my inward parts, thou didst knit me together in my mother's womb. I praise thee, for thou art fearful and wonderful.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Galatians 2:20</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;It is no longer I who live, but Christ who lives in me.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-life">
                Christ came that we may have life abundantly — not merely longer hours, but deeper communion with God.
              </LinkedText>
              <QuizCTA
                title={"Where do you need grace connected to life?"}
                description={"Answer a few questions and get a roadmap for deeper Catholic life."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Living With Purpose</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ecclesiastes 12:13</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Fear God, and keep his commandments; for this is the whole duty of man.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Philippians 1:21</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For to me to live is Christ, and to die is gain.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 John 5:11-12</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;God gave us eternal life, and this life is in his Son.&quot;</p>
                  </div>
              </div>


              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Keep Going after Life</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="bible-verses-about-life">
                These related guides help you live life beyond a single article — through prayer, virtue, and Catholic practice.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><Link to="/blog/how-to-pray-the-rosary-step-by-step/" className="text-accent underline underline-offset-2">How to Pray the Rosary</Link></li>
                <li><Link to="/blog/examination-of-conscience-guide/" className="text-accent underline underline-offset-2">Examination of Conscience</Link></li>
                <li><Link to="/quiz" className="text-accent underline underline-offset-2">Catholic Life Quiz</Link></li>
              </ul>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teach These Verses on Life</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-life">
                Thank God for the gift of life — yours and others'. Pray John 10:10 and choose one life-affirming act of mercy this week.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Concrete Next Steps on Life</h2>
              <div className="grid gap-3 mb-6">
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 1.</span> Read your life verse aloud while walking around the block.</div>
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 2.</span> Journal three sentences: what the verse asks, what resists, what you will do.</div>
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 3.</span> Invite a spouse, roommate, or friend to pray one verse on life with you.</div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;I came that they may have life, and have it abundantly.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— John 10:10</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-life"
              faqs={[
                { question: "What are the best bible verses about life?", answer: "Key bible verses about life include John 10:10 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about life?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses about life with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-life" />
            <ArticleBottomCTA
              title={"Keep Life close when life gets loud"}
              description={"Answer a few questions and get a roadmap for deeper Catholic life."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
