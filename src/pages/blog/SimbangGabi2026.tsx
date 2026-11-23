import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const SLUG = "simbang-gabi-2026";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Simbang Gabi 2026 (Dec 16–24): 9-Day Mass Schedule & Gospels";
const DESCRIPTION =
  "Simbang Gabi 2026 runs Wednesday, December 16 to Thursday, December 24. The Gospel for each of the nine Masses, US evening times, Misa de Gallo and customs.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

/** The nine days of Simbang Gabi in 2026, Wednesday, December 16 to Thursday, December 24. */
const NINE_DAYS: { day: string; date: string; gospel: string; theme: string; note?: string }[] = [
  { day: "1", date: "Wed, Dec 16", gospel: "Luke 7:18–23", theme: "John’s disciples ask, “Are you the one who is to come?”", note: "Weekday of the Third Week of Advent" },
  { day: "2", date: "Thu, Dec 17", gospel: "Matthew 1:1–17", theme: "The genealogy of Jesus, son of David", note: "Late Advent begins; O Wisdom" },
  { day: "3", date: "Fri, Dec 18", gospel: "Matthew 1:18–25", theme: "Joseph’s dream: “God is with us”", note: "O Adonai" },
  { day: "4", date: "Sat, Dec 19", gospel: "Luke 1:5–25", theme: "The angel speaks to Zechariah in the Temple", note: "O Root of Jesse" },
  { day: "5", date: "Sun, Dec 20", gospel: "Luke 1:26–38", theme: "The Annunciation to Mary", note: "Fourth Sunday of Advent (Year B)" },
  { day: "6", date: "Mon, Dec 21", gospel: "Luke 1:39–45", theme: "Mary visits Elizabeth", note: "O Dayspring" },
  { day: "7", date: "Tue, Dec 22", gospel: "Luke 1:46–56", theme: "The Magnificat", note: "O King of the Nations" },
  { day: "8", date: "Wed, Dec 23", gospel: "Luke 1:57–66", theme: "The birth and naming of John", note: "O Emmanuel" },
  { day: "9", date: "Thu, Dec 24", gospel: "Luke 1:67–79", theme: "The Benedictus: “the dawn from on high”", note: "Christmas Eve morning" },
];

