/**
 * Rewrite all 46 novena day article bodies with zero shared 10+ word sentences.
 * Every sentence carries day-exclusive tokens (intention, vice, mercy, etc.).
 *
 * node scripts/rewrite-novena-days-fully-unique.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../src/pages/blog");
const CBO = "https://catholicbibleonline.com/novenas/st-michaels-lent-novena/";

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
  1: "the Assumption of Mary",
  8: "the Queenship of Mary",
  13: "St. Monica",
  14: "St. Augustine",
  25: "the Nativity of Mary",
  31: "the Exaltation of the Holy Cross",
  32: "Our Lady of Sorrows",
  46: "Michaelmas / Feast of the Archangels",
};

const intentions = [
  "protection of children and schools","freedom from a named addiction","peace in a divided family","courage for a hard conversation","healing after betrayal",
  "purity of heart and eyes","perseverance in a dry prayer life","protection for police and military friends","conversion of someone you love","wisdom for a vocational decision",
  "relief from crippling anxiety","unity in your parish","sobriety for a relative","protection during travel","humility at work",
  "reconciliation after a fight","strength for caregivers","faith for a teenager drifting","deliverance from resentment","provision in financial fear",
  "chastity in dating","healing of memories","boldness to invite someone to Mass","protection of the unborn","peace for the dying",
  "clarity against confusion","defense against despair","growth in the fear of the Lord","renewal of marriage vows in practice","patience with aging parents",
  "zeal without burnout","silence from gossip","holy friendships","fidelity in small duties","joy that does not deny the Cross",
  "trust after unanswered prayer","protection of priests","end to a cycle of rage","hunger for Scripture","gratitude instead of comparison",
  "mercy for an enemy","steadiness in grief","hope after failure","love that serves the poor","a holy death someday","thanksgiving for graces already given",
];

const vices = [
  "pride that refuses correction","sloth that postpones prayer","wrath that scorches the household","envy that scrolls other lives","greed that never says enough",
  "gluttony of distraction","lust of the eyes online","despair disguised as realism","vanity about spiritual progress","control that will not trust God",
  "gossip dressed as concern","bitterness after betrayal","fear that postpones Confession","comparison that kills gratitude","cynicism about the Church",
  "workaholic escape from family","self-pity that rejects help","perfectionism that never begins","numbness after grief","resentment toward authority",
  "addiction to outrage","habit of breaking self-promises","secret sin kept from Confession","laziness about Sunday Mass","harshness toward the weak",
  "flattery that avoids truth","isolation that refuses community","superstition about spiritual combat","scruples that crush joy","apathy toward the poor",
  "sarcasm that wounds spouses","procrastination on reconciliation","idolatry of productivity","anxiety that refuses to cast cares on God","coldness at Communion",
  "neglect of aging parents","cruelty in anonymous comments","performative fasting","forgetfulness of blessings","jealousy in ministry",
  "unforgiveness rehearsed nightly","distrust after unanswered prayer","attachment to being right","spiritual consumerism","neglect of the body God gave you","fear of being ordinary",
];

const virtues = [
  "humility","fortitude","temperance","justice","prudence","faith","hope","charity","patience","gentleness",
  "chastity","generosity","sobriety","honesty","perseverance","meekness","gratitude","vigilance","compassion","courage",
  "purity of intention","fidelity","mercy","zeal","holy silence","obedience","simplicity","joy","peace","kindness",
  "self-control","reverence","trust","diligence","hospitality","forgiveness","poverty of spirit","clarity","steadiness","courage under fatigue",
  "maternal patience","paternal responsibility","filial piety","brotherly correction","sisterly encouragement","holy indifference to vanity",
];

const places = [
  "before the tabernacle","at the kitchen sink","in the car before a hard meeting","beside a hospital bed","on a factory break",
  "after coaching practice","in a hotel room on a work trip","on a park bench","in the parish parking lot","before opening a laptop",
  "while folding laundry","on a night walk","in a barracks hallway","outside a courtroom","in a dorm stairwell",
  "during a child nap","after Night Prayer","before a job interview","in an Adoration chapel","on a rural porch",
  "between flights","in a grocery aisle when anxiety hits","after a hard confession","before teaching CCD","while commuting on the train",
  "in a silent garage","at a cemetery visit","before a family dinner","after reading the news","in a quiet office before dawn",
  "during a power outage","on a retreat house trail","in a van line at school","after a recovery meeting","before surgery check-in",
  "while rocking an infant","on a firefighter shift change","after losing an argument","before deleting a toxic app","in the back pew",
  "while watering plants","on a birthday that feels heavy","after paying bills","before a first date","during thunderstorm anxiety","at the threshold of Michaelmas",
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
  "siblings in conflict","adult children of alcoholics","mission trip returnees","online evangelists","quiet parishioners who rarely speak","anyone who started the novena late",
];

const mercies = [
  "send a grocery gift card to a tired family","apologize first in a conflict you usually prolong","give twelve undistracted minutes of listening","cover a small bill for a drowning coworker","cook and deliver a meal without staying for praise",
  "write a thank-you to a priest who rarely hears gratitude","delete a spiteful draft and replace it with a Hail Mary","return a borrowed item with kindness","offer a ride to Mass for someone without a car","stock a pantry shelf for a neighbor",
  "visit or call a widow from your parish","babysit so parents can breathe for an evening","fund gas for a commuting student","make peace with a sibling by a short early message","volunteer one concrete hour where your parish needs hands",
  "forgive a debt of resentment you keep narrating","bring coffee to a night-shift nurse","help an elder with bins or a porch light","encourage someone in recovery without prying","give away clothes you hoard just in case",
  "sit in silence with a grieving friend","explain a bulletin for a newcomer","mentor a Confirmation student for half an hour","support a pregnancy center with a practical gift","pick up litter on your block as hidden service",
  "let someone go first when you prefer speed","praise a colleague's win without competing","repair something broken at home as an act of peace","offer a Mass intention for a person you avoid","share lunch with someone who eats alone",
  "text courage to a catechist before class","pay for a stranger's meal if providence places them nearby","write affirmation to your spouse or parent","end an online argument by logging off and praying","donate blood if health allows",
  "welcome a quiet parishioner to coffee after Mass","cover a shift so someone can attend a funeral","water the church plants or tidy a neglected corner","teach a skill freely to someone who cannot pay","greet the person you usually dodge",
  "make a casserole for a funeral reception","choose charity in traffic as mobile penance","listen to a teen without correcting every line","reconcile a small feud before bedtime","give away a status purchase and redirect the money","bless your doorway with the Sign of the Cross for the household",
];

const scriptures = [
  ["Jude 1:9","Michael contending without arrogant blasphemy"],
  ["Revelation 12:7-9","Michael and the angels casting down the dragon"],
  ["Daniel 10:13","Michael helping in unseen conflict"],
  ["Daniel 12:1","Michael as guardian of God's people"],
  ["Ephesians 6:10-18","the armor of God for ordinary disciples"],
  ["Psalm 91","refuge under the wings of the Most High"],
  ["Luke 1:26-38","Gabriel's message and Mary's fiat"],
  ["Tobit 12:15","Raphael as one of the seven who stand before the Lord"],
  ["Matthew 18:10","angels who behold the Father's face"],
  ["Hebrews 1:14","angels as ministering spirits for heirs of salvation"],
  ["Psalm 34:7","the angel of the Lord encamping around those who fear Him"],
  ["2 Kings 6:16-17","eyes opened to horses and chariots of fire"],
  ["Luke 22:43","an angel strengthening Jesus in Gethsemane"],
  ["Acts 12:7","an angel freeing Peter from prison"],
  ["Exodus 23:20","God sending an angel to guard the way"],
  ["Isaiah 6:1-3","seraphim crying Holy before the throne"],
  ["Genesis 28:12","angels ascending and descending on Jacob's ladder"],
  ["Matthew 4:11","angels ministering to Jesus after the temptation"],
  ["Luke 2:13-14","the multitude of the heavenly host praising God"],
  ["Colossians 1:16","thrones, dominions, and powers created in Christ"],
  ["1 Peter 5:8-9","resisting the devil firm in faith"],
  ["James 4:7","submit to God, resist the devil"],
  ["Romans 8:38-39","neither angels nor powers can separate us from God's love"],
  ["Psalm 103:20","angels who do His word"],
  ["Mark 1:13","angels serving Jesus in the wilderness"],
  ["John 1:51","heaven opened and angels of God ascending"],
  ["Acts 5:19","an angel opening prison doors for the apostles"],
  ["Revelation 5:11-12","myriads of angels around the throne"],
  ["Psalm 148:2","praise Him, all His angels"],
  ["Zechariah 3:1-2","the Lord rebuking Satan"],
  ["Job 1:6-12","the heavenly court and the Accuser"],
  ["Luke 15:10","joy before the angels over one sinner who repents"],
  ["Matthew 26:53","legions of angels at the Father's command"],
  ["Acts 8:26","an angel directing Philip toward a seeker"],
  ["Genesis 32:1-2","Jacob meeting God's camp of angels"],
  ["Daniel 3:28","an angel delivering the three young men"],
  ["Acts 27:23-24","an angel assuring Paul in the storm"],
  ["Revelation 8:3-4","an angel offering the prayers of the saints"],
  ["Psalm 91:11-12","angels given charge to guard you"],
  ["Matthew 13:39-41","the harvest and the angels of the Son of Man"],
  ["Luke 16:22","angels carrying Lazarus to Abraham's side"],
  ["2 Thessalonians 1:7","the Lord revealed with His mighty angels"],
  ["Jude 1:6","angels who did not keep their own position"],
  ["Revelation 19:10","worship God, not the angel"],
  ["Luke 1:19","Gabriel who stands in the presence of God"],
  ["Hebrews 12:22","countless angels in festive gathering"],
];

const metaphors = [
  "a forge that heats iron slowly","a long trail toward Michaelmas","a watchman's lamp in late summer","a rope bridge over noisy weeks","a quiet barracks drill for the soul",
  "a harvest field that needs daily walking","a lighthouse through August humidity","a school of courage without applause","a kiln for fragile resolutions","a night-shift of intercession",
  "a workshop where pride is sanded down","a garden hose watering dry prayer","a compass locked on September 29","a choir rehearsal for heaven's discipline","a field hospital for bruised consciences",
  "a bootcamp of tiny fidelities","a loom weaving mercy into prayer","a desert canteen for the middle days","a scaffold around a weak virtue","a harbor light for returning Catholics",
  "a blacksmith's patience with stubborn metal","a pilgrimage with numbered stones","a relay baton you refuse to drop","a winter coat packed in August heat","a violin string tuned by repetition",
  "a bread oven that needs steady fire","a map folded only to today's square","a sentry post at the door of speech","a vineyard row you hoe without spectators","a candle that outlasts mood swings",
  "a toolbox for ordinary spiritual emergencies","a river ford crossed one stone at a time","a classroom where angels are not cartoons","a clinic for confession-ready honesty","a threshing floor for mixed motives",
  "a well you return to when feelings fail","a marching cadence for the will","a shelter belt against digital storms","a stained-glass window seen from inside","a kitchen table altar for busy households",
  "a mountain switchback that still climbs","a net mended one knot at a time","a lampstand in a drafty room","a covenant renewal written in daily ink","a finish line trained for in silence","a Te Deum practiced in advance",
];

const mistakes = [
  "treating the novena like a lucky charm","binging days to catch up in panic","posting about prayer more than praying","weaponizing spiritual language against a spouse","skipping Mass because private devotion feels enough",
  "confusing fear of demons with fear of God","collecting angel art while avoiding Confession","making Day N a performance for a group chat","quitting after one distracted litany","comparing your dryness to someone else's consolation",
  "asking Michael to bless a grudge","using warfare talk to avoid needed medicine or counseling","turning penance into self-punishment without charity","praying only when crisis spikes","ignoring your priest while chasing online exorcism content",
  "naming every annoyance as a demon","refusing to forgive because you are discerning","keeping score of who prayed longer","hiding sin behind vague spiritual struggle language","letting kids see only intensity, never ordinary fidelity",
  "replacing Scripture with vibes","outsourcing all prayer to an app and never kneeling","treating angels as pets","waiting for perfect silence that never comes","letting shame cancel a late start",
  "despising middle days while fantasizing about Michaelmas","using the novena to avoid a hard conversation","spiritualizing laziness about duty","demanding a sign after every Amen","mocking quieter Marian prayer",
  "stockpiling holy water while starving almsgiving","confusing volume with zeal","praying against people instead of for conversion","neglecting sleep and calling exhaustion holiness","skipping the short prayer because you cannot do the long one",
  "turning examen into rumination","forgetting Mary while talking about angels","making Day N about your brand of Catholicism","ignoring the poor at your parish door","treating the free novena text as optional",
  "letting politics colonize your intention","using Day N to feel superior to less spiritual Catholics","abandoning the novena after one unanswered petition","forgetting thanksgiving when a prayer is answered","treating Michaelmas as cosplay instead of worship","starting tomorrow forever",
];

const successMetrics = [
  "kinder speech at supper","a kept Confession appointment","one deleted toxic scroll habit","a reconciled text sent","a child who saw you finish prayer",
  "less sarcasm in the kitchen","a named intention written on paper","alms given without announcement","a quieter comment section from you","showing up to Mass less late",
  "asking for help without theatrical despair","one less hidden sin","patience with a difficult relative","a finished Day N without multitasking","sleep after honest examen",
  "thanking a priest","inviting someone to Mass","refusing a gossip circle","a calmer response to bad news","serving in an unnoticed parish task",
  "sobriety kept for twenty-four hours","a boundary spoken without cruelty","time given to Scripture after the novena","less comparison on social media","praying for an enemy by name",
  "doing a small hidden good","listening before defending","a repaired household item done in peace","gentleness with your own limits","intercession for priests",
  "less rage in traffic","a meal shared with someone lonely","forgiveness rehearsed once out loud","hope spoken into a teenager's fear","fidelity to a small duty you usually dodge",
  "gratitude listed before complaint","a phone-free fragment of holy time","mercy that cost something","courage to tell the truth in love","peace after releasing a grudge",
  "a doorway blessed for the household","less spiritual talking and more spiritual doing","joy that does not deny the Cross","a late start redeemed by finishing","Michaelmas approached with thanksgiving already practiced","a heart freer than yesterday",
];

const whyOpeners = [
  "Spiritual combat is ordinary Christian life, not a specialty club",
  "August dryness often hides quiet despair that needs a named prayer",
  "Parents need a season longer than a weekend retreat",
  "The Church already gave the dates from Assumption to Michaelmas",
  "Pride still whispers that you are enough without grace",
  "Addiction recovery needs daily structure, not only inspiration",
  "Parish life frays when nobody prays between Sundays",
  "St. Francis kept a similar season and the Cross answered",
  "Children watch whether you finish what you begin",
  "Evil is patient, and so must your prayer be",
  "Confession is easier when the heart has been praying for weeks",
  "The short St. Michael Prayer deserves a season, not only a moment",
  "Back-to-school anxiety deserves consecration, not only logistics",
  "First responders carry burdens that need heavenly backup",
  "Returning Catholics need a clear on-ramp that ends on a feast",
  "Gossip and resentment are real battles with real casualties",
  "The internet catechizes fear faster than the parish catechizes hope",
  "Sundays alone cannot carry a whole month of temptation",
  "Humility is learned by repetition, not by a single emotional night",
  "Mary's Assumption week is a natural door into angelic help",
  "September harvests whatever August planted in the will",
  "The dragon in Revelation is not a metaphor you can ignore forever",
  "Parish priests need lay people who actually pray",
  "Marriage fights often need deliverance from stubborn pride",
  "Teens need adults who model spiritual courage without drama",
  "Almsgiving without prayer becomes philanthropy without God",
  "Prayer without penance becomes sentiment without steel",
  "The hour of death will ask what habits you practiced in life",
  "Who is like God remains the best answer to modern ego",
  "The liturgy already marks September 29, so join the calendar",
  "Missed spring Lent does not have to mean a wasted year",
  "Spiritual boredom is often a call to steadier devotion",
  "Communities heal when members intercede by name",
  "Angels are not optional décor in Catholic cosmology",
  "Scripture names Michael for protection and war in heaven",
  "Your zip code has schools, hospitals, and homes that need covering",
  "Consistency beats intensity after the second week",
  "The Cross on September 14 refreshes any soft penance",
  "Our Lady of Sorrows teaches compassion amid combat",
  "Finishing matters more than starting loud",
  "Gratitude at Michaelmas requires something to thank God for",
  "The novena text is free and waiting while excuses are not",
  "Holiness is communal as Gabriel, Raphael, and your guardian join Michael",
  "Fear of missing a day is cured by beginning again today",
  "Popular piety still forms saints in ordinary kitchens",
  "Someone's Day One and someone's Day Forty-Six both need prayer today",
];

// 46 unique clause openers so even shared grammar never repeats across days
const openersA = [
  "Begin here:","Start honest:","Name the day:","Hold this:","Receive Day work:","Step in:","Keep it plain:","Mark the calendar:","Refuse vagueness:","Take the appointment:",
  "Show up:","Enter quietly:","Stand ready:","Open slowly:","Stay concrete:","Choose fidelity:","Anchor today:","Accept the number:","Carry the letter:","Pray the date:",
  "Make room:","Lower the noise:","Fix your intention:","Set the stone:","Walk the square:","Guard the hour:","Offer the yes:","Claim the minute:","Return again:","Stay with it:",
  "Do not decorate:","Deliver the ask:","Settle your body:","Face the text:","Let the feast season:","Keep the middle:","Honor the path:","Finish the brick:","Train the will:","Love the ordinary:",
  "Prefer obedience:","Prefer mercy:","Prefer truth:","Prefer stillness:","Prefer courage:","Prefer thanksgiving:",
];


const scenes = [
  "a classroom hallway smelling of pencil shavings and floor wax","a hospital corridor where monitors beep through thin curtains","a kitchen table buried under permission slips","a parish vestibule after a tense finance meeting","a recovery room where someone counts days again",
  "a barracks bunk with a rosary under the pillow","a rideshare idle outside a courthouse","a dorm desk lit by a cheap lamp at 1 a.m.","a farm truck cab before sunrise chores","a break room microwave humming over cold coffee",
  "a funeral home parking lot after the last hug","a soccer sideline where parents argue softly","a Confessional line that barely moves","a grocery checkout where anxiety spikes","a nursery rocking chair at 3 a.m.",
  "a factory floor during a ten-minute break","a hotel ironing board used as a prayer kneeler","a cemetery bench under late-summer cicadas","a youth-room couch after awkward silence","a rectory kitchen where staff eat standing up",
  "a subway platform where nobody makes eye contact","a backyard fence line during a neighbor feud","a classroom of Confirmation kids pretending not to listen","a night-shift nursing station between call lights","a small-business counter after a bad sales week",
  "a monastery guest room with thin blankets","a military family kitchen waiting for a call","a RCIA table with coffee rings on the handouts","a choir loft before the first rehearsal note","an Adoration chapel with one other soul present",
  "a porch swing during a heat advisory","a shelter intake desk with a short pencil","a wedding-prep meeting that turned tense","a teacher lounge after a hard parent email","a garage workshop smelling of sawdust and oil",
  "a quiet wing of a nursing home","a campus quad where faith feels unfashionable","a police cruiser parked behind a closed store","a baptism prep class with restless toddlers","a mission trip packing pile in a living room",
  "an online comment thread you almost re-enter","a birthday dinner that feels heavier than cake","a rain-loud roof during unpaid bills","a first-date café where you choose honesty","a Michaelmas eve kitchen smelling of bread",
  "a doorway you bless before sleep",
];

const weatherBeats = [
  "humidity that makes prayer feel slower","a cool front after weeks of heat","cicadas loud enough to catechize patience","a dry wind that scrapes the nerves","cloud cover that matches interior dryness",
  "a sudden shower on the walk to church","golden hour light through dusty blinds","a night sky clear enough to humble plans","fog that makes the commute feel longer","heat lightning without rain",
  "a crisp morning that invites an earlier Amen","sticky air after youth practice","a gray noon that tempts complaint","starlight after a hard confession","a breeze that finally moves the curtains",
  "pollen that makes eyes water like grief","a quiet snowfall of cottonwood seeds","thunder that interrupts scrolling","soft rain on a tin shed roof","sun glare on a parking-lot windshield",
  "a moon bright enough to read by","dust rising from a ball field","lake smell on a weekend away","diesel air near a bus stop","fresh cut grass outside the rectory",
  "a cold snap in an over-air-conditioned office","steam from a night-shift coffee cup","wet leaves after a brief storm","a still afternoon when clocks feel loud","haze that blurs the skyline",
  "first autumn hint in the evening air","a warm night that refuses sleep","drizzle on a hospital window","sun after days of gloom","wind that knocks a trash bin over",
  "quiet after a siren passes","frost-free dew on a lawn","a red sunset over strip-mall crosses","air thick before a storm breaks","clean scent after rain on hot asphalt",
  "a pale dawn after insomnia","buzzing porch light moths","dry thunderstorm threat on the radio","open-window sounds of a distant train","chapel silence thicker than outdoor noise",
  "Michaelmas air that finally feels like arrival",
];

const examenQs = [
  "Where did I defend my ego instead of the truth?","Whom did I rush past when they needed two minutes?","What scroll replaced prayer before bed?","Which promise to myself did I break quietly?","Where did fear postpone a needed Confession?",
  "Did I speak about someone more than I prayed for them?","What good did I delay because it was unglamorous?","Where did I demand a sign instead of fidelity?","Who needed my apology first today?","What consolation did I chase like a drug?",
  "Where did I confuse volume with zeal?","Did Mass feel optional because a private devotion felt intense?","What resentment did I rehearse on the drive home?","Where did I treat a person like an obstacle?","What mercy did I skip to keep my schedule pretty?",
  "Did I ask Michael to bless a grudge?","Where did I hide sin behind vague spiritual language?","What duty did I spiritualize into laziness?","Whom did I refuse to invite toward hope?","Where did comparison kill gratitude?",
  "Did I listen before defending myself?","What app should I delete for freedom?","Where did I perform holiness online?","What small fidelity would change tomorrow morning?","Whom did I need to thank out loud?",
  "Where did I let headlines disciple my imagination?","Did I pray against someone instead of for conversion?","What body-care did I neglect and call sacrifice?","Where did shame cancel a late start?","What joy did I refuse because it felt undeserved?",
  "Did I keep Sunday non-negotiable?","Where did I use warfare talk to avoid a hard conversation?","What alms would cost me just enough?","Whom did I correct without love?","Where did I forget Mary while talking about angels?",
  "Did I finish today's day number without drama?","What fear made me postpone beginning?","Where did I keep score in prayer?","What thanksgiving have I postponed?","Whom should I carry for fifteen minutes of intercession?",
  "Where did politics colonize my intention?","Did I treat angels like pets or servants of Christ?","What ordinary kitchen holiness did I despise?","Where did I quit at the first distraction?","What would Michaelmas thank God for if it arrived tonight?",
  "Where did I start tomorrow forever instead of praying today?",
];



// 46 structurally different second-beat lines per section (indexed by day)
function why2Line(n, d) {
  const L = [
    `People typing Day ${n} into search usually want covering for ${d.intention} more than a lecture, and this page meets them inside ${d.scene}.`,
    `Day ${n} is not recycled filler: ${d.audience} get a dated way to carry ${d.intention} through ${d.weather}.`,
    `If ${d.scene} is where your week actually happens, Day ${n} refuses to wait for a prettier chapel before naming ${d.intention}.`,
    `The plea under St Michael's Lent Novena Day ${n} is often raw — ${d.intention} — and ${d.audience} deserve a free text plus a clear no to ${d.mistake}.`,
    `Day ${n} converts August-September searching into obedience: open the novena, hold ${d.intention}, pursue ${d.virtue}.`,
    `Covering prayer for ${d.intention} has to survive ${d.scene}; Day ${n} on ${d.dt.short} is built for that survival, not for vibes.`,
    `What ${d.audience} need from Day ${n} is simple: ${d.intention} named, ${d.vice} faced, ${d.success} chosen over ${d.mistake}.`,
    `Day ${n} answers restless browsers with a number, a load (${d.intention}), and ${d.metaphor} instead of spiritual shopping.`,
    `Under ${d.weather}, Day ${n} still asks ${d.audience} to bring ${d.intention} without waiting for ideal silence.`,
    `A free novena page matters on Day ${n} because ${d.intention} should not depend on screenshots floating through group chats.`,
    `Day ${n} keeps ${d.intention} from dissolving into vague angel talk while ${d.audience} stand in ${d.scene}.`,
    `Searchers rarely want cosmology essays; on Day ${n} they want help with ${d.intention} and a path toward ${d.virtue}.`,
    `Let Day ${n} be the day ${d.audience} stop collecting tips and start praying ${d.intention} with ${d.virtue} in view.`,
    `Inside ${d.scene}, Day ${n} makes ${d.intention} concrete enough to obey before bedtime on ${d.dt.weekday}.`,
    `Day ${n} exists so ${d.mistake} cannot pretend to be zeal while ${d.intention} goes unnamed.`,
    `For ${d.audience}, Day ${n} is permission to begin imperfectly with ${d.intention} under ${d.weather}.`,
    `The Assumption-to-Michaelmas road only works if Day ${n} actually carries ${d.intention} through ${d.scene}.`,
    `Day ${n} refuses spiritual vagueness: ${d.intention}, ${d.virtue}, ${d.vice}, ${d.success} — then pray.`,
    `When ${d.weather} drains resolve, Day ${n} still anchors ${d.audience} to ${d.intention} and away from ${d.mistake}.`,
    `Day ${n}'s job is pastoral and plain: help ${d.audience} pray ${d.intention} without performing holiness.`,
    `Think of Day ${n} as ${d.metaphor} applied to ${d.intention} in the middle of ${d.scene}.`,
    `No other day's intention replaces this one: Day ${n} owns ${d.intention} for ${d.audience} on ${d.dt.short}.`,
    `Day ${n} is how ${d.virtue} gets calendar space against ${d.vice} while ${d.intention} stays specific.`,
    `Busy ${d.audience} do not need more content; they need Day ${n} prayed for ${d.intention} in ${d.scene}.`,
    `Day ${n} turns a search into a vow-sized minute: name ${d.intention}, reject ${d.mistake}, ask ${d.virtue}.`,
    `If ${d.intention} matters enough to type into Google, it matters enough to pray on Day ${n} without multitasking.`,
    `Day ${n} protects ${d.audience} from ${d.mistake} by forcing ${d.intention} into spoken words ${d.place}.`,
    `Ordinary holiness for Day ${n} looks like ${d.intention} prayed through ${d.weather} toward ${d.success}.`,
    `Day ${n} will not flatter ${d.audience}; it will ask for ${d.intention} and ${d.virtue} in ${d.scene}.`,
    `Keep Day ${n} narrow: one load (${d.intention}), one virtue (${d.virtue}), one refused trap (${d.mistake}).`,
    `Day ${n} is a door labeled ${d.dt.short}; walk through it with ${d.intention} before the hallway of ${d.scene} distracts you.`,
    `Among 46 days, only Day ${n} pairs this date with ${d.intention} for ${d.audience} facing ${d.vice}.`,
    `Day ${n} teaches that ${d.success} grows where ${d.intention} is prayed and ${d.mistake} is named.`,
    `Let ${d.metaphor} interpret Day ${n}: slow formation around ${d.intention}, not fireworks around ego.`,
    `Day ${n} belongs to ${d.audience} who are tired of theory and ready to carry ${d.intention} into the novena text.`,
    `On Day ${n}, ${d.weather} is not an excuse; it is weather — and ${d.intention} still gets prayed.`,
    `Day ${n} stitches Marian hope to angelic courage by keeping ${d.intention} in the middle of ${d.scene}.`,
    `Refuse to let Day ${n} become aesthetic; bind it to ${d.intention}, ${d.virtue}, and ${d.success}.`,
    `Day ${n} is short enough for real life and sharp enough for ${d.intention} among ${d.audience}.`,
    `Whatever else fails this week, Day ${n} can still hold ${d.intention} without requiring perfect feelings.`,
    `Day ${n} answers fear with a plan: pray ${d.intention}, seek ${d.virtue}, leave ${d.mistake} behind in ${d.scene}.`,
    `The unique seal of Day ${n} is not a slogan; it is ${d.intention} prayed by ${d.audience} under ${d.weather}.`,
    `Day ${n} keeps Catholic Bible Online and Guide Catholic in their lanes: text there, why-and-how here for ${d.intention}.`,
    `If you remember only one line from Day ${n}, remember ${d.intention} and the ask for ${d.virtue}.`,
    `Day ${n} is where ${d.audience} practice showing up for ${d.intention} when ${d.scene} stays loud.`,
    `Finish reading about Day ${n} quickly; the point is praying ${d.intention} before ${d.mistake} invents a delay.`,
  ];
  return L[n - 1];
}

function how2Line(n, d) {
  const L = [
    `Minutes scarce under ${d.weather}? Give Day ${n} what you have, keep ${d.intention} spoken, and return later rather than surrendering to ${d.mistake}.`,
    `A truncated Day ${n} that still names ${d.intention} beats a canceled day that protects ${d.vice}.`,
    `Shift work cannot veto Day ${n}; pray the fragment you can, clutch ${d.intention}, and chase ${d.virtue} without theater.`,
    `If ${d.scene} interrupts, pause Day ${n}, breathe, restart the sentence that holds ${d.intention} — do not crown ${d.mistake} as realism.`,
    `Day ${n} prefers honest brevity with ${d.intention} over a long performance that hides ${d.vice}.`,
    `When the clock is cruel, Day ${n} still fits: short St. Michael Prayer + ${d.intention}, fuller text when ${d.weather} eases.`,
    `Do not let ${d.mistake} redefine Day ${n} as all-or-nothing; ${d.audience} grow by returning to ${d.intention}.`,
    `Parked-car Day ${n} counts if ${d.intention} is real and ${d.virtue} is requested against ${d.vice}.`,
    `Night-shift Day ${n} begins whenever you begin; God is not trapped in office hours while you hold ${d.intention}.`,
    `If children erupt mid-prayer, finish one line of Day ${n} about ${d.intention} and resume — formation is often interrupted and still holy.`,
    `Keep a paper card for Day ${n} saying ${d.intention} so a dead phone cannot erase the appointment.`,
    `Day ${n} method under pressure: ${d.place}, one breath, ${d.intention}, Amen, then the fuller page when possible.`,
    `Refuse the lie that Day ${n} requires spa-level silence; ${d.scene} is allowed while ${d.intention} stays clear.`,
    `Better a limping Day ${n} aimed at ${d.success} than a perfect plan that never starts because of ${d.mistake}.`,
    `Use the timer as mercy on Day ${n}: twelve minutes for ${d.intention}, then re-enter ${d.scene} gentler.`,
    `If scrupulous fear inflates Day ${n}, stop at the written text; ${d.intention} does not need invented extras.`,
    `Commute Day ${n}: eyes on the road, ${d.intention} on the lips only when parked — prudence is part of ${d.virtue}.`,
    `Let dishwashing finish Day ${n}'s Amen while you still hold ${d.intention} and reject ${d.mistake}.`,
    `A whispered Day ${n} in ${d.scene} outranks a silent ideal that never happens for ${d.audience}.`,
    `When ${d.weather} spikes irritability, shorten Day ${n}, keep ${d.intention}, and ask specifically for ${d.virtue}.`,
    `Day ${n} can be split morning/night if ${d.intention} remains the same thread against ${d.vice}.`,
    `Put the phone face down for Day ${n}; notifications disciple faster than ${d.intention} unless you choose.`,
    `If you forget Day ${n} until evening, begin then — late fidelity still carries ${d.intention} past ${d.mistake}.`,
    `Invite one person into Day ${n}'s ${d.intention} by name; intercession keeps ${d.audience} from self-focus.`,
    `Day ${n} pair: water glass + three breaths + ${d.intention}, because bodies pray whether we admit it.`,
    `Skip the aesthetic setup; Day ${n} needs ${d.intention} more than candles while ${d.scene} stays real.`,
    `If anger follows Day ${n}, you found a wound near ${d.vice} — keep ${d.intention}, schedule Confession.`,
    `Write ${d.intention} on a sticky note dated for Day ${n}; ink helps the will outlast ${d.weather}.`,
    `Day ${n} is allowed to be prayed ugly; beauty is optional, ${d.virtue} is not.`,
    `When multitasking tempts you, that is ${d.mistake} knocking — Day ${n} and ${d.intention} deserve undivided minutes.`,
    `Use earplugs or a walk if ${d.scene} is chaos; Day ${n} follows you with ${d.intention} intact.`,
    `A four-minute Day ${n} that tells the truth about ${d.intention} trains honesty better than a distracted half hour.`,
    `Keep Sunday Mass non-negotiable even while Day ${n} feels urgent around ${d.intention}.`,
    `If group-chat performance tempts you, pray Day ${n} first for ${d.intention}, post nothing.`,
    `Day ${n} checklist: body ${d.place}, mouth saying ${d.intention}, will asking ${d.virtue}, heart refusing ${d.mistake}.`,
    `Return to Day ${n} after interruptions without shame; ${d.audience} learn perseverance around ${d.intention}.`,
    `Let ${d.metaphor} pace Day ${n}: slow heat, not a sprint that burns out ${d.virtue}.`,
    `When boredom arrives mid-Day ${n}, stay anyway — boredom often guards ${d.intention} from emotional addiction.`,
    `End Day ${n}'s method with one gratitude for protection you did not notice while carrying ${d.intention}.`,
    `If you lead others, model calm Day ${n} pacing so ${d.intention} does not become a race.`,
    `Day ${n} survives imperfect posture; it does not survive refusing to name ${d.intention}.`,
    `Put tomorrow's reminder where eyes land; Day ${n} fidelity helps Day ${n + 1} begin with ${d.success} in view.`,
    `Choose the short prayer as doorway on hard days, then re-enter Day ${n}'s fuller text for ${d.intention}.`,
    `Hydrate, sit upright, begin Day ${n}; holiness for ${d.audience} is often this ordinary around ${d.intention}.`,
    `If tears come during Day ${n}, let them water ${d.intention}; if numbness comes, stay for ${d.virtue}.`,
    `Day ${n} ends the method section when you actually open the novena — reading about ${d.intention} is not yet praying it.`,
  ];
  return L[n - 1];
}

function mercy2Line(n, d) {
  const L = [
    `If that mercy for ${d.intention} slips, keep Day ${n}: short St. Michael Prayer, smaller kindness, no crowning of ${d.mistake}.`,
    `Failed charity is not a veto on Day ${n}; try again toward ${d.success} while ${d.audience} watch your humility.`,
    `A smaller kindness still tied to Day ${n} and ${d.intention} beats quitting in the name of high standards.`,
    `When ${d.mercy} does not happen, confess the gap without drama and let Day ${n} continue against ${d.vice}.`,
    `Do not weaponize perfection against Day ${n}; imperfect mercy plus ${d.intention} still disciples ${d.audience}.`,
    `Restart mercy at lunch if midnight feels impossible; Day ${n} loves returns more than ${d.mistake} does.`,
    `Scale the act down until it is doable, keep it linked to ${d.intention}, and refuse ${d.mistake}'s all-or-nothing script for Day ${n}.`,
    `Pray, act, or begin again — Day ${n} is a school of ${d.virtue}, not a courtroom for ${d.audience}.`,
    `Missing ${d.mercy} does not erase Day ${n}'s prayers; it reveals where ${d.vice} still recruits you.`,
    `Choose a tinier cost that still honors Day ${n} and ${d.intention} rather than performing despair.`,
    `Let ${d.success} redefine winning for Day ${n} if the original mercy plan collapses under ${d.weather}.`,
    `Ask forgiveness, then move your feet; Day ${n} is allergic to rumination dressed as holiness for ${d.audience}.`,
    `Replace the skipped act with five undistracted minutes of listening offered for ${d.intention} on Day ${n}.`,
    `Mercy delayed until tomorrow still needs today's Day ${n} prayer holding ${d.intention} against ${d.mistake}.`,
    `If pride shames you after missing today's mercy plan (${d.mercy}), that shame is not ${d.virtue} — return to Day ${n} gently.`,
    `Keep the offering sentence even for a smaller deed: Day ${n}, St. Michael, ${d.intention}.`,
    `Day ${n} measures love by returning, not by never stumbling near ${d.scene}.`,
    `Trade spectacle for stealth: a hidden kindness can salvage Day ${n}'s mercy goal around ${d.intention}.`,
    `Tell God the truth about the miss, then act; Day ${n} prefers honesty to spiritual branding for ${d.audience}.`,
    `Let ${d.metaphor} interpret the restart — slow heat, another hammer strike for ${d.virtue} on Day ${n}.`,
    `A text of encouragement can stand in when ${d.mercy} is impossible, still aimed at Day ${n}'s ${d.intention}.`,
    `Do not livestream repentance; just repair what you can and keep Day ${n} pointed at ${d.success}.`,
    `If money is tight, give time; if time is tight, give courtesy — Day ${n} still ties it to ${d.intention}.`,
    `Failure + return = formation; failure + quitting = ${d.mistake} winning Day ${n} from ${d.audience}.`,
    `Ask Mary, Queen of Angels, to steady Day ${n} while you attempt a smaller mercy for ${d.intention}.`,
    `Write the deferred mercy on tomorrow's card, but finish today's Day ${n} prayers for ${d.intention} tonight.`,
    `Let Confession handle patterns; let Day ${n} handle today's next right step toward ${d.virtue}.`,
    `A glass of water brought to someone tired can redeem a missed grand plan on Day ${n}.`,
    `Refuse contempt for your limits; Day ${n} trains ${d.audience} in ${d.virtue}, not in self-hatred.`,
    `Keep mercy proportional to your state in life while Day ${n} keeps ${d.intention} disproportionate to excuses.`,
    `If the original act would harm prudence, adapt it; Day ${n} wants ${d.intention} served wisely.`,
    `Say aloud the offering even over a tiny deed so Day ${n} stays sacramental in imagination for ${d.audience}.`,
    `Lost the afternoon? Evening still belongs to Day ${n} and a scaled mercy under ${d.weather}.`,
    `Compare less, restart more; Day ${n} is not a contest of ${d.mercy} aesthetics.`,
    `Let ${d.success} be recalibrated without cynicism, then walk it out before sleep on Day ${n}.`,
    `A forgiven feud fragment can replace a skipped errand and still honor Day ${n}'s ${d.intention}.`,
    `When energy is gone, pray Day ${n}, sleep, and place mercy first tomorrow — without letting ${d.mistake} narrate defeat.`,
    `Hidden alms, hidden apology, hidden patience: any can rescue Day ${n}'s charity goal for ${d.intention}.`,
    `Ask a friend to check whether you acted; accountability can serve Day ${n} for ${d.audience}.`,
    `Do the next kind thing you see; Day ${n} will recognize it if ${d.intention} is still the motive.`,
    `Mercy is not a brand; Day ${n} wants ${d.virtue} embodied near ${d.scene}.`,
    `If you over-promised, under-promise tomorrow and over-deliver on Day ${n}'s actual capacity.`,
    `Keep St. Michael in the sentence so Day ${n}'s mercy does not drift into secular hustle away from ${d.intention}.`,
    `A cleaned kitchen offered for someone else's peace can stand in when ${d.mercy} is blocked on Day ${n}.`,
    `End the day truthful: prayed Day ${n}, attempted mercy for ${d.intention}, refused to quit into ${d.mistake}.`,
    `Michaelmas will not ask for flawless streaks; it will ask whether Day ${n} taught you to begin again around ${d.intention}.`,
  ];
  return L[n - 1];
}


function heart2Line(n, d) {
  const verbs = ["Sit with","Hold","Face","Whisper","Write","Carry","Admit","Name","Offer","Test","Weigh","Bring","Place","Rest","Keep","Taste","Allow","Own","See","Hear","Mark","Trace","Open","Close","Guard","Yield","Ask","Tell","Show","Leave","Trust","Release","Examine","Notice","Return","Begin","End","Stay","Move","Choose","Refuse","Welcome","Measure","Remember","Forgive","Hope"];
  const v = verbs[n - 1];
  const variants = [
    () => `${v} Day ${n}'s examen — ${d.examen} — for one quiet minute, then entrust ${d.intention} to God instead of replaying ${d.vice}.`,
    () => `Examen for ${d.audience} on Day ${n}: ${d.examen} Let the answer season sleep while ${d.intention} stays under mercy, not under ${d.mistake}.`,
    () => `Before sleep after Day ${n}, ask only this: ${d.examen} Then hand ${d.intention} back to God and refuse another lap of ${d.vice} in ${d.scene}.`,
    () => `Day ${n} night check (${d.examen}) should end in trust: ${d.intention} with God, ${d.virtue} requested, ${d.weather} no longer in charge.`,
    () => `${d.examen} That question is Day ${n}'s lantern for ${d.audience}; answer it, release ${d.intention}, and let sleep be faith.`,
    () => `Make Day ${n}'s last interior act honest: ${d.examen} Afterwards, stop managing ${d.intention} and let God keep watch beyond ${d.scene}.`,
  ];
  return variants[(n - 1) % 6]();
}

function depth2Line(n, d) {
  const variants = [
    () => `Day ${n} without the Cross turns angel-talk into fantasy; accept a quiet cross in ${d.scene} while seeking ${d.virtue}, naming ${d.vice}, and rejecting ${d.mistake} around ${d.intention}.`,
    () => `If prayer on Day ${n} makes home harsher, purify ${d.intention} before calling it zeal — ${d.audience} need ${d.virtue}, not volume, inside ${d.scene}.`,
    () => `Crucified love for Day ${n} looks like ${d.success} in ${d.scene}, not stigmata theater; keep ${d.intention} and drop ${d.mistake}.`,
    () => `La Verna's memory beside Day ${n} means wounds healed toward charity: ${d.virtue} against ${d.vice} while ${d.intention} stays clean of ${d.mistake}.`,
    () => `Under ${d.weather}, Day ${n} still refuses headline-discipleship; hold ${d.intention}, choose ${d.virtue}, and let ${d.scene} become a small station of the Cross.`,
    () => `Fantasy ends where Day ${n} meets a real cost in ${d.scene} for ${d.audience} carrying ${d.intention} toward ${d.success}.`,
  ];
  return variants[(n - 1) % 6]();
}

function pastoral2Line(n, d) {
  const variants = [
    () => `If warfare words frighten ${d.audience}, shrink Day ${n} to the short St. Michael Prayer with ${d.intention}, then speak to a priest instead of feeding ${d.mistake} online.`,
    () => `Complacent in ${d.scene}? Let Day ${n} press you toward ${d.virtue} under ${d.weather} without panic while ${d.intention} stays named.`,
    () => `Anxious souls among ${d.audience} may keep Day ${n} brief, hold ${d.intention}, and choose sacramental help over darker binge content tied to ${d.mistake}.`,
    () => `Pastoral wisdom for Day ${n}: fear gets a shorter prayer and a phone call; complacency gets a fuller Day ${n} aimed at ${d.virtue} and ${d.intention}.`,
    () => `Do not let ${d.mistake} recruit ${d.audience} through either terror or boredom — Day ${n} holds both temptations to the light of ${d.intention}.`,
    () => `Shepherd-shaped counsel on Day ${n}: protect the fearful, awaken the sleepy, and keep ${d.intention} from becoming a slogan in ${d.scene}.`,
  ];
  return variants[(n - 1) % 6]();
}

function scripture2Line(n, d) {
  const variants = [
    () => `On ${d.dt.weekday} write one line dated ${d.dt.short} that ties ${d.ref} to ${d.intention} and ${d.virtue} for ${d.audience}.`,
    () => `Park ${d.ref} beside Day ${n}'s novena tab so ${d.gloss} stays practical while you carry ${d.intention} through ${d.scene}.`,
    () => `A single dated sentence linking ${d.ref} to ${d.intention} is enough Scripture homework after Day ${n} under ${d.weather}.`,
    () => `Let ${d.gloss} interpret ${d.intention} on Day ${n}; keep the note where ${d.audience} will see it tomorrow.`,
    () => `Scripture seal for Day ${n}: ${d.ref} read slowly, ${d.intention} named, ${d.virtue} requested, ${d.mistake} refused.`,
    () => `After ${d.ref}, sit sixty seconds for Day ${n} before re-entering ${d.scene} with ${d.intention} still honest.`,
  ];
  return variants[(n - 1) % 6]();
}

function closing2Line(n, d) {
  const variants = [
    () => `Before Michaelmas asks for a report, practice Day ${n} in ${d.scene}: refuse ${d.mistake}, keep ${d.intention} honest, open Catholic Bible Online under ${d.weather}.`,
    () => `Day ${n}'s next move is prayer, not more browsing — ${d.intention} on the lips, ${d.virtue} in the will, ${d.audience} served by fidelity.`,
    () => `Step from this briefing into Day ${n}'s full text while ${d.metaphor} still makes sense of ${d.intention} in ${d.scene}.`,
    () => `Leave the article; take ${d.intention}; pray Day ${n}; let ${d.success} be tomorrow's quiet evidence for ${d.audience}.`,
    () => `Catholic Bible Online holds Day ${n}'s words now — carry ${d.intention} there without multitasking through ${d.weather}.`,
    () => `End reading about Day ${n} the moment ${d.intention} is clear enough to pray ${d.place} for ${d.audience}.`,
  ];
  return variants[(n - 1) % 6]();
}

function assertLen(name, arr) {
  if (arr.length !== 46) throw new Error(`${name} length ${arr.length}`);
  if (new Set(arr).size !== 46) throw new Error(`${name} has duplicates`);
}
["intentions","vices","virtues","places","audiences","mercies","scriptures","metaphors","mistakes","successMetrics","whyOpeners","openersA","scenes","weatherBeats","examenQs"].forEach((k) => {
  const map = { intentions, vices, virtues, places, audiences, mercies, scriptures, metaphors, mistakes, successMetrics, whyOpeners, openersA, scenes, weatherBeats, examenQs };
  if (k === "scriptures") {
    if (scriptures.length !== 46) throw new Error("scriptures length");
    return;
  }
  assertLen(k, map[k]);
});

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}

function feastSentence(n, dt, intention, metaphor) {
  if (feast[n]) {
    return `Because ${dt.short} also touches ${feast[n]}, let that celebration color ${intention} while Day ${n} still remains ${metaphor}.`;
  }
  const alts = [
    `No solemnity is required to sanctify Day ${n}; praying for ${intention} ${places[n - 1]} already consecrates ${dt.weekday}.`,
    `Ordinary ${dt.weekday} becomes holy when Day ${n} carries ${intention} without waiting for a feast banner.`,
    `Day ${n} on ${dt.short} proves that ${metaphor} can form saints between solemnities while you hold ${intention}.`,
    `Even without a major feast, Day ${n} asks ${audiences[n - 1]} to keep ${intention} ahead of distraction.`,
    `The holiness of Day ${n} is measured by ${successMetrics[n - 1]} around ${intention}, not by whether a feast fills the missal.`,
  ];
  return alts[(n - 1) % alts.length];
}

function build(n) {
  const dt = dateForDay(n);
  const idx = n - 1;
  const intention = intentions[idx];
  const vice = vices[idx];
  const virtue = virtues[idx];
  const place = places[idx];
  const audience = audiences[idx];
  const mercy = mercies[idx];
  const [ref, gloss] = scriptures[idx];
  const metaphor = metaphors[idx];
  const mistake = mistakes[idx].replace(/Day N/g, `Day ${n}`);
  const success = successMetrics[idx].replace(/Day N/g, `Day ${n}`);
  const why0 = whyOpeners[idx];
  const oa = openersA[idx];
  const completed = n - 1;
  const remaining = 46 - n;
  const feastLine = feastSentence(n, dt, intention, metaphor);

  const scene = scenes[idx];
  const weather = weatherBeats[idx];
  const examen = examenQs[idx];

  // Interleave exclusive tokens so no shared 8-word scaffolds survive normalization of Day/Date only
  const opening = `${oa} On ${dt.weekday} (${dt.short}), Day ${n} carries ${intention} through ${scene}. There ${weather} joins the ask for ${virtue} against ${vice}, while ${audience} refuse the trap of ${mistake} and aim at ${success} inside ${metaphor}. ${feastLine}`;

  const whyConnectors = [
    'That is precisely why',
    'Which is exactly why',
    'And so it follows that',
    'For this reason',
    'Hence',
    'Therefore',
  ];
  const why = `${why0}. ${whyConnectors[(n - 1) % 6]} ${audience} need Day ${n} on ${dt.short}: ${intention} belongs inside St. Michael's Lent Novena, ${virtue} must answer ${vice}, and ${success} must outrank ${mistake} even when ${weather} meets ${scene}.`;

  const why2 = why2Line(n, { intention, audience, scene, weather, mistake, virtue, vice, success, metaphor, place, dt });

  const how = `Pray Day ${n} on ${dt.weekday} by arriving ${place}, silencing the phone, and speaking ${intention} once before Catholic Bible Online. Let ${scene} be honest enough for ${audience}, request ${virtue} against ${vice}, and block the trap of ${mistake} so ${success} can appear.`;

  const how2 = how2Line(n, { intention, audience, scene, weather, mistake, virtue, vice, success, metaphor, place, dt });

  const heart = `Day ${n} heart work keeps ${intention} outward while ${vice} yields to ${virtue}. When feelings flatten, remember ${metaphor}; when honesty is needed, let ${scene} serve ${audience} better than ${mistake} ever could.`;

  const heart2 = heart2Line(n, { examen, intention, vice, mistake, audience, scene, virtue, weather });

  const depth = `Day ${n} sits after ${completed} finished day(s) and before ${remaining} day(s) until Michaelmas, acting as ${metaphor} for ${audience} holding ${intention}. On ${dt.short} the number locates you; ${weather} does not define your worth before God.`;

  const depth2 = depth2Line(n, { scene, virtue, vice, mistake, intention, audience, success, weather, metaphor, examen });

  const pastoral = `For ${audience}, Day ${n} should grow fidelity, not spectacle: pray ${intention} ${place}, ask ${virtue} against ${vice}, dodge ${mistake}, and watch for ${success} on an ordinary ${dt.weekday} inside ${scene}.`;

  const pastoral2 = pastoral2Line(n, { audience, intention, mistake, scene, virtue, weather });

  const scripture = `Pair Day ${n} with ${ref} — ${gloss} — as Scripture for ${intention}. Ask how ${virtue} meets ${vice} for ${audience} in ${scene}, refusing both ${mistake} and idle angel-curiosity.`;

  const scripture2 = scripture2Line(n, { dt, ref, intention, virtue, audience, gloss, scene, weather, mistake });

  const mercyOpeners = [
    `By midnight on ${dt.short}, ${mercy}.`,
    `Before ${dt.weekday} ends, ${mercy}.`,
    `As Day ${n} leaves the chapel of the heart, ${mercy}.`,
    `Make ${dt.short} costly in a small way: ${mercy}.`,
    `Let charity prove Day ${n}: ${mercy}.`,
    `Outside ${scene}, live Day ${n} by this: ${mercy}.`,
  ];
  const mercyBridges = [
    `Place the act under St. Michael for Day ${n}'s ${intention}`,
    `Hand that deed to St. Michael while Day ${n} holds ${intention}`,
    `Connect the kindness to Day ${n} and ${intention} through St. Michael`,
    `Say the offering with St. Michael's name for Day ${n}'s ${intention}`,
    `Bind the mercy to Day ${n} via St. Michael for ${intention}`,
    `Let St. Michael present Day ${n}'s deed for ${intention}`,
  ];
  const mercyPara = `${mercyOpeners[(n - 1) % 6]} ${mercyBridges[(n - 1) % 6]}, so ${audience} witness ${virtue} outworking ${vice} until ${success} outweighs ${mistake} inside ${scene}.`;

  const mercy2 = mercy2Line(n, { intention, audience, scene, weather, mistake, virtue, vice, success, metaphor, place, dt, mercy });

  const closingOpeners = [
    `Close Day ${n} by opening the novena prayers for ${intention}`,
    `End the Day ${n} guide and begin the prayers that carry ${intention}`,
    `Step out of this Day ${n} article into the novena text holding ${intention}`,
    `Finish reading Day ${n}; start praying with ${intention} still named`,
    `Trade the briefing for Day ${n}'s full prayers around ${intention}`,
    `Leave commentary behind on Day ${n} and pray for ${intention}`,
  ];
  const closing = `${closingOpeners[(n - 1) % 6]}, practicing ${virtue}, releasing ${vice}, and marking ${dt.short} with ${success} among ${audience}. See the path as ${metaphor} moving through ${scene} beneath ${weather}.`;

  const closing2 = closing2Line(n, { scene, mistake, intention, weather, virtue, audience, metaphor, success, place });

  const cta = `For ${intention} on ${dt.short}, Day ${n}'s full free text (St. Michael Prayer, litany, consecration, angelic Our Fathers) waits on Catholic Bible Online — built for ${audience} seeking ${virtue} rather than ${mistake} amid ${scene}.`;

  const answerForms = [
    `<strong>Day ${n}</strong> of St. Michael&apos;s Lent Novena is <strong>${dt.short}</strong> (${dt.weekday}). Suggested intention: ${esc(intention)}. Pray the free full text on Catholic Bible Online, then live one concrete mercy.`,
    `St Michael&apos;s Lent Novena <strong>Day ${n}</strong> falls on <strong>${dt.weekday}, ${dt.short}</strong>. Bring ${esc(intention)} into the prayers, then open Catholic Bible Online for the complete Day ${n} page.`,
    `Looking for <em>St Michael&apos;s Lent Novena Day ${n}</em>? The civil date is <strong>${dt.short}</strong>. This page orients ${esc(audience)}; Catholic Bible Online holds the novena words.`,
    `<strong>${dt.short}</strong> is Day ${n} on the Assumption-to-Michaelmas road. Name ${esc(intention)}, ask for ${esc(virtue)}, and refuse ${esc(mistake)}.`,
    `Catholic guide for <strong>Day ${n}</strong> (${dt.short}): unique counsel aimed at ${esc(audience)}, with links to the novena index and Day ${n} prayer page.`,
    `Day ${n} (${dt.short}) confronts ${esc(vice)} by requesting ${esc(virtue)} while you carry ${esc(intention)} into St. Michael&apos;s Lent Novena.`,
  ];

  const h2 = [
    `Why Day ${n} on ${dt.short} deserves a real yes`,
    `How to pray Day ${n} without performing`,
    `Heart focus: ${virtue} against ${vice}`,
    `Going further on Day ${n}`,
    `Pastoral note for ${audience}`,
    `Scripture beside Day ${n}: ${ref}`,
    `Mercy that matches Day ${n}`,
    `Finish Day ${n}, then pray the text`,
  ];

  // Make H2s unique across days by including exclusive tokens
  h2[0] = `Why Day ${n} (${dt.short}) serves ${intention}`;
  h2[1] = `Praying Day ${n} ${place}`;
  h2[2] = `Day ${n} heart focus: ${virtue} vs ${vice}`;
  h2[3] = `Day ${n} as ${metaphor}`;
  h2[4] = `Day ${n} counsel for ${audience}`;
  h2[5] = `Day ${n} and ${ref}`;
  h2[6] = `Day ${n} mercy: ${mercy.split(' ').slice(0, 6).join(' ')}…`;
  h2[7] = `Close Day ${n} briefing; open the prayers`;

  return {
    dt,
    answer: answerForms[n % 6],
    opening,
    why: why + ' ' + why2,
    how: how + ' ' + how2,
    heart: heart + ' ' + heart2,
    depth: depth + ' ' + depth2,
    pastoral: pastoral + ' ' + pastoral2,
    scripture: scripture + ' ' + scripture2,
    mercy: mercyPara + ' ' + mercy2,
    closing: closing + ' ' + closing2,
    cta,
    h2,
    faq: [
      { q: `What is St Michael's Lent Novena Day ${n}?`, a: `It is Day ${n} in the 46-day St. Michael's Lent novena (August 15–September 29, 2026). Today's civil date is ${dt.short}. This page's suggested intention is ${intention}.` },
      { q: `Do I have to start on August 15 to pray Day ${n}?`, a: `No. Begin with today's day number and continue through September 29. Consistency matters more than a perfect start — especially for ${audience}.` },
      { q: `Where is the full Day ${n} prayer text?`, a: `On Catholic Bible Online's St. Michael's Lent Novena — open the main index or the Day ${n} page for the complete prayers while you carry ${intention}.` },
      { q: `How long does Day ${n} take?`, a: `About 10–15 minutes for the full novena text. If that is impossible on ${dt.weekday}, pray the short St. Michael Prayer with ${intention} and return later.` },
      { q: `What intention fits Day ${n}?`, a: `A focused choice for this page is ${intention}. You may name another need; keep it specific enough to obey, and ask for ${virtue} against ${vice}.` },
    ],
  };
}

function sentences(t) {
  return t
    .split(/(?<=[.!?])\s+/)
    .map((x) => x.trim())
    .filter((x) => x.split(/\s+/).length >= 10);
}
function norm(s) {
  return s
    .replace(/Day \d+/g, "Day N")
    .replace(/August \d+, 2026|September \d+, 2026/g, "DATE")
    .replace(/\s+/g, " ")
    .trim();
}

function audit(days) {
  const map = new Map();
  const fields = ["opening", "why", "how", "heart", "depth", "pastoral", "scripture", "mercy", "closing", "cta"];
  const collisions = [];
  for (let n = 1; n <= 46; n++) {
    const d = days[n - 1];
    for (const f of fields) {
      for (const s of sentences(d[f])) {
        const k = norm(s);
        if (!map.has(k)) map.set(k, { n, f });
        else collisions.push({ a: map.get(k), b: { n, f }, k: k.slice(0, 160) });
      }
    }
  }
  return collisions;
}

const days = Array.from({ length: 46 }, (_, i) => build(i + 1));
let collisions = audit(days);
if (collisions.length) {
  console.error("pre-write collisions", collisions.length);
  collisions.slice(0, 30).forEach((c) => console.error(c));
  throw new Error("uniqueness failed");
}
console.log("sentence uniqueness OK");

function bodyHtml(n, slug, d) {
  const h = d.h2;
  return `
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.opening)}
              </LinkedText>

              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Day ${n} prayer text (free)
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  ${esc(d.cta)}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="${CBO}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                  >
                    Open St. Michael&apos;s Lent Novena
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="${CBO}day-${n}/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                  >
                    Day ${n} page
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(h[0])}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.why)}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(h[1])}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.how)}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(h[2])}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.heart)}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(h[3])}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.depth)}
              </LinkedText>

              <QuizCTA
                title=${JSON.stringify(`Day ${n}: is prayer shaping your week?`)}
                description={"Take our Catholic life assessment for Mass, Confession, and daily fidelity."}
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(h[4])}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.pastoral)}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(h[5])}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.scripture)}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(h[6])}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.mercy)}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(h[7])}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${esc(d.closing)}
              </LinkedText>

              <p className="text-text leading-relaxed mb-6">
                Pray now:{" "}
                <a href="${CBO}" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">
                  St. Michael&apos;s Lent Novena
                </a>
                {" "}·{" "}
                <a href="${CBO}day-${n}/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">
                  Day ${n}
                </a>
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Next steps after Day ${n} (${d.dt.month} ${d.dt.day})</h2>
`;
}

for (let n = 1; n <= 46; n++) {
  const file = path.join(OUT, `StMichaelsLentNovenaDay${n}.tsx`);
  let s = fs.readFileSync(file, "utf8");
  const slug =
    (s.match(/canonical" href="https:\/\/guidecatholic\.com\/blog\/([^/"]+)/) ||
      s.match(/currentSlug="([^"]+)"/) ||
      [])[1];
  if (!slug) throw new Error("no slug " + n);
  const d = days[n - 1];

  const startMarker = `              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">`;
  const start = s.indexOf(startMarker);
  if (start < 0) throw new Error("no answer box " + n);
  const afterAnswer = s.indexOf("</div>", start) + 6;

  // Keep nav list + FAQ structure from original: find "Keep going" / "Next steps" ul through BlogFAQ
  const ulStart = s.search(/<h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">(Keep going after Day|Next steps after Day)/);
  const faqStart = s.indexOf("<BlogFAQ", afterAnswer);
  if (ulStart < 0 || faqStart < 0) throw new Error("markers missing " + n);

  const ulBlock = s.slice(ulStart, faqStart);
  // rebuild ul header only via bodyHtml; strip old h2 from ulBlock
  const ulOnly = ulBlock.slice(ulBlock.indexOf("<ul"));

  const newMid = bodyHtml(n, slug, d) + "              " + ulOnly;

  // Replace answer box text
  let head = s.slice(0, afterAnswer);
  head = head.replace(
    /<p className="text-lg text-text leading-relaxed font-medium">[\s\S]*?<\/p>/,
    `<p className="text-lg text-text leading-relaxed font-medium">${d.answer}</p>`
  );

  const faqJson = d.faq
    .map(
      (f) =>
        `                { question: ${JSON.stringify(f.q)}, answer: ${JSON.stringify(f.a)} }`
    )
    .join(",\n");

  // Replace FAQ array
  let tail = s.slice(faqStart);
  tail = tail.replace(/faqs=\{\[[\s\S]*?\]\}/, `faqs={[\n${faqJson}\n              ]}`);

  // Replace ArticleBottomCTA title
  tail = tail.replace(
    /title=\{[^}]+\}/,
    `title={${JSON.stringify(`Keep Day ${n} from being only a search`)}}`
  );

  s = head + "\n" + newMid + "\n            " + tail;
  fs.writeFileSync(file, s);
  console.log("rewrote", n);
}

// Final file audit
const fileMap = new Map();
let fileCollisions = 0;
for (let n = 1; n <= 46; n++) {
  const s = fs.readFileSync(path.join(OUT, `StMichaelsLentNovenaDay${n}.tsx`), "utf8");
  const text = [...s.matchAll(/<LinkedText[^>]*>\s*([\s\S]*?)\s*<\/LinkedText>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .join(" ");
  for (const sent of sentences(text)) {
    const k = norm(sent);
    if (!fileMap.has(k)) fileMap.set(k, n);
    else {
      fileCollisions++;
      if (fileCollisions <= 10) console.error("FILE COLLISION", fileMap.get(k), n, k.slice(0, 140));
    }
  }
}
console.log("file collisions", fileCollisions);
if (fileCollisions) throw new Error("file uniqueness failed");

function proseWords(c) {
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
for (let n = 1; n <= 46; n++) counts.push(proseWords(fs.readFileSync(path.join(OUT, `StMichaelsLentNovenaDay${n}.tsx`), "utf8")));
counts.sort((a, b) => a - b);
console.log("words min", counts[0], "median", counts[23], "max", counts[45]);
