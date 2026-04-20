import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function VirginMaryGuide() {
  return (
    <>
      <Helmet>
        <title>The Virgin Mary: Mother of God, Apparitions, Prayers & Catholic Devotion | Guide Catholic</title>
        <meta name="description" content="Complete Catholic guide to the Virgin Mary — her role in salvation history, the four Marian dogmas, major apparitions, the Rosary, and how to grow in Marian devotion." />
        <meta name="keywords" content="virgin mary catholic, mother of god, marian devotion, our lady, hail mary prayer, marian apparitions, immaculate conception, assumption of mary" />
        <link rel="canonical" href="https://guidecatholic.com/blog/virgin-mary-complete-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Virgin Mary: Mother of God, Apparitions, Prayers & Catholic Devotion"
        description="Complete Catholic guide to the Virgin Mary — her role in salvation history, the four Marian dogmas, major apparitions, the Rosary, and how to grow in Marian devotion."
        url="https://guidecatholic.com/blog/virgin-mary-complete-guide/"
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
              <span className="text-text">The Virgin Mary</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Feast Days</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />20 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Virgin Mary: Mother of God, Apparitions, Prayers & Catholic Devotion
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                No figure in human history has been more loved, more painted, more prayed to, or more misunderstood than Mary of Nazareth. For Catholics, she is not merely a historical figure — she is a living mother, the greatest of all the saints, and the model of perfect discipleship.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Mary is the most mentioned woman in the Quran. She is venerated by Orthodox Christians, honored by many Protestants, and loved by over a billion Catholics. Yet she remains one of the most misunderstood figures in Christianity. This guide presents the full Catholic understanding of Mary — who she is, what the Church teaches about her, and how to grow in devotion to her.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mary in Scripture</h2>
              <p className="text-text leading-relaxed mb-6">
                Mary appears throughout the New Testament, from the Annunciation to Pentecost. Key moments include:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The Annunciation (Luke 1:26-38):</strong> The angel Gabriel announces that Mary will conceive the Son of God. Her response — "Let it be done to me according to your word" — is the model of perfect faith and obedience.</li>
                <li><strong>The Visitation (Luke 1:39-56):</strong> Mary visits her cousin Elizabeth, who greets her as "the mother of my Lord." Mary responds with the Magnificat — one of the greatest prayers in Scripture.</li>
                <li><strong>The Nativity (Luke 2:1-20):</strong> Mary gives birth to Jesus in Bethlehem and "treasured all these things, pondering them in her heart."</li>
                <li><strong>The Wedding at Cana (John 2:1-11):</strong> Mary intercedes with Jesus for the wedding couple, prompting His first miracle. Her words — "Do whatever he tells you" — are her last recorded words in Scripture and her perpetual message to us.</li>
                <li><strong>At the Cross (John 19:25-27):</strong> Mary stands at the foot of the cross. Jesus entrusts her to the Beloved Disciple — and in him, to all disciples: "Behold your mother."</li>
                <li><strong>Pentecost (Acts 1:14):</strong> Mary is present with the apostles in the Upper Room, praying for the coming of the Holy Spirit.</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                The Old Testament also foreshadows Mary. She is the New Eve — where Eve said "no" to God and brought death, Mary said "yes" and brought life. She is the Ark of the New Covenant — just as the Ark carried the presence of God, Mary carried God incarnate in her womb.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Four Marian Dogmas</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church has defined four dogmas about Mary — truths that all Catholics are required to believe:
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">1. Mother of God (Theotokos) — Defined 431 AD</h3>
              <p className="text-text leading-relaxed mb-6">
                Mary is the Mother of God (Greek: <em>Theotokos</em>, "God-bearer"). This does not mean Mary is the source of God's divine nature — God is eternal and has no beginning. It means that the person she bore in her womb was a divine Person — the Second Person of the Trinity. Since Jesus is truly God, Mary is truly the Mother of God.
              </p>
              <p className="text-text leading-relaxed mb-6">
                This dogma was defined at the Council of Ephesus (431 AD) against the heresy of Nestorius, who claimed Mary was only the mother of Christ's human nature. The Council affirmed that Jesus is one Person — divine and human — and therefore Mary is truly the Mother of God.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">2. Perpetual Virginity — Ancient Tradition</h3>
              <p className="text-text leading-relaxed mb-6">
                The Church teaches that Mary was a virgin before, during, and after the birth of Jesus. She remained a virgin throughout her life. The "brothers of Jesus" mentioned in the Gospels are understood by the Catholic tradition as either cousins (the Greek word <em>adelphos</em> was used for both brothers and close relatives) or sons of Joseph from a previous marriage.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">3. Immaculate Conception — Defined 1854</h3>
              <p className="text-text leading-relaxed mb-6">
                Mary was conceived without original sin. From the first moment of her existence, she was preserved from the stain of original sin by a special grace of God, in view of the merits of Jesus Christ. This does not mean she did not need a Savior — she was saved by Christ, but in a more perfect way: she was preserved from sin rather than rescued from it.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pope Pius IX defined this dogma on December 8, 1854. Four years later, Mary appeared to St. Bernadette at Lourdes and identified herself: "I am the Immaculate Conception" — a remarkable confirmation of the recently defined dogma.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">4. Assumption — Defined 1950</h3>
              <p className="text-text leading-relaxed mb-6">
                At the end of her earthly life, Mary was taken up — body and soul — into heavenly glory. Pope Pius XII defined this dogma on November 1, 1950. The Church does not define whether Mary died before her Assumption (the Eastern tradition holds she "fell asleep" — the Dormition) or was assumed without dying.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Assumption is the anticipation of what will happen to all the faithful at the resurrection of the body. Mary, as the first and most perfect disciple, is the first to share fully in the resurrection of her Son.
              </p>

              <QuizCTA
                title="How deep is your Marian devotion?"
                description="Take our Catholic faith assessment and discover how to grow in your relationship with Our Lady."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Major Marian Apparitions</h2>
              <p className="text-text leading-relaxed mb-6">
                Throughout history, Mary has appeared to individuals and groups in what the Church calls "private revelations." While Catholics are not required to believe in any private revelation, the Church has approved several apparitions as worthy of belief:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Our Lady of Guadalupe (Mexico, 1531):</strong> Mary appeared to Juan Diego, leaving her image miraculously imprinted on his tilma. The image has been scientifically studied and defies natural explanation. Guadalupe is the most visited Marian shrine in the world.</li>
                <li><strong>Our Lady of Lourdes (France, 1858):</strong> Mary appeared 18 times to St. Bernadette Soubirous, identifying herself as "the Immaculate Conception." A miraculous spring appeared, and thousands of healings have been documented.</li>
                <li><strong>Our Lady of Fatima (Portugal, 1917):</strong> Mary appeared six times to three shepherd children, giving messages of prayer, penance, and consecration to her Immaculate Heart. The Miracle of the Sun was witnessed by 70,000 people.</li>
                <li><strong>Our Lady of Miraculous Medal (France, 1830):</strong> Mary appeared to St. Catherine Labouré and gave her the design for the Miraculous Medal, promising special graces to those who wear it.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mary's Role as Intercessor</h2>
              <p className="text-text leading-relaxed mb-6">
                Catholics ask Mary to intercede for them — to pray to God on their behalf. This is not worship; it is the same thing we do when we ask a friend to pray for us. The difference is that Mary, being in heaven, is more alive than any of us, and her prayers are especially powerful because of her unique relationship with her Son.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Wedding at Cana (John 2) is the model of Marian intercession. Mary noticed the need, brought it to Jesus, and trusted Him to act. Jesus responded to her intercession. This is what Mary does for us: she notices our needs, brings them to Jesus, and trusts Him to respond.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Church also teaches that Mary is our spiritual mother. When Jesus said to the Beloved Disciple "Behold your mother" (John 19:27), He was giving Mary as mother to all His disciples. We are all the Beloved Disciple; we are all called to take Mary "into our own home."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Marian Prayers</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Hail Mary</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Memorare</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Magnificat (Luke 1:46-55)</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  My soul proclaims the greatness of the Lord; my spirit rejoices in God my Savior, for he has looked upon his lowly servant. From this day all generations will call me blessed: the Almighty has done great things for me, and holy is his Name. He has mercy on those who fear him in every generation. He has shown the strength of his arm, he has scattered the proud in their conceit. He has cast down the mighty from their thrones, and has lifted up the lowly. He has filled the hungry with good things, and the rich he has sent away empty. He has come to the help of his servant Israel for he has remembered his promise of mercy, the promise he made to our fathers, to Abraham and his children forever.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Grow in Marian Devotion</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Pray the Rosary daily.</strong> The Rosary is the most powerful Marian prayer. It meditates on the life of Jesus through Mary's eyes.</li>
                <li><strong>Wear the Brown Scapular or Miraculous Medal.</strong> These sacramentals are signs of consecration to Mary and carry special promises.</li>
                <li><strong>Make a Marian consecration.</strong> St. Louis de Montfort's "True Devotion to Mary" and St. Maximilian Kolbe's Militia Immaculata offer powerful forms of consecration to Mary.</li>
                <li><strong>Celebrate Marian feast days.</strong> The Church's calendar is rich with Marian feasts: the Immaculate Conception (Dec 8), Our Lady of Guadalupe (Dec 12), the Annunciation (Mar 25), the Assumption (Aug 15), Our Lady of the Rosary (Oct 7).</li>
                <li><strong>Visit a Marian shrine.</strong> Pilgrimages to Marian shrines — Lourdes, Fatima, Guadalupe, or local shrines — are powerful acts of devotion.</li>
                <li><strong>Read about Mary.</strong> Books like "True Devotion to Mary" by St. Louis de Montfort, "33 Days to Morning Glory" by Fr. Michael Gaitley, and "Hail, Holy Queen" by Scott Hahn deepen Marian devotion.</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "To Jesus through Mary" — this is the shortest and surest path to holiness, according to St. Louis de Montfort. Mary always leads us to her Son.
                </p>
                <p className="text-text-muted text-center mt-2">— St. Louis de Montfort</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Do Catholics worship Mary?", answer: "No. Catholics do not worship Mary. Worship (latria) is given to God alone. Catholics give Mary veneration (hyperdulia) — a special honor above all other saints, but infinitely below the worship due to God. Asking Mary to pray for us is the same as asking a friend to pray for us — except Mary is in heaven and her prayers are especially powerful." },
              { question: "What is the Immaculate Conception?", answer: "The Immaculate Conception is the Catholic dogma that Mary was conceived without original sin. It does not refer to the conception of Jesus (which is the Virgin Birth). It means that from the first moment of her existence, Mary was preserved from original sin by a special grace of God, in anticipation of the merits of Christ." },
              { question: "What is the Assumption of Mary?", answer: "The Assumption is the Catholic dogma that at the end of her earthly life, Mary was taken up — body and soul — into heavenly glory. It was defined as a dogma by Pope Pius XII in 1950. The Church does not define whether Mary died before her Assumption or was assumed without dying." },
              { question: "Why do Catholics pray the Rosary?", answer: "The Rosary is a meditative prayer that combines vocal prayer (the Hail Mary, Our Father, Glory Be) with meditation on the mysteries of the life of Jesus and Mary. It is one of the most powerful Catholic prayers, recommended by popes, saints, and Our Lady herself at Fatima and Lourdes." },
              { question: "What does Mary's title 'Our Lady' mean?", answer: "'Our Lady' is a title of honor for Mary, equivalent to 'My Lady' — a term of respect and affection. It is used in many of her titles: Our Lady of Guadalupe, Our Lady of Lourdes, Our Lady of Fatima, Our Lady of the Rosary. It expresses Mary's queenly dignity as the Mother of the King of Kings." },
            ]} />

            <RelatedArticles currentSlug="virgin-mary-complete-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your faith and Marian devotion.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
