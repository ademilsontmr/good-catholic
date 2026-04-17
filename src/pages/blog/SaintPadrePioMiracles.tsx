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

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">St. Padre Pio Miracles</span>
          </nav>

          {/* Back Button */}
          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Saints & Miracles</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              St. Padre Pio: Miracles, Bilocation, and the Stigmata
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              St. Padre Pio of Pietrelcina was one of the most extraordinary saints of the 20th century. His miraculous gifts—including the stigmata, bilocation, and reading of souls—drew millions to faith and continue to inspire devotion today.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Life of Francesco Forgione
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Born Francesco Forgione on May 25, 1887, in the small farming village of Pietrelcina, Italy, Padre Pio came from a deeply religious family. From childhood, he showed unusual piety—preferring prayer to play and demonstrating a tender love for the poor.
            </p>
            <p className="text-text leading-relaxed mb-6">
              At age 15, he entered the Capuchin Franciscan novitiate and received the religious name Pio (Pius). Though his health was poor throughout his life, his spiritual fervor was unmatched. He was ordained a priest in 1910 at age 23.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Stigmata: Wounds of Christ
            </h2>
            <p className="text-text leading-relaxed mb-6">
              On September 20, 1918, while praying before a crucifix in the choir loft of the Church of Our Lady of Grace in San Giovanni Rotondo, Padre Pio received the stigmata—the wounds of Christ crucified.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The wounds appeared on his hands, feet, and side, and bled without infection or odor. Medical examinations over five decades confirmed that the wounds could not be explained naturally. They caused him constant pain but also united him uniquely with Christ's suffering.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The stigmata remained with Padre Pio for exactly 50 years. Intriguingly, they disappeared just before his death on September 23, 1968, leaving no scars—a final miracle confirming their divine origin.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Bilocation: Present in Two Places
            </h2>
            <p className="text-text leading-relaxed mb-6">
              One of the most extraordinary gifts attributed to Padre Pio was bilocation—the ability to be present in two places simultaneously. Hundreds of credible witnesses reported encountering him far from San Giovanni Rotondo while he was physically present in his friary.
            </p>
            <p className="text-text leading-relaxed mb-6">
              During World War II, numerous Allied pilots reported seeing a Capuchin friar in the sky, warning them to turn back from bombing raids over San Giovanni Rotondo. One pilot even claimed the friar caught his plane by the wing and turned it around. These reports were so consistent that the American Air Force avoided bombing the town.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Reading of Souls
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Padre Pio possessed the gift of "reading souls"—knowing the hidden sins, thoughts, and spiritual conditions of those who came to him. In the confessional, he would sometimes stop penitents mid-sentence and reveal sins they had forgotten or deliberately concealed.
            </p>
            <p className="text-text leading-relaxed mb-6">
              This gift, while intimidating, served a pastoral purpose: to bring souls to sincere repentance. Many who had been away from the Church for decades returned to confession after encountering Padre Pio.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Healing Miracles
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Countless healings were attributed to Padre Pio's intercession—both during his life and after his death. Some notable cases include:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Gemma Di Giorgi:</strong> A girl born without pupils who could miraculously see after Padre Pio's blessing</li>
              <li><strong>Matteo Pio Colella:</strong> A dying child who survived after his parents sought Padre Pio's intercession</li>
              <li><strong>Brother Modestino:</strong> A Capuchin healed of serious injuries after praying to Padre Pio</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Fragrance of Holiness
            </h2>
            <p className="text-text leading-relaxed mb-6">
              A distinctive characteristic of Padre Pio's presence was a sweet, perfumed fragrance—often described as flowers or incense—that would mysteriously appear around him. This "odor of sanctity" would sometimes linger on letters he had touched or objects he had blessed.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Home for the Relieved Suffering
            </h2>
            <p className="text-text leading-relaxed mb-6">
              In 1956, Padre Pio founded the Home for the Relieved Suffering—one of the largest hospitals in Southern Italy. Despite never leaving San Giovanni Rotondo, he raised millions for this project through donations from around the world. The hospital continues to serve the sick today.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Canonization and Legacy
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Padre Pio was canonized by Pope John Paul II on June 16, 2002, before a crowd of 300,000 in Rome. His tomb in San Giovanni Rotondo remains one of the most visited Catholic pilgrimage sites in the world, drawing millions annually.
            </p>
            <p className="text-text leading-relaxed mb-6">
              His famous spiritual advice remains relevant: "Pray, hope, and don't worry. Anxiety is useless. God is merciful and will hear your prayer."
            </p>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
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
              ]}
            />

            <RelatedArticles currentSlug="saint-padre-pio-miracles" />
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link to="/blog/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
