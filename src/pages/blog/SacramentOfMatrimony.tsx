import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Church, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

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

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Sacrament of Matrimony</span>
          </nav>

          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <Heart className="w-4 h-4" />
              <span>Marriage & Family</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              The Sacrament of Matrimony: Catholic Marriage Theology
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              Marriage in the Catholic Church is not merely a contract or a social institution—it is a sacrament, a visible sign of God's invisible grace. Understanding the theology of sacramental marriage illuminates the dignity, demands, and beauty of this vocation.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Marriage as Sacrament
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Catechism of the Catholic Church teaches that "the matrimonial covenant...is ordered toward the good of the spouses and the procreation and education of offspring" and "has been raised by Christ the Lord to the dignity of a sacrament" (CCC 1601). This means Christ invested marriage with special grace to help spouses live their vocation faithfully.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Consent: Making the Vows
            </h2>
            <p className="text-text leading-relaxed mb-6">
              In a sacramental marriage, the couple themselves are the ministers. The priest or deacon serves as the Church's witness, but the man and woman confer the sacrament upon each other through their free, mutual consent. This consent is expressed in the vows—the promises that establish the marriage covenant.
            </p>
            <p className="text-text leading-relaxed mb-6 italic bg-accent/10 p-4 rounded-lg">
              "I, [name], take you, [name], to be my wife/husband. I promise to be faithful to you, in good times and in bad, in sickness and in health, to love you and to honor you all the days of my life."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Two Ends of Marriage
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Catholic theology identifies two purposes (ends) of marriage, which are equally important and inseparable:
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Good of the Spouses (Unitive)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Marriage exists for the mutual sanctification and fulfillment of the husband and wife. Through their life together, they support each other's journey toward holiness. The marital embrace itself, when open to life, expresses and strengthens this union.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Transmission of Life (Procreative)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Marriage is ordered toward the procreation and education of children. Spouses participate in God's creative work by cooperating with Him in bringing new life into the world and raising children in faith.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Indissolubility: Until Death Do Us Part
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Catholic Church teaches that a valid, consummated sacramental marriage is indissoluble—no power on earth can dissolve it. This mirrors Christ's faithful, unbreakable love for His Church. Jesus taught: "What God has joined together, no human being must separate" (Matthew 19:6).
            </p>
            <p className="text-text leading-relaxed mb-6">
              This teaching challenges modern assumptions but provides a foundation of security for spouses and children. The permanence of marriage enables the total gift of self that love requires.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Domestic Church
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The family is called the "domestic church" (Lumen Gentium 11). Parents are the primary educators of their children in faith. The home becomes a place of prayer, forgiveness, and growth in virtue. Family life itself is a path to holiness.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Marriage Preparation
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Church requires thorough preparation for marriage, including:
            </p>
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
            <p className="text-text leading-relaxed mb-6">
              The grace of the sacrament is not received only on the wedding day—it flows continually throughout married life. Couples access this grace through:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Prayer together</li>
              <li>Regular Mass attendance</li>
              <li>Frequent confession</li>
              <li>Study of Catholic marriage teaching</li>
              <li>Retreats and marriage enrichment</li>
              <li>Support from other Catholic couples</li>
            </ul>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
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
                }
              ]}
            />

            <RelatedArticles currentSlug="sacrament-of-matrimony" />
          </div>

          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link to="/blog/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
