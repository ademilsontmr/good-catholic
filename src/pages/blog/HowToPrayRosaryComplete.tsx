import { Helmet } from "react-helmet-async";
import { DailyPrayersHubLink } from "@/components/blog/DailyPrayerExtras";
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

export default function HowToPrayRosaryComplete() {
  return (
    <>
      <Helmet>
        <title>Rosary Mysteries by Day of the Week, With Meditations | Guide Catholic</title>
        <meta name="description" content="Which Rosary mysteries to pray each day: Joyful, Sorrowful, Glorious and Luminous, the seasonal Sunday custom, and a meditation with Scripture for all 20." />
        <meta name="keywords" content="rosary mysteries by day, which mysteries today, joyful mysteries monday saturday, luminous mysteries thursday, sorrowful mysteries tuesday friday, glorious mysteries wednesday sunday, rosary meditations scripture" />
        <link rel="canonical" href="https://guidecatholic.com/blog/how-to-pray-the-rosary-complete-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Rosary Mysteries by Day of the Week, With Meditations"
        description="Which Rosary mysteries to pray each day: Joyful, Sorrowful, Glorious and Luminous, the seasonal Sunday custom, and a meditation with Scripture for all 20."
        url="https://guidecatholic.com/blog/how-to-pray-the-rosary-complete-guide/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Rosary Mysteries by Day", url: "https://guidecatholic.com/blog/how-to-pray-the-rosary-complete-guide/" },
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
              <span className="text-text">Rosary Mysteries by Day</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer & Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Rosary Mysteries by Day of the Week, With Meditations
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Which mysteries do you pray today? Here is the weekly schedule the Church suggests, the reasons behind it, the older seasonal custom for Sundays, and then all twenty mysteries arranged by day, each with a Scripture passage and a short meditation you can read before the decade.
              </p>
            </header>
            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Today&apos;s mysteries: Monday and Saturday, Joyful. Tuesday and Friday, Sorrowful. Wednesday and Sunday, Glorious. Thursday, Luminous. Many Catholics also pray the Joyful on Sundays of Advent and Christmas and the Sorrowful on Sundays of Lent.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Weekly Schedule</h2>
              <div className="bg-background-muted/50 border border-border rounded-xl p-6 mb-8 text-sm text-text">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><strong>Monday:</strong> Joyful Mysteries</div>
                  <div><strong>Tuesday:</strong> Sorrowful Mysteries</div>
                  <div><strong>Wednesday:</strong> Glorious Mysteries</div>
                  <div><strong>Thursday:</strong> Luminous Mysteries</div>
                  <div><strong>Friday:</strong> Sorrowful Mysteries</div>
                  <div><strong>Saturday:</strong> Joyful Mysteries</div>
                  <div><strong>Sunday:</strong> Glorious Mysteries</div>
                </div>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-rosary-complete-guide">
                This arrangement was proposed by Pope St. John Paul II in his 2002 apostolic letter Rosarium Virginis Mariae, when he introduced the Luminous Mysteries. He presented it as a suggestion that helps the whole Gospel pass before our eyes in the course of a week, and he was explicit that it does not limit legitimate freedom in personal or group prayer. You will never sin by praying the "wrong" mysteries.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Each Day Has Its Mysteries</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Friday, Sorrowful.</strong> Friday has been a day of penance in memory of the Crucifixion since the early Church, so the Passion fits naturally.</li>
                <li><strong>Sunday, Glorious.</strong> Sunday is the Lord's Day, the day of the Resurrection, so the mysteries of Christ's victory belong here.</li>
                <li><strong>Saturday, Joyful.</strong> Saturday is traditionally a day honoring Mary, and the Joyful Mysteries center on her role in the Incarnation.</li>
                <li><strong>Thursday, Luminous.</strong> The fifth Luminous Mystery, the institution of the Eucharist, took place at the Last Supper, which the Church remembers on Holy Thursday.</li>
                <li><strong>Monday, Tuesday, Wednesday.</strong> These complete the cycle so that each set returns at least once a week, and the Sorrowful and Glorious twice.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Schedule Before 2002, and the Seasonal Sunday Custom</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-rosary-complete-guide">
                Before the Luminous Mysteries existed, the common pattern was the Joyful Mysteries on Monday and Thursday, the Sorrowful on Tuesday and Friday, and the Glorious on Wednesday, Saturday and Sunday. When Thursday became the day for the new mysteries, the Joyful moved to Saturday. If you learned the Rosary from an older prayer book, that is why its schedule may look different.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-rosary-complete-guide">
                Many Catholics also follow the liturgical year on Sundays: the Joyful Mysteries on the Sundays of Advent and the Christmas season, the Sorrowful Mysteries on the Sundays of Lent, and the Glorious Mysteries on all other Sundays, including the Easter season. This custom lets your Sunday Rosary echo the readings you hear at Mass. It is a pious practice, not a requirement, and either approach is fine.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-rosary-complete-guide">
                On a great feast that falls on a weekday, many people simply pray the set that matches the feast: the Joyful on Christmas, the Glorious on the Assumption, the Sorrowful on Good Friday. The same freedom applies when you are praying for a particular need, such as the Sorrowful Mysteries when you are suffering or the Glorious when you are grieving a death.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Use the Meditations Below</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-rosary-complete-guide">
                St. John Paul II recommended that each mystery be announced, followed by a short reading from Scripture and a moment of silence before the Our Father. The entries below are written for exactly that. Announce the mystery, read the Scripture passage (or just the line quoted), read the meditation slowly, pause, and then begin the decade. If you only have time for one decade, choose one mystery from today's set and spend the whole time there.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in prayer and devotion."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Monday and Saturday: The Joyful Mysteries</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>1. The Annunciation (Luke 1:26–38).</strong> Gabriel tells a young woman in Nazareth that she will bear the Son of the Most High. Mary asks an honest question, then answers, "Behold, I am the handmaid of the Lord; let it be to me according to your word." Bring one area where God is asking for your yes. Fruit: humility.</li>
                <li><strong>2. The Visitation (Luke 1:39–56).</strong> Mary, newly pregnant, sets out in haste to help her older cousin. Elizabeth's child leaps in her womb, and Mary breaks into the Magnificat. Grace makes us go out toward others. Think of one person who needs your help this week. Fruit: love of neighbor.</li>
                <li><strong>3. The Nativity (Luke 2:1–20).</strong> The Word made flesh is laid in a manger because there was no place in the inn. The first visitors are shepherds working the night shift. God comes small and poor, and he is found by the humble. Fruit: poverty of spirit.</li>
                <li><strong>4. The Presentation (Luke 2:22–38).</strong> Mary and Joseph keep the Law and bring Jesus to the Temple. Old Simeon recognizes the Savior, and warns Mary that a sword will pierce her own soul. Joy and sorrow are already woven together. Fruit: obedience.</li>
                <li><strong>5. The Finding in the Temple (Luke 2:41–52).</strong> After three anxious days, Mary and Joseph find the twelve-year-old Jesus among the teachers. "Did you not know that I must be in my Father's house?" Mary does not fully understand, but she keeps these things in her heart. Fruit: perseverance in seeking Jesus.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Tuesday and Friday: The Sorrowful Mysteries</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>1. The Agony in the Garden (Luke 22:39–46; Matthew 26:36–46).</strong> In Gethsemane Jesus is in such anguish that his sweat falls like drops of blood. He asks that the cup pass, then surrenders: not my will, but yours. His friends sleep. Bring your own fear to him and pray his words with him. Fruit: sorrow for sin and acceptance of God's will.</li>
                <li><strong>2. The Scourging at the Pillar (John 19:1; Isaiah 53:5).</strong> Pilate has Jesus flogged, though he finds no guilt in him. Isaiah had foretold a servant by whose stripes we are healed. Christ accepts in his body the cost of our sins, including sins of the flesh. Fruit: purity and self-control.</li>
                <li><strong>3. The Crowning with Thorns (Matthew 27:27–31).</strong> Soldiers dress Jesus in purple, press thorns onto his head, kneel in mockery and hail him as King of the Jews. He is truly King, and he reigns by humility. Ask for the courage to stay faithful when faith is ridiculed. Fruit: moral courage.</li>
                <li><strong>4. The Carrying of the Cross (John 19:17; Luke 23:26–32).</strong> Jesus goes out carrying his own cross. Simon of Cyrene is pressed into helping, and the women of Jerusalem weep for him. Name the cross you are carrying, and the people helping you carry it. Fruit: patience.</li>
                <li><strong>5. The Crucifixion (Luke 23:33–46; John 19:25–30).</strong> Jesus prays, "Father, forgive them; for they know not what they do," entrusts his mother to the beloved disciple, and says, "It is finished." Stand with Mary at the foot of the Cross and let yourself be loved this much. Fruit: perseverance and trust in mercy.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Wednesday and Sunday: The Glorious Mysteries</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>1. The Resurrection (Matthew 28:1–10; Luke 24:1–12).</strong> The women come with spices and find the stone rolled away. "He is not here, but has risen." Death no longer has the last word over anyone united to Christ. Think of someone you have lost and hand them to the Risen Lord. Fruit: faith.</li>
                <li><strong>2. The Ascension (Acts 1:6–11; Luke 24:50–53).</strong> Forty days after Easter, Jesus blesses his disciples and is taken up into heaven. Angels ask why they stand looking up. Christ goes ahead of us so that our hope is anchored in heaven while our hands work on earth. Fruit: hope.</li>
                <li><strong>3. The Descent of the Holy Spirit (Acts 1:14; 2:1–41).</strong> The apostles are gathered in prayer with Mary when the Spirit comes with wind and tongues of fire. Frightened men become bold preachers, and about three thousand are baptized that day. Ask the Spirit for the gift you most need. Fruit: love of God and zeal.</li>
                <li><strong>4. The Assumption of Mary (Revelation 12:1; Munificentissimus Deus, 1950).</strong> At the end of her earthly life, Mary was taken body and soul into heavenly glory, as Pope Pius XII defined in 1950. What God did for her he promises to all the faithful: the resurrection of the body. Fruit: the grace of a holy death.</li>
                <li><strong>5. The Coronation of Mary (Revelation 12:1; Psalm 45:9).</strong> Scripture's image of a woman clothed with the sun, crowned with twelve stars, helps the Church contemplate Mary as Queen of heaven and earth. Her queenship is a mother's care for her Son's brothers and sisters. Fruit: trust in Mary's intercession.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Thursday: The Luminous Mysteries</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="how-to-pray-the-rosary-complete-guide">
                The Mysteries of Light were added in 2002 to fill the gap between the Finding in the Temple and the Agony in the Garden: the years of Christ's public ministry, when he revealed the Kingdom in word and sign.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>1. The Baptism of Jesus (Matthew 3:13–17).</strong> The sinless one goes down into the Jordan with sinners. The heavens open, the Spirit descends like a dove, and the Father says, "This is my beloved Son, with whom I am well pleased." Remember that at your own Baptism you, too, became a beloved child. Fruit: openness to the Holy Spirit.</li>
                <li><strong>2. The Wedding at Cana (John 2:1–11).</strong> The wine runs out. Mary notices, tells her Son, and tells the servants, "Do whatever he tells you." Water becomes the best wine. Hand Mary the need in your life that has quietly run dry. Fruit: to Jesus through Mary.</li>
                <li><strong>3. The Proclamation of the Kingdom (Mark 1:14–15).</strong> "The time is fulfilled, and the kingdom of God is at hand; repent, and believe in the gospel." Jesus heals, forgives and welcomes sinners to table. Consider what in you still needs his forgiveness; Confession is this mystery made personal. Fruit: repentance and trust in God.</li>
                <li><strong>4. The Transfiguration (Matthew 17:1–8; Luke 9:28–36).</strong> On the mountain Jesus' face shines like the sun, Moses and Elijah speak with him, and the Father's voice says, "This is my beloved Son... listen to him." The glory strengthens the disciples for the Passion ahead. Fruit: desire for holiness.</li>
                <li><strong>5. The Institution of the Eucharist (Luke 22:14–20; John 13:1).</strong> At the Last Supper, having loved his own to the end, Jesus takes bread and says, "This is my body which is given for you. Do this in remembrance of me." Every Mass makes this gift present. Fruit: love for the Eucharist and adoration.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Going Deeper With Each Day&apos;s Set</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Read the whole passage once a week.</strong> On the first day you pray a set, read all five Scripture passages in full; on the following days, a single verse is enough.</li>
                <li><strong>Add a phrase after "Jesus."</strong> Some pray a short clause in each Hail Mary, such as "Jesus, who was found in the Temple." It keeps the mystery in front of you for all ten beads.</li>
                <li><strong>Link the mystery to the day.</strong> On Friday, offer the Sorrowful Mysteries for someone who is suffering; on Sunday, pray the Glorious for those who have died.</li>
                <li><strong>Follow the liturgy.</strong> In Advent, Lent and Easter, let the season's Sunday mysteries shape your week.</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                New to the beads themselves? Our <Link to="/blog/how-to-pray-the-rosary-step-by-step/" className="text-accent hover:underline">bead-by-bead beginner&apos;s walk</Link> shows exactly what to pray on each bead, and the <Link to="/blog/rosary-mysteries-meditation/" className="text-accent hover:underline">Rosary mysteries meditation guide</Link> offers further reflections.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "But Mary kept all these things, pondering them in her heart."
                </p>
                <p className="text-text-muted text-center mt-2">— Luke 2:19</p>
              </div>
            </div>

            <DailyPrayersHubLink />
            <TopicSeriesNav currentSlug="how-to-pray-the-rosary-complete-guide" />
            <BlogFAQ faqs={[
              { question: "Which Rosary mysteries do I pray today?", answer: "Monday and Saturday: Joyful. Tuesday and Friday: Sorrowful. Wednesday and Sunday: Glorious. Thursday: Luminous. Many Catholics pray the Joyful on Sundays of Advent and Christmas and the Sorrowful on Sundays of Lent." },
              { question: "Why are the Luminous Mysteries prayed on Thursday?", answer: "When St. John Paul II introduced them in 2002, he placed them on Thursday. Thursday is fitting because the last Luminous Mystery, the institution of the Eucharist, took place at the Last Supper, remembered on Holy Thursday." },
              { question: "Can I pray a different set of mysteries than the one assigned to the day?", answer: "Yes. The weekly schedule is a recommendation, and St. John Paul II stressed that it does not restrict freedom in prayer. Praying the mysteries that fit a feast, a season or your own situation is entirely acceptable." },
              { question: "Which mysteries do I pray on the Sundays of Lent and Advent?", answer: "By a widespread custom, the Sorrowful Mysteries on the Sundays of Lent and the Joyful Mysteries on the Sundays of Advent and the Christmas season. On other Sundays the Glorious Mysteries are prayed." },
              { question: "What was the schedule before the Luminous Mysteries?", answer: "Before 2002 the usual pattern was Joyful on Monday and Thursday, Sorrowful on Tuesday and Friday, and Glorious on Wednesday, Saturday and Sunday." },
            ]} />

            <RelatedArticles currentSlug="how-to-pray-the-rosary-complete-guide" />

            <ArticleBottomCTA title="How Deep Is Your Catholic Faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
