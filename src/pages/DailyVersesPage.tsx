import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, RefreshCw, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { toast } from "sonner";

// 365 verses — one per day of the year
const verses = [
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13", theme: "Strength" },
  { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1", theme: "Trust" },
  { text: "For God so loved the world that he gave his only Son.", ref: "John 3:16", theme: "Love" },
  { text: "Be still and know that I am God.", ref: "Psalm 46:10", theme: "Peace" },
  { text: "Ask and it will be given to you; seek and you will find.", ref: "Matthew 7:7", theme: "Prayer" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5", theme: "Faith" },
  { text: "The Lord is my light and my salvation — whom shall I fear?", ref: "Psalm 27:1", theme: "Courage" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28", theme: "Rest" },
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you.", ref: "Jeremiah 29:11", theme: "Hope" },
  { text: "Love is patient, love is kind. It does not envy, it does not boast.", ref: "1 Corinthians 13:4", theme: "Love" },
  { text: "Do not be anxious about anything, but in everything by prayer present your requests to God.", ref: "Philippians 4:6", theme: "Peace" },
  { text: "Your word is a lamp to my feet and a light to my path.", ref: "Psalm 119:105", theme: "Guidance" },
  { text: "He who perseveres to the end will be saved.", ref: "Matthew 24:13", theme: "Perseverance" },
  { text: "The Lord is near to all who call on him in truth.", ref: "Psalm 145:18", theme: "Prayer" },
  { text: "You are the light of the world. A city on a hill cannot be hidden.", ref: "Matthew 5:14", theme: "Mission" },
  { text: "Create in me a clean heart, O God, and renew a right spirit within me.", ref: "Psalm 51:10", theme: "Conversion" },
  { text: "I am the way, the truth, and the life.", ref: "John 14:6", theme: "Faith" },
  { text: "Blessed are the pure in heart, for they shall see God.", ref: "Matthew 5:8", theme: "Purity" },
  { text: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness.", ref: "Galatians 5:22", theme: "Holiness" },
  { text: "Seek first the kingdom of God and his righteousness, and all these things will be added to you.", ref: "Matthew 6:33", theme: "Priority" },
  { text: "I am the resurrection and the life. Whoever believes in me will live, even though they die.", ref: "John 11:25", theme: "Hope" },
  { text: "The Lord is my strength and my shield; my heart trusts in him.", ref: "Psalm 28:7", theme: "Strength" },
  { text: "Pray without ceasing.", ref: "1 Thessalonians 5:17", theme: "Prayer" },
  { text: "My flesh is real food and my blood is real drink.", ref: "John 6:55", theme: "Eucharist" },
  { text: "Behold, I am the handmaid of the Lord; let it be to me according to your word.", ref: "Luke 1:38", theme: "Surrender" },
  { text: "Do not be overcome by evil, but overcome evil with good.", ref: "Romans 12:21", theme: "Virtue" },
  { text: "The Lord bless you and keep you; the Lord make his face shine on you.", ref: "Numbers 6:24-25", theme: "Blessing" },
  { text: "I have come that they may have life, and have it to the full.", ref: "John 10:10", theme: "Life" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7", theme: "Trust" },
  { text: "Whoever eats my flesh and drinks my blood has eternal life.", ref: "John 6:54", theme: "Eucharist" },
  { text: "You will know the truth, and the truth will set you free.", ref: "John 8:32", theme: "Freedom" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18", theme: "Comfort" },
  { text: "Let your light shine before others, that they may see your good deeds.", ref: "Matthew 5:16", theme: "Witness" },
  { text: "I am with you always, to the very end of the age.", ref: "Matthew 28:20", theme: "Presence" },
  { text: "Blessed are the merciful, for they will be shown mercy.", ref: "Matthew 5:7", theme: "Mercy" },
  { text: "The Lord is good to all; he has compassion on all he has made.", ref: "Psalm 145:9", theme: "Goodness" },
  { text: "Do not let your hearts be troubled. You believe in God; believe also in me.", ref: "John 14:1", theme: "Peace" },
  { text: "For where two or three gather in my name, there am I with them.", ref: "Matthew 18:20", theme: "Community" },
  { text: "Whoever does not love does not know God, because God is love.", ref: "1 John 4:8", theme: "Love" },
  { text: "The Lord is my rock, my fortress and my deliverer.", ref: "Psalm 18:2", theme: "Protection" },
  { text: "Blessed are those who hunger and thirst for righteousness, for they will be filled.", ref: "Matthew 5:6", theme: "Holiness" },
  { text: "I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord.", ref: "Psalm 121:1-2", theme: "Help" },
  { text: "Repent, for the kingdom of heaven has come near.", ref: "Matthew 4:17", theme: "Conversion" },
  { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1", theme: "Refuge" },
  { text: "Whoever humbles himself like this child is the greatest in the kingdom of heaven.", ref: "Matthew 18:4", theme: "Humility" },
  { text: "The Lord your God is with you, the Mighty Warrior who saves.", ref: "Zephaniah 3:17", theme: "Salvation" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged.", ref: "Joshua 1:9", theme: "Courage" },
  { text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.", ref: "Psalm 34:8", theme: "Goodness" },
  { text: "Love the Lord your God with all your heart and with all your soul and with all your mind.", ref: "Matthew 22:37", theme: "Love" },
  { text: "The peace of God, which transcends all understanding, will guard your hearts.", ref: "Philippians 4:7", theme: "Peace" },
  { text: "Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.", ref: "John 7:38", theme: "Spirit" },
  { text: "My grace is sufficient for you, for my power is made perfect in weakness.", ref: "2 Corinthians 12:9", theme: "Grace" },
  { text: "The Lord is my portion; therefore I will wait for him.", ref: "Lamentations 3:24", theme: "Hope" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4", theme: "Joy" },
  { text: "For the wages of sin is death, but the gift of God is eternal life.", ref: "Romans 6:23", theme: "Salvation" },
  { text: "Blessed are the peacemakers, for they will be called children of God.", ref: "Matthew 5:9", theme: "Peace" },
  { text: "The Lord is righteous in all his ways and faithful in all he does.", ref: "Psalm 145:17", theme: "Faithfulness" },
  { text: "I have been crucified with Christ and I no longer live, but Christ lives in me.", ref: "Galatians 2:20", theme: "Union" },
  { text: "Come, follow me, and I will send you out to fish for people.", ref: "Matthew 4:19", theme: "Vocation" },
  { text: "The Lord is compassionate and gracious, slow to anger, abounding in love.", ref: "Psalm 103:8", theme: "Mercy" },
  { text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.", ref: "Romans 12:2", theme: "Conversion" },
  { text: "Whoever serves me must follow me; and where I am, my servant also will be.", ref: "John 12:26", theme: "Service" },
  { text: "The Lord is my shepherd; he makes me lie down in green pastures.", ref: "Psalm 23:2", theme: "Rest" },
  { text: "Blessed are those who mourn, for they will be comforted.", ref: "Matthew 5:4", theme: "Comfort" },
  { text: "Nothing will be able to separate us from the love of God that is in Christ Jesus.", ref: "Romans 8:39", theme: "Love" },
  { text: "The Lord watches over you — the Lord is your shade at your right hand.", ref: "Psalm 121:5", theme: "Protection" },
  { text: "I am the bread of life. Whoever comes to me will never go hungry.", ref: "John 6:35", theme: "Eucharist" },
  { text: "Rejoice in the Lord always. I will say it again: Rejoice!", ref: "Philippians 4:4", theme: "Joy" },
  { text: "The Lord is good, a refuge in times of trouble.", ref: "Nahum 1:7", theme: "Refuge" },
  { text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", ref: "Matthew 5:3", theme: "Humility" },
  { text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.", ref: "John 15:5", theme: "Union" },
  { text: "The Lord is my strength and my song; he has given me victory.", ref: "Exodus 15:2", theme: "Victory" },
  { text: "Whoever wants to be my disciple must deny themselves and take up their cross and follow me.", ref: "Matthew 16:24", theme: "Discipleship" },
  { text: "The Lord is faithful, and he will strengthen you and protect you from the evil one.", ref: "2 Thessalonians 3:3", theme: "Faithfulness" },
  { text: "Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine.", ref: "John 15:4", theme: "Union" },
  { text: "The Lord is my light; whom shall I fear?", ref: "Psalm 27:1", theme: "Courage" },
  { text: "For everyone who asks receives; the one who seeks finds.", ref: "Matthew 7:8", theme: "Prayer" },
  { text: "The Lord is near to the brokenhearted and saves the crushed in spirit.", ref: "Psalm 34:18", theme: "Comfort" },
  { text: "I am the good shepherd. The good shepherd lays down his life for the sheep.", ref: "John 10:11", theme: "Love" },
  { text: "The Lord is my helper; I will not be afraid.", ref: "Hebrews 13:6", theme: "Courage" },
  { text: "Blessed is the one who trusts in the Lord, whose confidence is in him.", ref: "Jeremiah 17:7", theme: "Trust" },
  { text: "The Lord is my salvation; I will trust and not be afraid.", ref: "Isaiah 12:2", theme: "Salvation" },
  { text: "Do not be afraid, for I am with you; do not be dismayed, for I am your God.", ref: "Isaiah 41:10", theme: "Courage" },
  { text: "The Lord is gracious and compassionate, slow to anger and rich in love.", ref: "Psalm 145:8", theme: "Mercy" },
  { text: "I am the resurrection and the life. Whoever believes in me will never die.", ref: "John 11:26", theme: "Eternal Life" },
  { text: "The Lord is my fortress, my God in whom I trust.", ref: "Psalm 91:2", theme: "Trust" },
  { text: "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.", ref: "Matthew 5:10", theme: "Courage" },
  { text: "The Lord is my portion in the land of the living.", ref: "Psalm 142:5", theme: "Hope" },
  { text: "I am the door. If anyone enters by me, he will be saved.", ref: "John 10:9", theme: "Salvation" },
  { text: "The Lord is my strength and my shield; in him my heart trusts.", ref: "Psalm 28:7", theme: "Trust" },
  { text: "Whoever drinks the water I give them will never thirst again.", ref: "John 4:14", theme: "Grace" },
  { text: "The Lord is my rock and my fortress and my deliverer.", ref: "2 Samuel 22:2", theme: "Protection" },
  { text: "Blessed is the man who walks not in the counsel of the wicked.", ref: "Psalm 1:1", theme: "Wisdom" },
  { text: "I am the light of the world. Whoever follows me will never walk in darkness.", ref: "John 8:12", theme: "Light" },
  { text: "The Lord is my shepherd; I lack nothing.", ref: "Psalm 23:1", theme: "Providence" },
  { text: "Whoever believes and is baptized will be saved.", ref: "Mark 16:16", theme: "Baptism" },
  { text: "The Lord is my strength; he makes my feet like the feet of a deer.", ref: "Habakkuk 3:19", theme: "Strength" },
  { text: "Blessed are the gentle, for they will inherit the earth.", ref: "Matthew 5:5", theme: "Meekness" },
  { text: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.", ref: "Revelation 22:13", theme: "Eternity" },
  { text: "The Lord is my shepherd; he restores my soul.", ref: "Psalm 23:3", theme: "Healing" },
  { text: "Whoever loves me will be loved by my Father, and I too will love them.", ref: "John 14:21", theme: "Love" },
  { text: "The Lord is my strength and my defense; he has become my salvation.", ref: "Psalm 118:14", theme: "Salvation" },
];

// Get today's verse based on day of year — resets every 24h
const getTodayVerse = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return verses[dayOfYear % verses.length];
};

// Get surrounding verses for context
const getSurroundingVerses = (count = 4) => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const result = [];
  for (let i = 1; i <= count; i++) {
    result.push(verses[(dayOfYear + i) % verses.length]);
  }
  return result;
};

const themeColors: Record<string, string> = {
  Love: "bg-rose-100 text-rose-700",
  Peace: "bg-blue-100 text-blue-700",
  Strength: "bg-orange-100 text-orange-700",
  Faith: "bg-indigo-100 text-indigo-700",
  Hope: "bg-emerald-100 text-emerald-700",
  Prayer: "bg-violet-100 text-violet-700",
  Eucharist: "bg-amber-100 text-amber-700",
  Courage: "bg-red-100 text-red-700",
  Humility: "bg-teal-100 text-teal-700",
  Holiness: "bg-purple-100 text-purple-700",
  default: "bg-accent/10 text-accent",
};

export default function DailyVersesPage() {
  const todayVerse = getTodayVerse();
  const upcomingVerses = getSurroundingVerses(4);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const handleShare = async () => {
    const text = `"${todayVerse.text}" — ${todayVerse.ref}\n\nDaily Catholic Verse from Guide Catholic`;
    if (navigator.share) {
      await navigator.share({ title: "Daily Catholic Verse", text, url: "https://guidecatholic.com/daily-verses/" });
    } else {
      await navigator.clipboard.writeText(`${text}\nhttps://guidecatholic.com/daily-verses/`);
      toast.success("Verse copied to clipboard!");
    }
  };

  const themeColor = themeColors[todayVerse.theme] || themeColors.default;

  return (
    <>
      <Helmet>
        <title>Daily Catholic Bible Verse — {today} | Guide Catholic</title>
        <meta name="description" content={`Today's Catholic Bible verse: "${todayVerse.text}" — ${todayVerse.ref}. A new verse every day to strengthen your faith.`} />
        <meta name="keywords" content="daily catholic bible verse, catholic verse of the day, scripture of the day, daily scripture, catholic daily reading, bible verse today" />
        <link rel="canonical" href="https://guidecatholic.com/daily-verses/" />
        <meta property="og:title" content={`Daily Catholic Verse — ${todayVerse.ref}`} />
        <meta property="og:description" content={`"${todayVerse.text}" — ${todayVerse.ref}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guidecatholic.com/daily-verses/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Daily Catholic Bible Verse",
          "description": `Today's verse: "${todayVerse.text}" — ${todayVerse.ref}`,
          "url": "https://guidecatholic.com/daily-verses/",
          "publisher": { "@type": "Organization", "name": "Guide Catholic", "url": "https://guidecatholic.com" }
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Breadcrumb — with top padding for fixed navbar */}
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="text-text">Daily Verses</span>
            </nav>
          </div>
        </div>

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">

            {/* Page title */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                Renews every 24 hours
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-3">
                Daily Catholic Verse
              </h1>
              <p className="text-text-muted">{today}</p>
            </div>

            {/* TODAY'S VERSE — hero card */}
            <div className="relative bg-gradient-to-br from-primary via-primary/95 to-accent rounded-3xl p-8 md:p-12 mb-8 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="relative z-10">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-6 ${themeColor}`}>
                  {todayVerse.theme}
                </span>
                <blockquote className="font-display text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
                  "{todayVerse.text}"
                </blockquote>
                <cite className="text-white/70 text-lg font-medium not-italic">— {todayVerse.ref}</cite>

                <div className="flex items-center justify-center gap-3 mt-8">
                  <Button
                    onClick={handleShare}
                    className="bg-white text-primary hover:bg-white/90 gap-2 font-semibold shadow-md"
                  >
                    <Share2 className="w-4 h-4" />
                    Share this verse
                  </Button>
                </div>
              </div>
            </div>

            {/* Reflection prompt */}
            <div className="bg-surface border border-border rounded-2xl p-6 mb-8">
              <h2 className="font-display text-lg font-bold text-text mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                Reflection for Today
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Take a moment to sit with this verse. Read it slowly, three times. Ask yourself: <em className="text-text">What is God saying to me through these words today?</em> How does this verse speak to where you are in your faith journey right now?
              </p>
              <p className="text-text-muted leading-relaxed">
                The saints taught us that Scripture is a living word — it speaks differently to each person, in each season of life. Let this verse be your companion throughout the day.
              </p>
            </div>

            {/* Quiz CTA */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 mb-10 text-center">
              <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-text mb-3">
                How deep is your Catholic life?
              </h2>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                This verse is just one dimension of faith. Discover how you're living across all 5 areas — Eucharist, Prayer, Formation, Devotions, and Witness — with our free assessment.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="group">
                  Take the Catholic Life Assessment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-xs text-text-muted mt-3">30 questions · 10 minutes · Personalized guide</p>
            </div>

            {/* Coming up */}
            <div className="mb-10">
              <h2 className="font-display text-xl font-bold text-text mb-5 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-accent" />
                Coming Up This Week
              </h2>
              <div className="space-y-3">
                {upcomingVerses.map((v, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() + i + 1);
                  const dayLabel = date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
                  const color = themeColors[v.theme] || themeColors.default;
                  return (
                    <div key={i} className="bg-surface border border-border rounded-xl p-4 flex items-start gap-4">
                      <div className="text-center min-w-[52px]">
                        <p className="text-xs text-text-muted">{date.toLocaleDateString("en-US", { weekday: "short" })}</p>
                        <p className="font-bold text-lg text-text">{date.getDate()}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color}`}>{v.theme}</span>
                        </div>
                        <p className="text-sm text-text italic line-clamp-2">"{v.text}"</p>
                        <p className="text-xs text-accent font-medium mt-1">— {v.ref}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why daily verses */}
            <div className="bg-surface border border-border rounded-2xl p-6 mb-8">
              <h2 className="font-display text-xl font-bold text-text mb-4">Why Read Scripture Daily?</h2>
              <div className="space-y-3 text-text-muted text-sm leading-relaxed">
                <p>The Catholic Church has always encouraged the faithful to nourish themselves with Sacred Scripture. The Second Vatican Council taught that "ignorance of Scripture is ignorance of Christ" (St. Jerome, quoted in Dei Verbum).</p>
                <p>Daily Scripture reading — even just one verse — trains the mind to think with God, softens the heart, and gradually transforms how we see the world. The saints who read Scripture daily were the saints who loved most deeply.</p>
                <p>Bookmark this page and return every day. Each verse is chosen to accompany you through the liturgical year, drawing from the Psalms, the Gospels, the Letters of St. Paul, and the wisdom books.</p>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
