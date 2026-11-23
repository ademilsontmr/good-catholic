import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Church, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "georgia-martyrs-pedro-de-corpa";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "The Georgia Martyrs: Bl. Pedro de Corpa";
const DESCRIPTION =
  "Bl. Pedro de Corpa and four Franciscan companions, killed on the Georgia coast in 1597 for defending marriage: their story, the Guale, feast and a prayer.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const MARTYRS: { name: string; role: string; place: string }[] = [
  { name: "Fr. Pedro de Corpa", role: "Priest, from Castile; missionary at Tolomato", place: "Tolomato, on the mainland coast" },
  { name: "Fr. Blas Rodríguez", role: "Priest; missionary at Tupiqui", place: "Tupiqui, a few miles from Tolomato" },
  { name: "Fr. Miguel de Añón", role: "Priest; superior of the island mission", place: "Santa Catalina de Guale, St. Catherines Island" },
  { name: "Br. Antonio de Badajoz", role: "Lay brother serving with Fr. Miguel", place: "Santa Catalina de Guale, St. Catherines Island" },
  { name: "Fr. Francisco de Veráscola", role: "Priest, a Basque; missionary at Asao", place: "Ambushed returning by canoe from St. Augustine" },
];

const TIMELINE: { year: string; event: string }[] = [
  { year: "1565", event: "Spanish found St. Augustine in La Florida" },
  { year: "1587", event: "Pedro de Corpa arrives among a new group of Franciscan missionaries" },
  { year: "1590s", event: "Franciscan missions established among the Guale on the Georgia coast and islands" },
  { year: "1597", event: "Uprising led by Juanillo; five friars killed in mid-September; Fr. Francisco Dávila captured and later freed" },
  { year: "1597–98", event: "Spanish reprisals burn Guale towns and food stores" },
  { year: "1607", event: "The first permanent English settlement, Jamestown, is founded, a decade after the martyrdoms" },
  { year: "1733", event: "The English found Savannah and the colony of Georgia" },
  { year: "1980s", event: "The Diocese of Savannah opens the cause for the martyrs" },
  { year: "2025", event: "Martyrdom recognized; beatification later celebrated in Savannah" },
];

