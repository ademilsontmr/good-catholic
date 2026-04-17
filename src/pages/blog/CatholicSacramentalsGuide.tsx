import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Sparkles, Star, Heart, Church, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicSacramentalsGuide() {
  return (
    <>
      <Helmet>
        <title>Catholic Sacramentals: Complete Guide to Holy Water, Rosaries, Scapulars & More | Guide Catholic</title>
        <meta name="description" content="Discover the power of Catholic sacramentals. Learn about holy water, blessed objects, scapulars, medals, and how these sacred signs bring grace into daily life." />
        <meta name="keywords" content="catholic sacramentals, holy water, brown scapular, miraculous medal, blessed objects, catholic medals, rosary beads, blessed candles, sacramentals meaning" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-sacramentals-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Catholic Sacramentals: Complete Guide to Holy Water, Rosaries, Scapulars & More"
          description="Discover the power of Catholic sacramentals. Learn about holy water, blessed objects, scapulars, medals, and how these sacred signs bring grace into daily life."
          url="https://guidecatholic.com/blog/catholic-sacramentals-guide/"
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
              <span className="text-text">Catholic Sacramentals Guide</span>
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
                  Catholic Devotions
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
                Catholic Sacramentals: Sacred Signs of Grace in Daily Life
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                From holy water at the church door to the rosary beads in your pocket, sacramentals surround Catholic life with tangible signs of God's grace. These sacred objects and actions prepare us to receive grace and dispose us to cooperate with it.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Star className="w-24 h-24 text-amber-400/20 absolute top-4 right-4" />
              <Cross className="w-32 h-32 text-amber-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church teaches that God works through material things because we are material beings. Sacramentals are sacred signs that prepare us to receive grace and dispose us to cooperate with it. Unlike sacraments, which actually confer grace, sacramentals dispose us to receive grace and help us grow in holiness.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Understanding Sacramentals: What They Are and How They Work
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church teaches that sacramentals "do not confer the grace of the Holy Spirit in the way that sacraments do, but by the Church's prayer, they prepare us to receive grace and dispose us to cooperate with it" (CCC 1667).
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Three Types of Sacramentals
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Blessings:</strong> Invocations of God's blessing on persons, places, or objects</li>
                <li><strong>Objects:</strong> Physical items blessed for spiritual benefit</li>
                <li><strong>Actions:</strong> Certain gestures or practices with spiritual significance</li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Church className="w-6 h-6 text-amber-600" />
                  How Sacramentals Work
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text mb-2">Preparation for Grace</h4>
                    <p className="text-sm text-text-muted">Sacramentals prepare our souls to receive God's grace by disposing us toward spiritual things.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Cooperation with Grace</h4>
                    <p className="text-sm text-text-muted">They help us cooperate with the grace we receive through sacraments and prayer.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Spiritual Protection</h4>
                    <p className="text-sm text-text-muted">Many sacramentals offer spiritual protection against evil and temptation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Remembrance of Faith</h4>
                    <p className="text-sm text-text-muted">They serve as constant reminders of God's presence and our Catholic faith.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Holy Water: The Most Common Sacramental
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Holy water is water blessed by a priest with salt, recalling the baptismal waters and the waters that flowed from Christ's side. It's the most frequently used sacramental in Catholic life.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Uses of Holy Water
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Blessing oneself:</strong> Making the Sign of the Cross with holy water upon entering church</li>
                <li><strong>Blessing homes:</strong> Blessing each room and family members</li>
                <li><strong>Spiritual protection:</strong> Using against temptation or evil influences</li>
                <li><strong>Sick and dying:</strong> Blessing the sick and those near death</li>
                <li><strong>Exorcism:</strong> Used in minor exorcisms and deliverance prayers</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Prayer for Blessing Holy Water
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The blessing prayer asks God to bless the water "that it may become a fruitful source of salvation" and "that those who are sprinkled with it may be delivered from all diseases, and that the devil may have no power over those who have been signed with this holy water."
              </p>

              <QuizCTA
                title="How well do you understand Catholic sacramentals?"
                description="Test your knowledge of holy water, scapulars, medals, and other sacramentals. Discover which sacramentals best support your spiritual journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Brown Scapular: Mary's Protection
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Brown Scapular of Our Lady of Mount Carmel is one of the most popular sacramentals. It consists of two small pieces of brown wool cloth connected by strings, worn over the shoulders.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Scapular Promise
              </h3>
              <p className="text-text leading-relaxed mb-6">
                According to tradition, Our Lady appeared to St. Simon Stock in 1251 and promised special protection to those who wear the scapular devoutly: "Whosoever dies in this habit shall not suffer eternal fire."
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Conditions for the Scapular Promise
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Enrollment:</strong> Must be properly enrolled in the scapular by a priest</li>
                <li><strong>Wearing:</strong> Must be worn continuously</li>
                <li><strong>Chastity:</strong> Must live chastely according to one's state in life</li>
                <li><strong>Prayer:</strong> Should pray the Rosary when possible</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Miraculous Medal: Mary's Gift to the World
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1830, the Blessed Virgin appeared to St. Catherine Labouré and requested a medal to be made according to the design shown to her. The medal became known as "miraculous" due to the many graces and conversions attributed to it.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Medal's Design
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The front shows Mary standing on a globe with her hands extended, crushing a serpent under her feet. The back shows an M with a cross above it and the hearts of Jesus and Mary.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Promises of the Medal
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Great graces to those who wear it with faith</li>
                <li>Protection for those who wear it with confidence</li>
                <li>Special protection at the hour of death</li>
                <li>Conversion of those who don't yet know Mary</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Catholic Medals: Wearable Faith
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic medals serve as constant reminders of faith and sources of spiritual protection. Popular medals include:
              </p>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Popular Catholic Medals</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text">St. Benedict Medal</h4>
                    <p className="text-sm text-text-muted">Powerful against evil and temptation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">St. Michael Medal</h4>
                    <p className="text-sm text-text-muted">Protection against spiritual attacks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">St. Joseph Medal</h4>
                    <p className="text-sm text-text-muted">Patron of workers and families</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">St. Christopher Medal</h4>
                    <p className="text-sm text-text-muted">Protection for travelers</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Rosary: A Prayer and Sacramental
              </h2>
              <p className="text-text leading-relaxed mb-6">
                While primarily a prayer, the rosary beads themselves are sacramentals. Blessed rosary beads carry special graces for those who pray with them.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Blessing Rosary Beads
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Having rosary beads blessed by a priest makes them sacramentals. The blessing asks that "whoever devoutly uses these beads may obtain abundant fruits from this holy prayer."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Blessed Candles: Light in Darkness
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Blessed candles symbolize Christ as the Light of the World. They're used in many Catholic devotions and ceremonies.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Uses of Blessed Candles
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Candlemas:</strong> Blessed on February 2 for use in the home</li>
                <li><strong>Advent Wreath:</strong> Blessed candles for Advent prayers</li>
                <li><strong>Sick calls:</strong> Blessed candles for the sick and dying</li>
                <li><strong>Prayer:</strong> Lighting blessed candles during prayer</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Other Important Sacramentals
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Blessed Salt
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Blessed salt recalls Christ's words: "You are the salt of the earth." It's used for protection and blessing homes.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Blessed Palms
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Palm branches blessed on Palm Sunday are sacramentals that remind us of Christ's triumphal entry into Jerusalem.
              </p>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Blessed Ashes
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Ashes blessed on Ash Wednesday are sacramentals that remind us of mortality and the need for repentance.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Blessings as Sacramentals
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church's blessings are sacramentals that invoke God's favor. Common blessings include:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>House blessings:</strong> Blessing homes and families</li>
                <li><strong>Vehicle blessings:</strong> Blessing cars and other vehicles</li>
                <li><strong>Workplace blessings:</strong> Blessing places of business</li>
                <li><strong>Object blessings:</strong> Blessing religious articles</li>
                <li><strong>Person blessings:</strong> Blessing individuals for special occasions</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Use Sacramentals Properly
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church teaches proper use of sacramentals:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Faith:</strong> Use sacramentals with faith in God's power</li>
                <li><strong>Respect:</strong> Treat sacramentals with reverence</li>
                <li><strong>Blessing:</strong> Ensure sacramentals are properly blessed</li>
                <li><strong>Prayer:</strong> Accompany sacramental use with prayer</li>
                <li><strong>Disposal:</strong> Dispose of old sacramentals properly (burn or bury)</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Common Misconceptions About Sacramentals
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church addresses several misunderstandings about sacramentals:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Not magic:</strong> Sacramentals work through faith, not automatically</li>
                <li><strong>Not superstition:</strong> They are based on Church teaching, not folk beliefs</li>
                <li><strong>Not necessary for salvation:</strong> They help but aren't required for salvation</li>
                <li><strong>Not replacement for sacraments:</strong> They complement, don't replace sacraments</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sacramentals in Daily Catholic Life
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Integrating sacramentals into daily life:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Morning:</strong> Sign of the Cross with holy water</li>
                <li><strong>Throughout day:</strong> Wear scapular or medal</li>
                <li><strong>Prayer time:</strong> Use blessed rosary beads</li>
                <li><strong>Evening:</strong> Light blessed candle during prayer</li>
                <li><strong>Sunday:</strong> Use blessed candles at home</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Spiritual Benefits of Sacramentals
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Sacramentals offer numerous spiritual benefits:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Spiritual protection:</strong> Against temptation and evil</li>
                <li><strong>Grace preparation:</strong> Disposing souls to receive grace</li>
                <li><strong>Faith strengthening:</strong> Reminders of God's presence</li>
                <li><strong>Virtue development:</strong> Encouraging holiness</li>
                <li><strong>Community building:</strong> Shared devotions and practices</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Sacramentals do not confer the grace of the Holy Spirit in the way that sacraments do, but by the Church's prayer, they prepare us to receive grace and dispose us to cooperate with it." - Catechism of the Catholic Church 1667
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The use of sacramentals prepares us to receive grace and disposes us to cooperate with it." - Catechism of the Catholic Church 1670
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholic-sacramentals-guide" />

            <BlogFAQ faqs={[
              {
                question: "What's the difference between sacraments and sacramentals?",
                answer: "Sacraments actually confer grace (baptism, Eucharist, etc.). Sacramentals prepare us to receive grace and help us cooperate with it. Sacramentals were instituted by the Church; sacraments were instituted by Christ."
              },
              {
                question: "Do sacramentals work automatically?",
                answer: "No. Sacramentals work through faith and proper disposition. They are not magic charms but sacred signs that dispose us to receive God's grace when used with faith and prayer."
              },
              {
                question: "Can I bless my own sacramentals?",
                answer: "Only priests and deacons can give the official Church blessing that makes objects sacramentals. Lay people can bless objects but not in the same way that makes them sacramentals."
              },
              {
                question: "What should I do with old sacramentals?",
                answer: "Old sacramentals should be disposed of reverently. The preferred method is burning or burying them. Never throw sacramentals in the regular trash."
              },
              {
                question: "Do I need to wear the scapular to get its benefits?",
                answer: "The scapular must be worn continuously to receive its benefits. However, if you remove it for a good reason (like swimming), you're not deprived of its benefits during that time."
              },
              {
                question: "Can non-Catholics use sacramentals?",
                answer: "Yes, non-Catholics can use sacramentals, though they may not understand their full significance. Many non-Catholics wear miraculous medals or use holy water."
              },
              {
                question: "Are sacramentals superstitious?",
                answer: "No. Sacramentals are based on Church teaching and Scripture. They work through faith in God's power, not through any inherent power in the objects themselves."
              },
              {
                question: "How do I get sacramentals blessed?",
                answer: "Take sacramentals to a priest or deacon and ask for a blessing. Most priests are happy to bless rosaries, medals, scapulars, and other religious articles."
              },
              {
                question: "Can I make my own sacramentals?",
                answer: "You can make religious objects, but they become sacramentals only when blessed by a priest. The Church has approved specific designs for sacramentals like the scapular and miraculous medal."
              },
              {
                question: "Do sacramentals replace prayer?",
                answer: "No. Sacramentals should accompany prayer, not replace it. They are tools to help us pray better and live our faith more fully."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover Your Spiritual Tools
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz to learn which sacramentals best support your spiritual journey.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Sacramentals Quiz
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
