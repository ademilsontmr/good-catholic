import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function TheMemorarePrayer() {
  return (
    <>
      <Helmet>
        <title>The Memorare: History, Full Text and How to Pray This Powerful Prayer | Guide Catholic</title>
        <meta name="description" content="Learn the full text of the Memorare prayer, its history, meaning, and how to pray it. Discover why this ancient prayer to the Virgin Mary has comforted Catholics for centuries." />
        <meta name="keywords" content="memorare prayer, the memorare, memorare catholic prayer, remember o most gracious virgin mary" />
        <link rel="canonical" href="https://guidecatholic.com/blog/the-memorare-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">The Memorare Prayer</span>
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
                  8 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Memorare: History, Full Text and How to Pray This Powerful Prayer
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Remember, O most gracious Virgin Mary..." These opening words have brought comfort to millions of Catholics across the centuries. The Memorare is one of the most beloved Marian prayers in the Catholic tradition.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                There is a prayer that has been whispered in hospital rooms, prayed in foxholes, recited in moments of desperation and moments of quiet devotion. It begins with a bold claim — "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided" — and ends with a humble plea for mercy. This is the Memorare, and for centuries it has been the prayer Catholics turn to when they need a mother's help.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Memorare is short enough to memorize in minutes, yet deep enough to sustain a lifetime of prayer. It is a prayer of absolute confidence in Mary's intercession — not because Mary is God, but because she is the Mother of God, and a mother's prayer for her children is uniquely powerful. As St. Bernard of Clairvaux, to whom the prayer is often attributed, wrote: "She is the Mother of Mercy, and her mercy surpasses all our sins."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Full Text of the Memorare
              </h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text leading-relaxed italic">
                  Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Latin Original
              </h2>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <p className="text-text leading-relaxed italic">
                  Memorare, O piissima Virgo Maria, non esse auditum a saeculo, quemquam ad tua currentem praesidia, tua implorantem auxilia, tua petentem suffragia, esse derelictum. Ego tali animatus confidentia, ad te, Virgo Virginum, Mater, curro, ad te venio, coram te gemens peccator assisto. Noli, Mater Verbi, verba mea despicere; sed audi propitia et exaudi. Amen.
                </p>
              </div>

              <QuizCTA
                title="How strong is your Marian devotion?"
                description="Mary is our mother and our greatest intercessor. Take our quiz and discover how to deepen your relationship with Our Lady and grow in your Catholic faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The History of the Memorare
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Memorare has a fascinating and somewhat complex history. The prayer is traditionally attributed to St. Bernard of Clairvaux (1090–1153), the great Cistercian monk and Doctor of the Church who was renowned for his tender devotion to the Virgin Mary. However, modern scholars believe the prayer in its current form dates from the 15th century, possibly derived from a longer prayer by St. Bernard.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The prayer gained widespread popularity in the 17th century through the efforts of Father Claude Bernard (1588–1641), a French priest known as "the poor priest" for his ministry to prisoners and the condemned. Father Bernard distributed thousands of copies of the Memorare throughout France and credited the prayer with miraculous conversions and healings. He reportedly prayed it 50 times a day.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The prayer spread rapidly through the Catholic world and became especially popular in the United States through the influence of Irish and Italian immigrants who brought their Marian devotions with them. Today, the Memorare is one of the most recognized Catholic prayers in America, taught to children in Catholic schools and prayed by Catholics of all ages.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Word-by-Word Reflection on the Memorare
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "Remember, O most gracious Virgin Mary..."
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The prayer opens with an appeal to Mary's memory — as if she could forget her children! This is a rhetorical device of love, like a child saying to a mother, "Remember how much you love me." It acknowledges Mary's role as our spiritual mother and her constant awareness of our needs.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "...that never was it known that anyone who fled to thy protection was left unaided"
              </h3>
              <p className="text-text leading-relaxed mb-6">
                This is the bold claim at the heart of the Memorare — a claim based on centuries of Catholic experience. The prayer does not say Mary always gives us what we ask for, but that she never leaves us unaided. Her help may come in unexpected ways, but it always comes. This is the confidence that has sustained Catholics through wars, famines, illness, and every kind of suffering.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "Inspired by this confidence, I fly unto thee..."
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The word "fly" is significant — it suggests urgency, desperation, the flight of a child to a mother's arms. We don't walk calmly to Mary; we run to her. This is the posture of the Memorare: not formal petition, but the urgent cry of a child who needs help now.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "O Mother of the Word Incarnate, despise not my petitions"
              </h3>
              <p className="text-text leading-relaxed mb-6">
                "Mother of the Word Incarnate" is one of the most theologically rich titles for Mary. She is not just the mother of Jesus the man, but the mother of the eternal Word of God who became flesh. This title grounds Mary's intercession in the deepest mystery of the faith: the Incarnation. Because she is the Mother of God, her intercession carries unique weight before the throne of her Son.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Famous Stories of the Memorare
              </h2>
              <p className="text-text leading-relaxed mb-6">
                One of the most famous stories associated with the Memorare involves Father Patrick Peyton, CSC — the "Rosary Priest" — who was dying of tuberculosis as a young seminarian in 1939. His sister suggested he pray the Memorare. He did, with complete trust, and was miraculously healed. He went on to found the Family Rosary Crusade and coined the phrase "The family that prays together stays together."
              </p>
              <p className="text-text leading-relaxed mb-6">
                During World War II, countless soldiers carried the Memorare in their pockets. Many reported praying it in the moments before battle or when wounded. The prayer became a touchstone of Catholic military chaplaincy, connecting soldiers to their faith and to the Mother of God in the most desperate moments of their lives.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                When to Pray the Memorare
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>In moments of urgent need or crisis</li>
                <li>When interceding for others who are suffering</li>
                <li>As part of your daily Marian devotion</li>
                <li>Before important decisions or challenges</li>
                <li>At the bedside of the sick or dying</li>
                <li>As a quick prayer throughout the day</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Never was it known that anyone who fled to thy protection was left unaided."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — The Memorare
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Mary is the neck of the Mystical Body, through which all graces pass from the Head to the members."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — St. Bernardine of Siena
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="the-memorare-prayer" />

            <BlogFAQ faqs={[
              {
                question: "Who wrote the Memorare?",
                answer: "The Memorare is traditionally attributed to St. Bernard of Clairvaux (1090–1153), though modern scholars believe the prayer in its current form dates from the 15th century. It was popularized in the 17th century by Father Claude Bernard, a French priest who distributed thousands of copies throughout France."
              },
              {
                question: "What does 'Memorare' mean?",
                answer: "Memorare is a Latin word meaning 'Remember.' It is the first word of the prayer in Latin: 'Memorare, O piissima Virgo Maria...' (Remember, O most gracious Virgin Mary...). The prayer is named after its opening word, following the ancient tradition of naming prayers by their first word."
              },
              {
                question: "Is the Memorare a Catholic prayer?",
                answer: "Yes, the Memorare is a traditional Catholic prayer addressed to the Virgin Mary, asking for her intercession. It is one of the most widely known Marian prayers in the Catholic Church and has been prayed by saints, popes, and ordinary Catholics for centuries."
              },
              {
                question: "How long does it take to pray the Memorare?",
                answer: "The Memorare is a very short prayer — it takes less than a minute to pray. This brevity is one of its great strengths: it can be prayed quickly in moments of urgent need, yet its words are rich enough to sustain deep meditation."
              },
              {
                question: "Can I pray the Memorare for others?",
                answer: "Absolutely. The Memorare can be prayed for yourself or as an intercession for others. Many Catholics pray it for the sick, the dying, those in spiritual danger, or anyone in urgent need. You can simply add the person's name and intention before or after the prayer."
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
