/** Data for the Catholic lockscreen maker (/lockscreen/). */

export interface LockscreenText {
  text: string;
  /** Scripture reference or source line shown under the text. */
  ref: string;
  /** Short label printed in the pill above the text. */
  tag: string;
  /** Library section the text is listed under on the page. */
  group: string;
}

export const VERSE_GROUPS = ["Strength & Courage", "Peace & Trust", "Love", "Faith & Hope", "Prayer & Joy", "Mercy & Holiness"] as const;

export const VERSES: LockscreenText[] = [
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13", tag: "Strength", group: "Strength & Courage" },
  { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1", tag: "Trust", group: "Peace & Trust" },
  { text: "Be still and know that I am God.", ref: "Psalm 46:10", tag: "Peace", group: "Peace & Trust" },
  { text: "For God so loved the world that he gave his only Son.", ref: "John 3:16", tag: "Love", group: "Love" },
  { text: "Trust in the Lord with all your heart.", ref: "Proverbs 3:5", tag: "Faith", group: "Faith & Hope" },
  { text: "Come to me, all you who are weary, and I will give you rest.", ref: "Matthew 11:28", tag: "Rest", group: "Peace & Trust" },
  { text: "For I know the plans I have for you, declares the Lord.", ref: "Jeremiah 29:11", tag: "Hope", group: "Faith & Hope" },
  { text: "My grace is sufficient for you, for my power is made perfect in weakness.", ref: "2 Corinthians 12:9", tag: "Grace", group: "Mercy & Holiness" },
  { text: "The Lord is my light and my salvation — whom shall I fear?", ref: "Psalm 27:1", tag: "Courage", group: "Strength & Courage" },
  { text: "Nothing will be able to separate us from the love of God.", ref: "Romans 8:39", tag: "Love", group: "Love" },
  { text: "I am the way, the truth, and the life.", ref: "John 14:6", tag: "Faith", group: "Faith & Hope" },
  { text: "Pray without ceasing.", ref: "1 Thessalonians 5:17", tag: "Prayer", group: "Prayer & Joy" },
  { text: "The peace of God, which transcends all understanding, will guard your hearts.", ref: "Philippians 4:7", tag: "Peace", group: "Peace & Trust" },
  { text: "You are the light of the world.", ref: "Matthew 5:14", tag: "Mission", group: "Mercy & Holiness" },
  { text: "Behold, I am the handmaid of the Lord; let it be to me according to your word.", ref: "Luke 1:38", tag: "Surrender", group: "Peace & Trust" },
  { text: "Do not be afraid, for I am with you.", ref: "Isaiah 41:10", tag: "Courage", group: "Strength & Courage" },
  { text: "Whoever believes in me will never thirst.", ref: "John 6:35", tag: "Eucharist", group: "Prayer & Joy" },
  { text: "Create in me a clean heart, O God.", ref: "Psalm 51:10", tag: "Conversion", group: "Mercy & Holiness" },
  { text: "Rejoice in the Lord always. I will say it again: Rejoice!", ref: "Philippians 4:4", tag: "Joy", group: "Prayer & Joy" },
  { text: "I am the resurrection and the life.", ref: "John 11:25", tag: "Hope", group: "Faith & Hope" },
  { text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.", ref: "Numbers 6:24-25", tag: "Blessing", group: "Prayer & Joy" },
  { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged.", ref: "Joshua 1:9", tag: "Courage", group: "Strength & Courage" },
  { text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.", ref: "Psalm 34:8", tag: "Trust", group: "Peace & Trust" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4", tag: "Joy", group: "Prayer & Joy" },
  { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1", tag: "Refuge", group: "Strength & Courage" },
  { text: "As the deer pants for streams of water, so my soul pants for you, my God.", ref: "Psalm 42:1", tag: "Longing", group: "Faith & Hope" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18", tag: "Comfort", group: "Peace & Trust" },
  { text: "Your word is a lamp to my feet and a light to my path.", ref: "Psalm 119:105", tag: "Guidance", group: "Mercy & Holiness" },
  { text: "I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord.", ref: "Psalm 121:1-2", tag: "Help", group: "Strength & Courage" },
  { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.", ref: "Psalm 23:4", tag: "Protection", group: "Strength & Courage" },
  { text: "Seek first the kingdom of God and his righteousness, and all these things will be added to you.", ref: "Matthew 6:33", tag: "Priority", group: "Mercy & Holiness" },
  { text: "Blessed are the pure in heart, for they shall see God.", ref: "Matthew 5:8", tag: "Purity", group: "Mercy & Holiness" },
  { text: "Blessed are the peacemakers, for they will be called children of God.", ref: "Matthew 5:9", tag: "Peace", group: "Peace & Trust" },
  { text: "With God all things are possible.", ref: "Matthew 19:26", tag: "Faith", group: "Faith & Hope" },
  { text: "I am the vine; you are the branches. Whoever abides in me bears much fruit.", ref: "John 15:5", tag: "Union", group: "Love" },
  { text: "Greater love has no one than this: to lay down one's life for one's friends.", ref: "John 15:13", tag: "Love", group: "Love" },
  { text: "Do not let your hearts be troubled. You believe in God; believe also in me.", ref: "John 14:1", tag: "Peace", group: "Peace & Trust" },
  { text: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness.", ref: "Galatians 5:22", tag: "Holiness", group: "Mercy & Holiness" },
  { text: "I have been crucified with Christ and I no longer live, but Christ lives in me.", ref: "Galatians 2:20", tag: "Union", group: "Love" },
  { text: "Do not be overcome by evil, but overcome evil with good.", ref: "Romans 12:21", tag: "Virtue", group: "Mercy & Holiness" },
  { text: "For I am convinced that neither death nor life can separate us from the love of God.", ref: "Romans 8:38-39", tag: "Love", group: "Love" },
  { text: "We know that in all things God works for the good of those who love him.", ref: "Romans 8:28", tag: "Hope", group: "Faith & Hope" },
  { text: "Let all that you do be done in love.", ref: "1 Corinthians 16:14", tag: "Love", group: "Love" },
  { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", ref: "1 Corinthians 13:4", tag: "Love", group: "Love" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7", tag: "Trust", group: "Peace & Trust" },
  { text: "Be still before the Lord and wait patiently for him.", ref: "Psalm 37:7", tag: "Patience", group: "Peace & Trust" },
  { text: "The Lord is my strength and my song; he has given me victory.", ref: "Exodus 15:2", tag: "Victory", group: "Strength & Courage" },
  { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3", tag: "Healing", group: "Peace & Trust" },
  { text: "Come to me with your ears wide open. Listen, and you will find life.", ref: "Isaiah 55:3", tag: "Surrender", group: "Peace & Trust" },
  { text: "Those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31", tag: "Strength", group: "Strength & Courage" },
  { text: "The Lord your God is with you, the Mighty Warrior who saves. He will rejoice over you with singing.", ref: "Zephaniah 3:17", tag: "Joy", group: "Prayer & Joy" },
  { text: "You will seek me and find me when you seek me with all your heart.", ref: "Jeremiah 29:13", tag: "Longing", group: "Faith & Hope" },
  { text: "Return to me with all your heart, with fasting and weeping and mourning.", ref: "Joel 2:12", tag: "Conversion", group: "Mercy & Holiness" },
  { text: "The steadfast love of the Lord never ceases; his mercies never come to an end.", ref: "Lamentations 3:22-23", tag: "Mercy", group: "Mercy & Holiness" },
  { text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God.", ref: "Micah 6:8", tag: "Virtue", group: "Mercy & Holiness" },
  { text: "Not by might, nor by power, but by my Spirit, says the Lord of hosts.", ref: "Zechariah 4:6", tag: "Grace", group: "Mercy & Holiness" },
  { text: "The Lord is good to those who wait for him, to the soul who seeks him.", ref: "Lamentations 3:25", tag: "Patience", group: "Peace & Trust" },
  { text: "Blessed is the man who trusts in the Lord, whose trust is the Lord.", ref: "Jeremiah 17:7", tag: "Trust", group: "Peace & Trust" },
  { text: "I will give you a new heart and put a new spirit in you.", ref: "Ezekiel 36:26", tag: "Conversion", group: "Mercy & Holiness" },
  { text: "The Lord is my portion, therefore I will hope in him.", ref: "Lamentations 3:24", tag: "Hope", group: "Faith & Hope" },
  { text: "Whoever humbles himself like a child is the greatest in the kingdom of heaven.", ref: "Matthew 18:4", tag: "Humility", group: "Mercy & Holiness" },
  { text: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.", ref: "Matthew 7:7", tag: "Prayer", group: "Prayer & Joy" },
  { text: "You shall love the Lord your God with all your heart and with all your soul and with all your mind.", ref: "Matthew 22:37", tag: "Love", group: "Love" },
  { text: "Blessed are those who mourn, for they shall be comforted.", ref: "Matthew 5:4", tag: "Comfort", group: "Peace & Trust" },
  { text: "Blessed are the merciful, for they shall receive mercy.", ref: "Matthew 5:7", tag: "Mercy", group: "Mercy & Holiness" },
  { text: "I am with you always, to the end of the age.", ref: "Matthew 28:20", tag: "Presence", group: "Faith & Hope" },
  { text: "The Son of Man came not to be served but to serve, and to give his life as a ransom for many.", ref: "Matthew 20:28", tag: "Service", group: "Love" },
  { text: "What does it profit a man to gain the whole world and forfeit his soul?", ref: "Mark 8:36", tag: "Priority", group: "Mercy & Holiness" },
  { text: "All things are possible for one who believes.", ref: "Mark 9:23", tag: "Faith", group: "Faith & Hope" },
  { text: "My soul magnifies the Lord, and my spirit rejoices in God my Savior.", ref: "Luke 1:46-47", tag: "Joy", group: "Prayer & Joy" },
  { text: "For nothing will be impossible with God.", ref: "Luke 1:37", tag: "Faith", group: "Faith & Hope" },
  { text: "Father, into your hands I commit my spirit.", ref: "Luke 23:46", tag: "Surrender", group: "Peace & Trust" },
  { text: "The Word became flesh and dwelt among us, full of grace and truth.", ref: "John 1:14", tag: "Incarnation", group: "Faith & Hope" },
  { text: "God is spirit, and those who worship him must worship in spirit and truth.", ref: "John 4:24", tag: "Worship", group: "Prayer & Joy" },
  { text: "I am the good shepherd. The good shepherd lays down his life for the sheep.", ref: "John 10:11", tag: "Love", group: "Love" },
  { text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you.", ref: "John 14:27", tag: "Peace", group: "Peace & Trust" },
  { text: "If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you.", ref: "John 15:7", tag: "Prayer", group: "Prayer & Joy" },
  { text: "This is my commandment, that you love one another as I have loved you.", ref: "John 15:12", tag: "Love", group: "Love" },
  { text: "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.", ref: "John 16:33", tag: "Victory", group: "Strength & Courage" },
  { text: "Sanctify them in the truth; your word is truth.", ref: "John 17:17", tag: "Holiness", group: "Mercy & Holiness" },
  { text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.", ref: "Ephesians 2:8", tag: "Grace", group: "Mercy & Holiness" },
  { text: "Put on the whole armor of God, that you may be able to stand against the schemes of the devil.", ref: "Ephesians 6:11", tag: "Protection", group: "Strength & Courage" },
  { text: "Whatever is true, whatever is honorable, whatever is just — think about these things.", ref: "Philippians 4:8", tag: "Virtue", group: "Mercy & Holiness" },
  { text: "Let the peace of Christ rule in your hearts.", ref: "Colossians 3:15", tag: "Peace", group: "Peace & Trust" },
  { text: "Whatever you do, in word or deed, do everything in the name of the Lord Jesus.", ref: "Colossians 3:17", tag: "Mission", group: "Mercy & Holiness" },
  { text: "For God gave us a spirit not of fear but of power and love and self-control.", ref: "2 Timothy 1:7", tag: "Courage", group: "Strength & Courage" },
  { text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction.", ref: "2 Timothy 3:16", tag: "Guidance", group: "Mercy & Holiness" },
  { text: "Now faith is the assurance of things hoped for, the conviction of things not seen.", ref: "Hebrews 11:1", tag: "Faith", group: "Faith & Hope" },
  { text: "Let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith.", ref: "Hebrews 12:1-2", tag: "Perseverance", group: "Strength & Courage" },
  { text: "Jesus Christ is the same yesterday and today and forever.", ref: "Hebrews 13:8", tag: "Faith", group: "Faith & Hope" },
  { text: "Draw near to God, and he will draw near to you.", ref: "James 4:8", tag: "Prayer", group: "Prayer & Joy" },
  { text: "God opposes the proud but gives grace to the humble.", ref: "James 4:6", tag: "Humility", group: "Mercy & Holiness" },
  { text: "Beloved, let us love one another, for love is from God.", ref: "1 John 4:7", tag: "Love", group: "Love" },
  { text: "There is no fear in love, but perfect love casts out fear.", ref: "1 John 4:18", tag: "Love", group: "Love" },
  { text: "If we confess our sins, he is faithful and just to forgive us our sins.", ref: "1 John 1:9", tag: "Mercy", group: "Mercy & Holiness" },
  { text: "Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in.", ref: "Revelation 3:20", tag: "Presence", group: "Faith & Hope" },
  { text: "He will wipe away every tear from their eyes, and death shall be no more.", ref: "Revelation 21:4", tag: "Hope", group: "Faith & Hope" },
  { text: "The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge.", ref: "Psalm 18:2", tag: "Refuge", group: "Strength & Courage" },
  { text: "This is the day that the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24", tag: "Joy", group: "Prayer & Joy" },
];

/** Advent and Christmas texts, quoted from the Douay-Rheims Bible (public domain). */
export const SEASONAL: LockscreenText[] = [
  { text: "Behold a virgin shall conceive, and bear a son, and his name shall be called Emmanuel.", ref: "Isaiah 7:14", tag: "Advent", group: "Advent & Christmas" },
  { text: "Prepare ye the way of the Lord, make straight his paths.", ref: "Mark 1:3", tag: "Advent", group: "Advent & Christmas" },
  { text: "Rejoice in the Lord always; again, I say, rejoice. The Lord is nigh.", ref: "Philippians 4:4-5", tag: "Gaudete", group: "Advent & Christmas" },
  { text: "Behold the handmaid of the Lord; be it done to me according to thy word.", ref: "Luke 1:38", tag: "Advent", group: "Advent & Christmas" },
  { text: "Surely I come quickly. Amen. Come, Lord Jesus.", ref: "Revelation 22:20", tag: "Advent", group: "Advent & Christmas" },
  { text: "For a child is born to us, and a son is given to us, and his name shall be called the Prince of Peace.", ref: "Isaiah 9:6", tag: "Christmas", group: "Advent & Christmas" },
  { text: "This day is born to you a Saviour, who is Christ the Lord, in the city of David.", ref: "Luke 2:11", tag: "Christmas", group: "Advent & Christmas" },
  { text: "Glory to God in the highest; and on earth peace to men of good will.", ref: "Luke 2:14", tag: "Christmas", group: "Advent & Christmas" },
  { text: "And the Word was made flesh, and dwelt among us.", ref: "John 1:14", tag: "Christmas", group: "Advent & Christmas" },
  { text: "And they found Mary and Joseph, and the infant lying in the manger.", ref: "Luke 2:16", tag: "Christmas", group: "Advent & Christmas" },
];

/** Traditional Catholic prayers and short sayings of the saints. */
export const PRAYERS: LockscreenText[] = [
  { text: "Jesus, I trust in You.", ref: "Divine Mercy", tag: "Prayer", group: "Prayers & Saints" },
  { text: "Hail Mary, full of grace, the Lord is with thee.", ref: "The Hail Mary", tag: "Prayer", group: "Prayers & Saints" },
  { text: "Glory be to the Father, and to the Son, and to the Holy Spirit.", ref: "The Glory Be", tag: "Prayer", group: "Prayers & Saints" },
  { text: "St. Michael the Archangel, defend us in battle.", ref: "Prayer to St. Michael", tag: "Protection", group: "Prayers & Saints" },
  { text: "Sacred Heart of Jesus, I place all my trust in You.", ref: "Sacred Heart devotion", tag: "Prayer", group: "Prayers & Saints" },
  { text: "Lord, make me an instrument of your peace.", ref: "Prayer of St. Francis", tag: "Peace", group: "Prayers & Saints" },
  { text: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.", ref: "St. Augustine", tag: "Saints", group: "Prayers & Saints" },
  { text: "Let nothing disturb you, let nothing frighten you. All things pass; God never changes.", ref: "St. Teresa of Ávila", tag: "Saints", group: "Prayers & Saints" },
  { text: "Pray, hope, and don't worry.", ref: "St. Padre Pio", tag: "Saints", group: "Prayers & Saints" },
  { text: "Be who God meant you to be and you will set the world on fire.", ref: "St. Catherine of Siena", tag: "Saints", group: "Prayers & Saints" },
  { text: "Totus Tuus. Totally yours, Mary.", ref: "St. John Paul II", tag: "Saints", group: "Prayers & Saints" },
  { text: "Do small things with great love.", ref: "Attributed to St. Teresa of Calcutta", tag: "Saints", group: "Prayers & Saints" },
];

export const ALL_TEXTS: LockscreenText[] = [...SEASONAL, ...PRAYERS, ...VERSES];

export type ThemeKey = "Onyx & Gold" | "Ivory" | "Deep Blue" | "Royal Purple" | "Sacred Gold" | "Forest Green" | "Crimson" | "Midnight" | "Rose" | "Slate";

export interface DesignTheme {
  id: ThemeKey;
  bg1: string;
  bg2: string;
  bg3: string;
  accent: string;
  text: string;
  sub: string;
  tag: string;
  tagText: string;
  /** What the color stands for in Catholic tradition (shown on the page). */
  meaning: string;
  /** Light background with dark text. */
  light?: boolean;
}

export const THEMES: DesignTheme[] = [
  { id: "Onyx & Gold", bg1: "#14110c", bg2: "#1f1a12", bg3: "#060504", accent: "#d4af37", text: "#f4ecd8", sub: "#a8987a", tag: "#d4af37", tagText: "#14110c", meaning: "Black and gold leaf, like an altar in candlelight" },
  { id: "Ivory", bg1: "#fbf6ea", bg2: "#f1e6cc", bg3: "#e3d2ac", accent: "#a67c1f", text: "#2a2015", sub: "#7a6a50", tag: "#a67c1f", tagText: "#fbf6ea", meaning: "White and gold, the colors of Christmas, Easter and the feasts of Our Lord and Our Lady", light: true },
  { id: "Deep Blue", bg1: "#0f2044", bg2: "#1a3a6e", bg3: "#0a1628", accent: "#c9a227", text: "#f5f0e8", sub: "#a8b8d0", tag: "#c9a227", tagText: "#0f2044", meaning: "Marian blue, the color long associated with Our Lady’s mantle" },
  { id: "Royal Purple", bg1: "#2d1b69", bg2: "#4a2c8a", bg3: "#1a0f3d", accent: "#f0c040", text: "#f5f0ff", sub: "#c4b0e8", tag: "#f0c040", tagText: "#2d1b69", meaning: "Violet, the liturgical color of Advent and Lent" },
  { id: "Sacred Gold", bg1: "#7a4f00", bg2: "#b87800", bg3: "#4a2f00", accent: "#ffd700", text: "#fff8e7", sub: "#e8d090", tag: "#fff8e7", tagText: "#7a4f00", meaning: "Gold, which may replace white on great solemnities like Christmas and Easter" },
  { id: "Forest Green", bg1: "#0d3320", bg2: "#1a5c38", bg3: "#071a10", accent: "#7ec8a0", text: "#f0fff4", sub: "#90c8a8", tag: "#7ec8a0", tagText: "#0d3320", meaning: "Green, the color of Ordinary Time and of hope" },
  { id: "Crimson", bg1: "#4a0a0a", bg2: "#7a1515", bg3: "#2a0505", accent: "#f5c842", text: "#fff5f5", sub: "#e8a0a0", tag: "#f5c842", tagText: "#4a0a0a", meaning: "Red, for Pentecost, the Passion and the feasts of martyrs" },
  { id: "Midnight", bg1: "#080c18", bg2: "#141c30", bg3: "#040810", accent: "#8ab4f8", text: "#e8eeff", sub: "#8090b0", tag: "#8ab4f8", tagText: "#080c18", meaning: "Night blue, for silent prayer and the Easter Vigil’s darkness before the light" },
  { id: "Rose", bg1: "#4a1030", bg2: "#7a1a50", bg3: "#2a0818", accent: "#f9a8d4", text: "#fff0f8", sub: "#e8a0c0", tag: "#f9a8d4", tagText: "#4a1030", meaning: "Rose, worn on Gaudete Sunday in Advent and Laetare Sunday in Lent" },
  { id: "Slate", bg1: "#1a2030", bg2: "#2a3348", bg3: "#0e1420", accent: "#94a3b8", text: "#f1f5f9", sub: "#8090a8", tag: "#94a3b8", tagText: "#1a2030", meaning: "Quiet gray-blue, for a calm, minimal screen" },
];

export interface DevicePreset {
  id: string;
  label: string;
  /** Brand group shown in the picker. */
  group: "iPhone" | "Google Pixel" | "Samsung Galaxy" | "Other Android" | "iPad";
  width: number;
  height: number;
}

/** Native portrait screen resolutions in pixels. */
export const DEVICES: DevicePreset[] = [
  { id: "iphone-17-pro-max", group: "iPhone", label: "iPhone 17 Pro Max / 16 Pro Max", width: 1320, height: 2868 },
  { id: "iphone-air", group: "iPhone", label: "iPhone Air", width: 1260, height: 2736 },
  { id: "iphone-17-pro", group: "iPhone", label: "iPhone 17 / 17 Pro / 16 Pro", width: 1206, height: 2622 },
  { id: "iphone-16-plus", group: "iPhone", label: "iPhone 16 Plus / 15 Plus / 15 Pro Max / 14 Pro Max", width: 1290, height: 2796 },
  { id: "iphone-16", group: "iPhone", label: "iPhone 16 / 15 / 15 Pro / 14 Pro", width: 1179, height: 2556 },
  { id: "iphone-14", group: "iPhone", label: "iPhone 16e / 14 / 13 / 13 Pro / 12 / 12 Pro", width: 1170, height: 2532 },
  { id: "iphone-14-plus", group: "iPhone", label: "iPhone 14 Plus / 13 Pro Max / 12 Pro Max", width: 1284, height: 2778 },
  { id: "iphone-mini", group: "iPhone", label: "iPhone 13 mini / 12 mini", width: 1080, height: 2340 },
  { id: "iphone-11-pro-max", group: "iPhone", label: "iPhone 11 Pro Max / XS Max", width: 1242, height: 2688 },
  { id: "iphone-11-pro", group: "iPhone", label: "iPhone 11 Pro / XS / X", width: 1125, height: 2436 },
  { id: "iphone-11", group: "iPhone", label: "iPhone 11 / XR", width: 828, height: 1792 },
  { id: "iphone-se", group: "iPhone", label: "iPhone SE (2nd & 3rd gen) / 8 / 7", width: 750, height: 1334 },
  { id: "pixel-pro-xl", group: "Google Pixel", label: "Pixel 9 Pro XL / 8 Pro", width: 1344, height: 2992 },
  { id: "pixel-pro", group: "Google Pixel", label: "Pixel 9 Pro", width: 1280, height: 2856 },
  { id: "pixel", group: "Google Pixel", label: "Pixel 9", width: 1080, height: 2424 },
  { id: "pixel-a", group: "Google Pixel", label: "Pixel 8 / 7 / 7a / 6a", width: 1080, height: 2400 },
  { id: "galaxy-ultra", group: "Samsung Galaxy", label: "Galaxy S25 Ultra / S24 Ultra / S24+", width: 1440, height: 3120 },
  { id: "galaxy-s", group: "Samsung Galaxy", label: "Galaxy S25 / S24 / S23", width: 1080, height: 2340 },
  { id: "galaxy-a", group: "Samsung Galaxy", label: "Galaxy A series (A16, A35, A55)", width: 1080, height: 2340 },
  { id: "galaxy-flip", group: "Samsung Galaxy", label: "Galaxy Z Flip (main screen)", width: 1080, height: 2640 },
  { id: "android-fhd", group: "Other Android", label: "Most Android phones (Motorola, OnePlus Nord, Xiaomi)", width: 1080, height: 2400 },
  { id: "android-qhd", group: "Other Android", label: "High-end Android (OnePlus 12 and similar)", width: 1440, height: 3168 },
  { id: "ipad-pro-13", group: "iPad", label: "iPad Pro 13-inch (M4)", width: 2064, height: 2752 },
  { id: "ipad-air", group: "iPad", label: "iPad Air 11-inch / iPad (10th gen)", width: 1640, height: 2360 },
  { id: "ipad-mini", group: "iPad", label: "iPad mini (6th gen and later)", width: 1488, height: 2266 },
];

export const DEVICE_GROUPS = ["iPhone", "Google Pixel", "Samsung Galaxy", "Other Android", "iPad"] as const;