export default function SimbangGabi2026() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="simbang gabi, simbang gabi 2026, simbang gabi schedule, simbang gabi meaning, what is simbang gabi, misa de gallo, misa de aguinaldo, filipino christmas mass, nine dawn masses, parol, bibingka"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Simbang Gabi 2026", url: PAGE_URL },
        ]}
      />
      <HowToSchema
        name="How to Keep Simbang Gabi"
        description="A practical way to keep the nine Simbang Gabi Masses from December 16 to 24, at church or at home."
        url={PAGE_URL}
        totalTime="PT1H"
        steps={[
          { name: "Find your schedule", text: "Check your diocese’s Filipino ministry or your parish bulletin in early December, since many US parishes hold evening Simbang Gabi Masses on rotating nights." },
          { name: "Plan the nine days", text: "Write the dates and parishes on the family calendar, including Sunday Mass on December 20 and Christmas Mass." },
          { name: "Attend Mass", text: "Go to the dawn or evening Simbang Gabi Mass, arriving early, since these Masses are often crowded." },
          { name: "Pray with Mary", text: "Read that day’s Gospel, pray the Angelus or a decade of the Rosary, and ask Mary to help you wait for her Son." },
          { name: "Share the table", text: "Stay afterward for bibingka, puto bumbong or salabat with the parish community." },
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
              <span className="text-text">Simbang Gabi 2026</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy &amp; Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />November 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Simbang Gabi 2026: The Nine Dawn Masses Before Christmas, Day by Day
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                For Filipino Catholics, Christmas does not begin on December 25. It begins nine mornings earlier, in a church lit by star lanterns before sunrise. Here are the 2026 dates, what Simbang Gabi means, how US parishes schedule it, and how to keep it well even if you cannot make all nine.
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-amber-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  Simbang Gabi (Tagalog for “night Mass”) is a novena of nine Masses celebrated before Christmas in honor of Mary’s expectation of her Son. In 2026 the traditional dawn Masses run from Wednesday, December 16 to Thursday, December 24. Many US parishes instead hold “anticipated” evening Masses, usually from the evening of Tuesday, December 15 through Wednesday, December 23. Check your parish or your diocese’s Filipino ministry for exact times and locations.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Simbang Gabi Means</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The name is a little misleading. Simbang comes from simba, “to worship” or “go to church,” and gabi means night, but in the Philippines the Masses have long been celebrated in the dark hour before dawn, often around 4:00 or 4:30 a.m. To a farmer, that still counts as night. The same Masses go by two Spanish names as well. Misa de Aguinaldo, “gift Mass,” presents the nine days as an offering to the Christ Child. Misa de Gallo, “Mass of the rooster,” refers to the hour when the cock crows.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Usage varies. Many Filipinos say Simbang Gabi and Misa de Gallo interchangeably for the whole series, while others keep Misa de Gallo for the Christmas Eve night Mass that crowns it. Both are correct in their own communities. What matters is the shape: nine consecutive days of Mass, a true novena, leading straight into Christmas.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where It Came From</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Simbang Gabi grew up in the Spanish Philippines of the sixteenth and seventeenth centuries. Most people worked the fields from first light, and in December the harvest left little room in the day. Rather than ask them to choose between work and prayer, the friars celebrated Mass before dawn, so families could worship together and still reach the fields on time. It drew on the Spanish custom of early Advent Masses honoring Our Lady, but the Philippines made it its own, with bamboo lanterns lighting the walk to church and food vendors waiting at the door.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The Marian focus is the heart of it. Advent’s last days are Mary’s days: she carries the Word made flesh, and the Church waits with her. Getting up in the dark nine times is a small way of keeping vigil with a young mother close to her delivery. Filipino immigrants carried the custom to the United States, and today Simbang Gabi is kept in hundreds of American parishes, from California and Hawaii to New Jersey and Texas, often drawing Catholics of every background.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Simbang Gabi 2026: The Nine Days</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The table follows the traditional dawn calendar, December 16 to 24, with the Gospel of the Mass of the day from the Lectionary. Advent 2026 began on Sunday, November 29, and the new liturgical year is Year B, so the Fourth Sunday’s Gospel is the Annunciation. From December 17 the weekday Masses have their own proper readings, and each evening the Church sings one of the O Antiphons at Evening Prayer.
              </LinkedText>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Day</th>
                      <th className="p-3 font-semibold">Date</th>
                      <th className="p-3 font-semibold">Gospel</th>
                      <th className="p-3 font-semibold">What it tells</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NINE_DAYS.map((d) => (
                      <tr key={d.date} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{d.day}</td>
                        <td className="p-3 whitespace-nowrap font-medium text-text">
                          {d.date}
                          {d.note && <span className="block text-xs text-accent mt-1 whitespace-normal">{d.note}</span>}
                        </td>
                        <td className="p-3 text-text-muted whitespace-nowrap">{d.gospel}</td>
                        <td className="p-3 text-text-muted">{d.theme}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Read straight through, the Gospels tell a single story. Joseph learns he will name the child Jesus. Zechariah is struck silent. Mary says yes, hurries to her cousin and sings the Magnificat. John is born, and on the last morning his father’s tongue is loosed to praise “the dawn from on high” that will visit us (Luke 1:78). There is no better Gospel for a Mass at sunrise.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For the antiphons sung on each of these evenings, see our{" "}
                <Link to="/blog/o-antiphons-advent-prayer-guide/" className={linkClass}>O Antiphons guide</Link>
                {", and for the season as a whole, the "}
                <Link to="/blog/complete-catholic-advent-guide/" className={linkClass}>complete Catholic Advent guide</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How US Parishes Schedule It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In the Philippines the dawn Mass is the norm. In the United States, where few parishioners can attend a 5:00 a.m. Mass and still commute to work, most communities celebrate Simbang Gabi in the evening. Because the evening belongs liturgically to the next day, the series usually begins on the night of December 15 and ends on the night of December 23, leaving Christmas Eve free for the vigil and night Masses of Christmas.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Many dioceses rotate the nine nights among several parishes, so a family might attend the first Mass at one church and the fourth at another across town. A diocesan Filipino ministry, the Office of Ethnic Ministries or a Filipino Catholic association usually publishes the full list in late November or early December. Your parish bulletin, website or social media page is the next place to look. Some parishes keep a single night, others all nine, and a few offer both an evening and a dawn schedule.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The way the Mass itself is celebrated also varies. In the Philippines the Holy See has long permitted a festive Mass in honor of Our Lady for these days, with white vestments and the Gloria, even though it is still Advent. Outside the Philippines, including in the US, practice depends on the diocese. Many parishes simply celebrate the Advent Mass of the day, in violet, with Filipino hymns, a procession of parols and a Marian song at the end. If you are curious why your parish does it one way, ask your pastor; neither approach is a mistake.
              </LinkedText>

              <QuizCTA
                title="Preparing for Christmas this year?"
                description="Take our free Catholic life assessment and get a simple plan for Mass, prayer and Confession before December 25."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Simbang Gabi Does and Does Not Require</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Simbang Gabi is a devotion, a generous one, but not an obligation. The weekday Masses from December 16 to 24 are not days of obligation, so missing one is not a sin. Two Masses in the window do count for something else. The Mass on Sunday, December 20, the Fourth Sunday of Advent, fulfills your Sunday obligation as usual, whether it is a Simbang Gabi Mass or not; in 2026 the evening Simbang Gabi Mass on Saturday, December 19 will usually be an anticipated Sunday Mass with the Sunday readings. And a Christmas Mass on the evening of Thursday, December 24 fulfills the obligation for Christmas Day, Friday, December 25.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Planning the big night? Our{" "}
                <Link to="/blog/christmas-mass-near-me/" className={linkClass}>Christmas Mass guide</Link>
                {" explains the vigil, night, dawn and day Masses and how to find times near you."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Customs Around the Mass</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>The parol.</strong> A five-pointed star lantern, once made of bamboo and Japanese paper and now of everything from capiz shell to LEDs. It recalls the star over Bethlehem and lit the way to dawn Mass before streetlights. Many Filipino-American parishes hang them in the nave or carry them in procession.
                </li>
                <li>
                  <strong>Bibingka and puto bumbong.</strong> Bibingka is a rice cake baked in a clay pot lined with banana leaf, with coals above and below, often topped with salted egg and cheese. Puto bumbong is purple sticky rice steamed in bamboo tubes and served with butter, sugar and grated coconut. In the Philippines vendors set up outside the church doors; in the US the parish hall usually takes their place.
                </li>
                <li>
                  <strong>Salabat.</strong> Hot ginger tea, welcome on a cold December night in Chicago as much as on a damp morning in Manila.
                </li>
                <li>
                  <strong>The nine-Mass wish.</strong> A popular belief holds that whoever completes all nine Masses will be granted a wish. Take it as what it is, a piece of folk piety, not Church teaching. The grace of Simbang Gabi is not a reward for perfect attendance. It is a heart made ready, day by day, for the coming of Christ, the one gift Mary was waiting for.
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                For how these customs sit alongside Las Posadas, the Advent wreath and others, see{" "}
                <Link to="/blog/catholic-christmas-traditions/" className={linkClass}>Catholic Christmas traditions</Link>
                {" and the "}
                <Link to="/blog/jesse-tree-catholic-advent-guide/" className={linkClass}>Jesse Tree guide</Link>
                {" for another way families mark these days."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Tips for the Nine Days</h2>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>Plan before December starts.</strong> Write every date and church on the family calendar. When the Masses rotate, note the address too, and expect parking to be tight.
                </li>
                <li>
                  <strong>For a true dawn Mass,</strong> lay out clothes the night before, set the coffee maker, and go to bed early for those nine nights. Arrive fifteen minutes early; Simbang Gabi Masses fill up quickly.
                </li>
                <li>
                  <strong>Bringing children.</strong> Evening Masses are the easier choice for small children. Give each child a role, such as carrying a small parol or marking a star chart at home after each Mass. Pajamas under a coat are not a scandal at 5:00 a.m.
                </li>
                <li>
                  <strong>Go to Confession.</strong> Many parishes add confession times during Simbang Gabi week. It is one of the best ways to prepare for Christmas.
                </li>
                <li>
                  <strong>Stay for the fellowship.</strong> The food after Mass is part of the point. It is how a parish becomes a family for those nine days.
                </li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">If You Cannot Attend All Nine</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Work schedules, illness, distance and small children all get in the way. Go to the Masses you can, and keep the rest at home. Each evening or morning, read that day’s Gospel from the table above. From December 19 onward these are the opening chapters of Luke, the story of the two births told almost hour by hour. Then pray the Angelus, which places you beside Mary at the Annunciation, or one decade of the Rosary, choosing the Joyful Mysteries. Close with the day’s O Antiphon or a simple prayer in your own words.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                That is ten minutes, and it keeps the shape of the novena intact. Homebound parishioners, those living far from a Filipino community, and anyone curious about the tradition can pray it the same way.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Prayer for Simbang Gabi</h3>
                <p className="text-text italic leading-relaxed mb-3">
                  Holy Mary, Mother of God, you waited in faith for the birth of your Son. As we rise these nine days to meet him, teach us to wait as you did: with patience, hope and a ready heart. Light our way like the star over Bethlehem, and bring us at Christmas to Jesus, the dawn from on high. Amen.
                </p>
                <p className="text-text-muted text-sm mb-0">This prayer was written for this guide. It is not a liturgical text.</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                If you want a second novena to carry through Advent, the{" "}
                <Link to="/blog/st-andrew-christmas-novena-2026/" className={linkClass}>St. Andrew Christmas Novena</Link>
                {" runs from November 30 to Christmas Eve, and our guide on "}
                <Link to="/blog/how-to-pray-a-novena-guide/" className={linkClass}>how to pray a novena</Link>
                {" explains why nine days became the Church’s pattern for waiting in prayer."}
              </p>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To keep Advent day by day, see the{" "}
              <a href="https://catholicbibleonline.com/blog/advent-2026-novena-catholic-guide-dates-prayers-how-to-prepare/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Advent 2026 novena guide</a> and{" "}
              <a href="https://catholicbibleonline.com/novenas/immaculate-conception/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Immaculate Conception Novena</a>{" "}
              on Catholic Bible Online.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "When is Simbang Gabi 2026?",
                  answer: "The traditional dawn Masses run from Wednesday, December 16 to Thursday, December 24, 2026. Many US parishes hold evening Simbang Gabi Masses instead, usually from Tuesday, December 15 through Wednesday, December 23. Check your parish or diocese for the local schedule.",
                },
                {
                  question: "What does Simbang Gabi mean?",
                  answer: "Simbang Gabi is Tagalog for “night Mass.” It is a novena of nine Masses before Christmas, traditionally celebrated before dawn in the Philippines, in honor of Mary as she awaited the birth of Jesus.",
                },
                {
                  question: "Is Misa de Gallo the same as Simbang Gabi?",
                  answer: "Often, yes. Many Filipinos use Misa de Gallo, “Mass of the rooster,” for all nine dawn Masses. Others reserve the name for the Christmas Eve night Mass that ends the series. Simbang Gabi is also called Misa de Aguinaldo, the “gift Mass.”",
                },
                {
                  question: "Do Simbang Gabi Masses fulfill my Sunday or Christmas obligation?",
                  answer: "The weekday Simbang Gabi Masses carry no obligation. A Mass on Sunday, December 20 (or its Saturday evening anticipated Mass) fulfills the Sunday obligation, and a Christmas Mass on the evening of December 24 fulfills the obligation for Christmas Day.",
                },
                {
                  question: "Will I get a wish if I complete all nine Masses?",
                  answer: "That is a popular folk belief, not Church teaching. The purpose of Simbang Gabi is to prepare for Christmas with Mary through daily Mass. Any grace received comes as a gift of God, not as a reward for perfect attendance.",
                },
                {
                  question: "Can non-Filipinos attend Simbang Gabi?",
                  answer: "Absolutely. Simbang Gabi is a Catholic Mass open to everyone, and US parishes warmly welcome guests. Come early, join in the hymns you can, and stay for the food afterward.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Get ready for Christmas"
              description="Keep the nine days of Simbang Gabi with Mass, Confession and daily prayer with Mary."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
