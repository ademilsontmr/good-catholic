import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "src/pages/blog");

const esc = (s) =>
  s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ").replace(/'/g, "&apos;");

const articles = [
  {
    component: "NovenaForAnxietyCatholic", slug: "novena-for-anxiety-catholic", icon: "Brain", bg: "bg-blue-100", iconColor: "text-blue-600",
    breadcrumb: "Novena for Anxiety", title: "Novena for Anxiety: 9-Day Catholic Prayer for Peace & Calm",
    desc: "Novena for anxiety — 9-day Catholic prayer for peace, calm, and trust when worry overwhelms you. Full prayer text, step-by-step guide, and FAQs.",
    keywords: "novena for anxiety, catholic prayer for anxiety 9 days, novena peace calm, prayer for worry catholic",
    directAnswer: "A novena for anxiety is a nine-day Catholic prayer asking Christ, Mary, and Saint Dymphna for peace when worry overwhelms you. Pray once daily for nine consecutive days, naming your intention and combining prayer with professional care when needed.",
    who: "Catholics facing anxiety turn first to Christ, who calmed the storm on the Sea of Galilee. Many also invoke Mary as Comforter of the Afflicted and Saint Dymphna — patroness of those with mental and nervous disorders — whose shrine in Massillon, Ohio, draws thousands of American pilgrims each year. Anxiety is not weak faith; it is a human condition Christ entered in the Incarnation.",
    why: "Anxiety disorders affect tens of millions of Americans. A novena creates structure: nine days of returning to God with the same intention. Prayer does not replace therapy or medication — grace works through natural means — but sustained prayer can bring the peace that surpasses understanding (Philippians 4:7).",
    steps: ["Name your intention on day one — financial worry, health fears, or social anxiety.", "Choose a consistent time each day.", "Pray for nine consecutive days; resume if you miss a day.", "Combine with therapy or medical care when needed.", "Surrender the outcome — ask for peace, not only changed circumstances."],
    prayerTitle: "Daily Novena Prayer for Anxiety",
    prayer: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Lord Jesus, you calmed the storm and told your disciples not to be afraid. I bring my anxiety before you today: [name your intention]. Grant me the peace that surpasses understanding. Quiet my racing heart and help me trust you one day at a time. Mary, Comforter of the Afflicted, and Saint Dymphna, pray for me. Sacred Heart of Jesus, I place all my trust in you. Amen.",
    closing: "If anxiety is linked to a major decision, try a novena for clarity. For impossible situations, many Catholics turn to Saint Jude. Return to this prayer for nine days and let Christ carry what you cannot carry alone.",
    faqs: [
      ["Can a novena cure my anxiety disorder?", "A novena is persevering prayer, not a substitute for medical or psychological treatment. Many Catholics find spiritual peace through nine days of prayer; clinical anxiety often requires therapy or medication."],
      ["Which saints help with anxiety?", "Christ, Mary as Comforter of the Afflicted, Saint Dymphna, Saint Padre Pio, and Saint Teresa of Calcutta are commonly invoked for inner peace."],
      ["How long is this novena?", "Nine consecutive days at a consistent time. If you miss a day, resume rather than abandoning the novena."],
      ["Can I pray for someone else?", "Yes. Name the person and situation in your intention — parents often pray for anxious children."],
      ["When should I start?", "Any day — before a stressful event or whenever worry becomes overwhelming."],
      ["Should I also see a therapist?", "Yes when anxiety is severe or persistent. The Church teaches that prayer and responsible care belong together."],
    ],
  },
  {
    component: "StAnthonyNovenaLostThings", slug: "st-anthony-novena-lost-things", icon: "Search", bg: "bg-amber-100", iconColor: "text-amber-700",
    breadcrumb: "St. Anthony Novena for Lost Things", title: "St. Anthony Novena for Lost Things: 9-Day Prayer (Full Text)",
    desc: "St. Anthony Novena for lost things — 9-day Catholic prayer with full text to find missing items, keys, wallets, and documents.",
    keywords: "st anthony novena lost things, novena to find lost item, st anthony prayer 9 days, patron saint of lost things",
    directAnswer: "The St. Anthony novena is a nine-day Catholic prayer asking Saint Anthony of Padua to intercede for the return of lost items or peace of mind. Pray daily for nine days, search responsibly, and offer thanks when the item is found.",
    who: "Saint Anthony of Padua (1195–1231) was a Franciscan friar and Doctor of the Church, famed for preaching across Italy and France. Devotion to him for lost things arose when a novice stole his psalter and returned it after Anthony prayed. His feast is June 13 — among the most popular saint days in U.S. parishes.",
    why: "Lost keys, wallets, passports, or wedding rings trigger panic in millions of households. Catholics pray to Anthony not for magic but for intercession. Many find the item during the novena; others receive peace even if it is never recovered.",
    steps: ["Name the lost item specifically on day one.", "Begin any day, or nine days before June 13.", "Pray daily with the Sign of the Cross.", "Retrace steps and search while praying.", "Offer thanks or alms when the item is found."],
    prayerTitle: "St. Anthony Prayer for Lost Things",
    prayer: "St. Anthony, St. Anthony, please come around; something is lost and must be found. St. Anthony, perfect imitator of Jesus, who received from God the special power of restoring lost things, grant that I may find [what is lost]. At least restore peace of mind, which afflicts me more than the material loss. Through Christ our Lord. Amen.",
    closing: "For legal documents or deeper crises, combine this novena with professional help. When situations feel impossible, many also pray to Saint Jude. St. Anthony, pray for us.",
    faqs: [
      ["Why is Anthony patron of lost things?", "Tradition holds a novice stole his psalter and returned it after Anthony prayed — devotion spread from that story."],
      ["Must it be nine days?", "Nine days is classic; many pray once and find the item quickly. Use nine days for valuable or long-missing items."],
      ["Can I pray for someone else?", "Yes — for a child's backpack, spouse's wallet, or parent's hearing aids."],
      ["When is his feast day?", "June 13. Parishes bless St. Anthony's Bread and hold special Masses."],
      ["What if I never find it?", "The prayer asks for peace of mind even without recovery — that is itself a grace."],
      ["Is the rhyming prayer Catholic?", "Yes — the short rhyme and longer prayer are both widely used in U.S. Catholic devotion."],
    ],
  },
  {
    component: "NovenaForClarityCatholic", slug: "novena-for-clarity-catholic", icon: "Compass", bg: "bg-sky-100", iconColor: "text-sky-600",
    breadcrumb: "Novena for Clarity", title: "Novena for Clarity: 9-Day Catholic Prayer When You Need Direction",
    desc: "Pray the Novena for Clarity over 9 days — full Catholic prayer text, when to start, and how to ask God for direction in decisions, work, and relationships.",
    keywords: "novena for clarity, 9 day novena clarity, catholic prayer for direction, novena when confused, prayer for discernment novena",
    directAnswer: "A novena for clarity is nine days of prayer to the Holy Spirit for light in decisions — jobs, relationships, vocation, or health choices. Catholics pray daily, often with Confession and Mass, trusting clarity means knowing God's will rather than getting the answer they prefer.",
    who: "Catholics seek clarity from the Holy Spirit — the Spirit of wisdom and truth promised at Pentecost. Mary, Seat of Wisdom, and Saint Joseph (patron of workers and fathers) are often added for practical decisions. Discernment is a hallmark of Ignatian spirituality taught in U.S. colleges and parishes.",
    why: "Major decisions paralyze when every option seems equally risky. Nine days creates space to listen — journaling, spiritual direction, and silence — instead of reacting from fear. Clarity may confirm a hard path you did not want but can accept in peace.",
    steps: ["Name the decision on day one.", "Pray at the same time daily for nine days.", "Attend Mass and Confession if the choice is grave.", "Journal insights without forcing instant answers.", "Consult a priest or spiritual director for vocation or marriage decisions."],
    prayerTitle: "Daily Novena Prayer for Clarity",
    prayer: "Come, Holy Spirit, fill the hearts of your faithful. Send forth your Spirit and renew the face of the earth. O God, who taught the hearts of the faithful by the light of the Holy Spirit, grant that I may be truly wise about [your intention]. Give a mind enlightened by faith and courage to follow where you lead. Mary, Seat of Wisdom, pray for me. Amen.",
    closing: "Pair this novena with the Holy Spirit prayer for decisions. For anxiety about the outcome, see our novena for anxiety. Trust that God speaks through peace, not only through signs.",
    faqs: [
      ["How long is a novena for clarity?", "Nine consecutive days; some extend with a second novena if needed."],
      ["Which saint helps with clarity?", "The Holy Spirit first; also Saint Joseph, Saint Thomas Aquinas, and Mary, Seat of Wisdom."],
      ["Can I start any day?", "Yes — Pentecost season is popular but not required."],
      ["Is clarity getting what I want?", "No — clarity is knowing God's will and peace to accept it."],
      ["Should I use spiritual direction?", "Recommended for vocation, marriage, or major career changes."],
      ["Can I pray with my spouse?", "Yes — couples facing decisions often pray the same novena together."],
    ],
  },
  {
    component: "NovenaBeforeSurgeryCatholic", slug: "novena-before-surgery-catholic", icon: "HeartPulse", bg: "bg-rose-100", iconColor: "text-rose-600",
    breadcrumb: "Novena Before Surgery", title: "Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace",
    desc: "Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States.",
    keywords: "novena before surgery, catholic prayer before surgery, 9 day novena healing surgery, prayer for operation catholic",
    directAnswer: "A novena before surgery is nine days of Catholic prayer for the patient, medical team, and successful recovery. Start nine days before the operation if possible; receive Anointing of the Sick and Confession for serious procedures.",
    who: "Catholics invoke Christ the Divine Physician, Mary Health of the Sick, Saint Luke the evangelist-physician, Saint Peregrine (patron of cancer patients), and Saint Padre Pio for healing. Hospital chaplains across the U.S. offer sacraments before major operations.",
    why: "Surgery brings fear of pain, complications, or death. Nine days unite family prayer with medical expertise. The Church blesses anesthesia and surgery as good when used to heal — prayer sanctifies the wait before going under.",
    steps: ["Start nine days before surgery when the date is known.", "Ask the parish for Anointing of the Sick — not only for the dying.", "Family prays daily even if the patient is weak.", "Follow all pre-op medical instructions.", "Continue prayer through recovery."],
    prayerTitle: "Daily Novena Prayer Before Surgery",
    prayer: "Lord Jesus, Divine Physician, I entrust this surgery and recovery to you. Guide the hands of the medical team, calm my anxiety, and grant healing according to your holy will. Mary, Health of the Sick, Saint Luke, Saint Padre Pio, and Saint Peregrine, intercede for [name] and a successful operation. Amen.",
    closing: "Family members often pray this novena at the bedside. Combine with St. Padre Pio novena for healing. Offer Mass intentions for the patient's recovery.",
    faqs: [
      ["When should I start?", "Nine days before surgery; if sooner, pray daily until and after the procedure."],
      ["Can family pray for the patient?", "Yes — one of the most common intercessory novenas."],
      ["Should I receive Anointing?", "Yes for serious surgery or illness — it is for the seriously ill, not only the dying."],
      ["Which saints for surgery?", "Saint Luke, Saint Peregrine, Saint Padre Pio, and Mary Health of the Sick."],
      ["Does prayer replace medical care?", "No — follow doctors' orders; prayer complements medicine."],
      ["Can I pray after surgery too?", "Yes — extend prayer through rehabilitation."],
    ],
  },
  {
    component: "NovenaForFinancialHelpCatholic", slug: "novena-for-financial-help-catholic", icon: "DollarSign", bg: "bg-green-100", iconColor: "text-green-700",
    breadcrumb: "Novena for Financial Help", title: "Novena for Financial Help: 9-Day Catholic Prayer for Money & Debt",
    desc: "Novena for financial help — 9-day Catholic prayer for money, debt, and bills. Full prayer text, how to pray when struggling financially, and trust in God's providence.",
    keywords: "novena for financial help, catholic prayer for money, novena debt bills, prayer for financial problems catholic",
    directAnswer: "A novena for financial help is nine days of prayer asking God for providence amid debt, unemployment, or bills. Catholics often invoke Saint Joseph, Saint Matthew, and Christ — combining prayer with budgeting, honest work, and charity.",
    who: "Saint Joseph is patron of workers and the universal Church; Saint Matthew was a tax collector transformed by grace. Christ taught trust in the Father who feeds the birds (Matthew 6:26). Catholic Charities and St. Vincent de Paul assist millions of Americans in financial crisis.",
    why: "Money stress breaks sleep and marriages. A novena turns panic into daily surrender — not prosperity gospel, but trust that God provides through work, community, and prudence. Nine days remind you that you are not alone.",
    steps: ["Name the need — rent, debt, job, or business.", "Pray nine days; avoid superstition about 'magic money'.", "Contact Catholic Charities or parish St. Vincent de Paul if needed.", "Make a realistic budget with a counselor if possible.", "Give something small to the poor if you can — trust multiplies charity."],
    prayerTitle: "Daily Novena Prayer for Financial Help",
    prayer: "Heavenly Father, provider of all good things, I place my financial need before you: [intention]. Give me honest work, wise stewardship, and trust in your providence. Saint Joseph, guardian of the Holy Family, help me support those who depend on me. Saint Matthew, pray that I use money justly. Amen.",
    closing: "For employment, see the St. Joseph novena for employment. For housing, the St. Joseph novena for selling a house. Financial prayer must walk with responsible action.",
    faqs: [
      ["Will the novena make me rich?", "No — it asks for providence and peace, not a guarantee of wealth."],
      ["Which saint for money problems?", "Saint Joseph, Saint Matthew, and Saint Expeditus (urgent needs) — use Expeditus with caution and orthodox intent."],
      ["Can I pray while on public assistance?", "Yes — there is no shame in needing help; the Church supports both prayer and social aid."],
      ["Should I tell my priest?", "Optional but helpful — parishes often know resources."],
      ["Nine days only?", "Classic form is nine days; continue prayer as needed."],
      ["Is gambling a Catholic solution?", "No — the Church warns against gambling as a fix for financial problems."],
    ],
  },
];

