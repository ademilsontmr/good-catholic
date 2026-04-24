import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicLastRites() {
  return (
    <>
      <Helmet>
        <title>Catholic Last Rites: What They Are, When to Call a Priest & What Happens | Guide Catholic</title>
        <meta name="description" content="What are Catholic Last Rites? Learn about the Anointing of the Sick, Viaticum, and Apostolic Pardon — when to call a priest, what happens, and how to prepare a loved one for death." />
        <meta name="keywords" content="catholic last rites, anointing of the sick, viaticum catholic, last rites dying catholic, when to call priest dying, apostolic pardon catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-last-rites-explained/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Last Rites: What They Are, When to Call a Priest & What Happens"
        description="What are Catholic Last Rites? Learn about the Anointing of the Sick, Viaticum, and Apostolic Pardon — when to call a priest, what happens, and how to prepare a loved one for death."
        url="https://guidecatholic.com/blog/catholic-last-rites-explained/"
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
              <span className="text-text">Catholic Last Rites</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Sacraments</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />13 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Last Rites: What They Are, When to Call a Priest & What Happens
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                When a Catholic is seriously ill or near death, the Church offers a set of sacred rites to prepare the soul for its journey to God. These are commonly called "Last Rites" — and they are among the most profound acts of mercy the Church can offer.
              </p>
            </header>
            <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center mb-10">
              <Cross className="w-24 h-24 text-gray-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Few moments in life are as sacred — or as urgent — as the hours surrounding death. The Catholic Church, in her wisdom and mercy, has always provided her members with spiritual care at the end of life. The rites administered to the dying are not a formality or a cultural tradition. They are sacraments: real encounters with the grace of God at the most critical moment of a person's existence.
              </p>
              <p className="text-text leading-relaxed mb-6">
                This guide explains what "Last Rites" are, what the three sacraments involved actually are, when to call a priest, what happens during the rites, and what to do if a priest cannot arrive in time.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Are "Last Rites"?</h2>
              <p className="text-text leading-relaxed mb-6">
                "Last Rites" is a popular term — not an official liturgical term — that refers to the sacramental care given to Catholics who are seriously ill or dying. In the current rite of the Church, this care is called the "Pastoral Care of the Sick" and encompasses three distinct sacraments:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>The Sacrament of Anointing of the Sick</strong> — the anointing with holy oil and prayer for healing and strength</li>
                <li><strong>Viaticum</strong> — the reception of Holy Communion as food for the journey to eternal life</li>
                <li><strong>Apostolic Pardon (Apostolic Blessing)</strong> — a special blessing that grants a plenary indulgence at the moment of death</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                In addition, the priest will typically offer the opportunity for Confession (the Sacrament of Reconciliation) if the person is conscious and able to confess. Together, these sacraments prepare the soul for death and judgment, offering forgiveness of sins, strength for the final struggle, and the grace of a holy death.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Anointing of the Sick</h2>
              <p className="text-text leading-relaxed mb-6">
                The Anointing of the Sick is a sacrament instituted by Christ and described in the Letter of James (5:14–15): "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven."
              </p>
              <p className="text-text leading-relaxed mb-6">
                The sacrament is administered by a priest, who anoints the forehead and hands of the sick person with blessed oil (the Oil of the Sick) while praying: "Through this holy anointing may the Lord in his love and mercy help you with the grace of the Holy Spirit. May the Lord who frees you from sin save you and raise you up."
              </p>
              <p className="text-text leading-relaxed mb-6">
                The effects of the Anointing of the Sick are profound. The Catechism (CCC 1532) lists them as: the uniting of the sick person to the passion of Christ; the strengthening, peace, and courage to endure suffering; the forgiveness of sins (if the person is unable to confess); the restoration of health if it is conducive to the salvation of the soul; and the preparation for passing over to eternal life.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Importantly, the Anointing of the Sick is not reserved only for those who are at the point of death. It can and should be received by anyone who is seriously ill, facing major surgery, or suffering from a grave illness — including the elderly who are weakened by age. It can also be received more than once during the same illness if the person's condition worsens.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Viaticum: Communion for the Journey</h2>
              <p className="text-text leading-relaxed mb-6">
                Viaticum (from the Latin word for "provisions for a journey") is the reception of Holy Communion by a person who is near death. It is the most important of the Last Rites — the final reception of the Body and Blood of Christ before the soul's journey to God.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Church teaches that Viaticum is the sacrament proper to the dying (CCC 1524). Jesus himself promised: "Whoever eats my flesh and drinks my blood has eternal life, and I will raise them up at the last day" (John 6:54). Receiving Viaticum is the Church's way of placing the dying person in the hands of Christ for the final passage.
              </p>
              <p className="text-text leading-relaxed mb-6">
                When administering Viaticum, the priest (or deacon, or extraordinary minister of Holy Communion) says: "May the Lord Jesus Christ protect you and lead you to eternal life." The dying person responds "Amen" and receives Communion. Even a tiny fragment of the host is sufficient if the person cannot swallow easily.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Apostolic Pardon</h2>
              <p className="text-text leading-relaxed mb-6">
                The Apostolic Pardon (also called the Apostolic Blessing) is a special blessing given by a priest to a dying person that grants a plenary indulgence — the full remission of all temporal punishment due to sin — at the moment of death. This is an extraordinary gift of the Church's treasury of grace.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The priest says: "Through the holy mysteries of our redemption, may almighty God release you from all punishments in this life and in the life to come. May he open to you the gates of paradise and welcome you to everlasting joy." The dying person receives this blessing with faith and contrition.
              </p>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your knowledge of the sacraments and Catholic life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Call a Priest</h2>
              <p className="text-text leading-relaxed mb-6">
                One of the most important things to understand about Last Rites is this: <strong>do not wait until the last moment.</strong> Many Catholics make the mistake of calling a priest only when death is imminent — sometimes when the person is already unconscious or has just died. This is a serious pastoral mistake.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Call a priest when:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>A loved one is diagnosed with a serious or life-threatening illness</li>
                <li>A person is scheduled for major surgery</li>
                <li>An elderly person's health is declining significantly</li>
                <li>A person has been in a serious accident</li>
                <li>A person is in hospice care or has been given a terminal diagnosis</li>
                <li>A person is unconscious but still alive</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                The Anointing of the Sick can be administered to an unconscious person — the sacrament is still valid and efficacious. Even if the person cannot speak or respond, the grace of the sacrament is real. Call the priest as soon as possible; do not wait until the person is actively dying.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Most parishes have an emergency line or an on-call priest for exactly these situations. Hospitals with Catholic chaplains can also provide the sacraments. If you are unsure how to reach a priest, call your parish office and explain the situation — they will direct you to the right person.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Prepare the Environment</h2>
              <p className="text-text leading-relaxed mb-6">
                When a priest comes to administer the Last Rites, it is helpful to prepare the room:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Place a small table near the bed covered with a white cloth</li>
                <li>Set a crucifix on the table, along with two candles if possible</li>
                <li>Have a glass of water available (for the priest to wash his hands)</li>
                <li>Have a small dish or cloth for the anointing</li>
                <li>Ensure the room is quiet and peaceful</li>
                <li>Family members are welcome — and encouraged — to be present</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                The presence of family during the Last Rites is a powerful act of love and witness. Praying together with the dying person, holding their hand, and accompanying them in their final hours is one of the most profound acts of charity a family can perform.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What If the Priest Cannot Arrive in Time?</h2>
              <p className="text-text leading-relaxed mb-6">
                Sometimes, despite every effort, a priest cannot arrive before a person dies. This is a painful situation, but the Church offers comfort and hope.
              </p>
              <p className="text-text leading-relaxed mb-6">
                If a person dies without receiving the Last Rites, their salvation is not automatically lost. God's mercy is not limited by the sacraments — the sacraments are the ordinary means of grace, but God can act outside them. A person who desired the sacraments but was unable to receive them due to circumstances beyond their control is in God's hands.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In the meantime, family members can pray with the dying person, recite the Apostles' Creed, make an Act of Contrition on their behalf (encouraging them to make one themselves if conscious), and pray the prayers for the dying found in Catholic prayer books. The Church also encourages praying the Rosary at the bedside of the dying.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Prayer for the Dying</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Go forth, Christian soul, from this world in the name of God the almighty Father, who created you, in the name of Jesus Christ, Son of the living God, who suffered for you, in the name of the Holy Spirit, who was poured out upon you. Go forth, faithful Christian. May you live in peace this day, may your home be with God in Zion, with Mary, the virgin Mother of God, with Joseph, and all the angels and saints. Amen.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me."
                </p>
                <p className="text-text-muted text-center mt-2">— Psalm 23:4</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What are the Catholic Last Rites?", answer: "Catholic Last Rites is a popular term for the sacramental care given to Catholics who are seriously ill or dying. It encompasses three sacraments: the Anointing of the Sick (anointing with holy oil), Viaticum (Holy Communion as food for the journey to eternal life), and the Apostolic Pardon (a special blessing granting a plenary indulgence at death). Confession is also offered if the person is able to receive it." },
              { question: "When should I call a priest for Last Rites?", answer: "Do not wait until the last moment. Call a priest when a loved one is diagnosed with a serious illness, is scheduled for major surgery, is in hospice care, has been in a serious accident, or when their health is declining significantly. The Anointing of the Sick can be administered to unconscious persons. Most parishes have an emergency line for these situations." },
              { question: "Can the Anointing of the Sick be given to an unconscious person?", answer: "Yes. The Anointing of the Sick can and should be administered to an unconscious person. The sacrament is still valid and efficacious even if the person cannot respond. The grace of the sacrament works through the Church's prayer and the person's prior intention to receive the sacraments. Call a priest as soon as possible — do not wait for the person to regain consciousness." },
              { question: "What is Viaticum?", answer: "Viaticum (from the Latin for 'provisions for a journey') is the reception of Holy Communion by a person who is near death. It is the most important of the Last Rites — the final reception of the Body and Blood of Christ before the soul's journey to God. The Church teaches that Viaticum is the sacrament proper to the dying (CCC 1524), and Jesus promised eternal life to those who eat his flesh and drink his blood (John 6:54)." },
              { question: "What happens if a Catholic dies without receiving Last Rites?", answer: "If a person dies without receiving the Last Rites due to circumstances beyond their control — such as a sudden accident or the priest not arriving in time — their salvation is not automatically lost. God's mercy is not limited by the sacraments. A person who desired the sacraments but was unable to receive them is in God's hands. Family members can pray with the dying person, encourage an Act of Contrition, and pray the prayers for the dying." },
            ]} />

            <RelatedArticles currentSlug="catholic-last-rites-explained" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic theology and tradition.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
