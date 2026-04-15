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

export default function DivineMercyChaplet() {
  return (
    <>
      <Helmet>
        <title>How to Pray the Divine Mercy Chaplet: Complete Guide | Guide Catholic</title>
        <meta name="description" content="Learn how to pray the Divine Mercy Chaplet step by step. Complete guide with prayers, history, and the significance of the 3pm Hour of Mercy as revealed to St. Faustina." />
        <meta name="keywords" content="divine mercy chaplet, how to pray divine mercy chaplet, chaplet of divine mercy, st faustina, 3pm hour of mercy" />
        <link rel="canonical" href="https://guidecatholic.com/blog/divine-mercy-chaplet/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="How to Pray the Divine Mercy Chaplet: Complete Guide"
          description="Learn how to pray the Divine Mercy Chaplet step by step. Complete guide with prayers, history, and the significance of the 3pm Hour of Mercy as revealed to St. Faustina."
          url="https://guidecatholic.com/blog/divine-mercy-chaplet/"
        />
        <HowToSchema
          name="How to Pray the Divine Mercy Chaplet"
          description="Learn how to pray the Divine Mercy Chaplet step by step."
          url="https://guidecatholic.com/blog/divine-mercy-chaplet/"
          totalTime="PT15M"
          steps={[
            {"name": "Begin with the Sign of the Cross", "text": "Make the Sign of the Cross and pray the optional opening prayer."},
          {"name": "Pray the Opening Prayers", "text": "On the single bead, pray the Our Father, Hail Mary, and Apostles' Creed."},
          {"name": "Pray the Five Decades", "text": "On each large bead: Eternal Father prayer. On each small bead: For the sake of His sorrowful Passion prayer."},
          {"name": "Conclude with the Holy God Prayer", "text": "Pray Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world — three times."}
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
              <span className="text-text">Divine Mercy Chaplet</span>
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
                  9 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How to Pray the Divine Mercy Chaplet: Complete Guide
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Divine Mercy Chaplet is one of the most powerful prayers given to the Church in modern times. Revealed to St. Faustina Kowalska, it is a direct channel of God's infinite mercy for sinners and the dying.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                In the 1930s, a humble Polish nun named Sister Faustina Kowalska began receiving extraordinary visions of Jesus Christ. In these apparitions, Jesus revealed His burning desire to pour out His mercy upon all humanity — especially the greatest sinners. He gave her a specific prayer, the Chaplet of Divine Mercy, and asked that it be spread throughout the world. Today, millions of American Catholics pray this chaplet daily, trusting in the promise Jesus made to St. Faustina: "Whoever will recite it will receive great mercy at the hour of death."
              </p>

              <p className="text-text leading-relaxed mb-6">
                Unlike the Rosary, which requires a traditional rosary beads set, the Divine Mercy Chaplet is prayed on the same beads — making it accessible to anyone who already owns a rosary. Its simplicity is part of its beauty: a short, powerful prayer that can be completed in about 15 minutes, yet carries the weight of Christ's entire Passion.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Origin: St. Faustina and the Diary of Divine Mercy
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Saint Faustina Kowalska (1905–1938) was a Polish religious sister of the Congregation of the Sisters of Our Lady of Mercy. Despite her limited formal education, she kept a detailed spiritual diary — now known as the "Diary: Divine Mercy in My Soul" — which records her mystical experiences with Jesus. This diary has become one of the most widely read spiritual books of the 20th century.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus appeared to St. Faustina on September 13, 1935, and taught her the Chaplet of Divine Mercy. He explained that this prayer was to be offered as an act of intercession, especially for sinners and the dying. He promised extraordinary graces to those who prayed it with trust and confidence in His mercy.
              </p>
              <p className="text-text leading-relaxed mb-6">
                St. Faustina was canonized by Pope John Paul II on April 30, 2000 — the same day he established the Feast of Divine Mercy for the universal Church, to be celebrated on the Second Sunday of Easter. Pope John Paul II, himself Polish, had a deep personal devotion to Divine Mercy and called St. Faustina "the great apostle of Divine Mercy in our time."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Full Text of the Divine Mercy Chaplet
              </h2>
              <p className="text-text leading-relaxed mb-4">
                The chaplet is prayed on standard rosary beads. Here is the complete prayer:
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Opening Prayers</h3>
                <p className="text-text leading-relaxed mb-3">
                  <strong>Begin with the Sign of the Cross:</strong> In the name of the Father, and of the Son, and of the Holy Spirit. Amen.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  <strong>Optional Opening Prayer:</strong> "You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us."
                </p>
                <p className="text-text italic mb-4">(Repeat 3 times) "O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You!"</p>

                <h3 className="font-display text-lg font-bold text-text mb-4">On the Our Father Beads (Large Beads)</h3>
                <p className="text-text leading-relaxed mb-3">
                  <strong>Eternal Father,</strong> I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.
                </p>

                <h3 className="font-display text-lg font-bold text-text mb-4">On the Hail Mary Beads (Small Beads — 10 times per decade)</h3>
                <p className="text-text leading-relaxed mb-3">
                  <strong>For the sake of His sorrowful Passion,</strong> have mercy on us and on the whole world.
                </p>

                <h3 className="font-display text-lg font-bold text-text mb-4">Concluding Doxology (Repeat 3 times)</h3>
                <p className="text-text leading-relaxed mb-3">
                  Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.
                </p>

                <h3 className="font-display text-lg font-bold text-text mb-4">Optional Closing Prayer</h3>
                <p className="text-text leading-relaxed">
                  "Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself."
                </p>
              </div>

              <QuizCTA
                title="How deep is your trust in God's mercy?"
                description="Divine Mercy calls us to complete trust in God. Take our quiz and discover how to grow in confidence and surrender in your Catholic faith journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Step-by-Step Guide to Praying the Chaplet
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Step 1: Begin with the Sign of the Cross
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Hold the crucifix and make the Sign of the Cross. This places you in the presence of the Holy Trinity and marks the sacred beginning of your prayer time.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Step 2: Pray the Opening Prayers (Optional but Recommended)
              </h3>
              <p className="text-text leading-relaxed mb-6">
                On the single bead before the first decade, pray the Our Father, Hail Mary, and the Apostles' Creed. Then pray the optional opening prayer from the Diary of St. Faustina, followed by the "O Blood and Water" prayer three times.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Step 3: Pray the Five Decades
              </h3>
              <p className="text-text leading-relaxed mb-6">
                For each of the five decades: On the large bead, pray the "Eternal Father" prayer. On each of the ten small beads, pray "For the sake of His sorrowful Passion, have mercy on us and on the whole world." Repeat this pattern for all five decades.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Step 4: Conclude with the Holy God Prayer
              </h3>
              <p className="text-text leading-relaxed mb-6">
                After the five decades, pray the "Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world" three times. This doxology echoes the Trisagion of the early Church and unites our prayer with the angels before the throne of God.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The 3 PM Hour of Mercy
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Jesus specifically asked St. Faustina to pray the Chaplet at 3 PM — the Hour of Mercy — the hour of His death on the Cross. He said: "At three o'clock, implore My mercy, especially for sinners; and, if only for a brief moment, immerse yourself in My Passion, particularly in My abandonment at the moment of agony. This is the hour of great mercy for the whole world."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Many American Catholics have made it a daily practice to pause at 3 PM — even briefly — to pray the chaplet or simply meditate on Christ's Passion. Some parishes ring a bell at 3 PM as a reminder. This practice connects us to the very moment of our redemption and opens a special channel of grace.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Promises Jesus Made to St. Faustina
              </h2>
              <p className="text-text leading-relaxed mb-4">
                In the Diary, Jesus made several specific promises to those who pray the Chaplet of Divine Mercy:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Whoever recites it will receive great mercy at the hour of death</li>
                <li>Even the most hardened sinners will receive grace if they pray it with trust</li>
                <li>When prayed at the bedside of the dying, Jesus will stand between the Father and the dying person as their Advocate</li>
                <li>Priests who recommend it to sinners will be filled with power</li>
                <li>Those who spread devotion to Divine Mercy will be protected throughout their lives</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Divine Mercy Image and Its Meaning
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Jesus also asked St. Faustina to have an image painted showing Him with two rays of light — one red and one white — emanating from His Heart. He explained: "The two rays denote Blood and Water. The pale ray stands for the Water which makes souls righteous. The red ray stands for the Blood which is the life of souls." The inscription at the bottom reads: "Jesus, I trust in You" — the motto of the entire Divine Mercy devotion.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "The greater the sinner, the greater the right he has to My mercy."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Jesus to St. Faustina (Diary, 723)
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "I desire that the Feast of Mercy be a refuge and shelter for all souls, and especially for poor sinners."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Jesus to St. Faustina (Diary, 699)
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="divine-mercy-chaplet" />

            <BlogFAQ faqs={[
              {
                question: "What is the Divine Mercy Chaplet?",
                answer: "The Divine Mercy Chaplet is a prayer revealed by Jesus Christ to St. Faustina Kowalska in the 1930s. It is prayed on standard rosary beads and focuses on offering the Body, Blood, Soul, and Divinity of Jesus to the Father in atonement for sins, asking for mercy on the whole world."
              },
              {
                question: "When should I pray the Divine Mercy Chaplet?",
                answer: "Jesus specifically asked that the chaplet be prayed at 3 PM — the Hour of Mercy — the time of His death on the Cross. However, it can be prayed at any time of day. Many Catholics pray it daily, especially during times of difficulty or when interceding for the dying."
              },
              {
                question: "Do I need special beads to pray the Divine Mercy Chaplet?",
                answer: "No special beads are required. The chaplet is prayed on standard rosary beads. You can also use a dedicated Divine Mercy chaplet, which typically has five decades like a rosary but may have a different crucifix or medal."
              },
              {
                question: "What promises did Jesus make to those who pray the chaplet?",
                answer: "Jesus promised St. Faustina that whoever recites the chaplet will receive great mercy at the hour of death. He also promised that even hardened sinners will receive grace if they pray it with trust, and that when prayed at the bedside of the dying, He will stand between the Father and the dying person as their Advocate."
              },
              {
                question: "Is the Divine Mercy devotion approved by the Catholic Church?",
                answer: "Yes. The Divine Mercy devotion was fully approved by the Catholic Church. Pope John Paul II canonized St. Faustina on April 30, 2000, and established the Feast of Divine Mercy for the universal Church on the Second Sunday of Easter. The devotion has been embraced by popes and bishops worldwide."
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
