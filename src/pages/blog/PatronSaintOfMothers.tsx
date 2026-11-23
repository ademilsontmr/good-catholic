import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-mothers";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Mothers: Saints & Prayers";
const DESCRIPTION =
  "Who is the patron saint of mothers? St. Monica and St. Anne, plus four more saints for moms, feast days, and prayers for mothers and wayward children.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const SAINTS: { name: string; dates: string; why: string; feast: string }[] = [
  {
    name: "Mary, Mother of God",
    dates: "1st century",
    why: "Mother of Jesus, given to every disciple as mother at the cross",
    feast: "January 1 (Solemnity)",
  },
  {
    name: "St. Monica",
    dates: "c. 331–387",
    why: "Prayed for years for her son Augustine; patron of mothers of wayward children",
    feast: "August 27",
  },
  {
    name: "St. Anne",
    dates: "1st century BC",
    why: "Mother of the Virgin Mary; patron of mothers, grandmothers and women hoping for a child",
    feast: "July 26 (with St. Joachim)",
  },
  {
    name: "St. Gianna Beretta Molla",
    dates: "1922–1962",
    why: "Physician and mother of four who gave her life for her unborn daughter",
    feast: "April 28",
  },
  {
    name: "St. Zélie Martin",
    dates: "1831–1877",
    why: "Working mother of nine, four of whom died young; mother of St. Thérèse",
    feast: "July 12 (with St. Louis Martin)",
  },
  {
    name: "St. Elizabeth Ann Seton",
    dates: "1774–1821",
    why: "Widowed mother of five who founded the Sisters of Charity in Maryland",
    feast: "January 4",
  },
];

