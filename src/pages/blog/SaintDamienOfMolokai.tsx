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

const SLUG = "saint-damien-of-molokai";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "St. Damien of Molokai: Life, Feast & Prayer";
const DESCRIPTION =
  "St. Damien of Molokai, the Belgian priest who lived and died among Hansen's disease patients at Kalaupapa: his life, feast day, shrine and a prayer.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const TIMELINE: { year: string; event: string }[] = [
  { year: "1840", event: "Born Jozef (Jef) De Veuster on January 3 in Tremelo, Belgium" },
  { year: "1859", event: "Enters the Congregation of the Sacred Hearts of Jesus and Mary and takes the name Damien" },
  { year: "1863", event: "Sails for Hawaii in place of his brother Pamphile, who had fallen ill" },
  { year: "1864", event: "Arrives in Honolulu in March; ordained a priest on May 21 at the Cathedral of Our Lady of Peace" },
  { year: "1864–1873", event: "Serves mission districts on the island of Hawaii (the Big Island)" },
  { year: "1873", event: "Arrives at the Kalaupapa settlement on Molokai on May 10, volunteering to stay" },
  { year: "c. 1884–85", event: "Diagnosed with Hansen's disease (leprosy)" },
  { year: "1888", event: "Mother Marianne Cope and her sisters arrive at Kalaupapa" },
  { year: "1889", event: "Dies on April 15 at Kalawao, age 49; buried beside St. Philomena Church" },
  { year: "1890", event: "Robert Louis Stevenson publishes his open letter defending Damien" },
  { year: "1936", event: "Body moved to Leuven, Belgium" },
  { year: "1969", event: "Marisol Escobar statue placed in the US Capitol for Hawaii" },
  { year: "1995", event: "Beatified June 4 in Brussels by Pope John Paul II; relic of his right hand returned to Kalaupapa" },
  { year: "2009", event: "Canonized October 11 by Pope Benedict XVI" },
];

