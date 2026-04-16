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
        <meta name="keywords" content="12 promises of sacred heart, st margaret mary alacoque, sacred heart of jesus devotion, enthronement of the sacred heart, first friday devotion, Paray-le-Monial" />
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
                  22 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Sacred Heart of Jesus: A Masterclass on the 12 Promises
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In the late 17th century, in a small convent in Paray-le-Monial, France, the world received one of its most profound spiritual treasures. Jesus appeared to a Visitation nun, <strong>Saint Margaret Mary Alacoque</strong>, revealing a Heart that burned with love for humanity yet felt wounded by its indifference. To encourage our return to His love, He offered twelve staggering promises.
              </p>
            </header>

            <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-red-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The devotion to the Sacred Heart is not merely a collection of pious acts; it is a response to the "thirst" of God. Jesus complained to St. Margaret Mary that His love was ignored, mocked, and treated with coldness in the Blessed Sacrament. The 12 promises are His way of drawing us back into the "abyss of His mercy."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The History: The Visitations at Paray-le-Monial
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Between 1673 and 1675, Margaret Mary received four "great apparitions." In the most famous, Jesus showed her His Heart atop a throne of flames, encircled by thorns, and surmounted by a cross. He asked her for a special feast on the Friday following the Octave of Corpus Christi and for the practice of "reparation."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Initially met with skepticism, she was supported by her confessor, <strong>St. Claude de la Colombière</strong>, a Jesuit priest who recognized the divine origin of the messages. Today, Paray-le-Monial is a place of global pilgrimage.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The 12 Specific Promises: A Deep Dive
              </h2>
              <p className="text-text leading-relaxed mb-6">
                These promises are grouped to cover every aspect of the human experience—from domestic peace to the hour of death.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-10">
                <ol className="list-decimal list-inside text-text space-y-3 font-medium">
                  <li className="pl-2">I will give them all the graces necessary in their state of life.</li>
                  <li className="pl-2">I will establish peace in their houses.</li>
                  <li className="pl-2">I will comfort them in all their afflictions.</li>
                  <li className="pl-2">I will be their secure refuge during life, and above all, in death.</li>
                  <li className="pl-2">I will bestow abundant blessings upon all their undertakings.</li>
                  <li className="pl-2">Sinners will find in My Heart the source and infinite ocean of mercy.</li>
                  <li className="pl-2">Tepid souls shall become fervent.</li>
                  <li className="pl-2">Fervent souls shall quickly mount to high perfection.</li>
                  <li className="pl-2">I will bless every place in which an image of My Heart is exposed and honored.</li>
                  <li className="pl-2">I will give to priests the gift of touching the most hardened hearts.</li>
                  <li className="pl-2">Those who shall promote this devotion shall have their names written in My Heart.</li>
                  <li className="pl-2"><strong>The Great Promise:</strong> Final perseverance and the grace of receiving the Sacraments before death for those who complete the 9 First Fridays.</li>
                </ol>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The "Great Promise" and the 9 First Fridays
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Promise #12 is the most famous. Jesus promised that those who receive Holy Communion on the first Friday of the month for nine consecutive months would not die in His displeasure. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Why nine months?</strong> In biblical numerology and Catholic tradition, the number nine represents a novena of months—a period of serious testing and persistence. It is not a "magic ritual," but a training of the heart to prioritize the Eucharist above all else.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-4 flex items-center gap-2 text-xl">
                  <Sparkles className="w-5 h-5 text-accent" />
                  How to Enthrone the Sacred Heart in Your Home
                </h3>
                <p className="text-text mb-4">The 9th promise is the basis for the **Enthronement**, a formal recognition of Jesus as King of the family.</p>
                <ul className="list-decimal list-inside text-text space-y-3">
                  <li><strong>Preparation:</strong> Cleanse your home and prepare a place of honor (an altar or prominent shelf).</li>
                  <li><strong>The Image:</strong> Have a beautiful image of the Sacred Heart blessed by a priest.</li>
                  <li><strong>The Ceremony:</strong> Gather the family, recite the Act of Consecration, and formally place the image.</li>
                  <li><strong>Life of Prayer:</strong> Commit to daily family prayer in front of the image to keep the "throne" active.</li>
                </ul>
              </div>

              <QuizCTA
                title="Is your home a sanctuary for Christ?"
                description="Take our quiz to reflect on your domestic church and learn how to deepen your family's relationship with the Heart of Jesus."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Symbolism: The Sword, the Thorns, and the Flame
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The image of the Sacred Heart contains a complete theology in itself:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>The Wound:</strong> The lance mark representing the side of Christ opened for us on the Cross.</li>
                <li><strong>The Thorns:</strong> Representing our sins that pierce His heart through indifference.</li>
                <li><strong>The Flame:</strong> Symbolizing the "furnace of charity." As Pope Pius XI said: *"Is not the Sacred Heart a summary of all our religion?"*</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "One does not love God by halves. The Heart of Jesus is the heart of God, which is why it is an infinite source of love and peace."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sacred-heart-promises" />

            <BlogFAQ faqs={[
              {
                question: "Did any Popes endorse these 12 promises?",
                answer: "Yes. Pope Leo XIII consecrated the entire human race to the Sacred Heart in 1899. Pope Pius XI issued the encyclical 'Miserentissimus Redemptor' in 1928, emphasizing the duty of reparation to the Sacred Heart."
              },
              {
                question: "Can I receive the First Friday Communion at an evening Mass?",
                answer: "Yes. The requirement is simply to receive Holy Communion worthily (in a state of grace) during any Mass on the first Friday of the month."
              },
              {
                question: "Is there a specific 'Act of Consecration' I should use?",
                answer: "There are many, but the most traditional ones are the Consecration written by St. Margaret Mary herelf or the one mandated by Pope Leo XIII. You can find these in most traditional Catholic missals."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Open Your Heart to the Infinite
              </h3>
              <p className="text-text-muted mb-6">
                Jesus is waiting to bless your undertakings. Take our quiz to learn more about the depths of His mercy.
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
