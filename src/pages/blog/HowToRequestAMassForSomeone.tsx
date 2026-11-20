import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema, HowToSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

const SLUG = "how-to-request-a-mass-for-someone";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "How to Request a Mass for Someone (Catholic)";
const DESCRIPTION =
  "How to request a Mass for someone living or deceased: what to tell the parish, the usual offering, Mass card wording, and how Gregorian Masses work.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const OPTIONS: { type: string; what: string; arrange: string; notes: string }[] = [
  {
    type: "Single Mass intention",
    what: "One Mass offered by a priest for one person or intention, on a set date",
    arrange: "Parish office, by phone, in person or through an online form",
    notes: "Offering set by diocesan or provincial norm; you can usually choose the date and ask that the name be read",
  },
  {
    type: "Mass card",
    what: "A card telling the recipient that a Mass has been arranged for them or their loved one",
    arrange: "Issued by the parish or religious community when you request the Mass",
    notes: "The card is a notice, not the Mass itself; a legitimate card is signed by a priest or parish and names the Mass",
  },
  {
    type: "Gregorian Masses",
    what: "Thirty Masses on thirty consecutive days for one deceased person",
    arrange: "Religious communities, monasteries and some mission societies",
    notes: "For the dead only, one soul per series; few parish priests can commit to 30 days in a row",
  },
  {
    type: "Perpetual enrollment",
    what: "Enrollment in a community’s ongoing Masses and prayers for all its enrolled members, living or deceased",
    arrange: "Religious orders and mission societies, usually by mail or online",
    notes: "A share in many Masses for a group, not a Mass offered for your person alone",
  },
];

