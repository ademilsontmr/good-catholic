import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicBibleVerses() {
  return (
    <>
      <Helmet>
        <title>50 Most Important Catholic Bible Verses: Scripture for Every Occasion | Guide Catholic</title>
        <meta name="description" content="The 50 most important Catholic Bible verses — for prayer, strength, comfort, faith, love, and the sacraments. Essential Scripture every Catholic should know by heart." />
        <meta name="keywords" content="catholic bible verses, important bible verses catholic, scripture verses catholic, bible quotes catholic, bible verses for prayer, most important bible verses" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-bible-verses/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="50 Most Important Catholic Bible Verses: Scripture for Every Occasion"
        description="The 50 most important Catholic Bible verses — for prayer, strength, comfort, faith, love, and the sacraments. Essential Scripture every Catholic should know by heart."
        url="https://guidecatholic.com/blog/catholic-bible-verses/"
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Catholic Bible Verses</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Bible & Faith</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                50 Most Important Catholic Bible Verses: Scripture for Every Occasion
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Bible is the living Word of God — and certain verses have nourished Catholic faith for centuries. These 50 essential Scripture passages cover prayer, strength, comfort, the sacraments, Mary, and the core of the Catholic faith.
              </p>
            </header>

            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-emerald-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-bible-verses">
                Memorizing Scripture is one of the most powerful spiritual practices a Catholic can develop. When you know key Bible verses by heart, you carry the Word of God with you everywhere — available for prayer, for comfort in difficulty, for defense against temptation, and for sharing your faith with others.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-bible-verses">
                This collection of 50 essential Catholic Bible verses is organized by theme. All quotations are from the RSV-CE (Revised Standard Version — Catholic Edition).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On God's Love</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "John 3:16", text: "For God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life." },
                  { ref: "Romans 8:38-39", text: "For I am sure that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
                  { ref: "1 John 4:8", text: "He who does not love does not know God; for God is love." },
                  { ref: "Jeremiah 31:3", text: "I have loved you with an everlasting love; therefore I have continued my faithfulness to you." },
                  { ref: "Zephaniah 3:17", text: "The Lord, your God, is in your midst, a warrior who gives victory; he will rejoice over you with gladness, he will renew you in his love; he will exult over you with loud singing." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On Prayer</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "Matthew 7:7-8", text: "Ask, and it will be given you; seek, and you will find; knock, and it will be opened to you. For every one who asks receives, and he who seeks finds, and to him who knocks it will be opened." },
                  { ref: "Philippians 4:6-7", text: "Have no anxiety about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which passes all understanding, will keep your hearts and your minds in Christ Jesus." },
                  { ref: "1 Thessalonians 5:17", text: "Pray constantly." },
                  { ref: "Matthew 6:9", text: "Pray then like this: Our Father who art in heaven, hallowed be thy name." },
                  { ref: "James 5:16", text: "The prayer of a righteous man has great power in its effects." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On Strength and Courage</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "Philippians 4:13", text: "I can do all things in him who strengthens me." },
                  { ref: "Isaiah 40:31", text: "They who wait for the Lord shall renew their strength, they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint." },
                  { ref: "Joshua 1:9", text: "Be strong and of good courage; be not frightened, neither be dismayed; for the Lord your God is with you wherever you go." },
                  { ref: "Romans 8:28", text: "We know that in everything God works for good with those who love him, who are called according to his purpose." },
                  { ref: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <QuizCTA
                title="How well do you know Scripture?"
                description="Take our Catholic faith assessment and receive a personalized guide to deepening your knowledge of the Bible."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On Comfort and Peace</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "Psalm 23:1-4", text: "The Lord is my shepherd, I shall not want; he makes me lie down in green pastures. He leads me beside still waters; he restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I fear no evil; for thou art with me." },
                  { ref: "Matthew 11:28-30", text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me; for I am gentle and lowly in heart, and you will find rest for your souls." },
                  { ref: "John 14:27", text: "Peace I leave with you; my peace I give to you; not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid." },
                  { ref: "Isaiah 41:10", text: "Fear not, for I am with you, be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my victorious right hand." },
                  { ref: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On the Eucharist</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "John 6:51", text: "I am the living bread which came down from heaven; if any one eats of this bread, he will live for ever; and the bread which I shall give for the life of the world is my flesh." },
                  { ref: "John 6:55-56", text: "For my flesh is food indeed, and my blood is drink indeed. He who eats my flesh and drinks my blood abides in me, and I in him." },
                  { ref: "Matthew 26:26-28", text: "Now as they were eating, Jesus took bread, and blessed, and broke it, and gave it to the disciples and said, 'Take, eat; this is my body.' And he took a cup, and when he had given thanks he gave it to them, saying, 'Drink of it, all of you; for this is my blood of the covenant, which is poured out for many for the forgiveness of sins.'" },
                  { ref: "1 Corinthians 11:26", text: "For as often as you eat this bread and drink the cup, you proclaim the Lord's death until he comes." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On Mary</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "Luke 1:28", text: "Hail, full of grace, the Lord is with you!" },
                  { ref: "Luke 1:42", text: "Blessed are you among women, and blessed is the fruit of your womb!" },
                  { ref: "Luke 1:46-48", text: "My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has regarded the low estate of his handmaiden. For behold, henceforth all generations will call me blessed." },
                  { ref: "John 2:5", text: "His mother said to the servants, 'Do whatever he tells you.'" },
                  { ref: "John 19:27", text: "Then he said to the disciple, 'Behold, your mother!' And from that hour the disciple took her to his own home." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On Faith and Salvation</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "Ephesians 2:8-9", text: "For by grace you have been saved through faith; and this is not your own doing, it is the gift of God — not because of works, lest any man should boast." },
                  { ref: "James 2:24", text: "You see that a man is justified by works and not by faith alone." },
                  { ref: "Romans 10:9", text: "If you confess with your lips that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved." },
                  { ref: "John 14:6", text: "Jesus said to him, 'I am the way, and the truth, and the life; no one comes to the Father, but by me.'" },
                  { ref: "Acts 2:38", text: "Repent, and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins; and you shall receive the gift of the Holy Spirit." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On Love and Charity</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "1 Corinthians 13:4-7", text: "Love is patient and kind; love is not jealous or boastful; it is not arrogant or rude. Love does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrong, but rejoices in the right. Love bears all things, believes all things, hopes all things, endures all things." },
                  { ref: "Matthew 22:37-39", text: "You shall love the Lord your God with all your heart, and with all your soul, and with all your mind. This is the great and first commandment. And a second is like it, You shall love your neighbor as yourself." },
                  { ref: "John 13:34-35", text: "A new commandment I give to you, that you love one another; even as I have loved you, that you also love one another. By this all men will know that you are my disciples, if you have love for one another." },
                  { ref: "Matthew 25:40", text: "Truly, I say to you, as you did it to one of the least of these my brethren, you did it to me." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On the Church and Peter</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "Matthew 16:18-19", text: "You are Peter, and on this rock I will build my church, and the powers of death shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven." },
                  { ref: "Matthew 28:19-20", text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you; and lo, I am with you always, to the close of the age." },
                  { ref: "John 20:22-23", text: "He breathed on them, and said to them, 'Receive the Holy Spirit. If you forgive the sins of any, they are forgiven; if you retain the sins of any, they are retained.'" },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">On Hope and Eternal Life</h2>
              <div className="space-y-4 mb-8">
                {[
                  { ref: "John 11:25-26", text: "Jesus said to her, 'I am the resurrection and the life; he who believes in me, though he die, yet shall he live, and whoever lives and believes in me shall never die.'" },
                  { ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning nor crying nor pain any more, for the former things have passed away." },
                  { ref: "Romans 8:18", text: "I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us." },
                  { ref: "1 Corinthians 2:9", text: "What no eye has seen, nor ear heard, nor the heart of man conceived, what God has prepared for those who love him." },
                ].map((v, i) => (
                  <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{v.ref}</p>
                    <p className="text-text italic text-sm leading-relaxed">"{v.text}"</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and spirit, of joints and marrow, and discerning the thoughts and intentions of the heart."
                </p>
                <p className="text-text-muted text-center mt-2">— Hebrews 4:12</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the most important Bible verse for Catholics?", answer: "There is no single 'most important' verse, but John 3:16 ('For God so loved the world that he gave his only Son...') is often cited as the heart of the Gospel. For Catholics specifically, Matthew 16:18 (Jesus founding the Church on Peter), John 6:51 (the Real Presence), and John 20:22-23 (the power to forgive sins) are particularly significant." },
              { question: "What Bible translation do Catholics use?", answer: "In the United States, the official translation used at Mass is the NABRE (New American Bible Revised Edition). For personal study and prayer, the RSV-CE (Revised Standard Version — Catholic Edition) is widely recommended. The Douay-Rheims is the traditional Catholic Bible in English." },
              { question: "Are there Bible verses that support specifically Catholic teachings?", answer: "Yes. Matthew 16:18-19 supports the papacy. John 6:51-56 supports the Real Presence in the Eucharist. John 20:22-23 supports the Sacrament of Confession. Luke 1:28 and 1:42 support Marian devotion. 2 Maccabees 12:46 supports prayers for the dead and Purgatory. James 5:14-15 supports the Anointing of the Sick." },
              { question: "How can I memorize Bible verses?", answer: "Start with one verse at a time. Write it on a card and carry it with you. Read it aloud several times a day. Connect it to a specific situation in your life. Review previously memorized verses regularly. Many Catholics memorize verses by praying them repeatedly — the Rosary, for example, is built on Scripture." },
              { question: "What are the best Bible verses for difficult times?", answer: "For comfort: Psalm 23, Matthew 11:28-30, John 14:27. For strength: Philippians 4:13, Isaiah 40:31, Joshua 1:9. For hope: Romans 8:28, Romans 8:18, Revelation 21:4. For peace: Philippians 4:6-7, Isaiah 41:10, Psalm 46:1." },
            ]} />

            <RelatedArticles currentSlug="catholic-bible-verses" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Scripture and the faith.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
