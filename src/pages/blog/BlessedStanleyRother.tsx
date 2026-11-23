import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sprout, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "blessed-stanley-rother";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Blessed Stanley Rother: Life and Feast Day";
const DESCRIPTION =
  "Blessed Stanley Rother, the Oklahoma farm boy turned priest martyred in Guatemala in 1981: his life, feast day (July 28), shrine, and a prayer.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const TIMELINE: { year: string; event: string }[] = [
  { year: "1935", event: "Born March 27 in Okarche, Oklahoma, to a German-American farming family" },
  { year: "1950s", event: "Enters seminary; after years of struggling with Latin he is asked to leave Assumption Seminary in San Antonio" },
  { year: "1963", event: "Finishes at Mount St. Mary's Seminary, Emmitsburg, Maryland; ordained May 25 for the Diocese of Oklahoma City and Tulsa" },
  { year: "1963–1968", event: "Serves as an associate pastor in Oklahoma parishes" },
  { year: "1968", event: "Joins the diocese's mission in Santiago Atitlán, Guatemala, among the Tz'utujil Maya" },
  { year: "1968–1980", event: "Learns Tz'utujil, helps with a New Testament translation, supports a farmers' co-op, a clinic and a parish radio station" },
  { year: "Early 1981", event: "Warned that his name is on a death list, he returns to Oklahoma" },
  { year: "1981", event: "Goes back to Santiago Atitlán in time for Holy Week" },
  { year: "1981", event: "Murdered in the parish rectory in the early hours of July 28" },
  { year: "2016", event: "Pope Francis recognizes his death as martyrdom (December)" },
  { year: "2017", event: "Beatified September 23 in Oklahoma City, the first US-born priest and martyr to be beatified" },
  { year: "2023", event: "The Blessed Stanley Rother Shrine in Oklahoma City opens; his remains are later entombed there" },
];

