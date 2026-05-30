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
      <ArticleSchema title="Te Deum Prayer: Full Catholic Text & When the Church Sings It" description="The Te Deum laudamus with full Catholic text in English, history as the Church's great hymn of thanksgiving, and when it is sung in the U.S. (Easter, ordinations, victories)." url="https://guidecatholic.com/blog/te-deum-prayer-catholic/" datePublished="2026-05-30" />
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Te Deum Prayer: Full Catholic Text & When the Church Sings It</h1>
              <p className="text-xl text-text-muted leading-relaxed">Te Deum laudamus — We praise you, O God — is the Catholic Church's ancient hymn of thanksgiving, sung at Easter Vigils, ordinations, and moments of national or personal grace.</p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10"><Music2 className="w-24 h-24 text-amber-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Te Deum is an ancient hymn of praise — &quot;We praise you, O God; we acclaim you as Lord&quot; — sung at Morning Prayer, victories, ordinations, and Thanksgiving. Catholics use it to thank God for blessings; it professes faith in Trinity, Church, and eternal life.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Te Deum — Full Text (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-3">
                <p>You are God: we praise you; You are the Lord: we acclaim you; You are the eternal Father: all creation worships you.</p>
                <p>To you all angels, all the powers of heaven, cherubim and seraphim, sing in endless praise: Holy, holy, holy Lord, God of power and might, heaven and earth are full of your glory.</p>
                <p>The glorious company of apostles praise you. The noble fellowship of prophets praise you. The white-robed army of martyrs praise you. Throughout the world the holy Church acclaims you: Father, of majesty unbounded, your true and only Son, worthy of all worship, and the Holy Spirit, advocate and guide.</p>
                <p>You, Christ, are the king of glory, the eternal Son of the Father. When you became man to set us free you did not spurn the Virgin&apos;s womb. You overcame the sting of death and opened the kingdom of heaven to all believers. You are seated at God&apos;s right hand in glory. We believe that you will come and be our judge. Come then, Lord, and help your people, bought with the price of your own blood, and bring us with your saints to glory everlasting.</p>
                <p className="not-italic font-medium pt-2">Save your people, Lord, and bless your inheritance. Govern and uphold them now and always. Day by day we bless you. We praise your name forever. Keep us today, Lord, from all sin. Have mercy on us, Lord, have mercy. Lord, show us your love and mercy, for we put our trust in you. In you, Lord, is our hope: let us never be put to shame.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">History of the Te Deum</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="te-deum-prayer-catholic">The Te Deum is one of the oldest hymns in Christian worship, possibly from the 4th or 5th century. Tradition once attributed it to Sts. Ambrose and Augustine at Hippo; scholars now treat that story as legend while affirming its antiquity. It entered the Roman Breviary and has been sung at victories, coronations, and deliverances — including thanksgiving after World War II in many U.S. cathedrals. The hymn&apos;s structure moves from praise of the Trinity to Christological confession to urgent pleas for mercy.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When the Te Deum Is Used</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Easter Vigil and solemnities</strong> — especially when the Church rejoices in resurrection grace.</li>
                <li><strong>Ordinations and consecrations</strong> — bishops, priests, and deacons often receive the Te Deum after the rite.</li>
                <li><strong>Canonical hours</strong> — Sunday Morning Prayer in the Liturgy of the Hours includes the Te Deum (except in Lent).</li>
                <li><strong>Thanksgiving and national occasions</strong> — historically after peace treaties or recovery from disaster.</li>
                <li><strong>Personal milestones</strong> — baptisms, weddings, or anniversaries of sobriety or conversion in some families.</li>
              </ul>

              <QuizCTA title="Grow in liturgical prayer" description="Take the Catholic life assessment for a personalized guide to worship and spiritual life." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Te Deum vs. Gloria at Mass</h2>
              <p className="text-text leading-relaxed mb-6">The Gloria is the shorter hymn of praise in the Mass (&quot;Glory to God in the highest…&quot;). The Te Deum is longer, structured as a creed-like hymn with intercession. Both glorify God; the Te Deum is reserved for special solemnity outside the ordinary Mass or as an extension of the Office. Many Americans first hear the Te Deum sung in Latin chant at cathedral ordinations.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying the Te Deum at Home</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="te-deum-prayer-catholic">On Thanksgiving Day, after a safe delivery of a child, or when a family member completes RCIA, reading the Te Deum aloud gives solemn voice to gratitude. Pair it with one Our Father and a decade of the Rosary. From cathedrals in New York to small Midwest parishes, the Te Deum still marks great occasions — a reminder that gratitude belongs at the center of Catholic worship.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "What does Te Deum mean?", answer: "It is Latin for You, O God — the opening words Te Deum laudamus (We praise you, O God)." },
              { question: "Is the Te Deum in the Bible?", answer: "It is an early Christian hymn, not a biblical psalm, though it is steeped in Scripture and apostolic faith." },
              { question: "Can families pray the Te Deum?", answer: "Yes. It is appropriate for Thanksgiving, baptisms, weddings, or any occasion calling for solemn praise." },
              { question: "Is the Te Deum the same as the Gloria at Mass?", answer: "No. The Gloria is the hymn of praise in the Mass. The Te Deum is a separate, longer thanksgiving hymn used on special occasions." },
              { question: "Is the Te Deum sung in Lent?", answer: "In the Liturgy of the Hours, the Te Deum is omitted on Sundays of Lent and during the Lenten season as a sign of penance." },
              { question: "Who wrote the Te Deum?", answer: "The author is unknown. Early tradition named Ambrose and Augustine; modern scholars date the hymn to the late Roman period without a single named author." },
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
