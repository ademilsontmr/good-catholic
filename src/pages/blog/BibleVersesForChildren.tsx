import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Globe, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function BibleVersesForChildren() {
  return (
    <>
      <Helmet>
        <title>{"Bible Verses for Children: Scriptures Catholics Pray and Memorize | Guide Catholic"}</title>
        <meta name="description" content={"Bible Verses for Children for Catholics — Mark 10:14 and RSV-CE scriptures for prayer, comfort, and daily faith."} />
        <meta name="keywords" content={"bible verses for children, catholic bible verses for children, bible verses children"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/bible-verses-for-children/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Bible Verses for Children: Scriptures Catholics Pray and Memorize"}
        description={"Bible Verses for Children for Catholics — Mark 10:14 and RSV-CE scriptures for prayer, comfort, and daily faith."}
        url="https://guidecatholic.com/blog/bible-verses-for-children/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Bible Verses for Children", url: "https://guidecatholic.com/blog/bible-verses-for-children/" },
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
              <span className="text-text">Bible Verses for Children</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Bible Verses for Children: Scriptures Catholics Pray and Memorize
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                These bible verses for children help Catholics bring Scripture into prayer, family life, and seasons of need.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Globe className="w-24 h-24 text-blue-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 border-l-4 border-accent bg-background-muted/40 pl-6 py-5 rounded-r-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Key bible verses for children include Mark 10:14 and the passages gathered below for meditation and memorization.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-for-children">
                Children memorize what they hear at bedtime. Short, vivid verses plant faith early — and remind parents that formation starts at home.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Kid-Friendly Verses</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Mark 10:14</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Let the children come to me, do not hinder them; for to such belongs the kingdom of God.&quot;</p>
                    <p className="text-text-muted text-xs mt-2 leading-relaxed">Read this first verse aloud — hearing Scripture changes how it lands.</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 139:14</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I praise thee, for thou art fearful and wonderful. Wonderful are thy works!&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Proverbs 3:5</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Trust in the Lord with all your heart.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Ephesians 6:1</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;Children, obey your parents in the Lord, for this is right.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Psalm 23:1</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;The Lord is my shepherd, I shall not want.&quot;</p>
                  </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="bible-verses-for-children">
                Repeat verses playfully: at breakfast, in the car, before bed. Children learn Scripture the way they learn songs.
              </LinkedText>
              <QuizCTA
                title={"Is your prayer life matching what you believe?"}
                description={"Take our free Catholic assessment for habits that support prayer, sacraments, and peace around children."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">More for Little Hearts</h2>
              <div className="space-y-4 mb-8">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">John 3:16</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;For God so loved the world that he gave his only Son.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">Philippians 4:13</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;I can do all things in him who strengthens me.&quot;</p>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">1 John 4:19</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;We love, because he first loved us.&quot;</p>
                  </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Memorize These Verses on Children</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed">Pick one short verse and repeat it at breakfast and bedtime for a week. Children learn Scripture the way they learn songs.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Short Prayer before Verses on Children</h2>
              <div className="bg-background-muted/50 border border-border rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed">Lord Jesus, open my heart to Your Word about children. Give me honesty, courage, and the grace to live what I read. Amen.</p>
              </div>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Daily Discipleship for Children</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="bible-verses-for-children">
                Pick the habit that matches your season — illness, parenting, or a heavy workload — especially around children.
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>Pray your chosen verse on children before you open email.</li>
                <li>Bring one concrete struggle about children to Confession this month.</li>
                <li>Text a verse on children to someone who needs encouragement.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Let the children come to me, do not hinder them; for to such belongs the kingdom of God.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Mark 10:14</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="bible-verses-for-children"
              faqs={[
                { question: "What are the best bible verses for children?", answer: "Key bible verses for children include Mark 10:14 and the passages gathered below for meditation and memorization." },
                { question: "Which Bible should Catholics use for these verses?", answer: "NABRE is used at Mass in the United States; RSV-CE is excellent for study and memorization. Both are approved." },
                { question: "How do I teach Bible verses to kids?", answer: "Use short lines, repeat with gestures, and connect each verse to a simple prayer before bed." },
                { question: "Can I share bible verses for children with non-Catholics?", answer: "Yes. Invite them also to Mass or a parish Bible study so the Word is heard in community." },
                { question: "How do these verses relate to the sacraments?", answer: "Scripture prepares the heart for Confession and Eucharist, and the sacraments deepen our power to live the Word." }
              ]}
            />
            <RelatedArticles currentSlug="bible-verses-for-children" />
            <ArticleBottomCTA
              title={"Let verses on Children shape your next step"}
              description={"Take our free Catholic assessment for habits that support prayer, sacraments, and peace around children."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
