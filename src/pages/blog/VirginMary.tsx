import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Star, Sparkles, Shield, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function VirginMary() {
  return (
    <>
      <Helmet>
        <title>The Virgin Mary: The Expert Guide to the Mother of God | Guide Catholic</title>
        <meta name="description" content="Explore the deep theology of the Virgin Mary. Learn about the four dogmas, the Ark of the New Covenant typology, and why Catholics venerate Our Lady." />
        <meta name="keywords" content="virgin mary dogmas, immaculate conception meaning, theotokos council of ephesus, assumption of mary body and soul, perpetual virginity defense" />
        <link rel="canonical" href="https://guidecatholic.com/blog/virgin-mary/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Virgin Mary in Catholic Doctrine: Dogmas and Devotion"
        description="Learn about the four Marian dogmas and the importance of Our Lady in salvation history. Understand why Catholics honor the Mother of God."
        url="https://guidecatholic.com/blog/virgin-mary/"
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
              <span className="text-text">The Virgin Mary</span>
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
                  Devotions & Doctrine
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  28 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Virgin Mary: Prototype of the Church and Mother of God
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "All generations will call me blessed." These are not just words of piety, but a theological mandate. For the Catholic, Mary is the "Golden Thread" that runs through the entire Bible, from Genesis to Revelation. To understand Mary is to understand the heart of Jesus.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Star className="w-24 h-24 text-rose-400/20 absolute -bottom-4 -right-4" />
               <Heart className="w-32 h-32 text-rose-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Many modern Christians view Mary as a "temporary vessel"—a woman who was used and then discarded. The Catholic Church, following the 2,000-year witness of the Fathers, sees her as the <strong>Ark of the New Covenant</strong>. Just as the ancient Ark carried the Word of God in stone, Mary carried the Word of God in Flesh.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Typology of the Ark
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Compare <strong>2 Samuel 6</strong> with <strong>Luke 1</strong>. David asks, "How can the ark of the Lord come to me?" (2 Sam 6:9). Elizabeth asks, "Why is this happened to me, that the mother of my Lord should come to me?" (Lk 1:43). 
              </p>
              <p className="text-text leading-relaxed mb-6">
                David leaped for joy before the Ark. The baby John the Baptist leaped in Elizabeth's womb. The Ark stayed for three months. Mary stayed for three months. This parallelism is not accidental; Mary is the fulfillment of the Old Testament's most sacred object.
              </p>

              <div className="bg-rose-50 border border-border rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Shield className="w-6 h-6 text-rose-600" />
                  The 4 Pillars of Marian Dogma
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-bold mb-2">Theotokos (Mother of God)</h4>
                    <p>Defined in 431 AD. It protects the truth that Jesus is ONE person. To deny Mary is Mother of God is to deny that Jesus IS God.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Immaculate Conception</h4>
                    <p>Defined in 1854. Mary was saved by Christ's merit <em>at the moment of her conception</em> to be a pure vessel for the Word.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Perpetual Virginity</h4>
                    <p>Mary remained a virgin before, during, and after birth. Her biological integrity is a sign of her total consecration to the Lord.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Assumption</h4>
                    <p>Defined in 1950. At the end of her life, she was taken body and soul to Heaven. She is the first human to experience the full resurrection promised to all.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Adoration vs. Veneration (Latria vs. Dulia)
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The most common objection is that Catholics "worship" Mary. We must be precise:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Latria:</strong> Adoration due only to God. We worship God alone.</li>
                <li><strong>Dulia:</strong> Veneration given to saints as friends of God.</li>
                <li><strong>Hyperdulia:</strong> A unique, superior veneration given only to Mary. This is the honor a child gives to a Queen Mother, not a creature gives to a Creator.</li>
              </ul>

              <QuizCTA
                title="Do you know the Mother of your soul?"
                description="Take our quiz to explore the biblical roots of Mary's role and learn how her 'Fiat' became the doorway to our salvation."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Compass className="w-6 h-6 text-accent" />
                 Stella Maris: Star of the Sea
              </h2>
              <p className="text-text leading-relaxed mb-6">
                St. Bernard of Clairvaux famously called Mary the "Star of the Sea." In the storms of life, when the waves of temptation or despair threaten to sink the ship of the soul, we look to her. She is not the destination—Christ is the harbor—but she is the fixed star that ensures we never lose our way.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Of Mary, there can never be enough said." — St. Bernard of Clairvaux
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Did Jesus have brothers? The Bible mentions 'brothers of Jesus.'",
                answer: "The word used in Greek is 'adelphoi,' which in the Aramaic/Semitic context used by Jesus and the Apostles referred to cousins, step-siblings, or close relatives. We see this in Genesis where Abraham calls Lot his 'brother,' though Lot was his nephew."
              },
              {
                question: "Where is the Assumption in the Bible?",
                answer: "While not explicitly described in a single verse, it is the logical conclusion of the Immaculate Conception. Since sin is the cause of bodily decay, a woman without sin would be spared that decay. We see a glimpse of her glorified body in Revelation 12."
              },
              {
                question: "Why do we say she is the 'Mediatrix' of all graces?",
                answer: "Christ is the ONLY mediator (1 Tim 2:5). However, Mary participated in that mediation by giving biological life to the source of all grace. Just as a mother 'mediates' life to her child, Mary mediated the Savior to the world."
              }
            ]} />

<RelatedArticles currentSlug="virgin-mary" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Behold Your Mother
              </h3>
              <p className="text-text-muted mb-6">
                From the cross, Jesus gave her to you. Take our quiz to receive a custom guide to growing in your Marian devotion.
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
