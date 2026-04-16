import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";

export default function TenCommandmentsCatholic() {
  return (
    <>
      <Helmet>
        <title>The 10 Commandments: Catholic Version Explained | Guide Catholic</title>
        <meta name="description" content="What are the 10 Commandments in the Catholic Church? Learn the full text, how Catholic numbering differs from Protestant, what each commandment means, and how to live them today." />
        <meta name="keywords" content="10 commandments catholic, ten commandments catholic church, catholic commandments list, how catholics number commandments" />
        <link rel="canonical" href="https://guidecatholic.com/blog/ten-commandments-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The 10 Commandments: Catholic Version Explained"
        description="What are the 10 Commandments in the Catholic Church? Learn the full text, how Catholic numbering differs from Protestant, what each commandment means, and how to live them today."
        url="https://guidecatholic.com/blog/ten-commandments-catholic/"
        author="Catholic Faith Guide Team"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "The 10 Commandments", url: "https://guidecatholic.com/blog/ten-commandments-catholic/" },
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
              <span className="text-text">The 10 Commandments — Catholic</span>
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
                  Formation & Doctrine
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  17 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The 10 Commandments: Complete Catholic Guide
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Ten Commandments are the bedrock of Catholic moral life. But did you know that Catholics and most Protestants number them differently? Here is a complete guide to the Commandments as the Catholic Church teaches them — with full text, theological explanation, and practical application.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-amber-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Ten Commandments — called the <em>Decalogue</em> (from the Greek <em>deka logoi</em>, "ten words") — were given by God to Moses on Mount Sinai and are recorded in Exodus 20:1-17 and Deuteronomy 5:6-21. They form the foundational moral law of the Judeo-Christian tradition, and the Catholic Church treats them as the essential framework for understanding the moral life.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church dedicates an entire section (Part Three, Section Two) to the Ten Commandments, treating each one with rich theological depth. As the Catechism states: <em>"The Ten Commandments take on their full meaning within the covenant. According to Scripture, man's moral life has all its meaning in and through the covenant."</em> (CCC 2061)
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Do Catholics Number the Commandments Differently?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                One of the most common sources of confusion between Catholics and Protestants is the numbering of the Ten Commandments. Most Protestants (following Luther and Calvin) use a different numbering system than Catholics (following the tradition of St. Augustine and the Latin Church).
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left font-semibold">Catholic / Lutheran #</th>
                      <th className="border border-border p-3 text-left font-semibold">Reformed / Anglican #</th>
                      <th className="border border-border p-3 text-left font-semibold">Content</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border p-3 font-semibold">1st</td><td className="border border-border p-3">1st & 2nd</td><td className="border border-border p-3">No other gods + no idols (Catholics combine)</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">2nd</td><td className="border border-border p-3">3rd</td><td className="border border-border p-3">Do not take the Lord's name in vain</td></tr>
                    <tr><td className="border border-border p-3 font-semibold">3rd</td><td className="border border-border p-3">4th</td><td className="border border-border p-3">Keep holy the Sabbath day</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">4th</td><td className="border border-border p-3">5th</td><td className="border border-border p-3">Honor your father and mother</td></tr>
                    <tr><td className="border border-border p-3 font-semibold">5th</td><td className="border border-border p-3">6th</td><td className="border border-border p-3">You shall not kill</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">6th</td><td className="border border-border p-3">7th</td><td className="border border-border p-3">You shall not commit adultery</td></tr>
                    <tr><td className="border border-border p-3 font-semibold">7th</td><td className="border border-border p-3">8th</td><td className="border border-border p-3">You shall not steal</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">8th</td><td className="border border-border p-3">9th</td><td className="border border-border p-3">You shall not bear false witness</td></tr>
                    <tr><td className="border border-border p-3 font-semibold">9th</td><td className="border border-border p-3">10th (part)</td><td className="border border-border p-3">You shall not covet your neighbor's wife</td></tr>
                    <tr className="bg-background-muted/30"><td className="border border-border p-3 font-semibold">10th</td><td className="border border-border p-3">10th (part)</td><td className="border border-border p-3">You shall not covet your neighbor's goods</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-text leading-relaxed mb-6">
                Catholics (following Augustine and the Western tradition) combine what Protestants treat as the 1st and 2nd Commandments (no other gods + no graven images) into a single 1st Commandment, arguing that the prohibition of idols is implied in the prohibition of false gods. To reach ten, Catholics then divide the final Commandment against coveting into two: one about coveting a neighbor's spouse (9th) and one about coveting goods (10th).
              </p>
              <p className="text-text leading-relaxed mb-6">
                Neither approach is doctrinally wrong — both reach ten commandments — but the difference can cause confusion when comparing Catholic and Protestant religious education materials.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-6">
                The Ten Commandments: Full Catholic Text and Explanation
              </h2>

              {/* 1st */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">1st Commandment: I am the Lord your God — you shall have no other gods before me.</h3>
                <p className="text-text leading-relaxed mb-3">
                  The first and greatest of all commandments establishes the fundamental orientation of all moral life: God alone is Lord, and nothing created may occupy His place in the human heart. This commandment requires the three theological virtues toward God: <strong>faith</strong> (believing in God and His revelation), <strong>hope</strong> (trusting in His promises), and <strong>charity</strong> (loving God above all things).
                </p>
                <p className="text-text leading-relaxed mb-3">
                  It forbids sins against faith (apostasy, heresy, schism), sins against hope (despair, presumption), and sins against charity (atheism, agnosticism, sacrilege, simony, and various forms of superstition including magic, divination, and consulting horoscopes).
                </p>
                <p className="text-text leading-relaxed">
                  Crucially, the CCC clarifies that the prohibition on "graven images" is not about religious art per se — the Church has always used sacred images in worship — but about the worship of created things as gods. The distinction is between <em>veneration</em> (honor given to holy persons and images) and <em>latria</em> (adoration belonging to God alone).
                </p>
              </div>

              {/* 2nd */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">2nd Commandment: You shall not take the name of the Lord your God in vain.</h3>
                <p className="text-text leading-relaxed mb-3">
                  God's name is holy because it reveals His very nature and presence. This commandment requires that we speak of God, Jesus Christ, the Virgin Mary, and the saints with reverence and love. It forbids blasphemy (speaking against God, Christ, or the Church with contempt), false oaths (swearing by God to confirm a lie), and cursing (calling down evil upon a person or thing in God's name).
                </p>
                <p className="text-text leading-relaxed">
                  The Catechism specifically addresses the abuse of God's name in common speech: <em>"The second commandment forbids every improper use of God's name. Blasphemy is the use of the name of God, of Jesus Christ, of the Virgin Mary, and of the saints in an offensive way."</em> (CCC 2162)
                </p>
              </div>

              {/* 3rd */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">3rd Commandment: Remember to keep holy the Lord's Day.</h3>
                <p className="text-text leading-relaxed mb-3">
                  The Sabbath was given to Israel as a participation in God's own rest after creation (Gen 2:2-3) and as a sign of the covenant. For Christians, Sunday — the first day of the week, the day of Christ's Resurrection — has replaced the Saturday Sabbath as the primary sacred day. The Sunday obligation requires attending Mass, refraining from unnecessary work, and devoting time to rest, family, and works of mercy.
                </p>
                <p className="text-text leading-relaxed">
                  Missing Sunday Mass without a serious reason (illness, care for a young child, unavoidable work) is a grave matter that may constitute a mortal sin. The CCC teaches that Sunday "is to be observed as the foremost holy day of obligation" (CCC 2177).
                </p>
              </div>

              {/* 4th */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">4th Commandment: Honor your father and your mother.</h3>
                <p className="text-text leading-relaxed mb-3">
                  This is the first commandment that concerns human relationships, and it serves as the bridge between the "love of God" commandments (1–3) and the "love of neighbor" commandments (5–10). It requires children to obey, respect, and care for their parents — and extends to the proper respect owed to all legitimate authority: civil leaders, teachers, employers, and the Church.
                </p>
                <p className="text-text leading-relaxed">
                  It also specifies the corresponding duties of parents: to care for their children's physical, emotional, and spiritual needs; to educate them in the faith; to give them an example of virtue; and to respect their vocations. The CCC dedicates extensive treatment to the duties of civil authorities to govern justly in light of this commandment.
                </p>
              </div>

              {/* 5th */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">5th Commandment: You shall not kill.</h3>
                <p className="text-text leading-relaxed mb-3">
                  Human life is sacred from conception to natural death because every person is made in the image and likeness of God (Gen 1:26-27). This commandment forbids murder (direct and intentional killing of an innocent person), abortion, euthanasia and assisted suicide, genocide, and suicide. It also forbids cooperation in any action that directly attacks human life.
                </p>
                <p className="text-text leading-relaxed mb-3">
                  The CCC addresses the permissibility of legitimate self-defense, just warfare, and (in limited circumstances) capital punishment, while affirming the absolute prohibition against directly taking innocent life. Recent magisterial development under Pope Francis has further restricted the permissibility of capital punishment to nearly zero given modern possibilities of incarceration.
                </p>
                <p className="text-text leading-relaxed">
                  Jesus extended this commandment in the Sermon on the Mount to forbid even interior hatred: <em>"Everyone who is angry with his brother will be liable to judgment"</em> (Mt 5:22).
                </p>
              </div>

              {/* 6th */}
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">6th Commandment: You shall not commit adultery.</h3>
                <p className="text-text leading-relaxed mb-3">
                  This commandment concerns the sanctity of marriage and human sexuality. It forbidden adultery (sexual intercourse by a married person with someone other than their spouse) and all sexual activity outside of marriage between one man and one woman: fornication, pornography, prostitution, rape, and homosexual acts. Jesus extended it to forbid even lustful interior intentions: <em>"Anyone who looks at a woman with lust has already committed adultery with her in his heart"</em> (Mt 5:28).
                </p>
                <p className="text-text leading-relaxed">
                  The corresponding positive virtue is chastity — the successful integration of sexuality within the person according to their state in life. Sexuality is a great gift from God, ordered toward marital love and procreation, and this commandment is ultimately about protecting the beauty of that gift.
                </p>
              </div>

              {/* 7th */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">7th Commandment: You shall not steal.</h3>
                <p className="text-text leading-relaxed mb-3">
                  This commandment forbids all unjust taking or withholding of another's goods: theft, fraud, corruption, paying unjust wages, tax evasion, environmental destruction of the commons, and monopolistic appropriation of common goods. It also requires the positive duty of justice: restitution when possible, fair dealings in commerce, and care for the poor.
                </p>
                <p className="text-text leading-relaxed">
                  The CCC connects this commandment to the Church's extensive social doctrine, including the universal destination of goods (all created goods are ultimately meant for the benefit of all humanity), the right to private property, and the special obligation of social justice toward the poor and vulnerable. It is not enough to abstain from stealing — we are also called to actively promote economic justice.
                </p>
              </div>

              {/* 8th */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">8th Commandment: You shall not bear false witness against your neighbor.</h3>
                <p className="text-text leading-relaxed mb-3">
                  This commandment requires truthfulness and forbids all forms of lying and deception: perjury (lying under oath), rash judgment (assuming the worst of another without evidence), detraction (revealing true but private faults without necessity), calumny (lying about another's faults), and flattery (telling pleasing lies). It also governs the use of social media, journalism, and all forms of communication.
                </p>
                <p className="text-text leading-relaxed">
                  The positive virtue is truthfulness — a disposition to honor truth in speech and action. The Catechism emphasizes that "the right to the communication of the truth is not unconditional" — certain truths may be protected by legitimate professional confidentiality (doctor-patient, priest-penitent in the confessional seal), and one is not obligated to share every truth with every person at every time.
                </p>
              </div>

              {/* 9th */}
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">9th Commandment: You shall not covet your neighbor's wife.</h3>
                <p className="text-text leading-relaxed mb-3">
                  This commandment concerns the interior life of desire and imagination. Coveting one's neighbor's spouse means deliberately entertaining desires or fantasies about adultery. It requires interior purity — the purification not just of acts but of thoughts, desires, and the imagination.
                </p>
                <p className="text-text leading-relaxed">
                  The positive virtue is modesty — a way of living and seeing that refuses to reduce others to objects of fantasy. The CCC connects this to the theology of the heart: <em>"The heart is the seat of moral personality: 'Out of the heart come evil thoughts, murder, adultery, fornication...'"</em> (CCC 2517, citing Mt 15:19). Purifying the heart requires prayer, the sacraments, and a vigilant custody of the eyes and imagination.
                </p>
              </div>

              {/* 10th */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-6">
                <h3 className="font-display text-xl font-bold text-text mb-2">10th Commandment: You shall not covet your neighbor's goods.</h3>
                <p className="text-text leading-relaxed mb-3">
                  The tenth commandment completes the Decalogue by addressing the interior disposition of greed and envy — the disordered desire for another's possessions. The CCC states: <em>"The tenth commandment forbids greed and the desire to amass earthly goods without limit. It forbids avarice arising from a passion for riches and their attendant power."</em> (CCC 2536)
                </p>
                <p className="text-text leading-relaxed">
                  The virtue corresponding to this commandment is poverty of spirit — the interior detachment from material goods that Jesus proclaimed as the entry to the Kingdom: <em>"Blessed are the poor in spirit, for theirs is the kingdom of heaven"</em> (Mt 5:3). This does not require the abandonment of all possessions, but a radical interior freedom from possessions as ultimate values.
                </p>
              </div>

              <QuizCTA
                title="How well do you know your Catholic moral foundations?"
                description="Take our quiz and receive a personalized reflection on where you are in your faith journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Two Great Commandments: Jesus's Summary
              </h2>
              <p className="text-text leading-relaxed mb-6">
                When a Pharisee asked Jesus which is the greatest commandment, He gave a response that the Church has always seen as the interpretive key to the entire Decalogue:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed italic text-center">
                  "You shall love the Lord your God with all your heart, and with all your soul, and with all your mind. This is the greatest and first commandment. And a second is like it: You shall love your neighbor as yourself. On these two commandments hang all the law and the prophets."
                </p>
                <p className="text-text-muted text-center mt-2">— Matthew 22:37-40</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                The Catechism organizes its entire treatment of the Ten Commandments around this dual love: Commandments 1–3 concern love of God; Commandments 4–10 concern love of neighbor. The Decalogue is not ultimately about prohibition — it is the map of human love: what it looks like to love God and neighbor completely.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Are Catholics Still Bound by the Old Testament Law?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                This is one of the most common theological questions about the Commandments. The Church distinguishes three types of precepts in the Old Testament:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Moral precepts</strong> (the Ten Commandments) — these express the natural moral law written on the human heart and remain permanently binding.</li>
                <li><strong>Ceremonial precepts</strong> (temple rituals, dietary laws, circumcision, etc.) — these foreshadowed Christ and have been fulfilled and superseded by the New Covenant.</li>
                <li><strong>Judicial precepts</strong> (civil laws of ancient Israel) — these governed a specific historical community and are not binding today.</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                The Ten Commandments, as moral precepts, are permanently binding on all people because they express the natural moral law accessible to human reason, and because Christ explicitly affirms them in the New Testament (Mt 5:17-20; 19:16-22). Grace does not abolish the moral law — it fulfills and perfects it.
              </p>
            </div>

            <RelatedArticles currentSlug="ten-commandments-catholic" />

            <BlogFAQ faqs={[
              {
                question: "Why don't Catholics have a commandment about graven images?",
                answer: "Catholics do have teaching about idols — it is included in the First Commandment. Following the tradition of St. Augustine, Catholics combine the prohibition against other gods and the prohibition against graven images into a unified First Commandment, since both concern false worship. The ban is on worshipping images as gods, not on religious art itself. The Church has used sacred images, icons, and statues in worship since apostolic times."
              },
              {
                question: "Is breaking a Commandment always a mortal sin?",
                answer: "Not always. For a sin to be mortal, three conditions must be present: the matter must be grave, the person must have full knowledge that it is gravely wrong, and the person must give full, deliberate consent. Breaking a Commandment always involves grave matter, but the moral culpability of the individual depends on knowledge and consent. Serious mental illness, ignorance, or external pressure can reduce culpability."
              },
              {
                question: "What does 'keep holy the Sabbath' mean for Catholics today?",
                answer: "For Catholics, Sunday — the day of Christ's Resurrection — has replaced the Saturday Sabbath as the holy day. The obligation requires: attending Sunday Mass (or a Saturday vigil Mass); refraining from unnecessary work; and using the day for rest, family, prayer, and works of charity. Missing Sunday Mass without a serious reason (illness, emergency, unavailability of a church) is a grave matter."
              },
              {
                question: "Does 'you shall not kill' mean Catholics oppose all war?",
                answer: "No. Catholic teaching recognizes the concept of a 'just war' with strict conditions (just cause, right intention, proper authority, last resort, reasonable chance of success, proportionate means). It also recognizes legitimate self-defense. What is absolutely forbidden is the direct, intentional killing of innocent persons. Pope Francis and Saint John Paul II have both expressed that modern conditions leave very narrow space for war to be considered just."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey and moral formation.
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
