#!/usr/bin/env python3
"""Build guides 04–13 with shared helpers; emit via generate_03_13.emit."""
from __future__ import annotations

import sys
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(SCRIPTS))

from advent_guides.generate_03_13 import (  # noqa: E402
    REL_ADVENT,
    REL_FEASTS,
    REL_HUB,
    REL_NOVENA,
    REL_XMAS,
    block,
    doctrine_callout,
    emit,
    sec,
)
from advent_christmas_common import CBO_ADVENT, p, scb, sgc  # noqa: E402


def lp(*chunks):
    """Join clause chunks into one meaty paragraph via p()."""
    return p(*chunks)


def trio(topic: str, a: str, b: str, c: str, d: str = "", e: str = ""):
    parts = [
        lp(
            f"Catholics approaching {topic} need clarity before sentiment.",
            a,
            "The Roman Rite already orders the season; home prayer should echo the altar, not compete with it.",
            b,
        ),
        lp(
            c,
            "Popular manuals sometimes treat devotion like a contract for favors; the Catechism refuses that bargain.",
            "Intercession is real; outcomes stay divine wisdom (CCC 2739).",
            d or f"Keep {topic} Christ-centered when children or guests are watching.",
        ),
        lp(
            e or f"Busy households can still keep {topic} without fifteen apps or guilt spirals.",
            "One honest minute beats a theatrical hour performed for Instagram.",
            "Resume after missed days; God is Father, not a scorekeeper of consecutive checkboxes.",
            f"Link this custom to Mass and confession when {topic} surfaces sin you have avoided naming.",
        ),
    ]
    return parts


def standard_faqs(slug_url: str, when: str, what: str, extra: list | None = None):
    base = [
        {"question": f"When should we practice this in 2026?", "answer": when},
        {"question": "Does this replace Mass?", "answer": "No. Domestic prayer extends liturgy; holy days and Sundays require the assembly when able."},
        {"question": "What if we start late?", "answer": "Begin today without superstition. Private customs are help, not law."},
        {"question": "Is this required by Church law?", "answer": what},
        {"question": "Can children lead?", "answer": "Yes, with short texts and patience for wiggles."},
        {"question": "Does prayer guarantee family peace?", "answer": "No. It orients desire; God answers with mercy that may include the cross."},
        {"question": "Where is the twin article?", "answer": slug_url},
        {"question": "How does this series fit Advent–Christmas?", "answer": "Each guide uses the same slug on Guide Catholic and Catholic Bible Online with cross-links."},
    ]
    if extra:
        base[2:2] = extra
    return base[:10]


GUIDES = []


def add(filename, data):
    GUIDES.append((filename, data))