// Load remaining from batch meta and add programmatically for brevity - extend array
const batchPath = path.join(process.cwd(), "scripts/batch-articles-meta.json");
const batch = JSON.parse(fs.readFileSync(batchPath, "utf8"));
const novenaBatch = batch.filter((a) => a.type === "novena");
const extraSlugs = new Set(articles.map((a) => a.slug));

const genericExpand = (meta) => ({
  component: meta.component,
  slug: meta.slug,
  icon: meta.icon,
  bg: meta.bg,
  iconColor: meta.iconColor,
  breadcrumb: meta.title.length > 42 ? meta.title.slice(0, 39) + "..." : meta.title.replace(/^St\. /, "").slice(0, 40),
  title: meta.title,
  desc: meta.desc + (meta.desc.endsWith(".") ? "" : ".") + " Full prayer text, step-by-step guide, and FAQs.",
  keywords: meta.keywords,
  directAnswer: `This ${meta.title.includes("Novena") ? "novena" : "nine-day prayer"} is a Catholic devotion prayed for nine consecutive days. ${meta.intro.charAt(0).toUpperCase() + meta.intro.slice(1)} Pray once daily, name your intention, and combine prayer with responsible action when medical, legal, or practical steps are needed.`,
  who: meta.intro.charAt(0).toUpperCase() + meta.intro.slice(1) + " Catholics across the United States pray this novena in parishes, homes, and online prayer groups, trusting in God's mercy and the intercession of the saints.",
  why: "Nine days of sustained prayer imitate the apostles waiting for Pentecost (Acts 1:14). Unlike a single hurried prayer, a novena builds trust and discipline — especially when the need is urgent or long-standing. The Church encourages novenas as persevering prayer, not as magic.",
  steps: [
    "Name your intention clearly on day one.",
    "Choose the same time each day for nine consecutive days.",
    "Begin with the Sign of the Cross; end with Glory Be if you wish.",
    "Combine prayer with practical steps — medical, legal, financial, or family action.",
    "Offer thanks when you receive grace, even if the answer differs from your first hope.",
  ],
  prayerTitle: "Daily Novena Prayer",
  prayer: meta.prayer || "Lord, hear my prayer for [intention]. Grant me your peace and wisdom according to your holy will. Amen.",
  closing: "If this need continues, you may repeat the novena or seek related devotions on Guide Catholic. Ask your parish priest for guidance on serious moral or sacramental questions.",
  faqs: [
    ["How many days is this novena?", "Nine consecutive days is the standard Catholic form."],
    ["Can I start on any day?", "Yes — some begin before a relevant saint's feast day but any day is valid."],
    ["Can someone pray the novena for me?", "Yes — family and friends often offer novenas for others by name."],
    ["Does prayer replace practical help?", "No — especially for legal, medical, or financial needs, prayer and action belong together."],
    ["What if I miss a day?", "Resume the next day; many Catholics complete nine days of prayer without strict calendar reset."],
    ["Is this approved by the Church?", "Private novenas with orthodox content are widely encouraged; they are not the same as liturgical sacraments."],
  ],
});

