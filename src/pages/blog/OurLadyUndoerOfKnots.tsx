import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Hand, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function OurLadyUndoerOfKnots() {
  return (
    <>
      <Helmet>
        <title>Our Lady Undoer of Knots: History and Novena | Guide Catholic</title>
        <meta name="description" content="Discover the history of Our Lady Undoer of Knots, why Pope Francis loves this devotion, and how to pray the novena to untie the difficult knots in your life." />
        <meta name="keywords" content="our lady undoer of knots, mary undoer of knots novena, history of undoer of knots, pope francis devotion mary, how to pray undoer of knots" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-undoer-of-knots/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Our Lady Undoer of Knots: History and complete Novena Guide"
        description="Discover the history of Our Lady Undoer of Knots, why Pope Francis loves this devotion, and how to pray the novena to untie the difficult knots in your life."
        url="https://guidecatholic.com/blog/our-lady-undoer-of-knots/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Our Lady Undoer of Knots", url: "https://guidecatholic.com/blog/our-lady-undoer-of-knots/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Our Lady Undoer of Knots</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Devotions
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
                Our Lady Undoer of Knots: The History and The Novena
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                We all have "knots" in our lives—problems that seem hopelessly tangled, relationships that are broken, or habits we cannot overcome. This 300-year-old devotion, popularized worldwide by Pope Francis, reminds us that no knot is too tight for the Mother of God to untie.
              </p>
            </header>

            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
              <Hand className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Our Lady Undoer of Knots (Maria Knotenlöserin) is a devotion to Mary untying life&apos;s problems — inspired by a Baroque painting and promoted by Pope Francis. Catholics pray for her help with marriage, family, and seemingly impossible tangles.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <p className="text-text leading-relaxed mb-6">
                The image of <em>Maria Knotenlöserin</em> (Mary, Undoer of Knots) is more than a beautiful painting; it is a theological statement. It is based on a meditation by Saint Irenaeus of Lyons in the 2nd century, who wrote: <strong>"The knot of Eve's disobedience was untied by Mary's obedience."</strong>
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The History: A Marriage Saved
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The story behind the devotion begins in Bavaria in the early 1600s. According to the family tradition, a nobleman named Wolfgang Langenmantel and his wife, Sophia, were close to separating. Around 1615 Wolfgang sought counsel from Father Jakob Rem, a Jesuit at Ingolstadt known for his Marian piety. During their final meeting, Father Rem took the couple's wedding ribbon (used in the ceremony to bind their hands as a sign of union) and lifted it up before an image of the Blessed Virgin. 
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The tradition says that as he smoothed the ribbon, the knots came loose and the ribbon turned bright white, and the couple reconciled. This account comes from family memory and was never investigated or declared miraculous by the Church. Generations later, their grandson commissioned a painting of Mary untying the knots in thanksgiving.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Pope Francis and the Worldwide Spread
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                For centuries, the devotion was mostly local to Bavaria. In the 1980s, a young priest from Argentina named Jorge Mario Bergoglio, the future Pope Francis, encountered the image while studying in Germany in 1986. He brought postcards of it back to Argentina and began sharing the devotion.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                As Archbishop of Buenos Aires and later as Pope, he continued to spread this prayer, seeing it as the perfect remedy for the "tangled" lives of modern people.
              </LinkedText>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-4 text-center">How to Pray the Novena</h3>
                <p className="text-text mb-4">
                  The Novena to Our Lady Undoer of Knots is typically prayed over nine days. It is often combined with the Rosary.
                </p>
                <div className="space-y-4">
                  <p className="text-text italic">
                    "Holy Mary, Mother of God and our Mother, you who with a mother's face untie the knots that make us stumble in life, I place into your hands the ribbon of my life. You know the knot that paralyzes me [mention your request]. I entrust it to your mercy. Through your intercession and by the power of your Son, my Liberator, may I see this knot untied for the glory of God. Amen."
                  </p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Painting: Schmidtner, Augsburg, c. 1700
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The grandson was Hieronymus Ambrosius Langenmantel, a priest and canon of the church of St. Peter am Perlach in Augsburg. Around 1700 he asked the Baroque painter Johann Georg Melchior Schmidtner to create an altarpiece for the family's side altar there. The original still hangs in that church, a short walk from Augsburg's town hall, and pilgrims from Latin America now visit it regularly.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                Schmidtner painted Mary standing on a crescent moon beneath a crown of twelve stars, the imagery of the woman clothed with the sun in Revelation 12:1. In the lower part of the canvas a small figure walks with an angel and a dog, usually identified as Tobias guided by the Archangel Raphael from the Book of Tobit, a traveler's story that fits a man journeying to seek counsel. Some interpreters see Wolfgang himself in that figure.
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Eve's Knot and Mary's Faith in the Catechism
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The theology behind the image is much older than the painting. Writing around 180 in his work Against Heresies, St. Irenaeus of Lyons contrasted Eve and Mary: Eve's disobedience tied a knot that Mary's obedience loosened, because what one virgin bound by unbelief, the other set free by faith. The Catechism quotes this passage directly when it explains Mary's role in salvation (CCC 494).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The contrast rests on Scripture. Genesis 3 describes the first refusal of God's word, and Genesis 3:15 promises enmity between the serpent and the woman's offspring. At the Annunciation, Mary answers the angel with her yes, Let it be done to me according to your word (Luke 1:38). Catholic teaching is careful here: Mary does not untie anything by her own power. Her role, the Catechism explains, flows from Christ's unique mediation and depends entirely on it (CCC 970; 1 Timothy 2:5).
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                From Buenos Aires to the Wider Church
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                After Bergoglio's return, a copy of the image was enthroned in 1996 at the parish of San José del Talar in Buenos Aires, where long lines of pilgrims formed, especially on the eighth day of each month. The devotion spread quickly through Argentina and Brazil and then to Hispanic communities in the United States, where many parishes now display the image. It remains a private devotion: the Church encourages it as a form of Marian prayer, but no apparition or approved miracle is attached to it.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What are the "Knots" in your life?
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The "knots" we face can be many things:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-8">
                <li><strong>Family Knots:</strong> Resentment, lack of communication, or broken marriages.</li>
                <li><strong>Internal Knots:</strong> Guilt, anxiety, addiction, or deep-seated fears.</li>
                <li><strong>External Knots:</strong> Financial struggles, unemployment, or legal issues.</li>
              </ul>

              <QuizCTA
                title="Do you feel stuck in your spiritual journey?"
                description="Take our quiz to find the devotions and prayers that can help you move forward with peace."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Understanding the Painting's Symbols
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The famous painting contains specific details that help us meditate:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>The Angels:</strong> One angel hands Mary the tangled ribbon of our lives; the other receives the smoothed, untied ribbon on the other side.</li>
                <li><strong>The Holy Spirit:</strong> A dove is positioned above Mary's head, showing that she acts by the power of the Spirit.</li>
                <li><strong>The Twelve Stars and Moon:</strong> Taken from Revelation 12:1, they identify Mary as the woman who stands against the dragon.</li>
                <li><strong>The Traveler Below:</strong> A small figure walking with an angel, commonly read as Tobias and the Archangel Raphael, a reminder that God sends guidance on hard journeys.</li>
                <li><strong>The Serpent:</strong> Mary is shown crushing the head of the serpent, proving that the ultimate "knot" of sin has been defeated by Christ through her.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "Mary, who unties the knots, pray for us."
                </p>
            </div>

              </div>

            <BlogFAQ faqs={[
              {
                question: "Can I pray this novena for someone else?",
                answer: "Yes. Many people pray this novena for children who have left the faith, for friends in debt, or for family members struggling with addiction. Mary's maternal care extends to all her children."
              },
              {
                question: "Do I have to pray it for 9 days in a row?",
                answer: "The tradition of a novena is nine days, representing the nine days the Apostles prayed in the Upper Room before Pentecost. If you miss a day, simply continue where you left off. The most important thing is the horizontal of your heart, not the legalism of the calendar."
              },
              {
                question: "Why does Pope Francis love this devotion so much?",
                answer: "Pope Francis often speaks about 'mercy' and 'closeness.' He sees Mary not as a distant queen, but as a mother who is willing to get her hands into the messy, tangled realities of our lives to help fix what we cannot fix ourselves."
              },
              {
                question: "Where is the original Undoer of Knots painting?",
                answer: "It hangs in the church of St. Peter am Perlach in Augsburg, Germany. Johann Georg Melchior Schmidtner painted it around 1700 for an altar sponsored by the Langenmantel family."
              },
              {
                question: "Did the Church approve the ribbon miracle?",
                answer: "No. The story of Father Jakob Rem smoothing the couple's wedding ribbon is a family tradition, not a miracle the Church has investigated. The devotion is approved as Marian prayer because its theology comes from St. Irenaeus and the Catechism, not from that story."
              },
              {
                question: "What does it mean that Mary untied Eve's knot?",
                answer: "St. Irenaeus taught that Eve bound humanity by unbelief and Mary loosened that bond by her faith at the Annunciation. The Catechism quotes him in paragraph 494. Mary cooperates with Christ, who alone redeems."
              },
            ]} />

<RelatedArticles currentSlug="our-lady-undoer-of-knots" />

            <ArticleBottomCTA title="Discover Your Path to Peace" description="Whatever knots are tying up your life, God's grace is greater. Take our quiz to find encouragement." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
