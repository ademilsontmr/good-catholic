import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function JesusPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Jesus Prayer: Text, Meaning & Catholic Use (Breath of the Heart) | Guide Catholic</title>
        <meta name="description" content="The Jesus Prayer (Lord Jesus Christ, Son of God, have mercy on me, a sinner) with full text, meaning, and how Catholics may use it alongside the Rosary and lectio divina." />
        <meta name="keywords" content="jesus prayer catholic, lord jesus christ son of god have mercy, jesus prayer meaning, catholic repetitive prayer, hesychasm" />
        <link rel="canonical" href="https://guidecatholic.com/blog/jesus-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Jesus Prayer: Text, Meaning & Catholic Use (Breath of the Heart)"
        description="The Jesus Prayer (Lord Jesus Christ, Son of God, have mercy on me, a sinner) with full text, meaning, and how Catholics may use it alongside the Rosary and lectio divina."
        url="https://guidecatholic.com/blog/jesus-prayer-catholic/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Jesus Prayer", url: "https://guidecatholic.com/blog/jesus-prayer-catholic/" },
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
              <span className="text-text">Jesus Prayer</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Jesus Prayer: Text, Meaning & Catholic Use (Breath of the Heart)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Jesus Prayer is ancient and simple: it repeats the holy name of Jesus with a plea for mercy. Catholics encounter it through Eastern Christian friends and growing interest in contemplative prayer.
              </p>
            </header>

            <div className="aspect-video bg-teal-100 rounded-2xl flex items-center justify-center mb-10">
              <CircleDot className="w-24 h-24 text-teal-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Jesus Prayer — &quot;Lord Jesus Christ, Son of God, have mercy on me, a sinner&quot; — comes from Eastern Christianity; Catholics may use it in contemplative prayer alongside the Rosary and lectio divina when practiced with Church teaching on grace and sacraments.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Jesus Prayer (Common English Form)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic text-xl leading-relaxed">
                  Lord Jesus Christ, Son of God, have mercy on me, a sinner.
                </p>
              </div>

              <p className="text-text leading-relaxed mb-6">
                Some traditions shorten to <em>Lord Jesus Christ, have mercy on me</em> or expand slightly; the heart of the prayer is Jesus' lordship, divine sonship, and merciful love toward sinners.
              </p>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">
                The Catholic Church teaches that vocal prayer can become interior when faith and love are active. The Jesus Prayer is not magic repetition; it is calling on the Person of Christ with humility, like the blind man by the road or the tax collector in the temple.
              </LinkedText>

              <QuizCTA
                title="Find your prayer rhythm"
                description="Take the Catholic life assessment for practical guidance on daily prayer and spiritual growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Catholics Often Use It</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Short intervals of silence after Scripture or before the Rosary.</li>
                <li>Walking commute or household chores as a breath of the heart.</li>
                <li>Alongside the divine office or personal thanksgiving after Communion.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Guidance from the Tradition</h2>
              <p className="text-text leading-relaxed mb-6">
                If you feel dryness, distraction, or unease, speak with a trusted priest or spiritual director. Any method of prayer should lead toward deeper faith, hope, and charity — not away from the sacraments, the Church's teaching, or ordinary duties of state in life.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "Is the Jesus Prayer Catholic?", answer: "The words are fully orthodox: they proclaim Christ as Lord and Son of God and ask for mercy. Eastern Catholics pray it regularly; Latin Catholics may use it as a private devotion within the Church's faith." },
              { question: "Is the Jesus Prayer the same as centering prayer?", answer: "No. The Jesus Prayer explicitly names Jesus Christ and asks for mercy. It should not be confused with techniques that avoid Christian content." },
              { question: "How many times should I repeat it?", answer: "There is no magic number. Some use a prayer rope or gentle rhythm with breathing; what matters is humble attention to Christ, not mechanical counting." },
              { question: "Can it replace the Rosary?", answer: "They serve different purposes. The Rosary is a Marian meditation on the mysteries of Christ. The Jesus Prayer is a compact Christ-centered cry for mercy. Many Catholics use both at different times." },
            ]} />

            <RelatedArticles currentSlug="jesus-prayer-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Strengthen your spiritual life</h3>
              <p className="text-text-muted mb-6">Receive a personalized Catholic growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
