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

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Divine Office for Laity</span>
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
                  Prayer & Devotion
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Divine Office for Lay Catholics: How to Pray the Liturgy of the Hours
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Liturgy of the Hours—also known as the Divine Office—is not just for priests and religious. Lay Catholics are increasingly discovering this ancient prayer of the Church, which sanctifies the entire day through psalms, readings, and intercession.
              </p>
            </header>

            <div className="aspect-video bg-purple-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Sun className="w-24 h-24 text-purple-400/20 absolute top-4 right-4" />
              <BookOpen className="w-32 h-32 text-purple-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
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

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Seven times a day I praise you." - Psalm 119:164
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Pray constantly." - 1 Thessalonians 5:17
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "My house shall be called a house of prayer." - Matthew 21:13
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="divine-office-laity" />

            <BlogFAQ faqs={[
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
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Begin Your Prayer Journey Today
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized prayer plan.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Assessment
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
