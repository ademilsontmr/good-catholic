import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { GraduationCap, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "blessed-james-miller";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Blessed James Miller: Life and Feast Day";
const DESCRIPTION =
  "Blessed James Miller, the Wisconsin Christian Brother and teacher martyred in Guatemala in 1982: his life, feast day (February 13), and a prayer.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const TIMELINE: { year: string; event: string }[] = [
  { year: "1944", event: "Born September 21 to a farming family in central Wisconsin" },
  { year: "Late 1950s", event: "Meets the De La Salle Christian Brothers at Pacelli High School in Stevens Point; goes to their juniorate in Missouri" },
  { year: "1962", event: "Enters the novitiate and receives the religious name Brother Leo William" },
  { year: "1960s", event: "Begins teaching high school, including at Cretin High School in St. Paul, Minnesota" },
  { year: "1969", event: "Makes perpetual vows in August; later returns to his baptismal name, Brother James" },
  { year: "1970s", event: "Sent to Nicaragua; from 1974 directs a school in Puerto Cabezas and oversees construction of rural schools" },
  { year: "1979", event: "Forced to leave Nicaragua amid the Sandinista revolution; returns to teach in Minnesota" },
  { year: "1981", event: "Sent to Guatemala in January; serves Maya young people at the Casa Indígena in Huehuetenango" },
  { year: "1982", event: "Shot by three hooded men on February 13 while repairing a wall at the school" },
  { year: "2019", event: "Beatified as a martyr on December 7 in Huehuetenango, Guatemala" },
];

