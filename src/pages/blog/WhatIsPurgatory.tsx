import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cloud, Calendar, Clock, ArrowLeft, Flame, Sparkles, Ghost, Shield, Info, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function WhatIsPurgatory() {
  return (
    <>
      <Helmet>
        <title>What Is Purgatory? The Definitive Catholic Guide to Purification</title>
        <meta name="description" content="Discover the complete Catholic teaching on Purgatory. Explore biblical evidence, the 'fire' of divine love, the Museum of Souls, and how to help the poor souls." />
        <meta name="keywords" content="what is purgatory, purgatory catholic, is purgatory in the bible, catholic teaching purgatory, prayers for souls in purgatory, museum of souls purgatory, gregorian masses" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-purgatory/" />
      </Helmet>

      <ArticleSchema
        title="What Is Purgatory? The Definitive Catholic Guide to Purification"
        description="An expert exploration of Purgatory—the masterpiece of Divine Mercy. Learn about the theology, history, and practice of praying for the holy souls."
        url="https://guidecatholic.com/blog/what-is-purgatory/"
        datePublished="2026-04-16"
        author="Catholic Faith Guide Team"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "What Is Purgatory?", url: "https://guidecatholic.com/blog/what-is-purgatory/" },
        ]}
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
              <span className="text-text font-medium">What Is Purgatory?</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Doctrine
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is Purgatory? The Definitive Catholic Guide
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Purgatory is perhaps the most misunderstood "place" in the Catholic universe. Far from being a "mini-hell," it is the masterpiece of Divine Mercy—the final cleansing that ensures every soul entering Heaven is capable of loving God with 100% of its capacity.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Shield className="w-24 h-24 text-orange-400/20 absolute -bottom-4 -right-4" />
               <Flame className="w-32 h-32 text-orange-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The word "Purgatory" comes from the Latin <em>purgare</em>, meaning "to make clean." According to the <strong>Catechism of the Catholic Church (CCC 1030-1032)</strong>, all who die in God's grace and friendship, but still imperfectly purified, are indeed assured of their eternal salvation; but after death they undergo purification, so as to achieve the holiness necessary to enter the joy of heaven.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Think of Purgatory not as a prison, but as a <strong>spiritual shower</strong>. If you were invited to the wedding feast of the King of the Universe, and your clothes were stained with the dust of the road, you would naturally want to wash before entering the ballroom. Purgatory is God's gift of that "washing."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Theology of the 'Holy Fire'
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Many imagine Purgatory as a place of physical torture similar to Hell. However, the greatest mystics and theologians have a much more profound view. <strong>Saint Catherine of Genoa</strong>, in her <em>Treatise on Purgatory</em>, explains that the souls there actually experience an immense joy, because they know they are saved.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The suffering of Purgatory is primarily the <strong>"Pain of Loss"</strong> (<em>Poena Damni</em>). Because the soul has seen a glimpse of God at its particular judgment, it now longs for Him with an intensity we cannot imagine on earth. Any small attachment to sin—a petty grudge, a minor vanity, a lazy habit—acts as a barrier. The "fire" of Purgatory is the intense heat of that longing, burning away those earthly attachments.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Flame className="w-6 h-6 text-orange-600" />
                  Evidence in Rome: The Museum of Souls
                </h3>
                <p className="text-sm text-text-muted leading-relaxed italic">
                  In a small church in Rome (<em>Sacro Cuore di Gesù in Prati</em>), there exists the <strong>Museum of the Souls in Purgatory</strong>. It contains prayer books and tabletops marked with "fire-prints" — scorched handprints allegedly left by souls in Purgatory asking for prayers. These relics serve as a vivid reminder of the bond of charity between the living and the dead.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Scriptural Foundations
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-purgatory">
                While the word "Purgatory" isn't in the Bible, the concept is woven throughout Scripture:
              </LinkedText>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-10">
                <ul className="space-y-6 list-none pl-0 mt-0">
                  <li>
                    <strong className="text-text block mb-1">2 Maccabees 12:46:</strong>
                    <p className="text-sm text-text-muted italic">"It is therefore a holy and wholesome thought to pray for the dead, that they may be loosed from sins."</p>
                  </li>
                  <li>
                    <strong className="text-text block mb-1">1 Corinthians 3:15:</strong>
                    <p className="text-sm text-text-muted italic">St. Paul speaks of a person whose work is burnt up but who "will be saved, but only as through fire."</p>
                  </li>
                  <li>
                    <strong className="text-text block mb-1">Matthew 12:32:</strong>
                    <p className="text-sm text-text-muted italic">Jesus speaks of a sin that will not be forgiven "either in this age or in the age to come," implying some sins are forgiven in the next life.</p>
                  </li>
                </ul>
              </div>

              <QuizCTA
                title="Is your soul ready for the Feast?"
                description="Holiness is a journey that starts here. Take our assessment to identify the 'attachments' that might be holding you back from a deeper relationship with Christ."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. How to Help: The "Expert" Methods
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The souls in Purgatory are called "Poor Souls" or "Holy Souls." They are "poor" because they can no longer help themselves; their time of merit is over. They rely entirely on the <strong>Church Militant</strong> (us on earth).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-text mb-3">Gregorian Masses</h4>
                  <p className="text-sm text-text-muted leading-relaxed">A series of 30 consecutive Masses offered for one deceased person. This follows a vision given to Pope St. Gregory the Great, signaling a soul's release.</p>
                </div>
                <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-text mb-3">The Heroic Act of Charity</h4>
                  <p className="text-sm text-text-muted leading-relaxed">Offering to Mary all the satisfactory value of your works to be used for the souls in Purgatory—a radical act of intercessory love.</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Conclusion: A Masterpiece of Mercy
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Purgatory is the final insurance policy for Heaven. It ensures that <strong>nothing unclean enters the presence of God</strong> (Revelation 21:27), while also ensuring that those who fall short of perfection are not lost forever. It is a place of hope, not despair; a place of healing, not punishment.
              </p>
              <p className="text-text leading-relaxed mb-6">
                As <strong>St. John Vianney</strong> said: <em>"We must say many prayers for the souls of the faithful departed, for one must be so pure to enter heaven!"</em> Let us not forget our friends in the antechamber of Paradise.
              </p>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Do souls in Purgatory stay there forever?",
                answer: "No. Purgatory is temporary. At the end of time, after the General Judgment, Purgatory will cease to exist. Every soul in Purgatory will eventually enter Heaven. No one goes from Purgatory to Hell."
              },
              {
                question: "Is Purgatory a physical location with fire?",
                answer: "The Church does not dogmatically define Purgatory's location or the exact nature of its fire. Many theologians today view it as a 'spiritual encounter' with the cleansing love of God rather than a physical space."
              },
              {
                question: "Can I do my 'Purgatory' here on earth?",
                answer: "Yes! The saints teach that suffering endured with love on earth is far more 'meritorious' and efficient than the purification in Purgatory. Through prayer, penance, and acts of charity, we can satisfy the temporal punishment due to our sins now."
              },
              {
                question: "What is a 'Holy Soul'?",
                answer: "This is a common term for souls in Purgatory. They are 'holy' because they are confirmed in grace and will definitely see God. They can no longer sin, and they love God perfectly, even as they are purified."
              }
            ]} />

<RelatedArticles currentSlug="what-is-purgatory" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Prepare Your Soul
              </h3>
              <p className="text-text-muted mb-6">
                Don't wait for the next life to start your transformation. Take our assessment and discover how to live a life of holiness today.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start the Faith Quiz
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