def guide_advent_wreath():
    add(
        "guide_04_advent_wreath.py",
        block(
            slug="advent-wreath-prayers-blessing-catholic-guide",
            title="Advent Wreath: Blessing, Prayers & Catholic Custom",
            h1="Advent Wreath Blessing and Prayers for Catholic Homes",
            description="Bless an Advent wreath at home: four candles, rose Sunday, sample prayers, what is Church law versus family custom, and Advent 2026 start November 29.",
            keywords="advent wreath blessing catholic, advent wreath prayers, blessing of advent wreath, four candles advent, gaudete rose candle",
            read_time="17 min",
            crumb="Advent Wreath",
            category="Prayers & Devotions",
            lede_parts=(
                "The Advent wreath is a household candle custom that grew in German-speaking homes and migrated worldwide.",
                "It marks the four Sundays of Advent with evergreens and flame, not a sacrament.",
                "Blessing it well keeps Christ before commerce.",
            ),
            answer_parts=(
                "Advent 2026 begins Sunday, November 29, 2026; many families bless a wreath that evening or on the first Sunday.",
                "A priest or deacon may bless the wreath in church; parents may use the Book of Blessings at home.",
                "The rose candle marks Gaudete Sunday, December 13, 2026.",
                "See "
                + sgc("ADVENT_WREATH", "Catholic Bible Online's Advent wreath blessing guide")
                + ".",
                "Readings from "
                + scb("isaiah/40/", "Isaiah 40")
                + " and "
                + scb("luke/1/", "Luke 1")
                + " pair naturally with lighting.",
                "The wreath does not guarantee a calm house; it trains patience toward the coming Lord.",
            ),
            gc_key="ADVENT_WREATH",
            gc_label="",
            facts=[
                {"label": "Advent 2026 start", "value": "Sunday, November 29, 2026"},
                {"label": "Gaudete Sunday 2026", "value": "Sunday, December 13, 2026 (rose candle)"},
                {"label": "Candle count", "value": "Four Sundays; some add a fifth Christ candle on Christmas Eve"},
                {"label": "Church law", "value": "Wreath is devotion, not precept"},
                {"label": "Greens", "value": "Evergreens symbolize enduring life; replace when dry for fire safety"},
                {"label": "Blessing source", "value": "Book of Blessings and pastoral adaptations"},
                {"label": "Color", "value": "Three violet or blue candles and one rose on Gaudete week"},
            ],
            timeline=[
                {"when": "19th century", "what": "Wreath custom spreads among German Lutherans and Catholics; later migrates to Americas."},
                {"when": "November 29, 2026", "what": "First Advent Sunday; first candle."},
                {"when": "December 6, 2026", "what": "Second Sunday of Advent; second candle."},
                {"when": "December 13, 2026", "what": "Third Sunday (Gaudete); rose candle."},
                {"when": "December 20, 2026", "what": "Fourth Sunday; final violet candle before Vigil."},
                {"when": "December 24, 2026", "what": "Optional white Christ candle at Vigil."},
                {"when": "Vatican II era", "what": "Domestic customs encouraged when they support liturgical seasons."},
            ],
            sections=[
                sec(
                    "history-custom",
                    "History, symbol, and what the Church does not define",
                    trio(
                        "the Advent wreath",
                        "Evergreens suggest life in a dying year.",
                        "Flame suggests the light Christ brings in "
                        + scb("john/1/", "John 1")
                        + ".",
                        "The Vatican never made the wreath mandatory.",
                        "Treat plastic novelty wreaths as décor unless prayer accompanies them.",
                        "Missionaries in the global South adapt materials; holiness is not nordic aesthetics.",
                    ),
                    callout=doctrine_callout("St. Nicholas in shoes is another December custom; do not confuse either with doctrine."),
                ),
                sec(
                    "blessing-rites",
                    "Blessing the wreath at church or home",
                    [
                        lp(
                            "Clergy blessing wreaths after Mass catechize that objects used for prayer should be set apart.",
                            "At home the presider is usually a parent with the Book of Blessings or a parish handout.",
                            "Sprinkling holy water and a cross traced in the air suffice.",
                            "Grandparents leading by phone can pray the words while grandchildren light under supervision.",
                        ),
                        lp(
                            "Avoid improvising exorcism language from the internet.",
                            "Blessings are praise and petition, not magic against in-laws.",
                            "If no holy water, ask at the parish font Sunday and keep a small bottle for the season.",
                        ),
                        lp(
                            "Fire safety is moral seriousness: dry needles, stable stand, extinguish before bed.",
                            "LED candles help dormitories and nursing homes where open flame is forbidden.",
                            "God accepts the desire when prudence demands electric light.",
                        ),
                    ],
                    list=[
                        "Read the blessing before shopping so you buy the right candle count.",
                        "Involve children in placing greens; teach them the Sign of the Cross.",
                        "Store the wreath flat after Epiphany if you reuse the frame.",
                    ],
                ),
                sec(
                    "sunday-prayers",
                    "Prayers each Sunday of Advent 2026",
                    trio(
                        "Sunday wreath lighting",
                        "Open with Our Father or the collect of the Sunday Mass.",
                        "Read the Gospel of the day from a missal.",
                        "Sing a stanza of O Come, O Come, Emmanuel on evenings near December 17.",
                        "Add intercessions for the hungry named in the bulletin.",
                        "Close before phones reclaim the room.",
                    ),
                    table={
                        "caption": "Wreath Sundays 2026",
                        "headers": ["Sunday", "Candle", "Gospel accent"],
                        "rows": [
                            ["Nov 29", "First (violet)", scb("matthew/24/", "Matthew 24 — watchfulness")],
                            ["Dec 6", "Second (violet)", scb("luke/3/", "Luke 3 — repentance")],
                            ["Dec 13", "Third (rose)", scb("luke/3/", "Luke 3 — joy amid desert")],
                            ["Dec 20", "Fourth (violet)", scb("luke/1/", "Luke 1 — Annunciation themes")],
                        ],
                    },
                ),
                sec(
                    "gaudete-rose",
                    "Rose candle and Gaudete realism",
                    trio(
                        "Gaudete Sunday",
                        "Rose vestments at Mass mirror the candle.",
                        "Joy is commanded, not performative.",
                        "Grief at the wreath is allowed; hope is deeper than mood.",
                        "Widows and deployed spouses may weep while the candle burns.",
                        "Joy in the Lord can coexist with tears.",
                    ),
                ),
                sec(
                    "with-antiphons",
                    "Pairing the wreath with O Antiphons",
                    trio(
                        "wreath and antiphons",
                        "After December 17, sing the evening antiphon when lighting.",
                        "See the [[/blog/o-antiphons-advent-prayer-guide/|O Antiphons guide]].",
                        "Magnificat can follow candle.",
                        "Teens learn that hymns and antiphons belong to one week.",
                    ),
                ),
                sec(
                    "mass-first",
                    "Mass first, then wreath",
                    [
                        lp(
                            "The wreath never satisfies Sunday obligation.",
                            "Check "
                            + f"{{{{{CBO_ADVENT}|Catholic Bible Online's Advent calendar}}}}"
                            + " for 2026 Mass times.",
                            "Christmas on Friday, December 25, 2026 lifts Friday abstinence because of the solemnity.",
                        ),
                        lp(
                            "Arguments over candle timing are less important than attending vigil or day Mass together.",
                            "Let the wreath point to the altar, not replace it.",
                        ),
                        lp(
                            "Hospital chaplains bless battery candles for patients.",
                            "Domestic church exists in ICU rooms too.",
                        ),
                    ],
                    callout={
                        "label": "No guaranteed outcome",
                        "text": "Blessing a wreath does not guarantee obedient children or bonus income. It orders desire toward Christ.",
                    },
                ),
                sec(
                    "series-links",
                    "Sibling guides in this Advent series",
                    [
                        lp(
                            "Andrew's optional prayer chain in late November pairs with first candle.",
                            "Advent Scripture guide supplies verses beyond the Sunday Gospel.",
                            "Christmas Eve guide takes over when violet yields to white.",
                        ),
                        lp(
                            "The winter feast hub lists holy days across months.",
                            "Keep one bookmark folder for the whole series.",
                        ),
                    ],
                    list=[
                        "[[/blog/st-andrew-prayer-catholic-guide/|St. Andrew]]",
                        "[[/blog/advent-bible-verses-catholic-scripture-guide/|Advent Scripture]]",
                        "[[/blog/catholic-christmas-prayers-complete-guide/|Christmas prayers]]",
                    ],
                ),
            ],
            prayer=(
                "Lord God, as these candles burn through Advent,\n"
                "burn away our laziness toward your Word and your poor.\n"
                "Make our home a place where Christ is expected, welcomed, and obeyed.\n"
                "Protect us from fire and pride; lead us to Bethlehem and to your altar.\n"
                "Through Christ our Lord. Amen."
            ),
            prayer_heading="Blessing prayer for the Advent wreath",
            related=[
                REL_ADVENT,
                {"href": "/blog/o-antiphons-advent-prayer-guide/", "label": "O Antiphons"},
                {"href": "/blog/advent-bible-verses-catholic-scripture-guide/", "label": "Advent Bible verses"},
                REL_HUB,
                REL_XMAS,
                REL_NOVENA,
                REL_FEASTS,
            ],
            faqs=standard_faqs(
                "https://catholicbibleonline.com/blog/advent-wreath-prayers-blessing-catholic-guide/",
                "Light the first candle on Sunday, November 29, 2026, or at your family's first Advent gathering.",
                "The wreath is an optional domestic custom, not a precept of the Church.",
                [
                    {"question": "What colors should candles be?", "answer": "Three violet or blue and one rose for Gaudete; white optional on Christmas Eve."},
                    {"question": "Can a priest bless our wreath?", "answer": "Yes. Many parishes bless wreaths after Advent Mass."},
                ],
            ),
        ),
    )


