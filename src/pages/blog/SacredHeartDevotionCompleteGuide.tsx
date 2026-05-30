import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SacredHeartDevotionCompleteGuide() {
  return (
    <>
      <Helmet>
        <title>Sacred Heart Devotion: Complete Catholic Guide (First Fridays & Promises) | Guide Catholic</title>
        <meta name="description" content="Sacred Heart devotion complete guide — First Fridays, 12 promises, Enthronement, and how U.S. Catholics honor the Heart of Jesus." />
        <meta name="keywords" content="sacred heart devotion, first friday devotion, sacred heart promises catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sacred-heart-devotion-complete-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Sacred Heart Devotion: Complete Catholic Guide (First Fridays & Promises)" description="Sacred Heart devotion complete guide — First Fridays, 12 promises, Enthronement, and how U.S. Catholics honor the Heart of Jesus." url="https://guidecatholic.com/blog/sacred-heart-devotion-complete-guide/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Sacred Heart Devotion", url: "https://guidecatholic.com/blog/sacred-heart-devotion-complete-guide/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Sacred Heart Devotion</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy &amp; Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Sacred Heart Devotion: Complete Catholic Guide (First Fridays & Promises)</h1>
              <p className="text-xl text-text-muted leading-relaxed">June is the month of the Sacred Heart — a devotion to Christ&apos;s burning love revealed to St. Margaret Mary Alacoque and practiced in millions of American Catholic homes through First Fridays and family enthronement.</p>
            </header>
            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10"><Heart className="w-24 h-24 text-red-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Sacred Heart devotion honors Jesus&apos; love symbolized by his wounded heart — First Friday Communion, home enthronement, and solemnity on the Friday after Pentecost (June 19, 2026). June is traditionally the month of the Sacred Heart.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-devotion-complete-guide">Devotion to the Sacred Heart focuses on the human heart of Jesus as the symbol of his divine love — wounded on the cross, yet merciful to sinners. Pope Pius IX extended the feast to the universal Church in 1856. The solemnity falls nineteen days after Pentecost — in 2026, on Friday, June 19.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Origins: St. Margaret Mary and the Apparitions</h2>
              <p className="text-text leading-relaxed mb-6">Between 1673 and 1675, Jesus appeared to St. Margaret Mary Alacoque, a Visitation nun in Paray-le-Monial, France. He asked for reparation for coldness toward the Eucharist and spread of devotion to his Sacred Heart — often shown encircled by thorns, with flames and the cross.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-devotion-complete-guide">St. Claude de la Colombière promoted the devotion; Jesuits and later the Apostleship of Prayer (now the Pope&apos;s Worldwide Prayer Network) spread it worldwide. American parishes, schools named Sacred Heart, and hospitals bear witness to its reach.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The First Friday Devotion</h2>
              <p className="text-text leading-relaxed mb-6">Jesus asked Margaret Mary for Communion on the first Friday of nine consecutive months in reparation. Catholics across the U.S. attend Mass and receive the Eucharist on First Fridays, often with Confession the day before or that week. Parishes may offer special Masses, adoration, or sermons on the Sacred Heart.</p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Attend Mass and receive Communion in a state of grace.</li>
                <li>Go to Confession within eight days before or after (required for the traditional promises).</li>
                <li>Pray for the intentions of the Holy Father (one Our Father and Hail Mary).</li>
                <li>Make an act of reparation for sins against the Eucharist and against love.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Act of Consecration to the Sacred Heart (Short Form)</h3>
                <p className="text-text italic leading-relaxed text-lg">
                  O Sacred Heart of Jesus, I place all my trust in you. O Sacred Heart of Jesus, have mercy on us. Immaculate Heart of Mary, pray for us. St. Joseph, pray for us.
                </p>
              </div>

              <QuizCTA title="Grow in devotion to Christ" description="Take the Catholic life assessment for guidance on prayer, Mass, and family faith." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Enthronement of the Sacred Heart in the Home</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-devotion-complete-guide">Family enthronement — placing an image of the Sacred Heart in a place of honor and praying a consecration — became popular in the U.S. through Father Mateo Crawley-Boevey and the National Enthronement Center. Many Catholics enthroned the Sacred Heart alongside the Immaculate Heart of Mary, entrusting the family to Christ&apos;s kingship of love.</LinkedText>
              <p className="text-text leading-relaxed mb-6">The ceremony typically includes Mass or a priest&apos;s blessing, placement of the image, family consecration, and a festive meal. Contact your parish for enthronement resources approved in your diocese.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sacred Heart and Immaculate Heart</h2>
              <p className="text-text leading-relaxed mb-6">The day after the Sacred Heart solemnity, the Church celebrates the Immaculate Heart of Mary (in 2026, June 20). The two devotions belong together: Mary&apos;s heart pierced by sorrow united with her Son&apos;s heart pierced for love. June devotions in U.S. parishes often include both.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Twelve Promises (Traditional List)</h2>
              <p className="text-text leading-relaxed mb-4">Tradition records these promises to St. Margaret Mary for those who honor the Sacred Heart through the First Friday devotion. The Church approves the devotion; treat the list as encouragement, not a contract:</p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6 text-sm">
                <li>I will give them all the graces necessary for their state in life.</li>
                <li>I will establish peace in their families.</li>
                <li>I will console them in all their troubles.</li>
                <li>I will be their refuge in life and especially at the hour of death.</li>
                <li>I will shed abundant blessings on all their undertakings.</li>
                <li>Sinners shall find in my Heart the source of an infinite ocean of mercy.</li>
                <li>Lukewarm souls shall become fervent.</li>
                <li>Fervent souls shall quickly rise to great perfection.</li>
                <li>I will bless every place where an image of my Heart is exposed and honored.</li>
                <li>I will give priests the gift of touching the hardest hearts.</li>
                <li>Those who promote this devotion shall have their names written in my Heart.</li>
                <li>I promise you in the excessive mercy of my Heart that my all-powerful love will grant to all those who receive Communion on the First Fridays for nine consecutive months the grace of final repentance; they shall not die in my disgrace nor without receiving the sacraments, and my Heart shall be their safe refuge in that last hour.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">First Friday Dates in 2026</h2>
              <p className="text-text leading-relaxed mb-4">Plan Confession and Mass around these dates if you begin a nine-month First Friday cycle in 2026:</p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>January 2 · February 6 · March 6 · April 3 · May 1</li>
                <li>June 5 · July 3 · August 7 · September 4 · October 2</li>
                <li>November 6 · December 4</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-devotion-complete-guide">Many U.S. parishes offer extra confession times on First Fridays. Arrive early — lines are often long. If you miss a month, speak with your priest; some spiritual directors advise continuing rather than restarting from zero.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Living the Devotion Today</h2>
              <p className="text-text leading-relaxed mb-6">Honor the Sacred Heart by frequent Communion, reverent attendance at Mass, Eucharistic adoration, and charity toward the poor — the love Christ&apos;s heart demands. The devotion is not sentimental alone; it calls for conversion and reparation where Catholics have grown lukewarm.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "When is the Sacred Heart solemnity in 2026?", answer: "In 2026, the Solemnity of the Sacred Heart of Jesus falls on Friday, June 19 — the Friday after the second Sunday after Pentecost." },
              { question: "What is the First Friday devotion?", answer: "Receiving Communion on the first Friday of nine consecutive months, with Confession and prayer for the Holy Father, in honor of the Sacred Heart and in reparation for sins against Christ&apos;s love." },
              { question: "Are the twelve promises of the Sacred Heart guaranteed?", answer: "They come from private revelation to St. Margaret Mary. The devotion is approved, but Catholics should not treat the promises as automatic contracts. Faithful practice opens the heart to grace God wishes to give." },
              { question: "What is enthronement of the Sacred Heart?", answer: "A family ceremony placing an image of the Sacred Heart in a place of honor in the home and consecrating the household to Christ — often with a priest&apos;s blessing." },
              { question: "What image is used for the Sacred Heart?", answer: "Jesus&apos; heart encircled by thorns, with flames and often a cross — showing love wounded yet burning for souls." },
              { question: "Is June dedicated to the Sacred Heart?", answer: "Yes. June is traditionally the month of the Sacred Heart in Catholic piety worldwide." }
            ]} />
            <RelatedArticles currentSlug="sacred-heart-devotion-complete-guide" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Deepen your Catholic devotion</h3>
              <p className="text-text-muted mb-6">Get a personalized guide for prayer and spiritual growth.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
