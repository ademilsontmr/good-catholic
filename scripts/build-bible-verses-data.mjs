/** Build scripts/bible-verses-topics-data.json — run: node scripts/build-bible-verses-data.mjs */
import fs from "fs";

const V = (ref, text) => ({ ref, text });
const T = (x) => x;

const topics = [
  T({
    slug: "bible-verses-about-anxiety",
    component: "BibleVersesAboutAnxiety",
    keyword: "Bible Verses About Anxiety",
    h1: "Bible Verses About Anxiety: Scriptures for Peace When You Worry",
    desc: "Bible verses about anxiety for Catholics — Philippians 4, Matthew 6, Psalm 94, and RSV-CE scriptures for calm when worry overwhelms you.",
    keywords: "bible verses about anxiety, scripture for anxiety, catholic bible verses anxiety",
    intro: "When your mind races at night and worry crowds out prayer, Scripture gives words stronger than fear.",
    answer: "The best Bible verses about anxiety include Philippians 4:6-7, Matthew 6:34, 1 Peter 5:7, Isaiah 41:10, and Psalm 94:19.",
    sections: [
      {
        title: "Core Verses When Anxiety Feels Overwhelming",
        verses: [
          V("Philippians 4:6-7", "Have no anxiety about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which passes all understanding, will keep your hearts and your minds in Christ Jesus."),
          V("1 Peter 5:7", "Cast all your anxieties on him, for he cares about you."),
          V("Matthew 6:34", "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Let the day's own trouble be sufficient for the day."),
          V("Psalm 94:19", "When the cares of my heart are many, thy consolations cheer my soul."),
          V("John 14:27", "Peace I leave with you; my peace I give to you; not as the world gives do I give to you."),
        ],
      },
      {
        title: "Old Testament Comfort for a Restless Heart",
        verses: [
          V("Isaiah 41:10", "Fear not, for I am with you, be not dismayed, for I am your God; I will strengthen you, I will help you."),
          V("Psalm 55:22", "Cast your burden on the Lord, and he will sustain you."),
          V("Joshua 1:9", "Be strong and of good courage; be not frightened, neither be dismayed; for the Lord your God is with you wherever you go."),
          V("Psalm 46:1", "God is our refuge and strength, a very present help in trouble."),
        ],
      },
    ],
  }),
  T({
    slug: "bible-verses-about-strength",
    component: "BibleVersesAboutStrength",
    keyword: "Bible Verses About Strength",
    h1: "Bible Verses About Strength: Scriptures for Courage and Endurance",
    desc: "Bible verses about strength for Catholics — Philippians 4:13, Isaiah 40:31, Joshua 1:9, and RSV-CE scriptures when you need courage.",
    keywords: "bible verses about strength, scripture for strength, philippians 4:13",
    intro: "Catholic life asks for endurance: parenting, illness, vocation, and daily fidelity. These verses remind us that power comes from Christ.",
    answer: "Key Bible verses about strength include Philippians 4:13, Isaiah 40:31, Joshua 1:9, 2 Corinthians 12:9, and Psalm 28:7.",
    sections: [
      {
        title: "New Testament Verses on Strength in Christ",
        verses: [
          V("Philippians 4:13", "I can do all things in him who strengthens me."),
          V("2 Corinthians 12:9", "My grace is sufficient for you, for my power is made perfect in weakness."),
          V("Ephesians 6:10", "Finally, be strong in the Lord and in the strength of his might."),
          V("Romans 8:37", "No, in all these things we are more than conquerors through him who loved us."),
          V("1 Corinthians 16:13", "Be watchful, stand firm in your faith, be courageous, be strong."),
        ],
      },
      {
        title: "Old Testament Verses for Courage",
        verses: [
          V("Isaiah 40:31", "They who wait for the Lord shall renew their strength, they shall mount up with wings like eagles."),
          V("Joshua 1:9", "Be strong and of good courage; be not frightened, neither be dismayed."),
          V("Psalm 28:7", "The Lord is my strength and my shield; in him my heart trusts."),
          V("Deuteronomy 31:6", "Be strong and of good courage, do not fear or be in dread of them: for it is the Lord your God who goes with you."),
        ],
      },
    ],
  }),
  T({
    slug: "bible-verses-about-love",
    component: "BibleVersesAboutLove",
    keyword: "Bible Verses About Love",
    h1: "Bible Verses About Love: Scripture on Charity, Marriage and God's Heart",
    desc: "Bible verses about love for Catholics — 1 Corinthians 13, John 15, 1 John 4, and RSV-CE scriptures on charity and marriage.",
    keywords: "bible verses about love, 1 corinthians 13, scripture about love",
    intro: "Love is not a feeling alone — for Catholics, charity is a theological virtue forming marriage, friendship, and discipleship.",
    answer: "Essential Bible verses about love include 1 Corinthians 13:4-7, John 15:12-13, 1 John 4:7-8, John 3:16, and Romans 13:8.",
    sections: [
      {
        title: "The Greatest Verses on Christian Love",
        verses: [
          V("1 Corinthians 13:4-7", "Love is patient and kind; love is not jealous or boastful; it is not arrogant or rude. Love does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrong, but rejoices in the right. Love bears all things, believes all things, hopes all things, endures all things."),
          V("John 15:12-13", "This is my commandment, that you love one another as I have loved you. Greater love has no man than this, that a man lay down his life for his friends."),
          V("1 John 4:7-8", "Beloved, let us love one another; for love is of God, and he who loves is born of God and knows God. He who does not love does not know God; for God is love."),
          V("John 3:16", "For God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life."),
          V("Romans 13:8", "Owe no one anything, except to love one another; for he who loves his neighbor has fulfilled the law."),
        ],
      },
      {
        title: "Love in Marriage and Daily Life",
        verses: [
          V("Ephesians 5:25", "Husbands, love your wives, as Christ loved the church and gave himself up for her."),
          V("Colossians 3:14", "And above all these put on love, which binds everything together in perfect harmony."),
          V("1 Peter 4:8", "Above all hold unfailing your love for one another, since love covers a multitude of sins."),
          V("Song of Solomon 8:7", "Many waters cannot quench love, neither can floods drown it."),
        ],
      },
    ],
  }),
];