def _g(
    filename,
    slug,
    title,
    h1,
    description,
    keywords,
    crumb,
    category,
    topic,
    gc_key,
    gc_sgc_label,
    scripture_bits,
    facts,
    timeline,
    section_specs,
    prayer,
    prayer_heading,
    related,
    faqs_extra,
    slug_url,
):
    answer_parts = (
        faqs_extra[0]["answer"] if faqs_extra and "answer" in faqs_extra[0] else facts[0]["value"],
        f"Catholics use {topic} to keep prayer ordered through December and the Christmas octave.",
        "See " + sgc(gc_key, gc_sgc_label) + ".",
        scripture_bits,
        f"{topic.capitalize()} is devotion and worship, not a charm for outcomes.",
    )
    sections = []
    for sid, heading, *rest in section_specs:
        extras = {}
        if rest and isinstance(rest[-1], dict) and "table" in rest[-1] or "list" in rest[-1] or "callout" in rest[-1]:
            extras = rest[-1] if isinstance(rest[-1], dict) else {}
            rest = rest[:-1]
        paras = rest[0] if len(rest) == 1 and isinstance(rest[0], list) else trio(topic, *rest[0]) if rest else trio(topic, "", "", "")
        if isinstance(paras, list) and paras and isinstance(paras[0], str) and len(paras) > 3:
            # raw triple of strings passed
            paras = trio(topic, paras[0], paras[1], paras[2], paras[3] if len(paras) > 3 else "", paras[4] if len(paras) > 4 else "")
        elif not isinstance(paras, list) or (paras and not isinstance(paras[0], str) or len(paras) != 3):
            if isinstance(rest[0], tuple) and len(rest[0]) >= 3:
                t = rest[0]
                paras = trio(topic, t[0], t[1], t[2], t[3] if len(t) > 3 else "", t[4] if len(t) > 4 else "")
        sections.append(sec(sid, heading, paras, **extras))

    add(
        filename,
        block(
            slug=slug,
            title=title,
            h1=h1,
            description=description,
            keywords=keywords,
            read_time="17 min",
            crumb=crumb,
            category=category,
            lede_parts=(
                f"The Church keeps {topic} within Advent and Christmas so families do not pray at random.",
                "Liturgy sets the dates; homes extend the same mysteries with brevity and honesty.",
                "This guide separates doctrine, devotion, and legend so prayer stays orthodox.",
            ),
            answer_parts=answer_parts,
            gc_key=gc_key,
            gc_label="",
            facts=facts,
            timeline=timeline,
            sections=sections,
            prayer=prayer,
            prayer_heading=prayer_heading,
            related=related,
            faqs=standard_faqs(slug_url, facts[0]["value"], faqs_extra[1]["answer"] if len(faqs_extra) > 1 else "Optional pious custom.", faqs_extra[2:] if len(faqs_extra) > 2 else None),
        ),
    )


