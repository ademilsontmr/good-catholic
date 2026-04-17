import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, Calendar, Clock, ArrowLeft, Heart, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function ManagingDepression() {
  return (
    <>
      <Helmet>
        <title>Managing Depression: A Catholic Approach to Mental Health | Guide Catholic</title>
        <meta name="description" content="Discover a Catholic approach to managing depression. Learn about spiritual resources, professional treatment, and finding hope through faith during dark times." />
        <meta name="keywords" content="managing depression, Catholic mental health, depression and faith, spiritual depression, finding hope" />
        <link rel="canonical" href="https://guidecatholic.com/blog/managing-depression/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Managing Depression: A Catholic Approach to Mental Health"
          description="Discover a Catholic approach to managing depression. Learn about spiritual resources, professional treatment, and finding hope through faith during dark times."
          url="https://guidecatholic.com/blog/managing-depression/"
        />

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Managing Depression</span>
          </nav>

          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <Brain className="w-4 h-4" />
              <span>Mental Health</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              Managing Depression: A Catholic Approach to Mental Health
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

          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              Depression affects millions of people, including many faithful Catholics. While the spiritual life offers profound resources for healing, understanding the biological, psychological, and spiritual dimensions of depression is essential for recovery.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Understanding Depression
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Depression is not simply sadness or spiritual dryness—it is a clinical condition affecting mood, energy, sleep, appetite, and cognition. The Catechism acknowledges that psychological factors can diminish moral responsibility (CCC 1735), recognizing that depression is a real condition requiring compassion and treatment.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Saints Who Knew Darkness
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Many saints experienced what would today be recognized as depression. Their stories offer hope that faithfulness and depression can coexist:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>St. Ignatius of Loyola:</strong> Experienced severe desolation and suicidal thoughts before his conversion</li>
              <li><strong>St. Jane Frances de Chantal:</strong> Endured years of spiritual darkness and depression</li>
              <li><strong>Blessed Teresa of Calcutta:</strong> Lived with spiritual darkness for decades while serving the poor</li>
              <li><strong>St. Thérèse of Lisieux:</strong> Faced periods of intense sadness and temptation to despair</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Spiritual Resources for Depression
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Sacrament of Reconciliation
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Depression often brings feelings of worthlessness and guilt. The sacrament of Confession offers healing from sin while providing pastoral guidance. A compassionate priest can help distinguish between genuine sin and the distorted thinking depression causes.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Eucharist: Medicine of Immortality
            </h3>
            <p className="text-text leading-relaxed mb-6">
              St. Ignatius of Antioch called the Eucharist the "medicine of immortality." Receiving Holy Communion, even when it doesn't feel consoling, unites us with Christ who experienced abandonment on the cross. The sacrament provides grace that sustains us through darkness.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Psalms of Lament
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The Book of Psalms provides divinely inspired words for those in darkness. Psalm 88 expresses raw despair: "My soul is filled with troubles... You have plunged me into the bottom of the pit." Praying these psalms gives voice to suffering while orienting the heart toward God.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Professional Treatment Is Essential
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Moderate to severe depression requires professional treatment. The Church encourages Catholics to seek:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Psychotherapy:</strong> Particularly cognitive-behavioral therapy (CBT) and interpersonal therapy</li>
              <li><strong>Psychiatric Care:</strong> When medication may be necessary</li>
              <li><strong>Support Groups:</strong> Connection with others who understand</li>
              <li><strong>Medical Evaluation:</strong> To rule out physical causes</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Practical Daily Strategies
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Small steps matter enormously when battling depression:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Structure:</strong> Maintain basic routines even when motivation is low</li>
              <li><strong>Movement:</strong> Gentle exercise releases mood-enhancing chemicals</li>
              <li><strong>Light:</strong> Get natural sunlight; consider light therapy in winter</li>
              <li><strong>Connection:</strong> Resist isolation; reach out even when it's hard</li>
              <li><strong>Spiritual Practice:</strong> Simplified prayer when full practice feels impossible</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Hope and Recovery
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Depression is treatable. With proper care, most people recover fully or learn to manage symptoms effectively. The darkness is not permanent. As Psalm 30 promises: "Weeping may stay for the night, but rejoicing comes in the morning."
            </p>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
                {
                  question: "Is depression a punishment from God?",
                  answer: "No. Depression is a medical condition with biological, psychological, and environmental causes. It is not a punishment for sin or a sign of weak faith. God permits suffering but does not directly cause depression as punishment. Many holy people have experienced depression while remaining close to God."
                },
                {
                  question: "Can I receive Communion if I am depressed?",
                  answer: "Yes, absolutely. The Eucharist is particularly important during depression. If attending Mass feels overwhelming, ask someone to accompany you or sit near the exit. Even brief visits to church for prayer can be valuable. You are always welcome at the Lord's Table."
                },
                {
                  question: "What if prayer feels empty during depression?",
                  answer: "This is very common. Continue praying even without consolation—the act of faithfulness itself is a prayer. Simplify your practice: just a Hail Mary, the Sign of the Cross, or sitting silently in a church. God receives these simple offerings with great love."
                },
                {
                  question: "When should I seek emergency help?",
                  answer: "Seek immediate help if you have thoughts of harming yourself, cannot care for basic needs, experience psychotic symptoms, or feel unable to keep yourself safe. Call emergency services, a suicide hotline (988 in the US), or go to an emergency room. Depression can become life-threatening and requires urgent care."
                }
              ]}
            />

            <RelatedArticles currentSlug="managing-depression" />
          </div>

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
