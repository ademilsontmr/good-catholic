import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Baby, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "patron-saint-of-pregnancy";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Patron Saint of Pregnancy: 7 Catholic Patrons";
const DESCRIPTION =
  "St. Gerard Majella, St. Gianna, St. Raymond Nonnatus and other Catholic patrons of pregnancy and safe delivery, with three prayers for expectant mothers.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

const PATRONS: { patron: string; bestFor: string; feast: string; note: string }[] = [
  { patron: "St. Gerard Majella", bestFor: "Expectant mothers, safe delivery", feast: "October 16", note: "The best-known patron of pregnancy in the U.S.; medals widely available" },
  { patron: "St. Gianna Beretta Molla", bestFor: "Difficult or high-risk pregnancy, mothers, physicians", feast: "April 28", note: "A 20th-century wife, mother and doctor; canonized in 2004" },
  { patron: "St. Raymond Nonnatus", bestFor: "Childbirth, midwives, cesarean births", feast: "August 31", note: "His name means “not born”: he was delivered after his mother died" },
  { patron: "St. Anne", bestFor: "Mothers, grandmothers, women hoping to conceive", feast: "July 26", note: "Mother of the Virgin Mary, with St. Joachim" },
  { patron: "St. Elizabeth", bestFor: "Pregnancy later in life, joy in the child", feast: "Visitation, May 31", note: "Her son leapt in her womb at Mary’s greeting (Luke 1:41–44)" },
  { patron: "St. Margaret of Antioch", bestFor: "Childbirth (medieval devotion)", feast: "July 20", note: "Her story is legendary; removed from the General Calendar in 1969" },
  { patron: "Our Lady of La Leche; Our Lady of Guadalupe", bestFor: "Safe delivery, nursing mothers; the unborn", feast: "Guadalupe: December 12", note: "La Leche’s shrine is in St. Augustine, Florida" },
];

