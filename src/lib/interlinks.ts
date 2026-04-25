/**
 * Central interlink map for Guide Catholic
 * Maps anchor text phrases → internal URLs
 * Used to add contextual internal links within article text
 *
 * Priority: highest-traffic articles link to related high-value pages
 */

export const INTERLINK_MAP: Record<string, string> = {
  // Rosary
  "the Rosary": "/blog/how-to-pray-the-rosary-complete-guide/",
  "pray the Rosary": "/blog/how-to-pray-the-rosary-complete-guide/",
  "praying the Rosary": "/blog/how-to-pray-the-rosary-complete-guide/",
  "Holy Rosary": "/blog/rosary-complete-guide/",
  "Rosary mysteries": "/blog/rosary-mysteries-meditation/",

  // Sacraments
  "Sacrament of Reconciliation": "/blog/catholic-confession-guide/",
  "go to Confession": "/blog/how-to-go-to-confession/",
  "going to Confession": "/blog/how-to-go-to-confession/",
  "frequent Confession": "/blog/importance-confession/",
  "the Eucharist": "/blog/eucharist-real-presence/",
  "Real Presence": "/blog/eucharist-real-presence/",
  "Eucharistic adoration": "/blog/eucharistic-adoration/",
  "Holy Mass": "/blog/what-is-the-catholic-mass-guide/",
  "the Mass": "/blog/meaning-mass/",
  "attend Mass": "/blog/sunday-mass/",
  "Sunday Mass": "/blog/sunday-mass/",
  "Anointing of the Sick": "/blog/catholic-last-rites-explained/",
  "Last Rites": "/blog/catholic-last-rites-explained/",
  "Baptism": "/blog/catholic-baptism-explained/",
  "seven sacraments": "/blog/seven-sacraments/",

  // Prayer
  "Divine Mercy Chaplet": "/blog/divine-mercy-chaplet/",
  "Chaplet of Divine Mercy": "/blog/divine-mercy-chaplet/",
  "Lectio Divina": "/blog/lectio-divina/",
  "examination of conscience": "/blog/examination-of-conscience-guide/",
  "daily prayer": "/blog/catholic-daily-prayer-routine/",
  "morning prayer": "/blog/morning-prayer-catholic/",
  "night prayer": "/blog/night-prayer-catholic/",
  "intercessory prayer": "/blog/how-to-pray-intercessory-prayer/",
  "Liturgy of the Hours": "/blog/liturgy-of-the-hours-guide/",
  "Divine Office": "/blog/divine-office-laity/",
  "prayer for the sick": "/blog/catholic-prayer-for-the-sick/",
  "prayer for anxiety": "/blog/catholic-prayer-for-anxiety/",
  "prayer for protection": "/blog/catholic-prayer-for-protection/",
  "Prayer to Saint Michael": "/blog/saint-michael-prayer/",
  "St. Michael prayer": "/blog/saint-michael-prayer/",

  // Mary
  "Virgin Mary": "/blog/virgin-mary-complete-guide/",
  "Our Lady of Fatima": "/blog/our-lady-of-fatima-guide/",
  "Our Lady of Lourdes": "/blog/our-lady-of-lourdes-guide/",
  "Our Lady of Guadalupe": "/blog/our-lady-of-guadalupe-patroness-americas/",
  "Immaculate Conception": "/blog/what-is-the-catholic-faith/",
  "Marian devotion": "/blog/do-catholics-worship-mary/",
  "Hail Mary": "/blog/how-to-pray-the-rosary-complete-guide/",

  // Saints
  "Saint Francis of Assisi": "/blog/saint-francis-of-assisi/",
  "St. Francis of Assisi": "/blog/saint-francis-of-assisi/",
  "Saint Thomas Aquinas": "/blog/saint-thomas-aquinas/",
  "St. Thomas Aquinas": "/blog/saint-thomas-aquinas/",
  "Saint Augustine": "/blog/saint-augustine-of-hippo/",
  "St. Augustine": "/blog/saint-augustine-of-hippo/",
  "Saint Padre Pio": "/blog/saint-padre-pio/",
  "Padre Pio": "/blog/saint-padre-pio/",
  "Saint Thérèse of Lisieux": "/blog/saint-therese-of-lisieux/",
  "St. Thérèse": "/blog/saint-therese-of-lisieux/",
  "Little Way": "/blog/saint-therese-of-lisieux/",
  "Saint John of the Cross": "/blog/saint-john-of-the-cross/",
  "St. John of the Cross": "/blog/saint-john-of-the-cross/",
  "Saint Teresa of Ávila": "/blog/saint-teresa-of-avila/",
  "St. Teresa of Ávila": "/blog/saint-teresa-of-avila/",
  "Saint Ignatius of Loyola": "/blog/saint-ignatius-of-loyola/",
  "St. Ignatius": "/blog/saint-ignatius-of-loyola/",
  "Saint Joseph": "/blog/saint-joseph-complete-guide/",
  "Saint Michael": "/blog/saint-michael-archangel/",
  "Saint Anthony": "/blog/saint-anthony-of-padua/",
  "Saint Maximilian Kolbe": "/blog/saint-maximilian-kolbe/",
  "Saint Joan of Arc": "/blog/saint-joan-of-arc/",
  "guardian angel": "/blog/guardian-angels/",
  "guardian angels": "/blog/guardian-angels/",
  "patron saint": "/blog/patron-saints-guide/",

  // Doctrine
  "Holy Trinity": "/blog/what-is-the-holy-trinity/",
  "the Trinity": "/blog/what-is-the-holy-trinity/",
  "original sin": "/blog/what-is-original-sin-catholic/",
  "purgatory": "/blog/what-is-purgatory/",
  "Purgatory": "/blog/what-is-purgatory/",
  "indulgences": "/blog/plenary-indulgence-guide/",
  "plenary indulgence": "/blog/plenary-indulgence-guide/",
  "apostolic succession": "/blog/did-jesus-found-the-catholic-church/",
  "Nicene Creed": "/blog/what-is-the-nicene-creed/",
  "natural law": "/blog/catholic-teaching-on-justice/",
  "sanctifying grace": "/blog/what-is-grace-catholic/",
  "grace": "/blog/what-is-grace-catholic/",
  "free will": "/blog/what-is-freedom-catholic/",
  "theological virtues": "/blog/what-is-charity-catholic/",
  "faith and works": "/blog/faith-and-works-catholic/",
  "spiritual warfare": "/blog/spiritual-warfare-catholic/",
  "dark night of the soul": "/blog/saint-john-of-the-cross/",
  "Dark Night of the Soul": "/blog/saint-john-of-the-cross/",

  // Spiritual Life
  "Spiritual Exercises": "/blog/saint-ignatius-of-loyola/",
  "discernment": "/blog/vocational-discernment-guide/",
  "spiritual direction": "/blog/catholic-spiritual-direction/",
  "contemplative prayer": "/blog/what-is-catholic-spirituality/",
  "Ignatian spirituality": "/blog/saint-ignatius-of-loyola/",
  "Carmelite spirituality": "/blog/what-is-catholic-spirituality/",
  "Benedictine spirituality": "/blog/what-is-catholic-spirituality/",
  "fasting": "/blog/catholic-fasting-rules/",
  "Lent": "/blog/lent-preparation-guide/",
  "Advent": "/blog/what-is-advent/",
  "Holy Week": "/blog/what-is-holy-week/",
  "Stations of the Cross": "/blog/stations-of-the-cross/",

  // Catholic Life
  "RCIA": "/blog/what-is-rcia-explained/",
  "become Catholic": "/blog/how-to-become-catholic/",
  "converting to Catholicism": "/blog/converting-to-catholicism/",
  "Catholic school": "/blog/catholic-schools-in-america/",
  "Catholic marriage": "/blog/catholic-teaching-on-marriage/",
  "Natural Family Planning": "/blog/natural-family-planning-catholic/",
  "NFP": "/blog/natural-family-planning-catholic/",
  "Catholic homeschooling": "/blog/catholic-homeschooling-guide/",
  "find a Catholic church": "/blog/how-to-find-catholic-church-near-me/",

  // Current Affairs
  "Pope Leo XIV": "/blog/who-is-pope-leo-xiv/",
  "Pope Francis": "/blog/pope-francis-legacy/",
  "Gen Z": "/blog/gen-z-and-catholicism/",
};
