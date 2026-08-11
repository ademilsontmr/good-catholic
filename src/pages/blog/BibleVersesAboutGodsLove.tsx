import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sword, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutGodsLove() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About God's Love: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses About God's Love for Catholics — John 3:16 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"bible verses about god's love, catholic bible verses about god's love, bible verses god's love"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-gods-love/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About God's Love: Scriptures Catholics Pray and Memorize"}
        description={"Bible Verses About God's Love for Catholics — John 3:16 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/bible-verses-about-gods-love/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About God's Love", url: "https://guidecatholic.com/blog/bible-verses-about-gods-love/" },
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
              <span className="text-text">Bible Verses About God's Love</span>
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
                Bible Verses About God's Love: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses about god's love help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10">
              <Sword className="w-24 h-24 text-slate-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses about god's love include John 3:16 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-gods-love">
                God's love is not a vague vibe — it is covenant fidelity revealed in Christ crucified and risen. These verses keep that love personal and costly.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Love of God Revealed</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 3:16</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For God so loved the world that he gave his only Son.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Pray this verse once slowly before reading the rest of the list.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Romans 8:38-39</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Nothing will be able to separate us from the love of God in Christ Jesus our Lord.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 John 4:9-10</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;In this the love of God was made manifest among us, that God sent his only Son into the world.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Jeremiah 31:3</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I have loved you with an everlasting love.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Zephaniah 3:17</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;The Lord your God is in your midst... he will renew you in his love.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-gods-love">
                Romans 8 insists nothing can separate us from the love of God in Christ. Read that when shame tries to rewrite your identity.
              </LinkedText>
              <QuizCTA
                title={"What would faithfulness look like in this season?"}
                description={"Receive a practical Guide Catholic plan tailored to your current spiritual season."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Loved Without Condition</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Romans 5:8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;God shows his love for us in that while we were yet sinners Christ died for us.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ephesians 2:4-5</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;God, who is rich in mercy, out of the great love with which he loved us, made us alive together with Christ.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 John 3:1</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;See what love the Father has given us, that we should be called children of God.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Breathe with These Verses on God's Love</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-gods-love">
                Sit with Romans 8:38-39. If shame argues, answer it with the verse aloud. Let God's love rewrite the loudest inner accusation.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">God's Love: Three Faithful Habits</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Keep one verse on god's love visible where you make coffee.</li>
                <li>Offer a decade of the Rosary asking for grace related to god's love.</li>
                <li>Tell a trusted Catholic friend which verse on god's love you need most.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When God's Love Feels Most Urgent</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Before a conversation shaped by god's love</li>
                <li>During a quiet holy hour when god's love surfaces</li>
                <li>After Mass, when the week presses on god's love</li>
                <li>Late at night when thoughts about god's love return</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;For God so loved the world that he gave his only Son.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— John 3:16</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-gods-love"
              faqs={[
                { question: "What are the best bible verses about god's love?", answer: "Key bible verses about god's love include John 3:16 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about god's love?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses about god's love with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-gods-love" />
            <ArticleBottomCTA
              title={"Take one faithful step with God's Love today"}
              description={"Receive a practical Guide Catholic plan tailored to your current spiritual season."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
