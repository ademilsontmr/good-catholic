import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Smile, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-teeth";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Teeth: St. Apollonia";
const DESCRIPTION =
  "St. Apollonia is the patron saint of teeth, toothache and dentists. Her story, feast day, and prayers for toothache, dental surgery and dental work.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const SITUATIONS: { situation: string; patron: string; focus: string }[] = [
  {
    situation: "Toothache or jaw pain",
    patron: "St. Apollonia",
    focus: "Relief from pain, patience until the appointment, wisdom for the dentist",
  },
  {
    situation: "Dental anxiety",
    patron: "St. Apollonia; the Jesus Prayer",
    focus: "Calm breathing and a short, repeatable prayer in the chair",
  },
  {
    situation: "Wisdom teeth, implants, root canal or oral surgery",
    patron: "St. Apollonia; Christ the Healer",
    focus: "Skill for the surgeon, a safe anesthesia, a clean recovery",
  },
  {
    situation: "Dentists, hygienists and assistants at work",
    patron: "St. Apollonia",
    focus: "Steady hands, gentleness with fearful patients, honest care",
  },
  {
    situation: "Children losing teeth or facing the dentist",
    patron: "St. Apollonia; their guardian angel",
    focus: "Courage, a little fun, and gratitude for growing up",
  },
];

