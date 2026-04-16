import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Calendar, Clock, ArrowLeft, Shield, Sparkles, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function WhyPrayToSaints() {
  return (
    <>
      <Helmet>
        <title>Why Pray to Saints? The Expert Theological Defense | Guide Catholic</title>
        <meta name="description" content="Discover the biblical and historical reasons Catholics ask saints for intercession. Learn about the Communion of Saints, Relics, and the One Mediator." />
        <meta name="keywords" content="why pray to saints catholic defense, intercession of saints bible verses, praying to deceased saints necromancy response, communion of saints theory, relics of saints biblical basis" />
        <link rel="canonical" href="https://guidecatholic.com/blog/why-do-catholics-pray-to-saints/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Why Do Catholics Pray to Saints? Not Worship — Intercession Explained"
        description="Why do Catholics pray to saints? Learn the difference between worship and intercession, the biblical basis for asking saints to pray for us, and how the Communion of Saints works."
        url="https://guidecatholic.com/blog/why-do-catholics-pray-to-saints/"
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
              <span className="text-text">Why Do Catholics Pray to Saints?</span>
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
                  26 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Science of Intercession: Why the Saints are Not "Dead"
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Why pray to a saint when you can pray to God?" This question assumes that God is a jealous accountant who only has enough time for one conversation. The Catholic view is different: God is a Father who delights in His family caring for one another. To pray with a saint is not to bypass God, but to enter His throne room with a friend.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Star className="w-24 h-24 text-amber-400/20 absolute -bottom-4 -right-4" />
               <Users className="w-32 h-32 text-amber-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The practice of <strong>Intercession</strong> is rooted in the belief that the Body of Christ is not severed by death. As St. Paul teaches in 1 Corinthians 12, "If one member suffers, all suffer together." This doesn't stop just because someone has moved from earth to Heaven.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The One Mediator and Participated Mediation
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Skeptics cite <strong>1 Timothy 2:5</strong>: "There is one mediator between God and men, Christ Jesus." Catholics agree. Christ is the *source* of all mediation. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                However, just as Christ is the "One Teacher" yet he appoints human teachers, and Christ is the "One Shepherd" yet he appoints human shepherds, His unique mediation is <strong>shared</strong> with His members. When you ask a friend on earth to pray for you, you are using a human mediator. Asking a saint in Heaven is simply doing the same with a friend who has a better "signal."
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Shield className="w-6 h-6 text-amber-600" />
                  Evidence from Revelation
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">Is there proof that saints hear and care?</p>
                <ul className="list-disc list-inside text-text space-y-3 text-sm">
                  <li><strong>Revelation 5:8:</strong> The Elders in Heaven hold golden bowls of incense, which are explicitly called "the prayers of the saints." This proves the saints in Heaven are actively aware of our petitions.</li>
                  <li><strong>Revelation 6:9-10:</strong> The martyrs under the altar cry out for justice on earth. They are not in a "soul sleep"; they are conscious, emotional, and concerned with our timeline.</li>
                  <li><strong>Hebrews 12:1:</strong> We are surrounded by a "Great Cloud of Witnesses." In a stadium, witnesses don't just sit there—they cheer and intercede for the runners.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. The Mystery of Relics: Why Touch Bones?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Critics often find the Catholic devotion to "relics" (physical remains of saints) bizarre or macabre. However, this is deeply biblical. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                In <strong>2 Kings 13:21</strong>, a dead man is thrown into the grave of the prophet Elisha. As soon as his body touches Elisha's bones, the man comes back to life. In the New Testament (<strong>Acts 19:12</strong>), handkerchiefs that simply touched St. Paul's skin were taken to the sick, and they were healed. God often uses physical matter as a conduit for His spiritual grace.
              </p>

              <QuizCTA
                title="Who are your heavenly advocates?"
                description="The saints are eager to help, but we must invite them. Take our quiz to find which patron saint is best suited for your current season of life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 Patronage: Friends for Every Occasion
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Why have "specialties"? St. Joseph for homes, St. Peregrine for cancer, St. Rita for impossible cases? This is not superstition. It is based on the idea that saints understand our struggles because they lived them. A saint who died of cancer has a "special compassion" for those suffering now. It is the family of God at work.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "I want to spend my heaven doing good on earth." — St. Therese of Lisieux
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="why-do-catholics-pray-to-saints" />

            <BlogFAQ faqs={[
              {
                question: "Is this necromancy (talking to the dead)?",
                answer: "No. Necromancy is the attempt to summon spirits for divination or occult knowledge. Seeking intercession is simply asking a living member of the Body of Christ to pray. Jesus said God is 'not the God of the dead, but of the living' (Matthew 22:32). The saints are alive in Christ."
              },
              {
                question: "How can one saint hear millions of people at once?",
                answer: "Saints are not in time or space. They participate in the 'knowledge of God.' Just as God is not limited by time, He allows the saints to perceive our prayers through the light of His own divinity. It's like being on a heavenly internet powered by the Holy Spirit."
              },
              {
                question: "Wait, so I don't have to pray to God directly?",
                answer: "Of course you should pray to God directly! The Mass, the highest prayer, is directed to the Father. Asking a saint to pray for you is an 'and,' not an 'instead of.' It's like a child asking both their father and their older brother for help with a problem."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Strengthen Your Heavenly Connection
              </h3>
              <p className="text-text-muted mb-6">
                You don't have to walk the spiritual path alone. Take our quiz to discover the saints who are waiting to intercede for you.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Faith Quiz
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
