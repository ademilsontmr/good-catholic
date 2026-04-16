import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart, ShieldAlert, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function StationsOfTheCross() {
  return (
    <>
      <Helmet>
        <title>Stations of the Cross: The Expert Guide to the Way of Sorrows | Guide Catholic</title>
        <meta name="description" content="Discover the deep history of the Stations of the Cross. From the Via Dolorosa to the theology of the 14 stations, learn how this devotion heals the soul." />
        <meta name="keywords" content="stations of the cross guide, history of via crucis, franciscan stations of the cross, indult of 1731, stations of the cross plenary indulgence" />
        <link rel="canonical" href="https://guidecatholic.com/blog/stations-of-the-cross/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Stations of the Cross: A Complete Guide to This Powerful Catholic Devotion"
        description="Learn everything about the Stations of the Cross — history, the 14 traditional stations with meditations, and the theology of the Via Dolorosa."
        url="https://guidecatholic.com/blog/stations-of-the-cross/"
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
              <span className="text-text">Stations of the Cross</span>
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
                  Devotions & History
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  28 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Way of the Cross: A Spiritual Pilgrimage to Calvary
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "We adore You, O Christ, and we praise You, because by Your holy Cross You have redeemed the world." This prayer, penned by St. Francis of Assisi, is the heartbeat of the <strong>Via Crucis</strong>. More than a memory, the Stations are a "spiritual surgery" that allows the wounds of Christ to heal our own.
              </p>
            </header>

            <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <MapPin className="w-24 h-24 text-red-500/20 absolute -bottom-4 -right-4" />
               <Cross className="w-32 h-32 text-red-700 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                For those who cannot travel to Jerusalem to walk the <strong>Via Dolorosa</strong>, the Church has brought Jerusalem to us. The 14 stations are windows into the most important hours of human history.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The History: From Jerusalem to the Local Parish
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Early Christians in Jerusalem followed the "Sorrowful Way." However, it was the <strong>Franciscans</strong> who, starting in 1342, were given custody of the Holy Land. They realized that very few could afford the pilgrimage, so they began erecting stations in Europe.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In 1731, <strong>Pope Clement XII</strong> officially fixed the number of Stations at 14 and granted a Plenary Indulgence to all who pray them. This was a revolutionary move, democratizing the highest form of Passion meditation for every peasant and king alike.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <ShieldAlert className="w-6 h-6 text-red-700" />
                  The Theology of the Falls
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">Why did Jesus fall three times?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center">
                    <h4 className="font-bold text-red-900 mb-1">1st Fall</h4>
                    <p>Represents the fall of Adam (Old Creation).</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-red-900 mb-1">2nd Fall</h4>
                    <p>Represents our daily personal sins.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-red-900 mb-1">3rd Fall</h4>
                    <p>Represents the weight of habitual sin and despair.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Veronica and the "True Image"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The 6th Station is not found in the Gospels, but in the memory of the Church. The name "Veronica" comes from the Latin <em>Vera</em> and Greek <em>Icona</em>, meaning <strong>"True Image."</strong> 
              </p>
              <p className="text-text leading-relaxed mb-6">
                When she wiped His face, she carried away His likeness. This is a profound metaphor: when we show compassion to the suffering, the image of Christ is impressed upon our own souls. We become "Veronicas" to the world.
              </p>

              <QuizCTA
                title="Can you walk with Him?"
                description="The Way of the Cross is a path of transformation. Take our quiz to see how deeply you understand the stations and learn which one speaks most to your life right now."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 The Indulgence and Requirements
              </h2>
              <p className="text-text leading-relaxed mb-6">
                To gain the <strong>Plenary Indulgence</strong> attached to the Stations at a church:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li>You must move from station to station (physically walk).</li>
                <li>You must meditate on the Passion (the choice of prayers is free).</li>
                <li>Standard conditions apply: Confession, Communion, and prayer for the Pope's intentions.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "No other devotion is more effective for salvation than the Way of the Cross." — St. Alphonsos Liguori
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="stations-of-the-cross" />

            <BlogFAQ faqs={[
              {
                question: "Do I have to pray the 15th Station?",
                answer: "The 15th Station (The Resurrection) is a modern addition popularized by St. John Paul II. While it's beautiful, the 14 traditional stations are what is required for the Indulgence and the formal devotion."
              },
              {
                question: "What is the Stabat Mater?",
                answer: "It is a 13th-century hymn that describes Mary's suffering at the foot of the cross. Traditionally, one verse is sung between each station as the procession moves."
              },
              {
                question: "Can I pray the stations if I can't walk?",
                answer: "Yes! For those who are physically restricted, you can gain a plenary indulgence by spending 15 minutes devoutly reading and meditating on the Way of the Cross."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Walk the Sorrowful Way to Joy
              </h3>
              <p className="text-text-muted mb-6">
                The Cross is the only ladder that reaches Heaven. Take our quiz to receive a custom meditation guide for your next visit to the Stations.
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
