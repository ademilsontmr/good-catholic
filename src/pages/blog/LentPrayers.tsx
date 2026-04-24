import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Wind, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function LentPrayers() {
  return (
    <>
      <Helmet>
        <title>Lent Prayers 2026: Best Catholic Prayers for the Lenten Season | Guide Catholic</title>
        <meta name="description" content="The best Catholic prayers for Lent 2026 — the Stations of the Cross, Lenten prayers of repentance, the Miserere (Psalm 51), prayers for each week of Lent, and more." />
        <meta name="keywords" content="lent prayers, lenten prayers catholic, prayers for lent, lent 2026 prayers, stations of the cross prayer, psalm 51 lent, catholic lent prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/lent-prayers/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Lent Prayers 2026: Best Catholic Prayers for the Lenten Season"
        description="The best Catholic prayers for Lent 2026 — the Stations of the Cross, Lenten prayers of repentance, the Miserere (Psalm 51), prayers for each week of Lent, and more."
        url="https://guidecatholic.com/blog/lent-prayers/"
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
              <span className="text-text">Lent Prayers</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgical Year</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Lent Prayers 2026: Best Catholic Prayers for the Lenten Season
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Lent is the Church's great season of prayer, fasting, and conversion. These prayers — from the ancient Miserere to the Stations of the Cross — will help you enter more deeply into the mystery of Christ's Passion and prepare your heart for Easter.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Wind className="w-24 h-24 text-purple-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-1">📅 Lent 2026</p>
                <p className="text-text text-sm">Ash Wednesday: <strong>February 18, 2026</strong> → Easter Sunday: <strong>April 5, 2026</strong></p>
              </div>

              <p className="text-text leading-relaxed mb-6">
                Lent is not primarily about giving things up — it is about drawing closer to God. The prayers of Lent are the heart of the season: they express our sorrow for sin, our longing for God, our solidarity with Christ in His suffering, and our hope in the Resurrection.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Miserere — Psalm 51: The Great Lenten Psalm</h2>
              <p className="text-text leading-relaxed mb-6">
                Psalm 51 — the Miserere — is the greatest prayer of repentance in the entire Bible. Traditionally attributed to King David after his sin with Bathsheba, it has been the Church's primary Lenten prayer for centuries. It is prayed at Lauds (Morning Prayer) on Fridays throughout the year and is especially associated with Lent.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text font-semibold text-center mb-3">Psalm 51 — Miserere (selected verses)</p>
                <p className="text-text italic leading-relaxed text-sm">
                  Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity, and cleanse me from my sin!<br /><br />
                  For I know my transgressions, and my sin is ever before me. Against you, you only, have I sinned and done what is evil in your sight...<br /><br />
                  Create in me a clean heart, O God, and renew a right spirit within me. Cast me not away from your presence, and take not your Holy Spirit from me. Restore to me the joy of your salvation, and uphold me with a willing spirit.<br /><br />
                  The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Stations of the Cross</h2>
              <p className="text-text leading-relaxed mb-6">
                The Stations of the Cross (Via Crucis) is the most distinctively Lenten devotion — a meditation on the 14 (or 15) stages of Christ's Passion, from His condemnation to His burial (and Resurrection). It is traditionally prayed on Fridays during Lent, often in a church where images of the stations are displayed.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The 14 traditional stations:
              </p>
              <ol className="list-decimal list-inside text-text space-y-1 mb-6 text-sm">
                <li>Jesus is condemned to death</li>
                <li>Jesus takes up His cross</li>
                <li>Jesus falls the first time</li>
                <li>Jesus meets His mother</li>
                <li>Simon of Cyrene helps Jesus carry the cross</li>
                <li>Veronica wipes the face of Jesus</li>
                <li>Jesus falls the second time</li>
                <li>Jesus meets the women of Jerusalem</li>
                <li>Jesus falls the third time</li>
                <li>Jesus is stripped of His garments</li>
                <li>Jesus is nailed to the cross</li>
                <li>Jesus dies on the cross</li>
                <li>Jesus is taken down from the cross</li>
                <li>Jesus is laid in the tomb</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                A 15th station — the Resurrection — is sometimes added to emphasize that the Stations do not end in death but in new life.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-2">Prayer at Each Station</p>
                <p className="text-text italic text-sm leading-relaxed">
                  V. We adore You, O Christ, and we bless You.<br />
                  R. Because by Your holy cross You have redeemed the world.<br /><br />
                  [Brief meditation on the station]<br /><br />
                  My Lord Jesus Christ, You have made this journey to die for me with love unutterable, and I have so many times unworthily abandoned You; but now I love You with my whole heart, and because I love You I am sincerely sorry for ever having offended You. Pardon me, my God, and permit me to accompany You on this journey. You go to die for love of me; I wish, my beloved Redeemer, to die for love of You. My Jesus, I will live and die always united to You. Amen.
                </p>
              </div>

              <QuizCTA
                title="How is your Catholic faith this Lent?"
                description="Take our assessment and receive a personalized guide to making the most of the Lenten season."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Sorrowful Mysteries of the Rosary</h2>
              <p className="text-text leading-relaxed mb-6">
                The Sorrowful Mysteries of the Rosary are especially suited for Lent. They meditate on the Passion of Christ:
              </p>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6 text-sm">
                <li>The Agony in the Garden</li>
                <li>The Scourging at the Pillar</li>
                <li>The Crowning with Thorns</li>
                <li>The Carrying of the Cross</li>
                <li>The Crucifixion and Death of Jesus</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                The Sorrowful Mysteries are traditionally prayed on Tuesdays and Fridays. During Lent, many Catholics pray them daily.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Lenten Prayer of Repentance</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed text-sm">
                  Lord Jesus Christ, I come before You this Lent with a humble and contrite heart. I know that I have sinned — in thought, word, and deed, in what I have done and in what I have failed to do. I am sorry for every sin, great and small, known and unknown.<br /><br />
                  During these 40 days, I ask You to do in me what I cannot do for myself: break what needs to be broken, heal what needs to be healed, and transform what needs to be transformed. Strip away my pride, my selfishness, my attachments to sin. Give me a new heart — a heart that loves You above all things and loves my neighbor as myself.<br /><br />
                  I unite my small sacrifices to Your great sacrifice on the cross. May this Lent not be a season of mere external observance but of genuine interior conversion. Lead me through the desert of Lent to the joy of Easter. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Penitential Psalms</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church has traditionally designated seven psalms as "penitential psalms" — especially suited for expressing sorrow for sin and seeking God's mercy. They are Psalms 6, 32, 38, 51, 102, 130, and 143. Praying one penitential psalm each week of Lent is a beautiful practice.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The most famous is Psalm 51 (the Miserere, above). Another beloved penitential psalm is Psalm 130 — the De Profundis:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-2">Psalm 130 — De Profundis</p>
                <p className="text-text italic text-sm leading-relaxed">
                  Out of the depths I cry to you, O Lord! Lord, hear my voice! Let your ears be attentive to the voice of my pleas for mercy! If you, O Lord, should mark iniquities, O Lord, who could stand? But with you there is forgiveness, that you may be feared. I wait for the Lord, my soul waits, and in his word I hope; my soul waits for the Lord more than watchmen for the morning... For with the Lord there is steadfast love, and with him is plentiful redemption. And he will redeem Israel from all his iniquities.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Daily Lenten Prayer Schedule</h2>
              <p className="text-text leading-relaxed mb-6">
                Here is a simple daily prayer schedule for Lent:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Morning:</strong> Morning Offering + daily Mass readings + brief meditation</li>
                <li><strong>Noon:</strong> Angelus + brief prayer of intention</li>
                <li><strong>3pm (Hour of Mercy):</strong> Divine Mercy Chaplet — especially powerful during Lent</li>
                <li><strong>Evening:</strong> Rosary (Sorrowful Mysteries on Tuesdays and Fridays)</li>
                <li><strong>Friday:</strong> Stations of the Cross</li>
                <li><strong>Night:</strong> Examination of conscience + Act of Contrition</li>
                <li><strong>Weekly:</strong> Confession (especially during Lent)</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer for a Holy Lent</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed text-sm">
                  Lord, grant me a holy Lent. Help me to fast with sincerity, to pray with attention, and to give with generosity. May these 40 days not be a burden but a gift — a time of grace, conversion, and deeper union with You. When I fail, help me to begin again without discouragement. When I succeed, keep me humble. Lead me through the cross to the Resurrection. Amen.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Lent is a favorable time for letting Christ serve us so that we in turn may become more like him."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope Francis</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "When is Lent 2026?", answer: "Lent 2026 begins on Ash Wednesday, February 18, 2026, and ends on Holy Thursday, April 2, 2026. Easter Sunday 2026 is April 5, 2026." },
              { question: "What are the best prayers for Lent?", answer: "The best Lenten prayers include: Psalm 51 (the Miserere) — the great prayer of repentance; the Stations of the Cross — a meditation on Christ's Passion; the Sorrowful Mysteries of the Rosary; the Divine Mercy Chaplet (especially at 3pm); and the De Profundis (Psalm 130) — traditionally prayed for the dead." },
              { question: "What are the Stations of the Cross?", answer: "The Stations of the Cross (Via Crucis) is a devotion that meditates on 14 stages of Christ's Passion, from His condemnation to His burial. It is traditionally prayed on Fridays during Lent, often in a church where images of the stations are displayed. It takes about 20-30 minutes." },
              { question: "What are the Sorrowful Mysteries of the Rosary?", answer: "The Sorrowful Mysteries are: (1) The Agony in the Garden, (2) The Scourging at the Pillar, (3) The Crowning with Thorns, (4) The Carrying of the Cross, (5) The Crucifixion and Death of Jesus. They are traditionally prayed on Tuesdays and Fridays, and are especially suited for Lent." },
              { question: "How can I make Lent more meaningful?", answer: "Choose specific, concrete practices: one thing to give up (fasting), one thing to take on (prayer), and one thing to give away (almsgiving). Attend Mass more frequently. Go to Confession. Pray the Stations of the Cross on Fridays. Read the daily Mass readings. Make a Holy Hour. The key is intentionality — Lent is most meaningful when it is lived deliberately." },
            ]} />

            <RelatedArticles currentSlug="lent-prayers" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Is Your Catholic Faith This Lent?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to making the most of the Lenten season.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
