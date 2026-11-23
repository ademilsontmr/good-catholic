import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeartHandshake, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-love";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Love: Couples & Prayers";
const DESCRIPTION =
  "Who is the patron saint of love? St. Valentine, plus the saints for dating, engaged and married couples, feast days, and prayers for every stage of love.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const PATRONS: { need: string; patron: string; feast: string }[] = [
  { need: "Finding love or a future spouse", patron: "St. Raphael the Archangel; St. Anthony of Padua", feast: "September 29; June 13" },
  { need: "Dating and courtship", patron: "St. Valentine", feast: "February 14 (Roman Martyrology)" },
  { need: "Engaged couples", patron: "St. Valentine; St. Raphael the Archangel", feast: "February 14; September 29" },
  { need: "Newlyweds", patron: "Sts. Priscilla and Aquila", feast: "July 8 (Roman Martyrology)" },
  { need: "A marriage in trouble", patron: "Sts. Louis and Zélie Martin; Bl. Luigi and Maria Beltrame Quattrocchi", feast: "July 12; November 25" },
  { need: "A long marriage and grandparents", patron: "Sts. Joachim and Anne", feast: "July 26" },
  { need: "Heartbreak and unrequited love", patron: "St. Valentine; Our Lady of Sorrows", feast: "February 14; September 15" },
];

