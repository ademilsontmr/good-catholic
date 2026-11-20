import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeartPulse, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-chronic-pain";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Chronic Pain & Back Pain";
const DESCRIPTION =
  "Patron saints of chronic pain, back pain and chronic illness: St. Gemma Galgani, St. Lidwina and others, plus prayers and help for offering it up.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const SAINTS: { name: string; condition: string; feast: string; invoked: string }[] = [
  {
    name: "St. Lidwina of Schiedam",
    condition: "Decades bedridden after a skating fall at about 15, with worsening pain and illness",
    feast: "April 14",
    invoked: "Chronic illness, long-term pain, ice skaters",
  },
  {
    name: "St. Gemma Galgani",
    condition: "Spinal illness, usually described as spinal tuberculosis or meningitis, healed in 1899",
    feast: "April 11",
    invoked: "Back pain, back injuries, spinal conditions",
  },
  {
    name: "St. Bernadette Soubirous",
    condition: "Lifelong asthma and tuberculosis of the bone in her knee",
    feast: "April 16 (February 18 in France)",
    invoked: "The sick, those whose prayers for healing go unanswered",
  },
  {
    name: "St. Germaine Cousin",
    condition: "A deformed, weak hand and scrofula, along with neglect at home",
    feast: "June 15",
    invoked: "People with disabilities, abuse survivors",
  },
  {
    name: "St. Padre Pio",
    condition: "Decades of illness and the painful wounds of the stigmata",
    feast: "September 23",
    invoked: "The suffering, the sick, those seeking healing",
  },
  {
    name: "Bl. Chiara Badano",
    condition: "Bone cancer (osteosarcoma) as a teenager",
    feast: "October 29",
    invoked: "Young people with serious illness",
  },
];

