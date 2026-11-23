import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flag, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "us-saints-and-blesseds";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "American Saints and Blesseds: Full List";
const DESCRIPTION =
  "Every saint and blessed of the United States on the US Catholic calendar, with feast days, who they were, where their shrines are, and a guide to each.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";
const cboClass = "text-accent font-semibold underline underline-offset-2 hover:text-accent/80";

/** Order and feast days follow the USCCB calendar of U.S. saints and blesseds. */
const CALENDAR: { feast: string; name: string; who: string; slug: string }[] = [
  { feast: "January 4", name: "St. Elizabeth Ann Seton", who: "First US-born saint; founded the Sisters of Charity and the first free Catholic school", slug: "saint-elizabeth-ann-seton" },
  { feast: "January 5", name: "St. John Neumann", who: "Bohemian immigrant, bishop of Philadelphia, builder of the first diocesan school system", slug: "st-john-neumann-prayer-catholic-guide" },
  { feast: "January 23", name: "St. Marianne Cope", who: "Franciscan from Syracuse who served leprosy patients on Molokai", slug: "saint-marianne-cope" },
  { feast: "February 13", name: "Bl. James Alfred Miller", who: "Christian Brother from Wisconsin, martyred in Guatemala in 1982", slug: "blessed-james-miller" },
  { feast: "March 3", name: "St. Katharine Drexel", who: "Philadelphia heiress who founded schools for Black and Native American students", slug: "saint-katharine-drexel" },
  { feast: "May 8", name: "Bl. Miriam Teresa Demjanovich", who: "Sister of Charity from New Jersey; first beatification held in the US (2014)", slug: "blessed-miriam-teresa-demjanovich" },
  { feast: "May 10", name: "St. Damien of Molokai", who: "Belgian priest who lived and died among leprosy patients in Hawaii", slug: "saint-damien-of-molokai" },
  { feast: "July 1", name: "St. Junípero Serra", who: "Franciscan founder of the California missions", slug: "saint-junipero-serra" },
  { feast: "July 13 (May 4 in Puerto Rico)", name: "Bl. Carlos Manuel Rodríguez", who: "Puerto Rican layman devoted to the liturgy and the Easter Vigil", slug: "blessed-carlos-manuel-rodriguez" },
  { feast: "July 14", name: "St. Kateri Tekakwitha", who: "Mohawk-Algonquin convert, the “Lily of the Mohawks”", slug: "saint-kateri-tekakwitha" },
  { feast: "July 28", name: "Bl. Stanley Rother", who: "Oklahoma priest martyred in Guatemala; first US-born martyr beatified", slug: "blessed-stanley-rother" },
  { feast: "July 30", name: "Bl. Solanus Casey", who: "Capuchin doorkeeper of Detroit known for counsel and healings", slug: "blessed-solanus-casey" },
  { feast: "August 13", name: "Bl. Michael McGivney", who: "New Haven parish priest who founded the Knights of Columbus", slug: "blessed-michael-mcgivney" },
  { feast: "September 5", name: "St. Teresa of Calcutta", who: "Founder of the Missionaries of Charity; honorary US citizen", slug: "saint-teresa-of-calcutta" },
  { feast: "September 22", name: "Bl. Pedro de Corpa and Companions", who: "Franciscan friars martyred on the Georgia coast in 1597", slug: "georgia-martyrs-pedro-de-corpa" },
  { feast: "October 3", name: "St. Théodore Guérin", who: "French founder of the Sisters of Providence in Indiana", slug: "saint-theodore-guerin" },
  { feast: "October 5", name: "Bl. Francis Xavier Seelos", who: "Redemptorist preacher who died serving yellow fever victims in New Orleans", slug: "blessed-francis-xavier-seelos" },
  { feast: "October 19", name: "St. Isaac Jogues and Companions", who: "Jesuit North American Martyrs, killed in New York and Canada", slug: "saint-isaac-jogues" },
  { feast: "November 13", name: "St. Frances Xavier Cabrini", who: "First US citizen canonized; patroness of immigrants", slug: "saint-frances-xavier-cabrini" },
  { feast: "November 18", name: "St. Rose Philippine Duchesne", who: "Missionary to the frontier and to the Potawatomi, “Woman Who Prays Always”", slug: "saint-rose-philippine-duchesne" },
  { feast: "December 9", name: "Bl. Fulton J. Sheen", who: "Archbishop and broadcaster of “Life Is Worth Living”", slug: "blessed-fulton-sheen" },
];

