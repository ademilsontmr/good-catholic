import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ApostlesCreedPrayer() {
  return (
    <>
      <Helmet>
        <title>Apostles' Creed: Full Text, Meaning and Catholic Explanation | Guide Catholic</title>
        <meta name="description" content="The Apostles' Creed with full Catholic text, meaning, history, and a clear explanation of each article of faith for prayer, RCIA, and the Rosary." />
        <meta name="keywords" content="apostles creed, apostles creed prayer, apostles creed catholic, apostles creed full text, what is the apostles creed, apostles creed meaning" />
        <link rel="canonical" href="https://guidecatholic.com/blog/apostles-creed-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Apostles' Creed: Full Text, Meaning and Catholic Explanation"
        description="The Apostles' Creed with full Catholic text, meaning, history, and a clear explanation of each article of faith for prayer, RCIA, and the Rosary."
        url="https://guidecatholic.com/blog/apostles-creed-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Apostles' Creed", url: "https://guidecatholic.com/blog/apostles-creed-prayer/" },
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
              <span className="text-text">Apostles' Creed</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Apostles' Creed: Full Text, Meaning and Catholic Explanation
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Apostles' Creed is a compact summary of the Christian faith. Catholics pray it in the Rosary, teach it in formation, and profess the truths received from the apostles.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <ScrollText className="w-24 h-24 text-indigo-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Apostles&apos; Creed with full Catholic text, meaning, history, and a clear explanation of each article of faith for prayer, RCIA, and the Rosary.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Apostles' Creed Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="apostles-creed-prayer">
                The Apostles' Creed is shorter than the Nicene Creed, but it expresses the same essential faith: the Trinity, creation, the Incarnation, the Passion, the Resurrection, the Church, forgiveness, and eternal life.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Is It Called the Apostles' Creed?</h2>
              <p className="text-text leading-relaxed mb-6">
                It is called the Apostles' Creed because it summarizes the apostolic faith handed down by the Church. An ancient tradition associated its twelve articles with the twelve apostles, though the exact text developed over time in the early Church's baptismal profession of faith.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Do Catholics Pray the Apostles' Creed?</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>At the beginning of the Rosary.</li>
                <li>In personal prayer and catechesis.</li>
                <li>In some liturgical contexts, especially connected to baptismal faith.</li>
                <li>During formation for children, converts, and adults learning the faith.</li>
              </ul>

              <QuizCTA
                title="Do you know the faith you profess?"
                description="Take the Catholic faith assessment and receive a personalized guide for growing in doctrine and prayer."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Creed in Simple Terms</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>I believe in God the Father:</strong> God is Creator and loving Father.</li>
                <li><strong>I believe in Jesus Christ:</strong> Jesus is true God and true man, our Lord and Savior.</li>
                <li><strong>He suffered, died, and rose:</strong> the Paschal Mystery is the center of salvation.</li>
                <li><strong>I believe in the Holy Spirit:</strong> God dwells in and sanctifies the Church.</li>
                <li><strong>I believe in the Church:</strong> Christ gathers believers into one holy communion.</li>
                <li><strong>I believe in forgiveness and resurrection:</strong> sin and death do not have the final word.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Apostles' Creed vs Nicene Creed</h2>
              <p className="text-text leading-relaxed mb-6">
                The Apostles' Creed is older in form and simpler in expression. The Nicene Creed is more detailed, especially about the divinity of Christ and the Holy Spirit, because it responded to early heresies. Catholics use both, but the Nicene Creed is the normal profession at Sunday Mass.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Creed Well</h2>
              <p className="text-text leading-relaxed mb-6">
                Pray it slowly as an act of faith, not merely as a memorized text. When you say "I believe," renew your trust in God. When you mention Christ's suffering and resurrection, remember that your life is united to his victory.
              </p>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="apostles-creed-prayer">The Apostles&apos; Creed with full Catholic text, meaning, history, and a clear explanation of each article of faith for prayer, RCIA, and the Rosary. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="apostles-creed-prayer">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="apostles-creed-prayer">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="apostles-creed-prayer">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Apostles&apos; Creed, you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "Is the Apostles' Creed in the Bible?", answer: "The exact text is not a single Bible passage, but its teachings summarize biblical faith and the apostolic preaching of the Church." },
              { question: "Do Catholics use the Apostles' Creed?", answer: "Yes. Catholics commonly pray it in the Rosary and teach it as a basic summary of the faith." },
              { question: "What is the difference between the Apostles' Creed and the Nicene Creed?", answer: "The Apostles' Creed is shorter and often used devotionally. The Nicene Creed is more detailed and is normally professed at Sunday Mass." },
              { question: "Why does the Creed say Jesus descended into hell?", answer: "It means Christ truly entered the realm of the dead and proclaimed victory to the righteous who awaited redemption. It does not mean he suffered damnation." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="apostles-creed-prayer" />

            <ArticleBottomCTA title="Strengthen Your Catholic Foundation" description="Get a personalized guide for growing in doctrine, prayer, and sacramental life." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
