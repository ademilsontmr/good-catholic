import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function MorningPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Morning Prayer Catholic: Full Texts, Lauds & How to Start Your Day | Guide Catholic</title>
        <meta name="description" content="Complete guide to Catholic morning prayer — full texts of Lauds, the Morning Offering, Psalm 63, and simple morning prayers for every Catholic. Start your day with God." />
        <meta name="keywords" content="morning prayer catholic, catholic morning prayer text, lauds prayer, morning offering catholic, psalm 63 morning prayer, start day with god" />
        <link rel="canonical" href="https://guidecatholic.com/blog/morning-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Morning Prayer Catholic: Full Texts, Lauds & How to Start Your Day"
        description="Complete guide to Catholic morning prayer — full texts of Lauds, the Morning Offering, Psalm 63, and simple morning prayers for every Catholic. Start your day with God."
        url="https://guidecatholic.com/blog/morning-prayer-catholic/"
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
              <span className="text-text">Morning Prayer Catholic</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Morning Prayer Catholic: Full Texts, Lauds & How to Start Your Day with God
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                "O God, you are my God, I seek you, my soul thirsts for you; my flesh faints for you, as in a dry and weary land where there is no water" (Psalm 63:1). Morning prayer is the soul's first act — the choice to seek God before anything else.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Church has always begun the day with prayer. From the earliest centuries, Christians gathered at dawn to praise God and consecrate the new day to Him. This tradition — formalized in the Liturgy of the Hours as Morning Prayer (Lauds) — continues today in monasteries, convents, and the homes of faithful Catholics around the world.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Morning prayer is not just a pious habit. It is a theological statement: the day belongs to God. Before the demands of work, family, and the world claim your attention, you give the first fruits of your day to the One who gave you the day itself.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Morning Prayer Is Essential</h2>
              <p className="text-text leading-relaxed mb-6">
                The saints were unanimous about the importance of morning prayer. St. Francis de Sales said: "Half an hour's meditation each day is essential, except when you are busy. Then a full hour is needed." St. Alphonsus Liguori wrote: "He who prays is certainly saved; he who does not pray is certainly damned."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Morning prayer matters because:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>It sets the tone for the day.</strong> The first thing you give your attention to shapes everything that follows. Give it to God.</li>
                <li><strong>It opens you to grace.</strong> Prayer is the channel through which God's grace flows into your life. Morning prayer opens that channel at the start of the day.</li>
                <li><strong>It protects against temptation.</strong> A soul that begins the day in God's presence is better equipped to resist the temptations that will come.</li>
                <li><strong>It connects you to the universal Church.</strong> When you pray Morning Prayer (Lauds), you join millions of Catholics, priests, and religious around the world who are praying the same prayer at the same time.</li>
                <li><strong>It builds the habit of prayer.</strong> Morning prayer is the foundation of a life of prayer. If you pray in the morning, you are more likely to pray throughout the day.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Lauds: The Church's Official Morning Prayer</h2>
              <p className="text-text leading-relaxed mb-6">
                Lauds (from the Latin <em>laudare</em>, "to praise") is the official morning prayer of the Catholic Church, part of the Liturgy of the Hours. It is prayed at dawn or in the early morning and is the most important of the daytime hours.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The structure of Lauds:
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Opening verse:</strong> "O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father..."</li>
                <li><strong>Hymn:</strong> A hymn appropriate to the season or day</li>
                <li><strong>Psalmody:</strong> Two or three Psalms with antiphons (the Psalms change daily)</li>
                <li><strong>Scripture reading:</strong> A short passage from the Bible</li>
                <li><strong>Responsory:</strong> A brief response to the Scripture reading</li>
                <li><strong>The Benedictus:</strong> The Canticle of Zechariah (Luke 1:68-79)</li>
                <li><strong>Intercessions:</strong> Prayers for the day and for specific needs</li>
                <li><strong>The Our Father</strong></li>
                <li><strong>Concluding prayer and blessing</strong></li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                Lauds takes about 15-20 minutes. It is available in apps like iBreviary, Laudate, and Universalis, and in the four-volume Liturgy of the Hours book set.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Benedictus: The Morning Canticle</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <h3 className="font-display text-base font-bold text-text mb-2">The Canticle of Zechariah (Luke 1:68-79)</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Blessed be the Lord, the God of Israel; he has come to his people and set them free. He has raised up for us a mighty savior, born of the house of his servant David. Through his holy prophets he promised of old that he would save us from our enemies, from the hands of all who hate us. He promised to show mercy to our fathers and to remember his holy covenant. This was the oath he swore to our father Abraham: to set us free from the hands of our enemies, free to worship him without fear, holy and righteous in his sight all the days of our life. You, my child, shall be called the prophet of the Most High; for you will go before the Lord to prepare his way, to give his people knowledge of salvation by the forgiveness of their sins. In the tender compassion of our God the dawn from on high shall break upon us, to shine on those who dwell in darkness and the shadow of death, and to guide our feet into the way of peace.
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                The Benedictus is the canticle of Zechariah, the father of John the Baptist, sung at the birth of his son. It is prayed every morning in Lauds as a hymn of praise for the coming of the Messiah and the dawn of salvation. The image of "the dawn from on high" breaking upon us makes it perfectly suited for morning prayer.
              </p>

              <QuizCTA
                title="How is your morning prayer life?"
                description="Take our Catholic faith assessment and receive a personalized guide to building a stronger prayer routine."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Psalm 63: The Morning Psalm</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text italic leading-relaxed text-sm">
                  O God, you are my God, I seek you, my soul thirsts for you; my flesh faints for you, as in a dry and weary land where there is no water. So I have looked upon you in the sanctuary, beholding your power and glory. Because your steadfast love is better than life, my lips will praise you. So I will bless you as long as I live; I will lift up my hands and call on your name. My soul is satisfied as with a rich feast, and my mouth praises you with joyful lips when I think of you on my bed, and meditate on you in the watches of the night; for you have been my help, and in the shadow of your wings I sing for joy. My soul clings to you; your right hand upholds me.
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                Psalm 63 is the classic morning psalm — a song of longing for God that is perfectly suited for the beginning of the day. It expresses the soul's thirst for God, its satisfaction in His presence, and its confidence in His protection. It is one of the most beautiful prayers in the entire Bible.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Simple Catholic Morning Prayers</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <h3 className="font-display text-base font-bold text-text mb-2">The Morning Offering</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians. I offer them for the intentions of our bishops and of all Apostles of Prayer, and in particular for those recommended by our Holy Father this month. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <h3 className="font-display text-base font-bold text-text mb-2">A Simple Morning Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Lord God, almighty and everlasting Father, You have brought me in safety to this new day. Preserve me with Your mighty power, that I may not fall into sin, nor be overcome by adversity; and in all I do, direct me to the fulfilling of Your purpose; through Jesus Christ my Lord. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <h3 className="font-display text-base font-bold text-text mb-2">Morning Prayer of St. Thomas Aquinas</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Grant me, O Lord my God, a mind to know You, a heart to seek You, wisdom to find You, conduct pleasing to You, faithful perseverance in waiting for You, and a hope of finally embracing You. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <h3 className="font-display text-base font-bold text-text mb-2">Morning Prayer of St. Francis de Sales</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Lord, I give You this day. I offer You, now, all of the good that I shall do and I promise to accept, for love of You, all of the difficulty that I shall meet. Help me to conduct myself during this day in a manner pleasing to You. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sample Morning Prayer Routines</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">5-Minute Morning Prayer</h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Sign of the Cross (30 sec)</li>
                <li>Morning Offering (2 min)</li>
                <li>Our Father + Hail Mary + Glory Be (2 min)</li>
                <li>Brief intention for the day (30 sec)</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">15-Minute Morning Prayer</h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Sign of the Cross + Morning Offering (3 min)</li>
                <li>Psalm 63 or another morning psalm (5 min)</li>
                <li>Brief meditation on the day's Gospel reading (5 min)</li>
                <li>Intentions and Our Father (2 min)</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">30-Minute Morning Prayer (Lauds)</h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Full Lauds from the Liturgy of the Hours (15-20 min)</li>
                <li>Morning Offering (2 min)</li>
                <li>Personal prayer and intentions (8-10 min)</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "O Lord, in the morning you hear my voice; in the morning I prepare a sacrifice for you and watch."
                </p>
                <p className="text-text-muted text-center mt-2">— Psalm 5:3</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What is Lauds?", answer: "Lauds is the official morning prayer of the Catholic Church, part of the Liturgy of the Hours. It is prayed at dawn or in the early morning and includes Psalms, a Scripture reading, the Benedictus (Canticle of Zechariah), intercessions, and the Our Father. It takes about 15-20 minutes." },
              { question: "What is the best Catholic morning prayer?", answer: "The Morning Offering is the most distinctively Catholic morning prayer — it consecrates the entire day to God. For a fuller morning prayer, Lauds from the Liturgy of the Hours is the Church's official morning prayer. For a brief prayer, Psalm 63 or the Morning Prayer of St. Francis de Sales are beautiful options." },
              { question: "What is the Benedictus?", answer: "The Benedictus is the Canticle of Zechariah from Luke 1:68-79, prayed every morning in Lauds. It is a hymn of praise for the coming of the Messiah and the dawn of salvation. The image of 'the dawn from on high' breaking upon us makes it perfectly suited for morning prayer." },
              { question: "Should I pray before or after breakfast?", answer: "Ideally, before breakfast — giving God the first moments of the day before you eat. However, the most important thing is consistency. If you find it easier to pray after breakfast, do that. The key is to pray before you check your phone or begin your work." },
              { question: "What app is best for Catholic morning prayer?", answer: "Laudate (free) includes the daily Mass readings, Liturgy of the Hours, and Rosary. iBreviary and Universalis are excellent for the full Liturgy of the Hours. Hallow offers guided Catholic morning meditations. All are available for iOS and Android." },
            ]} />

            <RelatedArticles currentSlug="morning-prayer-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Is Your Prayer Life?</h3>
              <p className="text-text-muted mb-6">Take our Catholic faith assessment and receive a personalized guide to building a stronger morning prayer routine.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
