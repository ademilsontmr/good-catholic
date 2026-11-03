import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ListOrdered } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { cboLinkClass } from "@/lib/catholicBibleOnlineLinks";

const SLUG = "biblical-numbers-meanings";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Biblical Numbers and Their Meanings: A Catholic Guide";
const H1 = "Biblical Numbers and Their Meanings: What 3, 7, 12, 40, and 666 Signify in Scripture";
const DESCRIPTION =
  "What 3, 7, 12, 40, and 666 mean in Scripture: a Catholic guide to biblical number symbolism, distinct from numerology, with the chapters to read.";
const CBO = "https://catholicbibleonline.com/bible/";
const NC = "https://numbercalculator365.com";

type Section = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: { caption: string; headers: string[]; rows: string[][] };
  callout?: { label: string; text: string };
};

const SECTIONS: Section[] = [
  {
    id: "not-numerology",
    heading: "Biblical numbers are not a secret code",
    paragraphs: [
      "The Bible is full of numbers that mean more than a head count: seven days of creation, twelve tribes, forty years in the desert, three days in the tomb. Hebrew and early Christian writers used numbers the way they used images — as a compact way to say something about God, the covenant, or the Church. That is number symbolism, a feature of the text. It is not a license to treat Scripture as a puzzle of lucky digits.",
      "The Catechism rejects \"all forms of divination,\" including consulting horoscopes, omens, and the like (CCC 2115–2116). Using numbers to predict the future, to grade a person's soul, or to find a \"hidden\" message God never put there belongs to that forbidden category, not to Catholic Bible reading. Dei Verbum 12 asks that Scripture be read in its literary forms, in the living Tradition of the Church, and with attention to the whole of revelation — not verse by verse as if each figure were a password.",
      "A good rule is this: first take the number as a number, then ask whether the biblical writer is also using a well-known symbol. Seven days really are seven days in " + `{{${CBO}genesis/1/|Genesis 1}}` + ", and they also say that God's work is complete. Both can be true. Inventing a private meaning for 11 or 23 because a dream featured that digit is not Catholic interpretation.",
    ],
    callout: {
      label: "The Church has not defined a table of numbers",
      text: "No council has defined that \"seven always means X.\" What follows is the conventional symbolism that appears again and again in Scripture and in the Fathers. It helps you read. It is not dogma.",
    },
  },
  {
    id: "quick-reference",
    heading: "A quick reference to the main biblical numbers",
    paragraphs: [
      "These are the numbers that return most often, with the meaning they usually carry in the biblical tradition. Read the chapter, not only the digit.",
    ],
    table: {
      caption: "The numbers that return most often in Scripture",
      headers: ["Number", "Usual sense", "Where to start"],
      rows: [
        ["1", "The one God; unity", `{{${CBO}deuteronomy/6/|Deuteronomy 6}}`],
        ["3", "Divine completeness; the third day of resurrection", `{{${CBO}matthew/28/|Matthew 28}}`],
        ["4", "The earth: four corners, four winds, four Gospels", `{{${CBO}revelation/7/|Revelation 7}}`],
        ["6", "Human work; falling short of seven", `{{${CBO}revelation/13/|Revelation 13}}`],
        ["7", "Covenant completeness; rest; fulfillment", `{{${CBO}genesis/2/|Genesis 2}}`],
        ["8", "New creation; the day of resurrection", `{{${CBO}genesis/17/|Genesis 17}}`],
        ["10", "The Law; a complete set", `{{${CBO}exodus/20/|Exodus 20}}`],
        ["12", "The people of God: tribes and apostles", `{{${CBO}matthew/10/|Matthew 10}}`],
        ["40", "A time of testing and preparation", `{{${CBO}matthew/4/|Matthew 4}}`],
        ["50", "Jubilee; the gift of the Spirit", `{{${CBO}acts/2/|Acts 2}}`],
        ["70", "Fullness of the nations or of a mission", `{{${CBO}luke/10/|Luke 10}}`],
        ["1,000", "A vast, complete multitude, not a calendar", `{{${CBO}revelation/20/|Revelation 20}}`],
      ],
    },
  },
  {
    id: "one-three-seven",
    heading: "One, three, and seven: God, the third day, and completeness",
    paragraphs: [
      "One is the simplest confession of Israel: \"Hear, O Israel: The Lord our God is one Lord\" (" + `{{${CBO}deuteronomy/6/|Deuteronomy 6:4}}` + "). Catholic faith does not set that aside. The one God is Father, Son, and Holy Spirit — three Persons, one nature. That is the mystery of the [[/blog/what-is-the-holy-trinity/|Holy Trinity]], not a puzzle in arithmetic.",
      "Three marks decisive moments in the Gospel. Jonah is a sign of three days (" + `{{${CBO}jonah/1/|Jonah 1}}` + "). Jesus rises \"on the third day,\" according to the Scriptures. He names the three Persons in the baptismal command (" + `{{${CBO}matthew/28/|Matthew 28:19}}` + "). Peter denies him three times and is asked three times, \"Do you love me?\" The number is not magic; it is how the evangelists underline what cannot be missed.",
      "Seven is the great covenant number. God finishes creation in six days and rests on the seventh (" + `{{${CBO}genesis/2/|Genesis 2}}` + "). Israel keeps the Sabbath. Revelation is built on sevens: seven churches, seven seals, seven trumpets, seven bowls (" + `{{${CBO}revelation/1/|Revelation 1}}` + "). In Catholic life the number still structures the faith: the [[/blog/seven-sacraments/|seven sacraments]], the seven gifts of the Holy Spirit, the seven petitions of the Our Father. The [[/blog/seven-deadly-sins/|seven deadly sins]] are a later pastoral list, not a biblical catalogue, but they use the same habit of naming a complete set.",
    ],
    callout: {
      label: "Seven in the Rosary",
      text: "The ordinary Dominican Rosary is five decades, not seven. The Franciscan Crown has seven decades in honor of the Seven Joys of Mary, and the [[/blog/seven-sorrows-rosary-guide/|Seven Sorrows Rosary]] has seven. If you are learning the common form, start with [[/blog/how-to-pray-the-rosary-step-by-step/|how to pray the Rosary]].",
    },
  },
  {
    id: "four-six-eight-ten",
    heading: "Four, six, eight, and ten",
    paragraphs: [
      "Four is the number of the world we can map: four corners of the earth, four winds, four living creatures around the throne. Christian tradition read the four living creatures of Ezekiel and Revelation as a sign of the four Gospels. The Church has four Gospels, not because four is lucky, but because those four witnesses were received from the apostles.",
      "Six is the number of human labor in the creation week, and so of what is unfinished. The Beast's number in Revelation is six repeated three times — a parody of completeness, not a calendar date. More on that below.",
      "Eight is the number of the new week. Jewish boys were circumcised on the eighth day (" + `{{${CBO}genesis/17/|Genesis 17}}` + "). The Fathers called Sunday the eighth day because the resurrection opens a creation that the old seven days could not contain. That is why baptismal fonts are often octagonal, and why an octave in the liturgy — eight days kept as one feast — is the Church's way of lingering inside a mystery. Christmas and Easter both have octaves.",
      "Ten is the number of the Law: the [[/blog/ten-commandments-catholic/|Ten Commandments]] in " + `{{${CBO}exodus/20/|Exodus 20}}` + " (and " + `{{${CBO}deuteronomy/5/|Deuteronomy 5}}` + "). Ten plagues, ten strings of the psaltery, the tithe of a tenth. It is a complete human set: you can count it on your fingers.",
    ],
  },
  {
    id: "twelve-and-multiples",
    heading: "Twelve, and the numbers built from twelve",
    paragraphs: [
      "Twelve is the number of the people God gathers. Israel has twelve tribes. Jesus chooses twelve apostles (" + `{{${CBO}matthew/10/|Matthew 10}}` + "). After Judas's death the Church fills the number again (" + `{{${CBO}acts/1/|Acts 1}}` + "). Joshua sets up twelve stones from the Jordan (" + `{{${CBO}joshua/4/|Joshua 4}}` + "). The new Jerusalem has twelve gates, twelve foundations, and a wall of 144 cubits (" + `{{${CBO}revelation/21/|Revelation 21}}` + ").",
      "When Revelation speaks of 144,000 sealed from every tribe of Israel (" + `{{${CBO}revelation/7/|Revelation 7}}` + "), the arithmetic is part of the meaning: 12 × 12 × 1,000. Twelve tribes, twelve apostles, and a thousand as a sign of a vast multitude — the whole people of God, not a ticketed crowd of literally 144,000 people. Factoring the number is enough to see the design; a " + `{{${NC}/factor-calculator/|factor calculator}}` + " will show the 12s and the 1,000 without any need for a secret key.",
      "The same pattern appears in smaller ways. Twenty-four elders (12 + 12) sit around the throne. Seventy, or seventy-two, disciples in " + `{{${CBO}luke/10/|Luke 10}}` + " recall the seventy names of the nations in Genesis 10 and the seventy elders of Israel. Jesus' \"seventy times seven\" in " + `{{${CBO}matthew/18/|Matthew 18}}` + " is 490 if you multiply it, and the point is that you stop counting. The math is simple; the command is not.",
    ],
  },
  {
    id: "forty-and-fifty",
    heading: "Forty and fifty: testing, and the gift that follows",
    paragraphs: [
      "Forty is the Bible's number for a long, hard preparation. The flood falls for forty days (" + `{{${CBO}genesis/7/|Genesis 7}}` + "). Israel wanders forty years. Moses is on the mountain forty days (" + `{{${CBO}exodus/24/|Exodus 24}}` + "). Elijah walks forty days to Horeb (" + `{{${CBO}1-kings/19/|1 Kings 19}}` + "). Jesus fasts forty days in the desert (" + `{{${CBO}matthew/4/|Matthew 4}}` + ") and remains forty days with the disciples after the resurrection (" + `{{${CBO}acts/1/|Acts 1}}` + "). In every case the number means: this lasts long enough to change you.",
      "That is why Lent has forty days. They commemorate the Lord's fast. They are not forty calendar days in a row: Sundays are the Lord's Day and are not counted among the days of fast, so the stretch from [[/blog/ash-wednesday/|Ash Wednesday]] to the Easter Vigil is longer than forty dates on a wall calendar. If you count the days from February 10, 2027, to [[/blog/catholic-easter/|Easter]] on March 28, 2027, a " + `{{${NC}/days-between-dates-calculator/|days-between-dates calculator}}` + " will show that gap; the Church still calls the fast forty days because of the biblical pattern, not because every sunrise in between is a fast day.",
      "Fifty follows forty as the feast follows the trial. Leviticus commands a jubilee after seven weeks of years (" + `{{${CBO}leviticus/25/|Leviticus 25}}` + "). Pentecost is fifty days after Passover, when the Spirit is given (" + `{{${CBO}acts/2/|Acts 2}}` + "). The Church still keeps [[/blog/pentecost-sunday/|Pentecost]] fifty days after Easter. Forty prepares; fifty is the gift.",
    ],
  },
  {
    id: "six-six-six-and-one-five-three",
    heading: "666 and 153: two numbers people ask about",
    paragraphs: [
      "Revelation says the number of the beast is 666, \"a human number\" (" + `{{${CBO}revelation/13/|Revelation 13:18}}` + "). The Church has never defined who the beast was. A common and serious reading among scholars is Hebrew gematria: the letters of \"Nero Caesar\" add up to 666, and a well-attested variant reading, 616, matches a Latin form of the same name. That would make the number a pointed description of a persecuting emperor, not a forecast of a year. Treat every internet claim that 666 \"unlocks\" a pope, a president, or a barcode as rumor, not exegesis.",
      "After the resurrection, the disciples catch 153 fish (" + `{{${CBO}john/21/|John 21}}` + "). John gives the number because someone counted the catch. Saint Augustine later noted that 153 is the triangle of 17 (1 + 2 + … + 17) and read 17 as ten commandments plus seven gifts of the Spirit — the whole Church gathered in. That is a preacher's insight, not a defined meaning. You may hold it. You may also simply take it as a remembered fact of that morning by the lake.",
      "In both cases the Catholic instinct is the same: read the number in the chapter, in the book, and in the faith of the Church. Do not detach it and run it through a scheme. If you want to check the arithmetic of 12 × 12 × 1,000, or of 70 × 7, any ordinary calculator will do; " + `{{${NC}/|Number Calculator 365}}` + " is one such tool. The meaning is in the Gospel, not in the keypad.",
    ],
    callout: {
      label: "Gematria is history, not a method of prayer",
      text: "Jewish and Greek writers sometimes used the number-value of letters. That can explain how a first-century reader heard 666. It is not a Catholic method for reading your name, your birthday, or the headlines.",
    },
  },
  {
    id: "how-to-read-them",
    heading: "How to read a biblical number when you meet one",
    paragraphs: [
      "When a number in Scripture catches your eye, walk through it in this order.",
    ],
    list: [
      "Read the whole passage on {{https://catholicbibleonline.com/|Catholic Bible Online}}, not a screenshot of the digit.",
      "Ask whether the number is simply counting (twelve men in a boat) or also echoing a known symbol (twelve as the people of God).",
      "Check whether the same number is used that way elsewhere — seven in Genesis and in Revelation, forty in Moses and in Jesus.",
      "Stay inside what the Church actually teaches. The sacraments are seven; the commandments are ten; the apostles are twelve. Those are facts of the faith, not codes.",
      "If a reading requires a secret formula, drop it. God did not hide the Gospel in arithmetic.",
    ],
    callout: {
      label: "Pray the passage, then notice the number",
      text: "[[/blog/lectio-divina-how-to-practice/|Lectio Divina]] is the better habit: read, meditate, pray, contemplate. The number will mean more after you have prayed the scene than before.",
    },
  },
];

