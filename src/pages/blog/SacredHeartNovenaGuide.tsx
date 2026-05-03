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

export default function SacredHeartNovenaGuide() {
  return (
    <>
      <Helmet>
        <title>Sacred Heart Novena Guide: How to Pray the 9-Day Prayer to the Heart of Jesus | Guide Catholic</title>
        <meta name="description" content="A complete guide to the Sacred Heart Novena — the 12 promises of Jesus, how to pray the 9-day novena step by step, the First Friday devotion, and where to pray it online." />
        <meta name="keywords" content="sacred heart novena guide, how to pray sacred heart novena, novena to sacred heart of jesus, sacred heart prayer 9 days, first friday devotion, sacred heart feast day" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sacred-heart-novena-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Sacred Heart Novena Guide: How to Pray the 9-Day Prayer to the Heart of Jesus"
        description="A complete guide to the Sacred Heart Novena — the 12 promises of Jesus, how to pray the 9-day novena step by step, the First Friday devotion, and where to pray it online."
        url="https://guidecatholic.com/blog/sacred-heart-novena-guide/"
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
              <span className="text-text">Sacred Heart Novena Guide</span>
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
                Sacred Heart Novena Guide: How to Pray the 9-Day Prayer to the Heart of Jesus
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Sacred Heart of Jesus is one of the most beloved devotions in the Catholic Church. This guide explains what it is, what a novena is, and how to pray the nine-day prayer step by step.
              </p>
            </header>
            <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-red-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is the Sacred Heart of Jesus?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-novena-guide">
                The Sacred Heart of Jesus is one of the most beloved devotions in the Catholic Church. It refers to the physical heart of Jesus Christ as the symbol of his infinite love for humanity — a love that was pierced by a lance on the cross and continues to burn for every soul. The devotion was revealed to St. Margaret Mary Alacoque in a series of apparitions between 1673 and 1675, in which Jesus showed her his heart surrounded by flames and a crown of thorns. The feast of the Sacred Heart is celebrated on the Friday after the second Sunday after Pentecost.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-novena-guide">
                A novena is a nine-day prayer, traditionally prayed in preparation for a feast day or in petition for a specific intention. The word comes from the Latin <em>novem</em> (nine), recalling the nine days the apostles and Mary spent in prayer between the Ascension and Pentecost (Acts 1:14). The Sacred Heart Novena is traditionally prayed in the nine days before the feast of the Sacred Heart.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray the Sacred Heart Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-novena-guide">
                Jesus himself promised extraordinary graces to those devoted to his Sacred Heart. Among the 12 promises revealed to St. Margaret Mary: peace in families, consolation in troubles, fervor for the lukewarm, and the grace of final perseverance. The Sacred Heart Novena is prayed for conversion of sinners, healing of families, peace in troubled hearts, and a deeper love for Jesus in the Eucharist. It is one of the most powerful novenas in the Catholic tradition.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and devotion to the Sacred Heart."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Sacred Heart Novena — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Choose your intention.</strong> Bring to the Sacred Heart of Jesus whatever weighs most heavily on your heart — a family member's conversion, a healing, peace in your home, or your own spiritual growth.
                </li>
                <li>
                  <strong>Begin on any day.</strong> The novena can be started at any time. Many Catholics begin it nine days before the feast of the Sacred Heart, or on the first Friday of any month (a special day of devotion to the Sacred Heart).
                </li>
                <li>
                  <strong>Pray for nine consecutive days.</strong> Each day, pray the novena prayer once. Consistency is essential — do not skip days.
                </li>
                <li>
                  <strong>Receive Communion on the First Fridays.</strong> Jesus promised special graces to those who receive Communion on nine consecutive First Fridays in reparation to his Sacred Heart. Consider combining the novena with this devotion.
                </li>
                <li>
                  <strong>Pray the full novena online.</strong> The complete Sacred Heart Novena — with the traditional prayer text for all nine days — is available at{" "}
                  <a href="https://catholicbibleonline.com/novenas/sacred-heart/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. This free resource guides you through each day with the full prayer text.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The 12 Promises of the Sacred Heart</h3>
                <p className="text-text leading-relaxed text-sm mb-4">
                  Jesus made 12 promises to St. Margaret Mary for those devoted to his Sacred Heart. Among the most significant:
                </p>
                <ul className="list-disc list-inside text-text space-y-2 text-sm italic">
                  <li>"I will give peace in their families."</li>
                  <li>"I will console them in all their troubles."</li>
                  <li>"I will bless every place where an image of my Heart shall be exposed and honored."</li>
                  <li>"I promise you, in the excessive mercy of my Heart, that its all-powerful love will grant to all those who receive Holy Communion on the First Fridays in nine consecutive months the grace of final perseverance."</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The First Friday Devotion</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-novena-guide">
                One of the most powerful expressions of Sacred Heart devotion is the First Friday practice: receiving Holy Communion on nine consecutive First Fridays of the month, in reparation to the Sacred Heart of Jesus. Jesus promised that those who complete this devotion will receive the grace of final perseverance — they will not die without the sacraments necessary for salvation. Many Catholics combine the Sacred Heart Novena with the First Friday practice for a complete devotion to the Heart of Jesus.
              </LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-novena-guide">
                Ready to begin? The complete Sacred Heart Novena — with the full prayer text for all nine days — is available for free at{" "}
                <a href="https://catholicbibleonline.com/novenas/sacred-heart/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. You can pray it directly on the site, day by day, with no registration required. Sacred Heart of Jesus, I place my trust in you.
              </LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "What is the Sacred Heart of Jesus?", answer: "The Sacred Heart of Jesus refers to the physical heart of Christ as the symbol of his infinite love for humanity. The devotion was revealed to St. Margaret Mary Alacoque in apparitions between 1673 and 1675. The feast of the Sacred Heart is celebrated on the Friday after the second Sunday after Pentecost." },
              { question: "How long is the Sacred Heart Novena?", answer: "The Sacred Heart Novena is nine days long. You pray the novena prayer once each day for nine consecutive days. It is traditionally prayed in the nine days before the feast of the Sacred Heart, but can be started at any time." },
              { question: "What are the 12 promises of the Sacred Heart?", answer: "Jesus promised 12 graces to those devoted to his Sacred Heart, revealed to St. Margaret Mary Alacoque. They include peace in families, consolation in troubles, fervor for the lukewarm, and the grace of final perseverance for those who receive Communion on nine consecutive First Fridays." },
              { question: "What is the First Friday devotion?", answer: "The First Friday devotion involves receiving Holy Communion on nine consecutive First Fridays of the month in reparation to the Sacred Heart of Jesus. Jesus promised that those who complete this practice will receive the grace of final perseverance — they will not die without the sacraments necessary for salvation." },
              { question: "Where can I find the full Sacred Heart Novena prayer text?", answer: "The complete Sacred Heart Novena with the full prayer text for all nine days is available for free at Catholic Bible Online (catholicbibleonline.com/novenas/sacred-heart/). You can pray it directly on the site, day by day, with no registration required." },
            ]} />

            <RelatedArticles currentSlug="sacred-heart-novena-guide" />

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
