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

export default function CatholicPrayerForMarriage() {
  return (
    <>
      <Helmet>
        <title>Catholic Prayers for Marriage: For Your Spouse, Your Family & Troubled Marriages | Guide Catholic</title>
        <meta name="description" content="Powerful Catholic prayers for marriage — for your spouse, for a troubled marriage, for a future spouse, and for the grace to live the sacrament of matrimony faithfully." />
        <meta name="keywords" content="catholic prayer for marriage, prayer for spouse catholic, prayer for troubled marriage, prayer for future spouse catholic, catholic marriage prayer, prayer for husband wife catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-prayer-for-marriage/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Prayers for Marriage: For Your Spouse, Your Family & Troubled Marriages"
        description="Powerful Catholic prayers for marriage — for your spouse, for a troubled marriage, for a future spouse, and for the grace to live the sacrament of matrimony faithfully."
        url="https://guidecatholic.com/blog/catholic-prayer-for-marriage/"
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
              <span className="text-text">Catholic Prayers for Marriage</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer & Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Prayers for Marriage: For Your Spouse, Your Family & Troubled Marriages
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Marriage is a sacrament — a living sign of Christ's love for the Church. Prayer is the lifeblood of every Catholic marriage. Whether your marriage is flourishing or struggling, these prayers will help you bring God into the heart of your home.
              </p>
            </header>
            <div className="aspect-video bg-pink-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-pink-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                The Catholic Church teaches that marriage is one of the seven sacraments — not merely a legal contract or a social institution, but a sacred covenant in which husband and wife become a living sign of Christ's faithful, fruitful, and self-giving love for the Church. This means that every Catholic marriage is, at its core, a vocation — a calling from God that requires His grace to live well.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                Prayer is not optional for a Catholic marriage. It is the oxygen that keeps the sacrament alive. When couples pray together — and for each other — they invite God into the most intimate dimensions of their life together. Research consistently shows that couples who pray together have significantly lower divorce rates and higher levels of marital satisfaction. But more than statistics, prayer transforms marriage from the inside out.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Daily Prayer for a Married Couple</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                This prayer can be prayed together each morning or evening as a couple:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">A Daily Prayer for Married Couples</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Lord Jesus Christ, You who blessed the wedding at Cana with Your presence and Your first miracle, bless our marriage today. You have called us to love each other as You love the Church — with a love that is free, total, faithful, and fruitful. Give us the grace to live this calling. When we are patient, let it be Your patience. When we forgive, let it be Your forgiveness. When we love, let it be Your love flowing through us. Protect our marriage from every attack of the enemy. Strengthen what is weak. Heal what is wounded. Deepen what is good. May our home be a domestic church — a place where You are known, loved, and served. We consecrate our marriage to You, Lord, and to the Immaculate Heart of Mary. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer for Your Spouse</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                One of the most powerful things a spouse can do is pray for their partner — not just in general, but specifically, naming their needs, struggles, and gifts before God:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer for a Husband or Wife</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Heavenly Father, I thank You for the gift of my spouse. You knew them before they were born, and You placed them in my life as a sign of Your love for me. I lift them to You now. Bless them in their work, their health, and their spirit. Where they are weary, give them rest. Where they are discouraged, give them hope. Where they are tempted, give them strength. Help me to see them as You see them — with eyes of love and mercy. Give me the grace to be the spouse they need, not the spouse I think they should have. May our love for each other be a reflection of Your love for us. Through Christ our Lord. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer for a Troubled Marriage</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                Every marriage goes through difficult seasons. When a marriage is in crisis — whether from conflict, infidelity, addiction, or simply the slow erosion of intimacy — prayer is the first and most essential response:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer for a Marriage in Crisis</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Lord God, our marriage is in pain. We have hurt each other. We have grown distant. We have forgotten the promises we made before You and Your Church. But You are the God who restores what is broken. You are the God who makes all things new. We come to You in our weakness and ask for Your healing. Soften our hearts toward each other. Remove the bitterness, the resentment, and the pride that have taken root between us. Give us the courage to forgive and the humility to ask for forgiveness. Send Your Holy Spirit into our home. Remind us of the love that brought us together and the covenant that binds us still. We do not ask for an easy marriage — we ask for a holy one. Help us to fight for our marriage, not against each other. Through the intercession of the Holy Family of Nazareth, we ask this in the name of Jesus Christ. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer for a Future Spouse (For Singles)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                For those who are single and discerning marriage, prayer for a future spouse is a beautiful and powerful practice. It prepares the heart for the gift of marriage and entrusts the search to God:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer for a Future Spouse</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Lord Jesus, You know the desires of my heart. You know my longing for a spouse — someone to love and be loved by, someone to build a life and a family with, someone to walk with toward heaven. I entrust this desire to You. If it is Your will that I marry, I ask You to prepare both me and the person You have chosen for me. Purify my heart. Heal my wounds. Help me to become the person my future spouse needs me to be. And wherever they are right now, Lord — bless them. Protect them. Draw them closer to You. May we find each other in Your time and in Your way. Until then, help me to be faithful to You in this season of waiting. Through the intercession of Our Lady and St. Joseph, I ask this in Your holy name. Amen.
                </p>
              </div>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in prayer, virtue, and the sacramental life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer of St. Francis de Sales for Married Couples</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                St. Francis de Sales (1567–1622), Doctor of the Church and patron of writers, had a profound understanding of the spiritual life of married people. His Introduction to the Devout Life contains some of the most beautiful Catholic teaching on marriage. This prayer is inspired by his spirituality:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer Inspired by St. Francis de Sales</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  O God of love, You have given us to each other as companions on the road to heaven. Help us to be patient with each other's faults, as You are patient with ours. Help us to encourage each other's virtues, as You encourage ours. May we never wound each other with harsh words or cold indifference. May we always seek to serve rather than to be served, to give rather than to receive, to love rather than to be loved. And when we fail — as we will — may we be quick to ask forgiveness and quick to grant it. St. Francis de Sales, patron of gentle hearts, pray for us. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Novena for a Marriage in Difficulty</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                A novena is nine days of prayer for a specific intention. This novena can be prayed by one or both spouses when a marriage is facing serious difficulties:
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Nine-Day Novena for a Troubled Marriage</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  (Pray this prayer each day for nine days)<br /><br />
                  Holy Family of Nazareth — Jesus, Mary, and Joseph — you are the model of every Christian family. You knew poverty, exile, misunderstanding, and loss. Yet your home was filled with love, prayer, and trust in God. Look upon our marriage in its difficulty. Intercede for us before the throne of God. Ask Jesus, who worked His first miracle at a wedding, to work a miracle in ours. Ask Mary, who noticed the need at Cana and brought it to her Son, to notice our need and bring it to Him. Ask Joseph, the just and faithful husband, to intercede for faithfulness and strength in our marriage. We trust in God's power to restore what is broken and to make all things new. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Importance of Praying Together</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                Many couples find it difficult to pray together. It can feel awkward, vulnerable, or forced — especially if one spouse is more devout than the other. But the effort is worth it. Praying together as a couple is one of the most intimate acts a husband and wife can share. It requires vulnerability, honesty, and a willingness to be seen by God and by each other.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                Simple ways to begin praying together include:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Praying grace before meals together</li>
                <li>Praying a decade of the Rosary together before bed</li>
                <li>Reading the daily Mass readings together in the morning</li>
                <li>Ending each day with a brief prayer of thanksgiving and intercession</li>
                <li>Attending daily Mass together when possible</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Role of the Sacraments in Marriage</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayer-for-marriage">
                Prayer is essential, but it does not stand alone. The Catholic tradition offers two sacraments that are particularly powerful for strengthening marriage:
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                <strong>The Eucharist</strong> is the source and summit of the Christian life. When a husband and wife receive Communion together, they are united not only to each other but to Christ Himself. The Eucharist nourishes the love that marriage requires — a love that is self-giving, sacrificial, and unconditional.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confession</strong> is the sacrament of healing. Every marriage accumulates wounds — small hurts, unresolved conflicts, patterns of sin that erode intimacy. Regular confession — ideally monthly — brings the healing grace of Christ into these wounds. Many marriage counselors, both Catholic and secular, note that the willingness to acknowledge fault and seek forgiveness is one of the strongest predictors of marital health.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The family that prays together stays together."
                </p>
                <p className="text-text-muted text-center mt-2">— Venerable Patrick Peyton, C.S.C.</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the best Catholic prayer for a troubled marriage?", answer: "The Novena to the Holy Family is one of the most powerful Catholic prayers for a troubled marriage. Praying to Jesus, Mary, and Joseph — who themselves faced hardship and uncertainty — invites the intercession of the model family. The prayer for a marriage in crisis included in this article can also be prayed daily. Most importantly, bring your marriage to Mass and to confession regularly." },
              { question: "Should Catholic couples pray together?", answer: "Yes — praying together is one of the most important spiritual practices for a Catholic marriage. It builds intimacy, invites God into the relationship, and provides a shared foundation of faith. Start small: grace before meals, a decade of the Rosary, or a brief prayer before bed. The key is consistency, not length or complexity." },
              { question: "Can I pray for my spouse if they are not Catholic or not practicing?", answer: "Absolutely. Praying for a spouse who does not share your faith — or who has drifted from it — is a powerful act of love. You cannot force another person's faith, but you can intercede for them before God. Many Catholics have seen their spouses return to the faith or come to faith through years of faithful, patient prayer." },
              { question: "What saints should I pray to for my marriage?", answer: "Several saints are particularly associated with marriage and family life: St. Joseph (patron of families), St. Monica (who prayed for her wayward son Augustine for years), St. Rita of Cascia (patron of impossible causes, including difficult marriages), St. Thomas More (patron of families), and the Holy Family of Jesus, Mary, and Joseph. Our Lady of Guadalupe is also invoked for family protection." },
              { question: "How can I pray for a future spouse?", answer: "Praying for a future spouse is a beautiful practice for single Catholics discerning marriage. Pray for their holiness, their healing, and their preparation for marriage. Entrust the timing and the finding to God. Many Catholics also make a novena to St. Joseph or St. Anne and St. Joachim (the parents of Mary) when seeking a spouse. The key is to pray with trust, not anxiety — God knows your needs." },
            ]} />

            <RelatedArticles currentSlug="catholic-prayer-for-marriage" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in prayer, virtue, and the sacramental life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
