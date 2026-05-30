import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SignOfTheCrossCatholic() {
  return (
    <>
      <Helmet>
        <title>Sign of the Cross: How Catholics Do It, Words and Meaning | Guide Catholic</title>
        <meta name="description" content="Learn how to make the Sign of the Cross the Catholic way — the words in English and Latin, left to right, when to use it, and what this ancient gesture means." />
        <meta name="keywords" content="sign of the cross catholic, how to do sign of the cross, sign of the cross words, sign of the cross latin, catholic blessing sign" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sign-of-the-cross-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Sign of the Cross: How Catholics Do It, Words and Meaning"
        description="Learn how to make the Sign of the Cross the Catholic way — the words in English and Latin, left to right, when to use it, and what this ancient gesture means."
        url="https://guidecatholic.com/blog/sign-of-the-cross-catholic/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Sign of the Cross", url: "https://guidecatholic.com/blog/sign-of-the-cross-catholic/" },
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
              <span className="text-text">Sign of the Cross</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 13, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Sign of the Cross: How Catholics Do It, Words and Meaning
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Sign of the Cross is one of the first things Catholics learn — and one of the most powerful. Here is how to do it, what to say, and why it matters.
              </p>
            </header>

            <div className="aspect-video bg-stone-100 rounded-2xl flex items-center justify-center mb-10">
              <Cross className="w-24 h-24 text-stone-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Learn how to make the Sign of the Cross the Catholic way — the words in English and Latin, left to right, when to use it, and what this ancient gesture means.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Make the Sign of the Cross (Catholic)</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Touch your forehead.</li>
                <li>Touch the center of your chest.</li>
                <li>Touch your left shoulder, then your right shoulder.</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                Catholics move from left to right on the shoulders (unlike many Eastern Christians, who often move right to left). The gesture traces a cross on your body while you profess faith in the Holy Trinity.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Words (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  In the name of the Father, and of the Son, and of the Holy Spirit. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Words (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  In nomine Patris, et Filii, et Spiritus Sancti. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sign-of-the-cross-catholic">
                The Sign of the Cross is not superstition. It is a brief profession of faith in the Trinity and in the saving cross of Jesus Christ. It begins and ends prayer, blesses people and things, and marks the rhythm of Catholic life from Baptism onward.
              </LinkedText>

              <QuizCTA
                title="Want to deepen your Catholic habits?"
                description="Take the Catholic life assessment and receive practical next steps for prayer, sacraments, and daily faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Make the Sign of the Cross</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>At the start and end of personal prayer.</li>
                <li>When entering a church.</li>
                <li>Before the Gospel at Mass.</li>
                <li>When receiving a blessing.</li>
                <li>When passing a Catholic church where the Blessed Sacrament is reserved.</li>
                <li>In moments of temptation, fear, gratitude, or grief.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Does the Sign of the Cross Mean?</h2>
              <p className="text-text leading-relaxed mb-6">
                You invoke the Father, Son, and Holy Spirit — the one God in three Persons. You unite yourself to the cross of Christ. You ask God to sanctify your mind (forehead), heart (chest), and strength (shoulders) for his service.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "Do Catholics do the Sign of the Cross left to right?", answer: "In the Latin (Roman) tradition, Catholics typically touch the left shoulder first, then the right. Many Eastern Catholic traditions use right to left. Both express the same faith in the Trinity." },
              { question: "What are the words of the Sign of the Cross?", answer: "In English: In the name of the Father, and of the Son, and of the Holy Spirit. Amen. In Latin: In nomine Patris, et Filii, et Spiritus Sancti. Amen." },
              { question: "Is the Sign of the Cross only for Catholics?", answer: "Many Christians use a form of the Sign of the Cross. Catholics use it as a daily prayer, blessing, and reminder of Baptism into Christ's death and resurrection." },
              { question: "Can I bless myself with holy water?", answer: "Yes. Many Catholics bless themselves with holy water when entering a church, making the Sign of the Cross as they do." },
            ]} />

            <RelatedArticles currentSlug="sign-of-the-cross-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Grow in Catholic Prayer</h3>
              <p className="text-text-muted mb-6">Receive a personalized plan for prayer and sacramental life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