export default function SaintDamienOfMolokai() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="st damien of molokai, saint damien, father damien, damien de veuster, father damien feast day, prayer to st damien, kalaupapa, molokai leper colony, patron saint of hansen's disease, patron saint of outcasts"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Damien of Molokai", url: PAGE_URL },
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
              <span className="text-text">St. Damien of Molokai</span>
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
                St. Damien of Molokai: The Priest Who Chose to Stay
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Flemish farm boy went to Hawaii as a substitute for his brother, volunteered for the place everyone else feared, and became one of the patients he served. Here is his life, his feast day, where to honor him, and a prayer to ask his intercession.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-sky-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  St. Damien of Molokai (1840–1889), born Jozef De Veuster in Belgium, was a priest of the Congregation of the Sacred Hearts who served people with Hansen's disease (leprosy) in the Kalaupapa settlement on Molokai, Hawaii, from 1873 until he died of the disease in 1889. He was canonized in 2009. His feast is May 10 in the United States and April 15 in Belgium and many other places.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Farmer's Son from Tremelo</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Jozef De Veuster, called Jef by his family, was born on January 3, 1840, in Tremelo, a farming village in the Flemish part of Belgium. He was the seventh of eight children. His father wanted him to take over the family business, and Jef was big, strong and good with his hands, qualities that would matter enormously later. But two of his sisters became nuns and his older brother Auguste joined the Congregation of the Sacred Hearts of Jesus and Mary, taking the name Pamphile.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Jef followed his brother into the same congregation (often abbreviated SS.CC.) and took the name Damien, after one of the early martyr-physicians Cosmas and Damian. At first his superiors thought he lacked the education for priesthood and planned to make him a lay brother, but he learned Latin quickly from Pamphile and was allowed to study for ordination. Tradition holds that he prayed daily before a picture of St. Francis Xavier, the great missionary, asking to be sent to the missions.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Hawaii, in His Brother's Place</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In 1863 Pamphile was assigned to the Hawaiian mission but fell sick with typhus before departure. Damien, still a student, wrote to the superior general and asked to go instead. Permission came, and he sailed for Honolulu, arriving in March 1864. On May 21, 1864, he was ordained a priest at the Cathedral of Our Lady of Peace in Honolulu, which still stands.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For nine years he served large rural districts on the island of Hawaii, riding and walking between scattered villages, building chapels with his own hands and learning the Hawaiian language. It was hard, lonely work, and it prepared him for what came next.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Kalaupapa: "We Lepers"</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In 1865 the Hawaiian Kingdom, alarmed by the spread of leprosy, passed a law forcing people with the disease into isolation. They were shipped to the Kalaupapa peninsula on Molokai's north shore, a flat strip of land cut off by sea cliffs nearly two thousand feet high. Families were torn apart. The settlement had little housing, poor water, almost no medical care and a reputation for despair and lawlessness.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Bishop Louis Maigret wanted priests to take turns visiting so that no one would be stuck there permanently. Damien was among the volunteers, and he arrived on May 10, 1873. He soon asked to stay. He dressed wounds, built houses to replace grass shelters, improved the water supply by piping in water from a valley, enlarged St. Philomena Church at Kalawao, started an orphanage for boys and girls, organized a band and choir, and made coffins and dug graves so that the dead would be buried with dignity. He also fought the government in Honolulu, sometimes stubbornly, for food, supplies and better treatment.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Around 1884 or 1885 he was diagnosed with the disease himself. Early accounts say he then began a homily with the words "We lepers," no longer speaking from outside. He kept working, faster if anything, and was helped in his final years by Joseph Dutton, an American Civil War veteran, by other priests and brothers, and by Mother Marianne Cope and her Franciscan sisters, who arrived in 1888. He died on April 15, 1889, during Holy Week, at the age of forty-nine.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                A note on terms: sources from his own time, and many later ones, say leprosy and lepers. Today the illness is called Hansen's disease, and the label "leper" is avoided because of the stigma attached to it. The disease is now curable.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Robert Louis Stevenson's Defense</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Damien was not universally admired. After his death the Rev. Charles McEwen Hyde, a Presbyterian minister in Honolulu, wrote a private letter, later published, calling him coarse and dirty and implying that he caught the disease through immoral conduct. The Scottish author Robert Louis Stevenson, who had visited Kalaupapa shortly after Damien's death and spoken with those who knew him, answered in 1890 with a blistering open letter. Stevenson admitted Damien's faults, a quick temper and a lack of polish among them, but argued that he had gone where his critic never would, and that the people of Molokai loved him. The letter made Damien famous throughout the English-speaking world.
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
                      <tr key={`${t.year}-${t.event}`} className="border-t border-border align-top">
                        <td className="p-3 whitespace-nowrap font-medium text-text">{t.year}</td>
                        <td className="p-3 text-text">{t.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Burial, Relics and Canonization</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Damien was buried beside St. Philomena Church at Kalawao, the spot he had asked for. In 1936, at the request of the Belgian government, his body was exhumed and taken to Belgium, where it rests in Leuven. After his beatification, a relic of his right hand was returned to Hawaii in 1995 and reburied in his original grave at Kalawao, so he is honored in both places.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Pope John Paul II beatified him in Brussels on June 4, 1995. Pope Benedict XVI canonized him in Rome on October 11, 2009. In each case the Church examined a healing attributed to his intercession and found no medical explanation; those judgments concern specific past cases and are not a promise about any future prayer.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In the United States, one of two statues representing the state of Hawaii in the National Statuary Hall Collection at the US Capitol depicts Damien. The bronze, by the artist Marisol Escobar, was placed in 1969 and shows him in his last years, his face marked by the disease. A copy stands outside the Hawaii State Capitol in Honolulu.
              </LinkedText>

              <QuizCTA
                title="What is God asking of you right now?"
                description="Damien said yes to the hardest assignment in Hawaii. Take our short Catholic life assessment and find your next step in prayer, Mass and Confession."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Feast Day and Patronage</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In the United States his feast is May 10, the anniversary of his arrival at Kalaupapa, kept as an optional memorial. In Belgium and in the Congregation of the Sacred Hearts it is celebrated on April 15, the day of his death. He is not on the general Roman calendar, so other countries may keep either date or neither.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                He is invoked as a patron of people with Hansen's disease and of outcasts. Since the 1980s many Catholics have also turned to him, informally, on behalf of people living with HIV and AIDS, seeing a parallel between the stigma of the two diseases; this is a popular devotion rather than a formal designation.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why He Matters Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Jesus said, "No one has greater love than this, to lay down one's life for one's friends" (John 15:13). Damien did not die in a single dramatic moment. He gave his life by inches, over sixteen years, in a place no one wanted to go, among people the rest of society had decided to forget. He was not a polished man, and he had real flaws. That is part of why he is a saint people trust.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                His life raises practical questions for us. Who is isolated in our parish or town because of illness, addiction, disability, incarceration or shame? Who is visiting them? His example is not mainly about grand gestures; it is about showing up, staying, and doing the ordinary work of building, cleaning, burying and praying with people until they know they are not alone.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Damien's work is a summary of the{" "}
                <Link to="/blog/corporal-works-of-mercy-catholic/" className={linkClass}>corporal works of mercy</Link>
                {". Read about the Franciscan who carried his work forward in our profile of "}
                <Link to="/blog/saint-marianne-cope/" className={linkClass}>St. Marianne Cope</Link>
                {", see him alongside other missionary saints in our guide to the "}
                <Link to="/blog/patron-saint-of-missionaries/" className={linkClass}>patron saints of missionaries</Link>
                {", and meet every American saint and blessed in our "}
                <Link to="/blog/us-saints-and-blesseds/" className={linkClass}>US saints and blesseds</Link>
                {" guide. A short daily profile is on the "}
                <Link to="/blog/saint-of-the-day/may-10/" className={linkClass}>May 10 saint of the day</Link>
                {" page."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Prayer to St. Damien</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer for the Sick and the Forgotten</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  St. Damien, you crossed the world for people you had never met and made their home your own. Pray for all who are sick, and especially for those who are pushed aside because of their illness. Pray for caregivers who are worn out and for priests who serve in hard places. Give me the courage to go where I am needed instead of where I am comfortable, and to stay when it would be easier to leave. Ask the Lord, if it is his will, to help me with [mention your intention]. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">This prayer was written for this guide. It is not a liturgical text.</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                For more prayers for someone who is ill, see our{" "}
                <Link to="/blog/catholic-prayer-for-the-sick/" className={linkClass}>Catholic prayer for the sick</Link>.
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To keep praying for someone who is seriously ill, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/sick/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for the Sick</a> and the{" "}
              <a href="https://catholicbibleonline.com/novenas/physical-healing/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Physical Healing</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "When is the feast day of St. Damien of Molokai?",
                  answer: "May 10 in the United States, the anniversary of his arrival at Kalaupapa in 1873. In Belgium and in his religious congregation it is April 15, the day he died in 1889.",
                },
                {
                  question: "How did Father Damien die?",
                  answer: "He died of Hansen's disease (leprosy), which he contracted after more than a decade of living among patients at Kalaupapa. He was diagnosed around 1884–85 and died on April 15, 1889, at age 49.",
                },
                {
                  question: "Where is St. Damien buried?",
                  answer: "His body was moved from Kalawao on Molokai to Leuven, Belgium, in 1936. A relic of his right hand was returned in 1995 and reburied in his original grave beside St. Philomena Church at Kalawao.",
                },
                {
                  question: "What is St. Damien the patron saint of?",
                  answer: "People with Hansen's disease and outcasts. Many Catholics also pray to him informally for people living with HIV and AIDS, though that is a popular devotion rather than an official designation.",
                },
                {
                  question: "Why is there a statue of Father Damien in the US Capitol?",
                  answer: "Hawaii chose him as one of its two figures in the National Statuary Hall Collection. The bronze by Marisol Escobar was placed in 1969.",
                },
                {
                  question: "When was Father Damien canonized?",
                  answer: "Pope Benedict XVI canonized him on October 11, 2009. Pope John Paul II had beatified him in Brussels on June 4, 1995.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Go where love is needed"
              description="Build a steady rhythm of prayer, Mass and Confession that gives you strength to serve."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
