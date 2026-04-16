import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Cross, Calendar, Clock, Heart, BookOpen, Church, Users, Flame, Sun, MapPin, HeartPulse, Wind, Cloud, Brain, Shield, Droplets, Home, ChevronLeft, ChevronRight, Ghost, Microscope, Moon, Sparkles, Star, type LucideIcon } from "lucide-react";
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
    date: "2026-04-14",
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
  }
];

export default function BlogPage() {
  const { page } = useParams<{ page?: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const currentPage = parseInt(page || "1", 10);
  const postsPerPage = 9;
  
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Sort posts by date (most recent first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
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
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
                Guide Catholic Blog
              </h1>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Articles, reflections and teachings to strengthen your faith and deepen your knowledge of Catholic doctrine.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-accent text-button-text"
                      : "bg-background-muted text-text-muted hover:bg-accent/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}/`}
                    className="group bg-surface rounded-3xl overflow-hidden border border-border hover:border-accent transition-all hover:shadow-xl"
                  >
                    <div className={`${post.bgColor} p-16 flex items-center justify-center`}>
                      <Icon className={`w-20 h-20 ${post.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                        <span className="text-accent font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === 1
                      ? "border-border text-text-muted cursor-not-allowed opacity-50"
                      : "border-border text-text hover:bg-accent hover:text-button-text hover:border-accent"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg border font-medium transition-colors ${
                        currentPage === page
                          ? "bg-accent text-button-text border-accent"
                          : "border-border text-text hover:bg-accent/10 hover:border-accent"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === totalPages
                      ? "border-border text-text-muted cursor-not-allowed opacity-50"
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
