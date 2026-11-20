import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Sparkles, Star, Heart, Church, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { TopicSeriesNav } from "@/components/blog/TopicSeriesNav";

export default function LiturgyOfTheHoursGuide() {
  return (
    <>
      <Helmet>
        <title>Liturgy of the Hours: Every Hour and Its Structure | Guide Catholic</title>
        <meta name="description" content="The Liturgy of the Hours hour by hour: Invitatory, Office of Readings, Morning, Daytime, Evening and Night Prayer, the four-week psalter, and how the books work." />
        <meta name="keywords" content="liturgy of the hours structure, divine office hours, office of readings, morning prayer lauds, evening prayer vespers, night prayer compline, four-week psalter, breviary explained" />
        <link rel="canonical" href="https://guidecatholic.com/blog/liturgy-of-the-hours-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Liturgy of the Hours: Every Hour and Its Structure"
          description="The Liturgy of the Hours hour by hour: Invitatory, Office of Readings, Morning, Daytime, Evening and Night Prayer, the four-week psalter, and how the books work."
          url="https://guidecatholic.com/blog/liturgy-of-the-hours-guide/"
        />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Liturgy of the Hours, Hour by Hour", url: "https://guidecatholic.com/blog/liturgy-of-the-hours-guide/" },
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
              <span className="text-text">Liturgy of the Hours, Hour by Hour</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Prayer & Devotion
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Liturgy of the Hours: Every Hour and Its Structure
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A complete map of the Divine Office as the Roman Rite prays it today: what each hour contains and in what order, how the four-week psalter and the seasons fit together, and how the breviary is laid out so you can find your place on any day.
              </p>
            </header>

            <div className="aspect-video bg-purple-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <BookOpen className="w-24 h-24 text-purple-400/20 absolute top-4 right-4" />
              <Clock className="w-32 h-32 text-purple-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The current Roman Office has five hours: the Office of Readings, Morning Prayer (Lauds), Daytime Prayer (Midmorning, Midday, Midafternoon), Evening Prayer (Vespers), and Night Prayer (Compline). The day opens with the Invitatory. Morning and Evening Prayer are the two hinges; the psalms are spread over a four-week cycle.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The Liturgy of the Hours is the public prayer of the Church by which the whole course of the day and night is made holy through the praise of God (Sacrosanctum Concilium 84). The Catechism treats it in CCC 1174-1178 and says it is intended to become the prayer of the whole People of God (CCC 1175). Unlike a private devotion, it has fixed texts and a fixed structure, set out in the General Instruction of the Liturgy of the Hours (GILH) of 1971 and the official books that followed the Second Vatican Council.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                This page is the structural reference for the series. If you are a lay Catholic wondering which book to buy and how much to attempt at first, the companion article in the series box below covers that practical side.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Names and Roots
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The same prayer goes by several names. "Liturgy of the Hours" is the official title of the post-conciliar books. "Divine Office" comes from the Latin officium, a duty or service rendered to God. "Breviary" originally meant an abbreviated compilation that gathered into one book texts once spread across psalters, lectionaries, and hymnals, and it is still used for the printed volumes.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The practice of praying at set times is older than the Church. The psalmist speaks of praising God seven times a day (Psalm 119:164) and of crying out evening, morning, and noon (Psalm 55:18). Daniel prayed three times daily toward Jerusalem (Daniel 6:11). In Acts, Peter and John go up to the Temple at the ninth hour, the hour of prayer (Acts 3:1), and Peter goes up to the roof to pray about noon (Acts 10:9). Paul's exhortation to pray without ceasing (1 Thessalonians 5:17) became, in monasteries and cathedrals, a cycle of prayer that marked the whole day.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Hours as They Are Today
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Vatican II reformed the older Roman Office. It called Lauds and Vespers the two hinges on which the daily Office turns, adapted the old night hour of Matins into an Office of Readings that can be prayed at any time of day, suppressed the hour of Prime, and allowed those not bound to choir to choose one of the three little hours (Sacrosanctum Concilium 89).
              </LinkedText>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Church className="w-6 h-6 text-purple-600" />
                  The Hours of the Roman Office
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text mb-2">Invitatory</h4>
                    <p className="text-sm text-text-muted">Opens the first hour of the day, whichever that is.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Office of Readings (formerly Matins)</h4>
                    <p className="text-sm text-text-muted">Any time of day; may be extended into a vigil before Sundays and feasts.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Morning Prayer (Lauds)</h4>
                    <p className="text-sm text-text-muted">Early morning; centered on the Benedictus.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Daytime Prayer (Terce, Sext, None)</h4>
                    <p className="text-sm text-text-muted">Midmorning, midday, midafternoon; one may be chosen.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Evening Prayer (Vespers)</h4>
                    <p className="text-sm text-text-muted">Late afternoon or evening; centered on the Magnificat.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-2">Night Prayer (Compline)</h4>
                    <p className="text-sm text-text-muted">The last prayer before sleep, even if after midnight; centered on the Nunc Dimittis.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Invitatory
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The first hour prayed each day, usually the Office of Readings or Morning Prayer, begins with the Invitatory. The opening verse is "Lord, open my lips," answered "And my mouth will proclaim your praise" (from Psalm 51:17), traced with a small cross on the lips. Then Psalm 95 is prayed with an antiphon repeated between its stanzas; Psalm 100, 67, or 24 may replace it. The antiphon changes with the day and season and sets the tone for everything that follows.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Office of Readings
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                This is the hour of longer, meditative reading. If it is not preceded by the Invitatory it begins with "God, come to my assistance," answered "Lord, make haste to help me," followed by the Glory Be and, outside Lent, Alleluia. That opening is shared by every hour except the one that starts with the Invitatory.
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Hymn.</strong></li>
                <li><strong>Psalmody:</strong> three psalms or sections of psalms, each with its antiphon.</li>
                <li><strong>Verse</strong> leading from prayer to listening.</li>
                <li><strong>First reading</strong> from Scripture, with a responsory. The printed books follow a one-year cycle that covers much of the Bible; the General Instruction also provides a two-year cycle.</li>
                <li><strong>Second reading</strong> from the Church Fathers, a saint, or a Church document, with a responsory. On saints' days it often comes from the saint's own writings or a life.</li>
                <li><strong>Te Deum</strong> on Sundays outside Lent, during the Octaves of Easter and Christmas, and on solemnities and feasts.</li>
                <li><strong>Concluding prayer</strong> and the acclamation "Let us praise the Lord. And give him thanks."</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Morning Prayer (Lauds)
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Lauds, from the Latin for praise, consecrates the morning and recalls the Resurrection, which took place at dawn. Its structure:
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Opening:</strong> Invitatory, or "God, come to my assistance."</li>
                <li><strong>Hymn.</strong></li>
                <li><strong>Psalmody:</strong> a morning psalm, an Old Testament canticle, and a psalm of praise. On Sunday of Week I, for example, these are Psalm 63, the canticle from Daniel 3, and Psalm 149.</li>
                <li><strong>Reading</strong> (a short Scripture passage) and <strong>short responsory</strong>.</li>
                <li><strong>Canticle of Zechariah (Benedictus),</strong> Luke 1:68-79, with its own antiphon; all make the Sign of the Cross at its start.</li>
                <li><strong>Intercessions</strong> that dedicate the day and its work to God.</li>
                <li><strong>Lord's Prayer.</strong></li>
                <li><strong>Concluding prayer</strong> and blessing or dismissal.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Daytime Prayer (Terce, Sext, None)
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Daytime Prayer is short: the opening verse, a hymn, three psalms or psalm sections, a brief reading with a versicle, and the concluding prayer. Midmorning prayer (Terce) traditionally recalls the descent of the Holy Spirit at the third hour (Acts 2:15); midday prayer (Sext) recalls Peter's prayer on the rooftop; midafternoon prayer (None) recalls the hour of Christ's death. Someone praying only one daytime hour uses the psalms of the current psalter week. Someone praying two or three uses the complementary psalmody, drawn mainly from the Gradual Psalms (Psalms 120-128), for the additional hours so that psalms are not repeated.
              </LinkedText>

              <QuizCTA
                title="Ready to sanctify your day?"
                description="Take our assessment to discover which Liturgy of the Hours schedule works best for your lifestyle."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Evening Prayer (Vespers)
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Vespers gives thanks for the day and recalls both the evening sacrifice of the Temple and the Lord's self-offering at the Last Supper. It mirrors Lauds, with two changes: the third element of the psalmody is a New Testament canticle, and the Gospel canticle is Mary's.
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Opening verse</strong> and <strong>hymn.</strong></li>
                <li><strong>Psalmody:</strong> two psalms (or one divided) and a canticle from the New Testament letters or Revelation. Sunday Evening Prayer opens with Psalm 110.</li>
                <li><strong>Reading</strong> and <strong>short responsory.</strong></li>
                <li><strong>Canticle of Mary (Magnificat),</strong> Luke 1:46-55, begun with the Sign of the Cross.</li>
                <li><strong>Intercessions,</strong> the last of which is always for the dead.</li>
                <li><strong>Lord's Prayer, concluding prayer,</strong> and blessing or dismissal.</li>
              </ol>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Sundays and solemnities have two Evening Prayers. Evening Prayer I is prayed on the eve, so Sunday liturgically begins on Saturday evening, following the Jewish reckoning of days from sunset. Evening Prayer II is prayed on the day itself.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Night Prayer (Compline)
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Compline, from the Latin for completion, is the last prayer before going to bed. Unlike the other hours it follows a one-week cycle rather than four, so many people come to know it almost by heart.
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Opening verse,</strong> then an <strong>examination of conscience,</strong> which may take the form of a penitential act.</li>
                <li><strong>Hymn.</strong></li>
                <li><strong>Psalmody:</strong> one psalm or two. After Evening Prayer I of Sunday, Psalms 4 and 134; after Evening Prayer II, Psalm 91.</li>
                <li><strong>Reading</strong> and the responsory "Into your hands, Lord, I commend my spirit," echoing Psalm 31:6 and the words of Jesus on the Cross (Luke 23:46).</li>
                <li><strong>Canticle of Simeon (Nunc Dimittis),</strong> Luke 2:29-32, with its antiphon asking God to protect us awake and asleep.</li>
                <li><strong>Concluding prayer</strong> and the blessing: "May the all-powerful Lord grant us a restful night and a peaceful death. Amen."</li>
                <li><strong>Marian antiphon,</strong> such as the Salve Regina, Alma Redemptoris Mater, Ave Regina Caelorum, or, in Easter Time, the{" "}
                  <Link to="/blog/regina-caeli-prayer/" className="text-accent font-semibold underline underline-offset-2">Regina Caeli</Link>.
                </li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Four-Week Psalter
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The psalms are distributed over four weeks, labeled Weeks I to IV. The cycle starts again with Week I at the beginning of Advent and on the First Sunday of Lent, is adjusted for Christmas and Easter Time, and in Ordinary Time runs alongside the week number: Week 1 of Ordinary Time uses psalter Week I, Week 5 uses Week I again, and so on. Three psalms (58, 83, and 109) are left out of the cycle entirely, and some verses of other psalms are omitted, because of their curses. The GILH (no. 131) gives as the reason a certain psychological difficulty, while noting that psalms of imprecation are used as prayer even in the New Testament (for example Revelation 6:10).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Each psalm comes with an antiphon, sung or said before and after it, which points the psalm toward a particular day or mystery, and many editions add a title, a New Testament or patristic sentence, and a short psalm-prayer to help Christians pray it in the light of Christ. The Glory Be is said at the end of each psalm and canticle, with a few exceptions marked in the books.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How the Breviary Is Organized
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Finding the right page is the most common stumbling block, and it becomes manageable once you know the four main sections. A day's Office usually takes texts from two or three of them at once, which is why breviaries have several ribbons.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Proper of Seasons:</strong> texts for Advent, Christmas, Lent, Easter, and the Sundays of Ordinary Time, such as antiphons for the Gospel canticles, readings, intercessions, and concluding prayers.</li>
                <li><strong>Ordinary:</strong> the fixed framework and texts that never change, including the Invitatory psalms and the Gospel canticles.</li>
                <li><strong>Psalter:</strong> the four-week cycle of psalms with their antiphons, plus the weekly Night Prayer and the complementary psalmody.</li>
                <li><strong>Proper of Saints and Commons:</strong> texts for particular saints' days, and common texts for categories of saints (martyrs, pastors, virgins, holy men and women) and for the dedication of a church.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The rank of the day decides how these combine. On a solemnity or feast nearly everything comes from the proper texts, and the Morning Prayer psalms are those of Sunday, Week I. On a memorial, the psalms usually come from the current psalter week while the antiphons for the Gospel canticles and the concluding prayer come from the saint. On an ordinary weekday, the psalter week and the seasonal proper supply everything. Annual guides printed for the U.S. edition list the page numbers for each day.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Office Through the Liturgical Year
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                The seasons color every hour. In Advent the antiphons echo Isaiah and John the Baptist, and from December 17 to 23 the Magnificat antiphons are the seven great "O Antiphons" from which the hymn O Come, O Come, Emmanuel was drawn. In Lent the Alleluia disappears from the opening verse and the Te Deum is not said. During the Easter Octave every day is celebrated like a solemnity, and Alleluias are added throughout the fifty days. In the Office of Readings the biblical reading follows the season as well; in Advent, for instance, it is drawn mainly from Isaiah.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Who Prays It, and How
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                Priests and transitional deacons are obliged to pray the full Liturgy of the Hours daily (canon 276), and permanent deacons pray the portion set by their bishops' conference. Communities of religious pray it according to their constitutions, often in choir. The Council recommended that pastors celebrate the chief hours, especially Vespers on Sundays and feasts, with the people in church, and it encouraged lay people to pray the Office with priests, with one another, or even alone (Sacrosanctum Concilium 100; CCC 1175).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="liturgy-of-the-hours-guide">
                When prayed in common, the psalms are usually alternated between two sides of the chapel or congregation, stanza by stanza; a leader intones the opening verse and the antiphons, a reader proclaims the reading, and all stand for the Gospel canticles. Singing is the traditional and preferred form, but recitation is fully legitimate. Whether in a cathedral choir or alone at a kitchen table, the person praying the Office joins the prayer of the whole Church, which Sacrosanctum Concilium 84 describes as the voice of the Bride addressed to her Bridegroom.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Liturgy of the Hours is intended to become the prayer of the whole People of God."
                </p>
                <p className="text-text-muted text-center mt-2">
                  - Catechism of the Catholic Church, 1175
                </p>
              </div>
            </div>

            <TopicSeriesNav currentSlug="liturgy-of-the-hours-guide" />
            <BlogFAQ faqs={[
              {
                question: "How many hours are in the Liturgy of the Hours today?",
                answer: "Five: the Office of Readings, Morning Prayer, Daytime Prayer, Evening Prayer, and Night Prayer, with the Invitatory opening the first hour of the day. Daytime Prayer can be one hour or three (midmorning, midday, midafternoon). The older count of seven or eight hours included Prime, which Vatican II suppressed, and treated the three little hours separately."
              },
              {
                question: "Why is it called the Divine Office or the Breviary?",
                answer: "'Office' comes from the Latin officium, a duty or service, so the Divine Office is the service of praise owed to God. 'Breviary' referred to a compact book that gathered psalms, readings, hymns, and prayers previously scattered across several books. 'Liturgy of the Hours' is the name of the reformed books issued after Vatican II."
              },
              {
                question: "What is the Office of Readings and when is it prayed?",
                answer: "It is the hour devoted to longer readings: three psalms, a substantial passage of Scripture, and a second reading from the Fathers, a saint, or a Church document, with the Te Deum on Sundays and feasts. It replaced the old night hour of Matins and may be prayed at any time of the day."
              },
              {
                question: "What does 'Week II of the psalter' mean?",
                answer: "The psalms are arranged in a four-week cycle. 'Week II' tells you which week of that cycle to use. The cycle starts again with Week I at the beginning of Advent and on the First Sunday of Lent, and in Ordinary Time it follows the week number (Weeks 1, 5, 9 use Week I; Weeks 2, 6, 10 use Week II; and so on). Liturgical calendars and Office guides print the psalter week for each day."
              },
              {
                question: "Why are some psalms missing from the cycle?",
                answer: "Psalms 58, 83, and 109, along with certain verses of other psalms, are omitted because of their harsh imprecations. The General Instruction of the Liturgy of the Hours (no. 131) attributes the omission to a certain psychological difficulty, while noting that such psalms are used as prayer even in the New Testament and remain part of Scripture."
              },
              {
                question: "Which Marian antiphon is sung at the end of Night Prayer?",
                answer: "It varies with the season. The Regina Caeli is used from Easter to Pentecost. At other times the Salve Regina (Hail, Holy Queen), the Alma Redemptoris Mater, or the Ave Regina Caelorum may be chosen, and conferences of bishops may approve other Marian antiphons."
              }
            ]} />

<RelatedArticles currentSlug="liturgy-of-the-hours-guide" />

            <ArticleBottomCTA title="Sanctify Your Day with Ancient Prayer" description="Take our assessment to create your personalized Liturgy of the Hours schedule." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
