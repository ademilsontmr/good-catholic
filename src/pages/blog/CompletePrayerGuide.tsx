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
import { LinkedText } from "@/components/blog/LinkedText";

export default function CompletePrayerGuide() {
  return (
    <>
      <Helmet>
        <title>The Complete Catholic Prayer Guide: How to Build a Life of Prayer | Guide Catholic</title>
        <meta name="description" content="Everything you need to build a Catholic prayer life — the 5 forms of prayer, a complete daily routine, all essential prayers with full texts, and how to pray when you don't feel like it." />
        <meta name="keywords" content="complete catholic prayer guide, how to pray catholic, catholic prayer life, building prayer habit catholic, types of catholic prayer, daily prayer routine catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/complete-catholic-prayer-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Complete Catholic Prayer Guide: How to Build a Life of Prayer"
        description="Everything you need to build a Catholic prayer life — the 5 forms of prayer, a complete daily routine, all essential prayers with full texts, and how to pray when you don't feel like it."
        url="https://guidecatholic.com/blog/complete-catholic-prayer-guide/"
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
              <span className="text-text">Complete Catholic Prayer Guide</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 1, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />20 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Complete Catholic Prayer Guide: How to Build a Life of Prayer
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Prayer is the most fundamental act of the Christian life — and the most neglected. This is the only guide you will ever need: the five forms of prayer, a complete daily routine, every essential prayer with full text, and how to keep praying when you don't feel like it.
              </p>
            </header>
            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                The Catechism of the Catholic Church defines prayer as "the raising of one's mind and heart to God" (CCC 2559). This definition, drawn from St. John Damascene, is deceptively simple. Prayer is not a technique, a formula, or a performance. It is a relationship — the most important relationship of your life. Everything else in the spiritual life flows from it and depends on it.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Yet prayer is also the most neglected part of most Catholics' lives. We know we should pray. We intend to pray. But the day fills up, the phone demands attention, and prayer gets pushed to the margins. This guide exists to change that — not by adding guilt, but by giving you the understanding, the structure, and the tools to build a prayer life that actually works.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Prayer Is — and What It Isn't</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Prayer is not primarily about getting things from God. It is about being with God. The Catechism calls prayer "a vital and personal relationship with the living and true God" (CCC 2558). Like any relationship, it requires time, attention, honesty, and perseverance. You cannot have a relationship with someone you never speak to — or never listen to.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Prayer is also not about feeling good. Many people abandon prayer because they don't "feel" anything. But feelings are not the measure of prayer's value. St. Teresa of Ávila, one of the greatest mystics in history, went through 18 years of spiritual dryness. What matters is not what you feel but what you do: show up, turn your mind and heart toward God, and trust that He is present even when He seems absent.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The 5 Forms of Prayer</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                The Catechism identifies five forms of prayer (CCC 2626–2643). A healthy prayer life includes all five.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Blessing and Adoration.</strong> We acknowledge God's greatness and our dependence on Him. Example: "Blessed are you, Lord our God, King of the universe." The Gloria at Mass is a prayer of adoration. Eucharistic adoration is its purest form.</li>
                <li><strong>Petition.</strong> We ask God for what we need — for ourselves. "Give us this day our daily bread." Petition is not selfish; it is an act of humility that acknowledges our dependence on God for everything.</li>
                <li><strong>Intercession.</strong> We ask God for what others need. "I ask you to pray for me to the Lord our God" (Confiteor). Intercession is love in action — it is how we love our neighbor in prayer.</li>
                <li><strong>Thanksgiving.</strong> We thank God for His gifts — not just the ones we wanted, but all of them, including the cross. "Give thanks in all circumstances" (1 Thess 5:18). The Eucharist (from the Greek eucharistia, "thanksgiving") is the supreme act of thanksgiving.</li>
                <li><strong>Praise.</strong> We glorify God simply because He is God — not for what He has done for us, but for who He is. "Praise the Lord, all you nations" (Ps 117). Praise is the most selfless form of prayer and the closest to the prayer of heaven.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The 3 Expressions of Prayer</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                The Catechism also distinguishes three expressions of prayer (CCC 2700–2724), which are not stages to progress through but modes that complement each other.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Vocal Prayer.</strong> Prayer expressed in words — spoken aloud or silently. The Our Father, the Hail Mary, the Rosary. Vocal prayer is not inferior to other forms; it is the foundation. "Whether or not our prayer is heard depends not on the number of words, but on the fervor of our souls" (St. John Chrysostom).</li>
                <li><strong>Meditative Prayer.</strong> Prayer that engages the mind — reflecting on Scripture, a mystery of faith, or a spiritual text. Lectio Divina is the classic Catholic form of meditative prayer. The goal is not information but transformation: letting God's Word change you.</li>
                <li><strong>Contemplative Prayer.</strong> Prayer that goes beyond words and concepts — a simple, loving gaze at God. "Contemplative prayer is the simple expression of the mystery of prayer. It is a gaze of faith fixed on Jesus" (CCC 2724). This is the prayer of the saints, but it is available to everyone who perseveres in prayer.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Step-by-Step: Building a Daily Prayer Routine</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                A daily prayer routine is not a straitjacket — it is a scaffold. It gives structure to your relationship with God so that prayer happens even when you don't feel like it. Here is a complete daily routine, from morning to night.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Morning Prayer</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Begin the day by giving it to God before anything else — before your phone, before coffee, before the news. The Morning Offering consecrates the entire day to God:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Morning Offering</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  O Jesus, through the Immaculate Heart of Mary, I offer you my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians. I offer them for the intentions of our bishops and of all Apostles of Prayer, and in particular for those recommended by our Holy Father this month. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Follow the Morning Offering with Psalm 63 — the great morning psalm of longing for God: "O God, you are my God, I seek you, my soul thirsts for you; my flesh faints for you, as in a dry and weary land where there is no water." Then add a brief petition for the day's needs.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Midday Prayer: The Angelus</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                At noon (or 6 AM and 6 PM in the traditional schedule), pause to pray the Angelus — a brief meditation on the Incarnation:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Angelus</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  V. The Angel of the Lord declared unto Mary. R. And she conceived of the Holy Spirit. Hail Mary... V. Behold the handmaid of the Lord. R. Be it done unto me according to thy word. Hail Mary... V. And the Word was made flesh. R. And dwelt among us. Hail Mary... V. Pray for us, O holy Mother of God. R. That we may be made worthy of the promises of Christ.<br /><br />
                  Let us pray: Pour forth, we beseech thee, O Lord, thy grace into our hearts; that we, to whom the Incarnation of Christ, thy Son, was made known by the message of an angel, may by his Passion and Cross be brought to the glory of his Resurrection, through the same Christ our Lord. Amen.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Evening Prayer</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Evening is the traditional time for the Rosary — a 15–20 minute meditation on the life of Christ through the eyes of Mary. Alternatively, pray Vespers (Evening Prayer) from the Liturgy of the Hours, which takes about 10 minutes and consists of psalms, a hymn, a Scripture reading, and the Magnificat.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Night Prayer: Examination of Conscience and Compline</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Before sleep, review the day with God. The Examen (from St. Ignatius of Loyola) has five steps: give thanks, ask for light, review the day, express sorrow for failures, and resolve for tomorrow. Then pray the Act of Contrition:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Act of Contrition</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  O my God, I am heartily sorry for having offended thee, and I detest all my sins because of thy just punishments, but most of all because they offend thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of thy grace, to sin no more and to avoid the near occasions of sin. Amen.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Close with Compline (Night Prayer from the Liturgy of the Hours), which ends with the Salve Regina (Hail Holy Queen) and the beautiful antiphon: "Protect us, Lord, as we stay awake; watch over us as we sleep, that awake, we may keep watch with Christ, and asleep, rest in his peace."
              </LinkedText>

              <QuizCTA
                title="How strong is your Catholic prayer life?"
                description="Take our faith assessment and receive a personalized guide to deepening your prayer and growing closer to God."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Essential Catholic Prayers</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Every Catholic should know these prayers by heart. They are the vocabulary of Catholic prayer.
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Sign of the Cross</h3>
                <p className="text-text italic leading-relaxed text-sm">In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Our Father (Lord's Prayer)</h3>
                <p className="text-text italic leading-relaxed text-sm">Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Hail Mary</h3>
                <p className="text-text italic leading-relaxed text-sm">Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Glory Be (Doxology)</h3>
                <p className="text-text italic leading-relaxed text-sm">Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Apostles' Creed</h3>
                <p className="text-text italic leading-relaxed text-sm">I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.</p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Memorare</h3>
                <p className="text-text italic leading-relaxed text-sm">Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.</p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Hail Holy Queen (Salve Regina)</h3>
                <p className="text-text italic leading-relaxed text-sm">Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray When You Don't Feel Like It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Every person who prays seriously will encounter dryness — periods when prayer feels empty, God seems absent, and the whole enterprise seems pointless. This is not a sign that you are doing something wrong. It is a normal part of the spiritual life, and often a sign of growth.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                St. Ignatius of Loyola distinguished between consolation (when prayer feels alive and God seems close) and desolation (when prayer feels dry and God seems distant). His rule: never make major decisions during desolation, and never abandon your prayer routine during desolation. The value of prayer during dryness is precisely that it is an act of pure faith — you are praying not because it feels good but because God is real and worthy of worship regardless of your feelings.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Show up anyway. Sit down, open your Bible or prayer book, and begin. Often the dryness lifts once you start.</li>
                <li>Pray with your body. Kneel, make the Sign of the Cross, light a candle. Physical acts can engage the soul when the mind is distracted.</li>
                <li>Use vocal prayers. When you can't find your own words, use the Church's words — the Our Father, the Rosary, the Psalms.</li>
                <li>Tell God about the dryness. "Lord, I don't feel like praying. I feel nothing. But I am here because I believe you are real." This honesty is itself a prayer.</li>
                <li>Seek spiritual direction. A good spiritual director can help you discern whether dryness is a call to deeper prayer or a sign of something that needs attention.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Lectio Divina: Praying with Scripture</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Lectio Divina (Latin: "divine reading") is the ancient Catholic method of praying with Scripture. It has four steps:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Lectio (Reading).</strong> Read a short passage of Scripture slowly, attentively, as if reading a letter from God. Read it two or three times. Notice which word or phrase catches your attention.</li>
                <li><strong>Meditatio (Meditation).</strong> Chew on that word or phrase. Repeat it slowly. Let it sink in. Ask: what is God saying to me through this? How does it apply to my life right now?</li>
                <li><strong>Oratio (Prayer).</strong> Respond to God in your own words. Tell Him what the passage stirred in you — gratitude, sorrow, desire, confusion. This is a conversation, not a monologue.</li>
                <li><strong>Contemplatio (Contemplation).</strong> Rest in God's presence. Stop talking. Stop thinking. Simply be with Him. Let Him love you. This is the goal of all prayer.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                A practical example: Take John 15:9 — "As the Father has loved me, so I have loved you; abide in my love." Read it slowly (Lectio). Sit with the word "abide" — what does it mean to abide in love? (Meditatio). Tell Jesus: "Lord, I want to abide in your love, but I keep running away. Help me stay." (Oratio). Then simply rest in His presence, receiving His love (Contemplatio).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Advanced Prayer: Contemplation and Adoration</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                As your prayer life matures, you may be drawn toward more silent, contemplative forms of prayer. The Jesus Prayer — "Lord Jesus Christ, Son of God, have mercy on me, a sinner" — is a simple prayer from the Eastern Christian tradition that can be prayed continuously, in rhythm with your breathing. It is a form of what St. Paul calls "praying without ceasing" (1 Thess 5:17).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="complete-catholic-prayer-guide">
                Eucharistic adoration — spending time in silent prayer before the Blessed Sacrament exposed in a monstrance — is one of the most powerful forms of prayer available to Catholics. You are literally in the physical presence of Jesus Christ. Many saints have said that one hour of adoration is worth more than a year of other spiritual exercises. If your parish has adoration, make it a regular part of your prayer life.
              </LinkedText>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart."
                </p>
                <p className="text-text-muted text-center mt-2">— Mahatma Gandhi (quoting a Christian tradition)</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "How long should I pray each day?", answer: "Start with what you can sustain — even 10 minutes a day is transformative if done consistently. St. Francis de Sales recommended one hour of mental prayer per day for busy people, and two hours for those who are very busy (meaning: the busier you are, the more you need prayer). The goal is not a specific duration but a consistent, growing relationship with God." },
              { question: "Is it okay to pray the same prayers every day?", answer: "Yes — and in fact, this is the Catholic tradition. The Liturgy of the Hours, the Rosary, and the Mass all involve praying the same prayers repeatedly. Repetition is not vain repetition (which Jesus condemned in Matthew 6:7) — it is the deepening of familiar words through new understanding and deeper love. The Our Father prayed with full attention is never the same prayer twice." },
              { question: "What if I fall asleep during prayer?", answer: "St. Thérèse of Lisieux said that falling asleep during prayer is like a child falling asleep in their father's arms — it is not a failure but a sign of trust. If you regularly fall asleep, try praying at a different time of day, kneeling rather than sitting, or praying aloud. But don't be scrupulous about it." },
              { question: "Do I need to go to a church to pray?", answer: "No — you can pray anywhere. 'When you pray, go into your room and shut the door and pray to your Father who is in secret' (Matthew 6:6). However, praying in a church — especially before the Blessed Sacrament — has a special power because Christ is truly present there. Make time for both private prayer at home and prayer in the presence of the Eucharist." },
              { question: "How do I know if God is answering my prayers?", answer: "God always answers prayer — but not always in the way we expect. He answers with 'yes,' 'no,' or 'wait.' A 'no' is not a failure of prayer; it is God's wisdom overriding our limited perspective. The Catechism says: 'Do not be troubled if you do not immediately receive from God what you ask him; for he desires to do something even greater for you' (CCC 2737, citing Evagrius Ponticus). Trust the process." },
            ]} />

            <RelatedArticles currentSlug="complete-catholic-prayer-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in prayer and the spiritual life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
