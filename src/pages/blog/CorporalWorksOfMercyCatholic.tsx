import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function CorporalWorksOfMercyCatholic() {
  return (
    <>
      <Helmet>
        <title>Corporal Works of Mercy: Catholic List & How to Live Them (USA) | Guide Catholic</title>
        <meta name="description" content="The seven corporal works of mercy explained, from feeding the hungry to visiting the sick and burying the dead, and practical ways to live mercy today." />
        <meta name="keywords" content="corporal works of mercy, 7 corporal works of mercy catholic, works of mercy list, feed the hungry catholic, visit the sick" />
        <link rel="canonical" href="https://guidecatholic.com/blog/corporal-works-of-mercy-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Corporal Works of Mercy: Catholic List & How to Live Them (USA)" description="The seven corporal works of mercy explained, from feeding the hungry to visiting the sick and burying the dead, and practical ways to live mercy today." url="https://guidecatholic.com/blog/corporal-works-of-mercy-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Corporal Works of Mercy", url: "https://guidecatholic.com/blog/corporal-works-of-mercy-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Corporal Works of Mercy</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Spiritual Life</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />17 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Corporal Works of Mercy: Catholic List & How to Live Them (USA)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Jesus identifies himself with the hungry, the stranger, the sick, and the imprisoned (Matthew 25). The Church names seven corporal works of mercy so believers can meet Christ in concrete human need.</p>
            </header>
            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10"><HandHeart className="w-24 h-24 text-orange-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The seven corporal works of mercy are charitable actions that meet the bodily needs of others — feeding the hungry, sheltering the homeless, visiting the sick, and burying the dead. Jesus identifies himself with these acts in Matthew 25:31–46, and the Catholic Church has taught them for centuries.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Corporal Works of Mercy</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-8">
                <li><strong>Feed the hungry</strong></li>
                <li><strong>Give drink to the thirsty</strong></li>
                <li><strong>Clothe the naked</strong></li>
                <li><strong>Shelter the homeless</strong></li>
                <li><strong>Visit the sick</strong></li>
                <li><strong>Visit the imprisoned</strong></li>
                <li><strong>Bury the dead</strong></li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Biblical Foundation: Matthew 25</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corporal-works-of-mercy-catholic">At the Last Judgment, Christ says: &quot;Whatever you did for one of these least brothers of mine, you did for me&quot; (Matthew 25:40). Hungry, thirsty, stranger, naked, sick, imprisoned — each condition appears in the list. Burying the dead was added from Tobit and long Jewish-Christian tradition honoring the body. Pope Francis frequently returns to this passage; American bishops cite it in statements on poverty, immigration, and criminal justice reform.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Each Work Explained with U.S. Examples</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>Feed the hungry / Give drink</strong> — Parish food pantries, St. Vincent de Paul conferences, soup kitchens, and Catholic Charities meal programs serve millions annually. SNAP advocacy and fair wages extend mercy structurally.</li>
                <li><strong>Clothe the naked</strong> — Winter coat drives, school uniform closets, and disaster relief through organizations like Catholic Relief Services.</li>
                <li><strong>Shelter the homeless</strong> — Catholic Worker houses, diocesan shelters, and refugee resettlement through Migration and Refugee Services.</li>
                <li><strong>Visit the sick</strong> — Extraordinary Ministers of Holy Communion to hospitals and nursing homes; Stephen Ministry and parish bereavement teams.</li>
                <li><strong>Visit the imprisoned</strong> — Prison ministry, Kairos retreats, letter-writing to inmates, and support for re-entry programs.</li>
                <li><strong>Bury the dead</strong> — Attending funerals, parish bereavement meals, helping families afford Catholic burial, and praying for the dead.</li>
              </ul>

              <QuizCTA title="Put mercy into action" description="Take the Catholic life assessment for practical steps on charity, parish life, and spiritual growth." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the List of Seven Took Shape</h2>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corporal-works-of-mercy-catholic">Matthew 25 names six works. Christian writers added burial of the dead from the Book of Tobit, where Tobit risks his life to bury fellow Israelites left unburied by the king (Tobit 1:17–19). By the Middle Ages the list of seven was standard catechesis. St. Thomas Aquinas discusses it in the Summa Theologiae (II-II, question 32) and records a Latin memory verse that ran visito, poto, cibo, redimo, tego, colligo, condo: I visit, give drink, feed, ransom, clothe, take in, and bury.</LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corporal-works-of-mercy-catholic">Notice that the medieval form included ransoming captives, a real concern when Christians were held for ransom around the Mediterranean. Religious orders such as the Trinitarians and Mercedarians were founded around 1200 largely for that work. Modern catechisms usually phrase it as visiting the imprisoned, which keeps Christ&apos;s own words, I was in prison and you visited me.</LinkedText>

              <p className="text-text leading-relaxed mb-6">Pope Francis made the works of mercy a theme of the Extraordinary Jubilee of Mercy (December 2015 to November 2016). In the bull announcing it, <em>Misericordiae Vultus</em>, he asked Catholics to rediscover the corporal and spiritual works and recalled that we will be judged by them. The Catechism lists both sets and calls giving alms to the poor one of the chief witnesses of fraternal charity (CCC 2447).</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Corporal vs. Spiritual Works of Mercy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corporal-works-of-mercy-catholic">Corporal works address the body; spiritual works address the soul — instructing, counseling, forgiving, praying. Catholics need both. Feeding a neighbor without caring for his eternal good is incomplete; catechizing without relieving hunger rings hollow. The Catechism treats mercy as integral to faith (CCC 2447).</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Ideas for Parishes &amp; Families in the U.S.</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Volunteer monthly at a Catholic Charities or local food pantry — consistency beats one-time heroics.</li>
                <li>Join a parish ministry to homebound or nursing-home residents; bring Communion if trained.</li>
                <li>Support refugee resettlement or shelter networks in your diocese.</li>
                <li>Attend funerals even when you did not know the deceased well — the family sees the Church&apos;s presence.</li>
                <li>During Lent, map one corporal work per week with children using a simple checklist.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture Behind Each Work</h2>

              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Feeding and giving drink:</strong> Isaiah 58:7 describes the fast God desires as sharing bread with the hungry; Jesus promises that even a cup of cold water given to a disciple will not lose its reward (Matthew 10:42).</li>
                <li><strong>Clothing:</strong> James 2:15–16 warns against wishing someone well while ignoring that they lack clothing and food.</li>
                <li><strong>Sheltering:</strong> Hebrews 13:2 urges hospitality to strangers, noting that some have entertained angels without knowing it.</li>
                <li><strong>Visiting the sick:</strong> James 5:14 tells the sick to call the elders of the Church to pray over them, the root of the Anointing of the Sick.</li>
                <li><strong>Visiting prisoners:</strong> Hebrews 13:3 asks believers to remember prisoners as if imprisoned with them.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saints and Founders Who Lived Them</h2>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corporal-works-of-mercy-catholic">St. Martin of Tours, a fourth-century Roman soldier, cut his military cloak in half for a freezing beggar, and tradition says Christ appeared to him that night wearing the half he had given. In 1833 Blessed Frédéric Ozanam, a Paris university student, helped found the Society of St. Vincent de Paul, whose U.S. conferences still visit families in their homes. In 1933 Dorothy Day and Peter Maurin began the Catholic Worker movement in New York, opening houses of hospitality that practiced the works daily. St. Damien of Molokai cared for people with leprosy in Hawaii until he contracted the disease himself and died in 1889.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mercy and Justice</h2>
              <p className="text-text leading-relaxed mb-6">Personal charity and social justice belong together in Catholic teaching. Voting, advocacy, and fair business practices can address root causes of hunger and homelessness while soup kitchens meet immediate need. The Church does not ask you to choose — it asks for a coherent life of love in truth.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "What are the corporal works of mercy?", answer: "They are seven charitable actions toward the bodily needs of others, drawn from Matthew 25 and centuries of Catholic tradition." },
              { question: "How are they different from spiritual works of mercy?", answer: "Corporal works address physical needs (food, clothing, shelter, etc.). Spiritual works address the soul (counsel, teach, bear wrongs patiently, etc.)." },
              { question: "Are corporal works of mercy required?", answer: "They flow from love of neighbor and are strongly encouraged; caring for the poor is a constitutive part of the Gospel." },
              { question: "Can I fulfill them without joining a ministry?", answer: "Yes. Family generosity, helping a neighbor, donating goods, and visiting a sick relative are genuine works of mercy." },
              { question: "Where does burying the dead come from?", answer: "Honoring the dead appears in Tobit and early Christian practice. Catholic funerals witness to resurrection hope and human dignity." },
              { question: "Do corporal works of mercy earn salvation?", answer: "No. We are saved by grace through faith. Works of mercy are fruit of that grace and union with Christ who identifies with the poor." },
              { question: "Why did older lists say 'ransom the captive'?", answer: "Medieval Christians faced real captivity and ransom around the Mediterranean, and orders like the Trinitarians and Mercedarians formed to free captives. Modern lists say 'visit the imprisoned,' echoing Matthew 25:36." },
              { question: "Where else in Scripture do the works of mercy appear?", answer: "Beyond Matthew 25, see Isaiah 58:6–7, Tobit 1:17–19 and 4:16, James 2:14–17, and Hebrews 13:1–3. Each roots care for the body in love of God." },
              { question: "Is giving money enough, or must I serve in person?", answer: "Donations are a real work of mercy, and the Catechism praises almsgiving (CCC 2447). Personal contact adds something money cannot: presence, dignity, and friendship with those Christ calls the least." },
            ]} />
            <RelatedArticles currentSlug="corporal-works-of-mercy-catholic" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
