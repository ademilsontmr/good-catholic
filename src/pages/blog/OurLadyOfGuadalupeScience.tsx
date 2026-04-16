import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft, Star, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function OurLadyOfGuadalupeScience() {
  return (
    <>
      <Helmet>
        <title>The Miracle of Our Lady of Guadalupe: Science and the Tilma | Guide Catholic</title>
        <meta name="description" content="Explore the scientific mysteries of the Tilma of Our Lady of Guadalupe. Learn about the miraculous preservation, the images in the eyes, and the inexplicable fibers." />
        <meta name="keywords" content="our lady of guadalupe science, tilma of juan diego mystery, guadalupe tilma scientific study, miracle of guadalupe, images in guadalupe eyes" />
        <link rel="canonical" href="https://guidecatholic.com/blog/miracle-of-guadalupe-science/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Miracle of Our Lady of Guadalupe: What Science Cannot Explain"
        description="Explore the scientific mysteries of the Tilma of Our Lady of Guadalupe. Learn about the miraculous preservation, the images in the eyes, and the inexplicable fibers."
        url="https://guidecatholic.com/blog/miracle-of-guadalupe-science/"
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
              <span className="text-text">Miracle of Guadalupe</span>
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
                  Faith & Science
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
                The Miracle of Our Lady of Guadalupe: What Science Cannot Explain
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In 1531, a miraculous image appeared on the rough cactus-fiber cloak (tilma) of an indigenous man named Juan Diego. Today, nearly 500 years later, that same cloak is on display in Mexico City. It hasn't decayed, the "paint" has no biological or mineral source, and modern digital technology has found human figures reflected in the Virgin's eyes. This is the miracle of Guadalupe.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Our Lady of Guadalupe is the most visited Catholic shrine in the world. While the spiritual conversion of millions of Aztecs is the greater miracle, the physical tilma itself has become a "scientific headache" for experts across many disciplines.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Inexplicable Fabric
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The tilma is made of <em>ayate</em> (fibers from the maguey cactus). Typically, this fabric is very fragile and begins to fall apart within 20 to 30 years. However, the tilma of Juan Diego has survived for 494 years in perfect condition, despite being exposed to smoke, incense, and even an acid spill in 1791 that should have eaten through the fibers instantly.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Paint Without Pigment
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1979, Dr. Philip Callahan, a biophysicist from the University of Florida and NASA consultant, examined the tilma with infrared photography. He found something shocking:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>No Brushstrokes:</strong> There are no visible brushstrokes on the image. It appears to have been applied all at once, "like a photograph."</li>
                <li><strong>No Sizing:</strong> Usually, ayate fabric requires a layer of "sizing" (primer) to hold paint. The tilma has none. The colors seem to float above the surface.</li>
                <li><strong>No Known Pigments:</strong> Analysis of the "paint" showed that the colors are neither animal, vegetable, nor mineral in origin. To this day, science does not know what physical substance makes up the colors.</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-accent" />
                  The Discovery in the Eyes
                </h3>
                <p className="text-text">
                  In the 1950s, an oculist examined the eyes of the Virgin with a high-power lens and discovered the reflection of a human figure. Later, Dr. José Aste Tonsmann, a digital imaging expert, used NASA-grade digital enhancement. In the 1/4 inch pupil, he found reflections of <strong>thirteen different people</strong>, including Juan Diego and Bishop Zumárraga. It is a "snapshot" of the moment the tilma was opened.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. The Constellations and the Music
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Astronomy and music have also found their place in the miracle. The stars on the Virgin's mantle are not random; they match exactly the position of the constellations in the sky over Mexico on the morning of December 12, 1531.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Furthermore, when the stars on the mantle and the flowers on the tunic are mapped onto a musical scale, they produce a harmonious melody, leading some to call the image a "heavenly song" frozen in time.
              </p>

              <QuizCTA
                title="Do you believe in miracles?"
                description="Take our quiz to explore how the great apparitions of history strengthen our Catholic faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Bomb of 1921
              </h2>
              <p className="text-text leading-relaxed mb-6">
                On November 14, 1921, an anti-clerical radical hid a bomb in a basket of flowers on the altar beneath the image. The explosion was so powerful that it destroyed the marble altar, shattered windows blocks away, and even bent a heavy bronze crucifix. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                However, <strong>the tilma was completely untouched.</strong> Even the glass protecting it did not break. Many see the "Bent Crucifix" (which is still on display) as a sign that Jesus took the blow for His Mother.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "Am I not here, who am your mother?" — Words of Our Lady to Juan Diego
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="miracle-of-guadalupe-science" />

            <BlogFAQ faqs={[
              {
                question: "Wait, is this really the original cloak from 1531?",
                answer: "Yes. The original tilma of Juan Diego is on display in the Basilica of Our Lady of Guadalupe in Mexico City. It is protected by glass and is the same one examined by scientists for centuries."
              },
              {
                question: "Has the Church ever allowed it to be studied by non-Catholics?",
                answer: "Yes. Many of the studies, including those by Nobel prize-winning chemist Richard Kuhn and NASA consultant Philip Callahan, were conducted with the latest technology of their time. The findings have consistently confounded experts."
              },
              {
                question: "Why is she called 'Guadalupe'?",
                answer: "There are two theories. One is that she named herself after our Lady of Guadalupe in Spain. The more popular theory is that she used the Aztec word 'Coatlaxopeuh' (meaning 'the one who crushes the serpent'), which the Spaniards heard as 'Guadalupe'."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Walk with the Virgin
              </h3>
              <p className="text-text-muted mb-6">
                Discover the beauty and the truth of the Catholic faith. Take our quiz to start your journey.
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
