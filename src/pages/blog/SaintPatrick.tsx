import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flame, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintPatrick() {
  return (
    <>
      <Helmet>
        <title>Saint Patrick: The Real Story of Ireland's Patron Saint | Guide Catholic</title>
        <meta name="description" content="Discover the real Saint Patrick — his captivity, conversion, mission to Ireland, the shamrock, the Breastplate prayer, and the truth behind the legends." />
        <meta name="keywords" content="saint patrick, st patrick catholic, saint patrick ireland, feast day march 17, saint patrick prayer, breastplate of saint patrick, shamrock trinity" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-patrick/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Patrick: The Real Story of Ireland's Patron Saint"
        description="Discover the real Saint Patrick — his captivity, conversion, mission to Ireland, the shamrock, the Breastplate prayer, and the truth behind the legends."
        url="https://guidecatholic.com/blog/saint-patrick/"
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
              <span className="text-text">Saint Patrick</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints & Feast Days</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Patrick: The Real Story of Ireland's Patron Saint
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Behind the green beer and shamrock parades is one of the most remarkable missionary stories in Christian history. Patrick was a slave who became an apostle — a man who returned to his captors to bring them the Gospel of Christ.
              </p>
            </header>

            <div className="aspect-video bg-green-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-green-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                Saint Patrick is one of the most celebrated saints in the world, yet the real Patrick is far more interesting than the legend. He was not Irish by birth. He was not the first Christian missionary to Ireland. He did not drive snakes out of Ireland (there were never any snakes there). But he was a man of extraordinary courage, faith, and love — a man who chose to return to the land of his captivity to bring its people to Christ.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life and Captivity</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                Patrick was born around 385-390 AD in Roman Britain — probably in what is now Wales or Scotland. His father Calpurnius was a deacon and a Roman official; his grandfather Potitus was a priest. Despite this Christian family background, Patrick later admitted that as a young man he did not take his faith seriously: "I did not then know the true God."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                When Patrick was about sixteen, Irish pirates raided his family's estate and carried him off to Ireland as a slave. He was sold to a chieftain named Miliucc in the northwest of Ireland (modern County Antrim or County Mayo) and set to work as a shepherd on the cold, lonely hillsides.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                It was in this captivity that Patrick found God. In his <em>Confessio</em> — his spiritual autobiography, one of only two writings that survive from him — he wrote: "After I came to Ireland — every day I had to tend sheep, and many times a day I prayed — the love of God and His fear came to me more and more, and my faith was strengthened. And my spirit was moved so that in a single day I would say as many as a hundred prayers, and almost as many in the night."
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                After six years of slavery, Patrick heard a voice in a dream: "Your hungers are rewarded: you are going home. Look, your ship is ready." He escaped, walked nearly 200 miles to the coast, and found a ship that took him back to Britain.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Call to Return</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                Back in Britain, Patrick was reunited with his family. He studied for the priesthood and was eventually ordained a bishop. But he could not forget Ireland. In another dream, he heard the voice of the Irish people calling to him: "We beg you, holy youth, to come and walk among us once more."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                This was an extraordinary act of love. Patrick was being called to return to the land where he had been enslaved, to the people who had taken him from his family, to a culture that was pagan and often violent. He could have refused. Instead, he went.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                Patrick arrived in Ireland around 432 AD. He was not the first Christian missionary there — a bishop named Palladius had been sent by Pope Celestine I in 431 — but Patrick became the most successful and the most beloved.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Mission to Ireland</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                Patrick's mission lasted approximately 30 years. During this time, he traveled throughout Ireland, preaching the Gospel, baptizing thousands, ordaining priests, and establishing monasteries and churches. He worked among the poor and the powerful, converting chieftains and kings.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                His approach was culturally sensitive and strategically brilliant. He did not try to destroy Irish culture — he baptized it. He used the existing structures of Irish society (the clan system, the druids' role as teachers) to spread the faith. He incorporated Irish symbols and traditions into Christian worship.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                One of the most famous stories of his mission is the lighting of the Easter fire on the Hill of Slane, directly across from the Hill of Tara where the High King had forbidden any fire to be lit before the royal fire. Patrick lit his fire anyway, and when the king sent soldiers to arrest him, Patrick and his companions were miraculously protected. The king was so impressed that he allowed Patrick to preach throughout his kingdom.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Shamrock and the Trinity</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                The most famous legend about Patrick is that he used the three-leafed shamrock to explain the mystery of the Holy Trinity — three persons in one God. While this story is not found in Patrick's own writings, it reflects his approach to evangelization: using the natural world to explain supernatural truths.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                Whether or not the shamrock story is historically accurate, it captures something true about Patrick's method. He was a brilliant communicator who met people where they were and used what they knew to lead them to what they did not yet know.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Patrick's Writings</h2>
              <p className="text-text leading-relaxed mb-6">
                Only two writings survive from Patrick: the <em>Confessio</em> (his spiritual autobiography) and the <em>Epistola</em> (a letter to the soldiers of a British chieftain named Coroticus who had raided Ireland and enslaved newly baptized Christians). Both are remarkable documents — passionate, personal, and deeply spiritual.
              </p>
              <p className="text-text leading-relaxed mb-6">
                In the <em>Confessio</em>, Patrick is remarkably humble about his own limitations. He acknowledges that he is not a great scholar or a polished writer. But he is absolutely certain of his calling: "I am Patrick, a sinner, most unlearned, the least of all the faithful, and utterly despised by many. My father was Calpornius, a deacon, his father was Potitus, a priest... I was taken into captivity in Ireland with many thousands of people... And there the Lord opened my mind to an awareness of my unbelief, in order that, even so late, I might remember my transgressions and turn with all my heart to the Lord my God."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Breastplate of Saint Patrick</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">St. Patrick's Breastplate (excerpt)</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  I arise today through a mighty strength, the invocation of the Trinity,<br />
                  Through belief in the Threeness, through confession of the Oneness of the Creator of creation.<br /><br />
                  Christ with me, Christ before me, Christ behind me,<br />
                  Christ in me, Christ beneath me, Christ above me,<br />
                  Christ on my right, Christ on my left,<br />
                  Christ when I lie down, Christ when I sit down, Christ when I arise,<br />
                  Christ in the heart of every man who thinks of me,<br />
                  Christ in the mouth of everyone who speaks of me,<br />
                  Christ in every eye that sees me,<br />
                  Christ in every ear that hears me.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Death and Legacy</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                Patrick died around 461 AD, probably on March 17 — the date that became his feast day. He is buried, according to tradition, at Downpatrick in Northern Ireland, along with Saints Brigid and Columba.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                Patrick's legacy is immeasurable. He transformed Ireland from a pagan island into a Christian nation. Irish monasteries became centers of learning and culture that preserved classical civilization during the Dark Ages. Irish missionaries — inspired by Patrick's example — evangelized much of northern Europe. Patrick is rightly called the "Apostle of Ireland."
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="saint-patrick">
                His feast day, March 17, is celebrated around the world — not just by the Irish, but by all who have been touched by the faith he brought to Ireland.
              </LinkedText>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "I am Patrick, a sinner, most unlearned, the least of all the faithful... I owe it to God's grace that so many people through me should be born again to Him."
                </p>
                <p className="text-text-muted text-center mt-2">— Saint Patrick, Confessio</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "When is the feast day of Saint Patrick?", answer: "The feast day of Saint Patrick is March 17. It is a national holiday in Ireland and is celebrated by Irish communities around the world. In the Catholic liturgical calendar, it is a memorial (or feast in Ireland)." },
              { question: "Was Saint Patrick Irish?", answer: "No. Saint Patrick was born in Roman Britain — probably in what is now Wales or Scotland. He was brought to Ireland as a slave at age 16. He later returned voluntarily as a missionary." },
              { question: "Did Saint Patrick drive snakes out of Ireland?", answer: "This is a legend, not a historical fact. There were never any snakes in Ireland — the island was separated from Britain before snakes could migrate there after the last Ice Age. The 'snakes' in the legend are often interpreted symbolically as paganism or evil." },
              { question: "What is the Breastplate of Saint Patrick?", answer: "The Breastplate (or Lorica) of Saint Patrick is a famous prayer attributed to Patrick, also known as 'The Deer's Cry.' It is a prayer of protection invoking the Trinity and the presence of Christ in all aspects of life. While it may not have been written by Patrick himself, it reflects his spirituality." },
              { question: "What is Saint Patrick the patron saint of?", answer: "Saint Patrick is the patron saint of Ireland, Nigeria, Montserrat, and engineers. He is also invoked against snakes and fears." },
            ]} />

            <RelatedArticles currentSlug="saint-patrick" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your faith.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