export default function HowToRequestAMassForSomeone() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="how to request a mass for someone, mass intention, mass card, mass stipend, mass offering amount, mass for the deceased, gregorian masses, what to write on a mass card, mass for a non-catholic, mass for the living"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "How to Request a Mass", url: PAGE_URL },
        ]}
      />
      <HowToSchema
        name="How to Request a Mass Intention"
        description="The practical steps for having a Catholic Mass offered for a living or deceased person at a parish."
        url={PAGE_URL}
        totalTime="PT15M"
        steps={[
          { name: "Contact the parish office", text: "Call, visit or use the parish website to ask for a Mass intention. Any Catholic parish can take the request." },
          { name: "Give the name and the intention", text: "Spell the person’s full name and say whether they are living or deceased, and for what you are asking, such as the repose of their soul, healing or thanksgiving." },
          { name: "Choose a date", text: "Ask for a specific date, such as an anniversary, or accept the next open date. Popular dates fill weeks or months ahead." },
          { name: "Make the offering", text: "Give the offering set by your diocese. If you cannot afford it, say so; priests are urged to offer Mass for those in need without an offering." },
          { name: "Send the Mass card", text: "Ask for a Mass card, sign it with a short message, and send it to the person or the family." },
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
              <span className="text-text">How to Request a Mass</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Mass &amp; Sacraments</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />November 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How to Request a Mass for Someone: Mass Intentions, Mass Cards and Offerings
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Having a Mass offered for someone is one of the oldest and most generous things a Catholic can do, for the dead or the living. Here is exactly what to say to the parish office, what the offering is and is not, what to write on the card, and how Gregorian Masses and perpetual enrollments differ from a single intention.
              </p>
            </header>

            <div className="aspect-video bg-violet-50 rounded-2xl flex items-center justify-center mb-10">
              <Mail className="w-24 h-24 text-violet-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  To request a Mass for someone, contact any Catholic parish office, give the person’s name, say whether they are living or deceased, and choose a date. You make an offering, often around $10 to $20 in the United States but set by each diocese, and the parish can give you a Mass card to send to the person or their family. Masses may be offered for anyone, living or dead, Catholic or not.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What a Mass Intention Actually Is</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Every Mass is offered for the whole Church and the whole world. Within that, the priest may also apply the Mass for a particular person or purpose, and that particular purpose is called the intention. When you request a Mass, you are asking a priest to apply one specific celebration of the Eucharist for the person you name. The Code of Canon Law states the principle plainly: a priest is free to apply Mass for anyone, living or dead (canon 901).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                This is different from simply praying for someone at Mass. Anyone in the pews can hold a loved one in their heart during the Eucharistic Prayer, and that prayer is real and good. A requested intention means the priest himself offers that Mass for your person, and he is bound to do so. The Church treats the arrangement seriously enough to regulate it in canons 945 to 958.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Have Masses Said for the Dead</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The custom rests on the Church’s belief that those who die in God’s friendship but are not yet fully purified can be helped by the prayers of the living. The Catechism traces this to Judas Maccabeus, who “made atonement for the dead that they might be absolved from their sin” (2 Maccabees 12:46), and says that from the beginning the Church has offered prayers for the dead, “above all the Eucharistic sacrifice” (CCC 1032).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Mass is the highest of those prayers because it is not our offering but Christ’s. The Catechism teaches that the Eucharistic sacrifice is offered for the faithful departed who have died in Christ but are not yet wholly purified, so they may enter the light and peace of Christ (CCC 1371), and that it is offered in reparation for the sins of the living and the dead and to obtain spiritual or temporal benefits from God (CCC 1414). That last line is why Masses for the living are just as traditional as Masses for the dead.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For the doctrine behind this, see{" "}
                <Link to="/blog/what-is-purgatory/" className={linkClass}>what purgatory is</Link>
                {" and "}
                <Link to="/blog/praying-for-souls-in-purgatory/" className={linkClass}>praying for the souls in purgatory</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Request a Mass, Step by Step</h2>
              <ol className="list-decimal pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>Pick a parish.</strong> It does not have to be your own. Many people request the Mass at the deceased person’s parish so the family can attend, or at their own parish so they can be there themselves.
                </li>
                <li>
                  <strong>Call or stop by the office.</strong> Say, “I’d like to request a Mass intention.” Many parishes now take requests through an online form, but a phone call lets you ask about dates.
                </li>
                <li>
                  <strong>Give the details.</strong> Spell the full name, say whether the person is living or deceased, and name the intention if you like: the repose of the soul, recovery from surgery, a 50th birthday, thanksgiving for a safe delivery.
                </li>
                <li>
                  <strong>Ask for a date.</strong> Anniversaries of death, birthdays and wedding anniversaries are the usual choices. If the date is taken, ask for the closest weekday Mass or a different time that day.
                </li>
                <li>
                  <strong>Make the offering and ask for a card.</strong> Pay by check, cash or card as the parish prefers, and ask for a Mass card if you will be sending one.
                </li>
                <li>
                  <strong>Tell the family and go if you can.</strong> The Mass is valid whether or not anyone attends, but being there, or inviting the family, turns a transaction into an act of shared prayer.
                </li>
              </ol>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Plan ahead for popular dates. November, traditionally the month of prayer for the dead, is busy in most parishes, and Masses around Christmas and New Year’s Day are often booked weeks or months in advance. If you want a Mass on December 25 or January 1 in 2027, call this month. Weekend Masses are usually the hardest to get, since a priest may apply only one intention per Mass and each parish has only a handful of weekend celebrations.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Not sure which parish to call? Our guide on{" "}
                <Link to="/blog/how-to-find-my-catholic-parish/" className={linkClass}>how to find your Catholic parish</Link>{" "}
                walks through it.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Much Do You Give for a Mass Intention?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The money you give is called an offering or stipend, and canon law is careful about what it means. It is not the price of a Mass, which cannot be bought. The faithful who give it contribute to the good of the Church and share in the support of its ministers (canon 946), and any appearance of trafficking or trading is to be entirely excluded (canon 947).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The amount is not left to each priest. The bishops of the ecclesiastical province set it by decree, and where there is no decree, diocesan custom applies (canon 952). A priest may not ask for more than that amount, though he may accept a larger gift freely offered, and he may accept less. In the United States the figure is commonly in the range of $10 to $20 for a single Mass, but it varies, so check with your diocese or parish rather than guessing. Parish offices know the current amount.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                If money is tight, say so. Priests are earnestly recommended to celebrate Mass for the intentions of the faithful, especially the needy, even without receiving an offering (canon 945 §2). No one should be kept from having a Mass said for a dying parent because of a stipend.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Two other rules protect you as the donor. Each offering obliges the priest to apply a separate Mass, so if ten people each give an offering, ten Masses are owed (canon 948), and the obligation stands even if the offering is lost (canon 949). A priest also may not accept more intentions than he can fulfill within a year (canon 953), which is why busy parishes sometimes pass intentions to missionary priests, as canon 955 allows. If the parish offers a collective Mass for many donors at once, the Holy See’s 1991 decree Mos iugiter requires that donors be told and freely agree, and limits such Masses to twice a week.
              </LinkedText>

              <QuizCTA
                title="How close are you to the Mass these days?"
                description="Take our free Catholic life assessment and get a simple plan for Sunday Mass, prayer and the sacraments."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mass Intentions, Mass Cards, Gregorian Masses and Enrollments</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                People often use these terms interchangeably at funeral homes, but they are four different things. Knowing which one you are buying keeps you from being disappointed or misled.
              </LinkedText>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Type</th>
                      <th className="p-3 font-semibold">What it is</th>
                      <th className="p-3 font-semibold">How to arrange</th>
                      <th className="p-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OPTIONS.map((row) => (
                      <tr key={row.type} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{row.type}</td>
                        <td className="p-3 text-text">{row.what}</td>
                        <td className="p-3 text-text-muted">{row.arrange}</td>
                        <td className="p-3 text-text-muted">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Be cautious with Mass cards sold in stores or online that do not name a parish, a priest or a date. A card means something only if a Mass has really been arranged. The safest card is one your own parish fills out and signs.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Gregorian Masses</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Gregorian Masses are thirty Masses offered on thirty consecutive days for a single deceased person. The custom is named for Pope St. Gregory the Great, who in his Dialogues tells of a monk of his monastery for whom Mass was offered thirty days in a row, after which the monk was understood to have been freed from purgatory. The Church has long approved the practice as a devout tradition, though it does not promise a guaranteed result.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Because the Masses should be offered without interruption and each one is for that one soul alone, a parish priest with a full calendar usually cannot take them on. Most families arrange Gregorian Masses through a monastery or religious community whose priests can commit to the full month. The offering is larger, roughly thirty times a single intention, so ask the community for its current figure. They cannot be offered for the living.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Spiritual Bouquets and Perpetual Enrollments</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                A spiritual bouquet is a card listing prayers someone promises to offer: a number of Rosaries, Holy Hours, Communions or Masses attended. It is a lovely gift, but unless it says a Mass has been requested, it is not a Mass intention. A perpetual enrollment, offered by many religious orders and mission societies, places a person’s name among those remembered in the community’s regular Masses and prayers, often for as long as the community exists. It is a real spiritual benefit and supports the order’s work, but it is a share in prayer for many people, not a Mass offered for your person alone. Many families give both: an enrollment for the long term, and a specific Mass on the anniversary.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Can You Have a Mass Said for a Non-Catholic or a Living Person?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Yes to both. Canon 901 places no restriction on who may be prayed for, so a Mass may be offered for a Protestant grandfather, a Jewish coworker, a friend with no faith at all, or someone who left the Church. Whether the name is read aloud at a public Mass may follow local custom; some parishes simply read every name, while others print intentions in the bulletin. If it matters to you, ask.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Masses for the living are common and fitting: for someone facing surgery or chemotherapy, a student taking the bar exam, a couple on their wedding anniversary, a friend’s conversion, a safe pregnancy, or simple thanksgiving. A Mass on someone’s birthday is a gift that costs little and stays with them.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What to Write on a Mass Card</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The parish usually fills in the name of the person and the date; you add a short personal note and sign it. Keep it simple. The card already says the most important thing.
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Sample Messages</h3>
                <ul className="list-disc pl-6 text-text space-y-3 mb-0">
                  <li><strong>For a death:</strong> <em>“A Mass will be offered for the repose of Margaret’s soul on December 3. We are holding all of you in prayer.”</em></li>
                  <li><strong>For a death, shorter:</strong> <em>“With deepest sympathy, and the promise of our prayers for Tom.”</em></li>
                  <li><strong>For someone sick:</strong> <em>“We have asked for a Mass to be offered for your healing and strength. You are not facing this alone.”</em></li>
                  <li><strong>For a birthday:</strong> <em>“Happy 80th birthday, Dad. A Mass is being offered for you in thanksgiving for your life.”</em></li>
                  <li><strong>For an anniversary:</strong> <em>“Congratulations on 25 years. A Mass will be offered for your marriage and your family.”</em></li>
                  <li><strong>For thanksgiving:</strong> <em>“Thanking God with you for Lily’s safe arrival. A Mass will be offered in gratitude.”</em></li>
                </ul>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For a sympathy card, it is fine to send the Mass card alone or tuck it inside a regular condolence card. Mail it to the family’s home or bring it to the wake, where many funeral homes set out a basket for Mass cards. Do not write the offering amount on the card.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying Along With the Mass You Requested</h2>
              <p className="text-text leading-relaxed mb-6">
                If you attend the Mass, offer your own Communion for the same intention and stay a moment afterward to pray the{" "}
                <Link to="/blog/eternal-rest-prayer-catholic/" className={linkClass}>Eternal Rest prayer</Link>
                {" for the person who has died. If you cannot attend, pray at the same hour from home. For more ways to accompany the dead, see "}
                <Link to="/blog/how-to-pray-for-the-dead/" className={linkClass}>how to pray for the dead</Link>
                {" and our collection of "}
                <Link to="/blog/catholic-prayers-for-the-dead/" className={linkClass}>Catholic prayers for the dead</Link>
                {". For the living, "}
                <Link to="/blog/how-to-pray-for-someone-catholic/" className={linkClass}>how to pray for someone</Link>
                {" gives a fuller plan, and if you are preparing for a funeral, read "}
                <Link to="/blog/catholic-funeral-mass-what-to-expect/" className={linkClass}>what to expect at a Catholic funeral Mass</Link>.
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              Along with the Mass, pray the{" "}
              <a href="https://catholicbibleonline.com/novenas/novena-for-the-holy-souls/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for the Holy Souls</a>{" "}
              on Catholic Bible Online for the person you remember.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "How much should I give for a Mass intention?",
                  answer: "Give the amount your diocese sets, which the parish office can tell you. In the United States it is commonly around $10 to $20 for a single Mass. Canon 952 leaves the figure to the bishops of each province, and a priest may accept less, or celebrate without any offering for those in need.",
                },
                {
                  question: "Can I request a Mass for someone who is still alive?",
                  answer: "Yes. Canon 901 allows a priest to apply Mass for anyone, living or dead. Masses for the sick, for a birthday or anniversary, for a conversion, or in thanksgiving are all common.",
                },
                {
                  question: "Can a Mass be offered for a non-Catholic?",
                  answer: "Yes. A Mass may be offered for any person, baptized or not, Catholic or not. Whether the name is announced publicly can depend on local practice, so ask the parish if that matters to you.",
                },
                {
                  question: "What is the difference between a Mass card and a Mass intention?",
                  answer: "The intention is the Mass itself, offered by a priest for your person on a specific date. The Mass card is the notice you send to tell someone that the Mass has been arranged. A card without an actual arranged Mass behind it means nothing.",
                },
                {
                  question: "What are Gregorian Masses?",
                  answer: "Thirty Masses offered on thirty consecutive days for one deceased person, a tradition linked to Pope St. Gregory the Great. They are usually arranged through monasteries or religious communities that can guarantee the uninterrupted series.",
                },
                {
                  question: "Do I have to attend the Mass I requested?",
                  answer: "No. The priest applies the Mass for your intention whether or not you are present. Attending, or inviting the family, is a beautiful way to join your own prayer to it.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Bring your intentions to the altar"
              description="Request a Mass, then join it with your own prayer and Communion."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
