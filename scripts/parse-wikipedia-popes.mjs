/**
 * Parse pt.wikipedia Lista de papas markdown export → popeWikiTable.json
 * Source: https://pt.wikipedia.org/wiki/Lista_de_papas
 */
import fs from "fs";
import path from "path";

const mdPath =
  process.argv[2] ||
  path.join(process.cwd(), "scripts/wikipedia-lista-de-papas.md");
const outPath = path.join(process.cwd(), "src/data/popeWikiTable.json");

const md = fs.readFileSync(mdPath, "utf8");

function splitRow(line) {
  const inner = line.replace(/^\|/, "").replace(/\|$/, "");
  const cells = [];
  let cur = "";
  let depth = 0;
  for (const ch of inner) {
    if (ch === "[") depth++;
    else if (ch === "]") depth--;
    else if (ch === "|" && depth === 0) {
      cells.push(cur.trim());
      cur = "";
      continue;
    }
    cur += ch;
  }
  cells.push(cur.trim());
  return cells;
}

function stripMd(s) {
  return s
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+"[^"]*"/g, "")
    .replace(/"/g, "")
    .replace(/[_`]/g, "")
    .replace(/\[\]\([^)]+\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractName(raw) {
  const link = raw.match(/\[([^\]]+)\]\(/);
  if (link) return link[1].trim();
  const bold = raw.match(/\*\*([^*]+)\*\*/);
  if (bold) return bold[1].trim();
  return stripMd(raw);
}

function imageUrl(cell) {
  const m = cell.match(/Ficheiro:([^)\]]+)/i) || cell.match(/File:([^)\]]+)/i);
  if (!m) return "";
  const file = decodeURIComponent(m[1].trim());
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=80`;
}

const MONTHS = {
  janeiro: "January",
  fevereiro: "February",
  março: "March",
  abril: "April",
  maio: "May",
  junho: "June",
  julho: "July",
  agosto: "August",
  setembro: "September",
  outubro: "October",
  novembro: "November",
  dezembro: "December",
};

const PLACE_MAP = {
  "Império Romano": "Roman Empire",
  Galileia: "Galilee",
  "Estados Unidos": "United States",
  França: "France",
  Itália: "Italy",
  Alemanha: "Germany",
  Espanha: "Spain",
  Inglaterra: "England",
  Polônia: "Poland",
  Roma: "Rome",
  Atenas: "Athens",
  Betsaida: "Bethsaida",
  Belém: "Bethlehem",
  Judeia: "Judea",
  Acaia: "Achaea",
  Tuscia: "Tuscia",
};

function translateMonths(s) {
  let t = s;
  for (const [pt, en] of Object.entries(MONTHS)) {
    t = t.replace(new RegExp(`\\b${pt}\\b`, "gi"), en);
  }
  return t;
}

function translatePontificate(s) {
  let t = translateMonths(s);
  t = t.replace(/\batualidade\b/gi, "present");
  t = t.replace(/\bde\s+/gi, " ");
  t = t.replace(/\s+a\s+/g, " – ");
  t = t.replace(/\s+/g, " ").trim();
  return t;
}

function translateDuration(s) {
  let t = translateMonths(s);
  t = t.replace(/\banos?\b/gi, (m) => (m.toLowerCase() === "ano" ? "year" : "years"));
  t = t.replace(/\bdias?\b/gi, (m) => (m.toLowerCase() === "dia" ? "day" : "days"));
  return t.replace(/\s+/g, " ").trim();
}

function translatePlace(s) {
  let t = stripMd(s).replace(/\s*\([^)]*\)/g, "").replace(/\),/g, ",");
  const entries = Object.entries(PLACE_MAP).sort((a, b) => b[0].length - a[0].length);
  for (const [pt, en] of entries) {
    const escaped = pt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = pt.length <= 5 ? new RegExp(`\\b${escaped}\\b`, "g") : new RegExp(escaped, "g");
    t = t.replace(re, en);
  }
  return t.replace(/\s*,\s*/g, ", ").replace(/\s+/g, " ").trim();
}

const lines = md.split("\n").filter((l) => /^\| [0-9]+ /.test(l));
const popes = lines.map((line) => {
  const c = splitRow(line);
  const num = parseInt(c[0], 10);
  const personalName = (c[1].match(/_\s*([^_]+)\s*_/) || [])[1]?.trim() || "";
  return {
    num,
    namePt: extractName(c[1]),
    personalName,
    image: imageUrl(c[2] || ""),
    pontificate: translatePontificate(stripMd(c[3] || "")),
    birthPlace: translatePlace(c[4] || ""),
    duration: translateDuration(stripMd(c[5] || "")),
  };
});

fs.writeFileSync(
  outPath,
  JSON.stringify(
    {
      source: "https://pt.wikipedia.org/wiki/Lista_de_papas",
      updated: new Date().toISOString().slice(0, 10),
      count: popes.length,
      popes,
    },
    null,
    2
  )
);

console.log(`Wrote ${popes.length} popes → ${outPath}`);
