import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function RosaryCompleteGuide() {
  return (
    <>
      <Helmet>
        <title>The Holy Rosary: Complete Guide with All 20 Mysteries | Guide Catholic</title>
        <meta name="description" content="Complete guide to the Holy Rosary with all 20 mysteries, step-by-step instructions, all prayers, spiritual benefits, and tips for praying with devotion." />
        <meta name="keywords" content="rosary complete guide, how to pray rosary, rosary mysteries, all 20 mysteries rosary, rosary prayer guide" />
        <link rel="canonical" href="https://guidecatholic.com/blog/rosary-complete-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Rosary Complete Guide</span>
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
                  Prayers
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Holy Rosary: Complete Guide with All 20 Mysteries
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Rosary is the most beloved Catholic prayer after the Mass. This complete guide covers the history, all 20 mysteries with meditations, every prayer, and practical tips for making the Rosary a transformative daily devotion.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Pope St. John Paul II called the Rosary "my favorite prayer." St. Padre Pio held his rosary beads constantly, even while hearing confessions. St. Louis de Montfort wrote an entire book on its power. For over 800 years, the Rosary has been the prayer that Catholic families, soldiers, missionaries, and martyrs have turned to in times of joy and crisis alike.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Yet many American Catholics feel uncertain about the Rosary. They know it involves Hail Marys and beads, but the mysteries, the structure, and the deeper meaning remain unclear. This guide will give you everything you need — the complete text of every prayer, all 20 mysteries with meditations, step-by-step instructions, and the spiritual wisdom to pray it with genuine devotion.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The History of the Rosary
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Rosary as we know it developed gradually over several centuries. Its roots lie in the early monastic practice of praying all 150 Psalms — a practice that illiterate laypeople adapted by substituting 150 Our Fathers or Hail Marys, counted on strings of beads. By the 12th century, the Hail Mary had become the dominant prayer, and the practice of meditating on scenes from the life of Christ and Mary while praying was well established.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Tradition attributes the Rosary's current form to St. Dominic (1170–1221), who reportedly received it from the Virgin Mary during an apparition. While historians debate the details, the Dominican Order certainly played a crucial role in spreading the Rosary throughout Europe. The great Dominican preacher Blessed Alan de la Roche (1428–1475) organized the Confraternity of the Rosary and systematized the 15 mysteries.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In 2002, Pope John Paul II added the five Luminous Mysteries (Mysteries of Light) in his apostolic letter Rosarium Virginis Mariae, bringing the total to 20 mysteries. He described the Rosary as "a compendium of the Gospel" and called it "a contemplative prayer par excellence."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Prayers of the Rosary
              </h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Essential Rosary Prayers</h3>
                <div className="space-y-4 text-text">
                  <div>
                    <p className="font-semibold mb-1">The Our Father (Lord's Prayer)</p>
                    <p className="italic text-sm">Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">The Hail Mary</p>
                    <p className="italic text-sm">Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">The Glory Be (Doxology)</p>
                    <p className="italic text-sm">Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">The Fatima Prayer</p>
                    <p className="italic text-sm">O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Hail Holy Queen (Salve Regina)</p>
                    <p className="italic text-sm">Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ.</p>
                  </div>
                </div>
              </div>

              <QuizCTA
                title="How deep is your Marian devotion?"
                description="Take our quiz and discover how to grow in your Catholic faith through prayer, the sacraments, and devotion to Our Lady."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                All 20 Mysteries of the Rosary
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Five Joyful Mysteries (Monday and Saturday)
              </h3>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>The Annunciation</strong> — The Angel Gabriel announces to Mary that she will conceive the Son of God. Meditate on Mary's perfect "yes" to God's will and ask for the grace of obedience.</li>
                <li><strong>The Visitation</strong> — Mary visits her cousin Elizabeth, who is pregnant with John the Baptist. At Mary's greeting, John leaps in the womb. Meditate on the joy of bringing Christ to others.</li>
                <li><strong>The Nativity</strong> — Jesus is born in Bethlehem, laid in a manger. Meditate on God's humility in becoming a helpless infant and ask for the grace of poverty of spirit.</li>
                <li><strong>The Presentation</strong> — Mary and Joseph present the infant Jesus in the Temple. Simeon prophesies that a sword will pierce Mary's soul. Meditate on obedience to God's law and the cost of discipleship.</li>
                <li><strong>The Finding of Jesus in the Temple</strong> — After three days of searching, Mary and Joseph find the twelve-year-old Jesus in the Temple, discussing Scripture with the teachers. Meditate on seeking God above all things.</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Five Luminous Mysteries (Thursday)
              </h3>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>The Baptism of Jesus</strong> — Jesus is baptized by John in the Jordan. The Father's voice declares, "This is my beloved Son." Meditate on your own baptism and the gift of divine sonship.</li>
                <li><strong>The Wedding at Cana</strong> — At Mary's intercession, Jesus performs His first miracle, turning water into wine. Meditate on Mary's role as intercessor and the power of her prayer.</li>
                <li><strong>The Proclamation of the Kingdom</strong> — Jesus preaches the Kingdom of God and calls all to conversion. Meditate on the call to repentance and the joy of the Gospel.</li>
                <li><strong>The Transfiguration</strong> — Jesus is transfigured on Mount Tabor, revealing His divine glory to Peter, James, and John. Meditate on the glory that awaits us and the importance of prayer.</li>
                <li><strong>The Institution of the Eucharist</strong> — At the Last Supper, Jesus gives us His Body and Blood under the forms of bread and wine. Meditate on the gift of the Eucharist and the depth of Christ's love.</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Five Sorrowful Mysteries (Tuesday and Friday)
              </h3>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>The Agony in the Garden</strong> — Jesus prays in Gethsemane, sweating blood, asking that the cup pass from Him, yet surrendering to the Father's will. Meditate on conformity to God's will in suffering.</li>
                <li><strong>The Scourging at the Pillar</strong> — Jesus is brutally scourged by Roman soldiers. Meditate on His suffering for our sins of the flesh and ask for purity and mortification.</li>
                <li><strong>The Crowning with Thorns</strong> — Soldiers mock Jesus as "King of the Jews," placing a crown of thorns on His head. Meditate on His suffering for our pride and ask for humility.</li>
                <li><strong>The Carrying of the Cross</strong> — Jesus carries His cross to Calvary, falling three times. Meditate on bearing our own crosses with patience and trust.</li>
                <li><strong>The Crucifixion</strong> — Jesus is nailed to the cross and dies for our sins. Meditate on the infinite love of God revealed in the Cross and ask for the grace of final perseverance.</li>
              </ol>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Five Glorious Mysteries (Wednesday and Sunday)
              </h3>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>The Resurrection</strong> — Jesus rises from the dead on the third day, conquering sin and death. Meditate on the hope of our own resurrection and the joy of eternal life.</li>
                <li><strong>The Ascension</strong> — Jesus ascends to the right hand of the Father forty days after the Resurrection. Meditate on our heavenly destiny and the call to lift our hearts above earthly things.</li>
                <li><strong>The Descent of the Holy Spirit</strong> — The Holy Spirit descends on Mary and the Apostles at Pentecost. Meditate on the gifts of the Spirit and the birth of the Church.</li>
                <li><strong>The Assumption of Mary</strong> — At the end of her earthly life, Mary is assumed body and soul into heaven. Meditate on the dignity of the human body and the hope of bodily resurrection.</li>
                <li><strong>The Coronation of Mary</strong> — Mary is crowned Queen of Heaven and Earth. Meditate on Mary's intercession for us and the glory that awaits all who persevere in faith.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Step-by-Step Instructions for Praying the Rosary
              </h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Hold the crucifix and make the Sign of the Cross. Pray the Apostles' Creed.</li>
                <li>On the first large bead, pray the Our Father.</li>
                <li>On the three small beads, pray three Hail Marys (for faith, hope, and charity).</li>
                <li>Pray the Glory Be and the Fatima Prayer.</li>
                <li>Announce the first mystery and briefly meditate on it.</li>
                <li>On the large bead, pray the Our Father.</li>
                <li>On the ten small beads, pray ten Hail Marys while meditating on the mystery.</li>
                <li>Pray the Glory Be and the Fatima Prayer.</li>
                <li>Repeat steps 5–8 for each of the five mysteries.</li>
                <li>After the fifth mystery, pray the Hail Holy Queen and the closing prayer.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Spiritual Benefits and Tips for Praying with Devotion
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Rosary is not a magical formula — its power comes from the meditation on the mysteries of Christ's life. The Hail Marys are like the background music; the mysteries are the melody. To pray the Rosary well, keep your mind on the mystery even as your lips pray the words. Visualize the scene. Place yourself in it. Ask: What is Jesus doing here? What is He saying to me?
              </p>
              <p className="text-text leading-relaxed mb-6">
                The family Rosary is one of the most powerful traditions in Catholic life. Blessed Patrick Peyton famously said, "The family that prays together stays together." Even five minutes of the Rosary prayed together as a family — perhaps just one decade — can transform the spiritual atmosphere of a home. Start small and build up.
              </p>
            </div>

            <RelatedArticles currentSlug="rosary-complete-guide" />

            <BlogFAQ faqs={[
              {
                question: "How long does it take to pray the full Rosary?",
                answer: "A full five-decade Rosary takes approximately 15–20 minutes when prayed at a moderate pace. If you're new to the Rosary, start with one decade (about 3–4 minutes) and gradually build up to the full five decades. The important thing is quality of attention, not speed."
              },
              {
                question: "What are the 20 mysteries of the Rosary?",
                answer: "The 20 mysteries are divided into four sets of five: the Joyful Mysteries (Annunciation, Visitation, Nativity, Presentation, Finding in the Temple), the Luminous Mysteries (Baptism of Jesus, Wedding at Cana, Proclamation of the Kingdom, Transfiguration, Institution of the Eucharist), the Sorrowful Mysteries (Agony in the Garden, Scourging, Crowning with Thorns, Carrying the Cross, Crucifixion), and the Glorious Mysteries (Resurrection, Ascension, Descent of the Holy Spirit, Assumption, Coronation of Mary)."
              },
              {
                question: "Which mysteries do you pray on which days?",
                answer: "The traditional schedule recommended by Pope John Paul II is: Joyful Mysteries on Monday and Saturday, Luminous Mysteries on Thursday, Sorrowful Mysteries on Tuesday and Friday, and Glorious Mysteries on Wednesday and Sunday. This is a recommendation, not a rule — you can pray any mysteries on any day."
              },
              {
                question: "Is the Rosary in the Bible?",
                answer: "The Rosary as a structured prayer is not in the Bible, but its prayers are deeply biblical. The Our Father comes directly from Matthew 6:9–13. The first half of the Hail Mary comes from Luke 1:28 and 1:42. The mysteries are all drawn from the Gospels. The practice of repetitive prayer is also biblical — Jesus Himself prayed the same words three times in Gethsemane (Matthew 26:44)."
              },
              {
                question: "Why do Catholics pray to Mary in the Rosary?",
                answer: "Catholics don't worship Mary — they ask her to intercede for them, just as they might ask a friend to pray for them. The Hail Mary asks Mary to 'pray for us sinners, now and at the hour of our death.' Mary is the Mother of God and our spiritual mother, and her intercession is powerful because of her unique closeness to her Son. The Rosary is ultimately a meditation on the life of Jesus, with Mary as our guide."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
              </p>
              <Link to="/quiz-intro">
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
