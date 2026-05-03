import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function OurLadyGuadalupeNovena() {
  return (
    <>
      <Helmet>
        <title>Our Lady of Guadalupe Novena Guide: How to Pray the 9-Day Prayer | Guide Catholic</title>
        <meta name="description" content="A complete guide to the Our Lady of Guadalupe Novena — the apparitions to Juan Diego, her role as Patroness of the Americas, how to pray the 9-day novena, and where to pray it online." />
        <meta name="keywords" content="our lady of guadalupe novena, how to pray guadalupe novena, novena to our lady of guadalupe, guadalupe prayer 9 days, december 12 feast day, patroness of americas novena" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-of-guadalupe-novena-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Our Lady of Guadalupe Novena Guide: How to Pray the 9-Day Prayer"
        description="A complete guide to the Our Lady of Guadalupe Novena — the apparitions to Juan Diego, her role as Patroness of the Americas, how to pray the 9-day novena, and where to pray it online."
        url="https://guidecatholic.com/blog/our-lady-of-guadalupe-novena-guide/"
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
              <span className="text-text">Our Lady of Guadalupe Novena Guide</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 1, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />5 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Our Lady of Guadalupe Novena Guide: How to Pray the 9-Day Prayer
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Our Lady of Guadalupe appeared to Juan Diego in 1531 and left a miraculous image that endures to this day. This guide explains who she is, her role as Patroness of the Americas, and how to pray the nine-day novena step by step.
              </p>
            </header>
            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Is Our Lady of Guadalupe?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-novena-guide">
                Our Lady of Guadalupe appeared to Juan Diego, an indigenous Mexican man, on December 9–12, 1531, on the hill of Tepeyac near Mexico City. She left her miraculous image on his tilma (cloak), which has been preserved for nearly 500 years and continues to defy scientific explanation. She is the Patroness of the Americas, of Mexico, and of the unborn. Her feast day is December 12. The Basilica of Our Lady of Guadalupe in Mexico City is the most visited Catholic shrine in the world.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-novena-guide">
                A novena is a nine-day prayer, traditionally prayed in preparation for a feast day or in petition for a specific intention. The word comes from the Latin <em>novem</em> (nine). The Our Lady of Guadalupe Novena is traditionally prayed in the nine days before December 12, but can be prayed at any time.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray This Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-novena-guide">
                Our Lady of Guadalupe is invoked for the protection of families, the conversion of sinners, the defense of the unborn, healing, and the needs of the Americas. She appeared to Juan Diego as a mestiza woman, speaking his language, showing that God's love is for all peoples. The Guadalupe Novena is especially popular among Hispanic Catholics in the United States and is prayed with great fervor in the nine days before her feast day on December 12.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and devotion to the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Novena — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Choose your intention.</strong> Bring to Our Lady of Guadalupe your deepest needs — protection for your family, the conversion of a loved one, healing, or the defense of the unborn.
                </li>
                <li>
                  <strong>Begin on any day.</strong> Many begin nine days before December 12 (her feast day), starting on December 3. But any day is a good day to seek her intercession.
                </li>
                <li>
                  <strong>Pray for nine consecutive days.</strong> Each day, pray the novena prayer once. Do not skip days.
                </li>
                <li>
                  <strong>Pray the Rosary.</strong> Our Lady of Guadalupe is deeply connected to the Rosary. Combining the novena with the daily Rosary deepens the devotion.
                </li>
                <li>
                  <strong>Pray the full novena online.</strong> The complete Our Lady of Guadalupe Novena — with the traditional prayer text for all nine days — is available at{" "}
                  <a href="https://catholicbibleonline.com/novenas/our-lady-of-guadalupe/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. This free resource guides you through each day with the full prayer text.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Her Words to Juan Diego</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  "Am I not here, I who am your Mother? Are you not under my shadow and protection? Am I not the source of your joy? Are you not in the hollow of my mantle, in the crossing of my arms? Do you need anything more?" — Our Lady of Guadalupe to Juan Diego, December 12, 1531.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patroness of the Americas</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-novena-guide">
                Pope Pius X declared Our Lady of Guadalupe the Patroness of Latin America in 1910. Pope Pius XII extended her patronage to all the Americas in 1945. Pope John Paul II visited her shrine three times and called her "the Star of the first and new evangelization." In the United States, December 12 is a feast day celebrated with special Masses, processions, and the singing of Las Mañanitas — the traditional Mexican birthday serenade — at dawn.
              </LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-novena-guide">
                Ready to begin? The complete Our Lady of Guadalupe Novena — with the full prayer text for all nine days — is available for free at{" "}
                <a href="https://catholicbibleonline.com/novenas/our-lady-of-guadalupe/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. You can pray it directly on the site, day by day, with no registration required. Our Lady of Guadalupe, pray for us.
              </LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "Who is Our Lady of Guadalupe?", answer: "Our Lady of Guadalupe appeared to Juan Diego on December 9–12, 1531, on the hill of Tepeyac near Mexico City. She left her miraculous image on his tilma (cloak), which has been preserved for nearly 500 years. She is the Patroness of the Americas, of Mexico, and of the unborn. Her feast day is December 12." },
              { question: "How long is the Our Lady of Guadalupe Novena?", answer: "The novena is nine days long. You pray the novena prayer once each day for nine consecutive days. It is traditionally prayed in the nine days before December 12, starting on December 3, but can be started at any time." },
              { question: "Can I start the novena at any time?", answer: "Yes. While many Catholics begin the novena nine days before December 12 (her feast day), you can start it at any time. What matters is praying consistently for nine consecutive days with faith and a sincere intention." },
              { question: "Why is Our Lady of Guadalupe the Patroness of the Americas?", answer: "Pope Pius X declared her Patroness of Latin America in 1910, and Pope Pius XII extended her patronage to all the Americas in 1945. She appeared as a mestiza woman speaking Juan Diego's language, showing that God's love is for all peoples of the Americas." },
              { question: "Where can I find the full prayer text for the novena?", answer: "The complete Our Lady of Guadalupe Novena with the full prayer text for all nine days is available for free at Catholic Bible Online (catholicbibleonline.com/novenas/our-lady-of-guadalupe/). You can pray it directly on the site, day by day, with no registration required." },
            ]} />

            <RelatedArticles currentSlug="our-lady-of-guadalupe-novena-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic prayer and devotion.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
