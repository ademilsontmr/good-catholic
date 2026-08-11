import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mountain, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function EncouragingBibleVerses() {
  return (
    <>
      <Helmet>
        <title>{"Encouraging Bible Verses: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Encouraging Bible Verses for Catholics — Joshua 1:9 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"encouraging bible verses, catholic encouraging bible verses, bible verses encouragement"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/encouraging-bible-verses/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Encouraging Bible Verses: Scriptures Catholics Pray and Memorize"}
        description={"Encouraging Bible Verses for Catholics — Joshua 1:9 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/encouraging-bible-verses/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Encouraging Bible Verses", url: "https://guidecatholic.com/blog/encouraging-bible-verses/" },
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
              <span className="text-text">Encouraging Bible Verses</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Encouraging Bible Verses: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These encouraging bible verses help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center mb-10">
              <Mountain className="w-24 h-24 text-neutral-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-5 bg-background-muted/60 border border-border rounded-lg">
                <p className="text-lg text-text leading-relaxed font-medium">Key encouraging bible verses include Joshua 1:9 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="encouraging-bible-verses">
                Encouragement is a corporal and spiritual work of mercy in miniature. Share these verses with someone who needs a lift — including yourself on a heavy Monday.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Verses That Encourage</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Joshua 1:9</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Be strong and of good courage... for the Lord your God is with you wherever you go.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Save this reference on your phone before you continue scrolling the page.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Romans 8:28</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;We know that in everything God works for good with those who love him.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Isaiah 40:31</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;They who wait for the Lord shall renew their strength.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Deuteronomy 31:8</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;It is the Lord who goes before you; he will be with you, he will not fail you or forsake you.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Philippians 4:13</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I can do all things in him who strengthens me.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="encouraging-bible-verses">
                Encouragement is incomplete until it becomes action. After you read, send one verse to someone who is struggling this week.
              </LinkedText>
              <QuizCTA
                title={"What would faithfulness look like in this season?"}
                description={"Receive a practical Guide Catholic plan tailored to your current spiritual season."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">More Encouragement</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 121:1-2</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I lift up my eyes to the hills. From whence does my help come? My help comes from the Lord.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Matthew 19:26</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;With men this is impossible, but with God all things are possible.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Jeremiah 29:11</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I know the plans I have for you... to give you a future and a hope.&quot;</p>
                  </div>
              </div>


              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Keep Going after Encouragement</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="encouraging-bible-verses">
                These related guides help you live encouragement beyond a single article — through prayer, virtue, and Catholic practice.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><Link to="/blog/how-to-pray-the-rosary-step-by-step/" className="text-accent underline underline-offset-2">How to Pray the Rosary</Link></li>
                <li><Link to="/blog/examination-of-conscience-guide/" className="text-accent underline underline-offset-2">Examination of Conscience</Link></li>
                <li><Link to="/quiz" className="text-accent underline underline-offset-2">Catholic Life Quiz</Link></li>
              </ul>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teach These Verses on Encouragement</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="encouraging-bible-verses">
                Choose one encouraging verse and send it with a one-line prayer to someone carrying a heavy week — including yourself if needed.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Concrete Next Steps on Encouragement</h2>
              <div className="grid gap-3 mb-6">
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 1.</span> Read your encouragement verse aloud while walking around the block.</div>
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 2.</span> Journal three sentences: what the verse asks, what resists, what you will do.</div>
                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step 3.</span> Invite a spouse, roommate, or friend to pray one verse on encouragement with you.</div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Be strong and of good courage... for the Lord your God is with you wherever you go.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Joshua 1:9</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="encouraging-bible-verses"
              faqs={[
                { question: "What are the best encouraging bible verses?", answer: "Key encouraging bible verses include Joshua 1:9 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I memorize verses about encouragement?", answer: "Start with the shortest line. Repeat morning and night for a week. Write it by hand once a day." },
                { question: "Can I share encouraging bible verses with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="encouraging-bible-verses" />
            <ArticleBottomCTA
              title={"Take one faithful step with Encouragement today"}
              description={"Receive a practical Guide Catholic plan tailored to your current spiritual season."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