// Append topics 4-40 from compact catalog
const catalog = [
  ["bible-verses-about-hope", "BibleVersesAboutHope", "Bible Verses About Hope", "Hope", "Romans 15:13", [
    ["New Testament Hope", [["Romans 15:13", "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope."], ["Romans 8:24-25", "For in this hope we were saved. Now hope that is seen is not hope. For who hopes for what he sees? But if we hope for what we do not see, we wait for it with patience."], ["Hebrews 6:19", "We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner shrine behind the curtain."], ["1 Peter 1:3", "Blessed be the God and Father of our Lord Jesus Christ! By his great mercy we have been born anew to a living hope through the resurrection of Jesus Christ from the dead."], ["Hebrews 11:1", "Now faith is the assurance of things hoped for, the conviction of things not seen."]]],
    ["Old Testament Promises of Hope", [["Jeremiah 29:11", "For I know the plans I have for you, says the Lord, plans for welfare and not for evil, to give you a future and a hope."], ["Psalm 42:11", "Why are you cast down, O my soul, and why are you disquieted within me? Hope in God; for I shall again praise him, my help and my God."], ["Lamentations 3:22-23", "The steadfast love of the Lord never ceases, his mercies never come to an end; they are new every morning; great is thy faithfulness."], ["Isaiah 40:31", "They who wait for the Lord shall renew their strength."]]],
  ]],
];

function fromCatalog([slug, component, keyword, theme, tipVerse, secs]) {
  const h1 = `${keyword}: Scriptures for Catholic Hearts`;
  return {
    slug,
    component,
    keyword,
    h1: `${keyword}: Scriptures Catholics Turn To in Faith`,
    desc: `${keyword} for Catholics — ${tipVerse} and RSV-CE scriptures for prayer, comfort, and daily discipleship.`,
    keywords: `${keyword.toLowerCase()}, catholic ${keyword.toLowerCase()}, scripture ${theme.toLowerCase()}`,
    intro: `These ${keyword.toLowerCase()} help Catholics pray with the Church, find comfort in trials, and keep Scripture close in daily life.`,
    answer: `Key ${keyword.toLowerCase()} include the passages below — pray them slowly, memorize one this week, and share them with someone who needs ${theme.toLowerCase()}.`,
    sections: secs.map(([title, verses]) => ({
      title,
      verses: verses.map(([ref, text]) => V(ref, text)),
    })),
  };
}

