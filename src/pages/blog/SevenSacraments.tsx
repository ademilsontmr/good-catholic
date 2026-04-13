import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";

export default function SevenSacraments() {
  return (
    <>
      <Helmet>
        <title>The 7 Sacraments of the Catholic Church Explained | Guide Catholic</title>
        <meta name="description" content="Understand the importance and meaning of each of the seven sacraments instituted by Christ: Baptism, Eucharist, Confirmation, Confession, Anointing, Holy Orders, and Matrimony." />
        <meta name="keywords" content="what are the 7 sacraments, seven sacraments of the catholic church, baptism eucharist confirmation confession, sacraments explained, what are sacraments" />
        <link rel="canonical" href="https://guidecatholic.com/blog/seven-sacraments/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-button-text py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </div>
              <span className="font-display text-xl font-bold">Guide Catholic</span>
            </Link>
            <Link to="/quiz">
              <Button variant="secondary" size="sm">
                Take the Quiz
              </Button>
            </Link>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">The 7 Sacraments</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Formation
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  December 3, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The 7 Sacraments of the Catholic Church Explained
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Know the sacred signs instituted by Christ that communicate divine grace
                and sanctify us at each stage of Christian life.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The sacraments are efficacious signs of grace, instituted by Christ and entrusted to the Church, by which divine life is dispensed to us. The seven sacraments touch all the stages and all the important moments of Christian life: birth, growth, healing, and mission. Through them, we receive the graces necessary for our sanctification and salvation.
              </p>

              <QuizCTA
                title="Are you living the grace of the sacraments?"
                description="The sacraments are channels of divine life in our soul. Take our free quiz and receive a personalized diagnosis of your sacramental journey and faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sacraments of Christian Initiation
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                1. Baptism: The Door to Christian Life
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Baptism is the foundation of all Christian life and the door that opens access to the other sacraments. Through Baptism, we are freed from original sin and all personal sins, we are reborn as children of God, we become members of Christ, and we are incorporated into the Church. The sacrament imprints an indelible spiritual character on the soul, which is why it can only be received once.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The matter of Baptism is natural water, and the form is the words: "I baptize you in the name of the Father, and of the Son, and of the Holy Spirit." This sacrament can be administered by any person who has the intention to do what the Church does, in case of urgent necessity. Godparents assume the commitment to help the baptized in their journey of faith.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                2. Confirmation: The Sacrament of Christian Maturity
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Confirmation, also called Chrismation, perfects baptismal grace and unites us more firmly to Christ. Through this sacrament, we receive the Holy Spirit in a special way, we are enriched with a particular strength of the Holy Spirit, and we are more strictly obliged to spread and defend the faith by words and deeds, as true witnesses of Christ.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The essential rite of Confirmation consists in the anointing with sacred chrism on the forehead of the baptized, imposed together with the words: "Be sealed with the Gift of the Holy Spirit." This anointing signifies and imprints the spiritual seal, the character, which is also indelible and marks total belonging to Christ.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                3. Eucharist: The Sacrament Par Excellence
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The Eucharist is "the source and summit of all Christian life." It is Christ Himself who offers Himself in sacrifice and gives Himself as food for eternal life. At Mass, the bread and wine are transubstantiated into the Body and Blood of Christ through the words of consecration pronounced by the priest and the action of the Holy Spirit.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Eucharistic communion increases our union with Christ, forgives venial sins, preserves us from future mortal sins, and strengthens the bonds of charity. Catholics must be in a state of grace to receive communion and observe the Eucharistic fast of at least one hour before communion. The Church recommends that the faithful receive the Eucharist every time they participate in Mass.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sacraments of Healing
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                4. Penance and Reconciliation: The Sacrament of Forgiveness
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Confession, also called the Sacrament of Penance or Reconciliation, offers the baptized the possibility to convert, recover grace, and be reconciled with God after having committed sins. It is the sacrament by which sins committed after Baptism are forgiven by the power of Christ, through the absolution of the priest.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The acts of the penitent are: contrition (sincere repentance), confession (accusation of sins to the priest), and satisfaction (fulfillment of the penance imposed). The priest's absolution forgives sins and reconciles the sinner with God and with the Church. Every faithful person who has reached the age of reason is obliged to faithfully confess their grave sins at least once a year.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                5. Anointing of the Sick: Comfort and Grace in Illness
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The Anointing of the Sick confers on Christians a special grace to face the difficulties proper to the state of serious illness or old age. This sacrament can be received every time a person suffers from serious illness, before a risky operation, or when old age becomes aggravated. It is not intended only for those who are about to die.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The effects of this sacrament include: the union of the sick person with Christ's Passion, comfort, peace and courage, forgiveness of sins (if the sick person could not confess), restoration of health (if convenient for salvation), and preparation for passage to eternal life. The sacrament is administered by the priest with the anointing of blessed oil.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sacraments at the Service of Communion
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                6. Holy Orders: The Sacrament of Apostolic Ministry
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The Sacrament of Holy Orders is that by which the mission entrusted by Christ to the Apostles continues to be exercised in the Church, until the end of time. It comprises three degrees: the episcopate, the presbyterate, and the diaconate. Bishops receive the fullness of the sacrament of Holy Orders, presbyters (priests) participate in Christ's ministry, and deacons are ordained for service.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The minister of this sacrament is the bishop. Only baptized men can validly receive Holy Orders. The Church confers the sacrament of Holy Orders only on baptized men whose aptitudes for the exercise of ministry have been duly recognized. Priestly celibacy is a sign of total consecration to Christ in the Latin Church.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                7. Matrimony: Sacred and Indissoluble Union
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Matrimony is the covenant by which a man and a woman establish between themselves a communion of the whole of life, ordered by its natural character to the good of the spouses and to the generation and education of offspring. Between the baptized, matrimony was elevated by Christ to the dignity of a sacrament. The spouses themselves are ministers of the sacrament.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The essential properties of matrimony are unity (one man and one woman) and indissolubility (until death separates them). Matrimonial consent must be free, conscious, and given in the presence of witnesses and the sacred minister. Matrimony confers on spouses the grace to love each other with the love with which Christ loved the Church, perfecting their human love, strengthening their indissoluble unity, and sanctifying them on the path to eternal life.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Importance of Sacraments in Christian Life
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The sacraments are privileged channels of divine grace. They accompany us from birth to death, sanctifying each important moment of our existence. As the Catechism teaches, "the sacraments are necessary for salvation" and "confer the grace they signify." Therefore, every Catholic should seek to live them with faith, devotion, and regularity.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "The sacraments are forces that come forth from the Body of Christ, ever living and life-giving."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Catechism of the Catholic Church, 1116
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="seven-sacraments" />

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is Going
              </h3>
              <p className="text-text-muted mb-6">
                Take our free quiz and receive a personalized diagnosis of your Catholic journey.
              </p>
              <Link to="/quiz">
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
