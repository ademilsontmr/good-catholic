export type Inline =
  | { t: "text"; v: string }
  | { t: "ext"; href: string; label: string }
  | { t: "in"; href: string; label: string };

export type EmojiGuide = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  dateLabel: string;
  readTime: string;
  datePublished?: string;
  answer: string;
  sections: EmojiGuideSection[];
  combos?: { combo: string; label: string; message: string }[];
  rows: { emoji: string; name: string; use: string; href: string }[];
  faqs: { question: string; answer: string }[];
};

export type EmojiGuideSection = {
  h2: string;
  paragraphs: Inline[][];
  list?: Inline[][];
  table?: { caption: string; headers: string[]; rows: Inline[][][] };
  callout?: { label: string; parts: Inline[] };
};

/** `{{https://url|label}}` becomes an external link, `[[/path/|label]]` an internal one. */
function rich(source: string): Inline[] {
  const parts: Inline[] = [];
  const pattern = /\{\{([^|}]+)\|([^}]+)\}\}|\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let last = 0;
  for (const match of source.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push({ t: "text", v: source.slice(last, index) });
    if (match[1]) parts.push({ t: "ext", href: match[1], label: match[2] });
    else parts.push({ t: "in", href: match[3], label: match[4] });
    last = index + match[0].length;
  }
  if (last < source.length) parts.push({ t: "text", v: source.slice(last) });
  return parts;
}

const A = "https://allemojipedia.com";
const CBO = "https://catholicbibleonline.com/bible";

