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
  answer: string;
  sections: { h2: string; paragraphs: Inline[][] }[];
  rows: { emoji: string; name: string; use: string; href: string }[];
  faqs: { question: string; answer: string }[];
};

const A = "https://allemojipedia.com";

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
];

export function emojiGuideBySlug(slug: string) {
  return catholicEmojiGuides.find((guide) => guide.slug === slug);
}
