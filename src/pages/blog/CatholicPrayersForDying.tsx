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

export default function CatholicPrayersForDying() {
  return (
    <>
      <Helmet>
        <title>Catholic Prayers for the Dying: Comfort and Grace at the Hour of Death | Guide Catholic</title>
        <meta name="description" content="Learn the Catholic prayers for the dying — the Sacrament of Anointing, Viaticum, the Apostolic Pardon, prayers at the bedside, and what to do when someone is dying." />
        <meta name="keywords" content="catholic prayers for the dying, prayers for the dying, last rites catholic, anointing of the sick, prayers at death bed" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-prayers-for-the-dying/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Catholic Prayers for the Dying: Comfort and Grace at the Hour of Death"
          description="Learn the Catholic prayers for the dying — the Sacrament of Anointing, Viaticum, the Apostolic Pardon, prayers at the bedside, and what to do when someone is dying."
          url="https://guidecatholic.com/blog/catholic-prayers-for-the-dying/"
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
              <span className="text-text">Catholic Prayers for the Dying</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Prayers
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Prayers for the Dying: Comfort and Grace at the Hour of Death
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic Church surrounds the dying with an extraordinary treasury of prayer, sacrament, and grace. From the Anointing of the Sick to the Litany of the Saints, the Church walks with her children all the way to the threshold of eternity — and beyond.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                Death is the most universal human experience, and yet it remains the one we are least prepared for. When a loved one is dying — whether suddenly or after a long illness — Catholics have access to a rich tradition of prayer, sacrament, and spiritual accompaniment that can bring profound comfort to both the dying person and those gathered at the bedside. This guide covers everything you need to know: the sacraments available, the prayers to pray, and the practical steps to take when someone you love is approaching death.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Sacrament of Anointing of the Sick
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                The most important thing you can do when a Catholic is seriously ill or dying is to call a priest. The Sacrament of Anointing of the Sick — sometimes called "Last Rites" or "Extreme Unction" in older terminology — is one of the seven sacraments of the Church, and it is specifically designed for those who are gravely ill, facing surgery, or in danger of death.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                The sacrament consists of the priest anointing the sick person's forehead and hands with blessed oil (the Oil of the Sick) while praying: "Through this holy anointing may the Lord in his love and mercy help you with the grace of the Holy Spirit. May the Lord who frees you from sin save you and raise you up." The effects of this sacrament are profound: it unites the sick person to the Passion of Christ, strengthens them against temptation, brings peace and courage, and — if the person is unable to confess — can bring forgiveness of sins.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                Importantly, the Anointing of the Sick is not only for those who are moments from death. It can and should be received by anyone who is seriously ill, facing major surgery, or in the frailty of old age. Do not wait until the last moment — call a priest as soon as you know someone is seriously ill. If the person is unconscious or unable to speak, the sacrament can still be administered.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Viaticum: The Final Communion
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                Viaticum — from the Latin word for "provisions for a journey" — is the name given to Holy Communion received by a person who is dying. It is the Church's final gift to her children: the Body of Christ as food for the journey from this life to the next. Jesus promised: "Whoever eats my flesh and drinks my blood has eternal life, and I will raise him on the last day" (John 6:54).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                When a priest brings Viaticum to the dying, he carries the Eucharist in a pyx (a small container) and administers it with special prayers. If the dying person cannot swallow, even a tiny fragment of the Host is sufficient. The Church considers Viaticum so important that it is the one sacrament that can be received even by those who have already received Communion that day.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Apostolic Pardon
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                The Apostolic Pardon (also called the Apostolic Blessing) is a special blessing given by a priest to a dying person that grants a plenary indulgence — the full remission of all temporal punishment due to sin. The priest says: "By the faculty given to me by the Apostolic See, I grant you a plenary indulgence and the remission of all your sins, and I bless you. In the name of the Father, and of the Son, and of the Holy Spirit."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                This extraordinary grace is available to any Catholic who is in danger of death. Ask the priest to give the Apostolic Pardon when he comes to anoint the sick. If no priest is available, a dying person who is contrite and has the intention of receiving the sacraments can receive a plenary indulgence at the moment of death by invoking the name of Jesus.
              </LinkedText>

              <QuizCTA
                title="How prepared is your faith for life's hardest moments?"
                description="The Church walks with us through every valley. Take our quiz and discover how to deepen your Catholic faith and find peace in God's mercy."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Prayers to Pray at the Bedside of the Dying
              </h2>
              <p className="text-text leading-relaxed mb-4">
                While waiting for a priest, or alongside the sacraments, these prayers are powerful companions for the dying and those gathered at the bedside:
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Prayers for the Dying</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-text mb-2">Psalm 23 — The Lord Is My Shepherd</h4>
                    <p className="text-text italic text-sm leading-relaxed">
                      "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul... Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me... Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever."
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text mb-2">The Hail Mary</h4>
                    <p className="text-text italic text-sm leading-relaxed">
                      "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
                    </p>
                    <p className="text-text-muted text-sm mt-1">Pray this slowly and repeatedly. The words "now and at the hour of our death" take on their fullest meaning at the bedside of the dying.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text mb-2">Divine Mercy Chaplet</h4>
                    <p className="text-text-muted text-sm">Jesus promised St. Faustina that when the Chaplet of Divine Mercy is prayed at the bedside of the dying, He will stand between the Father and the dying person as their Advocate. This is one of the most powerful prayers you can offer for someone who is dying.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text mb-2">Litany of the Saints</h4>
                    <p className="text-text-muted text-sm">The Litany of the Saints calls upon the entire heavenly court to intercede for the dying person. It is traditionally prayed at baptisms, ordinations, and deathbeds — the great moments of passage in a Christian's life. Even a shortened version — calling upon Mary, St. Joseph, the patron saint of the dying person, and a few beloved saints — is deeply comforting.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Prayer of Commendation
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                The Church's official prayer at the moment of death is called the Prayer of Commendation (Commendatio Animae — "Commending the Soul"). It is found in the Pastoral Care of the Sick rite and is traditionally prayed as death approaches or at the moment of death. A portion of it reads:
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed">
                  "Go forth, Christian soul, from this world in the name of God the almighty Father, who created you, in the name of Jesus Christ, Son of the living God, who suffered for you, in the name of the Holy Spirit, who was poured out upon you, go forth, faithful Christian. May you live in peace this day, may your home be with God in Zion, with Mary, the virgin Mother of God, with Joseph, and all the angels and saints..."
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What to Do When Someone Is Dying
              </h2>
              <p className="text-text leading-relaxed mb-4">
                Here is a practical guide for Catholics when a loved one is dying:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Call a priest immediately.</strong> Do not wait. Even if the person is unconscious, the sacraments can still be administered. Most parishes have an emergency line for this purpose.</li>
                <li><strong>Pray aloud at the bedside.</strong> Hearing is often the last sense to fade. The dying person can hear your prayers even when they cannot respond.</li>
                <li><strong>Hold their hand.</strong> Physical touch communicates love and presence in a way words cannot.</li>
                <li><strong>Play or sing hymns softly.</strong> Sacred music — especially Marian hymns — can bring great peace.</li>
                <li><strong>Place a crucifix in their hands or near them.</strong> The sight of the Cross is a powerful comfort.</li>
                <li><strong>Sprinkle holy water.</strong> Ask the priest to leave some, or use your own from home.</li>
                <li><strong>Give them permission to go.</strong> Sometimes the dying hold on because they are worried about those they leave behind. Telling them "It's okay to go. We will be alright. Go to Jesus" can bring profound peace.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Prayers After Death
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                After a loved one has died, the Church continues to pray for them. The most powerful prayer for the dead is the Holy Mass — having a Mass offered for the repose of the soul of the deceased is the greatest act of charity you can perform for them. The Rosary, the Divine Mercy Chaplet, and prayers for the Holy Souls in Purgatory are also powerful intercessions.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                A simple prayer after death: "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May their soul and the souls of all the faithful departed, through the mercy of God, rest in peace. Amen."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Church's Teaching on Death and Eternal Life
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                The Catholic Church teaches that death is not the end but a passage — a birth into eternal life. The Catechism of the Catholic Church states: "Death is the end of man's earthly pilgrimage, of the time of grace and mercy which God offers him so as to work out his earthly life in keeping with the divine plan, and to decide his ultimate destiny" (CCC 1013). At the moment of death, each person undergoes the particular judgment — an immediate encounter with Christ who is Truth itself.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-prayers-for-the-dying">
                For Catholics, death is not something to be feared but something to be prepared for. The saints spoke of death as the "great passage," the moment when faith becomes sight and hope becomes possession. St. Francis of Assisi called death "Sister Death." St. Thérèse of Lisieux said, "I am not dying; I am entering into life." This is the hope that sustains us at every deathbed — the hope of the Resurrection.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — John 11:25
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "What are the Last Rites in the Catholic Church?",
                answer: "The 'Last Rites' is a popular term for the sacraments and prayers given to Catholics who are dying. They include: the Sacrament of Anointing of the Sick (anointing with blessed oil), Viaticum (final Holy Communion), the Apostolic Pardon (a plenary indulgence), and the Prayer of Commendation. These are administered by a priest and provide extraordinary grace for the journey from this life to the next."
              },
              {
                question: "Can the Anointing of the Sick be given to someone who is unconscious?",
                answer: "Yes. The Sacrament of Anointing of the Sick can be administered to someone who is unconscious, in a coma, or otherwise unable to respond, as long as they would have requested it if they were conscious. Do not wait until the last moment — call a priest as soon as you know someone is seriously ill or in danger of death."
              },
              {
                question: "What is Viaticum?",
                answer: "Viaticum is Holy Communion given to a person who is dying. The word comes from the Latin for 'provisions for a journey.' It is the Church's final gift to her children — the Body of Christ as food for the passage from this life to eternal life. It is considered so important that it can be received even by those who have already received Communion that day."
              },
              {
                question: "What prayers should I pray at the bedside of a dying person?",
                answer: "The most powerful prayers at the bedside of the dying include: Psalm 23 ('The Lord is my shepherd'), the Hail Mary (especially the words 'pray for us sinners, now and at the hour of our death'), the Divine Mercy Chaplet (Jesus promised special grace for the dying when this is prayed at their bedside), the Litany of the Saints, and the Prayer of Commendation. Pray aloud — hearing is often the last sense to fade."
              },
              {
                question: "What should I do immediately when a Catholic loved one is dying?",
                answer: "The most important thing is to call a priest immediately — do not wait. Most parishes have an emergency line for this purpose. While waiting for the priest, pray aloud at the bedside, hold the dying person's hand, place a crucifix near them, and if possible, play or sing sacred music softly. After the priest has come, continue to pray the Rosary, Divine Mercy Chaplet, and other prayers for the dying person."
              }
            ]} />

<RelatedArticles currentSlug="catholic-prayers-for-the-dying" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Quiz Now
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
