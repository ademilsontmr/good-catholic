import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HelpCircle, Calendar, Clock, ArrowLeft, Heart, Sun, Activity, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function TheProblemOfSuffering() {
  return (
    <>
      <Helmet>
        <title>Why Does God Allow Suffering? A Catholic Masterclass | Guide Catholic</title>
        <meta name="description" content="Explore the Catholic response to the problem of evil. Learn about redemptive suffering, Salvifici Doloris, and how God brings good from pain." />
        <meta name="keywords" content="why does god allow suffering, catholic view on suffering, redemptive suffering, Salvifici Doloris, problem of evil catholic, why do bad things happen to good people" />
        <link rel="canonical" href="https://guidecatholic.com/blog/why-does-god-allow-suffering/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Why Does God Allow Suffering? Exploring the Catholic Perspective"
        description="Discover the Catholic teaching on the problem of evil and suffering. Learn about free will, the value of redemptive suffering, and where God is in the midst of our pain."
        url="https://guidecatholic.com/blog/why-does-god-allow-suffering/"
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
              <span className="text-text">Why God Allows Suffering</span>
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
                  Theology
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  26 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Why Does God Allow Suffering? The Theology of the Cross
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "My God, my God, why have you forsaken me?" Even Jesus asked the question. The "Problem of Evil" is the most powerful argument against God's existence, yet for the Catholic, it is precisely in the depths of suffering that the most profound meaning of life is found.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Activity className="w-24 h-24 text-amber-400/20 absolute -bottom-4 -right-4" />
               <HelpCircle className="w-32 h-32 text-amber-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Philosophers call this the <strong>Epicurean Paradox</strong>: If God is willing to prevent evil but not able, He is not all-powerful. If He is able but not willing, He is not all-good. The Catholic response is not a logical equation, but a historical event: <strong>The Crucifixion</strong>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. Moral Evil vs. Physical Evil
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="why-does-god-allow-suffering">
                The Church distinguishes between two types of evil:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Moral Evil:</strong> Crimes, wars, and betrayals. These are the direct result of <strong>Free Will</strong>. God respects our freedom so much that He allows us to choose even what He hates, because a world without the possibility of hate is a world without the possibility of real love.</li>
                <li><strong>Physical Evil:</strong> Diseases, natural disasters, and death. These exist because we live in a "fallen" world—a world in labor (Romans 8:22) that is still moving toward its final perfection.</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Heart className="w-6 h-6 text-red-600" />
                  Salvifici Doloris: The Gospel of Suffering
                </h3>
                <p className="text-text mb-4 text-sm">
                  In 1984, <strong>Saint John Paul II</strong> wrote a definitive apostolic letter on suffering. He argued that:
                </p>
                <ul className="list-disc list-inside text-text space-y-3 text-sm font-medium">
                  <li>Suffering is a "call" to the soul. It forces us to ask the big questions.</li>
                  <li><strong>Redemptive Value:</strong> By suffering, we actually *participate* in the redemption of the world.</li>
                  <li><strong>Colossians 1:24:</strong> St. Paul says, "I complete what is lacking in Christ's afflictions." Does Christ's sacrifice lack anything? No. But He invites *us* to be part of the work.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. The "Greatest Good" Argument
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Saint Thomas Aquinas taught that God would <em>never</em> permit an evil unless He could bring a greater good out of it. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                The prime example is <strong>Good Friday</strong>. The greatest evil in history—the judicial murder of the Son of God—was used by God to accomplish the greatest good: the salvation of every human soul. From the tragedy of the Cross came the glory of the Resurrection.
              </p>

              <QuizCTA
                title="Is your heart heavy today?"
                description="Take our quiz to analyze how you handle spiritual trials and receive a personalized guide to finding peace in the middle of the storm."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 Victim Souls and "Offering Up"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In Catholic tradition, some are called to be "Victim Souls"—people who accept their chronic pain or tragedy as a specific mission for the Church. When a Catholic says <strong>"Offer it up,"</strong> they aren't being dismissive. They are saying: "Don't let this pain go to waste. Use it as currency for the salvation of your children, your friends, or the poor souls in Purgatory."
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Apart from the Cross, there is no other ladder by which we may get to heaven." — St. Rose of Lima
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "If God can do anything, why doesn't He heal everyone?",
                answer: "God often heals through miracles, but He knows that sometimes a physical trial leads to a greater spiritual healing. The goal of this life is not to stay healthy forever (since we all die anyway), but to prepare the soul for eternity."
              },
              {
                question: "Is suffering a punishment for my previous sins?",
                answer: "Not necessarily. Jesus specifically addressed this in the case of the blind man (John 9:3), saying it wasn't his sin or his parents' sin. Suffering is often a trial of love rather than a punishment for debt."
              },
              {
                question: "How can I help someone who is suffering without sounding insensitive?",
                answer: "Often, the best response is the 'Ministry of Presence.' Job's friends were helpful until they started talking. Just be there. Mourn with them. And pray *for* them silently, respecting the mystery of their cross."
              }
            ]} />

<RelatedArticles currentSlug="why-does-god-allow-suffering" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Walk Toward the Light
              </h3>
              <p className="text-text-muted mb-6">
                God is in the tears as much as in the laughter. Take our quiz to deepen your relationship with the Man of Sorrows.
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
