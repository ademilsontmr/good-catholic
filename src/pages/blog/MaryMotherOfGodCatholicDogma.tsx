import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Crown, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { cboLinkClass } from "@/lib/catholicBibleOnlineLinks";

const PAGE_URL = "https://guidecatholic.com/blog/mary-mother-of-god-catholic-dogma/";

export default function MaryMotherOfGodCatholicDogma() {
  return (
    <>
      <Helmet>
        <title>Is Mary the Mother of God? Catholic Dogma Explained | Guide Catholic</title>
        <meta name="description" content="Is Mary the Mother of God? Catholics say yes: she bore Jesus, one divine person. What Theotokos means, the Council of Ephesus, and what the dogma does not say." />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Is Mary the Mother of God? The Catholic Dogma Explained"
        description="Is Mary the Mother of God? Catholics say yes: she bore Jesus, one divine person. What Theotokos means, the Council of Ephesus, and what the dogma does not say."
        url={PAGE_URL}
        datePublished="2026-10-02"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Mary, Mother of God", url: PAGE_URL },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Mary, Mother of God</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Marian Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />October 2, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Is Mary the Mother of God? The Catholic Dogma Explained
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The title sounds like it makes Mary bigger than God. The Church defined it to say something about Jesus.
              </p>
            </header>
            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">
                  Yes. Mary is the Mother of God because the child she bore is God the Son made man. The title Theotokos, “God-bearer,” was defended at the Council of Ephesus in 431. It does not mean Mary existed before God or that she is the source of his divinity.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What “Mother of God” means</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="mary-mother-of-god-catholic-dogma">
                A mother is mother of a person, not of a nature floating by itself. Mary is the mother of Jesus. Jesus is one divine person, the eternal Son, who took a human nature. Therefore Mary is mother of that person. The Greek word the Church uses is Theotokos: the one who bore God. Catholics also say the Virgin Mary is the Mother of God every time they pray the Hail Mary.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                The Catechism puts the same point without the Greek. The one Mary conceived as man by the Holy Spirit, who truly became her Son according to the flesh, is none other than the Father’s eternal Son. That is why the Church confesses that she is truly Mother of God. The dogma is a sentence about the Incarnation. Honor for Mary follows from who Jesus is. It does not compete with him.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why the argument is about Jesus</h2>
              <p className="text-text leading-relaxed mb-6">
                In the fifth century, Nestorius, patriarch of Constantinople, resisted calling Mary Theotokos. He preferred a title that sounded like “mother of Christ,” because he feared people would think a woman had given birth to the divine nature itself. The worry was real. The cure he reached for was not. If Mary is mother only of a human reality that is then joined to the Word, Jesus starts to look like two persons sharing one story: one who was born, and another who is God.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Council of Ephesus in 431, with St. Cyril of Alexandria pressing the older faith of the Church, refused that split. The Son who is eternally begotten of the Father is the same Son who was born of Mary in time. There are two births and one person. There are two natures, divine and human, and they are not glued together after the fact. When you say “Mary is the Mother of God,” you are refusing to divide Christ.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where Scripture speaks</h2>
              <p className="text-text leading-relaxed mb-6">
                Elizabeth, filled with the Holy Spirit, asks how the mother of her Lord has come to her. Read{" "}
                <a href="https://catholicbibleonline.com/bible/luke/1" target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Luke 1 on Catholic Bible Online</a>.
                “Lord” in that greeting is not a polite title for a future rabbi. Luke has already said the child will be called Son of the Most High. Mary is mother of that Lord before she gives birth.
              </p>
              <p className="text-text leading-relaxed mb-6">
                St. Paul writes that when the fullness of time had come, God sent his Son, born of a woman. The chapter is{" "}
                <a href="https://catholicbibleonline.com/bible/galatians/4" target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Galatians 4</a>.
                The one who is sent is the Son. The one who is born of a woman is that same Son. Paul does not pause to invent a second subject.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Gospel of John says the Word was God, and the Word became flesh. See{" "}
                <a href="https://catholicbibleonline.com/bible/john/1" target="_blank" rel="noopener noreferrer" className={cboLinkClass}>John 1</a>.
                Flesh is what a mother bears. If the Word became flesh, the mother of that child is mother of the Word made flesh, and the Word is God. The verse does not call her a goddess. It says God has a human birth.
              </p>

              <QuizCTA
                title="How well do you know what the Church actually teaches?"
                description="A free look at doctrine, prayer, and the sacraments — useful if this dogma is new to you or if you have to explain it."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the dogma does not say</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Mary is not the mother of the Father or of the Holy Spirit. She is mother of the Son, who is God.</li>
                <li>Mary is not older than God. The Son is eternal. His human birth has a date. His divine person does not.</li>
                <li>Mary did not produce the divine nature. Mothers give their children a human nature. The person who received that nature from her is divine from all eternity.</li>
                <li>The title is not worship of Mary. Catholics give God adoration. They honor Mary because of her Son. That distinction is the whole of Marian devotion.</li>
                <li>It is not a claim that Mary is a savior beside Christ. She is a creature, redeemed, and the first disciple.</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                If someone hears “Mother of God” and pictures Mary as a fourth person in the Trinity, correct the picture. The Trinity is Father, Son, and Holy Spirit. Mary is a human mother. The surprise is not that a creature entered the Godhead. The surprise is that the Son entered her womb.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How this dogma sits with the others</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="mary-mother-of-god-catholic-dogma">
                Mother of God is the first of the great Marian dogmas because the others protect the same mystery. Her perpetual virginity says the birth of Jesus was the Lord’s own act, not one episode in an ordinary family story. The Immaculate Conception says she was prepared by grace, in view of Christ’s merits, to be his mother. The Assumption of Mary says the woman who bore Life was not left in the decay of the grave. None of these makes her divine. All of them say the Incarnation was real enough to mark her life from beginning to end.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                A longer map of her place in Catholic life is in the guide to the Virgin Mary. This page stays on the title people argue about: Mother of God.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">January 1, and how Catholics say the title</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church keeps a solemnity of Mary, the Holy Mother of God, on January 1, the octave day of Christmas. In the United States it is a holy day of obligation, except when January 1 falls on a Saturday or a Monday and the obligation is lifted. The feast is not a second Christmas. It is the Church refusing to celebrate the child without his mother, or the mother without confessing who the child is. The parish guide for that day is{" "}
                <Link to="/blog/catholic-feast-days/mary-mother-of-god/" className="text-accent font-semibold underline underline-offset-2">Mary, Mother of God on the feast calendar</Link>.
              </p>
              <p className="text-text leading-relaxed mb-6">
                You already say the dogma if you pray the Hail Mary: “Holy Mary, Mother of God, pray for us sinners.” The phrase is not decoration. It asks her intercession as the mother of the person who saves, which is why the prayer ends at “now and at the hour of our death,” when that person is the one a sinner needs.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to explain it in one conversation</h2>
              <p className="text-text leading-relaxed mb-6">
                Ask who was born in Bethlehem. If the answer is Jesus, ask whether Jesus is God. If the answer is yes, then his mother is the mother of God. If someone says she is only the mother of his human nature, ask whether mothers give birth to natures or to persons. You were not born as “a human nature.” You were born as you. Jesus was born as himself. Himself is the Son.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Then say what you are not claiming. Mary is not God. She did not create the Son. She bore him. That sentence is enough for a kitchen table. The council can wait until the person wants the history.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Key facts</h3>
                <ul className="text-text space-y-2 text-sm">
                  <li>• <strong>Title:</strong> Mother of God, Theotokos, God-bearer</li>
                  <li>• <strong>Defined:</strong> Council of Ephesus, 431</li>
                  <li>• <strong>About:</strong> the one person of Jesus Christ, true God and true man</li>
                  <li>• <strong>Not about:</strong> Mary as a goddess or as mother of the Trinity</li>
                  <li>• <strong>Scripture:</strong> Luke 1, Galatians 4, John 1</li>
                  <li>• <strong>Feast:</strong> January 1, Solemnity of Mary, the Holy Mother of God</li>
                  <li>• <strong>Catechism:</strong> CCC 495</li>
                </ul>
              </div>
            </div>

            <BlogFAQ
              htmlAnswers
              title="Questions about Mary, Mother of God"
              faqs={[
                {
                  question: "Is Mary the Mother of God?",
                  answer: "Yes. Mary is the Mother of God because she is the mother of Jesus, and Jesus is God the Son made man. The Council of Ephesus in 431 taught this with the title Theotokos, God-bearer. The dogma protects the unity of Christ’s person."
                },
                {
                  question: "Does Mother of God mean Mary created God?",
                  answer: "No. The Son exists eternally, begotten of the Father. Mary gave him a human nature in time. She is mother of the person who is God. She is not the origin of the divine nature, and she is not the mother of the Father or the Holy Spirit."
                },
                {
                  question: "Where does the Bible call Mary the Mother of God?",
                  answer: "Scripture does not use the later Greek title Theotokos. It does say the facts the title protects. Elizabeth calls Mary the mother of her Lord in Luke 1. Galatians 4 says God sent his Son, born of a woman. John 1 says the Word, who is God, became flesh."
                },
                {
                  question: "Why did the Council of Ephesus insist on Theotokos?",
                  answer: "Nestorius resisted the title because he thought it sounded as if Mary had given birth to the divine nature. The council judged that refusing the title split Christ into two subjects, one human and one divine. Theotokos says there is one Son, born of Mary in his humanity, eternally God in his person."
                },
                {
                  question: "Is January 1 a holy day because of this dogma?",
                  answer: "The Solemnity of Mary, the Holy Mother of God, is January 1. In the United States it is a holy day of obligation unless that date falls on a Saturday or Monday, when the obligation is lifted. The feast confesses who Jesus is by naming his mother."
                }
              ]}
            />
            <RelatedArticles currentSlug="mary-mother-of-god-catholic-dogma" />
            <ArticleBottomCTA
              title="Want the doctrines in the order the Church teaches them?"
              description="Take the free Catholic life assessment and see where doctrine, prayer, and the sacraments need the next step."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
