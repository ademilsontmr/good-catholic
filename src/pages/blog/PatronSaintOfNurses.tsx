import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Stethoscope, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-nurses";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Nurses: Saints & Prayers";
const DESCRIPTION =
  "Who is the patron saint of nurses? St. Camillus de Lellis and St. John of God, plus four more nurse saints, feast days, and two prayers for nurses.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const SAINTS: { name: string; dates: string; why: string; feast: string }[] = [
  {
    name: "St. Camillus de Lellis",
    dates: "1550–1614",
    why: "Founded the Ministers of the Infirm; named patron of nurses by Pius XI in 1930",
    feast: "July 14 (July 18 in the US)",
  },
  {
    name: "St. John of God",
    dates: "1495–1550",
    why: "Founded the Brothers Hospitallers in Granada; named patron of nurses with St. Camillus",
    feast: "March 8",
  },
  {
    name: "St. Marianne Cope",
    dates: "1838–1918",
    why: "Franciscan who nursed leprosy patients on Molokai; a model for American nurses",
    feast: "January 23 (US)",
  },
  {
    name: "St. Catherine of Siena",
    dates: "1347–1380",
    why: "Cared for the sick and for plague victims in her city",
    feast: "April 29",
  },
  {
    name: "St. Elizabeth of Hungary",
    dates: "1207–1231",
    why: "Built a hospital at Marburg and served its patients herself",
    feast: "November 17",
  },
  {
    name: "St. Agatha",
    dates: "d. c. 251",
    why: "Invoked in popular devotion by nurses and breast-cancer patients",
    feast: "February 5",
  },
];

