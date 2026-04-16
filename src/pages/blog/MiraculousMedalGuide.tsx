import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function MiraculousMedalGuide() {
  return (
    <>
      <Helmet>
        <title>The Miraculous Medal: History, Meaning, and Promises | Guide Catholic</title>
        <meta name="description" content="Discover the complete history of the Miraculous Medal, its symbols, the apparitions to St. Catherine Labouré, and why millions of Catholics wear it today." />
        <meta name="keywords" content="miraculous medal, miraculous medal meaning, st catherine laboure, o mary conceived without sin, catholic sacramentals, miraculous medal promises" />
        <link rel="canonical" href="https://guidecatholic.com/blog/miraculous-medal-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Miraculous Medal: History, Symbols, and Promises"
        description="Discover the complete history of the Miraculous Medal, its symbols, the apparitions to St. Catherine Labouré, and why millions of Catholics wear it today."
        url="https://guidecatholic.com/blog/miraculous-medal-guide/"
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
              <span className="text-text">The Miraculous Medal</span>
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
                  Devotions & Sacramentals
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Miraculous Medal: Every Symbol Decoded and Why You Should Wear It
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                It is perhaps the most recognizable piece of jewelry in the Catholic world. Originally called the "Medal of the Immaculate Conception," it became known as the "Miraculous Medal" because of the staggering number of healings and conversions attributed to it. But what is the story behind it, and what do its symbols mean?
              </p>
            </header>

            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Miraculous Medal is more than a piece of metal; it is a <strong>sacramental</strong>—a sacred sign instituted by the Church through which, by the intercession of Mary, we receive various spiritual effects and protections.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Apparitions to Saint Catherine Labouré
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1830, a young novice of the Daughters of Charity named <strong>Catherine Labouré</strong> was awakened in the middle of the night in a convent in Paris. A small child led her to the chapel, where the Virgin Mary appeared to her.
              </p>
              <p className="text-text leading-relaxed mb-6">
                During a second apparition, Mary showed Catherine the image of a medal. Mary stood on a globe, crushing the head of a serpent beneath her feet. Rays of light shone from her hands. Mary told Catherine: 
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed">
                  "Have a medal struck upon this model. Those who wear it will receive great graces, especially if they wear it around the neck. Those who repeat this prayer with confidence will be in a special way under the protection of the Mother of God."
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Front: The Victory Over Evil
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The front of the medal contains several profound theological symbols:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Mary Crushing the Serpent:</strong> Recalling Genesis 3:15, where God prophesied that the woman's offspring would crush the head of the serpent. Mary is the "New Eve" who reverses Eve's failure through her "Yes" to God.</li>
                <li><strong>The Rays of Light:</strong> These represent the <strong>graces</strong> Mary obtains for humanity. Catherine noticed that some rays were dim; Mary explained that these were graces for which people had forgotten to ask.</li>
                <li><strong>The Year 1830:</strong> The date of the apparitions.</li>
                <li><strong>The Prayer:</strong> "O Mary, conceived without sin, pray for us who have recourse to thee." This prayer, given to Catherine 24 years before the dogma of the Immaculate Conception was officially declared, confirmed the Church's long-standing belief.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Back: The Mystery of the Two Hearts
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The back of the medal is even more dense with symbolism, reflecting the central mysteries of the Catholic faith:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                <ul className="list-disc list-inside text-text space-y-3">
                  <li><strong>The Twelve Stars:</strong> Representing the Twelve Apostles and the Twelve Tribes of Israel, as well as the "crown of twelve stars" worn by the woman in Revelation 12:1.</li>
                  <li><strong>The Bar and the 'M':</strong> The 'M' stands for Mary, while the horizontal bar represents the Cross. The fact that they are intertwined shows that Mary's life is inseparable from the work of Christ.</li>
                  <li><strong>The Two Hearts:</strong>
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li><strong>The Sacred Heart of Jesus:</strong> Crowned with thorns, representing His infinite love and sacrifice.</li>
                      <li><strong>The Immaculate Heart of Mary:</strong> Pierced by a sword (prophesied by Simeon in Luke 2:35), representing her shared suffering at the foot of the Cross.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <QuizCTA
                title="Do you carry the protection of Mary?"
                description="Take our quiz to learn more about Catholic sacramentals and how to integrate them into your spiritual life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why It's Called "Miraculous"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Originally, it was called the "Medal of the Immaculate Conception." However, shortly after it began being distributed in Paris in 1832—during a deadly cholera epidemic—thousands of reported healings, protections, and radical conversions occurred among those who wore it. The people of Paris began calling it the "Miraculous Medal," and the name stuck.
              </p>
              <p className="text-text leading-relaxed mb-6">
                One of the most famous stories is the conversion of <strong>Alphonse Ratisbonne</strong> in 1842. A wealthy Jewish man who was hostile to the Church, he was challenged to wear the medal. Mary appeared to him in a church in Rome, and he experienced an instantaneous conversion, later becoming a priest and founding a religious order.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Use the Medal
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The medal is not a magic charm. Its power lies in the intercession of Mary and the faith of the wearer.
              </p>
              <ul className="list-decimal list-inside text-text space-y-3 mb-8">
                <li><strong>Have it Blessed:</strong> Like all sacramentals, have it blessed by a priest. This sets the object apart for holy use.</li>
                <li><strong>Wear it with Confidence:</strong> Mary promised that those who wear it "with confidence" would receive great graces.</li>
                <li><strong>Pray the Aspiration Daily:</strong> "O Mary, conceived without sin, pray for us who have recourse to thee."</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6 text-center">
                <p className="text-text italic leading-relaxed">
                  "The medal is the silent prayer that we carry with us, a sign that we always belong to the Mother of God."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="miraculous-medal-guide" />

            <BlogFAQ faqs={[
              {
                question: "Do I have to be Catholic to wear the Miraculous Medal?",
                answer: "No. Many non-Catholics wear the medal as a sign of respect for Mary or as they are exploring the faith. Mary's maternal protection is for all who have recourse to her."
              },
              {
                question: "What is the specific prayer of the Miraculous Medal?",
                answer: "The prayer engraved on the border is: 'O Mary, conceived without sin, pray for us who have recourse to thee.' It is recommended to say this prayer often throughout the day."
              },
              {
                question: "What should I do if my medal breaks or I find an old one?",
                answer: "Sacramentals that are broken or no longer usable should be buried or burned, not thrown in the trash. This honors the blessing they once received."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Walk with the Mother of God
              </h3>
              <p className="text-text-muted mb-6">
                Discover the peace that comes from a life dedicated to Christ through Mary. Take our quiz to start your journey.
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
