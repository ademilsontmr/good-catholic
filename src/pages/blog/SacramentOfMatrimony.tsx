import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Church, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SacramentOfMatrimony() {
  return (
    <>
      <Helmet>
        <title>The Sacrament of Matrimony: Catholic Marriage Theology | Guide Catholic</title>
        <meta name="description" content="Discover the theology of Catholic marriage. Learn about sacramental marriage, the vows, indissolubility, and how spouses participate in God's creative love." />
        <meta name="keywords" content="sacrament of matrimony, catholic marriage, sacramental marriage, marriage theology, catholic wedding" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sacrament-of-matrimony/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="The Sacrament of Matrimony: Catholic Marriage Theology"
          description="Discover the theology of Catholic marriage. Learn about sacramental marriage, the vows, indissolubility, and how spouses participate in God's creative love."
          url="https://guidecatholic.com/blog/sacrament-of-matrimony/"
        />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Sacrament of Matrimony", url: "https://guidecatholic.com/blog/sacrament-of-matrimony/" },
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
              <span className="text-text">Sacrament of Matrimony</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Marriage & Family
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Sacrament of Matrimony: Catholic Marriage Theology
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Marriage in the Catholic Church is not merely a contract but a sacrament—a visible sign of God's invisible grace. Understanding the theology of Catholic marriage illuminates why the Church takes this union so seriously and how spouses participate in the divine life.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Heart className="w-24 h-24 text-rose-400/20 absolute top-4 right-4" />
              <Heart className="w-32 h-32 text-rose-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Matrimony is the sacrament uniting baptized man and woman in indissoluble covenant — the couple are ministers; the priest witnesses. Openness to children and fidelity are essential; valid marriage requires free consent, proper form, and no prior bond.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
                Marriage in the Catholic Church is not merely a contract but a sacrament—a visible sign of God's invisible grace. Understanding the theology of Catholic marriage illuminates why the Church takes this union so seriously and how spouses participate in the divine life.
              </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Consent: Making the Vows
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              In a sacramental marriage, the couple themselves are the ministers. The priest or deacon serves as the Church's witness, but the man and woman confer the sacrament upon each other through their free, mutual consent. This consent is expressed in the vows—the promises that establish the marriage covenant.
            </LinkedText>
            <p className="text-text leading-relaxed mb-6 italic bg-accent/10 p-4 rounded-lg">
              "I, [name], take you, [name], to be my wife/husband. I promise to be faithful to you, in good times and in bad, in sickness and in health, to love you and to honor you all the days of my life."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Two Ends of Marriage
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Catholic theology identifies two purposes (ends) of marriage, which are equally important and inseparable:
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Good of the Spouses (Unitive)
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Marriage exists for the mutual sanctification and fulfillment of the husband and wife. Through their life together, they support each other's journey toward holiness. The marital embrace itself, when open to life, expresses and strengthens this union.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Transmission of Life (Procreative)
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              Marriage is ordered toward the procreation and education of children. Spouses participate in God's creative work by cooperating with Him in bringing new life into the world and raising children in faith.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Indissolubility: Until Death Do Us Part
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The Catholic Church teaches that a valid, consummated sacramental marriage is indissoluble—no power on earth can dissolve it. This mirrors Christ's faithful, unbreakable love for His Church. Jesus taught: "What God has joined together, no human being must separate" (Matthew 19:6).
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              This teaching challenges modern assumptions but provides a foundation of security for spouses and children. The permanence of marriage enables the total gift of self that love requires.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Domestic Church
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The family is called the "domestic church" (Lumen Gentium 11). Parents are the primary educators of their children in faith. The home becomes a place of prayer, forgiveness, and growth in virtue. Family life itself is a path to holiness.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Marriage Preparation
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The Church requires thorough preparation for marriage, including:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Pre-Cana or engaged encounter programs</li>
              <li>Meetings with the parish priest or deacon</li>
              <li>Natural Family Planning instruction</li>
              <li>Assessment of freedom to marry (no prior bonds)</li>
              <li>Spiritual preparation and confession</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Living the Sacrament Daily
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">
              The grace of the sacrament is not received only on the wedding day—it flows continually throughout married life. Couples access this grace through:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Prayer together</li>
              <li>Regular Mass attendance</li>
              <li>Frequent confession</li>
              <li>Study of Catholic marriage teaching</li>
              <li>Retreats and marriage enrichment</li>
              <li>Support from other Catholic couples</li>
            </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "What God has joined together, let no one separate." - Mark 10:9
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Husbands, love your wives." - Ephesians 5:25
                </p>
              </div>
              
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Love is patient, love is kind." - 1 Corinthians 13:4
                </p>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Understanding the Topic</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">Discover the theology of Catholic marriage. Learn about sacramental marriage, the vows, indissolubility, and how spouses participate in God&apos;s creative love. Catholic faith integrates worship, moral life, and prayer. This article explains the topic in clear language so you can teach your family, prepare for sacraments, or answer questions from seekers.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How This Fits Catholic Life</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">Nothing in Catholic spirituality is isolated. Doctrine supports prayer; prayer flows into charity; charity witnesses to the world. Keep this topic connected to Sunday Mass, Scripture reading, and care for the poor.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Application</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">Choose one habit to start this week: five minutes of morning prayer, one work of mercy, or one conversation about faith with your spouse or children. Small fidelity over years transforms souls.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Going Deeper</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">Use the related articles below to continue learning. If you are new to Catholicism, consider RCIA or a parish Bible study. Growth in faith is a lifelong pilgrimage, not a single article.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">Readers often search for The Sacrament of Matrimony: Catholic Marriage Theology during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacrament-of-matrimony">Discover the theology of Catholic marriage. Learn about sacramental marriage, the vows, indissolubility, and how spouses participate in God&apos;s creative love. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>

              </div>

            <BlogFAQ faqs={[
              {
                question: "Why does the Church require marriage preparation?",
                answer: "Marriage is a lifelong commitment with profound implications. Preparation helps couples understand the theology of marriage, develop communication skills, learn Natural Family Planning, and address potential issues before vows are exchanged. This strengthens marriages and reduces divorce rates."
              },
              {
                question: "What makes a marriage sacramental?",
                answer: "A marriage between two baptized Christians is sacramental by nature. The sacrament is conferred by the spouses' consent, witnessed by the Church. This means God's grace is present to help the couple fulfill their vows. Between a baptized and unbaptized person, it is a valid natural marriage but not sacramental."
              },
              {
                question: "Can Catholic marriages be annulled?",
                answer: "Annulment is not Catholic divorce—it is a declaration that a valid marriage never existed due to some impediment or defect in consent at the time of the wedding. If a tribunal finds that essential requirements were lacking (like freedom, understanding, or openness to children), it may declare the marriage null."
              },
              {
                question: "How can we strengthen our marriage?",
                answer: "Pray together daily, attend Mass weekly, receive confession regularly, read about Catholic marriage, attend marriage enrichment programs, communicate openly about difficulties, serve together in ministry, and seek help early when problems arise. The sacramental grace is there—access it through these practices."
              },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

<RelatedArticles currentSlug="sacrament-of-matrimony" />

            <ArticleBottomCTA title="Prepare for Your Marriage" description="Take our assessment and receive a personalized marriage preparation guide." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
