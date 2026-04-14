import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function SaintMichaelArchangel() {
  return (
    <>
      <Helmet>
        <title>St. Michael the Archangel: Prayer, Devotion and His Role in Scripture | Guide Catholic</title>
        <meta name="description" content="Learn about St. Michael the Archangel — his four roles in Scripture, the full text of the Prayer to St. Michael, its history with Pope Leo XIII, the Chaplet of St. Michael, and how to develop devotion." />
        <meta name="keywords" content="saint michael archangel, st michael prayer, prayer to st michael, archangel michael catholic, st michael the archangel" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-michael-archangel/" />
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
              <span className="text-text">St. Michael the Archangel</span>
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
                  Devotions
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                St. Michael the Archangel: Prayer, Devotion and His Role in Scripture
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                St. Michael the Archangel is the great warrior of heaven, the protector of the Church, and the champion of God's people against the forces of evil. His famous prayer — composed after a vision by Pope Leo XIII — is one of the most powerful in the Catholic tradition.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                In an age of spiritual warfare, the devotion to St. Michael the Archangel has never been more relevant. American Catholics have long had a special affection for this mighty archangel — the patron of soldiers, police officers, paramedics, and all who face danger in service of others. His prayer, once recited at the end of every Low Mass, was removed from the liturgy after the Second Vatican Council but has experienced a powerful revival in recent decades, with many Catholics reciting it daily as a protection against evil.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Michael in Scripture
              </h2>
              <p className="text-text leading-relaxed mb-6">
                St. Michael appears by name in three books of the Bible, each time in a role of cosmic significance.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">The Book of Daniel</h3>
              <p className="text-text leading-relaxed mb-6">
                In the Book of Daniel, Michael appears as the great prince who stands guard over the people of Israel. In Daniel 10, an angel tells Daniel that Michael came to help him in a spiritual battle against the "prince of Persia" — a demonic power opposing God's purposes. In Daniel 12:1, Michael is described as "the great prince who has charge of your people," who will arise at the time of the end to deliver God's people from tribulation. This passage establishes Michael as the protector of God's people in the cosmic struggle between good and evil.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">The Letter of Jude</h3>
              <p className="text-text leading-relaxed mb-6">
                In the Letter of Jude (verse 9), Michael is described as disputing with the devil over the body of Moses. Even in this confrontation with Satan himself, Michael does not presume to condemn him by his own authority, but says: "The Lord rebuke you." This passage reveals Michael's humility and his complete dependence on God's authority — even the greatest of angels acts not by his own power but by the power of God.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">The Book of Revelation</h3>
              <p className="text-text leading-relaxed mb-6">
                The most dramatic appearance of Michael is in Revelation 12:7-9: "Now war arose in heaven, Michael and his angels fighting against the dragon. And the dragon and his angels fought back, but he was defeated, and there was no longer any place for them in heaven. And the great dragon was thrown down, that ancient serpent, who is called the devil and Satan, the deceiver of the whole world — he was thrown down to the earth, and his angels were thrown down with him." This passage is the foundation of Michael's role as the great warrior of heaven and the conqueror of Satan.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                His Four Roles in Catholic Tradition
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic tradition, drawing on Scripture and the writings of the Fathers, identifies four principal roles of St. Michael:
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1. Warrior Against Evil</h3>
              <p className="text-text leading-relaxed mb-6">
                Michael is the commander of the heavenly armies, the one who led the angels in the war against Lucifer and cast him out of heaven. He is invoked as a protector against demonic attack, temptation, and spiritual warfare. His name itself — "Mi-ka-el" in Hebrew — means "Who is like God?" — a battle cry that proclaims the absolute supremacy of God over all created beings, including the fallen angels.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2. Protector of the Church</h3>
              <p className="text-text leading-relaxed mb-6">
                Just as Michael was the guardian of Israel in the Old Testament, he is understood in Catholic tradition to be the special protector of the Church — the new Israel. He guards the Church against the attacks of Satan and intercedes for her in the heavenly court. Many of the great apparitions and shrines associated with Michael — including Mont Saint-Michel in France and the Sanctuary of Monte Sant'Angelo in Italy — are connected to his role as protector.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3. Weigher of Souls</h3>
              <p className="text-text leading-relaxed mb-6">
                In Catholic tradition, Michael is associated with the particular judgment of souls at death. He is often depicted holding a scale, weighing the souls of the departed. This role connects him to the mercy and justice of God — he presents souls before the divine tribunal and intercedes for them. Many Catholics invoke Michael at the hour of death, asking him to accompany their souls before God.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">4. Healer</h3>
              <p className="text-text leading-relaxed mb-6">
                In some traditions, particularly in the Eastern Church, Michael is also associated with healing. The famous healing spring at Chonae (modern Turkey) was said to have been blessed by Michael, and many miraculous healings were attributed to his intercession there. This healing role connects to his name — "Who is like God?" — for God alone is the ultimate healer of body and soul.
              </p>

              <QuizCTA
                title="How strong is your devotion to the angels?"
                description="The angels are our companions and protectors on the journey of faith. Take our quiz and discover how to deepen your Catholic spiritual life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Famous Prayer to St. Michael: Full Text
              </h2>
              <p className="text-text leading-relaxed mb-4">
                The Prayer to St. Michael was composed by Pope Leo XIII and ordered to be recited after Low Mass throughout the universal Church. According to tradition, the Pope composed it after a vision in which he saw a terrifying confrontation between Satan and God, in which Satan was given a period of time to try to destroy the Church. Shaken by the vision, Leo XIII composed the prayer and ordered it to be said after every Low Mass — a practice that continued until 1964.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4 text-center">Prayer to St. Michael the Archangel</h3>
                <p className="text-text leading-relaxed mb-3">
                  Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls.
                </p>
                <p className="text-text leading-relaxed font-medium text-center mt-4">
                  Amen.
                </p>
              </div>

              <p className="text-text leading-relaxed mb-6">
                There is also a longer version of the prayer, which includes additional invocations and is sometimes called the "long form" of the Prayer to St. Michael. Many Catholics prefer the shorter version for daily use, while the longer form is used in more formal devotional contexts.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                History of the Prayer: Pope Leo XIII
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Pope Leo XIII (1878–1903) was one of the great popes of the modern era, known for his social encyclicals and his deep concern for the spiritual welfare of the Church. According to the account preserved by his personal secretary, after celebrating Mass one morning in October 1884, the Pope suddenly stopped at the foot of the altar and stood motionless for about ten minutes, his face pale and drawn. He then went to his private chapel and composed the Prayer to St. Michael.
              </p>
              <p className="text-text leading-relaxed mb-6">
                He later told those around him that he had experienced a vision of demonic spirits gathering around Rome and the Church, and that he had heard a terrifying voice saying that, given enough time and power, he could destroy the Church. God's voice responded, granting Satan a period of time — between 75 and 100 years — to try. Leo XIII, shaken by this vision, composed the prayer and ordered it to be recited after every Low Mass throughout the world.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic text-center text-lg">
                  "The power of Satan is stronger than ever before, but the power of God is infinitely greater."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope Leo XIII (attributed)</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Chaplet of St. Michael
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Chaplet of St. Michael is a devotional prayer revealed to a Portuguese Carmelite nun, Antonia d'Astonac, in the 18th century. According to her account, St. Michael appeared to her and asked that he be honored with nine salutations corresponding to the nine choirs of angels. The chaplet consists of nine groups of prayers, each honoring one of the nine choirs of angels, followed by four additional prayers in honor of the four archangels: Michael, Gabriel, Raphael, and Uriel.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The chaplet is prayed on a special set of beads and takes about 20 minutes to complete. It is a powerful devotion for those who wish to deepen their relationship with the angels and invoke their protection. Pope Pius IX approved the chaplet and granted indulgences to those who pray it.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                His Feast Day: September 29 (Michaelmas)
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The feast of St. Michael the Archangel is celebrated on September 29, a date known in the English-speaking world as "Michaelmas." Since 1969, the feast has been expanded to honor all three archangels named in Scripture — Michael, Gabriel, and Raphael — and is officially called the "Feast of Saints Michael, Gabriel, and Raphael, Archangels."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Michaelmas has a long history in Western culture as a quarter day — one of the four days of the year when rents were due and accounts were settled. It marked the end of the harvest season and the beginning of autumn. In Catholic tradition, it is a day to honor the angels, to pray for their protection, and to renew our devotion to St. Michael as the guardian of the Church.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Shrines Dedicated to St. Michael
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Some of the most beautiful and historically significant shrines in the world are dedicated to St. Michael. The Sanctuary of Monte Sant'Angelo in Puglia, Italy, is the oldest Christian shrine in Western Europe dedicated to an angel — it was established after an apparition of Michael in 490 AD and has been a pilgrimage site for over 1,500 years. Mont Saint-Michel in Normandy, France, is one of the most iconic images in all of Christendom — a monastery perched on a rocky island, dedicated to Michael since the 8th century. In the United States, the Shrine of St. Michael the Archangel in Tarpon Springs, Florida, is a popular pilgrimage destination.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Develop Devotion to St. Michael
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Developing a devotion to St. Michael is simple and powerful. Begin by praying the Prayer to St. Michael daily — ideally in the morning, as a protection for the day ahead, or at night, as a protection during sleep. Many Catholics also pray it after Mass, continuing the tradition established by Pope Leo XIII. You might also pray the Chaplet of St. Michael on his feast day or on Tuesdays, which are traditionally associated with the angels in some devotional traditions.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Consider placing an image or statue of St. Michael in your home — particularly near the entrance, as a sign that your home is under his protection. Learn about the shrines dedicated to him and, if possible, make a pilgrimage to one. Read about his appearances in Scripture and meditate on his role as the great warrior of heaven. And ask him, each day, to defend you in the spiritual battles of your life.
              </p>
            </div>

            <RelatedArticles currentSlug="saint-michael-archangel" />

            <BlogFAQ faqs={[
              {
                question: "What is the Prayer to St. Michael?",
                answer: "The Prayer to St. Michael is a short but powerful prayer composed by Pope Leo XIII after a vision he reportedly had in 1884. It asks St. Michael to defend us in battle against the wickedness and snares of the devil, and to cast Satan and all evil spirits into hell. It was recited after every Low Mass from 1886 until 1964."
              },
              {
                question: "What is St. Michael's role in the Bible?",
                answer: "St. Michael appears in three books of the Bible: Daniel (as the great prince who guards God's people), Jude (disputing with the devil over the body of Moses), and Revelation (leading the heavenly armies against Satan and casting him out of heaven). He is consistently portrayed as the great warrior and protector of God's people."
              },
              {
                question: "When is the feast of St. Michael?",
                answer: "The feast of St. Michael the Archangel is celebrated on September 29, known as Michaelmas. Since 1969, the feast has been expanded to honor all three archangels named in Scripture — Michael, Gabriel, and Raphael — and is officially called the Feast of Saints Michael, Gabriel, and Raphael, Archangels."
              },
              {
                question: "Why did Pope Leo XIII compose the Prayer to St. Michael?",
                answer: "According to tradition, Pope Leo XIII composed the prayer after experiencing a vision in 1884 in which he saw a terrifying confrontation between Satan and God, in which Satan was given a period of time to try to destroy the Church. Shaken by this vision, the Pope composed the prayer and ordered it to be recited after every Low Mass throughout the world."
              },
              {
                question: "What does the name Michael mean?",
                answer: "The name Michael comes from the Hebrew 'Mi-ka-el,' which means 'Who is like God?' It is understood as a battle cry — a proclamation of the absolute supremacy of God over all created beings, including the fallen angels. When Michael casts Satan out of heaven, he does so in the name of God, not by his own power."
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
