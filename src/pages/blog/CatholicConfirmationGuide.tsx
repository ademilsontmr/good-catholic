import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flame, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function CatholicConfirmationGuide() {
  return (
    <>
      <Helmet>
        <title>Catholic Confirmation: What It Is and How to Prepare | Guide Catholic</title>
        <meta name="description" content="Complete guide to Catholic Confirmation. Learn what Confirmation is, the seven gifts of the Holy Spirit, how to choose a sponsor and confirmation name, the rite, and how to prepare spiritually." />
        <meta name="keywords" content="catholic confirmation, confirmation sacrament, preparing for confirmation, confirmation age, confirmation sponsor" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-confirmation-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Catholic Confirmation Guide</span>
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
                  Sacraments
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Confirmation: What It Is and How to Prepare
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Confirmation is the sacrament in which the Holy Spirit comes upon the confirmed with His seven gifts, strengthening them to live and defend the faith as mature disciples of Christ. It is not a graduation from the Church — it is a deeper commissioning into it.
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                On the day of Pentecost, the Holy Spirit descended upon the Apostles in tongues of fire, transforming frightened disciples into bold witnesses who would turn the world upside down. Confirmation is the sacrament that continues this Pentecost in the life of every Catholic. Through it, the baptized receive the fullness of the Holy Spirit and are strengthened to be witnesses of Christ in the world.
              </p>

              <p className="text-text leading-relaxed mb-6">
                In the United States, Confirmation is typically received between the ages of 7 and 18, depending on the diocese. Some dioceses confirm in middle school; others wait until high school. Regardless of when it's received, the sacrament is the same — and the preparation for it matters enormously.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Is Confirmation?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Confirmation is the second Sacrament of Initiation (after Baptism and before the Eucharist in the order of initiation, though in practice it often follows First Communion). The Catechism teaches that "by the sacrament of Confirmation, the baptized are more perfectly bound to the Church and are enriched with a special strength of the Holy Spirit. Hence they are, as true witnesses of Christ, more strictly obliged to spread and defend the faith by word and deed" (CCC 1285).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Like Baptism, Confirmation imprints an indelible spiritual character on the soul and can never be repeated. It deepens and completes the grace of Baptism, bringing the confirmed into a more mature relationship with the Holy Spirit.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Seven Gifts of the Holy Spirit
              </h2>
              <p className="text-text leading-relaxed mb-6">
                At Confirmation, the Holy Spirit bestows seven gifts upon the confirmed. These gifts are supernatural dispositions that perfect the natural virtues and enable the person to respond promptly to the inspirations of the Holy Spirit. They are rooted in Isaiah 11:2–3 and have been part of Catholic teaching since the early Church.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Seven Gifts of the Holy Spirit</h3>
                <ul className="list-none text-text space-y-3">
                  <li><strong>Wisdom</strong> — enables us to see all things from God's perspective and to love what God loves</li>
                  <li><strong>Understanding</strong> — deepens our grasp of the truths of faith, helping us penetrate their meaning</li>
                  <li><strong>Counsel (Right Judgment)</strong> — helps us make good decisions in accordance with God's will</li>
                  <li><strong>Fortitude (Courage)</strong> — strengthens us to stand firm in faith and overcome obstacles and fears</li>
                  <li><strong>Knowledge</strong> — helps us see the world as God sees it and recognize the path to salvation</li>
                  <li><strong>Piety (Reverence)</strong> — fills us with love and reverence for God and all that is sacred</li>
                  <li><strong>Fear of the Lord (Wonder and Awe)</strong> — gives us a profound respect for God's majesty and a horror of offending Him</li>
                </ul>
              </div>

              <QuizCTA
                title="Are you living the gifts of the Holy Spirit?"
                description="The Holy Spirit gives us everything we need to live as bold disciples. Take our quiz to discover how the Spirit is working in your life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Rite of Confirmation
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Confirmation is ordinarily conferred by the bishop, who is the fullness of the priesthood and the visible sign of unity with the universal Church. In some circumstances, a priest may be delegated to confirm (such as when confirming adults at the Easter Vigil or in danger of death).
              </p>
              <p className="text-text leading-relaxed mb-6">
                The essential rite of Confirmation consists of the anointing with Sacred Chrism (a mixture of olive oil and balsam, consecrated by the bishop at the Chrism Mass on Holy Thursday) on the forehead, done by the laying on of the hand, with the words: "Be sealed with the Gift of the Holy Spirit." The candidate responds: "Amen." The bishop then says: "Peace be with you," and the candidate responds: "And with your spirit."
              </p>
              <p className="text-text leading-relaxed mb-6">
                The anointing with Chrism is rich in symbolism. Oil signifies strength, healing, and consecration. The fragrance of the Chrism represents the "aroma of Christ" (2 Corinthians 2:15). The anointing on the forehead — the seat of the mind and will — signifies that the confirmed is marked as belonging to Christ and is strengthened to profess the faith publicly.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Choosing a Confirmation Sponsor
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Every candidate for Confirmation must have a sponsor — a practicing Catholic who accompanies them through the preparation process and presents them to the bishop at the rite. The sponsor's role is to support the candidate's faith formation and serve as a model of Catholic life.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The requirements for a Confirmation sponsor are similar to those for a Baptism godparent: the sponsor must be a confirmed, practicing Catholic who has received all three Sacraments of Initiation, is at least 16 years old, and is not the parent of the candidate. It is a beautiful tradition to choose your Baptism godparent as your Confirmation sponsor, symbolizing the continuity between the two sacraments.
              </p>
              <p className="text-text leading-relaxed mb-6">
                When choosing a sponsor, look for someone who takes their faith seriously, attends Mass regularly, and can genuinely support you in your spiritual life — not just someone who is Catholic by name. The sponsor-candidate relationship can be one of the most formative spiritual friendships of your life.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Choosing a Confirmation Name
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In many dioceses, candidates choose a Confirmation name — the name of a saint who will serve as their special patron and model. This is a beautiful tradition that connects the confirmed to the Communion of Saints and gives them a heavenly intercessor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                When choosing a Confirmation name, don't just pick a saint because you like the name. Research the saint's life, spirituality, and patronage. Ask yourself: Does this saint's life inspire me? Do I share any of their struggles or gifts? Can I look to them as a model for my own life? Pray to the saint and ask for their intercession as you prepare for Confirmation.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Note that not all dioceses require a Confirmation name. Check with your parish or diocese to find out their practice.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Prepare Spiritually for Confirmation
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Confirmation preparation programs vary by diocese and parish, but typically involve one to two years of catechesis, service projects, retreats, and regular Mass attendance. Beyond the formal program, here are ways to prepare your heart:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Go to Confession before Confirmation — receive the sacrament with a clean soul</li>
                <li>Pray daily, especially to the Holy Spirit: "Come, Holy Spirit, fill the hearts of your faithful..."</li>
                <li>Read about the seven gifts and ask God to increase them in you</li>
                <li>Study the life of your chosen patron saint</li>
                <li>Attend Mass with greater attention and devotion</li>
                <li>Perform acts of service and charity</li>
                <li>Spend time in Eucharistic Adoration</li>
                <li>Talk with your sponsor about your faith and questions</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love. Send forth your Spirit and they shall be created, and you shall renew the face of the earth."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Traditional Prayer to the Holy Spirit
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholic-confirmation-guide" />

            <BlogFAQ faqs={[
              {
                question: "At what age do Catholics receive Confirmation?",
                answer: "In the United States, the age for Confirmation varies by diocese. Some dioceses confirm in 7th or 8th grade (around age 12–14), while others wait until 10th or 11th grade (around age 15–17). The Code of Canon Law states that Confirmation should be conferred around the age of discretion (Canon 891), but allows bishops' conferences to set a different age. Check with your diocese for the specific age in your area."
              },
              {
                question: "Can an adult receive Confirmation if they were never confirmed?",
                answer: "Yes. Adults who were baptized Catholic but never confirmed can receive the sacrament at any time. Contact your parish to inquire about adult Confirmation preparation. In many cases, adults can be confirmed at the Easter Vigil alongside RCIA candidates, or at a diocesan Confirmation Mass."
              },
              {
                question: "Is Confirmation necessary for salvation?",
                answer: "Confirmation is not strictly necessary for salvation in the same way Baptism is. However, it is a sacrament instituted by Christ for our benefit, and Catholics who have the opportunity to receive it are obliged to do so. Deliberately refusing Confirmation without serious reason would be a failure to cooperate with God's grace."
              },
              {
                question: "What is the difference between a Confirmation sponsor and a Baptism godparent?",
                answer: "A Baptism godparent is chosen at Baptism to support the baptized person's faith formation from infancy. A Confirmation sponsor is chosen at Confirmation to accompany the candidate through preparation and present them at the rite. The same person can serve in both roles — in fact, it is encouraged to choose your Baptism godparent as your Confirmation sponsor to emphasize the connection between the two sacraments."
              },
              {
                question: "What happens if I miss my Confirmation preparation classes?",
                answer: "Missing classes can delay your Confirmation. Most programs require a certain level of attendance and participation. If you miss sessions, communicate with your parish's religious education director as soon as possible. In some cases, you may be able to make up missed content; in others, you may need to wait until the following year's class."
              }
            ]} />

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
