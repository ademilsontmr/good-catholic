import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function OurLadyPerpetualHelpNovena() {
  return (
    <>
      <Helmet>
        <title>Our Lady of Perpetual Help Novena Guide: How to Pray the 9-Day Prayer | Guide Catholic</title>
        <meta name="description" content="A complete guide to the Our Lady of Perpetual Help Novena — who she is, the meaning of the icon, how to pray the 9-day novena step by step, and where to pray it online." />
        <meta name="keywords" content="our lady of perpetual help novena, how to pray perpetual help novena, novena to our lady of perpetual help, perpetual help prayer 9 days, june 27 feast day, redemptorist novena" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-of-perpetual-help-novena-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Our Lady of Perpetual Help Novena Guide: How to Pray the 9-Day Prayer"
        description="A complete guide to the Our Lady of Perpetual Help Novena — who she is, the meaning of the icon, how to pray the 9-day novena step by step, and where to pray it online."
        url="https://guidecatholic.com/blog/our-lady-of-perpetual-help-novena-guide/"
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
              <span className="text-text">Our Lady of Perpetual Help Novena Guide</span>
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
                Our Lady of Perpetual Help Novena Guide: How to Pray the 9-Day Prayer
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Our Lady of Perpetual Help is one of the most beloved Marian devotions in the Catholic world. This guide explains who she is, what the icon means, and how to pray the nine-day novena step by step.
              </p>
            </header>
            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Is Our Lady of Perpetual Help?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-perpetual-help-novena-guide">
                Our Lady of Perpetual Help is one of the most beloved Marian icons in the Catholic world. The original icon, painted in the Byzantine style, depicts Mary holding the Child Jesus while two archangels — Michael and Gabriel — present the instruments of the Passion. The icon was entrusted to the Redemptorist Fathers in Rome in 1866 by Pope Pius IX, who asked them to "make her known throughout the world." Her feast day is June 27. The devotion is especially strong in the Philippines, Ireland, and the United States.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-perpetual-help-novena-guide">
                A novena is a nine-day prayer, traditionally prayed in preparation for a feast day or in petition for a specific intention. The word comes from the Latin <em>novem</em> (nine). The Our Lady of Perpetual Help Novena is traditionally prayed in the nine days before June 27, but can be prayed at any time.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray This Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-perpetual-help-novena-guide">
                Our Lady of Perpetual Help is invoked for all kinds of needs — illness, family problems, financial difficulties, spiritual struggles, and any situation where we need a mother's help. The name itself is a promise: she is always ready to help, perpetually. Many Redemptorist parishes hold a weekly novena to Our Lady of Perpetual Help, which has been one of the most popular Catholic devotions in the United States for over a century.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and devotion to the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Novena — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Choose your intention.</strong> Bring to Our Lady of Perpetual Help whatever you need most — healing, peace, guidance, or help for a loved one.
                </li>
                <li>
                  <strong>Begin on any day.</strong> Many begin nine days before June 27 (her feast day). But any day is a good day to seek her help.
                </li>
                <li>
                  <strong>Pray for nine consecutive days.</strong> Each day, pray the novena prayer once. Do not skip days.
                </li>
                <li>
                  <strong>Attend the weekly novena at your parish.</strong> Many Redemptorist and other Catholic parishes hold a weekly novena to Our Lady of Perpetual Help, usually on Tuesdays or Wednesdays. Attending in community multiplies the grace.
                </li>
                <li>
                  <strong>Pray the full novena online.</strong> The complete Our Lady of Perpetual Help Novena — with the traditional prayer text for all nine days — is available at{" "}
                  <a href="https://catholicbibleonline.com/novenas/our-lady-of-perpetual-help/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. This free resource guides you through each day with the full prayer text.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Traditional Prayer to Our Lady of Perpetual Help</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  "O Mother of Perpetual Help, grant that I may ever invoke your most powerful name, which is the safeguard of the living and the salvation of the dying. O purest Mary, O sweetest Mary, let your name henceforth be ever on my lips. Delay not, O Blessed Lady, to help me whenever I call on you. Amen."
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Icon and Its Meaning</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-perpetual-help-novena-guide">
                The icon of Our Lady of Perpetual Help is rich with symbolism. Mary holds the Child Jesus, who clings to her hand after seeing the instruments of his future Passion — the cross, the nails, and the lance — carried by the archangels Michael and Gabriel. The Child's sandal is slipping off, suggesting he ran to his mother in fear. Mary's gaze is directed outward — toward us — as if to say: "I am here. I will help you."
              </LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-perpetual-help-novena-guide">
                Ready to begin? The complete Our Lady of Perpetual Help Novena — with the full prayer text for all nine days — is available for free at{" "}
                <a href="https://catholicbibleonline.com/novenas/our-lady-of-perpetual-help/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. You can pray it directly on the site, day by day, with no registration required. Our Lady of Perpetual Help, pray for us.
              </LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "Who is Our Lady of Perpetual Help?", answer: "Our Lady of Perpetual Help is a Marian title associated with a famous Byzantine icon entrusted to the Redemptorist Fathers in Rome in 1866. The icon depicts Mary holding the Child Jesus while archangels Michael and Gabriel present the instruments of the Passion. Her feast day is June 27." },
              { question: "How long is the Our Lady of Perpetual Help Novena?", answer: "The novena is nine days long. You pray the novena prayer once each day for nine consecutive days. It is traditionally prayed in the nine days before June 27, but can be started at any time." },
              { question: "Can I start the novena at any time?", answer: "Yes. While many Catholics begin the novena nine days before June 27 (her feast day), you can start it at any time — especially in moments of urgent need. What matters is praying consistently for nine consecutive days." },
              { question: "What is the weekly novena to Our Lady of Perpetual Help?", answer: "Many Redemptorist and other Catholic parishes hold a weekly novena to Our Lady of Perpetual Help, usually on Tuesdays or Wednesdays. This communal devotion has been one of the most popular in the United States for over a century. Check with your local parish for times." },
              { question: "Where can I find the full prayer text for the novena?", answer: "The complete Our Lady of Perpetual Help Novena with the full prayer text for all nine days is available for free at Catholic Bible Online (catholicbibleonline.com/novenas/our-lady-of-perpetual-help/). You can pray it directly on the site, day by day, with no registration required." },
            ]} />

            <RelatedArticles currentSlug="our-lady-of-perpetual-help-novena-guide" />

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
