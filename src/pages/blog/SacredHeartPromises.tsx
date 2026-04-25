import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Flame, Sparkles, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SacredHeartPromises() {
  return (
    <>
      <Helmet>
        <title>The 12 Promises of the Sacred Heart | Expert Devotion Guide</title>
        <meta name="description" content="Master the 12 promises of the Sacred Heart of Jesus. Learn the history of Paray-le-Monial, the 9 First Fridays, and the theology of reparation." />
        <meta name="keywords" content="12 promises of sacred heart, st margaret mary alacoque, sacred heart of jesus devotion, 9 first fridays, catholic reparation, Paray-le-Monial, Sacred Heart theology" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sacred-heart-promises/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The 12 Promises of the Sacred Heart of Jesus: A Guide to Divine Mercy"
        description="Discover the 12 promises given by Jesus to St. Margaret Mary Alacoque for those who honor His Sacred Heart. Learn how to live this profound devotion."
        url="https://guidecatholic.com/blog/sacred-heart-promises/"
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
              <span className="text-text">Sacred Heart Promises</span>
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
                  Devotions
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
                The Sacred Heart of Jesus: The Synthesis of the Whole Gospel
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Behold this Heart which has so loved men." In a world increasingly cold and indifferent, the devotion to the Sacred Heart stands as a "Furnace of Charity." It is more than a pious image; it is the Church's response to the mystery of God's humanity.
              </p>
            </header>

            <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Shield className="w-24 h-24 text-red-500/20 absolute -bottom-4 -right-4" />
               <Heart className="w-32 h-32 text-red-500 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The devotion of the Sacred Heart reached its modern clarity in 17th-century France, at the convent of <strong>Paray-le-Monial</strong>. Jesus chose an obscure nun, <strong>Saint Margaret Mary Alacoque</strong>, to reveal the "unfathomable riches" of His Heart. This was God's direct intervention against <strong>Jansenism</strong>, a heresy that painted God as a distant, terrifying judge.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Theology: Why a "Heart"?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Pope Pius XII, in his 1956 encyclical <em>Haurietis Aquas</em>, explained that the Heart of Jesus is the physical source from which Divine Mercy flows. It represents the <strong>Hypostatic Union</strong>—the meeting point of God's infinite divinity and Christ's finite, feeling humanity. When we honor the Heart, we honor the Person of Jesus in His most vulnerable and loving capacity.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-red-600" />
                  The 12 Master Promises
                </h3>
                <p className="text-sm text-text-muted mb-6 text-center italic">Jesus promised these to those who honor His Heart</p>
                <ol className="list-decimal list-inside text-text space-y-3 text-sm">
                  <li>I will give them all the graces necessary in their state of life.</li>
                  <li>I will establish peace in their houses.</li>
                  <li>I will comfort them in all their afflictions.</li>
                  <li>I will be their secure refuge during life, and above all, in death.</li>
                  <li>I will bestow abundant blessings upon all their undertakings.</li>
                  <li>Sinners will find in My Heart the source and infinite ocean of mercy.</li>
                  <li>Tepid souls shall become fervent.</li>
                  <li>Fervent souls shall quickly mount to high perfection.</li>
                  <li>I will bless every place in which an image of My Heart is exposed and honored.</li>
                  <li>I will give to priests the gift of touching the hardened hearts.</li>
                  <li>Those who promote this devotion shall have their names written in My Heart.</li>
                  <li><strong>The Great Promise:</strong> Final perseverance and the grace of receiving the Sacraments before death for those who complete 9 consecutive First Fridays.</li>
                </ol>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. The 9 First Fridays: Not a Magic Ritual
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The "Great Promise" is often misunderstood as a "get out of jail free" card. In reality, the requirement of <strong>nine consecutive months</strong> of receiving Holy Communion in a state of grace is a discipline. It trains the soul to make the Eucharist the center of its life. 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sacred-heart-promises">
                Jesus didn't promise we wouldn't suffer; He promised we wouldn't die in His displeasure. For those who complete this "novena of months," the Church sees a soul that has proven its loyalty and is thus more disposed to receive final grace.
              </LinkedText>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-slate-800 mb-4 text-center flex items-center justify-center gap-2">
                  <Activity className="w-5 h-5 text-slate-600" />
                  The Concept of Reparation
                </h3>
                <p className="text-sm leading-relaxed">
                  Reparation is the attempt to "console" the Heart of Jesus for the outrages committed against Him in the Blessed Sacrament. When we spend an hour in <strong>Adoration</strong> or make an offering of our daily crosses, we are acting like Saint Veronica at the Way of the Cross—wiping the face of our Lord because we love Him, even if it doesn't change the "event" of His suffering.
                </p>
              </div>

              <QuizCTA
                title="Is your heart in sync with His?"
                description="Take our quiz to analyze your interior life and see how the devotion to the Sacred Heart can ignite a new fire in your prayer routine."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Flame className="w-6 h-6 text-accent" />
                 Symbolism: Thorns and Flames
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Sacred Heart image is a visual Catechism. The <strong>Cross</strong> at the top shows that love and sacrifice are one. The <strong>Thorns</strong> remind us that our indifference hurts God. The <strong>Flames</strong> represent the "Infinite Furnace" that consumes everything except love.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Only when we find ourselves within the Heart of Jesus do we understand our own heart." — Pope Benedict XVI
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "What happens if I miss the 5th month of the 9 First Fridays?",
                answer: "You must start over. The promise specified 'consecutive' months. This is to test and strengthen our perseverance and discipline in the interior life."
              },
              {
                question: "Is this the same thing as Divine Mercy?",
                answer: "They are like two sisters. The Sacred Heart (17th century) focus is on *reparation* and the love of God. Divine Mercy (20th century) focus is on our *reliance* on that love. Both emanate from the same physical heart of Christ."
              },
              {
                question: "How do I 'enthrone' the image in my house?",
                answer: "It is a beautiful ceremony where the head of the family formally recognizes Jesus as the King of the home. Usually, it involves a priest blessing the image and the family reciting an act of consecration together."
              }
            ]} />

<RelatedArticles currentSlug="sacred-heart-promises" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Join the Furnace of Love
              </h3>
              <p className="text-text-muted mb-6">
                Don't settle for a lukewarm faith. Take our quiz for a personalized look at how the Sacred Heart can transform your life.
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
