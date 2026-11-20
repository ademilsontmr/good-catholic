import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { TreePine, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "jesse-tree-catholic-advent-guide";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Jesse Tree 2026: Catholic Daily Readings & Ornaments";
const DESCRIPTION =
  "The Catholic Jesse Tree for Advent 2026: a day-by-day reading plan from Nov 29 to Dec 24, the symbol for every ornament, and how to pray it as a family.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

/** Advent 2026 runs from Sunday, November 29 to Thursday, December 24: 26 days, one figure each. */
const CALENDAR: { date: string; figure: string; reading: string; ornament: string; note?: string }[] = [
  { date: "Sun, Nov 29", figure: "The shoot from Jesse", reading: "Isaiah 11:1–5", ornament: "A stump with a green shoot", note: "First Sunday of Advent" },
  { date: "Mon, Nov 30", figure: "Creation", reading: "Genesis 1:1–2:3", ornament: "Sun and earth" },
  { date: "Tue, Dec 1", figure: "Adam and Eve", reading: "Genesis 3:1–15", ornament: "A piece of fruit" },
  { date: "Wed, Dec 2", figure: "Noah", reading: "Genesis 6:11–22; 9:8–17", ornament: "Ark and rainbow" },
  { date: "Thu, Dec 3", figure: "Abraham", reading: "Genesis 12:1–7; 15:1–6", ornament: "A sky full of stars" },
  { date: "Fri, Dec 4", figure: "Isaac", reading: "Genesis 22:1–14", ornament: "A ram, or a bundle of wood" },
  { date: "Sat, Dec 5", figure: "Jacob", reading: "Genesis 28:10–17", ornament: "A ladder" },
  { date: "Sun, Dec 6", figure: "Joseph, son of Jacob", reading: "Genesis 37:3–11; 45:4–8", ornament: "A coat of many colors", note: "Second Sunday of Advent; St. Nicholas" },
  { date: "Mon, Dec 7", figure: "Moses", reading: "Exodus 3:1–12", ornament: "A burning bush" },
  { date: "Tue, Dec 8", figure: "The Passover", reading: "Exodus 12:1–14", ornament: "A lamb", note: "Immaculate Conception, holy day of obligation" },
  { date: "Wed, Dec 9", figure: "The Law", reading: "Exodus 20:1–17", ornament: "Two stone tablets" },
  { date: "Thu, Dec 10", figure: "Joshua", reading: "Joshua 6:1–20", ornament: "A trumpet" },
  { date: "Fri, Dec 11", figure: "Ruth", reading: "Ruth 1:16–17; 4:13–17", ornament: "A sheaf of wheat" },
  { date: "Sat, Dec 12", figure: "Samuel", reading: "1 Samuel 3:1–10", ornament: "An oil lamp", note: "Our Lady of Guadalupe" },
  { date: "Sun, Dec 13", figure: "David", reading: "1 Samuel 16:1–13", ornament: "A harp, or a shepherd’s staff", note: "Third Sunday of Advent (Gaudete)" },
  { date: "Mon, Dec 14", figure: "Solomon", reading: "1 Kings 3:5–14", ornament: "The Temple" },
  { date: "Tue, Dec 15", figure: "Elijah", reading: "1 Kings 18:20–39", ornament: "Fire on an altar" },
  { date: "Wed, Dec 16", figure: "Isaiah", reading: "Isaiah 6:1–8", ornament: "A burning coal" },
  { date: "Thu, Dec 17", figure: "Jeremiah", reading: "Jeremiah 31:31–34", ornament: "A heart", note: "O Antiphons begin" },
  { date: "Fri, Dec 18", figure: "Daniel", reading: "Daniel 6", ornament: "A lion" },
  { date: "Sat, Dec 19", figure: "Jonah", reading: "Jonah 1–2", ornament: "A great fish", note: "O Radix Jesse — “O Root of Jesse”" },
  { date: "Sun, Dec 20", figure: "Bethlehem foretold", reading: "Micah 5:1–4 (5:2–5 in some Bibles)", ornament: "A small town under a star", note: "Fourth Sunday of Advent" },
  { date: "Mon, Dec 21", figure: "John the Baptist", reading: "Luke 1:5–25, 57–66", ornament: "A scallop shell" },
  { date: "Tue, Dec 22", figure: "Mary", reading: "Luke 1:26–38", ornament: "A white lily" },
  { date: "Wed, Dec 23", figure: "Joseph, husband of Mary", reading: "Matthew 1:18–25", ornament: "A carpenter’s square" },
  { date: "Thu, Dec 24", figure: "Jesus, the promised Son of David", reading: "Matthew 1:1–17 and Luke 2:1–14", ornament: "A manger, or the Chi-Rho", note: "Christmas Eve" },
];

export default function JesseTreeCatholicGuide() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="jesse tree, jesse tree 2026, jesse tree readings, jesse tree ornaments, jesse tree catholic, jesse tree advent, jesse tree symbols, jesse tree for kids, advent family devotion"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-19" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Jesse Tree", url: PAGE_URL },
        ]}
      />
      <HowToSchema
        name="How to Keep a Jesse Tree at Home in Advent"
        description="A simple daily Jesse Tree routine for Catholic families from the First Sunday of Advent to Christmas Eve."
        url={PAGE_URL}
        totalTime="PT10M"
        steps={[
          { name: "Gather at the same time each day", text: "Choose a time you can keep, such as after dinner, and light the Advent wreath if you have one." },
          { name: "Read the day’s passage", text: "Read the Scripture for that day from a Catholic Bible, shortened for young children if needed." },
          { name: "Hang the ornament", text: "Let a child place the ornament for that figure on the tree or branch." },
          { name: "Ask one question", text: "Ask how this person prepared the way for Jesus, or how God kept his promise to them." },
          { name: "Pray", text: "Say the Jesse Tree prayer or the O Antiphon of the day from December 17 onward, and end with the Our Father." },
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
              <span className="text-text">Jesse Tree</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers &amp; Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />November 19, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Jesse Tree: A Catholic Family Guide to Advent 2026, Day by Day
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                A Jesse Tree walks your family through the story of salvation, one person and one ornament a day, from the First Sunday of Advent to Christmas Eve. Here is the full 2026 calendar, what each symbol means, and how to keep it without turning December into a chore.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <TreePine className="w-24 h-24 text-emerald-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  A Jesse Tree is an Advent family devotion based on Isaiah 11:1, the prophecy that a shoot would sprout from the stump of Jesse, King David’s father. Each day you read a passage about one person or event in God’s plan, from Creation to the birth of Jesus, and hang a matching ornament. In 2026 Advent begins on Sunday, November 29, so the calendar below runs 26 days, ending on Christmas Eve.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Jesse Tree?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                The name comes from Isaiah, who wrote to a people who had watched their kingdom cut down: “But a shoot shall sprout from the stump of Jesse, and from his roots a bud shall blossom” (Isaiah 11:1). Jesse was the father of David, the shepherd boy anointed king in 1 Samuel 16. The image is of a tree that looks dead and then puts out new growth. Christians have always read it as a promise of the Messiah, the Son of David.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Matthew’s Gospel opens with the same idea in the form of a family tree, “the genealogy of Jesus Christ, the son of David, the son of Abraham” (Matthew 1:1). The Jesse Tree turns that genealogy into a month of stories. Instead of a list of names, children meet the people behind them: Noah building in the rain, Abraham counting stars, Ruth choosing to stay, David with his sling. By Christmas Eve they understand why the angels’ news was good news for a whole people, not only for one young couple in Bethlehem.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where the Jesse Tree Comes From</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                The Tree of Jesse was a favorite subject of medieval Christian art long before it was a household custom. Twelfth-century stained glass shows Jesse asleep at the base of a vine that rises through the kings of Israel to Mary and finally to Christ, with prophets standing on either side. Famous examples survive at the Basilica of Saint-Denis near Paris and at Chartres Cathedral, and the theme appears in many illuminated manuscripts of the same era.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                The family version, with a small tree or branch and a new ornament each day of Advent, is a modern adaptation of that old image. It spread widely in the twentieth century through Catholic and other Christian homes, schools and religious education programs, especially in English-speaking countries. It is a domestic devotion, not part of the liturgy, which is why reading lists and ornament designs vary from one family to the next. There is no single official sequence.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                The Church’s own Advent prayer points the same way. On December 19 the Gospel acclamation and the Magnificat antiphon at Evening Prayer cry out “O Root of Jesse,” one of the seven O Antiphons sung in the last days before Christmas. A family that has spent three weeks with Jesse’s descendants will hear that line very differently.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For the full set of those prayers, see our guide to the{" "}
                <Link to="/blog/o-antiphons-advent-prayer-guide/" className={linkClass}>O Antiphons of Advent</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Jesse Tree Calendar for Advent 2026</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Many printed Jesse Tree plans have 24 ornaments starting on December 1. Advent 2026 is longer: it begins on Sunday, November 29 and lasts 26 days, so this plan adds two days at the start, Isaiah’s prophecy itself and the story of Creation. The order follows salvation history. Days that fall on a Sunday or a major feast are marked, so you can pair the ornament with Mass.
              </LinkedText>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Date</th>
                      <th className="p-3 font-semibold">Figure</th>
                      <th className="p-3 font-semibold">Reading</th>
                      <th className="p-3 font-semibold">Ornament</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CALENDAR.map((day) => (
                      <tr key={day.date} className="border-t border-border align-top">
                        <td className="p-3 whitespace-nowrap font-medium text-text">{day.date}</td>
                        <td className="p-3 text-text">
                          {day.figure}
                          {day.note && <span className="block text-xs text-accent mt-1">{day.note}</span>}
                        </td>
                        <td className="p-3 text-text-muted">{day.reading}</td>
                        <td className="p-3 text-text-muted">{day.ornament}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Two dates deserve a word. Tuesday, December 8 is the Solemnity of the Immaculate Conception, a holy day of obligation in the United States in 2026; the Passover lamb that night is a natural bridge to Mary, who would bear the Lamb of God. Sunday, December 13 is Gaudete Sunday, when the rose candle is lit on the Advent wreath, and the ornament that day is David, the shepherd king.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                See the{" "}
                <Link to="/blog/immaculate-conception-december-8-2026-holy-day-usa/" className={linkClass}>Immaculate Conception 2026 guide</Link>
                {", "}
                <Link to="/blog/our-lady-of-guadalupe-december-12-2026-feast-day-usa/" className={linkClass}>Our Lady of Guadalupe on December 12</Link>
                {" and "}
                <Link to="/blog/catholic-feast-days/gaudete-sunday/" className={linkClass}>Gaudete Sunday</Link>
                {" for those days."}
              </p>

              <QuizCTA
                title="How is your Advent going so far?"
                description="Take our Catholic life assessment and get a simple plan for prayer, Confession, and Mass this season."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Ornaments Teach</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Each symbol is a handle for a child’s memory, but the best ones also point forward to Christ. The fruit for Adam and Eve recalls the first promise of a Redeemer in Genesis 3:15, which the Church has long called the “first gospel.” The wood Isaac carried up Mount Moriah foreshadows the Cross. The Passover lamb, whose blood marked the doors of Israel, prepares for John the Baptist’s words about the Lamb of God. Jonah’s three days in the fish are the sign Jesus himself pointed to in Matthew 12:40.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Some figures teach a quieter lesson. Ruth, a foreigner from Moab, becomes the great-grandmother of David, a reminder that God’s family was never meant to be closed. Samuel hears his name in the night and answers, “Speak, for your servant is listening” (1 Samuel 3:10), an easy line for children to memorize and pray. Jeremiah’s promise of a new covenant written on the heart is the prophecy Jesus fulfills at the Last Supper.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Set Up Your Jesse Tree</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>The tree.</strong> A bare branch in a vase or a jar of stones works well and fits the image of a stump coming back to life. Some families use a small tabletop tree, a felt banner on the wall, or a tree drawn on poster board.
                </li>
                <li>
                  <strong>The ornaments.</strong> Paper circles colored by the children are enough. Families who keep the custom for years often make or buy wooden or felt ornaments and store them with the Advent wreath.
                </li>
                <li>
                  <strong>The place.</strong> Put it where you already gather, such as the dinner table or the prayer corner, so the daily reading does not depend on remembering to walk to another room.
                </li>
                <li>
                  <strong>The Bible.</strong> Read from a Catholic Bible. For small children, a good children’s Bible or a two-sentence summary in your own words is better than skipping the day.
                </li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Simple Daily Routine</h2>
              <ol className="list-decimal pl-6 text-text space-y-3 mb-6">
                <li>Light the Advent wreath, if you have one, and make the Sign of the Cross.</li>
                <li>Read the day’s passage. For long readings, choose the key verses.</li>
                <li>Let one child hang the ornament.</li>
                <li>Ask a single question: How did this person trust God? What did God promise here?</li>
                <li>Pray the Jesse Tree prayer below. From December 17 to 23, add that day’s O Antiphon.</li>
                <li>End with the Our Father, and blow out the candle.</li>
              </ol>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Ten minutes is plenty. If you miss a day, do two the next evening; the point is to arrive at Christmas having heard the whole story, not to keep a perfect record. Older children can take turns reading aloud or looking up how each figure appears in the New Testament.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Jesse Tree Prayer</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Lord God, faithful in every generation, you kept your promise from the garden to the manger. As we remember the people who waited for your Son, teach us to wait for him with the same hope. Make our hearts like the stump of Jesse, ready to bloom when Christ comes. Come, Lord Jesus. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">This prayer was written for this guide. It is not a liturgical text.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Adapting It by Age</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Toddlers and preschoolers need one picture and one sentence: “God told Noah to build a big boat, and God kept him safe.” School-age children can listen to the full story and help retell it. Teenagers often enjoy the harder questions the readings raise, such as why God tested Abraham, or why Jonah ran away, and can lead the prayer on alternate nights.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Adults living alone or as a couple can keep a Jesse Tree too. Read the full chapter rather than the short passage, keep a notebook of one line from each day, and let the figures accompany your preparation for Confession before Christmas.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Jesse Tree, Advent Wreath and Advent Calendar</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                These customs work well together because they do different jobs. The Advent wreath marks the four Sundays with light growing week by week. An Advent calendar counts the days. The Jesse Tree tells the story, so that the waiting has content. Many families keep all three on the same table: wreath first, then the reading and the ornament, then the calendar door for the youngest child.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For the wreath itself, including the blessing and weekly prayers, see{" "}
                <Link to="/blog/advent-wreath-prayers-blessing-catholic-guide/" className={linkClass}>Advent wreath prayers and blessing</Link>
                {", and for the whole season, our "}
                <Link to="/blog/advent/" className={linkClass}>Advent 2026 guide</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">After Christmas</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Some families move the Jesse Tree ornaments onto the Christmas tree on December 24, so the story of salvation literally hangs around the newborn Christ. Others keep the Jesse Tree up through the Christmas season, which lasts until the Baptism of the Lord, on Sunday, January 10, 2027. Either way, store the ornaments carefully. A set made by your children becomes part of the family story itself.
              </LinkedText>
            </div>

            <BlogFAQ
              faqs={[
                {
                  question: "When do you start a Jesse Tree in 2026?",
                  answer: "Start on the First Sunday of Advent, Sunday, November 29, 2026. Advent this year lasts 26 days, so a 26-ornament plan ends on Christmas Eve. If you have a 24-ornament set, begin on December 1.",
                },
                {
                  question: "How many ornaments does a Jesse Tree have?",
                  answer: "There is no fixed number. Most printed sets have 24 or 25, one for each day of December up to Christmas. The calendar on this page has 26 because Advent 2026 begins on November 29.",
                },
                {
                  question: "Is the Jesse Tree a Catholic tradition?",
                  answer: "The Tree of Jesse is an old theme of Catholic art and prayer, rooted in Isaiah 11 and the genealogy of Jesus in Matthew 1. The daily family custom is a modern devotion kept by Catholics and other Christians. It is a domestic practice, not part of the liturgy.",
                },
                {
                  question: "Can I hang Jesse Tree ornaments on our Christmas tree?",
                  answer: "Yes. Some families use a small separate branch during Advent and move the ornaments onto the Christmas tree on Christmas Eve, so the whole story of salvation surrounds the Nativity.",
                },
                {
                  question: "What if we fall behind on the readings?",
                  answer: "Catch up by doing two figures in one evening, or read a short summary instead of the full passage. It is better to finish the story by Christmas than to keep a perfect daily record.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Make this Advent count"
              description="Pair the Jesse Tree with Sunday Mass and a good Confession before Christmas."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
