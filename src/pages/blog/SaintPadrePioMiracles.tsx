import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Clock, ArrowLeft, Cross, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintPadrePioMiracles() {
  return (
    <>
      <Helmet>
        <title>St. Padre Pio: Miracles, Bilocation, and the Stigmata | Guide Catholic</title>
        <meta name="description" content="Discover the extraordinary miracles of St. Padre Pio - his bilocation, healing miracles, reading of souls, and the stigmata that lasted 50 years." />
        <meta name="keywords" content="St Padre Pio, Padre Pio miracles, stigmata, bilocation, healing miracles, Catholic saints" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-padre-pio-miracles/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="St. Padre Pio: Miracles, Bilocation, and the Stigmata"
          description="Discover the extraordinary miracles of St. Padre Pio - his bilocation, healing miracles, reading of souls, and the stigmata that lasted 50 years."
          url="https://guidecatholic.com/blog/saint-padre-pio-miracles/"
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
              <span className="text-text">St. Padre Pio Miracles</span>
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
                  Saints & Miracles
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
                St. Padre Pio: Miracles, Bilocation, and the Stigmata
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                St. Padre Pio of Pietrelcina was one of the most extraordinary saints of the 20th century. His miraculous gifts—including the stigmata, bilocation, and reading of souls—drew millions to faith and continue to inspire devotion today.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Sparkles className="w-24 h-24 text-amber-400/20 absolute top-4 right-4" />
              <Cross className="w-32 h-32 text-amber-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              St. Padre Pio of Pietrelcina was one of the most extraordinary saints of the 20th century. His miraculous gifts—including the stigmata, bilocation, and reading of souls—drew millions to faith and continue to inspire devotion today.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Life of Francesco Forgione
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              Born Francesco Forgione on May 25, 1887, in the small farming village of Pietrelcina, Italy, Padre Pio came from a deeply religious family. From childhood, he showed unusual piety—preferring prayer to play and demonstrating a tender love for the poor.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              At age 15, he entered the Capuchin Franciscan novitiate and received the religious name Pio (Pius). Though his health was poor throughout his life, his spiritual fervor was unmatched. He was ordained a priest in 1910 at age 23.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Stigmata: Wounds of Christ
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              On September 20, 1918, while praying before a crucifix in the choir loft of the Church of Our Lady of Grace in San Giovanni Rotondo, Padre Pio received the stigmata—the wounds of Christ crucified.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              The wounds appeared on his hands, feet, and side, and bled without infection or odor. Medical examinations over five decades confirmed that the wounds could not be explained naturally. They caused him constant pain but also united him uniquely with Christ's suffering.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              The stigmata remained with Padre Pio for exactly 50 years. Intriguingly, they disappeared just before his death on September 23, 1968, leaving no scars—a final miracle confirming their divine origin.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Bilocation: Present in Two Places
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              One of the most extraordinary gifts attributed to Padre Pio was bilocation—the ability to be present in two places simultaneously. Hundreds of credible witnesses reported encountering him far from San Giovanni Rotondo while he was physically present in his friary.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              During World War II, numerous Allied pilots reported seeing a Capuchin friar in the sky, warning them to turn back from bombing raids over San Giovanni Rotondo. One pilot even claimed the friar caught his plane by the wing and turned it around. These reports were so consistent that the American Air Force avoided bombing the town.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Reading of Souls
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              Padre Pio possessed the gift of "reading souls"—knowing the hidden sins, thoughts, and spiritual conditions of those who came to him. In the confessional, he would sometimes stop penitents mid-sentence and reveal sins they had forgotten or deliberately concealed.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              This gift, while intimidating, served a pastoral purpose: to bring souls to sincere repentance. Many who had been away from the Church for decades returned to confession after encountering Padre Pio.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Healing Miracles
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              Countless healings were attributed to Padre Pio's intercession—both during his life and after his death. Some notable cases include:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Gemma Di Giorgi:</strong> A girl born without pupils who could miraculously see after Padre Pio's blessing</li>
              <li><strong>Matteo Pio Colella:</strong> A dying child who survived after his parents sought Padre Pio's intercession</li>
              <li><strong>Brother Modestino:</strong> A Capuchin healed of serious injuries after praying to Padre Pio</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Fragrance of Holiness
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              A distinctive characteristic of Padre Pio's presence was a sweet, perfumed fragrance—often described as flowers or incense—that would mysteriously appear around him. This "odor of sanctity" would sometimes linger on letters he had touched or objects he had blessed.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Home for the Relieved Suffering
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              In 1956, Padre Pio founded the Home for the Relieved Suffering—one of the largest hospitals in Southern Italy. Despite never leaving San Giovanni Rotondo, he raised millions for this project through donations from around the world. The hospital continues to serve the sick today.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Canonization and Legacy
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              Padre Pio was canonized by Pope John Paul II on June 16, 2002, before a crowd of 300,000 in Rome. His tomb in San Giovanni Rotondo remains one of the most visited Catholic pilgrimage sites in the world, drawing millions annually.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-padre-pio-miracles">
              His famous spiritual advice remains relevant: "Pray, hope, and don't worry. Anxiety is useless. God is merciful and will hear your prayer."
            </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Pray, hope, and don't worry. Anxiety is useless. God is merciful and will hear your prayer." - St. Padre Pio
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "By his wounds we are healed." - Isaiah 53:5
                </p>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Lord is close to the brokenhearted." - Psalm 34:18
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Did Padre Pio ever deny having the stigmata?",
                answer: "No, though he was humble about the gift. Church authorities initially doubted and even restricted his ministry for years due to skepticism about the stigmata. Eventually, after thorough investigation, the Church confirmed the miraculous nature of his wounds."
              },
              {
                question: "Can I visit where Padre Pio lived?",
                answer: "Yes. San Giovanni Rotondo in southern Italy welcomes millions of pilgrims annually. You can visit his tomb, the church where he celebrated Mass, his cell in the friary, and the hospital he founded. The town has grown into a major pilgrimage destination."
              },
              {
                question: "How can I ask Padre Pio for help?",
                answer: "Simply pray to him as you would any saint. Many people use this simple prayer: 'O St. Padre Pio, who bore the wounds of Christ, intercede for me and bring my request before the throne of God. Pray for me that I may receive the grace I need. Amen.'"
              },
              {
                question: "Are there any approved miracles for his canonization?",
                answer: "Yes. The Church approved several miracles for his beatification and canonization, including miraculous healings attributed to his intercession. These were investigated thoroughly by medical and theological commissions before being approved by the Vatican."
              }
            ]} />

<RelatedArticles currentSlug="saint-padre-pio-miracles" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Begin Your Healing Journey Today
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized prayer guide.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Assessment
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
