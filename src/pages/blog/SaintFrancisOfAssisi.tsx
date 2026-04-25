import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flame, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintFrancisOfAssisi() {
  return (
    <>
      <Helmet>
        <title>Saint Francis of Assisi: Life, Stigmata, and the Franciscan Legacy | Guide Catholic</title>
        <meta name="description" content="Discover the life of Saint Francis of Assisi — the Poor Man of Assisi who received the stigmata, founded the Franciscans, and became one of the most beloved saints in history." />
        <meta name="keywords" content="saint francis of assisi, st francis of assisi, franciscan order, stigmata saint francis, prayer of saint francis, feast day october 4" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-francis-of-assisi/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Francis of Assisi: Life, Stigmata, and the Franciscan Legacy"
        description="Discover the life of Saint Francis of Assisi — the Poor Man of Assisi who received the stigmata, founded the Franciscans, and became one of the most beloved saints in history."
        url="https://guidecatholic.com/blog/saint-francis-of-assisi/"
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
              <span className="text-text">Saint Francis of Assisi</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Francis of Assisi: Life, Stigmata, and the Franciscan Legacy
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Eight centuries after his death, Francis of Assisi remains one of the most recognized and beloved figures in human history — not just in the Catholic Church, but in the entire world. His story is one of radical conversion, heroic poverty, and mystical union with Christ.
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Born in 1181 or 1182 in Assisi, Italy, Francis Bernardone began life as the son of a wealthy cloth merchant. He was charming, generous, and popular — the life of every party. He dreamed of becoming a knight and winning glory in battle. No one who knew the young Francis would have predicted that he would become one of the greatest saints in the history of the Church.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Yet God had other plans. Through a series of encounters — with a leper, with a crumbling church, with the voice of Christ — Francis was transformed from a pleasure-seeking young man into the "Poor Man of Assisi," the founder of the Franciscan Order, and the first person in recorded history to receive the stigmata.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life: The Merchant's Son</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Francis was born to Pietro di Bernardone, a prosperous cloth merchant, and his wife Pica, who was of French origin. His father named him Giovanni (John) at baptism, but Pietro — who loved France and French culture — called him Francesco (Francis), meaning "the Frenchman." The name stuck.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Francis grew up in comfort and privilege. He was educated, spoke French, loved poetry and music, and was known for his generosity — he would give away his father's goods to beggars without a second thought. He was the kind of young man who attracted followers naturally, and he led a group of friends in a life of feasting, singing, and merrymaking.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                At around age 20, Francis went to war against the neighboring city of Perugia. He was captured and spent a year as a prisoner of war. During this time, he fell seriously ill. The illness and imprisonment began to change him — he became more reflective, more sensitive to suffering, more aware of the emptiness of the life he had been living.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Conversion: Three Encounters That Changed Everything</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Leper</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                One day, while riding outside Assisi, Francis encountered a leper on the road. Lepers were the most feared and despised people in medieval society — they were required to ring a bell to warn others of their approach. Francis had always been repulsed by lepers. But something moved him to dismount, approach the leper, and embrace him.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                In his Testament, written near the end of his life, Francis described this moment as the beginning of his conversion: "The Lord granted me, Brother Francis, to begin to do penance in this way: while I was in sin, it seemed very bitter to me to see lepers. And the Lord himself led me among them and I had mercy upon them. And when I left them, that which seemed bitter to me was changed into sweetness of soul and body."
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Crucifix of San Damiano</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Shortly after the encounter with the leper, Francis was praying in the small, dilapidated church of San Damiano outside Assisi. As he prayed before a Byzantine crucifix, he heard the voice of Christ speaking to him: "Francis, go and repair my house, which as you can see is falling into ruin."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Francis initially understood this literally — he thought Christ was asking him to repair the physical building of San Damiano. He sold some of his father's cloth to pay for the repairs. His father was furious and dragged him before the Bishop of Assisi to demand the money back.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                In a dramatic scene before the bishop and the townspeople of Assisi, Francis stripped off his fine clothes, handed them to his father, and said: "Until now I have called Pietro di Bernardone my father. But because I have proposed to serve God, I return to him the money about which he was so upset, and also all the clothing which is his, desiring to say from now on: 'Our Father who art in heaven,' and not 'My father, Pietro di Bernardone.'"
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                This was the definitive break. Francis walked away from his father's house, his inheritance, and his former life — naked and free.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Gospel Call</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                In 1208, Francis was attending Mass at the Portiuncula — a tiny chapel near Assisi — when he heard the Gospel reading that would define his life: "As you go, proclaim the good news, 'The kingdom of heaven has come near.' Cure the sick, raise the dead, cleanse the lepers, cast out demons. You received without payment; give without payment. Take no gold, or silver, or copper in your belts, no bag for your journey, or two tunics, or sandals, or a staff" (Matthew 10:7-10).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Francis was electrified. "This is what I want," he said. "This is what I seek. This is what I desire with all my heart." He immediately took off his shoes, put aside his staff, and began to preach penance and the Kingdom of God.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Franciscan Order</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Francis soon attracted followers. By 1209, he had eleven companions. He wrote a simple Rule of Life — essentially a collection of Gospel texts — and traveled to Rome to seek approval from Pope Innocent III.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                The Pope initially hesitated. A group of poor men with no property, no fixed monastery, no established Rule — it seemed impractical, even dangerous. But after a dream in which he saw a poor man holding up the Lateran Basilica (the Pope's cathedral) from collapsing, Innocent gave his verbal approval to the new fraternity.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                The Order of Friars Minor (Lesser Brothers) — the Franciscans — was born. They were to own nothing, live among the poor, preach penance, and serve the sick and marginalized. Within Francis's lifetime, the Order grew to thousands of members across Europe and beyond.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Francis also founded the Order of Poor Ladies (now the Poor Clares) with his spiritual daughter St. Clare of Assisi, and the Third Order (now the Secular Franciscan Order) for laypeople who wanted to live the Franciscan spirit in the world.
              </LinkedText>

              <QuizCTA
                title="Which saint is your spiritual companion?"
                description="Take our Catholic faith assessment and discover which saints can guide your spiritual journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Stigmata: The Seal of Christ</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                In September 1224, Francis withdrew to Mount La Verna in Tuscany for a 40-day fast in preparation for the feast of St. Michael. On the feast of the Exaltation of the Holy Cross (September 14), while praying, Francis had a vision of a seraph — a six-winged angel — bearing the image of a crucified man. When the vision ended, Francis found that he bore on his body the five wounds of Christ: in his hands, feet, and side.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Francis was the first person in recorded history to receive the stigmata — the physical wounds of Christ's Passion. He bore these wounds for the remaining two years of his life, suffering greatly but also experiencing profound mystical consolation. He tried to hide the wounds, but they were witnessed by many of his brothers.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                The stigmata were not just a physical phenomenon — they were the seal of Francis's total identification with Christ crucified. His entire life had been a journey toward this moment: the complete conformity of his life to the life of Jesus.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Canticle of the Creatures</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Near the end of his life, Francis composed the Canticle of the Creatures — one of the earliest and most beautiful poems in the Italian language. In it, he praised God through all of creation: "Praised be You, my Lord, through Sister Moon and the stars... through Brother Wind... through Sister Water... through Brother Fire... through our Sister Mother Earth."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                This canticle reveals the heart of Francis's spirituality: a profound sense of the goodness of creation, the brotherhood of all creatures, and the presence of God in all things. It is why Francis is the patron saint of ecology and why Pope Francis chose his name.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Death and Canonization</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Francis died on October 3, 1226, at the Portiuncula — the little chapel he loved most. He was 44 or 45 years old. As he lay dying, he asked to be laid on the bare ground, in imitation of Christ who died on the cross. He sang Psalm 141 and then breathed his last.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                He was canonized just two years later, on July 16, 1228, by Pope Gregory IX — one of the fastest canonizations in Church history. His feast day is October 4.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Prayer of Saint Francis</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed text-sm">
                  "Lord, make me an instrument of Your peace.<br />
                  Where there is hatred, let me sow love;<br />
                  where there is injury, pardon;<br />
                  where there is doubt, faith;<br />
                  where there is despair, hope;<br />
                  where there is darkness, light;<br />
                  where there is sadness, joy.<br /><br />
                  O Divine Master, grant that I may not so much seek<br />
                  to be consoled as to console;<br />
                  to be understood as to understand;<br />
                  to be loved as to love.<br />
                  For it is in giving that we receive;<br />
                  it is in pardoning that we are pardoned;<br />
                  and it is in dying that we are born to eternal life. Amen."
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Note: This prayer was not written by Francis himself — it dates from the early 20th century. But it beautifully captures the spirit of his life and teaching.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Francis's Legacy Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                The Franciscan family today includes hundreds of thousands of friars, sisters, and laypeople around the world. The Franciscan spirit — poverty, humility, joy, love of creation, service to the poor — continues to inspire millions.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-francis-of-assisi">
                Pope Francis, elected in 2013, chose the name Francis in honor of the saint — the first pope to do so. He explained: "He is the man of poverty, the man of peace, the man who loves and protects creation... How I would like a Church which is poor and for the poor!"
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible."
                </p>
                <p className="text-text-muted text-center mt-2">— St. Francis of Assisi</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "When is the feast day of Saint Francis of Assisi?", answer: "The feast day of Saint Francis of Assisi is October 4. On this day, many Catholic churches hold a Blessing of the Animals in his honor, since Francis is the patron saint of animals and ecology." },
              { question: "What is Saint Francis the patron saint of?", answer: "Saint Francis is the patron saint of animals, ecology, merchants, Italy, and the Franciscan Order. He is also the patron of those who work to protect the environment." },
              { question: "Did Saint Francis really talk to animals?", answer: "The Franciscan tradition records many stories of Francis preaching to birds, taming a wolf, and communicating with animals. Whether these are literal or symbolic, they reflect his deep sense of brotherhood with all of creation and his belief that all creatures praise God." },
              { question: "What is the difference between Franciscans and other religious orders?", answer: "The Franciscans (Order of Friars Minor) are characterized by their emphasis on poverty, itinerant preaching, and service to the poor. Unlike monastic orders (like the Benedictines) who live in fixed monasteries, the early Franciscans were wandering preachers. Today there are many branches of the Franciscan family, including the Conventual Franciscans, Capuchins, and Third Order Franciscans." },
              { question: "What is the Tau cross associated with Saint Francis?", answer: "The Tau (T-shaped) cross was a symbol Francis adopted from Pope Innocent III, who used it as a sign of those who were marked for salvation (cf. Ezekiel 9:4). Francis used it as his personal signature and it became a symbol of the Franciscan Order. It represents the cross of Christ and the call to conversion." },
            ]} />

            <RelatedArticles currentSlug="saint-francis-of-assisi" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Discover Your Catholic Faith Journey</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide inspired by the saints.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
