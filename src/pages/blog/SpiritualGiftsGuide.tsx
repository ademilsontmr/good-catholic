import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flame, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SpiritualGiftsGuide() {
  return (
    <>
      <Helmet>
        <title>Spiritual Gifts: The Complete Catholic Guide to Charisms & How to Discover Yours | Guide Catholic</title>
        <meta name="description" content="What are spiritual gifts? The complete Catholic guide to charisms — the 7 gifts of the Holy Spirit, charismatic gifts, how to discover your gifts, and how to use them for the Church." />
        <meta name="keywords" content="spiritual gifts catholic, gifts of the holy spirit, charisms catholic, how to discover spiritual gifts, spiritual gifts test catholic, charismatic gifts, 7 gifts holy spirit, discerning spiritual gifts" />
        <link rel="canonical" href="https://guidecatholic.com/blog/spiritual-gifts-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Spiritual Gifts: The Complete Catholic Guide to Charisms & How to Discover Yours"
        description="What are spiritual gifts? The complete Catholic guide to charisms — the 7 gifts of the Holy Spirit, charismatic gifts, how to discover your gifts, and how to use them for the Church."
        url="https://guidecatholic.com/blog/spiritual-gifts-guide/"
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
              <span className="text-text">Spiritual Gifts Guide</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Spiritual Life</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 8, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Spiritual Gifts: The Complete Catholic Guide to Charisms & How to Discover Yours
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Every baptized Catholic has received spiritual gifts from the Holy Spirit. This guide explains what they are, the difference between the seven gifts and charismatic gifts, and how to discover and use yours for the glory of God and the good of the Church.
              </p>
            </header>
            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-orange-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Are Spiritual Gifts?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                Spiritual gifts — called <em>charisms</em> in Catholic theology — are special graces given by the Holy Spirit to individuals for the building up of the Church and the sanctification of souls. They are not earned or deserved; they are freely given by God for a purpose beyond the individual recipient. The Catechism of the Catholic Church (CCC 799–801) teaches that charisms are "graces of the Holy Spirit which directly or indirectly benefit the Church, ordered as they are to her building up, to the good of men, and to the needs of the world."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                The Catholic tradition distinguishes between two types of spiritual gifts: the <strong>seven gifts of the Holy Spirit</strong> (given to every baptized person for personal sanctification) and <strong>charismatic gifts</strong> (given to specific individuals for the service of others and the mission of the Church). Both are real, both are important, and both are given by the same Spirit.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Gifts of the Holy Spirit</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                The seven gifts of the Holy Spirit are given to every Catholic at Baptism and strengthened at Confirmation. They are rooted in Isaiah 11:2–3, where the prophet describes the Spirit that will rest upon the Messiah. The Church has always understood these gifts as belonging to every member of the Body of Christ. They are:
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Wisdom</strong> — The gift to see all things from God's perspective, to judge rightly about the things of God, and to find joy in contemplating divine truth. Wisdom is the highest of the seven gifts.
                </li>
                <li>
                  <strong>Understanding</strong> — The gift to penetrate the truths of faith more deeply, to grasp the meaning of Scripture and doctrine, and to see how the mysteries of faith connect.
                </li>
                <li>
                  <strong>Counsel (Right Judgment)</strong> — The gift to know what to do in difficult situations, to discern the right course of action, and to give sound advice to others. It perfects the virtue of prudence.
                </li>
                <li>
                  <strong>Fortitude (Courage)</strong> — The gift to face difficulties, suffering, and persecution for the sake of the faith without fear. It strengthens the will to do what is right even when it is hard.
                </li>
                <li>
                  <strong>Knowledge</strong> — The gift to know created things in their proper relationship to God — to see the world as God sees it, and to recognize what leads to God and what leads away from Him.
                </li>
                <li>
                  <strong>Piety (Reverence)</strong> — The gift of filial devotion to God as Father, reverence for sacred things, and a spirit of worship and prayer. It perfects the virtue of justice toward God.
                </li>
                <li>
                  <strong>Fear of the Lord (Wonder and Awe)</strong> — Not servile fear, but a profound reverence for God's majesty and a deep awareness of His holiness. It is the beginning of wisdom (Proverbs 9:10) and the foundation of the spiritual life.
                </li>
              </ol>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our free assessment and receive a personalized guide to growing in the gifts of the Holy Spirit and your Catholic spiritual life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Charismatic Gifts: Given for the Service of Others</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                In addition to the seven gifts, the New Testament describes a wide range of charismatic gifts — special graces given to individuals for the service of the Church and the world. Saint Paul lists these in 1 Corinthians 12, Romans 12, and Ephesians 4. They include:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Prophecy</strong> — Speaking God's word to build up, encourage, and console the community (1 Cor 14:3)</li>
                <li><strong>Healing</strong> — Praying for the sick and being an instrument of God's healing power</li>
                <li><strong>Teaching</strong> — Explaining the faith clearly and helping others grow in understanding</li>
                <li><strong>Tongues and interpretation of tongues</strong> — Praying or speaking in a language unknown to the speaker, and interpreting such prayer for the community</li>
                <li><strong>Discernment of spirits</strong> — The ability to distinguish between what comes from God, from human nature, or from evil</li>
                <li><strong>Administration (governance)</strong> — The gift of organizing and leading communities for the good of all</li>
                <li><strong>Mercy</strong> — A special sensitivity to those who suffer and a gift for serving them with compassion</li>
                <li><strong>Exhortation</strong> — The gift of encouraging and motivating others to live the faith more fully</li>
                <li><strong>Giving</strong> — A special generosity and wisdom in using material resources for God's purposes</li>
                <li><strong>Faith</strong> — An extraordinary trust in God that moves mountains and inspires others</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Catechism Teaches About Charisms</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                The Catechism (CCC 799–801) is clear that charisms are real gifts of the Holy Spirit, not to be dismissed or ignored. "Whether extraordinary or simple and humble, charisms are graces of the Holy Spirit which directly or indirectly benefit the Church, ordered as they are to her building up, to the good of men, and to the needs of the world." At the same time, the Catechism warns that charisms must be discerned: "It is for the Church's pastors to pass judgment on the authenticity and proper use of charisms, not certainly to extinguish the Spirit, but to test all things and hold fast to what is good" (CCC 801, citing 1 Thess 5:12, 19–21).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                The Catholic Charismatic Renewal, which began in 1967 at Duquesne University in Pittsburgh, has brought renewed attention to charismatic gifts within the Catholic Church. Popes Paul VI, John Paul II, Benedict XVI, and Francis have all affirmed the Charismatic Renewal as a gift to the Church, while also emphasizing the need for proper discernment and integration with the sacramental life of the Church.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Discover Your Spiritual Gifts</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                Discovering your spiritual gifts is not primarily about taking a test — it is about prayer, service, and discernment in community. Here are the steps the Catholic tradition recommends:
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Pray for the Holy Spirit.</strong> Ask the Holy Spirit to reveal your gifts and to use you for His purposes. The gifts are given for service, so ask to be used. A simple prayer: "Come, Holy Spirit. Show me the gifts You have given me and how to use them for Your glory."
                </li>
                <li>
                  <strong>Serve in the Church.</strong> Gifts are discovered in action. Volunteer in your parish — in religious education, music ministry, hospitality, outreach to the poor, or wherever there is a need. Notice where you feel most alive, most effective, and most at peace.
                </li>
                <li>
                  <strong>Ask others.</strong> The community often sees our gifts before we do. Ask trusted friends, your pastor, or a spiritual director what gifts they see in you. The Body of Christ recognizes its own members' gifts.
                </li>
                <li>
                  <strong>Seek spiritual direction.</strong> A good spiritual director can help you discern your gifts, distinguish them from natural talents, and understand how God is calling you to use them.
                </li>
                <li>
                  <strong>Study the tradition.</strong> Read about the saints and how they used their gifts. Read Saint Paul's letters on charisms (1 Corinthians 12–14, Romans 12, Ephesians 4). Study the Catechism's teaching on the gifts of the Holy Spirit (CCC 1830–1832, 799–801).
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">An Important Distinction</h3>
                <p className="text-text text-sm leading-relaxed">
                  Spiritual gifts are not the same as natural talents, though God can use both. A natural talent is an ability you were born with; a spiritual gift is a grace given by the Holy Spirit for the building up of the Church. Someone may have a natural talent for music and also a spiritual gift of worship — or they may have a natural talent for organization and a spiritual gift of administration. God uses both, but they are distinct. The key mark of a spiritual gift is that it builds up the Body of Christ and gives glory to God, not to the person who exercises it.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Gifts and Fruits: What Is the Difference?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                The gifts of the Holy Spirit are different from the fruits of the Holy Spirit. The gifts are capacities given for service and sanctification; the fruits are the results of living in the Spirit — the signs that the Holy Spirit is active in a person's life. Saint Paul lists twelve fruits in Galatians 5:22–23: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control (the Latin tradition adds generosity, modesty, and chastity). The fruits are the evidence that the gifts are being used well and that the person is growing in holiness.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Using Your Gifts for the Church</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-gifts-guide">
                Saint Paul is emphatic: spiritual gifts are not given for personal benefit but for the common good. "To each is given the manifestation of the Spirit for the common good" (1 Corinthians 12:7). A gift that is hoarded or used for self-promotion is being misused. The proper use of spiritual gifts is always ordered toward the building up of the Body of Christ, the evangelization of the world, and the glory of God. If you have discovered your gifts, the question is not "what can I get from this?" but "how can I serve?"
              </LinkedText>

            </div>

            <BlogFAQ faqs={[
              {
                question: "What are the 7 gifts of the Holy Spirit?",
                answer: "The seven gifts of the Holy Spirit are: Wisdom, Understanding, Counsel (Right Judgment), Fortitude (Courage), Knowledge, Piety (Reverence), and Fear of the Lord (Wonder and Awe). They are rooted in Isaiah 11:2–3 and are given to every Catholic at Baptism, strengthened at Confirmation. They perfect the virtues and help the soul respond to God's grace."
              },
              {
                question: "What is the difference between the 7 gifts and charismatic gifts?",
                answer: "The seven gifts of the Holy Spirit are given to every baptized person for personal sanctification and are listed in Isaiah 11:2–3. Charismatic gifts (charisms) are special graces given to specific individuals for the service of others and the mission of the Church — such as prophecy, healing, teaching, and discernment of spirits. Both come from the same Holy Spirit."
              },
              {
                question: "How do I discover my spiritual gifts?",
                answer: "Spiritual gifts are discovered through prayer, service, and discernment in community. Pray for the Holy Spirit to reveal your gifts. Serve in your parish and notice where you feel most alive and effective. Ask trusted friends or a spiritual director what gifts they see in you. Gifts are confirmed by the community and by the fruits they produce."
              },
              {
                question: "Are spiritual gifts the same as natural talents?",
                answer: "No. Natural talents are abilities you were born with; spiritual gifts are graces given by the Holy Spirit for the building up of the Church. God can use both, but they are distinct. The key mark of a spiritual gift is that it builds up the Body of Christ and gives glory to God, not to the person who exercises it."
              },
              {
                question: "What does the Catholic Church teach about charismatic gifts like tongues and healing?",
                answer: "The Catechism (CCC 799–801) affirms that charismatic gifts are real gifts of the Holy Spirit, given for the good of the Church. They must be discerned by the Church's pastors. The Catholic Charismatic Renewal, which began in 1967, has been affirmed by multiple popes as a gift to the Church, while emphasizing the need for proper discernment and integration with the sacramental life."
              }
            ]} />

            <RelatedArticles currentSlug="spiritual-gifts-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our free assessment and receive a personalized guide to growing in the gifts of the Holy Spirit and your Catholic spiritual life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
