import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function FastingAndAbstinence() {
  return (
    <>
      <Helmet>
        <title>Fasting and Abstinence: Practices That Strengthen the Soul | Good Catholic</title>
        <meta name="description" content="Learn about the practices of fasting and abstinence in the Catholic Church. Discover when and how to fast correctly to grow in spiritual life." />
        <meta name="keywords" content="catholic fasting how to, meat abstinence friday, when to fast, lent fasting, days of fasting and abstinence, catholic penance" />
        <link rel="canonical" href="https://goodcatholic.com/blog/fasting-abstinence/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="bg-primary text-button-text py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </div>
              <span className="font-display text-xl font-bold">Good Catholic</span>
            </Link>
            <Link to="/quiz">
              <Button variant="secondary" size="sm">
                Take the Quiz
              </Button>
            </Link>
          </div>
        </header>

        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Fasting and Abstinence</span>
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
                  Spirituality
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  November 20, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Fasting and Abstinence: Practices That Strengthen the Soul
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Fasting and abstinence are ancient penitential practices that help us master
                our passions and draw closer to God.
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Fasting and abstinence are fundamental spiritual practices in Christian life, recommended by Jesus Christ Himself and practiced by the faithful since the early days of the Church. Far from being mere legal obligations, these penances are powerful means of spiritual growth, strengthening of the will, and union with Christ in His Passion. Understanding their profound meaning transforms these practices into sources of abundant grace.
              </p>

              <QuizCTA
                title="How is your life of penance?"
                description="Fasting and abstinence are powerful weapons for spiritual growth. Take our quiz and discover how these practices can strengthen your will and bring you closer to God."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Difference Between Fasting and Abstinence
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                What is Fasting?
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Fasting consists of reducing the amount of food consumed. According to Church norms, on obligatory fast days, only one full meal is taken per day, with something light allowed in the morning and evening. Fasting obliges the faithful between 18 and 59 years of age. It is a practice that mortifies the body to free the spirit and better dispose us to prayer and charity.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                What is Abstinence?
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Abstinence refers to the privation of meat or other food determined by ecclesiastical authority. Abstinence from meat obliges all the faithful from 14 years of age. This practice reminds us of Christ's sacrifice and invites us to participate in His Passion, renouncing an appreciated food.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                When to Fast and Abstain?
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Obligatory Fast Days
              </h3>
              <p className="text-text leading-relaxed mb-6">
                In the Latin Church, the obligatory fast days are Ash Wednesday and Good Friday. On these days, in addition to fasting, abstinence from meat is also observed. These are particularly intense penitential days that mark the beginning and climax of the Lenten season.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Obligatory Abstinence Days
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Abstinence from meat should be observed on all Fridays of the year, except when they coincide with a solemnity. Fridays are penitential days because they recall the death of Our Lord Jesus Christ. In some countries, abstinence from meat can be substituted with another form of penance, prayer, or charity, but the tradition of not eating meat remains the most common and recommended practice.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Lent
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Lent is the penitential season par excellence. During the 40 days preceding Easter, the faithful are called to intensify the practices of fasting, prayer, and almsgiving. Even outside the days of obligation, it is praiseworthy to fast and abstain voluntarily during this sacred time.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Spiritual Benefits of Fasting
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Mastery of Passions
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Fasting strengthens the will and helps us master bodily instincts. When we learn to say "no" to the appetite for food, we become more capable of resisting other temptations. Saint John Chrysostom taught that "fasting is the mother of chastity."
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Intensification of Prayer
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Fasting frees the spirit and better disposes us to prayer. When the body is light, the soul rises more easily to God. Therefore, many saints fasted before important moments of prayer or decision.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Solidarity with the Poor
              </h3>
              <p className="text-text leading-relaxed mb-6">
                By voluntarily experiencing hunger, we develop compassion for those who go hungry involuntarily. The money saved from fasting can be given in alms, uniting penance and charity.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Union with Christ
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Jesus fasted 40 days in the desert before beginning His public mission. When we fast, we participate in His penance and unite ourselves more intimately to His Passion. We offer our small sacrifice in union with the great Sacrifice of the Cross.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Practice Fasting Profitably
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Start gradually, especially if you are not accustomed</li>
                <li>Unite fasting with prayer – without prayer, it is mere diet</li>
                <li>Offer your sacrifice for a specific intention</li>
                <li>Do not publicize your fasting (Mt 6:16-18)</li>
                <li>Replace meal times with prayer</li>
                <li>Convert the money saved into alms</li>
                <li>Respect your health limitations</li>
                <li>Maintain joy – Christian fasting is not sadness</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Other Forms of Penance
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Besides food fasting, there are many other forms of mortification and penance we can practice: abstinence from television, social media, or entertainment; practices of silence; works of mercy; patiently bearing the day's contradictions; rising earlier to pray; making genuflections or prostrations during prayer.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The important thing is that penance be offered with love, in a spirit of reparation for one's own and others' sins, and as participation in Christ's redemptive work. A small mortification done with great love is worth more than great sacrifices done without devotion.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Bodily fasting is not sufficient without spiritual fasting. True fasting is abstaining from all evil."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Saint Basil the Great
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="fasting-abstinence" />

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is Going
              </h3>
              <p className="text-text-muted mb-6">
                Take our free quiz and receive a personalized diagnosis of your Catholic journey.
              </p>
              <Link to="/quiz">
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
