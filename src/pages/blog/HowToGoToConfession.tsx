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
import { LinkedText } from "@/components/blog/LinkedText";

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
        title="How to Go to Confession: The Expert Guide to Reconciliation"
        description="Master the Sacrament of Penance. Learn the 5 traditional requirements for a good confession, the power of 'In Persona Christi', and the absolute Seal of the Confessional."
        url="https://guidecatholic.com/blog/how-to-go-to-confession/"
        author="Catholic Faith Guide Team"
      />
      <HowToSchema
        name="How to Go to Confession"
        description="Step-by-step guide for Catholics on how to make a good Confession."
        url="https://guidecatholic.com/blog/how-to-go-to-confession/"
        totalTime="PT20M"
        steps={[
          { "name": "Examination of Conscience", "text": "Review your sins in the light of the Ten Commandments." },
          { "name": "Contrition", "text": "Form a sincere sorrow for your sins." },
          { "name": "Preparation", "text": "Make a firm resolution to avoid these sins in the future." },
          { "name": "Confession", "text": "Confess your sins to the priest clearly and concisely." },
          { "name": "Absolution and Penance", "text": "Pray the Act of Contrition and fulfill your penance." }
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
                  Sacraments
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
                "Whose sins you forgive are forgiven." With these words, Jesus created the most powerful healing tool in history. Confession is not a courtroom; it is the <strong>Sacrament of Resurrecting the Soul</strong>.
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <ShieldCheck className="w-24 h-24 text-indigo-400/20 absolute -bottom-4 -right-4" />
               <Church className="w-32 h-32 text-indigo-500 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Most Catholics view Confession as an obligation. The expert views it as a <strong>reset button for eternity</strong>. In the confessional, the priest acts <em>In Persona Christi</em>—it is not a man who hears you, but Jesus Christ Himself using the priest's vocal cords to pronounce the words of absolution.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The 5 Traditional Requirements (The Latin Blueprint)
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-go-to-confession">
                The Church Fathers and Doctors developed five essential stages to ensure the sacrament is not only valid but spiritually fruitful:
              </LinkedText>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                     <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                       <FileText className="w-5 h-5" />
                       Interior Preparation
                     </h4>
                     <ul className="space-y-4 text-sm text-text">
                       <li><strong>Examen (Examination):</strong> A deep, honest review of the soul against the Decalogue (10 Commandments).</li>
                       <li><strong>Contritio (Contrition):</strong> The heart's sorrow. Authentic contrition is a <em>judgment of the will</em> that sin was a mistake.</li>
                       <li><strong>Propositum (Resolution):</strong> The firm intent to avoid not only the sin but the "near occasions" of sin.</li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                       <ShieldCheck className="w-5 h-5" />
                       External Action
                     </h4>
                     <ul className="space-y-4 text-sm text-text">
                       <li><strong>Confessio (Confession):</strong> The verbalizing of sins. Explicitly naming the sin "kills" its power over your subconscious.</li>
                       <li><strong>Satisfactio (Satisfaction):</strong> Performing the penance to heal the temporal damage caused by the sin.</li>
                     </ul>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Perfect vs. Imperfect Contrition
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Theology distinguishes between <strong>Contrition of Charity</strong> (Perfect) and <strong>Contrition of Fear</strong> (Imperfect, or Attrition). The miracle of the sacrament is that even if your sorrow is "imperfect" (e.g., fearing Hell), the grace of the absolution transforms it and restores your soul to the state of grace.
              </p>

              <QuizCTA
                title="Is your soul's mirror clear?"
                description="Confession is the best spiritual hygiene. Take our quiz to prepare your heart and receive a customized examination of conscience for your next visit."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. The Inviolable Seal: The Secret of the Grave
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The <strong>Seal of Confession</strong> is absolute and perpetual. Under Canon Law 1388, a priest who breaks the seal is automatically excommunicated. This was defended by martyrs like <strong>St. John Nepomucene</strong>, who was drowned in the Vltava River because he refused to tell the King the sins the Queen had confessed. 
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-6 mb-6 font-display italic text-center text-text font-semibold">
                  "Though your sins be like scarlet, they shall be as white as snow." — Isaiah 1:18
              </div>
            </div>

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

<RelatedArticles currentSlug="how-to-go-to-confession" />

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
