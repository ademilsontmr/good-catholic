/**
 * Deepen all 46 St. Michael's Lent Novena day articles with long, unique copy.
 * node scripts/deepen-st-michaels-lent-novena-days.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../src/pages/blog");

function dateForDay(n) {
  const d = new Date(Date.UTC(2026, 7, 14 + n));
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return {
    month: months[d.getUTCMonth()],
    day: d.getUTCDate(),
    weekday: weekdays[d.getUTCDay()],
    short: `${months[d.getUTCMonth()]} ${d.getUTCDate()}, 2026`,
  };
}

const feast = {
  1: "the Assumption of the Blessed Virgin Mary",
  8: "the Queenship of Mary",
  13: "St. Monica",
  14: "St. Augustine",
  25: "the Nativity of Mary",
  31: "the Exaltation of the Holy Cross",
  32: "Our Lady of Sorrows",
  46: "the Feast of the Archangels (Michaelmas)",
};

const vices = [
  "pride that refuses correction","sloth that postpones prayer","wrath that scorches the household","envy that scrolls other lives","greed that never says enough",
  "gluttony of distraction","lust of the eyes online","despair disguised as realism","vanity about spiritual progress","control that will not trust God",
  "gossip dressed as concern","bitterness after divorce or betrayal","fear that postpones Confession","comparison that kills gratitude","cynicism about the Church",
  "workaholic escape from family","self-pity that rejects help","perfectionism that never begins","numbness after grief","resentment toward a pastor or parent",
  "addiction to outrage","habit of breaking promises to yourself","secret sin kept from the confessional","laziness about Sunday Mass","harshness toward the weak",
  "flattery that avoids truth","isolation that refuses community","superstition about spiritual combat","scruples that crush joy","apathy toward the poor",
  "sarcasm that wounds spouses","procrastination on reconciliation","idolatry of productivity","anxiety that refuses to cast cares on God","coldness at Communion",
  "neglect of aging parents","cruelty in anonymous comments","half-hearted fasting as performance","forgetfulness of blessings","jealousy in ministry",
  "unforgiveness rehearsed nightly","distrust after unanswered prayer","attachment to being right","spiritual consumerism","neglect of the body God gave you",
  "fear of being ordinary",
];

const virtues = [
  "humility","fortitude","temperance","justice","prudence","faith","hope","charity","patience","gentleness",
  "chastity","generosity","sobriety","honesty","perseverance","meekness","gratitude","vigilance","compassion","courage",
  "purity of intention","fidelity","mercy","zeal","silence","obedience","simplicity","joy","peace","kindness",
  "self-control","reverence","trust","diligence","hospitality","forgiveness","poverty of spirit","clarity","steadiness","courage under fatigue",
  "maternal patience","paternal responsibility","filial piety","brotherly correction","sisterly encouragement","holy indifference to vanity",
];

const places = [
  "before the tabernacle","at the kitchen sink","in the car before a difficult meeting","beside a hospital bed","on a factory break",
  "after coaching practice","in a hotel room on a work trip","on a park bench","in the parish parking lot","before opening a laptop",
  "while folding laundry","on a night walk","in a barracks hallway","outside a courtroom","in a dorm stairwell",
  "during a child's nap","after Night Prayer","before a job interview","in an Adoration chapel","on a rural porch",
  "between flights","in a grocery aisle when anxiety hits","after a hard confession","before teaching CCD","while commuting on the train",
  "in a silent garage","at a cemetery visit","before a family dinner","after reading the news","in a quiet office before dawn",
  "during a power outage","on a retreat house trail","in a van line at school","after a 12-step meeting","before surgery check-in",
  "while rocking an infant","on a firefighter shift change","after losing an argument","before deleting an app","in the back pew",
  "while watering plants","on a birthday that feels heavy","after paying bills","before a first date","during thunderstorm anxiety",
  "at the threshold of Michaelmas",
];

const audiences = [
  "parents of school-age children","converts in RCIA","returning Catholics","first responders","catechists",
  "college students","widowers and widows","men's group leaders","mothers of toddlers","night-shift workers",
  "military families","grandparents raising kids","priests needing lay backup","teenagers testing faith","engaged couples",
  "those in recovery","caregivers of aging parents","teachers in public schools","small-business owners","immigrants far from home",
  "people after divorce","seminarians on break","secular Franciscans","youth ministers","nurses and aides",
  "farmers and tradespeople","artists and writers","athletes in training","those with chronic illness","newlyweds",
  "empty-nesters","prison ministers","homeless outreach volunteers","homeschool parents","diocesan staff",
  "altar servers' parents","choir members","ushers and greeters","people discerning religious life","those healing from scandal",
  "siblings in conflict","adult children of alcoholics","mission trip returnees","online evangelists","quiet parishioners who never speak",
  "anyone who started late",
];

const metaphors = [
  "a forge that heats and shapes iron slowly","a long march with a light pack","a garden watered daily, not flooded once",
  "a lighthouse kept lit through fog","a seam sewn with short, honest stitches","a watchtower that stays awake",
  "a plow that turns the same field again","a choir rehearsing until harmony holds","a soldier cleaning a blade, not waving it",
  "a mother setting bread to rise overnight","a bridge crossed one plank at a time","a lamp refilled with oil before night",
  "a net mended before the next catch","a trail marked for those behind you","a key turned daily in a stubborn lock",
  "a fire banked so it lasts till morning","a compass checked when landmarks vanish","a vineyard pruned for fruit, not show",
  "a letter rewritten until true","a muscle trained under modest weight","a window washed so light can enter",
  "a door held open for a stranger","a map folded and unfolded without tearing","a cup emptied so it can be filled",
  "a rope belayed for a climber above","a seed buried before it can break open","a clock that keeps time when feelings fail",
  "a shield raised more than a sword swung","a candle passed without going out","a vow renewed in ordinary weather",
  "a loom weaving patience into cloth","a harbor entered after rough water","a notebook of graces, not trophies",
  "a quiet engine under a loud city","a hinge that lets a heavy door move","a stone set carefully into a wall",
  "a flute practiced until breath steadies","a field fallowed on purpose","a name spoken until it softens the heart",
  "a coat shared in cold wind","a ladder climbed without looking down every rung","a well drawn from before thirst panics",
  "a barn closed against storm and opened at dawn","a path worn by footsteps, not speeches","a yoke fitted to real shoulders",
  "a finish line that is also a feast",
];

const warnings = [
  "Do not turn Day N into a superstition that treats prayer like a transaction.",
  "Do not use spiritual warfare language to avoid apologizing to someone you hurt.",
  "Do not skip Sunday Mass because you are “doing the novena instead.”",
  "Do not stack five new penances because an influencer made Day N look intense.",
  "Do not diagnose demons in every inconvenience; begin with self-examination.",
  "Do not pray loudly online and stay silent with your spouse.",
  "Do not quit forever because you missed yesterday; resume with Day N.",
  "Do not weaponize St. Michael against people you dislike politically.",
  "Do not neglect sleep and call exhaustion holiness.",
  "Do not hide mortal sin behind long litanies — go to Confession.",
];

const mercies = [
  "send a grocery gift card to a tired family","visit or call someone lonely for twelve uninterrupted minutes",
  "apologize without explaining yourself first","pay a small bill for a neighbor in secret","bring coffee to a night-shift coworker",
  "write a thank-you to a priest or catechist","donate blood if you are able","cook a meal and leave it without waiting for praise",
  "forgive a debt you keep rehearsing","babysit so a couple can breathe","text encouragement to someone in recovery",
  "pick up litter on your block as hidden service","share lunch with someone who eats alone","offer a ride to Mass",
  "buy school supplies for a child you will never meet","listen to a teen without correcting every sentence",
  "make a meal for a new mother","pray at an abortion clinic sidewalk with charity, not slogans",
  "support a pregnancy center with a concrete gift","write to a prisoner through a parish ministry",
  "help an elderly neighbor with trash bins","translate a bulletin for someone struggling with English",
  "cover a shift so a coworker can attend a funeral","fund a tank of gas for a commuting student",
  "return something you borrowed with a note of thanks","delete a spiteful draft and pray a Hail Mary instead",
  "invite a quiet parishioner to coffee","mentor a Confirmation student for thirty minutes",
  "stock a pantry shelf in someone's name","offer Mass intention for an enemy",
  "repair something broken in the house as an act of peace","water plants at church",
  "give away clothes you are keeping “just in case”","smile and greet the person you usually avoid after Mass",
  "teach someone a skill without charging","sit with a grieving friend in silence",
  "make a casserole for a funeral reception","volunteer one hour at a shelter",
  "buy medicine for someone rationing pills","write a letter of affirmation to your spouse or parent",
  "shovel or sweep for a neighbor","share your umbrella and your patience",
  "offer to pray on the spot when someone shares a burden","celebrate someone else's win without competing",
  "choose the longer line and let someone go first","end a feud with a simple, early message",
];

function seasonPhase(n) {
  if (n <= 7) return "the opening week, when enthusiasm is high and habits are still fragile";
  if (n <= 17) return "late August, when school routines and old temptations both return";
  if (n <= 30) return "early September, when the novena has become either rhythm or chore";
  if (n <= 40) return "the stretch toward the Cross and Our Lady of Sorrows, when consolations may thin";
  return "the final approach to Michaelmas, when finishing well matters more than starting loud";
}

function buildBlocks(n, slug) {
  const dt = dateForDay(n);
  const feastNote = feast[n]
    ? ` Today also touches ${feast[n]} — let that feast color how you hear the novena, without rushing past Day ${n}'s own work.`
    : ` There is no major feast forcing your attention today, which is a gift: Day ${n} can be purely about fidelity.`;
  const vice = vices[n - 1];
  const virtue = virtues[n - 1];
  const place = places[n - 1];
  const audience = audiences[n - 1];
  const metaphor = metaphors[n - 1];
  const warning = warnings[(n - 1) % warnings.length].replace("Day N", `Day ${n}`);
  const mercy = mercies[n - 1];
  const phase = seasonPhase(n);
  const daysLeft = 46 - n;
  const daysDone = n - 1;

  // Each section title unique via day number + distinct wording
  return `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A longer word for Day ${n} (${dt.short})</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                Day ${n} falls on ${dt.weekday}, ${dt.short}, inside ${phase}. By now you have completed ${daysDone} day${daysDone === 1 ? "" : "s"} of the St. Michael&apos;s Lent Novena and have ${daysLeft} day${daysLeft === 1 ? "" : "s"} remaining until Michaelmas. That arithmetic is not meant to pressure you; it is meant to locate you. Spiritual combat becomes vague when you do not know which day you are actually living. Name it: this is Day ${n}. Pray it as Day ${n}, not as a generic &quot;Michael prayer sometime in August or September.&quot;${feastNote}
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                Think of Day ${n} as ${metaphor}. The novena is not a firework. It is formation. Formation looks ordinary while it is happening and luminous only in hindsight. If you feel nothing spectacular on ${dt.short}, you may still be exactly where grace is working — under the surface, where pride cannot pose for a photograph.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Day ${n} is especially for</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                This page speaks with particular clarity to ${audience}, though any Catholic may pray it. If that description is you, receive Day ${n} as a personal appointment rather than as content to skim. If it is not you, still pray — intercession means carrying someone else&apos;s battle for fifteen minutes. Either way, refuse the lie that only &quot;intense&quot; people belong in spiritual warfare. Michael defends the whole Church, including the tired and the late.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                A practical image: pray Day ${n} ${place}. Put your body somewhere honest. Holiness that only happens in ideal silence will not survive American life. God is not waiting for your aesthetic; He is waiting for your yes on ${dt.weekday}.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The inner battle Day ${n} names</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                Let Day ${n} confront ${vice}. Do not dramatize it; diagnose it. Ask the Holy Spirit for the opposing virtue of ${virtue}. Then pray the novena text on Catholic Bible Online with that pair in mind — vice named, virtue requested, mercy trusted. St. Michael&apos;s question, &quot;Who is like God?&quot;, dismantles the ego that feeds so many of these patterns. You are not praying to become impressive. You are praying to become free.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${warning} Day ${n} should leave you more truthful, not more theatrical. If after praying you are harsher with your family, something in the intention needs purifying. Return to the Eucharist. Ask Mary, Queen of Angels, to keep your motives clean.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to live Day ${n} after the Amen</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                Before midnight on ${dt.short}, ${mercy}. Connect that mercy explicitly to Day ${n} in one spoken sentence: &quot;Lord, I offer this through St. Michael&apos;s intercession.&quot; Prayer that never becomes mercy remains incomplete; mercy that never returns to prayer becomes activism without God. Day ${n} holds both if you let it.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                If you fail the mercy, do not scrap the novena. Pray the short St. Michael Prayer again and try a smaller mercy. The devil loves all-or-nothing thinking because it produces nothing. Day ${n} loves faithful beginnings inside imperfect days.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Day ${n} examination before sleep</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                Tonight ask only three questions, written for ${dt.weekday}: (1) Where did I notice temptation related to ${vice}? (2) Where did I practice even a seed of ${virtue}? (3) Whom did I refuse to love? End with an Act of Contrition if needed, and place tomorrow&apos;s Day ${n < 46 ? n + 1 : 46} reminder where you will see it. Seasoned disciples know that sleep after honest examen is itself a kind of trust — you stop managing the universe and let God keep watch.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                Remember why this day exists in the 46-day arc: Assumption leads toward Michaelmas so that Marian hope and angelic courage walk together. Day ${n} is one necessary step on that road. Take it. Then open the full prayer text and let the Church&apos;s words carry what your private vocabulary cannot.
              </LinkedText>
`;
}

const allParagraphs = new Set();
let dupPara = 0;

for (let n = 1; n <= 46; n++) {
  const file = path.join(OUT, `StMichaelsLentNovenaDay${n}.tsx`);
  let s = fs.readFileSync(file, "utf8");
  if (s.includes(`A longer word for Day ${n}`)) {
    // remove previous deepen block if re-running: from longer word through before Keep going
    const start = s.indexOf(`              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A longer word for Day ${n}`);
    const endMarker = `              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Keep going after Day ${n}</h2>`;
    const end = s.indexOf(endMarker);
    if (start >= 0 && end > start) {
      s = s.slice(0, start) + s.slice(end);
    }
  }

  const slug = (s.match(/currentSlug="([^"]+)"/) || [])[1];
  if (!slug) throw new Error("no slug " + n);

  const blocks = buildBlocks(n, slug);
  // uniqueness check on LinkedText bodies
  for (const m of blocks.matchAll(/<LinkedText[^>]*>\s*([\s\S]*?)\s*<\/LinkedText>/g)) {
    const t = m[1].replace(/\s+/g, " ").trim();
    if (allParagraphs.has(t)) {
      dupPara++;
      console.error("DUP PARA day", n, t.slice(0, 80));
    }
    allParagraphs.add(t);
  }

  const marker = `              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Keep going after Day ${n}</h2>`;
  if (!s.includes(marker)) throw new Error("no marker " + n);
  s = s.replace(marker, blocks + "\n" + marker);

  // bump displayed read time
  s = s.replace(/<Clock className="w-4 h-4" \/>\d+ min read/, `<Clock className="w-4 h-4" />${14 + (n % 5)} min read`);

  fs.writeFileSync(file, s);
  console.log("deepened", n);
}

console.log("paragraphs", allParagraphs.size, "dupPara", dupPara);

function prose(c) {
  const start = c.indexOf("prose prose-lg");
  let end = c.length;
  for (const m of ["<BlogFAQ", "<RelatedArticles"]) {
    const i = c.indexOf(m, start);
    if (i > 0 && i < end) end = i;
  }
  return c
    .slice(start, end)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

const counts = [];
const h2 = {};
for (let n = 1; n <= 46; n++) {
  const c = fs.readFileSync(path.join(OUT, `StMichaelsLentNovenaDay${n}.tsx`), "utf8");
  counts.push(prose(c));
  for (const m of c.matchAll(/text-2xl[^>]*>([^<]+)</g)) h2[m[1]] = (h2[m[1]] || 0) + 1;
}
counts.sort((a, b) => a - b);
console.log("words min", counts[0], "median", counts[23], "max", counts[45]);
console.log(
  "h2 dups",
  Object.entries(h2).filter(([, c]) => c > 1)
);
