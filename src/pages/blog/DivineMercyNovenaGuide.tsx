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

export default function DivineMercyNovenaGuide() {
  return (
    <>
      <Helmet>
        <title>Divine Mercy Novena Guide: How to Pray the 9-Day Prayer Before Easter Sunday | Guide Catholic</title>
        <meta name="description" content="A complete guide to the Divine Mercy Novena — what it is, how to pray it step by step, the Divine Mercy Chaplet, Divine Mercy Sunday, and where to pray it online." />
        <meta name="keywords" content="divine mercy novena guide, how to pray divine mercy novena, divine mercy chaplet novena, novena to divine mercy, good friday novena, divine mercy sunday" />
        <link rel="canonical" href="https://guidecatholic.com/blog/divine-mercy-novena-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Divine Mercy Novena Guide: How to Pray the 9-Day Prayer Before Easter Sunday"
        description="A complete guide to the Divine Mercy Novena — what it is, how to pray it step by step, the Divine Mercy Chaplet, Divine Mercy Sunday, and where to pray it online."
        url="https://guidecatholic.com/blog/divine-mercy-novena-guide/"
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
              <span className="text-text">Divine Mercy Novena Guide</span>
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
                Divine Mercy Novena Guide: How to Pray the 9-Day Prayer Before Easter Sunday
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Divine Mercy Novena was given by Jesus himself to St. Faustina, beginning on Good Friday. This guide explains what it is, how to pray it step by step, and how to receive the extraordinary graces of Divine Mercy Sunday.
              </p>
            </header>
            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is the Divine Mercy Devotion?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-mercy-novena-guide">
                The Divine Mercy devotion was revealed by Jesus to St. Faustina Kowalska, a Polish nun, in a series of visions in the 1930s. Jesus asked her to spread trust in his mercy and to pray the Divine Mercy Chaplet. He also established Divine Mercy Sunday — the first Sunday after Easter — as a special day of grace. The devotion was approved by the Church and promoted by Pope John Paul II, who canonized St. Faustina in 2000 and established Divine Mercy Sunday for the universal Church.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is the Divine Mercy Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-mercy-novena-guide">
                The Divine Mercy Novena is a nine-day prayer that Jesus himself asked St. Faustina to pray, beginning on Good Friday and ending on the Saturday before Divine Mercy Sunday. Each day, Jesus gave St. Faustina a different group of souls to pray for — sinners, priests, devout souls, unbelievers, and others. It is one of the few novenas with a specific starting date given by Jesus himself.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray the Divine Mercy Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-mercy-novena-guide">
                Jesus promised extraordinary graces to those who pray the Divine Mercy Novena with trust. He told St. Faustina: "By this novena, I will grant every possible grace to souls." The novena is prayed for the conversion of sinners, for priests and religious, for those who do not yet believe, for the dying, and for all souls in need of God's mercy. It is especially powerful when prayed in the nine days before Divine Mercy Sunday.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and trust in God's mercy."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Divine Mercy Novena — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Begin on Good Friday.</strong> The traditional starting date is Good Friday, so the novena ends on the Saturday before Divine Mercy Sunday. However, it can be prayed at any time of year.
                </li>
                <li>
                  <strong>Each day has a different intention.</strong> Jesus gave St. Faustina a specific group of souls to pray for each day — from sinners on Day 1 to all souls on Day 9. Pray with that intention in mind.
                </li>
                <li>
                  <strong>Pray the Divine Mercy Chaplet each day.</strong> The chaplet is the heart of the novena. It takes about 15 minutes and is prayed on rosary beads.
                </li>
                <li>
                  <strong>Pray at 3:00 PM if possible.</strong> Jesus called 3:00 PM the "Hour of Mercy" — the hour of his death on the cross. Praying the chaplet at this hour brings special graces.
                </li>
                <li>
                  <strong>Pray the full novena online.</strong> The complete Divine Mercy Novena — with the prayer text for all nine days — is available at{" "}
                  <a href="https://catholicbibleonline.com/novenas/divine-mercy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. This free resource guides you through each day with the full prayer text.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Divine Mercy Chaplet — Key Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  "Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world. For the sake of His sorrowful Passion, have mercy on us and on the whole world."
                </p>
                <p className="text-text-muted text-sm mt-3">
                  The chaplet is prayed on rosary beads and takes about 15 minutes. It is the heart of the Divine Mercy Novena.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Divine Mercy Sunday</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-mercy-novena-guide">
                Divine Mercy Sunday is the first Sunday after Easter — the culmination of the novena. Jesus promised St. Faustina: "Whoever approaches the Fount of Life on this day will be granted complete forgiveness of sins and punishment." To receive this grace, a person must go to Confession (within a reasonable time before or after), receive Holy Communion on Divine Mercy Sunday, and trust completely in God's mercy. It is one of the greatest graces available in the entire liturgical year.
              </LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-mercy-novena-guide">
                Ready to begin? The complete Divine Mercy Novena — with the full prayer text for all nine days — is available for free at{" "}
                <a href="https://catholicbibleonline.com/novenas/divine-mercy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2 font-semibold">Catholic Bible Online</a>. You can pray it directly on the site, day by day, with no registration required. Jesus, I trust in You.
              </LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "When does the Divine Mercy Novena begin?", answer: "The Divine Mercy Novena traditionally begins on Good Friday and ends on the Saturday before Divine Mercy Sunday (the first Sunday after Easter). However, it can be prayed at any time of year." },
              { question: "What is Divine Mercy Sunday?", answer: "Divine Mercy Sunday is the first Sunday after Easter. Jesus promised St. Faustina that whoever receives Holy Communion on this day with trust in his mercy will receive complete forgiveness of sins and punishment. To receive this grace, you must also go to Confession within a reasonable time." },
              { question: "What is the Hour of Mercy?", answer: "The Hour of Mercy is 3:00 PM — the hour of Jesus's death on the cross. Jesus asked St. Faustina to pray the Divine Mercy Chaplet at this hour, promising special graces to those who do so with trust in his mercy." },
              { question: "How long does the Divine Mercy Chaplet take to pray?", answer: "The Divine Mercy Chaplet takes about 15 minutes to pray. It is prayed on rosary beads and is the heart of the Divine Mercy Novena. Each day of the novena, you pray the chaplet with a specific intention given by Jesus to St. Faustina." },
              { question: "Where can I find the full Divine Mercy Novena prayer text?", answer: "The complete Divine Mercy Novena with the full prayer text for all nine days is available for free at Catholic Bible Online (catholicbibleonline.com/novenas/divine-mercy/). You can pray it directly on the site, day by day, with no registration required." },
            ]} />

            <RelatedArticles currentSlug="divine-mercy-novena-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic prayer and trust in God's mercy.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
