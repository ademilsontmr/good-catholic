import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HelpCircle, Calendar, Clock, ArrowLeft, Heart, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function TheProblemOfSuffering() {
  return (
    <>
      <Helmet>
        <title>Why Does God Allow Suffering? A Catholic Perspective | Guide Catholic</title>
        <meta name="description" content="Discover the Catholic teaching on the problem of evil and suffering. Learn about free will, the value of redemptive suffering, and where God is in the midst of our pain." />
        <meta name="keywords" content="why does god allow suffering, catholic view on suffering, redemptive suffering, problem of evil catholic, why do bad things happen to good people" />
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
                  15 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Why Does God Allow Suffering? Exploring the Catholic Perspective
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                If God is all-good and all-powerful, why do innocent children get sick? Why do natural disasters happen? Why is there so much pain in the world? This "problem of evil" is the greatest challenge to any faith. For the Catholic, the answer isn't a formula—it's a Person.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <HelpCircle className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Philosophers call this <em>Theodicy</em>—the attempt to justify God's goodness in the face of evil. While we may never fully understand the "Why" this side of heaven, Catholic theology provides several key pillars that give meaning to our pain.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Gift and Risk of Free Will
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Much of the suffering in the world is "moral evil"—it comes from the choices of human beings. God created us for love, but <strong>love cannot be forced</strong>; it must be free.
              </p>
              <p className="text-text leading-relaxed mb-6">
                To give us the capacity for real love, God had to give us the capacity to choose against Him. Suffering is the tragic result of a world where people can choose to be selfish, cruel, or indifferent. God does not cause this evil, but He "permits" it because He values our freedom.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. A World in Transit
              </h2>
              <p className="text-text leading-relaxed mb-6">
                What about "natural evil"—illness, earthquakes, and death? The Church teaches that we do not live in the world as it was originally intended. Through the "Original Sin" of our first parents, the harmony of creation was broken. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                This world is not our final destination; it is a "valley of tears" (as the <em>Salve Regina</em> says) that is being redeemed. Suffering is a reminder that we were made for something more—for an eternal life where "every tear will be wiped away."
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 text-center">
                <h3 className="font-bold text-text mb-2">"God would never permit any evil if He could not also cause a greater good to emerge from it."</h3>
                <p className="text-text-muted">— St. Augustine</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. Redemptive Suffering: The Power of the Cross
              </h2>
              <p className="text-text leading-relaxed mb-6">
                This is the most uniquely Catholic answer to the problem. We do not have a God who stands far off from our pain. We have a God who became a man and <strong>suffered alongside us</strong>.
              </p>
              <p className="text-text leading-relaxed mb-6">
                By dying on the Cross, Jesus transformed suffering from a dead end into a <strong>bridge</strong>. When we "offer up" our pain, we unite it to Christ's sacrifice. This means that even the most lonely, hidden suffering can be used by God for the salvation of souls. No pain is ever "wasted" in the economy of grace.
              </p>

              <QuizCTA
                title="Are you looking for meaning in a difficult season?"
                description="Take our quiz to reflect on your journey and discover how the Catholic faith provides hope even in the darkest times."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6 text-accent" />
                Where is God when it hurts?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                St. Ignatius of Loyola suggests that God is often closest to us when we feel Him least. He is the one giving us the strength to endure, the one prompting others to show us mercy, and the one waiting to hold us at the end of the journey.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Resurrection of Jesus is the ultimate answer to the problem of suffering. It proves that <strong>Evil does not have the last word.</strong> Death is defeated, and every wound can be glorified.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                   <Heart className="w-5 h-5 text-red-500" />
                   Practical Steps for When You Suffer:
                </h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>Be Honest with God:</strong> Look at the Psalms. David cried out, complained, and even asked "Why?". God can handle your anger and your grief.</li>
                  <li><strong>Look at the Crucifix:</strong> Remind yourself that your God is a "Man of Sorrows" who knows exactly how you feel.</li>
                  <li><strong>Seek Community:</strong> We are the Body of Christ. We are meant to carry each other's burdens.</li>
                </ul>
              </div>
            </div>

            <RelatedArticles currentSlug="why-does-god-allow-suffering" />

            <BlogFAQ faqs={[
              {
                question: "If God is all-powerful, why doesn't He just stop the pain?",
                answer: "God respects our free will and the laws of the physical world He created. If He stopped every bad thing from happening, we would no longer be free agents, and our world would not be a place of growth and trial. He chooses to bring a greater good *out* of the evil rather than simply preventing it."
              },
              {
                question: "What does 'offering it up' actually mean?",
                answer: "It is a deliberate act of the will. You say, 'Lord, I don't like this pain, but I give it to You. Use it to help someone else, to bring a sinner home, or to help a soul in Purgatory.' It gives your suffering a purpose and a mission."
              },
              {
                question: "Does God punish us with illness?",
                answer: "Generally, no. Jesus explicitly refuted the idea that illness was always a direct punishment for sin (John 9:3). While our actions have consequences, God is a Father who wants our healing, even if He allows us to go through a trial for our spiritual growth."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                There is Light Beyond the Cross
              </h3>
              <p className="text-text-muted mb-6">
                You were never meant to walk this path alone. Take our quiz to find hope and encouragement today.
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