export const catholicEmojiGuides: EmojiGuide[] = [
  {
    slug: "catholic-emoji-guide",
    h1: "Catholic Emoji Guide: Which Emojis to Use in a Faith Post",
    title: "Catholic Emoji Guide for Parish and Prayer Posts | Guide Catholic",
    description: "Which emojis belong in a Catholic post: Mass, prayer, Christmas, Lent, Easter, and Bible verses — with Allemojipedia pages and Scripture on Catholic Bible Online.",
    excerpt: "A practical Catholic emoji guide: which symbols fit Mass notices, prayer, feasts, and Bible posts, and which ones confuse the message.",
    category: "Catholic Living",
    dateLabel: "October 4, 2026",
    readTime: "12 min",
    answer: "Use one or two emojis that name the kind of post — church, cross, prayer, candle, or book — and let the sentence carry the faith. When the post quotes Scripture, link the chapter on Catholic Bible Online. When you need the emoji’s name or a copy-paste page, use Allemojipedia.",
    sections: [
      {
        h2: "The emoji is a label, not the homily",
        paragraphs: [
          [
            { t: "text", v: "A parish caption, a novena story, and a Christmas greeting are different kinds of posts. The emoji should tell a scroller which kind they have opened. " },
            { t: "ext", href: `${A}/emoji/latin-cross/`, label: "The Latin cross" },
            { t: "text", v: " says the post is about Christ. " },
            { t: "ext", href: `${A}/emoji/folded-hands/`, label: "Folded hands" },
            { t: "text", v: " say the post is a prayer. " },
            { t: "ext", href: `${A}/emoji/church/`, label: "The church" },
            { t: "text", v: " says come to the building. " },
            { t: "ext", href: `${A}/emoji/open-book/`, label: "The open book" },
            { t: "text", v: " says this is Scripture. Stacking ten symbols does not make the post more Catholic. It makes the first line unreadable." },
          ],
          [
            { t: "text", v: "Allemojipedia is the place to check the official name and copy the character so a phone does not substitute a lookalike. Start at the " },
            { t: "ext", href: `${A}/`, label: "Allemojipedia homepage" },
            { t: "text", v: ", then open " },
            { t: "ext", href: `${A}/categories/`, label: "emoji categories" },
            { t: "text", v: " or the " },
            { t: "ext", href: `${A}/emoji-copy-and-paste/`, label: "copy-and-paste keyboard" },
            { t: "text", v: "." },
          ],
        ],
      },
      {
        h2: "Match the emoji to the kind of post",
        paragraphs: [
          [
            { t: "text", v: "Parish logistics — Mass time, confession, a holy day — belong with the church, the bell, and the cross. Prayer requests and the Rosary belong with folded hands, beads, and a candle. A feast day can add one seasonal mark, such as a star at Christmas or a white heart at Easter, after the cross is already there. A Bible caption should lead with the book emoji and the reference, then send the reader to the chapter." },
          ],
          [
            { t: "text", v: "The six guides next to this one go further: " },
            { t: "in", href: "/blog/emojis-for-catholic-parish-posts/", label: "parish announcements" },
            { t: "text", v: ", " },
            { t: "in", href: "/blog/emojis-for-catholic-prayer-posts/", label: "prayer posts" },
            { t: "text", v: ", " },
            { t: "in", href: "/blog/christmas-emojis-for-catholic-posts/", label: "Christmas" },
            { t: "text", v: ", " },
            { t: "in", href: "/blog/lent-and-holy-week-emojis/", label: "Lent and Holy Week" },
            { t: "text", v: ", " },
            { t: "in", href: "/blog/easter-emojis-for-catholics/", label: "Easter" },
            { t: "text", v: ", and " },
            { t: "in", href: "/blog/bible-verse-post-emojis/", label: "Bible verse posts" },
            { t: "text", v: "." },
          ],
        ],
      },
      {
        h2: "Symbols that get misread",
        paragraphs: [
          [
            { t: "text", v: "Online, the skull usually means “that is hilarious,” not death or Good Friday. Fire often means “impressive,” not Pentecost. A loudly crying face on a funeral notice looks like a meme. If the feast is serious, skip the joke glyphs and say the thing in words. A purple heart can mark Lent only if the caption says Lent. Alone, it is just a color." },
          ],
          [
            { t: "text", v: "When the caption includes a verse, do not leave people with an emoji of a book and no text they can read in context. Point them to " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/", label: "the Catholic Bible on Catholic Bible Online" },
            { t: "text", v: " or to " },
            { t: "ext", href: "https://catholicbibleonline.com/daily-verses/", label: "the verse of the day there" },
            { t: "text", v: ". Guide Catholic’s own " },
            { t: "in", href: "/daily-verses/", label: "daily Bible verse" },
            { t: "text", v: " is the short line for the morning. The chapter is the rest of the room." },
          ],
        ],
      },
    ],
    rows: [
      { emoji: "✝️", name: "Latin cross", use: "Christ, Mass, a feast of the Lord", href: `${A}/emoji/latin-cross/` },
      { emoji: "⛪", name: "Church", use: "A parish event or an address", href: `${A}/emoji/church/` },
      { emoji: "🙏", name: "Folded hands", use: "Prayer, thanks, a request", href: `${A}/emoji/folded-hands/` },
      { emoji: "📖", name: "Open book", use: "A Bible reference", href: `${A}/emoji/open-book/` },
      { emoji: "🕯️", name: "Candle", use: "Vigil, Advent, prayer", href: `${A}/emoji/candle/` },
      { emoji: "🕊️", name: "Dove", use: "Peace, the Holy Spirit, Easter", href: `${A}/emoji/dove/` },
    ],
    faqs: [
      {
        question: "How many emojis should a Catholic post use?",
        answer: "One or two. The first should name the kind of post — church, cross, prayer, or book. A second can mark the season. A row of symbols does not explain the faith.",
      },
      {
        question: "Where do I check what an emoji is called?",
        answer: "Use Allemojipedia. Each character has a meaning page and a copy button, so you are not guessing from a picture that changes between phones.",
      },
      {
        question: "Where should a Bible caption send readers?",
        answer: "To the chapter on Catholic Bible Online. An open-book emoji is not the text. The link lets people read the passage in the Catholic Bible instead of a cropped screenshot.",
      },
      {
        question: "Which emojis should a parish avoid?",
        answer: "Skip the skull on Good Friday, fire used as slang, and joke faces on a death notice or a confession reminder. If a teenager would read the glyph as a meme, do not put it on a liturgical post.",
      },
    ],
  },
  {
    slug: "emojis-for-catholic-parish-posts",
    h1: "Emojis for Catholic Parish Posts: Mass, Confession, and Holy Days",
    title: "Emojis for Catholic Parish Announcements | Guide Catholic",
    description: "Which emojis to use on Catholic parish posts for Mass times, confession, and holy days — church, cross, bell, and candle, with Allemojipedia links.",
    excerpt: "Parish announcement emojis that stay clear: church for the building, cross for the Mass, bell for the time, book when you cite the readings.",
    category: "Catholic Living",
    dateLabel: "October 4, 2026",
    readTime: "11 min",
    answer: "On a parish post, lead with the church emoji for a time and place, the Latin cross when the event is Mass, and the bell when you are publishing a clock time. If you name the Sunday Gospel, link that chapter on Catholic Bible Online.",
    sections: [
      {
        h2: "What a parish caption has to do",
        paragraphs: [
          [
            { t: "text", v: "People open a parish post to learn when to come, whether children are welcome, and whether the obligation is a holy day. The emoji should not compete with the time. Put " },
            { t: "ext", href: `${A}/emoji/church/`, label: "the church emoji" },
            { t: "text", v: " beside the address, " },
            { t: "ext", href: `${A}/emoji/bell/`, label: "the bell" },
            { t: "text", v: " beside the hour, and " },
            { t: "ext", href: `${A}/emoji/latin-cross/`, label: "the Latin cross" },
            { t: "text", v: " when the event is the Eucharist rather than a meeting. Confession can use the cross and folded hands. A finance council meeting does not need a dove." },
          ],
          [
            { t: "text", v: "Copy the character from Allemojipedia so the glyph is the one you mean. The " },
            { t: "ext", href: `${A}/`, label: "Allemojipedia site" },
            { t: "text", v: " lists the name under the picture. That matters when a keyboard offers several crosses and only one is the Latin cross used for Christ." },
          ],
        ],
      },
      {
        h2: "Sunday Mass, confession, and a holy day",
        paragraphs: [
          [
            { t: "text", v: "A Sunday line can be: church, “Sunday Mass 9:00 and 11:00,” bell, the address. Add the cross once. If you mention the Gospel by chapter, do not paste a long copyrighted translation into the caption. Send people to " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/", label: "Catholic Bible Online" },
            { t: "text", v: " and name the book. A Matthew Sunday can point to " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/matthew/5", label: "Matthew" },
            { t: "text", v: " or whichever chapter the lectionary actually assigns. Check the missal before you link a chapter you have not read." },
          ],
          [
            { t: "text", v: "Confession posts work with folded hands and a plain sentence: day, hour, and “in the church.” A holy day of obligation needs the name of the feast in words. The emoji cannot say “obligation.” " },
            { t: "ext", href: `${A}/emoji/candle/`, label: "A candle" },
            { t: "text", v: " fits a vigil or an evening Mass. It does not replace the word vigil." },
          ],
        ],
      },
      {
        h2: "What not to pin on the bulletin",
        paragraphs: [
          [
            { t: "text", v: "Party poppers on a funeral Mass, a fire emoji on a serious homily notice, and a skull on Good Friday all train people to treat the parish account like a meme page. Save celebration marks for Easter and Christmas, and even then keep the cross in the line. The wider map is the " },
            { t: "in", href: "/blog/catholic-emoji-guide/", label: "Catholic emoji guide" },
            { t: "text", v: "." },
          ],
        ],
      },
    ],
    rows: [
      { emoji: "⛪", name: "Church", use: "Place, parish name, “join us”", href: `${A}/emoji/church/` },
      { emoji: "✝️", name: "Latin cross", use: "Mass and the sacraments", href: `${A}/emoji/latin-cross/` },
      { emoji: "🔔", name: "Bell", use: "A clock time", href: `${A}/emoji/bell/` },
      { emoji: "🙏", name: "Folded hands", use: "Confession or a prayer before Mass", href: `${A}/emoji/folded-hands/` },
      { emoji: "🕯️", name: "Candle", use: "Vigil Mass or Adoration", href: `${A}/emoji/candle/` },
      { emoji: "📖", name: "Open book", use: "When you cite the readings", href: `${A}/emoji/open-book/` },
    ],
    faqs: [
      {
        question: "What emoji should a Sunday Mass post use?",
        answer: "Use the church emoji for the place and the Latin cross because the event is Mass. Add the bell only if you are stating a time. Write the hour in numbers. Do not rely on the emoji to say 11:00.",
      },
      {
        question: "How do I post confession times?",
        answer: "Use folded hands and the cross, then the day and the hour in words. Say “in the church” or name the chapel. Skip joke faces. Confession is not a punch line.",
      },
      {
        question: "Should I attach the Sunday Gospel as an image only?",
        answer: "No. Name the reference and link the chapter on Catholic Bible Online so people can read it in the Catholic Bible. An open-book emoji can sit beside that link. It is not a substitute for the text.",
      },
      {
        question: "Where do I copy the church and cross emojis?",
        answer: "From their pages on Allemojipedia: the church and the Latin cross. Copying from the meaning page avoids grabbing a different cross or a generic building.",
      },
    ],
  },
  {
    slug: "emojis-for-catholic-prayer-posts",
    h1: "Emojis for Catholic Prayer Posts: Rosary, Novena, and Holy Hour",
    title: "Emojis for Catholic Prayer Posts (Rosary and Novena) | Guide Catholic",
    description: "Which emojis fit a Catholic prayer post: folded hands, rosary beads, rose, blue heart, and candle — plus the Gospel chapters behind the Our Father and the Hail Mary.",
    excerpt: "Prayer-post emojis for the Rosary, a novena, and a holy hour, with Allemojipedia pages and the Bible chapters those prayers come from.",
    category: "Catholic Living",
    dateLabel: "October 4, 2026",
    readTime: "12 min",
    answer: "Mark a prayer post with folded hands. Add rosary beads for the Rosary, a rose or blue heart for Mary, and a candle for a holy hour. If you cite the Our Father or the Hail Mary, link Matthew 6 and Luke 1 on Catholic Bible Online.",
    sections: [
      {
        h2: "Say which prayer it is",
        paragraphs: [
          [
            { t: "text", v: "“Pray for us” is too vague for a caption that asks people to join. Name the prayer. Folded hands mean prayer in general. On Allemojipedia, " },
            { t: "ext", href: `${A}/emoji/folded-hands/`, label: "folded hands" },
            { t: "text", v: " also means thanks or please, so the sentence has to say Rosary, novena, or holy hour. " },
            { t: "ext", href: `${A}/emoji/prayer-beads/`, label: "Prayer beads" },
            { t: "text", v: " are the right second mark for the Rosary. A " },
            { t: "ext", href: `${A}/emoji/rose/`, label: "rose" },
            { t: "text", v: " or a " },
            { t: "ext", href: `${A}/emoji/blue-heart/`, label: "blue heart" },
            { t: "text", v: " fits a Marian day. A candle fits Adoration." },
          ],
          [
            { t: "text", v: "A ready-made pair lives in Allemojipedia’s " },
            { t: "ext", href: `${A}/emoji-combos/thank-you-prayer-combo/`, label: "thank-you and prayer combo" },
            { t: "text", v: ". Use it for gratitude, not for a death announcement. The " },
            { t: "ext", href: `${A}/`, label: "Allemojipedia homepage" },
            { t: "text", v: " is the index if you want a different character." },
          ],
        ],
      },
      {
        h2: "When the prayer is also a Bible text",
        paragraphs: [
          [
            { t: "text", v: "The Our Father is taught in the Sermon on the Mount. Read " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/matthew/6", label: "Matthew 6 on Catholic Bible Online" },
            { t: "text", v: " before you post a line from it. The Hail Mary takes its first half from Gabriel and Elizabeth in " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/luke/1", label: "Luke 1" },
            { t: "text", v: ". Link those chapters when the caption quotes them. A bead emoji does not show a reader the verse." },
          ],
          [
            { t: "text", v: "For the way to pray the decades, use the " },
            { t: "in", href: "/blog/complete-rosary-guide/", label: "complete Rosary guide" },
            { t: "text", v: " and the " },
            { t: "in", href: "/blog/hail-mary-prayer/", label: "Hail Mary" },
            { t: "text", v: ". More Catholic prayers are gathered at " },
            { t: "ext", href: "https://catholicbibleonline.com/prayers/", label: "Catholic Bible Online’s prayer pages" },
            { t: "text", v: "." },
          ],
        ],
      },
      {
        h2: "A holy hour and a prayer request",
        paragraphs: [
          [
            { t: "text", v: "A holy hour post needs the candle, the church, and the hour. A prayer request needs the folded hands and a specific intention that does not expose someone’s private medical details. The dove can close a post about peace. It should not replace the name of the person you are allowed to name." },
          ],
        ],
      },
    ],
    rows: [
      { emoji: "🙏", name: "Folded hands", use: "Any prayer post", href: `${A}/emoji/folded-hands/` },
      { emoji: "📿", name: "Prayer beads", use: "The Rosary", href: `${A}/emoji/prayer-beads/` },
      { emoji: "🌹", name: "Rose", use: "Mary, especially the Rosary", href: `${A}/emoji/rose/` },
      { emoji: "💙", name: "Blue heart", use: "A Marian feast or May devotion", href: `${A}/emoji/blue-heart/` },
      { emoji: "🕯️", name: "Candle", use: "Holy hour or a vigil", href: `${A}/emoji/candle/` },
      { emoji: "🕊️", name: "Dove", use: "Peace or the Spirit", href: `${A}/emoji/dove/` },
    ],
    faqs: [
      {
        question: "What emoji should a Rosary post use?",
        answer: "Use folded hands and prayer beads. Add a rose or a blue heart on a Marian day. Write which mysteries you are praying. The emoji does not name the mystery.",
      },
      {
        question: "Where is the biblical text of the Our Father and the Hail Mary?",
        answer: "The Our Father is in Matthew 6. The opening of the Hail Mary comes from Luke 1. Read both chapters on Catholic Bible Online instead of posting an unattributed screenshot.",
      },
      {
        question: "Is the folded-hands emoji only Christian?",
        answer: "No. On Allemojipedia it also means thanks, please, or hope. In a Catholic caption, the words “Rosary,” “novena,” or “holy hour” fix the meaning.",
      },
      {
        question: "What should a holy hour announcement include?",
        answer: "The candle emoji, the church, the day, and the hour. If the hour is before the Blessed Sacrament, say that in words.",
      },
    ],
  },
  {
    slug: "christmas-emojis-for-catholic-posts",
    h1: "Christmas Emojis for Catholic Posts: Advent, Nativity, and Epiphany",
    title: "Christmas Emojis for Catholic Posts (Advent to Epiphany) | Guide Catholic",
    description: "Which emojis fit Advent, Christmas, and Epiphany: candle, star, church, and cross — plus the Nativity chapters on Catholic Bible Online.",
    excerpt: "Catholic Christmas emoji choices for Advent, the Nativity, and Epiphany, with the star and the church ahead of the shopping icons.",
    category: "Catholic Living",
    dateLabel: "October 4, 2026",
    readTime: "12 min",
    answer: "In Advent, use a candle and a purple heart, not a pile of gifts. On Christmas, lead with the star, the church, and the cross. The tree can come second. Read the Nativity in Luke 2 and the magi in Matthew 2 on Catholic Bible Online.",
    sections: [
      {
        h2: "Advent is not Christmas morning",
        paragraphs: [
          [
            { t: "text", v: "Advent is waiting. A parish Advent post should look like a wreath, not a sale. Use " },
            { t: "ext", href: `${A}/emoji/candle/`, label: "the candle" },
            { t: "text", v: " and, if you need a color, " },
            { t: "ext", href: `${A}/emoji/purple-heart/`, label: "the purple heart" },
            { t: "text", v: " with the word Advent in the caption. Rose Sunday can use a rose. Wrapped gifts, a party popper, and a countdown of shopping days bury the season the Church is actually keeping." },
          ],
          [
            { t: "text", v: "The prophecy the Church reads toward Christmas is in " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/isaiah/9", label: "Isaiah 9 on Catholic Bible Online" },
            { t: "text", v: ". Link it when your post quotes “a child is born.” Do not drop the line with no chapter." },
          ],
        ],
      },
      {
        h2: "Christmas Day and the twelve days",
        paragraphs: [
          [
            { t: "text", v: "On Christmas, the first emoji should be the " },
            { t: "ext", href: `${A}/emoji/glowing-star/`, label: "glowing star" },
            { t: "text", v: ", the " },
            { t: "ext", href: `${A}/emoji/church/`, label: "church" },
            { t: "text", v: ", or the Latin cross — not the tree. The " },
            { t: "ext", href: `${A}/emoji/baby/`, label: "baby" },
            { t: "text", v: " can sit beside a Nativity line if the caption says Christ, not a generic birth announcement. The " },
            { t: "ext", href: `${A}/emoji/christmas-tree/`, label: "Christmas tree" },
            { t: "text", v: " is fine for a family greeting after the religious mark is there. Allemojipedia’s " },
            { t: "ext", href: `${A}/blog/christmas-emojis-meaning/`, label: "Christmas emoji meanings" },
            { t: "text", v: " and " },
            { t: "ext", href: `${A}/emoji-combos/christmas-combo/`, label: "Christmas combo" },
            { t: "text", v: " show how the seasonal set is usually read online. A Catholic account should still put the Nativity in the sentence." },
          ],
          [
            { t: "text", v: "The birth is " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/luke/2", label: "Luke 2" },
            { t: "text", v: ". The magi are " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/matthew/2", label: "Matthew 2" },
            { t: "text", v: ". Epiphany posts can keep the star and drop the tree. Gifts in Matthew are gold, frankincense, and myrrh. A " },
            { t: "ext", href: `${A}/emoji/wrapped-gift/`, label: "wrapped gift" },
            { t: "text", v: " only fits if you are actually talking about those gifts or about charity, not as a substitute for the Gospel." },
          ],
        ],
      },
      {
        h2: "Snow and sparkle, used lightly",
        paragraphs: [
          [
            { t: "text", v: "A " },
            { t: "ext", href: `${A}/emoji/snowflake/`, label: "snowflake" },
            { t: "text", v: " and " },
            { t: "ext", href: `${A}/emoji/sparkles/`, label: "sparkles" },
            { t: "text", v: " decorate a greeting. They do not say Incarnation. One of them at the end of a line that already names Jesus is enough. The index for any other winter glyph is " },
            { t: "ext", href: `${A}/`, label: "Allemojipedia" },
            { t: "text", v: "." },
          ],
        ],
      },
    ],
    rows: [
      { emoji: "🕯️", name: "Candle", use: "Advent, one week at a time", href: `${A}/emoji/candle/` },
      { emoji: "💜", name: "Purple heart", use: "Advent, with the word Advent", href: `${A}/emoji/purple-heart/` },
      { emoji: "⭐", name: "Glowing star", use: "Christmas and Epiphany", href: `${A}/emoji/glowing-star/` },
      { emoji: "⛪", name: "Church", use: "Christmas Mass", href: `${A}/emoji/church/` },
      { emoji: "🎄", name: "Christmas tree", use: "A family greeting, after the star or cross", href: `${A}/emoji/christmas-tree/` },
      { emoji: "👶", name: "Baby", use: "The Nativity, if the caption names Christ", href: `${A}/emoji/baby/` },
    ],
    faqs: [
      {
        question: "What emoji should an Advent post use?",
        answer: "Use a candle. A purple heart is acceptable if the caption says Advent. Wait on gifts, trees, and party marks until Christmas.",
      },
      {
        question: "What emoji fits Christmas Mass?",
        answer: "Use the star or the church, and the Latin cross. The Christmas tree can follow in a family line. The Mass is not a tree.",
      },
      {
        question: "Where do I read the Nativity?",
        answer: "Luke 2 is the birth at Bethlehem. Matthew 2 is the magi. Both chapters are on Catholic Bible Online. Link the one your post is actually about.",
      },
      {
        question: "Are Christmas tree emojis wrong for Catholics?",
        answer: "No. They are cultural. They become a problem when they replace the star, the church, and the name of Christ in a parish post.",
      },
    ],
  },
  {
    slug: "lent-and-holy-week-emojis",
    h1: "Lent and Holy Week Emojis: What to Use, and What to Leave Off",
    title: "Lent and Holy Week Emojis for Catholic Posts | Guide Catholic",
    description: "Catholic emoji choices for Ash Wednesday, Lent, Palm Sunday, and Good Friday: cross, purple heart, candle, and palm — without joke symbols.",
    excerpt: "Which emojis fit Ash Wednesday, Lent, Palm Sunday, and Good Friday, and which meme glyphs do not belong on a parish account.",
    category: "Catholic Living",
    dateLabel: "October 4, 2026",
    readTime: "12 min",
    answer: "Lent posts should look spare: the Latin cross, a purple heart with the word Lent, and a candle. Palm Sunday can add a palm. Good Friday should not use a skull, fire-as-slang, or a party mark. Read the temptation, the entry into Jerusalem, and the Passion on Catholic Bible Online.",
    sections: [
      {
        h2: "Ash Wednesday and the forty days",
        paragraphs: [
          [
            { t: "text", v: "Ashes are a cross on the forehead, so the " },
            { t: "ext", href: `${A}/emoji/latin-cross/`, label: "Latin cross" },
            { t: "text", v: " is the right first mark. " },
            { t: "ext", href: `${A}/emoji/purple-heart/`, label: "Purple" },
            { t: "text", v: " can signal the liturgical color if you write “Lent” or “Ash Wednesday” next to it. " },
            { t: "ext", href: `${A}/emoji/candle/`, label: "A candle" },
            { t: "text", v: " fits a parish penance service. " },
            { t: "ext", href: `${A}/emoji/seedling/`, label: "A seedling" },
            { t: "text", v: " can mark a fast that is about growth, not a diet. Say that, or people will think you are posting about gardening." },
          ],
          [
            { t: "text", v: "The temptation in the desert is " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/matthew/4", label: "Matthew 4 on Catholic Bible Online" },
            { t: "text", v: ". The teaching on prayer, fasting, and almsgiving is " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/matthew/6", label: "Matthew 6" },
            { t: "text", v: ". Link the chapter when the caption quotes it. A short parish note on the day itself is in the " },
            { t: "in", href: "/blog/ash-wednesday-guide/", label: "Ash Wednesday guide" },
            { t: "text", v: "." },
          ],
        ],
      },
      {
        h2: "Palm Sunday through Holy Saturday",
        paragraphs: [
          [
            { t: "text", v: "Palm Sunday can add " },
            { t: "ext", href: `${A}/emoji/palm-tree/`, label: "the palm" },
            { t: "text", v: " beside the cross. The entry is " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/matthew/21", label: "Matthew 21" },
            { t: "text", v: ". Good Friday should be the cross and almost nothing else. Do not use the skull: on Allemojipedia and in ordinary texting it means laughter or shock, not the death of Jesus. Do not use fire to mean “powerful homily.” Holy Saturday can keep a candle and stay quiet. The Passion narrative Catholics read is " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/john/19", label: "John 19" },
            { t: "text", v: "." },
          ],
          [
            { t: "text", v: "Folded hands still belong on a prayer attached to these days. The meaning page is " },
            { t: "ext", href: `${A}/emoji/folded-hands/`, label: "folded hands on Allemojipedia" },
            { t: "text", v: ". The church emoji belongs on the service time. Celebration marks wait until the Easter Vigil." },
          ],
        ],
      },
      {
        h2: "Laetare Sunday is the exception",
        paragraphs: [
          [
            { t: "text", v: "The fourth Sunday of Lent eases the purple for a day. A rose is honest then. It is not permission to fill the whole of Lent with party emojis. One rose, the word Laetare, and the Mass time are enough." },
          ],
        ],
      },
    ],
    rows: [
      { emoji: "✝️", name: "Latin cross", use: "Ash Wednesday through Good Friday", href: `${A}/emoji/latin-cross/` },
      { emoji: "💜", name: "Purple heart", use: "Lent, with the word Lent", href: `${A}/emoji/purple-heart/` },
      { emoji: "🕯️", name: "Candle", use: "Penance service or the Vigil", href: `${A}/emoji/candle/` },
      { emoji: "🌴", name: "Palm tree", use: "Palm Sunday only", href: `${A}/emoji/palm-tree/` },
      { emoji: "🌱", name: "Seedling", use: "A fast aimed at growth", href: `${A}/emoji/seedling/` },
      { emoji: "🙏", name: "Folded hands", use: "The prayer you are actually asking for", href: `${A}/emoji/folded-hands/` },
    ],
    faqs: [
      {
        question: "What emoji should Ash Wednesday use?",
        answer: "The Latin cross. Add a purple heart only if the caption says Ash Wednesday or Lent. Include the service time with the church emoji if you want people to attend.",
      },
      {
        question: "Can I use a skull on Good Friday?",
        answer: "No. In ordinary messaging the skull means something is funny or unbelievable. On Good Friday use the cross and the words of the day. Link John 19 if you cite the Passion.",
      },
      {
        question: "What emoji fits Palm Sunday?",
        answer: "The palm and the cross. The story is Matthew 21 on Catholic Bible Online. The palm is for that day, not for all of Lent.",
      },
      {
        question: "Where do I copy the purple heart and the cross?",
        answer: "From Allemojipedia’s pages for the purple heart and the Latin cross, so the character matches the name.",
      },
    ],
  },
  {
    slug: "easter-emojis-for-catholics",
    h1: "Easter Emojis for Catholics: Resurrection First, Eggs Second",
    title: "Easter Emojis for Catholic Posts | Guide Catholic",
    description: "Which emojis belong on a Catholic Easter post: cross, dove, white heart, and sunrise — and when eggs and rabbits are only the cultural layer.",
    excerpt: "Easter emoji choices that keep the Resurrection first: cross, dove, light, and the Gospel chapters, with eggs only as a second note.",
    category: "Catholic Living",
    dateLabel: "October 4, 2026",
    readTime: "11 min",
    answer: "Lead an Easter post with the Latin cross, the dove, or a white heart, and say that Christ is risen. Eggs and rabbits can follow on a family line. They should not be the only religious mark. Read John 20 and Luke 24 on Catholic Bible Online.",
    sections: [
      {
        h2: "The post has to say risen",
        paragraphs: [
          [
            { t: "text", v: "Easter is the Resurrection, not a pastel theme. Start with " },
            { t: "ext", href: `${A}/emoji/latin-cross/`, label: "the Latin cross" },
            { t: "text", v: ", " },
            { t: "ext", href: `${A}/emoji/dove/`, label: "the dove" },
            { t: "text", v: ", or " },
            { t: "ext", href: `${A}/emoji/white-heart/`, label: "a white heart" },
            { t: "text", v: ", and write “Christ is risen” or “Easter Mass” in the same line. " },
            { t: "ext", href: `${A}/emoji/sunrise/`, label: "Sunrise" },
            { t: "text", v: " fits the morning liturgy. " },
            { t: "ext", href: `${A}/emoji/sparkles/`, label: "Sparkles" },
            { t: "text", v: " are decoration. On Allemojipedia they mean emphasis or celebration, not the empty tomb. Use one, after the sentence is already clear." },
          ],
          [
            { t: "text", v: "The morning at the tomb is " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/john/20", label: "John 20 on Catholic Bible Online" },
            { t: "text", v: ". The road and the table at Emmaus are " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/luke/24", label: "Luke 24" },
            { t: "text", v: ". Paul’s account of the Resurrection is " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/1-corinthians/15", label: "1 Corinthians 15" },
            { t: "text", v: ". Link the chapter you are quoting. A white heart is not a citation." },
          ],
        ],
      },
      {
        h2: "Eggs and rabbits, in their place",
        paragraphs: [
          [
            { t: "text", v: "The " },
            { t: "ext", href: `${A}/emoji/egg/`, label: "egg" },
            { t: "text", v: " and the " },
            { t: "ext", href: `${A}/emoji/rabbit/`, label: "rabbit" },
            { t: "text", v: " are spring culture. A family account can use them after the cross. A parish Mass time should not be only a rabbit. People need the hour and the church emoji more than they need a basket. Copy seasonal characters from " },
            { t: "ext", href: `${A}/`, label: "Allemojipedia" },
            { t: "text", v: " if you want the name beside the glyph before you publish." },
          ],
        ],
      },
      {
        h2: "The Vigil and Easter Week",
        paragraphs: [
          [
            { t: "text", v: "The Easter Vigil is fire and candle in the liturgy. On a phone, the candle emoji is safer than the fire emoji, because fire is read as slang. Use " },
            { t: "ext", href: `${A}/emoji/candle/`, label: "the candle" },
            { t: "text", v: " and the word Vigil. Through the octave, keep the cross in the caption. The feast is eight days, not one breakfast." },
          ],
        ],
      },
    ],
    rows: [
      { emoji: "✝️", name: "Latin cross", use: "The Resurrection post", href: `${A}/emoji/latin-cross/` },
      { emoji: "🕊️", name: "Dove", use: "Peace and the Easter greeting", href: `${A}/emoji/dove/` },
      { emoji: "🤍", name: "White heart", use: "Easter joy, with words", href: `${A}/emoji/white-heart/` },
      { emoji: "🌅", name: "Sunrise", use: "Morning Mass", href: `${A}/emoji/sunrise/` },
      { emoji: "🕯️", name: "Candle", use: "The Vigil", href: `${A}/emoji/candle/` },
      { emoji: "🥚", name: "Egg", use: "A family note, after the cross", href: `${A}/emoji/egg/` },
    ],
    faqs: [
      {
        question: "What emoji should a Catholic Easter post use first?",
        answer: "The Latin cross, the dove, or a white heart, together with the words “Christ is risen” or the Mass time. Do not lead with a rabbit.",
      },
      {
        question: "Are Easter egg emojis acceptable?",
        answer: "Yes, on a family greeting, after the religious line. A parish announcement of Easter Mass should prefer the church, the cross, and the hour.",
      },
      {
        question: "Which Bible chapter is Easter morning?",
        answer: "John 20 tells the empty tomb and Mary Magdalene. Luke 24 includes Emmaus. Both are on Catholic Bible Online. First Corinthians 15 is Paul’s longer witness to the Resurrection.",
      },
      {
        question: "Why avoid the fire emoji at the Vigil?",
        answer: "In ordinary posts, fire means something is impressive or popular. The candle says light without that slang. Write “Easter Vigil” in the caption.",
      },
    ],
  },
  {
    slug: "bible-verse-post-emojis",
    h1: "Bible Verse Post Emojis: How to Share Scripture Without a Meme",
    title: "Bible Verse Post Emojis for Catholics | Guide Catholic",
    description: "Which emojis to put on a Catholic Bible post — open book, cross, folded hands — and where to read the chapter on Catholic Bible Online.",
    excerpt: "How to mark a Bible caption with an emoji and still send readers to the Catholic chapter, not a cropped image.",
    category: "Catholic Living",
    dateLabel: "October 4, 2026",
    readTime: "12 min",
    answer: "Use the open-book emoji, the reference, and a link to the chapter on Catholic Bible Online. Add the cross if the verse is about Christ and folded hands if you want people to pray it. Do not let sparkles or a fire emoji become the message.",
    sections: [
      {
        h2: "The book emoji is a pointer",
        paragraphs: [
          [
            { t: "text", v: "A verse post fails when the picture is pretty and the citation is missing. Put " },
            { t: "ext", href: `${A}/emoji/open-book/`, label: "the open book" },
            { t: "text", v: " next to a real reference: book, chapter, and verse. Then link the chapter. The Catholic text, with the deuterocanonical books included, is at " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/", label: "Catholic Bible Online" },
            { t: "text", v: ". A daily line is at " },
            { t: "ext", href: "https://catholicbibleonline.com/daily-verses/", label: "their verse of the day" },
            { t: "text", v: " and on Guide Catholic’s " },
            { t: "in", href: "/daily-verses/", label: "daily Bible verse" },
            { t: "text", v: "." },
          ],
          [
            { t: "text", v: "Allemojipedia’s open-book page tells you the character’s name and lets you copy it. The " },
            { t: "ext", href: `${A}/`, label: "Allemojipedia homepage" },
            { t: "text", v: " is where you check any other glyph before you attach it to a verse. " },
            { t: "ext", href: `${A}/emoji/sparkles/`, label: "Sparkles" },
            { t: "text", v: " only add shine. They do not mean “this is inspired.”" },
          ],
        ],
      },
      {
        h2: "Cross, hands, and the kind of verse",
        paragraphs: [
          [
            { t: "text", v: "If the verse is about Jesus, add " },
            { t: "ext", href: `${A}/emoji/latin-cross/`, label: "the Latin cross" },
            { t: "text", v: ". If you are asking people to pray the line, add " },
            { t: "ext", href: `${A}/emoji/folded-hands/`, label: "folded hands" },
            { t: "text", v: ". A psalm should not be linked as if Protestant and Catholic chapter numbers always match. Send psalms to " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/psalms/", label: "the Psalms on Catholic Bible Online" },
            { t: "text", v: " and name the opening line, so nobody lands on the wrong chapter." },
          ],
          [
            { t: "text", v: "Do not paste a long modern translation you do not have the right to reproduce. Quote a short line you already have permission to use, name the reference, and let the link carry the chapter. That is fair to the text and more useful than a screenshot that cannot be searched." },
          ],
        ],
      },
      {
        h2: "A pattern you can reuse",
        paragraphs: [
          [
            { t: "text", v: "Book emoji, reference, one sentence of why you are sharing it, link to the chapter, then folded hands if you offer a prayer. Example shape: “John 20 — Easter morning,” then the link to " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/john/20", label: "John 20" },
            { t: "text", v: ". The same shape works for " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/luke/2", label: "Luke 2" },
            { t: "text", v: " at Christmas and " },
            { t: "ext", href: "https://catholicbibleonline.com/bible/matthew/6", label: "Matthew 6" },
            { t: "text", v: " when the post is the Our Father. Seasonal emoji advice is in the " },
            { t: "in", href: "/blog/catholic-emoji-guide/", label: "Catholic emoji guide" },
            { t: "text", v: "." },
          ],
        ],
      },
    ],
    rows: [
      { emoji: "📖", name: "Open book", use: "Beside the reference", href: `${A}/emoji/open-book/` },
      { emoji: "✝️", name: "Latin cross", use: "A verse about Christ", href: `${A}/emoji/latin-cross/` },
      { emoji: "🙏", name: "Folded hands", use: "When the caption asks for prayer", href: `${A}/emoji/folded-hands/` },
      { emoji: "✨", name: "Sparkles", use: "A light accent, never the only mark", href: `${A}/emoji/sparkles/` },
      { emoji: "🕊️", name: "Dove", use: "A verse about the Spirit or peace", href: `${A}/emoji/dove/` },
      { emoji: "❤️", name: "Red heart", use: "A verse about love, with the reference", href: `${A}/emoji/red-heart/` },
    ],
    faqs: [
      {
        question: "What emoji should a Bible verse post use?",
        answer: "The open book, next to the book, chapter, and verse. Add the cross if the verse is about Jesus, or folded hands if you are inviting prayer. Then link the chapter.",
      },
      {
        question: "Where should Catholics link a verse?",
        answer: "Catholic Bible Online, on the chapter page for that book. For a psalm, use the Psalms section there rather than a chapter number that may follow a different tradition.",
      },
      {
        question: "Can I post only an image of a verse?",
        answer: "Put the reference in the caption as text, not only inside a picture. Search engines and screen readers need the words. The link to Catholic Bible Online lets people read what comes before and after the line.",
      },
      {
        question: "Where do I copy the open-book emoji?",
        answer: "From the open-book page on Allemojipedia. Use the same site to check the cross, the dove, and folded hands before you publish.",
      },
    ],
  },
  {
    slug: "emojis-for-talking-about-god",
    h1: "Emojis for Talking About God: A Catholic Guide to Faith Emojis in Everyday Conversation",
    title: "Religious Emojis for Talking About God and Faith | Guide Catholic",
    description: "Which religious emojis to use when you text about God, prayer, and the Catholic Church: what 🙏 ✝️ 🕊️ 📿 mean, what gets misread, and what to skip.",
    excerpt: "How to use emojis when you talk with people about God, prayer, and the Catholic faith — the core set, the ones that get misread, and ready-to-send messages for real situations.",
    category: "Catholic Living",
    dateLabel: "October 31, 2026",
    datePublished: "2026-10-31",
    readTime: "11 min",
    answer: "When you talk about God with someone, let the words carry the faith and use one or two emojis to set the tone: ✝️ for Christ, 🙏 for prayer, 🕊️ for the Holy Spirit or peace, 🕯️ for remembrance, and ⛪ for the parish. Skip joke emojis next to sacred subjects, and never let a symbol replace the name of Jesus. Check any emoji's official meaning on Allemojipedia before you send it.",
    sections: [
      {
        h2: "Why emojis matter when the subject is God",
        paragraphs: [
          rich(`A text message has no voice, no face, and no pause. When the subject is God, a death in the family, or a friend who has stopped going to Mass, that missing tone is where most misunderstandings start. An emoji is the closest thing a chat has to a facial expression. Used well, it tells the other person you are speaking with warmth, not preaching at them.`),
          rich(`Saint Paul gave the best rule for this long before phones: “Let your speech always be gracious, seasoned with salt” ({{${CBO}/colossians/4/|Colossians 4:6}}). Saint Peter adds that we should be ready to give a reason for our hope, “yet do it with gentleness and reverence” ({{${CBO}/1-peter/3/|1 Peter 3:15}}). Gentleness and reverence are exactly what a good faith emoji communicates — and what a careless one destroys.`),
          rich(`This guide is for conversation: texting a friend, answering a relative, comforting someone, inviting someone back to church. If you manage a parish account instead, the [[/blog/catholic-emoji-guide/|Catholic emoji guide for faith posts]] and the guide to [[/blog/emojis-for-catholic-parish-posts/|parish announcement emojis]] cover public posts.`),
        ],
      },
      {
        h2: "The core set of Catholic faith emojis",
        paragraphs: [
          rich(`Unicode does not have a “Catholic” category, so the faith set is borrowed from several groups: symbols, people, animals, and objects. These are the ones that read clearly as Christian in a conversation. Each link opens the character on {{${A}/|Allemojipedia}}, where you can see its official name and copy it.`),
        ],
        list: [
          rich(`✝️ {{${A}/emoji/latin-cross/|Latin cross}} — the plainest way to say “this is about Christ.” Catholics pray before a crucifix, with the body of Jesus on it; the emoji is the empty cross, which every Christian tradition recognizes.`),
          rich(`☦️ {{${A}/emoji/orthodox-cross/|Orthodox cross}} — the three-bar cross of the Eastern churches. Byzantine Catholics use it too, so it is not “non-Catholic,” but in a Western chat it signals the Eastern tradition specifically.`),
          rich(`🙏 {{${A}/emoji/folded-hands/|Folded hands}} — the standard sign for prayer, and also for “please” and “thank you.” More on that ambiguity below.`),
          rich(`📿 {{${A}/emoji/prayer-beads/|Prayer beads}} — the Unicode name is generic, because many religions pray with beads. Next to a Catholic message it reads as the Rosary. Pair it with the word “Rosary” and a link to [[/blog/how-to-pray-the-rosary-step-by-step/|how to pray the Rosary]] if the person is new to it.`),
          rich(`⛪ {{${A}/emoji/church/|Church}} — the building with a cross: Mass, the parish, an invitation. 🛐 {{${A}/emoji/place-of-worship/|Place of worship}} is a generic symbol for any religion; it is fine, but less clearly Christian.`),
          rich(`🕊️ {{${A}/emoji/dove/|Dove}} — peace, and the Holy Spirit, who descended “like a dove” at the baptism of Jesus ({{${CBO}/matthew/3/|Matthew 3:16}}).`),
          rich(`🕯️ {{${A}/emoji/candle/|Candle}} — prayer, vigil, remembrance of the dead. It is the quietest faith emoji and the safest one for grief.`),
          rich(`📖 {{${A}/emoji/open-book/|Open book}} — Scripture. Always follow it with the reference and a link to the chapter, so the person can read the verse in context.`),
          rich(`💧 {{${A}/emoji/droplet/|Droplet}} and 🤍 {{${A}/emoji/white-heart/|white heart}} — Baptism and the white of baptismal garments, First Communion, and Easter joy.`),
        ],
        callout: {
          label: "There is no emoji for the Eucharist, Mary, or the saints",
          parts: rich(`Unicode has no monstrance, no chalice, and no figure of the Virgin Mary. Avoid using 🍞 bread and 🍷 wine as stand-ins for Holy Communion: the Church teaches that after the consecration the Eucharist is truly the Body and Blood of Christ, not bread and wine ([[/blog/what-is-transubstantiation/|what transubstantiation means]]). For the Blessed Sacrament, Our Lady, or a saint, write the name. Words are more reverent than a lookalike icon.`),
        },
      },
      {
        h2: "Emojis for real conversations, with messages you can send",
        paragraphs: [
          rich(`Most faith conversations fall into a handful of situations. The pattern is always the same: the words say what you mean, and the emoji sets the tone. Scripture describes the instinct behind all of them: “Rejoice with those who rejoice, weep with those who weep” ({{${CBO}/romans/12/|Romans 12:15}}).`),
        ],
        table: {
          caption: "Which faith emojis fit which conversation",
          headers: ["Situation", "Emojis", "Why they work"],
          rows: [
            [rich("Someone asks for prayer"), rich("🙏🕯️"), rich(`Folded hands plus a candle reads as “I am actually praying,” not “thanks.” Then pray — {{${CBO}/james/5/|James 5:16}} asks us to pray for one another.`)],
            [rich("A death or a funeral"), rich("🕯️🤍"), rich(`Quiet and reverent. See [[/blog/catholic-funeral-rites-explained/|Catholic funeral rites]] if you want to say something about the Mass.`)],
            [rich("A baptism"), rich("💧🕊️🤍"), rich(`Water, the Holy Spirit, and the white garment. More in the [[/blog/catholic-baptism-guide/|Catholic baptism guide]].`)],
            [rich("First Holy Communion"), rich("✝️🤍⛪"), rich(`Christ, the white dress or suit, and the parish. Write “First Communion” rather than drawing the Host. See the [[/blog/catholic-first-communion-guide/|First Communion guide]].`)],
            [rich("Confirmation"), rich("🕊️🔥"), rich(`Here fire is right: the Spirit came as tongues of fire at Pentecost ({{${CBO}/acts/2/|Acts 2}}). See the [[/blog/catholic-confirmation-guide/|Confirmation guide]].`)],
            [rich("A Catholic wedding"), rich(`💍⛪🤍`), rich(`Ring, church, white. Marriage is a sacrament, so the church emoji belongs next to the ring.`)],
            [rich("Inviting a friend to Mass"), rich("⛪🔔"), rich("Church and bell: an invitation, not a lecture. Add the time and the parish name.")],
            [rich("Sharing a Bible verse"), rich("📖✝️"), rich(`Book, then the reference, then a link to the chapter on {{https://catholicbibleonline.com/|Catholic Bible Online}}.`)],
          ],
        },
      },
      {
        h2: "The 🙏 question: prayer, please, or high five?",
        paragraphs: [
          rich(`The most used faith emoji is also the most ambiguous. Its Unicode name is simply “folded hands.” In Japan the gesture is a way of saying please or thank you, and many people in the West use it the same way — “thanks 🙏” after a favor has nothing to do with prayer. A few people even read it as two hands giving a high five.`),
          rich(`So in a faith conversation, never let 🙏 do the work alone. “Praying for you and your mom tonight 🙏” is unmistakable. A lone 🙏 after someone shares bad news can look like “ok, thanks.” If you want to be sure, add a word, or pair it with 🕯️. You can read the full meaning and common uses on the {{${A}/emoji/folded-hands/|folded hands page on Allemojipedia}}.`),
          rich(`The same goes for 🙌 {{${A}/emoji/raising-hands/|raising hands}}, which in a church context reads as praise — “Alleluia! 🙌” — and elsewhere just means “yay.” Context decides.`),
        ],
      },
      {
        h2: "Angels, halos, and what Catholics actually believe",
        paragraphs: [
          rich(`😇 {{${A}/emoji/smiling-face-with-halo/|Smiling face with halo}} almost never means holiness online. It means “who, me?” — innocent, cheeky, or pretending to be good. Use it in a joke, not in a message about a saint or someone who has died.`),
          rich(`👼 {{${A}/emoji/baby-angel/|Baby angel}} needs more care. It is common to say that someone who died “became an angel.” Catholic teaching is clear that this is not what happens: angels are a distinct creation, pure spirits made by God, and human beings do not turn into angels when they die (Catechism of the Catholic Church 328–336). We pray that the dead will see God and be counted among the saints. See [[/blog/catholic-teaching-on-angels/|Catholic teaching on angels]].`),
          rich(`That does not mean you should correct a grieving friend. It means your own message can say something truer: “Eternal rest grant unto her, O Lord 🕯️” or “Praying for his soul 🙏🤍.” Keep 👼 for the angels themselves — the Christmas angels in Luke 2, a guardian angel, or the archangels.`),
        ],
      },
      {
        h2: "Emojis that get misread in a faith conversation",
        paragraphs: [
          rich(`Internet slang has claimed several symbols that look religious. Before you add one of these to a message about God, ask how a teenager would read it.`),
        ],
        list: [
          rich(`💀 {{${A}/emoji/skull/|Skull}} — online it means “I'm dead, that's hilarious.” Never use it on Good Friday, All Souls, or a death notice.`),
          rich(`🔥 {{${A}/emoji/fire/|Fire}} — usually “amazing” or “hot.” It only means the Holy Spirit when the message already says Pentecost or Confirmation.`),
          rich(`😂 {{${A}/emoji/face-with-tears-of-joy/|Face with tears of joy}} and 😭 {{${A}/emoji/loudly-crying-face/|loudly crying face}} — fine with friends, wrong next to the Eucharist, confession, or a prayer request, where they read as mockery.`),
          rich(`😱 with “OMG” — the Second Commandment asks us not to take the name of God in vain ({{${CBO}/exodus/20/|Exodus 20:7}}), and the Catechism asks for reverence in speaking of God (CCC 2142–2149). A shocked face alone says the same thing without using His name as filler.`),
          rich(`❤️‍🔥 {{${A}/emoji/heart-on-fire/|Heart on fire}} — online it means passionate love. It can evoke the [[/blog/sacred-heart-devotion-complete-guide/|Sacred Heart of Jesus]], but only if you say so in words.`),
        ],
      },
      {
        h2: "Talking about faith with people of other religions",
        paragraphs: [
          rich(`Unicode includes the symbols of other faiths: ✡️ {{${A}/emoji/star-of-david/|Star of David}}, ☪️ {{${A}/emoji/star-and-crescent/|star and crescent}}, 🕉️ {{${A}/emoji/om/|Om}}, and ☸️ {{${A}/emoji/wheel-of-dharma/|wheel of dharma}}. These belong to real communities. Use them when you are referring to that faith — wishing a Jewish friend well on a holiday, for example — and not as decoration.`),
          rich(`The Second Vatican Council taught that the Catholic Church “rejects nothing that is true and holy” in other religions, while proclaiming Christ as “the way, the truth, and the life” (Nostra Aetate 2). In practice that means respect without blending: a row of every religious symbol presented as if they all meant the same thing says something a Catholic does not believe. A kind message to a friend of another faith, in their own terms, says a great deal.`),
        ],
      },
      {
        h2: "A simple checklist before you hit send",
        paragraphs: [
          rich(`Every rule in this guide comes down to one question: does this emoji help the other person hear what I mean? Run through these five points when the conversation is about God.`),
        ],
        list: [
          rich("Words first. Say the thing — “praying for you,” “Christ is risen,” “I'm so sorry” — then add the emoji."),
          rich("One or two emojis. A row of ten symbols reads like spam, not sincerity."),
          rich("Never replace a holy name. Write Jesus, Mary, God, the Eucharist. No emoji stands in for them."),
          rich(`Check the meaning. Look the emoji up on {{${A}/emoji-meanings/|Allemojipedia's emoji meanings}} if you are not sure how it reads, and copy it from the {{${A}/emoji-copy-and-paste/|copy-and-paste keyboard}} so it does not turn into a blank box.`),
          rich(`Link Scripture. If you quote the Bible, send the chapter on {{https://catholicbibleonline.com/|Catholic Bible Online}}, not a cropped screenshot.`),
        ],
        callout: {
          label: "The goal is the person, not the post",
          parts: rich(`An emoji will never convert anyone. What it can do is keep a conversation about God warm enough to continue. For prayer requests specifically, see [[/blog/emojis-for-catholic-prayer-posts/|emojis for Catholic prayer posts]].`),
        },
      },
    ],
    combos: [
      { combo: "🙏🕯️", label: "Praying for someone", message: "Praying for you and your family tonight 🙏🕯️" },
      { combo: "🕯️🤍", label: "Condolences", message: "I'm so sorry. Eternal rest grant unto him, O Lord 🕯️🤍" },
      { combo: "💧🕊️🤍", label: "Baptism", message: "Welcome to the family of God, little one! 💧🕊️🤍" },
      { combo: "✝️🤍⛪", label: "First Communion", message: "Congratulations on your First Holy Communion! ✝️🤍⛪" },
      { combo: "🕊️🔥", label: "Confirmation", message: "Come, Holy Spirit! Congratulations on your Confirmation 🕊️🔥" },
      { combo: "⛪🔔", label: "Invitation to Mass", message: "Want to come to Mass with us Sunday at 10? ⛪🔔" },
      { combo: "📖✝️", label: "Sharing a verse", message: "This one's for you today: John 14:27 📖✝️" },
    ],
    rows: [
      { emoji: "✝️", name: "Latin cross", use: "Christ, the faith, a Christian message", href: `${A}/emoji/latin-cross/` },
      { emoji: "☦️", name: "Orthodox cross", use: "The Eastern churches, including Byzantine Catholics", href: `${A}/emoji/orthodox-cross/` },
      { emoji: "🙏", name: "Folded hands", use: "Prayer — with the word “praying”", href: `${A}/emoji/folded-hands/` },
      { emoji: "📿", name: "Prayer beads", use: "The Rosary, when the message says so", href: `${A}/emoji/prayer-beads/` },
      { emoji: "⛪", name: "Church", use: "Mass, the parish, an invitation", href: `${A}/emoji/church/` },
      { emoji: "🛐", name: "Place of worship", use: "Worship in general (any religion)", href: `${A}/emoji/place-of-worship/` },
      { emoji: "🕊️", name: "Dove", use: "The Holy Spirit, peace", href: `${A}/emoji/dove/` },
      { emoji: "🕯️", name: "Candle", use: "Prayer, vigil, grief", href: `${A}/emoji/candle/` },
      { emoji: "📖", name: "Open book", use: "Scripture, with the reference", href: `${A}/emoji/open-book/` },
      { emoji: "💧", name: "Droplet", use: "Baptism, holy water", href: `${A}/emoji/droplet/` },
      { emoji: "🤍", name: "White heart", use: "Sacraments, Easter, mourning", href: `${A}/emoji/white-heart/` },
      { emoji: "🙌", name: "Raising hands", use: "Praise — “Alleluia!”", href: `${A}/emoji/raising-hands/` },
    ],
    faqs: [
      {
        question: "What is the best emoji for talking about God?",
        answer: "The Latin cross ✝️ is the clearest Christian symbol, and folded hands 🙏 is the clearest sign of prayer. Use one of them with words that name God or Jesus directly. The emoji sets the tone; the sentence carries the faith.",
      },
      {
        question: "Does the 🙏 emoji mean prayer or thank you?",
        answer: "Both. Its official name is “folded hands,” and many people use it for please or thank you. In a faith conversation, add the word “praying” or pair it with a candle 🕯️ so it cannot be misread.",
      },
      {
        question: "Is there a rosary emoji?",
        answer: "Not exactly. The 📿 prayer beads emoji is generic, because many religions pray with beads. Next to the word Rosary, Catholics will read it correctly.",
      },
      {
        question: "Is there an emoji for Jesus, Mary, or the Eucharist?",
        answer: "No. Unicode has no figure of Jesus or Mary, and no monstrance or chalice. Write the name instead of using bread and wine as a substitute — the Church teaches the Eucharist is truly the Body and Blood of Christ.",
      },
      {
        question: "Can I use the 👼 angel emoji when someone dies?",
        answer: "It is common, but Catholic teaching is that people do not become angels after death; angels are a separate creation (CCC 328–336). A candle 🕯️, a white heart 🤍, and a short prayer for the person's soul say something truer and more comforting.",
      },
      {
        question: "Is it disrespectful to use emojis about God?",
        answer: "Not in itself. Emojis are tone markers. They become disrespectful when they mock — a skull on Good Friday, a laughing face next to the Eucharist — or when they replace a holy name. Used gently, they help a conversation about God stay warm.",
      },
      {
        question: "Which emojis should I avoid in a religious conversation?",
        answer: "Skip 💀 skull, 🔥 fire used as slang, 😂 next to sacred subjects, 😇 halo for a real saint or a death, and “OMG” with God's name as filler. If an emoji has a strong slang meaning, it will be read that way.",
      },
      {
        question: "Where can I check what an emoji means before I send it?",
        answer: "Allemojipedia has a page for each emoji with its official name, common meanings, and a copy button. It is the quickest way to make sure the symbol says what you intend.",
      },
    ],
  },
  {
    slug: "nativity-emojis",
    h1: "Nativity Emojis: The Best Emojis for the Birth of Jesus at Christmas",
    title: "Nativity Emojis: Best Emojis for the Birth of Jesus | Guide Catholic",
    description: "The best Nativity emojis for Christmas: 👶⭐🐂🫏🐑👑 for the manger scene, what each means in Luke 2 and Matthew 2, and copy-ready Christmas combos.",
    excerpt: "Build the manger scene in emojis: the Child, the star, the shepherds, the angels, and the magi — what Scripture says about each, what tradition added, and copy-ready Christmas messages.",
    category: "Catholic Living",
    dateLabel: "October 31, 2026",
    datePublished: "2026-10-31",
    readTime: "11 min",
    answer: "The best Nativity emojis are 👶 for the Child Jesus, ⭐ or 🌟 for the star of Bethlehem, 👼 for the angels, 🐑 for the shepherds' flock, 🐂 and 🫏 for the ox and donkey of the crib, and 👑 with 🐪 for the magi at Epiphany. Put the Child and the star first, and the tree, gifts, and Santa second. Read the birth in Luke 2 and the magi in Matthew 2.",
    sections: [
      {
        h2: "Christmas is about a birth, so start with the Child",
        paragraphs: [
          rich(`Christmas celebrates one event: “the Word became flesh and made his dwelling among us” ({{${CBO}/john/1/|John 1:14}}). God was born as a baby in Bethlehem. The Church calls this the Incarnation, and every Christmas message — even a two-emoji greeting — can point to it or bury it.`),
          rich(`Most “Christmas emoji” lists start with 🎄🎅🎁⛄. Those belong to the cultural season, and there is nothing wrong with them. But a Nativity set starts somewhere else: with a baby, a star, a manger, and the people Scripture puts around them. This guide builds that set figure by figure. For the season itself — Mass times, the octave, and the meaning of the feast — see the [[/blog/catholic-christmas/|Catholic Christmas guide]]. For Advent through Epiphany posts on parish accounts, see [[/blog/christmas-emojis-for-catholic-posts/|Christmas emojis for Catholic posts]].`),
        ],
      },
      {
        h2: "Building the manger scene in emojis",
        paragraphs: [
          rich(`There is no single “Nativity scene” emoji, so you assemble it. Here is each figure of the crib, the emoji that fits it best, and the source behind it. Every link goes to the character on {{${A}/|Allemojipedia}}, where you can copy it.`),
        ],
        list: [
          rich(`👶 {{${A}/emoji/baby/|Baby}} — the Child Jesus, “wrapped in swaddling clothes and lying in a manger” ({{${CBO}/luke/2/|Luke 2:12}}). Many Catholic families leave the manger empty through Advent and place the Child in it on Christmas Eve; the emoji can follow the same custom.`),
          rich(`⭐ {{${A}/emoji/star/|Star}} and 🌟 {{${A}/emoji/glowing-star/|glowing star}} — the star the magi followed ({{${CBO}/matthew/2/|Matthew 2:2}}). ⭐ is the plain star; 🌟 is the glowing one, which reads better as the star of Bethlehem.`),
          rich(`👼 {{${A}/emoji/baby-angel/|Baby angel}} — the angel who announced the birth to the shepherds and the multitude who sang “Glory to God in the highest” ({{${CBO}/luke/2/|Luke 2:9–14}}). This is the one setting where the angel emoji is exactly right.`),
          rich(`🐑 {{${A}/emoji/ewe/|Ewe}} and 🐏 {{${A}/emoji/ram/|ram}} — the shepherds “keeping watch over their flock by night” ({{${CBO}/luke/2/|Luke 2:8}}). The sheep emoji's official Unicode name is “ewe.”`),
          rich(`🐂 {{${A}/emoji/ox/|Ox}} and 🫏 {{${A}/emoji/donkey/|donkey}} — the two animals of every crib. They are not in Luke's account; see the next section for where they come from.`),
          rich(`👑 {{${A}/emoji/crown/|Crown}} and 🐪 {{${A}/emoji/camel/|camel}} — the magi, who arrive at Epiphany, not on Christmas night.`),
          rich(`🛖 {{${A}/emoji/hut/|Hut}} — the stable. Luke mentions only a manger, because “there was no room for them in the inn.” A very old tradition, recorded by Saint Justin Martyr in the second century, places the birth in a cave; the Church of the Nativity in Bethlehem stands over that grotto.`),
          rich(`🌃 {{${A}/emoji/night-with-stars/|Night with stars}} and 🎶 {{${A}/emoji/musical-notes/|musical notes}} — the night setting and the angels' song, or the carols of Midnight Mass.`),
        ],
        callout: {
          label: "Greccio, 1223: the first living crib",
          parts: rich(`The custom of the Nativity scene goes back to Saint Francis of Assisi, who at Christmas 1223 arranged a manger with a live ox and donkey in a cave at Greccio, Italy, so the people could see how the Child was born in poverty. His early biographer Thomas of Celano describes it. Read more about [[/blog/saint-francis-of-assisi/|Saint Francis of Assisi]].`),
        },
      },
      {
        h2: "What the Bible says and what tradition added",
        paragraphs: [
          rich(`A Catholic Nativity scene mixes Scripture with centuries of Christian meditation. That is not a problem — tradition has always pondered the Gospel — but it helps to know which is which, especially when someone asks “is that actually in the Bible?”`),
        ],
        table: {
          caption: "The figures of the crib: source and status",
          headers: ["Figure", "Emoji", "Source", "Status"],
          rows: [
            [rich("The Child in the manger"), rich("👶"), rich(`{{${CBO}/luke/2/|Luke 2:7}}`), rich("Scripture")],
            [rich("Shepherds and their flocks"), rich("🐑🐏"), rich(`{{${CBO}/luke/2/|Luke 2:8–20}}`), rich("Scripture")],
            [rich("Angels singing “Gloria”"), rich("👼🎶"), rich(`{{${CBO}/luke/2/|Luke 2:13–14}}`), rich("Scripture")],
            [rich("The star"), rich("🌟"), rich(`{{${CBO}/matthew/2/|Matthew 2:2, 9–10}}`), rich("Scripture")],
            [rich("Ox and donkey"), rich("🐂🫏"), rich(`{{${CBO}/isaiah/1/|Isaiah 1:3}}, where the ox knows its owner and the donkey its master's crib; later Christian tradition`), rich("Tradition")],
            [rich("Three kings"), rich("👑👑👑"), rich(`Matthew says “magi” and names three gifts; the number three and the title “kings” come from the gifts and from {{${CBO}/psalms/72/|Psalm 72:10–11}} and {{${CBO}/isaiah/60/|Isaiah 60:3–6}}`), rich("Tradition")],
            [rich("Camels"), rich("🐪"), rich(`{{${CBO}/isaiah/60/|Isaiah 60:6}}, the camels bringing gold and frankincense`), rich("Tradition")],
            [rich("Names Caspar, Melchior, Balthasar"), rich("—"), rich("Later Western tradition; not in Scripture"), rich("Legend")],
            [rich("The little drummer boy"), rich("🥁"), rich("A twentieth-century carol"), rich("Modern song")],
          ],
        },
      },
      {
        h2: "Which Nativity emoji for which day of Christmastide",
        paragraphs: [
          rich(`Christmas is not one day but a season, running from the Vigil of Christmas to the Baptism of the Lord. Each feast inside it has its own emoji. These are the dates for the 2026–27 season in the United States.`),
        ],
        list: [
          rich("Christmas Eve and Midnight Mass, Thursday, December 24, 2026 — 🌃🕯️⛪. The night, the candles, the church."),
          rich(`Christmas Day, Friday, December 25, 2026 — 👶🌟. The Child and the star. Christmas is a solemnity, so the usual Friday abstinence does not apply.`),
          rich("Holy Family, Sunday, December 27, 2026 — 👶🤍. There is no Mary or Joseph emoji; write their names."),
          rich("Holy Innocents, Monday, December 28, 2026 — 🕯️. The children killed by Herod (Matthew 2:16–18). No party emojis."),
          rich(`Mary, Mother of God, Friday, January 1, 2027 — ⭐👶 with the words “Mother of God.” It is a holy day of obligation. See [[/blog/mary-mother-of-god-catholic-dogma/|why Mary is called Mother of God]].`),
          rich(`Epiphany, Sunday, January 3, 2027 — 🌟🐪👑. The magi arrive ({{${CBO}/matthew/2/|Matthew 2}}).`),
          rich(`Baptism of the Lord, Sunday, January 10, 2027 — 💧🕊️. The season ends at the Jordan ({{${CBO}/matthew/3/|Matthew 3}}).`),
        ],
        callout: {
          label: "When to stop using Christmas emojis",
          parts: rich(`The liturgical Christmas season ends on the Baptism of the Lord, January 10, 2027. Many families keep the crib up until February 2, the Presentation of the Lord (Candlemas) — a popular custom, not a rule. Until then, a 🌟👶 greeting is still in season.`),
        },
      },
      {
        h2: "Emojis to keep in second place",
        paragraphs: [
          rich(`The cultural Christmas set is not wrong. It is just not the Nativity. Use it after the Child and the star, not instead of them.`),
        ],
        list: [
          rich(`🎄 {{${A}/emoji/christmas-tree/|Christmas tree}} — a family custom. Fine in a greeting that already names Christ.`),
          rich(`🎅 {{${A}/emoji/santa-claus/|Santa Claus}} — his roots are in Saint Nicholas, the fourth-century bishop of Myra, whose feast is December 6. If you mention Santa, consider telling the real story: see [[/blog/saint-nicholas/|Saint Nicholas]].`),
          rich(`🎁 {{${A}/emoji/wrapped-gift/|Wrapped gift}} — it fits best when you mean the magi's gifts of gold, frankincense, and myrrh, or a gift to the poor.`),
          rich(`❄️ {{${A}/emoji/snowflake/|Snowflake}}, ⛄ {{${A}/emoji/snowman-without-snow/|snowman}}, 🦌 {{${A}/emoji/deer/|deer}} — winter decoration. Pleasant, but they say nothing about Bethlehem.`),
        ],
        callout: {
          label: "Is “Xmas” disrespectful?",
          parts: rich(`Not originally. The X is the Greek letter chi, the first letter of Christos, and Christians have used it as an abbreviation for Christ for many centuries. Today many readers see it as removing Christ, so in a faith message “Christmas” is the clearer choice.`),
        },
      },
      {
        h2: "Before you post: check how the emoji will look",
        paragraphs: [
          rich(`The 🫏 donkey was added to the emoji standard in 2022 (Emoji 15.0). On older phones it can appear as an empty box, which ruins a carefully built crib. If you are not sure, check the character on the {{${A}/emoji/donkey/|donkey page on Allemojipedia}}, or leave it out — the ox alone still says “manger.”`),
          rich(`For the meaning of the rest of the seasonal set, Allemojipedia's {{${A}/blog/christmas-emojis-meaning/|guide to Christmas emoji meanings}} and its {{${A}/emoji-combos/christmas-combo/|Christmas emoji combos}} show how each symbol is usually read online. You can copy any of them from the {{${A}/emoji-copy-and-paste/|emoji copy-and-paste keyboard}}.`),
          rich(`And when your message quotes the Gospel, link the chapter: the birth and the shepherds in {{${CBO}/luke/2/|Luke 2}}, the magi in {{${CBO}/matthew/2/|Matthew 2}}, and the prophecy of Bethlehem in {{${CBO}/micah/5/|Micah 5:2}} — all on {{https://catholicbibleonline.com/|Catholic Bible Online}}.`),
        ],
      },
    ],
    combos: [
      { combo: "🌟👶🐂🫏🐑", label: "The whole crib", message: "Merry Christmas! Christ is born in Bethlehem 🌟👶🐂🫏🐑" },
      { combo: "👼🎶🐑", label: "The angels and the shepherds", message: "Glory to God in the highest, and on earth peace 👼🎶🐑" },
      { combo: "🌃🕯️⛪", label: "Midnight Mass", message: "See you at Midnight Mass tonight 🌃🕯️⛪" },
      { combo: "✝️👶🌟", label: "The Incarnation", message: "The Word became flesh and dwelt among us ✝️👶🌟" },
      { combo: "🌟🐪👑", label: "Epiphany", message: "Happy Epiphany! We have seen his star and come to worship him 🌟🐪👑" },
      { combo: "👶🌟🎄", label: "Family greeting", message: "Merry Christmas from our family to yours! 👶🌟🎄" },
      { combo: "💧🕊️", label: "Baptism of the Lord", message: "This is my beloved Son — the Baptism of the Lord closes Christmas 💧🕊️" },
    ],
    rows: [
      { emoji: "👶", name: "Baby", use: "The Child Jesus in the manger", href: `${A}/emoji/baby/` },
      { emoji: "🌟", name: "Glowing star", use: "The star of Bethlehem", href: `${A}/emoji/glowing-star/` },
      { emoji: "⭐", name: "Star", use: "Christmas and Epiphany", href: `${A}/emoji/star/` },
      { emoji: "👼", name: "Baby angel", use: "The angels' Gloria", href: `${A}/emoji/baby-angel/` },
      { emoji: "🐑", name: "Ewe", use: "The shepherds' flock", href: `${A}/emoji/ewe/` },
      { emoji: "🐂", name: "Ox", use: "The ox of the crib", href: `${A}/emoji/ox/` },
      { emoji: "🫏", name: "Donkey", use: "The donkey of the crib (newer phones)", href: `${A}/emoji/donkey/` },
      { emoji: "👑", name: "Crown", use: "The magi at Epiphany", href: `${A}/emoji/crown/` },
      { emoji: "🐪", name: "Camel", use: "The magi's journey", href: `${A}/emoji/camel/` },
      { emoji: "🛖", name: "Hut", use: "The stable", href: `${A}/emoji/hut/` },
      { emoji: "🌃", name: "Night with stars", use: "Christmas night, Midnight Mass", href: `${A}/emoji/night-with-stars/` },
      { emoji: "🎶", name: "Musical notes", use: "The Gloria, carols", href: `${A}/emoji/musical-notes/` },
    ],
    faqs: [
      {
        question: "Is there a Nativity scene emoji?",
        answer: "No single emoji shows the Nativity. Combine them: 🌟👶🐂🫏🐑 gives the star, the Child, the ox and donkey, and the shepherds' flock. Add 👼 for the angels and 👑🐪 for the magi.",
      },
      {
        question: "What emoji represents baby Jesus?",
        answer: "The 👶 baby emoji, with a caption that names Christ. Without the words it reads as a generic birth announcement.",
      },
      {
        question: "Is there an emoji for Mary or Joseph?",
        answer: "No. Unicode has no figure of the Virgin Mary or Saint Joseph. Write their names; a 🤍 white heart beside “Mary” works for a Marian line.",
      },
      {
        question: "Why are an ox and a donkey in the Nativity scene?",
        answer: "They are not in Luke's Gospel. Christians read Isaiah 1:3, where the ox knows its owner and the donkey its master's crib, as a sign of the Child in the manger, and the two animals became part of every crib, including Saint Francis's at Greccio in 1223.",
      },
      {
        question: "Were there really three kings?",
        answer: "Matthew 2 calls them magi and lists three gifts: gold, frankincense, and myrrh. The number three comes from the gifts, and the title “kings” from Psalm 72 and Isaiah 60. Their traditional names are later legend.",
      },
      {
        question: "What is the difference between ⭐ and 🌟?",
        answer: "⭐ is the plain star; 🌟 is the glowing star. Either works for Christmas, but 🌟 reads more clearly as the star of Bethlehem.",
      },
      {
        question: "Why does the donkey emoji show as a box?",
        answer: "The 🫏 donkey was added in Emoji 15.0 in 2022, so older phones may not display it. Check it on Allemojipedia or use the ox 🐂 alone.",
      },
      {
        question: "When does the Christmas season end?",
        answer: "On the Baptism of the Lord, Sunday, January 10, 2027. Many families keep the crib until February 2, the Presentation of the Lord, as a custom.",
      },
    ],
  },
];

export function emojiGuideBySlug(slug: string) {
  return catholicEmojiGuides.find((guide) => guide.slug === slug);
}
