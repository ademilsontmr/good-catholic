import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Church, Calendar, Clock, ArrowLeft, Heart, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SaintJohnVianneyCureOfArs() {
  return (
    <>
      <Helmet>
        <title>Saint John Vianney: The Curé of Ars and Patron of Priests | Guide Catholic</title>
        <meta name="description" content="Discover the life of Saint John Vianney, the humble priest who converted thousands through the confessional and battled the demonic in his small village of Ars." />
        <meta name="keywords" content="st john vianney, cure of ars, patron saint of priests, st john vianney spiritual warfare, miracles of st john vianney" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-john-vianney-cure-of-ars/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint John Vianney: The Curé of Ars and the Power of the Confessional"
        description="Discover the life of Saint John Vianney, the humble priest who converted thousands through the confessional and battled the demonic in his small village of Ars."
        url="https://guidecatholic.com/blog/saint-john-vianney-cure-of-ars/"
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
              <span className="text-text">Saint John Vianney</span>
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
                  Saints
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint John Vianney: The Curé of Ars and the Power of the Confessional
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                When John Vianney was appointed to the small French village of Ars in 1818, his bishop told him: "There is little love in that parish; you will be the one to put it there." He didn't know he was sending a man who would become the "Patron Saint of Parish Priests" and transform a town through prayer and extreme penance.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Saint John Vianney (1786–1859) lived through the aftermath of the French Revolution, a time when the faith was dying in the hearts of the people. He was not a brilliant scholar—in fact, he struggled to learn Latin and almost failed his seminary exams. Yet, God chose this "slow" man to shame the wise and convert thousands.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Miracle of the Confessional
              </h2>
              <p className="text-text leading-relaxed mb-6">
                John Vianney’s greatest work was the Sacrament of Reconciliation. As word of his holiness and his gift of "reading souls" spread, people began traveling from all over Europe to confess to him.
              </p>
              <p className="text-text leading-relaxed mb-6">
                During the last 15 years of his life, he spent between <strong>16 and 18 hours a day</strong> in the confessional. He often skipped meals and slept for only 2 or 3 hours. He had an extraordinary gift from God: he could tell people their sins before they even spoke them, helping them to make a truly honest and healing confession.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 text-red-700">
                Spiritual Warfare: The "Grappin"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The devil (whom John Vianney nicknamed "the Grappin") was furious with the number of souls the priest was snatching from hell. For 35 years, Vianney was physically harassed by demonic forces at night.
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Noises:</strong> Screaming, knocking, and the sound of heavy furniture being moved.</li>
                <li><strong>Physical Attacks:</strong> His bed was once set on fire by an invisible hand while he was praying.</li>
                <li><strong>Taunts:</strong> The devil would mock his tiny village and his humble life.</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Vianney’s response was heroic: *"The Grappin is very angry. He is like a dog that barks but cannot bite unless we let him."*
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-600" />
                  The Wisdom of the Curé of Ars:
                </h3>
                <p className="text-text italic mb-2">"The priesthood is the love of the heart of Jesus."</p>
                <p className="text-text italic mb-2">"If we truly understood the priest on earth, we would die, not of fear, but of love."</p>
                <p className="text-text italic">"Prayer is nothing else than union with God."</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Miracle of the Wheat
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Ars was a poor village, and Vianney opened a home for orphaned girls called "The Providence." Once, when they had no wheat to feed the children, Vianney went to the attic and prayed. Moments later, the attic was miraculously <strong>filled with wheat</strong> to the point that the floor groaned under the weight. 
              </p>

              <QuizCTA
                title="Do you value the Sacrament of Confession?"
                description="Take our quiz to reflect on your spiritual habits and learn how to make a life-changing confession."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                His Incorrupt Body
              </h2>
              <p className="text-text leading-relaxed mb-6">
                When Saint John Vianney died in 1859, his body remained incorrupt. Today, he can still be seen in a glass reliquary in the Basilica of Ars. His face is remarkably well-preserved, standing as a silent witness to a life spent entirely for the love of God.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "I will show you the way to heaven." — The promise of St. John Vianney to a shepherd boy.
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="saint-john-vianney-cure-of-ars" />

            <BlogFAQ faqs={[
              {
                question: "Why is he the patron of priests?",
                answer: "Because he embodied the ideal of a humble, selfless parish priest who lived only for his flock. He proved that holiness and the salvation of souls are more important than intellectual brilliance or worldly success."
              },
              {
                question: "What is his feast day?",
                answer: "His feast day is celebrated on August 4th. This is a special day to pray for your local parish priest."
              },
              {
                question: "What does 'Curé' mean?",
                answer: "It is the French word for 'Parish Priest.' He is known as the Curé of Ars (the priest of the village of Ars)."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Pray for Your Priests
              </h3>
              <p className="text-text-muted mb-6">
                The world needs more souls like St. John Vianney. Take our quiz to learn how you can support your parish and grow in your own holiness.
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
