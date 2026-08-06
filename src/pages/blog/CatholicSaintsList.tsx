import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicSaintsList() {
  return (
    <>
      <Helmet>
        <title>List of Catholic Patron Saints & What They're Known For | Guide Catholic</title>
        <meta name="description" content="Complete list of Catholic patron saints by need — health, work, family, travel, lost items. Find your patron saint and how to ask for intercession." />
        <meta name="keywords" content="catholic saints, patron saints, list of patron saints, catholic saints list, list of catholic saints, saints catholic, catholic saint names, patron saints catholic, find your patron saint" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-saints-list/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="List of Catholic Patron Saints & What They're Known For"
        description="Complete list of Catholic patron saints by need — health, work, family, travel, lost items. Find your patron saint and how to ask for intercession."
        url="https://guidecatholic.com/blog/catholic-saints-list/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Catholic Saints List", url: "https://guidecatholic.com/blog/catholic-saints-list/" },
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
              <span className="text-text">Catholic Saints List</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />20 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                List of Catholic Patron Saints & What They're Known For
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic Church has canonized thousands of saints — men and women from every era, culture, and walk of life who now intercede for us in heaven. This comprehensive guide helps you find the right patron saint for your specific need.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-indigo-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Patron saints are Catholic saints in heaven assigned special patronages — health, work, travel, family, lost items, and more. This list of Catholic saints organizes the most searched patron saints by need so you can find your patron and ask for intercession; Catholics venerate saints, not worship them.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">
                One of the most beautiful aspects of Catholic life is the Communion of Saints — the belief that the saints in heaven are alive in God and can intercede for us. When you face a specific need, there is almost certainly a saint who has been given special patronage over that area of life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">
                This guide organizes the most important patron saints by category, so you can quickly find the right saint to invoke for your specific situation.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Quick List: Most Searched Patron Saints</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-8">
                <li><strong>St. Anthony of Padua</strong> — patron of lost items and missing persons</li>
                <li><strong>St. Jude Thaddeus</strong> — patron of impossible causes and desperate situations</li>
                <li><strong>St. Joseph</strong> — patron of families, workers, and the universal Church</li>
                <li><strong>St. Michael the Archangel</strong> — patron of soldiers, police, and spiritual protection</li>
                <li><strong>St. Rita of Cascia</strong> — patron of impossible causes and difficult marriages</li>
                <li><strong>St. Thérèse of Lisieux</strong> — patron of missionaries and the Little Way of holiness</li>
                <li><strong>St. Francis of Assisi</strong> — patron of ecology, animals, and peace</li>
                <li><strong>St. Padre Pio</strong> — patron of stress relief, civil defense, and healing</li>
                <li><strong>St. Joan of Arc</strong> — patron of France, soldiers, and courage</li>
                <li><strong>St. Christopher</strong> — patron of travelers, motorists, and sailors</li>
                <li><strong>St. Monica</strong> — patron of mothers, wives, and difficult marriages</li>
                <li><strong>St. Benedict</strong> — patron of students, Europe, and monastic life</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Ask a Saint for Intercession</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">
                Before diving into the list, a brief note on how to pray to the saints. Catholics do not worship saints — they ask them to pray for us, just as we ask friends to pray for us. The difference is that the saints are in heaven and their prayers are especially powerful.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">
                A simple prayer to any saint: "St. [Name], pray for me. I am facing [describe your need]. Please bring my petition before God and ask for His help. Amen."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patron Saints for Health & Healing</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold text-text">Saint</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Patronage</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Feast Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["St. Raphael the Archangel", "The sick, physicians, healing", "September 29"],
                      ["St. Luke the Evangelist", "Doctors, surgeons, medical workers", "October 18"],
                      ["St. Peregrine Laziosi", "Cancer patients, serious illness", "May 1"],
                      ["St. Dymphna", "Mental illness, anxiety, depression", "May 15"],
                      ["St. Blaise", "Throat ailments, wild animals", "February 3"],
                      ["St. Agatha", "Breast cancer, nurses", "February 5"],
                      ["St. Camillus de Lellis", "Nurses, hospitals, the sick", "July 14"],
                      ["St. John of God", "Heart disease, hospitals", "March 8"],
                      ["St. Gerard Majella", "Expectant mothers, childbirth", "October 16"],
                      ["Our Lady of Lourdes", "The sick, miraculous healing", "February 11"],
                    ].map(([saint, patronage, feast], i) => (
                      <tr key={i} className={i % 2 === 0 ? "" : "bg-background-muted/30"}>
                        <td className="border border-border p-3 text-text font-medium">{saint}</td>
                        <td className="border border-border p-3 text-text-muted">{patronage}</td>
                        <td className="border border-border p-3 text-text-muted">{feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patron Saints for Family & Relationships</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold text-text">Saint</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Patronage</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Feast Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["St. Joseph", "Fathers, families, workers, the universal Church", "March 19 / May 1"],
                      ["St. Monica", "Mothers, difficult marriages, alcoholics", "August 27"],
                      ["St. Anne", "Grandmothers, mothers, homemakers", "July 26"],
                      ["St. Joachim", "Grandfathers, fathers", "July 26"],
                      ["St. Louis IX", "Fathers, parents, the French", "August 25"],
                      ["St. Gianna Beretta Molla", "Mothers, physicians, unborn children", "April 28"],
                      ["St. Thomas More", "Lawyers, politicians, difficult marriages", "June 22"],
                      ["St. Rita of Cascia", "Impossible causes, abused wives", "May 22"],
                      ["St. Valentine", "Engaged couples, love", "February 14"],
                      ["St. Elizabeth Ann Seton", "Catholic schools, widows", "January 4"],
                    ].map(([saint, patronage, feast], i) => (
                      <tr key={i} className={i % 2 === 0 ? "" : "bg-background-muted/30"}>
                        <td className="border border-border p-3 text-text font-medium">{saint}</td>
                        <td className="border border-border p-3 text-text-muted">{patronage}</td>
                        <td className="border border-border p-3 text-text-muted">{feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <QuizCTA
                title="Which saint is your spiritual companion?"
                description="Take our Catholic faith assessment and discover which saints can guide your spiritual journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patron Saints for Work & Professions</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold text-text">Saint</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Patronage</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Feast Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["St. Joseph the Worker", "Workers, craftsmen, laborers", "May 1"],
                      ["St. Luke", "Doctors, surgeons, painters", "October 18"],
                      ["St. Ivo of Kermartin", "Lawyers, judges", "May 19"],
                      ["St. Thomas Aquinas", "Students, scholars, universities", "January 28"],
                      ["St. Francis de Sales", "Writers, journalists, the deaf", "January 24"],
                      ["St. Cecilia", "Musicians, singers, poets", "November 22"],
                      ["St. Homobonus", "Businesspeople, tailors", "November 13"],
                      ["St. Isidore the Farmer", "Farmers, rural communities", "May 15"],
                      ["St. Zita", "Domestic workers, servants", "April 27"],
                      ["St. Matthew", "Accountants, bankers, tax collectors", "September 21"],
                    ].map(([saint, patronage, feast], i) => (
                      <tr key={i} className={i % 2 === 0 ? "" : "bg-background-muted/30"}>
                        <td className="border border-border p-3 text-text font-medium">{saint}</td>
                        <td className="border border-border p-3 text-text-muted">{patronage}</td>
                        <td className="border border-border p-3 text-text-muted">{feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patron Saints for Travel & Protection</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold text-text">Saint</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Patronage</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Feast Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["St. Christopher", "Travelers, motorists, sailors", "July 25"],
                      ["St. Michael the Archangel", "Soldiers, police, spiritual protection", "September 29"],
                      ["St. Raphael the Archangel", "Travelers, the blind, healing", "September 29"],
                      ["St. Nicholas of Myra", "Sailors, children, travelers", "December 6"],
                      ["St. Brendan the Navigator", "Sailors, travelers, whales", "May 16"],
                      ["St. Frances of Rome", "Motorists, widows", "March 9"],
                      ["St. Joseph of Cupertino", "Pilots, astronauts, students", "September 18"],
                      ["St. Elmo (Erasmus)", "Sailors, abdominal pain", "June 2"],
                    ].map(([saint, patronage, feast], i) => (
                      <tr key={i} className={i % 2 === 0 ? "" : "bg-background-muted/30"}>
                        <td className="border border-border p-3 text-text font-medium">{saint}</td>
                        <td className="border border-border p-3 text-text-muted">{patronage}</td>
                        <td className="border border-border p-3 text-text-muted">{feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patron Saints for Difficult Situations</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold text-text">Saint</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Patronage</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Feast Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["St. Jude Thaddeus", "Impossible causes, desperate situations", "October 28"],
                      ["St. Rita of Cascia", "Impossible causes, abused wives, loneliness", "May 22"],
                      ["St. Philomena", "Desperate causes, infants", "August 11"],
                      ["St. Expeditus", "Urgent causes, procrastination", "April 19"],
                      ["St. Dismas (the Good Thief)", "Death row prisoners, repentant sinners", "March 25"],
                      ["St. Mary Magdalene", "Repentant sinners, contemplatives", "July 22"],
                      ["St. John Vianney", "Priests, confessors", "August 4"],
                      ["St. Maximilian Kolbe", "Prisoners, drug addicts, journalists", "August 14"],
                    ].map(([saint, patronage, feast], i) => (
                      <tr key={i} className={i % 2 === 0 ? "" : "bg-background-muted/30"}>
                        <td className="border border-border p-3 text-text font-medium">{saint}</td>
                        <td className="border border-border p-3 text-text-muted">{patronage}</td>
                        <td className="border border-border p-3 text-text-muted">{feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patron Saints for Spiritual Life</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold text-text">Saint</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Patronage</th>
                      <th className="border border-border p-3 text-left font-semibold text-text">Feast Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["The Virgin Mary", "The universal Church, all Christians", "Multiple feast days"],
                      ["St. Joseph", "The universal Church, a happy death", "March 19"],
                      ["St. Thérèse of Lisieux", "Missionaries, florists, the Little Way", "October 1"],
                      ["St. Francis of Assisi", "Ecology, animals, peace", "October 4"],
                      ["St. Ignatius of Loyola", "Retreats, spiritual exercises, Jesuits", "July 31"],
                      ["St. Teresa of Ávila", "Contemplatives, headache sufferers", "October 15"],
                      ["St. John of the Cross", "Mystics, contemplatives", "December 14"],
                      ["St. Padre Pio", "Stress relief, civil defense volunteers", "September 23"],
                    ].map(([saint, patronage, feast], i) => (
                      <tr key={i} className={i % 2 === 0 ? "" : "bg-background-muted/30"}>
                        <td className="border border-border p-3 text-text font-medium">{saint}</td>
                        <td className="border border-border p-3 text-text-muted">{patronage}</td>
                        <td className="border border-border p-3 text-text-muted">{feast}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Most Popular Saints and Their Prayers</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">
                Here are brief prayers to the most frequently invoked saints:
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text font-semibold mb-2">St. Michael the Archangel (Protection)</p>
                <p className="text-text italic text-sm">Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text font-semibold mb-2">St. Jude (Impossible Cases)</p>
                <p className="text-text italic text-sm">Most holy Apostle, St. Jude Thaddeus, faithful servant and friend of Jesus, the Church honors and invokes you universally as the patron of hopeless cases. Pray for me, I am so helpless and alone. Come to my assistance in this great need. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text font-semibold mb-2">St. Anthony (Lost Things)</p>
                <p className="text-text italic text-sm">Dear St. Anthony, please come around — [name the lost item] is lost and cannot be found. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
                <p className="text-text font-semibold mb-2">St. Joseph (Families & Workers)</p>
                <p className="text-text italic text-sm">O Saint Joseph, whose protection is so great, so strong, so prompt before the throne of God, I place in you all my interests and desires. O Saint Joseph, do assist me by your powerful intercession and obtain for me from your divine Son all spiritual blessings through Jesus Christ, Our Lord. Amen.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-2">St. Thérèse of Lisieux (The Little Way)</p>
                <p className="text-text italic text-sm">Little Flower, in this hour, show your power. St. Thérèse, please pick a rose from the heavenly garden and send it to me as a message of love. Amen.</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The saints are not just models to imitate — they are friends to accompany us, intercessors to pray for us, and companions on the journey to God."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope Francis</p>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Life and Mission</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">Complete list of Catholic patron saints by need — health, work, family, travel, lost items. Find your patron saint and how to ask for intercession. Saints are not distant legends — they are men and women who cooperated with grace in real historical circumstances. Their stories show that holiness is possible in ordinary work, family life, persecution, and service.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Seek This Saint&apos;s Intercession</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">The Church teaches that saints in heaven remain part of the communion of believers (CCC 954–959). We do not worship them; we ask their prayers as we might ask a friend on earth. Patron saints often connect to specific needs — illness, work, conversion, or protection — because of how they lived and died.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Feast Days and Parish Devotion in the U.S.</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">Parishes across the United States celebrate saint feast days with special Masses, novenas, and food traditions tied to immigrant communities. Mark the feast on your calendar, read the Mass readings that day, and consider one concrete act of charity in the saint&apos;s honor.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Growing in Friendship With the Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">Choose one saint to \"befriend\" this year: read a short biography, pray a novena before their feast, and ask how their virtues — courage, humility, chastity, or mercy — apply to your state in life. Holiness spreads through imitation and intercession, not superstition.</LinkedText>

            </div>

              </div>

            <BlogFAQ faqs={[
              { question: "What are Catholic patron saints?", answer: "Catholic patron saints are canonized men and women in heaven whom the Church assigns special patronage over particular needs, professions, places, or groups — such as St. Anthony for lost items or St. Joseph for families. Catholics ask patron saints to intercede with God on their behalf; they do not worship saints as gods." },
              { question: "What is a list of patron saints used for?", answer: "A list of patron saints helps Catholics quickly find the right saint to invoke for a specific need — illness, travel, marriage, work, or a desperate situation. Instead of searching blindly, you can match your intention to a saint's patronage and pray with greater confidence and devotion." },
              { question: "How do I find my patron saint?", answer: "Your patron saint is typically the saint whose name you share (your baptismal name or Confirmation name). You can also choose a patron saint based on your profession, your struggles, your nationality, or simply a saint whose life inspires you. There is no wrong choice — any saint can be your patron." },
              { question: "Can I have more than one patron saint?", answer: "Yes. Catholics often have multiple patron saints — a baptismal patron, a Confirmation patron, a patron of their profession, and saints they have a personal devotion to. The saints are not jealous of each other; they all want to help you." },
              { question: "What is the difference between a patron saint and a guardian angel?", answer: "A patron saint is a canonized saint in heaven who has been given special patronage over a particular group, profession, or cause. A guardian angel is an angel assigned by God to protect and guide each individual person from birth. Both intercede for us, but in different ways." },
              { question: "How do I ask a saint for intercession?", answer: "Simply speak to the saint as you would to a friend: 'St. [Name], please pray for me. I am facing [describe your need]. Please bring my petition before God and ask for His help.' You can also pray a formal prayer or novena to the saint. The key is faith and sincerity." },
              { question: "Is it okay to pray to saints I don't know much about?", answer: "Yes. You don't need to know a saint's full biography to ask for their intercession. A simple prayer — 'St. [Name], pray for me' — is sufficient. That said, learning about the saints enriches your devotion and helps you understand why they have been given particular patronages." },,
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="catholic-saints-list" />

            <ArticleBottomCTA title="How Deep Is Your Catholic Faith?" description="Take our assessment and receive a personalized guide to growing in your devotion to the saints." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
