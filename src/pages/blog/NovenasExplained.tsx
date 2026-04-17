import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft, Heart, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function NovenasExplained() {
  return (
    <>
      <Helmet>
        <title>Novenas Explained: The Power of Nine Days of Prayer | Guide Catholic</title>
        <meta name="description" content="Discover the tradition of Catholic novenas. Learn how to pray a novena, the most powerful novenas, and why nine days of prayer brings extraordinary graces." />
        <meta name="keywords" content="novena prayer, Catholic novena, nine days prayer, novena explained, how to pray novena" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novenas-explained/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Novenas Explained: The Power of Nine Days of Prayer"
          description="Discover the tradition of Catholic novenas. Learn how to pray a novena, the most powerful novenas, and why nine days of prayer brings extraordinary graces."
          url="https://guidecatholic.com/blog/novenas-explained/"
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
            <span className="text-text">Novenas Explained</span>
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
              <span>Novena & Prayer</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              Novenas Explained: The Power of Nine Days of Prayer
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              The novena is one of Catholicism's most beloved prayer traditions. For nine days, the faithful pour out their hearts to God or His saints, trusting in the power of persevering prayer. Discover the origins, meaning, and practice of this ancient devotion.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Biblical Roots of the Novena
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The novena has its foundation in Sacred Scripture. After Jesus ascended into heaven, the apostles and Mary gathered in the Upper Room and "devoted themselves with one accord to prayer" for nine days until Pentecost (Acts 1:14). This first "novena" culminated in the outpouring of the Holy Spirit.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The number nine also has significance in salvation history. Jesus died in the ninth hour (3 PM), and tradition holds that He remained in the tomb for 40 hours—completing nine time periods. The number symbolizes completion and preparation for new beginnings.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              What Is a Novena?
            </h2>
            <p className="text-text leading-relaxed mb-6">
              A novena (from the Latin "novem," meaning "nine") is a devotional practice of praying for nine consecutive days. It can be addressed to God directly, to Jesus, to the Holy Spirit, to Mary, or to the saints. The consistent element is the nine-day period of sustained prayer.
            </p>
            <p className="text-text leading-relaxed mb-6">
              While novenas are often prayed for specific intentions, they are not "magic formulas." They express faith, trust in God's providence, and confidence in the communion of saints. The Church approves many novenas, though private novenas can also be offered.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Most Popular Catholic Novenas
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Divine Mercy Novena
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Given by Jesus to St. Faustina Kowalska in the 1930s, this novena is prayed from Good Friday to Divine Mercy Sunday. Jesus promised extraordinary graces to those who participate, including complete forgiveness of sins and punishment.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The St. Jude Novena
            </h3>
            <p className="text-text leading-relaxed mb-6">
              St. Jude Thaddeus, patron of impossible causes, is honored with one of the most popular novenas. Thousands testify to miracles received through his intercession, often after all human hope was exhausted.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The St. Joseph Novena
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Traditionally prayed before his feast day on March 19, this novena honors the foster-father of Jesus. It's particularly powerful for employment, family needs, happy death, and selling homes.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Immaculate Conception Novena
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Prayed November 30 to December 8, this novena prepares for the feast of Mary's Immaculate Conception. St. Maximilian Kolbe called devotion to Mary the "fastest path to Jesus."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              How to Pray a Novena
            </h2>
            <p className="text-text leading-relaxed mb-6">
              While each novena has its specific prayers, the general structure includes:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Opening:</strong> Sign of the Cross and introductory prayers</li>
              <li><strong>Scripture Reading:</strong> A relevant Bible passage</li>
              <li><strong>Specific Novena Prayers:</strong> The traditional prayers for that saint or intention</li>
              <li><strong>Personal Petition:</strong> State your specific request</li>
              <li><strong>Closing:</strong> Glory Be, Hail Mary, and Sign of the Cross</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              What If You Miss a Day?
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Don't abandon the novena if you miss a day! Simply continue from where you left off or add an extra day at the end. What matters is the sincere intention and effort, not legalistic perfection. The saints and God understand our human weakness.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Power of Persevering Prayer
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Jesus taught the importance of persevering prayer through the parable of the persistent widow (Luke 18:1-8). The novena embodies this persistence—returning day after day with the same petition, confident in God's goodness and timing.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Sometimes novenas are answered immediately. Sometimes the answer comes later—or differently than expected. The grace of praying a novena often lies in the transformation of the one praying, learning to trust more deeply in divine providence.
            </p>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
                {
                  question: "Do I have to pray a novena exactly nine consecutive days?",
                  answer: "Ideally yes, but if you miss a day, simply continue and complete nine days total. Some people add an extra day if they miss one. The goal is persevering prayer, not legalistic perfection."
                },
                {
                  question: "Are novenas superstitious?",
                  answer: "Properly understood, no. Novenas express faith and trust in God, not magical manipulation. They are approved by the Church as expressions of piety. The key is praying with faith while remaining open to God's will, which may differ from our specific requests."
                },
                {
                  question: "What's the best novena to start with?",
                  answer: "For beginners, the Divine Mercy Novena (prayed before Divine Mercy Sunday) or a simple novena to the Virgin Mary are excellent choices. The St. Jude novena is popular for urgent intentions. Choose one that resonates with your current needs or spiritual attraction."
                },
                {
                  question: "Can I pray multiple novenas at once?",
                  answer: "Yes, though it's often better to focus on one or two at a time to pray them well. If you have multiple urgent intentions, you can certainly pray several novenas simultaneously. Just be sure you can maintain the commitment to each."
                }
              ]}
            />

            <RelatedArticles currentSlug="novenas-explained" />
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
