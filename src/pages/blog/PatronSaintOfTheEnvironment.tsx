import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Leaf, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-the-environment";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of the Environment & Ecology";
const DESCRIPTION =
  "St. Francis of Assisi is the patron saint of ecology. Meet four more saints of creation, what the Church teaches, and prayers for creation and the land.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const SAINTS: { name: string; link: string; feast: string }[] = [
  {
    name: "St. Francis of Assisi",
    link: "Canticle of the Creatures; named patron of ecology by St. John Paul II in 1979",
    feast: "October 4",
  },
  {
    name: "St. Kateri Tekakwitha",
    link: "Mohawk-Algonquin woman who prayed in the forests; widely invoked as patroness of ecology",
    feast: "July 14 (US)",
  },
  {
    name: "St. Hildegard of Bingen",
    link: "Wrote on plants and healing; taught viriditas, the “greenness” of God’s life in creation",
    feast: "September 17",
  },
  {
    name: "St. Isidore the Farmer",
    link: "Lifelong farmworker; patron of farmers and rural life",
    feast: "May 15 (US)",
  },
  {
    name: "St. Benedict of Nursia",
    link: "Rule of “prayer and work”; monks who drained, planted and tended land for centuries",
    feast: "July 11",
  },
];

export default function PatronSaintOfTheEnvironment() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of the environment, patron saint of ecology, patron saint of nature, patron saint of creation, catholic prayer for creation, laudato si prayer, season of creation, world day of prayer for the care of creation, st francis of assisi ecology"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of the Environment", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of the Environment</span>
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
                Patron Saint of the Environment: The Saints of Creation, What the Church Teaches, and Prayers for the Earth
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Long before anyone spoke of ecology, saints were singing to the sun, planting monastery gardens and praying in the woods. Here are the saints Catholics turn to for the care of creation, the Scripture and Church teaching behind that care, three prayers, and simple practices for a parish or household.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <Leaf className="w-24 h-24 text-emerald-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The patron saint of the environment and ecology is St. Francis of Assisi, whom Pope St. John Paul II formally named the heavenly patron of those who promote ecology in 1979. St. Kateri Tekakwitha, the first Native American saint, is also widely invoked as patroness of ecology and the environment, though that title is popular rather than official. St. Hildegard of Bingen, St. Isidore the Farmer and St. Benedict are honored for their love of the land as well.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Creation in Scripture</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Catholic care for creation does not begin with a modern movement. It begins on the first page of the Bible, where God looks at what he has made and calls it very good (Genesis 1:31). He blesses the man and woman and tells them to fill the earth and have dominion over it (Genesis 1:28). The next chapter explains what that dominion means: God places the man in the garden “to cultivate and care for it” (Genesis 2:15). Dominion in Scripture is the authority of a gardener and a steward, not of an owner who can do as he likes.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Psalm 104 is a long hymn to the God who waters the mountains, makes grass grow for the cattle and gives wine to gladden the human heart. Psalm 24 opens with the reminder that the earth is the Lord’s and all it holds (Psalm 24:1). Israel’s law gave even the land a sabbath rest every seventh year (Leviticus 25:4). Jesus pointed to the birds of the air and the lilies of the field as signs of the Father’s care (Matthew 6:26–29), and St. Paul writes that all creation groans as it waits for its redemption (Romans 8:22).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. Francis of Assisi, Patron of Ecology</h2>
              <p className="text-text leading-relaxed mb-6">
                Francis is the obvious choice, and the Church made it official. On November 29, 1979, St. John Paul II issued the apostolic letter <em>Inter Sanctos</em>, proclaiming Francis the heavenly patron of those who promote ecology. His life is told in our{" "}
                <Link to="/blog/saint-francis-of-assisi/" className={linkClass}>St. Francis of Assisi biography</Link>
                {", so only the essential point belongs here: Francis did not love nature as scenery. In the Canticle of the Creatures, written near the end of his life when he was nearly blind, he praises God through Brother Sun, Sister Moon, Brother Wind, Sister Water and “our Sister, Mother Earth.” Creation for him was a family, all of it pointing back to the Father."}
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pope Francis took the canticle’s opening words, <em>Laudato si’</em> (“Praise be to you”), as the title of his 2015 encyclical on care for our common home. For the saint’s spirituality in prayer form, see the{" "}
                <Link to="/blog/prayer-of-st-francis-catholic/" className={linkClass}>Prayer of St. Francis</Link>
                {", and for his saints of the animal world, our sibling page on the "}
                <Link to="/blog/patron-saint-of-animals/" className={linkClass}>patron saint of animals</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Other Saints of Creation</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Kateri Tekakwitha (1656–1680)</h3>
              <p className="text-text leading-relaxed mb-6">
                The “Lily of the Mohawks” was born in what is now upstate New York, survived smallpox that scarred her face and weakened her eyes, and was baptized at twenty against strong opposition. Her early biographers describe her praying in the woods and marking crosses on trees. Canonized in 2012, she is often called patroness of ecology and the environment, a title widely used by Catholics in North America though never formally decreed. Her US memorial is July 14. Read her story on our{" "}
                <Link to="/blog/saint-kateri-tekakwitha/" className={linkClass}>St. Kateri Tekakwitha</Link> page.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Hildegard of Bingen (1098–1179)</h3>
              <p className="text-text leading-relaxed mb-6">
                The Benedictine abbess of the Rhineland wrote visionary theology, composed music, and produced works on plants, animals, stones and healing. A word that runs through her writing is <em>viriditas</em>, “greenness” or “greening power”: the fresh, living vitality God pours into creation and into the soul. Pope Benedict XVI declared her a Doctor of the Church in 2012. Her feast is September 17; see the{" "}
                <Link to="/blog/saint-of-the-day/september-17/" className={linkClass}>September 17 saint-of-the-day page</Link>.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Isidore the Farmer (c. 1070–1130)</h3>
              <p className="text-text leading-relaxed mb-6">
                Isidore spent his whole life working another man’s fields outside Madrid. Tradition holds that he went to Mass every morning before plowing and that angels were seen working beside him. He is the patron of farmers, farmworkers and rural communities, and many Catholic rural-life groups pray for a good harvest in his name. His US memorial is May 15; see the{" "}
                <Link to="/blog/saint-of-the-day/may-15/" className={linkClass}>May 15 saint-of-the-day page</Link>.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Benedict of Nursia (c. 480–547)</h3>
              <p className="text-text leading-relaxed mb-6">
                Benedict’s Rule never uses the slogan <em>ora et labora</em>, but “pray and work” sums up its rhythm well. Benedictine monks across Europe drained marshes, planted orchards and vineyards, and tended the same land for centuries, treating tools as carefully as the vessels of the altar, as the Rule itself asks. That patient, local stewardship is a model for anyone who cares for a plot of ground. See our{" "}
                <Link to="/blog/saint-benedict/" className={linkClass}>St. Benedict</Link> profile.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saints of Creation at a Glance</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Saint</th>
                      <th className="p-3 font-semibold">Link to creation</th>
                      <th className="p-3 font-semibold">Feast day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAINTS.map((s) => (
                      <tr key={s.name} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{s.name}</td>
                        <td className="p-3 text-text">{s.link}</td>
                        <td className="p-3 whitespace-nowrap text-text-muted">{s.feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Teaches</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Catechism places care for creation under the Seventh Commandment, the commandment against stealing. The resources of the earth are meant for the whole human family, including people not yet born, so human dominion over creation is not absolute: it is limited by concern for the quality of life of our neighbor and of generations to come, and it calls for religious respect for the integrity of creation (CCC 2415).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Recent popes have developed this teaching at length. In Laudato Si’ (2015), Pope Francis proposed an “integral ecology,” insisting that care for the natural world and care for the poor cannot be separated, since the poor usually suffer first when land, water and air are damaged. In the apostolic exhortation Laudate Deum (2023), he returned to the theme with particular attention to the climate. St. John Paul II and Pope Benedict XVI had already written of an “ecological conversion” and a “human ecology” that respects both nature and the dignity of the human person, including the unborn.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Catholics of good will can disagree about particular laws and technologies, and this page does not take sides on them. What the Church asks of everyone is more basic: gratitude for creation as a gift, moderation in our own consumption, attention to the poor, and responsibility toward those who come after us.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Since 2015 the Church has kept September 1 as the World Day of Prayer for the Care of Creation, a date shared with the Orthodox Church. Many parishes extend it into the Season of Creation, which runs from September 1 to October 4, the feast of St. Francis. For a fuller treatment of the teaching, see our guide to{" "}
                <Link to="/blog/catholic-teaching-on-environment/" className={linkClass}>Catholic teaching on the environment</Link>.
              </p>

              <QuizCTA
                title="Does your daily life reflect what you believe?"
                description="Take our short Catholic life assessment and get a realistic plan for prayer, the sacraments and the habits that shape a faithful life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Prayers for Creation</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                These prayers were written for this guide. The first is short enough to pray on a walk, the second fits around the family table, and the third is for days when storms, fire or flood come close to home.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Short Prayer for Creation</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Creator of heaven and earth, everything you made speaks of you. Open my eyes to see your goodness in the ordinary things around me, and my hands to care for them. Teach me to take only what I need, to waste less, and to remember the poor who depend on the same land and water I do. St. Francis of Assisi, pray for us. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Family Grace That Thanks God for the Land</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Bless us, Lord, and this food. Thank you for the soil and rain that grew it, for the farmers and workers who harvested it, and for the hands that prepared it. Give bread to those who have none, and make us grateful and generous. St. Isidore, pray for us. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer During a Natural Disaster</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord Jesus, you calmed the wind and the sea. Be with all who are in danger tonight. Protect the lives of families, first responders and the elderly; give wisdom to those making hard decisions; and receive into your mercy any who have died. When the danger has passed, make us quick to help our neighbors rebuild. Mary, Star of the Sea, pray for us. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">These prayers are devotional, not liturgical texts.</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                For more ways to give thanks, see our{" "}
                <Link to="/blog/prayer-of-thanksgiving/" className={linkClass}>Catholic prayer of thanksgiving</Link>
                {" and "}
                <Link to="/blog/catholic-grace-before-meals/" className={linkClass}>grace before meals</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Simple Ways to Live It</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>Plant a parish or family garden.</strong> A few raised beds behind the rectory or a Mary garden of flowers named for Our Lady can supply a food pantry, teach children where food comes from, and give the parish a quiet place to pray.
                </li>
                <li>
                  <strong>Keep a Sabbath from consumption.</strong> Let Sunday be a day without shopping, scrolling for deals or errands. Rest, a meal together and a walk outdoors honor the Lord’s Day and loosen the habit of buying as a way to fill time.
                </li>
                <li>
                  <strong>Fast from waste.</strong> On Fridays or in Lent, pick one form of waste to give up: food thrown away, single-use plastic, needless driving. Small, concrete sacrifices are an old Catholic habit applied to a new problem.
                </li>
                <li>
                  <strong>Mark the Season of Creation.</strong> Between September 1 and October 4, add a petition for creation to family prayer, organize a parish cleanup of a local park or creek, and end with a Blessing of Animals on the feast of St. Francis.
                </li>
                <li>
                  <strong>Remember the people.</strong> Support farmworkers, disaster relief and clean-water projects through your diocese or Catholic Relief Services. In Catholic teaching, care for creation is always care for neighbors too.
                </li>
              </ul>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To ask the patron of ecology for his prayers, use the{" "}
              <a href="https://catholicbibleonline.com/prayers/prayer-to-st-francis/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Prayer to St. Francis</a>, and for the Benedictine spirit of prayer and work, the{" "}
              <a href="https://catholicbibleonline.com/novenas/st-benedict/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">St. Benedict Novena</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of the environment?",
                  answer: "St. Francis of Assisi. St. John Paul II proclaimed him the heavenly patron of those who promote ecology in the 1979 apostolic letter Inter Sanctos.",
                },
                {
                  question: "Is St. Kateri Tekakwitha the patron saint of ecology?",
                  answer: "She is widely called patroness of ecology and the environment, especially in North America, but the title is a popular one rather than a formal decree. St. Francis is the officially named patron.",
                },
                {
                  question: "Who is the patron saint of nature and gardens?",
                  answer: "St. Francis of Assisi is invoked for nature in general. Gardeners also turn to St. Fiacre, St. Isidore the Farmer for fields and crops, and St. Hildegard of Bingen for plants and healing herbs.",
                },
                {
                  question: "When is the Season of Creation?",
                  answer: "It runs from September 1, the World Day of Prayer for the Care of Creation, to October 4, the feast of St. Francis of Assisi.",
                },
                {
                  question: "What does Laudato Si’ mean?",
                  answer: "It means “Praise be to you,” the refrain of St. Francis’s Canticle of the Creatures. Pope Francis used it as the title of his 2015 encyclical on care for our common home.",
                },
                {
                  question: "What does the Catechism say about the environment?",
                  answer: "CCC 2415 teaches that human dominion over creation is not absolute. It is limited by concern for our neighbor, including future generations, and requires religious respect for the integrity of creation.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Give thanks for every good gift"
              description="Build a daily rhythm of prayer and gratitude that shapes how you live in God’s world."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
