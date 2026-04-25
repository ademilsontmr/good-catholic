import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function AdventPrayers() {
  return (
    <>
      <Helmet>
        <title>Advent Prayers 2026: Catholic Prayers for Each Week of Advent | Guide Catholic</title>
        <meta name="description" content="Beautiful Catholic prayers for Advent 2026 — prayers for each week, the O Antiphons, the Advent wreath blessing, and how to prepare your heart for Christmas." />
        <meta name="keywords" content="advent prayers, advent prayers catholic, prayers for advent, advent 2026, advent wreath prayer, o antiphons advent, catholic advent prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/advent-prayers/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Advent Prayers 2026: Catholic Prayers for Each Week of Advent"
        description="Beautiful Catholic prayers for Advent 2026 — prayers for each week, the O Antiphons, the Advent wreath blessing, and how to prepare your heart for Christmas."
        url="https://guidecatholic.com/blog/advent-prayers/"
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
              <span className="text-text">Advent Prayers</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Advent Prayers 2026: Catholic Prayers for Each Week of Advent
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Advent is the Church's season of joyful waiting — four weeks of prayer and preparation for the coming of Christ at Christmas. These prayers will help you enter into the spirit of Advent and prepare your heart to receive the Lord.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-1">📅 Advent 2026</p>
                <p className="text-text text-sm">
                  <strong>First Sunday of Advent:</strong> November 29, 2026<br />
                  <strong>Second Sunday:</strong> December 6, 2026<br />
                  <strong>Third Sunday (Gaudete):</strong> December 13, 2026<br />
                  <strong>Fourth Sunday:</strong> December 20, 2026<br />
                  <strong>Christmas Eve:</strong> December 24, 2026<br />
                  <strong>Christmas Day:</strong> December 25, 2026
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is Advent?</h2>
              <p className="text-text leading-relaxed mb-6">
                Advent (from the Latin <em>adventus</em>, "coming") is the four-week season that begins the liturgical year. It is a season of joyful anticipation — waiting for the coming of Christ. This waiting has three dimensions:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The historical coming:</strong> We remember and celebrate the Incarnation — God becoming human in Jesus of Nazareth, born in Bethlehem.</li>
                <li><strong>The daily coming:</strong> We prepare our hearts to receive Christ who comes to us daily in the Eucharist, in prayer, in the poor, and in the events of our lives.</li>
                <li><strong>The final coming:</strong> We look forward to the Second Coming of Christ at the end of time, when He will come in glory to judge the living and the dead.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Advent Wreath Blessing</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="advent-prayers">
                The Advent wreath — a circle of evergreen branches with four candles (three purple and one pink) — is one of the most beautiful Catholic family traditions. A new candle is lit each Sunday of Advent, symbolizing the growing light of Christ coming into the world.
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text font-semibold text-center mb-3">Blessing of the Advent Wreath</p>
                <p className="text-text italic leading-relaxed text-sm">
                  Lord our God, we praise you for your Son, Jesus Christ: he is Emmanuel, the hope of the peoples, he is the wisdom that teaches and guides us, he is the Savior of every nation. Lord God, let your blessing come upon us as we light the candles of this wreath. May the wreath and its light be a sign of Christ's promise to bring us salvation. May he come quickly and not delay. We ask this through Christ our Lord. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayers for Each Week of Advent</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">First Week of Advent — Hope</h3>
              <p className="text-text leading-relaxed mb-4">The first week of Advent focuses on hope — the hope of Christ's coming.</p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text italic text-sm leading-relaxed">
                  Lord Jesus, You are the hope of the world. In this first week of Advent, I open my heart to receive You. Come, Lord Jesus — come into my darkness with Your light, into my fear with Your peace, into my emptiness with Your fullness. I wait for You with hope. Maranatha — Come, Lord Jesus! Amen.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Second Week of Advent — Peace</h3>
              <p className="text-text leading-relaxed mb-4">The second week focuses on peace — the peace that Christ brings to the world.</p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text italic text-sm leading-relaxed">
                  Prince of Peace, in this second week of Advent I ask You to bring Your peace into my heart and into my world. Where there is conflict, bring reconciliation. Where there is anxiety, bring calm. Where there is division, bring unity. Prepare the way of the Lord in my heart — make straight the paths that have become crooked. Come, Lord Jesus! Amen.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Third Week of Advent — Joy (Gaudete Sunday)</h3>
              <p className="text-text leading-relaxed mb-4">The third Sunday is Gaudete Sunday ("Rejoice Sunday") — a moment of joy in the midst of waiting. The rose candle is lit.</p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text italic text-sm leading-relaxed">
                  Lord of Joy, on this Gaudete Sunday I rejoice that You are near. "Rejoice in the Lord always; again I say, rejoice. The Lord is near" (Philippians 4:4-5). Fill my heart with the joy that the world cannot give and cannot take away — the joy of knowing that You are coming, that You are already here, and that You will come again in glory. Come, Lord Jesus! Amen.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Fourth Week of Advent — Love</h3>
              <p className="text-text leading-relaxed mb-4">The fourth week focuses on love — the love of God made flesh in Jesus.</p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-text italic text-sm leading-relaxed">
                  God of Love, in these final days before Christmas I contemplate the mystery of Your love: that You, the eternal God, chose to become a helpless infant for love of me. May I receive this love with the faith of Mary, the obedience of Joseph, and the wonder of the shepherds. Come, Lord Jesus — come into my heart and make it Your home. Amen.
                </p>
              </div>

              <QuizCTA
                title="How is your Catholic faith this Advent?"
                description="Take our assessment and receive a personalized guide to preparing your heart for Christmas."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The O Antiphons</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="advent-prayers">
                The O Antiphons are seven ancient prayers prayed at Vespers (Evening Prayer) on the seven days before Christmas Eve (December 17-23). Each begins with "O" and addresses Christ by a different title from the Old Testament. They are the basis of the Advent hymn "O Come, O Come, Emmanuel."
              </LinkedText>
              <div className="space-y-3 mb-8">
                {[
                  { date: "Dec 17", title: "O Sapientia (O Wisdom)", text: "O Wisdom, O holy Word of God, you govern all creation with your strong yet tender care. Come and show your people the way to salvation." },
                  { date: "Dec 18", title: "O Adonai (O Lord)", text: "O sacred Lord of ancient Israel, who showed yourself to Moses in the burning bush, who gave him the holy law on Sinai mountain: come, stretch out your mighty hand to set us free." },
                  { date: "Dec 19", title: "O Radix Jesse (O Root of Jesse)", text: "O Flower of Jesse's stem, you have been raised up as a sign for all peoples; kings stand silent in your presence; the nations bow down in worship before you. Come, let nothing keep you from coming to our aid." },
                  { date: "Dec 20", title: "O Clavis David (O Key of David)", text: "O Key of David, O royal Power of Israel controlling at your will the gate of heaven: come, break down the prison walls of death for those who dwell in darkness and the shadow of death; and lead your captive people into freedom." },
                  { date: "Dec 21", title: "O Oriens (O Radiant Dawn)", text: "O Radiant Dawn, splendor of eternal light, sun of justice: come, shine on those who dwell in darkness and the shadow of death." },
                  { date: "Dec 22", title: "O Rex Gentium (O King of All Nations)", text: "O King of all the nations, the only joy of every human heart; O Keystone of the mighty arch of man, come and save the creature you fashioned from the dust." },
                  { date: "Dec 23", title: "O Emmanuel", text: "O Emmanuel, king and lawgiver, desire of the nations, Savior of all people, come and set us free, Lord our God." },
                ].map((a, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{a.date} — {a.title}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{a.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Live Advent Well</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Set up an Advent wreath.</strong> Light a new candle each Sunday with a brief family prayer.</li>
                <li><strong>Follow the daily Mass readings.</strong> The Advent readings are among the most beautiful in the entire liturgical year — full of prophecy, hope, and longing.</li>
                <li><strong>Go to Confession.</strong> Advent is a penitential season — a time to prepare our hearts by clearing away sin. Many parishes offer extra Confession times during Advent.</li>
                <li><strong>Pray the O Antiphons.</strong> From December 17-23, pray one O Antiphon each day as your evening prayer.</li>
                <li><strong>Resist the commercial Christmas rush.</strong> Advent is a season of waiting, not celebrating. Save the Christmas celebrations for Christmas itself (December 25 - January 6).</li>
                <li><strong>Perform acts of charity.</strong> Advent is a time to prepare for the coming of Christ by serving Him in the poor. Donate to a food bank, visit the lonely, give generously.</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Come, Lord Jesus." — Revelation 22:20
                </p>
                <p className="text-text-muted text-center mt-2">The prayer of Advent — and of the whole Christian life.</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "When is Advent 2026?", answer: "Advent 2026 begins on the First Sunday of Advent, November 29, 2026, and ends on Christmas Eve, December 24, 2026. It consists of four Sundays and approximately 28 days of preparation for Christmas." },
              { question: "What are the O Antiphons?", answer: "The O Antiphons are seven ancient prayers prayed on the seven days before Christmas Eve (December 17-23). Each begins with 'O' and addresses Christ by a different Old Testament title: O Wisdom, O Lord, O Root of Jesse, O Key of David, O Radiant Dawn, O King of All Nations, O Emmanuel. They are the basis of the Advent hymn 'O Come, O Come, Emmanuel.'" },
              { question: "What is Gaudete Sunday?", answer: "Gaudete Sunday is the Third Sunday of Advent — a moment of joy in the midst of the penitential season. 'Gaudete' means 'Rejoice' in Latin, from the entrance antiphon: 'Rejoice in the Lord always; again I say, rejoice. The Lord is near' (Philippians 4:4-5). The rose candle on the Advent wreath is lit, and the priest may wear rose vestments." },
              { question: "What is the Advent wreath?", answer: "The Advent wreath is a circle of evergreen branches with four candles — three purple (or violet) and one pink (rose). A new candle is lit each Sunday of Advent, symbolizing the growing light of Christ coming into the world. The evergreen symbolizes eternal life; the circle symbolizes God's eternity; the candles symbolize Christ as the Light of the World." },
              { question: "Is Advent a penitential season like Lent?", answer: "Advent has a penitential character — the liturgical color is purple (or violet), the same as Lent, and the Gloria is not sung at weekday Masses. However, Advent is primarily a season of joyful anticipation rather than penance. It is less austere than Lent, and the focus is on hope and preparation rather than repentance." },
            ]} />

            <RelatedArticles currentSlug="advent-prayers" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to living your Catholic faith more fully this Advent.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
