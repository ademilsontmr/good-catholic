#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function popeToSlug(name) {
  return name
    .replace(/^St\.\s+/i, "st-")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function trimMeta(s, max = 155) {
  if (!s || s.length <= max) return s || "";
  return s.slice(0, 152).replace(/\s+\S*$/, "") + "...";
}

function getEra(num) {
  if (num <= 50) return "the apostolic and patristic Church";
  if (num <= 100) return "late antiquity";
  if (num <= 150) return "the early medieval papacy";
  if (num <= 200) return "the high Middle Ages";
  if (num <= 230) return "the Renaissance papacy";
  if (num <= 250) return "the early modern and Counter-Reformation era";
  if (num <= 260) return "the modern papacy";
  return "the contemporary Catholic Church";
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function splitSentences(text) {
  if (!text) return [];
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])(?<!(?:St|Mr|Mrs|Dr|Jr|Sr|vs|etc|Vol|Rev|Bl|Ven|O\.S\.B|O\.P|O\.F\.M|S\.J)\.)\s+(?=[A-Z"(])/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20 && !/^Papal motto:/i.test(s));
}

function categorizeSentences(notes) {
  const sentences = splitSentences(notes);
  const buckets = {
    firsts: [],
    martyrdom: [],
    councils: [],
    conflicts: [],
    reforms: [],
    geography: [],
    legacy: [],
    general: [],
  };
  for (const s of sentences) {
    if (/^(First|Only|Last|Youngest|Longest|Shortest)/i.test(s)) buckets.firsts.push(s);
    else if (/\b(martyred|martyr|beheaded|crucified)\b/i.test(s)) buckets.martyrdom.push(s);
    else if (/\b(council|Lateran|Vatican|Chalcedon|Nicaea|Trent|Constance|Ephesus|Lyons)\b/i.test(s)) buckets.councils.push(s);
    else if (/\b(schism|crusade|war|excommunicat|Controversy|invaded|sacked|deposed)\b/i.test(s)) buckets.conflicts.push(s);
    else if (/\b(reform|issued|approved|instituted|convened|founded|established|sent|commissioned|ratified|opened|closed|suppressed|canonized|declared|encyclical|bull)\b/i.test(s)) buckets.reforms.push(s);
    else if (/^(Subject of|Citizen of|Roman citizen|born|Member of the)/i.test(s)) buckets.geography.push(s);
    else if (/\b(legacy|remembered|Doctor of the Church|feast day|canonized|beloved|controversial|saint)\b/i.test(s)) buckets.legacy.push(s);
    else buckets.general.push(s);
  }
  return { sentences, buckets };
}

const ERA_OPENINGS = {
  "the apostolic and patristic Church": (name) =>
    `${name} shepherded the Church when Christianity was still an outlawed or barely tolerated faith in the Roman Empire. Papal records from this era are scarce, but tradition and archaeology preserve the memory of these earliest successors of St. Peter.`,
  "late antiquity": (name) =>
    `${name} governed the Church during late antiquity — an age of imperial transition, barbarian invasions, and fierce theological debate over the nature of Christ. Bishops of Rome were increasingly seen as guardians of orthodoxy for the entire Christian world.`,
  "the early medieval papacy": (name) =>
    `${name} reigned during the early Middle Ages, when the papacy navigated the collapse of Roman order in the West, the rise of new kingdoms, and the missionary expansion of Christianity across Europe.`,
  "the high Middle Ages": (name) =>
    `${name} led the Church in the high Middle Ages — an era of crusades, monastic reform, cathedral building, and intense negotiation between popes and emperors over who held ultimate authority in Christendom.`,
  "the Renaissance papacy": (name) =>
    `${name} sat on the Chair of Peter during the Renaissance, when popes were among the most powerful patrons of art and architecture in Europe — but also faced corruption scandals, the Protestant Reformation, and the discovery of the New World.`,
  "the early modern and Counter-Reformation era": (name) =>
    `${name} guided the Catholic Church through the early modern period — the age of the Counter-Reformation, the Council of Trent, global missionary expansion, and the rise of nation-states that challenged papal temporal power.`,
  "the modern papacy": (name) =>
    `${name} served during the modern papacy — a time of industrial revolution, world wars, the loss of the Papal States, Vatican I and II, and the Church's engagement with democracy, human rights, and mass media.`,
  "the contemporary Catholic Church": (name) =>
    `${name} leads (or led) the Church in the contemporary era, when over a billion Catholics look to Rome for unity while the papacy faces globalization, secularization, digital media, and rapid social change.`,
};

function isOrphanNoteLine(line) {
  const t = line.trim();
  if (!t || t.length < 25) return false;
  if (t.startsWith("#") || t.startsWith("|") || t === "---") return false;
  if (/^(Popes of|See also|Notes|References|Further reading|External links|Religious orders|Numbering)/.test(t)) return false;
  if (/^\d+\.\s/.test(t)) return false;
  if (/^(Annuario|Catholicism|The Early Papacy|Catholic Online|Chronological List|List of)/.test(t)) return false;
  if (t.startsWith("http") || t.includes("Archived from")) return false;
  if (/^This chronological list|^Plaque commemorating|^The term pope|^Hermannus Contractus|^A significant number/.test(t)) return false;
  if (/^Subject of|^Citizen of|^Italian citizen|^Polish citizen|^German citizen|^Argentine citizen|^French citizen|^Dual American|^During his pontificate|^His efforts|^Julius II was|^The niece of|^Almost three-year|^Two-year period|^Six-month period/.test(t)) return true;
  if (/^[A-Z]/.test(t) && !t.includes("|") && t.length > 50) return true;
  return false;
}

function isAgeColumn(s) {
  return /^\d+\s*\/\s*\d+/.test(s) || /^[\d†\s()/]+$/.test(s) && s.length <= 15;
}

function isBirthColumn(s) {
  return /\b(January|February|March|April|May|June|July|August|September|October|November|December|\d{4}|c\.\s*\d)\b/i.test(s);
}

function parseTableRow(rawLine) {
  const parts = rawLine.split("|").map((p) => p.trim());
  while (parts.length > 0 && parts[parts.length - 1] === "") parts.pop();
  if (parts.length < 3) return null;

  const num = parseInt(parts[1], 10);
  if (Number.isNaN(num)) return null;

  let notes = "";
  let personalName = "";
  let birth = "";

  if (parts.length >= 8) {
    personalName = parts[4] || "";
    birth = parts[5] || "";
    notes = parts[7] || "";
  } else if (parts.length === 7 && isBirthColumn(parts[5]) && isAgeColumn(parts[6])) {
    personalName = parts[4] || "";
    birth = parts[5] || "";
    notes = "";
  } else if (parts.length === 7 && /^\d+\s*\/\s*\d+/.test(parts[6])) {
    personalName = parts[4] || "";
    birth = parts[5] || "";
    notes = "";
  } else if (parts.length === 6) {
    birth = parts[4] || "";
    notes = parts[5] || "";
  } else if (parts.length === 7) {
    birth = parts[4] || "";
    notes = parts[6] || "";
  } else {
    notes = parts[parts.length - 1] || "";
  }

  return { num, notes: notes.trim(), birth: birth.trim(), personalName: personalName.trim() };
}

/** Parse scripts/wikipedia-popes.md into notes keyed by pope number */
function parseWikipediaPopes(mdPath) {
  const md = fs.readFileSync(mdPath, "utf8");
  const popes = {};
  let orphanQueue = [];
  let currentOrphan = [];
  let inPopeTables = false;

  function flushOrphan() {
    if (currentOrphan.length) {
      orphanQueue.push(currentOrphan.join(" ").replace(/\s+/g, " ").trim());
      currentOrphan = [];
    }
  }

  for (const rawLine of md.split("\n")) {
    const line = rawLine.trim();

    if (line.startsWith("| Popes of")) {
      inPopeTables = true;
      continue;
    }

    if (line.startsWith("Motto:")) {
      flushOrphan();
      const mottoText = line.replace(/^Motto:\s*/, "").replace(/[""]/g, '"').replace(/\.\s*$/, "");
      currentOrphan.push(`Papal motto: ${mottoText}.`);
      continue;
    }

    const row = parseTableRow(rawLine);
    if (row) {
      flushOrphan();
      let { num, notes, birth, personalName } = row;

      if (!notes && orphanQueue.length) {
        notes = orphanQueue.shift();
      }

      popes[num] = { notes, birth, personalName };
      continue;
    }

    if (inPopeTables && isOrphanNoteLine(line)) {
      currentOrphan.push(line);
    }
  }

  flushOrphan();
  return popes;
}

function popeOrd(n) {
  return `${n}º`;
}

const NOTABLE_TITLE_OVERRIDES = {
  1: "Pope St. Peter (1º): Life, Martyrdom & Why He Is the First Pope",
  45: "Pope St. Leo I the Great (45º): Attila, Chalcedon & Papal Authority",
  64: "Pope St. Gregory I the Great (64º): Biography, Legacy & Medieval Church",
  157: "Pope St. Gregory VII (157º): Canossa, Reform & Church vs. State",
  176: "Pope Innocent III (176º): Lateran IV, Power & Medieval Papacy",
  214: "Pope Alexander VI (214º): Borgia Papacy, Inter Caetera & Controversy",
  216: "Pope Julius II (216º): Warrior Pope, Sistine Chapel & Renaissance Rome",
  217: "Pope Leo X (217º): Medici Pope, Luther & St. Peter's Basilica",
  255: "Pope Bl. Pius IX (255º): Vatican I, Immaculate Conception & Longest Reign",
  256: "Pope Leo XIII (256º): Rerum Novarum, Social Teaching & Modern Papacy",
  261: "Pope St. John XXIII (261º): Vatican II, Pacem in Terris & Good Pope John",
  264: "Pope St. John Paul II (264º): Complete Biography, Legacy & Impact",
  265: "Pope Benedict XVI (265º): Biography, Resignation & Theological Legacy",
  266: "Pope Francis (266º): Biography, Legacy & First Latin American Pope",
  267: "Pope Leo XIV (267º): Biography, Election & First American Pope",
};

function extractTitleHook(name, notes) {
  const hooks = [];
  const combined = `${name} ${notes}`;

  const patterns = [
    [/first pope born in the United States|first American-born pope/i, "First American Pope"],
    [/first pope from (?:Poland|the Americas|Argentina|Latin America)/i, (m) => m[0].replace(/^first pope from /i, "First Pope from ")],
    [/first (?:French|German|English|Dutch|African|Greek|Syrian|Berber) pope/i, (m) => m[0][0].toUpperCase() + m[0].slice(1)],
    [/the Great/i, "the Great"],
    [/Western Schism/i, "Western Schism"],
    [/Second Vatican Council|Vatican II/i, "Vatican II"],
    [/Council of Trent/i, "Council of Trent"],
    [/Fourth Lateran Council|Lateran Council/i, "Lateran Council"],
    [/Council of Chalcedon|Chalcedon/i, "Chalcedon"],
    [/First Crusade|Crusade/i, "Crusades"],
    [/Investiture Controversy|Canossa/i, "Canossa & Reform"],
    [/Attila the Hun|Attila/i, "Attila the Hun"],
    [/resign(?:ed|ation)/i, "Resignation"],
    [/ Borgia|Inter caetera/i, "Borgia Era"],
    [/Rerum novarum/i, "Rerum Novarum"],
    [/Immaculate Conception|papal infallibility/i, "Vatican I & Dogma"],
    [/Reformation|Martin Luther|excommunicating Martin Luther/i, "Reformation Era"],
    [/Avignon/i, "Avignon Papacy"],
    [/Gregorian calendar|reformed the calendar/i, "Gregorian Calendar"],
    [/Sistine Chapel|Michelangelo/i, "Sistine Chapel & Art"],
    [/martyred|martyr/i, "Martyrdom & Sainthood"],
  ];

  for (const [regex, hook] of patterns) {
    const m = combined.match(regex);
    if (m) {
      hooks.push(typeof hook === "function" ? hook(m) : hook);
    }
  }

  return [...new Set(hooks)].slice(0, 2);
}

function buildTitle(pope, notes) {
  if (NOTABLE_TITLE_OVERRIDES[pope.num]) return NOTABLE_TITLE_OVERRIDES[pope.num];
  const hooks = extractTitleHook(pope.name, notes);
  const displayName = pope.name;
  if (hooks.length) {
    return `Pope ${displayName} (${popeOrd(pope.num)}): ${hooks.join(" & ")} — Complete Guide`;
  }
  return `Pope ${displayName} (${popeOrd(pope.num)}): Biography, Pontificate & Legacy`;
}

function buildHighlights(pope, notes, isSaint) {
  const ord = ordinal(pope.num);
  const highlights = [`${ord} pope of the Catholic Church`, `Pontificate: ${pope.reign}`];

  if (isSaint) highlights.push("Venerated as a saint in the Catholic Church");
  if (/Doctor of the Church/i.test(notes)) highlights.push("Declared a Doctor of the Church");
  if (/Blessed|Bl\./i.test(pope.name + notes)) highlights.push("Beatified by the Catholic Church");
  if (/Servant of God/i.test(notes)) highlights.push("Declared Servant of God");

  const sentences = splitSentences(notes);
  for (const s of sentences) {
    if (highlights.length >= 6) break;
    if (/^(First|Last|Only|Youngest|Longest|Shortest)/i.test(s)) highlights.push(s.replace(/\s+/g, " ").slice(0, 130));
    else if (/\b(feast day|canonized|convened|issued|founded|moved|approved|initiated|martyred|resigned|abdicated|encyclical|crusade|council|schism|excommunicated)\b/i.test(s)) {
      const trimmed = s.replace(/\s+/g, " ").slice(0, 130);
      if (!highlights.some((h) => h.slice(0, 40) === trimmed.slice(0, 40))) highlights.push(trimmed);
    }
  }

  if (highlights.length < 4) {
    highlights.push(`Shepherded the Church during ${getEra(pope.num)}`);
    highlights.push("Successor of St. Peter in the official Catholic list");
  }

  return highlights.slice(0, 6);
}

function buildEarlyLife(pope, wiki, isSaint) {
  const { notes, birth, personalName } = wiki;
  const { buckets } = categorizeSentences(notes);
  const parts = [];

  if (personalName && !/^(Rome|Pavia|c\.\s*\d|\d)/i.test(personalName)) {
    parts.push(
      `Before his election to the papacy, ${pope.name.replace(/^St\.\s+/, "")} was known as ${personalName}.`
    );
  }
  if (birth) {
    parts.push(`He was born in ${birth.replace(/^c\.\s*/, "circa ")}, entering a world far removed from the global Church we know today.`);
  }
  if (buckets.geography.length) {
    parts.push(buckets.geography.slice(0, 2).join(" "));
  }
  if (/Member of the (Order|Dominican|Franciscan|Jesuit|Benedictine)/i.test(notes)) {
    const orderMatch = notes.match(/Member of the ([^.]+?)(?:\.|,)/i);
    if (orderMatch) parts.push(`He belonged to ${orderMatch[1]}, bringing monastic or religious discipline to the papal office.`);
  }
  if (isSaint && buckets.martyrdom.length) {
    parts.push(buckets.martyrdom[0]);
  }
  if (!parts.length) {
    parts.push(
      `Details of ${pope.name.replace(/^St\.\s+/, "")}'s early life are limited in surviving sources, as is common for popes of this period. What is certain is that he was chosen by the College of Cardinals (or by acclamation in earlier eras) to succeed the previous Bishop of Rome.`
    );
  }
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

function buildHistoricalContext(pope, era, notes) {
  const opener = (ERA_OPENINGS[era] || ERA_OPENINGS["the high Middle Ages"])(pope.name.replace(/^St\.\s+/, ""));
  const { buckets } = categorizeSentences(notes);
  const extras = [...buckets.conflicts, ...buckets.councils].slice(0, 2);
  return [opener, ...extras].join(" ").replace(/\s+/g, " ").trim();
}

function buildPapalActs(pope, wiki, era) {
  const { notes } = wiki;
  const { buckets, sentences } = categorizeSentences(notes);
  const acts = [
    ...buckets.reforms,
    ...buckets.councils,
    ...buckets.conflicts,
    ...buckets.firsts,
  ];
  let text = `During his pontificate (${pope.reign}), ${pope.name.replace(/^St\.\s+/, "")} exercised the papal ministries of teaching, governing, and sanctifying in ${era}. `;
  if (acts.length >= 2) {
    text += acts.slice(0, 5).join(" ");
  } else if (sentences.length >= 2) {
    text += sentences.slice(0, 4).join(" ");
  } else {
    text += `He upheld apostolic doctrine, celebrated the sacraments, and provided pastoral leadership to Christians facing the political and spiritual challenges of his age.`;
  }
  const mottoMatch = notes.match(/Papal motto: ([^.]+\.)/i);
  if (mottoMatch) text += ` ${mottoMatch[0]}`;
  return text.replace(/\s+/g, " ").trim();
}

function buildSuccession(pope, prev, next) {
  const ord = ordinal(pope.num);
  const parts = [];
  if (prev) {
    parts.push(
      `${pope.name} followed Pope ${prev.name} (${popeOrd(prev.num)}) in the unbroken line of apostolic succession from St. Peter.`
    );
  } else {
    parts.push(`${pope.name} stands at the beginning of the official list of Roman pontiffs as the first pope.`);
  }
  if (next) {
    parts.push(
      `Upon his death or resignation, he was succeeded by Pope ${next.name} (${popeOrd(next.num)}), who continued the mission of shepherding the universal Church.`
    );
  } else {
    parts.push(`${pope.name} is the current reigning pope, the ${ord} successor of St. Peter and Bishop of Rome.`);
  }
  parts.push(
    `Explore the full chronological chain in our complete list of all 267 popes, or read the biographies of neighboring pontiffs linked below.`
  );
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

function buildWhyHeMatters(pope, wiki, isSaint, era) {
  const { buckets, sentences } = categorizeSentences(wiki.notes);
  let text = "";
  if (buckets.legacy.length >= 1) {
    text = buckets.legacy.slice(0, 3).join(" ");
  } else if (buckets.firsts.length >= 1) {
    text = buckets.firsts.slice(0, 2).join(" ") + " " + (sentences.find((s) => !buckets.firsts.includes(s)) || "");
  } else if (sentences.length >= 2) {
    text = sentences.slice(-3).join(" ");
  } else {
    text = `${pope.name} holds place ${popeOrd(pope.num)} in the official Annuario Pontificio. `;
    if (isSaint) text += "Catholics venerate his feast day and invoke his intercession. ";
    text += "His pontificate forms an essential link in the unbroken succession from St. Peter to Pope Leo XIV.";
  }
  text += ` Understanding ${pope.name.replace(/^St\.\s+/, "")} within ${era} helps Catholics see how the Holy Spirit has guided the Church through twenty centuries of saints, sinners, councils, and renewal.`;
  return text.replace(/\s+/g, " ").trim();
}

function markUsed(used, text) {
  for (const s of splitSentences(text)) {
    if (s.length > 25) used.add(s.slice(0, 72));
  }
}

function pickFresh(used, candidates, max = 3) {
  const out = [];
  for (const s of candidates) {
    if (out.length >= max) break;
    const key = s.slice(0, 72);
    if (!used.has(key)) {
      used.add(key);
      out.push(s);
    }
  }
  return out;
}

function buildDirectAnswer(pope, wiki, isSaint, era) {
  const ord = ordinal(pope.num);
  const { buckets, sentences } = categorizeSentences(wiki.notes);
  const keyFact =
    pickFresh(new Set(), [...buckets.firsts, ...buckets.reforms, ...buckets.martyrdom, ...sentences], 1)[0] || "";

  const parts = [
    `${pope.name} was the ${ord} pope of the Catholic Church, reigning ${pope.reign} during ${era}.`,
  ];
  if (keyFact) parts.push(keyFact);
  if (isSaint) parts.push("The Catholic Church venerates him as a saint.");
  else if (pope.num >= 267) parts.push("He is the reigning Supreme Pontiff and Bishop of Rome.");
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

function buildForCatholicsToday(pope, wiki, isSaint, era) {
  const bare = pope.name.replace(/^St\.\s+/, "");
  const parts = [
    `Studying ${pope.name} helps Catholics see how the Holy Spirit guided the Church through ${era} — with human weakness and grace intertwined.`,
  ];
  if (isSaint) {
    parts.push(`You may ask ${bare} for intercession and look up his feast in the Roman calendar or Martyrology.`);
  }
  if (/\bencyclical|council|Lateran|Trent|Vatican|bull\b/i.test(wiki.notes)) {
    parts.push(`Primary sources from this pontificate — bulls, conciliar acts, or encyclicals — reward readers who want depth beyond summaries.`);
  }
  parts.push(
    `Place this pope in context using our chronological list of all 267 popes and the biographies of his immediate predecessor and successor linked below.`
  );
  return parts.join(" ").replace(/\s+/g, " ").trim();
}
function buildIntro(pope, wiki, isSaint, era, used) {
  const hooks = extractTitleHook(pope.name, wiki.notes);
  const bareName = pope.name.replace(/^St\.\s+/, "");
  let intro = `This biography of ${pope.name} (${popeOrd(pope.num)}) covers background, major events, and legacy in the line of St. Peter. `;
  if (hooks.length) intro += `Common search topics include ${hooks.join(", ")}. `;
  intro += `During ${era}, the Bishop of Rome exercised teaching, sanctifying, and governing authority for the universal Church.`;
  if (isSaint) intro += " Catholics honor him as a saint whose intercession remains available to the faithful.";
  markUsed(used, intro);
  return intro.replace(/\s+/g, " ").trim();
}

function buildPontificate(pope, wiki, era, used) {
  const { buckets, sentences } = categorizeSentences(wiki.notes);
  const picked = pickFresh(used, [...buckets.reforms, ...buckets.councils], 4);
  let text = `The pontificate (${pope.reign}) centered on governance during ${era}. `;
  if (picked.length >= 2) {
    text += picked.join(" ");
  } else if (sentences.length) {
    text += pickFresh(used, sentences, 3).join(" ");
  } else {
    text += `Sources ${pope.num <= 50 ? "include apostolic tradition and the Liber Pontificalis" : "include papal bulls, Vatican archives, and contemporary chronicles"}.`;
  }
  markUsed(used, text);
  return text.replace(/\s+/g, " ").trim();
}

function buildPapalActsRefined(pope, wiki, era, used) {
  const { buckets, sentences } = categorizeSentences(wiki.notes);
  const picked = pickFresh(used, [...buckets.conflicts, ...buckets.firsts, ...buckets.martyrdom, ...buckets.general], 4);
  let text = `${pope.name.replace(/^St\.\s+/, "")} left a distinct mark through decisions that historians still debate and Catholics still study. `;
  if (picked.length >= 2) {
    text += picked.join(" ");
  } else {
    text += pickFresh(used, sentences, 2).join(" ") || `His reign contributed to the continuous apostolic succession now numbering 267 popes.`;
  }
  const mottoMatch = wiki.notes.match(/Papal motto: ([^.]+\.)/i);
  if (mottoMatch && !used.has(mottoMatch[0].slice(0, 72))) {
    text += ` ${mottoMatch[0]}`;
    markUsed(used, mottoMatch[0]);
  }
  markUsed(used, text);
  return text.replace(/\s+/g, " ").trim();
}

function buildLegacyRefined(pope, wiki, isSaint, era, used) {
  const { buckets, sentences } = categorizeSentences(wiki.notes);
  const picked = pickFresh(used, [...buckets.legacy, ...sentences.slice(-4)], 3);
  let text = "";
  if (picked.length >= 1) {
    text = picked.join(" ");
  } else {
    text = `${pope.name} remains pope ${popeOrd(pope.num)} in the Annuario Pontificio. `;
    if (isSaint) text += "The Church venerates his feast and holds up his virtues for imitation. ";
  }
  text += ` Read against ${era}, his pontificate shows how Providence works through imperfect ministers without abandoning the Barque of Peter.`;
  markUsed(used, text);
  return text.replace(/\s+/g, " ").trim();
}

function buildEarlyLifeFresh(pope, wiki, isSaint, used) {
  const { notes, birth, personalName } = wiki;
  const { buckets } = categorizeSentences(notes);
  const parts = [];

  if (personalName && !/^(Rome|Pavia|c\.\s*\d|\d)/i.test(personalName)) {
    parts.push(`Before election he was known as ${personalName}.`);
  }
  if (birth) {
    parts.push(`Born ${birth.replace(/^c\.\s*/, "circa ")}, he entered a world shaped by politics and piety very different from today's global Church.`);
  }
  const geo = pickFresh(used, buckets.geography, 2);
  if (geo.length) parts.push(geo.join(" "));
  if (/Member of the (Order|Dominican|Franciscan|Jesuit|Benedictine)/i.test(notes)) {
    const orderMatch = notes.match(/Member of the ([^.]+?)(?:\.|,)/i);
    if (orderMatch) parts.push(`Religious formation in ${orderMatch[1]} shaped his approach to the papal office.`);
  }
  if (isSaint) {
    const m = pickFresh(used, buckets.martyrdom, 1);
    if (m.length) parts.push(m[0]);
  }
  if (!parts.length) {
    parts.push(
      `Early biographical details for ${pope.name.replace(/^St\.\s+/, "")} are sparse, as is common for ancient pontiffs; election by the Church marks the start of verifiable public ministry.`
    );
  }
  const text = parts.join(" ");
  markUsed(used, text);
  return text.replace(/\s+/g, " ").trim();
}

function buildHistoricalContextFresh(pope, era, notes, used) {
  const opener = (ERA_OPENINGS[era] || ERA_OPENINGS["the high Middle Ages"])(pope.name.replace(/^St\.\s+/, ""));
  const { buckets } = categorizeSentences(notes);
  const extras = pickFresh(used, [...buckets.conflicts, ...buckets.councils], 2);
  const text = [opener, ...extras].join(" ");
  markUsed(used, text);
  return text.replace(/\s+/g, " ").trim();
}

function buildRelatedPopes(pope, prev, next, allPopes) {
  const related = [];
  if (prev) related.push({ num: prev.num, slug: prev.slug, name: prev.name, relation: "Previous pope" });
  if (next) related.push({ num: next.num, slug: next.slug, name: next.name, relation: "Next pope" });

  const baseName = pope.name.replace(/^St\.\s+/, "").replace(/\s+(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XVI|XVII|XVIII|XIX|XX|XXI|XXII|XXIII|XXIV|XXV|XXVI|XXVII)$/i, "").trim();
  if (baseName.length > 3) {
    const sameName = allPopes
      .filter((p) => p.num !== pope.num && p.name.replace(/^St\.\s+/, "").includes(baseName))
      .slice(0, 3);
    for (const p of sameName) {
      if (!related.some((r) => r.num === p.num)) {
        related.push({ num: p.num, slug: p.slug, name: p.name, relation: `Also named ${baseName}` });
      }
    }
  }
  return related.slice(0, 5);
}

function buildFaqs(pope, wiki, isSaint, era, prev, next) {
  const { notes, birth, personalName } = wiki;
  const ord = ordinal(pope.num);
  const bareName = pope.name.replace(/^St\.\s+/, "");

  const faqs = [
    {
      question: `When was Pope ${bareName} pope?`,
      answer: `${pope.name} reigned as the ${ord} pope from ${pope.reign}, during ${era}.`,
    },
    {
      question: `What number pope was ${bareName}?`,
      answer: `${pope.name} was pope ${popeOrd(pope.num)} — the ${ord} successor of St. Peter in the Catholic Church's official list of 267 popes.`,
    },
  ];

  if (isSaint) {
    faqs.push({
      question: `Is Pope ${bareName} a saint?`,
      answer: `Yes. The Catholic Church venerates ${pope.name} as a saint.${/feast day/i.test(notes) ? " " + (notes.match(/feast day[^.]+\./i)?.[0] || "") : ""}`,
    });
  } else if (/First|Only|Last|Youngest|Longest|Shortest|martyred|resigned|Western Schism|Council|Crusade|encyclical/i.test(notes)) {
    const keyFact = splitSentences(notes).find((s) =>
      /^(First|Only|Last|Youngest|Longest|Shortest|Convened|Issued|Moved|Resigned|Initiated)/i.test(s)
    );
    faqs.push({
      question: `What is ${bareName} remembered for?`,
      answer: keyFact || `${pope.name} is remembered for shepherding the Church during ${era}, with a pontificate marked by the challenges and achievements of his historical period.`,
    });
  } else {
    faqs.push({
      question: `What is ${bareName} remembered for?`,
      answer: `${pope.name} served the Church during ${era} (${pope.reign}). ${splitSentences(notes)[0] || "His pontificate belongs to the continuous apostolic succession from St. Peter."}`,
    });
  }

  if (prev && next) {
    faqs.push({
      question: `Who came before and after Pope ${bareName}?`,
      answer: `${pope.name} (${popeOrd(pope.num)}) succeeded Pope ${prev.name} (${popeOrd(prev.num)}) and was followed by Pope ${next.name} (${popeOrd(next.num)}) in the line of apostolic succession.`,
    });
  } else if (personalName && !personalName.match(/^(Rome|c\.\s*\d)/i)) {
    faqs.push({
      question: `What was Pope ${bareName}'s birth name?`,
      answer: `Before his election, ${pope.name} was known as ${personalName}${birth ? `, born in ${birth}` : ""}. Popes often take a new name upon election to honor a predecessor or signal their pontifical priorities.`,
    });
  } else {
    faqs.push({
      question: "How does this pope relate to the current pope?",
      answer: `Every pope from St. Peter through Pope Leo XIV (267º) holds the same office of Supreme Pontiff. ${pope.name} was pope ${popeOrd(pope.num)} in that unbroken line of apostolic succession.`,
    });
  }

  return faqs.slice(0, 4);
}

function buildPopeInterlinks(popes, articles) {
  const map = {};
  for (const pope of popes) {
    const article = articles.find((a) => a.num === pope.num);
    if (!article) continue;
    const url = `/blog/pope-${article.slug}/`;
    map[pope.name] = url;
    map[`Pope ${pope.name}`] = url;
    const bare = pope.name.replace(/^St\.\s+/, "");
    if (bare !== pope.name) {
      map[bare] = url;
      map[`Pope ${bare}`] = url;
    }
  }
  map["St. Peter"] = map["St. Peter"] || "/blog/pope-st-peter/";
  map["complete list of all 267 popes"] = "/blog/list-of-all-popes-catholic-complete-guide/";
  map["list of all 267 popes"] = "/blog/list-of-all-popes-catholic-complete-guide/";
  map["full list of all popes"] = "/blog/list-of-all-popes-catholic-complete-guide/";
  return map;
}

function estimateReadTime(allText, notes) {
  const words = (allText + " " + notes).split(/\s+/).length;
  if (words >= 550) return "14 min";
  if (words >= 450) return "12 min";
  if (words >= 350) return "10 min";
  if (words >= 250) return "9 min";
  return "8 min";
}

function buildArticle(pope, slug, wikiNotes, prev, next, allPopes) {
  const isSaint = /^St\./.test(pope.name);
  const era = getEra(pope.num);
  const wiki = wikiNotes[pope.num] || { notes: "", birth: "", personalName: "" };
  const { notes } = wiki;
  const used = new Set();

  const title = buildTitle(pope, notes);
  const directAnswer = buildDirectAnswer(pope, wiki, isSaint, era);
  markUsed(used, directAnswer);

  const intro = buildIntro(pope, wiki, isSaint, era, used);
  const earlyLife = buildEarlyLifeFresh(pope, wiki, isSaint, used);
  const historicalContext = buildHistoricalContextFresh(pope, era, notes, used);
  const pontificate = buildPontificate(pope, wiki, era, used);
  const papalActs = buildPapalActsRefined(pope, wiki, era, used);
  const legacy = buildLegacyRefined(pope, wiki, isSaint, era, used);
  const forCatholicsToday = buildForCatholicsToday(pope, wiki, isSaint, era);
  const succession = buildSuccession(pope, prev, next);
  const highlights = buildHighlights(pope, notes, isSaint);
  const faqs = buildFaqs(pope, wiki, isSaint, era, prev, next);
  const relatedPopes = buildRelatedPopes(pope, prev, next, allPopes);
  const readTime = estimateReadTime(
    [directAnswer, intro, earlyLife, historicalContext, pontificate, papalActs, legacy, forCatholicsToday, succession].join(" "),
    notes
  );

  const firstHighlight = highlights.find((h) => !h.startsWith("Pontificate") && !/\d+(st|nd|rd|th) pope/.test(h)) || highlights[0];
  const metaDescription = trimMeta(
    notes
      ? `${pope.name} (${pope.reign}) — ${firstHighlight}. Biography, pontificate, legacy & line of succession.`
      : `Pope ${pope.name} (${ordinal(pope.num)} pope), reigned ${pope.reign}. Biography, pontificate, legacy, and Catholic history in ${era}.`
  );
  const excerpt = trimMeta(
    `${pope.name} — ${pope.reign}. ${splitSentences(notes)[0] || `The ${ordinal(pope.num)} pope of the Catholic Church.`}`,
    160
  );

  return {
    num: pope.num,
    slug,
    title,
    metaDescription,
    excerpt,
    readTime,
    directAnswer,
    intro,
    earlyLife,
    historicalContext,
    pontificate,
    papalActs,
    legacy,
    forCatholicsToday,
    succession,
    highlights,
    faqs,
    relatedPopes,
  };
}

// --- Main ---
const wikiPath = path.join(__dirname, "wikipedia-popes.md");
const wikiNotes = parseWikipediaPopes(wikiPath);
const matched = Object.keys(wikiNotes).length;
console.log(`Parsed Wikipedia notes for ${matched} popes`);

const popesSrc = fs.readFileSync(path.join(root, "src/data/catholicPopes.ts"), "utf8");
const match = popesSrc.match(/export const CATHOLIC_POPES[^=]*=\s*(\[[\s\S]*?\n\]);/);
if (!match) throw new Error("Could not parse CATHOLIC_POPES array");
const popes = JSON.parse(match[1]);

const slugMap = new Map();
const articles = [];
const popesWithSlugs = [];
let withNotes = 0;
for (const pope of popes) {
  let slug = popeToSlug(pope.name);
  if (slugMap.has(slug)) slug = `${slug}-${pope.num}`;
  slugMap.set(slug, pope.num);
  popesWithSlugs.push({ ...pope, slug });
  if (wikiNotes[pope.num]?.notes?.length > 30) withNotes++;
}
for (let i = 0; i < popesWithSlugs.length; i++) {
  const pope = popesWithSlugs[i];
  const prev = i > 0 ? popesWithSlugs[i - 1] : null;
  const next = i < popesWithSlugs.length - 1 ? popesWithSlugs[i + 1] : null;
  articles.push(buildArticle(pope, pope.slug, wikiNotes, prev, next, popesWithSlugs));
}
console.log(`${withNotes}/${popes.length} articles have rich Wikipedia notes`);

const popeInterlinks = buildPopeInterlinks(popesWithSlugs, articles);
fs.writeFileSync(
  path.join(root, "src/data/popeInterlinks.ts"),
  `/** Auto-generated pope name → URL map — run scripts/generate-pope-articles.mjs */
export const POPE_INTERLINK_MAP: Record<string, string> = ${JSON.stringify(popeInterlinks, null, 2)};
`
);
console.log("Generated", Object.keys(popeInterlinks).length, "pope interlink phrases");

fs.writeFileSync(
  path.join(root, "src/data/popeWikiNotes.json"),
  JSON.stringify(wikiNotes, null, 2)
);

fs.writeFileSync(
  path.join(root, "src/data/popeArticles.ts"),
  `/** Auto-generated — run scripts/generate-pope-articles.mjs to regenerate */
import type { PopeArticleContent } from "@/lib/popeSlugs";

export const POPE_ARTICLES: PopeArticleContent[] = ${JSON.stringify(articles, null, 2)};

export const POPE_ARTICLES_BY_SLUG: Record<string, PopeArticleContent> = Object.fromEntries(
  POPE_ARTICLES.map((a) => [a.slug, a])
);

export const POPE_ARTICLES_BY_NUM: Record<number, PopeArticleContent> = Object.fromEntries(
  POPE_ARTICLES.map((a) => [a.num, a])
);
`
);

const extended = popes.map((p) => ({ ...p, slug: articles.find((a) => a.num === p.num).slug }));
fs.writeFileSync(
  path.join(root, "src/data/catholicPopes.ts"),
  `export interface PopeEntry {
  num: number;
  name: string;
  reign: string;
  slug: string;
}

export const CATHOLIC_POPES: PopeEntry[] = ${JSON.stringify(extended, null, 2)};

export const TOTAL_POPES = ${extended.length};

export const POPES_BY_SLUG: Record<string, PopeEntry> = Object.fromEntries(
  CATHOLIC_POPES.map((p) => [p.slug, p])
);
`
);

fs.writeFileSync(
  path.join(root, "scripts/pope-sitemap-urls.txt"),
  articles.map((a) => `  <url><loc>https://guidecatholic.com/blog/pope-${a.slug}/</loc><lastmod>2026-05-30</lastmod><changefreq>yearly</changefreq><priority>0.8</priority></url>`).join("\n")
);

const blogPosts = articles.map((a) => ({
  id: 3000 + a.num,
  slug: `pope-${a.slug}`,
  title: a.title,
  excerpt: a.excerpt,
  date: "2026-05-30",
  readTime: a.readTime,
  category: "Popes",
  icon: "Crown",
  bgColor: "bg-amber-50",
  iconColor: "text-amber-700",
}));

fs.writeFileSync(
  path.join(root, "src/data/popeBlogPosts.ts"),
  `/** Auto-generated pope blog cards — run scripts/generate-pope-articles.mjs */
import { Crown, type LucideIcon } from "lucide-react";

export interface PopeBlogPostEntry {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export const POPE_BLOG_POSTS: PopeBlogPostEntry[] = ${JSON.stringify(blogPosts, null, 2).replace(/"icon": "Crown"/g, '"icon": Crown as LucideIcon')};
`
);

console.log("Generated", articles.length, "rich pope articles");