const SHRINES: { place: string; who: string }[] = [
  { place: "Emmitsburg, Maryland", who: "National Shrine of St. Elizabeth Ann Seton" },
  { place: "Philadelphia, Pennsylvania", who: "National Shrine of St. John Neumann" },
  { place: "Syracuse, New York", who: "St. Marianne Cope Shrine and Museum" },
  { place: "Auriesville and Fonda, New York", who: "Our Lady of Martyrs Shrine (Jogues and companions) and the St. Kateri Tekakwitha National Shrine" },
  { place: "Detroit, Michigan", who: "Solanus Casey Center" },
  { place: "New Haven, Connecticut", who: "Blessed Michael McGivney Pilgrimage Center" },
  { place: "Oklahoma City, Oklahoma", who: "Blessed Stanley Rother Shrine" },
  { place: "New Orleans, Louisiana", who: "Blessed Francis Xavier Seelos National Shrine" },
  { place: "Saint Mary-of-the-Woods, Indiana", who: "Shrine of St. Mother Théodore Guérin" },
  { place: "St. Charles, Missouri", who: "Shrine of St. Rose Philippine Duchesne" },
  { place: "New York City and Chicago", who: "St. Frances Xavier Cabrini shrines" },
];

export default function UsSaintsAndBlesseds() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="american saints, us saints, saints from the united states, us blesseds, american catholic saints list, first american saint, us catholic saints calendar, american saints feast days, saints of america"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "US Saints and Blesseds", url: PAGE_URL },
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
              <span className="text-text">US Saints and Blesseds</span>
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
                Saints and Blesseds of the United States: The Complete List, With Feast Days
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A New York society widow, a Mohawk convert, a Capuchin doorkeeper in Detroit, an Oklahoma farm boy who died in Guatemala. Here is every saint and blessed the US bishops list on the American calendar, in feast-day order, with a guide to each one.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Flag className="w-24 h-24 text-sky-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The US bishops list 21 saints and blesseds connected to the United States and its territories. The canonized saints are Elizabeth Ann Seton, John Neumann, Marianne Cope, Katharine Drexel, Damien of Molokai, Junípero Serra, Kateri Tekakwitha, Teresa of Calcutta, Théodore Guérin, Isaac Jogues and companions, Frances Xavier Cabrini and Rose Philippine Duchesne. St. Elizabeth Ann Seton was the first saint born in what is now the United States; St. Frances Xavier Cabrini was the first US citizen to be canonized.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Calendar of US Saints and Blesseds</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The list below follows the calendar kept by the United States Conference of Catholic Bishops. It includes people born here, people who came here as missionaries or immigrants, martyrs who died on what is now US soil, and Americans martyred abroad. A few, like St. Teresa of Calcutta, an honorary US citizen, are included because of a formal tie to the country rather than years spent in it.
              </LinkedText>
              <div className="not-prose overflow-x-auto mb-8 rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Feast day</th>
                      <th className="p-3 font-semibold">Saint or blessed</th>
                      <th className="p-3 font-semibold">Who they were</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CALENDAR.map((s) => (
                      <tr key={s.name} className="border-t border-border align-top">
                        <td className="p-3 text-text-muted whitespace-nowrap">{s.feast}</td>
                        <td className="p-3 font-medium text-text">
                          <Link to={`/blog/${s.slug}/`} className={linkClass}>{s.name}</Link>
                        </td>
                        <td className="p-3 text-text-muted">{s.who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Saint, Blessed, Venerable: What the Titles Mean</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                A cause for canonization usually opens in the diocese where the person died, at least five years after death. Once it opens, the person is called a Servant of God. If the Church judges that he or she lived the Christian virtues to a heroic degree, the pope declares the person Venerable. Beatification, which makes the person Blessed, normally requires one miracle attributed to his or her intercession, except for martyrs, who can be beatified without one. Canonization, which makes the person a saint for the whole Church, normally requires a further miracle after beatification.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The difference matters for worship. A saint may be honored everywhere in the Church. A blessed is honored locally, in the dioceses and religious families connected to him or her, which is why the feasts of Bl. Solanus Casey or Bl. Stanley Rother appear on the US calendar but not on the universal one. In both cases the Church is not making someone holy; it is recognizing holiness that God already brought about, and it proposes these men and women as models and intercessors (CCC 828). Hebrews 12:1 calls them a great cloud of witnesses.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Four Threads That Run Through the List</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Missionaries to the first peoples of the continent. The North American Martyrs, the Georgia martyrs, St. Junípero Serra and St. Rose Philippine Duchesne all crossed an ocean to preach to Native peoples, and St. Kateri Tekakwitha is the fruit of that preaching. Their stories include real heroism and, in some places, real wounds, and the better guides to them tell both honestly.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Builders of Catholic schools. St. Elizabeth Ann Seton, St. John Neumann, St. Katharine Drexel and St. Théodore Guérin each started schools when there were almost none, often for children no one else would teach. Much of the Catholic school system in the United States traces back to them.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Servants of the sick and the outcast. St. Damien and St. Marianne Cope on Molokai, Bl. Francis Xavier Seelos in the yellow fever wards of New Orleans and Bl. Solanus Casey at the monastery door all spent themselves on people others avoided, in the spirit of Matthew 25:36.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Ordinary Americans in the twentieth century. A parish priest in New Haven, a farm boy from Oklahoma, a Christian Brother from Wisconsin, a young sister from New Jersey and a layman from Puerto Rico show that the list is not only about the colonial past. Holiness kept happening in places that look a lot like ours.
              </LinkedText>

              <QuizCTA
                title="Which of these lives speaks to yours?"
                description="Take our short Catholic life assessment and get a personal plan for prayer, the sacraments and service, with saints to walk alongside you."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Shrines You Can Visit</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Most US saints and blesseds have a shrine, a tomb or a center where pilgrims can pray. Check each shrine’s own website for hours before you travel, since several are run by small religious communities.
              </LinkedText>
              <div className="not-prose overflow-x-auto mb-8 rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Where</th>
                      <th className="p-3 font-semibold">Shrine</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SHRINES.map((s) => (
                      <tr key={s.place} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{s.place}</td>
                        <td className="p-3 text-text-muted">{s.who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Causes Still in Progress</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Many more Americans are on the road to canonization as Servants of God or Venerables. Among the best known are six Black Catholics whose causes are open: Pierre Toussaint, Mother Mary Lange, Mother Henriette Delille, Fr. Augustus Tolton, Julia Greeley and Sr. Thea Bowman. Others include the Army chaplain Fr. Emil Kapaun and Dorothy Day. They are not yet on the liturgical calendar, but anyone may pray for their causes and ask for their prayers privately.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Keep the American Saints Through the Year</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Pick one saint for each season. Read a short life of St. Elizabeth Ann Seton in January, St. Katharine Drexel in Lent, St. Kateri in July and St. Frances Xavier Cabrini in November, and pray the collect of the day on each feast. Families can mark the feasts at dinner with a candle and one question: what did this person do that we could do this week? Parish groups can plan a pilgrimage to the nearest shrine, which for most Americans is within a day’s drive.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer With the Saints of America</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord God, you raised up holy men and women in this land: teachers and nurses, missionaries and martyrs, a doorkeeper and a broadcaster, immigrants and the children of the first peoples. Through their prayers, make our families places of faith and our parishes places of welcome. Give us their courage to serve the sick, to teach the young, to welcome the stranger and to speak of you without fear. Holy men and women of the Americas, pray for us. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">This prayer was written for this guide. It is not a liturgical text.</p>
              </div>

              <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
                Pray with them on Catholic Bible Online: the{" "}
                <a href="https://catholicbibleonline.com/novenas/north-american-martyrs/" target="_blank" rel="noopener" className={cboClass}>North American Martyrs Novena</a> and{" "}
                <a href="https://catholicbibleonline.com/prayers/prayer-to-st-mother-teresa/" target="_blank" rel="noopener" className={cboClass}>Prayer to St. Teresa of Calcutta</a>.
              </p>
            </div>

            <BlogFAQ
              faqs={[
                {
                  question: "Who was the first American saint?",
                  answer: "St. Elizabeth Ann Seton, canonized in 1975, was the first saint born in what is now the United States. St. Frances Xavier Cabrini, canonized in 1946, was the first US citizen to be canonized; she was born in Italy and naturalized in 1909.",
                },
                {
                  question: "How many American saints are there?",
                  answer: "The US bishops' calendar lists twelve canonized saints connected to the United States, counting St. Isaac Jogues and his companions as one entry, plus nine blesseds, including one from Puerto Rico.",
                },
                {
                  question: "Is there a Native American saint?",
                  answer: "Yes. St. Kateri Tekakwitha, born in 1656 to a Mohawk father and an Algonquin mother, was canonized in 2012. Her feast in the United States is July 14.",
                },
                {
                  question: "What is the difference between a saint and a blessed?",
                  answer: "A blessed has been beatified and may be honored publicly in particular places, such as a diocese or a religious order. A saint has been canonized and may be honored throughout the whole Church.",
                },
                {
                  question: "Who is the patron saint of the United States?",
                  answer: "The principal patroness of the United States is Mary under the title of the Immaculate Conception, whose feast on December 8 is a holy day of obligation.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Walk with the American saints"
              description="Choose one saint for this season and let his or her life shape a concrete step in your own."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
