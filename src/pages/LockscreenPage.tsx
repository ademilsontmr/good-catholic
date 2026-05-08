import { useState, useRef, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, Smartphone, RefreshCw, ChevronLeft, ChevronRight, Cross, Sparkles, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  return (
    <>
      <Helmet>
        <title>Catholic Lockscreen Wallpapers — Free Download | Guide Catholic</title>
        <meta name="description" content="Download beautiful Catholic lockscreen wallpapers for your phone. Bible verses, prayers, and sacred art — free, high-resolution, ready to set as your wallpaper." />
        <link rel="canonical" href="https://guidecatholic.com/lockscreen/" />
        <meta name="robots" content="index, follow" />
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
                  <p className="text-sm text-text-muted mb-4">20 carefully selected Scripture passages.</p>
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
                { icon: BookOpen, title: "20 Verses · 8 Styles", body: "Mix and match to find the combination that speaks to your heart. Change it whenever you need a new word." },
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

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Go deeper in your faith
              </div>
              <h3 className="font-display text-2xl font-bold text-text mb-3">How deep is your Catholic life?</h3>
              <p className="text-text-muted mb-6 max-w-md mx-auto text-sm">
                A lockscreen is a start. Discover how you're living across all 5 areas of Catholic life with our free 30-question assessment.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text font-semibold">
                  Take the Catholic Life Assessment
                </Button>
              </Link>
              <p className="text-xs text-text-muted mt-3">30 questions · 10 minutes · Free personalized guide</p>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
