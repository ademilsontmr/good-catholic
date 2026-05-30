import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function GraceAfterMealsCatholic() {
  return (
    <>
      <Helmet>
        <title>Grace After Meals: Catholic Prayer Text and When to Say It | Guide Catholic</title>
        <meta name="description" content="Grace after meals Catholic prayer with full text in English and Latin, when families say it after eating, and how thanksgiving after meals fits Catholic tradition." />
        <meta name="keywords" content="grace after meals catholic, catholic prayer after eating, thanksgiving after meals, grace after meals text, blessing after meals" />
        <link rel="canonical" href="https://guidecatholic.com/blog/grace-after-meals-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Grace After Meals: Catholic Prayer Text and When to Say It"
        description="Grace after meals Catholic prayer with full text in English and Latin, when families say it after eating, and how thanksgiving after meals fits Catholic tradition."
        url="https://guidecatholic.com/blog/grace-after-meals-catholic/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Grace After Meals", url: "https://guidecatholic.com/blog/grace-after-meals-catholic/" },
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
              <span className="text-text">Grace After Meals</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Grace After Meals: Catholic Prayer Text and When to Say It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Catholics thank God before meals — and also after. Grace after meals completes the meal with gratitude and praise.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Utensils className="w-24 h-24 text-amber-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Grace after meals thanks God — &quot;We give thee thanks, Almighty God, for all thy benefits&quot; or the simpler traditional form with Sign of the Cross. It completes the meal blessing and teaches children gratitude.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Common Grace After Meals (English)</h2>
              <p className="text-text leading-relaxed mb-4">
                Many Catholic families use a traditional prayer based on Psalm 145 (sometimes called the "We Give Thee Thanks" prayer):
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  We give Thee thanks for all Thy benefits, O Almighty God, who livest and reignest forever; and may the souls of the faithful departed, through the mercy of God, rest in peace. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="grace-after-meals-catholic">
                Some families pray a shorter thanksgiving or add a Hail Mary. The important part is habit: meals are a natural place to remember that every good gift comes from God.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Latin Form (Traditional)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  Agimus tibi gratias, omnipotens Deus, pro universis beneficiis tuis, qui vivis et regnas in saecula saeculorum. Amen.<br /><br />
                  Et animae fidelium defunctorum per misericordiam Dei requiescant in pace. Amen.
                </p>
              </div>

              <QuizCTA
                title="Build Catholic habits at home"
                description="Take the Catholic life assessment for practical steps on prayer, family life, and gratitude."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray Grace After Meals</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>After breakfast, lunch, and dinner as a family.</li>
                <li>After hospitality when someone has cooked for you.</li>
                <li>After parish meals or retreats.</li>
                <li>Any time you want to end a meal with explicit thanks to God.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Grace Before and After: Why Both?</h2>
              <p className="text-text leading-relaxed mb-6">
                Grace before meals asks God's blessing on the food and the time together. Grace after meals looks back in thanksgiving — and, in the traditional text, remembers the faithful departed, linking table fellowship with charity and hope beyond this life.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the Catholic grace after meals?", answer: "A common English form is: We give Thee thanks for all Thy benefits, O Almighty God, who livest and reignest forever; and may the souls of the faithful departed, through the mercy of God, rest in peace. Amen." },
              { question: "Do you have to pray the long form?", answer: "No. Any sincere prayer of thanksgiving after eating is good. Many families use the traditional text, a shorter custom prayer, or add a Hail Mary." },
              { question: "Is grace after meals required by the Church?", answer: "The Church encourages thanksgiving for meals. Exact wording is not mandated for laypeople at home; the tradition is spiritual discipline and gratitude, not legalism." },
              { question: "What about grace before meals?", answer: "Catholics typically pray before eating as well. See our guide to Catholic grace before meals for common texts and tips for families." },
            ]} />

            <RelatedArticles currentSlug="grace-after-meals-catholic" />

            <ArticleBottomCTA title="Strengthen your Catholic home" description="Get a personalized guide for prayer, gratitude, and family faith." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