// Full catalog 4-40
const MORE_CATALOG = [
  ["bible-verses-about-hope", "BibleVersesAboutHope", "Bible Verses About Hope", "hope", "Romans 15:13", [
    ["New Testament Hope", [["Romans 15:13", "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope."], ["Romans 8:24-25", "For in this hope we were saved. Now hope that is seen is not hope. But if we hope for what we do not see, we wait for it with patience."], ["Hebrews 6:19", "We have this as a sure and steadfast anchor of the soul."], ["1 Peter 1:3", "By his great mercy we have been born anew to a living hope through the resurrection of Jesus Christ from the dead."], ["Hebrews 11:1", "Now faith is the assurance of things hoped for, the conviction of things not seen."]]],
    ["Old Testament Promises of Hope", [["Jeremiah 29:11", "For I know the plans I have for you, says the Lord, plans for welfare and not for evil, to give you a future and a hope."], ["Psalm 42:11", "Why are you cast down, O my soul? Hope in God."], ["Lamentations 3:22-23", "The steadfast love of the Lord never ceases; they are new every morning."], ["Isaiah 40:31", "They who wait for the Lord shall renew their strength."]]],
  ]],
  ["bible-verses-about-healing", "BibleVersesAboutHealing", "Bible Verses About Healing", "healing", "James 5:14", [
    ["Healing in the New Testament", [["James 5:14-15", "Is any among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord."], ["Mark 5:34", "Daughter, your faith has made you well; go in peace, and be healed of your disease."], ["Matthew 11:28", "Come to me, all who labor and are heavy laden, and I will give you rest."], ["1 Peter 2:24", "By his wounds you have been healed."], ["3 John 1:2", "Beloved, I pray that all may go well with you and that you may be in health."]]],
    ["Old Testament Prayers for Healing", [["Psalm 103:2-3", "Bless the Lord, O my soul... who forgives all your iniquity, who heals all your diseases."], ["Isaiah 53:5", "With his stripes we are healed."], ["Jeremiah 17:14", "Heal me, O Lord, and I shall be healed; save me, and I shall be saved."], ["Exodus 15:26", "I am the Lord, your healer."]]],
  ]],
  ["bible-verses-about-faith", "BibleVersesAboutFaith", "Bible Verses About Faith", "faith", "Hebrews 11:1", [
    ["Verses That Define Faith", [["Hebrews 11:1", "Now faith is the assurance of things hoped for, the conviction of things not seen."], ["2 Corinthians 5:7", "For we walk by faith, not by sight."], ["Romans 10:17", "So faith comes from what is heard, and what is heard comes by the preaching of Christ."], ["Mark 11:22-23", "Have faith in God."], ["James 2:17", "So faith by itself, if it has no works, is dead."]]],
    ["Faith Under Trial", [["Matthew 17:20", "If you have faith as a grain of mustard seed, nothing will be impossible to you."], ["Luke 17:5", "The apostles said to the Lord, Increase our faith!"], ["Galatians 2:20", "It is no longer I who live, but Christ who lives in me; and the life I now live in the flesh I live by faith in the Son of God."], ["Ephesians 2:8", "For by grace you have been saved through faith; and this is not your own doing, it is the gift of God."]]],
  ]],
  ["bible-verses-about-peace", "BibleVersesAboutPeace", "Bible Verses About Peace", "peace", "John 14:27", [
    ["Peace from Christ", [["John 14:27", "Peace I leave with you; my peace I give to you; not as the world gives do I give to you."], ["Philippians 4:7", "And the peace of God, which passes all understanding, will keep your hearts and your minds in Christ Jesus."], ["Colossians 3:15", "And let the peace of Christ rule in your hearts."], ["Romans 15:13", "May the God of hope fill you with all joy and peace in believing."], ["Matthew 5:9", "Blessed are the peacemakers, for they shall be called sons of God."]]],
    ["Old Testament Peace", [["Isaiah 26:3", "Thou dost keep him in perfect peace, whose mind is stayed on thee, because he trusts in thee."], ["Numbers 6:24-26", "The Lord bless you and keep you... and give you peace."], ["Psalm 29:11", "May the Lord give strength to his people! May the Lord bless his people with peace!"], ["Psalm 4:8", "In peace I will both lie down and sleep; for thou alone, O Lord, makest me dwell in safety."]]],
  ]],
  ["bible-verses-about-depression", "BibleVersesAboutDepression", "Bible Verses About Depression", "depression", "Psalm 42:11", [
    ["When the Soul Is Cast Down", [["Psalm 42:11", "Why are you cast down, O my soul, and why are you disquieted within me? Hope in God."], ["Psalm 34:18", "The Lord is near to the brokenhearted, and saves the crushed in spirit."], ["Matthew 11:28", "Come to me, all who labor and are heavy laden, and I will give you rest."], ["Psalm 40:1-2", "I waited patiently for the Lord; he inclined to me and heard my cry. He drew me up from the desolate pit."], ["2 Corinthians 1:3-4", "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction."]]],
    ["God With Us in Suffering", [["Isaiah 41:10", "Fear not, for I am with you."], ["Romans 8:38-39", "Nothing will be able to separate us from the love of God in Christ Jesus our Lord."], ["Psalm 23:4", "Even though I walk through the valley of the shadow of death, I fear no evil; for thou art with me."], ["Lamentations 3:22-23", "The steadfast love of the Lord never ceases; they are new every morning."]]],
  ]],
];

