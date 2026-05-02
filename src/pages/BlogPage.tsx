import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Cross, Calendar, Clock, Heart, BookOpen, Church, Users, Flame, Sun, MapPin, HeartPulse, Wind, Cloud, Brain, Shield, Droplets, Home, ChevronLeft, ChevronRight, Ghost, Microscope, Moon, Sparkles, Star, Hand, HelpCircle, Sword, UserCheck, Coins, Globe, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1040,
    slug: "catholic-inner-healing-guide",
    title: "Catholic Inner Healing: Complete Guide to Emotional & Spiritual Freedom",
    excerpt: "Discover the Catholic approach to inner healing prayer. Learn how to heal emotional wounds, break generational curses, and find freedom through Christ's healing power.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Spiritual Healing",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 1041,
    slug: "our-lady-of-fatima-guide",
    title: "Our Lady of Fatima: Complete Guide to the 1917 Apparitions & Secrets",
    excerpt: "Discover the complete story of Fatima apparitions, the three secrets, the miracle of the sun, and why these messages matter for Catholics today.",
    date: "2026-04-16",
    readTime: "18 min",
    category: "Marian Apparitions",
    icon: Star,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-600"
  },
  {
    id: 1042,
    slug: "liturgical-seasons-guide",
    title: "Liturgical Seasons: Complete Catholic Guide to Advent, Christmas, Lent & Easter",
    excerpt: "Master the Catholic liturgical calendar. Learn the meaning, colors, and traditions of Advent, Christmas, Lent, Easter, and Ordinary Time.",
    date: "2026-04-16",
    readTime: "20 min",
    category: "Liturgy & Worship",
    icon: Calendar,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    id: 1043,
    slug: "vocational-discernment-guide",
    title: "Catholic Vocational Discernment: Complete Guide to Finding God's Will",
    excerpt: "Discover how to discern God's calling for your life. Learn about religious vocations, marriage, single life, and practical steps for vocational discernment.",
    date: "2026-04-16",
    readTime: "22 min",
    category: "Vocations",
    icon: Users,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    id: 1044,
    slug: "catholic-mental-health-guide",
    title: "Catholic Mental Health: Faith-Based Guide to Depression, Anxiety & Healing",
    excerpt: "Discover the Catholic approach to mental health. Learn how faith integrates with psychology, find Catholic therapists, and access spiritual resources.",
    date: "2026-04-16",
    readTime: "25 min",
    category: "Mental Health & Faith",
    icon: Brain,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600"
  },
  {
    id: 1045,
    slug: "our-lady-of-lourdes-guide",
    title: "Our Lady of Lourdes: Complete Guide to the 1858 Apparitions & Miracles",
    excerpt: "Discover the complete story of Our Lady of Lourdes apparitions to St. Bernadette. Learn about the miraculous spring, the Immaculate Conception, and why Lourdes remains a major pilgrimage site.",
    date: "2026-04-16",
    readTime: "20 min",
    category: "Marian Apparitions",
    icon: Droplets,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: 1046,
    slug: "catholic-sacramentals-guide",
    title: "Catholic Sacramentals: Complete Guide to Holy Water, Rosaries, Scapulars & More",
    excerpt: "Discover the power of Catholic sacramentals. Learn about holy water, blessed objects, scapulars, medals, and how these sacred signs bring grace into daily life.",
    date: "2026-04-16",
    readTime: "18 min",
    category: "Catholic Devotions",
    icon: Cross,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    id: 1047,
    slug: "liturgy-of-the-hours-guide",
    title: "Liturgy of the Hours: Complete Guide for Laity - Divine Office Explained",
    excerpt: "Learn how to pray the Liturgy of the Hours (Divine Office) as a lay Catholic. Complete guide to morning prayer, evening prayer, compline, and integrating this ancient prayer into daily life.",
    date: "2026-04-16",
    readTime: "22 min",
    category: "Prayer & Devotion",
    icon: BookOpen,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    id: 1048,
    slug: "catholic-dating-guide",
    title: "Catholic Dating: Complete Guide to Courtship and Marriage Preparation",
    excerpt: "Discover the Catholic approach to dating and courtship. Learn how to date with intention, prepare for marriage, and build relationships that honor God and each other.",
    date: "2026-04-16",
    readTime: "20 min",
    category: "Relationships & Family",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 1049,
    slug: "catholic-parenting-guide",
    title: "Catholic Parenting: Complete Guide to Raising Catholic Children",
    excerpt: "Discover Catholic parenting principles for raising children in faith. Learn about Catholic family life, religious education, discipline, and creating a Catholic home environment.",
    date: "2026-04-16",
    readTime: "25 min",
    category: "Family & Parenting",
    icon: Home,
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    id: 1051,
    slug: "who-is-pope-leo-xiv",
    title: "Who Is Pope Leo XIV? The First American Pope Explained",
    excerpt: "Robert Francis Prevost, born in Chicago, was elected Pope on May 8, 2025. Learn about the first American pope in history — his Augustinian vocation, decades in Peru, and vision for the Church.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Current Affairs",
    icon: Cross,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: 1052,
    slug: "pope-francis-legacy",
    title: "Pope Francis: Life, Legacy and His Impact on the Catholic Church",
    excerpt: "Explore the life and legacy of Pope Francis — Jorge Mario Bergoglio — from Buenos Aires to the Vatican. His key documents, emphasis on mercy, and lasting impact on the Church.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Current Affairs",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-600"
  },
  {
    id: 1053,
    slug: "best-catholic-bible-translations",
    title: "Best Catholic Bible Translations: RSV, NAB, Douay-Rheims Compared",
    excerpt: "Which Catholic Bible translation is best? Compare the Douay-Rheims, RSV-CE, NAB, NABRE, and Jerusalem Bible to find the right translation for study, prayer, and Mass.",
    date: "2026-04-24",
    readTime: "22 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    id: 1054,
    slug: "catholic-teaching-on-salvation",
    title: "What Does the Catholic Church Teach About Salvation?",
    excerpt: "What does the Catholic Church teach about salvation? Learn about justification, sanctification, faith and works, the sacraments, and how to respond to 'are you saved?'",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Doctrine",
    icon: Cross,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 1055,
    slug: "catholic-wedding-ceremony-guide",
    title: "Catholic Wedding Ceremony: A Complete Guide to Holy Matrimony",
    excerpt: "Everything you need to know about a Catholic wedding — the Rite of Marriage, exchange of vows, Nuptial Blessing, Pre-Cana, mixed marriages, and what guests should know.",
    date: "2026-04-24",
    readTime: "25 min",
    category: "Sacraments",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 1056,
    slug: "can-catholics-eat-meat-on-fridays",
    title: "Can Catholics Eat Meat on Fridays? The Complete Guide",
    excerpt: "Learn the Catholic Church's rules on Friday abstinence, what counts as meat, why fish is allowed, and the deeper spiritual meaning of Friday penance.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "Doctrine",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    id: 1057,
    slug: "catholic-funeral-rites-explained",
    title: "Catholic Funeral Rites: What Happens and Why It Matters",
    excerpt: "A complete guide to the three stages of Catholic funeral rites — the Vigil, Funeral Mass, and Rite of Committal — plus the Church's teaching on cremation.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Doctrine",
    icon: Cloud,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-400"
  },
  {
    id: 1058,
    slug: "are-non-catholics-saved",
    title: "Are Non-Catholics Saved? What the Catholic Church Really Teaches",
    excerpt: "What does the Church really teach about the salvation of non-Catholics? Learn about Extra Ecclesiam nulla salus, Vatican II, invincible ignorance, and baptism of desire.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Doctrine",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 1059,
    slug: "deuterocanonical-books-catholic-bible",
    title: "The Deuterocanonical Books: Why Catholics Have 7 More Books in the Bible",
    excerpt: "Why does the Catholic Bible have 73 books while the Protestant Bible has 66? Learn about the deuterocanonical books, the Septuagint, and the Council of Trent.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: 1060,
    slug: "why-did-the-protestant-reformation-happen",
    title: "Why Did the Protestant Reformation Happen? A Catholic Perspective",
    excerpt: "A Catholic perspective on Martin Luther, the 95 Theses, the Council of Trent, and how Catholics should view Protestants today.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 1132,
    slug: "catholic-teaching-on-transgender",
    title: "Catholic Teaching on Transgender: What the Church Really Says",
    excerpt: "What does the Catholic Church teach about transgender identity and gender ideology? A clear explanation rooted in the Catechism, Dignitas Infinita (2024), and the theology of the body.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Doctrine & Morality",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-500"
  },
  {
    id: 1133,
    slug: "catholic-teaching-on-same-sex-marriage",
    title: "Catholic Teaching on Same-Sex Marriage: What the Church Teaches",
    excerpt: "What does the Catholic Church teach about same-sex marriage? A clear explanation from the Catechism (CCC 2357-2359), natural law, and the Church's understanding of marriage.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Doctrine & Morality",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 1134,
    slug: "catholic-teaching-on-euthanasia",
    title: "Catholic Teaching on Euthanasia & Assisted Suicide",
    excerpt: "What does the Catholic Church teach about euthanasia and assisted suicide? A complete guide from the Catechism (CCC 2276-2279), Evangelium Vitae, and the theology of suffering.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Doctrine & Morality",
    icon: Heart,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-400"
  },
  {
    id: 1135,
    slug: "catholic-teaching-on-ivf",
    title: "Catholic Teaching on IVF: What the Church Says About In Vitro Fertilization",
    excerpt: "What does the Catholic Church teach about IVF? A clear explanation from the Catechism, Donum Vitae, and Dignitas Personae — and what alternatives the Church supports.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Doctrine & Morality",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 1136,
    slug: "catholic-annulment-process",
    title: "Catholic Annulment Process: A Complete Step-by-Step Guide",
    excerpt: "What is a Catholic annulment? Complete guide to the annulment process — grounds, steps, timeline, cost, and what it means for divorced Catholics who want to remarry.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Doctrine & Morality",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-500"
  },
  {
    id: 1137,
    slug: "can-divorced-catholic-receive-communion",
    title: "Can a Divorced Catholic Receive Communion? What the Church Teaches",
    excerpt: "Can a divorced Catholic receive Holy Communion? The Church's clear teaching from the Catechism (CCC 1650), Amoris Laetitia, and what divorced Catholics need to know.",
    date: "2026-04-24",
    readTime: "15 min",
    category: "Doctrine & Morality",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  {
    id: 1138,
    slug: "catholic-teaching-on-contraception",
    title: "Catholic Teaching on Contraception: Humanae Vitae Explained",
    excerpt: "What does the Catholic Church teach about contraception? A complete explanation of Humanae Vitae (1968), the Catechism (CCC 2370), and why the Church upholds this teaching.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Doctrine & Morality",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-500"
  },
  {
    id: 1139,
    slug: "catholic-pro-life-guide",
    title: "Catholic Pro-Life Guide: What the Church Teaches About the Sanctity of Life",
    excerpt: "The complete Catholic pro-life guide — what the Church teaches about abortion, euthanasia, capital punishment, and the consistent ethic of life from conception to natural death.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Doctrine & Morality",
    icon: Heart,
    bgColor: "bg-red-100",
    iconColor: "text-red-500"
  },
  {
    id: 1140,
    slug: "staying-catholic-in-college",
    title: "Staying Catholic in College: A Practical Guide for Catholic Students",
    excerpt: "How to stay Catholic in college — finding a Newman Center, navigating secular culture, maintaining your faith, and growing spiritually during your college years.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Catholic Living",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    id: 1141,
    slug: "why-young-catholics-leave-the-church",
    title: "Why Young Catholics Leave the Church — and How to Come Back",
    excerpt: "Why are young Catholics leaving the Church? The real reasons — and what the Church offers those who are searching, doubting, or have drifted away.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Catholic Living",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    id: 1126,
    slug: "ash-wednesday-2026",
    title: "Ash Wednesday 2026: Date, Fasting Rules, Mass Times & What to Expect",
    excerpt: "Ash Wednesday 2026 falls on February 18. Everything you need to know — fasting and abstinence rules, what the ashes mean, Mass times, and how to begin Lent well.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "Liturgical Year",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500"
  },
  {
    id: 1127,
    slug: "lent-prayers",
    title: "Lent Prayers 2026: Best Catholic Prayers for the Lenten Season",
    excerpt: "The best Catholic prayers for Lent 2026 — the Stations of the Cross, Lenten prayers of repentance, the Miserere (Psalm 51), prayers for each week of Lent, and more.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Liturgical Year",
    icon: Wind,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500"
  },
  {
    id: 1128,
    slug: "easter-mass-times-2026",
    title: "Easter Mass Times 2026: How to Find Mass Near You for Easter Sunday",
    excerpt: "How to find Easter Mass times 2026 near you — Easter Sunday is April 5, 2026. Best tools to find Mass, what to expect at Easter Vigil, and how to prepare for Easter.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "Liturgical Year",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500"
  },
  {
    id: 1129,
    slug: "advent-prayers",
    title: "Advent Prayers 2026: Catholic Prayers for Each Week of Advent",
    excerpt: "Beautiful Catholic prayers for Advent 2026 — prayers for each week, the O Antiphons, the Advent wreath blessing, and how to prepare your heart for Christmas.",
    date: "2026-04-24",
    readTime: "15 min",
    category: "Liturgical Year",
    icon: Star,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 1130,
    slug: "christmas-mass-near-me",
    title: "Christmas Mass Near Me 2026: Times, What to Expect & How to Prepare",
    excerpt: "Find Christmas Mass times 2026 near you — Christmas Eve and Christmas Day. What to expect at Midnight Mass, how to find your nearest Catholic church, and how to prepare.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "Liturgical Year",
    icon: Star,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-400"
  },
  {
    id: 1131,
    slug: "good-friday-prayers",
    title: "Good Friday Prayers 2026: Prayers for the Passion, Death & the Cross",
    excerpt: "Powerful Catholic prayers for Good Friday 2026 (April 3) — the Seven Last Words of Jesus, the Stabat Mater, prayers before the cross, and how to observe Good Friday.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Liturgical Year",
    icon: Heart,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-500"
  },
  {
    id: 1122,
    slug: "st-jude-prayer",
    title: "St. Jude Prayer: Powerful Prayers for Impossible Cases & Desperate Situations",
    excerpt: "The most powerful prayers to St. Jude Thaddeus — patron of impossible cases. Full texts of the St. Jude novena, the traditional prayer, and how to ask for his intercession.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Saints & Intercession",
    icon: Heart,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    id: 1123,
    slug: "st-anthony-prayer",
    title: "St. Anthony Prayer: For Lost Things, Lost People & Impossible Causes",
    excerpt: "Prayers to St. Anthony of Padua — patron of lost things. The traditional prayer, the Responsory, novena, and how to ask St. Anthony to help you find what is lost.",
    date: "2026-04-24",
    readTime: "13 min",
    category: "Saints & Intercession",
    icon: MapPin,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500"
  },
  {
    id: 1124,
    slug: "catholic-saints-list",
    title: "Catholic Saints List: Patron Saints for Every Need & Occasion",
    excerpt: "Complete Catholic saints list organized by patronage — saints for health, work, travel, family, and specific needs. Find your patron saint and learn how to ask for their intercession.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Saints & Intercession",
    icon: Users,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-500"
  },
  {
    id: 1125,
    slug: "patron-saints-guide",
    title: "Patron Saints: What They Are, How They Help & How to Find Yours",
    excerpt: "What are patron saints? How do they intercede for us? How do you find your patron saint? Complete Catholic guide to patron saints, their patronages, and how to develop devotion to them.",
    date: "2026-04-24",
    readTime: "15 min",
    category: "Saints & Intercession",
    icon: Star,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-500"
  },
  {
    id: 1101,
    slug: "catholic-bible-guide",
    title: "The Catholic Bible: Complete Guide — Books, Translations & How to Read It",
    excerpt: "Everything about the Catholic Bible — its 73 books, the deuterocanonical books, best translations (RSV-CE, NABRE, Douay-Rheims), and how to read it as a Catholic.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Bible & Faith",
    icon: BookOpen,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    id: 1102,
    slug: "daily-mass-readings-catholic",
    title: "Daily Mass Readings Catholic: How to Follow, Apps & the Lectionary",
    excerpt: "How to follow the Catholic daily Mass readings — what they are, the three-year cycle, the best apps and websites, and how to use them for daily prayer and Scripture study.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Bible & Faith",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500"
  },
  {
    id: 1103,
    slug: "catholic-bible-verses",
    title: "50 Most Important Catholic Bible Verses: Scripture for Every Occasion",
    excerpt: "The 50 most important Catholic Bible verses — for prayer, strength, comfort, faith, love, and the sacraments. Essential Scripture every Catholic should know by heart.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Bible & Faith",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    id: 1104,
    slug: "gospel-reading-today-catholic",
    title: "Gospel Reading Today Catholic: How to Find It, Understand It & Pray It",
    excerpt: "How to find today's Catholic Gospel reading — the best apps, websites, and methods. Plus how to understand and pray with the Gospel reading every day.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "Bible & Faith",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-500"
  },
  {
    id: 1105,
    slug: "how-to-study-the-bible-catholic",
    title: "How to Study the Bible as a Catholic: Methods, Resources & Tips",
    excerpt: "How to study the Bible as a Catholic — Lectio Divina, the four senses of Scripture, the best study Bibles, commentaries, apps, and a practical daily reading plan.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Bible & Faith",
    icon: BookOpen,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  {
    id: 1097,
    slug: "how-to-become-catholic",
    title: "How to Become Catholic: Complete Step-by-Step Guide",
    excerpt: "How to become Catholic — the complete guide to the RCIA process, what to expect, how long it takes, what you'll learn, and how to find a parish near you.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Becoming Catholic",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  {
    id: 1098,
    slug: "what-is-rcia-explained",
    title: "What Is RCIA? The Complete Guide to the Rite of Christian Initiation",
    excerpt: "What is RCIA? Complete guide to the Rite of Christian Initiation of Adults — what it is, who it's for, what happens at each stage, and how to find RCIA near you.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Becoming Catholic",
    icon: Users,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-500"
  },
  {
    id: 1099,
    slug: "converting-to-catholicism",
    title: "Converting to Catholicism: What to Expect, What Changes & Real Stories",
    excerpt: "Thinking about converting to Catholicism? What to expect, what will change in your life, how to tell your family, and the stories of famous converts who found their home in the Church.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Becoming Catholic",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-500"
  },
  {
    id: 1100,
    slug: "reasons-to-become-catholic",
    title: "10 Reasons to Become Catholic: Why People Are Joining the Church",
    excerpt: "Why are so many people becoming Catholic? 10 compelling reasons — from the Eucharist to the intellectual tradition to the Communion of Saints — that draw people to the Catholic Church.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Becoming Catholic",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-500"
  },
  {
    id: 1092,
    slug: "what-do-catholics-believe",
    title: "What Do Catholics Believe? Core Beliefs Explained",
    excerpt: "What do Catholics believe? A clear, complete guide to the core beliefs of the Catholic Church — God, Jesus, salvation, Mary, the sacraments, the afterlife, and more.",
    date: "2026-04-24",
    readTime: "22 min",
    category: "Faith Questions",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    id: 1093,
    slug: "is-catholicism-christian",
    title: "Is Catholicism Christian? The Clear Answer",
    excerpt: "Is Catholicism a form of Christianity? Yes — and here's why. A clear, honest answer with historical and biblical evidence that Catholics are Christians.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Faith Questions",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  {
    id: 1094,
    slug: "why-do-catholics",
    title: "Why Do Catholics Pray to Mary, Confess to Priests & More — Answered",
    excerpt: "Clear answers to the most common questions about Catholic practices: Why pray to Mary? Why confess to a priest? Why call priests 'Father'? Why kneel?",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Faith Questions",
    icon: HelpCircle,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    id: 1095,
    slug: "what-is-the-catholic-church",
    title: "What Is the Catholic Church? History, Structure & Mission",
    excerpt: "A complete guide to the Catholic Church — its founding by Jesus Christ, 2,000-year history, structure, the Pope, sacraments, and global mission.",
    date: "2026-04-24",
    readTime: "19 min",
    category: "Faith Questions",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-600"
  },
  {
    id: 1096,
    slug: "what-is-purgatory-explained",
    title: "What Is Purgatory? The Catholic Teaching Fully Explained",
    excerpt: "What is Purgatory? The complete Catholic explanation — biblical basis, what Purgatory is and isn't, how to pray for the souls there, and why this doctrine reveals God's mercy.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Faith Questions",
    icon: Cloud,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-400"
  },
  {
    id: 1086,
    slug: "mass-times-near-me",
    title: "Mass Times Near Me: How to Find a Catholic Church & Mass Schedule",
    excerpt: "How to find Mass times near you — the best tools, apps, and websites to locate a Catholic church, check Mass schedules, and find confession times in your area.",
    date: "2026-04-24",
    readTime: "10 min",
    category: "Mass & Sacraments",
    icon: MapPin,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    id: 1087,
    slug: "how-to-go-to-confession-guide",
    title: "How to Go to Confession: Complete Step-by-Step Catholic Guide",
    excerpt: "Complete guide to Catholic Confession — how to prepare, what to say, the Act of Contrition, what happens inside the confessional, and how to make a good confession after years away.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Mass & Sacraments",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  {
    id: 1088,
    slug: "catholic-mass-complete-guide",
    title: "The Catholic Mass: A Complete Guide to Every Part of the Liturgy",
    excerpt: "Complete guide to the Catholic Mass — every part explained, from the Introductory Rites to the Dismissal. What happens, what it means, and how to participate fully.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Mass & Sacraments",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-600"
  },
  {
    id: 1089,
    slug: "catholic-confession-guide",
    title: "Catholic Confession Guide: What It Is, Why It Matters & Common Questions",
    excerpt: "Complete Catholic Confession guide — what the Sacrament of Reconciliation is, its biblical basis, what happens, common fears, and why regular Confession transforms your life.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Mass & Sacraments",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-500"
  },
  {
    id: 1090,
    slug: "catholic-mass-online",
    title: "Catholic Mass Online: Best Live Streams, EWTN & Does It Count?",
    excerpt: "Find the best Catholic Mass online — EWTN, Word on Fire, and parish live streams. Does watching Mass online fulfill the Sunday obligation? Everything you need to know.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "Mass & Sacraments",
    icon: Globe,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-500"
  },
  {
    id: 1091,
    slug: "examination-of-conscience-before-confession",
    title: "Examination of Conscience: Complete Catholic Guide Before Confession",
    excerpt: "Complete Catholic examination of conscience for adults — organized by the Ten Commandments and the precepts of the Church. Use this guide to prepare for a thorough, honest Confession.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Mass & Sacraments",
    icon: BookOpen,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    id: 1079,
    slug: "catholic-prayers-complete-guide",
    title: "Catholic Prayers: The Complete Guide to Essential Catholic Prayers",
    excerpt: "The complete guide to essential Catholic prayers — the Our Father, Hail Mary, Glory Be, Apostles' Creed, Act of Contrition, Rosary, and more. Full texts and explanations.",
    date: "2026-04-24",
    readTime: "22 min",
    category: "Prayers & Devotions",
    icon: BookOpen,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-500"
  },
  {
    id: 1080,
    slug: "night-prayer-catholic",
    title: "Night Prayer Catholic: Complete Guide to Evening Prayer & Compline",
    excerpt: "Learn how to pray Catholic night prayer. Full texts for evening prayer, Compline, examination of conscience, and bedtime prayers for adults and children.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Prayers & Devotions",
    icon: Moon,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 1081,
    slug: "morning-prayer-catholic",
    title: "Morning Prayer Catholic: Full Texts, Lauds & How to Start Your Day",
    excerpt: "Complete guide to Catholic morning prayer — full texts of Lauds, the Morning Offering, Psalm 63, and simple morning prayers for every Catholic.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Prayers & Devotions",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 1082,
    slug: "saint-michael-prayer",
    title: "The Prayer to Saint Michael: History, Full Text & How to Pray It",
    excerpt: "Learn the full text of the Prayer to Saint Michael, its history with Pope Leo XIII, why it was written, and how to use it for spiritual protection today.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Prayers & Devotions",
    icon: Shield,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-600"
  },
  {
    id: 1083,
    slug: "prayers-for-healing-catholic",
    title: "Catholic Prayers for Healing: Body, Mind & Soul",
    excerpt: "Powerful Catholic prayers for healing — physical, emotional, and spiritual. Full texts of healing prayers, the Anointing of the Sick, and how to pray for the sick.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Prayers & Devotions",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-500"
  },
  {
    id: 1084,
    slug: "how-to-pray-the-rosary-step-by-step",
    title: "How to Pray the Rosary Step by Step: A Beginner's Complete Guide",
    excerpt: "Learn how to pray the Rosary step by step. Complete beginner's guide with all prayers, the 20 mysteries, how to hold the beads, and tips for praying with devotion.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Prayers & Devotions",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 1085,
    slug: "prayer-before-meals-catholic",
    title: "Catholic Prayer Before Meals: Grace Before and After Eating",
    excerpt: "Learn the traditional Catholic grace before meals, prayers after eating, family meal prayers, and the spiritual meaning of blessing food. Full texts included.",
    date: "2026-04-24",
    readTime: "10 min",
    category: "Prayers & Devotions",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    id: 1073,
    slug: "virgin-mary-complete-guide",
    title: "The Virgin Mary: Mother of God, Apparitions, Prayers & Catholic Devotion",
    excerpt: "Complete Catholic guide to the Virgin Mary — her role in salvation history, the four Marian dogmas, major apparitions, the Rosary, and how to grow in Marian devotion.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Saints & Feast Days",
    icon: Heart,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    id: 1074,
    slug: "saint-joseph-complete-guide",
    title: "Saint Joseph: Patron of the Church, Families & Workers",
    excerpt: "Complete guide to Saint Joseph — foster father of Jesus, patron of the universal Church, families, workers, and a happy death. His life, prayers, feast days, and devotions.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Saints & Feast Days",
    icon: Home,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    id: 1075,
    slug: "saint-patrick",
    title: "Saint Patrick: The Real Story of Ireland's Patron Saint",
    excerpt: "Discover the real Saint Patrick — his captivity, conversion, mission to Ireland, the shamrock, the Breastplate prayer, and the truth behind the legends.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Saints & Feast Days",
    icon: Flame,
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    id: 1076,
    slug: "saint-nicholas",
    title: "Saint Nicholas: The Real Santa Claus and Bishop of Myra",
    excerpt: "Discover the real Saint Nicholas — the 4th-century bishop of Myra whose extraordinary generosity inspired the legend of Santa Claus. His life, miracles, and feast day.",
    date: "2026-04-24",
    readTime: "15 min",
    category: "Saints & Feast Days",
    icon: Star,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-500"
  },
  {
    id: 1077,
    slug: "saint-christopher",
    title: "Saint Christopher: Patron of Travelers — History, Medal & Prayer",
    excerpt: "Learn about Saint Christopher — patron of travelers, his legendary story of carrying the Christ child, the meaning of his medal, and why Catholics still venerate him today.",
    date: "2026-04-24",
    readTime: "13 min",
    category: "Saints & Feast Days",
    icon: MapPin,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    id: 1078,
    slug: "saint-vincent-de-paul",
    title: "Saint Vincent de Paul: Apostle of Charity and Patron of the Poor",
    excerpt: "Discover Saint Vincent de Paul — the 17th-century French priest who revolutionized Catholic charity. His life, the Vincentian family, the Society of St. Vincent de Paul, and his legacy.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Saints & Feast Days",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-500"
  },
  {
    id: 1065,
    slug: "how-to-pray-intercessory-prayer",
    title: "How to Pray Intercessory Prayer: A Complete Catholic Guide",
    excerpt: "Learn how to pray intercessory prayer as a Catholic. Discover what intercession is, how to pray for others effectively, and why the Church calls us to be intercessors.",
    date: "2026-04-24",
    readTime: "13 min",
    category: "How to Pray",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 1066,
    slug: "how-to-do-a-holy-hour",
    title: "How to Do a Holy Hour: Complete Catholic Guide to Eucharistic Adoration",
    excerpt: "Learn how to do a Holy Hour of Eucharistic Adoration. Discover what to pray, how to structure your time, and why spending an hour with Jesus transforms your life.",
    date: "2026-04-24",
    readTime: "15 min",
    category: "How to Pray",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    id: 1067,
    slug: "catholic-living-in-secular-world",
    title: "How to Live as a Catholic in a Secular World",
    excerpt: "Practical guide for Catholics living in a secular culture. Learn how to maintain your faith, witness to others, and stay strong when the world pushes back.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Catholic Living",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: 1068,
    slug: "catholic-morning-routine",
    title: "Catholic Morning Routine: How to Start Your Day with God",
    excerpt: "Build a powerful Catholic morning routine. Discover the prayers, habits, and practices that saints used to start their day with God and transform their entire day.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Catholic Living",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500"
  },
  {
    id: 1069,
    slug: "saint-francis-of-assisi",
    title: "Saint Francis of Assisi: Life, Stigmata, and the Franciscan Legacy",
    excerpt: "Discover the life of Saint Francis of Assisi — the Poor Man of Assisi who received the stigmata, founded the Franciscans, and became one of the most beloved saints in history.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Saints & Feast Days",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500"
  },
  {
    id: 1070,
    slug: "all-saints-day-all-souls-day",
    title: "All Saints Day and All Souls Day: What Catholics Believe",
    excerpt: "Learn the Catholic meaning of All Saints Day (November 1) and All Souls Day (November 2). Discover how to honor the saints, pray for the dead, and understand Purgatory.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Saints & Feast Days",
    icon: Cloud,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-500"
  },
  {
    id: 1071,
    slug: "what-is-the-catechism-of-the-catholic-church",
    title: "What Is the Catechism of the Catholic Church? Complete Guide",
    excerpt: "Learn what the Catechism of the Catholic Church is, how it is organized, and how to use it. A complete guide to the CCC for Catholics and those curious about the faith.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Bible & Faith",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    id: 1072,
    slug: "catholic-apologetics-guide",
    title: "Catholic Apologetics: How to Defend Your Faith with Confidence",
    excerpt: "Learn Catholic apologetics — how to defend the Catholic faith with reason, Scripture, and history. Answers to the most common objections to Catholicism.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Bible & Faith",
    icon: Shield,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-600"
  },
  {
    id: 1061,
    slug: "how-to-choose-confirmation-name",
    title: "How to Choose a Confirmation Name: Complete Catholic Guide",
    excerpt: "Learn how to choose the perfect Catholic Confirmation name. Discover the tradition, how to research saints, and what your patron saint means for your faith journey.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "How-To",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    id: 1062,
    slug: "how-to-return-to-mass",
    title: "How to Return to Mass After a Long Absence",
    excerpt: "Thinking about returning to Mass? This step-by-step guide helps lapsed Catholics come back to the Church with confidence, grace, and a renewed sense of belonging.",
    date: "2026-04-24",
    readTime: "10 min",
    category: "How-To",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-600"
  },
  {
    id: 1063,
    slug: "how-to-teach-children-to-pray",
    title: "How to Teach Children to Pray: A Catholic Parent's Guide",
    excerpt: "Practical, age-by-age guide for Catholic parents on teaching children to pray. From bedtime prayers to the Rosary, build a lifelong prayer habit in your kids.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "How-To",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 1064,
    slug: "how-to-find-catholic-community",
    title: "How to Find a Catholic Community: A Practical Guide",
    excerpt: "Feeling isolated in your faith? Learn how to find a vibrant Catholic community — from parish groups and young adult ministries to online communities and retreats.",
    date: "2026-04-24",
    readTime: "11 min",
    category: "How-To",
    icon: Users,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    id: 1050,
    slug: "st-joseph-novena-house",
    title: "St. Joseph Novena for Buying a House: Complete Guide to Divine Intervention",
    excerpt: "Discover the powerful St. Joseph Novena for buying a house. Learn the history, step-by-step prayers, and how this devotion has helped thousands find their dream homes.",
    date: "2026-04-16",
    readTime: "12 min",
    category: "Novena & Prayer",
    icon: Church,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    id: 1028,
    slug: "brown-scapular-guide",
    title: "The Brown Scapular: A Complete Guide to the Garment of Grace",
    excerpt: "What is the Brown Scapular? Learn about the apparition to St. Simon Stock, the Sabbatine Privilege, and the requirements to wear this sacramental.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Devotions",
    icon: Shield,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-900"
  },
  {
    id: 1029,
    slug: "st-michael-lent-guide",
    title: "Saint Michael's Lent: A 40-Day Spiritual Journey for Protection",
    excerpt: "Discover the origins of St. Michael's Lent, why St. Francis of Assisi loved this devotion, and how to pray it for spiritual victory.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Spiritual Warfare",
    icon: Sword,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 1030,
    slug: "sacred-heart-promises",
    title: "The 12 Promises of the Sacred Heart of Jesus",
    excerpt: "Discover the 12 promises given by Jesus to St. Margaret Mary Alacoque and learn how to live the powerful First Friday devotion.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Devotions",
    icon: Heart,
    bgColor: "bg-red-100",
    iconColor: "text-red-400"
  },
  {
    id: 1025,
    slug: "guardian-angels-guide",
    title: "Guardian Angels: Your Divine Protectors and the 9 Choirs",
    excerpt: "Do you have a Guardian Angel? Discover the Catholic teaching on the nine choirs of angels and how to build a relationship with your protector.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Spiritual Life",
    icon: UserCheck,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-400"
  },
  {
    id: 1026,
    slug: "catholic-view-on-wealth",
    title: "Catholic View on Wealth and Money: Prosperity or Poverty?",
    excerpt: "What does the Church teach about money and success? Explore the balance between the Prosperity Gospel and the Vow of Poverty.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Social Teaching",
    icon: Coins,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 1027,
    slug: "saint-john-vianney-cure-of-ars",
    title: "Saint John Vianney: The Curé of Ars and Patron of Priests",
    excerpt: "Discover the life of the humble priest who converted thousands through the confessional and battled the demonic in his small village.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Saints",
    icon: Church,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 1022,
    slug: "miracle-of-guadalupe-science",
    title: "The Miracle of Our Lady of Guadalupe: What Science Cannot Explain",
    excerpt: "Explore the scientific mysteries of the Tilma of Juan Diego. Learn about the miraculous preservation and the images found in the eyes.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Faith & Science",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 1023,
    slug: "the-crusades-fact-vs-fiction",
    title: "The Crusades: Separating Catholic Fact from Fiction",
    excerpt: "Were the Crusades unprovoked wars of aggression? Explore the historical context and the defense of pilgrims in the Holy Land.",
    date: "2026-04-16",
    readTime: "18 min",
    category: "History & Apologetics",
    icon: Sword,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 1024,
    slug: "catholicism-and-evolution-guide",
    title: "Catholicism and Evolution: Can You Believe in Both?",
    excerpt: "Does the Church accept evolutionary theory? Explore the official teaching of the Popes and the compatibility of science and Genesis.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Faith & Science",
    icon: Microscope,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 1019,
    slug: "our-lady-undoer-of-knots",
    title: "Our Lady Undoer of Knots: The History and The Novena",
    excerpt: "Discover the 300-year-old devotion popularized by Pope Francis. Learn how to untie the difficult knots in your life through Mary's intercession.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Devotions",
    icon: Hand,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 1020,
    slug: "saint-dymphna-mental-health",
    title: "Saint Dymphna: Patron Saint of Mental Health and Anxiety",
    excerpt: "Discover the life of the 15-year-old Irish princess who became the patron saint of those suffering from depression, anxiety, and mental illness.",
    date: "2026-04-16",
    readTime: "12 min",
    category: "Saints & Healing",
    icon: Brain,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 1021,
    slug: "why-does-god-allow-suffering",
    title: "Why Does God Allow Suffering? A Catholic Perspective",
    excerpt: "Exploring the deepest question of the human heart. Learn about free will, redemptive suffering, and where God is in the midst of our pain.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Theology",
    icon: HelpCircle,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 1016,
    slug: "three-days-of-darkness-prophecy",
    title: "The Three Days of Darkness: Catholic Prophecy Explained",
    excerpt: "What is the Three Days of Darkness? Explore the private revelations of recognized mystics, the conditions, and how to prepare spiritually.",
    date: "2026-04-16",
    readTime: "16 min",
    category: "Prophecy & Mysticism",
    icon: Moon,
    bgColor: "bg-neutral-900",
    iconColor: "text-neutral-400"
  },
  {
    id: 1017,
    slug: "incorruptible-saints-miracle",
    title: "Incorruptible Saints: The Miraculous Victory Over Death",
    excerpt: "Discover the miracle of Catholic saints whose bodies have not decomposed for centuries. Learn about the scientific studies and the theological meaning.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Saints & Miracles",
    icon: Sparkles,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 1018,
    slug: "miraculous-medal-guide",
    title: "The Miraculous Medal: Every Symbol Decoded and Why it Matters",
    excerpt: "Discover the complete history of the Miraculous Medal, its symbols, the apparitions to St. Catherine Labouré, and why millions wear it today.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Devotions & Sacramentals",
    icon: Star,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 1013,
    slug: "eucharistic-miracles-science",
    title: "Eucharistic Miracles and Science: What Do the Medical Labs Say?",
    excerpt: "Explore the scientific evidence behind Eucharistic miracles. Learn about blood types, DNA, and the medical findings that defy natural explanation.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Faith & Science",
    icon: Microscope,
    bgColor: "bg-red-100",
    iconColor: "text-red-400"
  },
  {
    id: 1014,
    slug: "catholic-view-on-ghosts",
    title: "Do Catholics Believe in Ghosts? The Truth About the Paranormal",
    excerpt: "What does the Church teach about ghosts and spirits? Learn about souls in purgatory, demonic deception, and how to protect your home.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Spiritual Warfare",
    icon: Ghost,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 1015,
    slug: "saint-peregrine-novena",
    title: "Saint Peregrine Novena: The Patron Saint for Cancer Patients",
    excerpt: "Pray the novena to the 'Cancer Saint.' Learn about the miraculous healing of St. Peregrine and how to ask for his intercession today.",
    date: "2026-04-16",
    readTime: "12 min",
    category: "Saints & Healing",
    icon: Heart,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 1010,
    slug: "what-is-purgatory-guide",
    title: "What Is Purgatory? A Complete Catholic Guide",
    excerpt: "Purgatory is one of the most misunderstood Catholic doctrines. Learn the biblical evidence, what purification really means, how to pray for the dead, and how Purgatory reveals God's mercy.",
    date: "2026-04-16",
    readTime: "18 min",
    category: "Doctrine",
    icon: Cloud,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 1011,
    slug: "saint-benedict-medal",
    title: "The Saint Benedict Medal: History, Every Symbol Decoded, and How to Use It",
    excerpt: "Few Catholic sacramentals are as rich in symbolism as the Medal of St. Benedict. Learn what every letter and image means, the Vade Retro prayer, and how to use it for spiritual protection.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Devotions",
    icon: Shield,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-400"
  },
  {
    id: 1012,
    slug: "what-is-the-nicene-creed",
    title: "What Is the Nicene Creed? Full Text, History & Meaning",
    excerpt: "Every Sunday Catholics profess the Nicene Creed. Learn its full text, the dramatic Arian Crisis that produced it, what every line means theologically, and how it differs from the Apostles' Creed.",
    date: "2026-04-16",
    readTime: "16 min",
    category: "Formation & Doctrine",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 1007,
    slug: "ten-commandments-catholic",
    title: "The 10 Commandments: Complete Catholic Guide",
    excerpt: "What are the 10 Commandments in the Catholic Church? Learn the full text, how the Catholic numbering differs from Protestant, what each commandment means today, and more.",
    date: "2026-04-16",
    readTime: "17 min",
    category: "Formation & Doctrine",
    icon: BookOpen,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 1008,
    slug: "fruits-of-the-holy-spirit",
    title: "The 12 Fruits of the Holy Spirit: Complete Catholic Guide",
    excerpt: "What are the 12 Fruits of the Holy Spirit? Learn the complete list from Galatians 5, what each fruit means, how they differ from the 7 Gifts, and how to cultivate them.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Spirituality",
    icon: Flame,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 1009,
    slug: "catholic-teaching-on-divorce",
    title: "Can Catholics Get Divorced? What the Church Really Teaches",
    excerpt: "Can Catholics get divorced? Learn the difference between civil divorce and annulment, what the Church says about Communion after divorce, and how to navigate this with faith.",
    date: "2026-04-16",
    readTime: "16 min",
    category: "Marriage & Family",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 1004,
    slug: "seven-deadly-sins",
    title: "The 7 Deadly Sins: What They Are and How to Overcome Each One",
    excerpt: "What are the 7 deadly sins? Learn what pride, greed, lust, envy, gluttony, wrath, and sloth really mean in Catholic teaching — and how to overcome each one with virtue.",
    date: "2026-04-16",
    readTime: "11 min",
    category: "Morality & Life",
    icon: Flame,
    bgColor: "bg-red-100",
    iconColor: "text-red-400"
  },
  {
    id: 1005,
    slug: "apparitions-of-our-lady",
    title: "Apparitions of the Virgin Mary: Fatima, Lourdes & Guadalupe",
    excerpt: "Learn about the most important approved apparitions of the Virgin Mary: Our Lady of Guadalupe, Lourdes, and Fatima. History, messages, and how to respond.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Devotions",
    icon: Heart,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 1006,
    slug: "saint-jude-thaddeus",
    title: "St. Jude Thaddeus: Patron of Impossible Causes",
    excerpt: "Discover St. Jude Thaddeus, the patron saint of impossible causes. Learn his life story, why we pray to him, and the powerful Novena to St. Jude.",
    date: "2026-04-16",
    readTime: "10 min",
    category: "Saints",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 1001,
    slug: "are-tattoos-a-sin",
    title: "Are Tattoos a Sin? What the Catholic Church Teaches",
    excerpt: "Is getting a tattoo a sin in the Catholic Church? Learn what the Catechism says, understand Leviticus 19:28, and discover the Church's practical guidelines on tattoos.",
    date: "2026-04-16",
    readTime: "9 min",
    category: "Morality & Life",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 1002,
    slug: "catholic-vs-protestant-bible",
    title: "Catholic vs Protestant Bible: The 7 Missing Books Explained",
    excerpt: "Why does the Catholic Bible have 73 books and the Protestant Bible 66? Understand the history of the canon, the Deuterocanonical books, and Martin Luther's changes.",
    date: "2026-04-16",
    readTime: "12 min",
    category: "Formation & Scriptures",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 1003,
    slug: "ash-wednesday-guide",
    title: "Ash Wednesday: Meaning, Fasting Rules, and Complete Guide",
    excerpt: "What is Ash Wednesday? Learn the Catholic fasting and abstinence rules, the meaning of ashes, if it's a Holy Day of Obligation, and how to start Lent.",
    date: "2026-04-16",
    readTime: "10 min",
    category: "Liturgical Year",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 1,
    slug: "how-to-pray-rosary",
    title: "How to Pray the Holy Rosary: Complete Guide for Beginners",
    excerpt: "Learn step by step how to pray the Holy Rosary and strengthen your Marian devotion with this practical and spiritual guide.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 2,
    slug: "seven-sacraments",
    title: "The 7 Sacraments of the Catholic Church Explained",
    excerpt: "Understand the importance and meaning of each of the seven sacraments instituted by Christ for our salvation.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 3,
    slug: "importance-confession",
    title: "The Importance of Confession: Why Confess Regularly?",
    excerpt: "Discover the spiritual benefits of frequent confession and how it transforms our Christian life.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Sacraments",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 4,
    slug: "patron-saints",
    title: "Patron Saints: How to Choose and Honor Yours",
    excerpt: "Learn about the tradition of patron saints and how they can intercede for you on your faith journey.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Devotions",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 5,
    slug: "fasting-abstinence",
    title: "Fasting and Abstinence: Practices That Strengthen the Soul",
    excerpt: "Learn about the practices of fasting and abstinence in the Catholic Church and how they bring us closer to God.",
    date: "2026-04-12",
    readTime: "5 min",
    category: "Spirituality",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 6,
    slug: "sunday-mass",
    title: "Sunday Mass: Center of Christian Life",
    excerpt: "Why participation in Sunday Mass is essential for every Catholic and how to make the most of it.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Liturgy",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 7,
    slug: "prayer-life",
    title: "Prayer Life: How to Cultivate Intimacy with God",
    excerpt: "Learn how to transform your dialogue with God into a source of life and peace through consistent prayer.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Prayer",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 8,
    slug: "meaning-mass",
    title: "Understanding the Mass: A Journey Through the Liturgy",
    excerpt: "Discover the deep meaning behind each part of the Mass and how to participate more fully.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Liturgy",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 9,
    slug: "examination-conscience",
    title: "Examination of Conscience: Daily Practice for Spiritual Growth",
    excerpt: "Learn how to examine your conscience daily and grow in holiness through self-reflection.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Spirituality",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 10,
    slug: "virgin-mary",
    title: "The Virgin Mary: Mother of God and Our Mother",
    excerpt: "Explore the role of Mary in salvation history and how she continues to intercede for us today.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Devotions",
    icon: Heart,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 11,
    slug: "gifts-holy-spirit",
    title: "The Seven Gifts of the Holy Spirit",
    excerpt: "Understand the seven gifts the Holy Spirit bestows upon us at Confirmation and how to use them.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Formation",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 12,
    slug: "lectio-divina",
    title: "Lectio Divina: Praying with Scripture",
    excerpt: "Discover the ancient practice of Lectio Divina and how to pray with the Word of God.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Prayer",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 13,
    slug: "chastity-modern-world",
    title: "Chastity in the Modern World: Living Purity Today",
    excerpt: "Practical guidance on living the virtue of chastity in contemporary society.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Christian Life",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 14,
    slug: "social-doctrine",
    title: "Catholic Social Doctrine: Faith in Action",
    excerpt: "Learn about the Church's social teaching and how to apply it in your daily life.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Formation",
    icon: Users,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 15,
    slug: "vocational-discernment",
    title: "Vocational Discernment: Finding God's Call",
    excerpt: "Guidance on discerning your vocation and discovering God's plan for your life.",
    date: "2026-04-12",
    readTime: "13 min",
    category: "Vocation",
    icon: MapPin,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 16,
    slug: "eucharist-real-presence",
    title: "The Eucharist: Understanding the Real Presence",
    excerpt: "Explore the Catholic teaching on the Real Presence of Christ in the Eucharist.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Sacraments",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 17,
    slug: "eucharistic-adoration",
    title: "Eucharistic Adoration: Time with Jesus",
    excerpt: "Discover the beauty and power of spending time in Eucharistic Adoration.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Prayer",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 18,
    slug: "what-is-purgatory",
    title: "What is Purgatory? Understanding Catholic Teaching",
    excerpt: "Learn about the Catholic doctrine of Purgatory and its role in our salvation.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Doctrine",
    icon: Cloud,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 19,
    slug: "how-to-live-lent",
    title: "How to Live Lent: A Season of Conversion",
    excerpt: "Practical tips for making the most of the Lenten season and growing closer to God.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Liturgy",
    icon: Wind,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-400"
  },
  {
    id: 20,
    slug: "guardian-angels",
    title: "Guardian Angels: Our Heavenly Companions",
    excerpt: "Learn about the role of guardian angels in our lives and how to develop devotion to them.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Devotions",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 21,
    slug: "meaning-of-crucifix",
    title: "The History and Meaning of the Crucifix",
    excerpt: "Understand why the crucifix is the central symbol of Catholic faith and its importance in our homes.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Devotions",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 22,
    slug: "jubilee-2025-legacy",
    title: "The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?",
    excerpt: "The Holy Doors have closed, but the Christian's heart must remain open. Discover how to carry the fruits of the Holy Year into 2026.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Jubilee 2025",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 23,
    slug: "plenary-indulgence-guide",
    title: "Plenary Indulgence: Complete Guide for the Final Days of the Jubilee",
    excerpt: "The Church opens its treasures of grace in a special way during the Jubilee. Understand how to receive total remission.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 24,
    slug: "church-changes-post-2025",
    title: "What Changes in the Church After the Holy Year of 2025?",
    excerpt: "The closing of the Jubilee is not a period, but a new breath for the mission. Understand the trends and challenges for 2026.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Current Affairs",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 25,
    slug: "prayers-of-hope-2026",
    title: "Prayers of Hope for Times of Crisis in 2026",
    excerpt: "When strength seems exhausted, prayer is our refuge. Discover powerful prayers to renew your trust in God.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 26,
    slug: "local-pilgrimage",
    title: "How to Organize a Local Pilgrimage in Your Diocese",
    excerpt: "You don't need to go to Rome to be a pilgrim. Discover how to organize a journey of faith to shrines in your region.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Devotions",
    icon: MapPin,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 27,
    slug: "faith-mental-health",
    title: "Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety?",
    excerpt: "In a hyperconnected and anxious world, the Catholic tradition offers ancient treasures for the balance of mind and soul.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Mental Health",
    icon: HeartPulse,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-400"
  },
  {
    id: 28,
    slug: "divine-mercy-chaplet",
    title: "How to Pray the Divine Mercy Chaplet: Complete Guide",
    excerpt: "Learn how to pray the Divine Mercy Chaplet step by step. Complete guide with prayers, history, and the significance of the 3pm Hour of Mercy as revealed to St. Faustina.",
    date: "2026-04-14",
    readTime: "9 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 29,
    slug: "act-of-contrition",
    title: "The Act of Contrition: Full Text, Meaning and How to Pray It",
    excerpt: "Discover the full text of the Act of Contrition, its meaning, history, and how to pray it before Confession. Essential Catholic prayer for forgiveness and reconciliation.",
    date: "2026-04-14",
    readTime: "8 min",
    category: "Prayers",
    icon: BookOpen,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 30,
    slug: "morning-offering-prayer",
    title: "Morning Offering Prayer: How to Start Your Day with God",
    excerpt: "Learn the Catholic Morning Offering prayer and how to consecrate your entire day to God. Discover different versions, the history, and practical tips for making this a daily habit.",
    date: "2026-04-14",
    readTime: "7 min",
    category: "Prayers",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 31,
    slug: "prayer-to-st-joseph",
    title: "Prayer to St. Joseph: Powerful Intercession for Families and Workers",
    excerpt: "Discover powerful prayers to St. Joseph for families, workers, and those in need. Learn about his role as patron saint and how to seek his intercession in your daily life.",
    date: "2026-04-14",
    readTime: "9 min",
    category: "Prayers",
    icon: Users,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 32,
    slug: "the-memorare-prayer",
    title: "The Memorare: History, Full Text and How to Pray This Powerful Prayer",
    excerpt: "Learn the full text of the Memorare prayer, its history, meaning, and how to pray it. Discover why this ancient prayer to the Virgin Mary has comforted Catholics for centuries.",
    date: "2026-04-14",
    readTime: "8 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 33,
    slug: "how-to-go-to-confession",
    title: "How to Go to Confession: Step-by-Step Guide for Catholics",
    excerpt: "Learn how to go to Confession step by step. Complete Catholic guide covering examination of conscience, what to say, common fears, and how often to receive the Sacrament of Reconciliation.",
    date: "2026-04-14",
    readTime: "10 min",
    category: "Sacraments",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 34,
    slug: "how-to-become-catholic",
    title: "How to Become Catholic: The RCIA Process Explained",
    excerpt: "Learn how to become Catholic through the RCIA process. Complete guide covering the 4 stages of RCIA, Easter Vigil, what to expect, timeline, and FAQs for converts to Catholicism.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 35,
    slug: "catholic-baptism-guide",
    title: "Catholic Baptism: What It Is, How It Works, and Why It Matters",
    excerpt: "Complete guide to Catholic Baptism. Learn the theology of baptism, infant vs adult baptism, the rite, godparents, effects of baptism, and the doctrine of baptism of desire.",
    date: "2026-04-14",
    readTime: "10 min",
    category: "Sacraments",
    icon: Droplets,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 36,
    slug: "catholic-confirmation-guide",
    title: "Catholic Confirmation: What It Is and How to Prepare",
    excerpt: "Complete guide to Catholic Confirmation. Learn what Confirmation is, the seven gifts of the Holy Spirit, how to choose a sponsor and confirmation name, the rite, and how to prepare spiritually.",
    date: "2026-04-14",
    readTime: "10 min",
    category: "Sacraments",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 37,
    slug: "catholic-marriage-guide",
    title: "Catholic Marriage: What the Church Teaches About Holy Matrimony",
    excerpt: "Complete guide to Catholic marriage. Learn about marriage as a sacrament, unity and indissolubility, marriage preparation, natural family planning, annulment vs divorce, and mixed marriages.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Sacraments",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 38,
    slug: "why-do-catholics-pray-to-saints",
    title: "Why Do Catholics Pray to Saints? Not Worship — Intercession Explained",
    excerpt: "Learn the difference between worship and intercession, the biblical basis for asking saints to pray for us, and how the Communion of Saints works.",
    date: "2026-04-14",
    readTime: "10 min",
    category: "Doctrine",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 39,
    slug: "do-catholics-worship-mary",
    title: "Do Catholics Worship Mary? Understanding Marian Devotion",
    excerpt: "Do Catholics worship Mary? Learn the difference between worship and veneration, what hyperdulia means, the four Marian dogmas, and how to explain Marian devotion to non-Catholics.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Doctrine",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 40,
    slug: "catholic-vs-protestant-differences",
    title: "Catholic vs Protestant: Key Differences Explained",
    excerpt: "What are the key differences between Catholic and Protestant Christianity? Learn about Scripture and Tradition, the sacraments, the papacy, purgatory, and how to have respectful dialogue.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 41,
    slug: "what-is-the-catholic-mass",
    title: "What Is the Catholic Mass? A Complete Guide for Beginners",
    excerpt: "What is the Catholic Mass? Learn the two main parts of the Mass, what happens at each stage, what to do as a visitor, and why Catholics go every Sunday.",
    date: "2026-04-14",
    readTime: "13 min",
    category: "Liturgy",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 42,
    slug: "is-the-catholic-church-the-true-church",
    title: "Is the Catholic Church the True Church? What Catholics Believe",
    excerpt: "Is the Catholic Church the one true Church? Learn about the four marks of the Church, apostolic succession, historical continuity from Peter, and why Catholics believe the Church was founded by Christ.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Doctrine",
    icon: Cross,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 43,
    slug: "catholic-daily-prayer-routine",
    title: "Catholic Daily Prayer Routine: How to Build a Life of Prayer",
    excerpt: "Learn how to build a Catholic daily prayer routine with morning offering, Angelus, Rosary, and night prayer. Practical tips from the saints and a sample weekly schedule.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Prayer",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 44,
    slug: "lectio-divina-how-to-practice",
    title: "Lectio Divina: How to Pray with Scripture Step by Step",
    excerpt: "Learn how to practice Lectio Divina step by step. Complete guide covering the 4 steps, history, common mistakes, recommended Scripture passages, and group vs individual practice.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Prayer",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 45,
    slug: "rosary-complete-guide",
    title: "The Holy Rosary: Complete Guide with All 20 Mysteries",
    excerpt: "Complete guide to the Holy Rosary with all 20 mysteries and meditations, step-by-step instructions, all prayers, spiritual benefits, and tips for praying with devotion.",
    date: "2026-04-14",
    readTime: "15 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 46,
    slug: "examination-of-conscience-guide",
    title: "How to Make an Examination of Conscience: Complete Catholic Guide",
    excerpt: "Learn how to make an examination of conscience using the Ignatian Examen and the 10 Commandments. Complete Catholic guide for daily and pre-Confession examination.",
    date: "2026-04-13",
    readTime: "11 min",
    category: "Spirituality",
    icon: BookOpen,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 47,
    slug: "catholic-fasting-rules",
    title: "Catholic Fasting Rules: What the Church Requires and Why It Matters",
    excerpt: "Learn the Catholic Church's fasting rules for Ash Wednesday, Good Friday, and Fridays of Lent. Who is bound, fasting vs abstinence, the Eucharistic fast, and tips for beginners.",
    date: "2026-04-14",
    readTime: "10 min",
    category: "Spirituality",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 48,
    slug: "saint-padre-pio",
    title: "St. Padre Pio: Life, Stigmata, Miracles and Prayers",
    excerpt: "Discover the life of St. Padre Pio: his stigmata, miracles, spiritual gifts, famous quotes, and a prayer to this beloved Capuchin friar canonized by Pope John Paul II in 2002.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Saints",
    icon: Cross,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 49,
    slug: "saint-therese-of-lisieux",
    title: "St. Thérèse of Lisieux: The Little Way to Holiness",
    excerpt: "Discover the life of St. Thérèse of Lisieux — her Little Way of spiritual childhood, her autobiography Story of a Soul, her death at 24, and her promise to spend her heaven doing good on earth.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Saints",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 50,
    slug: "blessed-carlo-acutis",
    title: "Blessed Carlo Acutis: The Millennial Saint and Patron of the Internet",
    excerpt: "Discover the life of Blessed Carlo Acutis — his Eucharistic devotion, his website cataloguing Eucharistic miracles, his death from leukemia at 15, and his canonization in 2025.",
    date: "2026-04-14",
    readTime: "10 min",
    category: "Saints",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 51,
    slug: "saint-michael-archangel",
    title: "St. Michael the Archangel: Prayer, Devotion and His Role in Scripture",
    excerpt: "Learn about St. Michael the Archangel — his four roles in Scripture, the full text of the Prayer to St. Michael, its history with Pope Leo XIII, and how to develop devotion.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Devotions",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 52,
    slug: "saint-anthony-of-padua",
    title: "St. Anthony of Padua: Patron of Lost Things and Powerful Intercessor",
    excerpt: "Discover the life of St. Anthony of Padua — his extraordinary preaching gifts, why he is patron of lost things, the Responsory Si quaeris miracula, and a prayer to St. Anthony.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Saints",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 53,
    slug: "how-to-pray-the-angelus",
    title: "How to Pray the Angelus: The Catholic Prayer for 6am, Noon, and 6pm",
    excerpt: "Learn how to pray the Angelus, the ancient Catholic prayer prayed three times a day. Full text, history, the Regina Caeli, and tips for families.",
    date: "2026-04-14",
    readTime: "10 min",
    category: "Prayers",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 54,
    slug: "what-is-advent-catholic",
    title: "What Is Advent? The Catholic Season of Waiting and Preparation",
    excerpt: "What is Advent? Learn about the Catholic Advent season, when it starts, the Advent wreath and candles, the O Antiphons, and how to observe Advent spiritually as a family.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Liturgy",
    icon: Wind,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-400"
  },
  {
    id: 55,
    slug: "what-is-holy-week-catholic",
    title: "What Is Holy Week? A Complete Guide to the Most Sacred Week of the Year",
    excerpt: "Complete Catholic guide to Palm Sunday, Holy Thursday, Good Friday, Holy Saturday, and the Easter Vigil. Learn how to participate fully in each day of Holy Week.",
    date: "2026-04-14",
    readTime: "13 min",
    category: "Liturgy",
    icon: Cross,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 56,
    slug: "catholic-grace-before-meals",
    title: "Catholic Grace Before Meals: Traditional and Modern Prayers",
    excerpt: "Learn the traditional Catholic grace before meals — 'Bless us, O Lord' — plus other versions, the theology of blessing food, grace after meals, and tips for family mealtime prayer.",
    date: "2026-04-14",
    readTime: "9 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 57,
    slug: "how-to-make-spiritual-communion",
    title: "How to Make a Spiritual Communion: The Prayer and Its Meaning",
    excerpt: "Learn what spiritual communion is, the traditional prayer of St. Alphonsus Liguori, when to make it, and its theological meaning for Catholics who cannot receive the Eucharist.",
    date: "2026-04-14",
    readTime: "10 min",
    category: "Prayer",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 58,
    slug: "stations-of-the-cross",
    title: "Stations of the Cross: A Complete Guide to This Powerful Catholic Devotion",
    excerpt: "Learn the history of the Stations of the Cross, the 14 traditional stations with meditations, the 15th station added by John Paul II, how to pray them, and tips for families.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Devotions",
    icon: Cross,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 59,
    slug: "what-is-the-brown-scapular",
    title: "What Is the Brown Scapular? History, Promises, and How to Wear It",
    excerpt: "Learn what the Brown Scapular is, the history of Our Lady of Mount Carmel's apparition to St. Simon Stock, the promises of Our Lady, how to be enrolled, and how to wear it.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Devotions",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 60,
    slug: "catholic-prayers-for-the-dying",
    title: "Catholic Prayers for the Dying: Comfort and Grace at the Hour of Death",
    excerpt: "Learn the Catholic prayers for the dying — the Sacrament of Anointing, Viaticum, the Apostolic Pardon, prayers at the bedside, and what to do when someone is dying.",
    date: "2026-04-14",
    readTime: "13 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 61,
    slug: "how-to-consecrate-your-home-to-god",
    title: "How to Consecrate Your Home to God: A Catholic Guide",
    excerpt: "Learn how to consecrate your home to God as a Catholic — the Epiphany house blessing, the difference between blessing and consecration, sacred objects, and how to create a prayer corner.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Devotions",
    icon: MapPin,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 62,
    slug: "what-is-a-novena",
    title: "What Is a Novena? The Catholic Prayer of Nine Days Explained",
    excerpt: "Learn what a novena is, its biblical origins in Acts 1:14, the most popular novenas, how to pray a novena, what to do if you miss a day, and the power of perseverance in prayer.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Prayers",
    icon: BookOpen,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 63,
    slug: "catholic-parenting-raising-children-in-faith",
    title: "Catholic Parenting: How to Raise Children in the Faith",
    excerpt: "A complete guide to Catholic parenting — from baptism and First Communion to the family Rosary, Catholic schools, and raising teenagers in the faith. Practical tips for every age.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Family",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 64,
    slug: "how-to-pray-as-a-family",
    title: "How to Pray as a Family: Building a Domestic Church",
    excerpt: "Learn how to pray as a family — the family Rosary, grace before meals, bedtime prayers, Advent and Lent traditions, and how to start when you haven't been praying together.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Family",
    icon: Home,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 65,
    slug: "catholic-dating-and-courtship",
    title: "Catholic Dating and Courtship: A Guide to Holy Relationships",
    excerpt: "A complete guide to Catholic dating and courtship — the purpose of dating, chastity in relationships, how to find a Catholic spouse, red flags, and preparing for marriage.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Vocation",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 66,
    slug: "what-is-rcia-for-adults",
    title: "What Is RCIA? The Complete Guide for Adults Becoming Catholic",
    excerpt: "Everything you need to know about RCIA — the 4 stages, timeline, Easter Vigil, who it's for, what to expect in classes, choosing a sponsor, and how to find RCIA in your parish.",
    date: "2026-04-14",
    readTime: "13 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 67,
    slug: "catholic-homeschooling-guide",
    title: "Catholic Homeschooling: A Complete Guide for Catholic Families",
    excerpt: "A complete guide to Catholic homeschooling — top curricula, legal requirements, socialization, co-ops, integrating faith into every subject, and the liturgical year as a school calendar.",
    date: "2026-04-14",
    readTime: "13 min",
    category: "Family",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 68,
    slug: "what-is-contemplative-prayer",
    title: "What Is Contemplative Prayer? A Catholic Guide to Silent Prayer",
    excerpt: "Discover what contemplative prayer is in the Catholic tradition. Learn the difference between meditation and contemplation, the Carmelite tradition, infused vs acquired contemplation, and how to begin.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Prayer",
    icon: Wind,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-400"
  },
  {
    id: 69,
    slug: "how-to-do-spiritual-retreat-at-home",
    title: "How to Do a Spiritual Retreat at Home: A Step-by-Step Catholic Guide",
    excerpt: "Learn how to make a Catholic spiritual retreat at home. Step-by-step guide with a sample 1-day and weekend schedule, the Ignatian approach, journaling tips, and what to do after your retreat.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Spirituality",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 70,
    slug: "catholic-spiritual-direction",
    title: "Catholic Spiritual Direction: What It Is and How to Find a Director",
    excerpt: "Learn what Catholic spiritual direction is, how it differs from therapy and confession, what happens in a session, and how to find a spiritual director in your diocese or online.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Spirituality",
    icon: Users,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 71,
    slug: "dark-night-of-the-soul-catholic",
    title: "The Dark Night of the Soul: What It Is and How to Navigate It",
    excerpt: "Learn what the dark night of the soul is in Catholic spirituality. Discover St. John of the Cross's teaching, the two dark nights, how to distinguish it from depression, and how to navigate it.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Spirituality",
    icon: Cloud,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-400"
  },
  {
    id: 72,
    slug: "how-to-grow-in-humility-catholic",
    title: "How to Grow in Humility: The Catholic Path to True Greatness",
    excerpt: "Learn what humility really is in Catholic spirituality, the 12 degrees of humility from St. Benedict, Jesus as the model of humility, and practical exercises for growing in this foundational virtue.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Spirituality",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  // Doctrine Articles Batch 10
  {
    id: 73,
    slug: "natural-family-planning-catholic",
    title: "Natural Family Planning: What the Catholic Church Teaches and Why",
    excerpt: "Discover what Natural Family Planning (NFP) is, why the Catholic Church teaches it through Humanae Vitae, the three main methods, effectiveness rates, and how NFP differs from contraception.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Doctrine",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 74,
    slug: "catholic-teaching-on-abortion",
    title: "Catholic Teaching on Abortion: Why the Church Defends Every Human Life",
    excerpt: "Learn the Catholic Church's consistent teaching on abortion from the earliest centuries, the theological basis in human dignity, Evangelium Vitae, and how Catholics can be pro-life in practice.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Doctrine",
    icon: Cross,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 75,
    slug: "what-is-the-popes-role-catholic-church",
    title: "What Is the Pope's Role in the Catholic Church? Papal Authority Explained",
    excerpt: "Learn about the Pope's role in the Catholic Church — Peter as the first pope, apostolic succession, the three offices, papal infallibility (what it is and isn't), and how Catholics should relate to the Pope.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Doctrine",
    icon: Cross,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-400"
  },
  {
    id: 76,
    slug: "catholic-teaching-on-death-penalty",
    title: "Catholic Teaching on the Death Penalty: What the Church Says Today",
    excerpt: "Learn the Catholic Church's teaching on the death penalty, the 2018 revision of CCC 2267, why the teaching developed, the principle of human dignity, and how Catholics should engage with this issue.",
    date: "2026-04-14",
    readTime: "11 min",
    category: "Doctrine",
    icon: BookOpen,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-400"
  },
  {
    id: 77,
    slug: "what-is-annulment-catholic-church",
    title: "What Is an Annulment in the Catholic Church? A Complete Guide",
    excerpt: "Learn what a Catholic annulment is (declaration of nullity), how it differs from divorce, the grounds for annulment, the tribunal process, what happens to children, and pastoral care for divorced Catholics.",
    date: "2026-04-14",
    readTime: "12 min",
    category: "Doctrine",
    icon: Heart,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 1101,
    slug: "spiritual-life-basics",
    title: "Spiritual Life Basics: Essential Practices for Daily Catholic Living",
    excerpt: "Discover the foundations of Catholic spiritual life. Learn essential daily practices, prayer routines, and spiritual disciplines for growing closer to God.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Spiritual Life",
    icon: Wind,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-600"
  },
  {
    id: 1102,
    slug: "healing-through-faith",
    title: "Healing Through Faith: Catholic Prayers for Physical and Emotional Recovery",
    excerpt: "Discover how faith brings healing. Learn Catholic prayers for healing, the ministry of the sick, sacraments of healing, and biblical foundations for divine healing.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Spiritual Healing",
    icon: HeartPulse,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 1103,
    slug: "dignity-of-work",
    title: "The Dignity of Work: Catholic Social Teaching on Labor",
    excerpt: "Discover Catholic social teaching on work and labor. Learn about the dignity of workers, just wages, rights of laborers, and St. Joseph the Worker as patron.",
    date: "2026-04-16",
    readTime: "12 min",
    category: "Social Teaching",
    icon: Coins,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    id: 1104,
    slug: "saint-padre-pio-miracles",
    title: "St. Padre Pio: Miracles, Bilocation, and the Stigmata",
    excerpt: "Discover the extraordinary miracles of St. Padre Pio - his bilocation, healing miracles, reading of souls, and the stigmata that lasted 50 years.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Saints & Miracles",
    icon: Sparkles,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    id: 1105,
    slug: "prophecies-of-fatima",
    title: "Prophecies of Fatima: The Three Secrets and Their Fulfillment",
    excerpt: "Discover the three secrets of Fatima, their prophetic messages, and how they relate to Catholic prophecy, Russia, and the conversion of nations.",
    date: "2026-04-16",
    readTime: "16 min",
    category: "Prophecy & Mysticism",
    icon: Moon,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    id: 1106,
    slug: "novenas-explained",
    title: "Novenas Explained: The Power of Nine Days of Prayer",
    excerpt: "Discover the tradition of Catholic novenas. Learn how to pray a novena, the most powerful novenas, and why nine days of prayer brings extraordinary graces.",
    date: "2026-04-16",
    readTime: "12 min",
    category: "Novena & Prayer",
    icon: BookOpen,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-600"
  },
  {
    id: 1107,
    slug: "divine-office-laity",
    title: "The Divine Office for Lay Catholics: How to Pray the Liturgy of the Hours",
    excerpt: "Learn how lay Catholics can pray the Divine Office. Discover the hours of prayer, simplified versions, and how this liturgical prayer sanctifies daily life.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Prayer & Devotion",
    icon: BookOpen,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    id: 1108,
    slug: "faith-and-anxiety",
    title: "Faith and Anxiety: Finding Peace Through Catholic Spirituality",
    excerpt: "Discover how Catholic faith helps overcome anxiety. Learn spiritual practices for mental health, when to seek professional help, and finding God's peace.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Mental Health & Faith",
    icon: Brain,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600"
  },
  {
    id: 1109,
    slug: "managing-depression",
    title: "Managing Depression: A Catholic Approach to Mental Health",
    excerpt: "Discover a Catholic approach to managing depression. Learn about spiritual resources, professional treatment, and finding hope through faith during dark times.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Mental Health",
    icon: Brain,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: 1110,
    slug: "sacrament-of-matrimony",
    title: "The Sacrament of Matrimony: Catholic Marriage Theology",
    excerpt: "Discover the theology of Catholic marriage. Learn about sacramental marriage, the vows, indissolubility, and how spouses participate in God's creative love.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Marriage & Family",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 1111,
    slug: "eucharistic-prayers",
    title: "Eucharistic Prayers and Adoration: A Complete Guide",
    excerpt: "Discover Eucharistic prayers, Holy Hour devotion, and the practice of adoration. Learn how to pray before the Blessed Sacrament and encounter Christ's Real Presence.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Liturgy & Worship",
    icon: Church,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    id: 1112,
    slug: "lent-preparation-guide",
    title: "Lent Preparation Guide: How to Make the Most of the Season",
    excerpt: "Prepare for Lent with this complete guide. Learn how to choose sacrifices, deepen prayer, practice almsgiving, and make the 40 days a true spiritual transformation.",
    date: "2026-04-16",
    readTime: "12 min",
    category: "Liturgical Year",
    icon: Calendar,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    id: 1113,
    slug: "jubilee-pilgrimage-guide",
    title: "Jubilee 2025 Pilgrimage Guide: Continuing the Pilgrimage of Hope",
    excerpt: "Discover how to continue the Jubilee 2025 spirit. Learn about indulgences, pilgrimage traditions, and carrying the grace of the Holy Year into daily life.",
    date: "2026-04-16",
    readTime: "11 min",
    category: "Jubilee 2025",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    id: 1114,
    slug: "catholic-church-history",
    title: "Catholic Church History: A Complete Timeline from Peter to Today",
    excerpt: "Discover the history of the Catholic Church from St. Peter to Pope Francis. Learn about key figures, councils, and moments that shaped 2000 years of Catholic tradition.",
    date: "2026-04-16",
    readTime: "16 min",
    category: "History & Apologetics",
    icon: BookOpen,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    id: 1115,
    slug: "how-to-read-bible",
    title: "How to Read the Bible: A Catholic Guide to Scripture Study",
    excerpt: "Learn how to read the Bible as a Catholic. Discover study methods, the Catholic canon, approved translations, and how Scripture fits with Tradition and Magisterium.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Formation & Scriptures",
    icon: BookOpen,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    id: 1116,
    slug: "catholic-family-traditions",
    title: "Catholic Family Traditions: Building a Domestic Church",
    excerpt: "Discover Catholic family traditions for building a domestic church. Learn about family prayers, liturgical year celebrations, and creating a Catholic home environment.",
    date: "2026-04-16",
    readTime: "14 min",
    category: "Family & Parenting",
    icon: Home,
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    id: 1117,
    slug: "holy-water-sacramental",
    title: "Holy Water: The Power of This Ancient Catholic Sacramental",
    excerpt: "Discover the power of holy water in Catholic tradition. Learn its history, proper use, blessing prayers, and how this simple sacramental brings grace and protection.",
    date: "2026-04-16",
    readTime: "11 min",
    category: "Devotions & Sacramentals",
    icon: Droplets,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: 1118,
    slug: "catholic-social-teaching-today",
    title: "Catholic Social Teaching Today: Applying Doctrine to Current Issues",
    excerpt: "Discover how Catholic social teaching applies to today's challenges. Learn about poverty, immigration, ecology, and economic justice from a Catholic perspective.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Current Affairs",
    icon: Globe,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    id: 1119,
    slug: "living-virtue",
    title: "Living the Christian Life: A Practical Guide to Catholic Virtue",
    excerpt: "Discover how to live the Christian life with practical guidance on virtues, daily holiness, and growing closer to Christ in ordinary circumstances.",
    date: "2026-04-16",
    readTime: "13 min",
    category: "Christian Life",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 1120,
    slug: "rosary-mysteries-meditation",
    title: "Rosary Mysteries: A Guide to Meditative Prayer on the 20 Mysteries",
    excerpt: "Learn to meditate on all 20 Rosary mysteries. Discover the Joyful, Sorrowful, Glorious, and Luminous mysteries with reflections for deeper contemplation.",
    date: "2026-04-16",
    readTime: "16 min",
    category: "Catholic Devotions",
    icon: Heart,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600"
  },
  {
    id: 1121,
    slug: "catholic-marriage-preparation",
    title: "Catholic Marriage Preparation: A Complete Guide for Engaged Couples",
    excerpt: "Prepare for Catholic marriage with this complete guide. Learn about Pre-Cana, marriage requirements, Natural Family Planning, and building a sacramental union.",
    date: "2026-04-16",
    readTime: "15 min",
    category: "Relationships & Family",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    id: 78,
    slug: "how-to-choose-confirmation-name",
    title: "How to Choose a Confirmation Name: A Complete Catholic Guide",
    excerpt: "Learn how to choose a Catholic Confirmation name — what it means, how to research saints, and how to make this important spiritual decision with prayer and discernment.",
    date: "2026-04-15",
    readTime: "8 min",
    category: "Sacraments",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 79,
    slug: "how-to-return-to-mass",
    title: "How to Return to Mass After Being Away: A Guide for Lapsed Catholics",
    excerpt: "Thinking about returning to Mass? This compassionate guide helps lapsed Catholics come back to the Church — step by step, without judgment.",
    date: "2026-04-15",
    readTime: "9 min",
    category: "Liturgy",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 80,
    slug: "how-to-teach-children-to-pray",
    title: "How to Teach Children to Pray: A Catholic Parent's Guide",
    excerpt: "Learn how to teach your children to pray as Catholics — age-appropriate prayers, tips for building a prayer habit, and how to make prayer a natural part of family life.",
    date: "2026-04-15",
    readTime: "10 min",
    category: "Family",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 81,
    slug: "how-to-find-catholic-community",
    title: "How to Find a Catholic Community: A Guide to Parish Life",
    excerpt: "Learn how to find a welcoming Catholic community, choose the right parish, get involved in parish life, and build lasting friendships rooted in faith.",
    date: "2026-04-15",
    readTime: "9 min",
    category: "Community",
    icon: MapPin,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 1142,
    slug: "our-lady-of-guadalupe-patroness-americas",
    title: "Our Lady of Guadalupe: Patroness of the Americas — Complete Guide",
    excerpt: "Complete guide to Our Lady of Guadalupe — the 1531 apparitions to Juan Diego, the miraculous tilma, her role as Patroness of the Americas, and the feast day of December 12.",
    date: "2026-04-24",
    readTime: "20 min",
    category: "Saints & Intercession",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    id: 1143,
    slug: "saint-kateri-tekakwitha",
    title: "Saint Kateri Tekakwitha: The Lily of the Mohawks & First Native American Saint",
    excerpt: "Discover Saint Kateri Tekakwitha — the first Native American to be canonized. Her life, her faith, her miracles, and why she is beloved by Catholics across the United States.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Saints & Intercession",
    icon: Sparkles,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-500"
  },
  {
    id: 1144,
    slug: "our-lady-immaculate-conception-patroness-usa",
    title: "Our Lady of the Immaculate Conception: Patroness of the United States",
    excerpt: "Why is Our Lady of the Immaculate Conception the patroness of the United States? The history of this 1846 declaration, the National Shrine in Washington D.C., and how to honor her.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Saints & Intercession",
    icon: Star,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-400"
  },
  {
    id: 1145,
    slug: "saint-augustine-of-hippo",
    title: "Saint Augustine of Hippo: Life, Confessions & Legacy",
    excerpt: "Discover Saint Augustine of Hippo — his dramatic conversion, the Confessions, his theology of grace, and why he remains one of the greatest Doctors of the Church.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Saints & Intercession",
    icon: BookOpen,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    id: 1146,
    slug: "praying-for-souls-in-purgatory",
    title: "Praying for the Holy Souls in Purgatory: A Complete Catholic Guide",
    excerpt: "Why do Catholics pray for the dead? Learn about the Holy Souls in Purgatory, the most powerful prayers and novenas for the departed, and how your prayers can help souls reach heaven.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Prayer & Devotion",
    icon: Flame,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-400"
  },
  {
    id: 1147,
    slug: "corpus-christi-catholic",
    title: "Corpus Christi: The Feast of the Body and Blood of Christ",
    excerpt: "What is Corpus Christi? Learn about the feast of the Body and Blood of Christ — its history, the Eucharistic procession, the prayers of St. Thomas Aquinas, and how Catholics celebrate it.",
    date: "2026-04-24",
    readTime: "15 min",
    category: "Liturgy & Worship",
    icon: Cross,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    id: 1148,
    slug: "saint-thomas-aquinas",
    title: "Saint Thomas Aquinas: The Angelic Doctor, Summa Theologica & Legacy",
    excerpt: "Discover Saint Thomas Aquinas — the Angelic Doctor, his life, the Summa Theologica, his five proofs for God's existence, and why he is the greatest theologian in Catholic history.",
    date: "2026-04-24",
    readTime: "18 min",
    category: "Saints & Intercession",
    icon: BookOpen,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    id: 1149,
    slug: "saint-joan-of-arc",
    title: "Saint Joan of Arc: The Maid of Orléans, Her Life, Trial & Legacy",
    excerpt: "Discover Saint Joan of Arc — the teenage peasant girl who led France to victory, was burned at the stake at 19, and was canonized 500 years later. Her life, voices, trial, and enduring legacy.",
    date: "2026-04-24",
    readTime: "17 min",
    category: "Saints & Intercession",
    icon: Sword,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    id: 1150,
    slug: "what-is-the-holy-trinity",
    title: "What Is the Holy Trinity? The Catholic Teaching Explained",
    excerpt: "What is the Holy Trinity? Learn the Catholic teaching on the Father, Son, and Holy Spirit — one God in three Persons. Clear explanation of this central mystery of the Christian faith.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Catholic Doctrine",
    icon: HelpCircle,
    bgColor: "bg-violet-50",
    iconColor: "text-violet-500"
  },
  {
    id: 1151,
    slug: "saint-elizabeth-ann-seton",
    title: "Saint Elizabeth Ann Seton: First American-Born Saint",
    excerpt: "Discover Saint Elizabeth Ann Seton — the first person born in the United States to be canonized. Her conversion, her founding of Catholic education in America, and her enduring legacy.",
    date: "2026-04-24",
    readTime: "15 min",
    category: "Saints & Intercession",
    icon: Heart,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-400"
  },
  {
    id: 1152,
    slug: "saint-maximilian-kolbe",
    title: "Saint Maximilian Kolbe: Martyr of Auschwitz & Apostle of Mary",
    excerpt: "Discover Saint Maximilian Kolbe — the Polish Franciscan priest who volunteered to die in place of a stranger at Auschwitz. His life, his Militia Immaculata, and his heroic martyrdom.",
    date: "2026-04-24",
    readTime: "16 min",
    category: "Saints & Intercession",
    icon: Shield,
    bgColor: "bg-gray-50",
    iconColor: "text-gray-500"
  },
  {
    id: 1153,
    slug: "catholic-prayer-for-protection",
    title: "Catholic Prayers for Protection: Against Evil, Danger & Spiritual Attack",
    excerpt: "The most powerful Catholic prayers for protection — against evil, danger, spiritual attack, and the devil. St. Michael prayer, St. Patrick's Breastplate, Psalm 91, and more.",
    date: "2026-04-24",
    readTime: "13 min",
    category: "Prayer & Devotion",
    icon: Shield,
    bgColor: "bg-slate-50",
    iconColor: "text-slate-500"
  },
  {
    id: 1154,
    slug: "how-to-pray-a-novena-guide",
    title: "How to Pray a Novena: Complete Guide for Catholics",
    excerpt: "Step-by-step guide to praying a novena — what a novena is, how to choose one, the nine days of prayer, and the most popular novenas in the Catholic tradition.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "Prayer & Devotion",
    icon: Heart,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-500"
  },
  {
    id: 1155,
    slug: "is-it-a-sin-to-miss-mass",
    title: "Is It a Sin to Miss Mass on Sunday? The Catholic Teaching",
    excerpt: "Is missing Sunday Mass a mortal sin? Learn what the Catholic Church teaches about the Sunday obligation, valid excuses, and what to do if you miss Mass.",
    date: "2026-04-24",
    readTime: "11 min",
    category: "Liturgy & Worship",
    icon: Church,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    id: 1156,
    slug: "what-is-pentecost-catholic",
    title: "What Is Pentecost? The Catholic Feast of the Holy Spirit Explained",
    excerpt: "What is Pentecost? Learn about the Catholic feast that celebrates the descent of the Holy Spirit — its biblical origins, its meaning, how Catholics celebrate it, and Pentecost 2026.",
    date: "2026-04-24",
    readTime: "13 min",
    category: "Liturgy & Worship",
    icon: Wind,
    bgColor: "bg-red-50",
    iconColor: "text-red-500"
  },
  {
    id: 1157,
    slug: "catholic-first-communion-guide",
    title: "First Communion: What It Is, How to Prepare & What to Expect",
    excerpt: "Everything you need to know about Catholic First Communion — what it is, the age for First Communion, how to prepare your child, what happens at the Mass, and how to celebrate.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Sacraments",
    icon: Cross,
    bgColor: "bg-white",
    iconColor: "text-amber-400"
  },
  {
    id: 1158,
    slug: "catholic-last-rites-explained",
    title: "Catholic Last Rites: What They Are, When to Call a Priest & What Happens",
    excerpt: "What are Catholic Last Rites? Learn about the Anointing of the Sick, Viaticum, and Apostolic Pardon — when to call a priest, what happens, and how to prepare a loved one for death.",
    date: "2026-04-24",
    readTime: "13 min",
    category: "Sacraments",
    icon: Cross,
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600"
  },
  {
    id: 1159,
    slug: "how-to-overcome-sin-catholic",
    title: "How to Overcome Sin: A Catholic Guide to Breaking Bad Habits",
    excerpt: "How do Catholics overcome sin and break bad habits? A practical guide to the Catholic approach — confession, prayer, virtue, spiritual direction, and the sacraments as tools for conversion.",
    date: "2026-04-24",
    readTime: "15 min",
    category: "Spiritual Life",
    icon: Shield,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    id: 1160,
    slug: "catholic-teaching-on-pornography",
    title: "Catholic Teaching on Pornography: Why It's Harmful & How to Break Free",
    excerpt: "What does the Catholic Church teach about pornography? Learn why it is sinful, how it harms the soul and relationships, and the Catholic path to freedom and healing.",
    date: "2026-04-24",
    readTime: "14 min",
    category: "Catholic Doctrine",
    icon: Shield,
    bgColor: "bg-slate-50",
    iconColor: "text-slate-600"
  },
  {
    id: 1161,
    slug: "catholic-prayer-for-marriage",
    title: "Catholic Prayers for Marriage: For Your Spouse, Your Family & Troubled Marriages",
    excerpt: "Powerful Catholic prayers for marriage — for your spouse, for a troubled marriage, for a future spouse, and for the grace to live the sacrament of matrimony faithfully.",
    date: "2026-04-24",
    readTime: "11 min",
    category: "Prayer & Devotion",
    icon: Heart,
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500"
  },
  {
    id: 1162,
    slug: "catholic-teaching-on-alcohol",
    title: "Catholic Teaching on Alcohol: Is Drinking a Sin?",
    excerpt: "What does the Catholic Church teach about alcohol? Is drinking a sin? Learn the Catholic distinction between moderate drinking and drunkenness, and the path to sobriety for those who struggle.",
    date: "2026-04-24",
    readTime: "12 min",
    category: "Catholic Doctrine",
    icon: HelpCircle,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500"
  },
  { id: 1163, slug: "saint-teresa-of-avila", title: "Saint Teresa of Ávila: Doctor of Prayer, Interior Castle & Legacy", excerpt: "Discover Saint Teresa of Ávila — the great Carmelite mystic, reformer, and Doctor of the Church. Her life, the Interior Castle, and her path of prayer.", date: "2026-04-24", readTime: "17 min", category: "Saints & Intercession", icon: BookOpen, bgColor: "bg-orange-50", iconColor: "text-orange-500" },
  { id: 1164, slug: "saint-ignatius-of-loyola", title: "Saint Ignatius of Loyola: Founder of the Jesuits & Spiritual Exercises", excerpt: "Discover Saint Ignatius of Loyola — the soldier-turned-mystic who founded the Jesuits and wrote the Spiritual Exercises, one of the most influential books in Christian history.", date: "2026-04-24", readTime: "16 min", category: "Saints & Intercession", icon: BookOpen, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
  { id: 1165, slug: "saint-bernadette-soubirous", title: "Saint Bernadette Soubirous: The Visionary of Lourdes", excerpt: "Discover Saint Bernadette Soubirous — the young French girl who saw Our Lady 18 times at Lourdes in 1858, whose body remains incorrupt to this day.", date: "2026-04-24", readTime: "15 min", category: "Saints & Intercession", icon: Sparkles, bgColor: "bg-sky-50", iconColor: "text-sky-500" },
  { id: 1166, slug: "what-is-grace-catholic", title: "What Is Grace? The Catholic Teaching on God's Gift of Salvation", excerpt: "What is grace? Learn the Catholic teaching on sanctifying grace, actual grace, and how God's free gift transforms the soul and makes salvation possible.", date: "2026-04-24", readTime: "15 min", category: "Catholic Doctrine", icon: HelpCircle, bgColor: "bg-violet-50", iconColor: "text-violet-500" },
  { id: 1167, slug: "what-is-original-sin-catholic", title: "What Is Original Sin? The Catholic Teaching Explained", excerpt: "What is original sin? Learn the Catholic teaching on the fall of Adam and Eve, the effects of original sin on human nature, and how baptism restores what was lost.", date: "2026-04-24", readTime: "14 min", category: "Catholic Doctrine", icon: HelpCircle, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1169, slug: "catholic-prayer-for-job-and-work", title: "Catholic Prayers for Work and Employment: Finding a Job & Blessing Your Work", excerpt: "Powerful Catholic prayers for work and employment — for finding a job, blessing your work, and honoring the dignity of labor as taught by the Church.", date: "2026-04-24", readTime: "11 min", category: "Prayer & Devotion", icon: Hand, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1170, slug: "catholic-prayer-for-the-sick", title: "Catholic Prayers for the Sick: Healing, Comfort & Strength", excerpt: "The most powerful Catholic prayers for the sick — for healing, comfort, and strength. Prayers to St. Peregrine, St. Raphael, and for those suffering in body and soul.", date: "2026-04-24", readTime: "12 min", category: "Prayer & Devotion", icon: HeartPulse, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1171, slug: "catholic-vs-orthodox-differences", title: "Catholic vs Orthodox: Key Differences Between the Two Churches", excerpt: "What are the key differences between the Catholic and Orthodox Churches? Learn about the Great Schism of 1054, the Filioque, papal authority, and the path toward reunion.", date: "2026-04-24", readTime: "16 min", category: "Catholic Doctrine", icon: Globe, bgColor: "bg-indigo-50", iconColor: "text-indigo-600" },
  { id: 1168, slug: "does-hell-exist-catholic", title: "Does Hell Exist? The Catholic Teaching on Hell Explained", excerpt: "Does hell exist? Learn what the Catholic Church teaches about hell — its nature, who goes there, and how God's mercy and human freedom relate to eternal punishment.", date: "2026-04-24", readTime: "14 min", category: "Catholic Doctrine", icon: Flame, bgColor: "bg-red-50", iconColor: "text-red-600" },
  { id: 1172, slug: "saint-peter-apostle", title: "Saint Peter the Apostle: The First Pope, His Life & Legacy", excerpt: "Discover Saint Peter the Apostle — the fisherman from Galilee who became the first Pope, received the keys of the Kingdom, and was martyred in Rome.", date: "2026-04-24", readTime: "16 min", category: "Saints & Intercession", icon: UserCheck, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
  { id: 1173, slug: "saint-paul-apostle", title: "Saint Paul the Apostle: Conversion, Missions & Letters", excerpt: "Discover Saint Paul the Apostle — the persecutor turned missionary who wrote half the New Testament, traveled the ancient world for Christ, and was martyred in Rome.", date: "2026-04-24", readTime: "17 min", category: "Saints & Intercession", icon: BookOpen, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1174, slug: "is-gambling-a-sin-catholic", title: "Is Gambling a Sin? The Catholic Teaching on Gambling", excerpt: "Is gambling a sin? Learn what the Catholic Church teaches about gambling — the distinction between moderate play and sinful excess, and the path to freedom for those who struggle.", date: "2026-04-24", readTime: "12 min", category: "Catholic Doctrine", icon: HelpCircle, bgColor: "bg-green-50", iconColor: "text-green-600" },
  { id: 1175, slug: "did-jesus-found-the-catholic-church", title: "Did Jesus Found the Catholic Church? The Biblical Evidence", excerpt: "Did Jesus found the Catholic Church? Explore the biblical evidence — Matthew 16:18, the keys of the Kingdom, apostolic succession — and the historical continuity of the Church.", date: "2026-04-24", readTime: "16 min", category: "Catholic Doctrine", icon: Cross, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1176, slug: "catholic-teaching-on-drugs", title: "Catholic Teaching on Drugs: What the Church Says About Substance Abuse", excerpt: "What does the Catholic Church teach about drugs and substance abuse? Learn the distinction between medicinal use and sinful abuse, and the Catholic path to recovery.", date: "2026-04-24", readTime: "13 min", category: "Catholic Doctrine", icon: Shield, bgColor: "bg-teal-50", iconColor: "text-teal-600" },
  { id: 1177, slug: "catholic-guide-to-grief-and-loss", title: "Catholic Guide to Grief and Loss: Faith, Hope & Healing After Death", excerpt: "How does Catholic faith help us grieve? A compassionate guide to loss, death, and healing — with prayers, the hope of resurrection, and the comfort of the saints.", date: "2026-04-24", readTime: "14 min", category: "Spiritual Life", icon: Heart, bgColor: "bg-purple-50", iconColor: "text-purple-500" },
  { id: 1178, slug: "how-to-pray-the-rosary-complete-guide", title: "How to Pray the Rosary: Complete Step-by-Step Guide with All Mysteries", excerpt: "The most complete guide to praying the Rosary — every step, every prayer, all 20 mysteries explained, and tips for beginners and experienced pray-ers alike.", date: "2026-04-24", readTime: "22 min", category: "Prayer & Devotion", icon: Heart, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1179, slug: "what-is-heaven-like-catholic", title: "What Is Heaven Like? The Catholic Teaching on Eternal Life", excerpt: "What does the Catholic Church teach about heaven? The beatific vision, the resurrection of the body, whether we'll recognize loved ones, and what eternal life really means.", date: "2026-04-24", readTime: "17 min", category: "Catholic Doctrine", icon: Star, bgColor: "bg-sky-50", iconColor: "text-sky-500" },
  { id: 1180, slug: "signs-of-a-vocation-priesthood-religious-life", title: "Signs of a Vocation: How to Know If God Is Calling You to the Priesthood or Religious Life", excerpt: "How do you know if God is calling you to the priesthood or religious life? Discover the signs of a vocation, how to discern, and what to do if you feel called.", date: "2026-04-24", readTime: "18 min", category: "Spiritual Life", icon: Cross, bgColor: "bg-indigo-50", iconColor: "text-indigo-500" },
  { id: 1181, slug: "catholic-teaching-on-angels", title: "Catholic Teaching on Angels: What the Church Really Believes", excerpt: "What does the Catholic Church really teach about angels? Guardian angels, archangels, the fall of Lucifer, and how Catholics relate to these spiritual beings.", date: "2026-04-24", readTime: "15 min", category: "Catholic Doctrine", icon: Sparkles, bgColor: "bg-sky-50", iconColor: "text-sky-500" },
  { id: 1182, slug: "catholic-teaching-on-money-and-wealth", title: "Catholic Teaching on Money, Wealth & Tithing: What the Church Says", excerpt: "Is it a sin to be rich? What does the Church teach about tithing, stewardship, and the proper use of wealth? A complete guide to Catholic teaching on money.", date: "2026-04-24", readTime: "14 min", category: "Catholic Doctrine", icon: Coins, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1183, slug: "what-is-holy-orders-catholic", title: "What Is the Sacrament of Holy Orders? Priests, Deacons & Bishops Explained", excerpt: "What is the Sacrament of Holy Orders? Learn about the three degrees — bishop, priest, and deacon — the rite of ordination, and why priests are celibate.", date: "2026-04-24", readTime: "14 min", category: "Sacraments", icon: Cross, bgColor: "bg-purple-50", iconColor: "text-purple-600" },
  { id: 1184, slug: "catholic-teaching-on-social-media", title: "Catholic Teaching on Social Media: How to Use Technology Virtuously", excerpt: "What does the Catholic Church teach about social media? Learn how to use technology virtuously, avoid its spiritual dangers, and even evangelize online.", date: "2026-04-24", readTime: "13 min", category: "Catholic Living", icon: Globe, bgColor: "bg-blue-50", iconColor: "text-blue-500" },
  { id: 1185, slug: "catholic-teaching-on-environment", title: "Catholic Teaching on the Environment: Laudato Si' and Care for Creation", excerpt: "What does the Catholic Church teach about the environment? Explore Laudato Si', the biblical basis for ecological stewardship, and practical Catholic responses.", date: "2026-04-24", readTime: "15 min", category: "Catholic Doctrine", icon: Globe, bgColor: "bg-green-50", iconColor: "text-green-600" },
  { id: 1186, slug: "how-to-pray-for-someone-catholic", title: "How to Pray for Someone: Catholic Intercessory Prayer Guide", excerpt: "How do you pray for someone effectively? A complete Catholic guide to intercessory prayer — for the sick, the lost, enemies, and those you love most.", date: "2026-04-24", readTime: "12 min", category: "Prayer & Devotion", icon: Heart, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1187, slug: "catholic-teaching-on-forgiveness", title: "Catholic Teaching on Forgiveness: How to Forgive as God Forgives", excerpt: "Forgiveness is one of the hardest and most essential teachings of Christianity. Learn what the Church teaches, what forgiveness really means, and how to forgive even the deepest wounds.", date: "2026-04-25", readTime: "14 min", category: "Spiritual Life", icon: Heart, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1188, slug: "what-is-catholic-spirituality", title: "What Is Catholic Spirituality? A Guide to the Different Schools and Traditions", excerpt: "Catholic spirituality is not one-size-fits-all. Discover the great spiritual traditions — Benedictine, Franciscan, Dominican, Ignatian, Carmelite — and find the one that fits your soul.", date: "2026-04-25", readTime: "16 min", category: "Spiritual Life", icon: BookOpen, bgColor: "bg-violet-50", iconColor: "text-violet-500" },
  { id: 1189, slug: "why-does-god-allow-suffering-catholic", title: "Why Does God Allow Suffering? The Catholic Answer", excerpt: "Why does God allow suffering? The Catholic answer is not a simple explanation but a Person — Jesus Christ, who entered into human suffering and transformed it from within.", date: "2026-04-25", readTime: "16 min", category: "Catholic Doctrine", icon: HelpCircle, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1190, slug: "catholic-teaching-on-death", title: "Catholic Teaching on Death: What Happens When We Die?", excerpt: "What does the Catholic Church teach about death? The Four Last Things, the Particular Judgment, the resurrection of the body, and how to prepare for a holy death.", date: "2026-04-25", readTime: "15 min", category: "Catholic Doctrine", icon: Moon, bgColor: "bg-slate-50", iconColor: "text-slate-600" },
  { id: 1191, slug: "saint-dominic-founder-dominicans", title: "Saint Dominic: Founder of the Dominicans, Preacher of Truth & the Rosary", excerpt: "Discover Saint Dominic — the Spanish priest who founded the Order of Preachers, fought heresy with truth and poverty, and gave the Church the Rosary.", date: "2026-04-25", readTime: "15 min", category: "Saints & Intercession", icon: BookOpen, bgColor: "bg-white", iconColor: "text-gray-700" },
  { id: 1192, slug: "what-is-prayer-catholic", title: "What Is Prayer? The Catholic Teaching on Talking to God", excerpt: "What is prayer? The Catholic Church teaches that prayer is the raising of the mind and heart to God. Learn the five forms, three expressions, and how to develop a real prayer life.", date: "2026-04-25", readTime: "14 min", category: "Prayer & Devotion", icon: Heart, bgColor: "bg-violet-50", iconColor: "text-violet-500" },
  { id: 1193, slug: "catholic-teaching-on-marriage", title: "Catholic Teaching on Marriage: Sacrament, Indissolubility & Vocation", excerpt: "What does the Catholic Church teach about marriage? The sacrament, indissolubility, the domestic church, and how to build a holy Catholic marriage.", date: "2026-04-25", readTime: "16 min", category: "Sacraments", icon: Heart, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1194, slug: "what-is-the-catholic-mass-guide", title: "What Is the Catholic Mass? A Complete Guide to the Liturgy", excerpt: "A complete guide to the Catholic Mass — every part explained, from the Introductory Rites to the Concluding Rites, with tips for beginners and active participation.", date: "2026-04-25", readTime: "18 min", category: "Liturgy & Worship", icon: Cross, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1195, slug: "saint-catherine-of-siena", title: "Saint Catherine of Siena: Doctor of the Church, Mystic & Reformer", excerpt: "Discover Saint Catherine of Siena — the Dominican mystic who never learned to read, received the stigmata, and convinced the Pope to return to Rome.", date: "2026-04-25", readTime: "16 min", category: "Saints & Intercession", icon: BookOpen, bgColor: "bg-rose-50", iconColor: "text-rose-400" },
  { id: 1196, slug: "how-to-find-catholic-church-near-me", title: "How to Find a Catholic Church Near You: A Complete Guide for Americans", excerpt: "There are over 17,000 Catholic parishes in the US. Here's how to find the right one — parish finders, what to look for, Latin Mass locations, Eastern Catholic churches, and how to register.", date: "2026-04-25", readTime: "12 min", category: "Catholic Living", icon: Church, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1197, slug: "catholic-holy-days-of-obligation-usa", title: "Catholic Holy Days of Obligation in the United States: Complete 2026 Guide", excerpt: "What are the 6 Holy Days of Obligation in the US? Get the 2026 dates, learn the Saturday/Monday dispensation rule, and understand what happens if you miss one.", date: "2026-04-25", readTime: "13 min", category: "Liturgy & Worship", icon: Calendar, bgColor: "bg-indigo-50", iconColor: "text-indigo-600" },
  { id: 1198, slug: "catholic-schools-in-america", title: "Catholic Schools in America: Benefits, Costs & How to Choose the Right One", excerpt: "The US has over 6,000 Catholic schools. Learn about the academic and faith formation benefits, tuition costs, scholarships, and how to evaluate whether a school is truly Catholic.", date: "2026-04-25", readTime: "15 min", category: "Catholic Living", icon: BookOpen, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
  { id: 1199, slug: "saint-josephine-bakhita", title: "Saint Josephine Bakhita: From Slave to Saint", excerpt: "Discover Saint Josephine Bakhita — the Sudanese woman kidnapped into slavery as a child who became one of the most joyful and beloved saints of the 20th century.", date: "2026-04-25", readTime: "15 min", category: "Saints & Intercession", icon: Heart, bgColor: "bg-amber-50", iconColor: "text-amber-500" },
  { id: 1200, slug: "catholic-teaching-on-justice", title: "Catholic Teaching on Justice: What the Church Says About Social Justice", excerpt: "What does the Catholic Church teach about justice? The four types of justice, the preferential option for the poor, 130 years of Catholic social teaching, and how to live justly.", date: "2026-04-25", readTime: "15 min", category: "Catholic Doctrine", icon: Shield, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
  { id: 1201, slug: "gen-z-and-catholicism", title: "Gen Z and Catholicism: Why Young People Are Returning to the Church", excerpt: "Why are Gen Z and young millennials converting to Catholicism in record numbers? The data, the reasons, and what the Catholic revival among young people means for the Church.", date: "2026-04-25", readTime: "16 min", category: "Current Affairs", icon: Users, bgColor: "bg-indigo-50", iconColor: "text-indigo-500" },
  { id: 1202, slug: "catholic-conversions-rising", title: "Catholic Conversions Are Rising: Why People Are Joining the Church in 2025–2026", excerpt: "Catholic conversions are at a 20-year high. Why are so many people — especially young adults — choosing to become Catholic? The stories, the data, and the reasons behind the revival.", date: "2026-04-25", readTime: "15 min", category: "Current Affairs", icon: UserCheck, bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
  { id: 1203, slug: "why-young-men-return-to-catholic-church", title: "Why Young Men Are Returning to the Catholic Church", excerpt: "Young men are leading the Catholic revival of 2025–2026. Why are they drawn to the Church? The crisis of masculinity, the saints as models, the Traditional Latin Mass, and the call to heroism.", date: "2026-04-25", readTime: "16 min", category: "Current Affairs", icon: Shield, bgColor: "bg-slate-50", iconColor: "text-slate-600" },
  { id: 1204, slug: "what-is-the-catholic-faith", title: "What Is the Catholic Faith? A Complete Introduction", excerpt: "A complete introduction to the Catholic faith — what Catholics believe, the seven sacraments, Mary and the saints, the Pope, and how to begin exploring Catholicism.", date: "2026-04-25", readTime: "16 min", category: "Catholic Doctrine", icon: Cross, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1205, slug: "catholic-teaching-on-freemasonry", title: "Catholic Teaching on Freemasonry: Why Catholics Cannot Be Masons", excerpt: "The Catholic Church has condemned Freemasonry over 20 times since 1738. Learn why Catholics cannot join Masonic lodges and what to do if a family member is a Mason.", date: "2026-04-25", readTime: "13 min", category: "Catholic Doctrine", icon: HelpCircle, bgColor: "bg-slate-50", iconColor: "text-slate-600" },
  { id: 1206, slug: "saints-anne-and-joachim", title: "Saints Anne and Joachim: The Grandparents of Jesus", excerpt: "Discover Saints Anne and Joachim — the parents of the Virgin Mary and the grandparents of Jesus. Their story, their shrines, and why they are patrons of grandparents and families.", date: "2026-04-25", readTime: "13 min", category: "Saints & Intercession", icon: Heart, bgColor: "bg-rose-50", iconColor: "text-rose-400" },
  { id: 1207, slug: "catholic-teaching-on-war-and-peace", title: "Catholic Teaching on War and Peace: The Just War Doctrine Explained", excerpt: "What does the Catholic Church teach about war? The Just War doctrine, its four conditions, nuclear weapons, conscientious objection, and the Church's peace-building mission.", date: "2026-04-25", readTime: "14 min", category: "Catholic Doctrine", icon: Shield, bgColor: "bg-gray-50", iconColor: "text-gray-600" },
  { id: 1208, slug: "saint-rita-of-cascia", title: "Saint Rita of Cascia: Patron of Impossible Causes & Desperate Cases", excerpt: "Discover Saint Rita of Cascia — the patron of impossible causes. Her life, her stigmata, her miracles, and the powerful novena that has brought hope to millions.", date: "2026-04-25", readTime: "14 min", category: "Saints & Intercession", icon: Sparkles, bgColor: "bg-pink-50", iconColor: "text-pink-500" },
  { id: 1209, slug: "catholic-teaching-on-science", title: "Catholic Teaching on Science: Faith and Reason Are Not Enemies", excerpt: "Does the Catholic Church oppose science? Discover the truth — from Mendel and Lemaître to the Big Bang and evolution — and why faith and reason are complementary, not opposed.", date: "2026-04-25", readTime: "15 min", category: "Catholic Doctrine", icon: Microscope, bgColor: "bg-teal-50", iconColor: "text-teal-600" },
  { id: 1210, slug: "virtue-of-humility-catholic", title: "The Virtue of Humility: What the Catholic Church Teaches", excerpt: "Humility is the foundation of the spiritual life. Learn what humility really is, why pride is the root of all sin, and how to grow in this essential virtue.", date: "2026-04-25", readTime: "14 min", category: "Spiritual Life", icon: Heart, bgColor: "bg-violet-50", iconColor: "text-violet-500" },
  { id: 1211, slug: "virtue-of-hope-catholic", title: "What Is Hope? The Catholic Virtue of Hope Explained", excerpt: "Hope is one of the three theological virtues — and the most misunderstood. Learn what Christian hope really is, the two sins against it, and how to grow in it.", date: "2026-04-25", readTime: "13 min", category: "Catholic Doctrine", icon: Star, bgColor: "bg-sky-50", iconColor: "text-sky-500" },
  { id: 1212, slug: "saint-john-of-the-cross", title: "Saint John of the Cross: The Dark Night of the Soul & Mystical Doctor", excerpt: "Discover Saint John of the Cross — the Carmelite mystic who wrote the greatest mystical poetry in the Spanish language and mapped the soul's journey to union with God.", date: "2026-04-25", readTime: "16 min", category: "Saints & Intercession", icon: Moon, bgColor: "bg-indigo-50", iconColor: "text-indigo-600" },
  { id: 1213, slug: "spiritual-warfare-catholic", title: "Spiritual Warfare: The Catholic Guide to Fighting Evil and Temptation", excerpt: "Spiritual warfare is real. Learn the Catholic teaching on the battle for the soul — the three enemies, the Armor of God, the Prayer to Saint Michael, and a daily spiritual warfare routine.", date: "2026-04-25", readTime: "16 min", category: "Spiritual Life", icon: Shield, bgColor: "bg-slate-50", iconColor: "text-slate-700" },
  { id: 1214, slug: "faith-and-works-catholic", title: "Faith and Works: What Catholics Believe About Salvation", excerpt: "Are Catholics saved by works? Learn the Catholic teaching on faith, works, and salvation — what James 2 really means, what Luther got right and wrong, and how grace and merit relate.", date: "2026-04-25", readTime: "15 min", category: "Catholic Doctrine", icon: BookOpen, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1216, slug: "catholic-prayer-for-anxiety", title: "Catholic Prayer for Anxiety: Finding Peace in a Worried World", excerpt: "Anxiety is the defining struggle of our age. Discover the most powerful Catholic prayers for anxiety, Saint Dymphna's intercession, and a complete prayer routine for peace of mind.", date: "2026-04-25", readTime: "12 min", category: "Prayer & Devotion", icon: Heart, bgColor: "bg-sky-50", iconColor: "text-sky-500" },
  { id: 1217, slug: "what-is-the-bible-catholic", title: "What Is the Bible? The Catholic Understanding of Sacred Scripture", excerpt: "How many books are in the Catholic Bible? What does biblical inspiration mean? Why don't Catholics believe in sola scriptura? A complete Catholic guide to Sacred Scripture.", date: "2026-04-25", readTime: "14 min", category: "Catholic Doctrine", icon: BookOpen, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1218, slug: "what-is-charity-catholic", title: "What Is Charity? The Greatest of the Three Theological Virtues", excerpt: "Charity is the greatest of the theological virtues — the love of God and neighbor that is the form of all virtues. Learn what it is, how it grows, and how the saints lived it.", date: "2026-04-25", readTime: "13 min", category: "Catholic Doctrine", icon: Heart, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1215, slug: "catholic-teaching-on-end-times", title: "Catholic Teaching on the End Times: What the Church Really Believes", excerpt: "What does the Catholic Church teach about the end times? The Second Coming, the Rapture (which Catholics don't believe in), the Book of Revelation, the Last Judgment, and how to live in hope.", date: "2026-04-25", readTime: "15 min", category: "Catholic Doctrine", icon: Moon, bgColor: "bg-indigo-50", iconColor: "text-indigo-600" },
  { id: 1219, slug: "catholic-baptism-explained", title: "Catholic Baptism: What It Is, What It Does & Why It Matters", excerpt: "Baptism is the door to all the sacraments. Learn what Baptism does, why the Church baptizes infants, whether it is necessary for salvation, and how to live out your Baptism.", date: "2026-04-25", readTime: "14 min", category: "Sacraments", icon: Droplets, bgColor: "bg-sky-50", iconColor: "text-sky-600" },
  { id: 1220, slug: "saint-mary-magdalene", title: "Saint Mary Magdalene: Apostle to the Apostles & Witness to the Resurrection", excerpt: "Discover the real Mary Magdalene — not the prostitute of legend, but the first witness to the Risen Christ and the 'Apostle to the Apostles' honored by Pope Francis.", date: "2026-04-25", readTime: "14 min", category: "Saints & Intercession", icon: Sparkles, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1221, slug: "what-is-conscience-catholic", title: "What Is Conscience? The Catholic Teaching on Moral Conscience", excerpt: "What does 'follow your conscience' really mean in Catholic teaching? Learn what conscience is, why it must be formed, and how to develop a well-formed Catholic conscience.", date: "2026-04-25", readTime: "13 min", category: "Catholic Doctrine", icon: HelpCircle, bgColor: "bg-violet-50", iconColor: "text-violet-500" },
  { id: 1222, slug: "pride-root-of-sin-catholic", title: "Pride: The Root of All Sin — The Catholic Teaching", excerpt: "Pride is the first and greatest of the capital sins — the sin that caused the fall of Lucifer and of Adam and Eve. Learn what it is, how it manifests today, and how to overcome it.", date: "2026-04-25", readTime: "13 min", category: "Spiritual Life", icon: Shield, bgColor: "bg-red-50", iconColor: "text-red-500" },
  { id: 1223, slug: "what-is-love-catholic", title: "What Is Love? The Catholic Understanding of Eros, Philia, and Agape", excerpt: "What does love really mean? Discover the Catholic understanding of eros, philia, and agape — and why Pope Benedict XVI said they are not opposites but complementary.", date: "2026-04-25", readTime: "14 min", category: "Catholic Doctrine", icon: Heart, bgColor: "bg-pink-50", iconColor: "text-pink-500" },
  { id: 1224, slug: "what-is-truth-catholic", title: "What Is Truth? The Catholic Answer to Pilate's Question", excerpt: "What is truth? The Catholic Church teaches that truth is real, objective, and knowable — and that Jesus Christ is not just a teacher of truth but Truth itself.", date: "2026-04-25", readTime: "13 min", category: "Catholic Doctrine", icon: BookOpen, bgColor: "bg-indigo-50", iconColor: "text-indigo-500" },
  { id: 1225, slug: "beauty-and-the-catholic-faith", title: "Beauty and the Catholic Faith: Why Beauty Matters for the Soul", excerpt: "Beauty is not decoration — it is a transcendental property of being itself. Discover why beauty matters for faith, how sacred art is theology, and why beauty is an argument for God.", date: "2026-04-25", readTime: "14 min", category: "Catholic Doctrine", icon: Sparkles, bgColor: "bg-amber-50", iconColor: "text-amber-500" },
  { id: 1226, slug: "what-is-freedom-catholic", title: "What Is Freedom? The Catholic Teaching on True Liberty", excerpt: "The Catholic understanding of freedom is radically different from the secular one. True freedom is not doing whatever you want — it is the capacity to choose the good and become who you are meant to be.", date: "2026-04-25", readTime: "13 min", category: "Catholic Doctrine", icon: UserCheck, bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
  { id: 1227, slug: "catholic-teaching-on-peace", title: "Catholic Teaching on Peace: What the Church Says About True Peace", excerpt: "What does the Catholic Church teach about peace? From Augustine's 'tranquility of order' to Pacem in Terris, discover the Catholic vision of inner and social peace.", date: "2026-04-25", readTime: "13 min", category: "Catholic Doctrine", icon: Heart, bgColor: "bg-sky-50", iconColor: "text-sky-500" },
  { id: 1228, slug: "virtue-of-patience-catholic", title: "The Virtue of Patience: The Catholic Teaching on Bearing Suffering Well", excerpt: "Patience is one of the most needed and least cultivated virtues. Learn what patience really is, how it differs from passivity, and how to grow in it.", date: "2026-04-25", readTime: "13 min", category: "Spiritual Life", icon: Shield, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1229, slug: "gratitude-catholic-virtue", title: "Gratitude: The Catholic Virtue of Thankfulness", excerpt: "Gratitude is the foundation of the spiritual life. Discover why the Eucharist means 'thanksgiving,' how ingratitude is a sin, and how to cultivate a grateful heart.", date: "2026-04-25", readTime: "12 min", category: "Spiritual Life", icon: Heart, bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
  { id: 1230, slug: "complete-catholic-lent-guide", title: "The Complete Catholic Lent Guide: 40 Days of Prayer, Fasting & Almsgiving", excerpt: "The most complete guide to observing Lent as a Catholic — week-by-week plan, fasting rules, prayer schedule, almsgiving ideas, and a full Lent checklist.", date: "2026-05-01", readTime: "20 min", category: "Liturgy & Worship", icon: Flame, bgColor: "bg-purple-50", iconColor: "text-purple-600" },
  { id: 1231, slug: "complete-catholic-advent-guide", title: "The Complete Catholic Advent Guide: Preparing Your Heart for Christmas", excerpt: "Everything you need to observe Advent as a Catholic — the Advent wreath, week-by-week guide, family traditions, prayer schedule, and a complete Advent checklist.", date: "2026-05-01", readTime: "18 min", category: "Liturgy & Worship", icon: Star, bgColor: "bg-indigo-50", iconColor: "text-indigo-600" },
  { id: 1232, slug: "complete-guide-converting-to-catholicism", title: "The Complete Guide to Converting to Catholicism: Everything You Need to Know", excerpt: "Thinking about becoming Catholic? This complete step-by-step guide covers the RCIA process, the sacraments of initiation, choosing a sponsor, and life after the Easter Vigil.", date: "2026-05-01", readTime: "22 min", category: "Becoming Catholic", icon: Cross, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1233, slug: "complete-guide-to-the-catholic-mass", title: "The Complete Guide to the Catholic Mass: Every Part Explained", excerpt: "The most comprehensive guide to the Catholic Mass — every part explained from the Introductory Rites to the Dismissal, with full prayer texts, posture guide, and tips for active participation.", date: "2026-05-01", readTime: "22 min", category: "Liturgy & Worship", icon: Church, bgColor: "bg-violet-50", iconColor: "text-violet-600" },
  { id: 1234, slug: "complete-catholic-prayer-guide", title: "The Complete Catholic Prayer Guide: How to Build a Life of Prayer", excerpt: "Everything you need to build a Catholic prayer life — the 5 forms of prayer, a complete daily routine, all essential prayers with full texts, and how to pray when you don't feel like it.", date: "2026-05-01", readTime: "20 min", category: "Prayer & Devotion", icon: Heart, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1235, slug: "complete-rosary-guide", title: "The Complete Rosary Guide: How to Pray, All 20 Mysteries & Everything You Need to Know", excerpt: "The most complete Rosary guide available — step-by-step instructions, all 20 mysteries with meditations, every prayer with full text, the promises of the Rosary, and tips for beginners.", date: "2026-05-01", readTime: "25 min", category: "Prayer & Devotion", icon: Heart, bgColor: "bg-pink-50", iconColor: "text-pink-500" },
  { id: 1236, slug: "complete-guide-to-catholic-confession", title: "The Complete Guide to Catholic Confession: How to Make a Good Confession", excerpt: "Everything you need to make a good Confession — step-by-step guide, complete examination of conscience, what to say, common fears answered, and how to return after years away.", date: "2026-05-01", readTime: "20 min", category: "Sacraments", icon: Church, bgColor: "bg-violet-50", iconColor: "text-violet-600" },
  { id: 1237, slug: "complete-catholic-marriage-guide", title: "The Complete Catholic Marriage Guide: From Engagement to Holy Matrimony", excerpt: "Everything engaged Catholic couples need to know — Pre-Cana, required documents, the wedding ceremony explained, the exchange of vows, NFP, and how to build a holy marriage.", date: "2026-05-01", readTime: "22 min", category: "Sacraments", icon: Heart, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { id: 1238, slug: "complete-guide-to-catholic-saints", title: "The Complete Guide to Catholic Saints: How to Find Your Patron & Pray for Intercession", excerpt: "Everything about the Catholic saints — how to find your patron saint, the canonization process, the most popular patron saints by category, and how to develop a devotion.", date: "2026-05-01", readTime: "18 min", category: "Saints & Intercession", icon: Sparkles, bgColor: "bg-amber-50", iconColor: "text-amber-500" },
  { id: 1239, slug: "complete-guide-to-the-eucharist", title: "The Complete Guide to the Eucharist: Real Presence, Adoration & Receiving Communion", excerpt: "Everything about the Eucharist — the Real Presence explained, how to receive Communion properly, a complete guide to Eucharistic adoration, Eucharistic miracles, and Spiritual Communion.", date: "2026-05-01", readTime: "20 min", category: "Sacraments", icon: Sun, bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { id: 1240, slug: "complete-catholic-fasting-guide", title: "The Complete Catholic Fasting Guide: Rules, Methods & Spiritual Benefits", excerpt: "Everything about Catholic fasting — the Church's rules, types of fasting, how to fast well, the spiritual benefits, and a complete fasting checklist for Lent, Advent, and year-round.", date: "2026-05-01", readTime: "18 min", category: "Spiritual Life", icon: Flame, bgColor: "bg-orange-50", iconColor: "text-orange-600" },
  { id: 1241, slug: "complete-guide-to-discernment", title: "The Complete Guide to Discernment: How to Know God's Will for Your Life", excerpt: "The complete Catholic guide to discernment — the Ignatian method, consolation vs. desolation, a 6-step process for major decisions, signs of God's will, and how to discern your vocation.", date: "2026-05-01", readTime: "19 min", category: "Spiritual Life", icon: MapPin, bgColor: "bg-teal-50", iconColor: "text-teal-600" },
  { id: 1242, slug: "traditional-latin-mass-guide", title: "The Traditional Latin Mass: A Complete Guide for American Catholics", excerpt: "Everything you need to know about the Traditional Latin Mass — how it differs from the Novus Ordo, how to follow it as a beginner, how to find a TLM near you, and why young Americans are drawn to it.", date: "2026-05-01", readTime: "20 min", category: "Liturgy & Worship", icon: Cross, bgColor: "bg-amber-50", iconColor: "text-amber-700" },
  { id: 1243, slug: "catholic-bible-study-guide", title: "Catholic Bible Study Guide: How to Study Scripture the Catholic Way", excerpt: "How to study the Bible as a Catholic — which translation to use, the four senses of Scripture, Lectio Divina, the best Catholic Bible study programs, and a 30-day reading plan.", date: "2026-05-01", readTime: "18 min", category: "Bible & Faith", icon: BookOpen, bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
  { id: 1244, slug: "best-catholic-prayer-apps-2026", title: "Best Catholic Prayer Apps 2026: Hallow, Laudate & More Reviewed", excerpt: "The best Catholic apps for 2026 — Hallow, Laudate, Universalis, Formed.org, and more. Honest reviews, pricing, and which app is right for your prayer life.", date: "2026-05-01", readTime: "15 min", category: "Catholic Living", icon: Sparkles, bgColor: "bg-sky-50", iconColor: "text-sky-600" },
  { id: 1245, slug: "catholic-confirmation-preparation-guide", title: "Catholic Confirmation Preparation: The Complete Guide for Teens & Adults", excerpt: "Everything you need to prepare for Confirmation — the 7 gifts of the Holy Spirit, how to choose a name and sponsor, what happens at the ceremony, and what comes after.", date: "2026-05-01", readTime: "18 min", category: "Sacraments", icon: Flame, bgColor: "bg-orange-50", iconColor: "text-orange-600" },
  { id: 1246, slug: "catholic-baptism-preparation-guide", title: "Catholic Baptism Preparation: Complete Guide for Parents & Godparents", excerpt: "Everything parents and godparents need to know — when to baptize, godparent requirements, the ceremony explained step by step, baptism symbols, and how to raise a Catholic child.", date: "2026-05-01", readTime: "17 min", category: "Sacraments", icon: Droplets, bgColor: "bg-sky-50", iconColor: "text-sky-600" },
  { id: 1247, slug: "catholic-retreats-guide", title: "Catholic Retreats: How to Find, Choose & Make the Most of a Spiritual Retreat", excerpt: "Everything about Catholic retreats — types of retreats, how to find one near you, how to prepare, how to make the most of it, and how to make a retreat at home.", date: "2026-05-01", readTime: "16 min", category: "Spiritual Life", icon: MapPin, bgColor: "bg-green-50", iconColor: "text-green-600" },
];

export default function BlogPage() {
  const { page } = useParams<{ page?: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const currentPage = parseInt(page || "1", 10);
  const postsPerPage = 9;
  
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Sort posts by date (most recent first), then by id descending as tiebreaker
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    return b.id - a.id; // higher id = more recent
  });
  
  const filteredPosts = selectedCategory === "All" 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === selectedCategory);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);
  
  // Redirect to page 1 if no page specified or invalid page
  useEffect(() => {
    if (!page) {
      navigate('/blog/page/1/', { replace: true });
    } else if (currentPage < 1 || currentPage > totalPages) {
      navigate('/blog/page/1/', { replace: true });
    }
  }, [page, currentPage, totalPages, navigate]);
  
  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    navigate('/blog/page/1/');
  };
  
  const handlePageChange = (page: number) => {
    navigate(`/blog/page/${page}/`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Guide Catholic</title>
        <meta name="description" content="Explore articles about Catholic faith, spirituality, sacraments, and Christian living." />
        <link rel="canonical" href={`https://guidecatholic.com/blog/page/${currentPage}/`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="text-text">Blog</span>
            </nav>
          </div>
        </div>

        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-text mb-3">
                Guide Catholic Blog
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Articles, reflections and teachings to strengthen your faith and deepen your knowledge of Catholic doctrine.
              </p>
            </div>

            {/* Category filter — horizontally scrollable on mobile */}
            <div className="overflow-x-auto pb-2 mb-10 -mx-4 px-4">
              <div className="flex gap-2 w-max mx-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? "bg-accent text-button-text"
                        : "bg-background-muted text-text-muted hover:bg-accent/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {currentPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}/`}
                    className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent transition-all hover:shadow-lg"
                  >
                    <div className={`${post.bgColor} py-10 flex items-center justify-center`}>
                      <Icon className={`w-14 h-14 ${post.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted mb-3">
                        <span className="text-accent font-medium truncate max-w-[120px]">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 shrink-0">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-text mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination — smart truncated for mobile */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5">
                {/* Prev */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === 1
                      ? "border-border text-text-muted cursor-not-allowed opacity-40"
                      : "border-border text-text hover:bg-accent hover:text-button-text hover:border-accent"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Smart page numbers */}
                {(() => {
                  const pages: (number | "...")[] = [];
                  if (totalPages <= 7) {
                    for (let i = 1; i <= totalPages; i++) pages.push(i);
                  } else {
                    pages.push(1);
                    if (currentPage > 3) pages.push("...");
                    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                      pages.push(i);
                    }
                    if (currentPage < totalPages - 2) pages.push("...");
                    pages.push(totalPages);
                  }
                  return pages.map((p, idx) =>
                    p === "..." ? (
                      <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-text-muted text-sm">
                        …
                      </span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => handlePageChange(p as number)}
                        className={`w-9 h-9 rounded-lg border text-sm font-medium transition-colors ${
                          currentPage === p
                            ? "bg-accent text-button-text border-accent"
                            : "border-border text-text hover:bg-accent/10 hover:border-accent"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  );
                })()}

                {/* Next */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === totalPages
                      ? "border-border text-text-muted cursor-not-allowed opacity-40"
                      : "border-border text-text hover:bg-accent hover:text-button-text hover:border-accent"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
