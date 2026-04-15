import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, HowToSchema } from "@/components/blog/ArticleSchema";

export default function HowToPrayRosary() {
  return (
    <>
      <Helmet>
        <title>How to Pray the Holy Rosary: Complete Guide for Beginners | Guide Catholic</title>
        <meta name="description" content="Learn step by step how to pray the Holy Rosary correctly. Complete guide with mysteries, prayers and meditations to strengthen your Marian devotion." />
        <meta name="keywords" content="how to pray the rosary step by step, complete holy rosary, mysteries of the rosary, catholic rosary, rosary prayer, hail mary" />
        <link rel="canonical" href="https://guidecatholic.com/blog/how-to-pray-rosary/" />
      </Helmet>
        <ArticleSchema
          title="How to Pray the Holy Rosary: Complete Guide for Beginners"
          description="Learn step by step how to pray the Holy Rosary correctly. Complete guide with mysteries, prayers and meditations to strengthen your Marian devotion."
          url="https://guidecatholic.com/blog/how-to-pray-rosary/"
        />
        <HowToSchema
          name="How to Pray the Holy Rosary"
          description="Learn step by step how to pray the Holy Rosary correctly."
          url="https://guidecatholic.com/blog/how-to-pray-rosary/"
          totalTime="PT20M"
          steps={[
            {"name": "Make the Sign of the Cross", "text": "Hold the crucifix and make the Sign of the Cross: In the name of the Father, and of the Son, and of the Holy Spirit. Amen."},
          {"name": "Pray the Apostles' Creed", "text": "Still on the crucifix, pray the Creed, professing your faith in the fundamental articles of Catholic doctrine."},
          {"name": "Pray One Our Father, Three Hail Marys, and One Glory Be", "text": "On the initial beads, pray one Our Father, three Hail Marys, and one Glory Be."},
          {"name": "Announce and Meditate on Each Mystery", "text": "For each decade, announce the corresponding mystery and pray one Our Father, ten Hail Marys, and the Glory Be."},
          {"name": "Conclude with the Hail Holy Queen", "text": "After the five decades, pray the Hail Holy Queen and the final prayers."}
          ]}
        />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Navbar />

        {/* Breadcrumb */}
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">How to Pray the Holy Rosary</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back button */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Prayers
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  December 05, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  8 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How to Pray the Holy Rosary: Complete Guide for Beginners
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Holy Rosary is one of the most powerful and beloved prayers of the Catholic Church.
                Learn step by step how to pray this Marian devotion and strengthen your spiritual life.
              </p>
            </header>

            {/* Featured Image */}
            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Holy Rosary is undoubtedly one of the greatest gifts Heaven has granted to the Church Militant. When the Blessed Virgin Mary appeared to Saint Dominic de Guzmán in the 13th century, she gave him this powerful spiritual weapon to combat heresies and convert sinners. Since then, the Rosary has been the refuge of the afflicted, the hope of the desperate, and the sure path for those seeking intimacy with God through the Immaculate Heart of Mary.
              </p>
              <p className="text-text leading-relaxed mb-6">
                It is no coincidence that all the saints of recent centuries were fervent devotees of the Rosary. Saint Padre Pio prayed up to 30 rosaries a day. Saint Teresa of Calcutta never separated from her rosary. Saint John Paul II called the Rosary his "favorite prayer." There is something profoundly transformative about this simple prayer, accessible to all, yet capable of elevating the soul to the highest contemplations.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What is the Holy Rosary?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Rosary is much more than a repetition of prayers – it is a school of contemplation where we learn to look at Jesus through Mary's eyes. The name "Rosary" comes from the Latin "rosarium," meaning "crown of roses." Each Hail Mary is like a mystical rose we offer to our Heavenly Mother, and she, in turn, transforms them into graces that she pours upon us and upon the entire world.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The structure of the Rosary is brilliant in its simplicity: while the lips pronounce the prayers, the mind contemplates the mysteries of Christ's life. It is as if we walk hand in hand with Mary through the most important moments of salvation history – from the Annunciation to the Coronation of the Virgin in Heaven. The complete prayer consists of 20 mysteries divided into four groups: Joyful, Luminous, Sorrowful, and Glorious.
              </p>

              <QuizCTA
                title="Is the Rosary your spiritual weapon?"
                description="Our Lady gave us the Rosary as a path to Jesus. Take our quiz and discover how to make your Marian prayer more contemplative and effective for your spiritual life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Mysteries of the Holy Rosary
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Joyful Mysteries (Monday and Saturday)
              </h3>
              <p className="text-text leading-relaxed mb-4">
                The Joyful Mysteries contemplate the joyful events of the incarnation and childhood of Jesus:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>The Annunciation of the Angel Gabriel to Mary</li>
                <li>The Visitation of Mary to Saint Elizabeth</li>
                <li>The Birth of Jesus in Bethlehem</li>
                <li>The Presentation of Jesus in the Temple</li>
                <li>The Finding of Jesus in the Temple at age 12</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Luminous Mysteries (Thursday)
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Instituted by Saint John Paul II in 2002, the Luminous Mysteries illuminate the public life of Jesus:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>The Baptism of Jesus in the Jordan River</li>
                <li>The Wedding at Cana</li>
                <li>The Proclamation of the Kingdom of God</li>
                <li>The Transfiguration of Jesus</li>
                <li>The Institution of the Eucharist</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Sorrowful Mysteries (Tuesday and Friday)
              </h3>
              <p className="text-text leading-relaxed mb-4">
                The Sorrowful Mysteries make us meditate on the Passion and Death of Our Lord:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>The Agony of Jesus in the Garden of Gethsemane</li>
                <li>The Scourging at the Pillar</li>
                <li>The Crowning with Thorns</li>
                <li>Jesus Carries the Cross</li>
                <li>The Crucifixion and Death of Jesus</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Glorious Mysteries (Wednesday and Sunday)
              </h3>
              <p className="text-text leading-relaxed mb-4">
                The Glorious Mysteries celebrate Christ's victory over death:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>The Resurrection of Jesus</li>
                <li>The Ascension of Jesus to Heaven</li>
                <li>The Descent of the Holy Spirit upon the Apostles</li>
                <li>The Assumption of Mary into Heaven</li>
                <li>The Coronation of Mary as Queen of Heaven and Earth</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Step by Step: How to Pray the Rosary
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Make the Sign of the Cross
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Begin by holding the crucifix of the rosary and making the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." This gesture places us in the presence of the Holy Trinity and marks the beginning of our prayer.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Pray the Apostles' Creed
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Still on the crucifix, pray the Creed, professing your faith in the fundamental articles of Catholic doctrine. This prayer unites us with all Christians who, throughout the centuries, have professed the same faith.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Pray One Our Father, Three Hail Marys, and One Glory Be
              </h3>
              <p className="text-text leading-relaxed mb-6">
                On the initial beads, pray one Our Father asking for an increase in the theological virtues (faith, hope, and charity), followed by three Hail Marys and one Glory Be to the Father. These prayers prepare our soul for meditation on the mysteries.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                4. Announce and Meditate on Each Mystery
              </h3>
              <p className="text-text leading-relaxed mb-6">
                For each decade, announce the corresponding mystery and dedicate a few moments to contemplate it. Then, pray one Our Father, ten Hail Marys while meditating on the mystery, and conclude with the Glory Be to the Father and the Fatima Prayer: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those in most need of Thy mercy."
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                5. Conclude with the Hail Holy Queen
              </h3>
              <p className="text-text leading-relaxed mb-6">
                After the five decades, pray the Hail Holy Queen and the final prayers. You can add personal intentions and thank Our Lady for the grace of having prayed the Rosary.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Spiritual Benefits of the Holy Rosary
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Our Lady promised Saint Dominic and Blessed Alan de la Roche fifteen extraordinary promises for those who pray the Rosary with devotion. Among them: special protection from the Virgin Mary, abundant graces, a powerful weapon against hell, flourishing of virtues, God's mercy, and the certainty of not perishing without the sacraments.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Saint Louis Marie Grignion de Montfort, the great apostle of the Rosary, teaches that this prayer is "the most powerful weapon against the devil." When we pray the Rosary, we are not alone – the entire heavenly court joins us. The angels rejoice, demons tremble, and the souls in Purgatory receive relief. It is a prayer that moves Heaven and transforms earth.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Tips for Praying with More Devotion
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The secret of the Rosary is not in quantity, but in the quality of prayer. One rosary prayed with love and attention is worth more than many prayed in haste and distraction. Here are some guidelines from spiritual masters:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Choose a quiet place:</strong> If possible, pray before an image of Our Lady or the Blessed Sacrament</li>
                <li><strong>Establish a fixed time:</strong> Consistency is more important than passing fervor</li>
                <li><strong>Truly meditate:</strong> Don't let your mind wander; contemplate each scene as if you were present</li>
                <li><strong>Pray calmly:</strong> Better one mystery well prayed than five in a rush</li>
                <li><strong>Use a blessed rosary:</strong> Sacramentals help us maintain focus</li>
                <li><strong>Offer intentions:</strong> Each decade can be offered for a specific person or need</li>
                <li><strong>Persevere in dryness:</strong> When prayer seems arid, that's when it pleases God most</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Family Rosary
              </h2>
              <p className="text-text leading-relaxed mb-6">
                "The family that prays together stays together" – this phrase by Father Patrick Peyton expresses a truth proven by millions of Catholic homes. The family Rosary is a fortress against the attacks of the modern world. When parents and children kneel together before Mary, invisible bonds of grace are woven, protecting the home from life's storms.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Give me an army that prays the Rosary, and I will conquer the world."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Blessed Pope Pius IX
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "We can never thank Our Lady enough for giving us the Rosary."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Saint Padre Pio
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="how-to-pray-rosary" />

            <BlogFAQ faqs={[
              {
                question: "How many mysteries does the Holy Rosary have?",
                answer: "The Holy Rosary has 20 mysteries divided into four groups: 5 Joyful Mysteries (Monday and Saturday), 5 Luminous Mysteries (Thursday), 5 Sorrowful Mysteries (Tuesday and Friday), and 5 Glorious Mysteries (Wednesday and Sunday)."
              },
              {
                question: "How long does it take to pray the full Rosary?",
                answer: "Praying one set of 5 mysteries takes approximately 15–20 minutes. The full 20-mystery Rosary takes about 60–80 minutes. Most Catholics pray one set of 5 mysteries per day."
              },
              {
                question: "Do I need a physical rosary to pray?",
                answer: "While a physical rosary helps you keep count and focus, it is not strictly required. You can count the prayers on your fingers or use a rosary app. However, using a blessed rosary is recommended as it is a sacramental."
              },
              {
                question: "Can children pray the Rosary?",
                answer: "Absolutely! The Rosary is suitable for all ages. For young children, start with just one decade (10 Hail Marys) and gradually increase. The family Rosary is one of the most powerful spiritual practices a Catholic household can adopt."
              },
              {
                question: "What are the promises Our Lady made to those who pray the Rosary?",
                answer: "Our Lady promised 15 graces to those who pray the Rosary devoutly, including: special protection from Mary, peace in families, perseverance in virtue, protection from hell, and the grace of final perseverance (dying in a state of grace)."
              }
            ]} />

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Quiz Now
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
