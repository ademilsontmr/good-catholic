import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintMaximilianKolbe() {
  return (
    <>
      <Helmet>
        <title>Saint Maximilian Kolbe: Martyr of Auschwitz & Apostle of Mary | Guide Catholic</title>
        <meta name="description" content="Discover Saint Maximilian Kolbe — the Polish Franciscan priest who volunteered to die in place of a stranger at Auschwitz. His life, his Militia Immaculata, and his heroic martyrdom." />
        <meta name="keywords" content="saint maximilian kolbe, martyr of auschwitz, maximilian kolbe auschwitz, militia immaculata, kolbe patron of drug addicts, feast day august 14" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-maximilian-kolbe/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Maximilian Kolbe: Martyr of Auschwitz & Apostle of Mary"
        description="Discover Saint Maximilian Kolbe — the Polish Franciscan priest who volunteered to die in place of a stranger at Auschwitz. His life, his Militia Immaculata, and his heroic martyrdom."
        url="https://guidecatholic.com/blog/saint-maximilian-kolbe/"
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
              <span className="text-text">Saint Maximilian Kolbe</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Intercession</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Maximilian Kolbe: Martyr of Auschwitz & Apostle of Mary
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                In July 1941, a prisoner escaped from Auschwitz. The Nazi guards selected ten men to die by starvation in reprisal. One of the condemned men cried out: "My wife! My children!" A Polish priest stepped forward: "I am a Catholic priest. I wish to die for that man." The commandant agreed. That priest was Maximilian Kolbe.
              </p>
            </header>
            <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-gray-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                Saint Maximilian Kolbe (1894–1941) is one of the most beloved saints of the 20th century — a man whose life was marked by extraordinary Marian devotion, tireless apostolic work, and a final act of heroic charity that has become one of the most powerful symbols of Christian love in the modern world. He was canonized by Pope John Paul II in 1982 as a "martyr of charity."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life and the Vision of Mary</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                Rajmund Kolbe was born on January 8, 1894, in Zduńska Wola, in what was then the Russian-controlled part of Poland. His parents were devout Catholics, and Rajmund showed a deep piety from childhood. When he was about 10 years old, he had a vision that would shape his entire life: the Virgin Mary appeared to him holding two crowns — one white (representing purity) and one red (representing martyrdom) — and asked him which he would choose. He chose both.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                Rajmund entered the Franciscan Order and took the name Maximilian. He studied in Rome, where he earned doctorates in philosophy and theology. In Rome, he was deeply troubled by the anti-Catholic demonstrations of Freemasons, who marched through the streets with banners proclaiming "Satan will reign in the Vatican." In response, in 1917 — the year of the Fatima apparitions — he founded the Militia Immaculata (Army of the Immaculate One), a Marian apostolate dedicated to the conversion of sinners and enemies of the Church through the intercession of Mary.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Militia Immaculata and Niepokalanów</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                After his ordination and return to Poland, Kolbe threw himself into apostolic work with extraordinary energy. Despite suffering from tuberculosis — which would plague him for the rest of his life — he founded a magazine, the Knight of the Immaculata, which grew to a circulation of over one million copies per month by the 1930s.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                In 1927, he founded Niepokalanów ("City of the Immaculate") near Warsaw — a Franciscan friary that became the largest Catholic religious community in the world, with over 700 friars. Niepokalanów had its own printing press, radio station, and even an airstrip. Kolbe used every modern means of communication to spread devotion to Mary and the Catholic faith.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                In 1930, Kolbe traveled to Japan and founded a similar community near Nagasaki — Mugenzai no Sono ("Garden of the Immaculate"). The location he chose, on the side of a mountain away from the city, would prove providential: when the atomic bomb was dropped on Nagasaki in 1945, the community was shielded from the blast.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Arrest and Auschwitz</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                When Germany invaded Poland in September 1939, Kolbe remained at Niepokalanów. The friary sheltered thousands of refugees, including 2,000 Jews. In February 1941, Kolbe was arrested by the Gestapo and sent to Auschwitz concentration camp, where he was given the prisoner number 16670.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                At Auschwitz, Kolbe continued his priestly ministry in secret — hearing confessions, celebrating Mass with smuggled bread and wine, encouraging his fellow prisoners. He was subjected to brutal treatment, including beatings and forced labor, but maintained a remarkable serenity and charity.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                In July 1941, a prisoner escaped from Block 14. The camp commandant, Rudolf Höss, ordered that ten men from the block be selected to die by starvation in an underground bunker — a standard reprisal. When one of the selected men, Franciszek Gajowniczek, cried out for his wife and children, Kolbe stepped forward and asked to take his place. Höss agreed.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                Kolbe and the nine other condemned men were locked in the starvation bunker. While the others wept and screamed, Kolbe led them in prayer and hymns. After two weeks, only Kolbe remained alive. On August 14, 1941 — the eve of the feast of the Assumption — a guard administered a lethal injection of carbolic acid. Kolbe reportedly raised his arm to receive the injection. He was 47 years old.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                Franciszek Gajowniczek — the man whose life Kolbe saved — survived the war and lived until 1995. He attended Kolbe's canonization in 1982.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your Marian devotion and Catholic life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Canonization and Patronages</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                Maximilian Kolbe was beatified by Pope Paul VI in 1971 and canonized by Pope John Paul II on October 10, 1982 — a canonization attended by Franciszek Gajowniczek, the man whose life he had saved. John Paul II, himself a Pole who had lived through the Nazi occupation, called Kolbe "the patron saint of our difficult century."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                Kolbe is the patron saint of drug addicts, political prisoners, families, journalists, and the pro-life movement. His feast day is August 14 — the anniversary of his death.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Militia Immaculata Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-maximilian-kolbe">
                The Militia Immaculata that Kolbe founded in 1917 continues today as an international Marian apostolate with millions of members worldwide. Its mission — the conversion of sinners and the sanctification of souls through consecration to Mary — remains unchanged. Members consecrate themselves to Mary and commit to spreading devotion to the Immaculate Conception.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The most deadly poison of our times is indifference. And this happens, although the praise of God should know no limits. Let us strive, therefore, to praise Him to the greatest extent of our powers."
                </p>
                <p className="text-text-muted text-center mt-2">— Saint Maximilian Kolbe</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Who was Saint Maximilian Kolbe?", answer: "Saint Maximilian Kolbe (1894–1941) was a Polish Franciscan priest who founded the Militia Immaculata Marian apostolate and the friary of Niepokalanów. He was arrested by the Gestapo in 1941 and sent to Auschwitz, where he volunteered to die in place of a fellow prisoner. He was canonized by Pope John Paul II in 1982 as a 'martyr of charity.' His feast day is August 14." },
              { question: "What did Saint Maximilian Kolbe do at Auschwitz?", answer: "At Auschwitz, Kolbe continued his priestly ministry in secret and, in July 1941, volunteered to take the place of a fellow prisoner — Franciszek Gajowniczek — who had been selected to die by starvation in reprisal for an escape. Kolbe spent two weeks in the starvation bunker, leading the other condemned men in prayer and hymns, before being killed by a lethal injection on August 14, 1941." },
              { question: "What is the Militia Immaculata?", answer: "The Militia Immaculata (Army of the Immaculate One) is a Marian apostolate founded by Maximilian Kolbe in Rome in 1917, dedicated to the conversion of sinners and the sanctification of souls through consecration to Mary. It continues today as an international organization with millions of members worldwide." },
              { question: "What is Saint Maximilian Kolbe the patron saint of?", answer: "Saint Maximilian Kolbe is the patron saint of drug addicts, political prisoners, families, journalists, and the pro-life movement. He is also considered a patron of the 20th century by Pope John Paul II." },
              { question: "Did the man Kolbe saved survive?", answer: "Yes. Franciszek Gajowniczek, the man whose life Kolbe saved, survived the war and lived until 1995. He attended Kolbe's canonization ceremony in Rome in 1982 and spent the rest of his life testifying to Kolbe's heroic act of charity." },
            ]} />

            <RelatedArticles currentSlug="saint-maximilian-kolbe" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your Marian devotion and Catholic life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
