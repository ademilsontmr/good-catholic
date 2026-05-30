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

export default function HailHolyQueenPrayer() {
  return (
    <>
      <Helmet>
        <title>Hail Holy Queen (Salve Regina): Full Text & Rosary Closing Prayer | Guide Catholic</title>
        <meta name="description" content="The Hail Holy Queen (Salve Regina) with full Catholic text in English and Latin, meaning, and why Catholics pray it at the end of the Rosary every day." />
        <meta name="keywords" content="hail holy queen prayer, salve regina full text, hail holy queen rosary, salve regina latin, marian antiphon catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/hail-holy-queen-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Hail Holy Queen (Salve Regina): Full Text & Rosary Closing Prayer"
        description="The Hail Holy Queen (Salve Regina) with full Catholic text in English and Latin, meaning, and why Catholics pray it at the end of the Rosary every day."
        url="https://guidecatholic.com/blog/hail-holy-queen-prayer/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Hail Holy Queen", url: "https://guidecatholic.com/blog/hail-holy-queen-prayer/" },
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
              <span className="text-text">Hail Holy Queen</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Hail Holy Queen (Salve Regina): Full Text & Rosary Closing Prayer
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                After the last decade of the Rosary, Catholics turn to Mary as Mother of Mercy with the Hail Holy Queen — one of the Church's most sung and prayed Marian antiphons.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-24 h-24 text-blue-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Hail Holy Queen (Salve Regina) with full Catholic text in English and Latin, meaning, and why Catholics pray it at the end of the Rosary every day.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Hail Holy Queen (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-lg">
                <p>Hail, holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.</p>
                <p className="mt-4">Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Salve Regina (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm">
                <p>Salve, Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve. Ad te clamamus exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia, ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, O pia, O dulcis Virgo Maria.</p>
                <p className="mt-4">Ora pro nobis, sancta Dei Genitrix, ut digni efficiamur promissionibus Christi. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="hail-holy-queen-prayer">
                The Hail Holy Queen names Mary as advocate and mother in exile — we are pilgrims longing for heaven, and she leads us to Jesus, the blessed fruit of her womb. That is why it closes the Rosary so naturally.
              </LinkedText>

              <QuizCTA
                title="Want a stronger Rosary habit?"
                description="Take the Catholic life assessment for practical steps on Marian devotion and daily prayer."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When the Church Prays Salve Regina</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>At the end of the Rosary (with the optional concluding prayer).</li>
                <li>As the seasonal Marian antiphon from Pentecost until Advent (in the Divine Office tradition).</li>
                <li>At Compline (Night Prayer) in many monasteries and parishes.</li>
                <li>After Benediction in some Eucharistic devotions.</li>
              </ul>
            </div>

            <BlogFAQ faqs={[
              { question: "Is Hail Holy Queen the same as Salve Regina?", answer: "Yes. Hail Holy Queen is the traditional English translation of the Latin antiphon Salve Regina." },
              { question: "Do you pray Hail Holy Queen after every Rosary?", answer: "Most Catholics do. It is the standard closing prayer of the Rosary, followed by the final prayer and the Sign of the Cross." },
              { question: "How is Hail Holy Queen different from the Hail Mary?", answer: "The Hail Mary greets Mary and asks her intercession using words from Scripture and tradition. The Hail Holy Queen honors her as Queen and Mother of Mercy and asks her to show us Jesus after our earthly exile." },
              { question: "What replaces Salve Regina in other seasons?", answer: "Alma Redemptoris Mater in Advent and Christmas, Ave Regina Caelorum in Lent, and Regina Caeli in Easter through Pentecost." },
            ]} />

            <RelatedArticles currentSlug="hail-holy-queen-prayer" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Deepen your Marian devotion</h3>
              <p className="text-text-muted mb-6">Get a personalized Catholic growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
