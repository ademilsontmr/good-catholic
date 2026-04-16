import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Church, Calendar, Clock, ArrowLeft, ShieldCheck, Sparkles, Heart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, HowToSchema } from "@/components/blog/ArticleSchema";

export default function HowToGoToConfession() {
  return (
    <>
      <Helmet>
        <title>How to Go to Confession: The Expert Guide to Reconciliation | Guide Catholic</title>
        <meta name="description" content="Master the Sacrament of Penance. Learn the 5 steps to a perfect confession, the difference between contrition types, and the power of the Seal of the Confessional." />
        <meta name="keywords" content="how to go to confession catholic, steps to a good confession, perfect vs imperfect contrition, examination of conscience guide, seal of the confessional rules" />
        <link rel="canonical" href="https://guidecatholic.com/blog/how-to-go-to-confession/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="How to Go to Confession: Step-by-Step Guide for Catholics"
        description="Learn how to go to Confession step by step. Complete Catholic guide covering examination of conscience, what to say, and how to receive absolution."
        url="https://guidecatholic.com/blog/how-to-go-to-confession/"
      />
      <HowToSchema
        name="How to Go to Confession"
        description="Step-by-step guide for Catholics on how to make a good Confession."
        url="https://guidecatholic.com/blog/how-to-go-to-confession/"
        totalTime="PT20M"
        steps={[
          {"name": "Examination of Conscience", "text": "Review your sins in the light of the Ten Commandments."},
          {"name": "Contrition", "text": "Form a sincere sorrow for your sins."},
          {"name": "Preparation", "text": "Make a firm resolution to avoid these sins in the future."},
          {"name": "Confession", "text": "Confess your sins to the priest clearly and concisely."},
          {"name": "Absolution and Penance", "text": "Pray the Act of Contrition and fulfill your penance."}
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
              <span className="text-text">How to Go to Confession</span>
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
                  Healing & Grace
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
                The Divine Hospital: A Master Guide to Confession
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Whose sins you forgive are forgiven." With these words, Jesus created the most powerful psychological and spiritual tool in the history of humanity. Confession is not about guilt—it is about <strong>freedom</strong>.
              </p>
            </header>

            <div className="aspect-video bg-violet-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <ShieldCheck className="w-24 h-24 text-violet-400/20 absolute -bottom-4 -right-4" />
               <Church className="w-32 h-32 text-violet-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Confession is often the most feared sacrament, yet it is the most liberating. To go to confession is to hand over your heavy burdens to Christ and walk away with a clean slate.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Five Steps to a Worthy Confession
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A holy confession requires preparation. The Church suggests five stages for a "perfect" experience:
              </p>

              <div className="bg-violet-50 border border-violet-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <FileText className="w-6 h-6 text-violet-600" />
                  Preparation Checklist
                </h3>
                <ol className="list-decimal list-inside text-text space-y-4 text-sm">
                  <li><strong>Examination of Conscience:</strong> Spend 10 minutes in silence. Use a guide based on the 10 Commandments.</li>
                  <li><strong>Sincere Contrition:</strong> This is sorrow of the soul. You don't need to "feel" sad, but you must "will" to be sorry.</li>
                  <li><strong>Purpose of Amendment:</strong> A firm resolve to avoid the sins and the "near occasions of sin" (the people or places that lead you to sin).</li>
                  <li><strong>Oral Confession:</strong> Verbalizing your sins to the priest. Naming them kills their power.</li>
                  <li><strong>Penance:</strong> Doing the act suggested by the priest to help repair the spiritual damage.</li>
                </ol>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Perfect vs. Imperfect Contrition
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Perfect Contrition</strong> is sorrow that arises purely from the love of God. <strong>Imperfect Contrition</strong> (Attritions) is sorrow that arises from a fear of Hell or the ugliness of the sin. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                While Perfect Contrition can forgive sins even before the sacrament (if combined with the intent to confess), Imperfect Contrition is <strong>fully sufficient</strong> within the sacrament. God meets you where you are.
              </p>

              <QuizCTA
                title="Is your soul's mirror clear?"
                description="Confession is the best spiritual hygiene. Take our quiz to prepare your heart and receive a customized examination of conscience for your next visit."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 The Seal of the Confessional
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The priest is bound by an <strong>absolute seal</strong>. He cannot reveal a sin for any reason, even to save his own life or the lives of others. If a priest breaks this seal, he is automatically excommunicated. You can be 100% certain that your secret dies in that box.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Though your sins be like scarlet, they shall be as white as snow." — Isaiah 1:18
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="how-to-go-to-confession" />

            <BlogFAQ faqs={[
              {
                question: "What if I forget a mortal sin?",
                answer: "If you genuinely forgot a mortal sin after a diligent examination, your confession is still valid. You should simply mention it at your next confession for the sake of completeness."
              },
              {
                question: "Can I go to confession if I haven't been in 20 years?",
                answer: "YES. Priests love hearing these 'long-term' confessions. It is like the return of the Prodigal Son. Just tell the priest it's been a long time and he will help guide you through it."
              },
              {
                question: "How often should I go?",
                answer: "The Church requires it once a year if you are in mortal sin. However, spiritual directors recommend once a month as a way to grow in virtue and keep the soul healthy."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Receive Your Spiritual Healing
              </h3>
              <p className="text-text-muted mb-6">
                Grace is waiting behind the screen. Take our quiz to receive a step-by-step printable guide for your next confession.
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
