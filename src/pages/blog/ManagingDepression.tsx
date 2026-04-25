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
import { LinkedText } from "@/components/blog/LinkedText";

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

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Managing Depression</span>
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
                  Mental Health
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Managing Depression: A Catholic Approach to Mental Health
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Depression affects millions of people worldwide, including faithful Catholics. While spiritual resources offer profound help, understanding when and how to integrate professional mental health care is essential for authentic healing.
              </p>
            </header>

            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Sun className="w-24 h-24 text-blue-400/20 absolute top-4 right-4" />
              <Heart className="w-32 h-32 text-blue-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="managing-depression">
                Depression affects millions of people worldwide, including faithful Catholics. While spiritual resources offer profound help, understanding when and how to integrate professional mental health care is essential for authentic healing.
              </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Saints Who Knew Darkness
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="managing-depression">
              Many saints experienced what would today be recognized as depression. Their stories offer hope that faithfulness and depression can coexist:
            </LinkedText>
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
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="managing-depression">
              Depression often brings feelings of worthlessness and guilt. The sacrament of Confession offers healing from sin while providing pastoral guidance. A compassionate priest can help distinguish between genuine sin and the distorted thinking depression causes.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Eucharist: Medicine of Immortality
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="managing-depression">
              St. Ignatius of Antioch called the Eucharist the "medicine of immortality." Receiving Holy Communion, even when it doesn't feel consoling, unites us with Christ who experienced abandonment on the cross. The sacrament provides grace that sustains us through darkness.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Psalms of Lament
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="managing-depression">
              The Book of Psalms provides divinely inspired words for those in darkness. Psalm 88 expresses raw despair: "My soul is filled with troubles... You have plunged me into the bottom of the pit." Praying these psalms gives voice to suffering while orienting the heart toward God.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Professional Treatment Is Essential
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="managing-depression">
              Moderate to severe depression requires professional treatment. The Church encourages Catholics to seek:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Psychotherapy:</strong> Particularly cognitive-behavioral therapy (CBT) and interpersonal therapy</li>
              <li><strong>Psychiatric Care:</strong> When medication may be necessary</li>
              <li><strong>Support Groups:</strong> Connection with others who understand</li>
              <li><strong>Medical Evaluation:</strong> To rule out physical causes</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Practical Daily Strategies
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="managing-depression">
              Small steps matter enormously when battling depression:
            </LinkedText>
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
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="managing-depression">
              Depression is treatable. With proper care, most people recover fully or learn to manage symptoms effectively. The darkness is not permanent. As Psalm 30 promises: "Weeping may stay for the night, but rejoicing comes in the morning."
            </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Lord is close to the brokenhearted." - Psalm 34:18
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Weeping may stay for the night, but rejoicing comes in the morning." - Psalm 30:5
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Come to me, all who labor and are heavy laden." - Matthew 11:28
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
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
            ]} />

<RelatedArticles currentSlug="managing-depression" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Begin Your Healing Journey Today
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized prayer guide.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Assessment
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