export default function PatronSaintOfChronicPain() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of chronic pain, patron saint of back pain, patron saint of chronic illness, prayer for chronic pain catholic, redemptive suffering, offering it up, st gemma galgani, st lidwina, catholic prayer for pain"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Chronic Pain", url: PAGE_URL },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Patron Saint of Chronic Pain</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints &amp; Intercession</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />November 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Patron Saint of Chronic Pain: Saints Who Lived With It, and Prayers for the Long Days
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Chronic pain is lonely in a particular way: it does not go away, it rarely shows, and people stop asking about it. The Church has saints who knew that life from the inside. Here is who they are, what “offering it up” really means, three prayers for hard days, and a way of praying that fits a body with very little energy left.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <HeartPulse className="w-24 h-24 text-rose-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  There is no single officially declared patron of chronic pain, but Catholics most often turn to St. Lidwina of Schiedam, who spent decades bedridden in pain and is widely invoked for chronic illness, and to St. Gemma Galgani, commonly invoked for back pain because of the spinal illness she suffered as a young woman. St. Bernadette, St. Germaine Cousin and St. Padre Pio are also close companions for people who live with pain that does not end.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Saints Matter When the Pain Does Not Leave</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Acute pain has an ending: injury, treatment, recovery. Chronic pain has no third act. You assess the day before your feet touch the floor, cancel plans and feel guilty, and look fine, so people assume you are. Over years, pain wears down not only the body but patience, hope and the sense that God is paying attention.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The saints below did not float above that experience. Several of them spent most of their adult lives in bed. Some prayed for healing and received it; others prayed for years and did not. What they share is that they let Christ into the pain rather than waiting for the pain to end before they let Him in. Asking for their prayers is a way of saying: someone has walked this road before me, and they are not ashamed of me.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Saints Most Invoked for Chronic Pain and Illness</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Lidwina of Schiedam (1380–1433)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Lidwina of Schiedam was a teenager in Holland when she fell on the ice while skating with friends and broke a rib. The injury never healed properly, and over the following years her health collapsed: by the accounts of her early biographers she suffered constant pain, festering wounds, fevers and the loss of much of her mobility, and she remained bedridden for more than thirty years until her death in 1433. Tradition holds that she was bitter at first, until a confessor taught her to meditate on the Passion; in time she united her suffering to Christ’s, and visitors came to her bedside for counsel and prayer.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Her cult was confirmed by Pope Leo XIII in 1890, and her feast is April 14. Because of the accident that began it all, she is the patron of ice skaters, and because of everything that followed, she is widely regarded as a patron of the chronically ill.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Gemma Galgani (1878–1903)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Gemma Galgani grew up in Lucca, Italy, lost her mother young and her father not long after, and lived much of her short life in poverty and poor health. In 1898 and 1899 she became gravely ill with a spinal condition usually described as tuberculosis of the spine or spinal meningitis; she was in severe pain and doctors expected her to die. She made a novena to St. Margaret Mary Alacoque, and she later recounted that the Passionist Gabriel Possenti, then not yet canonized, came to her in her illness. In March 1899 she recovered, suddenly and completely.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Her trials did not end there. Later that year she began to bear the marks of the stigmata, and she died of tuberculosis at twenty-five. She was canonized in 1940, and her feast is April 11. Because of her spinal illness, she is commonly invoked by people with back pain, back injuries and spinal conditions, though this is a popular devotion rather than a formal patronage.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Bernadette Soubirous (1844–1879)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Bernadette Soubirous saw the Blessed Virgin at Lourdes, where countless pilgrims have since sought healing, yet she herself was never healed. She had asthma from childhood, and as a sister at Nevers she developed tuberculosis of the bone in her knee, which caused her intense pain in her final years. She is a gentle patron for anyone who has prayed for a cure that has not come, and who is trying to trust God anyway. Her feast is April 16, and February 18 in France.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Germaine Cousin (1579–1601)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Germaine Cousin was born in a village near Toulouse with a weak, deformed right hand and later suffered from scrofula, a tubercular disease of the lymph nodes. Her stepmother treated her harshly and made her sleep in the stable. She spent her days as a shepherdess, praying the Rosary and attending daily Mass, and she gave away what little bread she had. She died at about twenty-two. She is a patron of people with disabilities and of abuse survivors, and her feast is June 15.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Padre Pio and Bl. Chiara Badano</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Padre Pio lived with frequent illness from his youth and bore the painful wounds of the stigmata for fifty years. He is one of the most widely invoked saints for the sick, and his feast is September 23. Bl. Chiara Badano, an Italian teenager in the Focolare movement, was diagnosed with bone cancer at seventeen and died in 1990 at eighteen, after repeatedly offering her suffering to Jesus with remarkable peace. She was beatified in 2010, and her feast is October 29.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read the full profiles of{" "}
                <Link to="/blog/saint-bernadette-soubirous/" className={linkClass}>St. Bernadette Soubirous</Link>
                {" and "}
                <Link to="/blog/saint-padre-pio/" className={linkClass}>St. Padre Pio</Link>
                {". If your pain is mostly in the head, see our guide to the "}
                <Link to="/blog/patron-saint-of-headaches/" className={linkClass}>patron saint of headaches and migraines</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saints for Chronic Pain at a Glance</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Saint</th>
                      <th className="p-3 font-semibold">What they lived with</th>
                      <th className="p-3 font-semibold">Feast day</th>
                      <th className="p-3 font-semibold">Invoked for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAINTS.map((s) => (
                      <tr key={s.name} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{s.name}</td>
                        <td className="p-3 text-text">{s.condition}</td>
                        <td className="p-3 text-text-muted">{s.feast}</td>
                        <td className="p-3 text-text">{s.invoked}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What “Offering It Up” Really Means</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Many Catholics heard “offer it up” as children, sometimes as a way of being told to stop complaining. That is not what the phrase means. It comes from a real teaching: St. Paul wrote that in his own flesh he was “filling up what is lacking in the afflictions of Christ” for the sake of His body, the Church (Colossians 1:24). Nothing is missing from Christ’s sacrifice. But He chose to let His members share in it, so that suffering joined to His becomes a form of love and prayer for others.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. John Paul II, who knew pain well in his final years, developed this in his 1984 apostolic letter Salvifici Doloris, on the Christian meaning of human suffering. He wrote that suffering remains a mystery we cannot fully explain, but that Christ did not leave it outside redemption: He went into it Himself, and anyone who suffers in union with Him shares in His work of salvation. The Catechism says the same, teaching that the sick can be united more closely to the Passion of Christ and contribute to the good of the People of God (Catechism 1521).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Three things offering it up does not mean. It does not mean God sent your pain as a punishment. It does not mean pretending you are fine or refusing to tell anyone how bad it is. And it never means refusing treatment. The Church explicitly teaches that using painkillers and palliative care to relieve suffering is morally good, a form of charity, even when strong medication is needed (Catechism 2279). You can take your medication, do your physical therapy, see the specialist, and still offer the pain that remains.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Catechism is also honest that illness can lead to anguish, self-absorption and even revolt against God, while it can also make a person more mature and more aware of what matters (Catechism 1500–1501). Both reactions can coexist in the same week. When St. Paul begged three times to be rid of his “thorn in the flesh,” the answer he received was not a cure but a promise: “My grace is sufficient for you, for power is made perfect in weakness” (2 Corinthians 12:7–9). Praying for healing and offering what is not healed are not opposites. Most people with chronic pain do both, sometimes in the same breath.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For the harder question underneath all this, read{" "}
                <Link to="/blog/why-does-god-allow-suffering-catholic/" className={linkClass}>why God allows suffering</Link>
                {"."}
              </p>

              <QuizCTA
                title="Is your prayer life built for a body in pain?"
                description="Take our short Catholic life assessment and get a gentle, realistic plan for prayer and the sacraments that fits your energy."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Prayers for Living With Chronic Pain</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Morning Offering for a Pain Day</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord Jesus, I woke up hurting again. Before I measure what this day will cost, I give it to you, all of it: the stiffness, the ache, the plans I may have to cancel and the frustration I may feel. Join it to your own pain on the Cross and let it do some good I cannot see. I offer it today for the people I love, and for someone who has no one praying for them. Give me enough strength for this day only, and the humility to accept help. St. Lidwina, who lay in pain for so many years, pray for me. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer for a Flare-Up or a Bad Night</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Jesus, it is late and the pain is loud. I cannot pray long, so let this be enough. You knew what it was to lie awake in agony in the garden. Stay awake with me now. If it is your will, ease this pain, and let the medicine work and sleep come. If it does not, hold me through it until morning. I am not brave tonight; let me simply be held. St. Gemma, you were healed and you still suffered; ask the Lord to give me peace. Mary, my Mother, sit beside me. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer for Caregivers</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord, you have given me someone to care for whose pain I cannot fix. Teach me to stay when I want to solve, and to listen when I want to reassure. When I am tired, short-tempered or afraid, forgive me and refill me. Help me notice the quiet signs that a bad day is coming, and give me the courage to ask others for help too. Let my love be steady, not heroic. St. Germaine, who knew what it was to be overlooked, help me never overlook the person in front of me. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">All three prayers were written for this guide. They are not liturgical texts.</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                For more, see our{" "}
                <Link to="/blog/morning-offering-prayer/" className={linkClass}>traditional Morning Offering</Link>
                {" and the "}
                <Link to="/blog/catholic-prayer-for-the-sick/" className={linkClass}>Catholic prayer for the sick</Link>
                {"."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Prayer Rule for When Energy Is Low</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Chronic pain makes long prayer routines collapse, and that collapse often brings guilt. God is not grading your stamina. A rule that you can keep on your worst day is better than an ambitious one that only survives your best days. Here is a simple shape many people find sustainable.
              </LinkedText>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>On waking:</strong> a short morning offering, said before you get up, even if it is only “Jesus, this day is yours.”
                </li>
                <li>
                  <strong>During the day:</strong> one decade of the Rosary instead of five, or a single short Psalm. Psalm 23, 31, 63 and 130 are good companions for pain.
                </li>
                <li>
                  <strong>When you cannot get to Mass:</strong> a spiritual communion, asking Jesus to come into your heart as truly as you desire to receive Him.
                </li>
                <li>
                  <strong>At night:</strong> a brief look back at the day, thanking God for one good thing and handing Him the rest.
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                On a very bad day, a glance at a crucifix or a whispered name is prayer. Learn{" "}
                <Link to="/blog/how-to-make-spiritual-communion/" className={linkClass}>how to make a spiritual communion</Link>
                {" so it is ready when you need it."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Going to Mass With Chronic Pain</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                You may sit for the whole Mass if standing and kneeling hurt. No one is required to kneel when their body cannot, and a cushion, a back support or an aisle seat near the door are all fine. If your pain makes travel or sitting through Mass genuinely too difficult, you are excused from the Sunday obligation; the Catechism names illness as a serious reason that excuses (Catechism 2181). On those days, watch a livestreamed Mass if it helps and make a spiritual communion. Many parishes will bring Holy Communion to the homebound; call the parish office and ask.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Anointing of the Sick is not only for the dying. It is meant for anyone whose health is seriously impaired by sickness or old age (Catechism 1514), which can include serious chronic conditions. It can be received again if the illness becomes more serious (Catechism 1515), so you need not wait for a crisis. Ask your pastor whether your situation is appropriate; many parishes offer communal anointing a few times a year.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Learn more about the sacrament in our guide to{" "}
                <Link to="/blog/catholic-last-rites-explained/" className={linkClass}>last rites and the Anointing of the Sick</Link>
                {"."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Isolation, Community and Mental Health</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Chronic pain shrinks a life. Friendships fade when you keep canceling, and parish life can feel built for people who can stand in line for coffee. Tell one or two trusted people what your condition actually involves, and ask your parish whether it has a ministry to the sick or homebound. St. Lidwina’s bed became a place others came to for counsel; your limits do not make you useless to the Body of Christ.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Pain and depression often go together, and each makes the other worse. Feeling hopeless, numb or exhausted beyond the pain itself is not a failure of faith. Tell your doctor; treating depression or anxiety is part of treating the whole person, and many pain clinics include counseling for this reason. If you are having thoughts of ending your life, call or text 988 in the United States, any time of day or night.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Our{" "}
                <Link to="/blog/catholic-mental-health-guide/" className={linkClass}>Catholic mental health guide</Link>
                {" explains how faith and professional care work together."}
              </p>

              <div className="mb-8 p-6 bg-background-muted border border-border rounded-xl">
                <p className="text-text-muted text-sm leading-relaxed mb-0">
                  <strong className="text-text">Medical note:</strong> This article is spiritual guidance, not medical advice. Prayer and the intercession of the saints are not a substitute for diagnosis and treatment. If your pain is new, changing or severe, or comes with symptoms such as numbness, weakness, fever, or loss of bladder or bowel control, contact your doctor or seek emergency care.
                </p>
              </div>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              When the pain is long, pray the{" "}
              <a href="https://catholicbibleonline.com/novenas/chronic-illness/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Chronic Illness</a> and{" "}
              <a href="https://catholicbibleonline.com/novenas/physical-healing/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Physical Healing</a>{" "}
              on Catholic Bible Online, one short day at a time.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of chronic pain?",
                  answer: "No saint has been formally declared patron of chronic pain, but St. Lidwina of Schiedam, who spent over thirty years bedridden in pain, is widely invoked for chronic illness. St. Gemma Galgani, St. Bernadette and St. Padre Pio are also popular patrons for people living with ongoing pain.",
                },
                {
                  question: "Who is the patron saint of back pain?",
                  answer: "St. Gemma Galgani is commonly invoked for back pain and back injuries because she suffered a grave spinal illness, usually described as spinal tuberculosis or meningitis, before her recovery in 1899. Her feast is April 11.",
                },
                {
                  question: "Who is the patron saint of chronic illness?",
                  answer: "St. Lidwina of Schiedam is the saint most often named. After a skating accident as a teenager, she lived with worsening illness and pain for decades. Her feast is April 14.",
                },
                {
                  question: "Does offering up my pain mean I should refuse pain medication?",
                  answer: "No. The Church teaches that relieving pain through medicine and palliative care is morally good (Catechism 2279). Offering it up means uniting whatever suffering remains to Christ, not refusing treatment or hiding your pain.",
                },
                {
                  question: "Can someone with chronic pain receive the Anointing of the Sick?",
                  answer: "Often, yes. The sacrament is for anyone whose health is seriously impaired by illness or age, not only the dying, and it can be received again if the condition worsens (Catechism 1514–1515). Ask your parish priest.",
                },
                {
                  question: "Do I have to go to Sunday Mass if I am in severe pain?",
                  answer: "No. Illness is a serious reason that excuses you from the Sunday obligation (Catechism 2181). On those days you can watch a livestreamed Mass, make a spiritual communion, and ask your parish about Communion for the homebound.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Pray at the pace of your body"
              description="Build a gentle rhythm of prayer and sacraments that holds up on your hardest days."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
