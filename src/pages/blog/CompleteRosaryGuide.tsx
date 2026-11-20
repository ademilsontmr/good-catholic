import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
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
import { TopicSeriesNav } from "@/components/blog/TopicSeriesNav";

export default function CompleteRosaryGuide() {
  return (
    <>
      <Helmet>
        <title>The Complete Rosary Guide: Prayers, Mysteries and History | Guide Catholic</title>
        <meta name="description" content="The complete Rosary guide: where the Rosary came from, every prayer in full, all 20 mysteries, and practical ways to meditate while you pray the beads." />
        <meta name="keywords" content="complete rosary guide, rosary prayers full text, all 20 mysteries rosary, history of the rosary, how to meditate on the rosary, catholic rosary" />
        <link rel="canonical" href="https://guidecatholic.com/blog/complete-rosary-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Complete Rosary Guide: Prayers, Mysteries and History"
        description="The complete Rosary guide: where the Rosary came from, every prayer in full, all 20 mysteries, and practical ways to meditate while you pray the beads."
        url="https://guidecatholic.com/blog/complete-rosary-guide/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "The Complete Rosary Guide", url: "https://guidecatholic.com/blog/complete-rosary-guide/" },
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
              <span className="text-text">The Complete Rosary Guide</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 1, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />20 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Complete Rosary Guide: Prayers, Mysteries and History
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                This is the reference page for the whole Rosary: what it is, how it grew over the centuries, the full text of every prayer, all twenty mysteries in one place, and the practical habits that turn repeated words into real meditation on Christ.
              </p>
            </header>
            <div className="aspect-video bg-pink-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-pink-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">In short: the Rosary is a Marian prayer that pairs vocal prayers (the Creed, Our Father, Hail Mary and Glory Be) with meditation on twenty Gospel scenes called mysteries. One &quot;Rosary&quot; is five decades on one set of mysteries and takes roughly 15 to 20 minutes.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                The Catechism of the Catholic Church mentions the Rosary as one of the classic forms of Marian prayer and, quoting earlier popes, calls it an "epitome of the whole Gospel" (CCC 971). Pope St. John Paul II, who added the Luminous Mysteries in 2002, called it his favorite prayer. Use this guide as the hub of our Rosary series: it gathers everything in one place, while the companion pages linked below go deeper into the bead-by-bead method, the mysteries for each day, and the promises and history.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Rosary Is</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                At its heart the Rosary is a Gospel prayer prayed alongside Mary. The lips repeat short, familiar prayers while the mind rests on one event in the life of Jesus. The Catechism names the Rosary, together with lectio divina, as an example of Christian meditation on the mysteries of Christ (CCC 2708), and it notes that medieval piety in the West developed the Rosary as a popular substitute for the Liturgy of the Hours (CCC 2678). That is why the beads exist at all: they keep count, so attention can go to Christ rather than to arithmetic.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                The Rosary is a devotion, not a sacrament. It does not replace Sunday Mass or Confession, and nothing about it works automatically. Its value comes from faith, attention and love, and from the fact that every one of its mysteries leads back to Scripture.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the Rosary Developed: A Short History</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                Counting prayers on knots or beads is very old. In medieval monasteries the 150 Psalms were the backbone of prayer, and lay people who could not read them began praying 150 Our Fathers or, later, 150 Hail Marys instead, a practice sometimes called "Our Lady's Psalter." Over the late Middle Ages these Hail Marys were grouped into decades, and short reflections on the life of Christ were attached to them, which became the mysteries.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                A beloved tradition credits St. Dominic (1170–1221) with receiving the Rosary from Our Lady. Historians generally see a slower development, with Dominican preachers such as Alan de la Roche in the fifteenth century spreading the devotion widely. Pope St. Pius V fixed the familiar fifteen-mystery form in 1569, and the naval victory at Lepanto on October 7, 1571, is the origin of today's feast of Our Lady of the Rosary. Pope Leo XIII later dedicated the month of October to the Rosary, and in 2002 Pope St. John Paul II proposed the five Luminous Mysteries. For the full story, see our page on the Rosary promises and the Rosary in history.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Beads at a Glance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                A standard five-decade rosary has a crucifix and 59 beads. A short pendant hangs from a center medal: one large bead, three small beads, and another large bead. The main loop holds five decades of ten small beads, with a large bead between each decade. The crucifix and pendant are for the opening prayers; the loop is for the five mysteries; the medal is where you begin the decades and where you finish with the Hail Holy Queen. If you want someone to walk you around the beads one at a time, our beginner page does exactly that.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Order of Prayers in Brief</h2>
              <ol className="list-decimal pl-6 mb-8 space-y-2 text-text">
                <li>Sign of the Cross and the Apostles&apos; Creed.</li>
                <li>One Our Father, three Hail Marys, and one Glory Be.</li>
                <li>For each of five decades: announce the mystery, one Our Father, ten Hail Marys, one Glory Be, and (optionally) the Fatima Prayer.</li>
                <li>Hail Holy Queen, the closing prayer, and the Sign of the Cross.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Every Prayer of the Rosary in Full</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Sign of the Cross</h3>
                <p className="text-text italic leading-relaxed text-sm">In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Apostles&apos; Creed</h3>
                <p className="text-text italic leading-relaxed text-sm">I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Our Father</h3>
                <p className="text-text italic leading-relaxed text-sm">Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Hail Mary</h3>
                <p className="text-text italic leading-relaxed text-sm">Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Glory Be</h3>
                <p className="text-text italic leading-relaxed text-sm">Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Fatima Prayer (O My Jesus)</h3>
                <p className="text-text italic leading-relaxed text-sm">O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those most in need of thy mercy. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Hail Holy Queen (Salve Regina)</h3>
                <p className="text-text italic leading-relaxed text-sm">Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Closing Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">O God, whose only-begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life; grant, we beseech thee, that meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                A note on the Fatima Prayer: it is a later addition, associated with the 1917 apparitions at Fatima, which the Church has approved as a private revelation. Many Catholics say it after every Glory Be; others, including some religious communities, do not. Either way is legitimate.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic devotion?"
                description="Take our faith assessment and receive a personalized guide to growing in Marian devotion and the prayer life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">All 20 Mysteries of the Rosary</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                The twenty mysteries fall into four sets of five, following Christ from the Incarnation to the glory of heaven. Below is each mystery in one line with the grace traditionally asked for. For a Scripture passage and a fuller meditation on each, and for the weekday schedule, see our page on the mysteries for each day.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Joyful Mysteries: the Incarnation and hidden life</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-text">
                <li><strong>The Annunciation</strong> — Gabriel's message and Mary's yes. Grace: humility.</li>
                <li><strong>The Visitation</strong> — Mary hurries to serve Elizabeth. Grace: love of neighbor.</li>
                <li><strong>The Nativity</strong> — the Son of God born poor in Bethlehem. Grace: detachment.</li>
                <li><strong>The Presentation</strong> — Jesus offered in the Temple; Simeon's prophecy. Grace: obedience.</li>
                <li><strong>The Finding in the Temple</strong> — the boy Jesus in his Father's house. Grace: seeking Christ above all.</li>
              </ol>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Luminous Mysteries: the public ministry</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-text">
                <li><strong>The Baptism in the Jordan</strong> — the Father names his beloved Son. Grace: living our own Baptism.</li>
                <li><strong>The Wedding at Cana</strong> — the first sign, at Mary's request. Grace: trust in her intercession.</li>
                <li><strong>The Proclamation of the Kingdom</strong> — the call to repent and believe. Grace: conversion.</li>
                <li><strong>The Transfiguration</strong> — Christ's glory shown on the mountain. Grace: desire for holiness.</li>
                <li><strong>The Institution of the Eucharist</strong> — the Last Supper. Grace: love for the Mass.</li>
              </ol>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Sorrowful Mysteries: the Passion</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-text">
                <li><strong>The Agony in the Garden</strong> — "not my will, but yours." Grace: sorrow for sin.</li>
                <li><strong>The Scourging at the Pillar</strong> — Christ's body wounded for us. Grace: purity.</li>
                <li><strong>The Crowning with Thorns</strong> — the King mocked. Grace: courage against human respect.</li>
                <li><strong>The Carrying of the Cross</strong> — the road to Calvary. Grace: patience.</li>
                <li><strong>The Crucifixion</strong> — Jesus gives his life. Grace: perseverance and love of the Cross.</li>
              </ol>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Glorious Mysteries: the victory of Christ</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-text">
                <li><strong>The Resurrection</strong> — the empty tomb. Grace: faith.</li>
                <li><strong>The Ascension</strong> — Christ returns to the Father. Grace: hope.</li>
                <li><strong>The Descent of the Holy Spirit</strong> — Pentecost. Grace: openness to the Spirit.</li>
                <li><strong>The Assumption</strong> — Mary taken body and soul into glory. Grace: a holy death.</li>
                <li><strong>The Coronation of Mary</strong> — Mary honored as Queen. Grace: trust in her motherly care.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Meditate on the Mysteries</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                Meditation is what separates the Rosary from a recitation. In Rosarium Virginis Mariae, St. John Paul II suggested announcing each mystery, reading a short passage of Scripture, pausing in silence, and then praying the decade. These four approaches help, and you can combine them:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Picture the scene.</strong> Imagine the place, the people and the words spoken. Stand where the shepherds stood, or beside the women on the road to Calvary.</li>
                <li><strong>Read a verse first.</strong> One or two lines of the Gospel before the Our Father give the imagination something solid to hold.</li>
                <li><strong>Ask for the grace.</strong> Name the virtue listed above for that mystery and ask Christ, through Mary, for it today.</li>
                <li><strong>Keep a short silence.</strong> A few seconds of quiet after announcing the mystery slows the whole decade down.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                Distractions are normal. When you notice your mind has drifted to the grocery list, simply return to the scene without frustration. Returning is itself an act of prayer, and the beads in your fingers make it easy to find your place again.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Rosary Promises</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-rosary-guide">
                Many prayer cards print fifteen promises said to have been made by Our Lady to those who pray the Rosary devoutly. They come from the tradition associated with the Dominican preacher Alan de la Roche and belong to the category of private revelation: the Church does not require anyone to believe them, and they are never a guarantee that works apart from faith and a converted life. We explain each promise, and how to read it soundly, on our page devoted to the promises and the Rosary in history.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Making the Rosary a Habit</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Attach it to something you already do.</strong> A commute, a walk after dinner, or the minutes before sleep are natural slots.</li>
                <li><strong>Start smaller than you think.</strong> One decade a day, prayed attentively, is a real beginning and grows easily into five.</li>
                <li><strong>Pray with others when you can.</strong> A family or parish Rosary sets a steady pace; the leader says the first half of each prayer and everyone answers with the second.</li>
                <li><strong>Keep a rosary where you will see it.</strong> In a pocket, a car, or on a nightstand, it is a quiet reminder.</li>
                <li><strong>Offer it for someone.</strong> Naming an intention before the first decade gives the whole Rosary a direction.</li>
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The Rosary is my favorite prayer."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope St. John Paul II, October 1978</p>
              </div>
            </div>

            <TopicSeriesNav currentSlug="complete-rosary-guide" />
            <BlogFAQ faqs={[
              { question: "How long does a full Rosary take?", answer: "Five decades on one set of mysteries usually take 15 to 20 minutes at a calm pace. Praying all four sets (twenty decades) takes roughly an hour. Most Catholics pray one set of five mysteries a day." },
              { question: "Do I have to pray all 20 mysteries?", answer: "No. A Rosary in the usual sense is five decades on one set of mysteries. Praying all twenty in a day is a generous devotion, not an obligation." },
              { question: "Is the Rosary biblical?", answer: "The structure is not found in the Bible, but its content is. The Our Father comes from Matthew 6:9–13, the first half of the Hail Mary from the greetings of Gabriel and Elizabeth in Luke 1:28 and 1:42, and every mystery except the Assumption and Coronation is a Gospel or Acts event. Those two express the Church's faith about Mary, with the Assumption defined as dogma in 1950." },
              { question: "Is there an indulgence for praying the Rosary?", answer: "Yes. The Church's Manual of Indulgences grants a plenary indulgence, under the usual conditions (sacramental Confession, Holy Communion, prayer for the Pope's intentions, and freedom from attachment to sin), for praying five decades of the Rosary without interruption in a church or oratory, or together as a family, religious community or pious association, with meditation on the mysteries. In other circumstances a partial indulgence is granted." },
              { question: "Do Catholics worship Mary when they pray the Rosary?", answer: "No. Catholics worship God alone. In the Rosary they ask Mary to pray for them, as one might ask a friend, while the mysteries keep the focus on the life, death and resurrection of Jesus." },
            ]} />

            <RelatedArticles currentSlug="complete-rosary-guide" />

            <ArticleBottomCTA title="How Deep Is Your Catholic Faith?" description="Take our assessment and receive a personalized guide to growing in Marian devotion and the prayer life." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
