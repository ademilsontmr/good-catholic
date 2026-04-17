#!/usr/bin/env node

/**
 * Script para atualizar layout dos artigos para coincidir com o artigo de referência
 * Atualiza: breadcrumbs, header, hero image, versículos e CTA
 */

const fs = require('fs');
const path = require('path');

const articles = [
  'PropheciesOfFatima.tsx',
  'NovenasExplained.tsx',
  'DivineOfficeLaity.tsx',
  'FaithAndAnxiety.tsx',
  'ManagingDepression.tsx',
  'SacramentOfMatrimony.tsx',
  'EucharisticPrayers.tsx',
  'LentPreparationGuide.tsx',
  'JubileePilgrimageGuide.tsx',
  'CatholicChurchHistory.tsx',
  'HowToReadBible.tsx',
  'CatholicFamilyTraditions.tsx',
  'HolyWaterSacramental.tsx',
  'CatholicSocialTeachingToday.tsx',
  'LivingVirtue.tsx',
  'RosaryMysteriesMeditation.tsx',
  'CatholicMarriagePreparation.tsx'
];

const blogDir = '/Users/ademilsonr/Desktop/bom catolico ingles/faith-journey-check/src/pages/blog';

// Configurações de cada artigo
const articleConfigs = {
  'PropheciesOfFatima.tsx': {
    title: 'Prophecies of Fatima',
    category: 'Prophecy & Mysticism',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    verses: [
      { text: '"Behold, I am the handmaid of the Lord." - Luke 1:38', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"My Immaculate Heart will triumph." - Our Lady of Fatima', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Pray the Rosary every day." - Our Lady of Fatima', bg: 'bg-indigo-50', border: 'border-indigo-200' }
    ]
  },
  'NovenasExplained.tsx': {
    title: 'Novenas Explained',
    category: 'Novena & Prayer',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    verses: [
      { text: '"When they had prayed, the place was shaken." - Acts 4:31', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Ask and it will be given to you." - Matthew 7:7', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Pray without ceasing." - 1 Thessalonians 5:17', bg: 'bg-violet-50', border: 'border-violet-200' }
    ]
  },
  'DivineOfficeLaity.tsx': {
    title: 'Divine Office for Laity',
    category: 'Prayer & Devotion',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    verses: [
      { text: '"Seven times a day I praise you." - Psalm 119:164', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Pray constantly." - 1 Thessalonians 5:17', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"My house shall be called a house of prayer." - Matthew 21:13', bg: 'bg-purple-50', border: 'border-purple-200' }
    ]
  },
  'FaithAndAnxiety.tsx': {
    title: 'Faith and Anxiety',
    category: 'Mental Health & Faith',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    verses: [
      { text: '"Cast all your anxieties on him." - 1 Peter 5:7', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Peace I leave with you." - John 14:27', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Do not be anxious about anything." - Philippians 4:6', bg: 'bg-teal-50', border: 'border-teal-200' }
    ]
  },
  'ManagingDepression.tsx': {
    title: 'Managing Depression',
    category: 'Mental Health',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    verses: [
      { text: '"The Lord is close to the brokenhearted." - Psalm 34:18', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Weeping may tarry for the night, but joy comes in the morning." - Psalm 30:5', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Come to me, all who labor and are heavy laden." - Matthew 11:28', bg: 'bg-blue-50', border: 'border-blue-200' }
    ]
  },
  'SacramentOfMatrimony.tsx': {
    title: 'Sacrament of Matrimony',
    category: 'Marriage & Family',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    verses: [
      { text: '"What God has joined together, let no one separate." - Mark 10:9', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Husbands, love your wives." - Ephesians 5:25', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Love is patient, love is kind." - 1 Corinthians 13:4', bg: 'bg-rose-50', border: 'border-rose-200' }
    ]
  },
  'EucharisticPrayers.tsx': {
    title: 'Eucharistic Prayers',
    category: 'Liturgy & Worship',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    verses: [
      { text: '"This is my body, given for you." - Luke 22:19', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Unless you eat the flesh of the Son of Man." - John 6:53', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"My flesh is true food." - John 6:55', bg: 'bg-yellow-50', border: 'border-yellow-200' }
    ]
  },
  'LentPreparationGuide.tsx': {
    title: 'Lent Preparation Guide',
    category: 'Liturgical Year',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    verses: [
      { text: '"Repent, for the kingdom of heaven is at hand." - Matthew 3:2', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Turn to me with all your heart." - Joel 2:12', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Unless you repent, you will all likewise perish." - Luke 13:3', bg: 'bg-purple-50', border: 'border-purple-200' }
    ]
  },
  'JubileePilgrimageGuide.tsx': {
    title: 'Jubilee Pilgrimage Guide',
    category: 'Jubilee 2025',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    verses: [
      { text: '"Seek and you will find." - Matthew 7:7', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"I am the door. If anyone enters by me, he will be saved." - John 10:9', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Come to me, all who labor and are heavy laden." - Matthew 11:28', bg: 'bg-amber-50', border: 'border-amber-200' }
    ]
  },
  'CatholicChurchHistory.tsx': {
    title: 'Catholic Church History',
    category: 'History & Apologetics',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    verses: [
      { text: '"You are Peter, and on this rock I will build my church." - Matthew 16:18', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"The gates of hell shall not prevail against it." - Matthew 16:18', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Go therefore and make disciples of all nations." - Matthew 28:19', bg: 'bg-orange-50', border: 'border-orange-200' }
    ]
  },
  'HowToReadBible.tsx': {
    title: 'How to Read the Bible',
    category: 'Formation & Scriptures',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    verses: [
      { text: '"All Scripture is breathed out by God." - 2 Timothy 3:16', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Your word is a lamp to my feet." - Psalm 119:105', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Man shall not live by bread alone." - Matthew 4:4', bg: 'bg-indigo-50', border: 'border-indigo-200' }
    ]
  },
  'CatholicFamilyTraditions.tsx': {
    title: 'Catholic Family Traditions',
    category: 'Family & Parenting',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    verses: [
      { text: '"Train up a child in the way he should go." - Proverbs 22:6', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"As for me and my house, we will serve the Lord." - Joshua 24:15', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Bless the Lord, O my soul." - Psalm 103:1', bg: 'bg-green-50', border: 'border-green-200' }
    ]
  },
  'HolyWaterSacramental.tsx': {
    title: 'Holy Water Sacramental',
    category: 'Devotions & Sacramentals',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    verses: [
      { text: '"Unless one is born of water and the Spirit." - John 3:5', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"You shall sprinkle purifying water upon them." - Numbers 8:7', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Let us draw near with a true heart." - Hebrews 10:22', bg: 'bg-blue-50', border: 'border-blue-200' }
    ]
  },
  'CatholicSocialTeachingToday.tsx': {
    title: 'Catholic Social Teaching Today',
    category: 'Current Affairs',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    verses: [
      { text: '"Whatever you did for one of these least brothers of mine." - Matthew 25:40', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Love your neighbor as yourself." - Mark 12:31', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Blessed are the poor in spirit." - Matthew 5:3', bg: 'bg-emerald-50', border: 'border-emerald-200' }
    ]
  },
  'LivingVirtue.tsx': {
    title: 'Living the Christian Life',
    category: 'Christian Life',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    verses: [
      { text: '"Be perfect, as your heavenly Father is perfect." - Matthew 5:48', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Add to your faith virtue." - 2 Peter 1:5', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Blessed are the pure in heart." - Matthew 5:8', bg: 'bg-rose-50', border: 'border-rose-200' }
    ]
  },
  'RosaryMysteriesMeditation.tsx': {
    title: 'Rosary Mysteries Meditation',
    category: 'Catholic Devotions',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    verses: [
      { text: '"Hail Mary, full of grace." - Luke 1:28', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Blessed are you among women." - Luke 1:42', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Pray always and not lose heart." - Luke 18:1', bg: 'bg-pink-50', border: 'border-pink-200' }
    ]
  },
  'CatholicMarriagePreparation.tsx': {
    title: 'Catholic Marriage Preparation',
    category: 'Relationships & Family',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    verses: [
      { text: '"What God has joined together, let no one separate." - Mark 10:9', bg: 'bg-accent/5', border: 'border-accent/20' },
      { text: '"Love is patient, love is kind." - 1 Corinthians 13:4', bg: 'bg-primary/5', border: 'border-primary/20' },
      { text: '"Submit to one another out of reverence for Christ." - Ephesians 5:21', bg: 'bg-rose-50', border: 'border-rose-200' }
    ]
  }
};

console.log('Script pronto para atualizar 17 artigos restantes');
console.log('Execute: node update-article-layout.js');
