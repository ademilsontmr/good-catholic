import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function AgnusDeiPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Agnus Dei: Full Text of the Lamb of God Prayer at Mass | Guide Catholic</title>
        <meta name="description" content="The Agnus Dei (Lamb of God) prayer with full text in English and Latin, what Catholics say at Mass before Communion, and the meaning of each invocation." />
        <meta name="keywords" content="agnus dei prayer, lamb of god prayer catholic, agnus dei full text, agnus dei latin mass, catholic mass prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/agnus-dei-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Agnus Dei: Full Text of the Lamb of God Prayer at Mass"
        description="The Agnus Dei (Lamb of God) prayer with full text in English and Latin, what Catholics say at Mass before Communion, and the meaning of each invocation."
        url="https://guidecatholic.com/blog/agnus-dei-prayer-catholic/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Agnus Dei", url: "https://guidecatholic.com/blog/agnus-dei-prayer-catholic/" },
        ]}
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
              <span className="text-text">Agnus Dei</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Agnus Dei: Full Text of the Lamb of God Prayer at Mass
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                At every Catholic Mass, the congregation kneels and sings or speaks the Agnus Dei — Lamb of God, who takes away the sins of the world. It is the Church's cry for mercy moments before Holy Communion.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Agnus Dei (&quot;Lamb of God, who take away the sins of the world, have mercy on us&quot;) is sung at Mass before Communion — three invocations, the third often &quot;grant us peace.&quot; John the Baptist&apos;s words (John 1:29) identify Christ as sacrificial Lamb.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Agnus Dei (English — Roman Missal)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-3 text-text leading-relaxed">
                <p className="italic">Lamb of God, you take away the sins of the world, have mercy on us.</p>
                <p className="italic">Lamb of God, you take away the sins of the world, have mercy on us.</p>
                <p className="italic">Lamb of God, you take away the sins of the world, grant us peace.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Agnus Dei (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-2 text-text italic text-sm">
                <p>Agnus Dei, qui tollis peccata mundi, miserere nobis.</p>
                <p>Agnus Dei, qui tollis peccata mundi, miserere nobis.</p>
                <p>Agnus Dei, qui tollis peccata mundi, dona nobis pacem.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                The Agnus Dei echoes John the Baptist pointing to Jesus (John 1:29). At Mass it prepares the faithful to receive the Lamb who was slain — now present in the Eucharist — and to ask for mercy and peace.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Lamb in Scripture</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                John the Baptist&apos;s cry, Behold, the Lamb of God, who takes away the sin of the world (John 1:29), gathers up a long biblical thread. In Exodus 12 the blood of an unblemished lamb marked the doors of Israel so that death passed over them, and the Passover meal became the memorial of liberation. Isaiah described the suffering servant as a lamb led to the slaughter who opened not his mouth (Isaiah 53:7). St. Paul wrote plainly that Christ, our paschal lamb, has been sacrificed (1 Corinthians 5:7), and the Book of Revelation shows a Lamb standing as though it had been slain, worshiped by all of heaven (Revelation 5:6). The Catechism quotes John&apos;s words to explain that Jesus is both the suffering servant who bears the sin of the multitude and the new Passover lamb (CCC 608).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                Notice one small difference. John the Baptist speaks of the sin of the world in the singular, the whole condition of humanity estranged from God. The liturgy uses the plural, peccata, the sins of the world, naming the many concrete failures for which we ask mercy. Both are true: Christ removes the root and heals each wound.
              </LinkedText>

              <QuizCTA
                title="Understand the Mass more deeply"
                description="Take the Catholic life assessment for a personalized guide to the sacraments and Sunday worship."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where It Fits in the Mass</h2>
              <p className="text-text leading-relaxed mb-6">
                The Agnus Dei follows the Lord's Prayer and the Sign of Peace, during the fraction rite when the priest breaks the consecrated Host. The third invocation may be repeated until the distribution of Communion is complete in some celebrations.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                The General Instruction of the Roman Missal explains what is happening at the altar. While the Agnus Dei is sung or said, the priest divides the Host and lets one fragment fall into the chalice, a gesture called the commingling, which signifies the unity of the Body and Blood of the Lord in the work of salvation. The chant is meant to accompany the fraction, so it may be repeated as many times as necessary until the breaking is finished, always ending with grant us peace (GIRM 83). At a large Mass, a cantor may therefore sing four or five invocations instead of three.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                Immediately afterward the priest raises the Host and says, Behold the Lamb of God, behold him who takes away the sins of the world. Blessed are those called to the supper of the Lamb. That line joins John 1:29 to Revelation 19:9, where an angel calls blessed those invited to the marriage supper of the Lamb. The people answer with the words of the centurion in Matthew 8:8: Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the Agnus Dei Entered the Mass</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                According to the Liber Pontificalis, the ancient collection of papal biographies, Pope St. Sergius I, who reigned from 687 to 701 and came from a Syrian family, ordered that the Agnus Dei be sung by clergy and people at the breaking of the Lord&apos;s Body. In his day the fraction took a long time, because whole loaves of bread were broken for the congregation, and the chant was repeated for as long as the breaking lasted. When small unleavened hosts came into use, the fraction became brief, and by around the eleventh century the chant was fixed at three invocations, with the last changed to dona nobis pacem.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                In the traditional Latin Requiem Mass the words were adapted for the dead: the first two invocations end dona eis requiem, grant them rest, and the third dona eis requiem sempiternam, grant them eternal rest. Composers from Palestrina to Bach, Mozart, and Fauré have set the Agnus Dei to music, and many people know the text first from a concert hall or a choral recording.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying the Agnus Dei Well at Sunday Mass</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Watch the altar.</strong> As you sing, look at the priest breaking the Host. The words and the action belong together: the Lamb is broken so that many can share him.</li>
                <li><strong>Make the first two invocations personal.</strong> Bring to mind a specific sin or need when you sing have mercy on us.</li>
                <li><strong>Mean the word peace.</strong> The Sign of Peace has just been exchanged; the third invocation asks for the peace only Christ gives (John 14:27).</li>
                <li><strong>Kneel when the chant ends.</strong> In U.S. dioceses the faithful normally kneel after the Agnus Dei unless the diocesan bishop has decided otherwise.</li>
              </ul>

            </div>

            <BlogFAQ faqs={[
              { question: "What does Agnus Dei mean?", answer: "Agnus Dei is Latin for Lamb of God. It refers to Jesus Christ, the Passover Lamb whose sacrifice takes away the sins of the world." },
              { question: "Why is Agnus Dei prayed three times?", answer: "The triple invocation expresses urgent trust in Christ's mercy. The first two ask for mercy; the third asks for peace — the fruit of reconciliation with God." },
              { question: "Do Catholics kneel during the Agnus Dei?", answer: "In the United States, the faithful normally kneel after the Agnus Dei is finished, unless the diocesan bishop determines otherwise. Those who cannot kneel for reasons of health may stand or sit." },
              { question: "Is the Agnus Dei the same as the Agnus Dei sacramental?", answer: "No. The prayer at Mass is a liturgical text. Agnus Dei sacramentals are wax discs blessed by the Pope, a different devotion." },
              { question: "Who added the Agnus Dei to the Mass?", answer: "The Liber Pontificalis credits Pope St. Sergius I (687-701) with ordering that the Agnus Dei be sung by clergy and people at the breaking of the bread. It was later fixed at three invocations." },
              { question: "What is the priest doing during the Agnus Dei?", answer: "He breaks the consecrated Host (the fraction) and drops a small piece into the chalice (the commingling). The chant accompanies this action and may be extended until it is complete." },
              { question: "Why are the words different in an old Requiem Mass?", answer: "In the traditional Requiem, the Agnus Dei asks rest for the dead: dona eis requiem twice, then dona eis requiem sempiternam, instead of miserere nobis and dona nobis pacem." },
            ]} />

            <RelatedArticles currentSlug="agnus-dei-prayer-catholic" />

            <ArticleBottomCTA title="Live the Mass with greater devotion" description="Receive a personalized Catholic spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