export default function BlessedJamesMiller() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="blessed james miller, brother james miller, james alfred miller, christian brothers martyr, lasallian martyr, james miller feast day, huehuetenango martyr, wisconsin martyr guatemala, patron of teachers"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Blessed James Miller", url: PAGE_URL },
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
              <span className="text-text">Blessed James Miller</span>
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
                Blessed James Miller: The Christian Brother Who Taught, Built and Died in Guatemala
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Wisconsin farm kid who became a De La Salle Christian Brother, he taught teenagers in Minnesota, built schools in Nicaragua and was shot on a ladder in Guatemala in 1982. Here is the life of Blessed James Miller, his feast day, and why teachers have taken him as one of their own.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <GraduationCap className="w-24 h-24 text-sky-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  Blessed James Miller (1944–1982) was a De La Salle Christian Brother from Wisconsin who taught in the United States, Nicaragua and Guatemala. He was shot and killed by three hooded men on February 13, 1982, while repairing a wall at the school in Huehuetenango, Guatemala, where he served Maya young people. He was beatified as a martyr on December 7, 2019, and his feast day is February 13.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Wisconsin Farm Childhood</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                James Alfred Miller was born on September 21, 1944, to a farming family in central Wisconsin, in the area around Stevens Point. Like many farm children of his generation he grew up with chores before school, Sunday Mass, and a practical sense that if something was broken you fixed it yourself. Friends and confreres later remembered him as big, cheerful and tireless, more at home with a toolbox than a lectern, though he turned out to be good at both.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                At Pacelli High School in Stevens Point he met the Brothers of the Christian Schools, the religious institute founded by St. John Baptist de La Salle in 17th-century France to give a Christian education to young people, especially the poor. The Brothers are consecrated religious, not priests: they take vows and give their lives to teaching. James was drawn to them and went to their juniorate, a preparatory program for young candidates, in Missouri.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Brother Leo William, Then Brother James</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In 1962 he entered the novitiate and, following the custom of the time, received a religious name: Brother Leo William. After the Second Vatican Council many religious returned to their baptismal names, and he became Brother James. He began teaching high school, including at Cretin High School in St. Paul, Minnesota, where he taught classes and also took care of the building and grounds. Former students describe a teacher who was as likely to be found repairing something in the building as standing at the board.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                He made his perpetual vows in August 1969, binding himself for life to the Brothers and their mission. Not long afterward he asked to serve in Central America.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Building Schools in Nicaragua</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Brothers sent him to Nicaragua, where from 1974 he directed a school in Puerto Cabezas on the Caribbean coast, a region populated largely by Miskito and other Indigenous and Afro-Caribbean communities. Under his leadership the school grew, and he oversaw the construction of a number of small rural schools, often doing the physical work himself. In 1979, as the Sandinista revolution took power and the country was in upheaval, he was forced to leave Nicaragua. He returned to Minnesota and to the classroom at Cretin.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Huehuetenango and the Casa Indígena</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In January 1981 he was sent to Guatemala, to the highland city of Huehuetenango. There the Brothers ran a secondary school and the Casa Indígena, or Indian Center, a residential program that helped young Maya men from rural villages continue their education and learn agricultural and practical skills to bring home to their communities. Brother James taught, supervised and, as always, maintained the buildings.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Guatemala was then in the most violent years of an internal armed conflict that lasted from 1960 to 1996, fought between government forces and leftist guerrilla groups. The UN-sponsored Commission for Historical Clarification later estimated that more than 200,000 people were killed or disappeared during the war, most of them Maya civilians. Young Maya men were at particular risk of being forcibly recruited by one side or suspected of sympathizing with the other, and, according to accounts of the period, the Brothers had tried to protect their students from forced recruitment. His letters home show that he was aware of the danger and believed God wanted him there.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Martyrdom on February 13, 1982</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                On the afternoon of February 13, 1982, Brother James was on a ladder repairing a wall at the school when three hooded men approached and opened fire. He died at the scene. He was 37 years old. He was the second American missionary to be killed in Guatemala in less than a year, after Father Stanley Rother of Oklahoma in July 1981. His body was returned to Wisconsin and buried in his home area.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Church studied his life and death for decades. Pope Francis approved the recognition of his martyrdom, and on December 7, 2019, he was beatified at a Mass in Huehuetenango, among the people he had served. For the De La Salle Brothers worldwide, he became a symbol of what their vow to educate the poor can cost.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Two Scripture passages fit his life closely. Jesus said, "No one has greater love than this, to lay down one's life for one's friends" (John 15:13). And St. Paul urges, "Be firm, steadfast, always fully devoted to the work of the Lord, knowing that in the Lord your labor is not in vain" (1 Corinthians 15:58). Brother James died in the middle of ordinary labor, mending a wall for the sake of his students.
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
                title="Is your faith keeping pace with your work?"
                description="Take our short Catholic life assessment and get a realistic plan for prayer, Mass and Confession that fits a busy week."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Feast Day and Where He Is Remembered</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The feast of Blessed James Miller is February 13, the day of his death. As a blessed, he is honored especially by the De La Salle Christian Brothers and Lasallian schools, in Huehuetenango, and in the places in Wisconsin and Minnesota where he grew up and taught. Cretin-Derham Hall in St. Paul, the successor to Cretin High School, is among the schools that honor his memory. Lasallian educators have adopted him, in popular devotion, as a patron for teachers.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Prayer for Teachers Through His Intercession</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer to Blessed James Miller</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  God our Father, you called Blessed James Miller to teach the young and to serve the poor with his mind and his hands. He built classrooms, mended walls, and gave his life for the students you entrusted to him. Help me to see the students and young people in my care as he saw his: as your children, worth any labor. When the work is tiring and seems unnoticed, remind me that in you no labor is in vain. Protect all teachers and students who live with violence or fear. Blessed James, pray for us. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">Written for this guide. It is not a liturgical text.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why He Matters Today</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>For teachers.</strong> He shows that the unglamorous parts of school life, the repairs, the hallway conversations, the extra hours, are part of the vocation, not distractions from it.
                </li>
                <li>
                  <strong>For religious brothers.</strong> His life is a clear picture of a vocation many Catholics overlook: consecrated men who are not priests and who give their lives to teaching or service.
                </li>
                <li>
                  <strong>For Catholic schools.</strong> He worked for schools that served students who could not otherwise afford an education, the founding purpose of the Lasallian tradition.
                </li>
                <li>
                  <strong>For people who work with their hands.</strong> He was killed holding tools, not giving a speech. Ordinary work, offered to God, can be holy.
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                For more saints who taught, see our guide to the{" "}
                <Link to="/blog/patron-saint-of-teachers/" className={linkClass}>patron saint of teachers</Link>
                {", and for the story of the institutions he served, read about "}
                <Link to="/blog/catholic-schools-in-america/" className={linkClass}>Catholic schools in America</Link>
                {". Others who carried the faith abroad appear in the "}
                <Link to="/blog/patron-saint-of-missionaries/" className={linkClass}>patron saints of missionaries</Link>
                {". His story is closely linked to that of "}
                <Link to="/blog/blessed-stanley-rother/" className={linkClass}>Blessed Stanley Rother</Link>
                {", and both appear in our guide to "}
                <Link to="/blog/us-saints-and-blesseds/" className={linkClass}>American saints and blesseds</Link>.
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To pray for teachers and young people, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/st-john-bosco/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena to St. John Bosco</a>, patron of youth and educators, and the{" "}
              <a href="https://catholicbibleonline.com/novenas/children/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Children</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who was Blessed James Miller?",
                  answer: "A De La Salle Christian Brother (1944–1982) from central Wisconsin who taught in Minnesota, Nicaragua and Guatemala. He was killed in Huehuetenango, Guatemala, on February 13, 1982, and beatified as a martyr in 2019.",
                },
                {
                  question: "When is the feast day of Blessed James Miller?",
                  answer: "February 13, the anniversary of his death. It is celebrated especially by the Christian Brothers, Lasallian schools and in Huehuetenango, Guatemala.",
                },
                {
                  question: "Was Blessed James Miller a priest?",
                  answer: "No. He was a religious brother of the Brothers of the Christian Schools, a consecrated man who took vows and devoted his life to teaching, but was not ordained.",
                },
                {
                  question: "How did Brother James Miller die?",
                  answer: "Three hooded gunmen shot him while he was on a ladder repairing a wall at the school in Huehuetenango on February 13, 1982, during Guatemala's internal armed conflict.",
                },
                {
                  question: "When and where was he beatified?",
                  answer: "On December 7, 2019, at a Mass in Huehuetenango, Guatemala, the city where he died.",
                },
                {
                  question: "Is Blessed James Miller a patron of teachers?",
                  answer: "Not by formal decree, but Lasallian educators and many Catholic teachers invoke him as a patron. The Church's official patron of teachers is St. John Baptist de La Salle, founder of his order.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Holiness in ordinary work"
              description="Find a rhythm of prayer, Mass and Confession that fits a full teaching week."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
