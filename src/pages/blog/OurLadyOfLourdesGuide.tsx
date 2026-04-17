import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Clock, ArrowLeft, Heart, Star, Droplets, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function OurLadyOfLourdesGuide() {
  return (
    <>
      <Helmet>
        <title>Our Lady of Lourdes: Complete Guide to the 1858 Apparitions & Miracles | Guide Catholic</title>
        <meta name="description" content="Discover the complete story of Our Lady of Lourdes apparitions to St. Bernadette. Learn about the miraculous spring, the Immaculate Conception, and why Lourdes remains a major pilgrimage site." />
        <meta name="keywords" content="our lady of lourdes, st bernadette, lourdes apparitions 1858, lourdes miracles, lourdes water healing, immaculate conception, lourdes pilgrimage, our lady of lourdes feast day" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-of-lourdes-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Our Lady of Lourdes: Complete Guide to the 1858 Apparitions & Miracles"
          description="Discover the complete story of Our Lady of Lourdes apparitions to St. Bernadette. Learn about the miraculous spring, the Immaculate Conception, and why Lourdes remains a major pilgrimage site."
          url="https://guidecatholic.com/blog/our-lady-of-lourdes-guide/"
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
              <span className="text-text">Our Lady of Lourdes Guide</span>
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
                  20 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Our Lady of Lourdes: The Story of Bernadette and the Miraculous Spring
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                In 1858, a poor, uneducated 14-year-old girl became the instrument of heaven's message about the Immaculate Conception. The apparitions at Lourdes would become one of the Church's most powerful testimonies to Mary's intercession and God's healing power.
              </p>
            </header>

            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Droplets className="w-24 h-24 text-blue-400/20 absolute top-4 right-4" />
              <Heart className="w-32 h-32 text-blue-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The story of Lourdes begins not with spectacle, but with the simple faith of a sickly shepherd girl named Bernadette Soubirous. Between February 11 and July 16, 1858, the Virgin Mary appeared to Bernadette 18 times in a grotto near the town of Lourdes, France. These apparitions would change the life of one girl, a town, and millions of pilgrims who would follow.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Historical Context: 1858 France
              </h2>
              <p className="text-text leading-relaxed mb-6">
                France in 1858 was a nation in spiritual crisis. The French Revolution had devastated the Church, and anti-clerical sentiment was strong. The recent definition of the Immaculate Conception by Pope Pius IX in 1854 was controversial. It was into this environment that God chose to send His Mother with a message of hope and healing.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Lourdes itself was a poor town in the Pyrenees mountains. Bernadette's family had lost their mill and lived in extreme poverty. Her poor health and lack of education made her an unlikely choice for a heavenly messenger - exactly the kind of person God often chooses to confound the wise.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Bernadette Soubirous: The Humble Messenger
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Marie-Bernarde Soubirous was born on January 7, 1844, the eldest of nine children. She suffered from asthma her entire life and was considered frail. At 14, she couldn't read or write and spoke only the local dialect. Yet God chose this simple girl to convey one of the Church's most important Marian messages.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Bernadette's character was remarkable for her humility, honesty, and perseverance. Despite ridicule, opposition from authorities, and even imprisonment, she never wavered in her testimony of what she had seen and heard.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Eighteen Apparitions: February 11 - July 16, 1858
              </h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Star className="w-6 h-6 text-blue-600" />
                  The Apparitions Timeline
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text mb-2">February 11: First Apparition</h4>
                    <p className="text-sm text-text-muted">Bernadette saw a "beautiful lady" in a niche of the grotto. She was dressed in white with a blue sash and a rosary on her arm.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">February 14-25: Early Apparitions</h4>
                    <p className="text-sm text-text-muted">The Lady appeared several times, teaching Bernadette to pray the rosary and requesting she come daily for two weeks.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">February 25: The Miraculous Spring</h4>
                    <p className="text-sm text-text-muted">The Lady directed Bernadette to drink from a spring that wasn't there. When Bernadette dug in the mud, water began to flow.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">March 25: The Great Revelation</h4>
                    <p className="text-sm text-text-muted">When asked her name, the Lady replied: "I am the Immaculate Conception" - confirming the papal definition just four years earlier.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">April-July: Final Apparitions</h4>
                    <p className="text-sm text-text-muted">The Lady requested a chapel to be built and processions to the grotto. The final apparition was July 16, 1858.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Miraculous Spring and Healings
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The spring that Bernadette uncovered has become the source of countless healings. From the very beginning, people who drank or bathed in the water reported cures. The Church has investigated thousands of these reported healings, and to date, 70 have been officially recognized as medically inexplicable miracles.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Process of Verification
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The Lourdes Medical Bureau, established in 1883, follows a rigorous process for investigating reported healings:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>The illness must be serious and medically documented</li>
                <li>The cure must be instantaneous and complete</li>
                <li>The cure must be permanent</li>
                <li>The cure must be medically inexplicable</li>
                <li>The cure must not be attributable to psychological factors</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Types of Healings Reported
              </h3>
              <p className="text-text leading-relaxed mb-6">
                While physical healings are most famous, many report spiritual and emotional healing as well. The spring water is seen as a channel of God's grace, but always in cooperation with faith and prayer.
              </p>

              <QuizCTA
                title="How much do you know about Marian apparitions?"
                description="Test your knowledge of Lourdes, Fatima, Guadalupe and other approved Marian apparitions. Discover which messages from heaven most speak to your heart today."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Immaculate Conception: The Core Message
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The most profound moment came on March 25, 1858, when Bernadette asked the Lady her name. The response, "I am the Immaculate Conception," was extraordinary because:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Bernadette, uneducated, could not have known this theological term</li>
                <li>The definition was only four years old and still controversial</li>
                <li>The message confirmed papal authority and Marian doctrine</li>
                <li>It revealed Mary's role in God's plan of salvation</li>
              </ul>
              
              <p className="text-text leading-relaxed mb-6">
                The Immaculate Conception teaches that Mary was conceived without original sin, preserved from the first moment of her existence by a special grace of God in anticipation of her role as Mother of God.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Messages of Lourdes
              </h2>
              <p className="text-text leading-relaxed mb-6">
                While the apparitions at Lourdes contained no apocalyptic prophecies like Fatima, they conveyed essential spiritual messages:
              </p>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Key Messages from Our Lady</h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>Prayer:</strong> "Pray for sinners" - Mary's constant request for prayer</li>
                  <li><strong>Penance:</strong> "Penance! Penance! Penance!" - The call to conversion and sacrifice</li>
                  <li><strong>Processions:</strong> The request for processions to the grotto</li>
                  <li><strong>Chapel:</strong> The request for a chapel to be built on the site</li>
                  <li><strong>Presence:</strong> Mary's promise to remain with her children</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Bernadette's Life After the Apparitions
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Despite her role in the apparitions, Bernadette remained humble. In 1866, she entered the Sisters of Charity of Nevers, taking the name Sister Marie-Bernarde. She spent the rest of her life in prayer and suffering, dying of tuberculosis in 1879 at age 35.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Bernadette was canonized by Pope Pius XI in 1933. Her feast day is April 16, the day of her death. She is the patron saint of the sick, poor, and shepherdesses.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Sanctuary of Our Lady of Lourdes
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Today, Lourdes is one of the world's most important pilgrimage sites. The sanctuary includes:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The Grotto:</strong> The actual site of the apparitions</li>
                <li><strong>The Basilicas:</strong> Three magnificent basilicas built above the grotto</li>
                <li><strong>The Baths:</strong> Where pilgrims bathe in the miraculous spring water</li>
                <li><strong>The Torchlight Procession:</strong> Daily evening procession with candles</li>
                <li><strong>The Way of the Cross:</strong> Life-size stations in the hills above the grotto</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Each year, over 6 million pilgrims visit Lourdes from around the world. Many come seeking physical healing, but all come seeking spiritual renewal and Mary's intercession.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Lourdes Spirituality
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The spirituality of Lourdes emphasizes several key elements:
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Prayer for the Sick
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Lourdes teaches us to pray for the sick and to offer our own suffering for their healing. The International Mass for the Sick is celebrated daily at Lourdes.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Value of Suffering
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Bernadette's own life of suffering teaches that suffering united to Christ's suffering has redemptive value. Many pilgrims find healing not in physical cure but in accepting their suffering with Christ.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Marian Intercession
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Lourdes demonstrates Mary's powerful intercession. The countless healings and conversions at Lourdes testify to Mary's maternal care for her children.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Lourdes Water: Understanding the Miraculous
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The water from Lourdes is not magical - it's sacramental. Its power comes from God's grace working through Mary's intercession. The Church teaches that:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>The water is a sign of God's healing power</li>
                <li>Healing depends on God's will, not the water itself</li>
                <li>Faith and prayer are essential components of healing</li>
                <li>Not everyone who drinks or bathes in the water is healed</li>
                <li>Spiritual healing is often more important than physical healing</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Lourdes in the Modern World
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Lourdes remains relevant today because it speaks to universal human needs:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Hope for the sick:</strong> In a world of suffering, Lourdes offers hope</li>
                <li><strong>Marian devotion:</strong> It strengthens devotion to Mary as mother</li>
                <li><strong>Prayer power:</strong> It demonstrates the power of prayer</li>
                <li><strong>Community support:</strong> Pilgrims find support and solidarity</li>
                <li><strong>Spiritual renewal:</strong> Many experience conversion and renewal</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Visiting Lourdes: A Pilgrim's Guide
              </h2>
              <p className="text-text leading-relaxed mb-6">
                For those planning to visit Lourdes:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Best time to visit:</strong> Spring and fall are less crowded</li>
                <li><strong>What to bring:</strong> Comfortable walking shoes, rosary, water bottle</li>
                <li><strong>Key activities:</strong> Attend Mass, visit the baths, join the procession</li>
                <li><strong>Spiritual preparation:</strong> Pray and learn about Bernadette's story</li>
                <li><strong>Accessibility:</strong> Lourdes is very accessible for disabled pilgrims</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Feast of Our Lady of Lourdes
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church celebrates the feast of Our Lady of Lourdes on February 11, the anniversary of the first apparition. This day is also designated as the World Day of the Sick, established by Pope John Paul II in 1992.
              </p>
              <p className="text-text leading-relaxed mb-6">
                On this day, Catholics around the world are encouraged to pray for the sick, reflect on the meaning of suffering, and seek Mary's intercession for those who are ill.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Common Lourdes Devotions
              </h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Lourdes Prayer</h3>
                <p className="text-text leading-relaxed italic">
                  "O ever immaculate Virgin, Mother of Mercy, health of the sick, refuge of sinners, comforter of the afflicted, you know my wants, my troubles, my sufferings. Deign to cast upon me a look of mercy. By appearing in the Grotto of Lourdes, you were pleased to make it a privileged sanctuary, whence you dispense your favors, and already many sufferers have obtained the cure of their infirmities, both spiritual and physical. I come, therefore, with complete confidence to implore your maternal intercession. Obtain for me, O loving Mother, this special favor: [mention your intention]. Amen."
                </p>
              </div>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Bernadette's Prayer</h3>
                <p className="text-text leading-relaxed italic">
                  "O my God, I love you with all my heart, with all my soul, and with all my strength. I love you because you are infinitely good and worthy of being loved. I love you because you are my Father and my Creator. I love you because you are my Savior and my Redeemer. I love you because you are my sanctifier and my final end. I love you above all things and for your own sake. Grant that I may always love you more and more, and that I may never cease to love you. Amen."
                </p>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Prayer for the Sick</h3>
                <p className="text-text leading-relaxed italic">
                  "Lord Jesus Christ, you bore our infirmities and carried our sorrows. Look with compassion on those who are sick. Grant them healing of body, mind, and spirit. Restore them to health and enable them to serve you with renewed strength. Through the intercession of Our Lady of Lourdes, grant them the grace to accept their suffering in union with your own. Amen."
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "I am the Immaculate Conception." - Our Lady of Lourdes to St. Bernadette, March 25, 1858
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "I do not ask for miracles, nor for visions, nor for special revelations. I am content with the ordinary grace of faith and love." - St. Bernadette Soubirous
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="our-lady-of-lourdes-guide" />

            <BlogFAQ faqs={[
              {
                question: "Are the Lourdes apparitions approved by the Catholic Church?",
                answer: "Yes. The Bishop of Tarbes approved the apparitions in 1862. The Church recognizes Lourdes as an authentic Marian apparition site with miraculous healings."
              },
              {
                question: "How many official miracles have been recognized at Lourdes?",
                answer: "As of 2024, the Lourdes Medical Bureau has recognized 70 medically inexplicable cures. Thousands more have reported healings, but only those meeting strict criteria are officially recognized."
              },
              {
                question: "What is the Immaculate Conception?",
                answer: "The Immaculate Conception means Mary was conceived without original sin by a special grace of God, in anticipation of her role as Mother of God. This was defined as dogma by Pope Pius IX in 1854."
              },
              {
                question: "Can anyone visit Lourdes?",
                answer: "Yes. Lourdes welcomes pilgrims of all faiths and backgrounds. The sanctuary is accessible year-round, with special attention given to sick and disabled pilgrims."
              },
              {
                question: "Is Lourdes water really miraculous?",
                answer: "The water itself is not magical. Its power comes from God's grace working through Mary's intercession. Many experience healing, but physical cure depends on God's will, not the water itself."
              },
              {
                question: "What happened to Bernadette after the apparitions?",
                answer: "Bernadette became a nun and lived a life of prayer and service. She died of tuberculosis in 1879 at age 35. She was canonized in 1933 and is buried in Nevers, France."
              },
              {
                question: "Why is February 11 important?",
                answer: "February 11 is the anniversary of the first apparition and the feast of Our Lady of Lourdes. Pope John Paul II also designated it as the World Day of the Sick."
              },
              {
                question: "Can I get Lourdes water without visiting?",
                answer: "Yes. Lourdes water is available through many Catholic organizations and shrines worldwide. However, the water is a sacramental - its power comes from faith and prayer, not the water itself."
              },
              {
                question: "What should I do if I can't visit Lourdes but want to participate?",
                answer: "You can join in Lourdes spirituality through prayer, especially on February 11. Many parishes celebrate Lourdes devotions, and you can support pilgrimages financially or through prayer."
              },
              {
                question: "How do I pray for healing through Our Lady of Lourdes?",
                answer: "Pray with faith and humility, asking Mary to intercede for your healing. Remember that God's will may include spiritual healing rather than physical cure. Trust in God's plan for you."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Experience the Healing Power of Lourdes
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz to discover how Marian apparitions can deepen your faith and bring healing to your life.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Marian Apparitions Quiz
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
