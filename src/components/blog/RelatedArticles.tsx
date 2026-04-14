import { Link } from "react-router-dom";
import { ArrowRight, Heart, BookOpen, Church, Users, Flame, Sun, MapPin, HeartPulse, Shield, Cloud, Droplets, Cross, Home, type LucideIcon } from "lucide-react";

interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    icon: LucideIcon;
    bgColor: string;
    iconColor: string;
}

const allPosts: BlogPost[] = [
    { id: 1, slug: "how-to-pray-rosary", title: "How to Pray the Holy Rosary: Complete Guide for Beginners", excerpt: "Learn step by step how to pray the Holy Rosary and strengthen your Marian devotion.", category: "Prayers", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 2, slug: "seven-sacraments", title: "The 7 Sacraments of the Catholic Church Explained", excerpt: "Understand the importance and meaning of each of the seven sacraments instituted by Christ.", category: "Formation", icon: BookOpen, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 3, slug: "importance-confession", title: "The Importance of Confession: Why Confess Regularly?", excerpt: "Discover the spiritual benefits of frequent confession and how it transforms our Christian life.", category: "Sacraments", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 4, slug: "patron-saints", title: "Patron Saints: How to Choose and Honor Yours", excerpt: "Learn about the tradition of patron saints and how they can intercede for you on your faith journey.", category: "Devotions", icon: Users, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
    { id: 5, slug: "fasting-abstinence", title: "Fasting and Abstinence: Practices That Strengthen the Soul", excerpt: "Learn about the practices of fasting and abstinence in the Catholic Church.", category: "Spirituality", icon: Flame, bgColor: "bg-orange-100", iconColor: "text-orange-400" },
    { id: 6, slug: "sunday-mass", title: "Sunday Mass: Center of Christian Life", excerpt: "Why participation in Sunday Mass is essential for every Catholic.", category: "Liturgy", icon: Sun, bgColor: "bg-yellow-100", iconColor: "text-yellow-400" },
    { id: 7, slug: "prayer-life", title: "Prayer Life: How to Cultivate Intimacy with God", excerpt: "Learn how to transform your dialogue with God into a source of life and peace.", category: "Prayer", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 8, slug: "meaning-mass", title: "Understanding the Mass: A Journey Through the Liturgy", excerpt: "Discover the deep meaning behind each part of the Mass.", category: "Liturgy", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 9, slug: "examination-conscience", title: "Examination of Conscience: Daily Practice for Spiritual Growth", excerpt: "Learn how to examine your conscience daily and grow in holiness.", category: "Spirituality", icon: BookOpen, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 10, slug: "virgin-mary", title: "The Virgin Mary: Mother of God and Our Mother", excerpt: "Explore the role of Mary in salvation history and how she continues to intercede for us.", category: "Devotions", icon: Heart, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 11, slug: "gifts-holy-spirit", title: "The Seven Gifts of the Holy Spirit", excerpt: "Understand the seven gifts the Holy Spirit bestows upon us at Confirmation.", category: "Formation", icon: Flame, bgColor: "bg-orange-100", iconColor: "text-orange-400" },
    { id: 12, slug: "lectio-divina", title: "Lectio Divina: Praying with Scripture", excerpt: "Discover the ancient practice of Lectio Divina and how to pray with the Word of God.", category: "Prayer", icon: BookOpen, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
    { id: 13, slug: "chastity-modern-world", title: "Chastity in the Modern World: Living Purity Today", excerpt: "Practical guidance on living the virtue of chastity in contemporary society.", category: "Christian Life", icon: Shield, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 14, slug: "social-doctrine", title: "Catholic Social Doctrine: Faith in Action", excerpt: "Learn about the Church's social teaching and how to apply it in your daily life.", category: "Formation", icon: Users, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
    { id: 15, slug: "vocational-discernment", title: "Vocational Discernment: Finding God's Call", excerpt: "Guidance on discerning your vocation and discovering God's plan for your life.", category: "Vocation", icon: MapPin, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 16, slug: "eucharist-real-presence", title: "The Eucharist: Understanding the Real Presence", excerpt: "Explore the Catholic teaching on the Real Presence of Christ in the Eucharist.", category: "Sacraments", icon: Sun, bgColor: "bg-yellow-100", iconColor: "text-yellow-400" },
    { id: 17, slug: "eucharistic-adoration", title: "Eucharistic Adoration: Time with Jesus", excerpt: "Discover the beauty and power of spending time in Eucharistic Adoration.", category: "Prayer", icon: Sun, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
    { id: 18, slug: "what-is-purgatory", title: "What is Purgatory? Understanding Catholic Teaching", excerpt: "Learn about the Catholic doctrine of Purgatory and its role in our salvation.", category: "Doctrine", icon: Cloud, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 19, slug: "how-to-live-lent", title: "How to Live Lent: A Season of Conversion", excerpt: "Practical tips for making the most of the Lenten season and growing closer to God.", category: "Liturgy", icon: Flame, bgColor: "bg-purple-100", iconColor: "text-purple-400" },
    { id: 20, slug: "guardian-angels", title: "Guardian Angels: Our Heavenly Companions", excerpt: "Learn about the role of guardian angels in our lives and how to develop devotion to them.", category: "Devotions", icon: Shield, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 21, slug: "meaning-of-crucifix", title: "The History and Meaning of the Crucifix", excerpt: "Understand why the crucifix is the central symbol of Catholic faith.", category: "Devotions", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 22, slug: "jubilee-2025-legacy", title: "The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?", excerpt: "Discover how to carry the fruits of the Holy Year into 2026.", category: "Jubilee 2025", icon: Sun, bgColor: "bg-yellow-100", iconColor: "text-yellow-400" },
    { id: 23, slug: "plenary-indulgence-guide", title: "Plenary Indulgence: Complete Guide", excerpt: "Understand how to receive total remission of temporal punishment.", category: "Formation", icon: BookOpen, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 24, slug: "church-changes-post-2025", title: "What Changes in the Church After the Holy Year of 2025?", excerpt: "Understand the trends and challenges for the Church in 2026.", category: "Current Affairs", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 25, slug: "prayers-of-hope-2026", title: "Prayers of Hope for Times of Crisis in 2026", excerpt: "Discover powerful prayers to renew your trust in God.", category: "Prayers", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 26, slug: "local-pilgrimage", title: "How to Organize a Local Pilgrimage in Your Diocese", excerpt: "Discover how to organize a journey of faith to shrines in your region.", category: "Devotions", icon: MapPin, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
    { id: 27, slug: "faith-mental-health", title: "Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety", excerpt: "The Catholic tradition offers ancient treasures for the balance of mind and soul.", category: "Mental Health", icon: HeartPulse, bgColor: "bg-rose-50", iconColor: "text-rose-400" },
    { id: 33, slug: "how-to-go-to-confession", title: "How to Go to Confession: Step-by-Step Guide for Catholics", excerpt: "Complete Catholic guide covering examination of conscience, what to say, common fears, and how often to go.", category: "Sacraments", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 34, slug: "how-to-become-catholic", title: "How to Become Catholic: The RCIA Process Explained", excerpt: "Complete guide covering the 4 stages of RCIA, Easter Vigil, what to expect, and FAQs for converts.", category: "Formation", icon: BookOpen, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 35, slug: "catholic-baptism-guide", title: "Catholic Baptism: What It Is, How It Works, and Why It Matters", excerpt: "Learn the theology of baptism, infant vs adult baptism, the rite, godparents, and effects of baptism.", category: "Sacraments", icon: Droplets, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 36, slug: "catholic-confirmation-guide", title: "Catholic Confirmation: What It Is and How to Prepare", excerpt: "Learn what Confirmation is, the seven gifts of the Holy Spirit, how to choose a sponsor and confirmation name.", category: "Sacraments", icon: Flame, bgColor: "bg-orange-100", iconColor: "text-orange-400" },
    { id: 37, slug: "catholic-marriage-guide", title: "Catholic Marriage: What the Church Teaches About Holy Matrimony", excerpt: "Learn about marriage as a sacrament, unity, indissolubility, marriage preparation, and natural family planning.", category: "Sacraments", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 38, slug: "why-do-catholics-pray-to-saints", title: "Why Do Catholics Pray to Saints? Not Worship — Intercession Explained", excerpt: "Learn the difference between worship and intercession, the biblical basis for asking saints to pray for us, and how the Communion of Saints works.", category: "Doctrine", icon: Users, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
    { id: 39, slug: "do-catholics-worship-mary", title: "Do Catholics Worship Mary? Understanding Marian Devotion", excerpt: "Learn the difference between worship and veneration, what hyperdulia means, the four Marian dogmas, and how to explain Marian devotion to non-Catholics.", category: "Doctrine", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 40, slug: "catholic-vs-protestant-differences", title: "Catholic vs Protestant: Key Differences Explained", excerpt: "Learn about Scripture and Tradition, the sacraments, the papacy, purgatory, and how to have respectful dialogue with Protestant family and friends.", category: "Formation", icon: BookOpen, bgColor: "bg-indigo-100", iconColor: "text-indigo-400" },
    { id: 41, slug: "what-is-the-catholic-mass", title: "What Is the Catholic Mass? A Complete Guide for Beginners", excerpt: "Learn the two main parts of the Mass, what happens at each stage, what to do as a visitor, and why Catholics go every Sunday.", category: "Liturgy", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 42, slug: "is-the-catholic-church-the-true-church", title: "Is the Catholic Church the True Church? What Catholics Believe", excerpt: "Learn about the four marks of the Church, apostolic succession, historical continuity from Peter, and why Catholics believe the Church was founded by Christ.", category: "Doctrine", icon: Cross, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 43, slug: "catholic-daily-prayer-routine", title: "Catholic Daily Prayer Routine: How to Build a Life of Prayer", excerpt: "Learn how to build a Catholic daily prayer routine with morning offering, Angelus, Rosary, and night prayer. Practical tips from the saints and a sample weekly schedule.", category: "Prayer", icon: Sun, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
    { id: 44, slug: "lectio-divina-how-to-practice", title: "Lectio Divina: How to Pray with Scripture Step by Step", excerpt: "Learn how to practice Lectio Divina step by step. Complete guide covering the 4 steps, history, common mistakes, and recommended Scripture passages.", category: "Prayer", icon: BookOpen, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
    { id: 45, slug: "rosary-complete-guide", title: "The Holy Rosary: Complete Guide with All 20 Mysteries", excerpt: "Complete guide to the Holy Rosary with all 20 mysteries and meditations, step-by-step instructions, all prayers, and spiritual benefits.", category: "Prayers", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 46, slug: "examination-of-conscience-guide", title: "How to Make an Examination of Conscience: Complete Catholic Guide", excerpt: "Learn how to make an examination of conscience using the Ignatian Examen and the 10 Commandments. Complete guide for daily and pre-Confession examination.", category: "Spirituality", icon: BookOpen, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 47, slug: "catholic-fasting-rules", title: "Catholic Fasting Rules: What the Church Requires and Why It Matters", excerpt: "Learn the Catholic Church's fasting rules for Ash Wednesday, Good Friday, and Fridays of Lent. Fasting vs abstinence, the Eucharistic fast, and tips for beginners.", category: "Spirituality", icon: Flame, bgColor: "bg-orange-100", iconColor: "text-orange-400" },
    { id: 48, slug: "saint-padre-pio", title: "St. Padre Pio: Life, Stigmata, Miracles and Prayers", excerpt: "Discover the life of St. Padre Pio: his stigmata, miracles, spiritual gifts, famous quotes, and a prayer to this beloved Capuchin friar.", category: "Saints", icon: Cross, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 49, slug: "saint-therese-of-lisieux", title: "St. Thérèse of Lisieux: The Little Way to Holiness", excerpt: "Discover the life of St. Thérèse of Lisieux — her Little Way of spiritual childhood, her autobiography Story of a Soul, and her promise to spend her heaven doing good on earth.", category: "Saints", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 50, slug: "blessed-carlo-acutis", title: "Blessed Carlo Acutis: The Millennial Saint and Patron of the Internet", excerpt: "Discover the life of Blessed Carlo Acutis — his Eucharistic devotion, his website cataloguing Eucharistic miracles, and his canonization in 2025.", category: "Saints", icon: Sun, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
    { id: 51, slug: "saint-michael-archangel", title: "St. Michael the Archangel: Prayer, Devotion and His Role in Scripture", excerpt: "Learn about St. Michael the Archangel — his four roles in Scripture, the full text of the Prayer to St. Michael, and how to develop devotion.", category: "Devotions", icon: Shield, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 52, slug: "saint-anthony-of-padua", title: "St. Anthony of Padua: Patron of Lost Things and Powerful Intercessor", excerpt: "Discover the life of St. Anthony of Padua — his extraordinary preaching gifts, why he is patron of lost things, and a prayer to St. Anthony.", category: "Saints", icon: BookOpen, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
    { id: 53, slug: "how-to-pray-the-angelus", title: "How to Pray the Angelus: The Catholic Prayer for 6am, Noon, and 6pm", excerpt: "Learn how to pray the Angelus, the ancient Catholic prayer prayed three times a day. Full text, history, the Regina Caeli, and tips for families.", category: "Prayers", icon: Sun, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
    { id: 54, slug: "what-is-advent-catholic", title: "What Is Advent? The Catholic Season of Waiting and Preparation", excerpt: "What is Advent? Learn about the Catholic Advent season, when it starts, the Advent wreath and candles, the O Antiphons, and how to observe Advent spiritually.", category: "Liturgy", icon: Cloud, bgColor: "bg-purple-100", iconColor: "text-purple-400" },
    { id: 55, slug: "what-is-holy-week-catholic", title: "What Is Holy Week? A Complete Guide to the Most Sacred Week of the Year", excerpt: "Complete Catholic guide to Palm Sunday, Holy Thursday, Good Friday, Holy Saturday, and the Easter Vigil.", category: "Liturgy", icon: Cross, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 56, slug: "catholic-grace-before-meals", title: "Catholic Grace Before Meals: Traditional and Modern Prayers", excerpt: "Learn the traditional Catholic grace before meals — 'Bless us, O Lord' — plus other versions, the theology of blessing food, and tips for family mealtime prayer.", category: "Prayers", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 57, slug: "how-to-make-spiritual-communion", title: "How to Make a Spiritual Communion: The Prayer and Its Meaning", excerpt: "Learn what spiritual communion is, the traditional prayer of St. Alphonsus Liguori, when to make it, and its theological meaning.", category: "Prayer", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 58, slug: "stations-of-the-cross", title: "Stations of the Cross: A Complete Guide to This Powerful Catholic Devotion", excerpt: "Learn the history of the Stations of the Cross, the 14 traditional stations with meditations, and how to pray them.", category: "Devotions", icon: Cross, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 59, slug: "what-is-the-brown-scapular", title: "What Is the Brown Scapular? History, Promises, and How to Wear It", excerpt: "Learn what the Brown Scapular is, the promises of Our Lady of Mount Carmel, how to be enrolled, and how to wear it.", category: "Devotions", icon: Shield, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 60, slug: "catholic-prayers-for-the-dying", title: "Catholic Prayers for the Dying: Comfort and Grace at the Hour of Death", excerpt: "Learn the Catholic prayers for the dying — the Sacrament of Anointing, Viaticum, the Apostolic Pardon, and prayers at the bedside.", category: "Prayers", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 61, slug: "how-to-consecrate-your-home-to-god", title: "How to Consecrate Your Home to God: A Catholic Guide", excerpt: "Learn how to consecrate your home to God — the Epiphany house blessing, sacred objects, and how to create a prayer corner.", category: "Devotions", icon: Home, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
    { id: 62, slug: "what-is-a-novena", title: "What Is a Novena? The Catholic Prayer of Nine Days Explained", excerpt: "Learn what a novena is, its biblical origins, the most popular novenas, and how to pray a novena with perseverance.", category: "Prayers", icon: BookOpen, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
    { id: 63, slug: "catholic-parenting-raising-children-in-faith", title: "Catholic Parenting: How to Raise Children in the Faith", excerpt: "A complete guide to Catholic parenting — from baptism and First Communion to the family Rosary and raising teenagers in the faith.", category: "Family", icon: Users, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
    { id: 64, slug: "how-to-pray-as-a-family", title: "How to Pray as a Family: Building a Domestic Church", excerpt: "Learn how to pray as a family — the family Rosary, grace before meals, bedtime prayers, and how to start when you haven't been praying together.", category: "Family", icon: Home, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
    { id: 65, slug: "catholic-dating-and-courtship", title: "Catholic Dating and Courtship: A Guide to Holy Relationships", excerpt: "A complete guide to Catholic dating — the purpose of dating, chastity in relationships, how to find a Catholic spouse, and preparing for marriage.", category: "Vocation", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
    { id: 66, slug: "what-is-rcia-for-adults", title: "What Is RCIA? The Complete Guide for Adults Becoming Catholic", excerpt: "Everything you need to know about RCIA — the 4 stages, timeline, Easter Vigil, who it's for, and how to find RCIA in your parish.", category: "Formation", icon: BookOpen, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
    { id: 67, slug: "catholic-homeschooling-guide", title: "Catholic Homeschooling: A Complete Guide for Catholic Families", excerpt: "A complete guide to Catholic homeschooling — top curricula, legal requirements, socialization, co-ops, and integrating faith into every subject.", category: "Family", icon: BookOpen, bgColor: "bg-indigo-100", iconColor: "text-indigo-400" },
];

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
    const filteredPosts = allPosts.filter(post => post.slug !== currentSlug);
    const shuffled = [...filteredPosts].sort(() => 0.5 - Math.random());
    const selectedPosts = shuffled.slice(0, 3);

    return (
        <section className="mt-16 pt-16 border-t border-border">
            <h3 className="font-display text-2xl font-bold text-text mb-8">
                Continue Reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedPosts.map((post) => (
                    <Link to={`/blog/${post.slug}/`} key={post.id} className="group">
                        <article className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-border/50">
                            <div className={`aspect-video flex items-center justify-center ${post.bgColor}`}>
                                <post.icon className={`w-10 h-10 ${post.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                                        {post.category}
                                    </span>
                                </div>
                                <h4 className="font-display text-base font-semibold text-text mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h4>
                                <span className="inline-flex items-center text-xs text-accent font-medium">
                                    Read article <ArrowRight className="w-3 h-3 ml-1" />
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
