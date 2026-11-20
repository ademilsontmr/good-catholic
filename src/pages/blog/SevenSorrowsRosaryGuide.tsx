import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Layers } from "lucide-react";
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

export default function SevenSorrowsRosaryGuide() {
  return (
    <>
      <Helmet>
        <title>Seven Sorrows Rosary: How to Pray It, Mysteries and Promises | Guide Catholic</title>
        <meta name="description" content="Guide to the Seven Sorrows Rosary (Servite Rosary): the seven sorrows of Mary, how to pray each group of seven Hail Marys, and the devotion's graces." />
        <meta name="keywords" content="seven sorrows rosary, how to pray seven sorrows rosary, servite rosary, dolors of mary, our lady of sorrows devotion" />
        <link rel="canonical" href="https://guidecatholic.com/blog/seven-sorrows-rosary-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Seven Sorrows Rosary: How to Pray It, Mysteries and Promises"
        description="Guide to the Seven Sorrows Rosary (Servite Rosary): the seven sorrows of Mary, how to pray each group of seven Hail Marys, and the devotion's graces."
        url="https://guidecatholic.com/blog/seven-sorrows-rosary-guide/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Seven Sorrows Rosary", url: "https://guidecatholic.com/blog/seven-sorrows-rosary-guide/" },
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
              <span className="text-text">Seven Sorrows Rosary</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 13, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Seven Sorrows Rosary: How to Pray It, Mysteries and Promises
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Seven Sorrows Rosary — also called the Servite Rosary — walks with Our Lady through her seven chief sufferings. It is one of the most moving Marian devotions in the Catholic Church.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Layers className="w-24 h-24 text-rose-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Seven Sorrows Rosary (Servite Rosary) meditates on seven sorrows of Mary — from Simeon&apos;s prophecy to the burial of Christ. Each sorrow has seven Hail Marys; the devotion was spread by the Servite order to foster compassion for Mary and her Son.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Sorrows of Mary</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>The prophecy of Simeon (Luke 2:34-35)</li>
                <li>The flight into Egypt (Matthew 2:13-21)</li>
                <li>The loss of the Child Jesus for three days (Luke 2:41-50)</li>
                <li>Mary meets Jesus carrying the cross (tradition; compare Luke 23:27)</li>
                <li>The crucifixion and death of Jesus (John 19:25-30)</li>
                <li>Mary receives the body of Jesus (Mark 15:43-46)</li>
                <li>The burial of Jesus (John 19:38-42)</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the Chaplet Is Structured</h2>
              <p className="text-text leading-relaxed mb-6">
                The Seven Sorrows Rosary uses seven groups of seven beads (seven Hail Marys per sorrow). Between each group, you meditate on the next sorrow and often pray an Our Father. Many chaplets sold for this devotion arrange the beads in seven sets of seven.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray It (Simple Outline)</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Begin with the Sign of the Cross.</li>
                <li>Optional introductory prayers (some guides begin with an Act of Contrition or Creed).</li>
                <li>For each of the seven sorrows: announce the sorrow, pray one Our Father, then seven Hail Marys while meditating on that sorrow.</li>
                <li>After the seventh group, pray three Hail Marys in honor of Our Lady's tears, and conclude with the Sign of the Cross or a closing prayer from your booklet.</li>
              </ol>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="seven-sorrows-rosary-guide">
                This devotion is approved and encouraged in the Church. It deepens compassion for Christ's Passion and love for Mary, who stood faithfully at the foot of the cross.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Meditating on Each Sorrow</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The prophecy of Simeon:</strong> forty days after the birth, in the Temple, the old man tells Mary that a sword will pierce through her own soul also (Luke 2:35). Every later sorrow is the unfolding of this one. Pray for the grace to accept God&apos;s will before you understand it.</li>
                <li><strong>The flight into Egypt:</strong> Joseph wakes Mary in the night and the family becomes refugees (Matthew 2:13-15). Pray for migrants, for families forced from home, and for trust when plans are overturned.</li>
                <li><strong>The loss of Jesus in the Temple:</strong> three days of searching end with Mary&apos;s words, your father and I have been looking for you anxiously (Luke 2:48). Pray for parents worried about their children and for anyone who feels that Jesus is far away.</li>
                <li><strong>Mary meets Jesus on the way to Calvary:</strong> the Gospels mention the women who followed and lamented (Luke 23:27), and Christian tradition, kept in the Fourth Station of the Cross, holds that his Mother met him on the road. Pray for those who must watch a loved one suffer and cannot stop it.</li>
                <li><strong>The crucifixion:</strong> Mary stands by the cross, and Jesus entrusts her to the beloved disciple and the disciple to her (John 19:25-27). Pray for the dying and for the grace to remain faithful at the foot of your own crosses.</li>
                <li><strong>Mary receives the body of Jesus:</strong> Joseph of Arimathea takes down the body (Mark 15:43-46); devotion pictures it laid in Mary&apos;s arms, the scene Michelangelo carved in his Pietà. Pray for those grieving a child or spouse.</li>
                <li><strong>The burial:</strong> the body is wrapped with spices and laid in a new tomb in a garden (John 19:38-42). Pray for the gift of hope in the silence of Holy Saturday, when it seems that nothing is happening.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Servites and the History of the Devotion</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="seven-sorrows-rosary-guide">
                The Order of Servants of Mary, known as the Servites, began in Florence in 1233, when seven merchants withdrew from city life to serve God under Mary&apos;s patronage; the Church honors them together as the Seven Holy Founders on February 17. Compassion for the Mother of God at the cross became the order&apos;s characteristic spirituality, and the chaplet of seven sorrows grew up and spread through Servite preaching and confraternities. The Servites obtained a feast of the Seven Sorrows for their own use in the seventeenth century, and in 1814 Pope Pius VII extended it to the whole Church after returning to Rome from captivity under Napoleon. St. Pius X fixed the date as September 15 in 1913.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="seven-sorrows-rosary-guide">
                In today&apos;s calendar the memorial falls immediately after the September 14 feast of the Holy Cross, so that the Church contemplates the cross on one day and the Mother standing beside it on the next. The Mass of the memorial may include the medieval sequence Stabat Mater, which begins with Mary standing in tears near the cross; its authorship is uncertain, though it is often credited to the Franciscan Jacopone da Todi. The Catechism describes Mary&apos;s faithful union with her Son reaching even to the cross, where she stood, suffering grievously with him (CCC 964).
              </LinkedText>

              <QuizCTA
                title="Want a stronger Marian life?"
                description="Take the Catholic life assessment for practical steps on prayer, the Rosary, and devotions."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray the Seven Sorrows</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>September 15 — Memorial of Our Lady of Sorrows.</li>
                <li>Fridays in Lent or any Friday you want to unite with Christ's Passion.</li>
                <li>When consoling someone in grief or walking through your own suffering.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Private Revelations Connected to the Chaplet</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="seven-sorrows-rosary-guide">
                Two private revelations are often mentioned alongside this devotion, and both should be understood as such. Popular booklets list seven promises said to have been given to St. Bridget of Sweden for those who honor Mary&apos;s tears by praying seven Hail Marys daily while meditating on her sorrows; the Church has never formally verified these promises, and Catholics are free to set them aside. More recently, the visionaries of Kibeho in Rwanda reported apparitions of Mary between 1981 and 1989, and one of them, Marie-Claire Mukangango, said Mary asked for the Seven Sorrows Rosary to be prayed. In 2001 the local bishop declared the apparitions to the three original visionaries worthy of belief. As with all private revelation, these accounts may encourage devotion but add nothing to the faith the Church requires (CCC 67).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Tips for Praying It</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>The full chaplet of 49 Hail Marys plus the closing three takes roughly 20 to 25 minutes; on busy days, pray one sorrow with its seven Hail Marys.</li>
                <li>Pray one sorrow each day of the week, beginning on a Sunday, so the whole cycle is complete by Saturday.</li>
                <li>Keep the Scripture passage for each sorrow open and read it before the Our Father.</li>
                <li>Use the Fourth through Fourteenth Stations of the Cross as a visual aid for the last four sorrows during Lent.</li>
              </ul>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the Seven Sorrows Rosary?", answer: "It is a Marian chaplet with seven sets of seven Hail Marys, each set meditating on one of the seven sorrows of the Blessed Virgin Mary. It is also called the Servite Rosary." },
              { question: "Is the Seven Sorrows Rosary the same as the regular Rosary?", answer: "No. The Dominican Rosary has five decades and Joyful, Sorrowful, Glorious, and Luminous mysteries. The Seven Sorrows Rosary has seven groups of seven Hail Marys focused only on Mary's sorrows." },
              { question: "Do I need a special chaplet?", answer: "A dedicated Seven Sorrows chaplet makes counting easier, but you can also use a printed guide with any rosary by tracking seven groups of seven." },
              { question: "What are Mary's seven sorrows?", answer: "The traditional list includes the prophecy of Simeon, the flight into Egypt, the loss of Jesus in the Temple, Mary meeting Jesus on the way to Calvary, the crucifixion, Mary receiving Jesus' body, and his burial." },
              { question: "Who started the Seven Sorrows Rosary?", answer: "It developed among the Servites, the Order of Servants of Mary founded in Florence in 1233, who made compassion for Our Lady of Sorrows the center of their spirituality and spread the chaplet through their preaching and confraternities." },
              { question: "Is the Seven Sorrows Rosary connected to Kibeho?", answer: "Yes. Visionaries at Kibeho, Rwanda, reported that Mary asked for this chaplet during apparitions in the 1980s. The local bishop approved those apparitions in 2001, but like all private revelation they are not binding on Catholics." },
              { question: "What date is Our Lady of Sorrows celebrated?", answer: "It is kept every year on September 15, following the Holy Cross feast of September 14. Pope Pius VII extended the feast to the whole Church in 1814, and St. Pius X fixed it on September 15 in 1913." },
            ]} />

            <RelatedArticles currentSlug="seven-sorrows-rosary-guide" />

            <ArticleBottomCTA title="Deepen your Catholic devotion" description="Get a personalized guide for prayer and spiritual growth." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
