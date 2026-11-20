import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-youth";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Youth: Saints & Prayers";
const DESCRIPTION =
  "Who is the patron saint of youth? St. John Bosco and St. Aloysius Gonzaga, plus four young saints, feast days, and prayers for teens and their parents.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const SAINTS: { name: string; dates: string; why: string; feast: string }[] = [
  {
    name: "St. John Bosco",
    dates: "1815–1888",
    why: "Priest of Turin who gave his life to poor and street boys; founded the Salesians",
    feast: "January 31",
  },
  {
    name: "St. Aloysius Gonzaga",
    dates: "1568–1591",
    why: "Young Jesuit who died nursing plague victims; formally named patron of Catholic youth",
    feast: "June 21",
  },
  {
    name: "St. Dominic Savio",
    dates: "1842–1857",
    why: "Don Bosco’s pupil, an ordinary schoolboy who aimed at holiness in small things",
    feast: "May 6 (formerly March 9)",
  },
  {
    name: "St. Maria Goretti",
    dates: "1890–1902",
    why: "Eleven-year-old martyr who forgave her attacker; invoked for purity and by young victims of abuse",
    feast: "July 6",
  },
  {
    name: "St. Pier Giorgio Frassati",
    dates: "1901–1925",
    why: "Turin student, mountaineer and friend of the poor; canonized September 7, 2025",
    feast: "July 4",
  },
  {
    name: "St. Carlo Acutis",
    dates: "1991–2006",
    why: "Milan teenager devoted to the Eucharist who used the internet to share the faith; canonized September 7, 2025",
    feast: "October 12",
  },
];

