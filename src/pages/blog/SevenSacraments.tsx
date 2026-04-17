import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen, ShieldCheck, Sparkles, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SevenSacraments() {
  return (
    <>
      <Helmet>
        <title>The Seven Sacraments: The Expert Guide to Divine Grace | Guide Catholic</title>
        <meta name="description" content="Discover the deep theology behind the seven sacraments. Learn about Matter and Form, the Indelible Character, and how grace is transmitted Ex Opere Operato." />
        <meta name="keywords" content="7 sacraments of the catholic church, matter and form sacraments, ex opere operato definition, sacraments of initiation healing service, indelible character baptism" />
        <link rel="canonical" href="https://guidecatholic.com/blog/seven-sacraments/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The 7 Sacraments of the Catholic Church Explained"
        description="Understand the importance and meaning of each of the seven sacraments instituted by Christ: Baptism, Eucharist, Confirmation, Confession, Anointing, Holy Orders, and Matrimony."
        url="https://guidecatholic.com/blog/seven-sacraments/"
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
              <span className="text-text">The 7 Sacraments</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Theology 101
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Seven Sacraments: The "Physicality" of God's Love
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                St. Augustine defined a sacrament as "an outward sign of an inward grace." In the Catholic faith, God uses physical things—water, oil, bread, words—to touch our souls. The sacraments are not symbols of a memory; they are <strong>efficacious</strong> tools that actually do what they signify.
              </p>
            </header>

            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Sparkles className="w-24 h-24 text-blue-400/20 absolute -bottom-4 -right-4" />
               <BookOpen className="w-32 h-32 text-blue-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                To understand the sacraments, one must understand <strong>Ex Opere Operato</strong>. This Latin phrase means "from the work worked." It signifies that the grace of a sacrament does not depend on the personal holiness of the priest, but on the power of Christ working through him. If the "Matter" and "Form" are correct, the grace is transmitted.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Three Layers: Initiation, Healing, and Mission
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church organizes the seven sacraments into three logical groups that mirror the human lifecycle:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-4 border border-border rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2">Initiation</h4>
                  <p className="text-xs">Baptism, Confirmation, and Eucharist. These build the foundation of Christian life.</p>
                </div>
                <div className="p-4 border border-border rounded-xl">
                  <h4 className="font-bold text-red-800 mb-2">Healing</h4>
                  <p className="text-xs">Confession and Anointing of the Sick. These restore health to the soul and body.</p>
                </div>
                <div className="p-4 border border-border rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2">Service</h4>
                  <p className="text-xs">Marriage and Holy Orders. These are for the salvation of others and the mission of the Church.</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Matter and Form: The Technical Grace
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Every sacrament requires a physical element (Matter) and a specific set of words (Form).
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Baptism:</strong> Water (Matter) + "I baptize you..." (Form).</li>
                <li><strong>Eucharist:</strong> Wheat Bread/Grape Wine (Matter) + Words of Institution (Form).</li>
                <li><strong>Confirmation:</strong> Sacred Chrism (Matter) + "Be sealed..." (Form).</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  The Indelible Character
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">The spiritual "tattoo" that never fades</p>
                <p className="text-sm leading-relaxed">
                  Three sacraments—<strong>Baptism, Confirmation, and Holy Orders</strong>—imprint a permanent mark on the soul called a "Character." This is why these three can never be repeated. Even in eternity, a soul will be recognized as baptized or as a priest.
                </p>
              </div>

              <QuizCTA
                title="Are you open to the channels of grace?"
                description="The sacraments are the fuel for the spiritual engine. Take our quiz to see if you are utilizing the full sacramental power available to you."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Flame className="w-6 h-6 text-accent" />
                 Ex Opere Operato: Why the Priest Matters (and Doesn't)
              </h2>
              <p className="text-text leading-relaxed mb-6">
                This is the beauty of the Catholic system: Your grace is safe. If a priest is in a state of sin, his Mass is still valid. If he is distracted, his absolution still counts. Why? Because the Primary Minister of every sacrament is <strong>Jesus Christ Himself</strong>. The priest is merely the instrument.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The sacraments are forces that come forth from the Body of Christ." — CCC 1116
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Can I receive the Eucharist if I'm not in a state of grace?",
                answer: "The Church teaches that anyone aware of a mortal sin must go to Confession before receiving the Eucharist. Receiving in a state of mortal sin is an additional grave sin (sacrilege)."
              },
              {
                question: "Why do we have seven? Why not more or less?",
                answer: "The number seven was clarified over time but was formally defined at the Council of Trent. It reflects the completeness of God's grace covering every vital stage of human development."
              },
              {
                question: "Is Marriage really a sacrament?",
                answer: "Yes. For two baptized Christians, their marriage is a sacrament. Their love becomes a visible sign of Christ's love for the Church. The spouses are actually the ministers; the priest is the witness."
              }
            ]} />

<RelatedArticles currentSlug="seven-sacraments" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Unlock the Power of the Sacraments
              </h3>
              <p className="text-text-muted mb-6">
                You weren't meant to walk this path alone. Take our quiz to receive a roadmap for your sacramental life.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Faith Quiz
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
