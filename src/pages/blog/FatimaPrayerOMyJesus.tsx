import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function FatimaPrayerOMyJesus() {
  return (
    <>
      <Helmet>
        <title>Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It | Guide Catholic</title>
        <meta name="description" content="The Fatima Prayer (O My Jesus) with full text, meaning, when Our Lady asked for it in the Rosary, and how Catholics pray it after each decade." />
        <meta name="keywords" content="fatima prayer, o my jesus prayer, fatima rosary prayer, our lady of fatima prayer, pray after each decade fatima" />
        <link rel="canonical" href="https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It"
        description="The Fatima Prayer (O My Jesus) with full text, meaning, when Our Lady asked for it in the Rosary, and how Catholics pray it after each decade."
        url="https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Fatima Prayer", url: "https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/" },
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
              <span className="text-text">Fatima Prayer</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 13, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Our Lady of Fatima asked the shepherd children to add this short prayer to the Rosary. Millions of Catholics still pray it today.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Fatima Prayer (&quot;O my Jesus, forgive us our sins...&quot;) was revealed at Fatima in 1917 — prayed after each Rosary decade for reparation and conversion of sinners. Our Lady asked for its spread; it is central to Fatima devotion and First Saturday communions.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Fatima Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">
                The prayer is sometimes called the Decade Prayer because Our Lady requested that it be recited after each decade of the Rosary. It asks for mercy, conversion, and the salvation of souls — especially souls in greatest spiritual danger.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Does the Fatima Prayer Mean?</h2>
              <p className="text-text leading-relaxed mb-6">
                Each line has a clear intention: repentance ("forgive us our sins"), rescue from eternal loss ("save us from the fires of hell"), universal mission ("lead all souls to Heaven"), and special mercy for the weakest ("especially those most in need of Thy mercy").
              </p>

              <QuizCTA
                title="Deepen your Rosary and Marian devotion"
                description="Take the Catholic life assessment for a personalized plan for prayer and growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray the Fatima Prayer</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>After each decade of the Rosary (after the Glory Be), as Our Lady requested.</li>
                <li>During Fatima novenas or the months of May and October.</li>
                <li>When interceding for sinners, the dying, or loved ones far from God.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Is the Fatima Prayer Required?</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church encourages the Rosary and the Fatima devotions, but private revelation never replaces the Gospel or the liturgy. The Fatima Prayer is a beautiful ecclesial custom that unites millions of Catholics to Our Lady's call for penance, prayer, and reparation for sinners.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the O My Jesus prayer?", answer: "It is the prayer Our Lady of Fatima asked to be added after each decade of the Rosary: O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen." },
              { question: "When did Our Lady teach the Fatima Prayer?", answer: "According to the memoirs of Sister Lúcia, Our Lady taught this prayer during the Fatima apparitions in 1917 and asked that it be prayed after each decade of the Rosary." },
              { question: "Do you pray the Fatima prayer before or after the Glory Be?", answer: "The common Catholic practice is to pray the Glory Be at the end of each decade, then pray the Fatima Prayer (O My Jesus) before moving to the next decade." },
              { question: "Is the Fatima Prayer the same as the Divine Mercy Chaplet?", answer: "No. They are different devotions. The Fatima Prayer is a single short prayer after Rosary decades. The Divine Mercy Chaplet uses different prayers on different beads." },
            ]} />

            <RelatedArticles currentSlug="fatima-prayer-o-my-jesus" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Grow in Catholic prayer</h3>
              <p className="text-text-muted mb-6">Receive a personalized spiritual growth guide.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
