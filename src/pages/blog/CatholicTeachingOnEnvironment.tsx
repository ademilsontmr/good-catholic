import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Globe, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicTeachingOnEnvironment() {
  return (
    <>
      <Helmet>
        <title>Catholic Teaching on the Environment: Laudato Si' and Care for Creation | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about the environment? Explore Laudato Si', the biblical basis for ecological stewardship, and practical Catholic responses." />
        <meta name="keywords" content="catholic teaching on environment, laudato si pope francis, care for creation catholic, catholic ecology, environmental stewardship catholic, climate change catholic church" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-teaching-on-environment/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic Teaching on the Environment: Laudato Si' and Care for Creation"
        description="What does the Catholic Church teach about the environment? Explore Laudato Si', the biblical basis for ecological stewardship, and practical Catholic responses."
        url="https://guidecatholic.com/blog/catholic-teaching-on-environment/"
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
              <span className="text-text">Catholic Teaching on the Environment</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic Teaching on the Environment: Laudato Si' and Care for Creation
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Catholic tradition has always cared for creation — long before environmentalism became a political movement. From Genesis to Laudato Si', the Church teaches that the earth is God's gift, and we are its stewards, not its masters.
              </p>
            </header>
            <div className="aspect-video bg-green-50 rounded-2xl flex items-center justify-center mb-10">
              <Globe className="w-24 h-24 text-green-600" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                In an age of climate anxiety and political polarization, the Catholic Church offers something rare: a coherent, theologically grounded vision of the human relationship with the natural world. It is neither the radical environmentalism that treats nature as sacred in itself, nor the exploitative attitude that treats the earth as a resource to be consumed without limit. It is the ancient Christian vision of stewardship — the conviction that creation is God's gift, entrusted to human care, and that how we treat it reflects how we love its Creator.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Laudato Si' (2015): The Key Teachings</h2>
              <p className="text-text leading-relaxed mb-6">
                Pope Francis's encyclical <em>Laudato Si': On Care for Our Common Home</em> (2015) is the most comprehensive statement of Catholic environmental teaching ever produced. Its title comes from St. Francis of Assisi's Canticle of the Sun: "Laudato si', mi' Signore" — "Praise be to you, my Lord." It is addressed not only to Catholics but to "every person living on this planet."
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                The encyclical's central argument is that the environmental crisis and the social crisis are inseparable. The same throwaway culture that exploits the poor also exploits the earth. The same consumerism that drives inequality also drives environmental destruction. You cannot solve one without addressing the other.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                Key teachings of Laudato Si' include: the earth is a common home belonging to all, not a commodity to be owned; the poor are the most vulnerable to environmental degradation and must be at the center of any response; technology alone cannot solve the crisis — a change of heart and lifestyle is required; and the throwaway culture must be replaced by a culture of care, gratitude, and sobriety.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Laudate Deum (2023): The Follow-Up</h2>
              <p className="text-text leading-relaxed mb-6">
                In October 2023, Pope Francis published <em>Laudate Deum</em> ("Praise God"), an apostolic exhortation that updates and intensifies the message of Laudato Si'. Written in the context of the COP28 climate conference, it is more urgent in tone — a direct response to what Francis sees as insufficient action on climate change in the eight years since Laudato Si'.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                Laudate Deum affirms the scientific consensus on climate change and calls it "a global social problem." It criticizes those who deny or minimize the crisis, and calls on world leaders to make binding commitments to reduce emissions. It also addresses the spiritual dimension: the ecological crisis is ultimately a crisis of the human heart, rooted in the sin of greed and the illusion that we are masters of creation rather than its stewards.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Biblical Basis: Stewardship, Not Domination</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                The Catholic approach to the environment is rooted in Scripture. Genesis 1–2 describes God creating the world and calling it "very good" — a declaration of the intrinsic value of creation, independent of its usefulness to humans. God then places the human person in the garden "to till it and keep it" (Genesis 2:15) — a mandate of stewardship, not domination.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                The Hebrew word for "dominion" in Genesis 1:28 (<em>radah</em>) does not mean exploitation — it means the responsible governance of a king over his subjects. A good king cares for his people; a good steward cares for what has been entrusted to him. The Catholic tradition has always interpreted the human "dominion" over creation as a responsibility, not a license.
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                Psalm 104 is a magnificent hymn to creation — a meditation on the beauty and order of the natural world as a reflection of God's glory. Romans 8:19–22 speaks of all creation "groaning" as it awaits redemption — a reminder that the destiny of the natural world is bound up with the destiny of humanity. Creation is not merely a backdrop for human history; it is a participant in the drama of salvation.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">St. Francis of Assisi: Patron of Ecology</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                No figure in Catholic history embodies the Church's ecological vision more fully than St. Francis of Assisi (1181–1226). Pope John Paul II declared him the patron saint of ecology in 1979, and Pope Francis took his name in honor of this tradition.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                Francis's Canticle of the Sun — written near the end of his life, when he was nearly blind — is one of the most beautiful ecological texts ever written. He addresses the sun as "Brother Sun," the moon as "Sister Moon," the wind as "Brother Wind," water as "Sister Water," fire as "Brother Fire," and the earth as "Sister Mother Earth." This is not pantheism — Francis does not worship creation. He sees in creation a family of creatures who, like him, praise God by their very existence.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                Francis's poverty was itself an ecological statement: he refused to own anything, to accumulate, to consume beyond his needs. In an age of consumerism, his example is more countercultural — and more Catholic — than ever.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to living the Catholic vision of care for creation and integral ecology."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Integral Ecology: Environment, Society, and the Human Person</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                One of the most important concepts in Laudato Si' is "integral ecology" — the idea that the environmental crisis, the social crisis, and the spiritual crisis are all aspects of a single problem. You cannot care for the earth without caring for the poor. You cannot care for the poor without caring for the earth. And you cannot do either without caring for the human soul.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                Integral ecology rejects the false choice between the environment and the economy, between ecological concern and human development. It insists that authentic human development — the kind the Church has always championed — must include the health of the natural world on which all human life depends.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                This concept also challenges the tendency to treat environmental issues as purely technical problems to be solved by technology. The deeper problem is cultural and spiritual: a culture that treats everything — people, animals, the earth — as resources to be exploited for profit. The solution requires a conversion of heart, not just a change of policy.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Says About Climate Change</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                The Catholic Church accepts the scientific consensus on climate change. Laudato Si' states clearly that "a very solid scientific consensus indicates that we are presently witnessing a disturbing warming of the climatic system." Laudate Deum goes further, criticizing those who deny or minimize the crisis as acting against the evidence.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                The Church's concern is not primarily scientific but moral: climate change disproportionately harms the poor, who have contributed least to the problem and have the fewest resources to adapt. This is a justice issue, not just an environmental one. The Catholic principle of the preferential option for the poor demands that we take seriously the impact of our choices on the most vulnerable.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                At the same time, the Church does not endorse any particular political program or party. Catholics can and do disagree about the best policy responses to climate change. What the Church insists on is the moral obligation to take the problem seriously and to act with justice and solidarity.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Catholic Responses</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                Laudato Si' calls for both structural change and personal conversion. Here are practical ways Catholics can respond:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Reduce waste.</strong> The throwaway culture is a spiritual problem as much as an environmental one. Buying less, repairing rather than replacing, and avoiding single-use plastics are acts of stewardship.</li>
                <li><strong>Support local food.</strong> Buying from local farmers reduces the environmental cost of food transportation, supports local communities, and reconnects us with the land. The Catholic tradition of fasting and abstinence also naturally reduces meat consumption, which has significant environmental benefits.</li>
                <li><strong>Energy conservation.</strong> Reducing energy use at home — through better insulation, efficient appliances, and conscious habits — is a form of stewardship. Many Catholic institutions are investing in renewable energy as an expression of their ecological commitment.</li>
                <li><strong>Pray for creation.</strong> The Season of Creation (September 1 – October 4, the feast of St. Francis) is an annual ecumenical celebration of prayer and action for the environment. Many Catholic parishes observe it with special liturgies and community projects.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Care for Creation and Care for the Poor</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                The connection between environmental stewardship and care for the poor is one of the most important insights of Catholic social teaching. The poor are the first victims of environmental degradation: they live closest to polluting industries, they depend most directly on natural resources for their livelihoods, and they have the least capacity to adapt to climate change.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                This means that caring for the environment is not a luxury for the comfortable — it is a demand of justice. When we pollute a river, we harm the communities that depend on it. When we contribute to climate change, we harm the farmers in sub-Saharan Africa whose crops are failing. The Catholic principle of solidarity — the recognition that we are all responsible for one another — extends to our relationship with the natural world.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-teaching-on-environment">
                Conversely, genuine care for the poor must include care for the environment. Development that destroys the natural resources on which the poor depend is not authentic development — it is a new form of exploitation. The Catholic vision of integral human development insists that economic growth must be sustainable, just, and oriented toward the common good.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">From the Canticle of the Sun — St. Francis of Assisi</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Praised be You, my Lord, through Sister Mother Earth, who sustains us and governs us and who produces varied fruits with colored flowers and herbs. Praised be You, my Lord, through those who give pardon for Your love, and bear infirmity and tribulation. Blessed are those who endure in peace for by You, Most High, they shall be crowned.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "The earth, our home, is beginning to look more and more like an immense pile of filth."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope Francis, Laudato Si' §21</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "What does Laudato Si' teach?", answer: "Laudato Si' (2015) is Pope Francis's encyclical on the environment. Its central teaching is that the environmental crisis and the social crisis are inseparable — the same throwaway culture that exploits the poor also exploits the earth. It calls for an 'integral ecology' that addresses environmental, social, and spiritual dimensions together, and for a conversion of heart away from consumerism and toward care, gratitude, and sobriety." },
              { question: "Does the Catholic Church believe in climate change?", answer: "Yes. The Catholic Church accepts the scientific consensus on climate change. Laudato Si' states that 'a very solid scientific consensus indicates that we are presently witnessing a disturbing warming of the climatic system.' Laudate Deum (2023) goes further, criticizing those who deny or minimize the crisis. The Church's concern is primarily moral: climate change disproportionately harms the poor, making it a justice issue." },
              { question: "What is the Catholic view of stewardship of creation?", answer: "The Catholic view is that humans are stewards of creation, not its masters. Genesis 2:15 calls humans to 'till and keep' the garden — a mandate of responsible care. The earth belongs to God, not to us; we hold it in trust for future generations. This stewardship is not optional — it is a moral obligation rooted in our relationship with God and with one another." },
              { question: "Why is St. Francis of Assisi the patron of ecology?", answer: "St. Francis of Assisi (1181–1226) is the patron of ecology because of his profound sense of kinship with all of creation. His Canticle of the Sun addresses the sun, moon, wind, water, fire, and earth as brothers and sisters — fellow creatures praising God by their existence. Pope John Paul II declared him patron of ecology in 1979. His radical poverty was also an ecological statement: refusing to accumulate or consume beyond his needs." },
              { question: "What is integral ecology in Catholic teaching?", answer: "Integral ecology is a concept from Laudato Si' that holds that the environmental crisis, the social crisis, and the spiritual crisis are all aspects of a single problem. You cannot care for the earth without caring for the poor, and you cannot do either without caring for the human soul. It rejects the false choice between the environment and the economy, insisting that authentic human development must include the health of the natural world." },
            ]} />

            <RelatedArticles currentSlug="catholic-teaching-on-environment" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to living the Catholic vision of care for creation and the common good.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
