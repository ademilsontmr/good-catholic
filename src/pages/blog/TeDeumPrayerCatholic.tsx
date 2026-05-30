import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function TeDeumPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Te Deum Prayer: Full Catholic Text & When the Church Sings It | Guide Catholic</title>
        <meta name="description" content="The Te Deum laudamus with full Catholic text in English, history as the Church's great hymn of thanksgiving, and when it is sung in the U.S. (Easter, ordinations, victories)." />
        <meta name="keywords" content="te deum prayer, te deum laudamus, te deum full text, catholic hymn of thanksgiving, te deum english" />
        <link rel="canonical" href="https://guidecatholic.com/blog/te-deum-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Te Deum Prayer: Full Catholic Text & When the Church Sings It" description="The Te Deum laudamus with full Catholic text in English, history as the Church's great hymn of thanksgiving, and when it is sung in the U.S. (Easter, ordinations, victories)." url="https://guidecatholic.com/blog/te-deum-prayer-catholic/" datePublished="2026-05-31" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Te Deum", url: "https://guidecatholic.com/blog/te-deum-prayer-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Te Deum</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 31, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Te Deum Prayer: Full Catholic Text & When the Church Sings It</h1>
              <p className="text-xl text-text-muted leading-relaxed">Te Deum laudamus — We praise you, O God — is the Catholic Church's ancient hymn of thanksgiving, sung at Easter Vigils, ordinations, and moments of national or personal grace.</p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10"><Music2 className="w-24 h-24 text-amber-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Te Deum (Opening — English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-3">
                <p>You are God: we praise you; You are the Lord: we acclaim you; You are the eternal Father: all creation worships you.</p>
                <p>To you all angels, all the powers of heaven, cherubim and seraphim, sing in endless praise: Holy, holy, holy Lord, God of power and might, heaven and earth are full of your glory.</p>
                <p>The glorious company of apostles praise you. The noble fellowship of prophets praise you. The white-robed army of martyrs praise you. Throughout the world the holy Church acclaims you...</p>
                <p className="text-text-muted not-italic text-xs">The full hymn continues with praise of Christ the Savior and a plea for mercy. Catholic prayer books and hymnals print the complete text.</p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="te-deum-prayer-catholic">From cathedrals in New York to small Midwest parishes, the Te Deum still marks great occasions — a reminder that gratitude belongs at the center of Catholic worship.</LinkedText>
              <QuizCTA title="Grow in liturgical prayer" description="Take the Catholic life assessment for a personalized guide to worship and spiritual life." />
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When the Te Deum Is Used</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Easter Vigil and solemnities of joy.</li>
                <li>Ordinations and consecrations.</li>
                <li>Traditional thanksgiving after deliverance or special grace.</li>
                <li>End of the Church year in some communities.</li>
              </ul>
            </div>
            <BlogFAQ faqs={[
              { question: "What does Te Deum mean?", answer: "It is Latin for You, O God — the opening words Te Deum laudamus (We praise you, O God)." },
              { question: "Is the Te Deum in the Bible?", answer: "It is an early Christian hymn, not a biblical psalm, though it is steeped in Scripture and apostolic faith." },
              { question: "Can families pray the Te Deum?", answer: "Yes. It is appropriate for Thanksgiving, baptisms, weddings, or any occasion calling for solemn praise." },
              { question: "Is the Te Deum the same as the Gloria at Mass?", answer: "No. The Gloria is the hymn of praise in the Mass. The Te Deum is a separate, longer thanksgiving hymn used on special occasions." },
            ]} />
            <RelatedArticles currentSlug="te-deum-prayer-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
