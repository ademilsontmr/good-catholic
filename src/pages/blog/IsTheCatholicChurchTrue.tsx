import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Shield, Sparkles, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function IsTheCatholicChurchTrue() {
  return (
    <>
      <Helmet>
        <title>Is the Catholic Church the True Church? | Expert Apologetics Guide</title>
        <meta name="description" content="Is the Catholic Church the true Church? Learn about the four marks of the Church, apostolic succession, the primacy of Peter, and historical continuity." />
        <meta name="keywords" content="is the catholic church the true church, one true church catholic, why catholic church, marks of the church, apostolic succession, Peter keys of the kingdom" />
        <link rel="canonical" href="https://guidecatholic.com/blog/is-the-catholic-church-the-true-church/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Is the Catholic Church the True Church? What Catholics Believe"
        description="Is the Catholic Church the true Church? Learn about the four marks of the Church, apostolic succession, historical continuity from Peter, and why Catholics believe the Church was founded by Christ."
        url="https://guidecatholic.com/blog/is-the-catholic-church-the-true-church/"
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
              <span className="text-text">Is the Catholic Church the True Church?</span>
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
                  Doctrine
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  26 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The One, Holy, Catholic, and Apostolic Church: A Defense of Truth
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Is the Catholic Church the one true Church?" This question is the cornerstone of Christian identity. With over 45,000 denominations today, the claim of the Catholic Church rests not on modern preference, but on an unbroken chain of <strong>Apostolic Succession</strong> and the explicit promise of Jesus Christ.
              </p>
            </header>

            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Landmark className="w-24 h-24 text-blue-400/20 absolute -bottom-4 -right-4" />
               <Cross className="w-32 h-32 text-blue-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="is-the-catholic-church-the-true-church">
                In the Nicene Creed, we profess faith in "One, Holy, Catholic, and Apostolic Church." These are the four "Marks" that serve as the fingerprint of the institution founded by Christ. For a Catholic, history is not a suggestion—it is a witness.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Primacy of Peter: The Keys of the Kingdom
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In <strong>Matthew 16:18-19</strong>, Jesus changes Simon's name to <em>Kepha</em> (Rock) and promises: "I will give you the keys of the kingdom of heaven." 
              </p>
              <p className="text-text leading-relaxed mb-6">
                To an ancient Jew, this language was unmistakable. It referred back to <strong>Isaiah 22:22</strong>, where the Davidic King would appoint a "Prime Minister" (the *Al Bayit*) who held the keys and would "open and no one shall shut." Jesus was appointing Peter as the visible steward of His Kingdom until His return. This office did not die with Peter; it was meant to be passed on, just as the office of the Prime Minister in Israel was a continuous role.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Apostolic Succession</h3>
                  <p className="text-sm">Every Catholic Bishop today was ordained by someone, who was ordained by someone, in a line that goes back to the Apostles. Unlike many denominations founded in the 16th century or later, the Catholic Church was founded in 33 AD.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Defectibility vs. Indefectibility</h3>
                  <p className="text-sm">While individual members (and even Popes) can be sinful (defectibility), Jesus promised that "the gates of hell shall not prevail" against the Church itself (indefectibility). The truth of the faith remains intact even when its servants fail.</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. "Catholic" from the Beginning
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Skeptics claim the Catholic Church was a later invention of Constantine. However, the term <strong>"Catholic"</strong> (from the Greek <em>Katholikos</em> - "universal") was used as early as 107 AD by **Saint Ignatius of Antioch**. 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="is-the-catholic-church-the-true-church">
                He wrote: *"Where the Bishop is, there let the people be; as where Jesus Christ is, there is the Catholic Church."* By the end of the first century, the Church already saw itself as a singular, global body with a unified hierarchy, not a loose collection of independent congregations.
              </LinkedText>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Shield className="w-6 h-6 text-blue-600" />
                  The Historical Witness of St. Irenaeus
                </h3>
                <p className="text-text mb-4 text-sm text-center italic">Written around 180 AD in 'Against Heresies'</p>
                <p className="text-text text-sm leading-relaxed">
                  Irenaeus, who was a pupil of Polycarp (who was a pupil of St. John the Apostle), argued that the way to know the true faith was to look at the lineage of the Bishops of Rome. He explicitly listed the Popes from Peter to his own day to prove that the Catholic Church was the repository of Apostolic truth.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. The Logic of One Truth
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Truth is, by definition, exclusive. If one denomination says infant baptism is necessary and another says it is forbidden, both cannot be right. Jesus prayed for His followers to be <strong>"one as we are one" (John 17:21)</strong>. 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="is-the-catholic-church-the-true-church">
                The Catholic Church maintains this unity through the Magisterium (The teaching office). Without a final authority (the Pope), the Bible becomes a "wax nose" that can be twisted to mean anything, leading to the fragmentation we see in modern Christianity.
              </LinkedText>

              <QuizCTA
                title="Do you belong to the family of the Apostles?"
                description="Take our quiz to explore the historical roots of your faith and see if your beliefs align with the 2,000-year-old tradition of the Church."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 Vatican II and "Subsist"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In the document <em>Lumen Gentium</em>, the Church clarified that the Church of Christ "subsists in" the Catholic Church. This means that while elements of truth and sanctification are found outside her visible boundaries (in other Christian communities), the <strong>fullness</strong>—all seven sacraments, the full Creed, and the valid Priesthood—is only found in the Catholic Church.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "To be deep in history is to cease to be Protestant." — St. John Henry Newman
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Didn't Constantine 'create' the Catholic Church?",
                answer: "No. Constantine merely legalized Christianity (313 AD). The doctrines (Real Presence, Papacy, Marian devotion) are all documented in the writings of the Church Fathers centuries before Constantine was even born."
              },
              {
                question: "What about the bad Popes in history?",
                answer: "The existence of bad Popes (like those in the Borgia family) actually proves the Church is divine. Any purely human institution headed by such corruption would have collapsed in a few decades. The Church survived because its truth doesn't depend on the personal holiness of the messenger, but on the promise of the Founder."
              },
              {
                question: "Can non-Catholics be saved?",
                answer: "The Church teaches that those who, through no fault of their own, do not know the Gospel or the Church, but seek God with a sincere heart, can achieve salvation. However, all salvation flows through Christ, and Christ is united to His Body, which is the Church."
              }
            ]} />

<RelatedArticles currentSlug="is-the-catholic-church-the-true-church" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Come Back to the Source
              </h3>
              <p className="text-text-muted mb-6">
                The Church is your home. Take our quiz to take the next step in coming closer to the heart of the faith.
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
