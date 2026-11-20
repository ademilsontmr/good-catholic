import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Globe, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-immigrants";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Immigrants: Saints & Prayers";
const DESCRIPTION =
  "Who is the patron saint of immigrants? St. Frances Cabrini, plus St. John Neumann, St. Toribio Romo, the Holy Family and prayers for immigrant families.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const SAINTS: { name: string; dates: string; why: string; feast: string }[] = [
  {
    name: "St. Frances Xavier Cabrini",
    dates: "1850–1917",
    why: "Italian immigrant who served Italian immigrants in the US; named patroness of immigrants by Pius XII in 1950",
    feast: "November 13 (US)",
  },
  {
    name: "St. John Neumann",
    dates: "1811–1860",
    why: "Bohemian immigrant, bishop of Philadelphia; built parishes and schools for German, Irish and Italian newcomers",
    feast: "January 5",
  },
  {
    name: "St. John Baptist Scalabrini",
    dates: "1839–1905",
    why: "Italian bishop who founded the Scalabrinian missionaries for migrants; canonized 2022",
    feast: "June 1",
  },
  {
    name: "St. Toribio Romo",
    dates: "1900–1928",
    why: "Mexican Cristero-era martyr; invoked in popular devotion by migrants crossing the border",
    feast: "May 21 (with the Mexican martyrs)",
  },
  {
    name: "St. Joseph and the Holy Family",
    dates: "1st century",
    why: "Fled to Egypt as refugees to save the child Jesus (Matthew 2:13–15)",
    feast: "Holy Family: Sunday after Christmas",
  },
];