// Because the file is getting long, emit remaining topics with shared verse pools + unique picks
const pools = {
  fear: [["Isaiah 41:10", "Fear not, for I am with you, be not dismayed, for I am your God."], ["2 Timothy 1:7", "For God did not give us a spirit of timidity but a spirit of power and love and self-control."], ["Psalm 27:1", "The Lord is my light and my salvation; whom shall I fear?"], ["Joshua 1:9", "Be strong and of good courage; be not frightened."], ["John 14:27", "Let not your hearts be troubled, neither let them be afraid."], ["Psalm 56:3", "When I am afraid, I put my trust in thee."], ["Deuteronomy 31:6", "Be strong and of good courage, do not fear."], ["Psalm 118:6", "With the Lord on my side I do not fear. What can man do to me?"]],
  protection: [["Psalm 91:1-2", "He who dwells in the shelter of the Most High, who abides in the shadow of the Almighty, will say to the Lord, My refuge and my fortress; my God, in whom I trust."], ["Psalm 121:7-8", "The Lord will keep you from all evil; he will keep your life. The Lord will keep your going out and your coming in."], ["2 Thessalonians 3:3", "But the Lord is faithful; he will strengthen you and guard you from evil."], ["Proverbs 18:10", "The name of the Lord is a strong tower; the righteous man runs into it and is safe."], ["Isaiah 54:17", "No weapon that is fashioned against you shall prosper."], ["Psalm 46:1", "God is our refuge and strength, a very present help in trouble."], ["Exodus 14:14", "The Lord will fight for you, and you have only to be still."], ["Psalm 23:4", "Even though I walk through the valley of the shadow of death, I fear no evil; for thou art with me."]],
  forgiveness: [["Matthew 6:14-15", "For if you forgive men their trespasses, your heavenly Father also will forgive you."], ["Colossians 3:13", "As the Lord has forgiven you, so you also must forgive."], ["Ephesians 4:32", "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you."], ["Matthew 18:21-22", "I do not say to you seven times, but seventy times seven."], ["Luke 6:37", "Forgive, and you will be forgiven."], ["1 John 1:9", "If we confess our sins, he is faithful and just, and will forgive our sins and cleanse us from all unrighteousness."], ["Psalm 103:12", "As far as the east is from the west, so far does he remove our transgressions from us."], ["Isaiah 1:18", "Though your sins are like scarlet, they shall be as white as snow."]],
  prayer: [["Matthew 6:6", "When you pray, go into your room and shut the door and pray to your Father who is in secret."], ["Matthew 6:9", "Pray then like this: Our Father who art in heaven, hallowed be thy name."], ["Luke 11:9", "Ask, and it will be given you; seek, and you will find; knock, and it will be opened to you."], ["Philippians 4:6", "Have no anxiety about anything, but in everything by prayer and thanksgiving let your requests be made known to God."], ["1 Thessalonians 5:17", "Pray constantly."], ["James 5:16", "The prayer of a righteous man has great power in its effects."], ["Romans 12:12", "Rejoice in your hope, be patient in tribulation, be constant in prayer."], ["John 15:7", "If you abide in me, and my words abide in you, ask whatever you will, and it shall be done for you."]],
  family: [["Joshua 24:15", "As for me and my house, we will serve the Lord."], ["Ephesians 6:1-4", "Children, obey your parents in the Lord... Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord."], ["Proverbs 22:6", "Train up a child in the way he should go, and when he is old he will not depart from it."], ["Psalm 127:3", "Lo, sons are a heritage from the Lord, the fruit of the womb a reward."], ["Colossians 3:20-21", "Children, obey your parents in everything, for this pleases the Lord. Fathers, do not provoke your children, lest they become discouraged."], ["1 Timothy 5:8", "If any one does not provide for his relatives, and especially for his own family, he has disowned the faith."], ["Psalm 133:1", "Behold, how good and pleasant it is when brothers dwell in unity!"], ["Genesis 2:24", "Therefore a man leaves his father and his mother and cleaves to his wife, and they become one flesh."]],
  marriage: [["Genesis 2:24", "Therefore a man leaves his father and his mother and cleaves to his wife, and they become one flesh."], ["Mark 10:9", "What therefore God has joined together, let not man put asunder."], ["Ephesians 5:25", "Husbands, love your wives, as Christ loved the church and gave himself up for her."], ["Ephesians 5:31-32", "The two shall become one. This is a great mystery, and I mean in reference to Christ and the church."], ["Matthew 19:6", "So they are no longer two but one."], ["1 Corinthians 13:4-7", "Love is patient and kind... Love bears all things, believes all things, hopes all things, endures all things."], ["Ecclesiastes 4:9-10", "Two are better than one... if they fall, one will lift up his fellow."], ["Colossians 3:14", "And above all these put on love, which binds everything together in perfect harmony."]],
  friendship: [["Proverbs 17:17", "A friend loves at all times, and a brother is born for adversity."], ["John 15:13-15", "Greater love has no man than this, that a man lay down his life for his friends... I have called you friends."], ["Ecclesiastes 4:9-10", "Two are better than one... if they fall, one will lift up his fellow."], ["Proverbs 27:17", "Iron sharpens iron, and one man sharpens another."], ["Sirach 6:14", "A faithful friend is a sturdy shelter; he that has found one has found a treasure."], ["Proverbs 13:20", "He who walks with wise men becomes wise, but the companion of fools will suffer harm."], ["1 Corinthians 15:33", "Do not be deceived: Bad company ruins good morals."], ["Ruth 1:16", "Where you go I will go, and where you lodge I will lodge; your people shall be my people, and your God my God."]],
  encourage: [["Joshua 1:9", "Be strong and of good courage... for the Lord your God is with you wherever you go."], ["Romans 8:28", "We know that in everything God works for good with those who love him."], ["Isaiah 40:31", "They who wait for the Lord shall renew their strength."], ["Deuteronomy 31:8", "It is the Lord who goes before you; he will be with you, he will not fail you or forsake you."], ["Philippians 4:13", "I can do all things in him who strengthens me."], ["Psalm 121:1-2", "I lift up my eyes to the hills. From whence does my help come? My help comes from the Lord."], ["Matthew 19:26", "With men this is impossible, but with God all things are possible."], ["Jeremiah 29:11", "I know the plans I have for you... to give you a future and a hope."]],
  hard: [["Isaiah 40:31", "They who wait for the Lord shall renew their strength."], ["Romans 8:28", "In everything God works for good with those who love him."], ["James 1:2-4", "Count it all joy when you meet various trials... that you may be perfect and complete."], ["2 Corinthians 4:8-9", "We are afflicted in every way, but not crushed; perplexed, but not driven to despair."], ["Psalm 46:1", "God is our refuge and strength, a very present help in trouble."], ["Philippians 4:13", "I can do all things in him who strengthens me."], ["2 Corinthians 12:9", "My grace is sufficient for you, for my power is made perfect in weakness."], ["Nahum 1:7", "The Lord is good, a stronghold in the day of trouble."]],
  grief: [["John 11:25-26", "I am the resurrection and the life; he who believes in me, though he die, yet shall he live."], ["1 Thessalonians 4:13-14", "We would not have you ignorant concerning those who are asleep, that you may not grieve as others do who have no hope."], ["Matthew 5:4", "Blessed are those who mourn, for they shall be comforted."], ["Revelation 21:4", "He will wipe away every tear from their eyes, and death shall be no more."], ["Psalm 34:18", "The Lord is near to the brokenhearted."], ["Psalm 23:4", "Even though I walk through the valley of the shadow of death, I fear no evil."], ["Romans 8:38-39", "Neither death nor life will be able to separate us from the love of God."], ["Wisdom 3:1", "The souls of the righteous are in the hand of God."]],
  sleep: [["Psalm 4:8", "In peace I will both lie down and sleep; for thou alone, O Lord, makest me dwell in safety."], ["Psalm 127:2", "He gives to his beloved sleep."], ["Proverbs 3:24", "When you lie down, your sleep will be sweet."], ["Matthew 11:28", "Come to me, all who labor and are heavy laden, and I will give you rest."], ["Psalm 3:5", "I lie down and sleep; I wake again, for the Lord sustains me."], ["Psalm 121:3-4", "He who keeps you will not slumber."], ["Isaiah 26:3", "Thou dost keep him in perfect peace, whose mind is stayed on thee."], ["Philippians 4:6-7", "Have no anxiety about anything... the peace of God will keep your hearts."]],
  women: [["Proverbs 31:25", "Strength and dignity are her clothing, and she laughs at the time to come."], ["Luke 1:38", "Behold, I am the handmaid of the Lord; let it be to me according to your word."], ["Ruth 1:16", "Where you go I will go... your God my God."], ["Galatians 3:28", "There is neither male nor female; for you are all one in Christ Jesus."], ["Psalm 46:5", "God is in the midst of her, she shall not be moved."], ["Luke 1:45", "Blessed is she who believed."], ["Proverbs 31:30", "A woman who fears the Lord is to be praised."], ["Esther 4:14", "Who knows whether you have not come to the kingdom for such a time as this?"]],
  men: [["Joshua 1:9", "Be strong and of good courage."], ["1 Corinthians 16:13", "Be watchful, stand firm in your faith, be courageous, be strong."], ["Micah 6:8", "Do justice, and love kindness, and walk humbly with your God."], ["Ephesians 5:25", "Husbands, love your wives, as Christ loved the church."], ["Psalm 1:1-3", "Blessed is the man who walks not in the counsel of the wicked... He is like a tree planted by streams of water."], ["1 Timothy 6:11", "Aim at righteousness, godliness, faith, love, steadfastness, gentleness."], ["Proverbs 27:17", "Iron sharpens iron."], ["Psalm 112:1", "Blessed is the man who fears the Lord."]],
  godsLove: [["John 3:16", "For God so loved the world that he gave his only Son."], ["Romans 8:38-39", "Nothing will be able to separate us from the love of God in Christ Jesus our Lord."], ["1 John 4:9-10", "In this the love of God was made manifest among us, that God sent his only Son into the world."], ["Jeremiah 31:3", "I have loved you with an everlasting love."], ["Zephaniah 3:17", "The Lord your God is in your midst... he will renew you in his love."], ["Romans 5:8", "God shows his love for us in that while we were yet sinners Christ died for us."], ["Ephesians 2:4-5", "God, who is rich in mercy, out of the great love with which he loved us, made us alive together with Christ."], ["1 John 3:1", "See what love the Father has given us, that we should be called children of God."]],
  trust: [["Proverbs 3:5-6", "Trust in the Lord with all your heart, and do not rely on your own insight. In all your ways acknowledge him, and he will make straight your paths."], ["Psalm 37:5", "Commit your way to the Lord; trust in him, and he will act."], ["Isaiah 26:3", "Thou dost keep him in perfect peace, whose mind is stayed on thee, because he trusts in thee."], ["Jeremiah 17:7", "Blessed is the man who trusts in the Lord, whose trust is the Lord."], ["Psalm 56:3", "When I am afraid, I put my trust in thee."], ["Psalm 9:10", "Those who know thy name put their trust in thee."], ["Isaiah 12:2", "Behold, God is my salvation; I will trust, and will not be afraid."], ["Romans 8:28", "In everything God works for good with those who love him."]],
  plan: [["Jeremiah 29:11", "I know the plans I have for you, says the Lord... to give you a future and a hope."], ["Romans 8:28", "In everything God works for good with those who love him, who are called according to his purpose."], ["Proverbs 19:21", "Many are the plans in the mind of a man, but it is the purpose of the Lord that will be established."], ["Ephesians 2:10", "We are his workmanship, created in Christ Jesus for good works, which God prepared beforehand."], ["Isaiah 55:8-9", "My thoughts are not your thoughts, neither are your ways my ways, says the Lord."], ["Psalm 32:8", "I will instruct you and teach you the way you should go."], ["Proverbs 16:9", "A man's mind plans his way, but the Lord directs his steps."], ["Jeremiah 1:5", "Before I formed you in the womb I knew you."]],
  happiness: [["Psalm 16:11", "In thy presence there is fulness of joy."], ["Philippians 4:4", "Rejoice in the Lord always; again I will say, Rejoice."], ["John 15:11", "These things I have spoken to you, that my joy may be in you, and that your joy may be full."], ["Psalm 144:15", "Happy the people whose God is the Lord!"], ["Matthew 5:3", "Blessed are the poor in spirit, for theirs is the kingdom of heaven."], ["Psalm 1:1-2", "Blessed is the man who walks not in the counsel of the wicked... his delight is in the law of the Lord."], ["Romans 15:13", "May the God of hope fill you with all joy and peace in believing."], ["Nehemiah 8:10", "The joy of the Lord is your strength."]],
  life: [["John 10:10", "I came that they may have life, and have it abundantly."], ["John 14:6", "I am the way, and the truth, and the life."], ["Deuteronomy 30:19", "I have set before you life and death, blessing and curse; therefore choose life."], ["Psalm 139:13-14", "Thou didst form my inward parts, thou didst knit me together in my mother's womb. I praise thee, for thou art fearful and wonderful."], ["Galatians 2:20", "It is no longer I who live, but Christ who lives in me."], ["Ecclesiastes 12:13", "Fear God, and keep his commandments; for this is the whole duty of man."], ["Philippians 1:21", "For to me to live is Christ, and to die is gain."], ["1 John 5:11-12", "God gave us eternal life, and this life is in his Son."]],
  shortStrength: [["Philippians 4:13", "I can do all things in him who strengthens me."], ["Psalm 28:7", "The Lord is my strength and my shield."], ["Isaiah 41:10", "Fear not, for I am with you."], ["Exodus 15:2", "The Lord is my strength and my song."], ["Psalm 46:1", "God is our refuge and strength."], ["Joshua 1:9", "Be strong and of good courage."], ["Nehemiah 8:10", "The joy of the Lord is your strength."], ["Ephesians 6:10", "Be strong in the Lord and in the strength of his might."]],
  shortLove: [["1 John 4:8", "He who does not love does not know God; for God is love."], ["John 3:16", "For God so loved the world that he gave his only Son."], ["1 Corinthians 13:13", "So faith, hope, love abide, these three; but the greatest of these is love."], ["Colossians 3:14", "Above all these put on love."], ["1 Peter 4:8", "Love covers a multitude of sins."], ["John 15:12", "Love one another as I have loved you."], ["Romans 13:8", "Owe no one anything, except to love one another."], ["1 John 4:19", "We love, because he first loved us."]],
  inspire: [["Micah 6:8", "What does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?"], ["Matthew 5:16", "Let your light so shine before men, that they may see your good works and give glory to your Father who is in heaven."], ["Philippians 4:8", "Whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is gracious... think about these things."], ["Proverbs 3:5-6", "Trust in the Lord with all your heart... he will make straight your paths."], ["Romans 12:2", "Do not be conformed to this world but be transformed by the renewal of your mind."], ["Galatians 6:9", "Let us not grow weary in well-doing, for in due season we shall reap, if we do not lose heart."], ["Hebrews 12:1", "Let us run with perseverance the race that is set before us."], ["Matthew 28:19", "Go therefore and make disciples of all nations."]],
  powerful: [["Romans 8:31", "If God is for us, who is against us?"], ["John 11:25-26", "I am the resurrection and the life; he who believes in me, though he die, yet shall he live."], ["Hebrews 4:12", "The word of God is living and active, sharper than any two-edged sword."], ["Ephesians 6:12", "We are not contending against flesh and blood, but against the principalities, against the powers."], ["Revelation 21:4", "He will wipe away every tear from their eyes, and death shall be no more."], ["1 John 4:4", "He who is in you is greater than he who is in the world."], ["Isaiah 54:17", "No weapon that is fashioned against you shall prosper."], ["Psalm 18:2", "The Lord is my rock, and my fortress, and my deliverer."]],
  recovery: [["Jeremiah 30:17", "For I will restore health to you, and your wounds I will heal, says the Lord."], ["Psalm 147:3", "He heals the brokenhearted, and binds up their wounds."], ["James 5:14-15", "Is any among you sick? Let him call for the elders of the church."], ["Isaiah 58:8", "Then shall your light break forth like the dawn, and your healing shall spring up speedily."], ["3 John 1:2", "I pray that all may go well with you and that you may be in health."], ["Joel 2:25", "I will restore to you the years which the swarming locust has eaten."], ["Philippians 1:6", "He who began a good work in you will bring it to completion."], ["2 Corinthians 5:17", "If any one is in Christ, he is a new creation."]],
  broken: [["Psalm 34:18", "The Lord is near to the brokenhearted, and saves the crushed in spirit."], ["Psalm 147:3", "He heals the brokenhearted, and binds up their wounds."], ["Isaiah 61:1", "He has sent me to bind up the brokenhearted."], ["Matthew 5:4", "Blessed are those who mourn, for they shall be comforted."], ["Revelation 21:4", "He will wipe away every tear from their eyes."], ["Joel 2:25", "I will restore to you the years which the swarming locust has eaten."], ["Romans 8:28", "In everything God works for good with those who love him."], ["Psalm 30:5", "Weeping may tarry for the night, but joy comes with the morning."]],
  stress: [["Matthew 11:28-30", "Come to me, all who labor and are heavy laden, and I will give you rest."], ["Philippians 4:6-7", "Have no anxiety about anything... the peace of God will keep your hearts."], ["Psalm 55:22", "Cast your burden on the Lord, and he will sustain you."], ["John 14:27", "Peace I leave with you... Let not your hearts be troubled."], ["Isaiah 26:3", "Thou dost keep him in perfect peace, whose mind is stayed on thee."], ["Psalm 94:19", "When the cares of my heart are many, thy consolations cheer my soul."], ["1 Peter 5:7", "Cast all your anxieties on him."], ["Exodus 14:14", "The Lord will fight for you, and you have only to be still."]],
  success: [["Proverbs 16:3", "Commit your work to the Lord, and your plans will be established."], ["Colossians 3:23", "Whatever your task, work heartily, as serving the Lord and not men."], ["Joshua 1:8", "This book of the law shall not depart out of your mouth... then you shall make your way prosperous."], ["Psalm 90:17", "Let the favor of the Lord our God be upon us, and establish thou the work of our hands."], ["Deuteronomy 8:18", "Remember the Lord your God, for it is he who gives you power to get wealth."], ["Matthew 6:33", "Seek first his kingdom and his righteousness, and all these things shall be yours as well."], ["Psalm 37:4-5", "Take delight in the Lord, and he will give you the desires of your heart."], ["James 1:5", "If any of you lacks wisdom, let him ask God."]],
  begin: [["Isaiah 43:18-19", "Remember not the former things... Behold, I am doing a new thing."], ["2 Corinthians 5:17", "If any one is in Christ, he is a new creation; the old has passed away, behold, the new has come."], ["Lamentations 3:22-23", "The steadfast love of the Lord never ceases; they are new every morning."], ["Ezekiel 36:26", "A new heart I will give you, and a new spirit I will put within you."], ["Philippians 3:13-14", "Forgetting what lies behind and straining forward to what lies ahead, I press on toward the goal."], ["Revelation 21:5", "Behold, I make all things new."], ["Joshua 1:9", "Be strong and of good courage."], ["Jeremiah 29:11", "I know the plans I have for you... a future and a hope."]],
  mothers: [["Proverbs 31:25-28", "Strength and dignity are her clothing... Her children rise up and call her blessed."], ["Isaiah 66:13", "As one whom his mother comforts, so I will comfort you."], ["Luke 1:46-48", "My soul magnifies the Lord... all generations will call me blessed."], ["Psalm 127:3", "Sons are a heritage from the Lord, the fruit of the womb a reward."], ["2 Timothy 1:5", "I am reminded of your sincere faith, a faith that dwelt first in your grandmother Lois and your mother Eunice."], ["Philippians 4:13", "I can do all things in him who strengthens me."], ["Deuteronomy 6:6-7", "These words... you shall teach them diligently to your children."], ["1 Corinthians 13:4", "Love is patient and kind."]],
  fathers: [["Ephesians 6:4", "Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord."], ["Proverbs 20:7", "A righteous man who walks in his integrity — blessed are his sons after him!"], ["Psalm 103:13", "As a father pities his children, so the Lord pities those who fear him."], ["Joshua 24:15", "As for me and my house, we will serve the Lord."], ["Proverbs 22:6", "Train up a child in the way he should go."], ["1 Timothy 5:8", "If any one does not provide for his relatives... he has disowned the faith."], ["Colossians 3:21", "Fathers, do not provoke your children, lest they become discouraged."], ["Psalm 128:1-3", "Blessed is every one who fears the Lord... Your wife will be like a fruitful vine."]],
  children: [["Mark 10:14", "Let the children come to me, do not hinder them; for to such belongs the kingdom of God."], ["Psalm 139:14", "I praise thee, for thou art fearful and wonderful. Wonderful are thy works!"], ["Proverbs 3:5", "Trust in the Lord with all your heart."], ["Ephesians 6:1", "Children, obey your parents in the Lord, for this is right."], ["Psalm 23:1", "The Lord is my shepherd, I shall not want."], ["John 3:16", "For God so loved the world that he gave his only Son."], ["Philippians 4:13", "I can do all things in him who strengthens me."], ["1 John 4:19", "We love, because he first loved us."]],
};

