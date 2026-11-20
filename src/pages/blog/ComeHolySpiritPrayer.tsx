import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function ComeHolySpiritPrayer() {
  return (
    <>
      <Helmet>
        <title>Come Holy Spirit Prayer: Full Text, Meaning and Catholic Guide | Guide Catholic</title>
        <meta name="description" content="The Come Holy Spirit prayer with full text, meaning, when to pray it, and a Catholic guide to asking the Holy Spirit for wisdom, courage, and renewal." />
        <meta name="keywords" content="come holy spirit prayer, holy spirit prayer, catholic prayer to the holy spirit, come holy spirit full text, prayer for guidance" />
        <link rel="canonical" href="https://guidecatholic.com/blog/come-holy-spirit-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Come Holy Spirit Prayer: Full Text, Meaning and Catholic Guide"
        description="The Come Holy Spirit prayer with full text, meaning, when to pray it, and a Catholic guide to asking the Holy Spirit for wisdom, courage, and renewal."
        url="https://guidecatholic.com/blog/come-holy-spirit-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Come Holy Spirit Prayer", url: "https://guidecatholic.com/blog/come-holy-spirit-prayer/" },
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
              <span className="text-text">Come Holy Spirit Prayer</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Come Holy Spirit Prayer: Full Text, Meaning and Catholic Guide
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Come Holy Spirit prayer is a powerful Catholic prayer for guidance, renewal, courage, and openness to God's will.
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-orange-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Come, Holy Spirit is the classic Catholic invocation — Veni Sancte Spiritus — prayed before decisions, at Confirmation, during Pentecost, and in the novena before Pentecost. Catholics ask the Third Person of the Trinity for wisdom, courage, and gifts that build up the Church.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Come Holy Spirit Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love. Send forth your Spirit and they shall be created. And you shall renew the face of the earth.
                </p>
                <p className="text-text italic leading-relaxed text-lg mt-4">
                  O God, who by the light of the Holy Spirit did instruct the hearts of the faithful, grant that by the same Holy Spirit we may be truly wise and ever enjoy his consolations. Through Christ our Lord. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="come-holy-spirit-prayer">
                Catholics pray Come Holy Spirit before discernment, Scripture reading, exams, difficult conversations, ministry, and moments when the heart feels dry or confused. It is a prayer for the fire of God's love to renew the soul.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Does Come Holy Spirit Mean?</h2>
              <p className="text-text leading-relaxed mb-6">
                This prayer asks the Holy Spirit to fill the faithful, kindle divine love, create new life, and renew the world. It is not merely a request for a feeling. It asks God to change the heart so a person can become wise, faithful, courageous, and holy.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Holy Spirit is the third Person of the Holy Trinity, not an impersonal force. To pray Come Holy Spirit is to invite God himself to act within us.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Latin Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  Veni, Sancte Spiritus, reple tuorum corda fidelium, et tui amoris in eis ignem accende. V. Emitte Spiritum tuum, et creabuntur. R. Et renovabis faciem terrae.
                </p>
                <p className="text-text italic leading-relaxed mt-4">
                  Oremus. Deus, qui corda fidelium Sancti Spiritus illustratione docuisti, da nobis in eodem Spiritu recta sapere, et de eius semper consolatione gaudere. Per Christum Dominum nostrum. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Parts, Three Sources</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="come-holy-spirit-prayer">
                The familiar prayer is really three pieces joined together. The opening invocation is an ancient antiphon that the Roman Missal still uses as the Alleluia verse at Mass on Pentecost Sunday. The versicle and response, "Send forth your Spirit... and you shall renew the face of the earth," come from Psalm 104:30, which praises God as the giver of life to all creation. The closing collect, "O God, who by the light of the Holy Spirit," is an old Roman prayer that served for centuries as the opening prayer of the Pentecost Mass.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Line-by-Line Meaning</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>"Fill the hearts of your faithful":</strong> the request is for the whole Church, not only the person praying, echoing the apostles who were all filled with the Holy Spirit at Pentecost (Acts 2:4).</li>
                <li><strong>"Kindle in them the fire of your love":</strong> fire recalls the tongues as of fire that rested on the disciples (Acts 2:3) and Jesus' saying that he came to cast fire upon the earth (Luke 12:49).</li>
                <li><strong>"They shall be created":</strong> the same Spirit who hovered over the waters at creation (Genesis 1:2) makes believers a new creation.</li>
                <li><strong>"Truly wise":</strong> the Latin "recta sapere" means to savor or have a taste for what is right, a wisdom of the heart and not only of the head.</li>
                <li><strong>"Ever enjoy his consolations":</strong> Jesus calls the Spirit the Paraclete, the Advocate or Consoler who remains with the disciples (John 14:16–17).</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Not to Be Confused With</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="come-holy-spirit-prayer">
                Two other Latin texts share similar opening words. The Veni, Creator Spiritus ("Come, Creator Spirit") is a ninth-century hymn usually attributed to Rabanus Maurus; it is sung at ordinations, at the opening of a papal conclave, and on many solemn occasions, and the Church grants a plenary indulgence for reciting it publicly on January 1 or on Pentecost. The Veni, Sancte Spiritus sequence, often called the Golden Sequence and commonly attributed to Stephen Langton, Archbishop of Canterbury in the early thirteenth century, is sung or recited before the Gospel on Pentecost Sunday, one of the two days when a sequence is obligatory. The short prayer on this page is distinct from both.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Novena Before Pentecost</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="come-holy-spirit-prayer">
                The custom of a nine-day novena comes from Acts 1:14, where the apostles, together with Mary and other disciples, devoted themselves to prayer between the Ascension and Pentecost. In his 1897 encyclical on the Holy Spirit, Divinum Illud Munus, Pope Leo XIII decreed that a novena to the Holy Spirit be made each year in parish churches before Pentecost. This short invocation is a natural way to open each day of that novena, and many Confirmation candidates pray it daily in the weeks before the bishop lays hands on them and prays for the seven gifts named in Isaiah 11:2–3.
              </LinkedText>

              <QuizCTA
                title="Need clarity in your spiritual life?"
                description="Take the Catholic life assessment and receive a personalized guide for prayer, discernment, and growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Should You Pray Come Holy Spirit?</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Before reading the Bible or praying Lectio Divina.</li>
                <li>Before making an important decision.</li>
                <li>Before Confession, Mass, or Eucharistic Adoration.</li>
                <li>When asking for wisdom, courage, patience, or healing.</li>
                <li>During Pentecost and before Confirmation.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Short Come Holy Spirit Prayer</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed">
                  Come, Holy Spirit. Guide my thoughts, purify my desires, strengthen my will, and lead me closer to Jesus. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Come Holy Spirit and Pentecost</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="come-holy-spirit-prayer">
                Pentecost celebrates the descent of the Holy Spirit upon the apostles. The same Spirit who strengthened them for mission still strengthens the Church today. This is why Catholics often pray Come Holy Spirit before evangelization, teaching, service, and spiritual renewal.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray It Well</h2>
              <p className="text-text leading-relaxed mb-6">
                Pray slowly and honestly. Ask the Holy Spirit to show you one concrete next step: a sin to confess, a person to forgive, a truth to accept, a task to begin, or a grace to receive. The prayer becomes powerful when it leads to obedience.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "Is Come Holy Spirit a Catholic prayer?", answer: "Yes. It is a traditional Catholic prayer invoking the Holy Spirit for wisdom, love, renewal, and consolation." },
              { question: "When should I pray Come Holy Spirit?", answer: "Pray it before Scripture reading, discernment, exams, ministry, Confession, Mass, Adoration, or any moment when you need wisdom and courage." },
              { question: "Is the Holy Spirit God?", answer: "Yes. Catholic teaching professes that the Holy Spirit is the third Person of the Holy Trinity, true God with the Father and the Son." },
              { question: "Can I pray this prayer every day?", answer: "Yes. Many Catholics pray Come Holy Spirit daily, especially at the beginning of morning prayer or before important work." },
              { question: "What is Come Holy Spirit in Latin?", answer: "Veni, Sancte Spiritus, reple tuorum corda fidelium, et tui amoris in eis ignem accende. It continues with the versicle from Psalm 104:30 and the collect Deus, qui corda fidelium." },
              { question: "Is this the same as Veni Creator Spiritus?", answer: "No. Veni Creator Spiritus is a longer ninth-century hymn used at ordinations and other solemn occasions. Come Holy Spirit is a short invocation followed by a versicle and a collect." },
              { question: "Where does 'renew the face of the earth' come from?", answer: "From Psalm 104:30, which praises God for sending forth his Spirit to create and renew all living things." },
            ]} />

            <RelatedArticles currentSlug="come-holy-spirit-prayer" />

            <ArticleBottomCTA title="Ask the Holy Spirit for Direction" description="Receive personalized next steps for discernment, prayer, and Catholic growth." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
