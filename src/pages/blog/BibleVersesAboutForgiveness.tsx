import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutForgiveness() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Forgiveness: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses About Forgiveness for Catholics — Matthew 6:14 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"bible verses about forgiveness, catholic bible verses about forgiveness, bible verses forgiveness"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-forgiveness/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Forgiveness: Scriptures Catholics Pray and Memorize"}
        description={"Bible Verses About Forgiveness for Catholics — Matthew 6:14 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/bible-verses-about-forgiveness/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Forgiveness", url: "https://guidecatholic.com/blog/bible-verses-about-forgiveness/" },
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
              <span className="text-text">Bible Verses About Forgiveness</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Forgiveness: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses about forgiveness help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-fuchsia-100 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-fuchsia-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses about forgiveness include Matthew 6:14 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-forgiveness">
                Forgiveness is the hardest Christian work for many Catholics: releasing a debt without rewriting history. These verses keep Confession and charity from becoming slogans.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Christ Commands Forgiveness</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 6:14-15</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For if you forgive men their trespasses, your heavenly Father also will forgive you.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Pray this verse once slowly before reading the rest of the list.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Colossians 3:13</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;As the Lord has forgiven you, so you also must forgive.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ephesians 4:32</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 18:21-22</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I do not say to you seven times, but seventy times seven.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Luke 6:37</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Forgive, and you will be forgiven.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-forgiveness">
                Matthew 18 ties forgiveness to our own need for mercy. The Our Father makes the link unavoidable every time we pray it.
              </LinkedText>
              <QuizCTA
                title={"Ready to move from reading to living the Word?"}
                description={"Clarify which daily practices will help these verses take root."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">God's Mercy Toward Us</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 John 1:9</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;If we confess our sins, he is faithful and just, and will forgive our sins and cleanse us from all unrighteousness.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 103:12</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;As far as the east is from the west, so far does he remove our transgressions from us.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Isaiah 1:18</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Though your sins are like scarlet, they shall be as white as snow.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Begin with These Verses on Forgiveness</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-forgiveness">
                Name the person you struggle to forgive. Pray the Our Father slowly, pausing at "as we forgive." If hatred remains, bring it to Confession.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Forgiveness: Three Faithful Habits</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Keep one verse on forgiveness visible where you make coffee.</li>
                <li>Offer a decade of the Rosary asking for grace related to forgiveness.</li>
                <li>Tell a trusted Catholic friend which verse on forgiveness you need most.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Forgiveness Feels Most Urgent</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Before a conversation shaped by forgiveness</li>
                <li>During a quiet holy hour when forgiveness surfaces</li>
                <li>After Mass, when the week presses on forgiveness</li>
                <li>Late at night when thoughts about forgiveness return</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;For if you forgive men their trespasses, your heavenly Father also will forgive you.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Matthew 6:14-15</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-forgiveness"
              faqs={[
                { question: "What are the best bible verses about forgiveness?", answer: "Key bible verses about forgiveness include Matthew 6:14 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about forgiveness?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share bible verses about forgiveness with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-forgiveness" />
            <ArticleBottomCTA
              title={"Turn reading on Forgiveness into lived prayer"}
              description={"Clarify which daily practices will help these verses take root."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
