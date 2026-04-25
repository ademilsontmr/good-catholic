import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Sparkles, Star, Heart, Church, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function LiturgyOfTheHoursGuide() {
  return (
    <>
      <Helmet>
        <title>Liturgy of the Hours: Complete Guide for Laity - Divine Office Explained | Guide Catholic</title>
        <meta name="description" content="Learn how to pray the Liturgy of the Hours (Divine Office) as a lay Catholic. Complete guide to morning prayer, evening prayer, compline, and integrating this ancient prayer into daily life." />
        <meta name="keywords" content="liturgy of the hours, divine office, morning prayer lauds, evening prayer vespers, compline night prayer, catholic prayer book, breviary guide, praying the hours catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/liturgy-of-the-hours-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Liturgy of the Hours: Complete Guide for Laity - Divine Office Explained"
          description="Learn how to pray the Liturgy of the Hours (Divine Office) as a lay Catholic. Complete guide to morning prayer, evening prayer, compline, and integrating this ancient prayer into daily life."
          url="https://guidecatholic.com/blog/liturgy-of-the-hours-guide/"
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
              <span className="text-text">Liturgy of the Hours Guide</span>
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
                  Prayer & Devotion
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  22 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Liturgy of the Hours: Ancient Prayer for Modern Catholics
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Liturgy of the Hours is the Church's ancient prayer that sanctifies time itself. Once reserved for clergy and religious, this beautiful prayer is now accessible to all Catholics who want to deepen their relationship with God.
              </p>
            </header>

            <div className="aspect-video bg-purple-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <BookOpen className="w-24 h-24 text-purple-400/20 absolute top-4 right-4" />
              <Clock className="w-32 h-32 text-purple-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Imagine joining Christians across the world in prayer at the same times each day, sanctifying the hours with psalms, Scripture, and intercessions. This is the Liturgy of the Hours - the official prayer of the Church that makes our entire day a prayer.
              </LinkedText>
              
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What is the Liturgy of the Hours?
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The Liturgy of the Hours, also called the Divine Office or Breviary, is the official prayer of the Catholic Church. It consists of psalms, canticles, Scripture readings, and intercessions prayed at specific times throughout the day.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The General Instruction of the Liturgy of the Hours explains: "The Liturgy of the Hours is meant to become the prayer of the whole People of God... It sanctifies the whole day and makes it holy."
              </LinkedText>
              
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Biblical Foundation
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The practice of praying at specific times has biblical roots:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Psalm 119:164:</strong> "Seven times a day I praise you for your righteous ordinances"</li>
                <li><strong>Daniel 6:10:</strong> Daniel prayed three times a day</li>
                <li><strong>Acts 3:1:</strong> Peter and John went to the temple at the hour of prayer</li>
                <li><strong>Acts 10:9:</strong> Peter went up on the housetop to pray at the sixth hour</li>
              </ul>
              
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Structure of the Divine Office
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The Liturgy of the Hours consists of several "hours" or prayer times. Each hour follows a similar structure:
              </LinkedText>
              
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Church className="w-6 h-6 text-purple-600" />
                  The Seven Main Hours
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text mb-2">Office of Readings (Matins)</h4>
                    <p className="text-sm text-text-muted">4:00 AM - The longest hour with two psalms, long reading, and Gospel reading</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Morning Prayer (Lauds)</h4>
                    <p className="text-sm text-text-muted">6:00 AM - Praising God at dawn, psalm of praise, Benedictus</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Daytime Prayer (Terce, Sext, None)</h4>
                    <p className="text-sm text-text-muted">9:00 AM, 12:00 PM, 3:00 PM - Short prayers for workday</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Evening Prayer (Vespers)</h4>
                    <p className="text-sm text-text-muted">6:00 PM - Thanksgiving for day's blessings, Magnificat</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Night Prayer (Compline)</h4>
                    <p className="text-sm text-text-muted">9:00 PM - Commending ourselves to God, Nunc Dimittis</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Getting Started as a Lay Person
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The Second Vatican Council opened the Liturgy of the Hours to the laity. Here's how to begin:
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Step 1: Choose Your Resources
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Traditional Breviary:</strong> Four-volume set with complete Liturgy of the Hours</li>
                <li><strong>Christian Prayer:</strong> One-volume edition for laity with main hours</li>
                <li><strong>Divine Office Apps:</strong> iBreviary, Divine Office, Universalis</li>
                <li><strong>Online Resources:</strong> DivineOffice.org, Liturgy of the Hours websites</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Step 2: Start with the Main Hours
              </h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Most lay Catholics begin with Morning Prayer (Lauds) and Evening Prayer (Vespers). These are the "hinges" of the Liturgy of the Hours and contain the essential elements.
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Step 3: Learn the Pattern
              </h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Each hour follows this basic pattern:
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Opening Verse:</strong> "God, come to my assistance; Lord, make haste to help me"</li>
                <li><strong>Hymn:</strong> Optional hymn appropriate to the hour</li>
                <li><strong>Psalmody:</strong> Two or more psalms with antiphons</li>
                <li><strong>Reading:</strong> Scripture reading with responsory</li>
                <li><strong>Gospel Canticle:</strong> Benedictus (morning) or Magnificat (evening)</li>
                <li><strong>Intercessions:</strong> Prayers for the Church and world</li>
                <li><strong>Lord's Prayer:</strong> Concluding prayer</li>
              </ol>

              <QuizCTA
                title="Ready to sanctify your day?"
                description="Take our assessment to discover which Liturgy of the Hours schedule works best for your lifestyle."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Morning Prayer (Lauds): Sanctifying the Dawn
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Morning Prayer, called Lauds from the Latin "laudare" (to praise), is the prayer of praise at dawn. It's the perfect way to begin your day with God.
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Key Elements of Lauds
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Psalms of Praise:</strong> Typically Psalms 148-150, 92, 99, or 62</li>
                <li><strong>Benedictus:</strong> Zechariah's canticle (Luke 1:68-79)</li>
                <li><strong>Intercessions:</strong> Prayers for the day's work and challenges</li>
                <li><strong>Thanksgiving:</strong> Gratitude for the new day</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Practical Tips for Morning Prayer
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Pray before starting your day's activities</li>
                <li>Use a prayer book or app for guidance</li>
                <li>Start with just 10-15 minutes</li>
                <li>Focus on the psalms rather than perfect recitation</li>
                <li>Make it a consistent habit</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Evening Prayer (Vespers): Thanksgiving for the Day
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Evening Prayer, called Vespers, is the Church's evening prayer of thanksgiving. It's a beautiful way to reflect on God's blessings throughout the day.
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Key Elements of Vespers
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Evening Psalms:</strong> Psalms appropriate for evening (109, 110, 111, etc.)</li>
                <li><strong>Magnificat:</strong> Mary's canticle (Luke 1:46-55)</li>
                <li><strong>Thanksgiving:</strong> Gratitude for the day's blessings</li>
                <li><strong>Intercessions:</strong> Prayers for the evening and night</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Practical Tips for Evening Prayer
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Pray before dinner or after work</li>
                <li>Light a candle to create a prayerful atmosphere</li>
                <li>Include a brief examination of conscience</li>
                <li>Pray for those who work night shifts</li>
                <li>End with gratitude for God's presence throughout the day</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Night Prayer (Compline): Commending the Day to God
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Compline, from the Latin "completorium" (completion), is the final prayer of the day. It's a beautiful, simple prayer that prepares us for peaceful sleep.
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Why Compline is Special
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Simplicity:</strong> Short, simple, and deeply peaceful</li>
                <li><strong>Protection:</strong> Prayers for protection through the night</li>
                <li><strong>Trust:</strong> Commending ourselves to God's care</li>
                <li><strong>Reflection:</strong> Brief examination of conscience</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                The Nunc Dimittis
              </h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The heart of Compline is the Nunc Dimittis (Luke 2:29-32), Simeon's canticle: "Now, Master, you may let your servant go in peace, according to your word; for my eyes have seen your salvation."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Integrating the Liturgy into Daily Life
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The beauty of the Liturgy of the Hours is how it integrates with daily life:
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                For Working Professionals
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Morning Prayer:</strong> Before work or during commute</li>
                <li><strong>Midday Prayer (Sext):</strong> Lunch break prayer</li>
                <li><strong>Evening Prayer:</strong> After work or before dinner</li>
                <li><strong>Night Prayer:</strong> Before bedtime</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                For Stay-at-Home Parents
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Morning Prayer:</strong> Before children wake up</li>
                <li><strong>Midday Prayer:</strong> During nap time or quiet moment</li>
                <li><strong>Evening Prayer:</strong> After dinner cleanup</li>
                <li><strong>Night Prayer:</strong> After children are in bed</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                For Students
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Morning Prayer:</strong> Before classes</li>
                <li><strong>Midday Prayer:</strong> Between classes</li>
                <li><strong>Evening Prayer:</strong> After homework</li>
                <li><strong>Night Prayer:</strong> Before sleep</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Psalms: The Heart of the Divine Office
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The psalms are the heart of the Liturgy of the Hours. They express every human emotion and situation, making them perfect for every moment of life.
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Understanding the Psalms
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Don't worry about perfect recitation:</strong> Focus on the meaning</li>
                <li><strong>Use antiphons:</strong> They help focus the psalm's theme</li>
                <li><strong>Personalize the psalms:</strong> Make them your own prayers</li>
                <li><strong>Learn the pattern:</strong> Each psalm has a place in the liturgical year</li>
              </ul>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Favorite Psalms for Different Times
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Morning:</strong> Psalms 63, 95, 100 - praise and trust</li>
                <li><strong>Midday:</strong> Psalms 23, 91 - protection and guidance</li>
                <li><strong>Evening:</strong> Psalms 141, 143 - evening prayers</li>
                <li><strong>Night:</strong> Psalms 4, 16, 91 - trust and protection</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Liturgical Year in the Divine Office
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The Liturgy of the Hours follows the liturgical year, with specific psalms and readings for each season:
              </LinkedText>
              
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Advent:</strong> Psalms of waiting and preparation</li>
                <li><strong>Christmas:</strong> Psalms of joy and celebration</li>
                <li><strong>Lent:</strong> Psalms of penance and conversion</li>
                <li><strong>Easter:</strong> Psalms of resurrection and new life</li>
                <li><strong>Ordinary Time:</strong> Psalms of discipleship and growth</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Common Challenges and Solutions
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "I Don't Have Time"
              </h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Start small: Even 5 minutes of Morning Prayer makes a difference. Gradually add Evening Prayer. Remember that sanctifying time is more important than filling time.
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "The Psalms Don't Speak to Me"
              </h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Read the psalm slowly, focusing on one verse. Use a commentary or reflection. Remember that the psalms express every human emotion - you'll find your experience there.
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "I Keep Forgetting"
              </h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Set phone reminders. Link the prayer to an existing habit (like morning coffee). Use an app with notifications. Don't give up - consistency builds habit.
              </LinkedText>
              
              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                "I Feel Like I'm Just Reading Words"
              </h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Slow down. Pause after each psalm. Make the words your own prayer. Remember that the Holy Spirit prays with and through you.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Spiritual Benefits
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Those who pray the Liturgy of the Hours experience profound spiritual benefits:
              </LinkedText>
              
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Sanctification of Time:</strong> Every hour becomes sacred</li>
                <li><strong>Deeper Prayer Life:</strong> Regular structured prayer</li>
                <li><strong>Scripture Immersion:</strong> Daily exposure to God's Word</li>
                <li><strong>Church Unity:</strong> Praying with the universal Church</li>
                <li><strong>Spiritual Discipline:</strong> Regular prayer habit</li>
                <li><strong>Peace and Trust:</strong> Commending each day to God</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Resources for Getting Started
              </h2>
              
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Recommended Books</h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>The Liturgy of the Hours:</strong> Official four-volume breviary</li>
                  <li><strong>Christian Prayer:</strong> One-volume edition for laity</li>
                  <li><strong>Shorter Christian Prayer:</strong> Essential hours only</li>
                  <li><strong>Praying the Liturgy of the Hours:</strong> Guide books for beginners</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Digital Resources</h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>iBreviary:</strong> Free app with complete Liturgy of the Hours</li>
                  <li><strong>Divine Office:</strong> Popular app with audio options</li>
                  <li><strong>Universalis:</strong> Website and app with daily prayers</li>
                  <li><strong>DivineOffice.org:</strong> Online prayers and resources</li>
                </ul>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Communities and Support</h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>Local Prayer Groups:</strong> Many parishes have Divine Office groups</li>
                  <li><strong>Online Communities:</strong> Facebook groups and forums</li>
                  <li><strong>Spiritual Direction:</strong> Guidance from experienced pray-ers</li>
                  <li><strong>Workshops and Courses:</strong> Learning opportunities</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Simple Way to Begin Today
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Ready to start? Here's a simple way to begin:
              </LinkedText>
              
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Choose Morning Prayer:</strong> Start with just Lauds</li>
                <li><strong>Set a Time:</strong> 10-15 minutes before your day begins</li>
                <li><strong>Use a Guide:</strong> App or prayer book</li>
                <li><strong>Focus on the Psalms:</strong> Don't worry about perfect recitation</li>
                <li><strong>Add Evening Prayer:</strong> When ready, add Vespers</li>
                <li><strong>Be Patient:</strong> It takes time to develop the habit</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Liturgy of the Hours is the prayer of the whole People of God... It sanctifies the whole day and makes it holy."
                </p>
                <p className="text-text-muted text-center mt-2">
                  - General Instruction of the Liturgy of the Hours
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Prayer is the key of heaven and faith is the key of prayer."
                </p>
                <p className="text-text-muted text-center mt-2">
                  - St. John Chrysostom
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Do I have to pray all seven hours?",
                answer: "No. The Church encourages the laity to pray at least Morning Prayer (Lauds) and Evening Prayer (Vespers). These are the 'hinges' of the Divine Office. Start with these and add others as you feel called."
              },
              {
                question: "Can I pray the Liturgy of the Hours in English?",
                answer: "Yes. While traditionally prayed in Latin, the Liturgy of the Hours is available in all languages. Most English-speaking Catholics use approved translations like the Grail Psalms."
              },
              {
                question: "What if I miss a day?",
                answer: "Don't worry about perfection. The Liturgy of the Hours is about sanctifying your life, not about perfect attendance. Simply return to prayer when you can."
              },
              {
                question: "Do I need special permission to pray the Divine Office?",
                answer: "No. The Second Vatican Council opened the Liturgy of the Hours to all the faithful. You can pray it without special permission."
              },
              {
                question: "How long does each hour take?",
                answer: "It varies. Morning Prayer and Evening Prayer take about 15-20 minutes. Night Prayer takes about 5-10 minutes. The Office of Readings takes 30-45 minutes."
              },
              {
                question: "What if I don't understand the psalms?",
                answer: "That's normal. Focus on the overall meaning rather than every verse. Use commentaries or reflections. Remember that the Holy Spirit prays with and through you."
              },
              {
                question: "Can I adapt the prayers?",
                answer: "The official prayers should be used as written, but you can add personal intentions. The structure is fixed, but the prayer is personal."
              },
              {
                question: "Is it okay to pray alone?",
                answer: "Yes. The Liturgy of the Hours can be prayed alone or in community. Many people pray it alone, joining spiritually with the Church worldwide."
              },
              {
                question: "What's the difference between the breviary and Christian Prayer?",
                answer: "The breviary contains all seven hours. Christian Prayer contains the main hours (Lauds, Vespers, Compline) and is designed for lay Catholics."
              },
              {
                question: "How do I handle the psalms that seem negative?",
                answer: "Remember that the psalms express all human emotions. Even psalms of lament end in trust. They give voice to our struggles while pointing to God's faithfulness."
              }
            ]} />

<RelatedArticles currentSlug="liturgy-of-the-hours-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Sanctify Your Day with Ancient Prayer
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment to create your personalized Liturgy of the Hours schedule.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Create Your Prayer Schedule
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
