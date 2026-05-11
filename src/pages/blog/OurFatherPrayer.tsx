import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function OurFatherPrayer() {
  return (
    <>
      <Helmet>
        <title>Our Father Prayer: Full Text, Meaning and Catholic Guide | Guide Catholic</title>
        <meta name="description" content="The Our Father prayer with full text, biblical meaning, the seven petitions, and a Catholic guide to praying the Lord's Prayer with devotion." />
        <meta name="keywords" content="our father prayer, lord's prayer, our father full text, catholic our father, how to pray the our father, our father meaning" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-father-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Our Father Prayer: Full Text, Meaning and Catholic Guide"
        description="The Our Father prayer with full text, biblical meaning, the seven petitions, and a Catholic guide to praying the Lord's Prayer with devotion."
        url="https://guidecatholic.com/blog/our-father-prayer/"
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
              <span className="text-text">Our Father Prayer</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Our Father Prayer: Full Text, Meaning and Catholic Guide
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Our Father, also called the Lord's Prayer, is the prayer Jesus himself taught. It is the model of every Christian prayer and the heart of Catholic worship.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Our Father Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">
                Catholics pray the Our Father at every Mass, in the Rosary, in the Liturgy of the Hours, and in daily personal prayer. It is called "the Lord's Prayer" because the Lord Jesus gave it to his disciples.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where Is the Our Father in the Bible?</h2>
              <p className="text-text leading-relaxed mb-6">
                The Our Father appears in Matthew 6:9-13 and Luke 11:2-4. In Matthew, Jesus teaches it during the Sermon on the Mount. In Luke, the disciples ask him, "Lord, teach us to pray."
              </p>
              <p className="text-text leading-relaxed mb-6">
                The prayer is both simple and inexhaustible. It teaches us to approach God as Father, seek his glory, desire his kingdom, trust him for daily needs, forgive others, and ask for protection from sin and evil.
              </p>

              <QuizCTA
                title="Want to pray with more confidence?"
                description="Take the Catholic faith assessment and receive personalized next steps for your prayer life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Petitions of the Our Father</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Hallowed be thy name:</strong> may God's name be honored as holy.</li>
                <li><strong>Thy kingdom come:</strong> may God's reign grow in us and in the world.</li>
                <li><strong>Thy will be done:</strong> may we obey God with trust.</li>
                <li><strong>Give us this day our daily bread:</strong> provide what we need, above all the Eucharist.</li>
                <li><strong>Forgive us our trespasses:</strong> pardon our sins.</li>
                <li><strong>As we forgive:</strong> make us merciful toward others.</li>
                <li><strong>Deliver us from evil:</strong> protect us from sin, temptation, and the evil one.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Say "Trespasses"</h2>
              <p className="text-text leading-relaxed mb-6">
                Different Christian traditions use "trespasses," "debts," or "sins." Catholics commonly use "trespasses" in liturgical and devotional English. The meaning is the same: we ask God to forgive our offenses and help us forgive those who have wronged us.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Our Father Slowly</h2>
              <p className="text-text leading-relaxed mb-6">
                Try praying one line at a time. Pause after "Our Father" and remember that God is not distant. Pause after "thy will be done" and surrender a concrete concern. Pause after "forgive us" and name where you need mercy.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "Who wrote the Our Father?", answer: "Jesus himself taught the Our Father to his disciples, which is why it is also called the Lord's Prayer." },
              { question: "Is the Our Father Catholic?", answer: "The Our Father belongs to all Christians, but it has a central place in Catholic Mass, the Rosary, the Liturgy of the Hours, and sacramental prayer." },
              { question: "Why is the Our Father prayed at Mass?", answer: "It prepares the faithful for Communion by asking for daily bread, forgiveness, unity, and deliverance from evil." },
              { question: "Can I pray the Our Father every day?", answer: "Yes. Catholics are encouraged to pray it daily, slowly and with attention, because it is the model prayer given by Christ." },
            ]} />

            <RelatedArticles currentSlug="our-father-prayer" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Build a Life of Prayer</h3>
              <p className="text-text-muted mb-6">Get a personalized plan for growing in Catholic prayer and discipleship.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