export default function BlessedStanleyRother() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="blessed stanley rother, stanley rother, father stanley rother, stanley rother feast day, the shepherd cannot run, stanley rother shrine, santiago atitlan, oklahoma martyr, padre aplas, american martyr guatemala"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Blessed Stanley Rother", url: PAGE_URL },
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
              <span className="text-text">Blessed Stanley Rother</span>
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
                Blessed Stanley Rother: The Oklahoma Farmer-Priest Who Would Not Leave His People
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                He nearly failed out of seminary, spent thirteen years fixing tractors and learning a Maya language on the shore of a Guatemalan lake, and was killed in his rectory in 1981. Here is the life of Blessed Stanley Rother, why the Church calls him a martyr, where to visit him, and how to ask for his prayers.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <Sprout className="w-24 h-24 text-emerald-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  Blessed Stanley Rother (1935–1981) was a priest of Oklahoma who served for thirteen years at the diocesan mission in Santiago Atitlán, Guatemala, and was murdered in his rectory there on July 28, 1981. Pope Francis recognized him as a martyr in 2016, and he was beatified in Oklahoma City on September 23, 2017, the first US-born priest and martyr to be beatified. His feast day is July 28.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Farm Boy from Okarche</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Stanley Francis Rother was born on March 27, 1935, in Okarche, a small German Catholic farming town northwest of Oklahoma City. He grew up on the family farm, went to the parish school at Holy Trinity, served Mass, and learned early how to drive a tractor, mend a fence and keep machinery running. Those skills would matter more than anyone guessed. The faith of the household was steady and unshowy: Mass, the Rosary, work, and more work.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seminarian Who Struggled</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                When Stanley told his parents he wanted to be a priest, his father reportedly assumed he would take over the farm. He went to seminary anyway, and it did not go smoothly. In the years before the Second Vatican Council, theology was taught in Latin, and he could not master it. After several years, Assumption Seminary in San Antonio, Texas, asked him to leave. Many young men would have taken that as a final answer.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                His bishop did not. He arranged for Stanley to continue at Mount St. Mary's Seminary in Emmitsburg, Maryland, where he finished his studies. He was ordained a priest for the Diocese of Oklahoma City and Tulsa on May 25, 1963. The story has become a comfort to anyone whose vocation looked doubtful on paper: the man who could not pass Latin later learned an unwritten Maya language well enough to preach in it.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Santiago Atitlán and the Tz'utujil People</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                After five years as an associate pastor in Oklahoma, Father Rother volunteered in 1968 for the mission his diocese had taken on in Santiago Atitlán, a town on the shore of Lake Atitlán in the Guatemalan highlands. Most of the people there were Tz'utujil Maya, farmers and fishermen who spoke little Spanish. He learned their language, said Mass and heard confessions in it, and worked with others on a translation of the New Testament into Tz'utujil.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                He also put his farm upbringing to use. Accounts of the mission describe him helping to start a farmers' cooperative, supporting a small hospital or clinic, and backing a parish radio station that broadcast catechism and basic literacy lessons. He repaired trucks, worked in the fields beside parishioners and eventually became pastor. The people could not easily pronounce "Francis," his middle name, so they called him Padre Apla's, their own form of it. He was, by every account, not a dramatic man. He was simply present, day after day.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Guatemala's Civil War Reaches the Lake</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Guatemala lived through an internal armed conflict from 1960 to 1996, fought between government forces and leftist guerrilla groups. Rural Maya communities suffered most. The UN-sponsored Commission for Historical Clarification later estimated that more than 200,000 people were killed or disappeared over the course of the war; it found that most victims were Maya civilians and attributed the large majority of the abuses it documented to state forces and allied paramilitary groups, with a smaller share to the insurgents.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                By 1980 the violence had come to Santiago Atitlán. Catechists and parish leaders disappeared, and the radio station was attacked. Father Rother wrote home about parishioners who had been taken and about bodies found on the roads, and he went out himself to recover the dead and comfort families. Church workers who served the poor were often viewed with suspicion in those years, and he knew it.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">"The Shepherd Cannot Run"</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In early 1981, after being told that his name was on a death list, Father Rother returned to Oklahoma. He could have stayed. In a letter to the people of his diocese around this time he wrote the line for which he is now best known: the shepherd cannot run at the first sign of danger. He went back to Santiago Atitlán so that his people would have their priest for Holy Week, and he stayed through the spring and early summer.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                His decision echoes the Gospel of the Good Shepherd: "A good shepherd lays down his life for the sheep. A hired man, who is not a shepherd and whose sheep are not his own, sees a wolf coming and leaves the sheep and runs away" (John 10:11–12). Jesus adds that he knows his own and his own know him (John 10:14–15). Father Rother had spent thirteen years learning names, families and a language. Leaving would have meant treating them as someone else's sheep.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Martyrdom on July 28, 1981</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In the early morning hours of July 28, 1981, armed men entered the rectory in Santiago Atitlán. Father Rother struggled with them rather than be taken away and disappeared, as so many of his parishioners had been, and he was shot and killed in his room. He was 46 years old. The people of the town filed past his body in grief. At their request, and with his family's permission, his heart was buried in the parish church in Santiago Atitlán, where it remains. His body was returned to Okarche for burial.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In December 2016, Pope Francis approved the decree recognizing that he was killed in hatred of the faith, which opened the way to beatification without a verified miracle. On September 23, 2017, more than twenty thousand people gathered in Oklahoma City for the beatification Mass. He became the first US-born priest, and the first US-born martyr, to be declared blessed.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Timeline of His Life</h2>
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
                      <tr key={t.year + t.event} className="border-t border-border align-top">
                        <td className="p-3 whitespace-nowrap font-medium text-text">{t.year}</td>
                        <td className="p-3 text-text">{t.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <QuizCTA
                title="Where is God asking you to stay faithful?"
                description="Take our short Catholic life assessment and get a realistic plan for prayer, Mass and Confession that fits your actual week."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Feast Day and the Shrine in Oklahoma City</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The feast of Blessed Stanley Rother is July 28, the day of his death. As a blessed rather than a canonized saint, he is honored liturgically in the places connected to him, above all in Oklahoma and in Santiago Atitlán, where the day is marked with Masses, processions and pilgrimages.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Archdiocese of Oklahoma City built the Blessed Stanley Rother Shrine in south Oklahoma City, which opened in 2023. Its church was designed in a Spanish mission style meant to recall Guatemala, and it is now the resting place of his remains, moved there from Okarche. Pilgrims can also visit his hometown parish of Holy Trinity in Okarche and, in Guatemala, the church in Santiago Atitlán where his heart is buried and where the room in which he died is, according to pilgrims' accounts, kept as a place of prayer.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Prayer Asking His Intercession</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer to Blessed Stanley Rother</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord Jesus, Good Shepherd, you gave Blessed Stanley Rother a farmer's patience and a pastor's heart. He learned the language of his people, worked beside them in their fields, and would not leave them when danger came. Give me the courage to stay where you have planted me, to love the people in front of me, and to keep faith when it costs something. Comfort all who suffer violence and all who grieve the disappeared. Blessed Stanley, pray for me, and pray for the priests of our time. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">Written for this guide. It is not a liturgical text.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why He Matters Today</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>For anyone who feels unqualified.</strong> A seminary sent him home. God did not. His life is a quiet answer to the fear that weakness in one area rules out a vocation.
                </li>
                <li>
                  <strong>For priests.</strong> He shows what a diocesan priest looks like when he simply stays: learning names, fixing what is broken, offering the sacraments in the people's own tongue.
                </li>
                <li>
                  <strong>For missionaries and volunteers.</strong> He did not arrive with a program. He learned first, then served, and let the people shape his work.
                </li>
                <li>
                  <strong>For Catholics living through violence or fear.</strong> His letters show a man who was afraid and honest about it, and who chose faithfulness anyway.
                </li>
                <li>
                  <strong>For American Catholics.</strong> He is a reminder that holiness can come out of an ordinary Midwestern parish and a family farm.
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                If his story is stirring something in you, our{" "}
                <Link to="/blog/vocational-discernment-guide/" className={linkClass}>vocational discernment guide</Link>
                {" walks through how to listen for a call, and "}
                <Link to="/blog/what-is-holy-orders-catholic/" className={linkClass}>what Holy Orders is</Link>
                {" explains the priesthood he lived. For others who carried the Gospel abroad, see the "}
                <Link to="/blog/patron-saint-of-missionaries/" className={linkClass}>patron saints of missionaries</Link>
                {". Blessed Stanley also shares a story with "}
                <Link to="/blog/blessed-james-miller/" className={linkClass}>Blessed James Miller</Link>
                {", a Christian Brother from Wisconsin killed in Guatemala less than a year later. Both appear in our guide to "}
                <Link to="/blog/us-saints-and-blesseds/" className={linkClass}>American saints and blesseds</Link>.
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To keep praying for priests and missionaries, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/st-john-vianney/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena to St. John Vianney</a>, patron of parish priests, and the{" "}
              <a href="https://catholicbibleonline.com/novenas/north-american-martyrs/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena to the North American Martyrs</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who was Blessed Stanley Rother?",
                  answer: "An Oklahoma diocesan priest (1935–1981) who served the Tz'utujil Maya of Santiago Atitlán, Guatemala, for thirteen years and was murdered in his rectory on July 28, 1981. He was beatified as a martyr in 2017.",
                },
                {
                  question: "When is the feast day of Blessed Stanley Rother?",
                  answer: "July 28, the anniversary of his death. It is celebrated especially in Oklahoma and in Santiago Atitlán, Guatemala.",
                },
                {
                  question: "What does \"the shepherd cannot run\" mean?",
                  answer: "It is the best-known line from a letter he wrote in 1980–81 as the danger in Guatemala grew. He meant that a pastor does not abandon his people when they are threatened, echoing Jesus as the Good Shepherd in John 10.",
                },
                {
                  question: "Where is Blessed Stanley Rother buried?",
                  answer: "His heart is buried in the parish church in Santiago Atitlán, Guatemala. His body was first buried in Okarche, Oklahoma, and now rests at the Blessed Stanley Rother Shrine in Oklahoma City.",
                },
                {
                  question: "Why was he beatified without a miracle?",
                  answer: "The Church recognized his death as martyrdom, killed in hatred of the faith. A martyr can be beatified without a verified miracle; a miracle is normally required for canonization.",
                },
                {
                  question: "Is Stanley Rother the first American martyr?",
                  answer: "He is the first US-born priest and the first US-born martyr to be beatified. Earlier martyrs who died in North America, such as the North American Martyrs, were born in Europe.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Stay where you are planted"
              description="Build a steady rhythm of prayer, Mass and Confession for the life God has actually given you."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
