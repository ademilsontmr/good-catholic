import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintIgnatiusOfLoyola() {
  return (
    <>
      <Helmet>
        <title>Saint Ignatius of Loyola: Founder of the Jesuits & Spiritual Exercises | Guide Catholic</title>
        <meta name="description" content="Discover Saint Ignatius of Loyola — the soldier-turned-mystic who founded the Jesuits and wrote the Spiritual Exercises, one of the most influential books in Christian history." />
        <meta name="keywords" content="saint ignatius of loyola, spiritual exercises ignatius, jesuits founder, ignatius of loyola conversion, society of jesus, feast day july 31" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-ignatius-of-loyola/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Ignatius of Loyola: Founder of the Jesuits & Spiritual Exercises"
        description="Discover Saint Ignatius of Loyola — the soldier-turned-mystic who founded the Jesuits and wrote the Spiritual Exercises, one of the most influential books in Christian history."
        url="https://guidecatholic.com/blog/saint-ignatius-of-loyola/"
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
              <span className="text-text">Saint Ignatius of Loyola</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Intercession</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Ignatius of Loyola: Founder of the Jesuits & Spiritual Exercises
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                He was a Basque soldier who dreamed of glory on the battlefield — until a cannonball shattered his leg and, in the long months of recovery, shattered his old self entirely. From that wound came one of the most transformative figures in Catholic history: Saint Ignatius of Loyola, founder of the Society of Jesus and author of the Spiritual Exercises.
              </p>
            </header>
            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                Saint Ignatius of Loyola (1491–1556) is one of the most consequential figures in the history of the Catholic Church. A Spanish nobleman and soldier who underwent a dramatic conversion after being wounded in battle, he went on to found the Society of Jesus — the Jesuits — one of the largest and most influential religious orders in history. His Spiritual Exercises, a structured program of prayer and discernment, has shaped the spiritual lives of millions of Catholics over five centuries and remains one of the most widely used tools for spiritual direction in the Church today.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life: The Soldier of Loyola</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                Íñigo López de Loyola was born in 1491 at the castle of Loyola in the Basque region of northern Spain. He was the youngest of thirteen children in a noble family with a long military tradition. As a young man, he was sent to serve as a page at the court of the royal treasurer of Castile, where he received a courtly education and developed a taste for chivalric romances, fine clothes, gambling, and the pursuit of glory.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                By his own later admission, Ignatius was vain, hot-tempered, and ambitious. He dreamed of winning fame through military exploits and the favor of great ladies. He entered military service and served in various campaigns in northern Spain. He was, in short, a typical young nobleman of his era — talented, proud, and entirely focused on worldly honor.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Cannonball at Pamplona</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                The turning point came on May 20, 1521. Ignatius was helping to defend the fortress of Pamplona against a French army. The situation was hopeless — the garrison was vastly outnumbered — but Ignatius refused to surrender, inspiring the other defenders to fight on. During the battle, a cannonball passed between his legs, shattering his right leg and wounding his left. The fortress fell immediately after.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                The French soldiers, impressed by his bravery, treated him with respect and had him carried back to the castle of Loyola on a litter. There followed months of agonizing recovery. The leg had been set badly and had to be broken and reset — twice — without anesthesia. Even then, a bone protruded below the knee, and Ignatius, vain about his appearance, insisted it be sawed off. He endured all of this without complaint, but the leg never healed properly, and he walked with a limp for the rest of his life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                During the long convalescence, Ignatius asked for books of chivalric romance to pass the time. There were none in the castle — only a life of Christ and a collection of lives of the saints. He read them reluctantly at first, then with growing fascination. He began to notice something: when he imagined returning to his old life of military glory and courtly romance, he felt a brief excitement followed by emptiness and sadness. But when he imagined imitating the saints — going on pilgrimage, doing penance, serving God — he felt a deep, lasting joy.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                This observation — that different thoughts leave different "aftereffects" in the soul — became the foundation of Ignatian discernment of spirits. Ignatius was learning, from his own experience, how to read the movements of the soul and distinguish the voice of God from the voice of the world and the enemy.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Manresa and the Birth of the Spiritual Exercises</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                After his recovery, Ignatius set out on pilgrimage. He stopped at the Benedictine monastery of Montserrat, where he made a general confession of his whole life, hung his sword and dagger at the altar of Our Lady, and spent the night in vigil — a symbolic laying down of his old identity as a soldier. He then went to the nearby town of Manresa, intending to stay a few days. He stayed nearly a year.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                At Manresa, Ignatius underwent an intense period of prayer, penance, and mystical experience. He spent hours each day in prayer, fasted severely, and experienced both great consolations and terrible desolations — including a period of severe scruples and near-despair. But he also received extraordinary mystical illuminations, including a famous vision by the River Cardoner in which he felt that he understood more about spiritual things in a single moment than he had learned in all his previous life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                It was at Manresa that Ignatius began to write down the notes that would eventually become the Spiritual Exercises. He was not writing a book to be read — he was recording a method of prayer and discernment that he had discovered through his own experience and that he wanted to share with others.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Spiritual Exercises: Structure and Method</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                The Spiritual Exercises is not a book to be read but a program to be lived — a structured retreat of approximately thirty days (or an extended version spread over several months) designed to help a person order their life entirely toward God. It is organized into four "weeks" (which are not necessarily seven days each, but stages of prayer):
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>First Week:</strong> Meditation on sin, its consequences, and God's mercy. The retreatant confronts their own sinfulness and receives the grace of sorrow and conversion. The famous "Principle and Foundation" — "Man is created to praise, reverence, and serve God our Lord, and by this means to save his soul" — sets the framework for the whole retreat.</li>
                <li><strong>Second Week:</strong> Contemplation of the life of Christ, from the Incarnation through the public ministry. The retreatant is invited to know Christ more intimately, love Him more deeply, and follow Him more closely. The "Two Standards" meditation — imagining the banner of Christ and the banner of Satan — and the "Three Classes of Men" help the retreatant examine their attachments and make a generous response to God's call.</li>
                <li><strong>Third Week:</strong> Contemplation of the Passion of Christ. The retreatant accompanies Christ through His suffering and death, deepening their love and their willingness to share in His cross.</li>
                <li><strong>Fourth Week:</strong> Contemplation of the Resurrection. The retreatant experiences the joy of the risen Christ and is sent forth to serve God in the world. The famous "Contemplation to Attain Love" — meditating on how God dwells in all things and labors in all things — concludes the Exercises.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                Central to the Exercises is the practice of discernment of spirits — learning to recognize the movements of consolation and desolation in the soul, and to use them as guides in making decisions (the "Election"). Ignatius taught that God communicates with us through our interior movements, and that learning to read these movements is essential to living a life ordered toward God.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in discernment and the spiritual life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Founding the Society of Jesus</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                After Manresa, Ignatius made a pilgrimage to Jerusalem, then returned to Europe to study — first in Barcelona, then in Alcalá, Salamanca, and finally Paris, where he spent seven years earning a Master of Arts degree. In Paris he gathered around him a small group of companions — including Francis Xavier and Peter Faber — who shared his vision of serving God with total availability.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                On August 15, 1534 — the feast of the Assumption — Ignatius and six companions gathered in a chapel on Montmartre in Paris and made vows of poverty, chastity, and a pilgrimage to Jerusalem (or, if that proved impossible, to place themselves at the Pope's disposal for whatever mission he might assign). This moment is traditionally regarded as the founding of the Society of Jesus.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                The Jerusalem pilgrimage proved impossible due to war. The companions went to Rome and placed themselves at the service of Pope Paul III, who recognized their potential immediately. On September 27, 1540, the Pope officially approved the Society of Jesus with the bull Regimini militantis Ecclesiae. Ignatius was elected the first Superior General of the new order.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                The Jesuits were distinctive in several ways: they had no choir obligation (no requirement to pray the Divine Office in common), they took a special fourth vow of obedience to the Pope for missions, and they were trained for active apostolic work — preaching, teaching, spiritual direction, and missionary activity — rather than monastic contemplation. Their motto was "Ad Maiorem Dei Gloriam" — "For the Greater Glory of God" — often abbreviated AMDG.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Jesuit Legacy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                From its founding, the Society of Jesus grew with extraordinary speed. By the time of Ignatius's death in 1556, there were already about a thousand Jesuits working across Europe, Asia, Africa, and the Americas. Francis Xavier, one of the original companions, had already evangelized India, Southeast Asia, and Japan. Peter Canisius was reforming the Church in Germany. Jesuit missionaries were working in Brazil, Ethiopia, and the Congo.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                The Jesuits became the intellectual vanguard of the Counter-Reformation. They founded hundreds of schools and universities — the Ratio Studiorum, their educational program, became the model for secondary education in the Western world. Today, Jesuit universities include Georgetown, Fordham, Boston College, Loyola, and hundreds of others around the world. The Jesuits also produced some of the greatest theologians, scientists, and missionaries in Catholic history.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Death and Canonization</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                Ignatius spent the last years of his life in Rome, governing the rapidly growing Society of Jesus and writing the Jesuit Constitutions. He died quietly on July 31, 1556, without receiving the last sacraments — his death came so suddenly that there was no time. He was sixty-five years old.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-ignatius-of-loyola">
                He was beatified by Pope Paul V in 1609 and canonized by Pope Gregory XV on March 12, 1622 — the same day as Teresa of Ávila, Francis Xavier, Philip Neri, and Isidore the Farmer. His feast day is July 31. He is the patron saint of soldiers, the Society of Jesus, and spiritual retreats.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Suscipe — Prayer of Saint Ignatius</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Take, Lord, and receive all my liberty, my memory, my understanding, and my entire will — all that I have and call my own. You have given it all to me. To you, Lord, I return it. Everything is yours; do with it what you will. Give me only your love and your grace. That is enough for me.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Go forth and set the world on fire."
                </p>
                <p className="text-text-muted text-center mt-2">— Saint Ignatius of Loyola</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who was Saint Ignatius of Loyola?", answer: "Saint Ignatius of Loyola (1491–1556) was a Spanish Basque nobleman and soldier who, after being wounded at the Battle of Pamplona in 1521, underwent a profound conversion and went on to found the Society of Jesus (the Jesuits) and write the Spiritual Exercises. He is one of the most influential figures in Catholic history. His feast day is July 31." },
              { question: "What are the Spiritual Exercises of Saint Ignatius?", answer: "The Spiritual Exercises is a structured program of prayer and discernment developed by Ignatius, typically made over thirty days (or in an extended form over several months). It is organized into four 'weeks': meditation on sin and God's mercy; contemplation of Christ's life; contemplation of the Passion; and contemplation of the Resurrection. Its goal is to help a person order their entire life toward God and make a generous 'election' in response to God's call." },
              { question: "What is the Society of Jesus (Jesuits)?", answer: "The Society of Jesus, founded by Ignatius of Loyola and approved by Pope Paul III in 1540, is a religious order of priests and brothers known for their intellectual rigor, apostolic flexibility, and special vow of obedience to the Pope. The Jesuits became the leading force of the Counter-Reformation, founding hundreds of schools and universities and sending missionaries across the globe. Their motto is 'Ad Maiorem Dei Gloriam' (For the Greater Glory of God)." },
              { question: "What is Ignatian discernment of spirits?", answer: "Ignatian discernment of spirits is the practice of reading the interior movements of the soul — consolation (peace, joy, drawing toward God) and desolation (sadness, confusion, drawing away from God) — to distinguish the voice of God from other voices and make decisions aligned with God's will. It is one of the most practical and widely used tools in Catholic spiritual direction." },
              { question: "When is the feast day of Saint Ignatius of Loyola?", answer: "The feast day of Saint Ignatius of Loyola is July 31. He was canonized in 1622 and is the patron saint of soldiers, the Society of Jesus, and spiritual retreats." },
            ]} />

            <RelatedArticles currentSlug="saint-ignatius-of-loyola" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in discernment and the spiritual life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
