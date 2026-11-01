import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, PenLine } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { CopyPrayerButton, DailyPrayersHubLink } from "@/components/blog/DailyPrayerExtras";
import { cboLinkClass } from "@/lib/catholicBibleOnlineLinks";

const SLUG = "ai-written-prayers";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Can AI Write a Prayer? How to Make an AI Prayer Personal";
const H1 = "Can AI Write a Prayer? A Catholic Guide to Making an AI-Drafted Prayer Sound Like You";
const DESCRIPTION =
  "Can Catholics use AI to write a prayer? What the Church says, why AI prayers sound hollow, and how to humanize a draft so it sounds like you.";
const CBO = "https://catholicbibleonline.com/bible/";
const HUMANIZER = "https://aidetector365.com/ai-humanizer/";

type Section = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  ordered?: boolean;
  table?: { caption: string; headers: string[]; rows: string[][] };
  callout?: { label: string; text: string };
};

const SECTIONS: Section[] = [
  {
    id: "can-catholics-use-ai",
    heading: "Can a Catholic use AI to write a prayer?",
    paragraphs: [
      "Yes, as a tool. The Catechism defines prayer as \"the raising of one's mind and heart to God\" (CCC 2559, quoting Saint John Damascene). What makes a prayer real is not who first put the words together but whether you mean them when you say them. Catholics pray borrowed words all the time: the [[/blog/our-father-prayer/|Our Father]] came from Jesus, the Psalms from ancient Israel, and most of our favorite prayers from saints who died centuries ago.",
      "A chatbot can help in the same limited way a prayer book does. It can suggest a structure, remind you of a Scripture verse, or give you a starting line when you are too tired or too upset to find words. What it cannot do is pray. Jesus warned against \"empty phrases\" heaped up for their own sake (" + `{{${CBO}matthew/6/|Matthew 6:7}}` + "), and that is exactly the risk with machine-written text: it is fluent, polished, and empty until you put yourself into it.",
      "The Church's 2025 note on artificial intelligence, Antiqua et Nova, from the Dicastery for the Doctrine of the Faith and the Dicastery for Culture and Education, makes the same point at a larger scale: AI should serve human beings and human relationships, never replace them, and it should not be treated as if it were a person. Your relationship with God is the most personal relationship you have. Let the software stay in the role of a pencil.",
    ],
    callout: {
      label: "When you have no words at all",
      text: "Saint Paul admits that \"we do not know how to pray as we ought,\" and that the Spirit himself intercedes for us (" + `{{${CBO}romans/8/|Romans 8:26}}` + "). On the hardest days, a single honest sentence — \"Lord, help\" — is a better prayer than a perfect paragraph you did not write.",
    },
  },
  {
    id: "why-ai-prayers-sound-hollow",
    heading: "Why AI-written prayers sound hollow",
    paragraphs: [
      "Ask any chatbot for \"a prayer for my mother's surgery\" and you will get something that sounds like a greeting card. Once you know the patterns, you hear them everywhere.",
    ],
    list: [
      "Stock openings: \"Heavenly Father, we humbly come before You today with grateful hearts.\"",
      "Filler words: journey, embrace, tapestry, navigate, season, beautiful, profound.",
      "Groups of three: \"strength, comfort, and peace,\" \"guide, protect, and bless.\"",
      "No names, no places, no details — the same prayer could be for anyone.",
      "Sentences that are all the same length, with the same rising rhythm.",
      "Vague theology: \"the universe,\" \"positive energy,\" or a promise that God will certainly heal, which no Catholic prayer can promise.",
      "Doctrinal slips: asking Mary to grant graces by her own power instead of asking her intercession, or dropping Christ from a prayer addressed to the Father.",
    ],
    callout: {
      label: "Check the theology, not just the style",
      text: "Chatbots are trained on every kind of Christian and non-Christian text. A prayer can sound lovely and still say something a Catholic does not believe. If a line touches on Mary, the saints, the Eucharist, or the dead, check it against the Catechism or ask a priest.",
    },
  },
  {
    id: "how-to-humanize-an-ai-prayer",
    heading: "How to humanize an AI-drafted prayer, step by step",
    paragraphs: [
      "The goal is not to fool anyone. It is to turn a generic draft into words you can actually pray. These seven steps take about ten minutes.",
    ],
    ordered: true,
    list: [
      "Write your intention first, in plain words, before you open any tool. \"Mom has surgery Thursday. I'm scared. I want her to have peace.\" That sentence is already a prayer, and it keeps the draft honest.",
      "Ask for a short draft in a real Catholic shape. The Church's own collects follow a simple pattern: address God, recall something he has done, ask, and close through Christ. A prompt like \"a five-sentence Catholic prayer in the form of a collect\" gives a far better starting point than \"a beautiful prayer.\"",
      "Strip the stock phrases. Cross out every \"journey,\" \"embrace,\" and triple list. If the draft is long or stiff, a free tool such as the " + `{{${HUMANIZER}|AI Humanizer from AIDetector365}}` + " can do a quick first pass, simplifying vocabulary and shortening sentences, so you can see the plain bones of the prayer before you edit it yourself.",
      "Add the specifics only you know: the person's name, the hospital, the job interview at nine, the argument you regret. God already knows them, but saying them makes the prayer yours.",
      "Check the doctrine. Make sure the prayer asks rather than demands, leaves room for God's will, and speaks of Mary and the saints as intercessors.",
      "Read it aloud, slowly, as if you were in front of the tabernacle. Anything you would be embarrassed to say to a friend, cut.",
      "Rewrite at least one line by hand. Even a single sentence in your own words changes how the whole prayer feels when you pray it.",
    ],
  },
  {
    id: "before-and-after",
    heading: "Before and after: what a humanized prayer looks like",
    paragraphs: [
      "Here is a typical AI draft, line by line, next to a version a real person would pray. Notice that the edited lines are shorter, more concrete, and more honest.",
    ],
    table: {
      caption: "Typical AI prayer lines and a personal rewrite",
      headers: ["AI draft", "Humanized", "What changed"],
      rows: [
        ["\"Heavenly Father, we humbly come before You today with grateful hearts, embracing this beautiful journey of faith.\"", "\"Lord, thank you for today. I'm tired, but I'm here.\"", "Filler removed; an honest state of soul added."],
        ["\"Grant my beloved mother strength, healing, and comfort as she navigates this challenging season.\"", "\"Be with Mom on Thursday. Steady the surgeon's hands, and give her peace before they take her in.\"", "Name, day, and concrete request instead of a triple list."],
        ["\"May the universe align to bring forth abundant blessings.\"", "\"Your will be done.\"", "Vague language replaced with the words of the Our Father."],
        ["\"Blessed Mother, grant me the miracle I seek.\"", "\"Holy Mary, Mother of God, pray for her.\"", "Mary's role corrected: Catholics ask her intercession."],
        ["\"In Your holy name we pray, Amen.\"", "\"Through Christ our Lord. Amen.\"", "The traditional Catholic conclusion."],
      ],
    },
    callout: {
      label: "Scripture is full of honest, unpolished prayer",
      text: "Hannah prayed so intensely that the priest thought she was drunk (" + `{{${CBO}1-samuel/1/|1 Samuel 1}}` + "). The psalmist asked, \"How long, O Lord?\" (" + `{{${CBO}psalms/13/|Psalm 13}}` + "). The tax collector said only, \"God, be merciful to me a sinner\" (" + `{{${CBO}luke/18/|Luke 18:13}}` + "). None of them would pass a style checker. All of them were heard.",
    },
  },
  {
    id: "what-else-you-can-humanize",
    heading: "Prayer intentions, cards, and reflections: what else you can humanize",
    paragraphs: [
      "The same method works for almost anything you write about faith. A few common cases:",
    ],
    list: [
      "Prayers of the Faithful. If you write the Universal Prayer for your parish, keep the order the Missal gives: for the Church, for public authorities and the salvation of the world, for those in need, and for the local community (General Instruction of the Roman Missal 70). Short, concrete intentions are easier for the congregation to pray.",
      "Sympathy and condolence cards. An AI draft is a starting point; one real memory of the person who died is worth more than any polished paragraph. See [[/blog/how-to-pray-for-someone-catholic/|how to pray for someone]].",
      "Baptism, First Communion, and Confirmation cards. Name the sacrament and the child, and add one line about what you hope for them.",
      "Prayer journals and retreat notes. If you use AI to summarize a reflection, rewrite the conclusion yourself; that is where the prayer happens.",
      "Parish newsletters and social posts. A humanizer can clean up a stiff draft, but the person who signs it should read and approve every line.",
    ],
    callout: {
      label: "Honesty first",
      text: "The Catechism calls truthfulness a virtue that shows itself in speech and action (CCC 2468). Using a tool to polish your own prayer or card is fine. Using one to pass off machine-written work as your own — a school assignment, a contest entry, a paper for a theology class — is not. Make the words sound like you because they are yours.",
    },
  },
  {
    id: "what-not-to-rewrite",
    heading: "Prayers you should not rewrite",
    paragraphs: [
      "Some prayers belong to the whole Church, and their words matter. Do not run them through any tool or \"improve\" them: the Our Father, the [[/blog/hail-mary-prayer/|Hail Mary]], the Glory Be, the Creed, the words of the Mass, and the formulas of the sacraments. The prayers of the Rosary are prayed the same way by Catholics everywhere, which is part of their power ([[/blog/how-to-pray-the-rosary-step-by-step/|how to pray the Rosary]]).",
      "Approved novenas and litanies should also be prayed as published. If you want something more personal, add your own intention before or after the set text rather than changing it. The [[/blog/daily-catholic-prayers/|daily Catholic prayers guide]] collects the traditional texts in one place.",
    ],
  },
  {
    id: "what-ai-cannot-do",
    heading: "What AI cannot do for your prayer life",
    paragraphs: [
      "No tool can sit in silence before God for you, receive the Eucharist, or confess your sins. The heart of Catholic prayer is not composition but attention: [[/blog/lectio-divina/|Lectio Divina]] with the Gospel, the Rosary, a few quiet minutes in the [[/blog/morning-prayer-catholic/|morning]], and Sunday Mass.",
      "Use AI the way you would use a good prayer book or a [[/blog/best-catholic-prayer-apps-2026/|Catholic prayer app]]: to get started, not to finish. If you notice that you are spending more time polishing prayers than praying them, close the laptop and say the simplest prayer you know.",
    ],
  },
];

