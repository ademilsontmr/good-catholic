import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mountain, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { cboLinkClass } from "@/lib/catholicBibleOnlineLinks";

const PAGE = "https://guidecatholic.com/blog/saint-junipero-serra/";

export default function SaintJuniperoSerra() {
  return (
    <>
      <Helmet>
        <title>Saint Junípero Serra: California Missions and Canonization | Guide Catholic</title>
        <meta name="description" content="Who Saint Junípero Serra was: Mallorca, the nine California missions he founded, his 1773 appeal for native people, the 2015 canonization, and the July 1 feast." />
        <link rel="canonical" href={PAGE} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Junípero Serra: The Franciscan of the California Missions"
        description="Who Saint Junípero Serra was: Mallorca, the nine California missions he founded, his 1773 appeal for native people, the 2015 canonization, and the July 1 feast."
        url={PAGE}
        datePublished="2026-10-07"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Saint Junípero Serra", url: PAGE },
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
              <span className="text-text">Saint Junípero Serra</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Intercession</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />October 7, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Junípero Serra: The Franciscan of the California Missions
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A limping professor from Mallorca walked the coast of Alta California and founded nine missions. The Church canonized him. The argument about those missions has not ended.
              </p>
            </header>
            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Mountain className="w-24 h-24 text-amber-700" strokeWidth={1.5} />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">
                Junípero Serra (1713–1784) was a Spanish Franciscan who founded nine of the twenty-one California missions, beginning at San Diego in 1769. He died at Carmel on August 28, 1784. Pope Francis canonized him in Washington, D.C., on September 23, 2015. The United States keeps his optional memorial on July 1.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">From Petra to the edge of New Spain</h2>
            <p className="text-text leading-relaxed mb-6">
              He was born Miguel José Serra on November 24, 1713, in Petra, on the island of Mallorca. He entered the Franciscans, took the name Junípero after a companion of{" "}
              <Link to="/blog/saint-francis-of-assisi/" className={cboLinkClass}>Saint Francis of Assisi</Link>,
              and became a well-known preacher and philosophy teacher. In 1749 he gave up the lecture hall and sailed for New Spain. He spent years in the Sierra Gorda missions of Mexico and then at the College of San Fernando in Mexico City, training friars. A leg injury on the road north never fully healed. He walked anyway.
            </p>
            <p className="text-text leading-relaxed mb-6">
              In 1769 he joined the Spanish expedition into Alta California. The point, for the crown, was a chain of settlements that would hold the coast. The point, for Serra, was baptism and a Christian town at each stop. Those two aims traveled together. They are why he is honored and why he is contested.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The nine missions he founded</h2>
            <p className="text-text leading-relaxed mb-6">
              Serra founded Mission San Diego de Alcalá in 1769, then San Carlos Borromeo at Carmel, San Antonio de Padua, San Gabriel Arcángel, San Luis Obispo de Tolosa, San Francisco de Asís, San Juan Capistrano, Santa Clara de Asís, and San Buenaventura. He made Carmel his headquarters and died there. Later Franciscans founded the rest of the twenty-one missions after his death. The Camino Real that tourists drive is the line of those houses. It was also a system that gathered native peoples into regulated settlements, taught European farming and crafts, and required Catholic practice.
            </p>
            <p className="text-text leading-relaxed mb-6">
              He was not a visitor who preached and left. He confirmed, baptized, buried, and walked back down the same road when a mission was in trouble. San Diego was attacked in 1775 and a friar was killed. Serra asked that the attackers be spared execution, arguing that their deaths would not open the way to baptism. That request is in the record. It does not erase the rest of the record.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What he asked of the soldiers</h2>
            <p className="text-text leading-relaxed mb-6">
              In 1773 Serra traveled to Mexico City and handed the viceroy a long memorial, the Representación. He asked for more friars, for supplies, and for limits on the soldiers who lived beside the missions. He described abuse of native women and men and wanted the military kept from treating the baptized as a workforce the army could take at will. Some of what he asked was granted. The mission system still stood inside an empire. A friar who argues with a soldier is not the same thing as a free people choosing their own law.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Disease did what armies also did. Native communities near the missions suffered repeated epidemics. Families were separated from older seasonal lands. Punishments used in the missions included whipping, which Serra did not invent and did not abolish. Catholics who love his zeal still have to say those sentences out loud. Hagiography that skips them is not history, and history that reduces him to a villain is not the whole of the man the Church canonized.
            </p>

            <QuizCTA
              title="How do you tell the truth about the Church’s past?"
              description="A short assessment of prayer, formation, and witness — useful when a saint’s story is also a wound."
            />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Canonized in Washington, still argued in California</h2>
            <p className="text-text leading-relaxed mb-6">
              Pope Francis canonized Serra on September 23, 2015, during his visit to the United States, at the Basilica of the National Shrine of the Immaculate Conception in Washington, D.C. Francis presented him as a founder who defended the dignity of the native community even inside the limits of his time. Statues of Serra have been protested and pulled down, especially in 2020. The protest is about the mission system and about whose story a public statue tells. The canonization is a judgment that he died in the faith and that his charity was heroic. Those two facts can sit in the same paragraph. They do not cancel each other.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The United States keeps his optional memorial on July 1, not on August 28, because that day already belongs to Saint Augustine. A California parish can honor him with Mass, with the truth about the missions, and without pretending the argument is over.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Gospel, held up to this history</h2>
            <p className="text-text leading-relaxed mb-6">
              The risen Jesus sends the disciples to make disciples of all nations. The commission is in{" "}
              <a href="https://catholicbibleonline.com/bible/matthew/28" target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Matthew 28 on Catholic Bible Online</a>.
              Serra read that command as a reason to leave Mallorca. The same Gospel judges every method. Baptism is not a license to seize a people’s land or to punish them into prayer. When you read the commission, read also the works of mercy in{" "}
              <a href="https://catholicbibleonline.com/bible/matthew/25" target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Matthew 25</a>.
              A mission that feeds people and a mission that breaks a people are not the same act, even when one friar did pieces of both.
            </p>
            <p className="text-text leading-relaxed mb-6">
              If you keep his feast, pray for the peoples of the California coast by name where you can, and for missionaries who will tell the truth. Ask Serra’s intercession for patience in a hard assignment. Do not ask him to bless a silence about what the missions cost.
            </p>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
              <h3 className="font-display text-lg font-bold text-text mb-3">Key facts</h3>
              <ul className="text-text space-y-2 text-sm">
                <li>• <strong>Born:</strong> November 24, 1713, Petra, Mallorca</li>
                <li>• <strong>Died:</strong> August 28, 1784, Mission San Carlos Borromeo, Carmel</li>
                <li>• <strong>Order:</strong> Order of Friars Minor</li>
                <li>• <strong>Founded:</strong> nine California missions, from San Diego (1769) to San Buenaventura</li>
                <li>• <strong>Canonized:</strong> September 23, 2015, by Pope Francis in Washington, D.C.</li>
                <li>• <strong>U.S. memorial:</strong> July 1</li>
              </ul>
            </div>

            <BlogFAQ
              htmlAnswers
              title="Questions about Saint Junípero Serra"
              faqs={[
                {
                  question: "Who was Saint Junípero Serra?",
                  answer: "He was a Spanish Franciscan priest who left a teaching post in Mallorca, worked in Mexico, and from 1769 founded nine missions along the coast of Alta California. He died at Carmel in 1784 and was canonized in 2015."
                },
                {
                  question: "How many California missions did Serra found?",
                  answer: "Nine: San Diego, San Carlos Borromeo at Carmel, San Antonio, San Gabriel, San Luis Obispo, San Francisco, San Juan Capistrano, Santa Clara, and San Buenaventura. Other Franciscans founded the rest of the twenty-one after his death."
                },
                {
                  question: "Why is his canonization controversial?",
                  answer: "The missions gathered native peoples into Spanish Catholic settlements. Those places included epidemic disease, separation from older lands, and physical punishment. Serra also protested soldier abuse and opposed executing the men who attacked San Diego. Honoring him and telling that history are both part of an honest Catholic account."
                },
                {
                  question: "When is Saint Junípero Serra’s feast in the United States?",
                  answer: "July 1, as an optional memorial. He died on August 28, which is the feast of Saint Augustine, so the United States does not keep his day on the date of his death."
                },
                {
                  question: "Where is the Gospel he was answering?",
                  answer: "Matthew 28 is the commission to make disciples of all nations. Matthew 25 is the judgment scene of the works of mercy. Both are on Catholic Bible Online. Read them together."
                }
              ]}
            />
            <RelatedArticles currentSlug="saint-junipero-serra" />
            <ArticleBottomCTA
              title="The past of the Church is part of the faith"
              description="See where formation and honesty already shape the way you pray."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
