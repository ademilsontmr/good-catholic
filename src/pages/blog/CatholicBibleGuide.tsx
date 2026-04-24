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

export default function CatholicBibleGuide() {
  return (
    <>
      <Helmet>
        <title>The Catholic Bible: Complete Guide — Books, Translations & How to Read It | Guide Catholic</title>
        <meta name="description" content="Everything about the Catholic Bible — its 73 books, the deuterocanonical books, best translations (RSV-CE, NABRE, Douay-Rheims), and how to read it as a Catholic." />
        <meta name="keywords" content="catholic bible, catholic bible books, catholic bible translation, best catholic bible, catholic bible vs protestant bible, 73 books catholic bible, nabre bible, rsv-ce bible" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-bible-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Catholic Bible: Complete Guide — Books, Translations & How to Read It"
        description="Everything about the Catholic Bible — its 73 books, the deuterocanonical books, best translations (RSV-CE, NABRE, Douay-Rheims), and how to read it as a Catholic."
        url="https://guidecatholic.com/blog/catholic-bible-guide/"
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
              <span className="text-text">The Catholic Bible</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />20 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Catholic Bible: Complete Guide — Books, Translations & How to Read It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic Bible is the most widely read book in human history — and the most misunderstood. This complete guide covers everything: its 73 books, the deuterocanonical books, the best translations, and how to read it as a Catholic.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Bible is the Word of God — the inspired record of God's revelation to humanity, culminating in the life, death, and resurrection of Jesus Christ. For Catholics, the Bible is not just a book to be read but a living word to be prayed, studied, and lived. It is the foundation of the faith, the source of the liturgy, and the daily bread of the soul.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Many Books Are in the Catholic Bible?</h2>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Bible contains <strong>73 books</strong> — 46 in the Old Testament and 27 in the New Testament. This is 7 more books than the Protestant Bible, which contains 66 books (39 in the Old Testament and 27 in the New Testament).
              </p>
              <p className="text-text leading-relaxed mb-6">
                The 7 additional books in the Catholic Old Testament are called the <strong>deuterocanonical books</strong> (from the Greek, "second canon"):
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Tobit</li>
                <li>Judith</li>
                <li>1 Maccabees</li>
                <li>2 Maccabees</li>
                <li>Wisdom (also called the Book of Wisdom or Wisdom of Solomon)</li>
                <li>Sirach (also called Ecclesiasticus or Ben Sira)</li>
                <li>Baruch (including the Letter of Jeremiah)</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Additionally, the Catholic versions of Daniel and Esther contain additional sections not found in Protestant Bibles.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Does the Catholic Bible Have 7 More Books?</h2>
              <p className="text-text leading-relaxed mb-6">
                The short answer: the Catholic Church preserved the original Christian Bible. The Protestant Bible is the one that was changed.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The early Church used the <strong>Septuagint</strong> — the Greek translation of the Old Testament made in Alexandria around 250-100 BC. The Septuagint included the deuterocanonical books and was the Bible of the apostles and the early Church. The New Testament quotes the Old Testament almost exclusively from the Septuagint.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The canon of Scripture was formally defined by the Catholic Church at the Councils of Hippo (393 AD) and Carthage (397 AD) — including all 73 books. This remained the standard Christian Bible for over 1,100 years.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In the 16th century, Martin Luther removed the 7 deuterocanonical books from the Old Testament, partly because they supported Catholic doctrines he rejected (such as prayers for the dead, found in 2 Maccabees 12:46). He placed them in a separate section called the "Apocrypha." Later Protestant editions removed them entirely.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church reaffirmed the full 73-book canon at the Council of Trent (1546) in response to Luther's changes.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Structure of the Catholic Bible</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Old Testament (46 books)</h3>
              <p className="text-text leading-relaxed mb-4">The Catholic Old Testament is organized into four main sections:</p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>The Pentateuch (5 books):</strong> Genesis, Exodus, Leviticus, Numbers, Deuteronomy — the foundational books of the Law given to Moses</li>
                <li><strong>Historical Books (16 books):</strong> Joshua through 2 Maccabees — the history of Israel from the conquest of Canaan to the Maccabean revolt</li>
                <li><strong>Wisdom Books (7 books):</strong> Job, Psalms, Proverbs, Ecclesiastes, Song of Songs, Wisdom, Sirach — poetry, prayer, and practical wisdom</li>
                <li><strong>Prophetic Books (18 books):</strong> Isaiah through Malachi — the messages of the prophets to Israel and the nations</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The New Testament (27 books)</h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>The Gospels (4 books):</strong> Matthew, Mark, Luke, John — the life, death, and resurrection of Jesus Christ</li>
                <li><strong>Acts of the Apostles (1 book):</strong> The early Church from Pentecost to Paul's arrival in Rome</li>
                <li><strong>The Letters/Epistles (21 books):</strong> Romans through Jude — letters from Paul, Peter, James, John, and Jude to early Christian communities</li>
                <li><strong>Revelation (1 book):</strong> The apocalyptic vision of John — the final victory of Christ over evil</li>
              </ul>

              <QuizCTA
                title="How well do you know the Bible?"
                description="Take our Catholic faith assessment and receive a personalized guide to deepening your knowledge of Scripture."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Best Catholic Bible Translations</h2>
              <p className="text-text leading-relaxed mb-6">
                There are several excellent Catholic Bible translations available in English. Here are the most important:
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">New American Bible Revised Edition (NABRE)</h3>
              <p className="text-text leading-relaxed mb-6">
                The NABRE is the official Bible of the United States Catholic Church and the translation used at Mass in the United States. It is a scholarly translation that prioritizes accuracy to the original languages. The NABRE is available free online at USCCB.org.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Best for:</strong> Following the daily Mass readings, academic study, official reference.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Revised Standard Version — Catholic Edition (RSV-CE)</h3>
              <p className="text-text leading-relaxed mb-6">
                The RSV-CE is widely considered the best Catholic Bible for personal study and prayer. It combines scholarly accuracy with beautiful, dignified English prose. It is the translation used by many Catholic scholars, seminaries, and the Catechism of the Catholic Church (in its English edition).
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Best for:</strong> Personal study, prayer, apologetics, reading alongside the Catechism.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Douay-Rheims Bible</h3>
              <p className="text-text leading-relaxed mb-6">
                The Douay-Rheims is the traditional English Catholic Bible, translated from the Latin Vulgate in the late 16th and early 17th centuries. It has a majestic, archaic style similar to the King James Version. It is beloved by Catholics attached to the traditional Latin Mass.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Best for:</strong> Traditional spirituality, the Traditional Latin Mass, historical study.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Jerusalem Bible / New Jerusalem Bible</h3>
              <p className="text-text leading-relaxed mb-6">
                The Jerusalem Bible (1966) and its revision, the New Jerusalem Bible (1985), are scholarly translations produced by the Dominican École Biblique in Jerusalem. They are known for their literary quality and extensive footnotes. The Jerusalem Bible was used at Mass in many English-speaking countries outside the US.
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Best for:</strong> Literary quality, extensive footnotes, international Catholic use.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Knox Bible</h3>
              <p className="text-text leading-relaxed mb-6">
                The Knox Bible (1945-1950) is a translation by Monsignor Ronald Knox, one of the most gifted Catholic writers of the 20th century. It is known for its elegant, idiomatic English prose. It is less widely used today but remains a literary masterpiece.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Catholics Read the Bible</h2>
              <p className="text-text leading-relaxed mb-6">
                Catholics read the Bible differently from many Protestants. The key differences:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Within the Tradition.</strong> Catholics read the Bible within the living Tradition of the Church — guided by the Magisterium, the Church Fathers, and 2,000 years of interpretation. The Bible is not read in isolation but in community.</li>
                <li><strong>Through the Liturgy.</strong> The primary way Catholics encounter Scripture is through the Mass. The Lectionary (the book of Mass readings) takes Catholics through most of the Bible over a three-year cycle.</li>
                <li><strong>Through Lectio Divina.</strong> The ancient practice of Lectio Divina — prayerful reading of Scripture — is the traditional Catholic method of personal Bible reading. It involves reading, meditation, prayer, and contemplation.</li>
                <li><strong>With the Senses of Scripture.</strong> Catholic tradition recognizes four senses of Scripture: the literal (what the text says), the allegorical (what it points to in Christ), the moral (what it calls us to do), and the anagogical (what it reveals about our eternal destiny).</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where to Get a Catholic Bible</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Free online:</strong> USCCB.org (NABRE), BibleGateway.com (RSV-CE, NABRE), and many other sites</li>
                <li><strong>Free apps:</strong> Laudate, iBreviary, and Catholic Bible apps on iOS and Android</li>
                <li><strong>Print:</strong> Available at Catholic bookstores, Amazon, and Ignatius Press (for the RSV-CE)</li>
                <li><strong>Study Bibles:</strong> The Ignatius Catholic Study Bible (RSV-CE) and the Catholic Study Bible (NABRE) include extensive notes and commentary</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Ignorance of Scripture is ignorance of Christ."
                </p>
                <p className="text-text-muted text-center mt-2">— St. Jerome, translator of the Latin Vulgate Bible</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "How many books are in the Catholic Bible?", answer: "The Catholic Bible contains 73 books — 46 in the Old Testament and 27 in the New Testament. This is 7 more than the Protestant Bible (66 books), because the Catholic Bible includes the deuterocanonical books: Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach, and Baruch." },
              { question: "What is the best Catholic Bible translation?", answer: "For personal study and prayer, the RSV-CE (Revised Standard Version — Catholic Edition) is widely considered the best. For following the Mass readings in the US, the NABRE (New American Bible Revised Edition) is the official translation. For traditional spirituality, the Douay-Rheims is beloved. For literary quality, the Jerusalem Bible is excellent." },
              { question: "Why does the Catholic Bible have 7 more books than the Protestant Bible?", answer: "The Catholic Bible preserves the original Christian canon of 73 books, which was defined at the Councils of Hippo (393) and Carthage (397). In the 16th century, Martin Luther removed 7 books from the Old Testament (the deuterocanonical books), partly because they supported Catholic doctrines he rejected. The Catholic Church reaffirmed the full 73-book canon at the Council of Trent (1546)." },
              { question: "Is the NABRE a good Catholic Bible?", answer: "Yes. The NABRE (New American Bible Revised Edition) is the official Catholic Bible in the United States and the translation used at Mass. It is a scholarly, accurate translation. However, many Catholics prefer the RSV-CE for personal reading because of its more dignified literary style." },
              { question: "Can Catholics use a Protestant Bible?", answer: "Catholics can read Protestant Bibles for general study, but they should be aware that Protestant Bibles are missing the 7 deuterocanonical books. For Mass, sacraments, and official Catholic use, a Catholic edition of the Bible (which includes all 73 books) should be used." },
            ]} />

            <RelatedArticles currentSlug="catholic-bible-guide" />

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
