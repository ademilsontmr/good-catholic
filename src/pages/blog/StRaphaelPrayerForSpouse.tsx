import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeartHandshake, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema, HowToSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

const SLUG = "st-raphael-prayer-for-a-spouse";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "St. Raphael Prayer for a Spouse & Novena";
const DESCRIPTION =
  "Why Catholics ask St. Raphael the Archangel for help finding a spouse: his story in Tobit, a prayer for a future husband or wife, and a 9-day novena.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

/** Nine days, each drawn from a stage of the Book of Tobit. */
const NOVENA: { day: number; reading: string; theme: string; intention: string }[] = [
  { day: 1, reading: "Tobit 1:3–2:10", theme: "Faithful when no one is watching", intention: "That I keep doing good while I wait, as Tobit buried the dead at his own risk." },
  { day: 2, reading: "Tobit 3:1–17", theme: "Two prayers heard on the same day", intention: "That I bring God my real discouragement, as Tobit and Sarah did, and trust that he hears." },
  { day: 3, reading: "Tobit 5:1–22", theme: "A companion for the road", intention: "For good friends and guides who walk with me toward my vocation." },
  { day: 4, reading: "Tobit 6:1–19", theme: "Fear turned into provision", intention: "That what frightens me about love and marriage be healed rather than avoided." },
  { day: 5, reading: "Tobit 7:1–17", theme: "Welcome in a stranger’s house", intention: "For my future spouse’s family, and for families that will welcome me." },
  { day: 6, reading: "Tobit 8:1–9", theme: "Praying together before anything else", intention: "That my future marriage begin and continue in prayer, with a pure intention." },
  { day: 7, reading: "Tobit 10:1–11:15", theme: "Parents who wait and a father healed", intention: "For my parents and for every wound in my own family that needs healing." },
  { day: 8, reading: "Tobit 12:1–22", theme: "Raphael reveals who he is", intention: "That I recognize God’s quiet help in my life and give thanks for it." },
  { day: 9, reading: "Tobit 13:1–8", theme: "A song of praise", intention: "That I praise God now, whether or not I have received what I am asking for." },
];

const PATRONS: { patron: string; why: string; feast: string }[] = [
  { patron: "St. Raphael the Archangel", why: "In the Book of Tobit he guides Tobiah to Sarah, frees her from the demon, and blesses their marriage.", feast: "September 29 (with Sts. Michael and Gabriel)" },
  { patron: "St. Anne", why: "By old popular tradition, unmarried women asked the grandmother of Jesus for a good husband; she is the patron of mothers and grandmothers.", feast: "July 26 (with St. Joachim)" },
  { patron: "St. Anthony of Padua", why: "Known in Portugal and Brazil as a matchmaker saint; the eve of his feast is a traditional day for couples and those hoping to marry.", feast: "June 13" },
  { patron: "St. Valentine", why: "A third-century Roman martyr whose name became tied to romantic love in the late Middle Ages.", feast: "February 14 (Roman Martyrology)" },
  { patron: "St. Joseph", why: "The faithful husband of Mary, invoked for a good and chaste spouse and as a model for future husbands.", feast: "March 19" },
];

