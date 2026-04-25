import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, Calendar, Clock, ArrowLeft, Heart, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function FaithAndAnxiety() {
  return (
    <>
      <Helmet>
        <title>Faith and Anxiety: Finding Peace Through Catholic Spirituality | Guide Catholic</title>
        <meta name="description" content="Discover how Catholic faith helps overcome anxiety. Learn spiritual practices for mental health, when to seek professional help, and finding God's peace." />
        <meta name="keywords" content="faith and anxiety, Catholic mental health, overcoming anxiety, spiritual peace, anxiety relief" />
        <link rel="canonical" href="https://guidecatholic.com/blog/faith-and-anxiety/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Faith and Anxiety: Finding Peace Through Catholic Spirituality"
          description="Discover how Catholic faith helps overcome anxiety. Learn spiritual practices for mental health, when to seek professional help, and finding God's peace."
          url="https://guidecatholic.com/blog/faith-and-anxiety/"
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
              <span className="text-text">Faith and Anxiety</span>
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
                  Mental Health & Faith
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Faith and Anxiety: Finding Peace Through Catholic Spirituality
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Anxiety affects millions of Catholics worldwide. While faith offers powerful resources for peace, understanding the relationship between spiritual practice and mental health is essential for authentic healing.
              </p>
            </header>

            <div className="aspect-video bg-teal-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Brain className="w-24 h-24 text-teal-400/20 absolute top-4 right-4" />
              <Heart className="w-32 h-32 text-teal-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
                Anxiety affects millions of Catholics worldwide. While faith offers powerful resources for peace, understanding the relationship between spiritual practice and mental health is essential for authentic healing.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Understanding Anxiety
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
                Anxiety is a natural human response to perceived threats. However, when anxiety becomes chronic, excessive, or disproportionate to actual danger, it can become a disorder requiring treatment. The Catholic Church recognizes anxiety as a real condition—St. Teresa of Calcutta and St. Padre Pio both experienced severe anxiety and spiritual dryness while remaining holy.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              What Scripture Says About Anxiety
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              Scripture addresses anxiety directly. St. Paul writes: "Have no anxiety at all, but in everything, by prayer and petition, with thanksgiving, make your requests known to God. Then the peace of God that surpasses all understanding will guard your hearts and minds in Christ Jesus" (Philippians 4:6-7).
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              Jesus Himself addresses worry: "Do not worry about your life, what you will eat or drink... Can any of you by worrying add a single moment to your life-span?" (Matthew 6:25-27). These passages offer spiritual wisdom, not condemnation.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Spiritual Practices for Anxiety
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Rosary as Meditation
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              The rhythmic repetition of the Rosary induces a meditative state that calms the nervous system. The engagement of mind, body (fingers on beads), and spirit creates holistic focus. Many anxiety sufferers find the Rosary particularly helpful during anxious episodes.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Breathing with the Jesus Prayer
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              The ancient Jesus Prayer—"Lord Jesus Christ, Son of God, have mercy on me, a sinner"—can be synchronized with breathing. Breathe in: "Lord Jesus Christ, Son of God." Breathe out: "Have mercy on me, a sinner." This practice combines contemplative prayer with calming breath work.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Eucharistic Adoration
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              Sitting quietly in the presence of Christ in the Eucharist provides profound peace. The silence, the sacred space, and Christ's Real Presence create an environment where anxiety often naturally subsides. Even brief visits bring calm.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Saints Who Struggled
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              Many saints experienced what we would now recognize as anxiety:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>St. Thérèse of Lisieux:</strong> Experienced debilitating anxiety but offered it as sacrifice</li>
              <li><strong>St. Ignatius of Loyola:</strong> Suffered severe scrupulosity and obsessive thoughts</li>
              <li><strong>Venerable Matt Talbot:</strong> Overame severe anxiety and alcoholism through faith</li>
            </ul>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              These saints show that anxiety does not indicate weak faith. Rather, faith provides resources to carry anxiety with trust in God.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              When to Seek Professional Help
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              The Church encourages professional mental health care when needed. Signs that anxiety requires professional treatment include:
            </LinkedText>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li>Persistent anxiety lasting more than two weeks</li>
              <li>Panic attacks or physical symptoms (racing heart, chest pain)</li>
              <li>Avoidance of normal activities due to fear</li>
              <li>Sleep disturbances affecting daily functioning</li>
              <li>Suicidal thoughts or severe depression</li>
            </ul>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="faith-and-anxiety">
              Catholic therapists, available through CatholicTherapists.com and similar directories, integrate faith with evidence-based treatment like CBT and medication when appropriate.
            </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Cast all your anxieties on him." - 1 Peter 5:7
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Peace I leave with you." - John 14:27
                </p>
              </div>
              
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Do not be anxious about anything." - Philippians 4:6
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Does anxiety mean I lack faith?",
                answer: "Absolutely not. Anxiety is a biological and psychological condition, not a spiritual failure. Saints like Thérèse of Lisieux experienced severe anxiety while having extraordinary faith. Faith provides resources to cope with anxiety, but anxiety itself is not a sin or sign of weak belief."
              },
              {
                question: "Can prayer cure anxiety?",
                answer: "Prayer can significantly help manage anxiety, bringing peace and perspective. However, clinical anxiety disorders often require additional treatment including therapy and sometimes medication. Prayer works alongside professional treatment, not necessarily as a replacement for it."
              },
              {
                question: "Should I take anxiety medication as a Catholic?",
                answer: "Yes, if prescribed by a doctor. Taking medication for anxiety is morally permissible and often necessary. It is not 'unfaithful' to take medication—God works through medicine as well as miracles. The Church encourages appropriate medical care for mental health conditions."
              },
              {
                question: "What prayer helps with anxiety attacks?",
                answer: "During acute anxiety, simple prayers work best: the Jesus Prayer, Hail Mary, or even just 'Jesus, I trust in You.' The Memorare to Mary is also powerful. Focus on the words and your breathing. Remember that God is with you even in the anxiety."
              }
            ]} />

<RelatedArticles currentSlug="faith-and-anxiety" />

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
