import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft, Sun, Moon, Sunrise } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function DivineOfficeLaity() {
  return (
    <>
      <Helmet>
        <title>The Divine Office for Lay Catholics: How to Pray the Liturgy of the Hours | Guide Catholic</title>
        <meta name="description" content="Learn how lay Catholics can pray the Divine Office. Discover the hours of prayer, simplified versions, and how this liturgical prayer sanctifies daily life." />
        <meta name="keywords" content="Divine Office, Liturgy of the Hours, lay Catholics, prayer of the church, daily office, liturgical prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/divine-office-laity/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="The Divine Office for Lay Catholics: How to Pray the Liturgy of the Hours"
          description="Learn how lay Catholics can pray the Divine Office. Discover the hours of prayer, simplified versions, and how this liturgical prayer sanctifies daily life."
          url="https://guidecatholic.com/blog/divine-office-laity/"
        />

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Divine Office for Laity</span>
          </nav>

          {/* Back Button */}
          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Prayer & Devotion</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              The Divine Office for Lay Catholics: How to Pray the Liturgy of the Hours
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              The Liturgy of the Hours—also known as the Divine Office—is not just for priests and religious. Lay Catholics are increasingly discovering this ancient prayer of the Church, which sanctifies the entire day through psalms, readings, and intercession.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              What Is the Divine Office?
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Divine Office is the Church's official daily prayer, composed primarily of psalms, Scripture readings, hymns, and intercessions. St. Athanasius called it "the sacrament of time," as it consecrates each part of the day to God. The Second Vatican Council described it as "the very prayer which Christ Himself, together with His body, addresses to the Father."
            </p>
            <p className="text-text leading-relaxed mb-6">
              While clergy and religious are obligated to pray the full Office, lay Catholics are warmly encouraged to participate in this prayer. It connects the faithful to the universal prayer of the Church being offered continuously around the world.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Seven Hours of Prayer
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The full Liturgy of the Hours consists of seven "hours" spread throughout the day:
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Morning Prayer (Lauds)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Traditionally prayed at sunrise, Morning Prayer consecrates the day to God. It includes a hymn, two psalms, an Old Testament canticle, a short reading, and intercessions. Many laity pray this to begin their workday with God.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Midday Prayer (Sext)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              A brief prayer at noon, sanctifying the middle of the day. It consists of a hymn, three short psalms, a reading, and a concluding prayer. Many pray this during their lunch break.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Afternoon Prayer (None)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Prayed around 3 PM, traditionally associated with the hour of Christ's death. This brief office helps transition from work to evening.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Evening Prayer (Vespers)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The "evening sacrifice of praise," prayed at sunset. It includes a hymn, two psalms, a New Testament canticle (often the Magnificat), a reading, and intercessions. Many families make this their main evening prayer.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Night Prayer (Compline)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The final prayer before sleep, entrusting oneself to God's protection. It includes a brief examination of conscience, psalms, the Nunc Dimittis (Canticle of Simeon), and a Marian antiphon.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Simplified Options for Busy Laity
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Praying all seven hours may be impractical for most laypeople. The Church recommends simplified forms:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Morning and Evening Prayer:</strong> The two "hinges" of the day, most essential for laity</li>
              <li><strong>Night Prayer:</strong> Brief and perfect for bedtime</li>
              <li><strong>Shorter Christian Prayer:</strong> A simplified one-volume version published specifically for laity</li>
              <li><strong>Digital Apps:</strong> iBreviary, Universalis, and others make the Office accessible anywhere</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Psalms: Heart of the Office
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Divine Office prays the entire Book of Psalms over a four-week cycle. These ancient prayers of Israel become the prayer of Christ and His Church. Through the psalms, we express every human emotion before God—praise, lament, thanksgiving, petition, and trust.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Practical Tips for Beginners
            </h2>
            <p className="text-text leading-relaxed mb-6">
              If you're new to the Divine Office, start small:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Begin with just Night Prayer—it's brief and beautiful</li>
              <li>Add Morning Prayer once you're comfortable</li>
              <li>Consider Evening Prayer with your family</li>
              <li>Use a single-volume Christian Prayer breviary to avoid complexity</li>
              <li>Try an app if books feel intimidating</li>
            </ul>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
                {
                  question: "Do I need special books to pray the Divine Office?",
                  answer: "You can use the full four-volume Liturgy of the Hours, the one-volume Christian Prayer, or digital apps like iBreviary or Universalis. Many begin with apps since they automatically show the correct prayers for each day, eliminating the complexity of finding the right pages."
                },
                {
                  question: "How long does it take to pray the Office?",
                  answer: "Night Prayer takes 5-10 minutes. Morning and Evening Prayer each take 15-20 minutes when prayed fully. The shorter hours (Midday, Afternoon) take 5 minutes each. Most laypeople praying Morning, Evening, and Night spend about 30-40 minutes total per day."
                },
                {
                  question: "Can families pray the Divine Office together?",
                  answer: "Absolutely! Evening Prayer is particularly suited for family prayer. Children can participate in the responsories, the Magnificat, and the closing prayers. Many families find it a beautiful way to sanctify their evening together."
                },
                {
                  question: "Is the Divine Office different from the Rosary?",
                  answer: "Yes. The Rosary is a private devotional prayer involving meditation on mysteries. The Divine Office is the Church's official liturgical prayer, praying the psalms and readings. Both are valuable—many Catholics pray both daily, or alternate between them depending on time and circumstances."
                }
              ]}
            />

            <RelatedArticles currentSlug="divine-office-laity" />
          </div>

          {/* Back to Blog */}
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
