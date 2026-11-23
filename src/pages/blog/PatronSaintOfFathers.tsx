import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-fathers";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Fathers: St. Joseph & Prayers";
const DESCRIPTION =
  "St. Joseph is the patron saint of fathers and families. Meet other saintly dads, find a Father’s Day blessing, and prayers for fathers living and deceased.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const PATRONS: { situation: string; saint: string; why: string; feast: string }[] = [
  {
    situation: "Every father",
    saint: "St. Joseph",
    why: "Raised Jesus, protected Mary, and worked to provide for them",
    feast: "March 19 (solemnity); May 1",
  },
  {
    situation: "Grandfathers",
    saint: "St. Joachim",
    why: "By tradition the father of Mary and grandfather of Jesus",
    feast: "July 26 (with St. Anne)",
  },
  {
    situation: "Widowers and single dads",
    saint: "St. Louis Martin",
    why: "Raised five daughters alone after his wife Zélie died",
    feast: "July 12",
  },
  {
    situation: "Fathers grieving a child",
    saint: "Sts. Louis and Zélie Martin",
    why: "Buried four of their nine children in infancy or early childhood",
    feast: "July 12",
  },
  {
    situation: "Fathers of wayward children",
    saint: "St. Joseph",
    why: "Searched three days for the lost boy Jesus in Jerusalem",
    feast: "March 19",
  },
  {
    situation: "Families who lost their father",
    saint: "Bl. Michael McGivney",
    why: "Founded the Knights of Columbus partly to protect widows and orphans",
    feast: "August 13",
  },
];

