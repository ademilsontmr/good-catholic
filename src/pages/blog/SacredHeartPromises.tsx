import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SacredHeartPromises() {
  return (
    <>
      <Helmet>
        <title>The 12 Promises of the Sacred Heart of Jesus | Guide Catholic</title>
        <meta name="description" content="Discover the 12 promises given by Jesus to St. Margaret Mary Alacoque for those who honor His Sacred Heart. Learn how to live this profound devotion." />
        <meta name="keywords" content="12 promises of sacred heart, st margaret mary alacoque, sacred heart of jesus devotion, enthronement of the sacred heart, first friday devotion" />
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
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The 12 Promises of the Sacred Heart of Jesus
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In the 1670s, Jesus appeared to a humble French nun, Saint Margaret Mary Alacoque, showing her His heart—burning with love, crowned with thorns, and wounded by human indifference. He gave her twelve specific promises for those who would honor His Sacred Heart. These promises are a roadmap to peace, protection, and eternal life.
              </p>
            </header>

            <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-red-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Sacred Heart is the symbol of <strong>God's infinite and burning love</strong> for humanity. It is not just a pious image, but a call to reparation—to console Jesus for the coldness of hearts that do not love Him back.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The 12 Specific Promises
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Jesus told St. Margaret Mary: *"In the excess of the mercy of my Heart, I promise you that my all-powerful love will grant to all those who receive Communion on the First Fridays, for nine consecutive months, the grace of final repentance; they will not die under my displeasure, nor without receiving their Sacraments; my divine Heart will be their safe shelter at that last hour."* 
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <ol className="list-decimal list-inside text-text space-y-3 font-medium">
                  <li>I will give them all the graces necessary in their state of life.</li>
                  <li>I will establish peace in their houses.</li>
                  <li>I will comfort them in all their afflictions.</li>
                  <li>I will be their secure refuge during life, and above all, in death.</li>
                  <li>I will bestow abundant blessings upon all their undertakings.</li>
                  <li>Sinners will find in My Heart the source and infinite ocean of mercy.</li>
                  <li>Tepid souls shall become fervent.</li>
                  <li>Fervent souls shall quickly mount to high perfection.</li>
                  <li>I will bless every place in which an image of My Heart is exposed and honored.</li>
                  <li>I will give to priests the gift of touching the most hardened hearts.</li>
                  <li>Those who shall promote this devotion shall have their names written in My Heart.</li>
                  <li>I promise you in the excessive mercy of My Heart that My all-powerful love will grant to all those who receive Holy Communion on the First Fridays in nine consecutive months the grace of final perseverance.</li>
                </ol>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The First Friday Devotion
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The 12th promise—known as the "Great Promise"—is the foundation of the <strong>First Friday Devotion</strong>. To receive this grace, one must receive Holy Communion on the first Friday of the month for nine consecutive months, with the intention of making reparation to the Sacred Heart.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-500" />
                  What is Reparation?
                </h3>
                <p className="text-text">
                  Reparation is an act of love meant to "repair" the honor of God that has been insulted by sin. When we spend an hour in Adoration or pray specifically for those who mock God, we are making reparation to the Sacred Heart.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Enthronement of the Sacred Heart
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The 9th promise mentions "blessing every place where an image of my Heart is exposed and honored." This has led to the Catholic tradition of the <strong>Enthronement</strong>—a formal ceremony where a family places an image of the Sacred Heart in a prominent place in their home, acknowledging Jesus as the King and center of their family.
              </p>

              <QuizCTA
                title="Is Jesus the King of your heart?"
                description="Take our quiz to reflect on your prayer life and discover how to invite the Sacred Heart into your daily routine."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Conclusion: A Refuge of Love
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Sacred Heart is the ultimate answer to loneliness and despair. It is a heart that is <strong>open</strong> and waiting. By living this devotion, we don't just "get" things from God; we enter into a deep, personal friendship with Him.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "Most Sacred Heart of Jesus, have mercy on us."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacred-heart-promises" />

            <BlogFAQ faqs={[
              {
                question: "What happens if I miss a month of the First Fridays?",
                answer: "The devotion requires nine *consecutive* months. If you miss one month, you must start the count over. It is a test of perseverance and love."
              },
              {
                question: "Do I have to go to Confession on the First Friday too?",
                answer: "While it is not strictly required for the nine Fridays if you are already in a state of grace, the Church highly recommends regular Confession as part of this devotion to ensure your heart is truly ready to receive our Lord."
              },
              {
                question: "Can I use any image of the Sacred Heart?",
                answer: "Yes, as long as it is a respectful representation of the Sacred Heart of Jesus. Many families choose more traditional paintings, but some prefer modern icons. The important thing is the honor given to the Person behind the image."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Surrender to His Love
              </h3>
              <p className="text-text-muted mb-6">
                His heart is beating for you. Take our quiz to discover how you can grow closer to the Heart of Jesus.
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
