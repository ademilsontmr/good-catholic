import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function DailyMassReadings() {
  return (
    <>
      <Helmet>
        <title>Daily Mass Readings Catholic: How to Follow, Apps & the Lectionary | Guide Catholic</title>
        <meta name="description" content="How to follow the Catholic daily Mass readings — what they are, the three-year cycle, the best apps and websites, and how to use them for daily prayer and Scripture study." />
        <meta name="keywords" content="daily mass readings catholic, catholic daily readings, mass readings today, lectionary catholic, usccb daily readings, catholic bible readings today, gospel reading today" />
        <link rel="canonical" href="https://guidecatholic.com/blog/daily-mass-readings-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Daily Mass Readings Catholic: How to Follow, Apps & the Lectionary"
        description="How to follow the Catholic daily Mass readings — what they are, the three-year cycle, the best apps and websites, and how to use them for daily prayer and Scripture study."
        url="https://guidecatholic.com/blog/daily-mass-readings-catholic/"
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
              <span className="text-text">Daily Mass Readings</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Bible & Faith</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Daily Mass Readings Catholic: How to Follow, Apps & the Lectionary
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Every day, the Catholic Church reads from Scripture at Mass — a first reading, a psalm, a second reading, and the Gospel. Following these daily readings is one of the most powerful ways to grow in your Catholic faith and stay connected to the universal Church.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-yellow-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                One of the most beautiful aspects of Catholic life is that every day, over a billion Catholics around the world hear the same Scripture readings at Mass. Whether you are in New York or Nairobi, Tokyo or Rome, the same Word of God is proclaimed. Following the daily Mass readings connects you to this universal prayer of the Church.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Even if you cannot attend daily Mass, reading and praying with the daily readings at home is a powerful spiritual practice. It takes only 10-15 minutes and keeps you in step with the liturgical rhythm of the Church throughout the year.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Are the Daily Mass Readings?</h2>
              <p className="text-text leading-relaxed mb-6">
                At every Mass, the Church proclaims three Scripture readings (on Sundays and solemnities) or two readings (on weekdays):
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>First Reading:</strong> Usually from the Old Testament (or Acts of the Apostles during Eastertide). It is chosen to connect thematically with the Gospel.</li>
                <li><strong>Responsorial Psalm:</strong> A psalm sung or recited responsively between the first and second readings. It meditates on the first reading.</li>
                <li><strong>Second Reading (Sundays only):</strong> From the New Testament letters (epistles). It follows a semi-continuous pattern through the year, independent of the other readings.</li>
                <li><strong>Gospel Acclamation:</strong> "Alleluia" (or another acclamation during Lent), followed by a verse from the Gospel.</li>
                <li><strong>Gospel:</strong> From one of the four Gospels — Matthew, Mark, Luke, or John. This is the most important reading of the Mass.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Lectionary: The Church's Reading Plan</h2>
              <p className="text-text leading-relaxed mb-6">
                The <strong>Lectionary</strong> is the book that contains all the Scripture readings for Mass, organized according to the liturgical calendar. It was revised after the Second Vatican Council and promulgated in 1969 (with a revised edition in 1981).
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Lectionary is organized in two cycles:
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Sunday Cycle (Three Years: A, B, C)</h3>
              <p className="text-text leading-relaxed mb-6">
                Sunday Mass readings follow a three-year cycle:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Year A:</strong> The Gospel of Matthew is the primary Gospel</li>
                <li><strong>Year B:</strong> The Gospel of Mark is the primary Gospel (with John 6 inserted in summer)</li>
                <li><strong>Year C:</strong> The Gospel of Luke is the primary Gospel</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                The Gospel of John is read during Lent and Easter in all three years. Over the three-year cycle, Catholics hear most of the New Testament and a significant portion of the Old Testament at Sunday Mass.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Weekday Cycle (Two Years: I and II)</h3>
              <p className="text-text leading-relaxed mb-6">
                Weekday Mass readings follow a two-year cycle for the first reading (Year I in odd years, Year II in even years). The Gospel readings are the same every year. Over the two-year cycle, Catholics hear most of the New Testament letters and a significant portion of the Old Testament at daily Mass.
              </p>

              <QuizCTA
                title="How is your daily Scripture reading?"
                description="Take our Catholic faith assessment and receive a personalized guide to growing in your knowledge of the Bible."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where to Find Today's Catholic Mass Readings</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">1. USCCB.org (Official — Free)</h3>
              <p className="text-text leading-relaxed mb-6">
                The United States Conference of Catholic Bishops website (<strong>usccb.org/bible/readings</strong>) provides the daily Mass readings for free. It includes the full text of all readings, the responsorial psalm, and the Gospel acclamation. This is the most authoritative source for the US.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">2. Laudate App (Free)</h3>
              <p className="text-text leading-relaxed mb-6">
                The <strong>Laudate app</strong> (iOS and Android) is one of the most popular Catholic apps in the world. It includes the daily Mass readings, the Rosary, the Liturgy of the Hours, and much more — all for free. The readings are updated automatically each day.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">3. Magnificat</h3>
              <p className="text-text leading-relaxed mb-6">
                <strong>Magnificat</strong> is a monthly booklet (and app) that includes the daily Mass readings, morning and evening prayer, and a daily meditation. It is one of the most popular Catholic publications in the world, available in print and digital formats. There is a subscription fee, but many Catholics find it worth it for the quality of the meditations.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">4. Give Us This Day</h3>
              <p className="text-text leading-relaxed mb-6">
                <strong>Give Us This Day</strong> is a monthly prayer book published by Liturgical Press that includes the daily Mass readings, morning and evening prayer, and daily reflections. It is available in print and digital formats.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">5. Word on Fire Daily</h3>
              <p className="text-text leading-relaxed mb-6">
                Bishop Robert Barron's <strong>Word on Fire</strong> website and app provide daily reflections on the Mass readings, written by Bishop Barron and other Catholic scholars. These are particularly helpful for understanding the deeper meaning of the readings.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">6. Daily Gospel (DailyGospel.org)</h3>
              <p className="text-text leading-relaxed mb-6">
                <strong>DailyGospel.org</strong> provides the daily Gospel reading along with a commentary from a Church Father or saint. This is a beautiful way to read the Gospel through the eyes of the tradition.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray with the Daily Readings</h2>
              <p className="text-text leading-relaxed mb-6">
                Simply reading the daily readings is good. Praying with them is better. Here is a simple method:
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Read the first reading slowly.</strong> Notice what strikes you — a word, a phrase, an image.</li>
                <li><strong>Pray the responsorial psalm.</strong> Pray it as your own prayer, not just as a text to be read.</li>
                <li><strong>Read the Gospel slowly.</strong> Imagine the scene. Place yourself in it. Who are you in the story?</li>
                <li><strong>Sit in silence for a few minutes.</strong> Ask: "Lord, what are You saying to me through this passage today?"</li>
                <li><strong>Respond in prayer.</strong> Speak to God about what you have read. Thank Him, ask Him, praise Him.</li>
                <li><strong>Make a resolution.</strong> Is there one concrete thing you can do today in response to what you have read?</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                This is essentially the method of Lectio Divina — the ancient Catholic practice of prayerful Scripture reading. It takes about 15-20 minutes and is one of the most powerful spiritual practices available to Catholics.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Liturgical Year and the Readings</h2>
              <p className="text-text leading-relaxed mb-6">
                The daily readings are organized according to the liturgical year — the Church's annual cycle of seasons and feasts that celebrates the entire mystery of Christ:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Advent (4 weeks before Christmas):</strong> Readings focus on waiting, hope, and preparation for the coming of Christ</li>
                <li><strong>Christmas Season (Christmas to the Baptism of the Lord):</strong> Readings celebrate the Incarnation and the early life of Jesus</li>
                <li><strong>Ordinary Time (after Christmas and after Easter):</strong> Readings follow the public ministry of Jesus in a semi-continuous way</li>
                <li><strong>Lent (40 days before Easter):</strong> Readings focus on conversion, repentance, and preparation for Easter</li>
                <li><strong>Easter Season (50 days from Easter to Pentecost):</strong> Readings celebrate the Resurrection and the early Church</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The Church has always venerated the divine Scriptures just as she venerates the body of the Lord, since, especially in the sacred liturgy, she unceasingly receives and offers to the faithful the bread of life from the table both of God's word and of Christ's body."
                </p>
                <p className="text-text-muted text-center mt-2">— Second Vatican Council, Dei Verbum 21</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Where can I find today's Catholic Mass readings?", answer: "The best sources for today's Catholic Mass readings are: USCCB.org/bible/readings (free, official US source), the Laudate app (free, iOS and Android), Magnificat (subscription booklet/app), and Word on Fire (free daily reflections). All are updated automatically each day." },
              { question: "What is the Catholic Lectionary?", answer: "The Lectionary is the book containing all the Scripture readings for Mass, organized according to the liturgical calendar. Sunday readings follow a three-year cycle (Years A, B, C), with Matthew, Mark, and Luke as the primary Gospels respectively. Weekday readings follow a two-year cycle for the first reading." },
              { question: "How long does it take to read the daily Mass readings?", answer: "Reading the daily Mass readings takes about 5-10 minutes. Praying with them using Lectio Divina takes about 15-20 minutes. Even a brief daily reading of the Gospel alone (2-3 minutes) is a powerful spiritual practice." },
              { question: "What is the difference between Year A, B, and C in the Catholic Lectionary?", answer: "The Sunday Mass readings follow a three-year cycle. Year A features the Gospel of Matthew as the primary Gospel. Year B features Mark (with John 6 in summer). Year C features Luke. The Gospel of John is read during Lent and Easter in all three years. The cycle begins on the First Sunday of Advent." },
              { question: "Can I follow the daily Mass readings if I can't attend daily Mass?", answer: "Absolutely. Reading and praying with the daily Mass readings at home is a powerful spiritual practice, even if you cannot attend Mass. It takes only 10-15 minutes and keeps you in step with the liturgical rhythm of the Church. Many Catholics read the daily readings as part of their morning prayer." },
            ]} />

            <RelatedArticles currentSlug="daily-mass-readings-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Scripture and the faith.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
