import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Church, Calendar, Clock, ArrowLeft, Heart, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintJohnVianneyCureOfArs() {
  return (
    <>
      <Helmet>
        <title>Saint John Vianney: The Curé of Ars and Patron of Priests | Guide Catholic</title>
        <meta name="description" content="Discover the life of Saint John Vianney, the humble priest who converted thousands through the confessional and battled the demonic in his small village of Ars." />
        <meta name="keywords" content="st john vianney, cure of ars, patron saint of priests, st john vianney spiritual warfare, miracles of st john vianney, confessional miracle" />
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
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                 The Curé of Ars: A Masterclass in Humility and Spiritual Power
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                When John Vianney was appointed to the remote French village of Ars in 1818, his bishop said: "There is little love in that parish; you will put it there." He didn't know he was sending a man who would become the "Universal Patron of Parish Priests," converting up to 20,000 pilgrims a year through the simple, grueling weapon of the confessional.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                <strong>Saint John Vianney (1786–1859)</strong> was a man whom the world would have called a failure. He struggled with Latin, nearly failed out of the seminary, and was considered "slow" by his peers. Yet, God used his directness and extreme penance to shrivel the post-Revolutionary atheism of France.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Marathon of Mercy: 18-Hour Confessions
              </h2>
              <p className="text-text leading-relaxed mb-6">
                For the last 15 years of his life, Vianney’s routine was superhuman. He would enter the confessional at 1:00 or 2:00 in the morning and remain there until late at night, often spending <strong>16 to 18 hours a day</strong> hearing the sins of the world. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                He possessed the <em>charism</em> of **Cardiognosis** (reading of hearts). Thousands testified that before they could even speak, the humble priest would gently name the sins they had forgotten or were too ashamed to mention. Ars became a place of global pilgrimage not because of its architecture, but because of the mercy flowing from a tiny wooden box.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl text-red-700">
                  <Flame className="w-6 h-6" />
                  Bout with the "Grappin" (The Devil)
                </h3>
                <p className="text-text mb-4">
                  The devil was so enraged by Vianney's success that he physically assaulted the priest for 35 years. Vianney nicknamed him "The Grappin."
                </p>
                <ul className="list-disc list-inside text-text space-y-3">
                  <li><strong>Physical Attacks:</strong> Vianney was frequently thrown from his bed at night. Once, the devil set his bed on fire while the priest was at the altar.</li>
                  <li><strong>Mockery:</strong> The devil would scream outside his window or mock the priest's "village simpleton" status.</li>
                  <li><strong>The Outcome:</strong> Vianney remained unshaken, famously saying: *"The Grappin is very angry. He is like a dog that barks but cannot bite unless we let him."*</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Miracle of the Granary: Feed my Sheep
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-john-vianney-cure-of-ars">
                Vianney founded "La Providence," an orphanage for girls. In times of famine, he relied entirely on God. Once, when the cook reported they had only enough flour for a single loaf, Vianney went to the attic and sprinkled some of it with a relic of St. Philomena.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Moments later, the attic was found so <strong>miraculously filled with wheat</strong> that the floorboards were groaning under the weight. This "Miracle of the Granary" was one of many signs that God was sustaining the work of His humble servant.
              </p>

              <QuizCTA
                title="Do you hear the call to holiness?"
                description="Take our quiz to reflect on the life of the Curé of Ars and see how his message of humility can transform your own prayer life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 Patron of All Parish Priests
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1929, <strong>Pope Pius XI</strong> declared him the Patron of all Parish Priests. Vianney’s theology was simple yet profound. He taught that the priesthood is "the love of the heart of Jesus." He insisted that a priest is not for himself, but for the people—to stand between them and God as a bridge of mercy.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "If we truly understood the priest on earth, we would die, not of fear, but of love." — St. John Vianney
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Is his body still in Ars today?",
                answer: "Yes. The body of Saint John Vianney is incorrupt and is preserved in a glass reliquary in the Basilica of Ars, France. Millions visit every year to pray before him."
              },
              {
                question: "What was his diet like?",
                answer: "His penance was extreme. For decades, his primary meal consisted of a few cold, boiled potatoes, which he would cook once a week and eat throughout the following days."
              },
              {
                question: "What is the lesson for laypeople today?",
                answer: "His life proves that intellectual brilliance is not a requirement for intimacy with God. Total surrender, frequent confession, and a love for the Eucharist are the only things needed for a soul to become a channel of miracles."
              }
            ]} />

<RelatedArticles currentSlug="saint-john-vianney-cure-of-ars" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Restore Your Soul
              </h3>
              <p className="text-text-muted mb-6">
                Like the pilgrims of Ars, you too can find peace. Take our quiz to take the next step in your faith journey.
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