const SAMPLE_PRAYER = `Lord Jesus, you are the Word made flesh.
Before I write or speak today, let my words be true.
When I borrow words, help me mean them;
when I have no words, teach me to be still with you.
Keep me honest in what I make,
and let everything I write lead me, and others, closer to you.
Through Christ our Lord. Amen.`;

const FAQS = [
  {
    question: "Is it wrong for a Catholic to use AI to write a prayer?",
    answer: "No. Prayer is the raising of the mind and heart to God (CCC 2559), and Catholics often pray words written by others. Use AI as a starting point, check the doctrine, and make the words your own before you pray them.",
  },
  {
    question: "Does God hear a prayer written by AI?",
    answer: "God hears the person, not the software. A prayer you sincerely mean is heard whether the words came from a saint, a prayer book, or a draft you edited. A prayer you do not mean is empty no matter who wrote it.",
  },
  {
    question: "Why do AI-generated prayers sound fake?",
    answer: "They lean on stock phrases (journey, embrace, season), lists of three, identical sentence lengths, and no specific names or situations. Removing those patterns and adding real details makes a prayer sound human.",
  },
  {
    question: "How do I humanize an AI prayer?",
    answer: "Write your intention first, ask for a short draft in a Catholic form, strip the filler (a free AI humanizer can do a first pass), add names and details, check the doctrine, read it aloud, and rewrite at least one line by hand.",
  },
  {
    question: "What does the Catholic Church say about artificial intelligence?",
    answer: "The 2025 note Antiqua et Nova teaches that AI is a human tool that should serve people and relationships, not replace them, and warns against treating it as a person. The Church encourages its ethical use, not its rejection.",
  },
  {
    question: "Can I use AI to write the Prayers of the Faithful?",
    answer: "As a draft, yes. Keep the order in the General Instruction of the Roman Missal (no. 70): the Church, public authorities and the world, those in need, and the local community. Have the person responsible for the liturgy review the final text.",
  },
  {
    question: "Should I rewrite the Our Father or Hail Mary in my own words?",
    answer: "No. Set prayers of the Church, the words of the Mass, and sacramental formulas should be prayed as given. Add a personal intention before or after them instead.",
  },
  {
    question: "Is it honest to use an AI humanizer?",
    answer: "Polishing your own prayer, card, or newsletter is fine. Using a humanizer to pass off machine-written work as your own in school or a contest is dishonest and goes against the virtue of truthfulness (CCC 2468).",
  },
];

