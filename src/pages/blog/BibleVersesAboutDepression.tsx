import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cloud, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesAboutDepression() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses About Depression: Scriptures Catholics Turn To in Faith | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses About Depression for Catholics — Psalm 42:11 and RSV-CE scriptures for prayer, comfort, and daily discipleship."} />
        <meta name="keywords" content={"bible verses about depression, catholic bible verses about depression, scripture depression"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-about-depression/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses About Depression: Scriptures Catholics Turn To in Faith"}
        description={"Bible Verses About Depression for Catholics — Psalm 42:11 and RSV-CE scriptures for prayer, comfort, and daily discipleship."}
        url="https://guidecatholic.com/blog/bible-verses-about-depression/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses About Depression", url: "https://guidecatholic.com/blog/bible-verses-about-depression/" },
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
              <span className="text-text">Bible Verses About Depression</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses About Depression: Scriptures Catholics Turn To in Faith
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses about depression help Catholics pray with the Church, find comfort in trials, and keep Scripture close in daily life.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Cloud className="w-24 h-24 text-indigo-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 border-l-4 border-accent bg-background-muted/40 pl-6 py-5 rounded-r-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses about depression include the passages below — pray them slowly, memorize one this week, and share them with someone who needs depression.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-depression">
                Depression can mute joy and make prayer feel impossible. The psalms give language for darkness without pretending it is light. Use these verses alongside pastoral and clinical care.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When the Soul Is Cast Down</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 42:11</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Why are you cast down, O my soul, and why are you disquieted within me? Hope in God.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Read this first verse aloud — hearing Scripture changes how it lands.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 34:18</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;The Lord is near to the brokenhearted, and saves the crushed in spirit.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 11:28</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Come to me, all who labor and are heavy laden, and I will give you rest.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 40:1-2</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I waited patiently for the Lord; he inclined to me and heard my cry. He drew me up from the desolate pit.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">2 Corinthians 1:3-4</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-about-depression">
                Psalm 42 gives permission to be honest: "Why are you cast down, O my soul?" Honesty before God is already prayer.
              </LinkedText>
              <QuizCTA
                title={"What would faithfulness look like in this season?"}
                description={"Receive a practical Guide Catholic plan tailored to your current spiritual season."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">God With Us in Suffering</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Isaiah 41:10</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Fear not, for I am with you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Romans 8:38-39</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Nothing will be able to separate us from the love of God in Christ Jesus our Lord.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 23:4</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Even though I walk through the valley of the shadow of death, I fear no evil; for thou art with me.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Lamentations 3:22-23</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;The steadfast love of the Lord never ceases; they are new every morning.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Walk with These Verses on Depression</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed">If you can, light a candle and pray Psalm 42 slowly. If darkness feels unsafe, contact a priest, counselor, or 988 in the U.S. — verses accompany help; they do not replace it.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Short Prayer before Verses on Depression</h2>
              <div className="bg-background-muted/50 border border-border rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed">Lord Jesus, open my heart to Your Word about depression. Give me honesty, courage, and the grace to live what I read. Amen.</p>
              </div>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Daily Discipleship for Depression</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="bible-verses-about-depression">
                Pick the habit that matches your season — illness, parenting, or a heavy workload — especially around depression.
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Pray your chosen verse on depression before you open email.</li>
                <li>Bring one concrete struggle about depression to Confession this month.</li>
                <li>Text a verse on depression to someone who needs encouragement.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Why are you cast down, O my soul, and why are you disquieted within me? Hope in God.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Psalm 42:11</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-about-depression"
              faqs={[
                { question: "What are the best bible verses about depression?", answer: "Key bible verses about depression include the passages below — pray them slowly, memorize one this week, and share them with someone who needs depression." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "Does depression mean weak faith?", answer: "No. Seek medical and pastoral help. These verses accompany care; they never replace it. If in crisis in the U.S., call or text 988." },
                { question: "Can I share bible verses about depression with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-about-depression" />
            <ArticleBottomCTA
              title={"Keep Depression close when life gets loud"}
              description={"Receive a practical Guide Catholic plan tailored to your current spiritual season."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