export default function PatronSaintOfMothers() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of mothers, patron saint of moms, st monica prayer for children, prayer for mothers catholic, mother's day prayer catholic, patron saint of mothers of wayward children, st anne, st gianna, st zelie martin"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Mothers", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of Mothers</span>
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
                Patron Saint of Mothers: Saints Who Knew What Motherhood Costs, and Prayers for Moms
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Some of these women raised saints. Some buried children, raised them alone, or waited decades for a son to come home. Here are the saints mothers turn to, the particular griefs they can carry to them, and three prayers, including a blessing for Mother’s Day.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The best-known patron saint of mothers is St. Monica (feast August 27), who prayed for years for her son Augustine until he returned to the faith; she is especially the patron of mothers whose children have wandered. St. Anne, mother of the Virgin Mary (July 26), is the other classic patron. Above every saint stands Mary herself, the Mother of God, whom Jesus gave to his disciples as their mother.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mary, the Mother Behind Every Mother</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Before any patron saint, Catholic mothers have Mary. She knew the ordinary work of raising a child in a small town, the fear of losing him for three days in Jerusalem (Luke 2:48), and the unbearable experience of watching him die. From the cross Jesus entrusted her to the beloved disciple and the disciple to her (John 19:26–27), and the Church has always read that moment as Mary being given to all believers as mother. The Church celebrates her divine motherhood on January 1, the Solemnity of Mary, Mother of God.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For her life, titles and feasts, see our{" "}
                <Link to="/blog/virgin-mary-complete-guide/" className={linkClass}>complete guide to the Virgin Mary</Link>
                {" and the page on "}
                <Link to="/blog/mary-mother-of-god-prayer-feast-guide/" className={linkClass}>Mary, Mother of God</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. Monica, Patron of Mothers Who Keep Praying</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Monica was a North African mother whose brilliant son Augustine abandoned the faith she raised him in, took up with a sect, lived with a woman he did not marry and moved to Italy partly to escape her. She followed him, kept praying and kept weeping. In his Confessions (3.12), Augustine recalls a bishop she pestered for help who finally sent her away with the assurance that the child of those tears could not be lost. Augustine was baptized at Easter in 387, and Monica died a few months later at Ostia, content that her prayer had been answered.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Her patronage is not a promise that every child will come back on a schedule. It is the witness of a woman who refused to stop loving and praying, and who saw the answer only after many years. Her feast is August 27, the day before her son’s.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read her full story on our{" "}
                <Link to="/blog/saint-monica/" className={linkClass}>St. Monica</Link>
                {" page, and pray the "}
                <Link to="/blog/st-monica-novena-for-children/" className={linkClass}>St. Monica novena for children</Link>
                {" for a son or daughter who has left the Church."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. Anne, Mother of Mary</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Scripture does not name Mary’s parents. The names Anne and Joachim come from early Christian tradition, which also holds that they were older and childless before Mary was born. That is why St. Anne is invoked by mothers, by grandmothers and by couples hoping for a child. She and Joachim share a feast on July 26.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                See our{" "}
                <Link to="/blog/saint-anne/" className={linkClass}>St. Anne</Link>
                {" guide for her devotion and shrines."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Modern Mothers Who Became Saints</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Gianna Beretta Molla (1922–1962)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Gianna was an Italian physician, a skier and a lover of mountains, who married Pietro Molla in 1955 and had three children in quick succession. During her fourth pregnancy a fibroid was found in her uterus. She asked the doctors to protect the baby, and a week after her daughter Gianna Emanuela was born in 1962 she died. Pope John Paul II canonized her in 2004, with her husband and youngest daughter present. Her feast is April 28, and expectant mothers often keep her picture close.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Zélie Martin (1831–1877)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Zélie Martin ran a successful lace business in Alençon, France, while raising her children with her husband, St. Louis Martin. She gave birth to nine children and buried four of them in infancy or early childhood. Her surviving letters are frank about exhaustion, money, a difficult child and her own fear of dying young. She died of breast cancer when her youngest, the future St. Thérèse of Lisieux, was four. Pope Francis canonized Louis and Zélie together in 2015, the first married couple canonized as a pair, and they are remembered on July 12, their wedding anniversary. Mothers who have lost a child, or who juggle work and family, find a friend in her.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Her youngest daughter’s story is on our{" "}
                <Link to="/blog/saint-therese-of-lisieux/" className={linkClass}>St. Thérèse of Lisieux</Link>
                {" page."}
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Elizabeth Ann Seton (1774–1821)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The first American-born saint was a New York society wife who was widowed in Italy at twenty-nine with five children, converted to Catholicism and went on to found the Sisters of Charity in Emmitsburg, Maryland, while still raising her family. She is a natural patron for widows and single mothers. Her feast is January 4.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Her full biography is on our{" "}
                <Link to="/blog/saint-elizabeth-ann-seton/" className={linkClass}>St. Elizabeth Ann Seton</Link>
                {" page."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saints for Mothers at a Glance</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Saint</th>
                      <th className="p-3 font-semibold">Dates</th>
                      <th className="p-3 font-semibold">Why mothers invoke her</th>
                      <th className="p-3 font-semibold">Feast day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAINTS.map((s) => (
                      <tr key={s.name} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{s.name}</td>
                        <td className="p-3 whitespace-nowrap text-text-muted">{s.dates}</td>
                        <td className="p-3 text-text">{s.why}</td>
                        <td className="p-3 text-text-muted">{s.feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text leading-relaxed mb-6">
                Fathers have their own patrons; see the{" "}
                <Link to="/blog/patron-saint-of-fathers/" className={linkClass}>patron saint of fathers</Link>
                {". For the saints who watch over the little ones themselves, see the "}
                <Link to="/blog/patron-saint-of-children/" className={linkClass}>patron saint of children</Link>.
              </p>

              <QuizCTA
                title="Pouring out more than you take in?"
                description="Mothers rarely get time for their own faith. Take our short Catholic life assessment and get a realistic plan for prayer, Mass and Confession."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saints for a Mother’s Particular Griefs</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Longing for a child. The story of Hannah in 1 Samuel 1 is the Bible’s most honest portrait of infertility: she weeps, refuses to eat, endures the taunts of a rival, and prays so intensely at the sanctuary that the priest thinks she is drunk. When Samuel is born she says simply, “I prayed for this child” (1 Samuel 1:27). Women who wait for a child can pray with Hannah and with St. Anne, and the Church recognizes them as mothers in heart whether or not a child comes.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Miscarriage and infant loss. A child lost before birth is still your child. St. Zélie Martin buried four of hers and wrote of looking forward to finding them again in heaven. The Church entrusts children who die without Baptism to the mercy of God, who desires that all be saved (Catechism 1261). Many parents name their baby, ask a priest to pray with them, or have a Mass offered.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Adult children who have left the faith. This is the grief St. Monica knew best. Keep praying, keep the relationship warm, and resist turning every visit into an argument. Augustine’s conversion came through his own reading, a friend and a bishop he admired, not through his mother’s lectures, but it came wrapped in her years of prayer.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Single mothers and stepmothers. St. Elizabeth Ann Seton and St. Monica both raised children as widows. Stepmothers and adoptive mothers can look to St. Joseph, who loved and raised a son who was not biologically his, and to Mary, who received the beloved disciple as her own at the foot of the cross.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Prayers for Mothers</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Mother’s Morning Prayer</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord, before the house wakes up, I give you this day. Give me patience for the spills, the arguments and the questions I cannot answer. Let my children see in me some small reflection of your love, and forgive me when they see my temper instead. Keep them safe today in the places I cannot follow. Mary, my mother, teach me to keep all these things in my heart as you did. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer for a Child Who Left the Church</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Father, you know my child better than I do, and you love them more. I cannot argue them home, so I place them in your hands. Send good friends and honest teachers across their path. Keep alive in them whatever they received at the font and at our table. Free me from bitterness and from the fear that I failed, and help me love them as they are today. St. Monica, who waited so long for your son, pray with me for mine. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Mother’s Day Blessing</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Loving God, we thank you for the mothers who gave us life and for every woman who has mothered us in faith. Bless the mothers who are with us today, and those we remember with love. Comfort mothers who are grieving, mothers who are waiting, and mothers who feel alone. Reward their hidden sacrifices, renew their strength, and gather all of us one day into your home. Through Christ our Lord. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">All three prayers were written for this guide. They are not liturgical texts.</p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In the United States, Mother’s Day falls on the second Sunday of May. The US edition of the Book of Blessings includes an order for blessing mothers on Mother’s Day, and many parishes use it at the end of Mass. A family can also pray the blessing above at the dinner table, with the father or an older child leading.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For Scripture to write in a card, see our{" "}
                <Link to="/blog/bible-verses-for-mothers/" className={linkClass}>Bible verses for mothers</Link>
                {". Expecting mothers will find their own saints in the guide to the "}
                <Link to="/blog/patron-saint-of-pregnancy/" className={linkClass}>patron saint of pregnancy</Link>.
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To pray nine days for your children or your household, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/st-anne/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena to St. Anne</a> or the{" "}
              <a href="https://catholicbibleonline.com/novenas/children/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Children</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of mothers?",
                  answer: "St. Monica and St. Anne are the traditional patrons of mothers. St. Gianna Beretta Molla, St. Zélie Martin and St. Elizabeth Ann Seton are modern mothers often invoked as well, and Mary, the Mother of God, is the mother of all believers.",
                },
                {
                  question: "Who is the patron saint of mothers of wayward children?",
                  answer: "St. Monica. She prayed for her son Augustine for many years while he lived far from the faith, and he was baptized in 387. Her feast is August 27, the day before his.",
                },
                {
                  question: "Is there a prayer to St. Monica for children?",
                  answer: "Yes. Many parents pray a novena to St. Monica for a child who has left the Church, asking her to join their prayer as she prayed for Augustine. Our St. Monica novena page includes a full nine-day version.",
                },
                {
                  question: "Who is the patron saint of grandmothers?",
                  answer: "St. Anne, the mother of the Virgin Mary and grandmother of Jesus. She shares her feast with her husband, St. Joachim, on July 26.",
                },
                {
                  question: "Is there a Catholic blessing for Mother’s Day?",
                  answer: "Yes. The US edition of the Book of Blessings includes a blessing of mothers on Mother’s Day, which many parishes use at Mass on the second Sunday of May. Families can also pray their own blessing at home.",
                },
                {
                  question: "Which saint helps mothers who have lost a child?",
                  answer: "St. Zélie Martin buried four of her nine children and is a gentle companion for grieving mothers. Mary, who stood at the foot of the cross, is the first mother to turn to.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Mothers need prayer too"
              description="Find a rhythm of prayer, Mass and Confession that fits into a full family life."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