const RELATED = [
  { href: "/blog/daily-catholic-prayers/", label: "Daily Catholic prayers: a simple routine" },
  { href: "/blog/how-to-pray-for-someone-catholic/", label: "How to pray for someone" },
  { href: "/blog/lectio-divina/", label: "Lectio Divina: praying with Scripture" },
  { href: "/blog/best-catholic-prayer-apps-2026/", label: "The best Catholic prayer apps" },
  { href: "/blog/emojis-for-talking-about-god/", label: "Emojis for talking about God" },
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

export default function AiWrittenPrayersGuide() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="ai prayer, can ai write a prayer, ai prayer generator catholic, humanize ai prayer, ai written prayer, catholic church artificial intelligence, antiqua et nova, prayers of the faithful ai"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-01" dateModified="2026-11-01" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "AI-Written Prayers", url: PAGE_URL },
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
              <span className="text-text">AI-Written Prayers</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Living</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" aria-hidden="true" />November 1, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" aria-hidden="true" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">{H1}</h1>
              <p className="text-xl text-text-muted leading-relaxed">
                More Catholics are asking a chatbot for help when they cannot find the words to pray. That can be a good start — as long as the prayer you end up praying is really yours. Here is what the Church says, why AI prayers sound hollow, and how to turn a draft into something you can mean.
              </p>
            </header>
            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <PenLine className="w-24 h-24 text-sky-700" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">
                Yes, a Catholic can use AI to help write a prayer, the same way you might use a prayer book: as a starting point. Prayer is the raising of the mind and heart to God (CCC 2559), so the words only become prayer when you mean them. To make an AI draft personal, write your intention first, remove the stock phrases, add real names and details, check the doctrine, and read it aloud before you pray it. Never rewrite the Church's set prayers, such as the Our Father or the words of the Mass.
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
                <li><a href="#prayer-before-writing" className={cboLinkClass}>A prayer before you write</a></li>
              </ol>
            </nav>

            {SECTIONS.map((section) => {
              const ListTag = section.ordered ? "ol" : "ul";
              return (
                <section key={section.id} aria-labelledby={section.id}>
                  <h2 id={section.id} className="scroll-mt-24 font-display text-2xl font-bold text-text mt-10 mb-4">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-text leading-relaxed mb-6">
                      <Rich text={paragraph} />
                    </p>
                  ))}
                  {section.list && (
                    <ListTag className={`${section.ordered ? "list-decimal" : "list-disc"} pl-5 space-y-3 text-text leading-relaxed mb-6`}>
                      {section.list.map((item) => (
                        <li key={item.slice(0, 48)}><Rich text={item} /></li>
                      ))}
                    </ListTag>
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
              );
            })}

            <h2 id="prayer-before-writing" className="scroll-mt-24 font-display text-2xl font-bold text-text mt-10 mb-4">A prayer before you write</h2>
            <p className="text-text leading-relaxed mb-4">
              This prayer was written for this guide, by a person. Pray it before you sit down to write a prayer, a card, or a reflection.
            </p>
            <div className="mb-8 rounded-xl border border-amber-200/80 bg-amber-50/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Original prayer from Guide Catholic</p>
              <p className="whitespace-pre-line text-text leading-relaxed font-medium">{SAMPLE_PRAYER}</p>
              <CopyPrayerButton text={SAMPLE_PRAYER} />
            </div>

            <DailyPrayersHubLink />

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
