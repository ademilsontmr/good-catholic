/**
 * Data for the /rosary/ hub: the traditional prayers, the 20 mysteries, the weekday
 * schedule and the bead-by-bead sequence used by the guided Rosary.
 */

export type MysterySetId = "joyful" | "luminous" | "sorrowful" | "glorious";

export interface RosaryPrayer {
  id: string;
  name: string;
  /** Lines of the prayer; rendered one paragraph each. */
  text: string[];
  /** Guide Catholic page with the history and meaning of this prayer. */
  href?: string;
}

export interface Mystery {
  number: number;
  name: string;
  scripture: { label: string; book: string; chapter: number };
  fruit: string;
  meditation: string;
}

export interface MysterySet {
  id: MysterySetId;
  name: string;
  days: string;
  summary: string;
  mysteries: Mystery[];
}

const CBO_BIBLE = "https://catholicbibleonline.com/bible/";
export const cboChapter = (book: string, chapter: number) => `${CBO_BIBLE}${book}/${chapter}/`;

export const PRAYERS: Record<string, RosaryPrayer> = {
  signOfCross: {
    id: "sign-of-the-cross",
    name: "Sign of the Cross",
    text: ["In the name of the Father, and of the Son, and of the Holy Spirit. Amen."],
    href: "/blog/sign-of-the-cross-catholic/",
  },
  creed: {
    id: "apostles-creed",
    name: "Apostles' Creed",
    text: [
      "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead.",
      "I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
    ],
    href: "/blog/apostles-creed-prayer/",
  },
  ourFather: {
    id: "our-father",
    name: "Our Father",
    text: [
      "Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven.",
      "Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    ],
    href: "/blog/our-father-prayer/",
  },
  hailMary: {
    id: "hail-mary",
    name: "Hail Mary",
    text: [
      "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus.",
      "Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
    ],
    href: "/blog/hail-mary-prayer/",
  },
  gloryBe: {
    id: "glory-be",
    name: "Glory Be",
    text: [
      "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
    ],
    href: "/blog/glory-be-prayer/",
  },
  fatima: {
    id: "fatima-prayer",
    name: "Fatima Prayer (O My Jesus)",
    text: [
      "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of thy mercy.",
    ],
    href: "/blog/fatima-prayer-o-my-jesus/",
  },
  hailHolyQueen: {
    id: "hail-holy-queen",
    name: "Hail, Holy Queen",
    text: [
      "Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears.",
      "Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.",
      "V. Pray for us, O holy Mother of God. R. That we may be made worthy of the promises of Christ.",
    ],
    href: "/blog/hail-holy-queen-prayer/",
  },
  closing: {
    id: "closing-prayer",
    name: "Closing Prayer",
    text: [
      "Let us pray. O God, whose only begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.",
    ],
  },
};

export const MYSTERY_SETS: MysterySet[] = [
  {
    id: "joyful",
    name: "Joyful Mysteries",
    days: "Monday and Saturday",
    summary: "The Incarnation and the hidden years of Jesus, seen through Mary's eyes.",
    mysteries: [
      {
        number: 1,
        name: "The Annunciation",
        scripture: { label: "Luke 1:26–38", book: "luke", chapter: 1 },
        fruit: "Humility",
        meditation: "The angel Gabriel greets Mary, and she answers with her whole life: let it be done to me according to your word.",
      },
      {
        number: 2,
        name: "The Visitation",
        scripture: { label: "Luke 1:39–56", book: "luke", chapter: 1 },
        fruit: "Love of neighbor",
        meditation: "Mary hurries to help Elizabeth. John leaps in the womb, and Mary sings the Magnificat.",
      },
      {
        number: 3,
        name: "The Nativity",
        scripture: { label: "Luke 2:1–20", book: "luke", chapter: 2 },
        fruit: "Poverty of spirit",
        meditation: "The Son of God is born in Bethlehem and laid in a manger. Shepherds come first to adore him.",
      },
      {
        number: 4,
        name: "The Presentation in the Temple",
        scripture: { label: "Luke 2:22–38", book: "luke", chapter: 2 },
        fruit: "Obedience",
        meditation: "Mary and Joseph keep the Law and offer Jesus to the Father. Simeon foretells a sword that will pierce Mary's heart.",
      },
      {
        number: 5,
        name: "The Finding of Jesus in the Temple",
        scripture: { label: "Luke 2:41–52", book: "luke", chapter: 2 },
        fruit: "Joy in finding Jesus",
        meditation: "After three days of searching, Mary and Joseph find the boy Jesus in his Father's house.",
      },
    ],
  },
  {
    id: "luminous",
    name: "Luminous Mysteries",
    days: "Thursday",
    summary: "The public ministry of Jesus, added by Saint John Paul II in 2002.",
    mysteries: [
      {
        number: 1,
        name: "The Baptism of the Lord",
        scripture: { label: "Matthew 3:13–17", book: "matthew", chapter: 3 },
        fruit: "Openness to the Holy Spirit",
        meditation: "Jesus goes down into the Jordan. The heavens open, the Spirit descends, and the Father calls him his beloved Son.",
      },
      {
        number: 2,
        name: "The Wedding at Cana",
        scripture: { label: "John 2:1–11", book: "john", chapter: 2 },
        fruit: "To Jesus through Mary",
        meditation: "Mary tells the servants, do whatever he tells you. Jesus turns water into wine, his first sign.",
      },
      {
        number: 3,
        name: "The Proclamation of the Kingdom",
        scripture: { label: "Mark 1:14–15", book: "mark", chapter: 1 },
        fruit: "Repentance and trust in God",
        meditation: "The kingdom of God is at hand: repent and believe in the Gospel. Jesus forgives sins and calls sinners home.",
      },
      {
        number: 4,
        name: "The Transfiguration",
        scripture: { label: "Matthew 17:1–8", book: "matthew", chapter: 17 },
        fruit: "Desire for holiness",
        meditation: "On the mountain the face of Jesus shines like the sun, and the Father says: listen to him.",
      },
      {
        number: 5,
        name: "The Institution of the Eucharist",
        scripture: { label: "Luke 22:14–20", book: "luke", chapter: 22 },
        fruit: "Love of the Eucharist",
        meditation: "At the Last Supper Jesus gives his Body and Blood under the signs of bread and wine: do this in memory of me.",
      },
    ],
  },
  {
    id: "sorrowful",
    name: "Sorrowful Mysteries",
    days: "Tuesday and Friday",
    summary: "The Passion and death of Jesus, from Gethsemane to Calvary.",
    mysteries: [
      {
        number: 1,
        name: "The Agony in the Garden",
        scripture: { label: "Matthew 26:36–46", book: "matthew", chapter: 26 },
        fruit: "Conformity to God's will",
        meditation: "In Gethsemane Jesus prays in anguish: not my will, but yours be done.",
      },
      {
        number: 2,
        name: "The Scourging at the Pillar",
        scripture: { label: "John 19:1", book: "john", chapter: 19 },
        fruit: "Purity and mortification",
        meditation: "Pilate has Jesus scourged. By his wounds we are healed.",
      },
      {
        number: 3,
        name: "The Crowning with Thorns",
        scripture: { label: "Matthew 27:27–31", book: "matthew", chapter: 27 },
        fruit: "Moral courage",
        meditation: "The soldiers mock the true King with a crown of thorns, a reed and a purple cloak.",
      },
      {
        number: 4,
        name: "The Carrying of the Cross",
        scripture: { label: "Luke 23:26–32", book: "luke", chapter: 23 },
        fruit: "Patience",
        meditation: "Jesus carries his Cross to Calvary, and Simon of Cyrene is made to help him.",
      },
      {
        number: 5,
        name: "The Crucifixion and Death of Jesus",
        scripture: { label: "Luke 23:33–46", book: "luke", chapter: 23 },
        fruit: "Perseverance",
        meditation: "Jesus forgives his executioners, promises paradise to the thief, and commends his spirit to the Father.",
      },
    ],
  },
  {
    id: "glorious",
    name: "Glorious Mysteries",
    days: "Wednesday and Sunday",
    summary: "The victory of Christ and the glory he shares with his Mother and his Church.",
    mysteries: [
      {
        number: 1,
        name: "The Resurrection",
        scripture: { label: "Matthew 28:1–10", book: "matthew", chapter: 28 },
        fruit: "Faith",
        meditation: "On the third day the tomb is empty. He is not here; he has risen, as he said.",
      },
      {
        number: 2,
        name: "The Ascension",
        scripture: { label: "Acts 1:6–11", book: "acts", chapter: 1 },
        fruit: "Hope and desire for heaven",
        meditation: "Forty days after Easter Jesus is taken up to heaven and promises the Holy Spirit.",
      },
      {
        number: 3,
        name: "The Descent of the Holy Spirit",
        scripture: { label: "Acts 2:1–13", book: "acts", chapter: 2 },
        fruit: "Love of God and zeal",
        meditation: "At Pentecost the Spirit comes upon Mary and the apostles in tongues of fire, and the Church goes out to preach.",
      },
      {
        number: 4,
        name: "The Assumption of Mary",
        scripture: { label: "Revelation 12:1", book: "revelation", chapter: 12 },
        fruit: "The grace of a holy death",
        meditation: "At the end of her earthly life Mary is taken body and soul into heaven, as Pius XII defined in 1950.",
      },
      {
        number: 5,
        name: "The Coronation of Mary",
        scripture: { label: "Revelation 12:1–6", book: "revelation", chapter: 12 },
        fruit: "Trust in Mary's intercession",
        meditation: "Mary is crowned Queen of heaven and earth, a woman clothed with the sun, and she intercedes for her children.",
      },
    ],
  },
];

/** Sunday = 0 … Saturday = 6, the weekday schedule proposed by St. John Paul II (Rosarium Virginis Mariae 38). */
export const WEEKDAY_SETS: MysterySetId[] = ["glorious", "joyful", "sorrowful", "glorious", "luminous", "sorrowful", "joyful"];
export const WEEKDAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const setById = (id: MysterySetId) => MYSTERY_SETS.find((s) => s.id === id)!;

/** Bead positions on the drawn rosary (see RosaryBeads). */
export type BeadRef =
  | { kind: "crucifix" }
  | { kind: "pendant"; index: number } // 0 = first large bead, 1–3 = small beads, 4 = large bead before the medal
  | { kind: "medal" }
  | { kind: "loop"; index: number }; // 0–53 around the circle: 10 small beads per decade, a large bead between decades

export interface RosaryStep {
  prayer: RosaryPrayer;
  bead: BeadRef;
  /** Short line above the prayer, e.g. "Decade 2 · Hail Mary 4 of 10". */
  label: string;
  /** Decade 1–5 when the step belongs to a decade; announces the mystery on its Our Father. */
  decade?: number;
  announce?: boolean;
  /** Intention said with the three opening Hail Marys. */
  intention?: string;
}

/** Loop index of Hail Mary `n` (1–10) in decade `d` (1–5); decades are separated by a large bead. */
const loopHailMary = (d: number, n: number) => (d - 1) * 11 + (n - 1);
/** Large bead before decade `d` (2–5) on the loop. */
const loopLarge = (d: number) => (d - 1) * 11 - 1;

export function buildRosarySteps(): RosaryStep[] {
  const steps: RosaryStep[] = [
    { prayer: PRAYERS.signOfCross, bead: { kind: "crucifix" }, label: "On the crucifix" },
    { prayer: PRAYERS.creed, bead: { kind: "crucifix" }, label: "On the crucifix" },
    { prayer: PRAYERS.ourFather, bead: { kind: "pendant", index: 0 }, label: "First large bead" },
    ...(["faith", "hope", "charity"] as const).map((virtue, i) => ({
      prayer: PRAYERS.hailMary,
      bead: { kind: "pendant", index: i + 1 } as BeadRef,
      label: `Hail Mary ${i + 1} of 3`,
      intention: `For an increase of ${virtue}`,
    })),
    { prayer: PRAYERS.gloryBe, bead: { kind: "pendant", index: 4 }, label: "Before the first mystery" },
  ];

  for (let d = 1; d <= 5; d++) {
    const ourFatherBead: BeadRef = d === 1 ? { kind: "pendant", index: 4 } : { kind: "loop", index: loopLarge(d) };
    steps.push({ prayer: PRAYERS.ourFather, bead: ourFatherBead, label: `Decade ${d} · Announce the mystery`, decade: d, announce: true });
    for (let n = 1; n <= 10; n++) {
      steps.push({ prayer: PRAYERS.hailMary, bead: { kind: "loop", index: loopHailMary(d, n) }, label: `Decade ${d} · Hail Mary ${n} of 10`, decade: d });
    }
    const after: BeadRef = d < 5 ? { kind: "loop", index: loopLarge(d + 1) } : { kind: "medal" };
    steps.push({ prayer: PRAYERS.gloryBe, bead: after, label: `Decade ${d} · Closing`, decade: d });
    steps.push({ prayer: PRAYERS.fatima, bead: after, label: `Decade ${d} · Closing`, decade: d });
  }

  steps.push(
    { prayer: PRAYERS.hailHolyQueen, bead: { kind: "medal" }, label: "On the medal" },
    { prayer: PRAYERS.closing, bead: { kind: "medal" }, label: "On the medal" },
    { prayer: PRAYERS.signOfCross, bead: { kind: "crucifix" }, label: "To finish" },
  );
  return steps;
}

export const ROSARY_FAQS = [
  {
    q: "Which mysteries of the Rosary are prayed today?",
    a: "By the weekly schedule St. John Paul II proposed in 2002: Joyful on Monday and Saturday, Sorrowful on Tuesday and Friday, Glorious on Wednesday and Sunday, and Luminous on Thursday. Many Catholics pray the Joyful Mysteries on the Sundays of Advent and Christmas and the Sorrowful Mysteries on the Sundays of Lent.",
  },
  {
    q: "How long does it take to pray the Rosary?",
    a: "Five decades prayed at a calm pace take about 15 to 20 minutes. A single decade takes 3 or 4 minutes, and the five decades may be spread across the day.",
  },
  {
    q: "Do I need rosary beads to pray the Rosary?",
    a: "No. Beads help you keep count without thinking about numbers, but you can count on your fingers or follow the guided Rosary on this page. What matters is the prayer and the meditation on each mystery.",
  },
  {
    q: "What is a decade of the Rosary?",
    a: "One Our Father, ten Hail Marys and one Glory Be, prayed while meditating on one mystery. A full Rosary of one set has five decades; praying all four sets makes twenty.",
  },
  {
    q: "Is the Fatima Prayer part of the Rosary?",
    a: "It is an optional prayer added after each Glory Be. Our Lady asked for it at Fatima in 1917, and most Catholics now say it, but the Rosary is complete without it.",
  },
  {
    q: "Can I gain an indulgence by praying the Rosary?",
    a: "Yes. The Church grants a plenary indulgence, under the usual conditions, to those who pray five decades of the Marian Rosary devoutly in a church or oratory, or together as a family, religious community or pious association. Praying it in other circumstances gains a partial indulgence.",
  },
  {
    q: "Is the Rosary in the Bible?",
    a: "The Rosary itself developed in the Middle Ages, but its prayers and mysteries come from Scripture: the Our Father from Matthew 6, the first half of the Hail Mary from Luke 1, and almost every mystery from the Gospels and Acts. St. John Paul II called it a compendium of the Gospel.",
  },
];
