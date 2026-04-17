import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function ActOfContrition() {
  return (
    <>
      <Helmet>
        <title>The Act of Contrition: Full Text, Meaning and How to Pray It | Guide Catholic</title>
        <meta name="description" content="Discover the full text of the Act of Contrition, its meaning, history, and how to pray it before Confession. Essential Catholic prayer for forgiveness and reconciliation." />
        <meta name="keywords" content="act of contrition, act of contrition prayer, catholic act of contrition, prayer before confession" />
        <link rel="canonical" href="https://guidecatholic.com/blog/act-of-contrition/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="The Act of Contrition: Full Text, Meaning and How to Pray It"
          description="Discover the full text of the Act of Contrition, its meaning, history, and how to pray it before Confession. Essential Catholic prayer for forgiveness and reconciliation."
          url="https://guidecatholic.com/blog/act-of-contrition/"
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
              <span className="text-text">Act of Contrition</span>
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
                  Prayers
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Act of Contrition: Full Text, Meaning and How to Pray It
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Act of Contrition is the prayer of a repentant heart — a sincere expression of sorrow for sin and a firm resolve to amend one's life. It is the essential prayer of the Sacrament of Confession.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Every Catholic who has ever gone to Confession knows the moment: the priest has listened to your sins, offered counsel, and assigned a penance. Then he asks you to make an Act of Contrition. In that moment, you are invited to speak directly to God from the depths of your heart — to express genuine sorrow for having offended Him and to resolve, with His grace, to sin no more.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Act of Contrition is not merely a formula to be recited. It is a prayer that, when prayed with sincerity, disposes the soul to receive the fullness of God's forgiveness in the Sacrament of Reconciliation. Understanding its words, its history, and its theological depth can transform this prayer from a routine recitation into a profound encounter with God's mercy.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Traditional Act of Contrition (Full Text)
              </h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Traditional Version</h3>
                <p className="text-text leading-relaxed italic">
                  O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Contemporary Version (USCCB)</h3>
                <p className="text-text leading-relaxed italic">
                  My God, I am sorry for my sins with all my heart. In choosing to do wrong and failing to do good, I have sinned against you whom I should love above all things. I firmly intend, with your help, to do penance, to sin no more, and to avoid whatever leads me to sin. Our Savior Jesus Christ suffered and died for us. In his name, my God, have mercy. Amen.
                </p>
              </div>

              <QuizCTA
                title="How is your relationship with the Sacrament of Confession?"
                description="Regular Confession is one of the greatest gifts of the Catholic faith. Take our quiz and discover how to deepen your experience of God's mercy and forgiveness."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Meaning Behind Each Part
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "I am heartily sorry for having offended Thee"
              </h3>
              <p className="text-text leading-relaxed mb-6">
                This opening phrase establishes the essential disposition for valid contrition: genuine sorrow. The word "heartily" is significant — it means from the heart, not merely from the lips. The Catechism of the Catholic Church teaches that contrition is "sorrow of the soul and detestation for the sin committed, together with the resolution not to sin again" (CCC 1451). Without this interior sorrow, the prayer is empty.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "Because they offend Thee, my God, who art all good"
              </h3>
              <p className="text-text leading-relaxed mb-6">
                This is the heart of perfect contrition — being sorry not primarily because of fear of punishment, but because sin offends God who is infinitely good and worthy of all love. The Church distinguishes between perfect contrition (motivated by love of God) and imperfect contrition or "attrition" (motivated by fear of hell or the ugliness of sin). Both are valid for the Sacrament of Confession, but perfect contrition is the higher form.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "I firmly resolve, with the help of Thy grace, to sin no more"
              </h3>
              <p className="text-text leading-relaxed mb-6">
                This is the "firm purpose of amendment" — the sincere intention to avoid sin in the future. Notice the phrase "with the help of Thy grace." This is theologically crucial: we do not resolve to avoid sin by our own willpower alone, but by relying on God's grace. This humility is essential. Without a genuine intention to change, the sacrament cannot be validly received.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "And to avoid the near occasions of sin"
              </h3>
              <p className="text-text leading-relaxed mb-6">
                An "occasion of sin" is any person, place, or thing that leads us toward sin. The Church requires that we not only resolve to avoid sin itself but also to avoid the circumstances that make sin likely. This is practical wisdom: if you know that a certain situation consistently leads you to fall, you must take steps to avoid that situation.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                History of the Act of Contrition
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Act of Contrition as a formal prayer developed gradually in the history of the Church. In the early centuries, public penance was the norm for serious sins, and expressions of sorrow were part of the penitential rite. As private confession became more common in the medieval period (largely through the influence of Irish monks), formalized prayers of contrition began to appear in penitential manuals.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Council of Trent (1545–1563) gave definitive theological clarity to the doctrine of contrition, distinguishing between perfect and imperfect contrition and affirming the necessity of a firm purpose of amendment. The traditional form of the Act of Contrition that most American Catholics learned grew out of this Tridentine tradition and was standardized in catechisms from the 17th century onward.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                When to Pray the Act of Contrition
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Before Confession:</strong> Pray it in the confessional after confessing your sins</li>
                <li><strong>During the Examination of Conscience:</strong> As you prepare for Confession</li>
                <li><strong>At night:</strong> As part of your evening prayer, reviewing the day's faults</li>
                <li><strong>After any sin:</strong> Perfect contrition, prayed with the intention to confess, restores the soul to grace</li>
                <li><strong>In danger of death:</strong> When a priest is unavailable, perfect contrition with the intention to confess reconciles the soul to God</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Perfect vs. Imperfect Contrition
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church teaches that there are two forms of contrition. Perfect contrition arises from love of God — being sorry because sin offends God who is infinitely good. This form of contrition, when accompanied by the intention to receive the Sacrament of Confession, immediately reconciles the soul to God even before the sacrament is received.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Imperfect contrition (attrition) arises from other motives — fear of hell, the ugliness of sin, or the loss of heaven. While this is a lesser form of contrition, it is still sufficient for the valid reception of the Sacrament of Confession. The grace of the sacrament elevates imperfect contrition and brings about full reconciliation with God.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Contrition is the most important act of the penitent, and is necessary for the forgiveness of sins."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catechism of the Catholic Church, 1451
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Is there one official version of the Act of Contrition?",
                answer: "No, there is no single official version. The Catholic Church accepts any sincere expression of contrition that includes sorrow for sin and a firm purpose of amendment. The traditional version ('O my God, I am heartily sorry...') and the contemporary USCCB version are both widely used in the United States."
              },
              {
                question: "Do I have to say the Act of Contrition out loud in Confession?",
                answer: "You can pray it aloud or silently. The priest may ask you to pray it aloud so he can hear it, or he may pray it with you. What matters is the sincerity of the prayer, not whether it is spoken aloud."
              },
              {
                question: "Can the Act of Contrition forgive sins outside of Confession?",
                answer: "Perfect contrition — being sorry for sin out of love for God — can restore the soul to grace even outside of Confession, provided you have the intention to confess as soon as possible. However, this does not replace the Sacrament of Confession, which is required for mortal sins."
              },
              {
                question: "What is the difference between contrition and attrition?",
                answer: "Contrition (perfect) is sorrow for sin motivated by love of God. Attrition (imperfect contrition) is sorrow motivated by fear of punishment or the ugliness of sin. Both are valid for Confession, but perfect contrition is the higher and more meritorious form."
              },
              {
                question: "How often should I pray the Act of Contrition?",
                answer: "Many spiritual directors recommend praying the Act of Contrition daily as part of an evening examination of conscience. This practice keeps us humble, aware of our need for God's mercy, and disposed to receive His forgiveness regularly through the Sacrament of Confession."
              }
            ]} />

<RelatedArticles currentSlug="act-of-contrition" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Quiz Now
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
