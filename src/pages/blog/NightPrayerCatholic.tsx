import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Moon, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, HowToSchema } from "@/components/blog/ArticleSchema";

export default function NightPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Night Prayer Catholic: Complete Guide to Evening Prayer & Compline | Guide Catholic</title>
        <meta name="description" content="Learn how to pray Catholic night prayer. Full texts for evening prayer, Compline, examination of conscience, and bedtime prayers for adults and children." />
        <meta name="keywords" content="night prayer catholic, evening prayer catholic, compline prayer, bedtime prayer catholic, catholic night prayers, examination of conscience evening" />
        <link rel="canonical" href="https://guidecatholic.com/blog/night-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Night Prayer Catholic: Complete Guide to Evening Prayer & Compline"
        description="Learn how to pray Catholic night prayer. Full texts for evening prayer, Compline, examination of conscience, and bedtime prayers for adults and children."
        url="https://guidecatholic.com/blog/night-prayer-catholic/"
      />
      <HowToSchema
        name="How to Pray Catholic Night Prayer"
        description="A step-by-step guide to Catholic evening and night prayer."
        url="https://guidecatholic.com/blog/night-prayer-catholic/"
        totalTime="PT20M"
        steps={[
          { name: "Make the Sign of the Cross", text: "Begin by making the Sign of the Cross, consciously entering into God's presence at the end of the day." },
          { name: "Pray an act of thanksgiving", text: "Thank God for the blessings of the day — specific moments of grace, beauty, or help you received." },
          { name: "Make an examination of conscience", text: "Review the day in God's presence. Where did you fall short? Where did you respond to grace? Ask for forgiveness for any sins." },
          { name: "Pray for others", text: "Bring before God the people you encountered today and those you are praying for. Offer intercessory prayer." },
          { name: "Pray a night prayer or Compline", text: "Pray a traditional night prayer, the Salve Regina, or Night Prayer from the Liturgy of the Hours." },
          { name: "Entrust yourself to God's care", text: "End by placing yourself in God's hands for the night, trusting in His protection and love." },
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
              <span className="text-text">Night Prayer Catholic</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Night Prayer Catholic: Complete Guide to Evening Prayer & Compline
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                How you end your day shapes your soul as much as how you begin it. Catholic night prayer — from the simple bedtime prayer to the ancient Compline — is a way of placing the day in God's hands and resting in His peace.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Moon className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Church has always sanctified the night with prayer. From the earliest centuries, Christians gathered in the evening to pray — to give thanks for the day, to ask forgiveness for failures, to commend themselves to God's protection through the night. This tradition lives on in the Liturgy of the Hours, in family bedtime prayers, and in the personal evening prayer of millions of Catholics around the world.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Night prayer is not just a pious habit. It is a spiritual discipline that transforms the end of the day into an act of worship, prepares the soul for sleep (which the Church has always seen as an image of death), and builds the habit of ending every day in God's presence.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Night Prayer Matters</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>It closes the day with God.</strong> Just as morning prayer opens the day to God, night prayer closes it. The day begins and ends in His presence.</li>
                <li><strong>It brings peace.</strong> Anxiety and worry often intensify at night. Prayer replaces anxiety with trust: "I will both lie down and sleep in peace; for you alone, O Lord, make me lie down in safety" (Psalm 4:8).</li>
                <li><strong>It prepares for death.</strong> Sleep is an image of death. Night prayer — especially the Compline — is a preparation for the final sleep, a practice of entrusting oneself to God.</li>
                <li><strong>It heals the day's wounds.</strong> The examination of conscience in evening prayer allows us to acknowledge our failures, receive forgiveness, and go to sleep without the weight of unconfessed sin.</li>
                <li><strong>It builds the habit of prayer.</strong> A consistent night prayer routine, even brief, builds the habit of ending every day in God's presence — a habit that transforms the soul over time.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Evening Examination of Conscience</h2>
              <p className="text-text leading-relaxed mb-6">
                The most important element of Catholic night prayer is the examination of conscience — a brief review of the day in God's presence. St. Ignatius of Loyola developed a five-step method called the Examen that takes about 10-15 minutes:
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Give thanks.</strong> Begin by thanking God for the specific blessings of the day — moments of beauty, help, grace, or joy.</li>
                <li><strong>Ask for light.</strong> Ask the Holy Spirit to help you see the day clearly — to recognize both the good and the failures.</li>
                <li><strong>Review the day.</strong> Walk through the day from morning to evening. Where did you respond to God's grace? Where did you fall short? Where did you sin?</li>
                <li><strong>Ask for forgiveness.</strong> For any sins or failures you have identified, ask God's forgiveness with a brief Act of Contrition.</li>
                <li><strong>Look to tomorrow.</strong> Ask God for the grace you will need for tomorrow. Make a specific resolution if needed.</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                The Examen is not meant to be a guilt-inducing exercise. It is a loving conversation with God about the day — noticing where He was present, where you responded to Him, and where you need His mercy and help.
              </p>

              <QuizCTA
                title="How is your daily prayer life?"
                description="Take our Catholic faith assessment and receive a personalized guide to building a stronger prayer routine."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Compline: The Church's Official Night Prayer</h2>
              <p className="text-text leading-relaxed mb-6">
                Compline (from the Latin <em>completorium</em>, "completion") is the final prayer of the Liturgy of the Hours — the Church's official night prayer. It is prayed before going to sleep and is one of the most beautiful prayers in the Catholic tradition.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Compline includes:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>A brief examination of conscience and the Confiteor</li>
                <li>A hymn</li>
                <li>One or more Psalms (typically Psalms 4, 91, or 134)</li>
                <li>A short Scripture reading</li>
                <li>The Nunc Dimittis (the Canticle of Simeon from Luke 2:29-32)</li>
                <li>A concluding prayer</li>
                <li>The Salve Regina or another Marian antiphon</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Compline takes about 10-15 minutes. It is available in apps like iBreviary, Laudate, and Universalis, making it easy to pray even without a physical book.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Salve Regina</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text italic leading-relaxed text-sm">
                  Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us; and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.<br /><br />
                  V. Pray for us, O holy Mother of God.<br />
                  R. That we may be made worthy of the promises of Christ.
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                The Salve Regina is traditionally prayed at the end of Compline and at the end of the Rosary. It is one of the four Marian antiphons that the Church prays at different seasons of the year. The Salve Regina is prayed from the end of Ordinary Time until Advent.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Simple Catholic Night Prayers</h2>
              <p className="text-text leading-relaxed mb-6">
                If Compline feels too long for your current season of life, here are simpler night prayers:
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <h3 className="font-display text-base font-bold text-text mb-2">Traditional Night Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  I adore You, my God, and I love You with all my heart. I thank You for having created me, made me a Christian, and preserved me this day. Forgive me for the evil I have done this day; if I have done any good, accept it. Protect me during my rest and deliver me from all danger. May Your grace be always with me and with all my loved ones. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <h3 className="font-display text-base font-bold text-text mb-2">Night Prayer for Children</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Angel of God, my guardian dear, to whom God's love commits me here, ever this night be at my side, to light and guard, to rule and guide. Amen.<br /><br />
                  Now I lay me down to sleep, I pray the Lord my soul to keep. May angels watch me through the night, and wake me with the morning light. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <h3 className="font-display text-base font-bold text-text mb-2">Night Prayer of St. Augustine</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Watch, O Lord, with those who wake, or watch, or weep tonight, and give Your angels and saints charge over those who sleep. Tend Your sick ones, O Lord Christ. Rest Your weary ones. Bless Your dying ones. Soothe Your suffering ones. Pity Your afflicted ones. Shield Your joyous ones. And all for Your love's sake. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Night Prayer for Families</h2>
              <p className="text-text leading-relaxed mb-6">
                Praying together as a family before bed is one of the most powerful ways to build a domestic church. Here is a simple family night prayer routine:
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Gather together — in the living room, or at the children's bedside</li>
                <li>Make the Sign of the Cross together</li>
                <li>Each person shares one thing they are grateful for from the day</li>
                <li>Each person shares one intention — someone or something to pray for</li>
                <li>Pray the Our Father, Hail Mary, and Glory Be together</li>
                <li>Pray the Guardian Angel prayer for the children</li>
                <li>Close with the Sign of the Cross</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                This routine takes about 5-10 minutes and builds a powerful habit of family prayer. Children who grow up praying with their parents are far more likely to maintain their faith as adults.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Psalms for Night Prayer</h2>
              <p className="text-text leading-relaxed mb-6">
                The Psalms are the Church's prayer book, and several are especially suited for night prayer:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Psalm 4:</strong> "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety."</li>
                <li><strong>Psalm 23:</strong> "The Lord is my shepherd... Even though I walk through the darkest valley, I will fear no evil, for you are with me."</li>
                <li><strong>Psalm 91:</strong> "He who dwells in the shelter of the Most High will rest in the shadow of the Almighty... He will command his angels concerning you to guard you in all your ways."</li>
                <li><strong>Psalm 134:</strong> "Come, bless the Lord, all you servants of the Lord, who stand by night in the house of the Lord!"</li>
                <li><strong>Psalm 130:</strong> "Out of the depths I cry to you, Lord; Lord, hear my voice." (For nights of sorrow or difficulty)</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Before you fall asleep, review the day. Give thanks for what was good. Ask forgiveness for what was not. Entrust tomorrow to God. Then sleep in peace."
                </p>
                <p className="text-text-muted text-center mt-2">— St. Ignatius of Loyola (paraphrase)</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What is Compline?", answer: "Compline is the final prayer of the Liturgy of the Hours — the Church's official night prayer. It is prayed before going to sleep and includes Psalms, a Scripture reading, the Nunc Dimittis (Canticle of Simeon), and the Salve Regina. It takes about 10-15 minutes and is available in apps like iBreviary and Laudate." },
              { question: "What is the best Catholic prayer before bed?", answer: "The best night prayer is the one you will actually pray consistently. Options range from the simple Traditional Night Prayer (2 minutes) to the full Compline (15 minutes). The most important elements are: thanksgiving for the day, examination of conscience, asking forgiveness, and entrusting yourself to God's care." },
              { question: "What is the Guardian Angel prayer?", answer: "The Guardian Angel prayer is: 'Angel of God, my guardian dear, to whom God's love commits me here, ever this night be at my side, to light and guard, to rule and guide. Amen.' It is traditionally prayed by children at bedtime and is a beautiful way to invoke the protection of one's guardian angel." },
              { question: "Should I pray the Rosary at night?", answer: "Many Catholics pray the Rosary in the evening — it is a beautiful way to end the day with Mary. The Glorious Mysteries are traditionally prayed on Wednesdays and Sundays, which are often evening prayer days. However, the Rosary can be prayed at any time of day." },
              { question: "What is the Nunc Dimittis?", answer: "The Nunc Dimittis is the Canticle of Simeon from Luke 2:29-32: 'Lord, now you let your servant go in peace; your word has been fulfilled: my own eyes have seen the salvation which you have prepared in the sight of every people: a light to reveal you to the nations and the glory of your people Israel.' It is prayed at Compline as a prayer of peaceful surrender at the end of the day — and at the end of life." },
            ]} />

            <RelatedArticles currentSlug="night-prayer-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Is Your Prayer Life?</h3>
              <p className="text-text-muted mb-6">Take our Catholic faith assessment and receive a personalized guide to building a stronger prayer routine.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
