import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ActOfSpiritualCommunionCatholic() {
  return (
    <>
      <Helmet>
        <title>Act of Spiritual Communion: Full Text & When Catholics Pray It | Guide Catholic</title>
        <meta name="description" content="Act of Spiritual Communion with full Catholic text — when you cannot receive the Eucharist at Mass." />
        <meta name="keywords" content="act of spiritual communion, spiritual communion prayer full text, catholic communion when unable" />
        <link rel="canonical" href="https://guidecatholic.com/blog/act-of-spiritual-communion-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Act of Spiritual Communion: Full Text & When Catholics Pray It" description="Act of Spiritual Communion with full Catholic text — when you cannot receive the Eucharist at Mass." url="https://guidecatholic.com/blog/act-of-spiritual-communion-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Act of Spiritual Communion", url: "https://guidecatholic.com/blog/act-of-spiritual-communion-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Act of Spiritual Communion</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Act of Spiritual Communion: Full Text & When Catholics Pray It</h1>
              <p className="text-xl text-text-muted leading-relaxed">When illness, travel, or conscience prevents receiving the Eucharist, Spiritual Communion unites the soul to Christ with desire and love — a practice saints have recommended for centuries.</p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10"><Sun className="w-24 h-24 text-amber-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Act of Spiritual Communion is a Catholic prayer expressing desire to receive Jesus in the Eucharist when sacramental Communion is impossible — during illness, travel, or before Mass. St. Alphonsus Liguori popularized the classic English text.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-spiritual-communion-catholic">Spiritual Communion is a prayer expressing the longing to receive Jesus in the Blessed Sacrament when sacramental Communion is not possible. It does not replace the Eucharist, but it keeps the heart oriented toward Christ&apos;s Real Presence.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Act of Spiritual Communion: Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  My Jesus, I believe that you are present in the Most Holy Sacrament. I love you above all things, and I desire to receive you into my soul. Since I cannot at this moment receive you sacramentally, come at least spiritually into my heart. I embrace you as if you were already there and unite myself wholly to you. Never permit me to be separated from you. Amen.
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">This form is widely attributed to St. Alphonsus Liguori (1696–1787), doctor of the Church and founder of the Redemptorists. It appears in prayer books, missalettes, and Eucharistic adoration pamphlets across U.S. parishes.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is Spiritual Communion?</h2>
              <p className="text-text leading-relaxed mb-6">The Catechism teaches that the Eucharist is &quot;the source and summit of the Christian life&quot; (CCC 1324). Sacramental Communion brings the whole Christ — Body, Blood, Soul, and Divinity — under the appearances of bread and wine. Spiritual Communion is an act of desire for that gift when one cannot receive physically.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-spiritual-communion-catholic">St. Thomas Aquinas explained that a person united to Christ by charity and desiring sacramental Communion can receive spiritual fruit even when separated from the altar — for example, by imprisonment, war, or serious illness.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray Spiritual Communion</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>During illness when fasting or attendance at Mass is impossible.</li>
                <li>While watching Mass on television or online — especially the sick and homebound.</li>
                <li>When traveling and unable to find Mass in time.</li>
                <li>Before Eucharistic adoration, as preparation to receive later at Mass.</li>
                <li>When conscious of mortal sin and awaiting Confession — with resolution to confess.</li>
                <li>During spiritual communion hours promoted in Eucharistic revival events.</li>
              </ul>

              <QuizCTA title="Do you want a stronger prayer routine?" description="Take the Catholic life assessment and receive practical next steps for Eucharistic devotion and daily prayer." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray Spiritual Communion Well</h2>
              <p className="text-text leading-relaxed mb-6">Pray with faith in the Real Presence, not as a casual habit. Kneel if possible. Make an act of contrition if needed. Pause after the prayer in silence, aware that Christ is near. If you watch Mass remotely, pray Spiritual Communion at the moment the priest receives or distributes Communion.</p>
              <p className="text-text leading-relaxed mb-6">Children learning First Communion, nursing mothers, and elderly Catholics in care facilities often rely on this prayer. Parishes sometimes print it on cards for homebound ministry teams.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Spiritual Communion vs. Sacramental Communion</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-spiritual-communion-catholic">Spiritual Communion is not a substitute for Sunday Mass when you are able to attend. The Church requires Catholics to receive the Eucharist at least once during Easter season and to attend Mass every Sunday and Holy Day of Obligation. Spiritual Communion supports love for the Eucharist; it does not replace the obligation to worship in person when possible.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Other Forms of Spiritual Communion</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  I wish, my Lord, to receive you with the purity, humility, and devotion with which your most holy Mother received you, with the spirit and fervor of the saints. Amen.
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">Any sincere prayer asking Jesus to enter the heart spiritually is valid. The key is ardent desire united to love and, when necessary, repentance.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Homebound and Hospital Ministry</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="act-of-spiritual-communion-catholic">Extraordinary ministers and family caregivers often pray Spiritual Communion aloud with the sick when a priest cannot bring Communion daily. Pair the prayer with the Sunday readings from the USCCB website so the homebound stay connected to the liturgical year. When Communion is brought from church, pray in thanksgiving rather than replacing the sacrament.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "Does Spiritual Communion replace going to Mass?", answer: "No. When you are able, Catholics must attend Sunday Mass and receive the Eucharist sacramentally. Spiritual Communion is for times when sacramental reception is truly impossible or must be delayed." },
              { question: "Who composed the common Act of Spiritual Communion?", answer: "The most popular English form is attributed to St. Alphonsus Liguori, an eighteenth-century bishop and doctor of the Church whose devotional writings remain widely used." },
              { question: "Can I make a Spiritual Communion if I am in mortal sin?", answer: "You may pray with desire for union with Christ, but you should make an act of contrition and go to Confession before receiving sacramental Communion. Spiritual Communion expresses longing while you prepare to return to the altar." },
              { question: "When should I pray Spiritual Communion during a livestreamed Mass?", answer: "Pray it at the Communion rite — when the priest receives Communion and the congregation would normally approach the altar. Pause, kneel if possible, and pray with attention." },
              { question: "Can homebound Catholics use Spiritual Communion daily?", answer: "Yes. It is a standard practice when a priest or Eucharistic minister cannot visit every day. Pair it with the Sunday readings and an act of contrition if needed." }
            ]} />
            <RelatedArticles currentSlug="act-of-spiritual-communion-catholic" />
            <ArticleBottomCTA title="Grow in Catholic Prayer" description="Receive a personalized guide for building a deeper daily prayer life." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
