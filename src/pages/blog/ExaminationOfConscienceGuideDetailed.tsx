import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
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
import { DailyPrayersHubLink } from "@/components/blog/DailyPrayerExtras";
import { TopicSeriesNav } from "@/components/blog/TopicSeriesNav";

export default function ExaminationOfConscienceGuideDetailed() {
  return (
    <>
      <Helmet>
        <title>Examination of Conscience by the Ten Commandments for Adults | Guide Catholic</title>
        <meta name="description" content="A full Catholic examination of conscience for adults, question by question through the Ten Commandments, the precepts of the Church and sins of omission." />
        <meta name="keywords" content="examination of conscience ten commandments, examination of conscience for adults, catholic examination of conscience before confession, precepts of the church examination, sins of omission" />
        <link rel="canonical" href="https://guidecatholic.com/blog/examination-of-conscience-before-confession/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Examination of Conscience by the Ten Commandments for Adults"
        description="A full Catholic examination of conscience for adults, question by question through the Ten Commandments, the precepts of the Church and sins of omission."
        url="https://guidecatholic.com/blog/examination-of-conscience-before-confession/"
        datePublished="2026-04-24"
        dateModified="2026-11-19"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Examination of Conscience by the Ten Commandments", url: "https://guidecatholic.com/blog/examination-of-conscience-before-confession/" },
        ]}
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
              <span className="text-text">Examination of Conscience by the Ten Commandments</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Mass & Sacraments</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span>Updated November 19, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />20 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Examination of Conscience by the Ten Commandments for Adults
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                This is the full examination: every commandment, the precepts of the Church, the duties of your state in life and the good left undone, written for adults preparing for Confession. Work through it slowly, in prayer, and note only what you actually need to bring to the priest.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-amber-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Ten Commandments are the Church&apos;s classic map for an adult examination of conscience. Read each question, answer it honestly before God, and write down any serious sin by kind and approximate number, plus the venial sins that weigh on you most.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why the Ten Commandments?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                The Catechism teaches that grave matter is specified by the Ten Commandments (CCC 1858), and it organizes its whole moral section around them. That is why most Catholic examinations follow the same order: the first three commandments cover our duties to God, the remaining seven our duties to our neighbor and to ourselves. Using them keeps the review complete without turning it into an endless inventory.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                The questions below are written for adults: spouses, parents, employees, employers, citizens. Not every question will apply to you. Skip what does not fit your life, and linger where something stirs. A full pass usually takes fifteen to thirty minutes. Find a quiet place, ask the Holy Spirit for light, and keep a pen or a notes app nearby so you can record what you need to confess.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-2">Prayer Before Examination of Conscience</p>
                <p className="text-text italic text-sm leading-relaxed">
                  Come, Holy Spirit, enlighten my mind and heart. Help me to see myself as God sees me — with honesty and without self-deception. Show me the sins I have committed and the good I have failed to do. Give me true sorrow for my sins and a firm purpose to amend my life. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The First Commandment: I am the Lord your God; you shall have no other gods before me</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I deliberately doubted or denied my faith in God or a truth the Church teaches?</li>
                <li>Have I denied being Catholic out of human respect or fear?</li>
                <li>Have I been involved in the occult, fortune-telling, astrology, tarot cards, or New Age practices?</li>
                <li>Have I consulted psychics or mediums?</li>
                <li>Have I placed real trust in horoscopes, charms, or superstitions?</li>
                <li>Have I put anything — money, pleasure, career, a relationship, my phone — before God in my life?</li>
                <li>Have I despaired of God&apos;s mercy, or presumed on it by sinning because I could confess later?</li>
                <li>Have I received Holy Communion while conscious of unconfessed mortal sin?</li>
                <li>Have I neglected prayer for long periods through laziness or indifference?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Second Commandment: You shall not take the name of the Lord your God in vain</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I used God&apos;s name, Jesus&apos;s name, or the names of the saints as a curse or careless exclamation?</li>
                <li>Have I blasphemed — spoken contemptuously of God, the Church, the saints, or sacred things?</li>
                <li>Have I sworn a false oath, or broken a solemn oath or vow made to God?</li>
                <li>Have I made promises to God that I did not keep?</li>
                <li>Have I mocked the faith or sacred things online or in conversation?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Third Commandment: Remember to keep holy the Lord&apos;s Day</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I missed Mass on Sunday or a Holy Day of Obligation without a serious reason (such as illness or caring for someone who needs me)?</li>
                <li>Have I arrived late to Mass or left early through my own fault?</li>
                <li>Have I been deliberately distracted or irreverent at Mass?</li>
                <li>Have I done unnecessary work or shopping on Sunday that kept me or others from worship and rest?</li>
                <li>Have I failed to give time to God and family on Sunday?</li>
                <li>For parents: Have I failed to bring my children to Mass when I could have?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Fourth Commandment: Honor your father and your mother</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I been disrespectful or unkind to my parents, or ignored them?</li>
                <li>Have I neglected my duty to care for elderly or sick parents?</li>
                <li>Have I been disrespectful to legitimate authority — employers, teachers, civil authorities?</li>
                <li>For spouses: Have I neglected, belittled, or been harsh with my husband or wife?</li>
                <li>For parents: Have I neglected my children&apos;s physical, emotional, or spiritual needs?</li>
                <li>For parents: Have I failed to teach my children the faith by word and example?</li>
                <li>For parents: Have I been harsh, unjust, or abusive toward my children?</li>
                <li>As a citizen: Have I neglected to vote, pay just taxes, or contribute to the common good?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Fifth Commandment: You shall not kill</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I physically harmed anyone?</li>
                <li>Have I had an abortion, or encouraged, pressured, or helped someone to have one?</li>
                <li>Have I supported or assisted euthanasia?</li>
                <li>Have I harbored hatred, resentment, or the desire for revenge against anyone?</li>
                <li>Have I refused to forgive someone who has wronged me?</li>
                <li>Have I been cruel or abusive — physically, emotionally, or verbally?</li>
                <li>Have I driven recklessly or after drinking?</li>
                <li>Have I abused alcohol, drugs, or other substances?</li>
                <li>Have I deliberately neglected my own health or put my life at needless risk?</li>
                <li>Have I scandalized others — led them into sin by my words or example?</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6 text-sm" currentSlug="examination-of-conscience-before-confession">
                A pastoral note: if you are struggling with thoughts of suicide or self-harm, that is first of all a wound to be cared for, not simply a sin to be listed. The Catechism recognizes that grave psychological suffering can diminish responsibility (CCC 2282). Tell your confessor, and please also reach out for help today — in the U.S. you can call or text 988.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Sixth and Ninth Commandments: You shall not commit adultery / You shall not covet your neighbor&apos;s wife</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I engaged in sexual activity outside of marriage?</li>
                <li>Have I been unfaithful to my spouse in thought, word, or deed, including emotionally or online?</li>
                <li>Have I viewed pornography?</li>
                <li>Have I engaged in masturbation?</li>
                <li>Have I deliberately entertained impure thoughts or desires?</li>
                <li>Have I used contraception or been sterilized for contraceptive reasons?</li>
                <li>Have I engaged in homosexual acts?</li>
                <li>Have I dressed or acted in a way intended to lead others into lust?</li>
                <li>Have I engaged in sexual texting, flirting, or conversation that I knew was wrong?</li>
                <li>Have I lived with a partner as if married without being married?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seventh and Tenth Commandments: You shall not steal / You shall not covet your neighbor&apos;s goods</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I stolen anything? Have I returned it or made restitution?</li>
                <li>Have I cheated — in business, on taxes, on expense reports, on exams?</li>
                <li>Have I been dishonest in financial dealings or failed to pay debts I could pay?</li>
                <li>For employers: Have I failed to pay a just wage or treat workers fairly?</li>
                <li>For employees: Have I wasted my employer&apos;s time or taken what was not mine?</li>
                <li>Have I damaged or misused other people&apos;s property or shared resources?</li>
                <li>Have I been greedy or materialistic, or envied others&apos; possessions, success, or gifts?</li>
                <li>Have I failed to give to the poor or to the Church according to my means?</li>
                <li>Have I gambled in a way that harmed my family or my finances?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Eighth Commandment: You shall not bear false witness against your neighbor</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I lied — in serious matters or habitually?</li>
                <li>Have I gossiped or revealed someone&apos;s faults without need (detraction)?</li>
                <li>Have I said false things that damaged someone&apos;s reputation (calumny)?</li>
                <li>Have I revealed secrets that were entrusted to me?</li>
                <li>Have I made rash judgments — assumed the worst about others without evidence?</li>
                <li>Have I been hypocritical — presenting a false image of myself?</li>
                <li>Have I failed to repair a reputation I damaged when I could have?</li>
                <li>Have I posted or shared false or cruel content about others online?</li>
              </ul>

              <QuizCTA />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Precepts of the Church</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                The precepts are the minimum the Church asks of every Catholic so that our life of prayer and moral effort keeps growing (CCC 2041–2043). Review them alongside the commandments.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I attended Mass on Sundays and Holy Days of Obligation?</li>
                <li>If I was aware of serious sin, have I gone more than a year without confessing it?</li>
                <li>Have I received Holy Communion at least once during the Easter season?</li>
                <li>Have I kept the days of fasting and abstinence (Ash Wednesday, Good Friday, and abstinence on the Fridays of Lent)?</li>
                <li>Have I helped provide for the needs of the Church according to my means?</li>
                <li>Have I married, or helped someone marry, outside the Church&apos;s laws without speaking to a priest?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Duties of Your State in Life</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                Many adult sins hide in our ordinary responsibilities rather than in dramatic failures. A few extra questions help bring them to light.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Married: Have I made time for my spouse, kept promises, and been open to life as the Church teaches?</li>
                <li>Single: Have I used my freedom generously, or only for myself?</li>
                <li>At work: Have I been honest, diligent, and fair to coworkers and customers?</li>
                <li>Online: Have I used social media to wound, envy, waste time I owed to others, or seek approval above truth?</li>
                <li>With money: Have I spent beyond my means or hidden spending from my spouse?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sins of Omission</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                Don&apos;t forget sins of omission — the good you failed to do. The Confiteor at Mass acknowledges sins "in what I have done and in what I have failed to do." Ask yourself:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6 text-sm">
                <li>Have I failed to pray regularly?</li>
                <li>Have I neglected to read Scripture or grow in my faith?</li>
                <li>Have I failed to help someone in need when I could have?</li>
                <li>Have I failed to speak up for the truth when I should have?</li>
                <li>Have I failed to correct someone who was doing wrong, when it was my duty to do so?</li>
                <li>Have I failed to be a good witness to my faith?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Record What You Find</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                Write each item as you would say it: the kind of sin and, for serious sins, roughly how often. "I missed Sunday Mass about four times without a good reason" is far more useful to you and the priest than a page of reflections. Group venial sins under a pattern ("I was often impatient and sharp with my children") rather than listing every incident. Leave out other people&apos;s names and other people&apos;s sins.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-before-confession">
                If a question raises a doubt about whether something was serious, note it anyway and ask the priest. The Catechism describes the three conditions for mortal sin — grave matter, full knowledge, and deliberate consent (CCC 1857). If it has been many years since your last Confession, the companion page in this series helps you sort that out and decide where to begin.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">From the list into the confessional</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism says the sacrament should be prepared by an examination made in the light of the Word of God (CCC 1454). The list above is that preparation. It is not the sacrament. When you have named what you need to say, go. The{" "}
                <Link to="/blog/how-to-go-to-confession-guide/" className="text-accent font-semibold underline underline-offset-2">word-for-word confession script</Link>{" "}
                gives the exact phrases. In short, this is the order.
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-text leading-relaxed mb-6">
                <li>Make the Sign of the Cross with the priest. Say how long it has been since your last confession. If you do not remember, say so.</li>
                <li>Confess mortal sins in kind and, as well as you can, in number. Add the venial sins that still weigh on you. Do not narrate other people’s faults in order to explain your own.</li>
                <li>Pray an <Link to="/blog/act-of-contrition/" className="text-accent font-semibold underline underline-offset-2">Act of Contrition</Link> when the priest asks for it. Sorrow and a purpose to change are the point. A forgotten word is not a failed confession.</li>
                <li>Listen to the penance. If you cannot do what was given, say so before you leave.</li>
                <li>Receive absolution. The priest’s words are the sacrament. Answer “Amen.” Do the penance as soon as you reasonably can. Destroy any written list.</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                A short nightly review, such as the{" "}
                <Link to="/blog/examination-of-conscience-guide/" className="text-accent font-semibold underline underline-offset-2">daily Ignatian Examen</Link>,
                makes this longer review easier. The daily examen is not a second confession, and it does not absolve grave sin. Only the sacrament does that.
              </p>
              <p className="text-text leading-relaxed mb-6">
                If you are not sure whether something is grave, confess it and let the priest help you name it. Do not wait for a perfect memory. Do not treat the examination as a guarantee that you will feel forgiven. Absolution is not a mood.
              </p>
            </div>

            <DailyPrayersHubLink />
            <TopicSeriesNav currentSlug="examination-of-conscience-before-confession" />
            <BlogFAQ faqs={[
              { question: "Why do Catholic examinations of conscience follow the Ten Commandments?", answer: "The Catechism teaches that grave matter is specified by the Ten Commandments (CCC 1858), and it presents Christian morality through them. Following the commandments in order gives a complete review of duties to God, neighbor and self without needing an endless list." },
              { question: "How long should a full examination by the commandments take?", answer: "For most adults who go to Confession regularly, fifteen to thirty minutes is enough. If it has been a long time, allow more, and do it the day before so you are not rushed in line. The goal is honest recall, not exhaustive analysis." },
              { question: "Can I bring a written list of sins into the confessional?", answer: "Yes. Reading from a list is common and helps if you get nervous. Write only what you need to say, keep it private, and destroy it afterward. The forgiven sins do not need a record." },
              { question: "What if I cannot remember how many times I committed a serious sin?", answer: "Give your honest best estimate: 'about five times,' 'roughly once a week for a year,' or 'many times.' The Church asks for the number as far as you can recall it, not mathematical precision." },
              { question: "Do the precepts of the Church belong in an examination of conscience?", answer: "Yes. The precepts (CCC 2041–2043) set the minimum for Mass attendance, yearly Confession of serious sin, Easter Communion, fasting and abstinence, and supporting the Church. Failing in them deliberately is matter for Confession." },
            ]} />

            <RelatedArticles currentSlug="examination-of-conscience-before-confession" />

            <ArticleBottomCTA title="How Is Your Catholic Life?" description="Take our assessment and receive a personalized guide to growing in your sacramental life." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
