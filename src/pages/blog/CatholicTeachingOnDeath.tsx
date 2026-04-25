import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Moon, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicTeachingOnDeath() {
  return (
    <>
      <Helmet>
        <title>Catholic Teaching on Death: What Happens When We Die? | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about death? The Four Last Things, the Particular Judgment, the resurrection of the body, and how to prepare for a holy death." />
        <meta name="keywords" content="catholic teaching on death, what happens when you die catholic, death and afterlife catholic, particular judgment catholic, four last things catholic, preparing for death catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-teaching-on-death/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Teaching on Death: What Happens When We Die?"
        description="What does the Catholic Church teach about death? The Four Last Things, the Particular Judgment, the resurrection of the body, and how to prepare for a holy death."
        url="https://guidecatholic.com/blog/catholic-teaching-on-death/"
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
              <span className="text-text">Catholic Teaching on Death</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Teaching on Death: What Happens When We Die?
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Death is the most certain fact of human life — and the one we most avoid thinking about. The Catholic Church invites us to face it honestly, because only by understanding death can we understand how to live.
              </p>
            </header>
            <div className="aspect-video bg-slate-50 rounded-2xl flex items-center justify-center mb-10">
              <Moon className="w-24 h-24 text-slate-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Every human being will die. This is not a morbid observation — it is the starting point of wisdom. The ancient Romans said <em>memento mori</em>: "remember that you will die." The Catholic tradition has always taken this seriously, not to produce despair, but to produce clarity. When we know that our time is limited, we begin to ask the right questions: What is life for? What happens after? How should I live?
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The Catholic Church has a rich, coherent, and deeply consoling teaching on death and what follows. It is not a teaching of fear, but of hope — grounded in the resurrection of Jesus Christ, who conquered death and opened the way to eternal life.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Death Is Not the End: The Catholic Vision (CCC 1006–1014)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The Catechism of the Catholic Church teaches that death is not the annihilation of the person but a passage — a transition from this life to the next. "It is in regard to death that man's condition is most shrouded in doubt" (CCC 1006), and yet faith illuminates what reason alone cannot fully grasp.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The Church teaches that death entered the world as a consequence of original sin (CCC 1008). God did not create death; He created us for life. But through the disobedience of our first parents, death became part of the human condition. And yet, in His mercy, God transformed death: through the death and resurrection of Jesus Christ, death is no longer the final word. "Christ transformed the curse of death into a blessing" (CCC 1009).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                For the Christian, death is not something to be feared but something to be prepared for — and ultimately, something to be embraced as the doorway to eternal life. Saint Francis of Assisi called death "Sister Death." Saint Paul wrote: "For to me, to live is Christ and to die is gain" (Philippians 1:21).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Four Last Things</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The traditional Catholic meditation on death is organized around the Four Last Things: Death, Judgment, Heaven, and Hell. This framework comes from the book of Sirach: "In all you do, remember the end of your life, and then you will never sin" (Sirach 7:36). The Four Last Things are not meant to terrify but to orient — to keep our eyes fixed on what truly matters.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Death</strong> — the separation of the soul from the body; the end of our earthly pilgrimage and the moment of our definitive choice for or against God.</li>
                <li><strong>Judgment</strong> — the accounting of our lives before God; both the Particular Judgment immediately after death and the General Judgment at the end of time.</li>
                <li><strong>Heaven</strong> — the eternal communion with God, the fulfillment of every human longing, the beatific vision.</li>
                <li><strong>Hell</strong> — the eternal separation from God, chosen freely by those who definitively reject His love.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                Meditating on the Four Last Things is not pessimism — it is realism in the service of hope. When we remember that this life is not all there is, we are freed from the tyranny of the present moment and empowered to live for what is eternal.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Happens at the Moment of Death</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                At the moment of death, the soul separates from the body. The body returns to the earth; the soul enters into the presence of God for judgment. This is not the end of the person — the Catholic faith holds that the soul is immortal and that the body will one day be reunited with the soul at the resurrection of the dead.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The moment of death is also the moment of our definitive choice. Throughout our lives, we have been forming ourselves — through our choices, our loves, our habits — either toward God or away from Him. At death, that formation becomes fixed. The Church teaches that "death puts an end to human life as the time open to either accepting or rejecting the divine grace manifested in Christ" (CCC 1021). There is no second chance after death, no reincarnation, no opportunity to change our fundamental orientation.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                This is why the Church urges us to live well now — not out of fear, but out of love. Every day is a gift; every moment is an opportunity to grow in holiness and to deepen our relationship with God.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your knowledge of Catholic teaching on the last things and eternal life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Particular Judgment (CCC 1021–1022)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                Immediately after death, each soul undergoes the Particular Judgment. This is not a courtroom drama but an encounter with Truth itself — with Jesus Christ, who is "the way, the truth, and the life" (John 14:6). In that encounter, the soul sees itself as it truly is: its loves, its sins, its growth in holiness, its failures.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The Catechism teaches: "Each man receives his eternal retribution in his immortal soul at the very moment of his death, in a particular judgment that refers his life to Christ: either entrance into the blessedness of heaven — through a purification or immediately — or immediate and everlasting damnation" (CCC 1022).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The Particular Judgment is not arbitrary. It is the revelation of what we have already chosen. God does not condemn anyone who has not first condemned themselves by their own free choices. His judgment is perfectly just and perfectly merciful — and the two are not in contradiction.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Three Possible Outcomes: Heaven, Purgatory, Hell</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                After the Particular Judgment, the soul enters one of three states:
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                <strong>Heaven</strong> is the eternal communion with God — the beatific vision, the direct knowledge and love of God face to face. It is the fulfillment of every human longing, the joy for which we were created. "No eye has seen, nor ear heard, nor the heart of man conceived, what God has prepared for those who love him" (1 Corinthians 2:9). Some souls enter heaven immediately; others must first be purified.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Purgatory</strong> is the state of purification for those who die in God's grace but are not yet fully purified. It is not a second chance but a completion — the final cleansing of the soul before it enters the fullness of God's presence. The Church teaches that we can help the souls in purgatory through our prayers, Masses, and indulgences (CCC 1030–1032).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Hell</strong> is the eternal separation from God, chosen freely by those who definitively reject His love. The Church teaches that hell is real and that souls go there — but she has never declared any specific person to be in hell. God wills that all be saved (1 Timothy 2:4), and His mercy is infinite. But He respects human freedom, even the freedom to say no to Him forever.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The General Judgment at the End of Time</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                In addition to the Particular Judgment, the Church teaches that at the end of time there will be a General Judgment — the Last Judgment — when Christ will come again in glory to judge the living and the dead. This is the judgment described in Matthew 25: "Come, you who are blessed by my Father, inherit the kingdom prepared for you from the foundation of the world" (Matthew 25:34).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The General Judgment does not change the outcome of the Particular Judgment — those who are in heaven remain in heaven; those in hell remain in hell. But it reveals the full meaning of history: how God's providence has been at work in all things, how the choices of individuals have affected the whole human family, and how justice and mercy have been perfectly balanced throughout all of time.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The General Judgment is also the moment when the body is reunited with the soul — the resurrection of the dead. At that moment, the full person — body and soul — will receive their eternal reward or punishment.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Resurrection of the Body</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                One of the most distinctive and beautiful teachings of the Catholic faith is the resurrection of the body. We do not believe that the soul simply floats away into a spiritual realm and the body is left behind forever. We believe that at the end of time, our bodies will be raised from the dead and glorified — transformed, as Christ's body was transformed at the resurrection.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                Saint Paul describes the resurrection body: "It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power. It is sown a natural body; it is raised a spiritual body" (1 Corinthians 15:43–44). The glorified body will be incorruptible, radiant, agile, and perfectly subject to the soul. It will be truly our body — the same body we had in this life — but transformed beyond all imagining.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                This teaching affirms the goodness of the body and of material creation. God did not create matter as something to be escaped but as something to be redeemed and glorified. The resurrection of the body is the ultimate affirmation that we are not angels trapped in bodies — we are embodied souls, and our bodies are part of who we are forever.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Prepare for a Holy Death</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The Catholic tradition has always emphasized the importance of preparing for death — not with morbid obsession, but with wise foresight. The best preparation for death is a holy life: regular reception of the sacraments, daily prayer, works of charity, and growth in virtue.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                The Church provides specific sacraments for the dying. The <strong>Anointing of the Sick</strong> (formerly called Extreme Unction or Last Rites) is a sacrament of healing and strengthening for those who are seriously ill or near death. It forgives sins, strengthens the soul, and sometimes restores physical health. It should not be reserved for the last moments of life — it can and should be received whenever one is seriously ill.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Viaticum</strong> — Holy Communion received by the dying — is the "food for the journey," the last reception of the Body of Christ before entering into His presence. The Church urges that the dying receive Viaticum whenever possible.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Confession</strong> before death is a great mercy — the opportunity to receive God's forgiveness and enter eternity in a state of grace. Catholics are encouraged to go to Confession regularly throughout their lives, so that they are always ready.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Ars Moriendi: The Art of Dying Well</h2>
              <p className="text-text leading-relaxed mb-6">
                In the late medieval period, a tradition developed called the <em>Ars Moriendi</em> — "the art of dying well." These were practical guides, written for both the dying and those who accompanied them, on how to face death with faith, courage, and peace.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The <em>Ars Moriendi</em> tradition identified five temptations that the dying face: temptations against faith, against hope (despair), against charity (impatience and anger), to vainglory (pride in one's own merits), and to avarice (attachment to earthly things). For each temptation, it offered a corresponding virtue and a set of prayers and Scripture passages to combat it.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                This tradition reminds us that dying well is not automatic — it requires preparation, prayer, and the support of the Christian community. We do not die alone; we die surrounded by the prayers of the Church, the intercession of the saints, and the presence of Christ Himself.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-death">
                The prayer of the dying Christian is simple: "Lord Jesus, receive my spirit." It is the prayer of Saint Stephen, the first martyr (Acts 7:59). It is the prayer of every Christian who has learned, through a lifetime of faith, to trust in the mercy of God.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer for a Happy Death</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  O my Lord and Savior, support me in that hour in the strong arms of Thy Sacraments, and by the fresh fragrance of Thy consolations. Let the absolving words be said over me, and the holy oil sign and seal me, and Thy own Body be my food, and Thy Blood my sprinkling; and let my sweet Mother Mary breathe on me, and my Angel whisper peace to me, and my glorious Saints smile upon me; that in them all, and through them all, I may receive the gift of perseverance, and die, as I desire to live, in Thy faith, in Thy Church, in Thy service, and in Thy love. Amen.
                </p>
                <p className="text-text-muted text-sm mt-2">— Blessed John Henry Newman</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live."
                </p>
                <p className="text-text-muted text-center mt-2">— John 11:25</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What does the Catholic Church teach happens when you die?", answer: "The Catholic Church teaches that at death, the soul separates from the body and immediately undergoes the Particular Judgment — an encounter with Christ in which the soul's eternal destiny is determined. The soul then enters heaven (immediately or after purgatory) or hell. At the end of time, the body will be resurrected and reunited with the soul for the General Judgment." },
              { question: "What are the Four Last Things in Catholic teaching?", answer: "The Four Last Things are Death, Judgment, Heaven, and Hell — the four realities that await every human being at the end of life. The Catholic tradition encourages meditation on the Four Last Things as a way of keeping our lives oriented toward what truly matters and avoiding sin." },
              { question: "What is the Particular Judgment?", answer: "The Particular Judgment is the individual judgment that each soul undergoes immediately after death. The Catechism (CCC 1022) teaches that each person receives their eternal retribution at the moment of death — either entrance into heaven (immediately or through purgatory) or immediate and everlasting damnation. It is an encounter with Christ, who is Truth itself." },
              { question: "What is the Anointing of the Sick?", answer: "The Anointing of the Sick is a sacrament of the Catholic Church for those who are seriously ill or near death. It forgives sins, strengthens the soul against the temptations of the dying, and sometimes restores physical health. It should be received whenever one is seriously ill, not only at the very moment of death. It is one of the Church's great gifts for preparing for a holy death." },
              { question: "Does the Catholic Church believe in the resurrection of the body?", answer: "Yes. The resurrection of the body is a core Catholic belief, affirmed in the Apostles' Creed and the Nicene Creed. The Church teaches that at the end of time, all the dead will be raised — their bodies reunited with their souls — and will receive their eternal reward or punishment in their full personhood, body and soul together. The glorified body will be transformed, incorruptible, and radiant." },
            ]} />

            <RelatedArticles currentSlug="catholic-teaching-on-death" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic teaching and tradition.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
