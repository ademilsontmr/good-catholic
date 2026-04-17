import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Church, Calendar, Clock, ArrowLeft, Sun, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function EucharisticPrayers() {
  return (
    <>
      <Helmet>
        <title>Eucharistic Prayers and Adoration: A Complete Guide | Guide Catholic</title>
        <meta name="description" content="Discover Eucharistic prayers, Holy Hour devotion, and the practice of adoration. Learn how to pray before the Blessed Sacrament and encounter Christ's Real Presence." />
        <meta name="keywords" content="Eucharistic prayers, adoration, Holy Hour, Blessed Sacrament, Eucharistic adoration, praying before Jesus" />
        <link rel="canonical" href="https://guidecatholic.com/blog/eucharistic-prayers/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Eucharistic Prayers and Adoration: A Complete Guide"
          description="Discover Eucharistic prayers, Holy Hour devotion, and the practice of adoration. Learn how to pray before the Blessed Sacrament and encounter Christ's Real Presence."
          url="https://guidecatholic.com/blog/eucharistic-prayers/"
        />

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Eucharistic Prayers</span>
          </nav>

          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <Church className="w-4 h-4" />
              <span>Liturgy & Worship</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              Eucharistic Prayers and Adoration: A Complete Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>13 min read</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              The Eucharist is the source and summit of Catholic life. Beyond receiving Holy Communion at Mass, Catholics can encounter Christ's Real Presence through Eucharistic adoration—a practice that transforms souls and has sustained the Church for two millennia.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Understanding Eucharistic Adoration
            </h2>
            <p className="text-text leading-relaxed mb-6">
              In Eucharistic adoration, the consecrated Host is displayed in a monstrance on the altar, allowing the faithful to pray in the presence of Christ's Body, Blood, Soul, and Divinity. The practice flows from belief in the Real Presence—Jesus is truly, substantially present under the appearances of bread.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Tradition of the Holy Hour
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Holy Hour—a full hour spent in Eucharistic adoration—derives from Jesus' words in Gethsemane: "Could you not keep watch with me for one hour?" (Matthew 26:40). During His agony, Jesus asked His disciples to watch and pray with Him. The Holy Hour responds to this invitation extended across time.
            </p>
            <p className="text-text leading-relaxed mb-6">
              St. Margaret Mary Alacoque, who promoted devotion to the Sacred Heart, was asked by Jesus to spend a Holy Hour every Thursday night meditating on His agony. Many saints, including St. Josemaría Escrivá and Mother Teresa, made the Holy Hour a cornerstone of their spiritual lives.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              What to Do During Adoration
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Prayer of Adoration
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The fundamental attitude in adoration is simply to be present to Christ. Adoration is not about doing many things but about being with the One who loves us. Gaze upon the Host and remember: Jesus sees you, knows you, and loves you infinitely.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Pray the Rosary
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The Rosary flows naturally in the presence of the Eucharist. The mysteries of Christ's life, death, and resurrection are all oriented toward the Eucharistic sacrifice. Many find their meditation deepened profoundly while praying the Rosary before the Blessed Sacrament.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Read Scripture
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The Gospel comes alive in the presence of the Word Made Flesh. Read slowly, allowing the sacred text to penetrate your heart. The Emmaus story (Luke 24) is particularly powerful—Jesus revealed Himself in the breaking of bread.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Silent Contemplation
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Much of adoration should be silent simply resting in Christ's presence. Bring your worries, your hopes, your loved ones, your sins—and lay them before Jesus. Listen in the silence. Sometimes God speaks in words; more often, He speaks in peace.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Powerful Eucharistic Prayers
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Prayer of St. John Vianney
            </h3>
            <p className="text-text leading-relaxed mb-6 italic bg-accent/10 p-4 rounded-lg">
              "I adore You, my God, who are truly present in the Blessed Sacrament of the altar. I love You with my whole heart and I humbly ask You to forgive all my sins. I thank You for the love with which You have surrounded me, for the protection with which You have guarded me, for the graces with which You have covered me. I praise You and bless You, and I abandon myself entirely into Your hands."
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Prayer of St. Alphonsus Liguori
            </h3>
            <p className="text-text leading-relaxed mb-6 italic bg-accent/10 p-4 rounded-lg">
              "My Lord Jesus Christ, who for the love You bear to mankind, remain night and day in this sacrament, full of mercy and love, awaiting, calling, and welcoming all who come to visit You—I believe that You are present in the Most Holy Sacrament. I adore You from the abyss of my nothingness, and I thank You for all the graces You have bestowed upon me."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Personal Benefits of Adoration
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Regular adoration transforms lives. Those who commit to weekly adoration report:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Increased peace and decreased anxiety</li>
              <li>Greater clarity in decision-making</li>
              <li>Healing from past wounds</li>
              <li>Strength to overcome sin</li>
              <li>Deepening of faith and love for God</li>
              <li>Graces for their families and vocations</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Finding Eucharistic Adoration
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Most parishes offer some form of Eucharistic adoration. Common schedules include:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>First Friday devotions (24 hours or overnight)</li>
              <li>Weekly Holy Hours</li>
              <li>Perpetual adoration chapels (24/7)</li>
              <li>Adoration before or after daily Mass</li>
            </ul>
            <p className="text-text leading-relaxed mb-6">
              Check your parish bulletin or website for adoration times. If your parish doesn't offer it, ask your pastor—many are eager to begin if they know there's interest.
            </p>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
                {
                  question: "What should I wear to Eucharistic adoration?",
                  answer: "Dress modestly and respectfully, as you would for Mass. Silent, reverent behavior is appropriate. Turn off cell phones. Some people genuflect before entering the pew, others bow. Follow the customs of the particular church. The focus should be on encountering Christ, not on elaborate rituals."
                },
                {
                  question: "Do I have to pray for the whole hour?",
                  answer: "Not necessarily. Some people pray the Rosary, read Scripture, journal, or simply sit in silence. The goal is to be with Jesus. If you can only stay 15 minutes, that is better than nothing. Many parishes have sign-up sheets to ensure the Blessed Sacrament is never left alone during exposition."
                },
                {
                  question: "Can non-Catholics attend adoration?",
                  answer: "Yes, all are welcome to pray before the Blessed Sacrament. Non-Catholics cannot receive Holy Communion, but they can participate in adoration, which is a prayer of presence rather than reception. Many converts to Catholicism trace their conversion to encountering Christ in Eucharistic adoration."
                },
                {
                  question: "What if I don't feel anything during adoration?",
                  answer: "Feelings are not necessary for effective prayer. Christ is present objectively whether you feel Him or not. Many saints experienced long periods of spiritual dryness in adoration. Continue showing up out of love and fidelity. The graces flow even when they are not perceived."
                }
              ]}
            />

            <RelatedArticles currentSlug="eucharistic-prayers" />
          </div>

          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link to="/blog/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
