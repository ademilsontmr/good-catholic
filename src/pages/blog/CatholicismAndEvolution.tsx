import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Microscope, Calendar, Clock, ArrowLeft, Brain, Sparkles } from "lucide-react";
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
        <meta name="keywords" content="catholic church and evolution, genesis and science catholic, did god create evolution, catholic position on darwism, faith and science compatibility" />
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
                  14 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholicism and Evolution: Can You Believe in Both?
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                One of the biggest myths in modern culture is that the Catholic Church is "anti-science" or that it requires a literal, 6-day reading of Genesis. In reality, the Church has long taught that faith and reason are "two wings on which the human spirit rises." So, what does the Church actually say about Charles Darwin and the origin of species?
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <Microscope className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Unlike some fundamentalist denominations, the Catholic Church does not view evolutionary theory as a threat to the Bible. Instead, the Church views science as the study of <strong>how</strong> God created the world, while theology is the study of <strong>why</strong>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Official Position: Humani Generis
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1950, <strong>Pope Pius XII</strong> released the encyclical <em>Humani Generis</em>. In it, he stated that there is no conflict between the doctrine of the faith and the possible evolution of the human body from pre-existing and living matter.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Pope John Paul II</strong> strengthened this in 1996, stating that evolution is "more than a hypothesis" and that the convergences of independent research are a significant argument in its favor.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-emerald-600" />
                  The Critical Distinction: Body vs. Soul
                </h3>
                <p className="text-text">
                  The Church allows for the possibility of the human <strong>body</strong> evolving, but it teaches as a matter of faith that the <strong>soul</strong> is created immediately and directly by God. Evolution cannot "create" a soul, because the soul is spiritual and immortal, not material.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What About Genesis and the 7 Days?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church does not read the first chapters of Genesis as a "science textbook." Since the time of St. Augustine in the 4th century, the Church has recognized that the "days" of creation are likely a literary device used to teach a theological truth:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>God is the Source:</strong> Everything in existence was willed into being by God.</li>
                <li><strong>Order and Purpose:</strong> Creation is an act of intelligence, not random chaos.</li>
                <li><strong>The Dignity of Man:</strong> Human beings are the pinnacle of creation, made in the image of God.</li>
              </ul>

              <QuizCTA
                title="Do you find harmony between faith and reason?"
                description="Take our quiz to explore how the Church integrates modern scientific discovery with ancient wisdom."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Catholic Scientists Who Changed the World
              </h2>
              <p className="text-text leading-relaxed mb-6">
                If the Church were anti-evolution or anti-science, we wouldn't have some of the most important theories in history:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Fr. Gregor Mendel:</strong> An Augustinian friar who is known as the "Father of Genetics."</li>
                <li><strong>Fr. Georges Lemaître:</strong> The Belgian priest who proposed the <strong>Big Bang Theory</strong>.</li>
                <li><strong>St. Albert the Great:</strong> A medieval doctor of the Church who insisted that "the aim of natural science is not simply to accept the statements of others, but to investigate the causes that are at work in nature."</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Faith and reason are like two wings on which the human spirit rises to the contemplation of truth." — Pope John Paul II
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholicism-and-evolution-guide" />

            <BlogFAQ faqs={[
              {
                question: "Do I have to believe in evolution to be Catholic?",
                answer: "No. You are free to believe in either biological evolution or a more literal creationism, provided you hold that God is the primary cause of all things and that the human soul is directly created by God. The Church permits both views."
              },
              {
                question: "Does the Big Bang theory contradict the Bible?",
                answer: "Not at all. In fact, a Catholic priest (Fr. Georges Lemaître) discovered it! The Big Bang points to a moment of beginning for the universe, which aligns perfectly with the theological concept of 'Creation out of nothing' (Ex Nihilo)."
              },
              {
                question: "What about Adam and Eve?",
                answer: "The Church maintains the doctrine of 'monogenism'—that the entire human race descended from one original pair who committed the 'Original Sin.' How that aligns with evolutionary biology is a field of active and healthy theological study."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Explore the Wonders of Creation
              </h3>
              <p className="text-text-muted mb-6">
                Your faith is deep enough to handle the truth. Take our quiz to learn more about the Church's teaching on science and faith.
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
