import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function AnimaChristiPrayer() {
  return (
    <>
      <Helmet>
        <title>Anima Christi Prayer: Full Catholic Text, Meaning & When to Say It | Guide Catholic</title>
        <meta name="description" content="The Anima Christi (Soul of Christ) prayer with full Catholic text in English and Latin, what each line means, and when to pray it before Communion or after Confession." />
        <meta name="keywords" content="anima christi prayer, soul of christ prayer, anima christi full text, anima christi latin, catholic prayer before communion" />
        <link rel="canonical" href="https://guidecatholic.com/blog/anima-christi-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Anima Christi Prayer: Full Catholic Text, Meaning & When to Say It"
        description="The Anima Christi (Soul of Christ) prayer with full Catholic text in English and Latin, what each line means, and when to pray it before Communion or after Confession."
        url="https://guidecatholic.com/blog/anima-christi-prayer/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Anima Christi", url: "https://guidecatholic.com/blog/anima-christi-prayer/" },
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
              <span className="text-text">Anima Christi</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Anima Christi Prayer: Full Catholic Text, Meaning & When to Say It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Anima Christi — Soul of Christ — is one of the most beloved prayers in Catholic life. Catholics pray it before Holy Communion, after Confession, and in moments of spiritual need.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <HeartPulse className="w-24 h-24 text-rose-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Anima Christi (Soul of Christ) prayer with full Catholic text in English and Latin, what each line means, and when to pray it before Communion or after Confession.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Anima Christi (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-3 text-text italic leading-relaxed">
                <p>Soul of Christ, sanctify me.</p>
                <p>Body of Christ, save me.</p>
                <p>Blood of Christ, inebriate me.</p>
                <p>Water from the side of Christ, wash me.</p>
                <p>Passion of Christ, strengthen me.</p>
                <p>O good Jesus, hear me.</p>
                <p>Within your wounds hide me.</p>
                <p>Permit me not to be separated from you.</p>
                <p>From the wicked foe, defend me.</p>
                <p>At the hour of my death, call me and bid me come to you,</p>
                <p>That with your saints I may praise you forever and ever. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Anima Christi (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-2">
                <p>Anima Christi, sanctifica me. Corpus Christi, salva me. Sanguis Christi, inebria me. Aqua lateris Christi, lava me. Passio Christi, conforta me.</p>
                <p>O bone Iesu, exaudi me. Intra tua vulnera absconde me. Ne permittas me separari a te. Ab hoste maligno defende me. In hora mortis meae voca me. Et iube me venire ad te, ut cum Sanctis tuis laudem te in saecula saeculorum. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="anima-christi-prayer">
                Each line of the Anima Christi asks Christ to act on the soul through his Passion — sanctifying, saving, washing, and defending. It is a prayer of total trust in the Person of Jesus, not merely a formula.
              </LinkedText>

              <QuizCTA
                title="Deepen your sacramental life"
                description="Take the Catholic life assessment for a personalized guide to prayer, Confession, and Holy Communion."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray the Anima Christi</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Before receiving Holy Communion (after the Agnus Dei at Mass).</li>
                <li>After the Sacrament of Reconciliation.</li>
                <li>During Eucharistic adoration or a holy hour.</li>
                <li>At the bedside of the dying, asking Christ to call the soul home.</li>
              </ul>
            </div>

            <BlogFAQ faqs={[
              { question: "What does Anima Christi mean?", answer: "Anima Christi means Soul of Christ. The prayer asks the Risen Christ to sanctify, save, and protect the one who prays through the power of his Passion and Resurrection." },
              { question: "Did St. Ignatius of Loyola write the Anima Christi?", answer: "The prayer was long attributed to St. Ignatius, but historians now trace it to the 14th century. Ignatius popularized it in the Spiritual Exercises and Catholic devotional life." },
              { question: "Is the Anima Christi in the Roman Missal?", answer: "It is not one of the fixed Mass prayers, but it is widely used in private devotion and is printed in most Catholic prayer books and missalettes." },
              { question: "Can I pray the Anima Christi if I cannot receive Communion?", answer: "Yes. It is an excellent prayer before spiritual communion or whenever you desire union with Christ in his Body and Blood." },
            ]} />

            <RelatedArticles currentSlug="anima-christi-prayer" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Grow closer to Christ in the sacraments</h3>
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
