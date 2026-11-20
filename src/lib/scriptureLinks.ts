/**
 * Finds Bible references in plain text ("Tobit 8:4–8", "1 John 5:16–17", "Psalm 91")
 * and maps each to its chapter page on Catholic Bible Online.
 *
 * Catholic Bible Online serves one page per chapter (/bible/{book}/{chapter}/);
 * verse-level URLs return 404, so links always point at the chapter.
 */

const CBO_BIBLE = "https://catholicbibleonline.com/bible/";

/** Book name as written in articles → [CBO slug, number of chapters]. */
const BOOKS: Record<string, [string, number]> = {
  Genesis: ["genesis", 50],
  Exodus: ["exodus", 40],
  Leviticus: ["leviticus", 27],
  Numbers: ["numbers", 36],
  Deuteronomy: ["deuteronomy", 34],
  Joshua: ["joshua", 24],
  Judges: ["judges", 21],
  Ruth: ["ruth", 4],
  "1 Samuel": ["1-samuel", 31],
  "2 Samuel": ["2-samuel", 24],
  "1 Kings": ["1-kings", 22],
  "2 Kings": ["2-kings", 25],
  "1 Chronicles": ["1-chronicles", 29],
  "2 Chronicles": ["2-chronicles", 36],
  Ezra: ["ezra", 10],
  Nehemiah: ["nehemiah", 13],
  Tobit: ["tobit", 14],
  Judith: ["judith", 16],
  Esther: ["esther", 10],
  "1 Maccabees": ["1-maccabees", 16],
  "2 Maccabees": ["2-maccabees", 15],
  Job: ["job", 42],
  Psalm: ["psalms", 150],
  Psalms: ["psalms", 150],
  Proverbs: ["proverbs", 31],
  Ecclesiastes: ["ecclesiastes", 12],
  "Song of Songs": ["song-of-solomon", 8],
  "Song of Solomon": ["song-of-solomon", 8],
  Wisdom: ["wisdom", 19],
  Sirach: ["sirach", 51],
  Isaiah: ["isaiah", 66],
  Jeremiah: ["jeremiah", 52],
  Lamentations: ["lamentations", 5],
  Baruch: ["baruch", 6],
  Ezekiel: ["ezekiel", 48],
  Daniel: ["daniel", 14],
  Hosea: ["hosea", 14],
  Joel: ["joel", 4],
  Amos: ["amos", 9],
  Obadiah: ["obadiah", 1],
  Jonah: ["jonah", 4],
  Micah: ["micah", 7],
  Nahum: ["nahum", 3],
  Habakkuk: ["habakkuk", 3],
  Zephaniah: ["zephaniah", 3],
  Haggai: ["haggai", 2],
  Zechariah: ["zechariah", 14],
  Malachi: ["malachi", 3],
  Matthew: ["matthew", 28],
  Mark: ["mark", 16],
  Luke: ["luke", 24],
  John: ["john", 21],
  Acts: ["acts", 28],
  Romans: ["romans", 16],
  "1 Corinthians": ["1-corinthians", 16],
  "2 Corinthians": ["2-corinthians", 13],
  Galatians: ["galatians", 6],
  Ephesians: ["ephesians", 6],
  Philippians: ["philippians", 4],
  Colossians: ["colossians", 4],
  "1 Thessalonians": ["1-thessalonians", 5],
  "2 Thessalonians": ["2-thessalonians", 3],
  "1 Timothy": ["1-timothy", 6],
  "2 Timothy": ["2-timothy", 4],
  Titus: ["titus", 3],
  Philemon: ["philemon", 1],
  Hebrews: ["hebrews", 13],
  James: ["james", 5],
  "1 Peter": ["1-peter", 5],
  "2 Peter": ["2-peter", 3],
  "1 John": ["1-john", 5],
  "2 John": ["2-john", 1],
  "3 John": ["3-john", 1],
  Jude: ["jude", 1],
  Revelation: ["revelation", 22],
};

// Longest names first so "1 John" wins over "John" and "Song of Songs" over "Songs".
const NAMES = Object.keys(BOOKS).sort((a, b) => b.length - a.length);
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * A reference is a book name + chapter + ":" + verse(s). Psalms may omit the verse
 * ("Psalm 91"). Requiring the verse elsewhere keeps people named John, Mark or James
 * from being linked as books.
 */
const REF = new RegExp(
  `(?<![\\p{L}\\p{N}])(${NAMES.map(escape).join("|")}) (\\d{1,3})(?::(\\d{1,3}(?:[a-z])?(?:\\s?[–-]\\s?\\d{1,3}(?::\\d{1,3})?)?(?:,\\s?\\d{1,3}(?:[–-]\\d{1,3})?)*))?(?![\\p{L}\\p{N}])`,
  "gu",
);

export type ScriptureSegment = { text: string; href?: string };

/** Splits text into plain segments and segments linked to their Catholic Bible Online chapter. */
export function splitScriptureRefs(text: string, maxLinks = 4): ScriptureSegment[] {
  const out: ScriptureSegment[] = [];
  const usedChapters = new Set<string>();
  let last = 0;
  let links = 0;

  for (const m of text.matchAll(REF)) {
    const [whole, name, chapterStr, verses] = m;
    const [slug, chapters] = BOOKS[name];
    const chapter = Number(chapterStr);
    const isPsalm = slug === "psalms";
    if (!verses && !isPsalm) continue;
    if (chapter < 1 || chapter > chapters) continue;

    const href = `${CBO_BIBLE}${slug}/${chapter}/`;
    if (usedChapters.has(href) || links >= maxLinks) continue;

    const start = m.index ?? 0;
    if (start > last) out.push({ text: text.slice(last, start) });
    out.push({ text: whole, href });
    last = start + whole.length;
    usedChapters.add(href);
    links++;
  }

  if (last < text.length) out.push({ text: text.slice(last) });
  return out.length ? out : [{ text }];
}