const FAQS = [
  {
    question: "What do numbers mean in the Bible?",
    answer: "Some numbers in Scripture carry a conventional meaning as well as a count: seven for completeness, twelve for the people of God, forty for a time of testing. That symbolism is part of the biblical way of writing. It is not a secret code, and the Church has not defined a table of numbers as dogma.",
  },
  {
    question: "What does the number 7 mean in the Bible?",
    answer: "Seven usually marks covenant completeness: the Sabbath after six days of creation, seven churches and seven seals in Revelation, and in Catholic life the seven sacraments and the seven gifts of the Holy Spirit.",
  },
  {
    question: "What does 40 mean in the Bible?",
    answer: "Forty marks a long preparation: the flood, Israel's years in the desert, Moses on the mountain, Elijah's walk to Horeb, and Jesus' fast. Lent's forty days commemorate that fast; Sundays are not counted among them.",
  },
  {
    question: "What does 12 mean in the Bible?",
    answer: "Twelve is the number of the people God gathers: the tribes of Israel and the apostles. Multiples of twelve in Revelation (24 elders, 144,000 sealed) extend that same symbol to the whole Church.",
  },
  {
    question: "What does 666 mean in Revelation?",
    answer: "Revelation 13:18 calls 666 the number of the beast and \"a human number.\" The Church has never defined who the beast was. Many scholars read it as gematria for Nero Caesar. Claims that it names a modern person or a year are not Catholic teaching.",
  },
  {
    question: "Is biblical numerology allowed for Catholics?",
    answer: "No, if by numerology you mean using numbers to tell the future or to find hidden messages. The Catechism rejects divination (CCC 2115–2116). Noticing how Scripture itself uses seven, twelve, and forty is ordinary Bible reading, not numerology.",
  },
  {
    question: "What does 144,000 mean in Revelation?",
    answer: "144,000 is 12 × 12 × 1,000: the tribes, the apostles, and a vast multitude. In context it stands for the whole people of God who are sealed, not a literal head count of people who will be saved.",
  },
  {
    question: "Why are there 153 fish in John 21?",
    answer: "John records that the disciples counted 153 large fish. Saint Augustine later read 153 as 1 + 2 + … + 17, and 17 as the commandments plus the gifts of the Spirit. That is a preacher's interpretation, not a defined doctrine.",
  },
];

