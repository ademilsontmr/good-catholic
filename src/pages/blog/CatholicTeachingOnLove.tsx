import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicTeachingOnLove() {
  return (
    <>
      <Helmet>
        <title>What Is Love? The Catholic Understanding of Eros, Philia, and Agape | Guide Catholic</title>
        <meta name="description" content="What does love really mean? Discover the Catholic understanding of eros, philia, and agape — and why Pope Benedict XVI said they are not opposites but complementary." />
        <meta name="keywords" content="what is love catholic, eros philia agape catholic, deus caritas est, love of god catholic, types of love catholic, benedict xvi love encyclical" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-love-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="What Is Love? The Catholic Understanding of Eros, Philia, and Agape"
        description="What does love really mean? Discover the Catholic understanding of eros, philia, and agape — and why Pope Benedict XVI said they are not opposites but complementary."
        url="https://guidecatholic.com/blog/what-is-love-catholic/"
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
              <span className="text-text">What Is Love? Catholic Understanding</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 25, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is Love? The Catholic Understanding of Eros, Philia, and Agape
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                "God is love" (1 John 4:8). Three words that contain the whole of Christian revelation. But what does love actually mean? In a culture that uses the word to describe everything from romantic passion to a preference for pizza, the Catholic tradition offers a rich, nuanced, and ultimately transformative answer.
              </p>
            </header>
            <div className="aspect-video bg-pink-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-pink-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The English word "love" is notoriously imprecise. We love our spouses, our children, our friends, our country, our favorite sports team, and our morning coffee — all with the same word. The ancient Greeks were more precise. They had at least three distinct words for love, each capturing a different dimension of this most fundamental of human experiences: <em>eros</em>, <em>philia</em>, and <em>agape</em>. The Catholic tradition has drawn on all three to articulate a comprehensive theology of love that is both intellectually rigorous and spiritually transformative.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Three Greek Words for Love</h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Eros</strong> is the love of desire and passion — the love that reaches out toward beauty, that longs for union with what it finds good and beautiful. In its most familiar form, it is romantic and erotic love — the love between a man and a woman that draws them toward each other and toward the creation of new life. But eros is broader than sexuality: it is the fundamental human capacity for desire, for longing, for being drawn out of oneself toward something greater.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Philia</strong> is the love of friendship — the love between equals who share common values, common pursuits, and mutual goodwill. Aristotle devoted two entire books of his <em>Nicomachean Ethics</em> to friendship, calling it "one of the most indispensable requirements of life." Philia is the love that says: "I delight in who you are. I want good things for you. I enjoy your company and your conversation." It is less intense than eros but perhaps more durable — the love that sustains long marriages, deep friendships, and genuine community.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Agape</strong> is the love that gives without counting the cost — the love that wills the good of the other regardless of what it receives in return. It is the love that God has for us: unconditional, self-giving, sacrificial. In the New Testament, agape is the word used almost exclusively for God's love and for the love that Christians are called to have for one another and for their enemies. It is not primarily a feeling but a choice — a commitment of the will to seek the good of the other.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Pope Benedict XVI's Deus Caritas Est</h2>
              <p className="text-text leading-relaxed mb-6">
                In 2005, Pope Benedict XVI issued his first encyclical, <em>Deus Caritas Est</em> ("God Is Love") — one of the most beautiful and intellectually rich documents in recent Church history. Its central argument is that eros and agape are not opposites but complementary dimensions of a single reality called love.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                Benedict challenged a common assumption in Christian thought — that eros (desire, passion, the love that seeks its own fulfillment) is somehow opposed to agape (self-giving, sacrificial love). Some Christian thinkers, influenced by the Swedish theologian Anders Nygren, had argued that eros and agape are fundamentally incompatible: eros is selfish and ascending (seeking its own good), while agape is selfless and descending (giving without receiving). On this view, Christianity should suppress eros in favor of agape.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                Benedict rejected this dichotomy. "Eros and agape," he wrote, "can never be completely separated. The more the two, in their different aspects, find a proper unity in the one reality of love, the more the true nature of love in general is realized." Eros, purified and elevated, becomes agape. The passionate desire for the beloved is not suppressed but transformed — from a love that seeks its own fulfillment to a love that gives itself freely for the good of the other.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Eros: The Goodness of Romantic Love</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                The Catholic tradition has never been hostile to eros. The Song of Songs — a book of erotic poetry celebrating the love between a man and a woman — is part of the inspired Scripture. The Church has always taught that the body is good, that sexual love within marriage is holy, and that the desire for union with another person reflects something deep and true about the human condition.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                What the tradition insists on is not the suppression of eros but its purification and elevation. Eros, left to itself, tends toward possession — toward treating the beloved as an object of desire rather than a subject to be loved. Purified eros becomes a love that desires the good of the beloved, that is willing to sacrifice its own satisfaction for the other's flourishing. This is why the Church connects eros so closely to marriage and fidelity: the commitment of marriage is the structure within which eros can be purified and elevated into something truly beautiful.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Philia: The Beauty of Friendship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                Aristotle distinguished three kinds of friendship: friendships of utility (we are friends because we are useful to each other), friendships of pleasure (we are friends because we enjoy each other's company), and friendships of virtue (we are friends because we admire and share each other's goodness). Only the third kind, he argued, is true friendship — the others are merely instrumental.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                Saint Thomas Aquinas, building on Aristotle, argued that charity — the theological virtue of love for God and neighbor — is itself a form of friendship. We are not merely servants of God; we are his friends. Jesus himself said: "I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends" (John 15:15). This is a staggering claim: the eternal God desires friendship with his creatures.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                The Catholic tradition has always valued friendship as a genuine form of love and a path to holiness. The great friendships of the saints — Francis and Clare, Teresa of Ávila and John of the Cross, Francis de Sales and Jane de Chantal — were not distractions from the spiritual life but expressions of it. True friendship, rooted in shared love of God, is one of the greatest gifts of human life.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in the theological virtues of faith, hope, and love."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Agape: The Highest Love</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                Agape is the love that defines God himself. "God is love" (1 John 4:8) — not merely that God loves, but that love is what God is. The entire history of salvation is the story of God's agape: his unconditional, self-giving love for a humanity that repeatedly turns away from him. "God demonstrates his own love for us in this: While we were still sinners, Christ died for us" (Romans 5:8).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                Agape is not primarily a feeling — it is a choice, a commitment, an act of the will. This is why Jesus can command it: "Love your enemies and pray for those who persecute you" (Matthew 5:44). You cannot command a feeling, but you can command a choice. Agape is the decision to will the good of the other — even when the other is hostile, undeserving, or unknown to you.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                Saint Paul's great hymn to love in 1 Corinthians 13 is a description of agape: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." This is not a description of a feeling but of a way of acting — a consistent orientation of the will toward the good of the other.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Theology of the Body</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                Pope John Paul II's Theology of the Body — a series of 129 Wednesday audiences delivered between 1979 and 1984 — is the most comprehensive Catholic reflection on human love and sexuality ever produced. Its central insight is that the human body is not merely a biological organism but a "theology" — a visible sign of invisible spiritual realities.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                The body, John Paul argued, is made for the "gift of self." The sexual difference between man and woman is not merely biological but theological: it is a sign of the complementarity and mutual self-giving that characterizes love at its deepest level. The marital act, when it expresses genuine self-giving love, is a participation in the very love of God — a bodily enactment of the total gift of self that agape requires.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                This is why the Church's teaching on sexuality is not a series of prohibitions but a positive vision: the body is good, love is good, and the sexual expression of love within marriage is a participation in the divine life. The prohibitions — against pornography, fornication, adultery, contraception — are not arbitrary restrictions but protections of this vision against its distortion.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Love and the Cross</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                The ultimate definition of love in the Catholic tradition is the Cross. "Greater love has no one than this: to lay down one's life for one's friends" (John 15:13). Jesus did not merely teach about love — he enacted it in the most radical way possible, giving his life for those who had rejected him.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                The Cross is the definitive answer to the question "What is love?" It is not a feeling, not a transaction, not a mutual benefit arrangement. It is the total gift of self — even unto death — for the good of the beloved. Every other form of love — eros, philia, agape — finds its ultimate meaning and its ultimate model in the Cross.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                This is why the Catholic tradition has always insisted that love is inseparable from sacrifice. To love is to give — to give time, attention, energy, comfort, and ultimately oneself. The measure of love is not the intensity of the feeling but the depth of the gift.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Grow in Love</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-love-catholic">
                The Catholic tradition offers concrete paths for growing in love:
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                <strong>The sacraments.</strong> The Eucharist is the sacrament of love par excellence — the Body and Blood of Christ given for us, received by us, transforming us into what we receive. Regular reception of the Eucharist, and the preparation and thanksgiving that surround it, is the primary school of love.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Prayer.</strong> We cannot love what we do not know. Prayer — especially contemplative prayer, in which we simply rest in God's presence — deepens our knowledge of God's love for us and our capacity to love in return. "We love because he first loved us" (1 John 4:19).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Service.</strong> Love is not merely a feeling or a conviction — it is an action. The works of mercy — feeding the hungry, clothing the naked, visiting the sick and imprisoned — are not optional extras for the spiritually advanced. They are the ordinary expression of Christian love in the world.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "God is love, and he who abides in love abides in God, and God abides in him."
                </p>
                <p className="text-text-muted text-center mt-2">— 1 John 4:16</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What are the three Greek words for love?", answer: "The three Greek words for love are eros (passionate, romantic love — the love of desire and longing), philia (friendship love — the love between equals who share common values and mutual goodwill), and agape (self-giving, unconditional love — the love that wills the good of the other regardless of what it receives in return). The Catholic tradition draws on all three to articulate a comprehensive theology of love." },
              { question: "What is Deus Caritas Est?", answer: "Deus Caritas Est ('God Is Love') is the first encyclical of Pope Benedict XVI, issued in 2005. Its central argument is that eros and agape are not opposites but complementary dimensions of a single reality called love. Benedict challenged the view that Christianity should suppress eros in favor of agape, arguing instead that eros, purified and elevated, becomes agape — the passionate desire for the beloved is transformed into a love that gives itself freely for the good of the other." },
              { question: "What is agape love in Catholic teaching?", answer: "Agape is the highest form of love in Catholic teaching — the self-giving, unconditional love that wills the good of the other regardless of what it receives in return. It is the love that God has for us, demonstrated most fully in the Cross. Unlike eros (which is primarily a feeling) or philia (which requires mutuality), agape is primarily a choice — a commitment of the will to seek the good of the other, even at great personal cost." },
              { question: "What is the Theology of the Body?", answer: "The Theology of the Body is a series of 129 Wednesday audiences delivered by Pope John Paul II between 1979 and 1984, constituting the most comprehensive Catholic reflection on human love and sexuality ever produced. Its central insight is that the human body is a 'theology' — a visible sign of invisible spiritual realities. The body is made for the 'gift of self,' and the sexual difference between man and woman is a sign of the complementarity and mutual self-giving that characterizes love at its deepest level." },
              { question: "How does the Catholic Church define love?", answer: "The Catholic Church defines love most fully in terms of agape — the self-giving love modeled on God's love for us and definitively expressed in the Cross. Love is not primarily a feeling but a choice: the decision to will the good of the other. This love encompasses eros (purified romantic desire), philia (genuine friendship), and agape (unconditional self-giving), all of which find their ultimate meaning and model in Christ's sacrifice on the Cross." },
            ]} />

            <RelatedArticles currentSlug="what-is-love-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in the theological virtues and deepening your understanding of Catholic doctrine.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
