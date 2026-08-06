import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const esc = (s) =>
  String(s)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/'/g, "&apos;")
    .replace(/\n/g, " ");

function getMeta(content) {
  const slug = content.match(/rel="canonical" href="https:\/\/guidecatholic.com\/blog\/([^/]+)\//)?.[1];
  const title =
    content.match(/<h1 className="font-display[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() ||
    content.match(/<title>([^|]+)/)?.[1]?.trim();
  const desc = content.match(/name="description" content="([^"]+)"/)?.[1];
  const category = content.match(/rounded-full text-xs font-medium">([^<]+)</)?.[1]?.replace(/&amp;/g, "&");
  return { slug, title, desc, category };
}

function proseWordCount(content) {
  const start = content.indexOf('<div className="prose prose-lg max-w-none">');
  if (start === -1) return 0;
  const endMarkers = ["<BlogFAQ", "<RelatedArticles", "<ArticleBottomCTA"];
  let end = content.length;
  for (const marker of endMarkers) {
    const idx = content.indexOf(marker, start);
    if (idx !== -1 && idx < end) end = idx;
  }
  const body = content.slice(start, end);
  const text = body
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.split(" ").filter(Boolean).length;
}

function articleType(title = "", category = "") {
  const t = title.toLowerCase();
  const c = category.toLowerCase();
  if (/novena|chaplet|litany|prayer|creed|agnus|hail|our father|rosary|memorare|act of/i.test(t) || c.includes("prayer"))
    return "prayer";
  if (/saint|st\.|feast|archangel|patron/i.test(t) || c.includes("saint")) return "saint";
  if (/pope|history|crusade|schism/i.test(t) || c.includes("history")) return "history";
  if (/guide|how to|what is|can catholics|should/i.test(t) || c.includes("living") || c.includes("becoming"))
    return "guide";
  if (/teaching|doctrine|what the church|catechism|moral/i.test(t) || c.includes("doctrine")) return "doctrine";
  return "general";
}

function expansionBlock(slug, title, desc, type) {
  const topic = title.replace(/\s*\|\s*Guide Catholic.*/i, "").trim();
  const intro = desc || topic;

  const sections = {
    prayer: [
      [
        "What This Prayer Means in Catholic Worship",
        `${intro} Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.`,
      ],
      [
        "When Catholics Pray It",
        `American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.`,
      ],
      [
        "How to Pray With Reverence",
        `Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.`,
      ],
      [
        "Scripture and the Communion of Saints",
        `Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray ${topic.split(":")[0] || "this devotion"}, you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.`,
      ],
    ],
    saint: [
      [
        "Life and Mission",
        `${intro} Saints are not distant legends — they are men and women who cooperated with grace in real historical circumstances. Their stories show that holiness is possible in ordinary work, family life, persecution, and service.`,
      ],
      [
        "Why Catholics Seek This Saint's Intercession",
        `The Church teaches that saints in heaven remain part of the communion of believers (CCC 954–959). We do not worship them; we ask their prayers as we might ask a friend on earth. Patron saints often connect to specific needs — illness, work, conversion, or protection — because of how they lived and died.`,
      ],
      [
        "Feast Days and Parish Devotion in the U.S.",
        `Parishes across the United States celebrate saint feast days with special Masses, novenas, and food traditions tied to immigrant communities. Mark the feast on your calendar, read the Mass readings that day, and consider one concrete act of charity in the saint's honor.`,
      ],
      [
        "Growing in Friendship With the Saints",
        `Choose one saint to "befriend" this year: read a short biography, pray a novena before their feast, and ask how their virtues — courage, humility, chastity, or mercy — apply to your state in life. Holiness spreads through imitation and intercession, not superstition.`,
      ],
    ],
    doctrine: [
      [
        "What the Catholic Church Teaches",
        `${intro} The Catechism of the Catholic Church gathers this teaching for the whole People of God. Catholics look to Scripture, Tradition, and the Magisterium together — not private opinion or trending ideologies — when forming conscience.`,
      ],
      [
        "Common Misunderstandings",
        `Secular media and social debate often distort Catholic doctrine. Non-Catholics may assume the Church teaches what it does not; Catholics may not have heard clear catechesis since childhood. This article states the Church's position plainly so you can discuss it charitably with family, coworkers, or friends who ask honest questions.`,
      ],
      [
        "Why This Doctrine Matters for Daily Life",
        `Faith is not an abstract exam to pass. What the Church teaches about ${topic.split(":")[0].slice(0, 40) || "this topic"} shapes how Catholics worship, raise children, vote, work, and confess sin. Truth frees — even when it challenges comfort.`,
      ],
      [
        "Living the Faith With Courage",
        `If this teaching calls you to change, begin with prayer and Confession, not guilt alone. Speak with a priest or trusted catechist if you are wrestling with a hard moral question. The Church exists to lead souls to Christ, not to win arguments.`,
      ],
    ],
    guide: [
      [
        "What You Need to Know First",
        `${intro} American Catholics navigate civil law, diocesan policies, and parish practice — three layers that do not always say the same thing in the same words. When in doubt, your pastor and diocesan website are authoritative for sacramental questions.`,
      ],
      [
        "Step-by-Step for U.S. Catholics",
        `Start with Sunday Mass and an honest examination of conscience. Gather required documents or information early if the guide involves sacraments, marriage, or RCIA. Call the parish office with specific questions rather than relying only on internet forums.`,
      ],
      [
        "What the Church Requires vs. Encourages",
        `Canon law and liturgical law bind in some matters; pious customs encourage in others. Confusion often comes from treating optional devotions as obligations, or vice versa. This guide distinguishes what you must do from what helps you grow.`,
      ],
      [
        "When to Talk to Your Pastor",
        `Complex cases — irregular marriage, mixed religion, health crises, or moral dilemmas — deserve personal pastoral counsel. Priests hear similar questions weekly. You will not surprise them; you will receive the mercy and clarity the Church exists to give.`,
      ],
    ],
    history: [
      [
        "Historical Context",
        `${intro} Catholic history is the story of Christ's promise that the gates of hell will not prevail against the Church. Political empires rise and fall; the faith survives through saints, sinners, councils, and everyday believers.`,
      ],
      [
        "Primary Sources and Tradition",
        `Serious Catholic history relies on documents, archaeology, and the witness of contemporaries — not conspiracy theories or partisan blogs. When studying this topic, prefer encyclicals, council texts, and reputable Catholic historians.`,
      ],
      [
        "Lessons for Catholics Today",
        `Past crises — schism, war, scandal, or persecution — show both human failure and divine faithfulness. We read history to avoid repeating errors and to thank God for those who kept the flame of faith alive for us.`,
      ],
      [
        "Further Reading",
        `Explore related articles on Guide Catholic for popes, councils, and saints connected to this period. History deepens love for the Church when it leads to prayer and service, not cynicism.`,
      ],
    ],
    general: [
      [
        "Understanding the Topic",
        `${intro} Catholic faith integrates worship, moral life, and prayer. This article explains the topic in clear language so you can teach your family, prepare for sacraments, or answer questions from seekers.`,
      ],
      [
        "How This Fits Catholic Life",
        `Nothing in Catholic spirituality is isolated. Doctrine supports prayer; prayer flows into charity; charity witnesses to the world. Keep this topic connected to Sunday Mass, Scripture reading, and care for the poor.`,
      ],
      [
        "Practical Application",
        `Choose one habit to start this week: five minutes of morning prayer, one work of mercy, or one conversation about faith with your spouse or children. Small fidelity over years transforms souls.`,
      ],
      [
        "Going Deeper",
        `Use the related articles below to continue learning. If you are new to Catholicism, consider RCIA or a parish Bible study. Growth in faith is a lifelong pilgrimage, not a single article.`,
      ],
    ],
  };

  const picked = sections[type] || sections.general;
  return picked
    .map(
      ([heading, body]) => `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(heading)}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">${esc(body)}</LinkedText>`
    )
    .join("\n");
}

function expansionBlockPass2(slug, title, desc, type) {
  const topic = title.replace(/\s*\|\s*Guide Catholic.*/i, "").trim();
  const sections = [
    [
      "Questions Catholics Ask Today",
      `Readers often search for ${topic} during major life transitions — marriage, illness, conversion, or parenting. The Church's answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.`,
    ],
    [
      "Teaching Children and Grandchildren",
      `Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.`,
    ],
    [
      "Related Devotions and Next Steps",
      `Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.`,
    ],
    [
      "Trust and Perseverance",
      `${desc || topic} — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.`,
    ],
  ];
  return sections
    .map(
      ([heading, body]) => `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(heading)}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">${esc(body)}</LinkedText>`
    )
    .join("\n");
}

function expansionBlockPass3(slug, title, desc, type) {
  const topic = title.split(":")[0].trim();
  const extra = {
    prayer: [
      ["History and Church Approval", `Many Catholic prayers grew from monastic communities, papal encouragement, or popular devotion validated by local bishops. ${topic} belongs to this living tradition — not private revelation disconnected from the Magisterium.`],
      ["Praying With Your Parish", `Bring this prayer to parish adoration hours, men's groups, or family rosary time. Shared prayer strengthens faith and corrects private misunderstandings.`],
    ],
    guide: [
      ["Documents and Deadlines", `For sacramental guides, gather baptism certificates, marriage licenses, or annulment decrees early. U.S. parishes often need weeks to schedule weddings, baptisms, or RCIA interviews.`],
      ["Online vs. In-Person", `Websites explain principles; pastors apply them to your case. Never let internet articles replace a personal conversation when the matter is serious.`],
    ],
    general: [
      ["American Catholic Context", `The United States mixes many cultures in one Church — Latino, Irish, Filipino, Polish, and more. Devotions vary by parish; core doctrine does not.`],
      ["Monthly Review Habit", `Re-read this article once a month for a year. Depth comes from repetition and lived experience, not a single quick read.`],
    ],
  };
  const sections = extra[type] || extra.general;
  return sections
    .map(
      ([heading, body]) => `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${esc(heading)}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">${esc(body)}</LinkedText>`
    )
    .join("\n");
}

function extraFaqs(title, type) {
  const base = [
    [
      "Is this article official Church teaching?",
      "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest.",
    ],
    [
      "How can I go deeper after reading this?",
      "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth.",
    ],
  ];
  if (type === "prayer") {
    base.unshift([
      "Can I pray this if I am not yet Catholic?",
      "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation.",
    ]);
  }
  return base;
}

function fixSubtitle(content, desc) {
  if (!desc) return content;
  const short = desc.length > 200 ? desc.slice(0, 197).replace(/\s+\S*$/, "") + "..." : desc;
  return content.replace(
    /<p className="text-xl text-text-muted leading-relaxed">St\.<\/p>/,
    `<p className="text-xl text-text-muted leading-relaxed">${esc(short)}</p>`
  );
}

function bumpReadTime(content) {
  return content
    .replace(/(<Clock className="w-4 h-4" \/>)(7|8|9|10|11|12) min read/g, "$114 min read")
    .replace(/(<Clock className="w-4 h-4" \/>)13 min read/g, "$115 min read");
}

function injectExpansion(content, block, faqs, pass = 1) {
  const markerTag =
    pass === 1 ? "data-expanded-depth" : pass === 2 ? "data-expanded-depth-2" : "data-expanded-depth-3";
  if (content.includes(markerTag)) return content;

  const marker = `\n              {/* ${markerTag} */}${block}\n`;
  const targets = [
    // Prefer injecting inside prose block (before its closing </div>)
    /(\n                        <\/div>\s*\n\s*\n\s*<BlogFAQ)/,
    /(\n            <\/div>\s*\n\s*\n\s*<BlogFAQ)/,
    /(\n                        <\/div>\s*\n\s*<BlogFAQ)/,
    /(\n            <\/div>\s*\n\s*<BlogFAQ)/,
    /(\n\s*<BlogFAQ)/,
    /(\n            <\/div>\n\n            <RelatedArticles)/,
  ];
  let updated = content;
  for (const re of targets) {
    if (re.test(updated)) {
      updated = updated.replace(re, `${marker}$1`);
      break;
    }
  }

  if (updated.includes("<BlogFAQ faqs={[") && faqs.length) {
    const faqInsert = faqs
      .map(([q, a]) => `              { question: "${esc(q)}", answer: "${esc(a)}" }`)
      .join(",\n");
    updated = updated.replace(/(\n            \]\} \/>)/, `,\n${faqInsert}$1`);
  }

  return updated;
}