export default function StRaphaelPrayerForSpouse() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="st raphael prayer for a spouse, prayer to find a spouse catholic, patron saint of finding a husband, patron saint of finding a wife, st raphael novena, st raphael the archangel, patron saint of single people, catholic prayer for future spouse, book of tobit"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Raphael Prayer for a Spouse", url: PAGE_URL },
        ]}
      />
      <HowToSchema
        name="How to Pray a 9-Day St. Raphael Novena for a Future Spouse"
        description="A nine-day novena to St. Raphael the Archangel that walks through the Book of Tobit, one stage of the story each day."
        url={PAGE_URL}
        totalTime="PT15M"
        steps={NOVENA.map((d) => ({
          name: `Day ${d.day}: ${d.theme}`,
          text: `Read ${d.reading}. Pray for this intention: ${d.intention} Then pray the prayer to St. Raphael, an Our Father, a Hail Mary and a Glory Be.`,
        }))}
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
              <span className="text-text">St. Raphael Prayer for a Spouse</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                St. Raphael Prayer for a Spouse: The Archangel of Happy Meetings, His Story and a 9-Day Novena
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Catholics hoping to marry have long turned to St. Raphael, the angel who led a young man named Tobiah to his bride. Here is who Raphael is, what really happens in the Book of Tobit, a prayer for your future spouse, and a novena that walks through his story day by day.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <HeartHandshake className="w-24 h-24 text-rose-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  St. Raphael the Archangel is the traditional Catholic patron of those looking for a husband or wife, because in the Book of Tobit God sends him to guide Tobiah to Sarah and to heal both of their families. His name means “God heals,” and his feast is September 29. Catholics ask his help with a prayer or a nine-day novena, not as a guarantee of marriage, but as a way to entrust their vocation to God.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Is St. Raphael the Archangel?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Raphael is one of only three angels named in the Catholic Bible, alongside Michael and Gabriel. Michael defends, Gabriel announces, and Raphael heals; his Hebrew name means “God heals.” Everything we know about him comes from the Book of Tobit, where he spends most of the story disguised as an ordinary traveling companion and reveals who he is only at the end: “I am Raphael, one of the seven angels who stand ready and enter before the glory of the Lord” (Tobit 12:15).
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Tobit is one of the deuterocanonical books. Catholic and Orthodox Bibles include it; most Protestant Bibles leave it out or place it in a separate Apocrypha section, which is why many Christians have never heard Raphael’s story. Our guide to the{" "}
                <Link to="/blog/deuterocanonical-books-catholic-bible/" className={linkClass}>deuterocanonical books</Link>
                {" explains why the Church received them as Scripture."}
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Some traditions also associate Raphael with the angel who stirred the healing waters of the pool of Bethesda in John 5:4, a verse found in later manuscripts. The Gospel does not name that angel, so treat the link as devotion rather than Scripture. Because of his role in Tobit, Raphael is invoked as patron of travelers, the sick, the blind, physicians and pharmacists, and of “happy meetings,” including the meeting of future spouses.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Story Behind the Devotion: Tobiah and Sarah</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Tobit is a devout Israelite living in exile in Nineveh. He is blinded in an accident and, ashamed and poor, asks God to let him die. On the very same day, far away in Ecbatana, a young woman named Sarah prays the same prayer. She has been given in marriage seven times, and each bridegroom died on the wedding night, killed by the demon Asmodeus (Tobit 3:7–8). Mocked even by her maid, she considers ending her life, then turns to prayer instead. Scripture says both prayers were heard at once, and God sent Raphael to heal them both (Tobit 3:16–17).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Tobit sends his son Tobiah on a long journey to recover family money. Raphael offers himself as a guide under the name Azariah (Tobit 5). On the way, a large fish leaps at Tobiah from the Tigris River, and Raphael tells him to catch it and keep its heart, liver and gall (Tobit 6). He also tells Tobiah that Sarah is his kinswoman and that he has the right to marry her. Tobiah, who has heard about the seven dead bridegrooms, is understandably afraid. Raphael tells him not to be.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                On the wedding night Tobiah burns the heart and liver, the demon flees, and Raphael binds him (Tobit 8:2–3). Then the young couple do something remarkable: before anything else, they get up and pray together. Tobiah blesses God, remembers Adam and Eve, and says he is taking Sarah as his wife not out of lust but with sincerity of heart, asking that they may grow old together (Tobit 8:4–8). This prayer is one of the Old Testament readings offered in the Catholic wedding Lectionary, and many couples choose it. Afterward the gall heals Tobit’s blindness (Tobit 11), and Raphael reveals his identity and returns to God.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Raphael Is the Patron of Finding a Spouse</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Notice what Raphael actually does. He does not hand Tobiah a wife. He walks with him, gives practical advice, protects him from danger, deals with a real spiritual evil, and brings two wounded families together. Sarah is not a prize at the end of a quest; she is a woman with her own grief and her own prayer, and God answers her as much as he answers Tobiah. That is why the devotion fits so well. Asking Raphael for help with a future marriage means asking for guidance, healing of fear and past hurt, and a meeting that is truly God’s providence.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Prayer to St. Raphael for a Future Spouse</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The best-known traditional prayer to St. Raphael for a spouse has circulated on holy cards for generations. It greets him as a patron and friend of the young, recalls how he led Tobiah to Sarah, and asks him to guide the one praying to the person God intends, or to the state of life God wills, so that both may live together in faith and help each other toward heaven. You can find it in many prayer books. The prayer below was written for this guide in the same spirit.
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer to St. Raphael for a Spouse</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  St. Raphael, healer and faithful guide, you walked beside Tobiah on a long road and brought him safely to Sarah, whose prayers God had already heard. Walk beside me too. Heal whatever in me is afraid of love, or hurt by the past, or impatient with God’s timing. If it is God’s will that I marry, lead me to the person he has prepared, and prepare me to be a good gift to them. Keep us both safe from every evil, and let our meeting be a happy one. If God is calling me another way, help me to see it and follow it with joy. Present my prayer before the glory of the Lord, where you stand. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">This prayer was written for this guide. It is not a liturgical text.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Prayer for Your Future Husband or Wife</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Some people find it easier to pray for the person they have not yet met than to pray about their own longing. If you marry, that person is alive today, with their own struggles. Praying for them now is already an act of love.
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer for My Future Spouse</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord Jesus, wherever the person I will marry is today, be close to them. Strengthen their faith, protect their purity, comfort them in loneliness, and heal what has wounded them. Help them grow into the person you created them to be, and help me do the same, so that when we meet we can recognize each other and say, as Tobiah and Sarah did, that we want to grow old together in your sight. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">This prayer was written for this guide. It is not a liturgical text.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A 9-Day St. Raphael Novena Through the Book of Tobit</h2>
              <p className="text-text leading-relaxed mb-6">
                A novena is nine days of prayer for one intention. This one reads through Tobit a few chapters at a time, so that by the ninth day you know Raphael’s story well. Each day, read the passage, pray the intention in your own words, pray the prayer to St. Raphael above, and close with an Our Father, a Hail Mary and a Glory Be. If you are new to novenas, see{" "}
                <Link to="/blog/how-to-pray-a-novena-guide/" className={linkClass}>how to pray a novena</Link>.
              </p>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Day</th>
                      <th className="p-3 font-semibold">Reading</th>
                      <th className="p-3 font-semibold">Theme</th>
                      <th className="p-3 font-semibold">Pray for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NOVENA.map((d) => (
                      <tr key={d.day} className="border-t border-border align-top">
                        <td className="p-3 whitespace-nowrap font-medium text-text">Day {d.day}</td>
                        <td className="p-3 whitespace-nowrap text-text-muted">{d.reading}</td>
                        <td className="p-3 text-text">{d.theme}</td>
                        <td className="p-3 text-text-muted">{d.intention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text leading-relaxed mb-6">
                A natural time to pray it is September 20 to 28, ending on the eve of the feast of the Archangels; see our guide to the{" "}
                <Link to="/blog/feast-of-the-archangels-september-29-2026/" className={linkClass}>feast of the Archangels on September 29</Link>
                {". Before the 1969 calendar reform, Raphael had his own feast on October 24, and some people still pray the novena to end on that date. But any nine days will do."}
              </p>

              <QuizCTA
                title="Where is God leading you right now?"
                description="Take our Catholic life assessment and get a simple plan for prayer, the sacraments and discernment in your current season."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Other Saints Catholics Ask for Help Finding a Spouse</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Raphael is the patron with the clearest scriptural basis, but he is not the only one. These customs grew from popular piety, and none is better than the others. Choose the saint whose life speaks to you.
              </LinkedText>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Patron</th>
                      <th className="p-3 font-semibold">Why invoked for finding a spouse</th>
                      <th className="p-3 font-semibold">Feast</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PATRONS.map((p) => (
                      <tr key={p.patron} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{p.patron}</td>
                        <td className="p-3 text-text-muted">{p.why}</td>
                        <td className="p-3 text-text-muted">{p.feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text leading-relaxed mb-6">
                For St. Valentine’s actual history and a prayer for couples, read our{" "}
                <Link to="/blog/st-valentine-prayer-catholic-guide/" className={linkClass}>St. Valentine prayer guide</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying for a Spouse Without Anxiety</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                There is a difference between discernment and anxiety. Anxiety treats marriage as something you must secure by your own effort before time runs out. Discernment asks what God is doing in your life right now and how to cooperate with it. Tobiah was afraid, and Raphael did not tell him his fear was silly; he told him to trust and to pray. Tobiah’s wedding-night prayer is the model: he asks for mercy, names his intention honestly, and wants a marriage built on sincerity rather than desire alone.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Prayer also has to be joined to ordinary action. Raphael did not appear at Tobiah’s bedside with a bride; he walked with him on a real road. In practice that means going where other faithful Catholics are: a parish young adult group, a volunteer ministry, a Bible study, a pilgrimage, a friend’s wedding. It means letting trusted friends and family introduce you to people. It means living chastity now, because the virtue that will protect your marriage is the same one that protects your dating. And it means working on your own healing and maturity, so that you are ready to give yourself well.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Practical help: our{" "}
                <Link to="/blog/catholic-dating-guide/" className={linkClass}>Catholic dating guide</Link>
                {", "}
                <Link to="/blog/catholic-dating-and-courtship/" className={linkClass}>dating and courtship</Link>
                {", and "}
                <Link to="/blog/catholic-online-dating/" className={linkClass}>Catholic online dating</Link>
                {", which covers meeting people prudently on apps and websites. If you are already seeing someone, "}
                <Link to="/blog/am-i-ready-to-get-married-catholic/" className={linkClass}>Am I ready to get married?</Link>
                {" is a good next step."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When the Wait Is Long</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Many faithful Catholics pray for years and are still single. That is not a sign that they prayed wrongly or that God has forgotten them. The Catechism speaks directly to them, recalling “the great number of single persons” whose circumstances are often not of their choosing, and saying they are especially close to the heart of Jesus and deserve the affection and care of the Church (CCC 1658). Your life right now, as it is, is not a waiting room. It is the place where you are called to love, serve, pray and become holy today.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Keep praying to St. Raphael, but let the prayer widen. Ask him to heal your heart of bitterness or comparison, to guide you to good friendships, and to show you where God wants you to give yourself now. Some people discover in that process a call to priesthood, religious life or consecrated life; many others marry later than they expected; some live as single laypeople whose generosity holds parishes and families together. All of these are real paths to holiness.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                If you are unsure which way God is leading, our{" "}
                <Link to="/blog/vocational-discernment-guide/" className={linkClass}>vocational discernment guide</Link>
                {" offers simple, concrete steps."}
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              Alongside St. Raphael, many pray the{" "}
              <a href="https://catholicbibleonline.com/novenas/good-husband/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for a Good Husband</a> and{" "}
              <a href="https://catholicbibleonline.com/novenas/marriage/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Marriage</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of finding a spouse?",
                  answer: "St. Raphael the Archangel is the best-known Catholic patron of those seeking a husband or wife, because in the Book of Tobit he guides Tobiah to Sarah and blesses their marriage. St. Anne, St. Anthony of Padua, St. Joseph and St. Valentine are also invoked by popular tradition.",
                },
                {
                  question: "Where is St. Raphael in the Bible?",
                  answer: "Raphael appears in the Book of Tobit, especially chapters 3 to 12. Tobit is part of the Catholic and Orthodox Old Testament; most Protestant Bibles omit it or place it in the Apocrypha. Some traditions also associate him with the angel at the pool of Bethesda in John 5:4, though the Gospel does not name that angel.",
                },
                {
                  question: "When is the feast of St. Raphael?",
                  answer: "St. Raphael is celebrated on September 29 together with St. Michael and St. Gabriel. Before the 1969 revision of the General Roman Calendar, his feast was kept on October 24.",
                },
                {
                  question: "Will praying to St. Raphael guarantee that I find a spouse?",
                  answer: "No prayer guarantees a particular outcome. Asking St. Raphael’s intercession entrusts your desire for marriage to God’s providence and asks for guidance, healing and good meetings. God answers in his own way and time, which may include a different vocation.",
                },
                {
                  question: "Can a man pray to St. Raphael for a wife?",
                  answer: "Yes. The devotion began with a man’s story: Raphael guided Tobiah to his wife, Sarah. Men and women alike pray to St. Raphael for a future spouse.",
                },
                {
                  question: "What Bible reading from Tobit is used at Catholic weddings?",
                  answer: "Tobit 8:4–8, the prayer Tobiah and Sarah pray together on their wedding night, is one of the Old Testament readings couples may choose for a Catholic wedding Mass.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Grow in faith while you wait"
              description="Take our free assessment and get a personal plan for prayer, the sacraments and discernment."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