const RELATED = [
  { href: "/blog/what-is-the-holy-trinity/", label: "What Catholics mean by the Holy Trinity" },
  { href: "/blog/seven-sacraments/", label: "The seven sacraments" },
  { href: "/blog/ten-commandments-catholic/", label: "The Ten Commandments" },
  { href: "/blog/how-to-pray-the-rosary-step-by-step/", label: "How to pray the Rosary" },
  { href: "/blog/pentecost-sunday/", label: "Pentecost: fifty days after Easter" },
  { href: "/blog/lectio-divina-how-to-practice/", label: "Lectio Divina: praying with Scripture" },
];

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\]|\{\{[^}]+\}\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        const internal = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
        if (internal) {
          return (
            <Link key={index} to={internal[1]} className={cboLinkClass}>
              {internal[2]}
            </Link>
          );
        }
        const external = part.match(/^\{\{([^|]+)\|([^}]+)\}\}$/);
        if (external) {
          return (
            <a key={index} href={external[1]} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
              {external[2]}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default function BiblicalNumbersMeanings() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="biblical numbers, numbers in the bible meaning, meaning of 7 in the bible, meaning of 40 in the bible, meaning of 12 in the bible, 666 bible meaning, 144000 revelation, catholic numerology, biblical number symbolism"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-02" dateModified="2026-11-02" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Biblical Numbers", url: PAGE_URL },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-text">Biblical Numbers</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />Back to Blog
            </Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Scripture &amp; Tradition</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" aria-hidden="true" />November 2, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" aria-hidden="true" />11 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">{H1}</h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Seven days, twelve apostles, forty years in the desert: Scripture uses numbers as symbols as well as counts. Here is how a Catholic reads them — and how that differs from numerology.
              </p>
            </header>
            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <ListOrdered className="w-24 h-24 text-amber-700" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">
                In the Bible, numbers often carry a conventional meaning as well as a count: one God, three days to the resurrection, seven for completeness, twelve for the people of God, forty for a time of testing. That symbolism is part of how Scripture is written. It is not a secret code, and using numbers to tell the future is not Catholic (Catechism 2115–2116). Read the chapter; then notice the number.
              </p>
            </div>
            <BlogArticleAd slot="1906776249" />

            <nav aria-labelledby="toc-heading" className="mb-10 rounded-xl border border-border bg-background-muted/40 p-6">
              <p id="toc-heading" className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">In this guide</p>
              <ol className="list-decimal pl-5 space-y-1 text-text">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className={cboLinkClass}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>

            {SECTIONS.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id} className="scroll-mt-24 font-display text-2xl font-bold text-text mt-10 mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-text leading-relaxed mb-6">
                    <Rich text={paragraph} />
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-5 space-y-3 text-text leading-relaxed mb-6">
                    {section.list.map((item) => (
                      <li key={item.slice(0, 48)}><Rich text={item} /></li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="mb-6 overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-left text-sm">
                      <caption className="px-4 pt-3 text-left text-sm font-semibold text-text-muted">{section.table.caption}</caption>
                      <thead className="bg-background-muted/60">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col" className="px-4 py-3 font-semibold text-text">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("|")} className="border-t border-border align-top">
                            {row.map((cell, index) => (
                              <td key={`${index}-${cell.slice(0, 16)}`} className="px-4 py-3 text-text leading-relaxed">
                                <Rich text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.callout && (
                  <aside className="mb-6 rounded-xl border-l-4 border-accent bg-accent/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">{section.callout.label}</p>
                    <p className="text-text leading-relaxed"><Rich text={section.callout.text} /></p>
                  </aside>
                )}
              </section>
            ))}

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Keep reading</h2>
            <ul className="list-disc pl-5 space-y-2 text-text leading-relaxed mb-8">
              {RELATED.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={cboLinkClass}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <QuizCTA />
            <BlogFAQ htmlAnswers faqs={FAQS} />
            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
