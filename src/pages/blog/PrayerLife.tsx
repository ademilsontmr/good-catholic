import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function PrayerLife() {
  return (
    <>
      <Helmet>
        <title>The Life of Prayer: How to Cultivate Intimacy with God | Guide Catholic</title>
        <meta name="description" content="Discover how to develop a deep and constant prayer life. Practical and spiritual tips to strengthen your friendship with God daily." />
        <meta name="keywords" content="how to have a prayer life, how to pray better, intimacy with god, daily catholic prayer, types of prayer, how to pray every day" />
        <link rel="canonical" href="https://guidecatholic.com/blog/prayer-life/" />
      </Helmet>
        <ArticleSchema
          title="The Life of Prayer: How to Cultivate Intimacy with God"
          description="Discover how to develop a deep and constant prayer life. Practical and spiritual tips to strengthen your friendship with God daily."
          url="https://guidecatholic.com/blog/prayer-life/"
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
              <span className="text-text">The Life of Prayer</span>
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
                  Spirituality
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  December 29, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Life of Prayer: How to Cultivate Intimacy with God
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Prayer is not just a duty, but a necessity of the soul. Learn how to transform your dialogue with God into a source of life and peace.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Saint Teresa of Ávila defined prayer as "a relationship of friendship, being alone often with Him who we know loves us." For Catholics, prayer is the oxygen of the soul. Without it, faith weakens, hope falters, and charity grows cold. However, many find it difficult to maintain a constant routine of dialogue with the Creator. The good news is that God does not demand perfection – He demands only sincerity and perseverance.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Prayer is not a complicated technique reserved for monks and saints. It is simply talking to God as you would talk to a dear friend. Jesus taught us: "When you pray, do not be like the hypocrites... But when you pray, go into your room, close the door and pray to your Father in secret" (Mt 6:5-6). Prayer is an intimate, personal encounter, where God knows us completely and loves us despite everything.
              </p>

              <QuizCTA
                title="How is your connection with God?"
                description="Prayer is the oxygen of the soul and the relationship of friendship with the Creator. Take our quiz and discover what level your spiritual journey is at and how to grow in intimacy with the Lord."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Is Prayer Essential?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Prayer tunes us to God's will. It does not serve to convince God to do what we want – He already knows what we need before we even ask. Prayer transforms us. It prepares us to receive what God wants to give us. Through prayer, we receive the graces necessary to face temptations, discern confusing paths, and find meaning in suffering.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Saint Paul exhorts us: "Pray without ceasing" (1 Thess 5:17). This does not mean being on your knees all the time, but keeping your heart turned toward God in all circumstances. When you work with the intention of pleasing God, you are praying. When you suffer with patience, you are praying. When you love your neighbor, you are praying. Your entire life can become a prayer.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Different Types of Prayer
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Prayer of Adoration
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Recognizing God's greatness and our smallness before Him. It is simply saying: "Lord, You are God and I am nothing. But what a privilege to be created by You!"
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Prayer of Thanksgiving
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Thanking God for everything – for obvious joys, but also for difficulties that make us grow. Saint Paul says: "Give thanks in all circumstances" (1 Thess 5:18).
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Prayer of Petition
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Asking God for what we need. Jesus encouraged us: "Ask and it will be given to you" (Mt 7:7). Do not be afraid to ask – God wants to bless us.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Prayer of Intercession
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Praying for others. It is a powerful act of charity. When you pray for someone, you are placing that person in God's arms.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Practical Tips to Get Started
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Set Aside a Time and Place
              </h3>
              <p className="text-text leading-relaxed mb-6">
                God is everywhere, but our mind is easily distracted. Having a "prayer corner" with an image, a candle, or the Bible helps to focus. Similarly, choosing a fixed time — whether upon waking or before sleeping — creates the necessary habit. Start with just 10 minutes. Consistency is more important than duration.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Use Vocal Prayers and Silence
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Begin with the prayers the Church has taught us: Our Father, Hail Mary, Glory Be. They are the solid foundation. But do not stop there. Reserve moments of silence to hear what God speaks to your heart through inspirations and inner peace. Often, God speaks to us not in words, but in feelings of peace, clarity, or love.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Do Not Give Up in Dryness
              </h3>
              <p className="text-text leading-relaxed mb-6">
                There will be days when prayer seems arid, tasteless, as if God were far away. These are the most precious days! When you pray without feeling consolation, you are loving God for Himself, not for the feelings He gives us. Saint John of the Cross called this the "dark night" – it is when faith grows most.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Mental Prayer and Meditation
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Christian meditation consists of reflecting on the truths of faith or passages of Scripture. When meditating on Christ's Passion, for example, we not only recall a historical fact, but unite ourselves to Jesus' love for us, allowing that love to transform our attitudes. You can meditate on a mystery of the Rosary, a Bible verse, or a teaching of the Church. The important thing is to let the truth penetrate your heart.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Contemplative Prayer
              </h2>
              <p className="text-text leading-relaxed mb-6">
                This is the peak of prayer life – simply being in God's presence without words, without thoughts, just loving. Saint Teresa of Ávila described it as "being alone with Him who we know loves us." Not everyone reaches this level, but everyone can aspire to it. Begin with vocal prayer and meditation; contemplation will come as a gift from God.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Prayer is the best weapon we have; it is a key that opens the heart of God."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Saint Padre Pio of Pietrelcina
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "To pray is to love. And to love is to pray."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Saint Teresa of Calcutta
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="prayer-life" />

            <BlogFAQ faqs={[
              {
                question: "How much time should I spend in prayer each day?",
                answer: "The Church does not set a minimum, but spiritual directors commonly recommend at least 15–30 minutes of mental prayer daily, plus the Liturgy of the Hours if possible. Quality matters more than quantity — even 10 focused minutes surpasses an hour of distracted prayer."
              },
              {
                question: "What is the difference between vocal prayer and mental prayer?",
                answer: "Vocal prayer uses set words (Our Father, Hail Mary, Rosary). Mental prayer is a personal, interior conversation with God — meditation and contemplation. Both are essential. St. Teresa of Avila defined mental prayer as 'a close sharing between friends.'"
              },
              {
                question: "What should I do when I feel nothing during prayer?",
                answer: "Spiritual dryness is normal and even spiritually valuable. St. John of the Cross called it the 'dark night of the soul.' Continue praying faithfully even without consolation. God is purifying your love, making it less dependent on feelings and more rooted in faith."
              },
              {
                question: "Is the Liturgy of the Hours (Divine Office) only for priests and religious?",
                answer: "No! The Liturgy of the Hours is the official prayer of the whole Church. Laypeople are encouraged to pray it, especially Morning Prayer (Lauds) and Evening Prayer (Vespers). Many apps make it accessible for everyone."
              },
              {
                question: "How do I build a consistent prayer habit?",
                answer: "Set a fixed time and place each day. Start small — even 5 minutes consistently beats 1 hour occasionally. Use a prayer journal, a rosary, or a prayer book to help focus. Link prayer to an existing habit (morning coffee, before bed). Accountability with a prayer partner also helps."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                How is your connection with God?
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and discover what level your spiritual journey is at and how you can grow even more in faith.
              </p>
              <Link to="/quiz">
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
