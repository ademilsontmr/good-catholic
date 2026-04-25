import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicSaintsList() {
  return (
    <>
      <Helmet>
        <title>Catholic Saints List: Patron Saints for Every Need & Occasion | Guide Catholic</title>
        <meta name="description" content="Complete Catholic saints list organized by patronage — saints for health, work, travel, family, and specific needs. Find your patron saint and learn how to ask for their intercession." />
        <meta name="keywords" content="catholic saints list, patron saints catholic, list of catholic saints, patron saint for every need, catholic saints by patronage, find your patron saint" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-saints-list/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Saints List: Patron Saints for Every Need & Occasion"
        description="Complete Catholic saints list organized by patronage — saints for health, work, travel, family, and specific needs. Find your patron saint and learn how to ask for their intercession."
        url="https://guidecatholic.com/blog/catholic-saints-list/"
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
                Catholic Saints List: Patron Saints for Every Need & Occasion
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic Church has canonized thousands of saints — men and women from every era, culture, and walk of life who now intercede for us in heaven. This comprehensive guide helps you find the right patron saint for your specific need.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Users className="w-24 h-24 text-indigo-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">
                One of the most beautiful aspects of Catholic life is the Communion of Saints — the belief that the saints in heaven are alive in God and can intercede for us. When you face a specific need, there is almost certainly a saint who has been given special patronage over that area of life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-saints-list">
                This guide organizes the most important patron saints by category, so you can quickly find the right saint to invoke for your specific situation.
              </LinkedText>

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
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "How do I find my patron saint?", answer: "Your patron saint is typically the saint whose name you share (your baptismal name or Confirmation name). You can also choose a patron saint based on your profession, your struggles, your nationality, or simply a saint whose life inspires you. There is no wrong choice — any saint can be your patron." },
              { question: "Can I have more than one patron saint?", answer: "Yes. Catholics often have multiple patron saints — a baptismal patron, a Confirmation patron, a patron of their profession, and saints they have a personal devotion to. The saints are not jealous of each other; they all want to help you." },
              { question: "What is the difference between a patron saint and a guardian angel?", answer: "A patron saint is a canonized saint in heaven who has been given special patronage over a particular group, profession, or cause. A guardian angel is an angel assigned by God to protect and guide each individual person from birth. Both intercede for us, but in different ways." },
              { question: "How do I ask a saint for intercession?", answer: "Simply speak to the saint as you would to a friend: 'St. [Name], please pray for me. I am facing [describe your need]. Please bring my petition before God and ask for His help.' You can also pray a formal prayer or novena to the saint. The key is faith and sincerity." },
              { question: "Is it okay to pray to saints I don't know much about?", answer: "Yes. You don't need to know a saint's full biography to ask for their intercession. A simple prayer — 'St. [Name], pray for me' — is sufficient. That said, learning about the saints enriches your devotion and helps you understand why they have been given particular patronages." },
            ]} />

            <RelatedArticles currentSlug="catholic-saints-list" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your devotion to the saints.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
