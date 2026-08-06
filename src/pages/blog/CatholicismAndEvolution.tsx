import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Microscope, Calendar, Clock, ArrowLeft, Brain, Sparkles, Binary } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Catholicism & Evolution", url: "https://guidecatholic.com/blog/catholicism-and-evolution-guide/" },
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

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Catholic Church permits belief in evolution of the body provided one affirms special creation of the soul by God — Pius XII and subsequent popes distinguish scientific theories from philosophical materialism. Adam and Eve as real first parents is required doctrine.</p>
              </div>

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
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">
                Far from being afraid of evolution, Catholics actually founded the sciences that support it:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Gregor Mendel:</strong> An Augustinian friar who founded <strong>Genetics</strong>. Without his work, Darwin's theory of natural selection would have remained a "black box" without a mechanism for heredity.</li>
                <li><strong>Georges Lemaître:</strong> A Catholic priest who proposed the <strong>Big Bang Theory</strong>. When he first presented it, atheists mocked it as "too religious" because it implied a moment of "Let there be light."</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Science can purify religion from error and superstition; religion can purify science from idolatry and false absolutes. Each draws the other into a wider world." — St. John Paul II
                </p>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Understanding the Topic</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">Does the Catholic Church accept evolutionary theory? Explore the official teaching of the Popes, the compatibility of science and Genesis, and the origin of the human soul. Catholic faith integrates worship, moral life, and prayer. This article explains the topic in clear language so you can teach your family, prepare for sacraments, or answer questions from seekers.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How This Fits Catholic Life</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">Nothing in Catholic spirituality is isolated. Doctrine supports prayer; prayer flows into charity; charity witnesses to the world. Keep this topic connected to Sunday Mass, Scripture reading, and care for the poor.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Application</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">Choose one habit to start this week: five minutes of morning prayer, one work of mercy, or one conversation about faith with your spouse or children. Small fidelity over years transforms souls.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Going Deeper</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">Use the related articles below to continue learning. If you are new to Catholicism, consider RCIA or a parish Bible study. Growth in faith is a lifelong pilgrimage, not a single article.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">Readers often search for Catholicism and Evolution: A Sophisticated Harmony of Truth during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholicism-and-evolution-guide">Does the Catholic Church accept evolutionary theory? Explore the official teaching of the Popes, the compatibility of science and Genesis, and the origin of the human soul. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>

              </div>

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
              },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

<RelatedArticles currentSlug="catholicism-and-evolution-guide" />

            <ArticleBottomCTA title="Seek the Truth wherever it leads" description="The Church is the mother of the modern university. Take our quiz to learn more about the intellectual richness of the Catholic faith." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