export default function PatronSaintOfLove() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of love, patron saint of couples, patron saint of lovers, patron saint of engaged couples, patron saint of happy marriages, patron saint of relationships, catholic prayer for boyfriend, catholic prayer for girlfriend, catholic valentine's day, st valentine"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Love", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of Love</span>
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
                Patron Saint of Love: Saints for Couples, Engaged Couples and Marriages, With Prayers
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                St. Valentine gets the cards and the chocolate, but the Church offers a whole company of saints for people who are looking for love, falling in love, preparing to marry, keeping a marriage alive, or picking up the pieces after it ends. Here is who they are, what is history and what is legend, and how to pray at each stage.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <HeartHandshake className="w-24 h-24 text-rose-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The best-known patron saint of love, couples and engaged couples is St. Valentine, a Roman priest martyred around 269 and remembered on February 14. Catholics also turn to St. Raphael the Archangel and St. Anthony of Padua when looking for a spouse, and to married saints such as Sts. Louis and Zélie Martin and Sts. Joachim and Anne for a happy, lasting marriage.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Means by Love</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Before choosing a patron, it helps to know what kind of love you are asking them to pray for. Christian faith starts with a bold claim: "God is love, and whoever remains in love remains in God" (1 John 4:16). Human love is not a rival to that love but a share in it. The Catechism puts it this way: God, who created us out of love, also calls us to love, and this is the "fundamental and innate vocation of every human being" (CCC 1604).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Thomas Aquinas gave the shortest definition that still holds up: to love is to will the good of another (quoted in CCC 1766). That rules out a lot of what passes for romance. Attraction is a gift, but love begins when I want what is truly good for the other, even at a cost to me. St. Paul's famous description, read at countless weddings, is a list of those costs: love is patient, kind, not jealous, not self-seeking, and it "bears all things, believes all things, hopes all things, endures all things" (1 Corinthians 13:4–7).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Scripture is not shy about romantic love either. The Song of Songs is a book of love poetry between a bride and groom, and near its end comes the line "Set me as a seal upon your heart... for love is strong as death" (Song of Songs 8:6–7). Marriage takes that passion and makes it a covenant. Husbands are told to love their wives "as Christ loved the church and handed himself over for her" (Ephesians 5:25), and the Church describes marriage as a lifelong partnership ordered to the good of the spouses and to children (CCC 1601).
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read more in{" "}
                <Link to="/blog/what-is-love-catholic/" className={linkClass}>What Is Love? A Catholic Answer</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. Valentine: History and Legend</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                What we can say with confidence is short. A priest named Valentine was martyred in Rome and buried on the Via Flaminia, probably during the reign of the emperor Claudius II, around 269. Early sources also mention a Bishop Valentine of Terni, about sixty miles north of Rome, martyred and buried on the same road; scholars still debate whether these are two men or one remembered in two places. Either way, a church was built over his tomb, and his memory was kept on February 14.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The famous stories come later. Tradition holds that Valentine secretly married Christian couples, or soldiers whom the emperor had forbidden to marry, and that before his execution he healed his jailer's daughter and left her a note signed "from your Valentine." These tales are charming but cannot be traced to early sources. The link between his feast and romantic love seems to have grown up in the late Middle Ages, when English poets, Chaucer among them, wrote of birds choosing their mates on St. Valentine's day.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Because so little is certain, St. Valentine was removed from the General Roman Calendar in the 1969 reform. That did not "un-saint" him. He is still listed in the Roman Martyrology on February 14, and Catholics may honor him freely. On the Church's universal calendar, February 14 is now the feast of Sts. Cyril and Methodius, so a Catholic Valentine's Day can honor both. Several churches claim relics of St. Valentine, including churches in Rome and Terni and the Whitefriar Street Carmelite Church in Dublin, which says it received relics from Pope Gregory XVI in 1836. As with many ancient relics, those claims cannot all be verified.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For prayers to St. Valentine and more on his feast, see our{" "}
                <Link to="/blog/st-valentine-prayer-catholic-guide/" className={linkClass}>St. Valentine prayer guide</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saints for Finding Love</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Raphael the Archangel</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In the Book of Tobit, the angel Raphael travels in disguise with young Tobiah, leads him to his kinswoman Sarah, and frees her from the affliction that had ruined her seven earlier marriages. On their wedding night, Tobiah and Sarah pray together before anything else, asking God to let them "grow old together" (Tobit 8:7). That prayer has made Raphael the go-to patron for single people praying for a spouse, and Tobit 8 is a common wedding reading. His feast, shared with Michael and Gabriel, is September 29.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                We have a full page of{" "}
                <Link to="/blog/st-raphael-prayer-for-a-spouse/" className={linkClass}>St. Raphael prayers for a future spouse</Link>
                {", so we keep this short here."}
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Anthony of Padua</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Most Americans know St. Anthony of Padua as the finder of lost keys. In Portugal, where he was born, and in Brazil, he is also a beloved matchmaker. Folk customs around his June 13 feast include young women asking his help to find a husband, and Lisbon has a long tradition of group weddings around his feast. Brazil celebrates its own Valentine's Day, the Dia dos Namorados, on June 12, the eve of his feast, and the timing is widely credited to his reputation, though the date was also a commercial choice. These are popular customs, not official patronages.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read his story in our{" "}
                <Link to="/blog/saint-anthony-of-padua/" className={linkClass}>profile of St. Anthony of Padua</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Married Saints for Couples</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                If you want a patron who actually knew what it was like to share a bathroom, a budget and a bad week with another person, look to the married saints.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Sts. Louis and Zélie Martin</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                A watchmaker and a lacemaker in Alençon, France, Louis and Zélie Martin both had once hoped to enter religious life. Instead they married in 1858, ran two small businesses, raised five daughters to adulthood and buried four children who died young. Zélie died of breast cancer in 1877, and Louis later suffered a long mental decline. Their youngest daughter became St. Thérèse of Lisieux. Pope Francis canonized them together in October 2015, the first married couple canonized as a couple. Their feast is July 12, the anniversary of their wedding. They are good patrons for couples carrying grief, illness, money worries or the strain of raising children.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Bl. Luigi and Maria Beltrame Quattrocchi</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                An Italian lawyer and a writer, married in Rome in 1905, Luigi and Maria lived an ordinary middle-class life through two world wars. Pope John Paul II beatified them together in 2001, the first couple ever beatified together, and their feast is November 25, their wedding anniversary.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Sts. Joachim and Anne</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Scripture does not name the parents of the Virgin Mary, but ancient tradition calls them Joachim and Anne and tells of a long, faithful marriage marked by years of waiting for a child. They are patrons of grandparents and a natural choice for couples celebrating decades together. Their feast is July 26.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                See our page on{" "}
                <Link to="/blog/saints-anne-and-joachim/" className={linkClass}>Sts. Anne and Joachim</Link>
                {" for their story and devotions."}
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Sts. Priscilla and Aquila</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                This Jewish Christian couple, tentmakers by trade, took St. Paul into their home and business at Corinth (Acts 18:1–3), traveled with him, and taught the eloquent preacher Apollos (Acts 18:26). Paul calls them his co-workers who "risked their necks" for him and greets the church that met in their house (Romans 16:3–5). They are the New Testament's picture of a couple whose marriage was turned outward, toward hospitality and mission, and they make good patrons for newlyweds setting the habits of a shared life. The Roman Martyrology remembers them on July 8.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Which Saint for Which Stage of Love</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Your need</th>
                      <th className="p-3 font-semibold">Patron to ask</th>
                      <th className="p-3 font-semibold">Feast day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PATRONS.map((p) => (
                      <tr key={p.need} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{p.need}</td>
                        <td className="p-3 text-text">{p.patron}</td>
                        <td className="p-3 text-text-muted">{p.feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <QuizCTA
                title="Is your faith ready for a lifelong love?"
                description="Take our short Catholic life assessment and get a personal plan for prayer, Mass and Confession, alone or as a couple."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Catholic Valentine's Day</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                February 14 does not need to be baptized with guilt. Flowers and dinner are fine. A few additions can turn it from a consumer holiday into something you will both remember. Go to Mass together that morning if you can, or on the Sunday before, and offer it for each other. Say one short prayer together at dinner, even if it feels awkward the first time. And build a bit of service into the date: bring a meal to an elderly neighbor, babysit for a worn-out young couple so they can go out, or drop off groceries at a parish food pantry on the way to the restaurant.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Remember that February 14 sometimes falls during Lent. When it lands on Ash Wednesday, as it did in 2024, the day of fasting and abstinence comes first, and the celebration can move to another evening.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying as a Dating Couple</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Many Catholics search for a prayer for a boyfriend or girlfriend because they sense that praying for someone is one of the most loving things they can do. It is. Pray for the person by name each day, asking not that they become what you want, but that they become who God made them to be. If you are both Catholic, try a decade of the Rosary or the day's Gospel reading together once a week. A dating relationship is a time of discernment, and prayer helps both of you see whether it leads toward marriage.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Church's teaching on chastity belongs here too, not as a list of prohibitions but as freedom. The Catechism describes chastity as the successful integration of sexuality within the person (CCC 2337), so that desire serves love instead of steering it.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For practical help, read our{" "}
                <Link to="/blog/catholic-dating-guide/" className={linkClass}>Catholic dating guide</Link>
                {" and our page on "}
                <Link to="/blog/catholic-dating-and-courtship/" className={linkClass}>Catholic dating and courtship</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Engaged Couples, Newlyweds and Anniversaries</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Once you are engaged, the Church walks with you through marriage preparation, often called Pre-Cana after the wedding at Cana where Jesus worked his first sign. Most US dioceses ask couples to contact the parish at least six months to a year before the wedding. The Book of Blessings includes a blessing for an engaged couple, which any priest or deacon can give, and it makes a lovely start to the engagement. Marriage is a sacrament, and the Catechism teaches that its grace is meant to perfect the couple's love and strengthen their unity (CCC 1641), with Christ himself as the source of that grace (CCC 1642).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For anniversaries, the Book of Blessings also has an order for blessing a married couple. Ask your pastor for it on a milestone year, or simply ask for a blessing after Sunday Mass. Many dioceses also hold an annual Mass for jubilarian couples.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Learn more about{" "}
                <Link to="/blog/catholic-marriage-preparation/" className={linkClass}>Catholic marriage preparation</Link>
                {" and "}
                <Link to="/blog/what-is-pre-cana/" className={linkClass}>what Pre-Cana involves</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Love Hurts</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Not every love story ends with a wedding, and not every marriage is happy. A breakup, a love that was never returned, or a marriage that has gone cold can bring real grief. Faith does not ask you to pretend it does not hurt. The Psalms are full of people telling God exactly how much it hurts, and "The Lord is close to the brokenhearted" (Psalm 34:19) was written for moments like these.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Give yourself time. Resist the urge to fill the silence right away with a new relationship or with self-blame. Talk to a priest or a trusted friend, and go to Confession if there is something you regret; it is a place to leave it, not relive it. For a struggling marriage, prayer matters, and so does practical help: a Catholic counselor, a retreat for couples such as Retrouvaille, or honest conversations with your pastor. If you are in danger at home, your safety comes first, and the Church does not ask you to stay in harm's way.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                You may find comfort in our{" "}
                <Link to="/blog/novena-for-broken-heart-catholic/" className={linkClass}>novena for a broken heart</Link>
                {" and our "}
                <Link to="/blog/catholic-prayer-for-marriage/" className={linkClass}>Catholic prayers for marriage</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Four Prayers for Love</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                These prayers were written for this guide. Use them as they are or put them in your own words.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Couple's Prayer</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord God, you are love, and every good love comes from you. Thank you for bringing us to each other. Teach us to want what is truly good for one another, to be patient when we are tired, quick to forgive and slow to keep score. Keep us honest with each other and close to you. Let our love make room for others, and not only for ourselves. St. Valentine, Sts. Louis and Zélie, pray for us. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer for a Future Spouse</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Father, wherever the person I may marry is tonight, keep them safe and draw them close to you. Prepare both of us to love well, and give me patience while I wait. If you are calling me to another path, give me the peace to follow it. St. Raphael, guide of Tobiah, lead me where I should go. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer for a Marriage in Trouble</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord Jesus, at Cana you turned water into wine when the celebration ran dry. Our marriage has run dry, and we do not know how to fix it. Soften what has hardened in both of us. Give us the courage to speak the truth gently and to listen without defending ourselves. Send us the help we need, and heal what we cannot heal alone. Blessed Luigi and Maria, Sts. Louis and Zélie, pray for our home. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer After a Breakup</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord, it hurts, and you know it does. I place this person and everything we shared in your hands. Where I was wrong, forgive me; where I was wronged, help me forgive in time. Keep me from bitterness and from despair. Remind me that I am loved by you before and after anyone else. Our Lady of Sorrows, stay with me in this. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">All four prayers were written for this guide. They are not liturgical texts.</p>
              </div>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To pray for your relationship over nine days, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/marriage/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Marriage</a> and the{" "}
              <a href="https://catholicbibleonline.com/novenas/st-anthony/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">St. Anthony Novena</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of love?",
                  answer: "St. Valentine, a Roman priest martyred around 269 and remembered on February 14, is the best-known patron of love, lovers and engaged couples. St. Raphael the Archangel and St. Anthony of Padua are also invoked by people hoping to find a spouse.",
                },
                {
                  question: "Who is the patron saint of happy marriages?",
                  answer: "Catholics often turn to Sts. Louis and Zélie Martin, the first married couple canonized together (2015), and to Sts. Joachim and Anne, the parents of Mary. Bl. Luigi and Maria Beltrame Quattrocchi are another modern example.",
                },
                {
                  question: "Is St. Valentine still a saint?",
                  answer: "Yes. He was removed from the General Roman Calendar in 1969 because so little is known about him, but he remains in the Roman Martyrology on February 14 and Catholics may still honor him.",
                },
                {
                  question: "Did St. Valentine really marry couples in secret?",
                  answer: "That story is a later legend, as is the note signed \"from your Valentine.\" The reliable history is that a priest named Valentine was martyred in Rome and buried on the Via Flaminia.",
                },
                {
                  question: "Can Catholics celebrate Valentine's Day?",
                  answer: "Yes. Many couples go to Mass, pray together, and include an act of service in their date. If February 14 falls on Ash Wednesday, the fast comes first and the celebration can be moved.",
                },
                {
                  question: "Who is the patron saint of heartbreak?",
                  answer: "There is no official patron, but people often ask St. Valentine and Our Lady of Sorrows for comfort after a breakup or an unrequited love.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Love grows where faith grows"
              description="Build a rhythm of prayer, Mass and Confession you can share with the person you love."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