function splitPool(pool, t1, t2) {
  return [
    { title: t1, verses: pool.slice(0, 5).map(([ref, text]) => V(ref, text)) },
    { title: t2, verses: pool.slice(5, 8).map(([ref, text]) => V(ref, text)) },
  ];
}

function make(slug, component, keyword, theme, tip, pool, t1, t2) {
  return {
    slug,
    component,
    keyword,
    h1: `${keyword}: Scriptures Catholics Pray and Memorize`,
    desc: `${keyword} for Catholics — ${tip} and RSV-CE scriptures for prayer, comfort, and daily faith.`,
    keywords: `${keyword.toLowerCase()}, catholic ${keyword.toLowerCase()}, bible verses ${theme}`,
    intro: `These ${keyword.toLowerCase()} help Catholics bring Scripture into prayer, family life, and seasons of need.`,
    answer: `Key ${keyword.toLowerCase()} include ${tip} and the passages gathered below for meditation and memorization.`,
    sections: splitPool(pool, t1, t2),
  };
}

for (const row of MORE_CATALOG) topics.push(fromCatalog(row));

const rest = [
  make("bible-verses-about-fear", "BibleVersesAboutFear", "Bible Verses About Fear", "fear", "Isaiah 41:10", pools.fear, "Do Not Be Afraid", "Courage in Crisis"),
  make("bible-verses-about-protection", "BibleVersesAboutProtection", "Bible Verses About Protection", "protection", "Psalm 91", pools.protection, "Refuge in the Lord", "Guardian Care"),
  make("bible-verses-about-forgiveness", "BibleVersesAboutForgiveness", "Bible Verses About Forgiveness", "forgiveness", "Matthew 6:14", pools.forgiveness, "Christ Commands Forgiveness", "God's Mercy Toward Us"),
  make("bible-verses-about-prayer", "BibleVersesAboutPrayer", "Bible Verses About Prayer", "prayer", "Matthew 6:9", pools.prayer, "How Jesus Taught Us to Pray", "Pray Without Ceasing"),
  make("bible-verses-about-family", "BibleVersesAboutFamily", "Bible Verses About Family", "family", "Joshua 24:15", pools.family, "Building a Faithful Home", "Love Within the Household"),
  make("bible-verses-about-marriage", "BibleVersesAboutMarriage", "Bible Verses About Marriage", "marriage", "Ephesians 5:25", pools.marriage, "The Covenant of Marriage", "Love That Endures"),
  make("bible-verses-about-friendship", "BibleVersesAboutFriendship", "Bible Verses About Friendship", "friendship", "Proverbs 17:17", pools.friendship, "Loyal Friends", "Choosing Companions Wisely"),
  make("bible-verses-for-anxiety-and-fear", "BibleVersesForAnxietyAndFear", "Bible Verses for Anxiety and Fear", "anxiety fear", "Philippians 4:6", [...pools.fear.slice(0, 4), ...pools.stress.slice(0, 4)], "When Worry and Fear Combine", "Peace in the Storm"),
  make("bible-verses-for-strength-during-hard-times", "BibleVersesForStrengthDuringHardTimes", "Bible Verses for Strength During Hard Times", "hard times", "Isaiah 40:31", pools.hard, "Endurance in Trial", "Christ's Strength in Weakness"),
  make("short-bible-verses-about-strength", "ShortBibleVersesAboutStrength", "Short Bible Verses About Strength", "short strength", "Philippians 4:13", pools.shortStrength, "One-Line Strength Verses", "More Memorize-Ready Verses"),
  make("short-bible-verses-about-love", "ShortBibleVersesAboutLove", "Short Bible Verses About Love", "short love", "1 John 4:8", pools.shortLove, "Short Love Verses", "More Short Love Lines"),
  make("encouraging-bible-verses", "EncouragingBibleVerses", "Encouraging Bible Verses", "encouragement", "Joshua 1:9", pools.encourage, "Verses That Encourage", "More Encouragement"),
  make("inspirational-bible-verses", "InspirationalBibleVerses", "Inspirational Bible Verses", "inspiration", "Micah 6:8", pools.inspire, "Live Inspired by the Word", "Call to Action"),
  make("powerful-bible-verses", "PowerfulBibleVerses", "Powerful Bible Verses", "powerful", "Romans 8:31", pools.powerful, "Verses of Power", "Authority and Victory"),
  make("bible-verses-for-difficult-times", "BibleVersesForDifficultTimes", "Bible Verses for Difficult Times", "difficult times", "Psalm 23", pools.hard, "Comfort in Affliction", "God Near the Broken"),
  make("bible-verses-for-healing-and-recovery", "BibleVersesForHealingAndRecovery", "Bible Verses for Healing and Recovery", "healing recovery", "Jeremiah 30:17", pools.recovery, "Healing and Restoration", "Recovery Day by Day"),
  make("bible-verses-for-sleep", "BibleVersesForSleep", "Bible Verses for Sleep", "sleep", "Psalm 4:8", pools.sleep, "Peaceful Sleep", "Night Trust"),
  make("bible-verses-for-a-broken-heart", "BibleVersesForABrokenHeart", "Bible Verses for a Broken Heart", "broken heart", "Psalm 34:18", pools.broken, "God Near the Brokenhearted", "New Mercy After Pain"),
  make("bible-verses-for-grief", "BibleVersesForGrief", "Bible Verses for Grief", "grief", "John 11:25", pools.grief, "Hope Beyond Death", "Presence in Mourning"),
  make("bible-verses-for-stress", "BibleVersesForStress", "Bible Verses for Stress", "stress", "Matthew 11:28", pools.stress, "Release the Pressure", "Steady Under Load"),
  make("bible-verses-for-success", "BibleVersesForSuccess", "Bible Verses for Success", "success", "Proverbs 16:3", pools.success, "Work Offered to God", "Wisdom Over Hustle"),
  make("bible-verses-for-new-beginnings", "BibleVersesForNewBeginnings", "Bible Verses for New Beginnings", "new beginnings", "Isaiah 43:19", pools.begin, "God Makes All Things New", "Courage to Begin Again"),
  make("bible-verses-for-mothers", "BibleVersesForMothers", "Bible Verses for Mothers", "mothers", "Proverbs 31", pools.mothers, "Honoring Mothers", "Strength for Mothers"),
  make("bible-verses-for-fathers", "BibleVersesForFathers", "Bible Verses for Fathers", "fathers", "Ephesians 6:4", pools.fathers, "Fatherhood and Faith", "Strength and Provision"),
  make("bible-verses-for-children", "BibleVersesForChildren", "Bible Verses for Children", "children", "Mark 10:14", pools.children, "Kid-Friendly Verses", "More for Little Hearts"),
  make("bible-verses-for-women", "BibleVersesForWomen", "Bible Verses for Women", "women", "Proverbs 31:25", pools.women, "Dignity and Strength", "Faith of Holy Women"),
  make("bible-verses-for-men", "BibleVersesForMen", "Bible Verses for Men", "men", "Joshua 1:9", pools.men, "Courage and Integrity", "Leadership and Holiness"),
  make("bible-verses-about-gods-love", "BibleVersesAboutGodsLove", "Bible Verses About God's Love", "god's love", "John 3:16", pools.godsLove, "The Love of God Revealed", "Loved Without Condition"),
  make("bible-verses-about-trusting-god", "BibleVersesAboutTrustingGod", "Bible Verses About Trusting God", "trusting god", "Proverbs 3:5", pools.trust, "Trust With All Your Heart", "Trust When Paths Are Dark"),
  make("bible-verses-about-gods-plan", "BibleVersesAboutGodsPlan", "Bible Verses About God's Plan", "god's plan", "Jeremiah 29:11", pools.plan, "Providence and Purpose", "Walking in His Ways"),
  make("bible-verses-about-happiness", "BibleVersesAboutHappiness", "Bible Verses About Happiness", "happiness", "Psalm 16:11", pools.happiness, "Joy That Lasts", "Happiness Through Holiness"),
  make("bible-verses-about-life", "BibleVersesAboutLife", "Bible Verses About Life", "life", "John 10:10", pools.life, "Abundant and Eternal Life", "Living With Purpose"),
];

topics.push(...rest);

if (topics.length !== 40) {
  console.error("Expected 40, got", topics.length);
  process.exit(1);
}

fs.writeFileSync(
  new URL("./bible-verses-topics-data.json", import.meta.url),
  JSON.stringify(topics, null, 2)
);
console.log("Wrote bible-verses-topics-data.json with", topics.length, "topics");
