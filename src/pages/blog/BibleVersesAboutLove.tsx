import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutLove() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Love: Scripture on Charity, Marriage and God's Heart | Guide Catholic"}</title>
        <meta name="description" content={"Bible verses about love for Catholics — 1 Corinthians 13, John 15, 1 John 4, and RSV-CE scriptures on charity and marriage."} />
        <meta name="keywords" content={"bible verses about love, 1 corinthians 13, scripture about love"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-love/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Love: Scripture on Charity, Marriage and God's Heart"}
        description={"Bible verses about love for Catholics — 1 Corinthians 13, John 15, 1 John 4, and RSV-CE scriptures on charity and marriage."}
        url="https://guidecatholic.com/blog/bible-verses-about-love/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Love", url: "https://guidecatholic.com/blog/bible-verses-about-love/" },
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
              <span className="text-text">Bible Verses About Love</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Life</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Love: Scripture on Charity, Marriage and God's Heart
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Love is not a feeling alone — for Catholics, charity is a theological virtue forming marriage, friendship, and discipleship.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 border-l-4 border-accent bg-background-muted/40 pl-6 py-5 rounded-r-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Essential Bible verses about love include 1 Corinthians 13:4-7, John 15:12-13, 1 John 4:7-8, John 3:16, and Romans 13:8.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-love">
                Wedding readings get the headlines, but 1 Corinthians 13 is also a daily examination for spouses, parents, and parish volunteers. Catholic love wills the good of the other — even when feelings cool.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Greatest Verses on Christian Love</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 Corinthians 13:4-7</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Love is patient and kind; love is not jealous or boastful; it is not arrogant or rude. Love does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrong, but rejoices in the right. Love bears all things, believes all things, hopes all things, endures all things.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Read this first verse aloud — hearing Scripture changes how it lands.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 15:12-13</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;This is my commandment, that you love one another as I have loved you. Greater love has no man than this, that a man lay down his life for his friends.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 John 4:7-8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Beloved, let us love one another; for love is of God, and he who loves is born of God and knows God. He who does not love does not know God; for God is love.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 3:16</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Romans 13:8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Owe no one anything, except to love one another; for he who loves his neighbor has fulfilled the law.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-love">
                John 15 sets the measure: love looks like the Cross. If your definition of love never costs anything, it is not yet the charity Christ commands.
              </LinkedText>
              <QuizCTA
                title={"What would faithfulness look like in this season?"}
                description={"Receive a practical Guide Catholic plan tailored to your current spiritual season."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Love in Marriage and Daily Life</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ephesians 5:25</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Husbands, love your wives, as Christ loved the church and gave himself up for her.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Colossians 3:14</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;And above all these put on love, which binds everything together in perfect harmony.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 Peter 4:8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Above all hold unfailing your love for one another, since love covers a multitude of sins.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Song of Solomon 8:7</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Many waters cannot quench love, neither can floods drown it.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Share These Verses on Love</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed">Read 1 Corinthians 13:4-7 as an examination. Circle one failure of patience or kindness, bring it to Confession, and choose one hidden act of charity this week.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Short Prayer before Verses on Love</h2>
              <div className="bg-background-muted/50 border border-border rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed">Lord Jesus, open my heart to Your Word about love. Give me honesty, courage, and the grace to live what I read. Amen.</p>
              </div>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Daily Discipleship for Love</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="bible-verses-about-love">
                Pick the habit that matches your season — illness, parenting, or a heavy workload — especially around love.
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Pray your chosen verse on love before you open email.</li>
                <li>Bring one concrete struggle about love to Confession this month.</li>
                <li>Text a verse on love to someone who needs encouragement.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Love is patient and kind; love is not jealous or boastful; it is not arrogant or rude. Love does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrong, but rejoices in the right. Love bears all things, believes all things, hopes all things, endures all things.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— 1 Corinthians 13:4-7</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-love"
              faqs={[
                { question: "What are the best bible verses about love?", answer: "Essential Bible verses about love include 1 Corinthians 13:4-7, John 15:12-13, 1 John 4:7-8, John 3:16, and Romans 13:8." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about love?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses about love with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-love" />
            <ArticleBottomCTA
              title={"Turn reading on Love into lived prayer"}
              description={"Receive a practical Guide Catholic plan tailored to your current spiritual season."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
