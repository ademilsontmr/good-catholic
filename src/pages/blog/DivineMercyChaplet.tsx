import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart, Sparkles, Activity, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, HowToSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function DivineMercyChaplet() {
  return (
    <>
      <Helmet>
        <title>How to Pray the Divine Mercy Chaplet: The Expert Guide | Guide Catholic</title>
        <meta name="description" content="Discover the deep spiritual meaning of the Divine Mercy Chaplet. Learn about St. Faustina, the 3pm Hour of Mercy, and the promises for the dying." />
        <meta name="keywords" content="how to pray divine mercy chaplet, st faustina diary, hour of mercy 3pm, divine mercy image meaning, promises of divine mercy" />
        <link rel="canonical" href="https://guidecatholic.com/blog/divine-mercy-chaplet/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="How to Pray the Divine Mercy Chaplet: Complete Guide"
        description="Learn how to pray the Divine Mercy Chaplet step by step. Complete guide with prayers, history, and the significance of the 3pm Hour of Mercy as revealed to St. Faustina."
        url="https://guidecatholic.com/blog/divine-mercy-chaplet/"
      />
      <HowToSchema
        name="How to Pray the Divine Mercy Chaplet"
        description="Learn how to pray the Divine Mercy Chaplet step by step."
        url="https://guidecatholic.com/blog/divine-mercy-chaplet/"
        totalTime="PT10M"
        steps={[
          {"name": "Sign of the Cross", "text": "Begin with the Sign of the Cross."},
          {"name": "Initial Prayers", "text": "Pray the Our Father, Hail Mary, and Apostles' Creed."},
          {"name": "Decades", "text": "On the large beads say the 'Eternal Father' prayer. On the small beads say 'For the sake of His sorrowful Passion...'"},
          {"name": "Conclusion", "text": "Pray 'Holy God, Holy Mighty One...' three times."}
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
              <span className="text-text">Divine Mercy Chaplet</span>
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
                  Prayers & Devotions
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
                Divine Mercy: The "Emergency Prayer" for a Wounded World
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "The greater the sinner, the greater the right he has to My mercy." In the 1930s, Jesus gave <strong>Saint Faustina Kowalska</strong> a prayer specifically designed as a "vessel" to draw graces from the ocean of His Heart. Today, the Chaplet is the most popular intercessory prayer in the Catholic Church for the dying and the conversion of sinners.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Activity className="w-24 h-24 text-rose-400/20 absolute -bottom-4 -right-4" />
               <Heart className="w-32 h-32 text-rose-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Divine Mercy devotion is built on three pillars, often remembered as the <strong>ABC of Mercy</strong>:
                1. <strong>A</strong>sk for His Mercy.
                2. <strong>B</strong>e Merciful to others.
                3. <strong>C</strong>ompletely Trust in Jesus.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Apparition: Poland, 1935
              </h2>
              <p className="text-text leading-relaxed mb-6">
                On September 13, 1935, Sister Faustina saw an angel about to strike the earth in divine justice. She began to plead for the world using words she heard interiorly. As she prayed, the angel became helpless. Jesus later confirmed those words: <em>"Eternal Father, I offer You the Body and Blood..."</em>
              </p>
              <p className="text-text leading-relaxed mb-6">
                This prayer is technically <strong>Eucharistic</strong> in nature. In it, we participate in the Priesthood of Christ by offering His sacrifice to the Father on behalf of the whole world.
              </p>

              <div className="bg-rose-50 border border-border rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-rose-600" />
                  The Symbolism of the Rays
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">Meaning of the Divine Mercy Image</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-bold mb-2">The Pale Ray</h4>
                    <p>Represents the Water which makes souls righteous. It refers to the Sacraments of <strong>Baptism</strong> and <strong>Confession</strong>.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">The Red Ray</h4>
                    <p>Represents the Blood which is the life of souls. it refers to the <strong>Holy Eucharist</strong>, the source of eternal life.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. The 3:00 PM Hour: A Moment of Grace
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-mercy-chaplet">
                Jesus asked Faustina to pause at 3:00 PM—the hour He expired on the cross. He said: "In this hour you can obtain everything for yourself and for others for the asking" (Diary 1572). 
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Even if you only have one minute, Jesus suggested this short prayer: <em>"You expired, Jesus, but the source of life gushed forth for souls... O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us."</em>
              </p>

              <QuizCTA
                title="Do you trust Him enough?"
                description="The measure of grace you receive is regulated by the vessel of your trust. Take our quiz to evaluate your spiritual confidence and learn how to surrender more to His Mercy."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <ShieldCheck className="w-6 h-6 text-accent" />
                 The Promise for the Dying
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-mercy-chaplet">
                The most staggering promise regarding the Chaplet is for the hour of death. Jesus said: "When they say this chaplet in the presence of the dying, I will stand between My Father and the dying person, not as the just Judge but as the merciful Savior." 
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="divine-mercy-chaplet">
                Exorcists also report that the Chaplet is incredibly effective in spiritual warfare, as it invokes the "sorrowful Passion" which is the very thing that defeated the enemy once and for all.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Jesus, I trust in You." — The short, infinite prayer.
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Do I have to pray it at 3:00 PM?",
                answer: "No, you can pray it anytime. However, 3:00 PM is the 'privileged' time where the graces are particularly abundant as we commemorate the moment of Christ's death."
              },
              {
                question: "Can I pray it on my fingers?",
                answer: "Yes! While beads help you keep track of the standard five decades, you can pray it anywhere, anytime, even without beads. The heart's intention is what matters."
              },
              {
                question: "Wait, is this more important than the Rosary?",
                answer: "The Rosary is the pre-eminent Marian prayer. The Chaplet is a pre-eminent Eucharistic/Christocentric prayer. They complement each other perfectly. Many Catholics pray the Rosary in the morning and the Chaplet at 3:00 PM."
              }
            ]} />

<RelatedArticles currentSlug="divine-mercy-chaplet" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Dive into the Ocean of Mercy
              </h3>
              <p className="text-text-muted mb-6">
                No sin is too great for His Heart. Take our quiz to receive a custom meditation guide on the Passion of Christ.
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
