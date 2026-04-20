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

export default function GoodFridayPrayers() {
  return (
    <>
      <Helmet>
        <title>Good Friday Prayers 2026: Prayers for the Passion, Death & the Cross | Guide Catholic</title>
        <meta name="description" content="Powerful Catholic prayers for Good Friday 2026 (April 3) — the Seven Last Words of Jesus, the Stabat Mater, prayers before the cross, and how to observe Good Friday." />
        <meta name="keywords" content="good friday prayers, good friday 2026, catholic good friday prayers, seven last words jesus, stabat mater, good friday fasting, veneration of the cross" />
        <link rel="canonical" href="https://guidecatholic.com/blog/good-friday-prayers/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Good Friday Prayers 2026: Prayers for the Passion, Death & the Cross"
        description="Powerful Catholic prayers for Good Friday 2026 (April 3) — the Seven Last Words of Jesus, the Stabat Mater, prayers before the cross, and how to observe Good Friday."
        url="https://guidecatholic.com/blog/good-friday-prayers/"
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
              <span className="text-text">Good Friday Prayers</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Good Friday Prayers 2026: Prayers for the Passion, Death & the Cross
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Good Friday 2026 falls on <strong>April 3, 2026</strong>. It is the most solemn day of the Catholic year — the day we stand at the foot of the cross and contemplate the love of God poured out for us. These prayers will help you enter into the mystery of the Passion.
              </p>
            </header>

            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-slate-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-1">📅 Good Friday 2026</p>
                <p className="text-text text-sm"><strong>Date:</strong> Friday, April 3, 2026<br /><strong>Celebration of the Lord's Passion:</strong> Typically at 3pm (the hour of Christ's death)<br /><strong>Fasting & Abstinence:</strong> Required for all Catholics of age</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is Good Friday?</h2>
              <p className="text-text leading-relaxed mb-6">
                Good Friday is the second day of the Easter Triduum — the three holiest days of the Catholic year (Holy Thursday, Good Friday, Holy Saturday/Easter Vigil). It commemorates the crucifixion and death of Jesus Christ on Calvary.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Good Friday is the only day of the year when Mass is not celebrated. The Church observes a solemn fast and holds the Celebration of the Lord's Passion — a liturgy that includes the reading of the Passion, the Veneration of the Cross, and the distribution of Communion from the reserved Blessed Sacrament.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The name "Good Friday" may seem paradoxical — what is "good" about the day Jesus died? The word "good" here is used in the archaic sense of "holy" or "sacred." In some languages, the day is called "Holy Friday" (Viernes Santo in Spanish, Vendredi Saint in French).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Good Friday Fasting Rules 2026</h2>
              <p className="text-text leading-relaxed mb-6">
                Good Friday is the most solemn fast day of the year — even more austere than Ash Wednesday.
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Fasting:</strong> Catholics between 18 and 59 must fast — one full meal and two smaller meals that together do not equal one full meal.</li>
                <li><strong>Abstinence:</strong> Catholics 14 and older must abstain from meat.</li>
                <li><strong>The Church recommends</strong> that Catholics fast as strictly as possible on Good Friday — some eat only bread and water.</li>
                <li><strong>Exceptions:</strong> Those who are pregnant, nursing, ill, or doing heavy physical labor are exempt from fasting.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Last Words of Jesus</h2>
              <p className="text-text leading-relaxed mb-6">
                The "Seven Last Words" are the seven statements Jesus made from the cross, drawn from all four Gospels. Meditating on them is one of the most powerful Good Friday devotions.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { word: "1st Word", ref: "Luke 23:34", text: '"Father, forgive them, for they know not what they do."', reflection: "Even in His agony, Jesus prays for His executioners. He asks forgiveness for those who are killing Him. This is the love that redeems the world." },
                  { word: "2nd Word", ref: "Luke 23:43", text: '"Truly, I say to you, today you will be with me in paradise."', reflection: "To the repentant thief, Jesus promises immediate salvation. No sin is too great for His mercy. The cross is the door to paradise." },
                  { word: "3rd Word", ref: "John 19:26-27", text: '"Woman, behold your son... Behold your mother."', reflection: "Jesus gives His mother to the Beloved Disciple — and in him, to all His disciples. Mary becomes the mother of the Church." },
                  { word: "4th Word", ref: "Matthew 27:46", text: '"My God, my God, why have you forsaken me?"', reflection: "Jesus prays Psalm 22 — the psalm of the suffering righteous one who is ultimately vindicated. He enters the depths of human abandonment to redeem it." },
                  { word: "5th Word", ref: "John 19:28", text: '"I thirst."', reflection: "Jesus thirsts for water — and for souls. His thirst on the cross is the thirst of God for the love of His creatures." },
                  { word: "6th Word", ref: "John 19:30", text: '"It is finished."', reflection: "The work of redemption is complete. Jesus has accomplished everything the Father sent Him to do. The debt of sin is paid in full." },
                  { word: "7th Word", ref: "Luke 23:46", text: '"Father, into your hands I commit my spirit."', reflection: "Jesus dies as He lived — in total trust and surrender to the Father. His last breath is a prayer. This is the model of a holy death." },
                ].map((w, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{w.word} — {w.ref}</p>
                    <p className="text-text italic text-sm mb-2">{w.text}</p>
                    <p className="text-text-muted text-xs leading-relaxed">{w.reflection}</p>
                  </div>
                ))}
              </div>

              <QuizCTA
                title="How is your Catholic faith this Holy Week?"
                description="Take our assessment and receive a personalized guide to entering more deeply into the mystery of the Passion."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer Before the Cross</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed text-sm">
                  We adore You, O Christ, and we bless You, because by Your holy cross You have redeemed the world.<br /><br />
                  Lord Jesus, I stand before Your cross and I am overwhelmed. You — the eternal Son of God, through whom all things were made — hung here in agony for love of me. Every wound, every drop of blood, every moment of suffering was for me.<br /><br />
                  I am sorry for my sins, which caused Your suffering. I am grateful beyond words for Your love, which redeemed me. I am in awe of the mystery of the cross — that the worst thing human beings ever did became the means of our salvation.<br /><br />
                  Lord, let me never forget what You did for me here. Let the cross be the center of my life, the source of my strength, and the measure of my love. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Stabat Mater</h2>
              <p className="text-text leading-relaxed mb-6">
                The Stabat Mater ("The Mother Was Standing") is a 13th-century Latin hymn that meditates on Mary's grief at the foot of the cross. It is one of the most beautiful and moving prayers in the Catholic tradition, traditionally sung during the Stations of the Cross and on Good Friday.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text font-semibold text-center mb-3">Stabat Mater (selected verses)</p>
                <p className="text-text italic leading-relaxed text-sm">
                  At the cross her station keeping, stood the mournful Mother weeping, close to Jesus to the last.<br /><br />
                  Through her heart, His sorrow sharing, all His bitter anguish bearing, now at length the sword had passed.<br /><br />
                  O how sad and sore distressed was that Mother highly blessed of the sole-begotten One!<br /><br />
                  Christ above in torment hangs; she beneath beholds the pangs of her dying glorious Son.<br /><br />
                  Holy Mother! pierce me through; in my heart each wound renew of my Savior crucified.<br /><br />
                  Let me share with thee His pain, who for all my sins was slain, who for me in torments died.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Observe Good Friday</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Attend the Celebration of the Lord's Passion</strong> at 3pm — the hour of Christ's death. This is the most important Good Friday observance.</li>
                <li><strong>Fast and abstain from meat.</strong> Good Friday is the most solemn fast day of the year.</li>
                <li><strong>Pray the Stations of the Cross.</strong> Many parishes offer the Stations on Good Friday morning or afternoon.</li>
                <li><strong>Meditate on the Seven Last Words.</strong> Spend time with each of Jesus's words from the cross.</li>
                <li><strong>Venerate the cross.</strong> At the Celebration of the Lord's Passion, the faithful are invited to kiss or touch the cross. Do so with reverence and gratitude.</li>
                <li><strong>Keep silence.</strong> Good Friday is traditionally a day of quiet and recollection. Avoid entertainment, social media, and unnecessary noise.</li>
                <li><strong>Pray the Divine Mercy Chaplet at 3pm.</strong> Jesus promised extraordinary graces to those who pray the Chaplet at the Hour of Mercy — 3pm, the hour of His death.</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "We adore You, O Christ, and we bless You, because by Your holy cross You have redeemed the world."
                </p>
                <p className="text-text-muted text-center mt-2">— Traditional Good Friday acclamation</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "When is Good Friday 2026?", answer: "Good Friday 2026 is April 3, 2026. It is the second day of the Easter Triduum (Holy Thursday, Good Friday, Holy Saturday/Easter Vigil). Easter Sunday 2026 is April 5, 2026." },
              { question: "Is there Mass on Good Friday?", answer: "No. Good Friday is the only day of the year when Mass is not celebrated. Instead, the Church holds the Celebration of the Lord's Passion — typically at 3pm. This liturgy includes the reading of the Passion, the Veneration of the Cross, and the distribution of Communion from the reserved Blessed Sacrament." },
              { question: "What are the fasting rules for Good Friday?", answer: "Good Friday is a day of both fasting and abstinence — the most solemn fast day of the year. Catholics between 18 and 59 must fast (one full meal and two smaller meals). Catholics 14 and older must abstain from meat. The Church recommends fasting as strictly as possible on Good Friday." },
              { question: "What are the Seven Last Words of Jesus?", answer: "The Seven Last Words are the seven statements Jesus made from the cross: (1) 'Father, forgive them' (Luke 23:34); (2) 'Today you will be with me in paradise' (Luke 23:43); (3) 'Woman, behold your son' (John 19:26-27); (4) 'My God, my God, why have you forsaken me?' (Matthew 27:46); (5) 'I thirst' (John 19:28); (6) 'It is finished' (John 19:30); (7) 'Father, into your hands I commit my spirit' (Luke 23:46)." },
              { question: "What is the Veneration of the Cross?", answer: "The Veneration of the Cross is a rite in the Good Friday liturgy in which the faithful are invited to approach the cross and kiss or touch it as a sign of reverence and gratitude for Christ's sacrifice. It is one of the most moving moments of the entire liturgical year." },
            ]} />

            <RelatedArticles currentSlug="good-friday-prayers" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to living your Catholic faith more fully.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