export default function PatronSaintOfImmigrants() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of immigrants, patron saint of migrants, patron saint of refugees, st frances cabrini prayer, prayer for immigrants catholic, st toribio romo, st john neumann immigrants, world day of migrants and refugees"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Immigrants", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of Immigrants</span>
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
                Patron Saint of Immigrants: Saints Who Crossed Borders, and Prayers for Families Far From Home
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic Church in the United States was built largely by immigrants, and several of its saints arrived with a suitcase and a foreign accent. Here is who the patron saints of immigrants, migrants and refugees are, what the Church actually teaches about migration, and three prayers for families on the move.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <Globe className="w-24 h-24 text-emerald-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The patron saint of immigrants is St. Frances Xavier Cabrini, an Italian-born sister who served immigrants in the United States and became the first American citizen to be canonized, in 1946. Pope Pius XII named her patroness of immigrants in 1950. Catholics also pray to St. John Neumann, St. John Baptist Scalabrini, St. Toribio Romo and the Holy Family, who were refugees in Egypt.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Church of Strangers Made Welcome</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Concern for the foreigner runs through the whole Bible. Israel is told to treat the alien who lives among them like a native and to love him as yourself, “for you too were once aliens in the land of Egypt” (Leviticus 19:33–34). Jesus counts welcoming the stranger among the works by which we will be judged: “I was a stranger and you welcomed me” (Matthew 25:35). The Letter to the Hebrews adds that by showing hospitality some have entertained angels without knowing it (Hebrews 13:2).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For many American Catholics this is family history, not theory. Irish, German, Italian, Polish, Mexican, Filipino, Vietnamese and Nigerian Catholics have each in turn filled pews and built parishes. The saints below walked with them.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. Frances Xavier Cabrini, Patroness of Immigrants</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Born in Lombardy in 1850, Frances Cabrini founded the Missionary Sisters of the Sacred Heart and hoped to go to China. Pope Leo XIII told her to go west instead, to the Italian immigrants crowding into American cities. She arrived in New York in 1889 and over the next twenty-eight years opened schools, orphanages and hospitals from New York to Chicago, Denver and Seattle. She became a US citizen, died in Chicago in 1917, and was canonized in 1946, the first American citizen raised to the altars. Her feast in the United States is November 13.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Her full story, including her shrine in New York, is on our{" "}
                <Link to="/blog/saint-frances-xavier-cabrini/" className={linkClass}>St. Frances Xavier Cabrini</Link>
                {" page."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Other Saints for Immigrants, Migrants and Refugees</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. John Neumann</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. John Neumann left Bohemia in 1836 with little money and no assignment, was ordained in New York, and spent years riding circuits among German-speaking farmers in upstate New York. As bishop of Philadelphia from 1852 he learned enough languages to hear confessions from German, Irish and Italian parishioners, and he built a diocesan Catholic school system so immigrant children could keep their faith. He died on a Philadelphia street in 1860. His feast is January 5.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For a prayer in his name, see our{" "}
                <Link to="/blog/st-john-neumann-prayer-catholic-guide/" className={linkClass}>St. John Neumann prayer guide</Link>.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. John Baptist Scalabrini</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                As bishop of Piacenza in the late 1800s, Giovanni Battista Scalabrini watched families from his diocese board ships for the Americas with no one to accompany them. In 1887 he founded the Missionaries of St. Charles, known as the Scalabrinians, to serve migrants at ports, on ships and in their new countries. The Scalabrinians still run shelters and parishes along migration routes, including on the US–Mexico border. He was canonized in 2022, and his feast is June 1.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Toribio Romo</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Toribio Romo was a young Mexican priest from Jalisco, shot by government soldiers in 1928 during the persecution of the Cristero period. He was canonized in 2000 among the Mexican martyrs, whose shared feast is May 21. In recent decades a strong popular devotion has grown up around him: migrants tell stories of a young priest who appeared in the desert with water and directions, and then turned out to be the saint in the photograph at his shrine in Santa Ana de Guadalupe. These accounts are popular devotion, not anything the Church has examined, but they explain why many Mexican and Central American migrants carry his image.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Joseph and the Holy Family</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Warned in a dream, St. Joseph took Mary and the child Jesus by night and fled to Egypt, staying there until Herod died (Matthew 2:13–15). Popes have often pointed to the Holy Family as the model of every refugee family: parents forced to leave home to protect a child. Many Catholics pray to St. Joseph for work, housing and protection after a move.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patrons of Migrants at a Glance</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Saint</th>
                      <th className="p-3 font-semibold">Dates</th>
                      <th className="p-3 font-semibold">Connection to migrants</th>
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
                Latin American Catholics in the US also turn to Mary under the title Our Lady of Guadalupe; see{" "}
                <Link to="/blog/our-lady-of-guadalupe-patroness-americas/" className={linkClass}>Our Lady of Guadalupe, Patroness of the Americas</Link>
                {". For the Holy Family feast, see our "}
                <Link to="/blog/holy-family-sunday-prayer-feast-guide/" className={linkClass}>Holy Family Sunday guide</Link>.
              </p>

              <QuizCTA
                title="New country, same faith?"
                description="Moving can scatter a prayer routine. Take our short Catholic life assessment and get a realistic plan for prayer, Mass and Confession."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Teaches About Migration</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Catholic teaching on immigration is often quoted by halves. The Catechism holds both together in a single paragraph (Catechism 2241). First, more prosperous nations are obliged, to the extent they are able, to welcome the foreigner who is seeking the security and livelihood he cannot find at home, and public authorities should see that the natural right of the guest is respected.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Second, political authorities may, for the sake of the common good, attach legal conditions to immigration, especially regarding immigrants’ duties toward the country that receives them. Immigrants in turn are obliged to respect with gratitude the material and spiritual heritage of their host country, to obey its laws and to help carry civic burdens.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Applying these principles to specific policy is a matter of prudential judgment on which faithful Catholics can disagree. What is not optional is the dignity of every person, whatever their legal status, and the duty to treat them as Christ. Our overview of Catholic social teaching explains how these principles fit together.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read more in{" "}
                <Link to="/blog/catholic-social-teaching-today/" className={linkClass}>Catholic social teaching today</Link>
                {" and the "}
                <Link to="/blog/corporal-works-of-mercy-catholic/" className={linkClass}>corporal works of mercy</Link>
                {", which include sheltering the homeless."}
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Two dates on the calendar keep these questions in front of the Church. The World Day of Migrants and Refugees is now kept on the last Sunday of September, with a message from the pope each year. In the United States, the bishops’ conference sponsors National Migration Week, now held in the days leading up to that Sunday, with prayer resources for parishes.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Prayers for Immigrants</h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">For an Immigrant Family</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Holy Family of Nazareth, you knew the road to Egypt, the strange language and the worry about tomorrow. Watch over this family in their new home. Give the parents honest work and fair employers, give the children good teachers and true friends, and keep them close to the Church wherever they settle. Let them never forget where they come from, and let them find welcome where they are. St. Frances Cabrini, pray for them. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">For Someone Awaiting Papers</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord, you know how long this waiting has been: the forms, the fees, the appointments, the letters that do not come. Give [name] patience for each day and wisdom in every decision. Guide the lawyers and officials who handle this case to act with fairness and care. Keep fear from taking over this home, and let your peace be stronger than uncertainty. St. John Neumann, who also arrived as a stranger, stay near us. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">For Those Who Welcome</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Jesus, you came to your own and were not received. Make our parish, our street and our home places where strangers find you. Give us generous hearts and practical hands: a ride to an appointment, a meal, a patient conversation in broken English or Spanish. Keep us from suspicion and from pride. When we welcome the newcomer, let us recognize that we are welcoming you. St. John Baptist Scalabrini, pray for us. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">These prayers were written for this guide. They are not liturgical texts.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Ways a Parish Can Help</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>Offer Mass and confession in newcomers’ languages</strong>, or point families to the parish that does.
                </li>
                <li>
                  <strong>Partner with Catholic Charities</strong> or a diocesan legal service, so families get reliable immigration advice instead of costly scams.
                </li>
                <li>
                  <strong>Teach English and citizenship classes</strong> in the parish hall, honoring the duty to integrate that the Catechism names.
                </li>
                <li>
                  <strong>Celebrate the saints of newcomers.</strong> Mark St. Frances Cabrini’s feast in November and St. Toribio Romo’s in May with a Mass or a shared meal.
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Many of the priests and sisters now serving American parishes are themselves immigrants. To pray for them, see our guide to the{" "}
                <Link to="/blog/patron-saint-of-missionaries/" className={linkClass}>patron saint of missionaries</Link>.
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              For a family facing a move or a new start, pray the{" "}
              <a href="https://catholicbibleonline.com/novenas/moving-relocation/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Moving and Relocation</a> or the{" "}
              <a href="https://catholicbibleonline.com/novenas/our-lady-of-guadalupe/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena to Our Lady of Guadalupe</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of immigrants?",
                  answer: "St. Frances Xavier Cabrini. She served Italian immigrants in the United States, became the first US citizen canonized (1946), and was named patroness of immigrants by Pope Pius XII in 1950.",
                },
                {
                  question: "Who is the patron saint of migrants crossing the border?",
                  answer: "Many Mexican and Central American migrants pray to St. Toribio Romo, a priest martyred in 1928 and canonized in 2000. His role as a guardian of border crossers comes from popular devotion and reported stories, not an official declaration.",
                },
                {
                  question: "Who is the patron saint of refugees?",
                  answer: "There is no single official patron, but Catholics pray to St. Joseph and the Holy Family, who fled to Egypt (Matthew 2:13–15), and to St. Frances Cabrini and St. John Baptist Scalabrini.",
                },
                {
                  question: "What does the Catholic Church teach about immigration?",
                  answer: "Catechism 2241 teaches that prosperous nations should welcome foreigners as far as they are able, that authorities may set legal conditions for the common good, and that immigrants must respect their host country’s heritage and obey its laws.",
                },
                {
                  question: "When is the World Day of Migrants and Refugees?",
                  answer: "On the last Sunday of September. In the United States, National Migration Week is held in the days leading up to it.",
                },
                {
                  question: "When is the feast of St. Frances Cabrini?",
                  answer: "November 13 in the United States. She died on December 22, 1917, in Chicago.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Keep your faith wherever you land"
              description="Build a rhythm of prayer, Mass and Confession that travels with you."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
