import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Microscope, Calendar, Clock, ArrowLeft, Brain, Sparkles, Binary } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicismAndEvolution() {
  return (
    <>
      <Helmet>
        <title>Catholicism and Evolution: Can You Believe in Both? | Guide Catholic</title>
        <meta name="description" content="Does the Catholic Church accept evolutionary theory? Explore the official teaching of the Popes, the compatibility of science and Genesis, and the origin of the human soul." />
        <meta name="keywords" content="catholic church and evolution, genesis and science catholic, did god create evolution, catholic position on darwism, faith and science compatibility, Humani Generis, Adam and Eve" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholicism-and-evolution-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholicism and Evolution: Can You Believe in Both?"
        description="Does the Catholic Church accept evolutionary theory? Explore the official teaching of the Popes, the compatibility of science and Genesis, and the origin of the human soul."
        url="https://guidecatholic.com/blog/catholicism-and-evolution-guide/"
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
              <span className="text-text">Catholicism & Evolution</span>
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
                  Faith & Science
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
                 Catholicism and Evolution: A Sophisticated Harmony of Truth
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                One of the most persistent myths in modern culture is that the Catholic Church is "anti-science" or stuck in a literalist 6-day creationism. In reality, the Church has spent the last century developing a sophisticated compatibility between the findings of evolutionary biology and the eternal truths of Divine Revelation.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <Binary className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church views science and faith as two complementary ways of looking at one reality. Science tells us <strong>how</strong> the world was physically formed; theology tells us <strong>who</strong> willed it into being and <strong>why</strong> we exist.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Breakthrough: Humani Generis (1950)
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1950, <strong>Pope Pius XII</strong> released the encyclical <em>Humani Generis</em>. This was the defining moment for the Catholic position on evolution. He stated that the Church does not forbid research into the origins of the human <strong>body</strong> through evolutionary theory. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                However, he established a clear "red line": while the physical body might arrive through natural processes, the <strong>human soul</strong> is created immediately and directly by God. There is no such thing as an "evolved soul," because the soul is spiritual, immortal, and simple—it cannot be "gradually" built by biological mutations.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Brain className="w-6 h-6 text-emerald-600" />
                  The St. John Paul II Refinement (1996)
                </h3>
                <p className="text-text mb-4">
                  In 1996, <strong>Pope John Paul II</strong> addressed the Pontifical Academy of Sciences, stating that evolution is **"more than a hypothesis."** 
                </p>
                <ul className="list-disc list-inside text-text space-y-3">
                  <li><strong>Convergence of Data:</strong> He noted that findings from molecular biology, paleontology, and genetics all point in the same direction—a sign that the theory is increasingly solid.</li>
                  <li><strong>The Ontological Leap:</strong> He insisted that regardless of the physical process, at the moment of the first human being, there was an "ontological leap"—the infusion of the soul that makes us qualitatively different from animals.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. What About Adam, Eve, and Original Sin?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church maintains the doctrine of <strong>Monogenism</strong>—that the human race descended from one original pair who first turned away from God. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Why? Because the doctrine of <strong>Original Sin</strong> (the state of brokenness we all inherit) requires a single point of origin. If humanity started as multiple separate groups (Polygenism), it would be difficult to explain how a single "fall" affected everyone. The Church views Adam and Eve not as metaphors, but as our true biological and spiritual "first parents," even if their physical bodies emerged from an evolutionary lineage.
              </p>

              <QuizCTA
                title="Can your faith handle the laboratory?"
                description="Take our quiz to see if you can differentiate between the myths and the official Catholic teachings on the origins of the universe."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Microscope className="w-6 h-6 text-accent" />
                 Mendel and Lemaître: The Pioneers
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Far from being afraid of evolution, Catholics actually founded the sciences that support it:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Gregor Mendel:</strong> An Augustinian friar who founded <strong>Genetics</strong>. Without his work, Darwin's theory of natural selection would have remained a "black box" without a mechanism for heredity.</li>
                <li><strong>Georges Lemaître:</strong> A Catholic priest who proposed the <strong>Big Bang Theory</strong>. When he first presented it, atheists mocked it as "too religious" because it implied a moment of "Let there be light."</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Science can purify religion from error and superstition; religion can purify science from idolatry and false absolutes. Each draws the other into a wider world." — St. John Paul II
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholicism-and-evolution-guide" />

            <BlogFAQ faqs={[
              {
                question: "Do I have to read the 6 days of Genesis literally?",
                answer: "No. The Church has never required a literal 144-hour creation window. As early as the 4th century, St. Augustine argued that the 'days' were likely a symbolic representation of a divine order. The Bible uses the language of its time to teach eternal, theological truths."
              },
              {
                question: "What did Pope Benedict XVI say about evolution?",
                answer: "He taught that there is no contradiction between creation and evolution. He famously said, 'We are not some casual and meaningless product of evolution. Each of us is the result of a thought of God.'"
              },
              {
                question: "Are Catholics 'Creationists'?",
                answer: "In the American sense of 'Young Earth Creationism' (reading the Bible as a science book), no. However, all Catholics are 'Creationists' in the sense that we believe God is the Prime Mover and Primary Cause of everything that exists."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Seek the Truth wherever it leads
              </h3>
              <p className="text-text-muted mb-6">
                The Church is the mother of the modern university. Take our quiz to learn more about the intellectual richness of the Catholic faith.
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
