import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function NovenaBeforeSurgeryCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace | Guide Catholic</title>
        <meta name="description" content="Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States." />
        <meta name="keywords" content="novena before surgery, catholic prayer before surgery, 9 day novena healing surgery, prayer for operation catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-before-surgery-catholic/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title="Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace" description="Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States." url="https://guidecatholic.com/blog/novena-before-surgery-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Novena Before Surgery", url: "https://guidecatholic.com/blog/novena-before-surgery-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena Before Surgery</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace</h1>
              <p className="text-xl text-text-muted leading-relaxed">Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States.</p>
            </header>
            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10"><HeartPulse className="w-24 h-24 text-rose-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">{`A novena before surgery is nine days of prayer for the patient, the surgical team, and a good recovery, ideally begun nine days before the operation. Catholics entrust the surgery to Christ the Divine Physician and ask the prayers of saints such as St. Luke and St. Peregrine. For a serious operation, the Church also encourages receiving the Anointing of the Sick beforehand.`}</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{`St. Peregrine: Healed the Night Before an Amputation`}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`Peregrine Laziosi (c. 1260–1345) grew up in Forlì, Italy, in a family opposed to the papacy. As a young man he struck St. Philip Benizi, a Servite friar sent to preach reconciliation in the town, and Philip responded by offering him the other cheek. The encounter changed Peregrine’s life, and he later joined the Servite Order himself.`}</LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`Around the age of sixty, he developed a painful, open wound on his leg, usually described as cancer, and the doctors decided to amputate. The night before the operation, he dragged himself to the crucifix in the chapter room and prayed. According to the accounts of his life, he fell asleep and saw Christ reach down from the cross to touch his leg; in the morning the surgeon found the wound healed. Peregrine lived about twenty more years, and Pope Benedict XIII canonized him in 1726. He is patron of cancer patients and of anyone facing a frightening operation.`}</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{`Other Patrons for the Operating Room`}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`St. Luke, whom Paul calls the beloved physician (Colossians 4:14), is patron of doctors and surgeons, and his Gospel lingers with special tenderness on the sick whom Jesus touched and healed. Sts. Cosmas and Damian, twin brothers and physicians martyred in the early fourth century, are remembered for treating patients without charge.`}</LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`In the twentieth century, St. Padre Pio founded a hospital, the Casa Sollievo della Sofferenza (Home for the Relief of Suffering), which opened in San Giovanni Rotondo in 1956 and still operates today. He saw no conflict between prayer and modern medicine, and neither does this novena.`}</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{`Scripture to Pray With`}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`Read one passage each day of the novena, and on the morning of surgery if you can:`}</LinkedText>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>{`Sirach 38:1–14 — Honor the physician, for the Lord created him; pray to the Lord, and let the doctor take his place too.`}</li>
                <li>{`James 5:14–15 — The sick call the presbyters of the Church, who anoint them and pray over them.`}</li>
                <li>{`Isaiah 41:10 — Do not fear, for I am with you; I will strengthen and uphold you.`}</li>
                <li>{`Psalm 4:9 — In peace I will lie down and fall asleep, for you alone, Lord, make me secure.`}</li>
                <li>{`Psalm 23:4 — Even in the darkest valley, I fear no harm, for you are with me.`}</li>
                <li>{`2 Corinthians 4:16 — Though our outer self is wasting away, our inner self is being renewed day by day.`}</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{`What the Church Teaches About Anointing Before Surgery`}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`The Anointing of the Sick is not only for the dying. The Catechism notes that it is fitting to receive this sacrament just prior to a serious operation (CCC 1515). Its special grace brings strengthening, peace, and courage to overcome the difficulties of serious illness, and it unites the sick person to the Passion of Christ (CCC 1520–1521). If you are able, go to Confession before the operation as well.`}</LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`The Church also teaches that we have a duty to take reasonable care of our health (CCC 2288), so choosing good surgeons and following medical advice is itself a faithful act. Prayer and medicine are not competitors; both come from the same God.`}</LinkedText>

              <QuizCTA title="How deep is your Catholic faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{`Nine Days, Nine Intentions`}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`Count back nine days from the operation. Each morning, say the prayer below and add that day’s intention:`}</LinkedText>
              <ol className="list-decimal pl-6 text-text space-y-3 mb-6">
                <li>{`Trust — handing the surgery over to God (Psalm 31:6).`}</li>
                <li>{`The surgeon, for a steady hand and clear judgment (Sirach 38:12–13).`}</li>
                <li>{`The anesthesiologist, nurses, and the whole team (1 Corinthians 12:4–6).`}</li>
                <li>{`Freedom from fear in the days and the final night before the operation (Psalm 4:9).`}</li>
                <li>{`Safe passage through the procedure itself (Isaiah 43:2).`}</li>
                <li>{`Healing without infection or complications (Jeremiah 17:14).`}</li>
                <li>{`Strength and patience during recovery and rehabilitation (Isaiah 40:31).`}</li>
                <li>{`The family members and caregivers who wait and help (Galatians 6:2).`}</li>
                <li>{`Acceptance of God’s will and thanksgiving for every grace already received (Luke 22:42).`}</li>
              </ol>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">{`Daily Novena Prayer Before Surgery`}</h3>
                <p className="text-text italic leading-relaxed mb-3">{`Lord Jesus, Divine Physician, I entrust this surgery and the recovery that follows to you. Guide the minds and hands of the surgeon, the anesthesiologist, and every member of the medical team. Calm my anxiety, keep me safe while I sleep, and grant healing according to your holy will.`}</p>
                <p className="text-text italic leading-relaxed mb-3">{`If I must suffer, unite my pain to your Cross, and give strength to the people who love me. Mary, Health of the Sick, St. Luke, St. Peregrine, and St. Padre Pio, intercede for [name] and for a successful operation. Amen.`}</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{`Getting Ready in Body and Soul`}</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>{`Call your parish or ask for the hospital chaplain to arrange the Anointing of the Sick; many Catholic hospitals can also bring Holy Communion before or after surgery.`}</li>
                <li>{`Follow every pre-operative instruction exactly, including fasting. Your surgeon’s orders take priority over receiving Communion that morning; the sick are not bound by the usual one-hour Eucharistic fast, but medical fasting is a different matter.`}</li>
                <li>{`Complete an advance directive and name a health care proxy who knows your Catholic values; your diocese or a Catholic hospital can explain the Church’s guidance on end-of-life care.`}</li>
                <li>{`Ask a priest to offer a Mass for your intention around the day of surgery.`}</li>
                <li>{`Write down your medications and questions for the surgeon so fear does not crowd them out.`}</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{`If Recovery Is Slow`}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">{`Complications, pain, and long rehabilitation do not mean the novena was useless. St. Peregrine’s healing was dramatic, but many saints, Padre Pio among them, carried physical suffering for years and offered it to God. Keep praying through recovery, start the novena again if it helps, and let others care for you; accepting help is part of healing too.`}</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: `Should I receive the Anointing of the Sick before surgery?`, answer: `Yes, if the operation is serious. The Catechism says it is fitting to receive the sacrament just before a serious operation (CCC 1515). Call your parish a few days ahead or ask for the hospital chaplain.` },
              { question: `Who is the patron saint of surgery?`, answer: `St. Peregrine is invoked by people facing surgery, especially for cancer, because he was healed the night before a planned amputation. St. Luke and Sts. Cosmas and Damian are patrons of physicians and surgeons.` },
              { question: `What if my surgery is in less than nine days?`, answer: `Begin anyway and finish the remaining days during recovery in thanksgiving. Some families divide the days so several people pray at once, completing the novena before the operation.` },
              { question: `Can I receive Communion the morning of surgery?`, answer: `Only if your medical team allows it. Pre-surgical fasting rules exist for your safety. If you cannot receive, make a spiritual communion and ask for Communion after the operation.` },
              { question: `Can family pray this novena if the patient is unconscious or unable to pray?`, answer: `Yes. Family members and friends can pray every day of the novena on the patient’s behalf, and a priest can still anoint a patient who cannot respond.` }
            ]} />
            <RelatedArticles currentSlug="novena-before-surgery-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to Catholic prayer and devotion.</p>
              <Link to="/quiz-intro/"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
