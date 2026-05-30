import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function AgnusDeiPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Agnus Dei: Full Text of the Lamb of God Prayer at Mass | Guide Catholic</title>
        <meta name="description" content="The Agnus Dei (Lamb of God) prayer with full text in English and Latin, what Catholics say at Mass before Communion, and the meaning of each invocation." />
        <meta name="keywords" content="agnus dei prayer, lamb of god prayer catholic, agnus dei full text, agnus dei latin mass, catholic mass prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/agnus-dei-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Agnus Dei: Full Text of the Lamb of God Prayer at Mass"
        description="The Agnus Dei (Lamb of God) prayer with full text in English and Latin, what Catholics say at Mass before Communion, and the meaning of each invocation."
        url="https://guidecatholic.com/blog/agnus-dei-prayer-catholic/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Agnus Dei", url: "https://guidecatholic.com/blog/agnus-dei-prayer-catholic/" },
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
              <span className="text-text">Agnus Dei</span>
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
                Agnus Dei: Full Text of the Lamb of God Prayer at Mass
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                At every Catholic Mass, the congregation kneels and sings or speaks the Agnus Dei — Lamb of God, who takes away the sins of the world. It is the Church's cry for mercy moments before Holy Communion.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Agnus Dei (&quot;Lamb of God, who take away the sins of the world, have mercy on us&quot;) is sung at Mass before Communion — three invocations, the third often &quot;grant us peace.&quot; John the Baptist&apos;s words (John 1:29) identify Christ as sacrificial Lamb.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Agnus Dei (English — Roman Missal)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-3 text-text leading-relaxed">
                <p className="italic">Lamb of God, you take away the sins of the world, have mercy on us.</p>
                <p className="italic">Lamb of God, you take away the sins of the world, have mercy on us.</p>
                <p className="italic">Lamb of God, you take away the sins of the world, grant us peace.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Agnus Dei (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-2 text-text italic text-sm">
                <p>Agnus Dei, qui tollis peccata mundi, miserere nobis.</p>
                <p>Agnus Dei, qui tollis peccata mundi, miserere nobis.</p>
                <p>Agnus Dei, qui tollis peccata mundi, dona nobis pacem.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                The Agnus Dei echoes John the Baptist pointing to Jesus (John 1:29). At Mass it prepares the faithful to receive the Lamb who was slain — now present in the Eucharist — and to ask for mercy and peace.
              </LinkedText>

              <QuizCTA
                title="Understand the Mass more deeply"
                description="Take the Catholic life assessment for a personalized guide to the sacraments and Sunday worship."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where It Fits in the Mass</h2>
              <p className="text-text leading-relaxed mb-6">
                The Agnus Dei follows the Lord's Prayer and the Sign of Peace, during the fraction rite when the priest breaks the consecrated Host. The third invocation may be repeated until the distribution of Communion is complete in some celebrations.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "What does Agnus Dei mean?", answer: "Agnus Dei is Latin for Lamb of God. It refers to Jesus Christ, the Passover Lamb whose sacrifice takes away the sins of the world." },
              { question: "Why is Agnus Dei prayed three times?", answer: "The triple invocation expresses urgent trust in Christ's mercy. The first two ask for mercy; the third asks for peace — the fruit of reconciliation with God." },
              { question: "Do Catholics kneel during the Agnus Dei?", answer: "In the Roman Rite, the faithful kneel from the Agnus Dei until they receive Communion, unless local custom or disability requires otherwise." },
              { question: "Is the Agnus Dei the same as the Agnus Dei sacramental?", answer: "No. The prayer at Mass is a liturgical text. Agnus Dei sacramentals are wax discs blessed by the Pope, a different devotion." },
            ]} />

            <RelatedArticles currentSlug="agnus-dei-prayer-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Live the Mass with greater devotion</h3>
              <p className="text-text-muted mb-6">Receive a personalized Catholic spiritual growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
