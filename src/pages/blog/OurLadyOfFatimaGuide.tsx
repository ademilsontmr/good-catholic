import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Clock, ArrowLeft, Heart, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function OurLadyOfFatimaGuide() {
  return (
    <>
      <Helmet>
        <title>Our Lady of Fatima: Complete Guide to the 1917 Apparitions & Secrets | Guide Catholic</title>
        <meta name="description" content="Discover the complete story of Fatima apparitions, the three secrets, the miracle of the sun, and why these messages matter for Catholics today. Learn about Lucia, Francisco, and Jacinta." />
        <meta name="keywords" content="our lady of fatima, fatima apparitions 1917, three secrets of fatima, miracle of the sun, lucia francisco jacinta, fatima prayers, our lady of fatima feast day, fatima prophecies" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-of-fatima-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Our Lady of Fatima: Complete Guide to the 1917 Apparitions & Secrets"
          description="Discover the complete story of Fatima apparitions, the three secrets, the miracle of the sun, and why these messages matter for Catholics today. Learn about Lucia, Francisco, and Jacinta."
          url="https://guidecatholic.com/blog/our-lady-of-fatima-guide/"
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
              <span className="text-text">Our Lady of Fatima Guide</span>
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
                  Marian Apparitions
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  18 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Our Lady of Fatima: The Complete Story of Heaven's Warning for Modern Times
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In 1917, while the world was torn by war, three shepherd children in Portugal received messages from heaven that would change the Catholic Church forever. The apparitions of Our Lady of Fatima remain one of the most significant Marian events of the 20th century.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Star className="w-24 h-24 text-sky-400/20 absolute top-4 right-4" />
              <Heart className="w-32 h-32 text-sky-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The story of Fatima begins not with supernatural spectacle, but with the ordinary faith of three children: Lucia dos Santos (10), Francisco Marto (9), and Jacinta Marto (7). Their simple devotion and willingness to suffer for souls would make them instruments of heaven's most urgent message for modern times.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Historical Context: World in Crisis
              </h2>
              <p className="text-text leading-relaxed mb-6">
                1917 was a year of unprecedented global crisis. World War I raged across Europe, millions were dying, and Russia was on the brink of the Bolshevik Revolution that would unleash decades of atheistic communism. In the midst of this chaos, God sent His Mother to warn humanity and offer a path to peace.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Portugal itself was in turmoil. The 1910 revolution had overthrown the monarchy, established secularism, and begun intense persecution of the Catholic Church. Churches were being seized, religious orders expelled, and anti-clerical laws imposed. It was in this hostile environment that Our Lady chose to appear.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Six Apparitions: May 13 to October 13, 1917
              </h2>
              
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-sky-600" />
                  The Angel's Preparation (1916)
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">The year before Mary appeared, an angel prepared the children</p>
                <p className="text-sm leading-relaxed mb-4">
                  In spring 1916, an Angel identified as the Angel of Peace appeared to the children three times, teaching them prayers of reparation and preparing them for Mary's coming. He taught them:
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-sm italic text-center">
                    "My God, I believe, I adore, I hope, and I love You. I ask pardon for those who do not believe, do not adore, do not hope, and do not love You."
                  </p>
                </div>
                <p className="text-sm leading-relaxed">
                  The angel also taught them about making sacrifices for sinners and the importance of praying for the conversion of souls.
                </p>
              </div>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                May 13, 1917: The First Apparition
              </h3>
              <p className="text-text leading-relaxed mb-6">
                While tending sheep, the children saw a "lady brighter than the sun" standing in a holm oak tree. She asked them to return to the same spot on the 13th of each month for six months, and to learn to read and write. When Lucia asked if they would go to heaven, she responded that Francisco and Jacinta would soon go, but Lucia would remain longer to spread devotion to her Immaculate Heart.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                June 13, 1917: The Second Apparition
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Mary revealed that Francisco and Jacinta would soon go to heaven, but Lucia would remain longer to establish devotion to the Immaculate Heart. She taught the children a prayer: "When you pray the Rosary, say after each mystery: 'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those most in need of your mercy.'"
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                July 13, 1917: The Third Apparition - The Great Secret
              </h3>
              <p className="text-text leading-relaxed mb-6">
                This was the most profound apparition. Mary revealed a three-part secret:
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>First Secret:</strong> A terrifying vision of hell, where the souls of poor sinners go. "You have seen hell where the souls of poor sinners go. To save them, God wishes to establish in the world devotion to my Immaculate Heart."</li>
                <li><strong>Second Secret:</strong> The prediction of World War II ending, but warning that if people continued offending God, a worse war would begin in the reign of Pius XI. She also predicted the rise and fall of communism in Russia and its eventual conversion.</li>
                <li><strong>Third Secret:</strong> A vision of a "bishop in white" (understood to be the Pope) ascending a mountain, followed by other bishops, priests, religious, and laity. They were all killed by soldiers firing bullets and arrows as they climbed a rough mountain.</li>
              </ol>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                August 13, 1917: The Fourth Apparition
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The children were arrested and imprisoned by the local administrator, who threatened to boil them in oil unless they revealed the secret. They refused and were released after two days. Mary appeared to them later that day and encouraged them to continue praying and making sacrifices.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                September 13, 1917: The Fifth Apparition
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Mary promised that in October, she would perform a miracle so that all would believe. She also revealed that the war would end and that the soldiers would soon return home.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                October 13, 1917: The Sixth Apparition - The Miracle of the Sun
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Despite torrential rain, 70,000 people gathered for the final apparition. Mary identified herself as "Our Lady of the Rosary" and requested that a chapel be built in her honor. Then occurred the Miracle of the Sun: the rain stopped, clouds parted, and the sun began to "dance" - spinning, radiating colors, and appearing to plunge toward earth. This was witnessed by people miles away, including atheists who reported the phenomenon.
              </p>

              <QuizCTA
                title="How well do you know Marian apparitions?"
                description="Test your knowledge of Fatima and other approved Marian apparitions. Discover which messages from heaven most apply to your life today."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Three Secrets Explained
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Vision of Hell
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Lucia described seeing a "sea of fire" with demons and human souls in human form. They were floating in the flames, amid shrieks and groans of despair. The vision lasted only moments but terrified the children. Mary explained that this vision was shown so people would understand the reality of hell and the importance of praying for sinners.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Prediction of World War II and Russia
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Mary predicted that if people continued offending God, "Russia will spread her errors throughout the world, promoting wars and persecutions of the Church. The good will be martyred, the Holy Father will have much to suffer, and various nations will be annihilated." However, she promised that "in the end, my Immaculate Heart will triumph. The Holy Father will consecrate Russia to me, and she will be converted, and a period of peace will be granted to the world."
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Third Secret: Persecution of the Church
              </h3>
              <p className="text-text leading-relaxed mb-6">
                While the Vatican released the text of the third secret in 2000, many believe it refers to the persecution of the Church in the 20th century, particularly under communism. Cardinal Ratzinger (future Pope Benedict XVI) explained that it represents "the suffering of the witnesses of the faith of the last century."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Five First Saturdays Devotion
              </h2>
              <p className="text-text leading-relaxed mb-6">
                During the July 13 apparition, Mary promised: "I promise to assist at the hour of death, with the graces necessary for salvation, all those who, on the first Saturday of five consecutive months, shall confess, receive Holy Communion, recite five decades of the Rosary, and keep me company for fifteen minutes while meditating on the fifteen mysteries of the Rosary, with the intention of making reparation to me."
              </p>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Requirements for the Five First Saturdays</h3>
                <ol className="list-decimal list-inside text-text space-y-2">
                  <li><strong>Confession:</strong> Sacramental Confession within 8 days before or after the First Saturday</li>
                  <li><strong>Communion:</strong> Receive Holy Communion in a state of grace</li>
                  <li><strong>Rosary:</strong> Pray five decades of the Rosary</li>
                  <li><strong>Meditation:</strong> Spend 15 minutes meditating on the mysteries of the Rosary</li>
                  <li><strong>Intention:</strong> Do all this with the intention of making reparation to Mary</li>
                </ol>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Lives of the Seers
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Sister Lucia dos Santos (1907-2005)
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Lucia lived until age 97, becoming a Carmelite nun and the primary witness to Fatima. She wrote memoirs about the apparitions and continued to receive private revelations until her death. Pope John Paul II said she "gave herself totally to the service of the message of Fatima."
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Blessed Francisco Marto (1908-1919)
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Francisco died at age 10 after contracting the Spanish flu. He was known for his deep love of Jesus in the Eucharist and his desire to console Jesus for the sins of the world. He was beatified in 2000 and canonized in 2017.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Saint Jacinta Marto (1910-1920)
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Jacinta died at age 9, also from the Spanish flu. She had a profound devotion to the Immaculate Heart and offered her sufferings for the conversion of sinners and the Holy Father. She was beatified in 2000 and canonized in 2017.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Fatima Center and Pilgrimage
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Today, Fatima is one of the world's most important pilgrimage sites. The Sanctuary of Our Lady of Fatima includes the Basilica of Our Lady of the Rosary, the Chapel of the Apparitions (built on the site of the oak tree), and the modern Church of the Holy Trinity. Millions of pilgrims visit annually, seeking healing, conversion, and peace.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pope John Paul II had a special devotion to Fatima, crediting Our Lady of Fatima with saving his life during the 1981 assassination attempt. He visited Fatima three times and beatified Francisco and Jacinta there in 2000.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Fatima's Message for Today
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The messages of Fatima remain urgently relevant:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The reality of hell:</strong> Mary showed hell to emphasize the eternal consequences of sin</li>
                <li><strong>The power of prayer:</strong> The Rosary is our weapon against evil</li>
                <li><strong>The importance of reparation:</strong> Our sacrifices can save souls</li>
                <li><strong>The triumph of the Immaculate Heart:</strong> Despite persecution, the Church will ultimately triumph</li>
                <li><strong>The need for conversion:</strong> Both personal conversion and conversion of nations</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Common Prayers of Fatima
              </h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Fatima Prayer (after each mystery of the Rosary)</h3>
                <p className="text-text leading-relaxed italic">
                  "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those most in need of your mercy."
                </p>
              </div>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Angel's Prayer</h3>
                <p className="text-text leading-relaxed italic">
                  "My God, I believe, I adore, I hope, and I love You. I ask pardon for those who do not believe, do not adore, do not hope, and do not love You."
                </p>
              </div>
              
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Pardon Prayer</h3>
                <p className="text-text leading-relaxed italic">
                  "My God, I believe, I adore, I hope and I love You! I ask pardon for those who do not believe, do not adore, do not hope and do not love You. Most Holy Trinity, Father, Son and Holy Spirit, I adore You profoundly, and I offer You the most precious Body, Blood, Soul and Divinity of Jesus Christ, present in all the tabernacles of the world, in reparation for the outrages, sacrileges and indifference by which He is offended. By the infinite merits of His Sacred Heart and the Immaculate Heart of Mary, I beg the conversion of poor sinners."
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "In the end, my Immaculate Heart will triumph." - Our Lady of Fatima, July 13, 1917
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Do not be afraid. I am the Mother of God, who loves you." - Our Lady of Fatima to the children
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Are the Fatima apparitions approved by the Catholic Church?",
                answer: "Yes. The Bishop of Leiria-Fátima declared the apparitions worthy of belief in 1930. Popes Paul VI, John Paul II, Benedict XVI, and Francis have all expressed strong devotion to Our Lady of Fatima."
              },
              {
                question: "What is the Third Secret of Fatima?",
                answer: "The Vatican released the text in 2000. It describes a vision of a 'bishop in white' (understood to be the Pope) being martyred along with other clergy and laity. The Church interprets this as representing the persecution of Christians in the 20th century."
              },
              {
                question: "Did Russia convert as predicted?",
                answer: "Partially. After the fall of communism, religious freedom returned to Russia. However, full conversion and consecration as Our Lady requested remain subjects of prayer and discussion."
              },
              {
                question: "Why did Mary show the children a vision of hell?",
                answer: "To emphasize the reality of eternal consequences and the urgency of praying for sinners. Mary herself said she showed hell 'so that you may see where sinners go and why it is necessary to pray and make sacrifices.'"
              },
              {
                question: "What is the Five First Saturdays devotion?",
                answer: "A devotion Mary requested to make reparation for sins against her Immaculate Heart. It involves Confession, Communion, Rosary, and 15 minutes of meditation on five consecutive first Saturdays."
              },
              {
                question: "How old were the visionaries?",
                answer: "Lucia was 10, Francisco was 9, and Jacinta was 7 when the apparitions began. Francisco and Jacinta died young, while Lucia lived to 97 as a Carmelite nun."
              },
              {
                question: "What happened during the Miracle of the Sun?",
                answer: "On October 13, 1917, 70,000 witnesses saw the sun appear to spin, radiate colors, and plunge toward earth. This was witnessed by believers and skeptics alike, including secular newspapers."
              },
              {
                question: "Can I visit Fatima today?",
                answer: "Yes. The Sanctuary of Our Lady of Fatima in Portugal welcomes millions of pilgrims annually. The site includes the Chapel of the Apparitions, basilicas, and places associated with the seers."
              }
            ]} />

<RelatedArticles currentSlug="our-lady-of-fatima-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Answer Our Lady's Call to Prayer
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz to discover how Fatima's messages apply to your spiritual life today.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Fatima Quiz
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
