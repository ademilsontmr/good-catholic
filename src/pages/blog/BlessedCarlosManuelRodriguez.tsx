import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flame, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "blessed-carlos-manuel-rodriguez";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Blessed Carlos Manuel Rodríguez: His Life";
const DESCRIPTION =
  "Blessed Carlos Manuel Rodríguez, “Charlie” of Puerto Rico: the layman who lived for the Easter Vigil, his illness, feast day, tomb in Caguas and a prayer.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const TIMELINE: { year: string; event: string }[] = [
  { year: "1918", event: "Born November 22 in Caguas, Puerto Rico" },
  { year: "Childhood", event: "The family store and home burn; the family moves in with his grandmother" },
  { year: "Teens", event: "Ulcerative colitis begins, interrupting his schooling again and again" },
  { year: "1940s", event: "Studies at the University of Puerto Rico for a time; works as an office clerk" },
  { year: "1940s–1950s", event: "Translates and publishes liturgical texts; organizes liturgy circles for students in Río Piedras" },
  { year: "1950s", event: "Promotes active participation, the vernacular and a renewed Easter Vigil before Vatican II" },
  { year: "1963", event: "Dies of rectal cancer on July 13 in San Juan, aged 44" },
  { year: "2001", event: "Beatified by St. John Paul II in Rome on April 29, the first Puerto Rican beatified" },
];