export default function PatronSaintOfTeeth() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of teeth, patron saint of toothache, patron saint of dentists, st apollonia, st apollonia prayer, prayer before dental surgery, prayer for wisdom teeth removal, prayer before root canal, catholic prayer for toothache"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Teeth", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of Teeth</span>
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
                Patron Saint of Teeth: St. Apollonia, and Prayers for Toothache and the Dentist’s Chair
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A throbbing molar at two in the morning has a way of making anyone pray. The Church has a saint for exactly that moment, an elderly woman from third-century Egypt whose story is grim but whose patronage is wonderfully practical. Here is who she was, how to ask her help, and three prayers for toothache, dental surgery and the people who work on our teeth.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Smile className="w-24 h-24 text-sky-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The patron saint of teeth, toothache and dentists is St. Apollonia, a virgin martyr of Alexandria who died in 249. During a mob attack on Christians her teeth were violently knocked out, and she is shown in art holding a pair of pincers gripping a tooth. Her feast day is February 9.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Was St. Apollonia?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Unlike many early martyrs known only through later legends, St. Apollonia appears in a nearly contemporary source. Dionysius, bishop of Alexandria at the time, described the violence of 249 in a letter to Fabius, bishop of Antioch. The historian Eusebius preserved that letter in his Church History (Book 6, chapter 41), so we have an account written by someone who knew the city and its Christians firsthand.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Dionysius calls her a “marvelous aged virgin.” Later tradition describes her as a deaconess, and she was clearly a respected older woman in the Christian community. The trouble began in the last year of Emperor Philip, before Decius issued his empire-wide edict against Christians. A local agitator stirred up a crowd in Alexandria, and for weeks mobs broke into Christian homes, looted them, and dragged out anyone who refused to worship the gods of the city.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                They seized Apollonia and beat her in the face until her teeth were broken and knocked out. Then they built a fire outside the city and threatened to throw her in alive unless she repeated their blasphemies. According to Dionysius, she asked for a brief moment, as if to think it over, and when they loosened their grip she leapt into the flames herself and died there.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Didn’t She Take Her Own Life?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                It is a fair question, and Christians have asked it for a long time. The Church has never taught that a person may choose death on their own initiative, and taking one’s own life is gravely contrary to the love of self and of God. Yet the Church has always honored Apollonia as a true martyr, and her case was understood differently.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                She did not seek death out of despair. She was already condemned, surrounded by people who intended to burn her, and was being pressured to deny Christ. St. Augustine, discussing holy women in similar situations in The City of God (Book 1), argued that where the Church honors such deaths as martyrdom, we should believe the person acted by a special prompting of God rather than by their own choice, and that this cannot be taken as a pattern for anyone else. Apollonia’s leap was read as an act of complete self-offering, freely made at the moment her persecutors meant to force her hand.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why She Became the Patron of Teeth</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Patronages often grow from the details of a saint’s suffering, and Apollonia’s broken teeth made her the obvious person to call on for toothache. By the Middle Ages her cult had spread across Europe. Painters showed her holding pincers or forceps with a tooth clamped in them, sometimes with a tooth hanging from a necklace, and churches claimed relics said to be her teeth, so many that the claims cannot all be true.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Before modern dentistry, a bad tooth could mean months of pain, infection and a crude extraction, so a saint for toothache was no small comfort. When dentistry became a profession, many dental schools and dental guilds in Europe historically honored her as their patron, and dentists, hygienists and dental assistants still invoke her today. Her feast is February 9, which makes it a nice day for a dental office to pray together or for a parish to bless the people who keep our teeth in working order.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                She is not quite alone. In French popular devotion, St. Medard, a sixth-century bishop of Noyon whose feast is June 8, has long been invoked against toothache as well. But throughout the Western Church, the saint people mean when they ask about teeth is Apollonia.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Patron and a Prayer for Every Dental Situation</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Situation</th>
                      <th className="p-3 font-semibold">Who to ask</th>
                      <th className="p-3 font-semibold">What to pray for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SITUATIONS.map((s) => (
                      <tr key={s.situation} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{s.situation}</td>
                        <td className="p-3 text-text-muted">{s.patron}</td>
                        <td className="p-3 text-text">{s.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text leading-relaxed mb-6">
                For patrons of other causes and professions, browse our{" "}
                <Link to="/blog/list-of-saints-and-what-they-protect/" className={linkClass}>list of saints and what they protect</Link>
                {" or the "}
                <Link to="/blog/patron-saints-guide/" className={linkClass}>guide to patron saints</Link>
                {". Healthcare workers may also like our page on the "}
                <Link to="/blog/patron-saint-of-nurses/" className={linkClass}>patron saint of nurses</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Prayers to St. Apollonia</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                These prayers are short enough to say with an ice pack on your cheek or in the waiting room. Asking a saint to pray for you does not replace calling the dentist. It is a way of bringing the whole situation, pain and appointment included, to God.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer to St. Apollonia for Toothache</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  St. Apollonia, you knew the pain of a broken mouth and you did not let it shake your faith. Look kindly on me in this ache that will not let me rest. Ask the Lord to ease my pain, to calm any infection, and to bring me quickly to someone who can help. Give me patience until then, and keep me from taking my discomfort out on the people around me. I offer this small suffering with yours, for those who hurt far more than I do. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer Before Dental Surgery or a Procedure</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord Jesus, you healed the sick with a word and a touch. I place this procedure in your hands, whether it is a wisdom tooth, a root canal or an implant. Guide the dentist and the surgeon, steady their hands, and make the anesthesia safe and my recovery clean and quick. Quiet my nerves while I sit in the chair. St. Apollonia, stay beside me and pray for me, and for everyone who will be working on me today. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Dentist’s or Hygienist’s Prayer at Work</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Father, every mouth I look into belongs to someone you love. Give me careful hands, clear eyes and an honest tongue today. Help me be gentle with the patient who is frightened, patient with the one who is late, and fair with the one who cannot pay much. Let my work relieve pain and not cause more than it must. St. Apollonia, patron of my profession, pray for me and for the people I will treat today. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">All three prayers were written for this guide. They are not liturgical texts.</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                For a bigger operation, see our{" "}
                <Link to="/blog/catholic-prayer-before-surgery/" className={linkClass}>Catholic prayer before surgery</Link>
                {", along with "}
                <Link to="/blog/prayers-for-healing-catholic/" className={linkClass}>prayers for healing</Link>
                {" and a "}
                <Link to="/blog/catholic-prayer-for-the-sick/" className={linkClass}>prayer for the sick</Link>
                {" for a loved one in recovery."}
              </p>

              <QuizCTA
                title="Is your prayer life ready for the hard days?"
                description="Take our short Catholic life assessment and get a realistic plan for prayer, Mass and Confession that fits your week."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Christ, Healing and Offering It Up</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Gospels are full of Jesus touching mouths, ears and eyes and making them whole. He cares about bodies, including the unglamorous parts, and it is not too small a thing to ask him to stop a toothache. Medicine and dentistry are among the ways he answers, which is why praying and booking the appointment go together.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                When pain lingers anyway, the Church offers something more than endurance. St. Paul wrote, “I rejoice in my sufferings for your sake, and in my flesh I am filling up what is lacking in the afflictions of Christ” (Colossians 1:24). The Catechism teaches that suffering united to the Passion of Christ acquires a new meaning and becomes a participation in his saving work (CCC 1521). Old-fashioned Catholics called this offering it up. A sore jaw offered for a friend in chemotherapy or a soul in purgatory is not wasted pain.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Help: Anxiety, Kids and the Eucharistic Fast</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Dental Anxiety</h3>
              <p className="text-text leading-relaxed mb-6">
                Plenty of adults would rather face a tax audit than a drill. Tell your dentist you are anxious, agree on a hand signal for a pause, and breathe slowly through your nose, making each exhale a little longer than the inhale. Pair the breathing with a short prayer you can repeat silently. The{" "}
                <Link to="/blog/jesus-prayer-catholic/" className={linkClass}>Jesus Prayer</Link>
                {" works well: “Lord Jesus Christ, Son of God,” on the in-breath, “have mercy on me,” on the out-breath. Its rhythm gives a racing mind something to hold onto."}
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Children and Wiggly Teeth</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Losing a first tooth is a big event for a child. Some families make it a small moment of faith as well: a quick thank-you to God for growing up, a word about St. Apollonia, who was brave with her teeth, and a prayer before the first dentist visit. Whether the tooth fairy still shows up afterward is a matter for each household. A saint card of Apollonia with her pincers tends to fascinate kids more than it scares them.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Brushing Before Communion</h3>
              <p className="text-text leading-relaxed mb-6">
                Brushing your teeth before Mass does not break the one-hour fast before Communion. Canon 919 says that water and medicine do not break it, and accidentally swallowing a bit of toothpaste foam is not eating. Painkillers taken for a toothache are medicine too. See our full guide to the{" "}
                <Link to="/blog/catholic-eucharistic-fast/" className={linkClass}>Eucharistic fast</Link>
                {" for details."}
              </p>

              <div className="mb-8 p-4 bg-background-muted rounded-xl">
                <p className="text-text-muted text-sm leading-relaxed mb-0">
                  <strong>Medical note:</strong> This page offers spiritual support, not dental or medical advice. Prayer does not replace professional care. Severe tooth pain, facial swelling, fever or trouble swallowing can signal a serious infection, so contact a dentist promptly or seek urgent care.
                </p>
              </div>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              For a longer recovery, pray the{" "}
              <a href="https://catholicbibleonline.com/novenas/physical-healing/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for Physical Healing</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of teeth?",
                  answer: "St. Apollonia, a virgin martyr of Alexandria who died in 249. A mob broke and knocked out her teeth before she died in a fire, so she is invoked for toothache and all dental troubles.",
                },
                {
                  question: "Who is the patron saint of dentists?",
                  answer: "St. Apollonia is also the patron of dentists, hygienists and dental assistants. Many dental schools and dental guilds in Europe historically honored her as their patron.",
                },
                {
                  question: "When is the feast of St. Apollonia?",
                  answer: "Her feast day is February 9.",
                },
                {
                  question: "Why is St. Apollonia shown holding pincers?",
                  answer: "The pincers, often gripping a tooth, recall that her teeth were violently broken and knocked out before her martyrdom. They became her symbol in medieval art.",
                },
                {
                  question: "Is there a prayer before wisdom teeth removal?",
                  answer: "Yes. You can ask St. Apollonia to pray for you and ask Christ to guide the surgeon, keep the anesthesia safe and give you a clean recovery. A short prayer for this is included on this page.",
                },
                {
                  question: "Does brushing my teeth break the Communion fast?",
                  answer: "No. Canon 919 states that water and medicine do not break the one-hour Eucharistic fast, and brushing your teeth is not eating.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Bring every ache to God"
              description="Build a steady rhythm of prayer, Mass and Confession that carries you through the small trials and the big ones."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
