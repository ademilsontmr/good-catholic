import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutFriendship() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Friendship: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses About Friendship for Catholics — Proverbs 17:17 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"bible verses about friendship, catholic bible verses about friendship, bible verses friendship"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-friendship/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Friendship: Scriptures Catholics Pray and Memorize"}
        description={"Bible Verses About Friendship for Catholics — Proverbs 17:17 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/bible-verses-about-friendship/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Friendship", url: "https://guidecatholic.com/blog/bible-verses-about-friendship/" },
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
              <span className="text-text">Bible Verses About Friendship</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Friendship: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses about friendship help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-red-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-5 bg-background-muted/60 border border-border rounded-lg">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses about friendship include Proverbs 17:17 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-friendship">
                True friendship is rare and holy: Jonathan and David, Christ calling disciples friends. These verses help Catholics choose companions who lead toward virtue.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Loyal Friends</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Proverbs 17:17</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;A friend loves at all times, and a brother is born for adversity.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Save this reference on your phone before you continue scrolling the page.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 15:13-15</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Greater love has no man than this, that a man lay down his life for his friends... I have called you friends.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ecclesiastes 4:9-10</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Two are better than one... if they fall, one will lift up his fellow.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Proverbs 27:17</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Iron sharpens iron, and one man sharpens another.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Sirach 6:14</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;A faithful friend is a sturdy shelter; he that has found one has found a treasure.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-friendship">
                Sirach warns that a faithful friend is a sturdy shelter. Choose companions who will drive you to Mass, not away from virtue.
              </LinkedText>
              <QuizCTA
                title={"Is your prayer life matching what you believe?"}
                description={"Take our free Catholic assessment for habits that support prayer, sacraments, and peace around friendship."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Choosing Companions Wisely</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Proverbs 13:20</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;He who walks with wise men becomes wise, but the companion of fools will suffer harm.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 Corinthians 15:33</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Do not be deceived: Bad company ruins good morals.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ruth 1:16</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Where you go I will go, and where you lodge I will lodge; your people shall be my people, and your God my God.&quot;</p>
                  </div>
              </div>


              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Keep Going after Friendship</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="bible-verses-about-friendship">
                These related guides help you live friendship beyond a single article — through prayer, virtue, and Catholic practice.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><Link to="/blog/how-to-pray-the-rosary-step-by-step/" className="text-accent underline underline-offset-2">How to Pray the Rosary</Link></li>
                <li><Link to="/blog/examination-of-conscience-guide/" className="text-accent underline underline-offset-2">Examination of Conscience</Link></li>
                <li><Link to="/quiz" className="text-accent underline underline-offset-2">Catholic Life Quiz</Link></li>
              </ul>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Guard These Verses on Friendship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-friendship">
                Send one verse to a friend who needs encouragement — and invite them to Mass or coffee. Friendship becomes holy when it moves.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Concrete Next Steps on Friendship</h2>
              <div className="grid gap-3 mb-6">
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 1.</span> Read your friendship verse aloud while walking around the block.</div>
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 2.</span> Journal three sentences: what the verse asks, what resists, what you will do.</div>
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 3.</span> Invite a spouse, roommate, or friend to pray one verse on friendship with you.</div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;A friend loves at all times, and a brother is born for adversity.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Proverbs 17:17</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-friendship"
              faqs={[
                { question: "What are the best bible verses about friendship?", answer: "Key bible verses about friendship include Proverbs 17:17 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about friendship?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses about friendship with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-friendship" />
            <ArticleBottomCTA
              title={"Practice Friendship with Mass, Confession, and Scripture"}
              description={"Take our free Catholic assessment for habits that support prayer, sacraments, and peace around friendship."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
