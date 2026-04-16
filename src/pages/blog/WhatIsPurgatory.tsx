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
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-6">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Doctrine
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4" />
                  Updated April 16, 2026
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4" />
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 leading-tight text-balance">
                What Is Purgatory? The <span className="text-accent italic">Expert Guide</span> to the Antechamber of Heaven
              </h1>

              <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light italic border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-xl">
                Purgatory is perhaps the most misunderstood "place" in the Catholic universe. Far from being a "mini-hell," it is the masterpiece of Divine Mercy—the final cleansing that ensures every soul entering Heaven is capable of loving God with 100% of its capacity.
              </p>
            </header>

            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative aspect-[21/9] bg-white rounded-3xl flex flex-col items-center justify-center border border-border overflow-hidden p-8 text-center">
                <div className="flex items-center gap-4 mb-4">
                  <Flame className="w-16 h-16 text-orange-400 animate-pulse" strokeWidth={1} />
                  <Sparkles className="w-20 h-20 text-blue-400" strokeWidth={1} />
                </div>
                <h2 className="text-2xl font-display font-bold text-text">The Fire of Divine Love</h2>
                <p className="text-sm text-text-muted max-w-md italic">"He will be saved, but only as through fire." — 1 Corinthians 3:15</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-text prose-p:leading-relaxed prose-li:text-text prose-strong:text-accent-dark">
              <p>
                The word "Purgatory" comes from the Latin <em>purgare</em>, meaning "to make clean." According to the <strong>Catechism of the Catholic Church (CCC 1030-1032)</strong>, all who die in God's grace and friendship, but still imperfectly purified, are indeed assured of their eternal salvation; but after death they undergo purification, so as to achieve the holiness necessary to enter the joy of heaven.
              </p>
              
              <p>
                Think of Purgatory not as a prison, but as a <strong>spiritual shower</strong>. If you were invited to the wedding feast of the King of the Universe, and your clothes were stained with the dust of the road, you would naturally want to wash before entering the ballroom. Purgatory is God's gift of that "washing."
              </p>

              <h2 id="theology">1. The Theology of the "Holy Fire"</h2>
              <p>
                Many imagine Purgatory as a place of physical torture similar to Hell. However, the greatest mystics and theologians have a much more profound view. <strong>Saint Catherine of Genoa</strong>, in her <em>Treatise on Purgatory</em>, explains that the souls there actually experience an immense joy, because they know they are saved.
              </p>
              <p>
                The suffering of Purgatory is primarily the <strong>"Pain of Loss"</strong> (<em>Poena Damni</em>). Because the soul has seen a glimpse of God at its particular judgment, it now longs for Him with an intensity we cannot imagine on earth. Any small attachment to sin—a petty grudge, a minor vanity, a lazy habit—acts as a barrier. The "fire" of Purgatory is the intense heat of that longing, burning away those earthly attachments.
              </p>

              <div className="my-12 bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden not-prose">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Ghost className="w-8 h-8 text-blue-400" /> Evidence in Rome: The Museum of Souls
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    In a small church in Rome (<em>Sacro Cuore di Gesù in Prati</em>), there exists the <strong>Museum of the Souls in Purgatory</strong>. It contains artifacts that suggest Purgatory is a very tangible reality for the souls who inhabit it.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                      <p className="text-sm text-slate-400"><span className="text-white font-bold">The Burnt Handprints:</span> Prayer books and tabletops with literal burnt outlines of hands, allegedly left by souls appearing to relatives to ask for Masses.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                      <p className="text-sm text-slate-400"><span className="text-white font-bold">The Purpose:</span> These relics serve as a mercy from God, reminding us that our prayers are effective and necessary.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 id="scripture">2. Scriptural Foundations: Is it in the Bible?</h2>
              <p>
                While the word "Purgatory" isn't in the Bible, the <strong>concept</strong> is woven throughout both Testaments.
              </p>
              <ul className="space-y-6 list-none pl-0">
                <li className="bg-background-muted p-6 rounded-2xl border border-border">
                  <span className="font-bold text-accent block text-xl mb-2">2 Maccabees 12:46</span>
                  <p className="text-text leading-relaxed"><em>"It is a holy and wholesome thought to pray for the dead, that they may be loosed from sins."</em> This is the "smoking gun." If everyone went immediately to Heaven or Hell, prayer for the dead would be either unnecessary or useless. There must be a middle state where our prayers help.</p>
                </li>
                <li className="bg-background-muted p-6 rounded-2xl border border-border">
                  <span className="font-bold text-accent block text-xl mb-2">1 Corinthians 3:15</span>
                  <p className="text-text leading-relaxed">St. Paul speaks of a person whose work is burnt up but who <em>"will be saved, but only as through fire."</em> This refers to the purification of a soul whose foundation is Christ but whose "superstructure" was flawed.</p>
                </li>
                <li className="bg-background-muted p-6 rounded-2xl border border-border">
                  <span className="font-bold text-accent block text-xl mb-2">Matthew 12:32</span>
                  <p className="text-text leading-relaxed">Jesus speaks of a sin that will not be forgiven <em>"either in this age or in the age to come."</em> This strongly implies that some sins *can* be forgiven in the next life — a process that happens in Purgatory.</p>
                </li>
              </ul>

              <QuizCTA
                title="How would you stand at the Judgment?"
                description="We can begin our purification here on earth through love and penance. Take our quiz to evaluate your current spiritual journey."
              />

              <h2 id="helping">3. How to Help: The "Expert" Methods</h2>
              <p>
                The souls in Purgatory are called "Poor Souls" or "Holy Souls." They are "poor" because they can no longer help themselves; their time of merit is over. They rely entirely on the <strong>Church Militant</strong> (us on earth).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
                  <h4 className="font-bold text-accent-dark mb-2">Gregorian Masses</h4>
                  <p className="text-sm text-text-muted">A series of 30 consecutive Masses offered for one deceased person. This follows a vision given to Pope St. Gregory the Great, signaling a soul's release.</p>
                </div>
                <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
                  <h4 className="font-bold text-accent-dark mb-2">The Heroic Act of Charity</h4>
                  <p className="text-sm text-text-muted">Offering to Mary all the satisfactory value of your works to be used for the souls in Purgatory—a radical act of intercessory love.</p>
                </div>
              </div>

              <h2 id="summary">Conclusion: A Masterpiece of Mercy</h2>
              <p>
                Purgatory is the final insurance policy for Heaven. It ensures that <strong>nothing unclean enters the presence of God</strong> (Revelation 21:27), while also ensuring that those who fall short of perfection are not lost forever. It is a place of hope, not despair; a place of healing, not punishment.
              </p>
              <p>
                As <strong>St. John Vianney</strong> said: <em>"We must say many prayers for the souls of the faithful departed, for one must be so pure to enter heaven!"</em> Let us not forget our friends in the antechamber of Paradise.
              </p>
            </div>

            <RelatedArticles currentSlug="what-is-purgatory" />

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

            <div className="mt-16 p-10 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2rem] text-center text-white shadow-2xl">
              <h3 className="font-display text-4xl font-bold mb-6">Prepare Your Soul</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-light">
                Don't wait for the next life to start your transformation. Take our assessment and discover how to live a life of holiness today.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-12 py-8 text-lg font-bold transition-all hover:scale-105 active:scale-95">
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