export default function GeorgiaMartyrsPedroDeCorpa() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="georgia martyrs, pedro de corpa, blessed pedro de corpa and companions, guale missions, tolomato, franciscan martyrs georgia, martyrs for marriage, september 22 feast, diocese of savannah, la florida missions"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "The Georgia Martyrs", url: PAGE_URL },
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
              <span className="text-text">The Georgia Martyrs</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Georgia Martyrs: Bl. Pedro de Corpa and Companions, Who Died for Marriage in 1597
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Ten years before Jamestown and more than a century before Savannah, five Spanish Franciscans were killed on the Georgia coast after one of them refused to bless a young chief's second marriage. Here is who they were, what happened among the Guale people, and why the Church now calls them Blessed.
              </p>
            </header>

            <div className="aspect-video bg-teal-50 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-teal-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The Georgia Martyrs are Bl. Pedro de Corpa and four Franciscan companions, Blas Rodríguez, Miguel de Añón, Antonio de Badajoz and Francisco de Veráscola, killed in mid-September 1597 at missions among the Guale people on the Georgia coast. The uprising began after Fr. Pedro rebuked a baptized young chief, Juanillo, for taking a second wife. The Church recognizes them as martyrs for the sanctity of marriage; they were beatified in Savannah, and their feast is September 22.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Spanish La Florida and the Guale</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In the sixteenth century, Spain claimed a vast territory it called La Florida, stretching north from the peninsula along the Atlantic coast. Its capital was St. Augustine, founded in 1565. North of it, on the barrier islands and tidal rivers of what is now coastal Georgia, lived the Guale, a Muskogean-speaking people organized in towns under hereditary chiefs, or micos, who farmed corn, fished the marshes and moved with the seasons.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Jesuits tried and abandoned a mission there around 1570. In the 1580s and 1590s the Franciscans came, settling in Guale towns, learning the language and building simple chapels. The missions were tied to the Spanish crown, which paid the friars and expected Guale towns to provide food and labor to St. Augustine. Some Guale leaders welcomed the friars as allies and teachers; others resented the demands and the steady pressure on their customs. Both reactions were real, and both matter for understanding what happened in 1597.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Pedro de Corpa and the Mission at Tolomato</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Pedro de Corpa was a Franciscan priest from Castile who arrived in La Florida in 1587. He worked for a time in Cuba and at St. Augustine, where he gained a reputation as a capable preacher, before being assigned to Tolomato, a principal Guale town on the mainland coast. He was known for learning the Guale language well and for serious, sometimes stern, pastoral care.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Among his baptized parishioners was a young man the Spanish called Juanillo, heir to the chiefdom of Tolomato. Juanillo took a second wife. Among the Guale, plural marriage was a long-standing custom for men of rank and was tied to alliances between families. For the friar it was a plain contradiction of the Christian marriage the young man had accepted at baptism. Fr. Pedro rebuked him publicly, and the friars reportedly worked to block his succession as chief. Juanillo, humiliated and threatened with the loss of his inheritance, gathered supporters who were already chafing under Spanish demands.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Happened in September 1597</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Over a few days in mid-September 1597, the uprising swept the Guale missions. Fr. Pedro de Corpa was killed first, at Tolomato, struck down at his house beside the chapel; according to the Spanish accounts, his head was displayed as a sign of what had been done. Fr. Blas Rodríguez, at the nearby town of Tupiqui, was warned that he would die and, according to tradition, asked for time to celebrate Mass and gave away his few belongings before he was killed.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                On St. Catherines Island, at the mission of Santa Catalina de Guale, Fr. Miguel de Añón and Br. Antonio de Badajoz were killed after the friar had time to celebrate Mass. Fr. Francisco de Veráscola, a tall, strong Basque who had been away at St. Augustine, was ambushed as he came back by canoe to his mission at Asao, near present-day St. Simons Island. A sixth friar, Francisco Dávila, was wounded and taken captive; he was held for months, enslaved and mistreated, and later released to the Spanish.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The aftermath should not be passed over. The Spanish governor in St. Augustine led punitive expeditions that burned Guale towns and their stored corn, bringing hunger to people who had no part in the killings. Juanillo was eventually killed by other Guale who sided with the Spanish. Within a few years many Guale towns made peace and the missions were rebuilt, but the coast never fully recovered from the cycle of violence, and later raids, disease and English colonial warfare scattered the Guale altogether by the early eighteenth century.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Five Martyrs</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Martyr</th>
                      <th className="p-3 font-semibold">Who he was</th>
                      <th className="p-3 font-semibold">Where he died</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MARTYRS.map((m) => (
                      <tr key={m.name} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{m.name}</td>
                        <td className="p-3 text-text">{m.role}</td>
                        <td className="p-3 text-text-muted">{m.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Timeline</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Year</th>
                      <th className="p-3 font-semibold">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TIMELINE.map((t) => (
                      <tr key={t.year} className="border-t border-border align-top">
                        <td className="p-3 whitespace-nowrap font-medium text-text">{t.year}</td>
                        <td className="p-3 text-text">{t.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <QuizCTA
                title="Is your faith ready for a hard conversation?"
                description="Pedro de Corpa told a powerful man an unwelcome truth. Take our short Catholic life assessment and find a next step in prayer, Mass and Confession."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Martyrs for Marriage</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Church does not honor these friars simply because they died violently in a mission territory. Their cause was promoted on the ground that they were killed in hatred of the faith, specifically of the Church's teaching on the unity and indissolubility of marriage. Jesus grounded that teaching in creation itself: "from the beginning the Creator made them male and female," and "what God has joined together, no human being must separate" (Matthew 19:4–6).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Seen that way, the Georgia martyrs are an unusual pair of patrons for modern America: men who died not for a doctrine about God in the abstract, but for the claim that one man and one woman bound in marriage are bound for life. That does not make every friar's method wise or every Spanish policy just. It means that when the decisive moment came, Pedro de Corpa would not call a second marriage a marriage, and he and his brothers paid for it.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For what the Church teaches, see our guides to the{" "}
                <Link to="/blog/sacrament-of-matrimony/" className={linkClass}>Sacrament of Matrimony</Link>
                {" and "}
                <Link to="/blog/catholic-teaching-on-marriage/" className={linkClass}>Catholic teaching on marriage</Link>
                {"."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Beatification, Feast Day and Places to Visit</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Diocese of Savannah, which covers south Georgia including the old Guale coast, opened the cause in the 1980s and carried it for decades. After the Holy See recognized their martyrdom in 2025, the five were beatified in Savannah, Georgia. They are listed on the calendar for the dioceses of the United States with a memorial on September 22.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                No original mission building survives, and archaeologists have spent decades locating the mission sites. Excavations on St. Catherines Island uncovered the church and convent of Santa Catalina de Guale, the island is privately managed, and access is limited. On the mainland, pilgrims usually begin at the Cathedral of St. John the Baptist in Savannah, the mother church of the diocese that carried their cause, and then visit the coastal towns near the old missions. Ask the diocese about any organized pilgrimages before you plan a trip.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why They Matter Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Georgia martyrs remind American Catholics that the faith on this soil is older than the English colonies, and that it arrived in Spanish and was first spoken, haltingly, in Guale. They also remind us that holiness can be found in imperfect institutions. The missions were part of an empire, and the Guale bore real costs from it. The friars were men of their time. Yet the reason the Church honors them is the part of their story that does not belong to any empire: they told the truth about marriage to a man who had the power to kill them, and they did not take it back.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For other holy men and women of this country, see our guide to{" "}
                <Link to="/blog/us-saints-and-blesseds/" className={linkClass}>US saints and blesseds</Link>
                {". Fifty years later and far to the north, French Jesuits died among the Mohawk and Wendat; read about "}
                <Link to="/blog/saint-isaac-jogues/" className={linkClass}>St. Isaac Jogues and the North American Martyrs</Link>
                {", and find more mission patrons in "}
                <Link to="/blog/patron-saint-of-missionaries/" className={linkClass}>patron saints of missionaries</Link>.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer to the Georgia Martyrs for Marriages</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Blessed Pedro de Corpa, Blas, Miguel, Antonio and Francisco, you gave your lives rather than deny the truth of marriage. Pray for husbands and wives who are tired, tempted or estranged, that God may renew the love he joined together. Pray for the young who are preparing to marry, that they may promise forever and mean it. Pray also for the descendants of the Guale and for all who have been wounded by those who carried the Gospel, that Christ may bring healing and peace. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">This prayer was written for this guide. It is not a liturgical text.</p>
              </div>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To pray for marriages and families with these martyrs, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/marriage/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Marriage</a> and{" "}
              <a href="https://catholicbibleonline.com/novenas/families/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Families</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who are the Georgia Martyrs?",
                  answer: "Five Spanish Franciscans, Fr. Pedro de Corpa, Fr. Blas Rodríguez, Fr. Miguel de Añón, Br. Antonio de Badajoz and Fr. Francisco de Veráscola, killed at missions among the Guale people on the Georgia coast in September 1597.",
                },
                {
                  question: "Why were the Georgia Martyrs killed?",
                  answer: "The uprising began after Fr. Pedro de Corpa rebuked Juanillo, a baptized heir to the Tolomato chiefdom, for taking a second wife. Resentment of Spanish demands fed it. The Church recognizes them as martyrs for the sanctity and indissolubility of marriage.",
                },
                {
                  question: "When is the feast of the Georgia Martyrs?",
                  answer: "September 22, on the liturgical calendar for the dioceses of the United States.",
                },
                {
                  question: "Are the Georgia Martyrs saints?",
                  answer: "They are Blessed. Their martyrdom was recognized in 2025 and they were beatified in Savannah, Georgia. Canonization would normally require a further approved miracle.",
                },
                {
                  question: "Who were the Guale?",
                  answer: "A Native people of the Georgia coast and barrier islands, organized in farming and fishing towns under hereditary chiefs. Many became Christians through the Franciscan missions; war, disease and colonial conflict later dispersed them.",
                },
                {
                  question: "Were the Georgia Martyrs earlier than the North American Martyrs?",
                  answer: "Yes. They died in 1597, about half a century before St. Isaac Jogues was killed in New York in 1646, and a decade before the English founded Jamestown.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Strengthen the bond you promised"
              description="Build habits of prayer and sacraments that keep faith and marriage strong."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
