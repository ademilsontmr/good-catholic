import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft, Star, Microscope, Sparkles } from "lucide-react";
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
        <meta name="keywords" content="our lady of guadalupe science, tilma of juan diego mystery, guadalupe tilma scientific study, miracle of guadalupe, images in guadalupe eyes, nahui ollin symbolism" />
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
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                 The Tilma of Guadalupe: A Scientific and Symbolic Masterpiece
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In December 1531, on a hill in Mexico, a revolution began. Not a revolution of weapons, but of a rough cactus-fiber cloak (tilma) that appeared with an image of the Virgin Mary. Five centuries later, that tilma remains the most studied religious relic in the world, confusing Nobel Prize winners and NASA consultants alike.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Image of Our Lady of Guadalupe is not just a painting; for the Aztec people, it was a <strong>codex</strong>—a book they could "read." For the modern scientist, it is a biological and physical impossibility.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Physics of the Inexplicable: Fabric and Temperature
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The tilma is made of <em>ayate</em>, a fabric derived from the maguey cactus. Scientists agree that this material typically disintegrates within 20 years. Yet, for 500 years, the tilma of Juan Diego has survived without any protective varnish, and for much of its life, it was exposed to the open air, humidity, and thousands of candles.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Even more shocking is its temperature. When measured with a sensitive thermometer, the tilma consistently maintains a temperature of <strong>98.6°F (36.5°C)</strong>—the exact temperature of a living human body.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Microscope className="w-6 h-6 text-amber-600" />
                  The Micro-Miracles of the Eyes
                </h3>
                <p className="text-text mb-4">
                  In 1979, <strong>Dr. José Aste Tonsmann</strong>, a digital imaging researcher for IBM, used NASA-grade enhancement to study the 1/4 inch cornea of the Virgin's eyes.
                </p>
                <ul className="list-disc list-inside text-text space-y-3">
                  <li><strong>The Snapshot:</strong> He discovered 13 distinct human figures reflected in the eyes.</li>
                  <li><strong>The Bishop:</strong> He identified the historical figure of Bishop Juan de Zumárraga.</li>
                  <li><strong>The Family Group:</strong> In the center, a woman with a baby on her back and a man in a hat—suggestive of a family being blessed by the apparition.</li>
                  <li><strong>Double Reflection:</strong> The images follow the **Purkinje-Sanson Law** of physics—the figures are reflected in both eyes with the exact distortions required by the curvature of a living cornea.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. No Paint, No Pigment, No Canvas
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Dr. Philip Callahan</strong> and Nobel Prize-winning chemist <strong>Richard Kuhn</strong> investigated the image in 1979. They found no animal, mineral, or vegetable pigments. The colors, especially the turquoise "matlactli" blue, have no chemical origin known to man.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Furthermore, infrared photography showed that there is no <strong>underdrawing</strong> or signature. Usually, a painter leaves sketch marks or "sizing" to prepare the rough fabric. The tilma has none. The image appears to be "woven" into the fibers or simply hovering above them.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 The Aztec Codex: Why Millions Converted
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The expansion of the Catholic faith in Mexico was not due to European force, but due to the <strong>symbolism</strong> on the tilma. To the Aztecs:
              </p>
              <ul className="list-disc list-inside text-text space-y-4 mb-10">
                <li><strong>The Nahui Ollin:</strong> The four-petaled flower on her womb was the Aztec symbol for the center of the universe—God. Seeing this told them she was carrying the True God.</li>
                <li><strong>The Black Sash:</strong> This was the traditional sign of a pregnant woman. Mary was presented as the "Waiting Mother."</li>
                <li><strong>The Blue Tunic:</strong> To the Aztecs, this color was reserved only for royalty and for the Gods.</li>
              </ul>

              <QuizCTA
                title="Do you see the hand of God in history?"
                description="Our Lady of Guadalupe converted 9 million people in 7 years. Take our quiz to learn about the power of the great apparitions."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Bomb and the Cross: Divine Protection
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1921, during the persecution of the Church in Mexico, a bomb was set off directly under the Image of Guadalupe. The marble altar was shattered, and a heavy bronze crucifix was bent like wax. Yet, the glass protecting the tilma and the fabric itself remained <strong>completely unharmed</strong>. This "Bent Cross" is still on display in the Basilica today as a testimony to the protection of the Virgin.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Non fecit taliter omni nationi" (He has not done thus for any other nation). — Psalm 147:20, often applied to Guadalupe.
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="miracle-of-guadalupe-science" />

            <BlogFAQ faqs={[
              {
                question: "Wait, so is the tilma still physically warm?",
                answer: "Yes. Multiple studies have recorded that the fabric maintains a constant temperature of around 36.5-37 degrees Celsius, which is the internal temperature of a healthy human being. This is one of the most puzzling 'biological' aspects of the relic."
              },
              {
                question: "Has NASA officially studied it?",
                answer: "While NASA as an agency doesn't usually study religious relics, many individual NASA consultants and biophysicists, like Philip Callahan and Jody Brant Smith, have used NASA-grade digital and infrared imaging technology to study it and confirmed its inexplicable nature."
              },
              {
                question: "What is the 'Celestial Hum'?",
                answer: "In recent years, researchers discovered that if you map the positions of the stars on the mantle and the centers of the flowers on the tunic onto a musical staff, they produce a perfect, symmetrical, and harmonious melody. There are many recordings of this 'Music of Guadalupe' available online."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Embrace the Mother of the Americas
              </h3>
              <p className="text-text-muted mb-6">
                The miracle of Guadalupe is a calling for every soul to return to the light. Take our quiz to discover your path.
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