export default function PatronSaintOfNurses() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of nurses, nurse saint, prayer for nurses catholic, patron saint of healthcare workers, patron saint of hospitals, st camillus de lellis, st john of god, nursing graduation medal, nurses week prayer"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Nurses", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of Nurses</span>
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
                Patron Saint of Nurses: The Saints Who Cared for the Sick, and Prayers for Your Shift
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Church gives nurses two official patrons and a crowd of other saints who did the same work long before it had a license attached. Here is who they are, why nurses turn to them, two prayers for the hardest parts of the job, and ideas for honoring a nurse in your life.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Stethoscope className="w-24 h-24 text-rose-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The patron saints of nurses are St. Camillus de Lellis and St. John of God. Pope Leo XIII named both of them patrons of the sick and of hospitals in 1886, and Pope Pius XI added nurses to their patronage in 1930. Both men founded religious communities devoted entirely to caring for the sick, and both had rough, unpromising pasts before they did.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Nurses Have Patron Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Nursing is one of the oldest ways Christians have lived out the Gospel. Jesus described the Good Samaritan as the man who bandaged a stranger’s wounds, poured on oil and wine, brought him to an inn and paid for his care (Luke 10:33–35). In his parable of the Last Judgment he said, “I was ill and you cared for me” (Matthew 25:36). Visiting and caring for the sick became one of the corporal works of mercy, and for centuries the people who did it full time were monks, nuns, brothers and lay members of confraternities.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                A patron saint is not a lucky charm. It is a friend in heaven who once stood where you stand now: at a bedside at three in the morning, with too many patients and not enough hands. Asking for their prayers is a way of remembering that your work is seen, and that it is part of something larger than the shift.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Two Official Patrons</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Camillus de Lellis (1550–1614)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Camillus de Lellis was a soldier of fortune with a gambling habit that left him, at one point, with nothing. A wound in his leg that never fully healed sent him to the hospital of San Giacomo in Rome, first as a patient and then as a worker, and he was dismissed at least once for quarreling and gambling. After a conversion in his mid-twenties he came back and stayed, and what he saw there shaped the rest of his life: patients left unwashed and unfed by hired attendants who did not care.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                He gathered a group of men who would treat each patient, in his words, as a mother treats her only sick child. They became the Order of Clerks Regular, Ministers of the Infirm, known today as the Camillians. Members took a fourth vow to serve the sick even at the risk of their own lives, and they wore a large red cross on their black habit, which made them recognizable on battlefields and in plague wards. Camillus became a priest, insisted on cleanliness, fresh air and proper diet for patients, and kept nursing even as his own leg wound and other ailments worsened. He died in Rome in 1614.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                His feast is July 14 in the universal calendar. In the United States it is kept on July 18, because July 14 is the memorial of St. Kateri Tekakwitha.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. John of God (1495–1550)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. John of God was born in Portugal and spent his early adult life as a shepherd, a soldier and a wandering seller of books. In Granada, Spain, a sermon by St. John of Avila moved him so violently that he gave away his goods and behaved in ways that got him locked in the city’s hospital as insane. The harsh treatment he saw there, beatings and chains for the mentally ill, became his vocation.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Once released, he rented a house in Granada and filled it with the sick and poor, begging in the streets at night to feed them. Tradition holds that he carried patients to the hospital on his own back. The men who joined him became the Brothers Hospitallers of St. John of God, who still run hospitals and care centers around the world. He died in 1550, and his feast day is March 8.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read their daily profiles on the{" "}
                <Link to="/blog/saint-of-the-day/july-14/" className={linkClass}>St. Camillus de Lellis</Link>
                {" and "}
                <Link to="/blog/saint-of-the-day/march-8/" className={linkClass}>St. John of God</Link>
                {" saint-of-the-day pages."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Other Saints Nurses Turn To</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Patronage is not limited to formal declarations. Over the centuries, nurses have adopted saints whose lives looked like their own, and several have a strong following in hospitals and nursing schools.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Marianne Cope (1838–1918)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For American nurses, St. Marianne Cope is close to home. A Franciscan sister from Syracuse, New York, she helped run some of the first general hospitals in central New York before answering a request in 1883 for sisters to care for leprosy patients in Hawaii. She later went to the settlement on Molokai, where she cared for St. Damien of Molokai in his final illness and carried on his work for decades. She insisted on clean wards, hand washing and dignity for patients the world had abandoned. She was canonized in 2012, and her feast in the United States is January 23.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Catherine of Siena (1347–1380)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Catherine of Siena is remembered as a Doctor of the Church who wrote to popes, but she also spent long hours caring for the sick in her city, including patients others refused to touch, and nursed victims of plague when it struck Siena. Her feast is April 29.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Elizabeth of Hungary (1207–1231)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Elizabeth of Hungary was a princess who, after her husband’s death, used her dowry to build a hospital at Marburg in Germany and worked in it herself, washing and feeding patients. She died at twenty-four. Her feast is November 17, and many Catholic hospitals bear her name.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Agatha (died c. 251)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Agatha was a virgin martyr of Sicily whose torture, according to her early accounts, included the cutting of her breasts. Because of this she is invoked in popular devotion for breast-cancer patients, and many nurses, especially in oncology, count her among their patrons. Her feast is February 5.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Nurse Saints at a Glance</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Saint</th>
                      <th className="p-3 font-semibold">Dates</th>
                      <th className="p-3 font-semibold">Why nurses invoke them</th>
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
                For patrons of other professions and causes, see our{" "}
                <Link to="/blog/list-of-saints-and-what-they-protect/" className={linkClass}>list of saints and what they protect</Link>
                {" and the "}
                <Link to="/blog/patron-saints-guide/" className={linkClass}>guide to patron saints</Link>
                {". There is also a full profile of "}
                <Link to="/blog/saint-catherine-of-siena/" className={linkClass}>St. Catherine of Siena</Link>.
              </p>

              <QuizCTA
                title="Is your own spiritual life running on empty?"
                description="Caregivers often give everything away. Take our short Catholic life assessment and get a realistic plan for prayer, Mass and Confession."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Two Prayers for Nurses</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                These short prayers can be said in the parking lot, at the locker, or in the half minute before you badge in. Neither needs to be said perfectly.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Nurse’s Prayer Before a Shift</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord Jesus, you touched the sick and they were not afraid of you. Go ahead of me into this shift. Steady my hands and clear my mind for every medication, every chart, every call light. Let me see you in the patient who is frightened, the one who is angry, and the one no one visits. Give me patience with my coworkers and honesty when I am unsure. St. Camillus and St. John of God, stay near me and pray for me until I walk out these doors again. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer for a Nurse Who Is Exhausted</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Father, I have nothing left tonight. You know the patients I could not save and the moments I wish I had handled differently. I place them in your hands, where they were all along. Carry what I cannot carry, and do not let tiredness harden my heart. Give me real rest, the kind that heals, and people who will care for me as I try to care for others. St. Marianne Cope, who served for years in a hard place, ask the Lord to renew my strength. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">Both prayers were written for this guide. They are not liturgical texts.</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                To pray for the patients themselves, see our{" "}
                <Link to="/blog/catholic-prayer-for-the-sick/" className={linkClass}>Catholic prayer for the sick</Link>
                {", "}
                <Link to="/blog/prayers-for-healing-catholic/" className={linkClass}>prayers for healing</Link>
                {", and a "}
                <Link to="/blog/catholic-prayer-before-surgery/" className={linkClass}>prayer before surgery</Link>
                {" to share with patients who ask."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Burnout, Moral Distress and Conscience</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Many nurses know two kinds of weariness. One is plain exhaustion from long shifts and short staffing. The other is moral distress: knowing what a patient needs and being unable to give it, or being asked to take part in something that troubles your conscience. The saints on this page knew both. St. Camillus de Lellis fought hospital administrators for years over how patients were treated, and St. John of God was himself chained as a patient before he ever cared for one.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Church teaches that caring for your own health is a real duty, not a luxury (Catechism 2288). Sleep, meals, days off and honest conversations with a counselor or spiritual director are part of a sustainable vocation. Confession is a place to set down the guilt that is yours and to hear that much of what you carry is not. If you are struggling with thoughts of harming yourself, call or text 988 in the United States.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                On conscience, the Catechism is plain: a person “has the right to act in conscience and in freedom so as personally to make moral decisions” and must not be forced to act against it (Catechism 1782). If you face a situation at work that conflicts with your faith, talk early with a trusted priest, a Catholic ethicist or a colleague who shares your convictions, and learn what protections your employer and state provide before a crisis arrives.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Medals, Gifts and Ways to Honor Nurses</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>A patron saint medal for nursing graduates.</strong> A small St. Camillus or St. John of God medal fits on a badge reel or a chain under scrubs. A St. Agatha medal suits an oncology nurse, and a St. Marianne Cope medal is a good fit for an American nurse heading into public health or hospice. Have it blessed by a priest before you give it.
                </li>
                <li>
                  <strong>A pocket prayer card.</strong> Print one of the prayers above on a card that slips behind an ID badge. It is inexpensive, personal and gets read.
                </li>
                <li>
                  <strong>Nurses Week.</strong> In the United States, National Nurses Week runs May 6 to 12, ending on the birthday of Florence Nightingale. Parishes can add a petition for nurses at Sunday Mass that week or offer a blessing of hands after Mass.
                </li>
                <li>
                  <strong>Feast days.</strong> Mark March 8 and July 18 on the unit calendar. Bring in food, say a short prayer at huddle, or have a Mass offered for the nurses on your floor.
                </li>
                <li>
                  <strong>Professional community.</strong> The National Association of Catholic Nurses, USA, and Catholic medical guilds in many dioceses offer retreats, formation and fellowship for nurses who want to connect their faith and their work. Ask your diocese or Catholic hospital chaplain what exists locally.
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Caring for the sick is one of the{" "}
                <Link to="/blog/corporal-works-of-mercy-catholic/" className={linkClass}>corporal works of mercy</Link>
                {". Nurses practice it as a profession, and every Catholic is called to practice it in some form."}
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To pray for your patients on a long stretch of shifts, use the{" "}
              <a href="https://catholicbibleonline.com/novenas/sick/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for the Sick</a> and{" "}
              <a href="https://catholicbibleonline.com/novenas/doctors/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Doctors and Healthcare Workers</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of nurses?",
                  answer: "St. Camillus de Lellis and St. John of God. Pope Leo XIII named them patrons of the sick and hospitals in 1886, and Pope Pius XI declared them patrons of nurses in 1930.",
                },
                {
                  question: "Who is the patron saint of hospitals and healthcare workers?",
                  answer: "The same two saints, St. Camillus de Lellis and St. John of God, are patrons of hospitals and the sick. Healthcare workers also often turn to St. Luke, traditionally a physician, and to Sts. Cosmas and Damian.",
                },
                {
                  question: "When is the feast of St. Camillus de Lellis?",
                  answer: "July 14 in the universal Roman calendar. In the United States it is celebrated on July 18, because July 14 is the memorial of St. Kateri Tekakwitha.",
                },
                {
                  question: "Is there an American nurse saint?",
                  answer: "Yes. St. Marianne Cope, a Franciscan sister from Syracuse, New York, ran hospitals and later nursed leprosy patients on Molokai, Hawaii. She was canonized in 2012, and her US feast is January 23.",
                },
                {
                  question: "What is a good Catholic gift for a nursing graduate?",
                  answer: "A blessed St. Camillus or St. John of God medal, a prayer card that fits behind a badge, or a book about a nurse saint. Add a handwritten note promising your prayers.",
                },
                {
                  question: "When is Nurses Week?",
                  answer: "In the United States, National Nurses Week is May 6 to 12 each year, ending on May 12, the birthday of Florence Nightingale.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Care for the caregiver"
              description="Find a rhythm of prayer, Mass and Confession that fits around your shifts."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
