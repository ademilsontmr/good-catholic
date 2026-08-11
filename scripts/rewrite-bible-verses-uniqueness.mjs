/**
 * Rewrite bible-verses-unique.json so every page has distinct copy
 * (no shared bridge/mid/extra title templates).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const topics = JSON.parse(fs.readFileSync(path.join(__dirname, "bible-verses-topics-data.json"), "utf8"));
const unique = JSON.parse(fs.readFileSync(path.join(__dirname, "bible-verses-unique.json"), "utf8"));

function themeOf(t) {
  const map = {
    "encouraging-bible-verses": "Encouragement",
    "inspirational-bible-verses": "Inspiration",
    "powerful-bible-verses": "Spiritual Power",
    "short-bible-verses-about-strength": "Short Strength Lines",
    "short-bible-verses-about-love": "Short Love Lines",
    "bible-verses-for-a-broken-heart": "a Broken Heart",
    "bible-verses-for-anxiety-and-fear": "Anxiety and Fear",
    "bible-verses-for-strength-during-hard-times": "Strength in Hard Times",
    "bible-verses-for-healing-and-recovery": "Healing and Recovery",
    "bible-verses-for-difficult-times": "Difficult Times",
    "bible-verses-for-new-beginnings": "New Beginnings",
    "bible-verses-about-gods-love": "God's Love",
    "bible-verses-about-trusting-god": "Trusting God",
    "bible-verses-about-gods-plan": "God's Plan",
  };
  if (map[t.slug]) return map[t.slug];
  return t.keyword
    .replace(/^Short Bible Verses About /i, "")
    .replace(/^Bible Verses About /i, "")
    .replace(/^Bible Verses for /i, "")
    .replace(/^(Encouraging|Inspirational|Powerful) Bible Verses$/i, "$1");
}

const bridges = {
  "bible-verses-about-anxiety":
    "Nighttime spirals, Sunday distraction, and dread before appointments are common confession topics in U.S. parishes. These verses train the anxious mind to pray with thanksgiving instead of rehearsing catastrophe.",
  "bible-verses-about-strength":
    "Catholic strength looks like fidelity under fatigue: the dad who still leads prayer, the nurse who stays kind on a double shift, the convert who returns to Confession after falling. These verses name the Source of that endurance.",
  "bible-verses-about-love":
    "Wedding readings get the headlines, but 1 Corinthians 13 is also a daily examination for spouses, parents, and parish volunteers. Catholic love wills the good of the other — even when feelings cool.",
  "bible-verses-about-hope":
    "Hope is not optimism that everything will be easy. It is the theological virtue that trusts God's promises when a diagnosis, delay, or unanswered prayer makes the future look blank.",
  "bible-verses-about-healing":
    "Healing in Catholic life is sacramental and practical: Anointing of the Sick, prayer of the faithful, and competent medical care. These verses walk with patients, caregivers, and anyone begging for restoration.",
  "bible-verses-about-faith":
    "Faith is not a mood. Hebrews defines it as assurance of things hoped for — the kind of trust that still shows up for Sunday Mass after a dry week of prayer.",
  "bible-verses-about-peace":
    "Peace in Scripture is shalom: right order with God, neighbor, and self. It is deeper than a quiet room; it is Christ saying \"do not be afraid\" while the storm still blows.",
  "bible-verses-about-depression":
    "Depression can mute joy and make prayer feel impossible. The psalms give language for darkness without pretending it is light. Use these verses alongside pastoral and clinical care.",
  "bible-verses-about-fear":
    "Fear shows up before surgeries, job interviews, and hard conversations at the kitchen table. Scripture does not mock fear; it relocates it under God's presence.",
  "bible-verses-about-protection":
    "Parents praying over sleeping children, travelers before flights, and soldiers before deployment all reach for protection psalms. God is not a lucky charm — He is a shield who walks with His people.",
  "bible-verses-about-forgiveness":
    "Forgiveness is the hardest Christian work for many Catholics: releasing a debt without rewriting history. These verses keep Confession and charity from becoming slogans.",
  "bible-verses-about-prayer":
    "Prayer is the oxygen of Catholic life — from whispered aspirations in traffic to the Liturgy of the Hours. These verses teach how to ask, listen, and persist.",
  "bible-verses-about-family":
    "Family holiness is built in dishwashers, carpools, and awkward dinner conversations. Scripture blesses households that choose fidelity over perfection.",
  "bible-verses-about-marriage":
    "Catholic marriage is a covenant, not a contract. These verses sustain spouses through romance, conflict, infertility, blended households, and ordinary Tuesday evenings.",
  "bible-verses-about-friendship":
    "True friendship is rare and holy: Jonathan and David, Christ calling disciples friends. These verses help Catholics choose companions who lead toward virtue.",
  "bible-verses-for-anxiety-and-fear":
    "Anxiety and fear often arrive as a pair — the body races, the mind invents disasters. This page gathers verses that slow both by returning the heart to God's nearness.",
  "bible-verses-for-strength-during-hard-times":
    "Hard seasons reveal whether our strength was willpower or grace. These verses are for layoffs, caregiving, and months when Mass is the only steady thing left.",
  "short-bible-verses-about-strength":
    "Sometimes you need one line you can memorize before a meeting or a medical scan. These short strength verses fit on a note card and in a whispered prayer.",
  "short-bible-verses-about-love":
    "Short love verses travel well: texts to a spouse, cards for Confirmation, notes in a lunchbox. Brief lines still carry the weight of charity.",
  "encouraging-bible-verses":
    "Encouragement is a corporal and spiritual work of mercy in miniature. Share these verses with someone who needs a lift — including yourself on a heavy Monday.",
  "inspirational-bible-verses":
    "Inspiration without conversion fades by lunchtime. These verses aim higher: they stir the will toward holiness, vocation, and courageous charity.",
  "powerful-bible-verses":
    "Power in Scripture is God's power made perfect in weakness. These verses are \"powerful\" because they change how we live, not because they sound dramatic.",
  "bible-verses-for-difficult-times":
    "Difficult times strip away the illusion of control. The Word meets Catholics in hospital corridors, empty cribs, and silent kitchens after bad news.",
  "bible-verses-for-healing-and-recovery":
    "Recovery is rarely linear — whether from surgery, addiction, or grief. These verses accompany the long middle, not only the dramatic miracle stories.",
  "bible-verses-for-sleep":
    "Insomnia turns bedrooms into battlefields. Night Prayer and a few trusted verses can retrain a restless mind to entrust the day to God.",
  "bible-verses-for-a-broken-heart":
    "Heartbreak after a breakup, betrayal, or dashed hope needs more than platitudes. Scripture names the wound and points toward the Sacred Heart who knows rejection.",
  "bible-verses-for-grief":
    "Grief belongs at the funeral, at the empty chair at Thanksgiving, and in the quiet months after everyone else \"moves on.\" These verses keep mourning Christian.",
  "bible-verses-for-stress":
    "Stress piles up in inboxes, calendars, and unpaid bills. These verses help Catholics interrupt the rush with trust before burnout becomes a habit.",
  "bible-verses-for-success":
    "Catholic success is measured by fidelity and charity, not only promotions. These verses reorder ambition under God's will.",
  "bible-verses-for-new-beginnings":
    "New jobs, new cities, RCIA starts, and post-Confession restarts all need courage. Scripture blesses beginnings without pretending they are easy.",
  "bible-verses-for-mothers":
    "Motherhood stretches the body and the prayer life — pregnancy, adoption, spiritual motherhood, and the ache of waiting. These verses honor that vocation.",
  "bible-verses-for-fathers":
    "Fatherhood asks for presence more than perfection: leading prayer, admitting fault, protecting the vulnerable. These verses form men for that call.",
  "bible-verses-for-children":
    "Children memorize what they hear at bedtime. Short, vivid verses plant faith early — and remind parents that formation starts at home.",
  "bible-verses-for-women":
    "Catholic women live vocation in countless forms: single, married, consecrated, widowed. These verses speak dignity, courage, and discipleship.",
  "bible-verses-for-men":
    "Catholic manhood is not stoicism; it is sacrificial love patterned on Christ. These verses call men to integrity at work, parish, and home.",
  "bible-verses-about-gods-love":
    "God's love is not a vague vibe — it is covenant fidelity revealed in Christ crucified and risen. These verses keep that love personal and costly.",
  "bible-verses-about-trusting-god":
    "Trust grows when control shrinks. Proverbs, Psalms, and the Gospels train Catholics to lean on Providence when plans collapse.",
  "bible-verses-about-gods-plan":
    "God's plan is wiser than our five-year spreadsheets. These verses invite surrender without passivity — cooperation with grace in real decisions.",
  "bible-verses-about-happiness":
    "The Beatitudes redefine happiness as blessedness: poverty of spirit, mercy, and purity of heart. Joy follows holiness more than comfort.",
  "bible-verses-about-life":
    "Life is gift from conception to natural death, and every ordinary day is material for sanctity. These verses reclaim purpose beyond productivity.",
};

const mids = {
  "bible-verses-about-anxiety":
    "Philippians 4 does not say \"pretend you are fine.\" It says bring everything to God — with thanks — and receive a peace that guards the heart.",
  "bible-verses-about-strength":
    "If Philippians 4:13 is your favorite, keep 2 Corinthians 12:9 beside it. Strength without humility becomes a slogan; grace in weakness becomes discipleship.",
  "bible-verses-about-love":
    "John 15 sets the measure: love looks like the Cross. If your definition of love never costs anything, it is not yet the charity Christ commands.",
  "bible-verses-about-hope":
    "Hebrews calls hope an anchor. Anchors do not remove storms; they keep the ship from drifting — which is why Romans 8 ties hope to patience.",
  "bible-verses-about-healing":
    "James 5 is the biblical root of Anointing of the Sick. Ask your parish for the sacrament when illness is serious; do not wait until the last hour out of fear.",
  "bible-verses-about-faith":
    "Romans 10 reminds us faith comes through hearing. Reading these verses aloud — even alone — is already a small act of belief.",
  "bible-verses-about-peace":
    "Christ's peace is not the world's ceasefire. It can coexist with unfinished conflict while the heart rests in obedience.",
  "bible-verses-about-depression":
    "Psalm 42 gives permission to be honest: \"Why are you cast down, O my soul?\" Honesty before God is already prayer.",
  "bible-verses-about-fear":
    "\"Do not fear\" appears again and again because fear is normal. The command is not denial — it is an invitation to look at Who is with you.",
  "bible-verses-about-protection":
    "Psalm 91 is powerful — and misused when treated like a force field. Pray it as trust, then take prudent steps: seatbelts, wise friends, healthy boundaries.",
  "bible-verses-about-forgiveness":
    "Matthew 18 ties forgiveness to our own need for mercy. The Our Father makes the link unavoidable every time we pray it.",
  "bible-verses-about-prayer":
    "Jesus taught a short prayer, not a performance. If you feel stuck, return to the Our Father slowly and mean each petition.",
  "bible-verses-about-family":
    "Joshua's \"as for me and my house\" is a household creed. Start smaller than you think: one shared Grace before meals this week.",
  "bible-verses-about-marriage":
    "Ephesians 5 is mutual self-gift, not domination. Spouses who pray these verses together often find conflict softens into dialogue.",
  "bible-verses-about-friendship":
    "Sirach warns that a faithful friend is a sturdy shelter. Choose companions who will drive you to Mass, not away from virtue.",
  "bible-verses-for-anxiety-and-fear":
    "Pair a fear verse with a body practice: slow breathing while whispering the line. Grace and the nervous system are not enemies.",
  "bible-verses-for-strength-during-hard-times":
    "Isaiah 40 is for people who have already collapsed once. Waiting on the Lord is active trust, not spiritual laziness.",
  "short-bible-verses-about-strength":
    "Memorization works best with rhythm: say the verse walking to the car, then again at the door. Short lines stick when the body moves.",
  "short-bible-verses-about-love":
    "A short verse on a sticky note can redirect a sharp reply before it leaves your mouth. That is charity in real time.",
  "encouraging-bible-verses":
    "Encouragement is incomplete until it becomes action. After you read, send one verse to someone who is struggling this week.",
  "inspirational-bible-verses":
    "Let inspiration lead to a concrete yes: volunteering, Confession, or a hard apology. Feeling moved is only the first mile.",
  "powerful-bible-verses":
    "The most powerful verses are often the quietest ones lived consistently — not the ones we quote for social media.",
  "bible-verses-for-difficult-times":
    "In hard seasons, one verse prayed poorly is better than ten skimmed. Slow down; God is not grading your eloquence.",
  "bible-verses-for-healing-and-recovery":
    "Recovery timelines belong to God and good medicine. These verses keep bitterness from rewriting the story of your body.",
  "bible-verses-for-sleep":
    "Psalm 4 and Night Prayer belong together. End the day with examen, then one verse — not another hour of scrolling.",
  "bible-verses-for-a-broken-heart":
    "A broken heart needs truth and tenderness. Avoid forcing \"closure\"; ask for the grace to love without bitterness.",
  "bible-verses-for-grief":
    "Jesus wept at Lazarus's tomb. Christian grief is not a failure of faith; it is love telling the truth about loss.",
  "bible-verses-for-stress":
    "Stress often signals overcommitment. Ask which duty is truly yours — and which you can entrust to God and others.",
  "bible-verses-for-success":
    "Before celebrating a win, ask whom it serves. Success ordered to charity becomes vocation; success ordered to ego becomes idolatry.",
  "bible-verses-for-new-beginnings":
    "New beginnings in Scripture often start with leaving something behind. Name what you must release to say yes to God.",
  "bible-verses-for-mothers":
    "Mary pondered things in her heart. Mothers need interior space too — even ten quiet minutes with one verse counts.",
  "bible-verses-for-fathers":
    "St. Joseph protected without needing the spotlight. Fatherhood verses call men to quiet courage more than public applause.",
  "bible-verses-for-children":
    "Repeat verses playfully: at breakfast, in the car, before bed. Children learn Scripture the way they learn songs.",
  "bible-verses-for-women":
    "From Deborah to Mary Magdalene, Scripture honors women's courage. Let these verses affirm dignity without worldly scripts.",
  "bible-verses-for-men":
    "Real strength includes tears, Confession, and asking for help. These verses confront both passivity and false toughness.",
  "bible-verses-about-gods-love":
    "Romans 8 insists nothing can separate us from the love of God in Christ. Read that when shame tries to rewrite your identity.",
  "bible-verses-about-trusting-god":
    "Trust is practiced in small delays before big crises. Start by surrendering today's schedule without cynicism.",
  "bible-verses-about-gods-plan":
    "Jeremiah 29 was spoken to exiles, not influencers. Apply it as providence, not as a blank check for every dream.",
  "bible-verses-about-happiness":
    "Beatitude happiness can look like mourning and meekness. If your joy depends on comfort alone, these verses will stretch you.",
  "bible-verses-about-life":
    "Christ came that we may have life abundantly — not merely longer hours, but deeper communion with God.",
};

const saints = [
  ["St. Thérèse of Lisieux", "She teaches the little way: small acts done with great love. Apply that to how you pray these verses — briefly, sincerely, repeatedly."],
  ["St. Augustine", "His restless heart found rest in God. Let that conversion story color how you read verses about desire and truth."],
  ["St. Teresa of Ávila", "She insisted God walks among the pots and pans. Bring these verses into chores, not only quiet chapels."],
  ["St. Francis de Sales", "Gentle firmness marked his direction of souls. Read Scripture without scruples — progress, not panic."],
  ["St. John of the Cross", "In dark nights, he trusted God beyond feelings. Useful when these verses feel dry yet necessary."],
  ["St. Josephine Bakhita", "She knew freedom in Christ after slavery. Her trust reframes verses about protection and dignity."],
  ["St. Joseph", "Silent fidelity protected the Holy Family. Let his example shape how you live verses on duty and care."],
  ["St. Monica", "Persistent tears and prayer converted a son. Her patience belongs beside verses on hope and perseverance."],
  ["St. Ignatius of Loyola", "Discernment of spirits helps you notice consolation and desolation while praying Scripture."],
  ["St. Edith Stein", "She united intellect and martyrdom. Let her courage deepen verses on truth and offering."],
];

const calloutStyles = [
  "mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl",
  "mb-8 p-6 bg-sky-50/80 border border-sky-200/60 rounded-xl",
  "mb-8 p-6 border-l-4 border-accent bg-background-muted/40 pl-6 py-5 rounded-r-xl",
  "mb-8 p-6 bg-rose-50/70 border border-rose-200/50 rounded-2xl",
  "mb-8 p-5 bg-background-muted/60 border border-border rounded-lg",
];

const badges = [
  "Bible & Faith",
  "Scripture Guide",
  "Catholic Life",
  "Prayer & Word",
  "Daily Discipleship",
];

const lectioTitles = [
  "A Four-Step Lectio for This Theme",
  "Pray the Page Like Lectio Divina",
  "Quick Lectio When You Have Ten Minutes",
  "How to Sit with One Verse Today",
  "From Reading to Response",
];

const habitIntros = [
  "Do not try every habit at once. Choose one for seven days, then add another if it helps.",
  "Treat these habits like training, not a guilt list. Start smaller than your enthusiasm wants.",
  "Pick the habit that matches your season — illness, parenting, or a heavy workload.",
  "Write the chosen habit on your calendar like any other appointment with God.",
  "If you miss a day, begin again without drama. Fidelity is built by returns.",
];

const firstNotes = [
  "Pray this verse once slowly before reading the rest of the list.",
  "Underline one phrase that names your situation most clearly.",
  "Read this first verse aloud — hearing Scripture changes how it lands.",
  "Pause after this verse and tell God one honest sentence.",
  "Save this reference on your phone before you continue scrolling the page.",
];

function ctaFor(theme, i) {
  const templates = [
    `Let verses on ${theme} shape your next step`,
    `Grow Catholic habits around ${theme}`,
    `Turn reading on ${theme} into lived prayer`,
    `Take one faithful step with ${theme} today`,
    `Build a prayer life that holds ${theme}`,
    `Bring ${theme} from the page into your week`,
    `Practice ${theme} with Mass, Confession, and Scripture`,
    `Keep ${theme} close when life gets loud`,
  ];
  return templates[i % templates.length];
}

for (let i = 0; i < topics.length; i++) {
  const t = topics[i];
  const u = unique[t.slug];
  if (!u) throw new Error("missing " + t.slug);
  const theme = themeOf(t);
  const first = t.sections?.[0]?.verses?.[0];

  u.bridge = bridges[t.slug] || u.bridge;
  u.mid = mids[t.slug] || u.mid;

  // Unique practice / habit titles already partly set; harden them
  const verbs = ["Pray", "Live", "Share", "Anchor", "Carry", "Hold", "Keep", "Walk with", "Rest in", "Fight with", "Begin with", "Return to", "Memorize", "Offer", "Guard", "Breathe with", "Kneel with", "Speak", "Write", "Teach"];
  u.practiceTitle = `${verbs[i % verbs.length]} These Verses on ${theme}`;
  const habitFrames = [
    `${theme}: Three Faithful Habits`,
    `A Week with Verses on ${theme}`,
    `Daily Discipleship for ${theme}`,
    `Parish-and-Home Practices for ${theme}`,
    `Concrete Next Steps on ${theme}`,
  ];
  u.habitTitle = habitFrames[i % habitFrames.length];

  // Unique habit steps that mention theme
  if (!Array.isArray(u.habitSteps) || u.habitSteps.length < 3) u.habitSteps = [];
  const habitPools = [
    [
      `Keep one verse on ${theme.toLowerCase()} visible where you make coffee.`,
      `Offer a decade of the Rosary asking for grace related to ${theme.toLowerCase()}.`,
      `Tell a trusted Catholic friend which verse on ${theme.toLowerCase()} you need most.`,
    ],
    [
      `Write a verse on ${theme.toLowerCase()} on a sticky note for your dashboard or desk.`,
      `After Communion this Sunday, thank God for one mercy tied to ${theme.toLowerCase()}.`,
      `Replace five minutes of scrolling with a slow reread of your favorite line on ${theme.toLowerCase()}.`,
    ],
    [
      `Pray your chosen verse on ${theme.toLowerCase()} before you open email.`,
      `Bring one concrete struggle about ${theme.toLowerCase()} to Confession this month.`,
      `Text a verse on ${theme.toLowerCase()} to someone who needs encouragement.`,
    ],
    [
      `Memorize half a verse on ${theme.toLowerCase()} on Monday, the rest by Friday.`,
      `Light a candle and pray one line on ${theme.toLowerCase()} before Night Prayer.`,
      `Ask your parish intercession list for an intention related to ${theme.toLowerCase()}.`,
    ],
    [
      `Read your ${theme.toLowerCase()} verse aloud while walking around the block.`,
      `Journal three sentences: what the verse asks, what resists, what you will do.`,
      `Invite a spouse, roommate, or friend to pray one verse on ${theme.toLowerCase()} with you.`,
    ],
  ];
  u.habitSteps = habitPools[i % habitPools.length];

  // Unique first-note / lectio / habit intro / CTA / style
  u.firstNote = firstNotes[i % firstNotes.length];
  u.lectioTitle = `${lectioTitles[i % lectioTitles.length]} (${theme})`;
  u.habitIntro = habitIntros[i % habitIntros.length].replace(/\.$/, "") + ` — especially around ${theme.toLowerCase()}.`;
  u.ctaTitle = ctaFor(theme, i);
  u.calloutClass = calloutStyles[i % calloutStyles.length];
  u.badge = badges[i % badges.length];
  u.readMinutes = 9 + ((i * 3) % 7); // 9–15 unique-ish spread

  // Unique extras
  const extraKind = i % 5;
  if (extraKind === 0) {
    u.extraSection = {
      type: "when",
      title: `When ${theme} Feels Most Urgent`,
      items: [
        `Before a conversation shaped by ${theme.toLowerCase()}`,
        `During a quiet holy hour when ${theme.toLowerCase()} surfaces`,
        `After Mass, when the week presses on ${theme.toLowerCase()}`,
        `Late at night when thoughts about ${theme.toLowerCase()} return`,
      ],
    };
  } else if (extraKind === 1) {
    const [saint, line] = saints[i % saints.length];
    u.extraSection = {
      type: "saint",
      title: `Learn from ${saint} on ${theme}`,
      body: `${line} Ask ${saint.split(" ").slice(-1)[0]} to intercede as you pray these verses on ${theme.toLowerCase()}.`,
    };
  } else if (extraKind === 2) {
    u.extraSection = {
      type: "prayer",
      title: `A Short Prayer before Verses on ${theme}`,
      body: `Lord Jesus, open my heart to Your Word about ${theme.toLowerCase()}. Give me honesty, courage, and the grace to live what I read. Amen.`,
    };
  } else if (extraKind === 3) {
    u.extraSection = {
      type: "mistake",
      title: `Mistakes to Avoid with Verses on ${theme}`,
      items: [
        `Treating verses on ${theme.toLowerCase()} like a quick fix instead of a relationship with Christ`,
        `Isolating one line from the Gospel and the Church's teaching`,
        `Skipping Confession when sin is tangled with ${theme.toLowerCase()}`,
        `Comparing your progress on ${theme.toLowerCase()} with someone else's highlight reel`,
      ],
    };
  } else {
    u.extraSection = {
      type: "links",
      title: `Keep Going after ${theme}`,
      body: `These related guides help you live ${theme.toLowerCase()} beyond a single article — through prayer, virtue, and Catholic practice.`,
      links: [
        { href: "/blog/how-to-pray-the-rosary-step-by-step/", label: "How to Pray the Rosary" },
        { href: "/blog/examination-of-conscience-guide/", label: "Examination of Conscience" },
        { href: "/quiz/", label: "Catholic Life Quiz" },
      ],
    };
  }

  // Ensure FAQ questions mention theme uniquely
  if (Array.isArray(u.faqs)) {
    u.faqs = u.faqs.map((qa, qi) => {
      const [q, a] = qa;
      if (qi === 0 && !q.toLowerCase().includes(theme.toLowerCase().slice(0, 6))) {
        return [`What Bible verse helps most with ${theme.toLowerCase()}?`, a];
      }
      return qa;
    });
  }

  if (first) {
    u.closingQuote = first.text;
    u.closingSource = first.ref;
  }
}

fs.writeFileSync(path.join(__dirname, "bible-verses-unique.json"), JSON.stringify(unique, null, 2));

// Verify uniqueness
const fields = ["bridge", "mid", "practiceTitle", "habitTitle", "lectioTitle", "habitIntro", "ctaTitle"];
for (const f of fields) {
  const vals = Object.values(unique).map((u) => u[f]);
  const dups = vals.length - new Set(vals).size;
  console.log(f, "dups", dups);
}
const extraTitles = Object.values(unique).map((u) => u.extraSection?.title);
console.log("extraTitle dups", extraTitles.length - new Set(extraTitles).size);
console.log("done", Object.keys(unique).length);
