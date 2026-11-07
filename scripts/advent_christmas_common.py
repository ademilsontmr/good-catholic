CBO = "https://catholicbibleonline.com/bible/"
CBO_ADVENT = "https://catholicbibleonline.com/calendar/advent/"
GC = {
    "NOV_FEB": "https://catholicbibleonline.com/blog/catholic-saint-feast-prayers-nov-dec-jan-feb-guide/",
    "ST_ANDREW": "https://catholicbibleonline.com/blog/st-andrew-prayer-catholic-guide/",
    "O_ANTIPHONS": "https://catholicbibleonline.com/blog/o-antiphons-advent-prayer-guide/",
    "ADVENT_WREATH": "https://catholicbibleonline.com/blog/advent-wreath-prayers-blessing-catholic-guide/",
    "ADVENT_SCRIPTURE": "https://catholicbibleonline.com/blog/advent-bible-verses-catholic-scripture-guide/",
    "CHRISTMAS_PRAYERS": "https://catholicbibleonline.com/blog/catholic-christmas-prayers-complete-guide/",
    "CHRISTMAS_EVE": "https://catholicbibleonline.com/blog/christmas-eve-prayer-vigil-creche-guide/",
    "CHRISTMAS_GRACE": "https://catholicbibleonline.com/blog/prayer-before-christmas-dinner-catholic-grace/",
    "BABY_JESUS": "https://catholicbibleonline.com/blog/prayer-to-baby-jesus-nativity-catholic-guide/",
    "ST_STEPHEN": "https://catholicbibleonline.com/blog/st-stephen-prayer-catholic-guide/",
    "ST_JOHN": "https://catholicbibleonline.com/blog/st-john-evangelist-prayer-catholic-guide/",
    "HOLY_FAMILY": "https://catholicbibleonline.com/blog/holy-family-sunday-prayer-feast-guide/",
    "HOLY_INNOCENTS": "https://catholicbibleonline.com/blog/holy-innocents-prayer-catholic-guide/",
}
DATE = "2026-11-07"


def scb(book_ch: str, label: str) -> str:
    return f"{{{{{CBO}{book_ch}|{label}}}}}"


def sgc(key: str, label: str) -> str:
    return f"{{{{{GC[key]}|{label}}}}}"


def p(*parts: str) -> str:
    return " ".join(parts)