export default function PatronSaintOfFathers() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of fathers, patron saint of dads, st joseph prayer for fathers, catholic father's day prayer, patron saint of families, father's day blessing catholic, prayer for a deceased father, st louis martin"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Fathers", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of Fathers</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Patron Saint of Fathers: St. Joseph, Other Saintly Dads, and Prayers for Fathers
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Fatherhood is mostly done in ordinary hours: drop-offs, bills, late nights with a sick child, conversations that go badly and have to be tried again. The Church’s model father never says a single recorded word in the Gospels. Here is what St. Joseph and a few other saintly fathers can teach dads today, with prayers for Father’s Day, for hard seasons, and for fathers who have died.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-sky-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The patron saint of fathers is St. Joseph, the husband of Mary and foster father of Jesus. He is also the patron of families and of the universal Church, and his solemnity is March 19. Many Catholics also turn to St. Joachim, Mary’s father by tradition, and to St. Louis Martin, the father of St. Thérèse of Lisieux.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why St. Joseph Is the Patron of Fathers</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Joseph was not the biological father of Jesus, and that is part of why he speaks to so many men. He became a father by choosing to be one. When he learned Mary was pregnant, he planned to end the betrothal quietly rather than expose her to shame, and Matthew calls him “a just man” (Matthew 1:19). After the angel spoke to him in a dream, he took Mary into his home and named the child Jesus (Matthew 1:18–25). Naming the child was a father’s act. He claimed this boy as his own.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                When Herod threatened the child, Joseph got up in the night and took his family to Egypt (Matthew 2:13–15). He protected them by acting fast and living as a refugee. Years later, when twelve-year-old Jesus stayed behind in Jerusalem, Joseph and Mary searched for three days. Mary’s words when they found him are some of the most honest in Scripture about parenting: “Your father and I have been looking for you anxiously” (Luke 2:48). Jesus then went home with them and was obedient to them, and he grew in wisdom and stature (Luke 2:41–52). Joseph raised the Son of God to manhood.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                This page focuses on Joseph as a father. For his full life, devotions and titles, see our{" "}
                <Link to="/blog/saint-joseph-complete-guide/" className={linkClass}>complete guide to St. Joseph</Link>
                {" and the page on the "}
                <Link to="/blog/solemnity-of-saint-joseph/" className={linkClass}>Solemnity of St. Joseph</Link>
                {" on March 19."}
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Seven Portraits from Patris Corde</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In 2020 Pope Francis wrote the apostolic letter Patris Corde (“With a Father’s Heart”) and opened a Year of St. Joseph. He organized the letter around seven descriptions of Joseph, and each one reads like an examination of conscience for a dad. Joseph was a beloved father, loved by the people around him. He was a tender and loving father, who taught Jesus to walk and showed him God’s gentleness. He was an obedient father, who acted on God’s word even in the dark. He was an accepting father, who took Mary and her situation as they were instead of as he had planned. He was a creatively courageous father, who solved problems with the resources at hand. He was a working father, who provided by his trade. And he was a father in the shadows, who never treated his son as a possession.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                That last image is the most countercultural. A good father, the letter suggests, prepares his child to stand on his own and then steps back. Fathers of adult children who no longer call as often as they would like may find a strange comfort in it.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Pillar of Families</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Litany of St. Joseph, approved for public use by Pope St. Pius X in 1909, gives him titles that read like a job description: “Pillar of families,” “Glory of home life,” “Model of workmen,” “Solace of the wretched.” In 2021, the Vatican added seven new invocations, including “Support in difficulties” and “Patron of exiles.” A father who prays the litany once a week, perhaps on Wednesday, the day traditionally dedicated to St. Joseph, will find most of his own worries named in it.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Other Saintly Fathers</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Joachim, Grandfather of Jesus</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Scripture does not name Mary’s parents. Their names, Joachim and Anne, come from a second-century text called the Protoevangelium of James, which tells of a couple who waited many years for a child. The Church honors them together on July 26, and Joachim is a natural patron for grandfathers and for men who have waited and prayed for children.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read more in our article on{" "}
                <Link to="/blog/saints-anne-and-joachim/" className={linkClass}>Sts. Anne and Joachim</Link>
                {". Mothers have their own guide on the "}
                <Link to="/blog/patron-saint-of-mothers/" className={linkClass}>patron saint of mothers</Link>.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Louis Martin, Father of St. Thérèse</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Louis Martin (1823–1894) was a watchmaker in Alençon, France, who once hoped to become a monk. Instead he married Zélie Guérin, a lacemaker, in 1858. They had nine children; four died young, and five daughters grew up to become nuns, the youngest being St. Thérèse of Lisieux. When Zélie died of breast cancer in 1877, Louis was left to raise five girls between the ages of four and seventeen. He moved the family to Lisieux to be near relatives and became, by Thérèse’s own account, a deeply tender father whom she called her “king.”
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                His last years were hard. A cerebral illness affected his mind, and he spent about three years in a psychiatric hospital in Caen before returning home to die. Pope Francis canonized Louis and Zélie together in 2015, the first married couple canonized as a couple. Their feast is July 12. He is an especially good patron for widowers, single fathers, fathers with dementia, and the adult children who care for them.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Bl. Michael McGivney</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Father Michael McGivney (1852–1890) was a parish priest in New Haven, Connecticut. His own father died while he was in seminary, and he saw how quickly an immigrant family could fall into poverty when its breadwinner was gone. In 1882 he founded the Knights of Columbus as a fraternal society that would, among other things, provide for widows and orphans. He was beatified in 2020. Families who have lost a father, and men who step in as father figures for them, can ask his prayers.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patrons for Fathers in Every Season</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Situation</th>
                      <th className="p-3 font-semibold">Saint</th>
                      <th className="p-3 font-semibold">Why</th>
                      <th className="p-3 font-semibold">Feast day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PATRONS.map((p) => (
                      <tr key={p.situation} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{p.situation}</td>
                        <td className="p-3 text-text">{p.saint}</td>
                        <td className="p-3 text-text">{p.why}</td>
                        <td className="p-3 text-text-muted">{p.feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Fatherhood Is Hard</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For a father whose child has walked away from the family or the faith, the parable of the prodigal son is really about the father (Luke 15:11–32). He lets his son go, keeps watching the road, and when the son finally turns back, he runs to meet him while he is “still a long way off” (Luke 15:20). He does not wait for a perfect apology. He also goes out to plead with the angry older son. Both children are his, and he refuses to give up on either.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For men who grew up with an absent, harsh or abusive father, the word “father” may hurt. St. Joseph can be a help here precisely because he shows what a father was meant to be. Jesus taught us to call God “Father” not to remind us of our worst memories but to give us a Father who does not fail. Healing that wound often takes time, a good counselor and the sacraments, and it is worth the effort, especially for men who are now fathers themselves and want to do better.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For widowers, Louis Martin’s example is a quiet reassurance that a grieving father can still raise children well. For fathers who have buried a child, the Martins knew that grief four times over, and their letters show both deep sorrow and stubborn hope. Fathers often grieve in private and are expected to hold everyone else together. Let a priest, a friend or a support group carry some of it with you.
              </LinkedText>

              <QuizCTA
                title="Leading your family in faith starts with you"
                description="Take our short Catholic life assessment and get a realistic plan for prayer, Mass and Confession that fits a busy father’s week."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayers for Fathers</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Father’s Morning Prayer</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Heavenly Father, every good father learns from you. Before my children wake, I give you this day. Give me patience when I am tired, gentleness when I want to be harsh, and courage to say no when it matters. Help me provide for my family without letting work steal me from them. Let my children see in me something of your faithfulness. St. Joseph, guardian of the Holy Family, stand beside me today. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Father’s Day Blessing</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord God, we thank you for the father you have given us, and for every man who has been a father to us. Bless him for the work of his hands, the sacrifices we noticed and the ones we never saw. Strengthen him where he is weary, heal what is wounded, and fill our home with your peace. May he know he is loved by us and by you. St. Joseph, pray for him. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer for a Father Who Has Died</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Merciful Father, I entrust to you my dad, [name]. Thank you for the life you gave him and the life he gave me. Forgive whatever he did wrong and whatever I failed to forgive while he was here. Bring him into your presence, where every tear is wiped away. Eternal rest grant unto him, O Lord, and let perpetual light shine upon him. May he rest in peace. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">The first three prayers were written for this guide; the closing lines of the third are the traditional Eternal Rest prayer.</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                In the United States, Father’s Day is the third Sunday of June. In 2027 it falls on June 20. Many parishes give a blessing for fathers at the end of Mass that day; if yours does not, the blessing above works well at the family table. For a father who has died, see our{" "}
                <Link to="/blog/catholic-prayers-for-the-dead/" className={linkClass}>Catholic prayers for the dead</Link>
                {". For Scripture to write in a card, try our "}
                <Link to="/blog/bible-verses-for-fathers/" className={linkClass}>Bible verses for fathers</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Ways to Grow as a Catholic Father</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>Bless your children.</strong> Trace a small cross on their foreheads at bedtime or before school. It takes three seconds, and many grown children remember it for life.
                </li>
                <li>
                  <strong>Lead short family prayer.</strong> A father does not need to be eloquent. Grace before meals and one decade of the Rosary on a weeknight is a real start.
                </li>
                <li>
                  <strong>Let them see you go to Confession.</strong> Children learn more from a father who admits his mistakes than from one who pretends to have none.
                </li>
                <li>
                  <strong>Honor St. Joseph’s days.</strong> March 19 and May 1 are good days to take a child to Mass, set out a St. Joseph table, or simply tell them why Joseph matters to you.
                </li>
                <li>
                  <strong>Find other fathers.</strong> A men’s group, the Knights of Columbus or a few friends who pray for one another can keep a dad from carrying everything alone.
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                For more, see our{" "}
                <Link to="/blog/catholic-parenting-guide/" className={linkClass}>Catholic parenting guide</Link>
                {", how to "}
                <Link to="/blog/how-to-pray-as-a-family/" className={linkClass}>pray as a family</Link>
                {", "}
                <Link to="/blog/catholic-family-traditions/" className={linkClass}>Catholic family traditions</Link>
                {", and the "}
                <Link to="/blog/patron-saint-of-workers/" className={linkClass}>patron saint of workers</Link>
                {" for fathers carrying the weight of a job or a job search."}
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To pray for your father or your family over nine days, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/st-joseph/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">St. Joseph Novena</a> and the{" "}
              <a href="https://catholicbibleonline.com/novenas/families/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Families</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of fathers?",
                  answer: "St. Joseph, the husband of Mary and foster father of Jesus. He is also the patron of families, workers and the universal Church. His solemnity is March 19.",
                },
                {
                  question: "Who is the patron saint of families?",
                  answer: "St. Joseph is the best-known patron of families; the Litany of St. Joseph calls him “Pillar of families.” Catholics also pray to the Holy Family together and to Sts. Louis and Zélie Martin.",
                },
                {
                  question: "Is there a Catholic Father’s Day prayer?",
                  answer: "There is no official Father’s Day prayer, but many parishes offer a blessing for fathers at Mass on the third Sunday of June. The blessing on this page can be prayed at home.",
                },
                {
                  question: "Who is a patron saint for widowers or single fathers?",
                  answer: "St. Louis Martin, the father of St. Thérèse of Lisieux, raised five daughters after his wife Zélie died in 1877. He and Zélie were canonized together in 2015; their feast is July 12.",
                },
                {
                  question: "Who is the patron saint of grandfathers?",
                  answer: "St. Joachim, whom tradition names as the father of the Virgin Mary. He is honored with St. Anne on July 26.",
                },
                {
                  question: "Why is St. Joseph called a father if he was not Jesus’ biological father?",
                  answer: "Joseph was the legal father of Jesus, named him, and raised him. Scripture itself calls him Jesus’ father (Luke 2:48), and the Church honors him as foster father of the Lord.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Be the father your family needs"
              description="Build a steady rhythm of prayer, Mass and Confession that you can lead at home."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
