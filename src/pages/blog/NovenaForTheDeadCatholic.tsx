import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaForTheDeadCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena for the Dead: 9-Day Catholic Prayer for Souls in Purgatory | Guide Catholic</title>
        <meta name="description" content="Novena for the dead — 9-day Catholic prayer for souls in purgatory and deceased loved ones." />
        <meta name="keywords" content="novena for the dead, catholic prayer for deceased, novena souls purgatory" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-for-the-dead-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena for the Dead: 9-Day Catholic Prayer for Souls in Purgatory" description="Novena for the dead — 9-day Catholic prayer for souls in purgatory and deceased loved ones." url="https://guidecatholic.com/blog/novena-for-the-dead-catholic/" datePublished="2026-06-02" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena for the Dead</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 2, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena for the Dead: 9-Day Catholic Prayer for Souls in Purgatory</h1>
              <p className="text-xl text-text-muted leading-relaxed">When someone we love dies, Catholic faith does not end with goodbye. A novena for the dead is nine days of prayer offering spiritual help to souls being purified for heaven.</p>
            </header>
            <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center mb-10"><Moon className="w-24 h-24 text-gray-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-the-dead-catholic">Catholics believe in the communion of saints — the living, the saints in heaven, and the souls being purified in purgatory remain united in Christ. Praying for the dead is one of the spiritual works of mercy. A novena extends that prayer across nine consecutive days, a form rooted in the nine days the Apostles spent in prayer between the Ascension and Pentecost.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Pray for the Dead</h2>
              <p className="text-text leading-relaxed mb-6">The Catechism teaches that &quot;all who die in God&apos;s grace and friendship, but still imperfectly purified, are indeed assured of their eternal salvation; but after death they undergo purification, so as to achieve the holiness necessary to enter the joy of heaven&quot; (CCC 1030). Our prayers, Masses, and sacrifices can assist them.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-the-dead-catholic">November is the traditional month to pray for the dead in the United States, but novenas are offered year-round — especially after a funeral, on anniversaries of death, or during All Souls&apos; Day devotions.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray This Novena</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Choose nine consecutive days and set a consistent time.</li>
                <li>On day one, name the deceased person(s) you are praying for.</li>
                <li>Begin with the Sign of the Cross.</li>
                <li>Pray the daily text below, then add an Our Father, Hail Mary, and Glory Be.</li>
                <li>Offer a concrete sacrifice — fasting, almsgiving, or a work of mercy.</li>
                <li>Have a Mass offered for the deceased when possible.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer</h3>
                <p className="text-text italic leading-relaxed text-lg">
                  Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.<br /><br />
                  Merciful Father, I offer this novena for [name of deceased], and for all the faithful departed who have no one to pray for them. Through the Passion, death, and Resurrection of your Son, release them from every stain of sin and bring them into the fullness of your glory. Mary, Mother of Sorrows and Gate of Heaven, intercede for them. All you saints of God, pray for them. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Traditional Requiem Aeternam</h3>
                <p className="text-text italic leading-relaxed text-lg">
                  Eternal rest grant unto him/her/them, O Lord, and let perpetual light shine upon him/her/them. May he/she/they rest in peace. Amen.<br /><br />
                  May his/her/their soul and the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.
                </p>
              </div>

              <QuizCTA title="Grow in Catholic faith" description="Take the Catholic life assessment for personalized guidance on prayer, the sacraments, and daily living." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When American Catholics Pray This Novena</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>The nine days immediately following a funeral.</li>
                <li>All Souls&apos; Day (November 2) and the entire month of November.</li>
                <li>On the anniversary of a loved one&apos;s death.</li>
                <li>During bereavement when grief feels overwhelming.</li>
                <li>When visiting a cemetery — especially during the indulgence periods defined by the Church.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Works of Mercy That Accompany Prayer</h2>
              <p className="text-text leading-relaxed mb-6">Prayer for the dead is most powerful when joined to action. Have a Mass said at your parish (stipends are customary in the U.S.). Visit the grave, bring flowers, and maintain the plot. Give alms in the deceased person&apos;s name. Fast on one of the nine days.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-the-dead-catholic">Attending the funeral Mass and praying the Rosary for the deceased are also classic Catholic responses to loss. The novena does not replace the Church&apos;s funeral rites — it extends the community&apos;s prayer after burial.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Hope for Those Who Mourn</h2>
              <p className="text-text leading-relaxed mb-6">Praying for the dead is an act of love that also heals the living. It turns grief outward toward God and the soul of the departed. Even when we do not know a person&apos;s final state, we entrust them to divine mercy — the same mercy that saved the good thief on the cross in his final hour.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "What is a novena for the dead?", answer: "It is nine consecutive days of prayer offered for deceased persons, especially those in purgatory. Catholics believe these prayers assist souls being purified before entering heaven." },
              { question: "When should I start a novena after someone dies?", answer: "Many Catholics begin immediately after the funeral and pray for nine straight days. Others start on All Souls&apos; Day or the anniversary of death. Any nine consecutive days are valid." },
              { question: "Can a novena for the dead replace having a Mass said?", answer: "No. They complement each other. Having a Mass offered is one of the greatest helps for the deceased. The novena adds sustained daily prayer around that sacrifice." },
              { question: "Is purgatory still Catholic teaching?", answer: "Yes. The Catechism of the Catholic Church affirms purgatory as the final purification of the elect who die in God&apos;s grace but are not yet fully holy (CCC 1030–1032)." },
            ]} />
            <RelatedArticles currentSlug="novena-for-the-dead-catholic" />
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