export default function PatronSaintOfPregnancy() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="patron saint of pregnancy, patron saint of expectant mothers, patron saint of safe delivery, patron saint of childbirth, prayer for a safe pregnancy catholic, patron saint of difficult pregnancy, st gianna prayer, st gerard majella, st raymond nonnatus"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Patron Saint of Pregnancy", url: PAGE_URL },
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
              <span className="text-text">Patron Saint of Pregnancy</span>
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
                Patron Saints of Pregnancy and Safe Delivery: Who to Pray To, and How
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                From the first positive test to the last contraction, Catholic mothers have never prayed alone. Here are the saints the Church’s people have turned to for a healthy pregnancy, a hard pregnancy and a safe birth, with three prayers you can say tonight.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Baby className="w-24 h-24 text-rose-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  The patron saint of pregnancy most American Catholics know is St. Gerard Majella, an 18th-century Redemptorist brother invoked for expectant mothers and safe delivery. For a difficult or high-risk pregnancy, many turn to St. Gianna Beretta Molla, a physician and mother who risked her life for her unborn daughter and was canonized in 2004. St. Raymond Nonnatus is the traditional patron of childbirth and midwives, and St. Anne, the mother of Mary, watches over mothers of every age.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Ask Saints to Pray for a Pregnancy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Asking a saint for help is not going around God. It is asking a friend of God to pray with you, the same way you might text your mother or your best friend the moment you see two pink lines. The saints are alive in Christ, and the Church has always trusted that their prayer is strong. When a woman is carrying a child, she is already praying with her whole body; a patron simply gives that prayer a face and a name, and often a story that sounds a lot like her own.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                No one saint has an exclusive claim on pregnancy. Different patrons grew up around different needs: one for the fear of labor, one for a frightening diagnosis, one for the grandmother waiting by the phone. You can pick one, or ask several, and you can change as the months go on.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Patron Saints of Pregnancy at a Glance</h2>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Patron</th>
                      <th className="p-3 font-semibold">Best for</th>
                      <th className="p-3 font-semibold">Feast day</th>
                      <th className="p-3 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PATRONS.map((row) => (
                      <tr key={row.patron} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{row.patron}</td>
                        <td className="p-3 text-text">{row.bestFor}</td>
                        <td className="p-3 whitespace-nowrap text-text-muted">{row.feast}</td>
                        <td className="p-3 text-text-muted">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Saints, One by One</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Gerard Majella (1726–1755): the mothers’ saint</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Gerard Majella was a tailor’s son from southern Italy who became a lay brother with the Redemptorists and died of tuberculosis at 29. He never married and never had children, which makes his place in the hearts of mothers all the more touching. Tradition holds that shortly before his death he left his handkerchief with a family he had visited, and that years later a woman of that household, in danger during labor, asked for it to be brought to her and delivered safely. Mothers have asked for his help ever since. In Italy and in Italian-American parishes he is still called simply the mothers’ saint, and his feast on October 16 is a natural day to have a pregnant woman blessed.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                If you want to pray to him over nine days, our{" "}
                <Link to="/blog/st-gerard-novena-pregnancy/" className={linkClass}>St. Gerard novena for pregnancy</Link>{" "}
                has the full daily prayer and intentions, so we won’t repeat it here.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Gianna Beretta Molla (1922–1962): for a hard pregnancy</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Gianna Beretta Molla was a pediatrician near Milan, a skier and a lover of mountains, the wife of an engineer named Pietro and the mother of three small children when she became pregnant a fourth time. Early in that pregnancy doctors found a uterine fibroma. Of the options open to her, she chose a surgery that removed the growth and preserved the pregnancy, knowing it carried risk for her. Her daughter Gianna Emanuela was born in April 1962, and St. Gianna Beretta Molla died a week later from complications. Pope John Paul II canonized her on May 16, 2004, with her husband and that daughter present. Her feast is April 28.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                She is the saint for the pregnancy that comes with a frightening ultrasound, a specialist referral or a long list of risks. She was a doctor, so she understood the charts; she was a mother, so she understood the fear. She is also a patron of physicians, which makes her a good saint to ask for your OB, your midwife and the nurse who will be on shift that night.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Raymond Nonnatus: for labor and the people who help</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Raymond Nonnatus was a 13th-century Spanish priest of the Mercedarian order, which ransomed Christians held captive in North Africa. His surname is Latin for “not born”: tradition holds that his mother died in labor and he was delivered from her body afterward. Because of that beginning, he became the patron of childbirth, of midwives and obstetricians, and of babies born by cesarean. His feast is August 31. If you are facing a planned C-section, or you are a labor and delivery nurse, he is very much your saint.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Anne and St. Elizabeth: the mothers of the Gospel</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Anne, honored with St. Joachim on July 26, is the mother of the Virgin Mary. Ancient Christian tradition remembers the couple as waiting a long time for a child, so St. Anne is invoked by women hoping to conceive, by mothers and by grandmothers. Many grandmothers-to-be quietly take her on as their own patron for the whole nine months.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Elizabeth, the cousin of Mary, conceived John the Baptist in her old age. Her pregnancy gives Scripture its most vivid scene of an unborn child: when Mary arrived, “the infant leaped in her womb,” and Elizabeth cried out, “Most blessed are you among women, and blessed is the fruit of your womb” (Luke 1:41–42). The Church celebrates that meeting on the Feast of the Visitation, May 31. Women expecting later in life, or after years of waiting, often feel very close to her.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read more about{" "}
                <Link to="/blog/saint-anne/" className={linkClass}>St. Anne</Link>
                {" and her husband in our guide to "}
                <Link to="/blog/saints-anne-and-joachim/" className={linkClass}>Saints Anne and Joachim</Link>
                {". If you are still hoping for a baby, our "}
                <Link to="/blog/novena-for-fertility-catholic/" className={linkClass}>Catholic novena for fertility</Link>
                {" was written for you."}
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">St. Margaret of Antioch: a medieval favorite</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                For centuries St. Margaret of Antioch was the patron of childbirth in Europe. Her story, which tells of a young martyr swallowed by a dragon and bursting out unharmed, is legendary, and in 1969 her July 20 memorial was removed from the General Roman Calendar because so little can be known about her life. Medieval women nonetheless asked for her help in labor, and you will still find her in old prayer books and stained glass. Praying to her is not forbidden; it simply belongs to the Church’s long memory more than its history books.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Our Lady: La Leche and Guadalupe</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Every patron on this list points finally to Mary, who carried Christ for nine months and gave birth far from home. Two of her titles have special meaning for American mothers. Our Lady of La Leche, “Our Lady of the Milk and Happy Delivery,” is honored at the Mission Nombre de Dios in St. Augustine, Florida, whose shrine is considered the oldest Marian shrine in the United States. Couples still travel there to pray for conception, a safe birth and an easy time nursing.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Our Lady of Guadalupe appeared in 1531 wearing a dark sash at her waist, which many have read as the sign of a woman <em>with child</em>. That is why she is widely honored as patroness of the unborn and why her image is carried at pro-life gatherings across the Americas. See our page on{" "}
                <Link to="/blog/our-lady-of-guadalupe/" className={linkClass}>Our Lady of Guadalupe</Link>
                {" and the "}
                <Link to="/blog/catholic-pro-life-guide/" className={linkClass}>Catholic pro-life guide</Link>.
              </p>

              <QuizCTA
                title="Expecting? Take a moment for your own soul"
                description="Our short Catholic life assessment suggests simple ways to pray, receive the sacraments and rest in God during a busy season."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Three Prayers for Pregnancy and Delivery</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                These prayers were written for this page. Say them as they are, or let them be a starting place for your own words. A spouse, a grandparent or a whole parish prayer group can pray them on a mother’s behalf.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">For a Healthy Pregnancy</h3>
                <p className="text-text italic leading-relaxed mb-0">
                  Loving Father, you knew this child before you formed them in my womb. Thank you for this small life, already yours. Keep every cell and heartbeat in your care, and give me patience with my tired body and peace in my anxious mind. St. Gerard, friend of mothers, pray for us. Holy Mary, Mother of God, walk with me these months as you walked with Elizabeth. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-text mb-3">Before Labor and Delivery</h3>
                <p className="text-text italic leading-relaxed mb-0">
                  Lord Jesus, born of a woman in a borrowed stable, be near me in this hour. Steady the hands of those who will help me, and give my body strength to finish its work. When the pain comes, let me offer it with your Cross; when it passes, let me hold my child and praise you. St. Raymond Nonnatus, St. Anne, and all holy mothers, stand beside me. Amen.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">For a High-Risk Pregnancy</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  God of life, you see what the scans cannot and you hold what I cannot. I place this child, my body and our future in your hands. Give wisdom to our doctors, courage to our family, and to me a trust stronger than my fear. St. Gianna, you knew this road as a mother and a physician: pray for us, and ask for the grace we need for whatever comes. Your will be done, and let it be gentle. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">These prayers are original devotional texts, not liturgical prayers of the Church.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Ways to Bring Faith Into These Nine Months</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>Ask for the Blessing of a Child in the Womb.</strong> The U.S. bishops approved this rite in 2008. A priest or deacon can give it after Mass or at any convenient time. Just ask your parish; many priests are delighted to be asked.
                </li>
                <li>
                  <strong>Wear or carry a St. Gerard medal.</strong> Most Catholic gift shops sell them. Have it blessed by a priest; it is a reminder to pray, not a charm.
                </li>
                <li>
                  <strong>Offer up the hard parts.</strong> Nausea, sleepless nights and swollen ankles can be joined to Christ’s suffering for your child, for another mother or for a family member who needs grace. A one-line offering in the morning is enough.
                </li>
                <li>
                  <strong>Keep going to Mass and Confession.</strong> If you are too sick to attend on a Sunday, serious illness excuses you; don’t add guilt to nausea.
                </li>
                <li>
                  <strong>Start preparing for Baptism.</strong> Talk with your parish about classes and choose godparents before the baby arrives.
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Our{" "}
                <Link to="/blog/catholic-baptism-preparation-guide/" className={linkClass}>Catholic Baptism preparation guide</Link>{" "}
                walks through godparent requirements, timing and what to expect at the ceremony.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">If You Have Lost a Pregnancy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Some readers arrive here after a miscarriage or a stillbirth, still holding a medal they bought for a baby they did not get to bring home. If that is you, your child was real and your grief is right. Nothing you prayed or failed to pray caused this loss. The Church entrusts children who die before Baptism to the mercy of God, who loves them more than we can, and the Catechism invites us to hope for their salvation (CCC 1261). You can name your baby, ask a priest to pray with you, and in many dioceses have a funeral or a burial in a Catholic cemetery.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                St. Gianna Beretta Molla had miscarriages of her own before her final pregnancy, and St. Gerard Majella is invoked for grieving mothers too. Mary, who stood beneath the Cross, knows what it is to lose a son. Let them keep you company.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Our{" "}
                <Link to="/blog/list-of-saints-and-what-they-protect/" className={linkClass}>list of saints and what they protect</Link>{" "}
                includes a section of saints for pregnancy loss.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Word About Medical Care</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Prayer to the saints works alongside good prenatal care, never instead of it. St. Gianna Beretta Molla was a doctor who trusted medicine and God at the same time. Keep your appointments, take the vitamins, and call your doctor or midwife right away about bleeding, severe pain, reduced movement or any symptom that worries you. This page offers spiritual guidance, not medical advice.
              </LinkedText>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              For daily prayer through the months ahead, pray the{" "}
              <a href="https://catholicbibleonline.com/novenas/st-gerard/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">St. Gerard Novena</a> and{" "}
              <a href="https://catholicbibleonline.com/novenas/difficult-pregnancy/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Novena for a Difficult Pregnancy</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "Who is the patron saint of pregnancy?",
                  answer: "St. Gerard Majella is the best-known patron of pregnancy and expectant mothers, especially in the United States. St. Gianna Beretta Molla, St. Raymond Nonnatus and St. Anne are also widely invoked for pregnancy and childbirth.",
                },
                {
                  question: "Who is the patron saint of safe delivery and childbirth?",
                  answer: "St. Raymond Nonnatus is the traditional patron of childbirth and midwives, and St. Gerard Majella is invoked for a safe delivery. In medieval Europe, St. Margaret of Antioch filled this role, and many Catholics also pray to Our Lady of La Leche for a happy delivery.",
                },
                {
                  question: "Which saint should I pray to for a difficult or high-risk pregnancy?",
                  answer: "Many mothers pray to St. Gianna Beretta Molla, an Italian pediatrician who faced a serious complication in her fourth pregnancy and chose a surgery that protected her unborn daughter. She is a patron of mothers, physicians and unborn children.",
                },
                {
                  question: "Can a priest bless my unborn baby?",
                  answer: "Yes. The Church has a Blessing of a Child in the Womb, approved by the U.S. bishops in 2008. Ask any priest or deacon at your parish; it takes only a few minutes and can be given to one or both parents.",
                },
                {
                  question: "When is St. Gianna’s feast day?",
                  answer: "St. Gianna Beretta Molla’s feast day is April 28, the day she died in 1962. Pope John Paul II canonized her on May 16, 2004.",
                },
                {
                  question: "Is it okay to wear a St. Gerard medal during pregnancy?",
                  answer: "Yes. A blessed medal is a sacramental, a reminder to pray and to trust God. It is not a good-luck charm and does not replace prenatal care, but many mothers find great comfort in wearing one through pregnancy and labor.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Carry your pregnancy in prayer"
              description="Find a novena, a patron and a simple daily rhythm of prayer for you and your baby."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
