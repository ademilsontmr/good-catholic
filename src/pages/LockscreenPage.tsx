import { useState, useRef, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, Smartphone, RefreshCw, ChevronLeft, ChevronRight, Cross, Sparkles, Heart, BookOpen, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { toast } from "sonner";

// ─── Data ────────────────────────────────────────────────────────────────────

const verses = [
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13", theme: "Strength" },
  { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1", theme: "Trust" },
  { text: "Be still and know that I am God.", ref: "Psalm 46:10", theme: "Peace" },
  { text: "For God so loved the world that he gave his only Son.", ref: "John 3:16", theme: "Love" },
  { text: "Trust in the Lord with all your heart.", ref: "Proverbs 3:5", theme: "Faith" },
  { text: "Come to me, all you who are weary, and I will give you rest.", ref: "Matthew 11:28", theme: "Rest" },
  { text: "For I know the plans I have for you, declares the Lord.", ref: "Jeremiah 29:11", theme: "Hope" },
  { text: "My grace is sufficient for you, for my power is made perfect in weakness.", ref: "2 Corinthians 12:9", theme: "Grace" },
  { text: "The Lord is my light and my salvation — whom shall I fear?", ref: "Psalm 27:1", theme: "Courage" },
  { text: "Nothing will be able to separate us from the love of God.", ref: "Romans 8:39", theme: "Love" },
  { text: "I am the way, the truth, and the life.", ref: "John 14:6", theme: "Faith" },
  { text: "Pray without ceasing.", ref: "1 Thessalonians 5:17", theme: "Prayer" },
  { text: "The peace of God, which transcends all understanding, will guard your hearts.", ref: "Philippians 4:7", theme: "Peace" },
  { text: "You are the light of the world.", ref: "Matthew 5:14", theme: "Mission" },
  { text: "Behold, I am the handmaid of the Lord; let it be to me according to your word.", ref: "Luke 1:38", theme: "Surrender" },
  { text: "Do not be afraid, for I am with you.", ref: "Isaiah 41:10", theme: "Courage" },
  { text: "Whoever believes in me will never thirst.", ref: "John 6:35", theme: "Eucharist" },
  { text: "Create in me a clean heart, O God.", ref: "Psalm 51:10", theme: "Conversion" },
  { text: "Rejoice in the Lord always. I will say it again: Rejoice!", ref: "Philippians 4:4", theme: "Joy" },
  { text: "I am the resurrection and the life.", ref: "John 11:25", theme: "Hope" },
  // 30 new verses
  { text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.", ref: "Numbers 6:24-25", theme: "Blessing" },
  { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged.", ref: "Joshua 1:9", theme: "Courage" },
  { text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.", ref: "Psalm 34:8", theme: "Trust" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4", theme: "Joy" },
  { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1", theme: "Refuge" },
  { text: "As the deer pants for streams of water, so my soul pants for you, my God.", ref: "Psalm 42:1", theme: "Longing" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18", theme: "Comfort" },
  { text: "Your word is a lamp to my feet and a light to my path.", ref: "Psalm 119:105", theme: "Guidance" },
  { text: "I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord.", ref: "Psalm 121:1-2", theme: "Help" },
  { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.", ref: "Psalm 23:4", theme: "Protection" },
  { text: "Seek first the kingdom of God and his righteousness, and all these things will be added to you.", ref: "Matthew 6:33", theme: "Priority" },
  { text: "Blessed are the pure in heart, for they shall see God.", ref: "Matthew 5:8", theme: "Purity" },
  { text: "Blessed are the peacemakers, for they will be called children of God.", ref: "Matthew 5:9", theme: "Peace" },
  { text: "With God all things are possible.", ref: "Matthew 19:26", theme: "Faith" },
  { text: "I am the vine; you are the branches. Whoever abides in me bears much fruit.", ref: "John 15:5", theme: "Union" },
  { text: "Greater love has no one than this: to lay down one's life for one's friends.", ref: "John 15:13", theme: "Love" },
  { text: "Do not let your hearts be troubled. You believe in God; believe also in me.", ref: "John 14:1", theme: "Peace" },
  { text: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness.", ref: "Galatians 5:22", theme: "Holiness" },
  { text: "I have been crucified with Christ and I no longer live, but Christ lives in me.", ref: "Galatians 2:20", theme: "Union" },
  { text: "Do not be overcome by evil, but overcome evil with good.", ref: "Romans 12:21", theme: "Virtue" },
  { text: "For I am convinced that neither death nor life can separate us from the love of God.", ref: "Romans 8:38-39", theme: "Love" },
  { text: "We know that in all things God works for the good of those who love him.", ref: "Romans 8:28", theme: "Hope" },
  { text: "Let all that you do be done in love.", ref: "1 Corinthians 16:14", theme: "Love" },
  { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", ref: "1 Corinthians 13:4", theme: "Love" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7", theme: "Trust" },
  { text: "Be still before the Lord and wait patiently for him.", ref: "Psalm 37:7", theme: "Patience" },
  { text: "The Lord is my strength and my song; he has given me victory.", ref: "Exodus 15:2", theme: "Victory" },
  { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3", theme: "Healing" },
  { text: "Come to me with your ears wide open. Listen, and you will find life.", ref: "Isaiah 55:3", theme: "Surrender" },
  { text: "Those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31", theme: "Strength" },
  // 50 new verses
  { text: "The Lord your God is with you, the Mighty Warrior who saves. He will rejoice over you with singing.", ref: "Zephaniah 3:17", theme: "Joy" },
  { text: "You will seek me and find me when you seek me with all your heart.", ref: "Jeremiah 29:13", theme: "Longing" },
  { text: "Return to me with all your heart, with fasting and weeping and mourning.", ref: "Joel 2:12", theme: "Conversion" },
  { text: "The steadfast love of the Lord never ceases; his mercies never come to an end.", ref: "Lamentations 3:22-23", theme: "Mercy" },
  { text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God.", ref: "Micah 6:8", theme: "Virtue" },
  { text: "Not by might, nor by power, but by my Spirit, says the Lord of hosts.", ref: "Zechariah 4:6", theme: "Grace" },
  { text: "The Lord is good to those who wait for him, to the soul who seeks him.", ref: "Lamentations 3:25", theme: "Patience" },
  { text: "Blessed is the man who trusts in the Lord, whose trust is the Lord.", ref: "Jeremiah 17:7", theme: "Trust" },
  { text: "I will give you a new heart and put a new spirit in you.", ref: "Ezekiel 36:26", theme: "Conversion" },
  { text: "The Lord is my portion, therefore I will hope in him.", ref: "Lamentations 3:24", theme: "Hope" },
  { text: "Whoever humbles himself like a child is the greatest in the kingdom of heaven.", ref: "Matthew 18:4", theme: "Humility" },
  { text: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.", ref: "Matthew 7:7", theme: "Prayer" },
  { text: "You shall love the Lord your God with all your heart and with all your soul and with all your mind.", ref: "Matthew 22:37", theme: "Love" },
  { text: "Blessed are those who mourn, for they shall be comforted.", ref: "Matthew 5:4", theme: "Comfort" },
  { text: "Blessed are the merciful, for they shall receive mercy.", ref: "Matthew 5:7", theme: "Mercy" },
  { text: "I am with you always, to the end of the age.", ref: "Matthew 28:20", theme: "Presence" },
  { text: "The Son of Man came not to be served but to serve, and to give his life as a ransom for many.", ref: "Matthew 20:28", theme: "Service" },
  { text: "What does it profit a man to gain the whole world and forfeit his soul?", ref: "Mark 8:36", theme: "Priority" },
  { text: "All things are possible for one who believes.", ref: "Mark 9:23", theme: "Faith" },
  { text: "My soul magnifies the Lord, and my spirit rejoices in God my Savior.", ref: "Luke 1:46-47", theme: "Joy" },
  { text: "For nothing will be impossible with God.", ref: "Luke 1:37", theme: "Faith" },
  { text: "Father, into your hands I commit my spirit.", ref: "Luke 23:46", theme: "Surrender" },
  { text: "The Word became flesh and dwelt among us, full of grace and truth.", ref: "John 1:14", theme: "Incarnation" },
  { text: "God is spirit, and those who worship him must worship in spirit and truth.", ref: "John 4:24", theme: "Worship" },
  { text: "I am the good shepherd. The good shepherd lays down his life for the sheep.", ref: "John 10:11", theme: "Love" },
  { text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you.", ref: "John 14:27", theme: "Peace" },
  { text: "If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you.", ref: "John 15:7", theme: "Prayer" },
  { text: "This is my commandment, that you love one another as I have loved you.", ref: "John 15:12", theme: "Love" },
  { text: "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.", ref: "John 16:33", theme: "Victory" },
  { text: "Sanctify them in the truth; your word is truth.", ref: "John 17:17", theme: "Holiness" },
  { text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.", ref: "Ephesians 2:8", theme: "Grace" },
  { text: "Put on the whole armor of God, that you may be able to stand against the schemes of the devil.", ref: "Ephesians 6:11", theme: "Protection" },
  { text: "I can do all things through him who strengthens me.", ref: "Philippians 4:13", theme: "Strength" },
  { text: "Whatever is true, whatever is honorable, whatever is just — think about these things.", ref: "Philippians 4:8", theme: "Virtue" },
  { text: "Let the peace of Christ rule in your hearts.", ref: "Colossians 3:15", theme: "Peace" },
  { text: "Whatever you do, in word or deed, do everything in the name of the Lord Jesus.", ref: "Colossians 3:17", theme: "Mission" },
  { text: "For God gave us a spirit not of fear but of power and love and self-control.", ref: "2 Timothy 1:7", theme: "Courage" },
  { text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction.", ref: "2 Timothy 3:16", theme: "Guidance" },
  { text: "Now faith is the assurance of things hoped for, the conviction of things not seen.", ref: "Hebrews 11:1", theme: "Faith" },
  { text: "Let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith.", ref: "Hebrews 12:1-2", theme: "Perseverance" },
  { text: "Jesus Christ is the same yesterday and today and forever.", ref: "Hebrews 13:8", theme: "Faith" },
  { text: "Draw near to God, and he will draw near to you.", ref: "James 4:8", theme: "Prayer" },
  { text: "God opposes the proud but gives grace to the humble.", ref: "James 4:6", theme: "Humility" },
  { text: "Beloved, let us love one another, for love is from God.", ref: "1 John 4:7", theme: "Love" },
  { text: "There is no fear in love, but perfect love casts out fear.", ref: "1 John 4:18", theme: "Love" },
  { text: "If we confess our sins, he is faithful and just to forgive us our sins.", ref: "1 John 1:9", theme: "Mercy" },
  { text: "Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in.", ref: "Revelation 3:20", theme: "Presence" },
  { text: "He will wipe away every tear from their eyes, and death shall be no more.", ref: "Revelation 21:4", theme: "Hope" },
  { text: "The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge.", ref: "Psalm 18:2", theme: "Refuge" },
  { text: "This is the day that the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24", theme: "Joy" },
];

type ThemeKey = "Deep Blue" | "Royal Purple" | "Sacred Gold" | "Forest Green" | "Crimson" | "Midnight" | "Rose" | "Slate";

interface DesignTheme {
  id: ThemeKey;
  label: string;
  bg1: string;
  bg2: string;
  bg3: string;
  accent: string;
  text: string;
  sub: string;
  tag: string;
  tagText: string;
  emoji: string;
}

const themes: DesignTheme[] = [
  { id: "Deep Blue",    label: "Deep Blue",    bg1: "#0f2044", bg2: "#1a3a6e", bg3: "#0a1628", accent: "#c9a227", text: "#f5f0e8", sub: "#a8b8d0", tag: "#c9a227", tagText: "#0f2044", emoji: "✝️" },
  { id: "Royal Purple", label: "Royal Purple", bg1: "#2d1b69", bg2: "#4a2c8a", bg3: "#1a0f3d", accent: "#f0c040", text: "#f5f0ff", sub: "#c4b0e8", tag: "#f0c040", tagText: "#2d1b69", emoji: "👑" },
  { id: "Sacred Gold",  label: "Sacred Gold",  bg1: "#7a4f00", bg2: "#b87800", bg3: "#4a2f00", accent: "#ffd700", text: "#fff8e7", sub: "#e8d090", tag: "#fff8e7", tagText: "#7a4f00", emoji: "☀️" },
  { id: "Forest Green", label: "Forest Green", bg1: "#0d3320", bg2: "#1a5c38", bg3: "#071a10", accent: "#7ec8a0", text: "#f0fff4", sub: "#90c8a8", tag: "#7ec8a0", tagText: "#0d3320", emoji: "🌿" },
  { id: "Crimson",      label: "Crimson",      bg1: "#4a0a0a", bg2: "#7a1515", bg3: "#2a0505", accent: "#f5c842", text: "#fff5f5", sub: "#e8a0a0", tag: "#f5c842", tagText: "#4a0a0a", emoji: "❤️" },
  { id: "Midnight",     label: "Midnight",     bg1: "#080c18", bg2: "#141c30", bg3: "#040810", accent: "#8ab4f8", text: "#e8eeff", sub: "#8090b0", tag: "#8ab4f8", tagText: "#080c18", emoji: "🌙" },
  { id: "Rose",         label: "Rose",         bg1: "#4a1030", bg2: "#7a1a50", bg3: "#2a0818", accent: "#f9a8d4", text: "#fff0f8", sub: "#e8a0c0", tag: "#f9a8d4", tagText: "#4a1030", emoji: "🌹" },
  { id: "Slate",        label: "Slate",        bg1: "#1a2030", bg2: "#2a3348", bg3: "#0e1420", accent: "#94a3b8", text: "#f1f5f9", sub: "#8090a8", tag: "#94a3b8", tagText: "#1a2030", emoji: "🕊️" },
];

// ─── Canvas renderer ─────────────────────────────────────────────────────────

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawLockscreen(
  canvas: HTMLCanvasElement,
  verse: { text: string; ref: string; theme: string },
  theme: DesignTheme,
  scale = 1
) {
  const W = canvas.width;
  const H = canvas.height;
  const ctx = canvas.getContext("2d")!;
  const s = scale;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, W * 0.4, H);
  grad.addColorStop(0, theme.bg1);
  grad.addColorStop(0.5, theme.bg2);
  grad.addColorStop(1, theme.bg3);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Subtle radial glow top-center
  const glow = ctx.createRadialGradient(W / 2, H * 0.22, 0, W / 2, H * 0.22, W * 0.55);
  glow.addColorStop(0, theme.accent + "22");
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // Decorative dots pattern (subtle)
  ctx.fillStyle = theme.text + "08";
  for (let x = 0; x < W; x += 28 * s) {
    for (let y = 0; y < H; y += 28 * s) {
      ctx.beginPath();
      ctx.arc(x, y, 1.2 * s, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Top ornament line
  const lineY = H * 0.12;
  ctx.strokeStyle = theme.accent + "60";
  ctx.lineWidth = 1 * s;
  ctx.beginPath();
  ctx.moveTo(W * 0.2, lineY);
  ctx.lineTo(W * 0.8, lineY);
  ctx.stroke();

  // Cross symbol
  const crossX = W / 2;
  const crossY = H * 0.19;
  const cW = 10 * s;
  const cH = 16 * s;
  ctx.fillStyle = theme.accent;
  ctx.fillRect(crossX - cW / 2, crossY - cH / 2, cW, cH);
  ctx.fillRect(crossX - cW, crossY - cH * 0.15, cW * 2, cW * 0.7);

  // "Guide Catholic" label
  ctx.font = `${600}  ${9 * s}px sans-serif`;
  ctx.fillStyle = theme.sub;
  ctx.textAlign = "center";
  ctx.letterSpacing = `${2 * s}px`;
  ctx.fillText("GUIDE CATHOLIC", W / 2, H * 0.28);
  ctx.letterSpacing = "0px";

  // Theme tag pill
  const tagText = verse.theme.toUpperCase();
  ctx.font = `bold ${10 * s}px sans-serif`;
  const tagW = ctx.measureText(tagText).width + 24 * s;
  const tagH = 22 * s;
  const tagX = W / 2 - tagW / 2;
  const tagY = H * 0.32 - tagH / 2;
  ctx.fillStyle = theme.tag;
  roundRect(ctx, tagX, tagY, tagW, tagH, 11 * s);
  ctx.fillStyle = theme.tagText;
  ctx.fillText(tagText, W / 2, H * 0.32 + 4 * s);

  // Decorative quote marks
  ctx.font = `bold ${60 * s}px Georgia, serif`;
  ctx.fillStyle = theme.accent + "30";
  ctx.textAlign = "left";
  ctx.fillText("\u201C", W * 0.08, H * 0.46);

  // Verse text
  const verseMaxW = W * 0.78;
  ctx.font = `italic bold ${18 * s}px Georgia, serif`;
  ctx.fillStyle = theme.text;
  ctx.textAlign = "center";
  const lines = wrapText(ctx, `\u201C${verse.text}\u201D`, verseMaxW);
  const lineH = 26 * s;
  const totalH = lines.length * lineH;
  const startY = H * 0.5 - totalH / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line, W / 2, startY + i * lineH);
  });

  // Reference
  ctx.font = `${13 * s}px Georgia, serif`;
  ctx.fillStyle = theme.accent;
  ctx.textAlign = "center";
  ctx.fillText(`\u2014 ${verse.ref}`, W / 2, startY + totalH + 18 * s);

  // Bottom divider
  const divY = H * 0.82;
  ctx.strokeStyle = theme.accent + "40";
  ctx.lineWidth = 1 * s;
  ctx.beginPath();
  ctx.moveTo(W * 0.3, divY);
  ctx.lineTo(W * 0.7, divY);
  ctx.stroke();

  // Bottom tagline
  ctx.font = `${10 * s}px sans-serif`;
  ctx.fillStyle = theme.sub;
  ctx.textAlign = "center";
  ctx.fillText("guidecatholic.com", W / 2, H * 0.87);

  // Bottom ornament dots
  const dotY = H * 0.91;
  for (let d = -2; d <= 2; d++) {
    ctx.beginPath();
    ctx.arc(W / 2 + d * 10 * s, dotY, (d === 0 ? 3 : 2) * s, 0, Math.PI * 2);
    ctx.fillStyle = d === 0 ? theme.accent : theme.accent + "60";
    ctx.fill();
  }
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function LockscreenPage() {
  const [verseIdx, setVerseIdx] = useState(0);
  const [themeIdx, setThemeIdx] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef<HTMLCanvasElement>(null);

  const verse = verses[verseIdx];
  const theme = themes[themeIdx];

  const render = useCallback(() => {
    const canvas = previewRef.current;
    if (!canvas) return;
    // Preview: 390×844 (iPhone 14 ratio) scaled to fit container
    canvas.width = 390;
    canvas.height = 844;
    drawLockscreen(canvas, verse, theme, 1);
  }, [verse, theme]);

  useEffect(() => { render(); }, [render]);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // Full resolution: 1290×2796 (iPhone 14 Pro Max)
      const hd = document.createElement("canvas");
      hd.width = 1290;
      hd.height = 2796;
      drawLockscreen(hd, verse, theme, 1290 / 390);
      const url = hd.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `catholic-lockscreen-${theme.id.toLowerCase().replace(" ", "-")}.png`;
      a.click();
      toast.success("Lockscreen downloaded! Set it as your wallpaper 🙏");
    } catch {
      toast.error("Download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const prevVerse = () => setVerseIdx((i) => (i - 1 + verses.length) % verses.length);
  const nextVerse = () => setVerseIdx((i) => (i + 1) % verses.length);

  const faqs = [
    {
      q: "Are these Catholic lockscreen wallpapers really free?",
      a: "Yes — 100% free, forever. No account, no email, no payment required. Choose your verse and style, click Download, and the high-resolution PNG is saved directly to your device.",
    },
    {
      q: "What resolution are the wallpapers?",
      a: "Downloaded wallpapers are 1290 × 2796 pixels — the native resolution of the iPhone 14 Pro Max. This ensures a crisp, sharp image on any modern smartphone, including all iPhone and Android models.",
    },
    {
      q: "How do I set the wallpaper on my iPhone?",
      a: "After downloading: open the Photos app → tap the image → tap the Share icon → tap 'Use as Wallpaper' → select 'Lock Screen' → tap 'Set'. Done.",
    },
    {
      q: "How do I set the wallpaper on Android?",
      a: "After downloading: open your Gallery or Photos app → tap the image → tap the three-dot menu or 'Set as' → select 'Lock Screen' or 'Wallpaper'. Steps may vary slightly by manufacturer.",
    },
    {
      q: "Can I use these wallpapers for personal and ministry use?",
      a: "Yes. These wallpapers are free for personal use and for sharing within your Catholic community, parish, or ministry. Please do not sell them or remove the Guide Catholic attribution.",
    },
    {
      q: "Why should I use a Catholic lockscreen?",
      a: "The average person checks their phone over 90 times a day. Each unlock is an opportunity to encounter a word of God instead of a distraction. A Catholic lockscreen turns a habit into a moment of prayer — a small but powerful way to keep God at the center of your day.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Catholic Lockscreen Wallpapers — Free Bible Verse Wallpapers for iPhone & Android | Guide Catholic</title>
        <meta name="description" content="Download free Catholic lockscreen wallpapers with Bible verses for your iPhone or Android. 100 Scripture passages, 8 sacred color themes, high-resolution PNG — instant free download." />
        <meta name="keywords" content="catholic lockscreen wallpaper, catholic phone wallpaper, bible verse lockscreen, christian wallpaper iphone, catholic wallpaper free download, scripture wallpaper phone, catholic background iphone, religious lockscreen, bible verse phone wallpaper, catholic iphone wallpaper, christian phone background, free catholic wallpaper, scripture phone background, catholic home screen wallpaper, bible verse background free" />
        <link rel="canonical" href="https://guidecatholic.com/lockscreen/" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content="Free Catholic Lockscreen Wallpapers — Bible Verses for Your Phone" />
        <meta property="og:description" content="Download beautiful Catholic lockscreen wallpapers with Scripture verses. 8 sacred themes, 100 Bible passages, high-resolution PNG — free for iPhone and Android." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guidecatholic.com/lockscreen/" />
        <meta property="og:site_name" content="Guide Catholic" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Catholic Lockscreen Wallpapers — Bible Verses for Your Phone" />
        <meta name="twitter:description" content="Download beautiful Catholic lockscreen wallpapers with Scripture verses. 8 sacred themes, 100 Bible passages — free for iPhone and Android." />
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Catholic Lockscreen Wallpapers — Free Bible Verse Wallpapers",
          "description": "Download free Catholic lockscreen wallpapers with Bible verses for iPhone and Android. 20 Scripture passages, 8 sacred color themes, high-resolution PNG.",
          "url": "https://guidecatholic.com/lockscreen/",
          "publisher": {
            "@type": "Organization",
            "name": "Guide Catholic",
            "url": "https://guidecatholic.com"
          },
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Catholic Lockscreen Wallpaper Generator",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Generate and download free Catholic lockscreen wallpapers with Bible verses. Choose from 100 Scripture passages and 8 sacred color themes."
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://guidecatholic.com/" },
              { "@type": "ListItem", "position": 2, "name": "Catholic Lockscreens", "item": "https://guidecatholic.com/lockscreen/" }
            ]
          },
          "mainEntityOfPage": {
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          }
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="text-text">Catholic Lockscreens</span>
            </nav>
          </div>
        </div>

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <Smartphone className="w-4 h-4" />
                Free · High Resolution · Instant Download
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
                Catholic Lockscreen Wallpapers
              </h1>
              <p className="text-text-muted text-lg max-w-xl mx-auto">
                Start every day with a sacred reminder. Choose a verse, pick a style, and download your wallpaper — free, forever.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">

              {/* ── Left: Preview ── */}
              <div className="flex flex-col items-center gap-6">
                {/* Phone frame */}
                <div className="relative">
                  {/* Outer phone shell */}
                  <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-4 ring-gray-800">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10" />
                    {/* Screen */}
                    <div className="rounded-[2.2rem] overflow-hidden" style={{ width: 220, height: 477 }}>
                      <canvas
                        ref={previewRef}
                        style={{ width: 220, height: 477, display: "block" }}
                      />
                    </div>
                    {/* Home indicator */}
                    <div className="mt-2 mx-auto w-20 h-1 bg-gray-600 rounded-full" />
                  </div>
                  {/* Glow behind phone */}
                  <div className="absolute inset-0 -z-10 blur-3xl opacity-30 rounded-full"
                    style={{ background: theme.bg2 }} />
                </div>

                {/* Verse navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevVerse}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-text" />
                  </button>
                  <span className="text-sm text-text-muted font-medium min-w-[80px] text-center">
                    {verseIdx + 1} / {verses.length}
                  </span>
                  <button
                    onClick={nextVerse}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-text" />
                  </button>
                </div>

                {/* Current verse info */}
                <div className="bg-surface border border-border rounded-2xl p-4 w-full max-w-xs text-center">
                  <p className="text-sm italic text-text leading-relaxed mb-2">"{verse.text}"</p>
                  <p className="text-xs font-semibold text-accent">— {verse.ref}</p>
                </div>
              </div>

              {/* ── Right: Controls ── */}
              <div className="flex flex-col gap-6">

                {/* Theme picker */}
                <div>
                  <h2 className="font-display text-xl font-bold text-text mb-1">Choose a Style</h2>
                  <p className="text-sm text-text-muted mb-4">8 sacred color themes, each inspired by Catholic tradition.</p>
                  <div className="grid grid-cols-4 gap-2">
                    {themes.map((t, i) => (
                      <button
                        key={t.id}
                        onClick={() => setThemeIdx(i)}
                        className={`relative rounded-xl overflow-hidden h-16 flex flex-col items-center justify-center gap-1 border-2 transition-all ${
                          themeIdx === i
                            ? "border-accent scale-105 shadow-lg"
                            : "border-transparent hover:border-border"
                        }`}
                        style={{ background: `linear-gradient(135deg, ${t.bg1}, ${t.bg2})` }}
                        title={t.label}
                      >
                        <span className="text-lg">{t.emoji}</span>
                        <span className="text-[10px] font-semibold" style={{ color: t.text }}>
                          {t.label.split(" ")[0]}
                        </span>
                        {themeIdx === i && (
                          <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-accent" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Verse picker */}
                <div>
                  <h2 className="font-display text-xl font-bold text-text mb-1">Choose a Verse</h2>
                  <p className="text-sm text-text-muted mb-4">100 carefully selected Scripture passages.</p>
                  <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                    {verses.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => setVerseIdx(i)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all ${
                          verseIdx === i
                            ? "border-accent bg-accent/10 text-text"
                            : "border-border bg-surface hover:border-accent/50 text-text-muted"
                        }`}
                      >
                        <span className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full mb-1 ${
                          verseIdx === i ? "bg-accent text-white" : "bg-background-muted text-text-muted"
                        }`}>
                          {v.theme}
                        </span>
                        <p className="line-clamp-2 leading-snug">{v.ref}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Download button */}
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <Download className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm">Ready to download</p>
                      <p className="text-xs text-text-muted">1290 × 2796 px · PNG · Free</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleDownload}
                    disabled={downloading}
                    size="lg"
                    className="w-full bg-gradient-accent hover:opacity-90 text-button-text font-bold gap-2 text-base"
                  >
                    {downloading ? (
                      <><RefreshCw className="w-5 h-5 animate-spin" />Generating…</>
                    ) : (
                      <><Download className="w-5 h-5" />Download Wallpaper</>
                    )}
                  </Button>
                  <p className="text-xs text-text-muted text-center mt-3">
                    iPhone 14 Pro Max resolution · Works on all phones
                  </p>
                </div>

                {/* How to set */}
                <div className="bg-surface border border-border rounded-2xl p-5">
                  <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-accent" />
                    How to set as lockscreen
                  </h3>
                  <ol className="space-y-2 text-sm text-text-muted">
                    <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center shrink-0">1</span>Download the image above</li>
                    <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center shrink-0">2</span><span><strong className="text-text">iPhone:</strong> Photos → Share → Use as Wallpaper → Lock Screen</span></li>
                    <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center shrink-0">3</span><span><strong className="text-text">Android:</strong> Gallery → Set as → Lock Screen</span></li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Why section */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                { icon: Cross, title: "Start with God", body: "Your lockscreen is the first thing you see every morning. Make it a moment of prayer, not distraction." },
                { icon: Heart, title: "Carry Scripture", body: "Each time you unlock your phone, you encounter the Word of God. Small moments, deep transformation." },
                { icon: BookOpen, title: "100 Verses · 8 Styles", body: "Mix and match to find the combination that speaks to your heart. Change it whenever you need a new word." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-surface border border-border rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text mb-2">{title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            {/* SEO rich text block */}
            <div className="mt-14 bg-surface border border-border rounded-2xl p-8 max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-text mb-5">
                Why Use a Catholic Lockscreen Wallpaper?
              </h2>
              <div className="space-y-4 text-text-muted text-sm leading-relaxed">
                <p>
                  The average person unlocks their smartphone over 90 times a day. That's 90 opportunities — most of them wasted on notifications, social media, or idle scrolling. A <strong className="text-text">Catholic lockscreen wallpaper</strong> transforms each unlock into a brief encounter with the Word of God. It's one of the simplest and most effective ways to keep your faith at the center of your daily life.
                </p>
                <p>
                  Our free <strong className="text-text">Bible verse wallpapers for iPhone and Android</strong> are designed specifically for Catholic Christians who want to carry Scripture with them throughout the day. Each design features a carefully chosen passage from the Old or New Testament, rendered in a beautiful typographic layout with sacred color themes inspired by Catholic liturgical tradition.
                </p>
                <p>
                  Unlike generic Christian wallpapers, our designs are rooted in the Catholic tradition — featuring the cross, liturgical colors (deep blue for Advent, crimson for martyrs, gold for solemnities), and Scripture passages that resonate with the Catholic sacramental and devotional life. Whether you're looking for a <strong className="text-text">Catholic phone wallpaper</strong> for Lent, Advent, or everyday use, you'll find a design that speaks to your heart.
                </p>
                <p>
                  All wallpapers are generated at <strong className="text-text">1290 × 2796 pixels</strong> — the native resolution of the iPhone 14 Pro Max — ensuring a crisp, sharp image on any modern smartphone. They are completely free to download, with no account or email required. Simply choose your verse, pick a color theme, and tap Download.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-8 mb-5">
                About Our Catholic Wallpaper Designs
              </h2>
              <div className="space-y-4 text-text-muted text-sm leading-relaxed">
                <p>
                  Each <strong className="text-text">Catholic lockscreen</strong> is generated in real time using HTML5 Canvas — no images are stored on our servers. The design includes a decorative cross, the verse text in an elegant serif font, the Scripture reference, a themed color tag, and the Guide Catholic watermark. The result is a clean, beautiful wallpaper that looks professional on any phone screen.
                </p>
                <p>
                  We offer 8 color themes: <strong className="text-text">Deep Blue</strong> (inspired by Our Lady's mantle), <strong className="text-text">Royal Purple</strong> (the color of Advent and Lent), <strong className="text-text">Sacred Gold</strong> (for solemnities and feasts), <strong className="text-text">Forest Green</strong> (Ordinary Time), <strong className="text-text">Crimson</strong> (for martyrs and the Holy Spirit), <strong className="text-text">Midnight</strong> (for contemplative prayer), <strong className="text-text">Rose</strong> (Gaudete and Laetare Sundays), and <strong className="text-text">Slate</strong> (for peace and the Holy Spirit as dove).
                </p>
                <p>
                  The 100 Scripture passages are drawn from the Psalms, the Gospels, the Letters of Saint Paul, and the prophets — covering themes of strength, peace, love, faith, hope, courage, prayer, and the Eucharist. New verses and themes will be added regularly.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12 max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-text mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-accent" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-surface border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/5 transition-colors"
                    >
                      <span className="font-semibold text-text text-sm pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-sm text-text-muted leading-relaxed border-t border-border pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <ArticleBottomCTA
              title="How deep is your Catholic life?"
              description="A lockscreen is a start. Discover how you're living across all 5 areas of Catholic life with our free 30-question assessment."
            />

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
