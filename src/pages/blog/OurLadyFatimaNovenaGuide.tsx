import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function OurLadyFatimaNovenaGuide() {
  return (
    <>
      <Helmet>
        <title>Our Lady of Fatima Novena Guide: How to Pray the 9-Day Prayer | Guide Catholic</title>
        <meta name="description" content="A complete guide to the Our Lady of Fatima Novena — the message of Fatima, how to pray the 9-day novena step by step, the Fatima Prayer, and where to pray it online." />
        <meta name="keywords" content="our lady of fatima novena guide, how to pray fatima novena, novena to our lady of fatima, fatima prayer 9 days, fatima novena catholic, may 13 fatima feast day" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-of-fatima-novena-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Our Lady of Fatima Novena Guide: How to Pray the 9-Day Prayer"
        description="A complete guide to the Our Lady of Fatima Novena — the message of Fatima, how to pray the 9-day novena step by step, the Fatima Prayer, and where to pray it online."
        url="https://guidecatholic.com/blog/our-lady-of-fatima-novena-guide/"
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
              <span className="text-text">Our Lady of Fatima Novena Guide</span>
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
                Our Lady of Fatima Novena Guide: How to Pray the 9-Day Prayer
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Our Lady of Fatima appeared to three shepherd children in Portugal in 1917 and asked for prayer, penance, and the daily Rosary. This guide explains who she is, what a novena is, and how to pray the nine-day prayer step by step.
              </p>
            </header>
            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Is Our Lady of Fatima?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-fatima-novena-guide">
                Our Lady of Fatima appeared six times to three shepherd children — Lucia, Francisco, and Jacinta — in Fatima, Portugal, between May 13 and October 13, 1917. She asked for daily Rosary, penance, and the consecration of Russia to her Immaculate Heart. The apparitions were approved by the Church in 1930. Our Lady of Fatima is one of the most venerated Marian apparitions in history, and her message of prayer, penance, and conversion remains urgently relevant today. Her feast day is May 13.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-fatima-novena-guide">
                A novena is a nine-day prayer, traditionally prayed in preparation for a feast day or in petition for a specific intention. The word comes from the Latin <em>novem</em> (nine). The Fatima Novena is traditionally prayed in the nine days before May 13, but can be prayed at any time.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray the Our Lady of Fatima Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-fatima-novena-guide">
                Our Lady of Fatima asked for prayer, penance, and the conversion of sinners. The Fatima Novena is prayed for world peace, the conversion of sinners, protection from evil, healing, and the intentions of the Church. It is especially powerful when combined with the daily Rosary — which Our Lady specifically requested at every apparition. Many Catholics pray this novena in May (the month of Mary) or in October (the month of the Rosary).
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and devotion to Our Lady."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Our Lady of Fatima Novena — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Choose your intention.</strong> Bring to Our Lady of Fatima your deepest needs — peace in your family, the conversion of a loved one, healing, or the peace of the world.
                </li>
                <li>
                  <strong>Begin on any day.</strong> Many begin nine days before May 13 (her feast day) or October 13 (the anniversary of the Miracle of the Sun). But any day is a good day to begin.
                </li>
                <li>
                  <strong>Pray for nine consecutive days.</strong> Each day, pray the novena prayer once. Do not skip days.
                </li>
                <li>
                  <strong>Pray the Rosary daily.</strong> Our Lady asked for the daily Rosary at every apparition. Combining the novena with the Rosary multiplies its power.
                </li>
                <li>
                  <strong>Pray the full novena online.</strong> The complete Our Lady of Fatima Novena — with the traditional prayer text for all nine days — is available at{" "}
                  <a href="https://catholicbibleonline.com/novenas/our-lady-of-fatima/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. This free resource guides you through each day with the full prayer text.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Fatima Prayer (O My Jesus)</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those most in need of Thy mercy. Amen."
                </p>
                <p className="text-text-muted text-sm mt-3">
                  This prayer was given by Our Lady at Fatima to be added after each decade of the Rosary.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Message of Fatima</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-fatima-novena-guide">
                Our Lady's message at Fatima has three essential elements: pray the Rosary every day, make sacrifices for the conversion of sinners, and consecrate yourself to her Immaculate Heart. She warned that if her requests were not heeded, Russia would spread its errors throughout the world. She also promised: "In the end, my Immaculate Heart will triumph." The Fatima Novena is a way of responding personally to Our Lady's urgent call to prayer and penance.
              </LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-fatima-novena-guide">
                Ready to begin? The complete Our Lady of Fatima Novena — with the full prayer text for all nine days — is available for free at{" "}
                <a href="https://catholicbibleonline.com/novenas/our-lady-of-fatima/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. You can pray it directly on the site, day by day, with no registration required. Our Lady of Fatima, pray for us.
              </LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "When is the feast day of Our Lady of Fatima?", answer: "The feast day of Our Lady of Fatima is May 13, commemorating the date of the first apparition to the three shepherd children in 1917. Many Catholics begin the Fatima Novena nine days before May 13." },
              { question: "How long is the Our Lady of Fatima Novena?", answer: "The Our Lady of Fatima Novena is nine days long. You pray the novena prayer once each day for nine consecutive days. It can be started at any time, though many begin it nine days before May 13 or October 13." },
              { question: "What is the Fatima Prayer?", answer: "The Fatima Prayer — also called the O My Jesus prayer — was given by Our Lady at Fatima to be added after each decade of the Rosary. It reads: 'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those most in need of Thy mercy. Amen.'" },
              { question: "Can I pray the Fatima Novena at any time of year?", answer: "Yes. While many Catholics pray the Fatima Novena in the nine days before May 13 (her feast day) or before October 13 (the anniversary of the Miracle of the Sun), you can pray it at any time of year. What matters is praying consistently for nine consecutive days." },
              { question: "Where can I find the full Our Lady of Fatima Novena prayer text?", answer: "The complete Our Lady of Fatima Novena with the full prayer text for all nine days is available for free at Catholic Bible Online (catholicbibleonline.com/novenas/our-lady-of-fatima/). You can pray it directly on the site, day by day, with no registration required." },
            ]} />

            <RelatedArticles currentSlug="our-lady-of-fatima-novena-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic prayer and devotion to Our Lady.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
