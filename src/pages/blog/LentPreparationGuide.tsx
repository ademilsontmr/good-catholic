import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Cross, Flame, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function LentPreparationGuide() {
  return (
    <>
      <Helmet>
        <title>Lent Preparation Guide: How to Make the Most of the Season | Guide Catholic</title>
        <meta name="description" content="Prepare for Lent with this complete guide. Learn how to choose sacrifices, deepen prayer, practice almsgiving, and make the 40 days a true spiritual transformation." />
        <meta name="keywords" content="Lent preparation, Lent guide, Lenten season, preparing for Lent, Lent sacrifices" />
        <link rel="canonical" href="https://guidecatholic.com/blog/lent-preparation-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Lent Preparation Guide: How to Make the Most of the Season"
          description="Prepare for Lent with this complete guide. Learn how to choose sacrifices, deepen prayer, practice almsgiving, and make the 40 days a true spiritual transformation."
          url="https://guidecatholic.com/blog/lent-preparation-guide/"
        />

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Lent Preparation Guide</span>
          </nav>

          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <Calendar className="w-4 h-4" />
              <span>Liturgical Year</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              Lent Preparation Guide: How to Make the Most of the Season
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              Lent is not just about giving up chocolate—it's about preparing our hearts for the central mystery of our faith: Christ's death and resurrection. Proper preparation helps transform these 40 days into a profound encounter with God's mercy.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Understanding the Lenten Season
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Lent spans 40 days (excluding Sundays) from Ash Wednesday to Holy Thursday, commemorating Christ's 40 days in the wilderness. The three pillars of Lent—prayer, fasting, and almsgiving—echo Jesus' teaching in the Sermon on the Mount (Matthew 6:1-18).
            </p>
            <p className="text-text leading-relaxed mb-6">
              The color purple, used during Lent, signifies penance, preparation, and royalty. The somber tone gradually gives way to anticipation as we approach the Triduum and Easter joy.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Preparing Before Lent Begins
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Choose Your Sacrifices Wisely
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Don't wait until Ash Wednesday morning to decide what to give up. Prayerfully consider:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>What detracts from your relationship with God?</strong> Social media, excessive entertainment, gossip?</li>
              <li><strong>What would truly cost you something?</strong> Meaningful sacrifice bears spiritual fruit</li>
              <li><strong>What can you add rather than subtract?</strong> Daily Mass, Scripture reading, service to others</li>
              <li><strong>Is your sacrifice sustainable?</strong> Better to commit to something manageable than to fail grandly</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Plan Your Prayer Life
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Lent without increased prayer is just dieting. Consider:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Daily Mass (even once or twice a week)</li>
              <li>The Stations of the Cross on Fridays</li>
              <li>Eucharistic adoration</li>
              <li>The Divine Mercy Chaplet at 3 PM</li>
              <li>Morning and Evening Prayer from the Liturgy of the Hours</li>
              <li>Spiritual reading (Imitation of Christ, writings of the saints)</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Three Pillars of Lent
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Prayer: Deepening Relationship with God
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Lenten prayer should include both penitential elements and intimacy with God. The Church offers special Lenten prayers and liturgies. Make time for silent prayer—allow God to speak to your heart. Consider a weekend retreat if possible.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Fasting: Discipline for Freedom
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Fasting teaches us that we are not slaves to our desires. The Church requires fasting on Ash Wednesday and Good Friday (ages 18-59) and abstinence from meat on Fridays. But consider going beyond the minimum—perhaps fasting from complaining, criticism, or anxiety.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Almsgiving: Love in Action
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Almsgiving frees us from attachment to material things while serving those in need. Options include:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Traditional charity donations (Lenten collection for the poor)</li>
              <li>Service to those in need (soup kitchens, visiting the sick)</li>
              <li>Sacrificial giving (money saved from fasting given to charity)</li>
              <li>Acts of service within your family and community</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Special Lenten Practices
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Stations of the Cross
            </h3>
            <p className="text-text leading-relaxed mb-6">
              This devotional practice, typically done on Fridays, meditates on Christ's passion. Walk the 14 stations, either at church or at home, entering into the mystery of Christ's suffering for our salvation.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Sacrament of Reconciliation
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Lent is the privileged time for confession. The Church encourages all Catholics to receive this sacrament during Lent to prepare for Easter. Many parishes offer penance services with multiple priests available.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Common Pitfalls to Avoid
            </h2>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Overcommitting:</strong> Taking on too much and abandoning everything by week two</li>
              <li><strong>Mechanical observance:</strong> Going through motions without interior conversion</li>
              <li><strong>Comparing yourself:</strong> Someone else's Lenten practice isn't yours</li>
              <li><strong>Neglecting joy:</strong> Sundays are always feast days—even in Lent</li>
              <li><strong>Quitting after failure:</strong> If you break your fast, begin again immediately</li>
            </ul>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
                {
                  question: "What are the official fasting rules for Lent?",
                  answer: "Catholics ages 18-59 must fast on Ash Wednesday and Good Friday (one full meal and two smaller meals, no snacking). All Catholics 14 and older must abstain from meat on Ash Wednesday, Good Friday, and all Fridays of Lent. These are minimum requirements—many choose to do more."
                },
                {
                  question: "Can I take breaks from my Lenten sacrifice on Sundays?",
                  answer: "Sundays are technically not part of Lent (they are always celebrations of the Resurrection). Traditionally, people maintain their sacrifices on Sundays but some choose to relax them. Neither approach is wrong. The key is maintaining the spirit of Lent while honoring the Lord's Day."
                },
                {
                  question: "What should I do if I fail to keep my Lenten resolution?",
                  answer: "Begin again immediately. Lenten observance is not about perfect execution but about conversion of heart. If you break your fast, missed a prayer time, or gave in to a bad habit, ask God's forgiveness and start over. The saints often had to begin again many times."
                },
                {
                  question: "Should children participate in Lent?",
                  answer: "Yes, adapted to their age. Children can give up sweets, say extra prayers, do kind deeds, or collect money for the poor. Make it positive and achievable. Teaching children Lenten discipline forms them in the faith. Family practices (like Stations of the Cross together) are especially valuable."
                }
              ]}
            />

            <RelatedArticles currentSlug="lent-preparation-guide" />
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
