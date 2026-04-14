import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function MorningOfferingPrayer() {
  return (
    <>
      <Helmet>
        <title>Morning Offering Prayer: How to Start Your Day with God | Guide Catholic</title>
        <meta name="description" content="Learn the Catholic Morning Offering prayer and how to consecrate your entire day to God. Discover different versions, the history, and practical tips for making this powerful prayer a daily habit." />
        <meta name="keywords" content="morning offering prayer, catholic morning prayer, morning offering catholic, start day with prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/morning-offering-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Morning Offering Prayer</span>
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
                  Prayers
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Morning Offering Prayer: How to Start Your Day with God
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Morning Offering is a simple yet profound prayer that consecrates your entire day — every joy, suffering, work, and prayer — to God. It transforms ordinary life into an act of worship.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Imagine waking up each morning and, before checking your phone or making coffee, offering your entire day to God. Every meeting, every frustration, every moment of joy — all of it given to Him as a gift. This is the essence of the Morning Offering, one of the most practical and transformative prayers in the Catholic tradition.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Morning Offering has been prayed by saints, popes, and ordinary Catholics for centuries. It is the prayer that turns a Monday morning commute into an act of worship, a difficult conversation into a sacrifice united with Christ's Cross, and a moment of joy into a hymn of thanksgiving. When you begin your day with this prayer, you don't just add a religious moment to your schedule — you transform the entire day into a prayer.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Classic Morning Offering (Apostleship of Prayer)
              </h2>
              <p className="text-text leading-relaxed mb-4">
                The most widely used version of the Morning Offering in the United States comes from the Apostleship of Prayer, a Jesuit organization founded in 1844:
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text leading-relaxed italic">
                  O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians. I offer them for the intentions of our bishops and of all Apostles of Prayer, and in particular for those recommended by our Holy Father this month. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Simpler Version for Daily Use
              </h2>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <p className="text-text leading-relaxed italic">
                  O my God, I offer You all my thoughts, words, actions, and sufferings of this day. Grant that all I do may be for Your greater glory and the good of my neighbor. Amen.
                </p>
              </div>

              <QuizCTA
                title="Is prayer part of your daily routine?"
                description="Starting the day with God changes everything. Take our quiz and discover practical ways to build a consistent, meaningful prayer life as a Catholic."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The History of the Morning Offering
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The practice of offering one's day to God has roots in the earliest centuries of Christianity. The Desert Fathers and Mothers of the 3rd and 4th centuries began each day with prayer and the intention to offer all their activities to God. The monastic tradition formalized this through the Liturgy of the Hours, which sanctifies the entire day with prayer at fixed times.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The specific form of the Morning Offering as we know it today was developed by Father François-Xavier Gautrelet, SJ, in 1844 at the Jesuit scholasticate in Vals, France. He founded the Apostleship of Prayer to unite the prayers and sacrifices of ordinary Catholics with the intentions of the Pope and the universal Church. The Morning Offering became the central prayer of this movement.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pope Pius IX approved the Apostleship of Prayer in 1849, and subsequent popes have enthusiastically endorsed it. Today, the Apostleship of Prayer — now known as the Pope's Worldwide Prayer Network — has millions of members in over 90 countries, all united by the daily Morning Offering.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Does It Mean to "Offer" Your Day?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The theology behind the Morning Offering is rooted in the doctrine of the Mystical Body of Christ. St. Paul writes: "I urge you therefore, brothers, by the mercies of God, to offer your bodies as a living sacrifice, holy and pleasing to God, your spiritual worship" (Romans 12:1). Every baptized Catholic is united to Christ and can participate in His priestly offering.
              </p>
              <p className="text-text leading-relaxed mb-6">
                When you pray the Morning Offering, you are not just saying a prayer — you are making a priestly act. You are taking everything that will happen in your day and placing it on the altar of your heart, uniting it with the Holy Sacrifice of the Mass being offered around the world. Your morning commute, your work meetings, your family interactions, your moments of suffering — all of it becomes part of the one eternal offering of Christ to the Father.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Practical Tips for Making the Morning Offering a Daily Habit
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Pray It Immediately Upon Waking
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The most effective time to pray the Morning Offering is the very first moment of the day — before you check your phone, before you get out of bed. Keep a prayer card on your nightstand or set a reminder on your phone. The goal is to make it the first conscious act of your day.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Memorize a Short Version
              </h3>
              <p className="text-text leading-relaxed mb-6">
                You don't need to recite the full Apostleship of Prayer version every morning. A short, heartfelt offering — even just "Lord, I offer You this day" — is sufficient. The key is sincerity and consistency, not length.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Renew the Offering Throughout the Day
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Many saints recommend brief "renewal" prayers throughout the day — a simple "For You, Lord" before beginning a task, or "I offer this to You" when facing a difficulty. These brief moments keep the spirit of the Morning Offering alive throughout the day.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                4. Include Specific Intentions
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Personalize your Morning Offering by including specific intentions — a sick family member, a difficult situation at work, a friend who has left the faith. This makes the prayer more concrete and connects your daily life to the needs of those around you.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Morning Offering and the Pope's Monthly Intentions
              </h2>
              <p className="text-text leading-relaxed mb-6">
                One of the beautiful aspects of the Apostleship of Prayer version is its connection to the Pope's monthly prayer intentions. Each month, the Holy Father publishes a specific intention for the universal Church — for peace in a particular region, for the poor, for young people, for the environment. When you pray the Morning Offering, you unite your day with these intentions, becoming part of a global network of prayer.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "The Morning Offering is the most important prayer of the day, because it gives supernatural value to everything that follows."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — St. Josemaría Escrivá
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Begin each day by offering yourself to God. Ask Him to give you the grace to get through the day without offending Him."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — St. Francis de Sales
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="morning-offering-prayer" />

            <BlogFAQ faqs={[
              {
                question: "What is the Morning Offering?",
                answer: "The Morning Offering is a Catholic prayer prayed at the start of the day that consecrates all of one's prayers, works, joys, and sufferings to God, uniting them with the Holy Sacrifice of the Mass. It transforms ordinary daily activities into acts of worship and intercession."
              },
              {
                question: "Is there one official version of the Morning Offering?",
                answer: "No. While the Apostleship of Prayer version is the most widely known, any sincere prayer that offers your day to God is a valid Morning Offering. The Church encourages personal, heartfelt expressions of this offering."
              },
              {
                question: "What is the Apostleship of Prayer?",
                answer: "The Apostleship of Prayer (now called the Pope's Worldwide Prayer Network) is a Jesuit organization founded in 1844 that unites Catholics worldwide through the Morning Offering and the Pope's monthly prayer intentions. It has millions of members in over 90 countries."
              },
              {
                question: "Can children pray the Morning Offering?",
                answer: "Absolutely. Teaching children to pray the Morning Offering is one of the most valuable spiritual habits a parent can instill. A simple version — 'Lord, I offer You this day' — is perfect for young children, and can be expanded as they grow."
              },
              {
                question: "Does the Morning Offering have to be prayed in the morning?",
                answer: "Traditionally it is prayed first thing in the morning to consecrate the entire day. However, if you forget, you can pray it at any time. Some people also pray an 'Evening Offering' to consecrate the night. The important thing is the sincere intention to offer your life to God."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Quiz Now
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