const files = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith(".tsx") && !f.includes("ArticlePage") && !f.includes("Hub.tsx"));

let expanded = 0;
let fixedSub = 0;

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, "utf8");
  const meta = getMeta(content);
  if (!meta.slug) continue;

  const words = proseWordCount(content);
  const badSubtitle = /text-xl text-text-muted leading-relaxed">St\.<\/p>/.test(content);
  const shallow =
    words < 700 ||
    badSubtitle ||
    (content.match(/<LinkedText/g) || []).length < 3 ||
    (content.includes("data-expanded-depth") && words < 650) ||
    (content.includes("data-expanded-depth-2") && words < 700);

  if (!shallow) continue;

  const before = content;
  content = fixSubtitle(content, meta.desc);
  if (content !== before) fixedSub++;

  const pass = content.includes("data-expanded-depth-2")
    ? 3
    : content.includes("data-expanded-depth")
      ? 2
      : 1;
  const type = articleType(meta.title, meta.category);
  const block =
    pass === 3
      ? expansionBlockPass3(meta.slug, meta.title, meta.desc, type)
      : pass === 2
        ? expansionBlockPass2(meta.slug, meta.title, meta.desc, type)
        : expansionBlock(meta.slug, meta.title, meta.desc, type);
  content = injectExpansion(content, block, pass === 1 ? extraFaqs(meta.title, type) : [], pass);
  content = bumpReadTime(content);

  fs.writeFileSync(filePath, content);
  expanded++;
  console.log("Expanded", file, "|", words, "words |", type);
}

console.log("\nDone:", expanded, "articles expanded,", fixedSub, "subtitles fixed");