def all_remaining():
    guide_advent_wreath()
    # 05 Scripture
    _g(
        "guide_05_advent_scripture.py",
        "advent-bible-verses-catholic-scripture-guide",
        "Advent Bible Verses: Catholic Scripture Guide",
        "Advent Bible Verses for Catholic Prayer and Reading",
        "Advent Scripture: Isaiah, the Baptist, Mary's Magnificat, and Sunday Gospels for Advent 2026 with Catholic context and home reading plans.",
        "advent bible verses catholic, advent scripture reading, catholic advent gospel 2026, isaiah advent readings",
        "Advent Scripture",
        "Sacred Scripture",
        "Advent Scripture reading",
        "ADVENT_SCRIPTURE",
        "Catholic Bible Online's Advent Bible verses guide",
        "Begin with "
        + scb("isaiah/40/", "Isaiah 40")
        + " in early Advent, "
        + scb("isaiah/7/", "Isaiah 7")
        + " for Emmanuel themes, and "
        + scb("luke/1/", "Luke 1")
        + " when the lectionary turns Marian.",
        [
            {"label": "Advent 2026", "value": "November 29–December 24, 2026 (four Sundays plus weekdays)"},
            {"label": "Major prophets", "value": "Isaiah supplies most weekday Old Testament accents"},
            {"label": "Gospels", "value": "Matthew and Luke years alternate; 2026 follows Year A, Matthew at Mass"},
            {"label": "Home practice", "value": "Read Sunday Gospel Monday, one weekday reading Tuesday–Friday"},
            {"label": "Magnificat", "value": scb("luke/1/46", "Luke 1:46–55") + " fits domestic Vespers"},
            {"label": "DOGM", "value": "Scripture is inspired and normative for prayer (CCC 104–133)"},
            {"label": "Digital", "value": "Use licensed apps; avoid random verse generators"},
        ],
        [
            {"when": "November 29, 2026", "what": "Year A cycle; eschatological Matthew readings open Advent."},
            {"when": "First week", "what": scb("isaiah/2/", "Isaiah 2") + " and mountain-of-the-Lord themes."},
            {"when": "Second week", "what": "John the Baptist in " + scb("luke/3/", "Luke 3") + " challenges repentance."},
            {"when": "December 17–23", "what": "O Antiphon week; Isaiah titles intensify."},
            {"when": "December 24", "what": "Vigil readings from Genesis, Isaiah, Matthew or Luke at Mass."},
            {"when": "Church tradition", "what": "Lectionary is liturgical law for Mass, counsel for home."},
        ],
        [
            ("overview", "How the lectionary orders Advent weeks", ("The Church reads time backward and forward: Christ will come in glory and has come in Bethlehem.", "Isaiah supplies the vocabulary of longing.", "Matthew in Year A stresses vigilance.", "Homilies should connect pews to kitchens.", "A household that never hears Isaiah in Advent hears anemic carols only.")),
            ("isaiah", "Isaiah in the mailbox and the breviary", ("Isaiah is not one prediction machine.", "The sacred author speaks to exiled Judah and to Christ.", "CCC 128 affirms multiple senses with Christ as the fullness.", "Teens can track one keyword per week: remnant, stump, shoot, Emmanuel.")),
            ("gospels", "Sunday Gospels for Advent 2026", ("Matthew 24 opens with watchfulness; do not turn it into bunker anxiety.", "Luke's Annunciation on December 20 weekend deserves family reading even if you miss Mass once.", "Confess gossip before reading John the Baptist's fire metaphors.")),
            ("home-plan", "A four-week home plan that survives real life", ("Monday: re-read Sunday Gospel aloud.", "Tuesday–Thursday: one weekday reading from missal or USCCB site.", "Friday: act of mercy matching the text.", "Saturday: rest or review.", "Sunday belongs to Mass first.")),
            ("children", "Scripture with children without falsifying difficulty", ("Use children's Bibles that do not lie about sin.", "Let them ask why Herod appears in the Christmas story later.", "Coloring sheets without Bible leave a thin Christmas.")),
            ("o-antiphons", "Pair readings with the O Antiphons", ("After December 17, read the matching Isaiah before dinner.", "Link [[/blog/o-antiphons-advent-prayer-guide/|O Antiphons guide]].", "Magnificat after reading ties Mary to Israel's hope.")),
            ("pitfalls", "Meme verses and partisan hijacks", ("Out-of-context Isaiah on social media fuels agendas, not adoration.", "Read in the Church's order.", "Politics may inform charity; it does not replace exegesis.")),
            ("series", "Use the companion guides", trio("Advent Scripture", "Wreath gives candles; Scripture gives words.", "Christmas prayers complete the arc.", "Winter hub lists February memorials.", "", "")),
        ],
        "Word of God, you spoke through prophets and evangelists;\n"
        "open our ears each Advent day.\n"
        "Make your Scripture a lamp for our feet and a fire for charity,\n"
        "not a weapon for pride.\n"
        "Through Christ our Lord. Amen.",
        "Prayer for Advent Scripture reading",
        [REL_ADVENT, {"href": "/blog/o-antiphons-advent-prayer-guide/", "label": "O Antiphons"}, {"href": "/blog/advent-wreath-prayers-blessing-catholic-guide/", "label": "Advent wreath"}, REL_HUB, REL_XMAS, REL_FEASTS],
        [{"answer": "Advent 2026 runs November 29–December 24 with daily Mass readings online at USCCB or in a missal."}, {"answer": "The lectionary governs Mass; home plans are counsel, not precept."}],
        "https://catholicbibleonline.com/blog/advent-bible-verses-catholic-scripture-guide/",
    )

    # Due to size, guides 06–13 use shared skeleton with unique metadata via helper
    configs = [
        (
            "guide_06_christmas_prayers.py",
            "catholic-christmas-prayers-complete-guide",
            "Catholic Christmas Prayers: Complete Guide",
            "Catholic Christmas Prayers for Vigil, Day, and the Octave",
            "Christmas prayers for Catholics: Vigil, Midnight, Day Mass collects, home prayer after Nativity, and octave saints without replacing liturgy.",
            "catholic christmas prayers, christmas day prayer catholic, christmas octave prayers, nativity prayers catholic",
            "Christmas Prayers",
            "Christmas solemnity and octave home prayer",
            "CHRISTMAS_PRAYERS",
            "Catholic Bible Online's Christmas prayers guide",
            scb("luke/2/", "Luke 2") + " and the prologue of " + scb("john/1/", "John 1") + " anchor belief.",
            "https://catholicbibleonline.com/blog/catholic-christmas-prayers-complete-guide/",
        ),
        (
            "guide_07_christmas_eve.py",
            "christmas-eve-prayer-vigil-creche-guide",
            "Christmas Eve Prayer: Vigil, Creche & Customs",
            "Christmas Eve: Vigil Mass, Creche Blessing, and Catholic Custom",
            "Christmas Eve 2026: Vigil Mass, nativity scene blessing, Genesius of creche piety, and honest prayer before the octave begins.",
            "christmas eve prayer catholic, vigil mass christmas eve, bless nativity scene catholic, creche blessing",
            "Christmas Eve",
            "Christmas Eve Vigil and creche",
            "CHRISTMAS_EVE",
            "Catholic Bible Online's Christmas Eve guide",
            "Vigil Mass proclaims " + scb("matthew/1/", "Matthew 1") + " or Luke infancy narrative.",
            "https://catholicbibleonline.com/blog/christmas-eve-prayer-vigil-creche-guide/",
        ),
        (
            "guide_08_christmas_grace.py",
            "prayer-before-christmas-dinner-catholic-grace",
            "Prayer Before Christmas Dinner: Catholic Grace",
            "Grace Before Christmas Dinner: A Catholic Table Prayer",
            "Catholic grace before Christmas dinner: bless food, remember the poor, tie the meal to Eucharist, and pray without superstition.",
            "christmas dinner prayer catholic, grace before christmas meal, catholic table prayer christmas",
            "Christmas Grace",
            "Christmas table grace",
            "CHRISTMAS_GRACE",
            "Catholic Bible Online's Christmas dinner grace guide",
            "Eucharist means thanksgiving; table grace echoes " + scb("luke/22/", "Luke 22") + " and Bethlehem.",
            "https://catholicbibleonline.com/blog/prayer-before-christmas-dinner-catholic-grace/",
        ),
        (
            "guide_09_baby_jesus.py",
            "prayer-to-baby-jesus-nativity-catholic-guide",
            "Prayer to Baby Jesus: Nativity Devotion",
            "Prayer to the Infant Jesus: Catholic Nativity Devotion",
            "Prayer to Baby Jesus in the manger: pious devotion to the Christ Child, orthodoxy versus folklore, and family customs at the nativity.",
            "prayer to baby jesus, infant jesus prayer catholic, nativity prayer christ child",
            "Baby Jesus",
            "devotion to the Infant Christ in the creche",
            "BABY_JESUS",
            "Catholic Bible Online's Baby Jesus devotion guide",
            "The manger scene rests on " + scb("luke/2/", "Luke 2") + "; do not invent new dogmas.",
            "https://catholicbibleonline.com/blog/prayer-to-baby-jesus-nativity-catholic-guide/",
        ),
        (
            "guide_10_st_stephen.py",
            "st-stephen-prayer-catholic-guide",
            "St. Stephen Prayer: Dec 26 Feast (Protomartyr)",
            "St. Stephen: Prayer, Feast Day, and First Martyr",
            "St. Stephen protomartyr: December 26 feast, prayer and intercession, Acts account, and Christmas octave realism about persecution.",
            "st stephen prayer, st stephen feast december 26, protomartyr prayer catholic",
            "St. Stephen",
            "St. Stephen on December 26",
            "ST_STEPHEN",
            "Catholic Bible Online's St. Stephen prayer guide",
            scb("acts/7/", "Acts 7") + " is the primary narrative; pray for persecuted Christians.",
            "https://catholicbibleonline.com/blog/st-stephen-prayer-catholic-guide/",
        ),
        (
            "guide_11_st_john.py",
            "st-john-evangelist-prayer-catholic-guide",
            "St. John the Evangelist: Prayer & Feast (Dec 27)",
            "St. John the Evangelist: Prayer and December 27 Feast",
            "St. John Apostle and Evangelist: December 27 feast, prayer, Gospel witness, legend versus Scripture, and Christmas octave joy.",
            "st john evangelist prayer, december 27 st john feast, apostle john prayer catholic",
            "St. John",
            "St. John the Evangelist on December 27",
            "ST_JOHN",
            "Catholic Bible Online's St. John Evangelist prayer guide",
            "Read " + scb("john/1/", "John 1") + " and " + scb("1-john/4/", "1 John 4") + " for love and light.",
            "https://catholicbibleonline.com/blog/st-john-evangelist-prayer-catholic-guide/",
        ),
        (
            "guide_12_holy_family.py",
            "holy-family-sunday-prayer-feast-guide",
            "Holy Family Sunday: Prayer & Feast Guide",
            "Holy Family Sunday: Prayer, Feast, and Catholic Family Life",
            "Holy Family feast (Sunday within the octave): prayer for families, feast 2026 date, Joseph Mary and Jesus model, and domestic church realism.",
            "holy family sunday prayer, holy family feast catholic, holy family sunday 2026",
            "Holy Family",
            "Holy Family Sunday in the Christmas octave",
            "HOLY_FAMILY",
            "Catholic Bible Online's Holy Family Sunday guide",
            scb("luke/2/", "Luke 2:22–40") + " and flight to Egypt themes appear in liturgy.",
            "https://catholicbibleonline.com/blog/holy-family-sunday-prayer-feast-guide/",
        ),
        (
            "guide_13_holy_innocents.py",
            "holy-innocents-prayer-catholic-guide",
            "Holy Innocents Prayer: Dec 28 Feast",
            "Holy Innocents: Prayer, Feast, and Martyrs of Bethlehem",
            "Holy Innocents December 28: prayer for murdered children, Matthew narrative, innocence and Herod, and pro-life intercession without exploiting grief.",
            "holy innocents prayer, december 28 holy innocents, infant martyrs prayer catholic",
            "Holy Innocents",
            "the Holy Innocents on December 28",
            "HOLY_INNOCENTS",
            "Catholic Bible Online's Holy Innocents guide",
            scb("matthew/2/", "Matthew 2:16–18") + " names Rachel weeping; pair with charity for mothers and the unborn.",
            "https://catholicbibleonline.com/blog/holy-innocents-prayer-catholic-guide/",
        ),
    ]

    for (
        fn,
        slug,
        title,
        h1,
        desc,
        kw,
        crumb,
        topic,
        gck,
        gc_lab,
        scr,
        url,
    ) in configs:
        facts_common = [
            {"label": "Christmas 2026", "value": "Friday, December 25, 2026 (solemnity)"},
            {"label": "Octave", "value": "December 25–January 1, 2027 carries solemn dignity"},
            {"label": "Topic focus", "value": topic},
            {"label": "Liturgy", "value": "Mass remains source and summit (CCC 1324)"},
            {"label": "Home", "value": "Domestic prayer extends, never replaces, Eucharist"},
            {"label": "CBO twin", "value": url},
            {"label": "Series", "value": "Advent–Christmas companion set, 13 guides"},
        ]
        tl = [
            {"when": "December 24, 2026", "what": "Vigil of the Nativity; fasting gives way to feast at Mass."},
            {"when": "December 25, 2026", "what": "Christmas Day; white vestments; solemnity."},
            {"when": "December 26–28, 2026", "what": "Octave memorials: Stephen, John, Holy Innocents in sequence."},
            {"when": "December 27–28, 2026", "what": "John and Innocents frame joy and grief in one week."},
            {"when": "Sunday in octave", "what": "Holy Family Sunday transfers within December 25–31."},
            {"when": "January 1, 2027", "what": "Mary Mother of God closes octave in United States calendar."},
        ]
        section_specs = [
            ("meaning", f"What {topic} means in Catholic faith", (f"Joy and suffering intertwine in the octave; {topic} keeps Christ at the center.", "Liturgical prayer already names the mystery.", "Homes need language children and elders share.", "Avoid reducing feast to consumer habits.")),
            ("scripture", "Scripture and the liturgical texts", (scr, "The Missal collect is the best short prayer.", "Read the narrative before composing new words.", "Do not attribute fake quotes to saints or the Child Jesus.")),
            ("practice", f"How to practice {topic} at home", ("Keep prayers brief on crowded days.", "Sing one carol with theological substance.", "Invite a lonely neighbor; prayer without charity rings hollow.", "Light the creche only after fire safety check.")),
            ("doctrine", "Doctrine, devotion, and legend", ("Distinguish what the Church defines from what culture adds.", "Legends may instruct if labeled stories.", "Christology remains Nicene; manger piety serves it.")),
            ("octave", "Octave flow with sibling feasts", ("Stephen's blood follows Bethlehem's song.", "John's love follows Stephen's courage.", "Holy Family and Innocents name domestic and public violence.", "Link guides in this series rather than praying in isolation.")),
            ("mass", "Mass times and holy days in the U.S.", ("Christmas is obligation when it falls on Friday in 2026; abstinence is lifted.", "Check parish bulletins for vigil overload.", "Eucharist is thanksgiving before turkey or tamales.")),
            ("pastoral", "Pastoral realism for 2026", ("Grief, deployment, and divorce reshape tables.", "Pray truthfully.", "Offer one concrete alms with intercession.", "Mercy before performance.")),
            ("series", "Cross-links in this companion set", trio(topic, "Wreath and Advent Scripture prepared this moment.", "Christmas prayers hub gathers vigil and day.", "Winter feast hub carries January obligations.", "[[/blog/catholic-christmas-prayers-complete-guide/|Christmas prayers]]", "[[/blog/christmas-eve-prayer-vigil-creche-guide/|Christmas Eve]]")),
        ]
        prayer_text = (
            f"Lord Jesus, as we keep {topic},\n"
            "keep us honest before your manger and your cross.\n"
            "Turn our meals, carols, and quiet into worship that serves the poor.\n"
            "Protect the innocent, console the grieving, and unite our homes to your Church.\n"
            "Through Christ our Lord. Amen."
        )
        related = [
            REL_XMAS,
            REL_ADVENT,
            {"href": "/blog/catholic-christmas-prayers-complete-guide/", "label": "Christmas prayers"},
            {"href": "/blog/christmas-eve-prayer-vigil-creche-guide/", "label": "Christmas Eve"},
            REL_HUB,
            REL_FEASTS,
        ]
        _g(
            fn,
            slug,
            title,
            h1,
            desc,
            kw,
            crumb,
            "Prayers & Devotions",
            topic,
            gck,
            gc_lab,
            scr,
            facts_common,
            tl,
            section_specs,
            prayer_text,
            f"Prayer for {crumb}",
            related,
            [{"answer": facts_common[0]["value"]}, {"answer": "Liturgical prayer is principal; home customs are optional devotion."}],
            url,
        )


def main():
    GUIDES.clear()
    from advent_guides.generate_03_13 import guide_o_antiphons_data

    emit("guide_03_o_antiphons.py", guide_o_antiphons_data())
    all_remaining()
    for fn, data in GUIDES:
        emit(fn, data)


if __name__ == "__main__":
    main()

