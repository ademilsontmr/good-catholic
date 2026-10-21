export interface SaintFact {
  label: string;
  value: string;
}

export interface SaintSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface SaintLifeGuide {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string;
  readTime: string;
  crumb: string;
  lede: string;
  answer: string;
  facts: SaintFact[];
  timeline: { when: string; what: string }[];
  sections: SaintSection[];
  prayer: string;
  related: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

const CBO = "https://catholicbibleonline.com/bible/";
const CBO_HOME = "https://catholicbibleonline.com";

export const SAINT_LIFE_GUIDES: SaintLifeGuide[] = [
  {
    slug: "saint-teresa-of-calcutta",
    title: "Saint Teresa of Calcutta: Life, Feast Day, and Missionaries of Charity",
    h1: "Saint Teresa of Calcutta, the nun the world called Mother Teresa",
    description: "Who Saint Teresa of Calcutta was: the Loreto sister who founded the Missionaries of Charity, her feast on September 5, and what her canonization does and does not promise.",
    keywords: "saint teresa of calcutta, mother teresa, mother teresa feast day september 5, missionaries of charity, mother teresa canonization",
    readTime: "18 min",
    crumb: "Saint Teresa of Calcutta",
    lede: "Anjezë Gonxhe Bojaxhiu left Skopje for the Loreto sisters and spent the rest of her life in India with the people other institutions had already given up on.",
    answer: "Saint Teresa of Calcutta (1910–1997), known as Mother Teresa, founded the Missionaries of Charity in 1950. She received the Nobel Peace Prize in 1979, was beatified in 2003, and was canonized by Pope Francis on September 4, 2016. Her feast is September 5, the day she died. Asking her prayers is not a guarantee of healing or of a solution to poverty.",
    facts: [
      { label: "Born", value: "August 26, 1910, in Skopje" },
      { label: "Died", value: "September 5, 1997, in Calcutta" },
      { label: "Feast", value: "September 5" },
      { label: "Canonized", value: "September 4, 2016, by Pope Francis" },
    ],
    timeline: [
      { when: "1910", what: "Born Anjezë Gonxhe Bojaxhiu in Skopje, to an Albanian Catholic family." },
      { when: "1928", what: "Leaves for the Loreto sisters in Ireland, the congregation that can send her to India." },
      { when: "1931", what: "Professes vows and takes the name Teresa, after Thérèse of Lisieux. She teaches at St. Mary's School in Calcutta." },
      { when: "1946", what: "On the train to Darjeeling, September 10, she understands a second call: to live with the poorest." },
      { when: "1950", what: "The Missionaries of Charity are founded in the Archdiocese of Calcutta, with a fourth vow of free service to the poorest." },
      { when: "1952", what: "Nirmal Hriday, the home for the dying at Kalighat, opens." },
      { when: "1979", what: "She receives the Nobel Peace Prize and uses the lecture to speak for the poor and for the unborn." },
      { when: "1997", what: "Dies in Calcutta on September 5." },
      { when: "2003 and 2016", what: "Beatified by John Paul II on October 19, 2003. Canonized by Francis on September 4, 2016." },
    ],
    sections: [
      {
        heading: "From Skopje to the Loreto convent",
        paragraphs: [
          "She was born to an Albanian family in Skopje, then in the Ottoman Empire and later in Yugoslavia. Her father died when she was a child. At eighteen she left for Ireland to join the Sisters of Loreto, the Institute of the Blessed Virgin Mary, because that congregation could send her to India.",
          "She took the name Teresa at her profession in 1931, after [[/blog/saint-therese-of-lisieux/|Saint Thérèse of Lisieux]], not after the Spanish mystic Teresa of Ávila. For years she taught geography and history at St. Mary's School in Calcutta. The famous work with the dying came later. She was already a sister with a classroom before she was a founder.",
        ],
      },
      {
        heading: "The second call",
        paragraphs: [
          "On September 10, 1946, on a train to Darjeeling for a retreat, she understood that God was asking her to leave the convent school and live among the poorest. She called it a call within a call. She did not walk off the train and open a house the next morning. She waited for permission from her superiors and from Rome.",
          "In 1948 she left Loreto, received medical training, and began working in the slums. The Missionaries of Charity were founded in 1950 in the Archdiocese of Calcutta. Their fourth vow, besides poverty, chastity, and obedience, is free service to the poorest. The blue-bordered sari was a habit, not a costume for the press.",
        ],
      },
      {
        heading: "What she did, and what she did not claim",
        paragraphs: [
          "The houses took in people who were dying, abandoned children, and later people with leprosy and AIDS. The point of the first home, Nirmal Hriday, was that no one should die alone on the street. It was not presented as a modern intensive-care hospital, and critics have been right to ask hard questions about medical standards, pain relief, and money. Canonization is a judgment that she lived a life of heroic charity. It is not a verdict that every decision of the congregation was clinically ideal.",
          `She also lived for decades with a sense that God was absent, described in letters published after her death. That darkness is part of her story. It does not make her a fraud, and it does not make spiritual dryness a goal. She kept the rule, the Mass, and the work. When consolation is gone, the {{${CBO}psalms/|Psalms at Catholic Bible Online}} are still a place to stand.`,
        ],
      },
      {
        heading: "Feast, patron, and how to pray",
        paragraphs: [
          "The Roman calendar keeps her on September 5. A short notice for that date is on the [[/blog/saint-of-the-day/september-5/|saint of the day for September 5]]. She is often asked to pray for the poor, for the dying, and for people who feel useless. None of those requests comes with a promised outcome.",
          `The Church's picture of the works of mercy is already in {{${CBO}matthew/25/|Matthew 25 at Catholic Bible Online}}: feeding, sheltering, visiting. Her congregations tried to do those things in one city and then in many. If you ask her intercession, pair it with one concrete mercy you can do this week.`,
        ],
      },
      {
        heading: "The two healings Rome examined",
        paragraphs: [
          "Beatification and canonization are not popularity contests, and they are not medical certificates for every story told about her. For the beatification, the Church accepted the healing of Monica Besra, a woman in West Bengal with an abdominal tumor. Some of the doctors who had treated her later said the improvement could be explained by the medicine she was already receiving. That dispute is part of the public record. Rome judged the file sufficient for beatification in 2003. A reader can know both facts.",
          "For the canonization, the healing presented was that of Marcilio Haddad Andrino, a Brazilian man with brain abscesses, in 2008. Francis canonized her in 2016. Neither case means that a person who prays to her this week will be cured. They mean the Church, after inquiry, was willing to say that her life was holy and that those two recoveries could be received as signs. If you are sick, keep the treatment. Ask her to pray. Do not fire the physician to prove your faith.",
        ],
      },
      {
        heading: "What the sisters actually promise",
        paragraphs: [
          "A Missionary of Charity vows poverty, chastity, and obedience, and then a fourth promise: free wholehearted service to the poorest of the poor. The habit is a white sari with a blue border. The day is built around the Eucharist, a simple meal, and the work. Contemplative branches and the brothers came later. The founder is not the whole congregation, and the congregation is not a substitute for a parish, a hospital system, or the state.",
          "She also asked that her letters about the long darkness in prayer be destroyed. They were not. The postulator of her cause, Brian Kolodiejchuk, published them after her death. Read them as a record of trial, not as a second gospel, and do not paste her private sentences into advertisements. The useful public fact is that she kept the rule when consolation was gone.",
        ],
      },
    ],
    prayer: "Saint Teresa of Calcutta, you stayed with people the city had stepped over. Pray for the person I keep avoiding, and for the sick who have no one at the bedside. Ask Christ to keep me faithful in a small work, even when I feel nothing. Amen.",
    related: [
      { href: "/blog/saint-therese-of-lisieux/", label: "Saint Thérèse of Lisieux, the saint whose name she took" },
      { href: "/blog/saint-of-the-day/september-5/", label: "September 5, saint of the day" },
      { href: "/blog/catholic-prayer-for-the-sick/", label: "A Catholic prayer for the sick" },
    ],
    faqs: [
      { question: "When is Mother Teresa's feast day?", answer: "September 5, the anniversary of her death in 1997. She was canonized on September 4, 2016. The feast, not the canonization date, is the day the Church remembers her each year." },
      { question: "What is her official name?", answer: "Saint Teresa of Calcutta. Mother Teresa is the name by which the world knew her. She is not Saint Teresa of Ávila and not Saint Thérèse of Lisieux, though she took her religious name from Thérèse." },
      { question: "Did she found the Missionaries of Charity?", answer: "Yes. The congregation began in Calcutta in 1950, after she left the Loreto sisters with her superiors' permission. The sisters, brothers, and priests of the family still serve the poor in many countries." },
      { question: "Does praying to her guarantee help for the poor or the dying?", answer: "No. Intercession is a request, not a contract. Her canonization does not promise a cure, a donation, or a change in a hospital's outcome." },
    ],
  },
  {
    slug: "saint-george",
    title: "Saint George: Martyr, Feast Day, and the Dragon Legend",
    h1: "Saint George, martyr and soldier, without the fairy tale",
    description: "Saint George's feast on April 23, what historians can say about the martyr, and why the dragon belongs to medieval legend rather than to his trial.",
    keywords: "saint george, st george feast day april 23, saint george dragon, patron saint of england, saint george martyr",
    readTime: "18 min",
    crumb: "Saint George",
    lede: "George was honored as a martyr long before any story gave him a dragon. The dragon is a sermon in pictures. The martyrdom is the reason his name is in the calendar.",
    answer: "Saint George is an early Christian martyr, traditionally a soldier killed around 303 in the persecution under Diocletian. His feast is April 23. The fight with a dragon comes from later medieval legend, especially the Golden Legend, and is not a historical event. England, soldiers, and several other peoples claim him as patron. That patronage does not mean he lived in England.",
    facts: [
      { label: "Died", value: "Traditionally about 303, in the Diocletian persecution" },
      { label: "Feast", value: "April 23" },
      { label: "Venerated tomb", value: "Lydda, now Lod" },
      { label: "Remembered as", value: "Martyr; later, patron of soldiers and of England" },
    ],
    timeline: [
      { when: "About 303", what: "Traditional date of his martyrdom in the persecution under Diocletian. No reliable birth record survives." },
      { when: "Late antiquity", what: "A church and a tomb at Lydda, now Lod, are already the center of his cult in both East and West." },
      { when: "About the sixth century", what: "A Latin list associated with Pope Gelasius honors his name while admitting that his deeds are known to God rather than to historians. The exact date and authorship of that list are themselves debated." },
      { when: "Thirteenth century", what: "The Golden Legend spreads the dragon story through Western Europe." },
      { when: "1348", what: "Edward III places the Order of the Garter under George's patronage. England's claim on him is medieval, not ancient." },
      { when: "April 23", what: "The feast in both Eastern and Western calendars. If it falls in Holy Week or Easter Week, a local calendar may transfer the celebration." },
    ],
    sections: [
      {
        heading: "What can be said with confidence",
        paragraphs: [
          "George's cult is ancient in both East and West. By the late fourth and fifth centuries, churches and pilgrims already knew his name. The place most steadily tied to him is Lydda, also called Diospolis, in the Holy Land, where a tomb was venerated. A birthplace in Cappadocia is traditional and not secure. Treat confident biographies that give his parents' names and a full military career as later storytelling.",
          `The early Church remembered him as a martyr who refused to renounce Christ. That is the fact the liturgy still celebrates. The [[/blog/saint-of-the-day/april-23/|saint of the day for April 23]] is the short liturgical notice. This page is the longer distinction between martyr and myth. For the Gospel of that courage, stay with {{${CBO}matthew/10/|Matthew 10 at Catholic Bible Online}}.`,
        ],
      },
      {
        heading: "The dragon is a legend",
        paragraphs: [
          "The story of George killing a dragon to save a princess became famous in the West through the Golden Legend, compiled in the thirteenth century. It is a moral tale: the saint stands between a town and a devouring power, and the people are called to baptism afterward. It is not a report from a Roman courtroom.",
          "You can enjoy the image on a banner or a pub sign and still tell a child the truth. George did not ride through medieval England. England adopted him centuries later. His cross on a flag is a national symbol with a Christian origin. It is not proof that the martyr was English.",
        ],
      },
      {
        heading: "Patron of soldiers, not a charm for victory",
        paragraphs: [
          "Soldiers, scouts, and several countries ask his prayers. The Church allows that devotion. She does not teach that a battle, a game, or a dangerous job will go safely because his name was said. [[/blog/saint-michael-archangel/|Saint Michael the Archangel]] is a different figure: an angel, not a human martyr. Do not fold the two into one protector.",
          `The Gospel George is believed to have died for is the same one in {{${CBO}matthew/10/|Matthew 10}}, where Jesus tells the disciples not to fear those who kill the body. That is the useful text on his feast, not a retelling of the dragon.`,
        ],
      },
      {
        heading: "How England got a Palestinian martyr",
        paragraphs: [
          "George's cult traveled with soldiers and pilgrims, especially after the crusades, when Lydda was on the road to Jerusalem. By the fourteenth century the English crown had chosen him. Edward III put the Order of the Garter under his name in 1348. The red cross on a white field became the flag of England. None of that required George to have set foot in Britain, and there is no early evidence that he did.",
          "A list transmitted with the name of Pope Gelasius, and probably not written by him in the form we have, already warned the Latin Church that some honored martyrs, George among them, are known by name more than by reliable acts. That is still the right standard. Celebrate the martyr. Decline the novel.",
        ],
      },
    ],
    prayer: "Saint George, martyr of Christ, pray for people who have to tell the truth when it will cost them. Pray for soldiers and for anyone who is afraid. Ask the Lord to keep us from confusing courage with violence. Amen.",
    related: [
      { href: "/blog/saint-of-the-day/april-23/", label: "April 23, saint of the day" },
      { href: "/blog/saint-michael-archangel/", label: "Saint Michael the Archangel, a different kind of protector" },
      { href: "/blog/saint-sebastian/", label: "Saint Sebastian, another martyr later claimed by soldiers" },
    ],
    faqs: [
      { question: "Did Saint George kill a dragon?", answer: "No. The dragon story is a medieval legend, widely spread by the Golden Legend in the thirteenth century. George is honored as a martyr, not as a knight from a romance." },
      { question: "When is Saint George's feast?", answer: "April 23. If the date falls in Holy Week or Easter Week, a local calendar may move the celebration. The date itself does not change." },
      { question: "Is he the patron of England?", answer: "He is the traditional patron of England, and his red cross is on the flag of England. He was not an Englishman. The patronage came long after his death." },
      { question: "Can soldiers ask his prayers before a deployment?", answer: "Yes. That is an old and legitimate devotion. It does not promise survival, victory, or a safe return." },
    ],
  },
  {
    slug: "saint-john-paul-ii",
    title: "Saint John Paul II: Feast Day, Canonization, and How Catholics Pray with Him",
    h1: "Saint John Paul II: the feast, the canonization, and the prayer",
    description: "Saint John Paul II's feast on October 22, his beatification and canonization, and how to pray with him. The full story of the pontificate is on the pope biography.",
    keywords: "saint john paul ii, john paul ii feast day october 22, john paul ii canonization, totus tuus, karol wojtyla saint",
    readTime: "18 min",
    crumb: "Saint John Paul II",
    lede: "Karol Wojtyła is already in this site's pope biography. This page is the saint's day: when the Church keeps him, why the date is October 22, and what Catholics are actually doing when they ask his prayers.",
    answer: "Saint John Paul II was pope from October 16, 1978, until his death on April 2, 2005. The Church keeps his feast on October 22, the anniversary of the Mass that inaugurated his ministry, not the day he died. Benedict XVI beatified him on May 1, 2011. Francis canonized him on April 27, 2014, together with John XXIII. A prayer to him does not guarantee healing or a change in world events.",
    facts: [
      { label: "Born", value: "May 18, 1920, in Wadowice, Poland" },
      { label: "Pope", value: "October 16, 1978 – April 2, 2005" },
      { label: "Feast", value: "October 22" },
      { label: "Canonized", value: "April 27, 2014, by Pope Francis" },
    ],
    timeline: [
      { when: "1920–1941", what: "Born in Wadowice. His mother dies when he is a child, his brother Edmund, a doctor, dies in 1932, and his father dies in 1941 during the occupation." },
      { when: "1939–1946", what: "Works in a quarry and a chemical plant, acts with an underground theater, and studies in the secret seminary of Cardinal Sapieha. Ordained on November 1, 1946." },
      { when: "1958–1978", what: "Auxiliary bishop, then archbishop of Kraków, then cardinal. Elected pope on October 16, 1978." },
      { when: "October 22, 1978", what: "The Mass inaugurating his ministry. He tells the square not to be afraid. This date, not the day of his death, becomes the feast." },
      { when: "May 13, 1981", what: "Shot in St. Peter's Square on the feast of Our Lady of Fatima. He later visits the gunman in prison." },
      { when: "1979–1992", what: "The Wednesday catecheses now called the theology of the body, and, in 1992, the Catechism of the Catholic Church promulgated under him." },
      { when: "April 2, 2005", what: "Dies in the Vatican. The funeral draws a vast pilgrimage. The biography of the pontificate is on the pope page, not repeated here." },
      { when: "2011 and 2014", what: "Beatified May 1, 2011. Canonized April 27, 2014, together with John XXIII." },
    ],
    sections: [
      {
        heading: "Where to read the life",
        paragraphs: [
          "The pontificate, the travels, the teaching, and the attempt on his life belong in the [[/blog/pope-john-paul-ii/|biography of Pope John Paul II]]. Repeating that book here would only split one story across two URLs. What belongs on a saint's page is the cult: the feast, the motto, and the way ordinary Catholics speak to him now.",
          `A few anchors are enough. He was ordained a priest on November 1, 1946, after a youth spent in occupied Poland, including clandestine study. He became archbishop of Kraków and then pope. At the inauguration Mass on October 22, 1978, he told the crowd not to be afraid. That sentence is why the feast uses this date rather than April 2. The same counsel runs through the Gospel: {{${CBO}john/14/|John 14 at Catholic Bible Online}} keeps Christ's peace for a Church that is anxious.`,
        ],
      },
      {
        heading: "Why October 22",
        paragraphs: [
          "Rome often keeps a pope-saint on a day tied to his ministry rather than on a crowded Easter date. October 22 was free enough, and it was already his day in the memory of the people who had stood in the square. The short notice is the [[/blog/saint-of-the-day/october-22/|saint of the day for October 22]].",
          "He was beatified on May 1, 2011, and canonized on April 27, 2014, in the same ceremony as John XXIII. Those are historical dates. They are not extra feasts you are required to keep at home. The memorial in the calendar is October 22.",
        ],
      },
      {
        heading: "Totus Tuus, the Rosary, and Divine Mercy",
        paragraphs: [
          "Totus Tuus, \"entirely yours,\" was his episcopal motto, taken from the Marian consecration associated with St. Louis de Montfort. It explains the intensity of his devotion to Mary. It is not a magic formula.",
          `He proposed the Luminous Mysteries of the Rosary in 2002. The pattern is in the [[/blog/how-to-pray-the-rosary-complete-guide/|guide to praying the Rosary]]. He also canonized [[/blog/saint-faustina-kowalska/|Saint Faustina Kowalska]] on April 30, 2000, and established Divine Mercy Sunday. If you want his spirit in one afternoon, pray the Rosary and read a Gospel chapter at {{${CBO_HOME}|Catholic Bible Online}}. You do not need a second novena invented for this page.`,
        ],
      },
      {
        heading: "What belongs in a saint's cult, not in a second biography",
        paragraphs: [
          "The assassination attempt on May 13, 1981, the feast of Our Lady of Fatima, and his visit to Mehmet Ali Ağca in prison, are part of why people pray to him about fear and forgiveness. The Wednesday audiences from 1979 to 1984, gathered later as the theology of the body, and the Catechism of 1992, are part of why people pray to him about marriage and doctrine. Those are doors into the [[/blog/pope-john-paul-ii/|biography]]. This page will not retell Kraków, the conclave, or the travels.",
          "The healing examined for his beatification was that of Sister Marie Simon-Pierre, a French religious with Parkinson's disease. The healing examined for his canonization was that of Floribeth Mora Díaz of Costa Rica, after a brain aneurysm. The Church judged each file sufficient for that step. Neither judgment is a promise that Parkinson's or an aneurysm will end because his name was said. Pray, and stay with the doctors.",
        ],
      },
    ],
    prayer: "Saint John Paul II, you told a frightened century not to be afraid. Pray for the person I love who has left the Church, and for me when I would rather hide. Ask Christ to make the truth kinder than my fear, and Mary to keep me entirely his. Amen.",
    related: [
      { href: "/blog/pope-john-paul-ii/", label: "The full biography of Pope John Paul II" },
      { href: "/blog/saint-of-the-day/october-22/", label: "October 22, saint of the day" },
      { href: "/blog/saint-faustina-kowalska/", label: "Saint Faustina and Divine Mercy Sunday" },
    ],
    faqs: [
      { question: "When is Saint John Paul II's feast day?", answer: "October 22. That is the anniversary of the 1978 Mass inaugurating his papal ministry. He died on April 2, 2005. April 2 is not the feast in the general Roman calendar." },
      { question: "When was he canonized?", answer: "April 27, 2014, by Pope Francis, together with John XXIII. He had been beatified by Benedict XVI on May 1, 2011." },
      { question: "Is this the same page as the pope biography?", answer: "No. The biography covers the pontificate. This page covers the feast, the canonization, and prayer. Read the biography when you want the history of the reign." },
      { question: "Does a prayer to him promise a healing?", answer: "No. Reports of healings were examined in his cause, as they are for other saints. A prayer today is a request. It is not a guarantee of health or of any other result." },
    ],
  },
  {
    slug: "saint-benedict",
    title: "Saint Benedict: Life, Rule, Feast Day, and the Medal",
    h1: "Saint Benedict of Nursia, father of Western monks",
    description: "Saint Benedict's life, the Rule, the July 11 feast, and how the St. Benedict medal differs from the man who lived at Monte Cassino.",
    keywords: "saint benedict, st benedict feast day july 11, rule of saint benedict, monte cassino, st benedict medal",
    readTime: "18 min",
    crumb: "Saint Benedict",
    lede: "Benedict left a student life in Rome, lived as a hermit, and then wrote a Rule that is still the backbone of Western monasticism. The medal with his name came centuries later.",
    answer: "Saint Benedict was born at Nursia, now Norcia, around 480, and died at Monte Cassino around 547. His feast on the general Roman calendar is July 11. Benedictine communities also keep March 21, the traditional day of his death. The main early account of his life is Book II of the Dialogues of Pope Gregory the Great, written a generation later, so some of the famous episodes are hagiography. He is a patron of Europe. The medal is a later sacramental, not an object from his lifetime.",
    facts: [
      { label: "Born", value: "About 480, at Nursia (Norcia), Italy" },
      { label: "Died", value: "About 547, at Monte Cassino" },
      { label: "Feast", value: "July 11; Benedictines also keep March 21" },
      { label: "Known for", value: "The Rule of Saint Benedict" },
    ],
    timeline: [
      { when: "About 480", what: "Born at Nursia, with his twin, Scholastica, according to the later tradition Gregory records." },
      { when: "Early sixth century", what: "Leaves his studies in Rome, lives in a cave at Subiaco, and then gathers disciples." },
      { when: "About 529", what: "Settles at Monte Cassino and writes the Rule that will shape Western monasteries." },
      { when: "About 547", what: "Dies at Monte Cassino. March 21 is the traditional anniversary. Gregory tells the life a generation later, in the Dialogues." },
      { when: "Seventh century and after", what: "Lombards destroy the abbey. It is rebuilt, destroyed again in the Second World War, and rebuilt once more. Both Fleury in France and Monte Cassino have claimed his relics." },
      { when: "1964", what: "Paul VI names him patron of Europe. Later popes set other saints beside him as patrons of the same continent." },
      { when: "July 11", what: "The general Roman calendar keeps him on this day so the memorial is not lost in Lent. Benedictine houses also keep March 21." },
    ],
    sections: [
      {
        heading: "Nursia, Subiaco, Monte Cassino",
        paragraphs: [
          "Gregory the Great says Benedict was sent to Rome for studies and left because the city was corrupting the students around him. He lived for a time in a cave at Subiaco. Disciples gathered. He eventually moved to Monte Cassino, on a height between Rome and Naples, and there the community that would make his name took its lasting shape. The great abbey on that hill has been destroyed and rebuilt more than once. The hill, not a particular surviving stone, is the place.",
          "His twin sister, Scholastica, is a saint in her own right. Gregory tells of a last conversation between them in which a storm kept Benedict from returning to the monastery. Treat Gregory as a holy witness who is also a storyteller. He did not write a modern biography with footnotes.",
        ],
      },
      {
        heading: "The Rule, and the motto he did not write",
        paragraphs: [
          `The Rule of Benedict is a practical document: a superior, common prayer, work, hospitality, correction, and a ranking of goods in which nothing is preferred to the love of Christ. It assumes the {{${CBO}psalms/|Psalms at Catholic Bible Online}}. The Divine Office that later monks prayed for centuries grew in that soil. Lay people who want the hours now can start with the [[/blog/divine-office-laity/|guide to the Divine Office for the laity]].`,
          "Ora et labora, \"pray and work,\" is a later Benedictine motto. It is a fair summary of the Rule's balance. It is not a sentence Benedict placed at the head of a chapter. Quoting it as if it were his autograph misleads people. The July 11 memorial is explained briefly on the [[/blog/saint-of-the-day/july-11/|saint of the day for July 11]].",
        ],
      },
      {
        heading: "The medal is not the man",
        paragraphs: [
          "The [[/blog/saint-benedict-medal/|Saint Benedict medal]] carries letters that abbreviate prayers against evil. It is a sacramental: a blessed object meant to turn the mind to God. It developed in the medieval and early modern cult. Benedict did not design it, and wearing it is not a contract of protection.",
          "Paul VI named Benedict patron of Europe in 1964, in the letter Pacis nuntius. That title honors the monasteries' role in learning, farming, and prayer across the continent. It does not make him a political program.",
        ],
      },
      {
        heading: "How to read the Rule without pretending you are a monk",
        paragraphs: [
          `The Rule has a prologue and seventy-three short chapters. It assumes an abbot, a stable community, and the psalms sung in common. The chapter on humility has twelve steps. The chapter on guests says that every guest is to be received as Christ — the same logic as {{${CBO}matthew/25/|Matthew 25 at Catholic Bible Online}}. The closing chapter tells the brothers to prefer nothing to Christ. Those three ideas are enough for a lay person to start. The rest is a monastic law, not a self-help plan.`,
          "Gregory's Dialogues add the scenes people remember: a cup that breaks when Benedict blesses it, a raven that carries off poisoned bread, Scholastica's storm. Quote them as Gregory's stories, written decades after the death, for readers who already believed. Do not quote them as if a notary wrote them down in the cave. And do not let the medal's later Latin verses, which the [[/blog/saint-benedict-medal/|medal guide]] explains, migrate backward into Benedict's mouth.",
        ],
      },
    ],
    prayer: "Saint Benedict, you left a noisy education for a rule of prayer and work. Pray for the house I live in, that it may be hospitable and honest. Ask Christ to steady anyone who is starting again after a failure. Amen.",
    related: [
      { href: "/blog/saint-benedict-medal/", label: "What the Saint Benedict medal is, and what it is not" },
      { href: "/blog/divine-office-laity/", label: "How lay people can pray the Divine Office" },
      { href: "/blog/saint-of-the-day/july-11/", label: "July 11, saint of the day" },
    ],
    faqs: [
      { question: "When is Saint Benedict's feast day?", answer: "July 11 on the general Roman calendar, so the memorial does not fall in Lent. Monasteries that follow Benedict also keep March 21, the traditional anniversary of his death." },
      { question: "Did Benedict write \"pray and work\"?", answer: "The motto ora et labora sums up the Rule. It is not a line Benedict wrote as a slogan. The Rule itself arranges prayer, work, reading, and silence." },
      { question: "Is the St. Benedict medal from his lifetime?", answer: "No. It is a later sacramental linked to his cult. Blessing and wearing it can be a devout practice. It does not guarantee physical safety." },
      { question: "Are the miracle stories in Gregory's Dialogues dogma?", answer: "No. The Church receives Gregory's Life as the classic early portrait. Particular episodes, such as the cup that broke or the raven, are hagiography. You may read them as Gregory told them without treating every detail as a court record." },
    ],
  },
  {
    slug: "saint-lucy",
    title: "Saint Lucy of Syracuse: Feast Day, Eyes, and the Real Martyr",
    h1: "Saint Lucy of Syracuse, martyr of December 13",
    description: "Saint Lucy's feast on December 13, the Syracuse martyrdom, and why the story of her eyes is a later legend rather than the earliest account.",
    keywords: "saint lucy, st lucy feast day december 13, santa lucia, saint lucy eyes, patron saint of eyes",
    readTime: "18 min",
    crumb: "Saint Lucy",
    lede: "Lucy of Syracuse died for Christ in the early fourth century. The eyes on a plate came later. Light is in her name either way.",
    answer: "Saint Lucy was a martyr of Syracuse in Sicily, traditionally in 304 during the Diocletian persecution. Her feast is December 13. Her name is linked to the Latin word for light, and she is asked to pray for the blind and for people with eye disease. The story that her eyes were gouged out, or that she removed them herself, is a later legend. It is not the earliest account of her death. A prayer to her does not promise restored sight.",
    facts: [
      { label: "City", value: "Syracuse, Sicily" },
      { label: "Died", value: "Traditionally 304, under Diocletian" },
      { label: "Feast", value: "December 13" },
      { label: "Invoked for", value: "The blind and diseases of the eyes, as a devotion, not a cure" },
    ],
    timeline: [
      { when: "Early fourth century", what: "A virgin martyr of Syracuse, traditionally in 304. Her name enters the Roman prayer of the Mass and stays there." },
      { when: "Fifth and sixth centuries", what: "Written passions appear. They link her to the shrine of Agatha and name a judge. Treat them as legend built on a real cult, not as a trial transcript." },
      { when: "Middle Ages", what: "Images begin to show her holding her eyes. That symbol is later than the martyrdom." },
      { when: "After the crusades", what: "A tradition says her relics moved from Sicily toward Constantinople and then to Venice. The claim is a history of devotion, not a settled archaeological proof." },
      { when: "December 13", what: "Her feast. In the old Julian calendar the date sat closer to the winter solstice, which is one reason northern Europe attached a festival of light to her name." },
    ],
    sections: [
      {
        heading: "A Sicilian martyr",
        paragraphs: [
          "Lucy's cult in Syracuse is old. Her name is in the Roman Canon, the first Eucharistic Prayer, in the list of martyrs the Roman Church has named at the altar for centuries. That is a stronger witness than a late legend about a plate. She was a young woman who would not abandon her consecration or sacrifice to the gods. The details of the trial vary from one passion to another. The martyrdom does not.",
          "December 13 falls near the darkest part of the year in the north, which is one reason her feast gathered customs about light. In Sweden and parts of Scandinavia, a daughter of the house wears a crown of candles. That is a cultural custom attached to her day. It is not a rite the Church requires, and it does not make Lucy Scandinavian.",
        ],
      },
      {
        heading: "The eyes",
        paragraphs: [
          "Medieval images show Lucy holding two eyes. One legend says a suitor admired them and she tore them out. Another says her persecutors did. Neither scene is in the oldest layer of her story. The image teaches that she gave away what the world wanted, and that Christ is the light she would not trade. It is a bad source for a medical history.",
          `People still ask her prayers when they are losing their sight. That is allowed and often consoling. Take the appointment with the ophthalmologist. The [[/blog/saint-of-the-day/december-13/|saint of the day for December 13]] will not replace it, and neither will this page. Pair the prayer with the [[/blog/catholic-prayer-for-the-sick/|prayer for the sick]] and, if you want Scripture beside the devotion, open {{${CBO_HOME}|Catholic Bible Online}}.`,
        ],
      },
      {
        heading: "How to keep the feast",
        paragraphs: [
          `Read the Gospel of the day and, if you want a verse that matches her name, stay with the light sayings in {{${CBO}john/8/|John 8 at Catholic Bible Online}}, where Jesus calls himself the light of the world. Lucy points to him. She is not a second source of light.`,
          "A simple household custom is enough: one candle at supper, her name in the prayer, and no lecture about the legend unless a child asks. If a child asks, say the eyes are a story people told later, and the true part is that she died rather than deny Christ.",
        ],
      },
      {
        heading: "Why her name is still said at Mass",
        paragraphs: [
          "In the Roman Canon, the first Eucharistic Prayer, the priest names a list of martyrs after the consecration: Felicity, Perpetua, Agatha, Lucy, Agnes, Cecilia, Anastasia, and others. Lucy is not there because of a medieval painting. She is there because the church of Rome was already commemorating her when that prayer took the shape we still use. That is a stronger argument for her historical cult than any passion written centuries later.",
          "The later acts give her a mother, Eutychia, healed at the tomb of Agatha in Catania, and a judge, Paschasius, who wants Lucy married and then wants her dead. Use those names only with the label 'according to the later passion.' Agatha's own feast is February 5. The two Sicilian virgins are neighbors in devotion. They are not the same story.",
        ],
      },
    ],
    prayer: "Saint Lucy, martyr of Syracuse, pray for people who are losing their sight and for the doctors who care for them. Ask Christ, the light of the world, to keep us from loving any gift more than him. Amen.",
    related: [
      { href: "/blog/saint-of-the-day/december-13/", label: "December 13, saint of the day" },
      { href: "/blog/catholic-prayer-for-the-sick/", label: "A Catholic prayer for the sick" },
      { href: "/blog/saint-sebastian/", label: "Saint Sebastian, another early martyr whose legend grew later" },
    ],
    faqs: [
      { question: "When is Saint Lucy's feast day?", answer: "December 13. That is her memorial in the Roman calendar and the day of the Swedish Lucia custom." },
      { question: "Did she really lose her eyes?", answer: "The earliest accounts do not say so. The eyes on a dish are a later symbol, connected to her name and to her patronage. Honor the martyr without teaching the legend as fact." },
      { question: "Is she the patron of eye disease?", answer: "She is traditionally asked to pray for the blind and for people with diseases of the eyes. That devotion does not promise a cure." },
      { question: "Why do some countries crown a girl with candles?", answer: "In Scandinavia, December 13 became a festival of light in midwinter, attached to Lucy's name. It is a regional custom, not a universal Catholic obligation." },
    ],
  },
  {
    slug: "saint-charbel-makhlouf",
    title: "Saint Charbel Makhlouf: The Maronite Hermit, Feast, and Prayer",
    h1: "Saint Charbel Makhlouf, the Maronite hermit of Annaya",
    description: "Saint Charbel Makhlouf's life as a Maronite monk and hermit, his feast on July 24, and why reported healings are not a promise of a cure.",
    keywords: "saint charbel, st charbel makhlouf, charbel feast day july 24, annaya, maronite saint charbel",
    readTime: "18 min",
    crumb: "Saint Charbel Makhlouf",
    lede: "Youssef Makhlouf left a Lebanese mountain village, became a Maronite monk named Charbel, and spent the last decades of his life in a hermitage. The Church canonized him. She did not turn his intercession into a system for obtaining miracles.",
    answer: "Saint Charbel Makhlouf was born Youssef Antoun Makhlouf on May 8, 1828, in Bekaa Kafra, Lebanon, and died on December 24, 1898, at the hermitage of Saints Peter and Paul in Annaya. He was a priest of the Lebanese Maronite Order. Paul VI beatified him on December 5, 1965, and canonized him on October 9, 1977. His feast is July 24. He is widely asked to pray for the sick. A prayer does not guarantee healing.",
    facts: [
      { label: "Born", value: "May 8, 1828, Bekaa Kafra, Lebanon" },
      { label: "Died", value: "December 24, 1898, at Annaya" },
      { label: "Feast", value: "July 24" },
      { label: "Church", value: "Maronite Catholic, in communion with Rome" },
    ],
    timeline: [
      { when: "1828", what: "Born Youssef Antoun Makhlouf in Bekaa Kafra. His father dies while the boy is still small." },
      { when: "1851–1853", what: "Enters the Lebanese Maronite Order, takes the name Charbel after an ancient martyr of Antioch, and makes solemn vows." },
      { when: "July 23, 1859", what: "Ordained a priest. He celebrates the Maronite Divine Liturgy, not the Latin Mass." },
      { when: "1875", what: "His superiors send him to the hermitage of Saints Peter and Paul at the monastery of St. Maron, Annaya. He stays twenty-three years." },
      { when: "December 16–24, 1898", what: "A stroke during the Liturgy on December 16. Death on Christmas Eve." },
      { when: "1965 and 1977", what: "Paul VI beatifies him on December 5, 1965, as the Council is ending, and canonizes him on October 9, 1977." },
      { when: "July 24", what: "The memorial kept by Maronites and by Latin calendars that include him." },
    ],
    sections: [
      {
        heading: "A Maronite, not a figure from another Church",
        paragraphs: [
          "The Maronite Church is an Eastern Catholic Church. Charbel was not a Latin friar and not an Orthodox monk separated from Rome. He entered the Lebanese Maronite Order, took the name Charbel after an ancient martyr of Antioch, and was ordained a priest in 1859. In 1875 his superiors allowed him to move to the hermitage attached to the monastery of St. Maron at Annaya.",
          `The hermit's day was the monastic office, the Divine Liturgy, and work. Visitors later described a man who spoke little. That silence is the useful part of his example. The search for a spectacular sign is the part that goes wrong. The Gospel that fits a closed cell better than a rumor of miracles is {{${CBO}matthew/6/|Matthew 6 at Catholic Bible Online}}, where Jesus tells the disciple to pray in secret.`,
        ],
      },
      {
        heading: "Death, the tomb, and canonization",
        paragraphs: [
          "On December 16, 1898, he suffered a stroke while celebrating the Divine Liturgy. He died on Christmas Eve, eight days later. In the years after his burial, people reported an unusual state of the body and then healings at the tomb. The Church examined the cause over decades. Beatification in 1965, at the end of the Second Vatican Council, and canonization in 1977 mean Rome judged that he lived a holy life and that the signs studied in the cause were sufficient for those steps. They do not mean every story told in a pamphlet is reliable.",
          "July 24 is the memorial you will find on Latin calendars that include him, and it is kept by Maronites. The [[/blog/saint-of-the-day/july-24/|saint of the day for July 24]] is the short page. If you visit Annaya, you are visiting a monastery, not a machine.",
        ],
      },
      {
        heading: "Asking his prayers when someone is ill",
        paragraphs: [
          "People pray to Charbel when medicine has little left to offer, and also when medicine is working and they are simply afraid. Both are honest. Bring the illness to God, ask Charbel to pray with you, and follow the treatment a physician has actually recommended. Refusing care in order to force a miracle is not devotion.",
          `A short visit to the Blessed Sacrament, or the [[/blog/catholic-prayer-for-the-sick/|prayer for the sick]] already on this site, is enough of a form. You do not need a chain letter, a number of candles, or a promise that the favor will come if the prayer is forwarded. If you want a psalm beside the petition, open the {{${CBO}psalms/|Psalms at Catholic Bible Online}}.`,
        ],
      },
      {
        heading: "Oil from the lamp is not a sacrament",
        paragraphs: [
          "At Annaya, people take oil from the lamp at his tomb. In Maronite devotion that oil is a sacramental: a blessed sign meant to accompany prayer. It is not the sacrament of the Anointing of the Sick, which only a priest gives, and it is not a drug. Rubbing it on a wound instead of going to a clinic is a misunderstanding of both medicine and the Church.",
          "The healings submitted for his beatification and canonization were studied by physicians and by the Congregation for the Causes of Saints. Devotional magazines name more cures than that file contains. Repeat only what you can tie to the cause, and even then say 'the Church judged this sufficient for canonization,' not 'this will happen again if you pray correctly.' His silence is the part of his life you can imitate. His tomb is not a machine.",
        ],
      },
    ],
    prayer: "Saint Charbel, you hid in a hermitage and the Church still found you. Pray for the person who is ill and for the people caring for them. Ask Christ to give healing if that is his will, and courage if the illness remains. Amen.",
    related: [
      { href: "/blog/saint-of-the-day/july-24/", label: "July 24, saint of the day" },
      { href: "/blog/catholic-prayer-for-the-sick/", label: "A Catholic prayer for the sick" },
      { href: "/blog/saint-benedict/", label: "Saint Benedict, another monk whose silence shaped a rule" },
    ],
    faqs: [
      { question: "When is Saint Charbel's feast day?", answer: "July 24. He died on December 24, 1898. The memorial used in the calendar is July 24, not Christmas Eve." },
      { question: "Was he Catholic?", answer: "Yes. He was a priest of the Maronite Church, an Eastern Catholic Church in full communion with the pope. He is not a saint of a separated Eastern Orthodox church." },
      { question: "Did his body remain incorrupt?", answer: "Unusual preservation was reported after his burial and became part of the public story of the tomb. Treat it as a report examined in his cause, not as a phenomenon you must verify or a proof you can use against someone who is sick." },
      { question: "Will he heal me if I pray for nine days?", answer: "No schedule of days forces a cure. A novena is a way of persevering in prayer. The outcome remains with God, and ordinary medical care still matters." },
    ],
  },
  {
    slug: "saint-francis-xavier",
    title: "Saint Francis Xavier: Jesuit Missionary, Feast Day, and Death off China",
    h1: "Saint Francis Xavier, the Jesuit who died waiting for China",
    description: "Saint Francis Xavier's life from Navarre to Goa and Japan, his death on December 3, 1552, and his patronage of the missions.",
    keywords: "saint francis xavier, st francis xavier feast december 3, francis xavier goa, jesuit missionary, patron of missions",
    readTime: "18 min",
    crumb: "Saint Francis Xavier",
    lede: "Francisco de Xavier y Jasso left a castle in Navarre, helped found the Jesuits, and spent the last decade of his life on the sea routes between India, Japan, and the coast of China.",
    answer: "Saint Francis Xavier was born on April 7, 1506, at the castle of Xavier in Navarre, and died on December 3, 1552, on Shangchuan Island, off the coast of China, before he could enter the mainland. He was one of the first companions of Ignatius of Loyola. Gregory XV canonized him on March 12, 1622. His feast is December 3. Pius XI later named him, with Saint Thérèse of Lisieux, a patron of the missions. Early reports of huge numbers of baptisms should be read with historical caution.",
    facts: [
      { label: "Born", value: "April 7, 1506, Xavier, Navarre" },
      { label: "Died", value: "December 3, 1552, Shangchuan Island" },
      { label: "Feast", value: "December 3" },
      { label: "Canonized", value: "March 12, 1622, with Ignatius of Loyola" },
    ],
    timeline: [
      { when: "1506", what: "Born on April 7 at the castle of Xavier in Navarre, in a noble house that would lose power when Castile took the kingdom." },
      { when: "1525–1534", what: "Studies in Paris at Sainte-Barbe, shares rooms with Peter Faber and then with Ignatius, and on August 15, 1534, vows at Montmartre with the first companions." },
      { when: "1537", what: "Ordained in Venice on June 24. The road to Jerusalem is closed by war, so the companions offer themselves to the pope." },
      { when: "1541–1542", what: "Leaves Lisbon on April 7, 1541, and reaches Goa on May 6, 1542, after a year at sea." },
      { when: "1549–1551", what: "In Japan, beginning at Kagoshima, with a Japanese companion who had already been baptized." },
      { when: "December 3, 1552", what: "Dies of fever on Shangchuan Island, in sight of a China he is not allowed to enter." },
      { when: "1622 and 1927", what: "Canonized on March 12, 1622. In 1927 Pius XI names him, with Thérèse of Lisieux, a patron of the missions." },
    ],
    sections: [
      {
        heading: "Paris, Montmartre, and the Society of Jesus",
        paragraphs: [
          "Xavier went to the University of Paris and shared lodgings with Ignatius of Loyola, who was older and impossible to shake off. On August 15, 1534, Ignatius and six companions, Xavier among them, vowed poverty and a pilgrimage to Jerusalem at Montmartre. When war blocked the Holy Land, they put themselves at the disposal of the pope. The Society of Jesus grew from that decision. Xavier was ordained a priest in 1537.",
          "He is not [[/blog/saint-frances-xavier-cabrini/|Saint Frances Xavier Cabrini]]. She was a nineteenth-century Italian sister who took Xavier's name and worked among Italian immigrants in the United States. The names collide in search results. The lives do not.",
        ],
      },
      {
        heading: "India, Japan, and the island where he died",
        paragraphs: [
          "John III of Portugal asked Ignatius for men for the East. Xavier left Lisbon in 1541 and reached Goa in 1542. He worked along the Fishery Coast, in Malacca, and in the Moluccas, then sailed to Japan in 1549 and spent about two years there. He returned toward India convinced that Japan would not be understood until China was. He died of fever on Shangchuan in December 1552, looking at a coast he was not allowed to enter.",
          "His body was later taken to Goa, where it is kept in the Basilica of Bom Jesus. Letters he wrote on the road are among the most vivid missionary documents of the sixteenth century. They also show a man of his time: impatient, sometimes severe about local religions, and capable of tenderness toward catechists. Do not modernize him into a bland ambassador, and do not use him as an excuse for contempt.",
        ],
      },
      {
        heading: "Numbers, patronage, and the feast",
        paragraphs: [
          `Older lives say he baptized tens of thousands, sometimes hundreds of thousands. Those figures come from early Jesuit reports and from later admiration. Historians treat them cautiously because mass baptisms, secondhand counts, and pious inflation are easy to mix. The secure point is that he traveled farther than almost any priest of his generation and left communities that lasted. The commission he obeyed is the one in {{${CBO}matthew/28/|Matthew 28 at Catholic Bible Online}}: go, teach, baptize.`,
          "His feast is December 3, the day he died. See the [[/blog/saint-of-the-day/december-3/|saint of the day for December 3]]. In the twentieth century Pius XI named him a patron of foreign missions, together with [[/blog/saint-therese-of-lisieux/|Saint Thérèse of Lisieux]], who never left her Carmel. The pairing is deliberate: one went, one prayed. Both are patrons. Neither replaces the Church's ordinary work of teaching and baptism.",
        ],
      },
      {
        heading: "The body in Goa, the arm in Rome, the novena in March",
        paragraphs: [
          "The body was carried from Shangchuan to Malacca and then to Goa, where the Basilica of Bom Jesus still keeps it. A relic of his right arm was later sent to the Church of the Gesù in Rome, the mother church of the Jesuits. Those are pilgrimage facts. They are not talismans. Standing in front of either shrine does not purchase a vocation or a safe voyage.",
          `Jesuits also keep a Novena of Grace from March 4 to March 12, ending on the anniversary of the 1622 canonization. It began as a devotion inside the Society after a reported recovery in the seventeenth century. You may pray it. It is not a law for the whole Church, and it does not obligate God to repeat that recovery. The letters Xavier wrote, impatient and sometimes severe about the religions he met, are a better way to meet him than a list of favors. Read the Gospel he carried with him at {{${CBO_HOME}|Catholic Bible Online}}.`,
        ],
      },
    ],
    prayer: "Saint Francis Xavier, you died in sight of a country you could not enter. Pray for missionaries, for catechists, and for anyone who is tired of starting over in a language they barely know. Ask Christ to keep the Church honest and gentle. Amen.",
    related: [
      { href: "/blog/saint-of-the-day/december-3/", label: "December 3, saint of the day" },
      { href: "/blog/saint-therese-of-lisieux/", label: "Saint Thérèse of Lisieux, the other patron of the missions" },
      { href: "/blog/saint-frances-xavier-cabrini/", label: "Saint Frances Xavier Cabrini, a different Xavier" },
    ],
    faqs: [
      { question: "When is Saint Francis Xavier's feast day?", answer: "December 3, the anniversary of his death in 1552 on Shangchuan Island." },
      { question: "Is he the same person as Mother Cabrini?", answer: "No. Saint Frances Xavier Cabrini was an Italian sister, canonized in the twentieth century, who worked in the United States. She was named after Francis Xavier. He was a sixteenth-century Jesuit." },
      { question: "Where is he buried?", answer: "His body is enshrined in the Basilica of Bom Jesus in Goa, India. He died on Shangchuan Island, off China." },
      { question: "Did he baptize hundreds of thousands of people?", answer: "Early accounts give very large numbers. Modern historians treat those totals with caution. What is certain is the scope of his travels and the communities he left in India and Japan." },
    ],
  },
  {
    slug: "saint-sebastian",
    title: "Saint Sebastian: Roman Martyr, Arrows, and the January 20 Feast",
    h1: "Saint Sebastian, the Roman martyr the arrows did not finish",
    description: "Saint Sebastian's feast on January 20, the late passion that tells of arrows and a second martyrdom, and his later role as a patron against plague.",
    keywords: "saint sebastian, st sebastian feast january 20, saint sebastian arrows, patron against plague, roman martyr sebastian",
    readTime: "18 min",
    crumb: "Saint Sebastian",
    lede: "Sebastian is a martyr of Rome whose later passion says he survived a volley of arrows and was then beaten to death. The arrows became the picture. The faith is the reason he is in the calendar.",
    answer: "Saint Sebastian is venerated as a martyr of Rome in the early fourth century, traditionally under Diocletian. His feast is January 20. The familiar story, that he was shot with arrows, recovered, confronted the emperor, and was then clubbed to death, comes from a passion written in the fifth century. Treat the details as that text tells them, not as a stenographer's notes. In the late Middle Ages he was asked to pray against the plague. That devotion does not prevent or cure disease.",
    facts: [
      { label: "City", value: "Rome" },
      { label: "Died", value: "Traditionally in the Diocletian persecution, early fourth century" },
      { label: "Feast", value: "January 20" },
      { label: "Shrine", value: "Basilica of San Sebastiano on the Appian Way" },
    ],
    timeline: [
      { when: "Early fourth century", what: "A Christian of Rome is martyred, traditionally under Diocletian. The cult is older than the detailed story." },
      { when: "Fifth century", what: "A Latin passion tells of arrows, a recovery, a second confrontation, and death by beating. It is the source of the paintings, not a stenographer's notes." },
      { when: "Late seventh century", what: "Roman memory later connects his intercession with the end of a plague. The Black Death revives that devotion on a much larger scale." },
      { when: "The Appian Way", what: "The basilica over the catacombs was first known for Peter and Paul, who were believed to have rested there for a time. It becomes San Sebastiano." },
      { when: "January 20", what: "His feast. Soldiers, archers, and later athletes ask his prayers. None of those patronages is a promise of safety." },
    ],
    sections: [
      {
        heading: "What the fifth-century passion says",
        paragraphs: [
          "The passion presents Sebastian as a Christian officer in the imperial guard who helped prisoners until he was denounced. He was tied to a post and shot with arrows, left for dead, and nursed by a Christian widow, Irene. He then returned and rebuked the emperors, and was beaten to death. His body was buried in the catacombs on the Via Appia, where the basilica of San Sebastiano still stands.",
          `That narrative is the source of the paintings. It is not among the earliest martyr acts. We know the cult is Roman and early. We should not pretend the dialogue with the emperor is a transcript. The [[/blog/saint-of-the-day/january-20/|saint of the day for January 20]] keeps the memorial without the whole romance. For Scripture beside the passion, keep {{${CBO}matthew/10/|Matthew 10 at Catholic Bible Online}} open.`,
        ],
      },
      {
        heading: "Plague, athletes, and soldiers",
        paragraphs: [
          "From the fourteenth century, cities asked Sebastian's prayers during outbreaks of plague, partly because the arrows looked like the sudden blows people associated with pestilence. He later became a patron of athletes, archers, and soldiers. Those patronages are historical customs. They do not mean a race, a battle, or an epidemic will turn out as you hope.",
          `If you are ill, pray and also seek medical care. Sebastian's own story, even in the legend, does not end with the arrows. Survival of one danger was not the end of his witness. Do not use him as a charm. The [[/blog/catholic-prayer-for-the-sick/|prayer for the sick]] and a psalm from {{${CBO}psalms/|the Psalms at Catholic Bible Online}} are enough of a form.`,
        ],
      },
      {
        heading: "How to remember him",
        paragraphs: [
          `A useful reading is the servant who does not know the hour, or any Gospel of martyrdom you already pray on weekdays. {{${CBO}matthew/10/|Matthew 10 at Catholic Bible Online}} is as close as Scripture comes: do not fear those who kill the body. Sebastian's basilica on the Appian Way is also where pilgrims associated the temporary resting of the apostles Peter and Paul. The place is about witness, not about arrows as souvenirs.`,
          "Pair him with [[/blog/saint-lawrence/|Saint Lawrence]], another Roman martyr whose famous details are traditional, and with [[/blog/saint-george/|Saint George]], whose dragon is later still. The three are not the same man.",
        ],
      },
      {
        heading: "Two Romes: the catacomb and the plague picture",
        paragraphs: [
          "The early cult belongs to the catacombs on the Appian Way, the place Romans called ad catacumbas. The basilica there was for a long time the Basilica of the Apostles, because Peter and Paul were believed to have been sheltered in that cemetery during a persecution. Sebastian's name took the building over only as his passion became the story pilgrims wanted. When you visit San Sebastiano fuori le mura, you are standing in a cemetery of the apostles as much as in a shrine of arrows.",
          "The plague devotion is a second layer. Chroniclers of the late seventh century tell of a pestilence in Rome and of an altar raised to Sebastian. In the fourteenth century, when no one understood infection, cities put his image on banners because arrows looked like sudden death. That history explains the pictures. It does not authorize you to skip quarantine, vaccines, or a hospital. Ask his prayers and follow the public-health instructions that actually apply.",
        ],
      },
    ],
    prayer: "Saint Sebastian, martyr of Rome, pray for people who face one danger and then another. Pray for the sick during an outbreak, and for the physicians. Ask Christ to make us steady, without promising us a safe ending. Amen.",
    related: [
      { href: "/blog/saint-of-the-day/january-20/", label: "January 20, saint of the day" },
      { href: "/blog/saint-lawrence/", label: "Saint Lawrence, deacon and martyr of Rome" },
      { href: "/blog/catholic-prayer-for-the-sick/", label: "A Catholic prayer for the sick" },
    ],
    faqs: [
      { question: "When is Saint Sebastian's feast day?", answer: "January 20." },
      { question: "Did arrows kill him?", answer: "In the fifth-century passion, the arrows did not. He was nursed back and later beaten to death. The paintings usually show only the first scene." },
      { question: "Why is he connected with the plague?", answer: "Medieval Christians asked his intercession during epidemics. The arrows were read as a picture of sudden illness. The devotion is real. It is not a medical protection." },
      { question: "Where is his basilica?", answer: "San Sebastiano fuori le mura stands on the Appian Way, over the catacombs where his cult was centered." },
    ],
  },
  {
    slug: "saint-lawrence",
    title: "Saint Lawrence: Roman Deacon, Martyr, and the Feast of August 10",
    h1: "Saint Lawrence, deacon of Rome",
    description: "Saint Lawrence, the Roman deacon martyred on August 10, 258, the story of the Church's treasure, and what is legend in the tale of the gridiron.",
    keywords: "saint lawrence, st lawrence feast august 10, san lorenzo, deacon martyr rome, saint lawrence gridiron",
    readTime: "18 min",
    crumb: "Saint Lawrence",
    lede: "Lawrence was a deacon of Rome, killed in the persecution of Valerian a few days after Pope Sixtus II. The poor, he told the magistrate, were the Church's treasure. The gridiron is how later Christians pictured the cost.",
    answer: "Saint Lawrence was one of the seven deacons of Rome and was martyred on August 10, 258, during the persecution under the emperor Valerian, four days after Pope Sixtus II. His feast is August 10. St. Ambrose already says that Lawrence presented the poor and the sick as the treasure of the Church. The gridiron, and the remark that he was done on one side, are traditional details. Honor the deacon and the poor without treating the joke as a transcript.",
    facts: [
      { label: "Office", value: "Deacon of Rome" },
      { label: "Died", value: "August 10, 258" },
      { label: "Feast", value: "August 10" },
      { label: "Basilica", value: "San Lorenzo fuori le mura, Rome" },
    ],
    timeline: [
      { when: "August 6, 258", what: "Pope Sixtus II is seized and killed under Valerian, with several deacons." },
      { when: "August 10, 258", what: "Lawrence, a deacon left in charge of the Church's goods, is martyred four days later. This date is the feast." },
      { when: "Fourth century", what: "Ambrose already tells that Lawrence presented the poor as the Church's treasure. Pope Damasus honors him among the Roman martyrs." },
      { when: "Early fifth century", what: "Prudentius describes the gridiron and the line about being turned over. That is the traditional picture. It is a poem built on an older memory." },
      { when: "The Via Tiburtina", what: "He is buried outside the walls. San Lorenzo fuori le mura stands over that tomb. His name remains in the Roman Canon." },
    ],
    sections: [
      {
        heading: "Four days after the pope",
        paragraphs: [
          `In August 258 Valerian's edict struck at the clergy. Pope Sixtus II was seized and killed on August 6, with some of his deacons. Lawrence, tradition says, was left long enough to be asked for the Church's wealth. Ambrose, writing in the fourth century, already tells the scene: Lawrence gathered the poor and presented them as the treasure. That is the story worth keeping even if you hold the later details lightly. The same judgment of the nations is in {{${CBO}matthew/25/|Matthew 25 at Catholic Bible Online}}.`,
          "He was buried on the Via Tiburtina. The basilica of San Lorenzo fuori le mura stands over that memory. His name, like Lucy's, is in the Roman Canon. The [[/blog/saint-of-the-day/august-10/|saint of the day for August 10]] is the feast in one page.",
        ],
      },
      {
        heading: "The gridiron",
        paragraphs: [
          "Prudentius and later preachers describe Lawrence burned on a gridiron, and they give him a line asking to be turned over. The line is too perfect to be a courtroom quote, and it has been loved for that reason. It may have grown in the telling. What it teaches is real: a deacon's job is to serve the table of the poor and the table of the Eucharist, and he did not hand the first over to save himself.",
          "Cooks later claimed him because of the gridiron. That patronage is a pun on the legend. Deacons claim him because he was a deacon. The second claim is the one the liturgy supports.",
        ],
      },
      {
        heading: "What to do on his feast",
        paragraphs: [
          `Read {{${CBO}matthew/25/|Matthew 25 at Catholic Bible Online}} and then give something concrete: a meal, a bill paid for someone else, an hour in a parish pantry. Lawrence without the poor is only a gruesome picture.`,
          "If you are preparing for the diaconate, or married to a deacon, his feast is a better patronal day than a generic celebration of service. [[/blog/saint-peter-apostle/|Saint Peter]] led the Church that ordained men like Lawrence. The deacon did not replace the apostle. He carried the relief the apostle was responsible for.",
        ],
      },
      {
        heading: "Ambrose's story and Prudentius's poem",
        paragraphs: [
          "Keep the sources in order. Ambrose, bishop of Milan in the late fourth century, already knows Lawrence as the deacon who, asked for the Church's gold, assembled the poor and called them the treasure. That scene is about two hundred years after the death, which is early for a martyr's memory and still not a transcript. Prudentius, a poet of the early fifth century, adds the gridiron and the request to be turned, because he is writing a hymn, the Peristephanon, not a coroner's report. Teach Ambrose first. Enjoy Prudentius second. Do not switch them.",
          "Rome in his century divided the city among seven deacons, each responsible for a region and for the poor of that region. Lawrence is remembered as the chief of them, the archdeacon, which is why the magistrate in the story comes to him for the money. The office explains the martyrdom better than the joke does. Cooks later claimed him because of the grill. Deacons claim him because of the regions. Only the second claim comes from his actual work.",
        ],
      },
    ],
    prayer: "Saint Lawrence, deacon and martyr, you called the poor the treasure of the Church. Pray for deacons and for anyone who handles money that is not theirs. Ask Christ to make us generous before we are brave. Amen.",
    related: [
      { href: "/blog/saint-of-the-day/august-10/", label: "August 10, saint of the day" },
      { href: "/blog/saint-peter-apostle/", label: "Saint Peter, the apostle of the Rome Lawrence served" },
      { href: "/blog/saint-sebastian/", label: "Saint Sebastian, martyr of the same city" },
    ],
    faqs: [
      { question: "When is Saint Lawrence's feast day?", answer: "August 10. That is the traditional date of his martyrdom in 258." },
      { question: "Was he burned on a gridiron?", answer: "That is the traditional account, told by later Latin writers, including the detail that he asked to be turned over. Ambrose's earlier point, which is the one to teach first, is that Lawrence presented the poor as the Church's treasure." },
      { question: "Why is he a patron of deacons?", answer: "Because he was a deacon of Rome, responsible for the Church's goods and for the poor, and he died rather than surrender either." },
      { question: "Does his feast require a special fast?", answer: "No universal fast is attached to August 10. Some traditional communities kept it as a feast of high rank. Your parish calendar is the practical guide." },
    ],
  },
  {
    slug: "saint-monica",
    title: "Saint Monica: Mother of Augustine, Feast Day, and Prayer for Children",
    h1: "Saint Monica, who prayed Augustine home",
    description: "Saint Monica's life from Thagaste to Ostia, her feast on August 27, and how to pray for a child without treating her story as a guarantee.",
    keywords: "saint monica, st monica feast august 27, mother of saint augustine, prayer for wayward children, monica of hippo",
    readTime: "18 min",
    crumb: "Saint Monica",
    lede: "Monica followed her son from North Africa to Milan and died at Ostia once he had been baptized. Augustine wrote the story himself. It is the best case we have of a parent's long prayer. It is not a formula.",
    answer: "Saint Monica was born at Thagaste, in present-day Algeria, around 331, and died at Ostia, near Rome, in 387. She was the mother of [[/blog/saint-augustine-of-hippo/|Saint Augustine]]. Her feast is August 27. Augustine's Confessions, especially Book IX, are the source for her last days. Christians ask her to pray for children who have left the faith. Her story does not promise that any particular child will return.",
    facts: [
      { label: "Born", value: "About 331, at Thagaste (Souk Ahras, Algeria)" },
      { label: "Died", value: "387, at Ostia, age 56" },
      { label: "Feast", value: "August 27" },
      { label: "Son", value: "Augustine, baptized in Milan at the Easter Vigil of 387" },
    ],
    timeline: [
      { when: "About 331", what: "Born at Thagaste, in what is now Algeria." },
      { when: "Her youth", what: "Augustine says she drank in secret as a girl and stopped after a servant's rebuke. That is why some later lists ask her prayers for people with a drinking problem." },
      { when: "About 371", what: "Her husband, Patricius, is baptized near the end of his life and dies soon after. Augustine is not yet a Catholic." },
      { when: "The flight to Rome", what: "Augustine leaves her praying in a chapel and sails without her. She follows him to Milan." },
      { when: "Easter 387", what: "Ambrose baptizes Augustine, with Augustine's son Adeodatus and his friend Alypius." },
      { when: "387, at Ostia", what: "She dies at 56, waiting for a ship to Africa, and asks only to be remembered at the altar." },
      { when: "1430", what: "Her relics are brought from Ostia to the church of Sant'Agostino in Rome." },
      { when: "1969", what: "The revised Roman calendar moves her from May 4 to August 27, the day before her son." },
    ],
    sections: [
      {
        heading: "A marriage, a bishop, and a son who would not listen",
        paragraphs: [
          "Augustine says his father, Patricius, was a pagan for most of the marriage and was baptized near the end of his life. Monica stayed. She also pushed the boy hard, and Augustine is frank that her zeal could be heavy. A holy mother in this story is not a calm one. She is a woman who would not agree that her son's intellect put him beyond the Gospel.",
          "When Augustine slipped away to Italy without her, she followed. Before that, still in Africa, she had begged a bishop to argue with her son. Augustine says the bishop refused, because the boy was not ready to listen, and then told her that it was not possible the son of so many tears should perish. That line is often misquoted as Ambrose's. It was an unnamed bishop. Ambrose comes later, in Milan: his preaching, his patience with her questions, and his correction of the African custom of picnic meals at the tombs of the martyrs. She obeyed him. The sentence about tears is pastoral comfort, not a law, and it does not bind God to a timetable.",
        ],
      },
      {
        heading: "Ostia",
        paragraphs: [
          "After the baptism at the Easter Vigil of 387, mother and son waited at Ostia for a ship to Africa. Augustine describes a conversation at a window in which they seemed, for a moment, to touch eternal wisdom together. She died there of a fever. She asked to be remembered at the altar. She did not insist on being buried at home. That request is the heart of her feast: the Eucharist, not a successful parental strategy.",
          "The Roman calendar now keeps her on August 27, the day before Augustine. An older date was May 4. The [[/blog/saint-of-the-day/august-27/|saint of the day for August 27]] matches the current general calendar. The [[/blog/st-monica-novena-for-children/|novena for children]] is a separate devotion. Use it as perseverance, not as a lever.",
        ],
      },
      {
        heading: "How to pray like her without imitating her anxiety",
        paragraphs: [
          "Name the child. Go to Mass and mention them at the altar, which is what she asked for herself. Refuse to lie about the harm they are doing, and refuse to speak of them as if God were failing a test. If they are in danger, take the practical steps love requires: a conversation, a boundary, a doctor. Prayer is not a substitute for those.",
          `Augustine's own account is a commentary on the mercy he had resisted. A parent can read {{${CBO}luke/15/|Luke 15 at Catholic Bible Online}}, the lost son, without skipping the father's dignity or the son's misery. Monica did not pretend the misery was a phase.`,
        ],
      },
      {
        heading: "What the Confessions actually contain",
        paragraphs: [
          "Almost everything secure about Monica is in Augustine's Confessions, especially Books III, V, VI, and IX. He is a son writing after her death, and he is also a theologian. He records her childhood drinking and the slave woman's rebuke. He records the lie at the harbor, when he left her praying at a chapel of St. Cyprian and took ship for Rome. He records Ambrose telling her to stop the African custom of food offerings at martyrs' tombs, and her obedience. He records the baptism at the Easter Vigil of 387, not only his own but that of his teenage son Adeodatus, who would die young, and of his friend Alypius. A guide that skips Adeodatus makes her only a mother of a famous bishop. She was also a grandmother for a short time.",
          `At Ostia she told him it did not matter where her body lay, so long as she was remembered at the altar of the Lord. In 1430 the relics were brought to Sant'Agostino in Rome anyway. You can visit that church. You cannot improve on her instruction. The 1969 calendar finally placed her feast on August 27, immediately before Augustine on August 28, which is what the story was always asking the liturgy to do. The older date, May 4, is why some traditional books still disagree. If you want the parable of the lost son open beside the Confessions, keep {{${CBO}luke/15/|Luke 15 at Catholic Bible Online}} in another tab.`,
        ],
      },
    ],
    prayer: "Saint Monica, you followed your son farther than he wanted to be followed. Pray for the child I love, and for me, so that my prayer does not turn into control. Ask Christ to bring them to the truth, in his time, and to keep me faithful at the altar meanwhile. Amen.",
    related: [
      { href: "/blog/saint-augustine-of-hippo/", label: "Saint Augustine, her son" },
      { href: "/blog/st-monica-novena-for-children/", label: "The novena to Saint Monica for children" },
      { href: "/blog/saint-of-the-day/august-27/", label: "August 27, saint of the day" },
    ],
    faqs: [
      { question: "When is Saint Monica's feast day?", answer: "August 27, the day before the feast of Saint Augustine. An older Roman date was May 4." },
      { question: "Will she bring my child back to the Church?", answer: "No saint guarantees another person's conversion. Monica's story is a reason to keep praying and to keep going to Mass. The child's freedom remains real." },
      { question: "Where did she die?", answer: "At Ostia, the port of Rome, in 387, while she and Augustine were waiting to sail back to Africa. Augustine tells it in Book IX of the Confessions." },
      { question: "Is the novena the same as this guide?", answer: "No. The novena is a nine-day devotion. This page is her life. You can use both. Neither one forces an outcome." },
    ],
  },
  {
    slug: "saint-anne",
    title: "Saint Anne: Mother of Mary, Feast with Joachim, and July 26",
    h1: "Saint Anne, remembered as the mother of Mary",
    description: "Who Saint Anne is in Catholic devotion, why her name is not in the Gospels, her feast with Joachim on July 26, and how to honor her without inventing a biography.",
    keywords: "saint anne, st anne feast july 26, mother of mary, saint joachim and anne, sainte-anne-de-beaupre",
    readTime: "18 min",
    crumb: "Saint Anne",
    lede: "The Gospels never name Mary's parents. The Church still keeps Anne and Joachim on July 26, because the liturgy received them as the ones who prepared the mother of the Lord.",
    answer: "Saint Anne is honored as the mother of the Virgin Mary, and Saint Joachim as Mary's father. Their names are not in the New Testament. They appear in the Protoevangelium of James, a second-century text the Church does not receive as Scripture. The feast of Joachim and Anne on July 26 is nonetheless ancient in Christian devotion. Details from the apocryphal story, such as Anne's long childlessness told in the manner of a novel, should not be preached as biblical fact. A prayer to Anne does not guarantee a pregnancy or a grandchild.",
    facts: [
      { label: "Honored as", value: "Mother of the Virgin Mary" },
      { label: "Named in", value: "The Protoevangelium of James, not in the Gospels" },
      { label: "Feast", value: "July 26, with Saint Joachim" },
      { label: "Often asked by", value: "Grandmothers, mothers, and women hoping for a child" },
    ],
    timeline: [
      { when: "Second century", what: "The Protoevangelium of James, which is not Scripture, names Joachim and Anna as Mary's parents and patterns their story on older biblical tales of barrenness." },
      { when: "The East", what: "Byzantine calendars keep Anna on more than one day, including a feast of her conception of Mary. The Roman Church is slower and more cautious." },
      { when: "Before 1969", what: "The Roman calendar keeps Anne on July 26 and Joachim on August 16, as two feasts." },
      { when: "1969", what: "The revised calendar joins them on July 26, so the parents of Mary are remembered together." },
      { when: "Jerusalem", what: "A crusader church of St. Anne stands near the pool of Bethesda, on a site tradition calls her house. The building is real. The identification is a tradition." },
      { when: "1658", what: "French settlers in Quebec raise the first chapel at Sainte-Anne-de-Beaupré. Brittany already has its own great shrine at Sainte-Anne-d'Auray." },
    ],
    sections: [
      {
        heading: "What the Church is celebrating",
        paragraphs: [
          "Mary had human parents. That is ordinary doctrine, because she is truly human. Their names, Anne and Joachim, come from a very old Christian story that did not enter the canon of Scripture. The Church can venerate the persons without treating the Protoevangelium as a Gospel. When a homily adds a childhood for Mary, a quarrel with a maid, or a precise age for Anne, it has left the liturgy and entered legend.",
          "July 26 is their common memorial. The [[/blog/saint-of-the-day/july-26/|saint of the day for July 26]] is the brief form. The point of the feast is that grace runs through a family before it runs through a miracle. Mary did not appear from nowhere.",
        ],
      },
      {
        heading: "Grandmothers and the shrine at Beaupré",
        paragraphs: [
          "In many places Anne is the grandmother's saint. That fits the only relationship we actually confess: she is remembered as Mary's mother, and Mary is the mother of Jesus. Parishes named for her, and the great shrine of Sainte-Anne-de-Beaupré in Quebec, show how far the devotion traveled with French Catholics. Pilgrimage there is a real Catholic practice. Stories of cures belong to the history of the shrine. They are not a promise you can carry home like a receipt.",
          "The prayer that belongs with her is the [[/blog/hail-mary-prayer/|Hail Mary]], because the daughter is the reason the mother is honored. If you want a longer Marian prayer in Easter, use the [[/blog/regina-caeli-prayer/|Regina Caeli]]. Anne does not replace Mary, and Mary does not replace Christ.",
        ],
      },
      {
        heading: "Hoping for a child",
        paragraphs: [
          `Couples ask Anne's prayers when they want a child. The apocryphal tale of her own waiting is why. You may ask. You may not bargain. Read {{${CBO}luke/1/|Luke 1 at Catholic Bible Online}}, where another woman, Elizabeth, conceives in old age, and notice that the text is about John the Baptist and about Mary, not about a technique. Medical care, adoption, and a life without children can all be holy. A novena does not adjudicate them.`,
          "Teach children that we do not know Anne's face, her trade, or her last words. We know the Church sets a day to thank God for the generation that raised Mary. That is enough biography for a feast, and more honest than a made-up diary.",
        ],
      },
      {
        heading: "Two shrines, and a calendar that used to split the parents",
        paragraphs: [
          "Before 1969 the Roman calendar kept Anne on July 26 and Joachim on August 16. The reform joined them, which is pastorally clearer and historically more honest: if we know anything liturgical about them, we know them as a pair. The Christian East had already been freer, with a feast of Anne's conception of Mary on December 9 in Byzantine use. That Eastern feast is not the Immaculate Conception, which is a Latin dogma about Mary, defined in 1854. Do not collapse the dates into one idea.",
          `Pilgrims can go to two places without inventing a third biography. In Jerusalem the crusader church of St. Anne stands by the pool of Bethesda, where {{${CBO}john/5/|John 5 at Catholic Bible Online}} places a healing. Tradition calls the site her house. Archaeology can show a church. It cannot show her kitchen. In Quebec, Sainte-Anne-de-Beaupré begins with a chapel of 1658 and a cure remembered in the shrine's own story. In Brittany, Sainte-Anne-d'Auray is the other great Western shrine. Ask her prayers in any of them. Do not treat a reported cure as a policy.`,
        ],
      },
    ],
    prayer: "Saint Anne, the Church honors you as the mother of Mary. Pray for grandmothers and for parents who are tired. Pray for couples who want a child, and for those who have buried one. Ask Christ to be born in the house we actually have. Amen.",
    related: [
      { href: "/blog/saint-of-the-day/july-26/", label: "July 26, Joachim and Anne" },
      { href: "/blog/hail-mary-prayer/", label: "The Hail Mary" },
      { href: "/blog/saint-monica/", label: "Saint Monica, another mother the Church remembers by name" },
    ],
    faqs: [
      { question: "Is Saint Anne in the Bible?", answer: "Her name is not in the Gospels or anywhere else in the canon. It comes from the Protoevangelium of James, an early Christian text that is not Scripture. The Church still keeps her feast." },
      { question: "When is her feast day?", answer: "July 26, together with Saint Joachim, who is honored as the father of Mary." },
      { question: "Is she the patron of grandmothers?", answer: "That is a widespread and fitting devotion, because she is remembered as Mary's mother. It is a custom of prayer, not a separate dogma." },
      { question: "Can she help us conceive?", answer: "You may ask her to pray with you. There is no promise of a pregnancy. Care for your health, and do not treat a novena as a condition God must meet." },
    ],
  },
];

export function saintLifeGuideBySlug(slug: string): SaintLifeGuide | undefined {
  return SAINT_LIFE_GUIDES.find((guide) => guide.slug === slug);
}
