import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function HailMaryPrayer() {
  return (
    <>
      <Helmet>
        <title>Hail Mary Prayer: Full Text, Meaning and How to Pray | Guide Catholic</title>
        <meta name="description" content="The Hail Mary prayer with full text, biblical meaning, history, and a simple guide for praying it with devotion in the Rosary and daily Catholic life." />
        <meta name="keywords" content="hail mary prayer, hail mary full text, hail mary catholic prayer, how to pray hail mary, hail mary meaning, ave maria prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/hail-mary-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Hail Mary Prayer: Full Text, Meaning and How to Pray"
        description="The Hail Mary prayer with full text, biblical meaning, history, and a simple guide for praying it with devotion in the Rosary and daily Catholic life."
        url="https://guidecatholic.com/blog/hail-mary-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Hail Mary Prayer", url: "https://guidecatholic.com/blog/hail-mary-prayer/" },
        ]}
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
              <span className="text-text">Hail Mary Prayer</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Hail Mary Prayer: Full Text, Meaning and How to Pray
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Hail Mary is one of the most beloved Catholic prayers. It is biblical, simple, and deeply centered on Jesus through the intercession of Mary.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Hail Mary is the central Catholic Marian prayer, built from Gabriel&apos;s greeting and Elizabeth&apos;s words in Luke 1, plus a petition for Mary&apos;s intercession at death. Catholics pray it in the Rosary, at the end of Compline, and in countless devotions — it is not worship of Mary but honor and request for her prayers.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Hail Mary Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="hail-mary-prayer">
                Catholics pray the Hail Mary in the Rosary, in the Angelus, in private devotion, and in moments of need. It is not worship of Mary. It is a request for the Mother of God to pray for us and lead us closer to her Son.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where Does the Hail Mary Come From?</h2>
              <p className="text-text leading-relaxed mb-6">
                The first half of the Hail Mary comes directly from Scripture. "Hail, full of grace, the Lord is with you" echoes the angel Gabriel's greeting to Mary at the Annunciation. "Blessed are you among women, and blessed is the fruit of your womb" comes from Elizabeth's greeting at the Visitation.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The second half is the Church's prayerful response: "Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death." It asks Mary to intercede for us in the present moment and at life's final moment.
              </p>

              <QuizCTA
                title="Want to deepen your prayer life?"
                description="Take the Catholic faith assessment and receive practical next steps for prayer and devotion."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Hail Mary Well</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Pray slowly enough to notice the words.</li>
                <li>Pause at the name of Jesus, the center of the prayer.</li>
                <li>Ask Mary to help you trust God as she did.</li>
                <li>Use it in moments of temptation, fear, grief, or gratitude.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Pray the Hail Mary</h2>
              <p className="text-text leading-relaxed mb-6">
                Catholics believe Mary is the Mother of God because Jesus is truly God and truly man. Since Christians ask one another for prayer, Catholics also ask the saints in heaven to pray for us. Mary's intercession is powerful because she is closest to Christ and always points to him.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Hail Mary in the Rosary</h2>
              <p className="text-text leading-relaxed mb-6">
                In the Rosary, the Hail Mary is repeated while meditating on the mysteries of Christ's life, death, and resurrection. The repetition is not empty. It creates a rhythm of prayer that helps the heart remain with Jesus.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "Is the Hail Mary biblical?", answer: "Yes. The first half draws from Luke 1:28 and Luke 1:42. The second half is the Church's petition asking Mary to pray for us." },
              { question: "Do Catholics worship Mary when they pray the Hail Mary?", answer: "No. Worship belongs to God alone. The Hail Mary asks Mary to intercede for us, just as Christians ask one another for prayer." },
              { question: "When should I pray the Hail Mary?", answer: "You can pray it anytime, especially in the Rosary, Angelus, moments of temptation, before sleep, or when asking for Mary's intercession." },
              { question: "Why does the prayer say Mother of God?", answer: "Because Jesus is one divine Person who is truly God and truly man. Mary is the mother of Jesus, so the Church rightly calls her Mother of God." },
            ]} />

            <RelatedArticles currentSlug="hail-mary-prayer" />

            <ArticleBottomCTA title="Grow in Catholic Prayer" description="Receive a personalized plan for deepening your prayer life." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
