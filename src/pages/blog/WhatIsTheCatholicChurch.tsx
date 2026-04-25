import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Church, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function WhatIsTheCatholicChurch() {
  return (
    <>
      <Helmet>
        <title>What Is the Catholic Church? History, Structure & Mission | Guide Catholic</title>
        <meta name="description" content="What is the Catholic Church? A complete guide to its founding by Jesus Christ, 2,000-year history, structure, the Pope, sacraments, and global mission." />
        <meta name="keywords" content="what is the catholic church, catholic church history, who founded the catholic church, catholic church structure, pope catholic church, catholic church explained" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-the-catholic-church/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="What Is the Catholic Church? History, Structure & Mission"
        description="What is the Catholic Church? A complete guide to its founding by Jesus Christ, 2,000-year history, structure, the Pope, sacraments, and global mission."
        url="https://guidecatholic.com/blog/what-is-the-catholic-church/"
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
              <span className="text-text">What Is the Catholic Church?</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Faith Questions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />19 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is the Catholic Church? History, Structure & Mission
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic Church is the world's oldest and largest Christian institution — with over 1.3 billion members, 2,000 years of history, and a presence in virtually every country on earth. Here is everything you need to know about what it is, where it came from, and what it believes.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-violet-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The word "Catholic" comes from the Greek <em>katholikos</em>, meaning "universal" or "according to the whole." The Catholic Church is the universal Church — the one founded by Jesus Christ for all people, in all times, in all places. It is the largest religious institution in the world and the oldest continuously operating organization in human history.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Founded the Catholic Church?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The Catholic Church was founded by Jesus Christ. This is not a Catholic claim alone — it is the historical consensus. Jesus explicitly founded a Church: "You are Peter, and on this rock I will build my Church, and the gates of hell shall not prevail against it" (Matthew 16:18).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                He gave this Church authority to teach: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you" (Matthew 28:19-20). He gave it authority to forgive sins (John 20:22-23), to bind and loose (Matthew 16:19), and promised to be with it "always, to the end of the age" (Matthew 28:20).
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                After the Ascension, the apostles — led by Peter — governed the Church. Peter went to Rome, where he was martyred around 64-68 AD. His successors as Bishop of Rome became the Popes — the visible heads of the Church on earth.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Brief History of the Catholic Church</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Apostolic Age (33-100 AD)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The Church was born at Pentecost (Acts 2), when the Holy Spirit descended on the apostles and 3,000 people were baptized in a single day. The apostles spread the Gospel throughout the Roman Empire and beyond — to Jerusalem, Antioch, Alexandria, Rome, and eventually to the ends of the earth. The New Testament was written during this period.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Age of Persecution (100-313 AD)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                For nearly three centuries, Christians were periodically persecuted by the Roman Empire. Thousands were martyred — including many popes. Yet the Church grew. Tertullian famously wrote: "The blood of the martyrs is the seed of the Church." The writings of the Church Fathers during this period show a Church that is recognizably Catholic — with bishops, priests, the Eucharist, Confession, and the primacy of Rome.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Age of the Councils (313-800 AD)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                Emperor Constantine legalized Christianity in 313 AD. The great ecumenical councils defined the core doctrines of the faith: the Trinity (Nicaea, 325), the divinity of the Holy Spirit (Constantinople, 381), the two natures of Christ (Chalcedon, 451). The canon of Scripture was defined at the Councils of Hippo (393) and Carthage (397). The Church also evangelized the barbarian tribes that were transforming Europe.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Medieval Period (800-1500 AD)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The Catholic Church was the dominant institution of medieval Europe — building universities, hospitals, and cathedrals; preserving classical learning; and shaping the culture of Western civilization. The Great Schism of 1054 separated the Eastern Orthodox churches from Rome. The Crusades (1095-1291) were launched to defend Christian pilgrims in the Holy Land. The great scholastic theologians — Anselm, Aquinas, Bonaventure — developed Catholic theology to its highest expression.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Reformation and Counter-Reformation (1500-1700 AD)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                Martin Luther's 95 Theses (1517) sparked the Protestant Reformation, which split Western Christianity. The Catholic Church responded with the Council of Trent (1545-1563), which clarified Catholic doctrine, reformed abuses, and launched the Counter-Reformation. New religious orders — the Jesuits, the Capuchins, the Carmelites — revitalized Catholic life and evangelized the Americas, Africa, and Asia.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Modern Period (1700-Present)</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The Catholic Church navigated the challenges of the Enlightenment, the French Revolution, the rise of nationalism, and the totalitarian ideologies of the 20th century. The First Vatican Council (1869-1870) defined papal infallibility. The Second Vatican Council (1962-1965) renewed the Church's engagement with the modern world. Today, the Church continues to grow — particularly in Africa, Asia, and Latin America.
              </LinkedText>

              <QuizCTA
                title="How well do you know the Catholic Church?"
                description="Take our assessment and receive a personalized guide to understanding and living your Catholic faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Structure of the Catholic Church</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">The Pope</h3>
              <p className="text-text leading-relaxed mb-6">
                The Pope (from the Latin <em>papa</em>, "father") is the Bishop of Rome and the successor of St. Peter. He is the visible head of the Catholic Church on earth and the Vicar of Christ — Christ's representative. The Pope has supreme authority in matters of faith, morals, and governance of the Church.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The current Pope is Pope Leo XIV (Robert Francis Prevost), elected in May 2025 — the first American pope in history. There have been 266 popes in an unbroken line from St. Peter to the present.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Bishops, Priests, and Deacons</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The Church is governed by a hierarchy of ordained ministers:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Bishops</strong> — successors of the apostles, who govern dioceses (geographical regions) and ordain priests and deacons</li>
                <li><strong>Priests</strong> — ordained ministers who celebrate Mass, administer sacraments, and lead parishes</li>
                <li><strong>Deacons</strong> — ordained ministers who assist bishops and priests, especially in works of charity and service</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Religious Orders</h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The Catholic Church includes hundreds of religious orders — communities of men and women who live according to a specific rule of life. The most famous include the Benedictines (founded by St. Benedict, 6th century), the Franciscans (St. Francis, 13th century), the Dominicans (St. Dominic, 13th century), and the Jesuits (St. Ignatius of Loyola, 16th century).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Catholic Church Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The Catholic Church today is the largest religious institution in the world:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>1.3 billion members</strong> — about 17% of the world's population</li>
                <li><strong>Present in 195 countries</strong> — virtually every nation on earth</li>
                <li><strong>Over 200,000 parishes</strong> worldwide</li>
                <li><strong>The world's largest network</strong> of schools, hospitals, and charitable organizations</li>
                <li><strong>Growing fastest</strong> in Africa and Asia</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-catholic-church">
                The Church operates the world's largest non-governmental network of schools (educating over 50 million students), hospitals (operating about 26% of the world's healthcare facilities), and charitable organizations (including Caritas Internationalis, one of the largest humanitarian networks in the world).
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The Catholic Church is an institution I am bound to hold divine — but for unbelievers a proof of its divinity might be found in the fact that no merely human institution conducted with such knavish imbecility would have lasted a fortnight."
                </p>
                <p className="text-text-muted text-center mt-2">— Hilaire Belloc</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who founded the Catholic Church?", answer: "The Catholic Church was founded by Jesus Christ. He explicitly founded a Church on Peter (Matthew 16:18), gave it authority to teach and baptize (Matthew 28:19-20), and promised to be with it always (Matthew 28:20). Peter went to Rome, where he was martyred, and his successors as Bishop of Rome became the Popes." },
              { question: "How old is the Catholic Church?", answer: "The Catholic Church is approximately 2,000 years old, founded by Jesus Christ around 33 AD. It is the oldest continuously operating institution in human history. The first pope, St. Peter, was martyred in Rome around 64-68 AD." },
              { question: "What is the difference between Catholic and Roman Catholic?", answer: "'Roman Catholic' technically refers to Catholics of the Latin (Roman) Rite — the largest of the 23 rites within the Catholic Church. The Catholic Church also includes Eastern Catholic churches (Byzantine, Coptic, Maronite, etc.) that are in full communion with Rome but have their own liturgical traditions. In common usage, 'Catholic' and 'Roman Catholic' are often used interchangeably." },
              { question: "How many Catholics are there in the world?", answer: "There are approximately 1.3 billion Catholics worldwide — about 17% of the world's population. The largest Catholic populations are in Brazil, Mexico, the Philippines, the United States, and Italy. The Church is growing fastest in Africa and Asia." },
              { question: "What is the Vatican?", answer: "The Vatican (officially the Vatican City State) is an independent city-state within Rome, Italy. It is the headquarters of the Catholic Church and the residence of the Pope. At 44 hectares (110 acres), it is the smallest internationally recognized independent state in the world. It contains St. Peter's Basilica, the Sistine Chapel, the Vatican Museums, and the Apostolic Palace." },
            ]} />

            <RelatedArticles currentSlug="what-is-the-catholic-church" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of the Church.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