for (const meta of novenaBatch) {
  if (!extraSlugs.has(meta.slug)) {
    articles.push(genericExpand(meta));
    extraSlugs.add(meta.slug);
  }
}

// Additional thin novenas not in batch
const extras = [
  "NovenaForMarriageCatholic", "StMonicaNovenaForChildren", "StPadrePioNovenaHealing",
  "StRitaNovenaImpossibleCauses", "StJosephNovenaSellingHouse", "StJosephNovenaForEmployment",
  "UndoerOfKnotsNovenaGuide",
];
for (const comp of extras) {
  const f = path.join(outDir, `${comp}.tsx`);
  if (!fs.existsSync(f)) continue;
  const slugMatch = fs.readFileSync(f, "utf8").match(/canonical" href="https:\/\/guidecatholic.com\/blog\/([^/]+)\//);
  if (!slugMatch || extraSlugs.has(slugMatch[1])) continue;
  const titleMatch = fs.readFileSync(f, "utf8").match(/<title>([^|]+)/);
  const descMatch = fs.readFileSync(f, "utf8").match(/name="description" content="([^"]+)"/);
  const iconMatch = fs.readFileSync(f, "utf8").match(/Clock, (\w+) }/);
  const bgMatch = fs.readFileSync(f, "utf8").match(/aspect-video (\S+)/);
  const colorMatch = fs.readFileSync(f, "utf8").match(/w-24 h-24 ([^"\s]+)/);
  articles.push(genericExpand({
    component: comp,
    slug: slugMatch[1],
    title: titleMatch ? titleMatch[1].trim() : comp,
    desc: descMatch ? descMatch[1] : "",
    keywords: "",
    icon: iconMatch ? iconMatch[1] : "Heart",
    bg: bgMatch ? bgMatch[1] : "bg-accent/10",
    iconColor: colorMatch ? colorMatch[1] : "text-accent",
    intro: descMatch ? descMatch[1].split("—")[0] : "This novena helps Catholics pray for nine days.",
    prayer: "Lord, hear my prayer for [intention]. Mary and all the saints, intercede for me according to God's will. Amen.",
  }));
}

function generate(a) {
  const faqBlock = a.faqs
    .map(([q, ans]) => `              { question: "${esc(q)}", answer: "${esc(ans)}" }`)
    .join(",\n");
  const stepsBlock = a.steps
    .map((s, i) => {
      const parts = s.split(" — ");
      const strong = parts[0].includes(":") ? parts[0].split(":")[0] + ":" : parts[0].split(" ")[0] + " " + (parts[0].split(" ")[1] || "");
      const rest = s.replace(/^[^:]+:\s*/, "").replace(/^\S+\s+\S+\s*/, "");
      return `                <li><strong>${esc(parts[0].includes(":") ? parts[0] : strong.trim())}</strong>${parts[0].includes(":") ? " " + esc(parts[0].split(":").slice(1).join(":").trim()) : rest ? " — " + esc(s.replace(/^[^—]+—\s*/, "")) : ""}</li>`;
    })
    .join("\n");

  // Simpler steps rendering
  const stepsHtml = a.steps
    .map((s) => {
      const idx = s.indexOf(" — ");
      if (idx > 0) {
        const head = s.slice(0, idx);
        const tail = s.slice(idx + 3);
        return `                <li><strong>${esc(head)}</strong> — ${esc(tail)}</li>`;
      }
      const colon = s.indexOf(". ");
      if (colon > 0 && colon < 40) {
        return `                <li><strong>${esc(s.slice(0, colon + 1))}</strong> ${esc(s.slice(colon + 2))}</li>`;
      }
      return `                <li>${esc(s)}</li>`;
    })
    .join("\n");

  return `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ${a.icon} } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ${a.component}() {
  return (
    <>
      <Helmet>
        <title>${esc(a.title)} | Guide Catholic</title>
        <meta name="description" content="${esc(a.desc)}" />
        <meta name="keywords" content="${esc(a.keywords)}" />
        <link rel="canonical" href="https://guidecatholic.com/blog/${a.slug}/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="${esc(a.title)}" description="${esc(a.desc)}" url="https://guidecatholic.com/blog/${a.slug}/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "${esc(a.breadcrumb)}", url: "https://guidecatholic.com/blog/${a.slug}/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">${esc(a.breadcrumb)}</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">${esc(a.title)}</h1>
              <p className="text-xl text-text-muted leading-relaxed">${esc(a.desc)}</p>
            </header>
            <div className="aspect-video ${a.bg} rounded-2xl flex items-center justify-center mb-10"><${a.icon} className="w-24 h-24 ${a.iconColor}" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">${esc(a.directAnswer)}</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Do Catholics Pray To?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${a.slug}">${esc(a.who)}</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${a.slug}">A novena is a nine-day prayer rooted in the time the apostles and Mary spent in prayer between the Ascension and Pentecost (Acts 1:14). The word comes from the Latin <em>novem</em>, meaning nine. Unlike a single spontaneous prayer, a novena builds sustained trust over consecutive days.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray This Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${a.slug}">${esc(a.why)}</LinkedText>

              <QuizCTA title="How deep is your Catholic faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
${stepsHtml}
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">${esc(a.prayerTitle)}</h3>
                <p className="text-text italic leading-relaxed text-sm">${esc(a.prayer)}</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${a.slug}">${esc(a.closing)}</LinkedText>
            </div>
            <BlogFAQ faqs={[
${faqBlock},
            ]} />
            <RelatedArticles currentSlug="${a.slug}" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to Catholic prayer and devotion.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
`;
}

let count = 0;
for (const a of articles) {
  fs.writeFileSync(path.join(outDir, `${a.component}.tsx`), generate(a));
  console.log("Expanded", a.component);
  count++;
}
console.log("Done:", count, "novena articles");
