import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Briefcase, Calendar, Clock, ArrowLeft, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function DignityOfWork() {
  return (
    <>
      <Helmet>
        <title>The Dignity of Work: Catholic Social Teaching on Labor | Guide Catholic</title>
        <meta name="description" content="Discover Catholic social teaching on work and labor. Learn about the dignity of workers, just wages, rights of laborers, and St. Joseph the Worker as patron." />
        <meta name="keywords" content="dignity of work, catholic social teaching, labor rights, workers rights, just wage, St. Joseph the Worker" />
        <link rel="canonical" href="https://guidecatholic.com/blog/dignity-of-work/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="The Dignity of Work: Catholic Social Teaching on Labor"
          description="Discover Catholic social teaching on work and labor. Learn about the dignity of workers, just wages, rights of laborers, and St. Joseph the Worker as patron."
          url="https://guidecatholic.com/blog/dignity-of-work/"
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
              <span className="text-text">Dignity of Work</span>
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
                  Social Teaching
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Dignity of Work: Catholic Social Teaching on Labor
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Work is not merely a means to earn a living—it is a fundamental dimension of human dignity. Discover how Catholic social teaching elevates the dignity of workers and calls for just conditions in the workplace.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Briefcase className="w-24 h-24 text-emerald-400/20 absolute top-4 right-4" />
              <Briefcase className="w-32 h-32 text-emerald-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Work is not merely a means to earn a living—it is a fundamental dimension of human dignity. Discover how Catholic social teaching elevates the dignity of workers and calls for just conditions in the workplace.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Work as Participation in Creation
              </h2>
            <p className="text-text leading-relaxed mb-6">
              From the beginning, God placed humanity in the Garden "to cultivate and care for it" (Genesis 2:15). Work is not a punishment from the Fall—it predates it. Through work, human beings participate in God's creative activity and cooperate in the unfolding of the created world.
            </p>
            <p className="text-text leading-relaxed mb-6">
              St. John Paul II, in his encyclical Laborem Exercens (On Human Work), taught that work is "a fundamental dimension of human existence on earth." Through work, we not only transform nature but also achieve personal fulfillment as human beings.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Dignity of the Worker
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Catholic social teaching insists that workers are not mere instruments of production—they are persons with inherent dignity. This dignity demands that work conditions respect the whole person: body, mind, and spirit.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Rights of Workers
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The Church teaches that workers have fundamental rights that must be respected:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Right to Work:</strong> Access to employment is essential to human dignity</li>
              <li><strong>Just Wage:</strong> A family wage sufficient to support a family with dignity</li>
              <li><strong>Safe Working Conditions:</strong> Protection from hazards and exploitation</li>
              <li><strong>Rest and Leisure:</strong> Including the Lord's Day and reasonable work hours</li>
              <li><strong>Freedom of Association:</strong> Right to form unions and bargain collectively</li>
              <li><strong>Economic Initiative:</strong> Freedom to start businesses and own property</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Just Wage
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Church has consistently taught that workers deserve a "family wage"—sufficient not merely for survival but to support a family in dignity. Pope Leo XIII's Rerum Novarum (1891) declared that laborers who toil for others must be paid enough to provide for their families.
            </p>
            <p className="text-text leading-relaxed mb-6">
              As St. John Paul II wrote, "Remuneration for labor is to be such that man may be furnished the means to cultivate worthily his own material, social, cultural, and spiritual life and that of his dependents."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              St. Joseph the Worker: Patron of Laborers
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Church honors St. Joseph as the patron of workers. This humble carpenter who provided for the Holy Family exemplifies the dignity of labor. Pope Pius XII established the feast of St. Joseph the Worker on May 1, reclaiming the day from communist associations and rooting it in authentic Christian teaching about labor.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Work as a Path to Holiness
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The universal call to holiness extends to the workplace. St. Josemaría Escrivá founded Opus Dei to help ordinary people sanctify their daily work. He taught that work, done well and offered to God, becomes a path to sanctity.
            </p>
            <p className="text-text leading-relaxed mb-6">
              "Sanctity is made of small things," St. Josemaría taught. "The Christian vocation consists precisely in this: to make our work a prayer, and our prayer a work."
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Challenges in the Modern Workplace
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The modern economy presents new challenges to workers' dignity:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Precarious Employment:</strong> Gig economy and temporary contracts</li>
              <li><strong>Exploitative Conditions:</strong> Sweatshops, forced labor, and trafficking</li>
              <li><strong>Income Inequality:</strong> Growing gap between rich and poor</li>
              <li><strong>Technology and Automation:</strong> Displacement of workers</li>
              <li><strong>Work-Life Balance:</strong> Pressure to work excessive hours</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              A Call to Action
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Catholic teaching on labor is not merely theoretical—it demands action. Catholics are called to:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Advocate for just wages and working conditions in their workplaces</li>
              <li>Support businesses that treat workers with dignity</li>
              <li>Work for laws that protect labor rights</li>
              <li>Sanctify their own work by offering it to God</li>
              <li>Remember the poor and unemployed in their prayers</li>
            </ul>

            <QuizCTA />

            <BlogFAQ
              faqs={[
                {
                  question: "Does the Church support workers' unions?",
                  answer: "Yes. Catholic social teaching consistently supports the right of workers to form associations and unions. Pope Leo XIII stated that workers must be permitted to organize to protect their interests. The Church sees unions as essential to authentic solidarity and justice in economic life."
                },
                {
                  question: "What about business owners and entrepreneurs?",
                  answer: "The Church also affirms the right to private property and economic initiative. Business owners have a vocation to create wealth, provide employment, and serve the common good. However, this must be balanced with responsibility toward workers and society."
                },
                {
                  question: "How can I sanctify my ordinary work?",
                  answer: "Offer your work to God each morning. Do your work with excellence as an offering to God. Treat colleagues and customers with charity. Maintain ethical standards even when costly. Offer difficulties and setbacks with patience. Remember that God works through your work."
                },
                {
                  question: "Is unemployment a sin?",
                  answer: "No. Unemployment is often caused by economic factors beyond individual control. The Church calls society to provide support for the unemployed and help them find dignified work. The unemployed retain their full dignity and are called to offer their suffering and continue seeking employment."
                }
              ]} />

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The laborer deserves his wages." - 1 Timothy 5:18
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23
                </p>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Commit your work to the Lord, and your plans will be established." - Proverbs 16:3
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="dignity-of-work" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover Your Vocation
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized guide to finding meaning in your work.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Vocation Assessment
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