export default function PatronSaintOfYouth() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of youth, patron saint of young people, patron saint of teenagers, catholic prayer for teenagers, st john bosco youth, st aloysius gonzaga, st dominic savio, carlo acutis, pier giorgio frassati, prayer for my teenage son, prayer for my teenage daughter"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Youth", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of Youth</span>
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
                Patron Saint of Youth: The Saints Who Understand Teenagers, and Prayers for Young People
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Several of the Church’s saints were teenagers themselves, and one spent his whole priesthood on rowdy boys nobody else wanted. Here is who young Catholics and their parents turn to, why, and how to pray for a teenager without turning prayer into a lecture.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Sparkles className="w-24 h-24 text-sky-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The best-known patron saint of youth is St. John Bosco (feast January 31), the Italian priest who founded the Salesians to educate poor boys. St. Aloysius Gonzaga (June 21) holds the formal title of patron of Catholic youth, granted by the Holy See in the 18th century. Teenagers today also look to St. Dominic Savio, St. Maria Goretti, and the two young men canonized together in 2025, St. Carlo Acutis and St. Pier Giorgio Frassati.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Scripture Says to the Young</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Bible never treats youth as a waiting room for real life. St. Paul told his young coworker Timothy, “Let no one have contempt for your youth,” and then raised the bar: set an example “in speech, conduct, love, faith, and purity” (1 Timothy 4:12). The old sage of Ecclesiastes urges, “Remember your Creator in the days of your youth” (Ecclesiastes 12:1), before the years grow heavy. And Luke gives the only glimpse we have of Jesus as a teenager: after being found in the Temple, he went home to Nazareth and “advanced in wisdom and age and favor before God and man” (Luke 2:52).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                That last verse is a quiet comfort for parents. Even the Son of God grew up in stages, inside a family, with a mother who did not always understand him at first (Luke 2:50). Growth takes time, and the saints below show how differently it can look.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. John Bosco: Father and Teacher of Youth</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. John Bosco grew up poor on a farm near Turin and lost his father as a toddler. Tradition holds that at about age nine he dreamed of a field full of fighting, cursing boys; when he tried to stop them with his fists, a figure told him he would win them not with blows but with gentleness and love. Whether or not every detail of that story is exact, it describes the rest of his life. As a young priest in industrial Turin he found boys sleeping in the streets, working dangerous jobs and filling the prisons, and he gathered them into what he called an Oratory: a place with a chapel, a playground, classes and workshops.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                His method, the “preventive system,” rested on three things: reason, religion and loving-kindness. Instead of waiting for boys to misbehave and then punishing them, he and his helpers stayed present among them, at games as well as at prayer, so that trust made most punishment unnecessary. He founded the Salesians of Don Bosco and, with St. Mary Mazzarello, the Salesian Sisters, who still run schools and youth centers around the world, including in many American cities. He died on January 31, 1888, and was canonized in 1934.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For his prayer, his novena and a fuller look at his life, see our{" "}
                <Link to="/blog/st-john-bosco-prayer-catholic-guide/" className={linkClass}>St. John Bosco prayer guide</Link>
                {" and his "}
                <Link to="/blog/saint-of-the-day/january-31/" className={linkClass}>saint-of-the-day profile</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. Aloysius Gonzaga: The Official Patron of Catholic Youth</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Aloysius Gonzaga was the eldest son of an Italian noble family and was raised to be a soldier and courtier. He wanted something else. Over his father’s fierce objections he gave up his inheritance and entered the Jesuits in Rome at seventeen. When plague struck the city in 1591, the young seminarian volunteered in the hospitals, carried the sick in from the streets, washed and fed them, caught the disease and died at twenty-three.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                He was canonized in 1726 and declared patron of young students and Catholic youth in the 18th century, a patronage later reaffirmed by Pope Pius XI. Teenagers sometimes find his piety intense, but his story is about something every young person faces: choosing your own path when the people around you have already decided who you should be.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read more on his{" "}
                <Link to="/blog/saint-of-the-day/june-21/" className={linkClass}>June 21 saint-of-the-day page</Link>
                {", and see our "}
                <Link to="/blog/patron-saint-of-students/" className={linkClass}>patron saint of students</Link>
                {" guide for exam-season prayers."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Four Saints Who Were Young Themselves</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Dominic Savio</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Dominic Savio arrived at Don Bosco’s Oratory at twelve and announced that he wanted to become a saint. Bosco told him that holiness meant doing ordinary duties well, staying cheerful and being a good friend, and Dominic took him at his word. He broke up a stone fight between two classmates by holding up a crucifix, and he started a group of students who looked out for newcomers. He died of illness at fourteen and was canonized in 1954. His feast is now kept on May 6.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Maria Goretti</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Maria Goretti was an eleven-year-old farm girl near Nettuno, Italy, who was stabbed in 1902 while resisting a young man’s sexual assault. Before she died she forgave him. Years later, after prison, he repented and attended her canonization in 1950. She is invoked for purity, and with great care she is also a companion to young people who have suffered abuse: what was done to her was never her fault. Her feast is July 6.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Pier Giorgio Frassati</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Pier Giorgio Frassati was a university student in Turin who climbed mountains, played pranks, argued politics and quietly spent his allowance on poor families. He died of polio at twenty-four, and the crowds of the poor at his funeral surprised his own wealthy parents. His motto, scrawled on a climbing photo, was “Verso l’alto,” toward the heights. He is a natural friend for college students and young adults.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Carlo Acutis</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Carlo Acutis was a Milan teenager who loved video games, coding and his dog, went to daily Mass, and built a website cataloguing Eucharistic miracles. He died of leukemia at fifteen in 2006. Pope Leo XIV canonized him together with Pier Giorgio Frassati on September 7, 2025, giving young Catholics two saints of the modern world at once.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read the full story of{" "}
                <Link to="/blog/blessed-carlo-acutis/" className={linkClass}>St. Carlo Acutis</Link>
                {", and the daily profiles of "}
                <Link to="/blog/saint-of-the-day/july-6/" className={linkClass}>St. Maria Goretti</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patron Saints of Youth at a Glance</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Saint</th>
                      <th className="p-3 font-semibold">Dates</th>
                      <th className="p-3 font-semibold">Why young people invoke them</th>
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
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Feast days for St. Dominic Savio, St. Pier Giorgio Frassati and St. Carlo Acutis are not on the General Roman Calendar; they are kept by the Salesians, local dioceses and devotees.
              </LinkedText>

              <QuizCTA
                title="Where does your faith stand right now?"
                description="Teens, parents and young adults can all take our short Catholic life assessment and get a realistic next step for prayer, Mass and Confession."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Prayers for Young People</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The first is for a teenager to pray in the morning. The second is for a parent who is worried. The third fits the start of a youth group meeting, a Confirmation retreat or a trip.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Teen’s Morning Prayer</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Jesus, you were my age once. You know what school is like, what it feels like to be misunderstood, and how loud other people’s opinions can get. Before I open my phone, I give you this day. Help me tell the truth, be kind to someone who is alone, and do my work even when it is boring. When I mess up, remind me I can start over. St. Dominic Savio, help me be holy in ordinary things. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Parent’s Prayer for a Teenager</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Heavenly Father, you loved my child before I ever held them, and you love them still on the days we cannot talk. Guard their heart and their body. Put good friends in their path and give them the courage to walk away from what will hurt them. Give me patience to listen more than I lecture, and the humility to apologize when I am wrong. Where I cannot follow them, go with them. St. John Bosco, who won young hearts with kindness, pray for us both. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Before a Youth Group or Retreat</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Holy Spirit, we are here with all our distractions, our doubts and our hopes. Open our ears to your word and to each other. Let no one leave tonight feeling invisible. Give our leaders wisdom and give us honest hearts. St. Pier Giorgio Frassati and St. Carlo Acutis, friends who were young like us, lead us toward the heights. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">All three prayers were written for this guide. They are not liturgical texts.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Living the Faith as a Young Catholic Today</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Confirmation</h3>
              <p className="text-text leading-relaxed mb-6">
                In most American dioceses, Confirmation is received in the early or middle teen years, and choosing a Confirmation saint is a natural moment to meet the patrons on this page. Pick a saint whose story actually speaks to you, not just the one with the coolest name. Our{" "}
                <Link to="/blog/catholic-confirmation-guide/" className={linkClass}>Catholic Confirmation guide</Link>
                {" explains the sacrament, sponsors and preparation."}
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Phones and Faith</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Carlo Acutis is often called a patron of the internet, but he set limits: by family accounts he capped his own video-game time to about an hour a week. A few habits help teens and parents alike: no phones at meals or in bedrooms overnight, a short prayer before unlocking the screen in the morning, following a few accounts that share real Catholic content, and treating any feed that makes you feel worse about yourself as something you are free to leave. Parents who model this get further than parents who only enforce it.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">World Youth Day</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. John Paul II began World Youth Day in the 1980s, and the international gathering now draws hundreds of thousands of young people every few years. The next international World Youth Day is planned for Seoul, South Korea, in 2027. Many US dioceses organize pilgrim groups well in advance, so ask your parish or diocesan youth office about fundraising and registration. Dioceses also hold local celebrations around the feast of Christ the King for those who cannot travel.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">After High School</h3>
              <p className="text-text leading-relaxed mb-6">
                The years after graduation are when many young Catholics drift. Our guides to{" "}
                <Link to="/blog/staying-catholic-in-college/" className={linkClass}>staying Catholic in college</Link>
                {" and "}
                <Link to="/blog/gen-z-and-catholicism/" className={linkClass}>Gen Z and Catholicism</Link>
                {" look at what helps. And for the athletes in the family, see the "}
                <Link to="/blog/patron-saint-of-athletes/" className={linkClass}>patron saint of athletes</Link>.
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To pray for a young person over nine days, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/st-john-bosco/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">St. John Bosco Novena</a> or the{" "}
              <a href="https://catholicbibleonline.com/novenas/carlo-acutis/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Carlo Acutis Novena</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of youth?",
                  answer: "St. John Bosco is the most widely invoked patron of young people, and St. Aloysius Gonzaga holds the formal title of patron of Catholic youth, granted by the Holy See in the 18th century.",
                },
                {
                  question: "Who is the patron saint of teenagers?",
                  answer: "There is no single official patron of teenagers. Teens often choose St. Dominic Savio, St. Maria Goretti or St. Carlo Acutis, who all died as teenagers, along with St. John Bosco.",
                },
                {
                  question: "When is the feast of St. John Bosco?",
                  answer: "January 31, the day he died in Turin in 1888. It is an obligatory memorial on the General Roman Calendar.",
                },
                {
                  question: "Are Carlo Acutis and Pier Giorgio Frassati saints now?",
                  answer: "Yes. Pope Leo XIV canonized both of them together in St. Peter’s Square on September 7, 2025.",
                },
                {
                  question: "What is a good Catholic prayer for my teenage son or daughter?",
                  answer: "Any honest prayer works. Many parents pray a short daily prayer to St. John Bosco, or a Hail Mary for their child each night. A sample parent’s prayer is given above.",
                },
                {
                  question: "When and where is the next World Youth Day?",
                  answer: "The next international World Youth Day is planned for Seoul, South Korea, in 2027. Check with your diocesan youth office for exact dates and pilgrim groups.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Help a young person take the next step"
              description="Find a simple, realistic rhythm of prayer, Mass and Confession for teens and young adults."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
