import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function AssumptionOfMaryCatholicGuide() {
  return (
    <>
      <Helmet>
        <title>Assumption of Mary: Catholic Feast Day Guide (August 15) | Guide Catholic</title>
        <meta name="description" content="Assumption of Mary — Catholic teaching, Holy Day of Obligation in the USA, Mass, and how to honor Mary on August 15." />
        <meta name="keywords" content="assumption of mary catholic, august 15 holy day, assumption feast day usa" />
        <link rel="canonical" href="https://guidecatholic.com/blog/assumption-of-mary-catholic-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Assumption of Mary: Catholic Feast Day Guide (August 15)" description="Assumption of Mary — Catholic teaching, Holy Day of Obligation in the USA, Mass, and how to honor Mary on August 15." url="https://guidecatholic.com/blog/assumption-of-mary-catholic-guide/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Assumption of Mary", url: "https://guidecatholic.com/blog/assumption-of-mary-catholic-guide/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Assumption of Mary</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />17 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Assumption of Mary: Catholic Feast Day Guide (August 15)</h1>
              <p className="text-xl text-text-muted leading-relaxed">On August 15 Catholics celebrate the Assumption — the truth that Mary, at the end of her earthly life, was taken body and soul into heavenly glory. In the United States it is a Holy Day of Obligation.</p>
            </header>
            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10"><Star className="w-24 h-24 text-blue-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Assumption (August 15) celebrates Mary taken body and soul into heaven — a dogma defined in 1950. In the United States it is normally a Holy Day of Obligation unless transferred or abrogated when falling on Saturday or Monday.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="assumption-of-mary-catholic-guide">The Assumption of the Blessed Virgin Mary is a solemnity and a dogma of the Catholic faith. Pope Pius XII defined it in 1950: &quot;The Immaculate Mother of God, the ever Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory&quot; (Munificentissimus Deus).</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Assumption Means</h2>
              <p className="text-text leading-relaxed mb-6">The Assumption is not the Ascension — only Christ ascended by his own power. Mary was taken up by God&apos;s grace. She did not suffer the corruption of the tomb. The dogma honors her unique role as Mother of God and her Immaculate Conception: preserved from sin, she shares preeminently in her Son&apos;s victory over death.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="assumption-of-mary-catholic-guide">The Assumption is a sign of hope for all Christians. Mary goes before the Church as the first fully redeemed human person — body and soul — anticipating the resurrection of the dead at the end of time.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Holy Day of Obligation in the United States</h2>
              <p className="text-text leading-relaxed mb-6">August 15 is one of six Holy Days of Obligation on the U.S. calendar (along with Mary Mother of God, Ascension, Assumption, All Saints, Immaculate Conception, and Christmas). Catholics must attend Mass unless dispensed or impeded.</p>
              <p className="text-text leading-relaxed mb-6">When August 15 falls on a Saturday or Monday, the obligation may be abrogated in some ecclesiastical provinces — check your diocese. In 2026, August 15 is a Saturday; some U.S. dioceses may transfer or lift the obligation per conference norms. Confirm with your parish bulletin.</p>

              <QuizCTA title="Prepare for Marian feasts" description="Take the Catholic life assessment for guidance on Mass, Holy Days, and devotional life." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mass and Readings on August 15</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>White vestments; Gloria and Creed at Mass.</li>
                <li>First reading: Revelation 11–12 (the woman clothed with the sun).</li>
                <li>Gospel: Magnificat (Luke 1) or Mary visiting Elizabeth.</li>
                <li>Hymns such as &quot;Hail, Holy Queen&quot; and Marian processions in some parishes.</li>
                <li>Blessing of herbs and flowers is a folk custom in some European and American communities.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Tradition and Scripture</h2>
              <p className="text-text leading-relaxed mb-6">Scripture does not narrate the Assumption explicitly, but the Church sees its roots in Genesis 3:15, Psalm 132, and Revelation 12. Eastern Christians celebrated Mary&apos;s &quot;Dormition&quot; (falling asleep) for centuries before the West defined the dogma. American parishes with Eastern Catholic communities may note both traditions.</p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer for the Assumption</h3>
                <p className="text-text italic leading-relaxed text-lg">
                  Almighty God, you assumed the Blessed Virgin Mary body and soul into heavenly glory. Grant that, always attentive to heavenly things, we may share in her glory. Through Christ our Lord. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Celebrate the Assumption</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Attend Mass on August 15 (or the vigil the evening before).</li>
                <li>Pray the Glorious Mysteries of the Rosary, including the Coronation.</li>
                <li>Visit a Marian shrine if one is nearby.</li>
                <li>Read Munificentissimus Deus or the Catechism on Mary (CCC 966–975).</li>
                <li>Offer flowers at a home or parish statue of Mary.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Eastern Dormition vs. Western Assumption</h2>
              <p className="text-text leading-relaxed mb-4">Eastern Catholic and Orthodox Christians celebrate the Dormition (falling asleep) of the Theotokos on August 15. Iconography shows Mary falling asleep surrounded by the apostles; Christ receives her soul. The West emphasizes assumption into glory. Both traditions agree: Mary is body and soul in heaven.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="assumption-of-mary-catholic-guide">U.S. cities with Byzantine, Maronite, or Ukrainian Catholic parishes often hold Dormition vigils with processions and flowers. Latin-rite Catholics are welcome to attend and learn from the shared Marian faith of East and West.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Assumption and Queenship of Mary</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="assumption-of-mary-catholic-guide">One week later, on August 22, the Church celebrates the Queenship of Mary — Mary crowned in heaven because of her Assumption. The two feasts form the heart of the second half of August in the liturgical calendar, closing the summer with Marian hope before Ordinary Time resumes its rhythm.</LinkedText>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Life and Mission</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="assumption-of-mary-catholic-guide">Assumption of Mary — Catholic teaching, Holy Day of Obligation in the USA, Mass, and how to honor Mary on August 15. Saints are not distant legends — they are men and women who cooperated with grace in real historical circumstances. Their stories show that holiness is possible in ordinary work, family life, persecution, and service.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Seek This Saint&apos;s Intercession</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="assumption-of-mary-catholic-guide">The Church teaches that saints in heaven remain part of the communion of believers (CCC 954–959). We do not worship them; we ask their prayers as we might ask a friend on earth. Patron saints often connect to specific needs — illness, work, conversion, or protection — because of how they lived and died.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Feast Days and Parish Devotion in the U.S.</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="assumption-of-mary-catholic-guide">Parishes across the United States celebrate saint feast days with special Masses, novenas, and food traditions tied to immigrant communities. Mark the feast on your calendar, read the Mass readings that day, and consider one concrete act of charity in the saint&apos;s honor.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Growing in Friendship With the Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="assumption-of-mary-catholic-guide">Choose one saint to \"befriend\" this year: read a short biography, pray a novena before their feast, and ask how their virtues — courage, humility, chastity, or mercy — apply to your state in life. Holiness spreads through imitation and intercession, not superstition.</LinkedText>

            </div>
            <BlogFAQ faqs={[
              { question: "Is the Assumption a Holy Day of Obligation in the USA?", answer: "Yes, August 15 is normally a Holy Day of Obligation. When it falls on Saturday or Monday, some U.S. dioceses may abrogate the obligation — check your local diocesan calendar for 2026." },
              { question: "What is the difference between Ascension and Assumption?", answer: "Christ ascended into heaven by his own divine power. Mary was assumed into heaven by God&apos;s grace at the end of her earthly life — body and soul." },
              { question: "When was the Assumption defined as dogma?", answer: "Pope Pius XII defined the Assumption as a dogma of faith on November 1, 1950, in the apostolic constitution Munificentissimus Deus." },
              { question: "Did Mary die before the Assumption?", answer: "The dogma does not define whether Mary died before being assumed. Eastern tradition speaks of her Dormition (falling asleep). Both East and West agree she was taken body and soul into glory." },
              { question: "Is the Assumption in the Bible?", answer: "Revelation 12 is read typologically; the doctrine was defined by Pope Pius XII in 1950 as divinely revealed." },
              { question: "What if August 15 falls on a Saturday or Monday?", answer: "U.S. bishops may transfer or lift the obligation — check your diocese each year." },
              { question: "What is the difference between Assumption and Dormition?", answer: "The Assumption (Latin Church) and Dormition (Eastern Churches) celebrate the same truth — Mary in heavenly glory — with different emphases on how she entered that glory." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />
            <RelatedArticles currentSlug="assumption-of-mary-catholic-guide" />
            <ArticleBottomCTA title="Deepen your Marian devotion" description="Get a personalized guide for Mass, prayer, and spiritual growth." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
