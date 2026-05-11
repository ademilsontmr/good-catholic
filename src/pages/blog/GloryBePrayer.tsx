import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function GloryBePrayer() {
  return (
    <>
      <Helmet>
        <title>Glory Be Prayer: Full Text, Meaning and When to Pray It | Guide Catholic</title>
        <meta name="description" content="The Glory Be prayer with full Catholic text, meaning, biblical roots, and how to pray this short doxology in the Rosary, novenas, and daily prayer." />
        <meta name="keywords" content="glory be prayer, glory be full text, glory be catholic prayer, doxology prayer, glory be to the father, rosary prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/glory-be-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Glory Be Prayer: Full Text, Meaning and When to Pray It"
        description="The Glory Be prayer with full Catholic text, meaning, biblical roots, and how to pray this short doxology in the Rosary, novenas, and daily prayer."
        url="https://guidecatholic.com/blog/glory-be-prayer/"
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
              <span className="text-text">Glory Be Prayer</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Glory Be Prayer: Full Text, Meaning and When to Pray It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Glory Be is one of the shortest Catholic prayers, but it contains the whole Christian act of praise: worship of the Father, Son, and Holy Spirit.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Sparkles className="w-24 h-24 text-purple-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Glory Be Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="glory-be-prayer">
                The Glory Be is also called the lesser doxology. A doxology is a prayer of praise. Catholics pray it at the end of decades of the Rosary, during novenas, in the Liturgy of the Hours, and as a simple way to turn the heart back to God during the day.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Does the Glory Be Mean?</h2>
              <p className="text-text leading-relaxed mb-6">
                The prayer gives glory to the Holy Trinity. It names the Father, the Son, and the Holy Spirit, then confesses that God's glory is eternal. God was worthy of praise "in the beginning," is worthy now, and will be worthy forever.
              </p>
              <p className="text-text leading-relaxed mb-6">
                This makes the Glory Be a compact summary of Catholic worship. Prayer is not only asking for help. It is also adoration, thanksgiving, and praise.
              </p>

              <QuizCTA
                title="Do you want a stronger prayer routine?"
                description="Take the Catholic life assessment and receive practical next steps for daily prayer and spiritual growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Do Catholics Pray the Glory Be?</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>After each decade of the Rosary.</li>
                <li>At the end of many novenas and chaplets.</li>
                <li>During morning, evening, and night prayer.</li>
                <li>After receiving a grace or answered prayer.</li>
                <li>Whenever you want to praise the Holy Trinity.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Glory Be Well</h2>
              <p className="text-text leading-relaxed mb-6">
                Because the Glory Be is short, it is easy to rush. Pray it slowly. Pause after each Person of the Trinity. Let the words "as it was in the beginning" remind you that God is not temporary, unstable, or limited by the troubles of the present moment.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Glory Be in the Rosary</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="glory-be-prayer">
                In the Rosary, each decade ends with the Glory Be. After meditating on a mystery of Christ's life, Catholics respond with praise. This keeps the Rosary centered on God, even while asking for Mary's intercession.
              </LinkedText>
            </div>

            <BlogFAQ faqs={[
              { question: "Is the Glory Be a Catholic prayer?", answer: "Yes. The Glory Be is a traditional Catholic doxology, but its praise of the Trinity is shared by many Christians." },
              { question: "What is a doxology?", answer: "A doxology is a short prayer of praise to God. The Glory Be is called the lesser doxology because it gives direct praise to the Father, Son, and Holy Spirit." },
              { question: "When is the Glory Be prayed in the Rosary?", answer: "It is prayed after the ten Hail Marys in each decade of the Rosary, before the Fatima Prayer if that prayer is included." },
              { question: "Can I pray the Glory Be by itself?", answer: "Yes. It can be prayed alone anytime as a brief act of adoration, gratitude, and praise." },
            ]} />

            <RelatedArticles currentSlug="glory-be-prayer" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Grow in Catholic Prayer</h3>
              <p className="text-text-muted mb-6">Receive a personalized guide for building a deeper daily prayer life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
