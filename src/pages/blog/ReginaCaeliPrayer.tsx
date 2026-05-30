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

export default function ReginaCaeliPrayer() {
  return (
    <>
      <Helmet>
        <title>Regina Caeli Prayer: Full Text, When to Pray It (Easter Marian) | Guide Catholic</title>
        <meta name="description" content="The Regina Caeli prayer with full English and Latin text, when Catholics pray it instead of the Angelus during Easter, and what this Marian antiphon means." />
        <meta name="keywords" content="regina caeli prayer, queen of heaven rejoice, regina caeli latin, easter angelus replacement, marian antiphon eastertide" />
        <link rel="canonical" href="https://guidecatholic.com/blog/regina-caeli-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Regina Caeli Prayer: Full Text, When to Pray It (Easter Marian)"
        description="The Regina Caeli prayer with full English and Latin text, when Catholics pray it instead of the Angelus during Easter, and what this Marian antiphon means."
        url="https://guidecatholic.com/blog/regina-caeli-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Regina Caeli", url: "https://guidecatholic.com/blog/regina-caeli-prayer/" },
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
              <span className="text-text">Regina Caeli</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 14, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Regina Caeli Prayer: Full Text, When to Pray It (Easter Marian)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                From Easter through Pentecost, many Catholics replace the Angelus with the Regina Caeli — a joyful greeting to the Mother of the Risen Christ.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-yellow-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Regina Caeli (Queen of Heaven, rejoice!) replaces the Angelus during Easter season — from Easter Sunday through Pentecost. Catholics pray it at noon commemorating Mary&apos;s joy at the Resurrection; Latin and English forms are common in parishes and homes.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Regina Caeli (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Queen of Heaven, rejoice, alleluia. For He whom you did merit to bear, alleluia, has risen as He said, alleluia. Pray for us to God, alleluia. Rejoice and be glad, O Virgin Mary, alleluia. For the Lord has truly risen, alleluia.
                </p>
                <p className="text-text italic leading-relaxed text-lg mt-4">
                  Let us pray. O God, who through the resurrection of your Son our Lord Jesus Christ did give joy to the world, grant, we pray, that through his Mother, the Virgin Mary, we may obtain the joys of everlasting life. Through Christ our Lord. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Regina Caeli (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-sm">
                  Regina caeli, laetare, alleluia; quia quem meruisti portare, alleluia, resurrexit, sicut dixit, alleluia. Ora pro nobis Deum, alleluia. Gaude et laetare, Virgo Maria, alleluia. Quia surrexit Dominus vere, alleluia.
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  Oremus. Deus, qui per resurrectionem Filii tui, Domini nostri Iesu Christi, mundum laetificare dignatus es: praesta, quaesumus; ut per eius Genetricem Virginem Mariam perpetuae capiamus gaudia vitae. Per Christum Dominum nostrum. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="regina-caeli-prayer">
                The Regina Caeli is traditionally prayed at 6 a.m., noon, and 6 p.m. during Eastertide — the same rhythm as the Angelus in Ordinary Time and Advent. It keeps Mary at the center of the Church's joy in the Resurrection.
              </LinkedText>

              <QuizCTA
                title="Renew your prayer rhythm"
                description="Take the Catholic life assessment for practical steps on Marian devotion and daily prayer."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Does Eastertide Run?</h2>
              <p className="text-text leading-relaxed mb-6">
                Eastertide begins on Easter Sunday and continues through Pentecost (the fiftieth day). During this season the Church sings alleluia with special intensity, and Marian prayer focuses on Mary as Mother of the Risen Lord.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "When do you pray the Regina Caeli instead of the Angelus?", answer: "From Easter Sunday through Pentecost Sunday, many Catholics pray the Regina Caeli at the traditional Angelus hours (morning, noon, evening)." },
              { question: "What does Regina Caeli mean?", answer: "It means Queen of Heaven. The prayer rejoices with Mary because Christ has risen as he promised." },
              { question: "Is the Regina Caeli the same as the Hail Holy Queen?", answer: "No. The Hail Holy Queen (Salve Regina) is a different Marian antiphon, often used at the end of the Rosary. The Regina Caeli is specific to the Easter season." },
              { question: "What replaces the Regina Caeli after Pentecost?", answer: "Ordinary Time often returns to the Angelus at midday. Other seasons use different antiphons; your parish bulletin or breviary notes the Church's seasonal customs." },
            ]} />

            <RelatedArticles currentSlug="regina-caeli-prayer" />

            <ArticleBottomCTA title="Grow in Catholic devotion" description="Get a personalized guide for prayer and the liturgical year." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
