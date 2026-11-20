/** Pope page index. Body text lives in src/data/popeProfiles/<slug>.json (see scripts/pope-profiles/). */
import type { PopeArticleContent } from "@/lib/popeSlugs";

export const POPE_ARTICLES: PopeArticleContent[] = [
  {
    "num": 1,
    "slug": "st-peter",
    "title": "Pope St. Peter (1º): Life, Martyrdom & Why He Is the First Pope",
    "metaDescription": "St. Peter was Simon, a Galilean fisherman from Bethsaida whom Jesus called as an apostle and renamed Cephas, or Peter, meaning “rock.” The Gospels show him…",
    "excerpt": "St. Peter — c. 30 – c. 64. Born Simon, son of Jonah.",
    "readTime": "4 min",
    "relatedPopes": [
      {
        "num": 2,
        "slug": "st-linus",
        "name": "St. Linus",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 2,
    "slug": "st-linus",
    "title": "Pope St. Linus (2º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Linus was the second bishop of Rome, the first successor of St. Peter in the earliest lists of Roman bishops.",
    "excerpt": "St. Linus — c. 64 – c. 76. Roman citizen, born in Italia, the homeland of the ancient Romans.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 1,
        "slug": "st-peter",
        "name": "St. Peter",
        "relation": "Previous pope"
      },
      {
        "num": 3,
        "slug": "st-cletus",
        "name": "St. Cletus",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 3,
    "slug": "st-cletus",
    "title": "Pope St. Cletus (3º): First Greek pope — Complete Guide",
    "metaDescription": "St. Cletus, also called Anacletus, was the third bishop of Rome, following Linus and preceding Clement in the earliest succession lists.",
    "excerpt": "St. Cletus — c. 76 – c. 88. A peregrinus, free provincial subject of the Roman Empire who was not a Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 2,
        "slug": "st-linus",
        "name": "St. Linus",
        "relation": "Previous pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 4,
    "slug": "st-clement-i",
    "title": "Pope St. Clement I (4º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Clement I was the fourth bishop of Rome and the author, by ancient testimony, of the Letter to the Corinthians known as First Clement, one of the oldest…",
    "excerpt": "St. Clement I — c. 88 – c. 97. Roman citizen, born in the capital of the Roman Empire.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 3,
        "slug": "st-cletus",
        "name": "St. Cletus",
        "relation": "Previous pope"
      },
      {
        "num": 5,
        "slug": "st-evaristus",
        "name": "St. Evaristus",
        "relation": "Next pope"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      },
      {
        "num": 183,
        "slug": "clement-iv",
        "name": "Clement IV",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 5,
    "slug": "st-evaristus",
    "title": "Pope St. Evaristus (5º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Evaristus was the fifth bishop of Rome, following Clement in the succession list of St. Irenaeus.",
    "excerpt": "St. Evaristus — c. 97 – c. 105. A peregrinus, free provincial subject of the Roman Empire who was not a Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Previous pope"
      },
      {
        "num": 6,
        "slug": "st-alexander-i",
        "name": "St. Alexander I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 6,
    "slug": "st-alexander-i",
    "title": "Pope St. Alexander I (6º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Alexander I was the sixth bishop of Rome, serving in the early second century after Evaristus.",
    "excerpt": "St. Alexander I — c. 105 – c. 115. Roman citizen, born in the capital of the Roman Empire.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 5,
        "slug": "st-evaristus",
        "name": "St. Evaristus",
        "relation": "Previous pope"
      },
      {
        "num": 7,
        "slug": "st-sixtus-i",
        "name": "St. Sixtus I",
        "relation": "Next pope"
      },
      {
        "num": 156,
        "slug": "alexander-ii",
        "name": "Alexander II",
        "relation": "Also named Alexander"
      },
      {
        "num": 170,
        "slug": "alexander-iii",
        "name": "Alexander III",
        "relation": "Also named Alexander"
      },
      {
        "num": 181,
        "slug": "alexander-iv",
        "name": "Alexander IV",
        "relation": "Also named Alexander"
      }
    ]
  },
  {
    "num": 7,
    "slug": "st-sixtus-i",
    "title": "Pope St. Sixtus I (7º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Sixtus I, also written Xystus, was the seventh bishop of Rome in the early second century.",
    "excerpt": "St. Sixtus I — c. 115 – c. 125. A Roman of Greek descent, born in Italia, the homeland of the ancient Romans.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 6,
        "slug": "st-alexander-i",
        "name": "St. Alexander I",
        "relation": "Previous pope"
      },
      {
        "num": 8,
        "slug": "st-telesphorus",
        "name": "St. Telesphorus",
        "relation": "Next pope"
      },
      {
        "num": 24,
        "slug": "st-sixtus-ii",
        "name": "St. Sixtus II",
        "relation": "Also named Sixtus"
      },
      {
        "num": 44,
        "slug": "st-sixtus-iii",
        "name": "St. Sixtus III",
        "relation": "Also named Sixtus"
      },
      {
        "num": 212,
        "slug": "sixtus-iv",
        "name": "Sixtus IV",
        "relation": "Also named Sixtus"
      }
    ]
  },
  {
    "num": 8,
    "slug": "st-telesphorus",
    "title": "Pope St. Telesphorus (8º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Telesphorus was the eighth bishop of Rome and the first pope after St. Peter whose martyrdom is attested by an early, reliable witness: St. Irenaeus…",
    "excerpt": "St. Telesphorus — c. 125 – c. 136. A Roman of Greek descent, born in Italia, the homeland of the ancient Romans.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 7,
        "slug": "st-sixtus-i",
        "name": "St. Sixtus I",
        "relation": "Previous pope"
      },
      {
        "num": 9,
        "slug": "st-hyginus",
        "name": "St. Hyginus",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 9,
    "slug": "st-hyginus",
    "title": "Pope St. Hyginus (9º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Hyginus was the ninth bishop of Rome, serving briefly around 138 to 142.",
    "excerpt": "St. Hyginus — c. 136 – c. 140. A peregrinus, free provincial subject of the Roman Empire who was not a Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 8,
        "slug": "st-telesphorus",
        "name": "St. Telesphorus",
        "relation": "Previous pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 10,
    "slug": "st-pius-i",
    "title": "Pope St. Pius I (10º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Pius I was the tenth bishop of Rome, serving in the mid-second century.",
    "excerpt": "St. Pius I — c. 140 – c. 155. Roman citizen, born in Italia, the homeland of the ancient Romans.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 9,
        "slug": "st-hyginus",
        "name": "St. Hyginus",
        "relation": "Previous pope"
      },
      {
        "num": 11,
        "slug": "st-anicetus",
        "name": "St. Anicetus",
        "relation": "Next pope"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Also named Pius"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Also named Pius"
      },
      {
        "num": 224,
        "slug": "pius-iv",
        "name": "Pius IV",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 11,
    "slug": "st-anicetus",
    "title": "Pope St. Anicetus (11º): First Syrian pope & Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Anicetus was the eleventh bishop of Rome, traditionally from Emesa in Syria and so remembered as the first Syrian pope.",
    "excerpt": "St. Anicetus — c. 155 – 166/7. Hellenized Syrian; first Syrian pope.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Previous pope"
      },
      {
        "num": 12,
        "slug": "st-soter",
        "name": "St. Soter",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 12,
    "slug": "st-soter",
    "title": "Pope St. Soter (12º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Soter was the twelfth bishop of Rome, serving around 166 to 175.",
    "excerpt": "St. Soter — 166/7 – 174/5. Roman citizen, born in Italia, the homeland of the ancient Romans.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 11,
        "slug": "st-anicetus",
        "name": "St. Anicetus",
        "relation": "Previous pope"
      },
      {
        "num": 13,
        "slug": "st-eleutherius",
        "name": "St. Eleutherius",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 13,
    "slug": "st-eleutherius",
    "title": "Pope St. Eleutherius (13º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Eleutherius (also Eleutherus) was the thirteenth bishop of Rome, serving around 175 to 189.",
    "excerpt": "St. Eleutherius — 174/5 – 189. A peregrinus, free provincial subject of the Roman Empire who was not a Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 12,
        "slug": "st-soter",
        "name": "St. Soter",
        "relation": "Previous pope"
      },
      {
        "num": 14,
        "slug": "st-victor-i",
        "name": "St. Victor I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 14,
    "slug": "st-victor-i",
    "title": "Pope St. Victor I (14º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Victor I was the fourteenth bishop of Rome and the first pope born in Africa.",
    "excerpt": "St. Victor I — 189 – 198/9. Roman Berber; first pope to have been born on the continent of Africa.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 13,
        "slug": "st-eleutherius",
        "name": "St. Eleutherius",
        "relation": "Previous pope"
      },
      {
        "num": 15,
        "slug": "st-zephyrinus",
        "name": "St. Zephyrinus",
        "relation": "Next pope"
      },
      {
        "num": 153,
        "slug": "victor-ii",
        "name": "Victor II",
        "relation": "Also named Victor"
      },
      {
        "num": 158,
        "slug": "bl-victor-iii",
        "name": "Bl. Victor III",
        "relation": "Also named Victor"
      }
    ]
  },
  {
    "num": 15,
    "slug": "st-zephyrinus",
    "title": "Pope St. Zephyrinus (15º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Zephyrinus was the fifteenth bishop of Rome, leading the Church for nearly two decades from about 199 to 217.",
    "excerpt": "St. Zephyrinus — 198/9 –20 December 217. Roman citizen, born in the capital of the Roman Empire.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 14,
        "slug": "st-victor-i",
        "name": "St. Victor I",
        "relation": "Previous pope"
      },
      {
        "num": 16,
        "slug": "st-callixtus-i",
        "name": "St. Callixtus I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 16,
    "slug": "st-callixtus-i",
    "title": "Pope St. Callixtus I (16º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Callixtus I (also Callistus) was the sixteenth bishop of Rome, a former slave who rose to become chief deacon under Pope Zephyrinus and then pope from…",
    "excerpt": "St. Callixtus I — 218 –14 October 222. Roman citizen of Greek descent (Constitutio Antoniniana).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 15,
        "slug": "st-zephyrinus",
        "name": "St. Zephyrinus",
        "relation": "Previous pope"
      },
      {
        "num": 17,
        "slug": "st-urban-i",
        "name": "St. Urban I",
        "relation": "Next pope"
      },
      {
        "num": 162,
        "slug": "callixtus-ii",
        "name": "Callixtus II",
        "relation": "Also named Callixtus"
      },
      {
        "num": 209,
        "slug": "callixtus-iii",
        "name": "Callixtus III",
        "relation": "Also named Callixtus"
      }
    ]
  },
  {
    "num": 17,
    "slug": "st-urban-i",
    "title": "Pope St. Urban I (17º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Urban I was the seventeenth bishop of Rome, serving from about 222 to 230 during the reign of Emperor Alexander Severus, a time of relative peace for…",
    "excerpt": "St. Urban I — 222 –19 May 230. Also revered as a saint in Eastern Christianity, with the same feast day.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 16,
        "slug": "st-callixtus-i",
        "name": "St. Callixtus I",
        "relation": "Previous pope"
      },
      {
        "num": 18,
        "slug": "st-pontian",
        "name": "St. Pontian",
        "relation": "Next pope"
      },
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Also named Urban"
      },
      {
        "num": 172,
        "slug": "urban-iii",
        "name": "Urban III",
        "relation": "Also named Urban"
      },
      {
        "num": 182,
        "slug": "urban-iv",
        "name": "Urban IV",
        "relation": "Also named Urban"
      }
    ]
  },
  {
    "num": 18,
    "slug": "st-pontian",
    "title": "Pope St. Pontian (18º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Pontian was the eighteenth bishop of Rome, from 230 to 235, and the first pope known to have resigned.",
    "excerpt": "St. Pontian — 21 July 230 –28 September 235. First to abdicate due to his exile to Sardinia by Emperor Maximinus Thrax.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 17,
        "slug": "st-urban-i",
        "name": "St. Urban I",
        "relation": "Previous pope"
      },
      {
        "num": 19,
        "slug": "st-anterus",
        "name": "St. Anterus",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 19,
    "slug": "st-anterus",
    "title": "Pope St. Anterus (19º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Anterus was the nineteenth bishop of Rome and one of the shortest-reigning popes, serving only about six weeks from November 21, 235, to January 3, 236.",
    "excerpt": "St. Anterus — 21 November 235 –3 January 236. Roman citizen of Greek descent (Constitutio Antoniniana).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 18,
        "slug": "st-pontian",
        "name": "St. Pontian",
        "relation": "Previous pope"
      },
      {
        "num": 20,
        "slug": "st-fabian",
        "name": "St. Fabian",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 20,
    "slug": "st-fabian",
    "title": "Pope St. Fabian (20º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Fabian was the twentieth bishop of Rome, from 236 to 250.",
    "excerpt": "St. Fabian — 10 January 236 –20 January 250. Feast day 20 January.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 19,
        "slug": "st-anterus",
        "name": "St. Anterus",
        "relation": "Previous pope"
      },
      {
        "num": 21,
        "slug": "st-cornelius",
        "name": "St. Cornelius",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 21,
    "slug": "st-cornelius",
    "title": "Pope St. Cornelius (21º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Cornelius was the twenty-first bishop of Rome, elected in March 251 after the Church had gone more than a year without a bishop during the Decian…",
    "excerpt": "St. Cornelius — March 251 – June 253. Died as a martyr through extreme hardship; feast day 16 September.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 20,
        "slug": "st-fabian",
        "name": "St. Fabian",
        "relation": "Previous pope"
      },
      {
        "num": 22,
        "slug": "st-lucius-i",
        "name": "St. Lucius I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 22,
    "slug": "st-lucius-i",
    "title": "Pope St. Lucius I (22º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Lucius I was the twenty-second bishop of Rome, serving from June 253 to March 254.",
    "excerpt": "St. Lucius I — 25 June 253 –5 March 254. The 22nd pope of the Catholic Church.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 21,
        "slug": "st-cornelius",
        "name": "St. Cornelius",
        "relation": "Previous pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Next pope"
      },
      {
        "num": 166,
        "slug": "lucius-ii",
        "name": "Lucius II",
        "relation": "Also named Lucius"
      },
      {
        "num": 171,
        "slug": "lucius-iii",
        "name": "Lucius III",
        "relation": "Also named Lucius"
      }
    ]
  },
  {
    "num": 23,
    "slug": "st-stephen-i",
    "title": "Pope St. Stephen I (23º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Stephen I was the twenty-third bishop of Rome, from 254 to 257.",
    "excerpt": "St. Stephen I — 12 March 254 –2 August 257. Roman citizen of Greek descent (Constitutio Antoniniana).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 22,
        "slug": "st-lucius-i",
        "name": "St. Lucius I",
        "relation": "Previous pope"
      },
      {
        "num": 24,
        "slug": "st-sixtus-ii",
        "name": "St. Sixtus II",
        "relation": "Next pope"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Also named Stephen"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Also named Stephen"
      },
      {
        "num": 97,
        "slug": "stephen-iv",
        "name": "Stephen IV",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 24,
    "slug": "st-sixtus-ii",
    "title": "Pope St. Sixtus II (24º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Sixtus II was the twenty-fourth bishop of Rome, serving for less than a year before he was beheaded on August 6, 258, during the persecution of Emperor…",
    "excerpt": "St. Sixtus II — 31 August 257 –6 August 258. Roman citizen of Greek descent (Constitutio Antoniniana).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Previous pope"
      },
      {
        "num": 25,
        "slug": "st-dionysius",
        "name": "St. Dionysius",
        "relation": "Next pope"
      },
      {
        "num": 7,
        "slug": "st-sixtus-i",
        "name": "St. Sixtus I",
        "relation": "Also named Sixtus"
      },
      {
        "num": 44,
        "slug": "st-sixtus-iii",
        "name": "St. Sixtus III",
        "relation": "Also named Sixtus"
      },
      {
        "num": 212,
        "slug": "sixtus-iv",
        "name": "Sixtus IV",
        "relation": "Also named Sixtus"
      }
    ]
  },
  {
    "num": 25,
    "slug": "st-dionysius",
    "title": "Pope St. Dionysius (25º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Dionysius was the twenty-fifth bishop of Rome, elected in 259 after a vacancy caused by the persecution of Valerian.",
    "excerpt": "St. Dionysius — 22 July 259 –27 December 268. Roman citizen of Greek descent (Constitutio Antoniniana).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 24,
        "slug": "st-sixtus-ii",
        "name": "St. Sixtus II",
        "relation": "Previous pope"
      },
      {
        "num": 26,
        "slug": "st-felix-i",
        "name": "St. Felix I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 26,
    "slug": "st-felix-i",
    "title": "Pope St. Felix I (26º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Felix I was the twenty-sixth bishop of Rome, serving from 269 to 274.",
    "excerpt": "St. Felix I — 5 January 269 –30 December 274. Feast day 30 December.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 25,
        "slug": "st-dionysius",
        "name": "St. Dionysius",
        "relation": "Previous pope"
      },
      {
        "num": 27,
        "slug": "st-eutychian",
        "name": "St. Eutychian",
        "relation": "Next pope"
      },
      {
        "num": 48,
        "slug": "st-felix-iii",
        "name": "St. Felix III",
        "relation": "Also named Felix"
      },
      {
        "num": 54,
        "slug": "st-felix-iv",
        "name": "St. Felix IV",
        "relation": "Also named Felix"
      }
    ]
  },
  {
    "num": 27,
    "slug": "st-eutychian",
    "title": "Pope St. Eutychian (27º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Eutychian was the twenty-seventh bishop of Rome, from 275 to 283, during a long period of peace for the Church.",
    "excerpt": "St. Eutychian — 4 January 275 –7 December 283. Feast day 8 December.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 26,
        "slug": "st-felix-i",
        "name": "St. Felix I",
        "relation": "Previous pope"
      },
      {
        "num": 28,
        "slug": "st-caius",
        "name": "St. Caius",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 28,
    "slug": "st-caius",
    "title": "Pope St. Caius (28º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Caius (also Gaius) was the twenty-eighth bishop of Rome, serving from 283 to 296, in the years before Diocletian’s Great Persecution.",
    "excerpt": "St. Caius — 17 December 283 –22 April 296. Martyred by beheading (according to legend); feast day 22 April.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 27,
        "slug": "st-eutychian",
        "name": "St. Eutychian",
        "relation": "Previous pope"
      },
      {
        "num": 29,
        "slug": "st-marcellinus",
        "name": "St. Marcellinus",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 29,
    "slug": "st-marcellinus",
    "title": "Pope St. Marcellinus (29º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Marcellinus was the twenty-ninth bishop of Rome, from 296 until his death around 304, and he led the Church when Diocletian’s Great Persecution broke…",
    "excerpt": "St. Marcellinus — 30 June 296 –25 October 304. Also revered as a saint in Eastern Christianity, with a feast day of 7 June.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 28,
        "slug": "st-caius",
        "name": "St. Caius",
        "relation": "Previous pope"
      },
      {
        "num": 30,
        "slug": "st-marcellus-i",
        "name": "St. Marcellus I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 30,
    "slug": "st-marcellus-i",
    "title": "Pope St. Marcellus I (30º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Marcellus I was the thirtieth bishop of Rome, elected in 308 after a long vacancy that followed the Great Persecution.",
    "excerpt": "St. Marcellus I — 27 May 308 –16 January 309. Banished from Rome by Emperor Maxentius(309) and died in exile; feast day 16 January.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 29,
        "slug": "st-marcellinus",
        "name": "St. Marcellinus",
        "relation": "Previous pope"
      },
      {
        "num": 31,
        "slug": "st-eusebius",
        "name": "St. Eusebius",
        "relation": "Next pope"
      },
      {
        "num": 222,
        "slug": "marcellus-ii",
        "name": "Marcellus II",
        "relation": "Also named Marcellus"
      }
    ]
  },
  {
    "num": 31,
    "slug": "st-eusebius",
    "title": "Pope St. Eusebius (31º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Eusebius was bishop of Rome for only a few months around 309–310, in the uneasy years just before Constantine came to power.",
    "excerpt": "St. Eusebius — 18 April 309 –17 August 310. Roman citizen of Greek descent.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 30,
        "slug": "st-marcellus-i",
        "name": "St. Marcellus I",
        "relation": "Previous pope"
      },
      {
        "num": 32,
        "slug": "st-miltiades-melchiades",
        "name": "St. Miltiades (Melchiades)",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 32,
    "slug": "st-miltiades-melchiades",
    "title": "Pope St. Miltiades (Melchiades) (32º): Lateran Council — Complete Guide",
    "metaDescription": "St. Miltiades, also spelled Melchiades, was pope from 311 to 314 and the first bishop of Rome to see the Church move from persecution to toleration under…",
    "excerpt": "St. Miltiades (Melchiades) — 2 July 311 –10 January 314. Roman citizen of Berber descent.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 31,
        "slug": "st-eusebius",
        "name": "St. Eusebius",
        "relation": "Previous pope"
      },
      {
        "num": 33,
        "slug": "st-sylvester-i",
        "name": "St. Sylvester I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 33,
    "slug": "st-sylvester-i",
    "title": "Pope St. Sylvester I (33º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Sylvester I was pope from 314 to 335, the long reign that coincided with Constantine's patronage of the Church.",
    "excerpt": "St. Sylvester I — 31 January 314 –31 December 335. Feast day 31 December.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 32,
        "slug": "st-miltiades-melchiades",
        "name": "St. Miltiades (Melchiades)",
        "relation": "Previous pope"
      },
      {
        "num": 34,
        "slug": "st-mark",
        "name": "St. Mark",
        "relation": "Next pope"
      },
      {
        "num": 139,
        "slug": "sylvester-ii",
        "name": "Sylvester II",
        "relation": "Also named Sylvester"
      },
      {
        "num": 146,
        "slug": "sylvester-iii",
        "name": "Sylvester III",
        "relation": "Also named Sylvester"
      }
    ]
  },
  {
    "num": 34,
    "slug": "st-mark",
    "title": "Pope St. Mark (34º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "St. Mark was a Roman who served as pope for less than a year, from January to October 336, near the end of Constantine's reign.",
    "excerpt": "St. Mark — 18 January 336 –7 October 336. Compiled stories of martyrs and bishops before his time.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 33,
        "slug": "st-sylvester-i",
        "name": "St. Sylvester I",
        "relation": "Previous pope"
      },
      {
        "num": 35,
        "slug": "st-julius-i",
        "name": "St. Julius I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 35,
    "slug": "st-julius-i",
    "title": "Pope St. Julius I (35º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Julius I was pope from 337 to 352 and one of the firmest Western defenders of the Nicene faith during the Arian crisis.",
    "excerpt": "St. Julius I — 6 February 337 –12 April 352. He was involved in the Arian controversy, supporting Athanasius of Alexandria.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 34,
        "slug": "st-mark",
        "name": "St. Mark",
        "relation": "Previous pope"
      },
      {
        "num": 36,
        "slug": "liberius",
        "name": "Liberius",
        "relation": "Next pope"
      },
      {
        "num": 216,
        "slug": "julius-ii",
        "name": "Julius II",
        "relation": "Also named Julius"
      },
      {
        "num": 221,
        "slug": "julius-iii",
        "name": "Julius III",
        "relation": "Also named Julius"
      }
    ]
  },
  {
    "num": 36,
    "slug": "liberius",
    "title": "Pope Liberius (36º): Biography, Pontificate & Legacy",
    "metaDescription": "Liberius was pope from 352 to 366, during the struggle between the Nicene faith and the Arian-leaning policies of Emperor Constantius II.",
    "excerpt": "Liberius — 17 May 352 –24 September 366. Banished by the Arian-leaning Emperor Constantius II and later yielding to him.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 35,
        "slug": "st-julius-i",
        "name": "St. Julius I",
        "relation": "Previous pope"
      },
      {
        "num": 37,
        "slug": "st-damasus-i",
        "name": "St. Damasus I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 37,
    "slug": "st-damasus-i",
    "title": "Pope St. Damasus I (37º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Damasus I was pope from 366 to 384, a period when Christianity became the official religion of the Roman Empire.",
    "excerpt": "St. Damasus I — 1 October 366 –11 December 384. First pope from modern-day Portugal.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 36,
        "slug": "liberius",
        "name": "Liberius",
        "relation": "Previous pope"
      },
      {
        "num": 38,
        "slug": "st-siricius",
        "name": "St. Siricius",
        "relation": "Next pope"
      },
      {
        "num": 151,
        "slug": "damasus-ii",
        "name": "Damasus II",
        "relation": "Also named Damasus"
      }
    ]
  },
  {
    "num": 38,
    "slug": "st-siricius",
    "title": "Pope St. Siricius (38º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Siricius was pope from 384 to 399 and the author of the earliest papal decretal that survives complete, a letter to Bishop Himerius of Tarragona in Spain.",
    "excerpt": "St. Siricius — 17 December 384 –26 November 399. Feast day 26 November.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 37,
        "slug": "st-damasus-i",
        "name": "St. Damasus I",
        "relation": "Previous pope"
      },
      {
        "num": 39,
        "slug": "st-anastasius-i",
        "name": "St. Anastasius I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 39,
    "slug": "st-anastasius-i",
    "title": "Pope St. Anastasius I (39º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Anastasius I was a Roman who served as pope for just over two years, from 399 to 401.",
    "excerpt": "St. Anastasius I — 27 November 399 –19 December 401. Feast day 19 December.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 38,
        "slug": "st-siricius",
        "name": "St. Siricius",
        "relation": "Previous pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Next pope"
      },
      {
        "num": 50,
        "slug": "anastasius-ii",
        "name": "Anastasius II",
        "relation": "Also named Anastasius"
      },
      {
        "num": 120,
        "slug": "anastasius-iii",
        "name": "Anastasius III",
        "relation": "Also named Anastasius"
      },
      {
        "num": 168,
        "slug": "anastasius-iv",
        "name": "Anastasius IV",
        "relation": "Also named Anastasius"
      }
    ]
  },
  {
    "num": 40,
    "slug": "st-innocent-i",
    "title": "Pope St. Innocent I (40º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Innocent I was pope from 401 to 417, through the Visigothic sack of Rome in 410.",
    "excerpt": "St. Innocent I — 21 December 401 –12 March 417. Rome was sacked by the Visigoths under King Alaric I(410).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 39,
        "slug": "st-anastasius-i",
        "name": "St. Anastasius I",
        "relation": "Previous pope"
      },
      {
        "num": 41,
        "slug": "st-zosimus",
        "name": "St. Zosimus",
        "relation": "Next pope"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      },
      {
        "num": 180,
        "slug": "innocent-iv",
        "name": "Innocent IV",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 41,
    "slug": "st-zosimus",
    "title": "Pope St. Zosimus (41º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Zosimus was pope for less than two years, from 417 to 418, and is described in early sources as Greek.",
    "excerpt": "St. Zosimus — 18 March 417 –26 December 418. Roman citizen of Greek descent.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Previous pope"
      },
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 42,
    "slug": "st-boniface-i",
    "title": "Pope St. Boniface I (42º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Boniface I was a Roman priest who served as pope from 418 to 422.",
    "excerpt": "St. Boniface I — 28 December 418 –4 September 422. Feast day 25 October.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 41,
        "slug": "st-zosimus",
        "name": "St. Zosimus",
        "relation": "Previous pope"
      },
      {
        "num": 43,
        "slug": "st-celestine-i",
        "name": "St. Celestine I",
        "relation": "Next pope"
      },
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Also named Boniface"
      },
      {
        "num": 66,
        "slug": "boniface-iii",
        "name": "Boniface III",
        "relation": "Also named Boniface"
      },
      {
        "num": 67,
        "slug": "st-boniface-iv",
        "name": "St. Boniface IV",
        "relation": "Also named Boniface"
      }
    ]
  },
  {
    "num": 43,
    "slug": "st-celestine-i",
    "title": "Pope St. Celestine I (43º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Celestine I was pope from 422 to 432 and played a central role in the condemnation of Nestorius, whose teaching was rejected at the Council of Ephesus…",
    "excerpt": "St. Celestine I — 10 September 422 –27 July 432. Also revered as a saint in Eastern Christianity, with a feast day of 8 April.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Previous pope"
      },
      {
        "num": 44,
        "slug": "st-sixtus-iii",
        "name": "St. Sixtus III",
        "relation": "Next pope"
      },
      {
        "num": 165,
        "slug": "celestine-ii",
        "name": "Celestine II",
        "relation": "Also named Celestine"
      },
      {
        "num": 175,
        "slug": "celestine-iii",
        "name": "Celestine III",
        "relation": "Also named Celestine"
      },
      {
        "num": 179,
        "slug": "celestine-iv",
        "name": "Celestine IV",
        "relation": "Also named Celestine"
      }
    ]
  },
  {
    "num": 44,
    "slug": "st-sixtus-iii",
    "title": "Pope St. Sixtus III (44º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Sixtus III was a Roman priest who served as pope from 432 to 440.",
    "excerpt": "St. Sixtus III — 31 July 432 –18 August 440. The 44th pope of the Catholic Church.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 43,
        "slug": "st-celestine-i",
        "name": "St. Celestine I",
        "relation": "Previous pope"
      },
      {
        "num": 45,
        "slug": "st-leo-i-the-great",
        "name": "St. Leo I the Great",
        "relation": "Next pope"
      },
      {
        "num": 7,
        "slug": "st-sixtus-i",
        "name": "St. Sixtus I",
        "relation": "Also named Sixtus"
      },
      {
        "num": 24,
        "slug": "st-sixtus-ii",
        "name": "St. Sixtus II",
        "relation": "Also named Sixtus"
      },
      {
        "num": 212,
        "slug": "sixtus-iv",
        "name": "Sixtus IV",
        "relation": "Also named Sixtus"
      }
    ]
  },
  {
    "num": 45,
    "slug": "st-leo-i-the-great",
    "title": "Pope St. Leo I the Great (45º): Attila, Chalcedon & Papal Authority",
    "metaDescription": "St. Leo I, called the Great, was pope from 440 to 461 and is a Doctor of the Church.",
    "excerpt": "St. Leo I the Great — 29 September 440 –10 November 461. Feast day 10 November.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 44,
        "slug": "st-sixtus-iii",
        "name": "St. Sixtus III",
        "relation": "Previous pope"
      },
      {
        "num": 46,
        "slug": "st-hilarius",
        "name": "St. Hilarius",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 46,
    "slug": "st-hilarius",
    "title": "Pope St. Hilarius (46º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Hilarius was a native of Sardinia who served as pope from 461 to 468.",
    "excerpt": "St. Hilarius — 19 November 461 –29 February 468. Feast day 28 February.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 45,
        "slug": "st-leo-i-the-great",
        "name": "St. Leo I the Great",
        "relation": "Previous pope"
      },
      {
        "num": 47,
        "slug": "st-simplicius",
        "name": "St. Simplicius",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 47,
    "slug": "st-simplicius",
    "title": "Pope St. Simplicius (47º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Simplicius, from Tivoli near Rome, was pope from 468 to 483, the period when the last Western Roman emperor was deposed in 476 and Odoacer took control…",
    "excerpt": "St. Simplicius — 3 March 468 –10 March 483. Roman citizen, later a subject of the Kingdom of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 46,
        "slug": "st-hilarius",
        "name": "St. Hilarius",
        "relation": "Previous pope"
      },
      {
        "num": 48,
        "slug": "st-felix-iii",
        "name": "St. Felix III",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 48,
    "slug": "st-felix-iii",
    "title": "Pope St. Felix III (48º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Felix III was a Roman of noble family who served as pope from 483 to 492.",
    "excerpt": "St. Felix III — 13 March 483 –1 March 492. Roman citizen, later a subject of the Kingdom of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 47,
        "slug": "st-simplicius",
        "name": "St. Simplicius",
        "relation": "Previous pope"
      },
      {
        "num": 49,
        "slug": "st-gelasius-i",
        "name": "St. Gelasius I",
        "relation": "Next pope"
      },
      {
        "num": 26,
        "slug": "st-felix-i",
        "name": "St. Felix I",
        "relation": "Also named Felix"
      },
      {
        "num": 54,
        "slug": "st-felix-iv",
        "name": "St. Felix IV",
        "relation": "Also named Felix"
      }
    ]
  },
  {
    "num": 49,
    "slug": "st-gelasius-i",
    "title": "Pope St. Gelasius I (49º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Gelasius I was pope from 492 to 496 and one of the most important theologians among the early popes.",
    "excerpt": "St. Gelasius I — 1 March 492 –21 November 496. Roman citizen of Berber descent, later a subject of the(Ostrogothic) Kingdom of Italy; last pope to have...",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 48,
        "slug": "st-felix-iii",
        "name": "St. Felix III",
        "relation": "Previous pope"
      },
      {
        "num": 50,
        "slug": "anastasius-ii",
        "name": "Anastasius II",
        "relation": "Next pope"
      },
      {
        "num": 161,
        "slug": "gelasius-ii",
        "name": "Gelasius II",
        "relation": "Also named Gelasius"
      }
    ]
  },
  {
    "num": 50,
    "slug": "anastasius-ii",
    "title": "Pope Anastasius II (50º): Biography, Pontificate & Legacy",
    "metaDescription": "Anastasius II was a Roman who served as pope from 496 to 498.",
    "excerpt": "Anastasius II — 24 November 496 –19 November 498. Roman citizen of Greek descent, later a subject of the(Ostrogothic) Kingdom of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 49,
        "slug": "st-gelasius-i",
        "name": "St. Gelasius I",
        "relation": "Previous pope"
      },
      {
        "num": 51,
        "slug": "st-symmachus",
        "name": "St. Symmachus",
        "relation": "Next pope"
      },
      {
        "num": 39,
        "slug": "st-anastasius-i",
        "name": "St. Anastasius I",
        "relation": "Also named Anastasius"
      },
      {
        "num": 120,
        "slug": "anastasius-iii",
        "name": "Anastasius III",
        "relation": "Also named Anastasius"
      },
      {
        "num": 168,
        "slug": "anastasius-iv",
        "name": "Anastasius IV",
        "relation": "Also named Anastasius"
      }
    ]
  },
  {
    "num": 51,
    "slug": "st-symmachus",
    "title": "Pope St. Symmachus (51º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Symmachus was a Sardinian-born deacon who served as pope from 498 to 514.",
    "excerpt": "St. Symmachus — 22 November 498 –19 July 514. Roman citizen, later a subject of the(Ostrogothic) Kingdom of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 50,
        "slug": "anastasius-ii",
        "name": "Anastasius II",
        "relation": "Previous pope"
      },
      {
        "num": 52,
        "slug": "st-hormisdas",
        "name": "St. Hormisdas",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 52,
    "slug": "st-hormisdas",
    "title": "Pope St. Hormisdas (52º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Hormisdas was pope from 514 to 523 and the pontiff who ended the 35-year Acacian schism between Rome and Constantinople.",
    "excerpt": "St. Hormisdas — 20 July 514 –6 August 523. Roman citizen, later a subject of the(Ostrogothic) Kingdom of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 51,
        "slug": "st-symmachus",
        "name": "St. Symmachus",
        "relation": "Previous pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 53,
    "slug": "st-john-i",
    "title": "Pope St. John I (53º): Biography, Pontificate & Legacy",
    "metaDescription": "St. John I was pope from 523 to 526 and the first pope known to have traveled to Constantinople.",
    "excerpt": "St. John I — 13 August 523 –18 May 526. Roman citizen, later a subject of the(Ostrogothic) Kingdom of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 52,
        "slug": "st-hormisdas",
        "name": "St. Hormisdas",
        "relation": "Previous pope"
      },
      {
        "num": 54,
        "slug": "st-felix-iv",
        "name": "St. Felix IV",
        "relation": "Next pope"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      },
      {
        "num": 72,
        "slug": "john-iv",
        "name": "John IV",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 54,
    "slug": "st-felix-iv",
    "title": "Pope St. Felix IV (54º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Felix IV, from Samnium in southern Italy, was pope from 526 to 530.",
    "excerpt": "St. Felix IV — 12 July 526 –22 September 530. Subject of the(Ostrogothic) Kingdom of Italy of Roman descent.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Previous pope"
      },
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Next pope"
      },
      {
        "num": 26,
        "slug": "st-felix-i",
        "name": "St. Felix I",
        "relation": "Also named Felix"
      },
      {
        "num": 48,
        "slug": "st-felix-iii",
        "name": "St. Felix III",
        "relation": "Also named Felix"
      }
    ]
  },
  {
    "num": 55,
    "slug": "boniface-ii",
    "title": "Pope Boniface II (55º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "Boniface II was pope from 530 to 532 and the first pope of Germanic descent; he was born in Rome to a father with a Gothic name.",
    "excerpt": "Boniface II — 22 September 530 –17 October 532. Ostrogoth; first Germanic pope.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 54,
        "slug": "st-felix-iv",
        "name": "St. Felix IV",
        "relation": "Previous pope"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Next pope"
      },
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Also named Boniface"
      },
      {
        "num": 66,
        "slug": "boniface-iii",
        "name": "Boniface III",
        "relation": "Also named Boniface"
      },
      {
        "num": 67,
        "slug": "st-boniface-iv",
        "name": "St. Boniface IV",
        "relation": "Also named Boniface"
      }
    ]
  },
  {
    "num": 56,
    "slug": "john-ii",
    "title": "Pope John II (56º): Biography, Pontificate & Legacy",
    "metaDescription": "John II was pope from 533 to 535 and the first pope to take a new name upon election.",
    "excerpt": "John II — 2 January 533 –8 May 535. Roman citizen, later a subject of the(Ostrogothic) Kingdom of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Previous pope"
      },
      {
        "num": 57,
        "slug": "st-agapetus-i",
        "name": "St. Agapetus I",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      },
      {
        "num": 72,
        "slug": "john-iv",
        "name": "John IV",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 57,
    "slug": "st-agapetus-i",
    "title": "Pope St. Agapetus I (57º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Agapetus I was pope for less than a year, from 535 to 536.",
    "excerpt": "St. Agapetus I — 13 May 535 –22 April 536. Subject of the(Ostrogothic) Kingdom of Italy of Roman descent.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Previous pope"
      },
      {
        "num": 58,
        "slug": "st-silverius",
        "name": "St. Silverius",
        "relation": "Next pope"
      },
      {
        "num": 129,
        "slug": "agapetus-ii",
        "name": "Agapetus II",
        "relation": "Also named Agapetus"
      }
    ]
  },
  {
    "num": 58,
    "slug": "st-silverius",
    "title": "Pope St. Silverius (58º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Silverius, son of Pope Hormisdas, was pope from 536 until he was deposed in March 537.",
    "excerpt": "St. Silverius — 8 June 536 –11 March 537. Subject of the(Ostrogothic) Kingdom of Italy of Roman descent.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 57,
        "slug": "st-agapetus-i",
        "name": "St. Agapetus I",
        "relation": "Previous pope"
      },
      {
        "num": 59,
        "slug": "vigilius",
        "name": "Vigilius",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 59,
    "slug": "vigilius",
    "title": "Pope Vigilius (59º): Biography, Pontificate & Legacy",
    "metaDescription": "Vigilius was pope from 537 to 555, one of the most troubled pontificates of late antiquity.",
    "excerpt": "Vigilius — 29 March 537 –7 June 555. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 58,
        "slug": "st-silverius",
        "name": "St. Silverius",
        "relation": "Previous pope"
      },
      {
        "num": 60,
        "slug": "pelagius-i",
        "name": "Pelagius I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 60,
    "slug": "pelagius-i",
    "title": "Pope Pelagius I (60º): Biography, Pontificate & Legacy",
    "metaDescription": "Pelagius I was pope from 556 to 561.",
    "excerpt": "Pelagius I — 16 April 556 –4 March 561. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 59,
        "slug": "vigilius",
        "name": "Vigilius",
        "relation": "Previous pope"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Next pope"
      },
      {
        "num": 63,
        "slug": "pelagius-ii",
        "name": "Pelagius II",
        "relation": "Also named Pelagius"
      }
    ]
  },
  {
    "num": 61,
    "slug": "john-iii",
    "title": "Pope John III (61º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John III was a Roman cleric, born Catelinus, who led the Church from 561 to 574.",
    "excerpt": "John III — 17 July 561 –13 July 574. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 60,
        "slug": "pelagius-i",
        "name": "Pelagius I",
        "relation": "Previous pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 72,
        "slug": "john-iv",
        "name": "John IV",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 62,
    "slug": "benedict-i",
    "title": "Pope Benedict I (62º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict I was a Roman who served as pope from 575 to 579, during the Lombard advance through Italy.",
    "excerpt": "Benedict I — 2 June 575 –30 July 579. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Previous pope"
      },
      {
        "num": 63,
        "slug": "pelagius-ii",
        "name": "Pelagius II",
        "relation": "Next pope"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      },
      {
        "num": 117,
        "slug": "benedict-iv",
        "name": "Benedict IV",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 63,
    "slug": "pelagius-ii",
    "title": "Pope Pelagius II (63º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Pelagius II, a Roman of Gothic descent, reigned from 579 to 590 while the Lombards threatened Rome.",
    "excerpt": "Pelagius II — 26 November 579 –7 February 590. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Previous pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Next pope"
      },
      {
        "num": 60,
        "slug": "pelagius-i",
        "name": "Pelagius I",
        "relation": "Also named Pelagius"
      }
    ]
  },
  {
    "num": 64,
    "slug": "st-gregory-i-the-great",
    "title": "Pope St. Gregory I the Great (64º): Biography, Legacy & Medieval Church",
    "metaDescription": "Pope St. Gregory I, called Gregory the Great, led the Church from 590 to 604.",
    "excerpt": "St. Gregory I the Great — 3 September 590 –12 March 604. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "4 min",
    "relatedPopes": [
      {
        "num": 63,
        "slug": "pelagius-ii",
        "name": "Pelagius II",
        "relation": "Previous pope"
      },
      {
        "num": 65,
        "slug": "sabinian",
        "name": "Sabinian",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 65,
    "slug": "sabinian",
    "title": "Pope Sabinian (65º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Sabinian, born at Blera near Viterbo, succeeded Gregory the Great and reigned from 604 to 606.",
    "excerpt": "Sabinian — 13 September 604 –22 February 606. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Previous pope"
      },
      {
        "num": 66,
        "slug": "boniface-iii",
        "name": "Boniface III",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 66,
    "slug": "boniface-iii",
    "title": "Pope Boniface III (66º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Boniface III, a Roman of Greek descent, reigned for less than nine months in 607.",
    "excerpt": "Boniface III — 19 February 607 –12 November 607. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 65,
        "slug": "sabinian",
        "name": "Sabinian",
        "relation": "Previous pope"
      },
      {
        "num": 67,
        "slug": "st-boniface-iv",
        "name": "St. Boniface IV",
        "relation": "Next pope"
      },
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Also named Boniface"
      },
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Also named Boniface"
      }
    ]
  },
  {
    "num": 67,
    "slug": "st-boniface-iv",
    "title": "Pope St. Boniface IV (67º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Boniface IV reigned from 608 to 615.",
    "excerpt": "St. Boniface IV — 15 September 608 –8 May 615. Subject of the(Ostrogothic) Kingdom of Italy, later a(Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 66,
        "slug": "boniface-iii",
        "name": "Boniface III",
        "relation": "Previous pope"
      },
      {
        "num": 68,
        "slug": "st-adeodatus-i",
        "name": "St. Adeodatus I",
        "relation": "Next pope"
      },
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Also named Boniface"
      },
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Also named Boniface"
      }
    ]
  },
  {
    "num": 68,
    "slug": "st-adeodatus-i",
    "title": "Pope St. Adeodatus I (68º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Adeodatus I, also called Deusdedit, was a Roman priest who reigned from 615 to 618.",
    "excerpt": "St. Adeodatus I — 13 November 615 –8 November 618. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 67,
        "slug": "st-boniface-iv",
        "name": "St. Boniface IV",
        "relation": "Previous pope"
      },
      {
        "num": 69,
        "slug": "boniface-v",
        "name": "Boniface V",
        "relation": "Next pope"
      },
      {
        "num": 77,
        "slug": "adeodatus-ii",
        "name": "Adeodatus II",
        "relation": "Also named Adeodatus"
      }
    ]
  },
  {
    "num": 69,
    "slug": "boniface-v",
    "title": "Pope Boniface V (69º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Boniface V, a native of Naples, reigned from 619 to 625.",
    "excerpt": "Boniface V — 23 December 619 –25 October 625. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 68,
        "slug": "st-adeodatus-i",
        "name": "St. Adeodatus I",
        "relation": "Previous pope"
      },
      {
        "num": 70,
        "slug": "honorius-i",
        "name": "Honorius I",
        "relation": "Next pope"
      },
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Also named Boniface"
      },
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Also named Boniface"
      },
      {
        "num": 66,
        "slug": "boniface-iii",
        "name": "Boniface III",
        "relation": "Also named Boniface"
      }
    ]
  },
  {
    "num": 70,
    "slug": "honorius-i",
    "title": "Pope Honorius I (70º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Honorius I, from Campania, reigned from 625 to 638.",
    "excerpt": "Honorius I — 27 October 625 –12 October 638. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 69,
        "slug": "boniface-v",
        "name": "Boniface V",
        "relation": "Previous pope"
      },
      {
        "num": 71,
        "slug": "severinus",
        "name": "Severinus",
        "relation": "Next pope"
      },
      {
        "num": 163,
        "slug": "honorius-ii",
        "name": "Honorius II",
        "relation": "Also named Honorius"
      },
      {
        "num": 177,
        "slug": "honorius-iii",
        "name": "Honorius III",
        "relation": "Also named Honorius"
      },
      {
        "num": 190,
        "slug": "honorius-iv",
        "name": "Honorius IV",
        "relation": "Also named Honorius"
      }
    ]
  },
  {
    "num": 71,
    "slug": "severinus",
    "title": "Pope Severinus (71º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Severinus was a Roman elected after the death of Honorius I in 638, but imperial resistance kept him from being consecrated until May 640, and he died…",
    "excerpt": "Severinus — 28 May 640 –2 August 640. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 70,
        "slug": "honorius-i",
        "name": "Honorius I",
        "relation": "Previous pope"
      },
      {
        "num": 72,
        "slug": "john-iv",
        "name": "John IV",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 72,
    "slug": "john-iv",
    "title": "Pope John IV (72º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John IV, a Dalmatian from Zadar, reigned from 640 to 642.",
    "excerpt": "John IV — 24 December 640 –12 October 642. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 71,
        "slug": "severinus",
        "name": "Severinus",
        "relation": "Previous pope"
      },
      {
        "num": 73,
        "slug": "theodore-i",
        "name": "Theodore I",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 73,
    "slug": "theodore-i",
    "title": "Pope Theodore I (73º): Lateran Council — Complete Guide",
    "metaDescription": "Pope Theodore I, a Greek born in Jerusalem, reigned from 642 to 649.",
    "excerpt": "Theodore I — 24 November 642 –14 May 649. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 72,
        "slug": "john-iv",
        "name": "John IV",
        "relation": "Previous pope"
      },
      {
        "num": 74,
        "slug": "st-martin-i",
        "name": "St. Martin I",
        "relation": "Next pope"
      },
      {
        "num": 115,
        "slug": "theodore-ii",
        "name": "Theodore II",
        "relation": "Also named Theodore"
      }
    ]
  },
  {
    "num": 74,
    "slug": "st-martin-i",
    "title": "Pope St. Martin I (74º): Martyrdom & Sainthood — Complete Guide",
    "metaDescription": "Pope St. Martin I reigned from 649 to 655.",
    "excerpt": "St. Martin I — 5 July 649 –653 or 654 at most. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 73,
        "slug": "theodore-i",
        "name": "Theodore I",
        "relation": "Previous pope"
      },
      {
        "num": 75,
        "slug": "st-eugene-i",
        "name": "St. Eugene I",
        "relation": "Next pope"
      },
      {
        "num": 189,
        "slug": "martin-iv",
        "name": "Martin IV",
        "relation": "Also named Martin"
      },
      {
        "num": 206,
        "slug": "martin-v",
        "name": "Martin V",
        "relation": "Also named Martin"
      }
    ]
  },
  {
    "num": 75,
    "slug": "st-eugene-i",
    "title": "Pope St. Eugene I (75º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Eugene I, a Roman cleric, was elected in 654 while his predecessor Martin I was still alive in exile, and he reigned until 657.",
    "excerpt": "St. Eugene I — 10 August 654 –2 June 657. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 74,
        "slug": "st-martin-i",
        "name": "St. Martin I",
        "relation": "Previous pope"
      },
      {
        "num": 76,
        "slug": "st-vitalian",
        "name": "St. Vitalian",
        "relation": "Next pope"
      },
      {
        "num": 99,
        "slug": "eugene-ii",
        "name": "Eugene II",
        "relation": "Also named Eugene"
      },
      {
        "num": 167,
        "slug": "bl-eugene-iii",
        "name": "Bl. Eugene III",
        "relation": "Also named Eugene"
      },
      {
        "num": 207,
        "slug": "eugene-iv",
        "name": "Eugene IV",
        "relation": "Also named Eugene"
      }
    ]
  },
  {
    "num": 76,
    "slug": "st-vitalian",
    "title": "Pope St. Vitalian (76º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Vitalian, from Segni, reigned from 657 to 672.",
    "excerpt": "St. Vitalian — 30 July 657 –27 January 672. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 75,
        "slug": "st-eugene-i",
        "name": "St. Eugene I",
        "relation": "Previous pope"
      },
      {
        "num": 77,
        "slug": "adeodatus-ii",
        "name": "Adeodatus II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 77,
    "slug": "adeodatus-ii",
    "title": "Pope Adeodatus II (77º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Adeodatus II was a Roman monk who reigned from 672 to 676.",
    "excerpt": "Adeodatus II — 11 April 672 –17 June 676. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 76,
        "slug": "st-vitalian",
        "name": "St. Vitalian",
        "relation": "Previous pope"
      },
      {
        "num": 78,
        "slug": "donus",
        "name": "Donus",
        "relation": "Next pope"
      },
      {
        "num": 68,
        "slug": "st-adeodatus-i",
        "name": "St. Adeodatus I",
        "relation": "Also named Adeodatus"
      }
    ]
  },
  {
    "num": 78,
    "slug": "donus",
    "title": "Pope Donus (78º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Donus was a Roman who reigned from 676 to 678.",
    "excerpt": "Donus — 2 November 676 –11 April 678. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 77,
        "slug": "adeodatus-ii",
        "name": "Adeodatus II",
        "relation": "Previous pope"
      },
      {
        "num": 79,
        "slug": "st-agatho",
        "name": "St. Agatho",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 79,
    "slug": "st-agatho",
    "title": "Pope St. Agatho (79º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Agatho, a Sicilian of Greek background, reigned from 678 to 681.",
    "excerpt": "St. Agatho — 27 June 678 –10 January 681. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 78,
        "slug": "donus",
        "name": "Donus",
        "relation": "Previous pope"
      },
      {
        "num": 80,
        "slug": "st-leo-ii-leo-secundus",
        "name": "St. Leo II LEO Secundus",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 80,
    "slug": "st-leo-ii-leo-secundus",
    "title": "Pope St. Leo II LEO Secundus (80º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Leo II, a Sicilian, reigned from 682 to 683.",
    "excerpt": "St. Leo II LEO Secundus — 17 August 682 –3 July 683. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 79,
        "slug": "st-agatho",
        "name": "St. Agatho",
        "relation": "Previous pope"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 81,
    "slug": "st-benedict-ii",
    "title": "Pope St. Benedict II (81º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Benedict II, a Roman priest, reigned from 684 to 685.",
    "excerpt": "St. Benedict II — 26 June 684 –8 May 685. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 80,
        "slug": "st-leo-ii-leo-secundus",
        "name": "St. Leo II LEO Secundus",
        "relation": "Previous pope"
      },
      {
        "num": 82,
        "slug": "john-v",
        "name": "John V",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      },
      {
        "num": 117,
        "slug": "benedict-iv",
        "name": "Benedict IV",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 82,
    "slug": "john-v",
    "title": "Pope John V (82º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John V, a Syrian from the region of Antioch, reigned from 685 to 686.",
    "excerpt": "John V — 23 July 685 –2 August 686. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Previous pope"
      },
      {
        "num": 83,
        "slug": "conon",
        "name": "Conon",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 83,
    "slug": "conon",
    "title": "Pope Conon (83º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Conon reigned from 686 to 687.",
    "excerpt": "Conon — 21 October 686 –21 September 687. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 82,
        "slug": "john-v",
        "name": "John V",
        "relation": "Previous pope"
      },
      {
        "num": 84,
        "slug": "st-sergius-i",
        "name": "St. Sergius I",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 84,
    "slug": "st-sergius-i",
    "title": "Pope St. Sergius I (84º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Sergius I, born in Sicily to a Syrian family from Antioch, reigned from 687 to 701.",
    "excerpt": "St. Sergius I — 15 December 687 –8 September 701. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 83,
        "slug": "conon",
        "name": "Conon",
        "relation": "Previous pope"
      },
      {
        "num": 85,
        "slug": "john-vi",
        "name": "John VI",
        "relation": "Next pope"
      },
      {
        "num": 102,
        "slug": "sergius-ii",
        "name": "Sergius II",
        "relation": "Also named Sergius"
      },
      {
        "num": 119,
        "slug": "sergius-iii",
        "name": "Sergius III",
        "relation": "Also named Sergius"
      },
      {
        "num": 142,
        "slug": "sergius-iv",
        "name": "Sergius IV",
        "relation": "Also named Sergius"
      }
    ]
  },
  {
    "num": 85,
    "slug": "john-vi",
    "title": "Pope John VI (85º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John VI, a Greek, reigned from 701 to 705.",
    "excerpt": "John VI — 30 October 701 –11 January 705. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 84,
        "slug": "st-sergius-i",
        "name": "St. Sergius I",
        "relation": "Previous pope"
      },
      {
        "num": 86,
        "slug": "john-vii",
        "name": "John VII",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 86,
    "slug": "john-vii",
    "title": "Pope John VII (86º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John VII, a Greek and the son of a Byzantine official in Rome, reigned from 705 to 707.",
    "excerpt": "John VII — 1 March 705 –18 October 707. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 85,
        "slug": "john-vi",
        "name": "John VI",
        "relation": "Previous pope"
      },
      {
        "num": 87,
        "slug": "sisinnius",
        "name": "Sisinnius",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 87,
    "slug": "sisinnius",
    "title": "Pope Sisinnius (87º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Sisinnius, a Syrian, reigned for only about three weeks in January and February 708.",
    "excerpt": "Sisinnius — 15 January 708 –4 February 708. Subject of the Rashidun Caliphate.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 86,
        "slug": "john-vii",
        "name": "John VII",
        "relation": "Previous pope"
      },
      {
        "num": 88,
        "slug": "constantine",
        "name": "Constantine",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 88,
    "slug": "constantine",
    "title": "Pope Constantine (88º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Constantine, a Syrian, reigned from 708 to 715.",
    "excerpt": "Constantine — 25 March 708 –9 April 715. Subject of the Umayyad Caliphate.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 87,
        "slug": "sisinnius",
        "name": "Sisinnius",
        "relation": "Previous pope"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 89,
    "slug": "st-gregory-ii",
    "title": "Pope St. Gregory II (89º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Gregory II, a Roman, reigned from 715 to 731.",
    "excerpt": "St. Gregory II — 19 May 715 –11 February 731. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 88,
        "slug": "constantine",
        "name": "Constantine",
        "relation": "Previous pope"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 101,
        "slug": "gregory-iv",
        "name": "Gregory IV",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 90,
    "slug": "st-gregory-iii",
    "title": "Pope St. Gregory III (90º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Gregory III, a Syrian, reigned from 731 to 741.",
    "excerpt": "St. Gregory III — 18 March 731 –28 November 741. Subject of the Umayyad Caliphate; last pope from Syria.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Previous pope"
      },
      {
        "num": 91,
        "slug": "st-zachary",
        "name": "St. Zachary",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 101,
        "slug": "gregory-iv",
        "name": "Gregory IV",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 91,
    "slug": "st-zachary",
    "title": "Pope St. Zachary (91º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Zachary was a Greek-speaking churchman from Santa Severina in Calabria who led the Church from 741 to 752.",
    "excerpt": "St. Zachary — 3 December 741 –15 March 752. (Eastern) Roman citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Previous pope"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 92,
    "slug": "stephen-ii",
    "title": "Pope Stephen II (92º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Stephen II was a Roman deacon who reigned from 752 to 757 and turned to the Franks for protection against the Lombards.",
    "excerpt": "Stephen II — 26 March 752 –26 April 757. (Eastern) Roman citizen, later the sovereign of the independent Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 91,
        "slug": "st-zachary",
        "name": "St. Zachary",
        "relation": "Previous pope"
      },
      {
        "num": 93,
        "slug": "st-paul-i",
        "name": "St. Paul I",
        "relation": "Next pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Also named Stephen"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Also named Stephen"
      },
      {
        "num": 97,
        "slug": "stephen-iv",
        "name": "Stephen IV",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 93,
    "slug": "st-paul-i",
    "title": "Pope St. Paul I (93º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Paul I, a Roman deacon and the younger brother of Stephen II, reigned from 757 to 767.",
    "excerpt": "St. Paul I — 29 May 757 –28 June 767. (Eastern) Roman citizen, later the sovereign of the independent Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Previous pope"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Next pope"
      },
      {
        "num": 211,
        "slug": "paul-ii",
        "name": "Paul II",
        "relation": "Also named Paul"
      },
      {
        "num": 220,
        "slug": "paul-iii",
        "name": "Paul III",
        "relation": "Also named Paul"
      },
      {
        "num": 223,
        "slug": "paul-iv",
        "name": "Paul IV",
        "relation": "Also named Paul"
      }
    ]
  },
  {
    "num": 94,
    "slug": "stephen-iii",
    "title": "Pope Stephen III (94º): Lateran Council — Complete Guide",
    "metaDescription": "Pope Stephen III was a Sicilian-born cleric who came to power after a violent struggle over the papacy and reigned until January 772.",
    "excerpt": "Stephen III — 7 August 768 –24 January 772. (Eastern) Roman citizen, later the sovereign of the independent Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 93,
        "slug": "st-paul-i",
        "name": "St. Paul I",
        "relation": "Previous pope"
      },
      {
        "num": 95,
        "slug": "adrian-i",
        "name": "Adrian I",
        "relation": "Next pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Also named Stephen"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Also named Stephen"
      },
      {
        "num": 97,
        "slug": "stephen-iv",
        "name": "Stephen IV",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 95,
    "slug": "adrian-i",
    "title": "Pope Adrian I (95º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Adrian I was a Roman nobleman who reigned from 772 to 795, one of the longest pontificates in history.",
    "excerpt": "Adrian I — 1 February 772 –26 December 795. (Eastern) Roman citizen, later the sovereign of the independent Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Previous pope"
      },
      {
        "num": 96,
        "slug": "st-leo-iii-leo-tertius",
        "name": "St. Leo III LEO Tertius",
        "relation": "Next pope"
      },
      {
        "num": 106,
        "slug": "adrian-ii",
        "name": "Adrian II",
        "relation": "Also named Adrian"
      },
      {
        "num": 109,
        "slug": "st-adrian-iii",
        "name": "St. Adrian III",
        "relation": "Also named Adrian"
      },
      {
        "num": 169,
        "slug": "adrian-iv",
        "name": "Adrian IV",
        "relation": "Also named Adrian"
      }
    ]
  },
  {
    "num": 96,
    "slug": "st-leo-iii-leo-tertius",
    "title": "Pope St. Leo III LEO Tertius (96º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Leo III, a Roman cleric of modest background, reigned from 795 to 816.",
    "excerpt": "St. Leo III LEO Tertius — 26 December 795 –12 June 816. (Eastern) Roman citizen, later the sovereign of the independent Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 95,
        "slug": "adrian-i",
        "name": "Adrian I",
        "relation": "Previous pope"
      },
      {
        "num": 97,
        "slug": "stephen-iv",
        "name": "Stephen IV",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 97,
    "slug": "stephen-iv",
    "title": "Pope Stephen IV (97º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Stephen IV was a Roman deacon who reigned only seven months, from June 816 to January 817.",
    "excerpt": "Stephen IV — 22 June 816 –24 January 817. First pope born in Rome after breaking away from the (Eastern) Roman Empire.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 96,
        "slug": "st-leo-iii-leo-tertius",
        "name": "St. Leo III LEO Tertius",
        "relation": "Previous pope"
      },
      {
        "num": 98,
        "slug": "st-paschal-i",
        "name": "St. Paschal I",
        "relation": "Next pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Also named Stephen"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Also named Stephen"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 98,
    "slug": "st-paschal-i",
    "title": "Pope St. Paschal I (98º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Paschal I, a Roman monk and abbot, reigned from 817 to 824.",
    "excerpt": "St. Paschal I — 25 January 817 –11 February 824. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 97,
        "slug": "stephen-iv",
        "name": "Stephen IV",
        "relation": "Previous pope"
      },
      {
        "num": 99,
        "slug": "eugene-ii",
        "name": "Eugene II",
        "relation": "Next pope"
      },
      {
        "num": 160,
        "slug": "paschal-ii",
        "name": "Paschal II",
        "relation": "Also named Paschal"
      }
    ]
  },
  {
    "num": 99,
    "slug": "eugene-ii",
    "title": "Pope Eugene II (99º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Eugene II was a Roman archpriest who reigned from 824 to 827.",
    "excerpt": "Eugene II — 6 June 824 –27 August 827. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 98,
        "slug": "st-paschal-i",
        "name": "St. Paschal I",
        "relation": "Previous pope"
      },
      {
        "num": 100,
        "slug": "valentine",
        "name": "Valentine",
        "relation": "Next pope"
      },
      {
        "num": 75,
        "slug": "st-eugene-i",
        "name": "St. Eugene I",
        "relation": "Also named Eugene"
      },
      {
        "num": 167,
        "slug": "bl-eugene-iii",
        "name": "Bl. Eugene III",
        "relation": "Also named Eugene"
      },
      {
        "num": 207,
        "slug": "eugene-iv",
        "name": "Eugene IV",
        "relation": "Also named Eugene"
      }
    ]
  },
  {
    "num": 100,
    "slug": "valentine",
    "title": "Pope Valentine (100º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Valentine was a Roman cleric who reigned for only about a month or six weeks in late 827.",
    "excerpt": "Valentine — 31 August 827 –10 October 827. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 99,
        "slug": "eugene-ii",
        "name": "Eugene II",
        "relation": "Previous pope"
      },
      {
        "num": 101,
        "slug": "gregory-iv",
        "name": "Gregory IV",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 101,
    "slug": "gregory-iv",
    "title": "Pope Gregory IV (101º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Gregory IV was a Roman cardinal priest who reigned from 827 to 844, a period dominated by civil war among the sons of Louis the Pious.",
    "excerpt": "Gregory IV — 20 December 827 –25 January 844. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 100,
        "slug": "valentine",
        "name": "Valentine",
        "relation": "Previous pope"
      },
      {
        "num": 102,
        "slug": "sergius-ii",
        "name": "Sergius II",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 102,
    "slug": "sergius-ii",
    "title": "Pope Sergius II (102º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Sergius II was an elderly Roman aristocrat who reigned from 844 to 847.",
    "excerpt": "Sergius II — 25 January 844 –27 January 847. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 101,
        "slug": "gregory-iv",
        "name": "Gregory IV",
        "relation": "Previous pope"
      },
      {
        "num": 103,
        "slug": "st-leo-iv-leo-quartus",
        "name": "St. Leo IV LEO Quartus",
        "relation": "Next pope"
      },
      {
        "num": 84,
        "slug": "st-sergius-i",
        "name": "St. Sergius I",
        "relation": "Also named Sergius"
      },
      {
        "num": 119,
        "slug": "sergius-iii",
        "name": "Sergius III",
        "relation": "Also named Sergius"
      },
      {
        "num": 142,
        "slug": "sergius-iv",
        "name": "Sergius IV",
        "relation": "Also named Sergius"
      }
    ]
  },
  {
    "num": 103,
    "slug": "st-leo-iv-leo-quartus",
    "title": "Pope St. Leo IV LEO Quartus (103º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Leo IV was a Roman of Lombard descent and a Benedictine monk who reigned from 847 to 855.",
    "excerpt": "St. Leo IV LEO Quartus — 10 April 847 –17 July 855. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 102,
        "slug": "sergius-ii",
        "name": "Sergius II",
        "relation": "Previous pope"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 104,
    "slug": "benedict-iii",
    "title": "Pope Benedict III (104º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict III was a Roman cleric who reigned from 855 to 858.",
    "excerpt": "Benedict III — 29 September 855 –17 April 858. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 103,
        "slug": "st-leo-iv-leo-quartus",
        "name": "St. Leo IV LEO Quartus",
        "relation": "Previous pope"
      },
      {
        "num": 105,
        "slug": "st-nicholas-i-the-great",
        "name": "St. Nicholas I the Great",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 117,
        "slug": "benedict-iv",
        "name": "Benedict IV",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 105,
    "slug": "st-nicholas-i-the-great",
    "title": "Pope St. Nicholas I the Great (105º): the Great — Complete Guide",
    "metaDescription": "Pope St. Nicholas I, called the Great, reigned from 858 to 867 and is one of only three popes commonly given that title.",
    "excerpt": "St. Nicholas I the Great — 24 April 858 –13 November 867. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Previous pope"
      },
      {
        "num": 106,
        "slug": "adrian-ii",
        "name": "Adrian II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 106,
    "slug": "adrian-ii",
    "title": "Pope Adrian II (106º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Adrian II was a Roman priest elected at the age of about seventy-five, who reigned from 867 to 872.",
    "excerpt": "Adrian II — 14 December 867 –14 December 872. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 105,
        "slug": "st-nicholas-i-the-great",
        "name": "St. Nicholas I the Great",
        "relation": "Previous pope"
      },
      {
        "num": 107,
        "slug": "john-viii",
        "name": "John VIII",
        "relation": "Next pope"
      },
      {
        "num": 95,
        "slug": "adrian-i",
        "name": "Adrian I",
        "relation": "Also named Adrian"
      },
      {
        "num": 109,
        "slug": "st-adrian-iii",
        "name": "St. Adrian III",
        "relation": "Also named Adrian"
      },
      {
        "num": 169,
        "slug": "adrian-iv",
        "name": "Adrian IV",
        "relation": "Also named Adrian"
      }
    ]
  },
  {
    "num": 107,
    "slug": "john-viii",
    "title": "Pope John VIII (107º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John VIII, a Roman archdeacon, reigned from 872 to 882.",
    "excerpt": "John VIII — 14 December 872 –16 December 882. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 106,
        "slug": "adrian-ii",
        "name": "Adrian II",
        "relation": "Previous pope"
      },
      {
        "num": 108,
        "slug": "marinus-i",
        "name": "Marinus I",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 108,
    "slug": "marinus-i",
    "title": "Pope Marinus I (108º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Marinus I, a native of Gallese and son of a priest, reigned from 882 to 884.",
    "excerpt": "Marinus I — 16 December 882 –15 May 884. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 107,
        "slug": "john-viii",
        "name": "John VIII",
        "relation": "Previous pope"
      },
      {
        "num": 109,
        "slug": "st-adrian-iii",
        "name": "St. Adrian III",
        "relation": "Next pope"
      },
      {
        "num": 128,
        "slug": "marinus-ii",
        "name": "Marinus II",
        "relation": "Also named Marinus"
      }
    ]
  },
  {
    "num": 109,
    "slug": "st-adrian-iii",
    "title": "Pope St. Adrian III (109º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Adrian III was a Roman who reigned for about fourteen months, from 884 to 885.",
    "excerpt": "St. Adrian III — 17 May 884 –8 July 885. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 108,
        "slug": "marinus-i",
        "name": "Marinus I",
        "relation": "Previous pope"
      },
      {
        "num": 110,
        "slug": "stephen-v",
        "name": "Stephen V",
        "relation": "Next pope"
      },
      {
        "num": 95,
        "slug": "adrian-i",
        "name": "Adrian I",
        "relation": "Also named Adrian"
      },
      {
        "num": 106,
        "slug": "adrian-ii",
        "name": "Adrian II",
        "relation": "Also named Adrian"
      },
      {
        "num": 169,
        "slug": "adrian-iv",
        "name": "Adrian IV",
        "relation": "Also named Adrian"
      }
    ]
  },
  {
    "num": 110,
    "slug": "stephen-v",
    "title": "Pope Stephen V (110º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Stephen V, a Roman nobleman, reigned from 885 to 891.",
    "excerpt": "Stephen V — September 885 –14 September 891. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 109,
        "slug": "st-adrian-iii",
        "name": "St. Adrian III",
        "relation": "Previous pope"
      },
      {
        "num": 111,
        "slug": "formosus",
        "name": "Formosus",
        "relation": "Next pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Also named Stephen"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Also named Stephen"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 111,
    "slug": "formosus",
    "title": "Pope Formosus (111º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Formosus, previously bishop of Porto and a papal legate to Bulgaria, reigned from 891 to 896.",
    "excerpt": "Formosus — 6 October 891 –4 April 896. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 110,
        "slug": "stephen-v",
        "name": "Stephen V",
        "relation": "Previous pope"
      },
      {
        "num": 112,
        "slug": "boniface-vi",
        "name": "Boniface VI",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 112,
    "slug": "boniface-vi",
    "title": "Pope Boniface VI (112º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Boniface VI was a Roman cleric who held the papacy for only about fifteen days in April 896, immediately after the death of Formosus.",
    "excerpt": "Boniface VI — 11 April 896 –26 April 896. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 111,
        "slug": "formosus",
        "name": "Formosus",
        "relation": "Previous pope"
      },
      {
        "num": 113,
        "slug": "stephen-vi",
        "name": "Stephen VI",
        "relation": "Next pope"
      },
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Also named Boniface"
      },
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Also named Boniface"
      },
      {
        "num": 66,
        "slug": "boniface-iii",
        "name": "Boniface III",
        "relation": "Also named Boniface"
      }
    ]
  },
  {
    "num": 113,
    "slug": "stephen-vi",
    "title": "Pope Stephen VI (113º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Stephen VI, previously bishop of Anagni, reigned from May 896 to August 897.",
    "excerpt": "Stephen VI — 22 May 896 –14 August 897. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 112,
        "slug": "boniface-vi",
        "name": "Boniface VI",
        "relation": "Previous pope"
      },
      {
        "num": 114,
        "slug": "romanus",
        "name": "Romanus",
        "relation": "Next pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Also named Stephen"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Also named Stephen"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 114,
    "slug": "romanus",
    "title": "Pope Romanus (114º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Romanus, a native of Gallese and cardinal priest of San Pietro in Vincoli, reigned for roughly three months in 897, after the fall of Stephen VI.",
    "excerpt": "Romanus — 14 August 897 –November 897. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 113,
        "slug": "stephen-vi",
        "name": "Stephen VI",
        "relation": "Previous pope"
      },
      {
        "num": 115,
        "slug": "theodore-ii",
        "name": "Theodore II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 115,
    "slug": "theodore-ii",
    "title": "Pope Theodore II (115º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Theodore II was a Roman priest who reigned for only about twenty days in December 897.",
    "excerpt": "Theodore II — December 897 –20 December 897. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 114,
        "slug": "romanus",
        "name": "Romanus",
        "relation": "Previous pope"
      },
      {
        "num": 116,
        "slug": "john-ix",
        "name": "John IX",
        "relation": "Next pope"
      },
      {
        "num": 73,
        "slug": "theodore-i",
        "name": "Theodore I",
        "relation": "Also named Theodore"
      }
    ]
  },
  {
    "num": 116,
    "slug": "john-ix",
    "title": "Pope John IX (116º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John IX was a Benedictine monk from Tivoli who reigned from 898 to 900.",
    "excerpt": "John IX — 18 January 898 –5 January 900. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 115,
        "slug": "theodore-ii",
        "name": "Theodore II",
        "relation": "Previous pope"
      },
      {
        "num": 117,
        "slug": "benedict-iv",
        "name": "Benedict IV",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 117,
    "slug": "benedict-iv",
    "title": "Pope Benedict IV (117º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict IV was a Roman priest who reigned from 900 to 903.",
    "excerpt": "Benedict IV — 1 February 900 –30 July 903. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 116,
        "slug": "john-ix",
        "name": "John IX",
        "relation": "Previous pope"
      },
      {
        "num": 118,
        "slug": "leo-v-leo-quintus",
        "name": "Leo V LEO Quintus",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 118,
    "slug": "leo-v-leo-quintus",
    "title": "Pope Leo V LEO Quintus (118º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Leo V was a priest from Ardea, south of Rome, who reigned for about a month or two in 903.",
    "excerpt": "Leo V LEO Quintus — 30 July 903 –December 903. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 117,
        "slug": "benedict-iv",
        "name": "Benedict IV",
        "relation": "Previous pope"
      },
      {
        "num": 119,
        "slug": "sergius-iii",
        "name": "Sergius III",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 119,
    "slug": "sergius-iii",
    "title": "Pope Sergius III (119º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Sergius III was a Roman nobleman who reigned from 904 to 911.",
    "excerpt": "Sergius III — 29 January 904 –14 April 911. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 118,
        "slug": "leo-v-leo-quintus",
        "name": "Leo V LEO Quintus",
        "relation": "Previous pope"
      },
      {
        "num": 120,
        "slug": "anastasius-iii",
        "name": "Anastasius III",
        "relation": "Next pope"
      },
      {
        "num": 84,
        "slug": "st-sergius-i",
        "name": "St. Sergius I",
        "relation": "Also named Sergius"
      },
      {
        "num": 102,
        "slug": "sergius-ii",
        "name": "Sergius II",
        "relation": "Also named Sergius"
      },
      {
        "num": 142,
        "slug": "sergius-iv",
        "name": "Sergius IV",
        "relation": "Also named Sergius"
      }
    ]
  },
  {
    "num": 120,
    "slug": "anastasius-iii",
    "title": "Pope Anastasius III (120º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Anastasius III was a Roman who reigned for about two years, from 911 to 913, during the ascendancy of Theophylact's family in Rome.",
    "excerpt": "Anastasius III — 14 April 911 –June 913. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 119,
        "slug": "sergius-iii",
        "name": "Sergius III",
        "relation": "Previous pope"
      },
      {
        "num": 121,
        "slug": "lando",
        "name": "Lando",
        "relation": "Next pope"
      },
      {
        "num": 39,
        "slug": "st-anastasius-i",
        "name": "St. Anastasius I",
        "relation": "Also named Anastasius"
      },
      {
        "num": 50,
        "slug": "anastasius-ii",
        "name": "Anastasius II",
        "relation": "Also named Anastasius"
      },
      {
        "num": 168,
        "slug": "anastasius-iv",
        "name": "Anastasius IV",
        "relation": "Also named Anastasius"
      }
    ]
  },
  {
    "num": 121,
    "slug": "lando",
    "title": "Pope Lando (121º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Lando was a Roman cleric who led the Church for roughly seven months, from about July 913 to February 914, during the years when the family of the…",
    "excerpt": "Lando — 7 July 913 –5 February 914. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 120,
        "slug": "anastasius-iii",
        "name": "Anastasius III",
        "relation": "Previous pope"
      },
      {
        "num": 122,
        "slug": "john-x",
        "name": "John X",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 122,
    "slug": "john-x",
    "title": "Pope John X (122º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John X (reigned 914–928) was a former archbishop of Ravenna who became one of the most politically active popes of the tenth century.",
    "excerpt": "John X — March 914 –28 May 928. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 121,
        "slug": "lando",
        "name": "Lando",
        "relation": "Previous pope"
      },
      {
        "num": 123,
        "slug": "leo-vi-leo-sextus",
        "name": "Leo VI LEO Sextus",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 123,
    "slug": "leo-vi-leo-sextus",
    "title": "Pope Leo VI LEO Sextus (123º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Leo VI reigned for only about seven months, from May 928 to early 929, after John X had been imprisoned by Marozia's party.",
    "excerpt": "Leo VI LEO Sextus — 28 May 928 –February 929. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 122,
        "slug": "john-x",
        "name": "John X",
        "relation": "Previous pope"
      },
      {
        "num": 124,
        "slug": "stephen-vii",
        "name": "Stephen VII",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 124,
    "slug": "stephen-vii",
    "title": "Pope Stephen VII (124º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Stephen VII, sometimes numbered Stephen VIII, reigned from 929 to 931 in a Rome dominated by Marozia.",
    "excerpt": "Stephen VII — 3 February 929 –13 February 931. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 123,
        "slug": "leo-vi-leo-sextus",
        "name": "Leo VI LEO Sextus",
        "relation": "Previous pope"
      },
      {
        "num": 125,
        "slug": "john-xi",
        "name": "John XI",
        "relation": "Next pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Also named Stephen"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Also named Stephen"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 125,
    "slug": "john-xi",
    "title": "Pope John XI (125º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XI (reigned 931–935) was the son of Marozia, the dominant figure in Roman politics, and became pope as a young man.",
    "excerpt": "John XI — 15 March 931 –December 935. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 124,
        "slug": "stephen-vii",
        "name": "Stephen VII",
        "relation": "Previous pope"
      },
      {
        "num": 126,
        "slug": "leo-vii-leo-septimus",
        "name": "Leo VII LEO Septimus",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 126,
    "slug": "leo-vii-leo-septimus",
    "title": "Pope Leo VII LEO Septimus (126º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Leo VII reigned from January 936 to July 939 under the control of Alberic II, the ruler of Rome.",
    "excerpt": "Leo VII LEO Septimus — 3 January 936 –13 July 939. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 125,
        "slug": "john-xi",
        "name": "John XI",
        "relation": "Previous pope"
      },
      {
        "num": 127,
        "slug": "stephen-viii",
        "name": "Stephen VIII",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 127,
    "slug": "stephen-viii",
    "title": "Pope Stephen VIII (127º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Stephen VIII, sometimes numbered Stephen IX, reigned from 939 to 942 while Alberic II ruled Rome.",
    "excerpt": "Stephen VIII — 14 July 939 –30 October 942. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 126,
        "slug": "leo-vii-leo-septimus",
        "name": "Leo VII LEO Septimus",
        "relation": "Previous pope"
      },
      {
        "num": 128,
        "slug": "marinus-ii",
        "name": "Marinus II",
        "relation": "Next pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Also named Stephen"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Also named Stephen"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 128,
    "slug": "marinus-ii",
    "title": "Pope Marinus II (128º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Marinus II reigned from 942 to 946, chosen under the authority of Alberic II, the lay ruler of Rome.",
    "excerpt": "Marinus II — 30 October 942 –1 May 946. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 127,
        "slug": "stephen-viii",
        "name": "Stephen VIII",
        "relation": "Previous pope"
      },
      {
        "num": 129,
        "slug": "agapetus-ii",
        "name": "Agapetus II",
        "relation": "Next pope"
      },
      {
        "num": 108,
        "slug": "marinus-i",
        "name": "Marinus I",
        "relation": "Also named Marinus"
      }
    ]
  },
  {
    "num": 129,
    "slug": "agapetus-ii",
    "title": "Pope Agapetus II (129º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Agapetus II reigned from 946 to 955, the longest pontificate of Alberic II's era.",
    "excerpt": "Agapetus II — 10 May 946 –8 November 955. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 128,
        "slug": "marinus-ii",
        "name": "Marinus II",
        "relation": "Previous pope"
      },
      {
        "num": 130,
        "slug": "john-xii",
        "name": "John XII",
        "relation": "Next pope"
      },
      {
        "num": 57,
        "slug": "st-agapetus-i",
        "name": "St. Agapetus I",
        "relation": "Also named Agapetus"
      }
    ]
  },
  {
    "num": 130,
    "slug": "john-xii",
    "title": "Pope John XII (130º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XII (reigned 955–964), born Octavian, was the son of Alberic II and became pope as a young man of about eighteen.",
    "excerpt": "John XII — 16 December 955 –6 December 963. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 129,
        "slug": "agapetus-ii",
        "name": "Agapetus II",
        "relation": "Previous pope"
      },
      {
        "num": 131,
        "slug": "benedict-v",
        "name": "Benedict V",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 131,
    "slug": "benedict-v",
    "title": "Pope Benedict V (131º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict V reigned for only about a month in 964.",
    "excerpt": "Benedict V — 22 May 964 –23 June 964. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 130,
        "slug": "john-xii",
        "name": "John XII",
        "relation": "Previous pope"
      },
      {
        "num": 132,
        "slug": "leo-viii-leo-octavus",
        "name": "Leo VIII LEO Octavus",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 132,
    "slug": "leo-viii-leo-octavus",
    "title": "Pope Leo VIII LEO Octavus (132º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Leo VIII was a Roman layman elected in 963 at the synod that Otto I convened to depose John XII.",
    "excerpt": "Leo VIII LEO Octavus — 23 June 964 –1 March 965. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 131,
        "slug": "benedict-v",
        "name": "Benedict V",
        "relation": "Previous pope"
      },
      {
        "num": 133,
        "slug": "john-xiii",
        "name": "John XIII",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 133,
    "slug": "john-xiii",
    "title": "Pope John XIII (133º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XIII (reigned 965–972) was bishop of Narni before his election with the support of Emperor Otto I.",
    "excerpt": "John XIII — 1 October 965 –6 September 972. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 132,
        "slug": "leo-viii-leo-octavus",
        "name": "Leo VIII LEO Octavus",
        "relation": "Previous pope"
      },
      {
        "num": 134,
        "slug": "benedict-vi",
        "name": "Benedict VI",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 134,
    "slug": "benedict-vi",
    "title": "Pope Benedict VI (134º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict VI reigned from January 973 to June 974.",
    "excerpt": "Benedict VI — 19 January 973 –8 June 974. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 133,
        "slug": "john-xiii",
        "name": "John XIII",
        "relation": "Previous pope"
      },
      {
        "num": 135,
        "slug": "benedict-vii",
        "name": "Benedict VII",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 135,
    "slug": "benedict-vii",
    "title": "Pope Benedict VII (135º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict VII reigned from 974 to 983, bringing a decade of relative stability after the murder of Benedict VI.",
    "excerpt": "Benedict VII — October 974 –10 July 983. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 134,
        "slug": "benedict-vi",
        "name": "Benedict VI",
        "relation": "Previous pope"
      },
      {
        "num": 136,
        "slug": "john-xiv",
        "name": "John XIV",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 136,
    "slug": "john-xiv",
    "title": "Pope John XIV (136º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XIV, born Pietro Canepanova, was bishop of Pavia and imperial chancellor for Italy before Emperor Otto II arranged his election in late 983.",
    "excerpt": "John XIV — December 983 –20 August 984. Subject of the Kingdom of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 135,
        "slug": "benedict-vii",
        "name": "Benedict VII",
        "relation": "Previous pope"
      },
      {
        "num": 137,
        "slug": "john-xv",
        "name": "John XV",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 137,
    "slug": "john-xv",
    "title": "Pope John XV (137º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XV (reigned 985–996) is remembered as the first pope to canonize a saint through a formal papal act, declaring Ulrich of Augsburg a saint in 993.",
    "excerpt": "John XV — 20 August 985 –1 April 996. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 136,
        "slug": "john-xiv",
        "name": "John XIV",
        "relation": "Previous pope"
      },
      {
        "num": 138,
        "slug": "gregory-v",
        "name": "Gregory V",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 138,
    "slug": "gregory-v",
    "title": "Pope Gregory V (138º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Gregory V (reigned 996–999), born Bruno of Carinthia, was a cousin of Emperor Otto III and is generally counted as the first German pope.",
    "excerpt": "Gregory V — 3 May 996 –18 February 999. Subject of the Duchy of Carinthia.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 137,
        "slug": "john-xv",
        "name": "John XV",
        "relation": "Previous pope"
      },
      {
        "num": 139,
        "slug": "sylvester-ii",
        "name": "Sylvester II",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 139,
    "slug": "sylvester-ii",
    "title": "Pope Sylvester II (139º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Sylvester II (reigned 999–1003), born Gerbert of Aurillac, was the first French pope and among the most learned men of his age.",
    "excerpt": "Sylvester II — 2 April 999 –12 May 1003. Subject of the Kingdom of the West Franks(later renamed Kingdom of France).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 138,
        "slug": "gregory-v",
        "name": "Gregory V",
        "relation": "Previous pope"
      },
      {
        "num": 140,
        "slug": "john-xvii",
        "name": "John XVII",
        "relation": "Next pope"
      },
      {
        "num": 33,
        "slug": "st-sylvester-i",
        "name": "St. Sylvester I",
        "relation": "Also named Sylvester"
      },
      {
        "num": 146,
        "slug": "sylvester-iii",
        "name": "Sylvester III",
        "relation": "Also named Sylvester"
      }
    ]
  },
  {
    "num": 140,
    "slug": "john-xvii",
    "title": "Pope John XVII (140º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XVII reigned for less than six months in 1003, from May to November.",
    "excerpt": "John XVII — 16 May 1003 –6 November 1003. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 139,
        "slug": "sylvester-ii",
        "name": "Sylvester II",
        "relation": "Previous pope"
      },
      {
        "num": 141,
        "slug": "john",
        "name": "John",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 141,
    "slug": "john",
    "title": "Pope John (141º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XVIII, born John Fasanus, reigned from Christmas 1003 to 1009.",
    "excerpt": "John — 25 December 1003 –18 July 1009. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 140,
        "slug": "john-xvii",
        "name": "John XVII",
        "relation": "Previous pope"
      },
      {
        "num": 142,
        "slug": "sergius-iv",
        "name": "Sergius IV",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 142,
    "slug": "sergius-iv",
    "title": "Pope Sergius IV (142º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Sergius IV, born Peter in Rome, reigned from 1009 to 1012.",
    "excerpt": "Sergius IV — 31 July 1009 –12 May 1012. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 141,
        "slug": "john",
        "name": "John",
        "relation": "Previous pope"
      },
      {
        "num": 143,
        "slug": "benedict-viii",
        "name": "Benedict VIII",
        "relation": "Next pope"
      },
      {
        "num": 84,
        "slug": "st-sergius-i",
        "name": "St. Sergius I",
        "relation": "Also named Sergius"
      },
      {
        "num": 102,
        "slug": "sergius-ii",
        "name": "Sergius II",
        "relation": "Also named Sergius"
      },
      {
        "num": 119,
        "slug": "sergius-iii",
        "name": "Sergius III",
        "relation": "Also named Sergius"
      }
    ]
  },
  {
    "num": 143,
    "slug": "benedict-viii",
    "title": "Pope Benedict VIII (143º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict VIII (reigned 1012–1024), born Theophylact of Tusculum, was the first of three popes from the Tusculan family.",
    "excerpt": "Benedict VIII — 18 May 1012 –9 April 1024. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 142,
        "slug": "sergius-iv",
        "name": "Sergius IV",
        "relation": "Previous pope"
      },
      {
        "num": 144,
        "slug": "john-xix",
        "name": "John XIX",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 144,
    "slug": "john-xix",
    "title": "Pope John XIX (144º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XIX (reigned 1024–1032), born Romanus of Tusculum, succeeded his brother Benedict VIII while still a layman.",
    "excerpt": "John XIX — 14 May 1024 –6 October 1032. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 143,
        "slug": "benedict-viii",
        "name": "Benedict VIII",
        "relation": "Previous pope"
      },
      {
        "num": 145,
        "slug": "benedict-ix",
        "name": "Benedict IX",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 145,
    "slug": "benedict-ix",
    "title": "Pope Benedict IX (145º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict IX, born Theophylact of Tusculum, first became pope in 1032 as the nephew of his two predecessors and is often described as the youngest pope…",
    "excerpt": "Benedict IX — 21 October 1032 –31 December 1044. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 144,
        "slug": "john-xix",
        "name": "John XIX",
        "relation": "Previous pope"
      },
      {
        "num": 146,
        "slug": "sylvester-iii",
        "name": "Sylvester III",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 146,
    "slug": "sylvester-iii",
    "title": "Pope Sylvester III (146º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Sylvester III, previously John, bishop of Sabina, was elected in January 1045 after a revolt drove Benedict IX from Rome.",
    "excerpt": "Sylvester III — 13 January 1045 –10 March 1045. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 145,
        "slug": "benedict-ix",
        "name": "Benedict IX",
        "relation": "Previous pope"
      },
      {
        "num": 147,
        "slug": "benedict-ix-147",
        "name": "Benedict IX",
        "relation": "Next pope"
      },
      {
        "num": 33,
        "slug": "st-sylvester-i",
        "name": "St. Sylvester I",
        "relation": "Also named Sylvester"
      },
      {
        "num": 139,
        "slug": "sylvester-ii",
        "name": "Sylvester II",
        "relation": "Also named Sylvester"
      }
    ]
  },
  {
    "num": 147,
    "slug": "benedict-ix-147",
    "title": "Pope Benedict IX (147º): Biography, Pontificate & Legacy",
    "metaDescription": "Benedict IX's second term as pope lasted only a few weeks in the spring of 1045, after he drove out Sylvester III.",
    "excerpt": "Benedict IX — 10 March 1045 –1 May 1045. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 146,
        "slug": "sylvester-iii",
        "name": "Sylvester III",
        "relation": "Previous pope"
      },
      {
        "num": 148,
        "slug": "gregory-vi",
        "name": "Gregory VI",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 148,
    "slug": "gregory-vi",
    "title": "Pope Gregory VI (148º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Gregory VI, born John Gratian, was a respected Roman archpriest who became pope in May 1045 after paying Benedict IX to resign.",
    "excerpt": "Gregory VI — 1 May 1045 –20 December 1046. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 147,
        "slug": "benedict-ix-147",
        "name": "Benedict IX",
        "relation": "Previous pope"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 149,
    "slug": "clement-ii",
    "title": "Pope Clement II (149º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement II (reigned 1046–1047), born Suidger, was the bishop of Bamberg chosen by King Henry III at the Council of Sutri.",
    "excerpt": "Clement II — 24 December 1046 –9 October 1047. Subject of the Duchy of Saxony.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 148,
        "slug": "gregory-vi",
        "name": "Gregory VI",
        "relation": "Previous pope"
      },
      {
        "num": 150,
        "slug": "benedict-ix-150",
        "name": "Benedict IX",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      },
      {
        "num": 183,
        "slug": "clement-iv",
        "name": "Clement IV",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 150,
    "slug": "benedict-ix-150",
    "title": "Pope Benedict IX (150º): Biography, Pontificate & Legacy",
    "metaDescription": "Benedict IX's third and final term as pope began after Clement II's death in October 1047 and ended in July 1048, when Margrave Boniface of Tuscany, acting…",
    "excerpt": "Benedict IX — 8 November 1047 –17 July 1048. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Previous pope"
      },
      {
        "num": 151,
        "slug": "damasus-ii",
        "name": "Damasus II",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 151,
    "slug": "damasus-ii",
    "title": "Pope Damasus II (151º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Damasus II was Poppo, a Bavarian-born bishop of Brixen whom Emperor Henry III nominated to the papacy.",
    "excerpt": "Damasus II — 17 July 1048 –9 August 1048. Subject of the Duchy of Bavaria.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 150,
        "slug": "benedict-ix-150",
        "name": "Benedict IX",
        "relation": "Previous pope"
      },
      {
        "num": 152,
        "slug": "st-leo-ix-leo-nonus",
        "name": "St. Leo IX LEO Nonus",
        "relation": "Next pope"
      },
      {
        "num": 37,
        "slug": "st-damasus-i",
        "name": "St. Damasus I",
        "relation": "Also named Damasus"
      }
    ]
  },
  {
    "num": 152,
    "slug": "st-leo-ix-leo-nonus",
    "title": "Pope St. Leo IX LEO Nonus (152º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Leo IX was Bruno of Egisheim-Dagsburg, an Alsatian nobleman and bishop of Toul who reigned from 1049 to 1054.",
    "excerpt": "St. Leo IX LEO Nonus — 12 February 1049 –19 April 1054. Subject of the Duchy of Swabia.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 151,
        "slug": "damasus-ii",
        "name": "Damasus II",
        "relation": "Previous pope"
      },
      {
        "num": 153,
        "slug": "victor-ii",
        "name": "Victor II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 153,
    "slug": "victor-ii",
    "title": "Pope Victor II (153º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Victor II was Gebhard, bishop of Eichstätt and a trusted adviser to Emperor Henry III, who reigned from 1055 to 1057.",
    "excerpt": "Victor II — 13 April 1055 –28 July 1057. Subject of the Duchy of Swabia.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 152,
        "slug": "st-leo-ix-leo-nonus",
        "name": "St. Leo IX LEO Nonus",
        "relation": "Previous pope"
      },
      {
        "num": 154,
        "slug": "stephen-ix",
        "name": "Stephen IX",
        "relation": "Next pope"
      },
      {
        "num": 14,
        "slug": "st-victor-i",
        "name": "St. Victor I",
        "relation": "Also named Victor"
      },
      {
        "num": 158,
        "slug": "bl-victor-iii",
        "name": "Bl. Victor III",
        "relation": "Also named Victor"
      }
    ]
  },
  {
    "num": 154,
    "slug": "stephen-ix",
    "title": "Pope Stephen IX (154º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Stephen IX was Frederick of Lorraine, a reforming cardinal and abbot of Monte Cassino who reigned from August 1057 to March 1058.",
    "excerpt": "Stephen IX — 2 August 1057 –29 March 1058. Subject of the Duchy of Lorraine.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 153,
        "slug": "victor-ii",
        "name": "Victor II",
        "relation": "Previous pope"
      },
      {
        "num": 155,
        "slug": "nicholas-ii",
        "name": "Nicholas II",
        "relation": "Next pope"
      },
      {
        "num": 23,
        "slug": "st-stephen-i",
        "name": "St. Stephen I",
        "relation": "Also named Stephen"
      },
      {
        "num": 92,
        "slug": "stephen-ii",
        "name": "Stephen II",
        "relation": "Also named Stephen"
      },
      {
        "num": 94,
        "slug": "stephen-iii",
        "name": "Stephen III",
        "relation": "Also named Stephen"
      }
    ]
  },
  {
    "num": 155,
    "slug": "nicholas-ii",
    "title": "Pope Nicholas II (155º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Nicholas II was Gerard of Burgundy, bishop of Florence, who reigned from 1058 to 1061.",
    "excerpt": "Nicholas II — 6 December 1058 –27 July 1061. Subject of the County of Savoy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 154,
        "slug": "stephen-ix",
        "name": "Stephen IX",
        "relation": "Previous pope"
      },
      {
        "num": 156,
        "slug": "alexander-ii",
        "name": "Alexander II",
        "relation": "Next pope"
      },
      {
        "num": 105,
        "slug": "st-nicholas-i-the-great",
        "name": "St. Nicholas I the Great",
        "relation": "Also named Nicholas"
      },
      {
        "num": 188,
        "slug": "nicholas-iii",
        "name": "Nicholas III",
        "relation": "Also named Nicholas"
      },
      {
        "num": 191,
        "slug": "nicholas-iv",
        "name": "Nicholas IV",
        "relation": "Also named Nicholas"
      }
    ]
  },
  {
    "num": 156,
    "slug": "alexander-ii",
    "title": "Pope Alexander II (156º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Alexander II was Anselm of Baggio, a Milanese reformer and bishop of Lucca who reigned from 1061 to 1073.",
    "excerpt": "Alexander II — 30 September 1061–21 April 1073. Citizen of the Free Commune of Milan.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 155,
        "slug": "nicholas-ii",
        "name": "Nicholas II",
        "relation": "Previous pope"
      },
      {
        "num": 157,
        "slug": "st-gregory-vii",
        "name": "St. Gregory VII",
        "relation": "Next pope"
      },
      {
        "num": 6,
        "slug": "st-alexander-i",
        "name": "St. Alexander I",
        "relation": "Also named Alexander"
      },
      {
        "num": 170,
        "slug": "alexander-iii",
        "name": "Alexander III",
        "relation": "Also named Alexander"
      },
      {
        "num": 181,
        "slug": "alexander-iv",
        "name": "Alexander IV",
        "relation": "Also named Alexander"
      }
    ]
  },
  {
    "num": 157,
    "slug": "st-gregory-vii",
    "title": "Pope St. Gregory VII (157º): Canossa, Reform & Church vs. State",
    "metaDescription": "Pope St. Gregory VII was Hildebrand of Sovana, the reform leader who reigned from 1073 to 1085.",
    "excerpt": "St. Gregory VII — 22 April 1073–25 May 1085. Subject of the March of Tuscany.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 156,
        "slug": "alexander-ii",
        "name": "Alexander II",
        "relation": "Previous pope"
      },
      {
        "num": 158,
        "slug": "bl-victor-iii",
        "name": "Bl. Victor III",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 158,
    "slug": "bl-victor-iii",
    "title": "Pope Bl. Victor III (158º): Biography, Pontificate & Legacy",
    "metaDescription": "Blessed Victor III was Desiderius, the celebrated abbot of Monte Cassino, who reigned as pope from 1086 to 1087.",
    "excerpt": "Bl. Victor III — 24 May 1086–16 September 1087. Subject of the Duchy of Benevento.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 157,
        "slug": "st-gregory-vii",
        "name": "St. Gregory VII",
        "relation": "Previous pope"
      },
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 159,
    "slug": "bl-urban-ii",
    "title": "Pope Bl. Urban II (159º): Crusades — Complete Guide",
    "metaDescription": "Blessed Urban II was Odo of Châtillon, a French monk of Cluny who reigned as pope from 1088 to 1099.",
    "excerpt": "Bl. Urban II — 12 March 1088–29 July 1099. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 158,
        "slug": "bl-victor-iii",
        "name": "Bl. Victor III",
        "relation": "Previous pope"
      },
      {
        "num": 160,
        "slug": "paschal-ii",
        "name": "Paschal II",
        "relation": "Next pope"
      },
      {
        "num": 200,
        "slug": "bl-urban-v",
        "name": "Bl. Urban V",
        "relation": "Also named Bl. Urban"
      }
    ]
  },
  {
    "num": 160,
    "slug": "paschal-ii",
    "title": "Pope Paschal II (160º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Paschal II was Ranierius, a monk and cardinal from central Italy who reigned from 1099 to 1118.",
    "excerpt": "Paschal II — 13 August 1099–21 January 1118. Subject of the March of Tuscany.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Previous pope"
      },
      {
        "num": 161,
        "slug": "gelasius-ii",
        "name": "Gelasius II",
        "relation": "Next pope"
      },
      {
        "num": 98,
        "slug": "st-paschal-i",
        "name": "St. Paschal I",
        "relation": "Also named Paschal"
      }
    ]
  },
  {
    "num": 161,
    "slug": "gelasius-ii",
    "title": "Pope Gelasius II (161º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Gelasius II was John of Gaeta, a Monte Cassino monk who served as papal chancellor for about three decades before reigning for one turbulent year, 1118…",
    "excerpt": "Gelasius II — 24 January 1118–29 January 1119. Subject of the Duchy of Gaeta.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 160,
        "slug": "paschal-ii",
        "name": "Paschal II",
        "relation": "Previous pope"
      },
      {
        "num": 162,
        "slug": "callixtus-ii",
        "name": "Callixtus II",
        "relation": "Next pope"
      },
      {
        "num": 49,
        "slug": "st-gelasius-i",
        "name": "St. Gelasius I",
        "relation": "Also named Gelasius"
      }
    ]
  },
  {
    "num": 162,
    "slug": "callixtus-ii",
    "title": "Pope Callixtus II (162º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Callixtus II was Guy of Burgundy, archbishop of Vienne and a member of the comital family of Burgundy, who reigned from 1119 to 1124.",
    "excerpt": "Callixtus II — 2 February 1119–13 December 1124. Subject of the County of Burgundy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 161,
        "slug": "gelasius-ii",
        "name": "Gelasius II",
        "relation": "Previous pope"
      },
      {
        "num": 163,
        "slug": "honorius-ii",
        "name": "Honorius II",
        "relation": "Next pope"
      },
      {
        "num": 16,
        "slug": "st-callixtus-i",
        "name": "St. Callixtus I",
        "relation": "Also named Callixtus"
      },
      {
        "num": 209,
        "slug": "callixtus-iii",
        "name": "Callixtus III",
        "relation": "Also named Callixtus"
      }
    ]
  },
  {
    "num": 163,
    "slug": "honorius-ii",
    "title": "Pope Honorius II (163º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Honorius II was Lamberto Scannabecchi, cardinal bishop of Ostia and one of the negotiators of the Concordat of Worms, who reigned from 1124 to 1130.",
    "excerpt": "Honorius II — 21 December 1124–13 February 1130. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 162,
        "slug": "callixtus-ii",
        "name": "Callixtus II",
        "relation": "Previous pope"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Next pope"
      },
      {
        "num": 70,
        "slug": "honorius-i",
        "name": "Honorius I",
        "relation": "Also named Honorius"
      },
      {
        "num": 177,
        "slug": "honorius-iii",
        "name": "Honorius III",
        "relation": "Also named Honorius"
      },
      {
        "num": 190,
        "slug": "honorius-iv",
        "name": "Honorius IV",
        "relation": "Also named Honorius"
      }
    ]
  },
  {
    "num": 164,
    "slug": "innocent-ii",
    "title": "Pope Innocent II (164º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Innocent II was Gregorio Papareschi, a Roman cardinal who reigned from 1130 to 1143.",
    "excerpt": "Innocent II — 14 February 1130–24 September 1143. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 163,
        "slug": "honorius-ii",
        "name": "Honorius II",
        "relation": "Previous pope"
      },
      {
        "num": 165,
        "slug": "celestine-ii",
        "name": "Celestine II",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      },
      {
        "num": 180,
        "slug": "innocent-iv",
        "name": "Innocent IV",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 165,
    "slug": "celestine-ii",
    "title": "Pope Celestine II (165º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Celestine II was Guido of Città di Castello, a learned cardinal and former student of Peter Abelard, who reigned for about five months, from September…",
    "excerpt": "Celestine II — 26 September 1143–8 March 1144. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Previous pope"
      },
      {
        "num": 166,
        "slug": "lucius-ii",
        "name": "Lucius II",
        "relation": "Next pope"
      },
      {
        "num": 43,
        "slug": "st-celestine-i",
        "name": "St. Celestine I",
        "relation": "Also named Celestine"
      },
      {
        "num": 175,
        "slug": "celestine-iii",
        "name": "Celestine III",
        "relation": "Also named Celestine"
      },
      {
        "num": 179,
        "slug": "celestine-iv",
        "name": "Celestine IV",
        "relation": "Also named Celestine"
      }
    ]
  },
  {
    "num": 166,
    "slug": "lucius-ii",
    "title": "Pope Lucius II (166º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Lucius II was Gherardo Caccianemici of Bologna, a canon regular and papal chancellor who reigned for less than a year, from March 1144 to February 1145.",
    "excerpt": "Lucius II — 12 March 1144–15 February 1145. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 165,
        "slug": "celestine-ii",
        "name": "Celestine II",
        "relation": "Previous pope"
      },
      {
        "num": 167,
        "slug": "bl-eugene-iii",
        "name": "Bl. Eugene III",
        "relation": "Next pope"
      },
      {
        "num": 22,
        "slug": "st-lucius-i",
        "name": "St. Lucius I",
        "relation": "Also named Lucius"
      },
      {
        "num": 171,
        "slug": "lucius-iii",
        "name": "Lucius III",
        "relation": "Also named Lucius"
      }
    ]
  },
  {
    "num": 167,
    "slug": "bl-eugene-iii",
    "title": "Pope Bl. Eugene III (167º): Crusades — Complete Guide",
    "metaDescription": "Blessed Eugene III was Bernardo of Pisa, a Cistercian monk and disciple of St. Bernard of Clairvaux, who reigned from 1145 to 1153.",
    "excerpt": "Bl. Eugene III — 15 February 1145–8 July 1153. Citizen of the Republic of Pisa.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 166,
        "slug": "lucius-ii",
        "name": "Lucius II",
        "relation": "Previous pope"
      },
      {
        "num": 168,
        "slug": "anastasius-iv",
        "name": "Anastasius IV",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 168,
    "slug": "anastasius-iv",
    "title": "Pope Anastasius IV (168º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Anastasius IV was Corrado della Suburra, an elderly Roman cardinal bishop of Sabina who reigned for about seventeen months, from July 1153 to December…",
    "excerpt": "Anastasius IV — 12 July 1153–3 December 1154. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 167,
        "slug": "bl-eugene-iii",
        "name": "Bl. Eugene III",
        "relation": "Previous pope"
      },
      {
        "num": 169,
        "slug": "adrian-iv",
        "name": "Adrian IV",
        "relation": "Next pope"
      },
      {
        "num": 39,
        "slug": "st-anastasius-i",
        "name": "St. Anastasius I",
        "relation": "Also named Anastasius"
      },
      {
        "num": 50,
        "slug": "anastasius-ii",
        "name": "Anastasius II",
        "relation": "Also named Anastasius"
      },
      {
        "num": 120,
        "slug": "anastasius-iii",
        "name": "Anastasius III",
        "relation": "Also named Anastasius"
      }
    ]
  },
  {
    "num": 169,
    "slug": "adrian-iv",
    "title": "Pope Adrian IV (169º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Adrian IV was Nicholas Breakspear, the only Englishman to serve as pope, who reigned from 1154 to 1159.",
    "excerpt": "Adrian IV — 4 December 1154–1 September 1159. Subject of the Kingdom of England.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 168,
        "slug": "anastasius-iv",
        "name": "Anastasius IV",
        "relation": "Previous pope"
      },
      {
        "num": 170,
        "slug": "alexander-iii",
        "name": "Alexander III",
        "relation": "Next pope"
      },
      {
        "num": 95,
        "slug": "adrian-i",
        "name": "Adrian I",
        "relation": "Also named Adrian"
      },
      {
        "num": 106,
        "slug": "adrian-ii",
        "name": "Adrian II",
        "relation": "Also named Adrian"
      },
      {
        "num": 109,
        "slug": "st-adrian-iii",
        "name": "St. Adrian III",
        "relation": "Also named Adrian"
      }
    ]
  },
  {
    "num": 170,
    "slug": "alexander-iii",
    "title": "Pope Alexander III (170º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Alexander III was Rolando of Siena, papal chancellor under Eugene III and Adrian IV, who reigned from 1159 to 1181.",
    "excerpt": "Alexander III — 7 September 1159–30 August 1181. Subject of the March of Tuscany.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 169,
        "slug": "adrian-iv",
        "name": "Adrian IV",
        "relation": "Previous pope"
      },
      {
        "num": 171,
        "slug": "lucius-iii",
        "name": "Lucius III",
        "relation": "Next pope"
      },
      {
        "num": 6,
        "slug": "st-alexander-i",
        "name": "St. Alexander I",
        "relation": "Also named Alexander"
      },
      {
        "num": 156,
        "slug": "alexander-ii",
        "name": "Alexander II",
        "relation": "Also named Alexander"
      },
      {
        "num": 181,
        "slug": "alexander-iv",
        "name": "Alexander IV",
        "relation": "Also named Alexander"
      }
    ]
  },
  {
    "num": 171,
    "slug": "lucius-iii",
    "title": "Pope Lucius III (171º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Lucius III was Ubaldo Allucingoli of Lucca, cardinal bishop of Ostia, who reigned from 1181 to 1185.",
    "excerpt": "Lucius III — 1 September 1181–25 November 1185. Subject of the March of Tuscany.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 170,
        "slug": "alexander-iii",
        "name": "Alexander III",
        "relation": "Previous pope"
      },
      {
        "num": 172,
        "slug": "urban-iii",
        "name": "Urban III",
        "relation": "Next pope"
      },
      {
        "num": 22,
        "slug": "st-lucius-i",
        "name": "St. Lucius I",
        "relation": "Also named Lucius"
      },
      {
        "num": 166,
        "slug": "lucius-ii",
        "name": "Lucius II",
        "relation": "Also named Lucius"
      }
    ]
  },
  {
    "num": 172,
    "slug": "urban-iii",
    "title": "Pope Urban III (172º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Urban III was Uberto Crivelli, archbishop of Milan, who reigned from November 1185 to October 1187.",
    "excerpt": "Urban III — 25 November 1185–20 October 1187. Was of Italian ethnicity.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 171,
        "slug": "lucius-iii",
        "name": "Lucius III",
        "relation": "Previous pope"
      },
      {
        "num": 173,
        "slug": "gregory-viii",
        "name": "Gregory VIII",
        "relation": "Next pope"
      },
      {
        "num": 17,
        "slug": "st-urban-i",
        "name": "St. Urban I",
        "relation": "Also named Urban"
      },
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Also named Urban"
      },
      {
        "num": 182,
        "slug": "urban-iv",
        "name": "Urban IV",
        "relation": "Also named Urban"
      }
    ]
  },
  {
    "num": 173,
    "slug": "gregory-viii",
    "title": "Pope Gregory VIII (173º): Crusades — Complete Guide",
    "metaDescription": "Pope Gregory VIII was Alberto de Morra of Benevento, chancellor of the Roman Church under Alexander III, who reigned for less than two months in late 1187.",
    "excerpt": "Gregory VIII — 21 October 1187–17 December 1187. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 172,
        "slug": "urban-iii",
        "name": "Urban III",
        "relation": "Previous pope"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 174,
    "slug": "clement-iii",
    "title": "Pope Clement III (174º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement III was Paolo Scolari, a Roman and cardinal bishop of Palestrina, who reigned from December 1187 to March 1191.",
    "excerpt": "Clement III — 19 December 1187–20 March 1191. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 173,
        "slug": "gregory-viii",
        "name": "Gregory VIII",
        "relation": "Previous pope"
      },
      {
        "num": 175,
        "slug": "celestine-iii",
        "name": "Celestine III",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 183,
        "slug": "clement-iv",
        "name": "Clement IV",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 175,
    "slug": "celestine-iii",
    "title": "Pope Celestine III (175º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Celestine III was Giacinto Bobone of Rome, who served as a cardinal deacon for about forty-seven years before being elected pope at roughly eighty-five.",
    "excerpt": "Celestine III — 30 March 1191–8 January 1198. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Previous pope"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Next pope"
      },
      {
        "num": 43,
        "slug": "st-celestine-i",
        "name": "St. Celestine I",
        "relation": "Also named Celestine"
      },
      {
        "num": 165,
        "slug": "celestine-ii",
        "name": "Celestine II",
        "relation": "Also named Celestine"
      },
      {
        "num": 179,
        "slug": "celestine-iv",
        "name": "Celestine IV",
        "relation": "Also named Celestine"
      }
    ]
  },
  {
    "num": 176,
    "slug": "innocent-iii",
    "title": "Pope Innocent III (176º): Lateran IV, Power & Medieval Papacy",
    "metaDescription": "Pope Innocent III was Lotario dei Conti di Segni, elected at about thirty-seven, who reigned from 1198 to 1216 and is widely seen as the most powerful of…",
    "excerpt": "Innocent III — 8 January 1198–16 July 1216. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 175,
        "slug": "celestine-iii",
        "name": "Celestine III",
        "relation": "Previous pope"
      },
      {
        "num": 177,
        "slug": "honorius-iii",
        "name": "Honorius III",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 180,
        "slug": "innocent-iv",
        "name": "Innocent IV",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 177,
    "slug": "honorius-iii",
    "title": "Pope Honorius III (177º): Crusades — Complete Guide",
    "metaDescription": "Pope Honorius III was Cencio, a Roman cleric and longtime papal treasurer, who reigned from 1216 to 1227.",
    "excerpt": "Honorius III — 18 July 1216–18 March 1227. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Previous pope"
      },
      {
        "num": 178,
        "slug": "gregory-ix",
        "name": "Gregory IX",
        "relation": "Next pope"
      },
      {
        "num": 70,
        "slug": "honorius-i",
        "name": "Honorius I",
        "relation": "Also named Honorius"
      },
      {
        "num": 163,
        "slug": "honorius-ii",
        "name": "Honorius II",
        "relation": "Also named Honorius"
      },
      {
        "num": 190,
        "slug": "honorius-iv",
        "name": "Honorius IV",
        "relation": "Also named Honorius"
      }
    ]
  },
  {
    "num": 178,
    "slug": "gregory-ix",
    "title": "Pope Gregory IX (178º): Crusades — Complete Guide",
    "metaDescription": "Pope Gregory IX was Ugolino of Segni, a kinsman of Innocent III and cardinal protector of the Franciscans, who reigned from 1227 to 1241.",
    "excerpt": "Gregory IX — 19 March 1227–22 August 1241. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 177,
        "slug": "honorius-iii",
        "name": "Honorius III",
        "relation": "Previous pope"
      },
      {
        "num": 179,
        "slug": "celestine-iv",
        "name": "Celestine IV",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 179,
    "slug": "celestine-iv",
    "title": "Pope Celestine IV (179º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Celestine IV was Goffredo da Castiglione of Milan, cardinal bishop of Sabina, who was elected in October 1241 after a harsh confinement of the…",
    "excerpt": "Celestine IV — 25 October 1241–10 November 1241. Citizen of the Free Commune of Milan.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 178,
        "slug": "gregory-ix",
        "name": "Gregory IX",
        "relation": "Previous pope"
      },
      {
        "num": 180,
        "slug": "innocent-iv",
        "name": "Innocent IV",
        "relation": "Next pope"
      },
      {
        "num": 43,
        "slug": "st-celestine-i",
        "name": "St. Celestine I",
        "relation": "Also named Celestine"
      },
      {
        "num": 165,
        "slug": "celestine-ii",
        "name": "Celestine II",
        "relation": "Also named Celestine"
      },
      {
        "num": 175,
        "slug": "celestine-iii",
        "name": "Celestine III",
        "relation": "Also named Celestine"
      }
    ]
  },
  {
    "num": 180,
    "slug": "innocent-iv",
    "title": "Pope Innocent IV (180º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Innocent IV was Sinibaldo Fieschi of Genoa, a leading canon lawyer who reigned from 1243 to 1254.",
    "excerpt": "Innocent IV — 25 June 1243–7 December 1254. Citizen of the Republic of Genoa.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 179,
        "slug": "celestine-iv",
        "name": "Celestine IV",
        "relation": "Previous pope"
      },
      {
        "num": 181,
        "slug": "alexander-iv",
        "name": "Alexander IV",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 181,
    "slug": "alexander-iv",
    "title": "Pope Alexander IV (181º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Alexander IV was Rinaldo dei Conti di Segni, a nephew of Pope Gregory IX, who led the Church from 12 December 1254 until his death at Viterbo on 25 May…",
    "excerpt": "Alexander IV — 12 December 1254–25 May 1261. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 180,
        "slug": "innocent-iv",
        "name": "Innocent IV",
        "relation": "Previous pope"
      },
      {
        "num": 182,
        "slug": "urban-iv",
        "name": "Urban IV",
        "relation": "Next pope"
      },
      {
        "num": 6,
        "slug": "st-alexander-i",
        "name": "St. Alexander I",
        "relation": "Also named Alexander"
      },
      {
        "num": 156,
        "slug": "alexander-ii",
        "name": "Alexander II",
        "relation": "Also named Alexander"
      },
      {
        "num": 170,
        "slug": "alexander-iii",
        "name": "Alexander III",
        "relation": "Also named Alexander"
      }
    ]
  },
  {
    "num": 182,
    "slug": "urban-iv",
    "title": "Pope Urban IV (182º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Urban IV was Jacques Pantaléon, the son of a shoemaker from Troyes in France, who reigned from 29 August 1261 to 2 October 1264.",
    "excerpt": "Urban IV — 29 August 1261–2 October 1264. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 181,
        "slug": "alexander-iv",
        "name": "Alexander IV",
        "relation": "Previous pope"
      },
      {
        "num": 183,
        "slug": "clement-iv",
        "name": "Clement IV",
        "relation": "Next pope"
      },
      {
        "num": 17,
        "slug": "st-urban-i",
        "name": "St. Urban I",
        "relation": "Also named Urban"
      },
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Also named Urban"
      },
      {
        "num": 172,
        "slug": "urban-iii",
        "name": "Urban III",
        "relation": "Also named Urban"
      }
    ]
  },
  {
    "num": 183,
    "slug": "clement-iv",
    "title": "Pope Clement IV (183º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement IV was Guy Foulques of Saint-Gilles in southern France, a lawyer and former married layman who became a priest after his wife's death and…",
    "excerpt": "Clement IV — 5 February 1265–29 November 1268. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 182,
        "slug": "urban-iv",
        "name": "Urban IV",
        "relation": "Previous pope"
      },
      {
        "num": 184,
        "slug": "bl-gregory-x",
        "name": "Bl. Gregory X",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 184,
    "slug": "bl-gregory-x",
    "title": "Pope Bl. Gregory X (184º): Biography, Pontificate & Legacy",
    "metaDescription": "Blessed Gregory X was Tedaldo Visconti of Piacenza, an archdeacon on crusade in the Holy Land when he was elected on 1 September 1271 after a vacancy of…",
    "excerpt": "Bl. Gregory X — 1 September 1271–10 January 1276. Citizen of the Free Commune of Piacenza.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 183,
        "slug": "clement-iv",
        "name": "Clement IV",
        "relation": "Previous pope"
      },
      {
        "num": 185,
        "slug": "bl-innocent-v",
        "name": "Bl. Innocent V",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 185,
    "slug": "bl-innocent-v",
    "title": "Pope Bl. Innocent V (185º): Biography, Pontificate & Legacy",
    "metaDescription": "Blessed Innocent V was Peter of Tarentaise, a Dominican theologian from Savoy who became the first member of his order to be pope.",
    "excerpt": "Bl. Innocent V — 21 January 1276–22 June 1276. Subject of the County of Savoy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 184,
        "slug": "bl-gregory-x",
        "name": "Bl. Gregory X",
        "relation": "Previous pope"
      },
      {
        "num": 186,
        "slug": "adrian-v",
        "name": "Adrian V",
        "relation": "Next pope"
      },
      {
        "num": 240,
        "slug": "bl-innocent-xi",
        "name": "Bl. Innocent XI",
        "relation": "Also named Bl. Innocent"
      }
    ]
  },
  {
    "num": 186,
    "slug": "adrian-v",
    "title": "Pope Adrian V (186º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Adrian V was Ottobuono Fieschi of Genoa, a nephew of Innocent IV, who was elected on 11 July 1276 and died on 18 August 1276, just over five weeks later.",
    "excerpt": "Adrian V — 11 July 1276–18 August 1276. Citizen of the Republic of Genoa.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 185,
        "slug": "bl-innocent-v",
        "name": "Bl. Innocent V",
        "relation": "Previous pope"
      },
      {
        "num": 187,
        "slug": "john-xxi",
        "name": "John XXI",
        "relation": "Next pope"
      },
      {
        "num": 95,
        "slug": "adrian-i",
        "name": "Adrian I",
        "relation": "Also named Adrian"
      },
      {
        "num": 106,
        "slug": "adrian-ii",
        "name": "Adrian II",
        "relation": "Also named Adrian"
      },
      {
        "num": 109,
        "slug": "st-adrian-iii",
        "name": "St. Adrian III",
        "relation": "Also named Adrian"
      }
    ]
  },
  {
    "num": 187,
    "slug": "john-xxi",
    "title": "Pope John XXI (187º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John XXI was Peter Juliani of Lisbon, the only Portuguese pope, who reigned from 8 September 1276 to 20 May 1277.",
    "excerpt": "John XXI — 8 September 1276–20 May 1277. Subject of the Kingdom of Portugal.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 186,
        "slug": "adrian-v",
        "name": "Adrian V",
        "relation": "Previous pope"
      },
      {
        "num": 188,
        "slug": "nicholas-iii",
        "name": "Nicholas III",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 188,
    "slug": "nicholas-iii",
    "title": "Pope Nicholas III (188º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Nicholas III was Giovanni Gaetano Orsini, a Roman noble and longtime cardinal, who reigned from 25 November 1277 to 22 August 1280.",
    "excerpt": "Nicholas III — 25 November 1277–22 August 1280. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 187,
        "slug": "john-xxi",
        "name": "John XXI",
        "relation": "Previous pope"
      },
      {
        "num": 189,
        "slug": "martin-iv",
        "name": "Martin IV",
        "relation": "Next pope"
      },
      {
        "num": 105,
        "slug": "st-nicholas-i-the-great",
        "name": "St. Nicholas I the Great",
        "relation": "Also named Nicholas"
      },
      {
        "num": 155,
        "slug": "nicholas-ii",
        "name": "Nicholas II",
        "relation": "Also named Nicholas"
      },
      {
        "num": 191,
        "slug": "nicholas-iv",
        "name": "Nicholas IV",
        "relation": "Also named Nicholas"
      }
    ]
  },
  {
    "num": 189,
    "slug": "martin-iv",
    "title": "Pope Martin IV (189º): Crusades — Complete Guide",
    "metaDescription": "Pope Martin IV was Simon de Brion, a French cardinal and former chancellor of King Louis IX, who reigned from 22 February 1281 to 28 March 1285.",
    "excerpt": "Martin IV — 22 February 1281–28 March 1285. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 188,
        "slug": "nicholas-iii",
        "name": "Nicholas III",
        "relation": "Previous pope"
      },
      {
        "num": 190,
        "slug": "honorius-iv",
        "name": "Honorius IV",
        "relation": "Next pope"
      },
      {
        "num": 74,
        "slug": "st-martin-i",
        "name": "St. Martin I",
        "relation": "Also named Martin"
      },
      {
        "num": 206,
        "slug": "martin-v",
        "name": "Martin V",
        "relation": "Also named Martin"
      }
    ]
  },
  {
    "num": 190,
    "slug": "honorius-iv",
    "title": "Pope Honorius IV (190º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Honorius IV was Giacomo Savelli, a Roman noble and grandnephew of Honorius III, who reigned from 2 April 1285 to 3 April 1287.",
    "excerpt": "Honorius IV — 2 April 1285–3 April 1287. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 189,
        "slug": "martin-iv",
        "name": "Martin IV",
        "relation": "Previous pope"
      },
      {
        "num": 191,
        "slug": "nicholas-iv",
        "name": "Nicholas IV",
        "relation": "Next pope"
      },
      {
        "num": 70,
        "slug": "honorius-i",
        "name": "Honorius I",
        "relation": "Also named Honorius"
      },
      {
        "num": 163,
        "slug": "honorius-ii",
        "name": "Honorius II",
        "relation": "Also named Honorius"
      },
      {
        "num": 177,
        "slug": "honorius-iii",
        "name": "Honorius III",
        "relation": "Also named Honorius"
      }
    ]
  },
  {
    "num": 191,
    "slug": "nicholas-iv",
    "title": "Pope Nicholas IV (191º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Nicholas IV was Girolamo Masci of Ascoli, the first Franciscan to become pope, who reigned from 22 February 1288 to 4 April 1292.",
    "excerpt": "Nicholas IV — 22 February 1288–4 April 1292. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 190,
        "slug": "honorius-iv",
        "name": "Honorius IV",
        "relation": "Previous pope"
      },
      {
        "num": 192,
        "slug": "st-celestine-v",
        "name": "St. Celestine V",
        "relation": "Next pope"
      },
      {
        "num": 105,
        "slug": "st-nicholas-i-the-great",
        "name": "St. Nicholas I the Great",
        "relation": "Also named Nicholas"
      },
      {
        "num": 155,
        "slug": "nicholas-ii",
        "name": "Nicholas II",
        "relation": "Also named Nicholas"
      },
      {
        "num": 188,
        "slug": "nicholas-iii",
        "name": "Nicholas III",
        "relation": "Also named Nicholas"
      }
    ]
  },
  {
    "num": 192,
    "slug": "st-celestine-v",
    "title": "Pope St. Celestine V (192º): Biography, Pontificate & Legacy",
    "metaDescription": "St. Celestine V was Pietro da Morrone, an elderly hermit from the Abruzzo mountains who was elected pope on 5 July 1294 after a vacancy of more than two…",
    "excerpt": "St. Celestine V — 5 July 1294–13 December 1294. Subject of the Kingdom of Sicily.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 191,
        "slug": "nicholas-iv",
        "name": "Nicholas IV",
        "relation": "Previous pope"
      },
      {
        "num": 193,
        "slug": "boniface-viii",
        "name": "Boniface VIII",
        "relation": "Next pope"
      },
      {
        "num": 43,
        "slug": "st-celestine-i",
        "name": "St. Celestine I",
        "relation": "Also named Celestine"
      },
      {
        "num": 165,
        "slug": "celestine-ii",
        "name": "Celestine II",
        "relation": "Also named Celestine"
      },
      {
        "num": 175,
        "slug": "celestine-iii",
        "name": "Celestine III",
        "relation": "Also named Celestine"
      }
    ]
  },
  {
    "num": 193,
    "slug": "boniface-viii",
    "title": "Pope Boniface VIII (193º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Boniface VIII was Benedetto Caetani of Anagni, a leading canon lawyer who reigned from 24 December 1294 to 11 October 1303.",
    "excerpt": "Boniface VIII — 24 December 1294–11 October 1303. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 192,
        "slug": "st-celestine-v",
        "name": "St. Celestine V",
        "relation": "Previous pope"
      },
      {
        "num": 194,
        "slug": "bl-benedict-xi",
        "name": "Bl. Benedict XI",
        "relation": "Next pope"
      },
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Also named Boniface"
      },
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Also named Boniface"
      },
      {
        "num": 66,
        "slug": "boniface-iii",
        "name": "Boniface III",
        "relation": "Also named Boniface"
      }
    ]
  },
  {
    "num": 194,
    "slug": "bl-benedict-xi",
    "title": "Pope Bl. Benedict XI (194º): Biography, Pontificate & Legacy",
    "metaDescription": "Blessed Benedict XI was Niccolò Boccasini of Treviso, a former master general of the Dominicans who reigned from 22 October 1303 to 7 July 1304.",
    "excerpt": "Bl. Benedict XI — 22 October 1303–7 July 1304. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 193,
        "slug": "boniface-viii",
        "name": "Boniface VIII",
        "relation": "Previous pope"
      },
      {
        "num": 195,
        "slug": "clement-v",
        "name": "Clement V",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 195,
    "slug": "clement-v",
    "title": "Pope Clement V (195º): Avignon Papacy — Complete Guide",
    "metaDescription": "Pope Clement V was Bertrand de Got, archbishop of Bordeaux, who reigned from 5 June 1305 to 20 April 1314.",
    "excerpt": "Clement V — 5 June 1305–20 April 1314. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 194,
        "slug": "bl-benedict-xi",
        "name": "Bl. Benedict XI",
        "relation": "Previous pope"
      },
      {
        "num": 196,
        "slug": "john-xxii",
        "name": "John XXII",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 196,
    "slug": "john-xxii",
    "title": "Pope John XXII (196º): Avignon Papacy — Complete Guide",
    "metaDescription": "Pope John XXII was Jacques Duèze of Cahors, elected at Lyon on 7 August 1316 at about seventy-two, who reigned at Avignon until 4 December 1334.",
    "excerpt": "John XXII — 7 August 1316–4 December 1334. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 195,
        "slug": "clement-v",
        "name": "Clement V",
        "relation": "Previous pope"
      },
      {
        "num": 197,
        "slug": "benedict-xii",
        "name": "Benedict XII",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 197,
    "slug": "benedict-xii",
    "title": "Pope Benedict XII (197º): Avignon Papacy — Complete Guide",
    "metaDescription": "Pope Benedict XII was Jacques Fournier, a Cistercian monk and former bishop of Pamiers, who reigned at Avignon from 20 December 1334 to 25 April 1342.",
    "excerpt": "Benedict XII — 20 December 1334–25 April 1342. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 196,
        "slug": "john-xxii",
        "name": "John XXII",
        "relation": "Previous pope"
      },
      {
        "num": 198,
        "slug": "clement-vi",
        "name": "Clement VI",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 198,
    "slug": "clement-vi",
    "title": "Pope Clement VI (198º): Avignon Papacy — Complete Guide",
    "metaDescription": "Pope Clement VI was Pierre Roger, a Benedictine theologian and celebrated preacher who reigned at Avignon from 7 May 1342 to 6 December 1352.",
    "excerpt": "Clement VI — 7 May 1342–6 December 1352. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 197,
        "slug": "benedict-xii",
        "name": "Benedict XII",
        "relation": "Previous pope"
      },
      {
        "num": 199,
        "slug": "innocent-vi",
        "name": "Innocent VI",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 199,
    "slug": "innocent-vi",
    "title": "Pope Innocent VI (199º): Avignon Papacy — Complete Guide",
    "metaDescription": "Pope Innocent VI was Étienne Aubert, a French law professor and cardinal who reigned at Avignon from 18 December 1352 to 12 September 1362.",
    "excerpt": "Innocent VI — 18 December 1352–12 September 1362. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 198,
        "slug": "clement-vi",
        "name": "Clement VI",
        "relation": "Previous pope"
      },
      {
        "num": 200,
        "slug": "bl-urban-v",
        "name": "Bl. Urban V",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 200,
    "slug": "bl-urban-v",
    "title": "Pope Bl. Urban V (200º): Crusades & Avignon Papacy — Complete Guide",
    "metaDescription": "Blessed Urban V was Guillaume de Grimoard, a Benedictine abbot who was elected on 28 September 1362 without being a cardinal and reigned until 19 December…",
    "excerpt": "Bl. Urban V — 28 September 1362–19 December 1370. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 199,
        "slug": "innocent-vi",
        "name": "Innocent VI",
        "relation": "Previous pope"
      },
      {
        "num": 201,
        "slug": "gregory-xi",
        "name": "Gregory XI",
        "relation": "Next pope"
      },
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Also named Bl. Urban"
      }
    ]
  },
  {
    "num": 201,
    "slug": "gregory-xi",
    "title": "Pope Gregory XI (201º): Avignon Papacy — Complete Guide",
    "metaDescription": "Pope Gregory XI was Pierre Roger de Beaufort, a nephew of Clement VI, who reigned from 30 December 1370 to 27 March 1378.",
    "excerpt": "Gregory XI — 30 December 1370–27 March 1378. Subject of the Kingdom of France.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 200,
        "slug": "bl-urban-v",
        "name": "Bl. Urban V",
        "relation": "Previous pope"
      },
      {
        "num": 202,
        "slug": "urban-vi",
        "name": "Urban VI",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 202,
    "slug": "urban-vi",
    "title": "Pope Urban VI (202º): Western Schism — Complete Guide",
    "metaDescription": "Pope Urban VI was Bartolomeo Prignano, archbishop of Bari, elected in Rome on 8 April 1378 and reigning until 15 October 1389.",
    "excerpt": "Urban VI — 8 April 1378–15 October 1389. Subject of the Kingdom of Naples.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 201,
        "slug": "gregory-xi",
        "name": "Gregory XI",
        "relation": "Previous pope"
      },
      {
        "num": 203,
        "slug": "boniface-ix",
        "name": "Boniface IX",
        "relation": "Next pope"
      },
      {
        "num": 17,
        "slug": "st-urban-i",
        "name": "St. Urban I",
        "relation": "Also named Urban"
      },
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Also named Urban"
      },
      {
        "num": 172,
        "slug": "urban-iii",
        "name": "Urban III",
        "relation": "Also named Urban"
      }
    ]
  },
  {
    "num": 203,
    "slug": "boniface-ix",
    "title": "Pope Boniface IX (203º): Western Schism — Complete Guide",
    "metaDescription": "Pope Boniface IX was Pietro Tomacelli, a Neapolitan cardinal elected at a young age on 2 November 1389, who reigned in Rome until 1 October 1404 during the…",
    "excerpt": "Boniface IX — 2 November 1389–1 October 1404. Subject of the Kingdom of Naples.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 202,
        "slug": "urban-vi",
        "name": "Urban VI",
        "relation": "Previous pope"
      },
      {
        "num": 204,
        "slug": "innocent-vii",
        "name": "Innocent VII",
        "relation": "Next pope"
      },
      {
        "num": 42,
        "slug": "st-boniface-i",
        "name": "St. Boniface I",
        "relation": "Also named Boniface"
      },
      {
        "num": 55,
        "slug": "boniface-ii",
        "name": "Boniface II",
        "relation": "Also named Boniface"
      },
      {
        "num": 66,
        "slug": "boniface-iii",
        "name": "Boniface III",
        "relation": "Also named Boniface"
      }
    ]
  },
  {
    "num": 204,
    "slug": "innocent-vii",
    "title": "Pope Innocent VII (204º): Western Schism — Complete Guide",
    "metaDescription": "Pope Innocent VII was Cosimo de' Migliorati of Sulmona, elected in Rome on 17 October 1404 during the Western Schism; he reigned until his death on 6…",
    "excerpt": "Innocent VII — 17 October 1404–6 November 1406. Subject of the Kingdom of Naples.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 203,
        "slug": "boniface-ix",
        "name": "Boniface IX",
        "relation": "Previous pope"
      },
      {
        "num": 205,
        "slug": "gregory-xii",
        "name": "Gregory XII",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 205,
    "slug": "gregory-xii",
    "title": "Pope Gregory XII (205º): Western Schism — Complete Guide",
    "metaDescription": "Pope Gregory XII was Angelo Correr of Venice, elected in Rome on 30 November 1406 on a promise to resign if the Avignon claimant would do the same.",
    "excerpt": "Gregory XII — 30 November 1406–4 July 1415. Citizen of the Republic of Venice.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 204,
        "slug": "innocent-vii",
        "name": "Innocent VII",
        "relation": "Previous pope"
      },
      {
        "num": 206,
        "slug": "martin-v",
        "name": "Martin V",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 206,
    "slug": "martin-v",
    "title": "Pope Martin V (206º): Western Schism — Complete Guide",
    "metaDescription": "Pope Martin V was Oddone Colonna, a Roman cardinal elected at the Council of Constance on 11 November 1417, whose election effectively ended the Great…",
    "excerpt": "Martin V — 11 November 1417–20 February 1431. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 205,
        "slug": "gregory-xii",
        "name": "Gregory XII",
        "relation": "Previous pope"
      },
      {
        "num": 207,
        "slug": "eugene-iv",
        "name": "Eugene IV",
        "relation": "Next pope"
      },
      {
        "num": 74,
        "slug": "st-martin-i",
        "name": "St. Martin I",
        "relation": "Also named Martin"
      },
      {
        "num": 189,
        "slug": "martin-iv",
        "name": "Martin IV",
        "relation": "Also named Martin"
      }
    ]
  },
  {
    "num": 207,
    "slug": "eugene-iv",
    "title": "Pope Eugene IV (207º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Eugene IV was Gabriele Condulmer of Venice, a nephew of Gregory XII, who reigned from 3 March 1431 to 23 February 1447.",
    "excerpt": "Eugene IV — 3 March 1431–23 February 1447. Citizen of the Republic of Venice.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 206,
        "slug": "martin-v",
        "name": "Martin V",
        "relation": "Previous pope"
      },
      {
        "num": 208,
        "slug": "nicholas-v",
        "name": "Nicholas V",
        "relation": "Next pope"
      },
      {
        "num": 75,
        "slug": "st-eugene-i",
        "name": "St. Eugene I",
        "relation": "Also named Eugene"
      },
      {
        "num": 99,
        "slug": "eugene-ii",
        "name": "Eugene II",
        "relation": "Also named Eugene"
      },
      {
        "num": 167,
        "slug": "bl-eugene-iii",
        "name": "Bl. Eugene III",
        "relation": "Also named Eugene"
      }
    ]
  },
  {
    "num": 208,
    "slug": "nicholas-v",
    "title": "Pope Nicholas V (208º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Nicholas V was Tommaso Parentucelli of Sarzana, a humanist scholar who reigned from 6 March 1447 to 24 March 1455.",
    "excerpt": "Nicholas V — 6 March 1447–24 March 1455. Citizen of the Republic of Genoa.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 207,
        "slug": "eugene-iv",
        "name": "Eugene IV",
        "relation": "Previous pope"
      },
      {
        "num": 209,
        "slug": "callixtus-iii",
        "name": "Callixtus III",
        "relation": "Next pope"
      },
      {
        "num": 105,
        "slug": "st-nicholas-i-the-great",
        "name": "St. Nicholas I the Great",
        "relation": "Also named Nicholas"
      },
      {
        "num": 155,
        "slug": "nicholas-ii",
        "name": "Nicholas II",
        "relation": "Also named Nicholas"
      },
      {
        "num": 188,
        "slug": "nicholas-iii",
        "name": "Nicholas III",
        "relation": "Also named Nicholas"
      }
    ]
  },
  {
    "num": 209,
    "slug": "callixtus-iii",
    "title": "Pope Callixtus III (209º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Callixtus III was Alfonso de Borja of Xàtiva, the first pope from the Kingdom of Valencia and the first of the Borgia family, who reigned from 8 April…",
    "excerpt": "Callixtus III — 8 April 1455–6 August 1458. Subject of the Kingdom of Valencia(and therefore subject of the Crown of Aragon).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 208,
        "slug": "nicholas-v",
        "name": "Nicholas V",
        "relation": "Previous pope"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Next pope"
      },
      {
        "num": 16,
        "slug": "st-callixtus-i",
        "name": "St. Callixtus I",
        "relation": "Also named Callixtus"
      },
      {
        "num": 162,
        "slug": "callixtus-ii",
        "name": "Callixtus II",
        "relation": "Also named Callixtus"
      }
    ]
  },
  {
    "num": 210,
    "slug": "pius-ii",
    "title": "Pope Pius II (210º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Pius II was Enea Silvio Piccolomini of Corsignano near Siena, a celebrated humanist writer and former supporter of the Council of Basel, who reigned…",
    "excerpt": "Pius II — 19 August 1458–15 August 1464. Citizen of the Republic of Siena.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 209,
        "slug": "callixtus-iii",
        "name": "Callixtus III",
        "relation": "Previous pope"
      },
      {
        "num": 211,
        "slug": "paul-ii",
        "name": "Paul II",
        "relation": "Next pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Also named Pius"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Also named Pius"
      },
      {
        "num": 224,
        "slug": "pius-iv",
        "name": "Pius IV",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 211,
    "slug": "paul-ii",
    "title": "Pope Paul II (211º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Paul II was Pietro Barbo, a Venetian nobleman and nephew of Pope Eugene IV, who reigned from 1464 to 1471.",
    "excerpt": "Paul II — 30 August 1464–26 July 1471. Citizen of the Republic of Venice.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Previous pope"
      },
      {
        "num": 212,
        "slug": "sixtus-iv",
        "name": "Sixtus IV",
        "relation": "Next pope"
      },
      {
        "num": 93,
        "slug": "st-paul-i",
        "name": "St. Paul I",
        "relation": "Also named Paul"
      },
      {
        "num": 220,
        "slug": "paul-iii",
        "name": "Paul III",
        "relation": "Also named Paul"
      },
      {
        "num": 223,
        "slug": "paul-iv",
        "name": "Paul IV",
        "relation": "Also named Paul"
      }
    ]
  },
  {
    "num": 212,
    "slug": "sixtus-iv",
    "title": "Pope Sixtus IV (212º): Sistine Chapel & Art — Complete Guide",
    "metaDescription": "Pope Sixtus IV was Francesco della Rovere, a Franciscan theologian from Liguria who reigned from 1471 to 1484.",
    "excerpt": "Sixtus IV — 9 August 1471–12 August 1484. Citizen of the Republic of Genoa.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 211,
        "slug": "paul-ii",
        "name": "Paul II",
        "relation": "Previous pope"
      },
      {
        "num": 213,
        "slug": "innocent-viii",
        "name": "Innocent VIII",
        "relation": "Next pope"
      },
      {
        "num": 7,
        "slug": "st-sixtus-i",
        "name": "St. Sixtus I",
        "relation": "Also named Sixtus"
      },
      {
        "num": 24,
        "slug": "st-sixtus-ii",
        "name": "St. Sixtus II",
        "relation": "Also named Sixtus"
      },
      {
        "num": 44,
        "slug": "st-sixtus-iii",
        "name": "St. Sixtus III",
        "relation": "Also named Sixtus"
      }
    ]
  },
  {
    "num": 213,
    "slug": "innocent-viii",
    "title": "Pope Innocent VIII (213º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Innocent VIII was Giovanni Battista Cibo of Genoa, who reigned from 1484 to 1492.",
    "excerpt": "Innocent VIII — 29 August 1484–25 July 1492. Citizen of the Republic of Genoa.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 212,
        "slug": "sixtus-iv",
        "name": "Sixtus IV",
        "relation": "Previous pope"
      },
      {
        "num": 214,
        "slug": "alexander-vi",
        "name": "Alexander VI",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 214,
    "slug": "alexander-vi",
    "title": "Pope Alexander VI (214º): Borgia Papacy, Inter Caetera & Controversy",
    "metaDescription": "Pope Alexander VI was Rodrigo de Borja (Borgia), a Valencian-born cardinal and nephew of Callixtus III, who reigned from 1492 to 1503.",
    "excerpt": "Alexander VI — 11 August 1492–18 August 1503. Subject of the Kingdom of Valencia(and therefore subject of the Crown of Aragon).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 213,
        "slug": "innocent-viii",
        "name": "Innocent VIII",
        "relation": "Previous pope"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Next pope"
      },
      {
        "num": 6,
        "slug": "st-alexander-i",
        "name": "St. Alexander I",
        "relation": "Also named Alexander"
      },
      {
        "num": 156,
        "slug": "alexander-ii",
        "name": "Alexander II",
        "relation": "Also named Alexander"
      },
      {
        "num": 170,
        "slug": "alexander-iii",
        "name": "Alexander III",
        "relation": "Also named Alexander"
      }
    ]
  },
  {
    "num": 215,
    "slug": "pius-iii",
    "title": "Pope Pius III (215º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Pius III was Francesco Todeschini Piccolomini, a nephew of Pope Pius II, who was elected in September 1503 and died 26 days later.",
    "excerpt": "Pius III — 22 September 1503–18 October 1503. Citizen of the Republic of Siena.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 214,
        "slug": "alexander-vi",
        "name": "Alexander VI",
        "relation": "Previous pope"
      },
      {
        "num": 216,
        "slug": "julius-ii",
        "name": "Julius II",
        "relation": "Next pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Also named Pius"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Also named Pius"
      },
      {
        "num": 224,
        "slug": "pius-iv",
        "name": "Pius IV",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 216,
    "slug": "julius-ii",
    "title": "Pope Julius II (216º): Warrior Pope, Sistine Chapel & Renaissance Rome",
    "metaDescription": "Pope Julius II was Giuliano della Rovere, nephew of Sixtus IV, who reigned from 1503 to 1513.",
    "excerpt": "Julius II — 31 October 1503–21 February 1513. Citizen of the Republic of Genoa.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Previous pope"
      },
      {
        "num": 217,
        "slug": "leo-x-leo-decimus",
        "name": "Leo X LEO Decimus",
        "relation": "Next pope"
      },
      {
        "num": 35,
        "slug": "st-julius-i",
        "name": "St. Julius I",
        "relation": "Also named Julius"
      },
      {
        "num": 221,
        "slug": "julius-iii",
        "name": "Julius III",
        "relation": "Also named Julius"
      }
    ]
  },
  {
    "num": 217,
    "slug": "leo-x-leo-decimus",
    "title": "Pope Leo X (217º): Medici Pope, Luther & St. Peter's Basilica",
    "metaDescription": "Pope Leo X was Giovanni de' Medici, son of Lorenzo the Magnificent, who reigned from 1513 to 1521.",
    "excerpt": "Leo X LEO Decimus — 9 March 1513–1 December 1521. Citizen of the Republic of Florence.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 216,
        "slug": "julius-ii",
        "name": "Julius II",
        "relation": "Previous pope"
      },
      {
        "num": 218,
        "slug": "adrian-vi",
        "name": "Adrian VI",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 218,
    "slug": "adrian-vi",
    "title": "Pope Adrian VI (218º): Reformation Era — Complete Guide",
    "metaDescription": "Pope Adrian VI was Adriaan Florensz of Utrecht, a Louvain theologian and former tutor of Emperor Charles V, who reigned from 1522 to 1523.",
    "excerpt": "Adrian VI — 9 January 1522–14 September 1523. Subject of the Bishopric of Utrecht.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 217,
        "slug": "leo-x-leo-decimus",
        "name": "Leo X LEO Decimus",
        "relation": "Previous pope"
      },
      {
        "num": 219,
        "slug": "clement-vii",
        "name": "Clement VII",
        "relation": "Next pope"
      },
      {
        "num": 95,
        "slug": "adrian-i",
        "name": "Adrian I",
        "relation": "Also named Adrian"
      },
      {
        "num": 106,
        "slug": "adrian-ii",
        "name": "Adrian II",
        "relation": "Also named Adrian"
      },
      {
        "num": 109,
        "slug": "st-adrian-iii",
        "name": "St. Adrian III",
        "relation": "Also named Adrian"
      }
    ]
  },
  {
    "num": 219,
    "slug": "clement-vii",
    "title": "Pope Clement VII (219º): Sistine Chapel & Art — Complete Guide",
    "metaDescription": "Pope Clement VII was Giulio de' Medici, cousin of Leo X, who reigned from 1523 to 1534.",
    "excerpt": "Clement VII — 26 November 1523–25 September 1534. Citizen of the Republic of Florence.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 218,
        "slug": "adrian-vi",
        "name": "Adrian VI",
        "relation": "Previous pope"
      },
      {
        "num": 220,
        "slug": "paul-iii",
        "name": "Paul III",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 220,
    "slug": "paul-iii",
    "title": "Pope Paul III (220º): Council of Trent & Sistine Chapel & Art — Complete Guide",
    "metaDescription": "Pope Paul III was Alessandro Farnese, who reigned from 1534 to 1549.",
    "excerpt": "Paul III — 13 October 1534–10 November 1549. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 219,
        "slug": "clement-vii",
        "name": "Clement VII",
        "relation": "Previous pope"
      },
      {
        "num": 221,
        "slug": "julius-iii",
        "name": "Julius III",
        "relation": "Next pope"
      },
      {
        "num": 93,
        "slug": "st-paul-i",
        "name": "St. Paul I",
        "relation": "Also named Paul"
      },
      {
        "num": 211,
        "slug": "paul-ii",
        "name": "Paul II",
        "relation": "Also named Paul"
      },
      {
        "num": 223,
        "slug": "paul-iv",
        "name": "Paul IV",
        "relation": "Also named Paul"
      }
    ]
  },
  {
    "num": 221,
    "slug": "julius-iii",
    "title": "Pope Julius III (221º): Council of Trent — Complete Guide",
    "metaDescription": "Pope Julius III was Giovanni Maria Ciocchi del Monte, a Roman-born canon lawyer who had presided over the opening of the Council of Trent, and he reigned…",
    "excerpt": "Julius III — 7 February 1550–29 March 1555. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 220,
        "slug": "paul-iii",
        "name": "Paul III",
        "relation": "Previous pope"
      },
      {
        "num": 222,
        "slug": "marcellus-ii",
        "name": "Marcellus II",
        "relation": "Next pope"
      },
      {
        "num": 35,
        "slug": "st-julius-i",
        "name": "St. Julius I",
        "relation": "Also named Julius"
      },
      {
        "num": 216,
        "slug": "julius-ii",
        "name": "Julius II",
        "relation": "Also named Julius"
      }
    ]
  },
  {
    "num": 222,
    "slug": "marcellus-ii",
    "title": "Pope Marcellus II (222º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Marcellus II was Marcello Cervini, a reform-minded scholar and former legate at the Council of Trent, who reigned for only 22 days in April 1555.",
    "excerpt": "Marcellus II — 9 April 1555–1 May 1555. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 221,
        "slug": "julius-iii",
        "name": "Julius III",
        "relation": "Previous pope"
      },
      {
        "num": 223,
        "slug": "paul-iv",
        "name": "Paul IV",
        "relation": "Next pope"
      },
      {
        "num": 30,
        "slug": "st-marcellus-i",
        "name": "St. Marcellus I",
        "relation": "Also named Marcellus"
      }
    ]
  },
  {
    "num": 223,
    "slug": "paul-iv",
    "title": "Pope Paul IV (223º): Sistine Chapel & Art — Complete Guide",
    "metaDescription": "Pope Paul IV was Gian Pietro Carafa, co-founder of the Theatine order and a leading figure of the Roman Inquisition, who reigned from 1555 to 1559.",
    "excerpt": "Paul IV — 23 May 1555–18 August 1559. Subject of the Kingdom of Naples.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 222,
        "slug": "marcellus-ii",
        "name": "Marcellus II",
        "relation": "Previous pope"
      },
      {
        "num": 224,
        "slug": "pius-iv",
        "name": "Pius IV",
        "relation": "Next pope"
      },
      {
        "num": 93,
        "slug": "st-paul-i",
        "name": "St. Paul I",
        "relation": "Also named Paul"
      },
      {
        "num": 211,
        "slug": "paul-ii",
        "name": "Paul II",
        "relation": "Also named Paul"
      },
      {
        "num": 220,
        "slug": "paul-iii",
        "name": "Paul III",
        "relation": "Also named Paul"
      }
    ]
  },
  {
    "num": 224,
    "slug": "pius-iv",
    "title": "Pope Pius IV (224º): Council of Trent — Complete Guide",
    "metaDescription": "Pope Pius IV was Giovanni Angelo Medici of Milan, who reigned from 1559 to 1565.",
    "excerpt": "Pius IV — 26 December 1559–9 December 1565. Subject of the Duchy of Milan.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 223,
        "slug": "paul-iv",
        "name": "Paul IV",
        "relation": "Previous pope"
      },
      {
        "num": 225,
        "slug": "st-pius-v",
        "name": "St. Pius V",
        "relation": "Next pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Also named Pius"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Also named Pius"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 225,
    "slug": "st-pius-v",
    "title": "Pope St. Pius V (225º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Pius V was Antonio Ghislieri, a Dominican friar who reigned from 1566 to 1572.",
    "excerpt": "St. Pius V — 7 January 1566–1 May 1572. Subject of the Duchy of Milan.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 224,
        "slug": "pius-iv",
        "name": "Pius IV",
        "relation": "Previous pope"
      },
      {
        "num": 226,
        "slug": "gregory-xiii",
        "name": "Gregory XIII",
        "relation": "Next pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Also named Pius"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Also named Pius"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 226,
    "slug": "gregory-xiii",
    "title": "Pope Gregory XIII (226º): Vatican I & Dogma & Gregorian Calendar — Complete Guide",
    "metaDescription": "Pope Gregory XIII was Ugo Boncompagni, a Bolognese canon lawyer who reigned from 1572 to 1585.",
    "excerpt": "Gregory XIII — 13 May 1572–10 April 1585. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 225,
        "slug": "st-pius-v",
        "name": "St. Pius V",
        "relation": "Previous pope"
      },
      {
        "num": 227,
        "slug": "sixtus-v",
        "name": "Sixtus V",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 227,
    "slug": "sixtus-v",
    "title": "Pope Sixtus V (227º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Sixtus V was Felice Peretti, a Conventual Franciscan of humble birth who reigned from 1585 to 1590.",
    "excerpt": "Sixtus V — 24 April 1585–27 August 1590. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 226,
        "slug": "gregory-xiii",
        "name": "Gregory XIII",
        "relation": "Previous pope"
      },
      {
        "num": 228,
        "slug": "urban-vii",
        "name": "Urban VII",
        "relation": "Next pope"
      },
      {
        "num": 7,
        "slug": "st-sixtus-i",
        "name": "St. Sixtus I",
        "relation": "Also named Sixtus"
      },
      {
        "num": 24,
        "slug": "st-sixtus-ii",
        "name": "St. Sixtus II",
        "relation": "Also named Sixtus"
      },
      {
        "num": 44,
        "slug": "st-sixtus-iii",
        "name": "St. Sixtus III",
        "relation": "Also named Sixtus"
      }
    ]
  },
  {
    "num": 228,
    "slug": "urban-vii",
    "title": "Pope Urban VII (228º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Urban VII was Giovanni Battista Castagna, a Roman-born diplomat elected on 15 September 1590 who died of malaria just 13 days later, before he could be…",
    "excerpt": "Urban VII — 15 September 1590–27 September 1590. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 227,
        "slug": "sixtus-v",
        "name": "Sixtus V",
        "relation": "Previous pope"
      },
      {
        "num": 229,
        "slug": "gregory-xiv",
        "name": "Gregory XIV",
        "relation": "Next pope"
      },
      {
        "num": 17,
        "slug": "st-urban-i",
        "name": "St. Urban I",
        "relation": "Also named Urban"
      },
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Also named Urban"
      },
      {
        "num": 172,
        "slug": "urban-iii",
        "name": "Urban III",
        "relation": "Also named Urban"
      }
    ]
  },
  {
    "num": 229,
    "slug": "gregory-xiv",
    "title": "Pope Gregory XIV (229º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Gregory XIV was Niccolo Sfondrati, a Lombard bishop and friend of St. Charles Borromeo, who reigned from December 1590 to October 1591.",
    "excerpt": "Gregory XIV — 5 December 1590–16 October 1591. Subject of the Duchy of Milan.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 228,
        "slug": "urban-vii",
        "name": "Urban VII",
        "relation": "Previous pope"
      },
      {
        "num": 230,
        "slug": "innocent-ix",
        "name": "Innocent IX",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 230,
    "slug": "innocent-ix",
    "title": "Pope Innocent IX (230º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Innocent IX was Giovanni Antonio Facchinetti of Bologna, a veteran diplomat and canonist who reigned for two months, from 29 October to 30 December 1591.",
    "excerpt": "Innocent IX — 29 October 1591–30 December 1591. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 229,
        "slug": "gregory-xiv",
        "name": "Gregory XIV",
        "relation": "Previous pope"
      },
      {
        "num": 231,
        "slug": "clement-viii",
        "name": "Clement VIII",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 231,
    "slug": "clement-viii",
    "title": "Pope Clement VIII (231º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement VIII was Ippolito Aldobrandini, who reigned from 1592 to 1605.",
    "excerpt": "Clement VIII — 30 January 1592–3 March 1605. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 230,
        "slug": "innocent-ix",
        "name": "Innocent IX",
        "relation": "Previous pope"
      },
      {
        "num": 232,
        "slug": "leo-xi-leo-undecimus",
        "name": "Leo XI LEO Undecimus",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 232,
    "slug": "leo-xi-leo-undecimus",
    "title": "Pope Leo XI LEO Undecimus (232º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Leo XI was Alessandro Ottaviano de' Medici, archbishop of Florence and a great-nephew of Leo X, who reigned for just 27 days in April 1605.",
    "excerpt": "Leo XI LEO Undecimus — 1 April 1605–27 April 1605. Subject of the Duchy of Florence.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 231,
        "slug": "clement-viii",
        "name": "Clement VIII",
        "relation": "Previous pope"
      },
      {
        "num": 233,
        "slug": "paul-v",
        "name": "Paul V",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 233,
    "slug": "paul-v",
    "title": "Pope Paul V (233º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Paul V was Camillo Borghese, a Roman canon lawyer who reigned from 1605 to 1621.",
    "excerpt": "Paul V — 16 May 1605–28 January 1621. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 232,
        "slug": "leo-xi-leo-undecimus",
        "name": "Leo XI LEO Undecimus",
        "relation": "Previous pope"
      },
      {
        "num": 234,
        "slug": "gregory-xv",
        "name": "Gregory XV",
        "relation": "Next pope"
      },
      {
        "num": 93,
        "slug": "st-paul-i",
        "name": "St. Paul I",
        "relation": "Also named Paul"
      },
      {
        "num": 211,
        "slug": "paul-ii",
        "name": "Paul II",
        "relation": "Also named Paul"
      },
      {
        "num": 220,
        "slug": "paul-iii",
        "name": "Paul III",
        "relation": "Also named Paul"
      }
    ]
  },
  {
    "num": 234,
    "slug": "gregory-xv",
    "title": "Pope Gregory XV (234º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Gregory XV was Alessandro Ludovisi of Bologna, who reigned from 1621 to 1623.",
    "excerpt": "Gregory XV — 9 February 1621–8 July 1623. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 233,
        "slug": "paul-v",
        "name": "Paul V",
        "relation": "Previous pope"
      },
      {
        "num": 235,
        "slug": "urban-viii",
        "name": "Urban VIII",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 235,
    "slug": "urban-viii",
    "title": "Pope Urban VIII (235º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Urban VIII was Maffeo Barberini of Florence, who reigned from 1623 to 1644.",
    "excerpt": "Urban VIII — 6 August 1623–29 July 1644. Subject of the Grand Duchy of Tuscany.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 234,
        "slug": "gregory-xv",
        "name": "Gregory XV",
        "relation": "Previous pope"
      },
      {
        "num": 236,
        "slug": "innocent-x",
        "name": "Innocent X",
        "relation": "Next pope"
      },
      {
        "num": 17,
        "slug": "st-urban-i",
        "name": "St. Urban I",
        "relation": "Also named Urban"
      },
      {
        "num": 159,
        "slug": "bl-urban-ii",
        "name": "Bl. Urban II",
        "relation": "Also named Urban"
      },
      {
        "num": 172,
        "slug": "urban-iii",
        "name": "Urban III",
        "relation": "Also named Urban"
      }
    ]
  },
  {
    "num": 236,
    "slug": "innocent-x",
    "title": "Pope Innocent X (236º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Innocent X was Giovanni Battista Pamphilj, a Roman jurist and diplomat who reigned from 1644 to 1655.",
    "excerpt": "Innocent X — 15 September 1644–7 January 1655. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 235,
        "slug": "urban-viii",
        "name": "Urban VIII",
        "relation": "Previous pope"
      },
      {
        "num": 237,
        "slug": "alexander-vii",
        "name": "Alexander VII",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 237,
    "slug": "alexander-vii",
    "title": "Pope Alexander VII (237º): Vatican I & Dogma — Complete Guide",
    "metaDescription": "Pope Alexander VII was Fabio Chigi of Siena, a diplomat and former secretary of state who reigned from 1655 to 1667.",
    "excerpt": "Alexander VII — 7 April 1655–22 May 1667. Subject of the Grand Duchy of Tuscany.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 236,
        "slug": "innocent-x",
        "name": "Innocent X",
        "relation": "Previous pope"
      },
      {
        "num": 238,
        "slug": "clement-ix",
        "name": "Clement IX",
        "relation": "Next pope"
      },
      {
        "num": 6,
        "slug": "st-alexander-i",
        "name": "St. Alexander I",
        "relation": "Also named Alexander"
      },
      {
        "num": 156,
        "slug": "alexander-ii",
        "name": "Alexander II",
        "relation": "Also named Alexander"
      },
      {
        "num": 170,
        "slug": "alexander-iii",
        "name": "Alexander III",
        "relation": "Also named Alexander"
      }
    ]
  },
  {
    "num": 238,
    "slug": "clement-ix",
    "title": "Pope Clement IX (238º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement IX was Giulio Rospigliosi of Pistoia, a diplomat and opera librettist who reigned from 1667 to 1669.",
    "excerpt": "Clement IX — 20 June 1667–9 December 1669. Subject of the Grand Duchy of Tuscany.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 237,
        "slug": "alexander-vii",
        "name": "Alexander VII",
        "relation": "Previous pope"
      },
      {
        "num": 239,
        "slug": "clement-x",
        "name": "Clement X",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 239,
    "slug": "clement-x",
    "title": "Pope Clement X (239º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement X was Emilio Altieri, a Roman elected at nearly 80 who reigned from 1670 to 1676.",
    "excerpt": "Clement X — 29 April 1670–22 July 1676. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 238,
        "slug": "clement-ix",
        "name": "Clement IX",
        "relation": "Previous pope"
      },
      {
        "num": 240,
        "slug": "bl-innocent-xi",
        "name": "Bl. Innocent XI",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 240,
    "slug": "bl-innocent-xi",
    "title": "Pope Bl. Innocent XI (240º): Biography, Pontificate & Legacy",
    "metaDescription": "Blessed Innocent XI was Benedetto Odescalchi of Como, who reigned from 1676 to 1689.",
    "excerpt": "Bl. Innocent XI — 21 September 1676–12 August 1689. Subject of the Duchy of Milan.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 239,
        "slug": "clement-x",
        "name": "Clement X",
        "relation": "Previous pope"
      },
      {
        "num": 241,
        "slug": "alexander-viii",
        "name": "Alexander VIII",
        "relation": "Next pope"
      },
      {
        "num": 185,
        "slug": "bl-innocent-v",
        "name": "Bl. Innocent V",
        "relation": "Also named Bl. Innocent"
      }
    ]
  },
  {
    "num": 241,
    "slug": "alexander-viii",
    "title": "Pope Alexander VIII (241º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Alexander VIII was Pietro Ottoboni, a Venetian nobleman and veteran canon lawyer who was elected at about 79 and reigned from 6 October 1689 to 1…",
    "excerpt": "Alexander VIII — 6 October 1689–1 February 1691. Citizen of the Republic of Venice.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 240,
        "slug": "bl-innocent-xi",
        "name": "Bl. Innocent XI",
        "relation": "Previous pope"
      },
      {
        "num": 242,
        "slug": "innocent-xii",
        "name": "Innocent XII",
        "relation": "Next pope"
      },
      {
        "num": 6,
        "slug": "st-alexander-i",
        "name": "St. Alexander I",
        "relation": "Also named Alexander"
      },
      {
        "num": 156,
        "slug": "alexander-ii",
        "name": "Alexander II",
        "relation": "Also named Alexander"
      },
      {
        "num": 170,
        "slug": "alexander-iii",
        "name": "Alexander III",
        "relation": "Also named Alexander"
      }
    ]
  },
  {
    "num": 242,
    "slug": "innocent-xii",
    "title": "Pope Innocent XII (242º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Innocent XII was Antonio Pignatelli, a Neapolitan nobleman who reigned from 12 July 1691 to 27 September 1700.",
    "excerpt": "Innocent XII — 12 July 1691–27 September 1700. Subject of the Kingdom of Naples.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 241,
        "slug": "alexander-viii",
        "name": "Alexander VIII",
        "relation": "Previous pope"
      },
      {
        "num": 243,
        "slug": "clement-xi",
        "name": "Clement XI",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 243,
    "slug": "clement-xi",
    "title": "Pope Clement XI (243º): Vatican I & Dogma — Complete Guide",
    "metaDescription": "Pope Clement XI was Giovanni Francesco Albani of Urbino, who reigned from 23 November 1700 to 19 March 1721, one of the longer pontificates of the era.",
    "excerpt": "Clement XI — 23 November 1700–19 March 1721. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 242,
        "slug": "innocent-xii",
        "name": "Innocent XII",
        "relation": "Previous pope"
      },
      {
        "num": 244,
        "slug": "innocent-xiii",
        "name": "Innocent XIII",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 244,
    "slug": "innocent-xiii",
    "title": "Pope Innocent XIII (244º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Innocent XIII was Michelangelo dei Conti, a Roman nobleman and former nuncio to Portugal who reigned from 8 May 1721 to 7 March 1724.",
    "excerpt": "Innocent XIII — 8 May 1721–7 March 1724. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 243,
        "slug": "clement-xi",
        "name": "Clement XI",
        "relation": "Previous pope"
      },
      {
        "num": 245,
        "slug": "servant-of-god-benedict-xiii",
        "name": "Servant of God Benedict XIII",
        "relation": "Next pope"
      },
      {
        "num": 40,
        "slug": "st-innocent-i",
        "name": "St. Innocent I",
        "relation": "Also named Innocent"
      },
      {
        "num": 164,
        "slug": "innocent-ii",
        "name": "Innocent II",
        "relation": "Also named Innocent"
      },
      {
        "num": 176,
        "slug": "innocent-iii",
        "name": "Innocent III",
        "relation": "Also named Innocent"
      }
    ]
  },
  {
    "num": 245,
    "slug": "servant-of-god-benedict-xiii",
    "title": "Pope Servant of God Benedict XIII (245º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict XIII was Pietro Francesco Orsini, a Dominican friar from a great Roman noble family, who reigned from 29 May 1724 to 21 February 1730.",
    "excerpt": "Servant of God Benedict XIII — 29 May 1724–21 February 1730. Subject of the Kingdom of Naples.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 244,
        "slug": "innocent-xiii",
        "name": "Innocent XIII",
        "relation": "Previous pope"
      },
      {
        "num": 246,
        "slug": "clement-xii",
        "name": "Clement XII",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 246,
    "slug": "clement-xii",
    "title": "Pope Clement XII (246º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement XII was Lorenzo Corsini of Florence, elected at 78, who reigned from 12 July 1730 to 6 February 1740 despite becoming blind.",
    "excerpt": "Clement XII — 12 July 1730–6 February 1740. Subject of the Grand Duchy of Tuscany.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 245,
        "slug": "servant-of-god-benedict-xiii",
        "name": "Servant of God Benedict XIII",
        "relation": "Previous pope"
      },
      {
        "num": 247,
        "slug": "benedict-xiv",
        "name": "Benedict XIV",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 247,
    "slug": "benedict-xiv",
    "title": "Pope Benedict XIV (247º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict XIV was Prospero Lambertini of Bologna, one of the most learned canon lawyers ever to become pope, who reigned from 17 August 1740 to 3 May…",
    "excerpt": "Benedict XIV — 17 August 1740–3 May 1758. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 246,
        "slug": "clement-xii",
        "name": "Clement XII",
        "relation": "Previous pope"
      },
      {
        "num": 248,
        "slug": "clement-xiii",
        "name": "Clement XIII",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 248,
    "slug": "clement-xiii",
    "title": "Pope Clement XIII (248º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement XIII was Carlo della Torre di Rezzonico, a Venetian and former bishop of Padua, who reigned from 6 July 1758 to 2 February 1769.",
    "excerpt": "Clement XIII — 6 July 1758–2 February 1769. Citizen of the Republic of Venice.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 247,
        "slug": "benedict-xiv",
        "name": "Benedict XIV",
        "relation": "Previous pope"
      },
      {
        "num": 249,
        "slug": "clement-xiv",
        "name": "Clement XIV",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 249,
    "slug": "clement-xiv",
    "title": "Pope Clement XIV (249º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Clement XIV was Lorenzo Ganganelli, a Conventual Franciscan friar who reigned from 19 May 1769 to 22 September 1774.",
    "excerpt": "Clement XIV — 19 May 1769–22 September 1774. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 248,
        "slug": "clement-xiii",
        "name": "Clement XIII",
        "relation": "Previous pope"
      },
      {
        "num": 250,
        "slug": "pius-vi",
        "name": "Pius VI",
        "relation": "Next pope"
      },
      {
        "num": 4,
        "slug": "st-clement-i",
        "name": "St. Clement I",
        "relation": "Also named Clement"
      },
      {
        "num": 149,
        "slug": "clement-ii",
        "name": "Clement II",
        "relation": "Also named Clement"
      },
      {
        "num": 174,
        "slug": "clement-iii",
        "name": "Clement III",
        "relation": "Also named Clement"
      }
    ]
  },
  {
    "num": 250,
    "slug": "pius-vi",
    "title": "Pope Pius VI (250º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Pius VI was Giovanni Angelo Braschi of Cesena, who reigned from 15 February 1775 to 29 August 1799, one of the longest pontificates up to that time.",
    "excerpt": "Pius VI — 15 February 1775–29 August 1799. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 249,
        "slug": "clement-xiv",
        "name": "Clement XIV",
        "relation": "Previous pope"
      },
      {
        "num": 251,
        "slug": "servant-of-god-pius-vii",
        "name": "Servant of God Pius VII",
        "relation": "Next pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Also named Pius"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Also named Pius"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 251,
    "slug": "servant-of-god-pius-vii",
    "title": "Pope Servant of God Pius VII (251º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Pius VII was Barnaba Chiaramonti, a Benedictine monk elected in Venice who reigned from 14 March 1800 to 20 August 1823.",
    "excerpt": "Servant of God Pius VII — 14 March 1800–20 August 1823. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 250,
        "slug": "pius-vi",
        "name": "Pius VI",
        "relation": "Previous pope"
      },
      {
        "num": 252,
        "slug": "leo-xii-leo-duodecimus",
        "name": "Leo XII LEO Duodecimus",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 252,
    "slug": "leo-xii-leo-duodecimus",
    "title": "Pope Leo XII LEO Duodecimus (252º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Leo XII was Annibale della Genga, a former papal diplomat from the Marche who reigned from 28 September 1823 to 10 February 1829.",
    "excerpt": "Leo XII LEO Duodecimus — 28 September 1823–10 February 1829. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 251,
        "slug": "servant-of-god-pius-vii",
        "name": "Servant of God Pius VII",
        "relation": "Previous pope"
      },
      {
        "num": 253,
        "slug": "pius-viii",
        "name": "Pius VIII",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 253,
    "slug": "pius-viii",
    "title": "Pope Pius VIII (253º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Pius VIII was Francesco Saverio Castiglioni, a canon lawyer from Cingoli who reigned only from 31 March 1829 to 30 November 1830.",
    "excerpt": "Pius VIII — 31 March 1829–30 November 1830. Subject and later the sovereign of the Papal States.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 252,
        "slug": "leo-xii-leo-duodecimus",
        "name": "Leo XII LEO Duodecimus",
        "relation": "Previous pope"
      },
      {
        "num": 254,
        "slug": "gregory-xvi",
        "name": "Gregory XVI",
        "relation": "Next pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Also named Pius"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Also named Pius"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 254,
    "slug": "gregory-xvi",
    "title": "Pope Gregory XVI (254º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Gregory XVI was Bartolomeo Alberto Cappellari, a Camaldolese monk who reigned from 2 February 1831 to 1 June 1846 and was the last pope elected who was…",
    "excerpt": "Gregory XVI — 2 February 1831–1 June 1846. Citizen of the Republic of Venice.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 253,
        "slug": "pius-viii",
        "name": "Pius VIII",
        "relation": "Previous pope"
      },
      {
        "num": 255,
        "slug": "bl-pius-ix",
        "name": "Bl. Pius IX",
        "relation": "Next pope"
      },
      {
        "num": 64,
        "slug": "st-gregory-i-the-great",
        "name": "St. Gregory I the Great",
        "relation": "Also named Gregory"
      },
      {
        "num": 89,
        "slug": "st-gregory-ii",
        "name": "St. Gregory II",
        "relation": "Also named Gregory"
      },
      {
        "num": 90,
        "slug": "st-gregory-iii",
        "name": "St. Gregory III",
        "relation": "Also named Gregory"
      }
    ]
  },
  {
    "num": 255,
    "slug": "bl-pius-ix",
    "title": "Pope Bl. Pius IX (255º): Vatican I, Immaculate Conception & Longest Reign",
    "metaDescription": "Blessed Pius IX was Giovanni Maria Mastai-Ferretti, who reigned from 16 June 1846 to 7 February 1878, the longest verified pontificate in Church history.",
    "excerpt": "Bl. Pius IX — 16 June 1846–7 February 1878. Subject and later the last sovereign of the Papal States, finally becoming an Italian citizen.",
    "readTime": "4 min",
    "relatedPopes": [
      {
        "num": 254,
        "slug": "gregory-xvi",
        "name": "Gregory XVI",
        "relation": "Previous pope"
      },
      {
        "num": 256,
        "slug": "leo-xiii-leo-tertius-decimus",
        "name": "Leo XIII LEO Tertius Decimus",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 256,
    "slug": "leo-xiii-leo-tertius-decimus",
    "title": "Pope Leo XIII (256º): Rerum Novarum, Social Teaching & Modern Papacy",
    "metaDescription": "Pope Leo XIII was Gioacchino Pecci, who reigned from 20 February 1878 to 20 July 1903 and died at 93, the oldest verified pope in office.",
    "excerpt": "Leo XIII LEO Tertius Decimus — 20 February 1878–20 July 1903. French citizen of Italian ethnicity, later becoming a subject of the Papal States and...",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 255,
        "slug": "bl-pius-ix",
        "name": "Bl. Pius IX",
        "relation": "Previous pope"
      },
      {
        "num": 257,
        "slug": "st-pius-x",
        "name": "St. Pius X",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 257,
    "slug": "st-pius-x",
    "title": "Pope St. Pius X (257º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope St. Pius X was Giuseppe Sarto, a parish priest from the Veneto who rose to patriarch of Venice and reigned from 4 August 1903 to 20 August 1914.",
    "excerpt": "St. Pius X — 4 August 1903–20 August 1914. Subject of the Kingdom of Lombardy–Venetia, later becoming an Italian citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 256,
        "slug": "leo-xiii-leo-tertius-decimus",
        "name": "Leo XIII LEO Tertius Decimus",
        "relation": "Previous pope"
      },
      {
        "num": 258,
        "slug": "benedict-xv",
        "name": "Benedict XV",
        "relation": "Next pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Also named Pius"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Also named Pius"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 258,
    "slug": "benedict-xv",
    "title": "Pope Benedict XV (258º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Benedict XV was Giacomo della Chiesa of Genoa, elected weeks after World War I began, who reigned from 3 September 1914 to 22 January 1922.",
    "excerpt": "Benedict XV — 3 September 1914–22 January 1922. Subject of the Kingdom of Sardinia, later becoming an Italian citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 257,
        "slug": "st-pius-x",
        "name": "St. Pius X",
        "relation": "Previous pope"
      },
      {
        "num": 259,
        "slug": "pius-xi",
        "name": "Pius XI",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 259,
    "slug": "pius-xi",
    "title": "Pope Pius XI (259º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope Pius XI was Achille Ratti, a scholar-librarian and mountaineer from Lombardy who reigned from 6 February 1922 to 10 February 1939.",
    "excerpt": "Pius XI — 6 February 1922–10 February 1939. Subject of the Kingdom of Lombardy–Venetia, later becoming an Italian citizen.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 258,
        "slug": "benedict-xv",
        "name": "Benedict XV",
        "relation": "Previous pope"
      },
      {
        "num": 260,
        "slug": "ven-pius-xii",
        "name": "Ven. Pius XII",
        "relation": "Next pope"
      },
      {
        "num": 10,
        "slug": "st-pius-i",
        "name": "St. Pius I",
        "relation": "Also named Pius"
      },
      {
        "num": 210,
        "slug": "pius-ii",
        "name": "Pius II",
        "relation": "Also named Pius"
      },
      {
        "num": 215,
        "slug": "pius-iii",
        "name": "Pius III",
        "relation": "Also named Pius"
      }
    ]
  },
  {
    "num": 260,
    "slug": "ven-pius-xii",
    "title": "Pope Ven. Pius XII (260º): Vatican I & Dogma — Complete Guide",
    "metaDescription": "Venerable Pius XII was Eugenio Pacelli, a Roman-born Vatican diplomat who reigned from 2 March 1939 to 9 October 1958, guiding the Church through World War…",
    "excerpt": "Ven. Pius XII — 2 March 1939–9 October 1958. Italian citizen; first pope born after the unification of Italy.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 259,
        "slug": "pius-xi",
        "name": "Pius XI",
        "relation": "Previous pope"
      },
      {
        "num": 261,
        "slug": "st-john",
        "name": "St. John",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 261,
    "slug": "st-john",
    "title": "Pope St. John XXIII (261º): Vatican II, Pacem in Terris & Good Pope John",
    "metaDescription": "Pope St. John XXIII was Angelo Giuseppe Roncalli, a farmer's son from near Bergamo who reigned from 28 October 1958 to 3 June 1963.",
    "excerpt": "St. John — 28 October 1958–3 June 1963. Opened the Second Vatican Council(1962).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 260,
        "slug": "ven-pius-xii",
        "name": "Ven. Pius XII",
        "relation": "Previous pope"
      },
      {
        "num": 262,
        "slug": "st-paul-vi",
        "name": "St. Paul VI",
        "relation": "Next pope"
      },
      {
        "num": 53,
        "slug": "st-john-i",
        "name": "St. John I",
        "relation": "Also named John"
      },
      {
        "num": 56,
        "slug": "john-ii",
        "name": "John II",
        "relation": "Also named John"
      },
      {
        "num": 61,
        "slug": "john-iii",
        "name": "John III",
        "relation": "Also named John"
      }
    ]
  },
  {
    "num": 262,
    "slug": "st-paul-vi",
    "title": "Pope St. Paul VI (262º): the Great & Vatican II — Complete Guide",
    "metaDescription": "Pope St. Paul VI was Giovanni Battista Montini, former archbishop of Milan, who reigned from 21 June 1963 to 6 August 1978.",
    "excerpt": "St. Paul VI — 21 June 1963–6 August 1978. Last pope to be crowned.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 261,
        "slug": "st-john",
        "name": "St. John",
        "relation": "Previous pope"
      },
      {
        "num": 263,
        "slug": "john-paul-i",
        "name": "John Paul I",
        "relation": "Next pope"
      },
      {
        "num": 93,
        "slug": "st-paul-i",
        "name": "St. Paul I",
        "relation": "Also named Paul"
      },
      {
        "num": 211,
        "slug": "paul-ii",
        "name": "Paul II",
        "relation": "Also named Paul"
      },
      {
        "num": 220,
        "slug": "paul-iii",
        "name": "Paul III",
        "relation": "Also named Paul"
      }
    ]
  },
  {
    "num": 263,
    "slug": "john-paul-i",
    "title": "Pope John Paul I (263º): Biography, Pontificate & Legacy",
    "metaDescription": "Pope John Paul I was Albino Luciani, patriarch of Venice, who reigned for only 33 days, from 26 August to 28 September 1978.",
    "excerpt": "John Paul I — 26 August 1978–28 September 1978. Italian citizen; most recent Italian pope.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 262,
        "slug": "st-paul-vi",
        "name": "St. Paul VI",
        "relation": "Previous pope"
      },
      {
        "num": 264,
        "slug": "john-paul-ii",
        "name": "John Paul II",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 264,
    "slug": "john-paul-ii",
    "title": "Pope St. John Paul II (264º): Complete Biography, Legacy & Impact",
    "metaDescription": "Pope St. John Paul II was Karol Wojtyła of Poland, the first non-Italian pope in 455 years, who reigned from 16 October 1978 to 2 April 2005, one of the…",
    "excerpt": "John Paul II — 16 October 1978– 2 April 2005. Polish citizen; first pope from Poland and first of Slavic origin.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 263,
        "slug": "john-paul-i",
        "name": "John Paul I",
        "relation": "Previous pope"
      },
      {
        "num": 265,
        "slug": "benedict-xvi",
        "name": "Benedict XVI",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 265,
    "slug": "benedict-xvi",
    "title": "Pope Benedict XVI (265º): Biography, Resignation & Theological Legacy",
    "metaDescription": "Pope Benedict XVI was Joseph Ratzinger, a German theologian and longtime head of the Congregation for the Doctrine of the Faith, who reigned from 19 April…",
    "excerpt": "Benedict XVI — 19 April 2005– 28 February 2013. German citizen; first German pope since Stephen IX(1057–1058).",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 264,
        "slug": "john-paul-ii",
        "name": "John Paul II",
        "relation": "Previous pope"
      },
      {
        "num": 266,
        "slug": "francis",
        "name": "Francis",
        "relation": "Next pope"
      },
      {
        "num": 62,
        "slug": "benedict-i",
        "name": "Benedict I",
        "relation": "Also named Benedict"
      },
      {
        "num": 81,
        "slug": "st-benedict-ii",
        "name": "St. Benedict II",
        "relation": "Also named Benedict"
      },
      {
        "num": 104,
        "slug": "benedict-iii",
        "name": "Benedict III",
        "relation": "Also named Benedict"
      }
    ]
  },
  {
    "num": 266,
    "slug": "francis",
    "title": "Pope Francis (266º): Biography, Legacy & First Latin American Pope",
    "metaDescription": "Pope Francis was Jorge Mario Bergoglio, a Jesuit and archbishop of Buenos Aires who reigned from 13 March 2013 until his death on 21 April 2025.",
    "excerpt": "Francis — 13 March 2013– 21 April 2025. Argentine citizen of Italian descent.",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 265,
        "slug": "benedict-xvi",
        "name": "Benedict XVI",
        "relation": "Previous pope"
      },
      {
        "num": 267,
        "slug": "leo-xiv",
        "name": "Leo XIV",
        "relation": "Next pope"
      }
    ]
  },
  {
    "num": 267,
    "slug": "leo-xiv",
    "title": "Pope Leo XIV (267º): Biography, Election & First American Pope",
    "metaDescription": "Pope Leo XIV is Robert Francis Prevost, a Chicago-born Augustinian friar who spent many years as a missionary and bishop in Peru, elected on 8 May 2025.",
    "excerpt": "Leo XIV — 8 May 2025–present. Dual American and Peruvian citizen of French, Italian, Spanish and Louisiana Creole descent; first pope born in the...",
    "readTime": "3 min",
    "relatedPopes": [
      {
        "num": 266,
        "slug": "francis",
        "name": "Francis",
        "relation": "Previous pope"
      }
    ]
  }
];

export const POPE_ARTICLES_BY_SLUG: Record<string, PopeArticleContent> = Object.fromEntries(
  POPE_ARTICLES.map((a) => [a.slug, a])
);

export const POPE_ARTICLES_BY_NUM: Record<number, PopeArticleContent> = Object.fromEntries(
  POPE_ARTICLES.map((a) => [a.num, a])
);
