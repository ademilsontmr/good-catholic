import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function QueenshipOfMaryCatholicGuide() {
  return (
    <>
      <Helmet>
        <title>Queenship of Mary: Catholic Feast Day Guide (August 22) | Guide Catholic</title>
        <meta name="description" content="Queenship of Mary — Catholic teaching on Mary as Queen, feast day meaning, and prayers for August 22." />
        <meta name="keywords" content="queenship of mary, mary queen catholic, august 22 marian feast" />
        <link rel="canonical" href="https://guidecatholic.com/blog/queenship-of-mary-catholic-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Queenship of Mary: Catholic Feast Day Guide (August 22)" description="Queenship of Mary — Catholic teaching on Mary as Queen, feast day meaning, and prayers for August 22." url="https://guidecatholic.com/blog/queenship-of-mary-catholic-guide/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Queenship of Mary", url: "https://guidecatholic.com/blog/queenship-of-mary-catholic-guide/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Queenship of Mary</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Queenship of Mary: Catholic Feast Day Guide (August 22)</h1>
              <p className="text-xl text-text-muted leading-relaxed">One week after the Assumption, the Church proclaims Mary as Queen of Heaven and earth — not by competing with Christ, but as the Mother of the King who intercedes for the People of God.</p>
            </header>
            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10"><Crown className="w-24 h-24 text-purple-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="queenship-of-mary-catholic-guide">The Memorial of the Queenship of the Blessed Virgin Mary is celebrated on August 22. Pope Pius XII established the feast in 1954, linking it to the Assumption and to the centenary of the dogma of the Immaculate Conception. It crowns the Marian feasts at the end of summer in the U.S. liturgical calendar.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Call Mary Queen</h2>
              <p className="text-text leading-relaxed mb-6">In ancient Israel, the mother of the king held a royal office — the queen mother interceded with the king on behalf of the people (see 1 Kings 2:19–20). Mary is Mother of Christ the King; her queenship flows from her divine motherhood and her cooperation in redemption.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="queenship-of-mary-catholic-guide">The Catechism teaches that Mary is &quot;exalted by the Lord as Queen over all things, so that she might be the more fully conformed to her Son&quot; (CCC 966). She reigns by serving, pointing always to Christ rather than to herself.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Queenship and the Assumption</h2>
              <p className="text-text leading-relaxed mb-6">The Queenship feast was placed seven days after the Assumption because Mary must first be in heaven to be crowned. Art often shows Mary crowned by the Trinity or received into glory. The fifth Glorious Mystery of the Rosary — the Coronation — meditates on this truth.</p>
              <p className="text-text leading-relaxed mb-6">American Catholics praying the Rosary in August naturally move from Assumption (August 15) to Queenship (August 22), deepening the same mystery across two liturgical celebrations.</p>

              <QuizCTA title="Grow in Marian devotion" description="Take the Catholic life assessment for guidance on the Rosary, Mass, and prayer life." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mass on August 22</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Memorial of the Queenship of Mary (not a Holy Day of Obligation in the USA).</li>
                <li>White vestments; readings may come from the Marian formulary or the weekday cycle.</li>
                <li>Opening antiphon: &quot;Let us celebrate with joy the Queenship of the Virgin Mary.&quot;</li>
                <li>Some parishes hold processions with a crowned image of Our Lady.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Hail, Holy Queen (Salve Regina)</h3>
                <p className="text-text italic leading-relaxed text-lg">
                  Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Do Catholics Worship Mary as Queen?</h2>
              <p className="text-text leading-relaxed mb-6">No. Latria (adoration) belongs to God alone. Hyperdulia — the highest honor given to a creature — is given to Mary. Calling her Queen is honor, not worship. She reigns because her Son reigns; every Marian title leads back to Christ.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="queenship-of-mary-catholic-guide">The Litany of Loreto includes multiple &quot;Queen&quot; titles — Queen of Angels, Queen of Peace, Queen assumed into heaven. The Queenship feast gathers those titles into one liturgical celebration for the whole Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Honor Mary as Queen</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Pray the Salve Regina or Litany of Loreto.</li>
                <li>Meditate on the fifth Glorious Mystery of the Rosary.</li>
                <li>Attend Mass on August 22 even though it is not of obligation.</li>
                <li>Entrust your family and nation to Mary&apos;s intercession — a custom on this feast.</li>
                <li>Read Pope Pius XII&apos;s encyclical Ad Caeli Reginam (1954) on Mary&apos;s queenship.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mary Queen in American Catholic Life</h2>
              <p className="text-text leading-relaxed mb-6">Parishes named Queen of Peace, Queen of Angels, or Our Lady Queen of Heaven dot the American landscape. Immigrant communities brought crowned images of Mary in processions — Polish, Italian, Filipino, and Latin American traditions enrich August devotions. The feast reminds U.S. Catholics that Mary&apos;s maternal care extends to every parish and household.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "When is the Queenship of Mary celebrated?", answer: "August 22 each year — one week after the Assumption (August 15). Pope Pius XII established the feast in 1954." },
              { question: "Is August 22 a Holy Day of Obligation?", answer: "No. The Queenship of Mary is a memorial, not a Holy Day of Obligation in the United States. Catholics are still encouraged to honor Mary at Mass that day." },
              { question: "Why is Mary called Queen if Christ is King?", answer: "In the Davidic kingdom, the king&apos;s mother held a royal office of intercession. Mary is Queen because she is Mother of Christ the King, not as his rival but as his closest collaborator in salvation." },
              { question: "What prayer is best for the Queenship of Mary?", answer: "The Salve Regina (Hail, Holy Queen) and the Litany of Loreto — with its many Queen titles — are classic prayers. The Rosary&apos;s fifth Glorious Mystery also meditates on Mary&apos;s Coronation." },
            ]} />
            <RelatedArticles currentSlug="queenship-of-mary-catholic-guide" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Deepen your Marian devotion</h3>
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
