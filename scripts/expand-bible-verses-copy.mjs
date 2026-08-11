/**
 * Expand bible-verses-unique.json with long, unique editorial blocks
 * so each generated page reaches ~1100+ prose words without twin templates.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const topics = JSON.parse(fs.readFileSync(path.join(__dirname, "bible-verses-topics-data.json"), "utf8"));
const unique = JSON.parse(fs.readFileSync(path.join(__dirname, "bible-verses-unique.json"), "utf8"));

const themeMap = {
  "encouraging-bible-verses": "encouragement",
  "inspirational-bible-verses": "inspiration",
  "powerful-bible-verses": "spiritual power",
  "short-bible-verses-about-strength": "short strength verses",
  "short-bible-verses-about-love": "short love verses",
  "bible-verses-for-a-broken-heart": "a broken heart",
  "bible-verses-for-anxiety-and-fear": "anxiety and fear",
  "bible-verses-for-strength-during-hard-times": "strength in hard times",
  "bible-verses-for-healing-and-recovery": "healing and recovery",
  "bible-verses-for-difficult-times": "difficult times",
  "bible-verses-for-new-beginnings": "new beginnings",
  "bible-verses-about-gods-love": "God's love",
  "bible-verses-about-trusting-god": "trusting God",
  "bible-verses-about-gods-plan": "God's plan",
};

function themeOf(t) {
  if (themeMap[t.slug]) return themeMap[t.slug];
  return t.keyword
    .replace(/^Short Bible Verses About /i, "")
    .replace(/^Bible Verses About /i, "")
    .replace(/^Bible Verses for /i, "")
    .toLowerCase();
}

function pick(arr, i) {
  return arr[i % arr.length];
}

const openings = [
  (theme, kw) =>
    `Catholics who search for ${kw.toLowerCase()} are rarely looking for a slogan. They want language strong enough for a hospital waiting room, a restless night, or a hard conversation after Mass. Scripture gives that language — not as a shortcut around the Cross, but as a companion on the way.`,
  (theme, kw) =>
    `The Church has always placed the Word at the center of Christian life: proclaimed at Mass, prayed in the Liturgy of the Hours, and kept in the heart at home. These ${kw.toLowerCase()} belong in that living tradition, ready for ordinary disciples who need concrete hope.`,
  (theme, kw) =>
    `When life presses hard, many American Catholics reach first for a phone search and then for a verse. That instinct is good — as long as the verse leads back to Christ, the sacraments, and a parish community that can walk with you through ${theme}.`,
  (theme, kw) =>
    `RSV-CE readers notice how often Scripture refuses shallow comfort. Verses about ${theme} tell the truth about human weakness and God's fidelity in the same breath. That honesty is why they still console after centuries.`,
  (theme, kw) =>
    `You do not need a theology degree to pray these lines. You need honesty, a little silence, and willingness to let God interrupt your scripts about ${theme}. The verses below are chosen for Catholic prayer, not for viral quotes alone.`,
];

const whyTitles = [
  (theme) => `Why Catholics Turn to Scripture for ${theme}`,
  (theme) => `How the Church Reads Verses on ${theme}`,
  (theme) => `A Catholic Way to Pray About ${theme}`,
  (theme) => `What These Verses on ${theme} Are For`,
  (theme) => `${theme[0].toUpperCase() + theme.slice(1)} in Light of the Gospel`,
];

const whyBodies = [
  (theme) =>
    `Dei Verbum teaches that God speaks through Scripture so that we may know Him and respond in faith. Verses on ${theme} are not lucky charms; they are invitations into relationship. Pair them with Sunday Mass readings when you can, and let the same Christ who speaks from the ambo speak in your kitchen and commute.`,
  (theme) =>
    `Catholic reading holds Scripture and Tradition together. A line about ${theme} is interpreted with the Creed, the Catechism, and the lived wisdom of the saints — never as a private oracle against the Church. That guardrail keeps devotion from becoming superstition.`,
  (theme) =>
    `Many people discover these verses during crisis and then keep them for ordinary days. That is healthy. Holiness is formed less by dramatic moments than by returning to the Word when ${theme} is quiet but still unfinished.`,
  (theme) =>
    `If you are new to praying Scripture, start with one verse, not the whole page. Read it aloud. Sit for thirty seconds. Ask: What is God saying about ${theme} that I resist? Then bring that resistance to Confession or spiritual direction if it is heavy.`,
  (theme) =>
    `American parish life is busy: sports, shifts, aging parents, and screens. Short, memorable verses on ${theme} travel well into that chaos — as long as they lead you back to the Eucharist, where the Word becomes flesh for us again.`,
];

const situTitles = [
  (theme) => `Situations Where Verses on ${theme} Help Most`,
  (theme) => `When to Open the Bible for ${theme}`,
  (theme) => `Real Moments Catholics Face ${theme}`,
  (theme) => `From Search Query to Lived Prayer on ${theme}`,
  (theme) => `Where ${theme[0].toUpperCase() + theme.slice(1)} Meets Daily Discipleship`,
];

const situBodies = [
  (theme, kw) =>
    `Use ${kw.toLowerCase()} before medical appointments, after difficult news, during sleepless hours, and when a family member asks you to pray but you feel empty. Keep one verse on a lock screen or index card. The goal is not to "feel better" instantly; it is to remain with Christ while ${theme} unfolds.`,
  (theme, kw) =>
    `Parents, caregivers, converts, and long-time Catholics all meet ${theme} differently. A young adult may need courage for vocation; a widow may need endurance; a teenager may need language for fear. Let the same page serve different states of life without forcing one emotional script.`,
  (theme, kw) =>
    `If your search history shows repeated nights of looking up ${kw.toLowerCase()}, treat that pattern with compassion. Consider speaking with a priest, a Catholic counselor, or a trusted friend. Scripture accompanies healing; it does not replace wise human help when ${theme} overwhelms daily function.`,
  (theme, kw) =>
    `Parish ministries — bereavement groups, marriage prep, youth nights, and RCIA — can use these verses without turning them into worksheets. Read one slowly. Ask two questions: Where do I see Christ? What is one act of charity this verse asks of me regarding ${theme}?`,
  (theme, kw) =>
    `Some days you will pray these lines with consolation; other days they will feel dry. Dryness is not failure. Keep a simple rule: one verse on ${theme} each morning for a week, then review what changed in your patience, speech, or sleep.`,
];

const deepenTitles = [
  (theme) => `Going Deeper: Sacraments, Saints, and ${theme}`,
  (theme) => `Beyond the Quote: Living ${theme} Catholically`,
  (theme) => `Mass, Confession, and Verses on ${theme}`,
  (theme) => `Forming a Habit of the Heart Around ${theme}`,
  (theme) => `Scripture, Charity, and ${theme} Over Time`,
];

const deepenBodies = [
  (theme) =>
    `Bring one struggle related to ${theme} to Confession with concrete details, not vague guilt. Receive the Eucharist as medicine, not reward. If illness or despair is involved, ask about Anointing of the Sick. Grace travels through the Church's ordinary means.`,
  (theme) =>
    `Choose a saint who knew something of ${theme} — Thérèse in littleness, Joseph in quiet duty, Monica in perseverance, Ignatius in discernment. Ask their intercession after you pray a verse. Friendship with the saints keeps private devotion from becoming lonely.`,
  (theme) =>
    `Works of mercy translate verses into flesh: a meal for a neighbor, a patient reply, a donated hour, a refusal to gossip. If a verse on ${theme} never changes how you treat people, you have collected inspiration without conversion.`,
  (theme) =>
    `For families, pick one verse for the week and place it near the dinner table. For singles and religious, keep it near your breviary or phone charger. Shared memory of Scripture builds a household culture that outlasts moods about ${theme}.`,
  (theme) =>
    `Return to this page seasonally — Advent, Lent, or after a major life change — and notice which verse hits differently. Spiritual growth is often less about finding new lines and more about letting familiar words on ${theme} cut deeper.`,
];

const reflectionStarters = [
  (ref, theme) => `Pray ${ref} as a slow petition about ${theme}, not as a rush through holy words.`,
  (ref, theme) => `${ref} meets ${theme} where theory ends and the next faithful step begins.`,
  (ref, theme) => `Let ${ref} correct false stories you tell yourself about ${theme}.`,
  (ref, theme) => `Read ${ref} once for the mind, once for the heart, once for the will regarding ${theme}.`,
  (ref, theme) => `${ref} is worth memorizing if ${theme} returns often in your week.`,
];

const midExpansions = [
  (theme) =>
    `Notice the pattern across these passages: God does not always remove the circumstance tied to ${theme}, but He does promise presence, grace, and a path of fidelity. That is why Catholic hope is sturdy — it is anchored in a Person, not in outcomes we can schedule.`,
  (theme) =>
    `If one verse feels overused in Christian culture, pray it for someone else first. Intercession softens cynicism and keeps ${theme} from becoming a private performance of spirituality.`,
  (theme) =>
    `Catholic reading never isolates a verse from the Cross and Resurrection. Whatever you face regarding ${theme}, Christ has entered human weakness and opened a way through it — not around it.`,
  (theme) =>
    `Ask honestly: what would change this week if I believed this verse about ${theme} enough to rearrange one habit? Then rearrange that habit before the feeling of motivation fades.`,
  (theme) =>
    `Return to the first verse after you finish the list. First impressions often reveal what your soul is actually asking God for beneath the label of ${theme}.`,
];

const faqExtra = [
  (theme, kw) => [
    [
      `How often should I pray ${kw.toLowerCase()}?`,
      `Daily is ideal when ${theme} is intense; otherwise three times a week keeps the Word familiar without turning it into a checklist. Quality of attention matters more than volume.`,
    ],
    [
      `Which Catholic Bible translation is good for these verses?`,
      `The RSV-CE and NABRE are widely used by English-speaking Catholics. Choose one translation and stay with it long enough for the words on ${theme} to become memorable.`,
    ],
    [
      `Can I share these verses with a non-Catholic friend?`,
      `Yes — with humility. Offer the verse as a gift, not a debate opener. If they ask what Catholics believe about ${theme}, point them toward Christ and, when appropriate, your parish.`,
    ],
  ],
  (theme, kw) => [
    [
      `What if these verses on ${theme} make me feel worse?`,
      `Pause. Speak with a priest or counselor. Sometimes grief, trauma, or depression needs accompaniment before a verse can console. God is patient with your pace.`,
    ],
    [
      `Should I memorize one verse or study many?`,
      `Memorize one that names your situation; study others for breadth. A single internalized line on ${theme} often helps more in a crisis than a long unread list.`,
    ],
    [
      `How do these verses relate to the Rosary?`,
      `After a decade, pray your chosen verse as a short aspiration. The Rosary and Scripture reinforce each other when ${theme} needs both meditation and persistence.`,
    ],
  ],
  (theme, kw) => [
    [
      `Is it okay to write ${kw.toLowerCase()} in a journal?`,
      `Yes. Copying Scripture by hand slows you down and helps retention. Note one concrete action beside the verse so ${theme} becomes discipleship, not only emotion.`,
    ],
    [
      `What if I do not feel peace after praying?`,
      `Feelings are not the measure of fidelity. Keep praying, receive the sacraments, and look for small fruits: patience, honesty, or courage related to ${theme}.`,
    ],
    [
      `Can children use this page?`,
      `Yes — choose the shortest verses and explain them simply. Children learn ${theme} by watching adults pray without panic.`,
    ],
  ],
];

for (let i = 0; i < topics.length; i++) {
  const t = topics[i];
  const u = unique[t.slug];
  if (!u) throw new Error("missing " + t.slug);
  const theme = themeOf(t);
  const kw = t.keyword;

  const open = pick(openings, i)(theme, kw);
  const whyT = pick(whyTitles, i)(theme);
  const whyB = pick(whyBodies, i + 1)(theme);
  const situT = pick(situTitles, i + 2)(theme);
  const situB = pick(situBodies, i + 3)(theme, kw);
  const deepT = pick(deepenTitles, i + 4)(theme);
  const deepB = pick(deepenBodies, i)(theme);

  // Expand bridge into 2 paragraphs unique to page
  u.bridge = `${open} ${u.bridge}`;
  const bridge2Variants = [
    (theme, kw) =>
      `Start with the verses that match your situation most closely, then read the rest as a wider horizon. ${kw} are most fruitful when one line becomes a daily aspiration and the others become backup strength for harder days of ${theme}.`,
    (theme, kw) =>
      `Print or save two references from this page. Keep one at home and one at work. When ${theme} spikes, you will already know where to look — and you will waste less energy scrolling through endless lists of ${kw.toLowerCase()}.`,
    (theme, kw) =>
      `If you came here from a search for ${kw.toLowerCase()}, stay long enough to pray, not only to collect quotes. The Church's goal is conversion of heart around ${theme}, not a larger screenshot folder.`,
    (theme, kw) =>
      `Couples and families can read one verse aloud and share a single sentence of response. That simple practice turns ${kw.toLowerCase()} from private coping into shared discipleship around ${theme}.`,
    (theme, kw) =>
      `Priests and catechists sometimes need a ready set of ${kw.toLowerCase()} for counseling, RCIA, or youth nights. Use them freely — and always point people back to the sacraments when ${theme} is more than a momentary worry.`,
  ];
  u.bridge2 = pick(bridge2Variants, i)(theme, kw);

  u.expandSections = [
    { title: whyT, body: `${whyB} ${pick(deepenBodies, i + 2)(theme)}` },
    { title: situT, body: situB },
    { title: deepT, body: `${deepB} Keep returning to the verses above until one line becomes the prayer you can say without looking at a screen.` },
  ];

  // Longer mid
  u.mid = `${u.mid} ${pick(midExpansions, i)(theme)}`;

  // Longer practice
  u.practiceBody = `${u.practiceBody} Repeat the verse once more before you sleep, and once more when you wake. Over a week, you will notice whether ${theme} still masters your reactions — or whether grace is slowly reordering them.`;

  // Verse notes for all sections
  u.verseNotesBySection = (t.sections || []).map((sec, si) =>
    (sec.verses || []).map((v, vi) => pick(reflectionStarters, i + si * 3 + vi)(v.ref, theme))
  );
  u.verseNotes = u.verseNotesBySection[0] || [];

  // Section intros
  u.sectionIntros = (t.sections || []).map((sec, si) => {
    const variants = [
      `These passages gather the Church's most prayed lines on ${theme}. Read them slowly; speed-reading Scripture usually skips the conversion.`,
      `The next set widens the picture. Old and New Testament voices answer ${theme} with different accents but one Lord.`,
      `Short lists help busy Catholics. Still, one verse prayed well beats ten verses skimmed.`,
    ];
    return `${pick(variants, i + si)} Focus on “${sec.title}” as a single movement of prayer, not a checklist.`;
  });

  // Extra FAQ unique
  const extras = pick(faqExtra, i)(theme, kw);
  const existing = Array.isArray(u.faqs) ? u.faqs : [];
  const merged = [...existing];
  for (const qa of extras) {
    if (!merged.some((m) => m[0] === qa[0])) merged.push(qa);
  }
  u.faqs = merged.slice(0, 8);

  // Closing essay before quote
  u.closingEssay = `As you leave this page, take one verse on ${theme} into the next hour of your life. Speak it in the car, at the sink, or before a difficult email. The Word of God is living and active — and it is meant for the Catholics who still show up, still pray, and still hope when ${theme} is unfinished.`;
}

fs.writeFileSync(path.join(__dirname, "bible-verses-unique.json"), JSON.stringify(unique, null, 2));

// quick uniqueness checks
const keys = ["bridge", "bridge2", "mid", "practiceBody", "closingEssay"];
for (const k of keys) {
  const vals = Object.values(unique).map((u) => u[k]);
  console.log(k, "unique", new Set(vals).size, "/", vals.length);
}
const titles = Object.values(unique).flatMap((u) => (u.expandSections || []).map((s) => s.title));
console.log("expand titles unique", new Set(titles).size, "/", titles.length);
console.log("done");
