# Pope profile brief

guidecatholic.com has one page per pope (`/blog/pope-<slug>/`). Today those pages are built from a thin
Wikipedia table plus filler sentences repeated on every page ("he entered a world shaped by politics and
piety…"). Google treats this as scaled, low-value content. We are replacing the filler with a real profile
for each pope. Readers are U.S. Catholics; write in clear American English, reverent but factual.

## Output

Write `scripts/pope-profiles/out/batch-<N>.json`: a JSON array, one object per pope in your input file,
in the same order:

```json
{
  "slug": "benedict-ix-150",
  "directAnswer": "2–3 sentences answering 'Who was Pope X?' with the most important verifiable facts.",
  "sections": [
    { "h2": "Heading specific to this pope", "paras": ["paragraph", "paragraph"] }
  ],
  "keyFacts": ["4–6 short factual bullets (dates, places, councils, writings, canonization)"],
  "faqs": [{ "question": "…", "answer": "…" }]
}
```

- **Notable popes** (saints and Doctors, popes who called councils, wrote major documents, or shaped
  history; every pope from about 1800 onward): 3–5 sections, roughly 500–850 words in total, 3 FAQs.
- **Obscure popes** (little reliable information survives, e.g. many 3rd–10th century pontiffs):
  2–3 sections, roughly 220–400 words in total, 2–3 FAQs. Say plainly what the sources (e.g. the
  Liber Pontificalis) record and that little else is known. Short and honest is correct here.
- Headings must be specific to the pope (e.g. "The Gregorian Reform and Canossa", "Rerum Novarum"),
  never generic ("Early Life & Background", "Legacy in the Catholic Church", "Historical Context").
- FAQs must be about this pope specifically. Do not use "When was X pope?" / "What number pope was X?"
  (the page already shows that).

## Accuracy (critical — this is religious/historical content)

- Only state facts you are confident are true. When the tradition is uncertain (dates of early popes,
  martyrdom accounts, legends), say so: "according to the Liber Pontificalis", "tradition holds".
- Reign dates and numbering: use the dates in your input `reign` field; do not contradict them.
- Treat `sourceNotes` as a hint, not gospel: it is scraped table text and can be garbled
  (e.g. "Subject and later the sovereign of the Papal States" is a column label, ignore it).
- Quote documents only when you are certain of the exact wording; otherwise paraphrase.
- No invented anecdotes, quotes, testimonies, or statistics. No sensationalism about scandalous popes:
  report facts soberly (e.g. Benedict IX, Alexander VI).
- Antipopes are not in this list; if a reign overlapped an antipope, you may mention it factually.
- Saints/blesseds: give canonization/beatification facts only if certain.

## Uniqueness

- Every paragraph must be unique to its pope: no shared sentences across popes, no boilerplate openers
  or closers repeated between entries. Vary structure naturally.
- Do not copy text from `src/data/popeArticles.ts`.

## Validate before finishing

Run: `node -e "const a=require('./scripts/pope-profiles/out/batch-<N>.json');const i=require('./scripts/pope-profiles/input/batch-<N>.json');if(a.length!==i.length)throw 'count';a.forEach((p,k)=>{if(p.slug!==i[k].slug||!p.directAnswer||!p.sections?.length||!p.keyFacts?.length||!p.faqs?.length)throw 'shape '+p.slug});console.log('ok',a.length)"`
and a check that no sentence (≥ 50 chars) appears in two entries.

Do not edit any other file.

Report: count written, how many you treated as notable vs obscure, and any facts you softened or omitted.