export default function BlessedCarlosManuelRodriguez() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="blessed carlos manuel rodriguez, beato charlie rodriguez, carlos manuel rodriguez feast day, puerto rico blessed, we live for that night, vivimos para esa noche, easter vigil saint, catholic layman liturgy, caguas"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Blessed Carlos Manuel Rodríguez", url: PAGE_URL },
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
              <span className="text-text">Blessed Carlos Manuel Rodríguez</span>
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
                Blessed Carlos Manuel Rodríguez: The Puerto Rican Layman Who Lived for Easter Night
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                He never married, never became a priest, and spent most of his short life sick and working a clerk’s desk. Yet “Charlie” Rodríguez helped a generation of Puerto Rican Catholics fall in love with the liturgy. Here is his life, his feast day, where he rests, a prayer, and why he speaks to us now.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  Blessed Carlos Manuel Rodríguez (1918–1963), known as Charlie, was a lay Catholic from Caguas, Puerto Rico, who devoted his life to helping ordinary people understand and pray the liturgy, above all the Easter Vigil. Despite chronic illness he translated liturgical texts and led study circles for university students. St. John Paul II beatified him on April 29, 2001, making him the first Puerto Rican beatified. His feast is July 13, kept on May 4 in Puerto Rico.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Boy From Caguas</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Carlos Manuel Cecilio Rodríguez Santiago was born on November 22, 1918, in Caguas, a town in the hills south of San Juan. He grew up in a devout family whose parents ran a small store. When he was still a child a fire destroyed the family business and home, and the Rodríguez family moved in with his maternal grandmother, a woman of deep faith who shaped the children’s prayer life. Faith was simply part of the air in that crowded house.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                From a young age Charlie suffered from ulcerative colitis, a painful inflammatory disease of the bowel. Flare-ups forced him to leave school more than once and later cut short his studies at the University of Puerto Rico. He never earned a degree. To support himself he took work as an office clerk, and for most of his adult life that was his job. He was bright, read widely and loved music, but his body would not let him follow the career his mind could have handled.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">An Apostle of the Liturgy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                What Charlie could not do through a profession he did through the Church’s prayer. In the decades before the Second Vatican Council, most Catholics followed the Latin Mass silently, often praying their own devotions while the priest prayed at the altar. Charlie was convinced that the liturgy itself was the great school of holiness and that lay people should understand it and take part in it.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                He spent his clerk’s wages and his free hours translating liturgical texts into Spanish and distributing them, and he is credited with a publication on the liturgy and Christian culture (often given as “Liturgia y Cultura Cristiana”). In Río Piedras, near the University of Puerto Rico campus, he organized liturgy circles where students met to study the Mass, the liturgical year and the Scriptures read at each season. Many young people who passed through those groups became leaders in the Church on the island.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                He also promoted ideas that would later be confirmed by the Council: active participation of the faithful, use of the people’s own language, and a restored celebration of the Easter Vigil at night. He was not a rebel. He worked with priests and bishops, and he simply wanted Catholics to pray with the Church instead of next to it.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">“We Live for That Night”</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Charlie’s favorite saying was “Vivimos para esa noche,” which means “We live for that night.” The night he meant was the Easter Vigil, when the Church lights the new fire, sings the Exsultet, baptizes new Christians and proclaims the Resurrection. For him the whole Christian life pointed toward that celebration and toward the eternal Easter it promises.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Paul explains why the Vigil carried such weight for him: “We were indeed buried with him through baptism into death, so that, just as Christ was raised from the dead by the glory of the Father, we too might live in newness of life” (Romans 6:4; see Romans 6:3–5). And in another letter Paul writes, “Christ, our paschal lamb, has been sacrificed. Therefore, let us celebrate the feast” (1 Corinthians 5:7–8). Charlie took those words literally. Easter was not one feast among many; it was the reason for every other.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                To enter into the days he lived for, read our guides to{" "}
                <Link to="/blog/what-is-holy-week-catholic/" className={linkClass}>Holy Week</Link>
                {", the "}
                <Link to="/blog/catholic-easter/" className={linkClass}>Catholic celebration of Easter</Link>
                {", and the "}
                <Link to="/blog/meaning-mass/" className={linkClass}>meaning of the Mass</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Illness, Darkness and Death</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In 1963 Charlie was diagnosed with rectal cancer. Surgery could not stop it. Those who knew him say that toward the end he passed through a period of spiritual darkness, feeling far from God, before regaining his peace. He died in San Juan on July 13, 1963, at forty-four. A few months later the Second Vatican Council issued its constitution on the liturgy, which affirmed much of what he had spent his life promoting. He did not live to see it.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Timeline of Charlie Rodríguez’s Life</h2>
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

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Beatification, Feast Day and Tomb</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                After the Church approved a miracle attributed to his intercession, reported as the healing of a woman with cancer, St. John Paul II beatified Charlie in Rome on April 29, 2001. He became the first Puerto Rican to be beatified and one of the first lay people from the United States and its territories to be raised to the altars.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                His feast in the general sense falls on July 13, the day of his death. According to the US bishops’ calendar, Puerto Rico keeps his memorial on May 4. His remains are reported to rest in the Cathedral of the Sweet Name of Jesus (Dulce Nombre de Jesús) in his hometown of Caguas, where pilgrims come to pray. If you plan a visit, confirm the details with the Diocese of Caguas.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Charlie is one of several holy people from American soil. Meet the others in our{" "}
                <Link to="/blog/us-saints-and-blesseds/" className={linkClass}>guide to US saints and blesseds</Link>
                {", including "}
                <Link to="/blog/blessed-fulton-sheen/" className={linkClass}>Blessed Fulton Sheen</Link>
                {", who died just sixteen years after him."}
              </p>

              <QuizCTA
                title="Do you live for Easter, or just attend it?"
                description="Take our short Catholic life assessment and find practical ways to pray the liturgy more deeply all year."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Turns to Blessed Charlie</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                He has no official patronage, but in popular devotion Catholics ask his help for young people and university students, whom he spent his life forming; for musicians, liturgists and parish volunteers who serve at Mass; and for anyone living with chronic illness, especially digestive disease or cancer. Many young adults in Puerto Rico and in the Puerto Rican diaspora on the mainland see in him a model of a lay vocation lived fully without a title or a pulpit.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For more companions in suffering and study, see our pages on the{" "}
                <Link to="/blog/patron-saint-of-chronic-pain/" className={linkClass}>patron saint of chronic pain</Link>
                {" and the "}
                <Link to="/blog/patron-saint-of-students/" className={linkClass}>patron saint of students</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Prayer Through Blessed Carlos Manuel Rodríguez</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed mb-3">
                  Risen Lord, you filled Blessed Carlos Manuel with joy in your Paschal Mystery, even in the long years of his illness. Through his prayers, teach me to love the Mass, to listen to your Word, and to sing with the Church when I would rather stay silent. When my body is weak or my faith feels dark, let me remember the fire of Easter night. Help the young people of our parishes find in your liturgy a home and a calling. Blessed Charlie, who lived for that night, pray for us. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">This prayer was written for this guide. It is not a liturgical text.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why He Matters Today</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>He shows what a layperson can do.</strong> Charlie had no ordination, no degree and no money. He had a love for the Church’s prayer and the persistence to share it, and that was enough to change many lives.
                </li>
                <li>
                  <strong>He refused to let illness define him.</strong> Chronic disease limited his work and finally killed him, but it never made him bitter. He offered it and kept serving.
                </li>
                <li>
                  <strong>He points us to Easter.</strong> Many Catholics have never attended an Easter Vigil. Going this year, and staying for the whole thing, is the simplest way to honor him.
                </li>
                <li>
                  <strong>He is a hope for Puerto Rico.</strong> For an island that has known hurricanes, poverty and emigration, a blessed from Caguas is a reminder that holiness grows in ordinary places.
                </li>
              </ul>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To pray as Charlie did through long illness, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/sick/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for the Sick</a> and the{" "}
              <a href="https://catholicbibleonline.com/novenas/physical-healing/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Physical Healing</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who was Blessed Carlos Manuel Rodríguez?",
                  answer: "A lay Catholic from Caguas, Puerto Rico (1918–1963), known as Charlie, who devoted his life to teaching people to understand and pray the liturgy, especially the Easter Vigil, despite lifelong illness.",
                },
                {
                  question: "When is his feast day?",
                  answer: "July 13, the day he died in 1963. In Puerto Rico his memorial is kept on May 4, according to the US bishops’ calendar.",
                },
                {
                  question: "What does “Vivimos para esa noche” mean?",
                  answer: "“We live for that night.” It was Charlie’s favorite saying, and the night he meant was the Easter Vigil, the celebration of Christ’s Resurrection.",
                },
                {
                  question: "Is he the first Puerto Rican saint?",
                  answer: "He is the first Puerto Rican to be beatified, which makes him a blessed rather than a canonized saint. St. John Paul II beatified him in Rome on April 29, 2001.",
                },
                {
                  question: "Where is Blessed Carlos Manuel Rodríguez buried?",
                  answer: "His remains are reported to be in the Cathedral of Dulce Nombre de Jesús in Caguas, Puerto Rico, his hometown.",
                },
                {
                  question: "What illness did he have?",
                  answer: "He suffered from ulcerative colitis from a young age, which interrupted his studies, and he died of rectal cancer at the age of 44.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Live for that night"
              description="Find a rhythm of Mass, prayer and the liturgical year that draws you toward Easter."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
