// Per-niche demo overlay for brand/app.html.
// Reads ?niche=food|electronics|health|beauty and rewrites:
//   - workspace pill (top right)
//   - "audience overlap" target brand
//   - active niche chip
//   - results-meta line
//   - all 8 creator cards in .grid
// Re-runs whenever <html dir> flips so HE/EN toggle works.

const NICHES = {
  food: {
    workspace:   { en: "Pantry & Co. · Marketing ▾", he: "פאנטרי · שיווק ▾" },
    chip:        "niche.food",
    target: {
      handle: "@pantry_il",
      initials: "PC",
      followers: { en: "298K followers · matched daily",
                   he: "298 אלף עוקבים · מתעדכן יומית" },
    },
    meta: {
      a: { en: "creators match · ≥15% overlap with @pantry_il · Food · Tel Aviv",
           he: "יוצרים תואמים · ≥15% חפיפה עם @pantry_il · אוכל · תל אביב" },
    },
    creators: [
      { handle: "@tomer.cooks", initials: "תב", overlap: 51, badge: "high",
        name: { en: "Tomer Ben-Ami · Tel Aviv",      he: "תומר בן-עמי · תל אביב" },
        bio:  { en: "Home-chef recipes with supermarket-only ingredients. Weekly Friday dinner reels.",
                he: "מתכוני בית מצולמים עם מצרכי סופר בלבד. ריל ארוחת שישי כל שבוע." },
        tags: [{en:"Food",he:"אוכל"},{en:"Recipes",he:"מתכונים"},{en:"Family",he:"משפחה"}],
        creds: 95, followers: "58.4K", er: "7.2%", erGood: true, posts: "3.5" },
      { handle: "@mizrahi.kitchen", initials: "סע", overlap: 46, badge: "high",
        name: { en: "Sigal Azulay · Bat Yam",        he: "סיגל אזולאי · בת ים" },
        bio:  { en: "Mizrahi home cooking ✦ slow-cooked shabbat dishes ✦ Hebrew + English captions.",
                he: "מטבח מזרחי ביתי ✦ תבשילי שבת על אש קטנה ✦ כתוביות בעברית ובאנגלית." },
        tags: [{en:"Food",he:"אוכל"},{en:"Mizrahi",he:"מזרחי"},{en:"Shabbat",he:"שבת"}],
        creds: 93, followers: "84.0K", er: "6.4%", erGood: true, posts: "2.8" },
      { handle: "@cafe.crawl.tlv", initials: "יפ", overlap: 41, badge: "high",
        name: { en: "Yonit Peretz · Tel Aviv",       he: "יונית פרץ · תל אביב" },
        bio:  { en: "New café & bakery openings in TLV. Honest reviews, no comped meals.",
                he: "פתיחות חדשות של בתי קפה ומאפיות בת״א. ביקורות כנות, בלי ארוחות חינם." },
        tags: [{en:"Food",he:"אוכל"},{en:"Café",he:"בתי קפה"},{en:"Reviews",he:"ביקורות"}],
        creds: 90, followers: "32.6K", er: "8.9%", erGood: true, posts: "4.2" },
      { handle: "@maya.agassi",     initials: "מא", overlap: 39, badge: "high",
        photo: "../../assets/creators/maya.agassi.jpg",
        profileUrl: "../food/demo/profile.html",
        name: { en: "Maya Agassi · Tel Aviv",        he: "מאיה אגסי · תל אביב" },
        bio:  { en: "Dizengoff Square foodie & content creator ✦ Bezalel grad ✦ honest TLV restaurant recs.",
                he: "הפודית של כיכר דיזינגוף ויוצרת תוכן ✦ בוגרת בצלאל ✦ המלצות כנות על מסעדות ת״א." },
        tags: [{en:"Food",he:"אוכל"},{en:"Tel Aviv",he:"תל אביב"},{en:"Restaurants",he:"מסעדות"}],
        workedWith: [
          { handle:"@night.cookie", name:"Night Cookie", logo:"../../assets/brands/night.cookie.jpg" },
          { handle:"@basher.fromagerieil", name:"Basher Fromagerie", logo:"../../assets/brands/basher.fromagerieil.jpg" },
          { handle:"@eatsane_israel", name:"Eatsane", logo:"../../assets/brands/eatsane_israel.jpg" },
        ],
        creds: 96, followers: "4.0K", er: "9.6%", erGood: true, posts: "2.0" },
      { handle: "@vegan.idan",      initials: "עי", overlap: 36, badge: "mid",
        name: { en: "Idan Eshel · Ramat Gan",        he: "עידן אשל · רמת גן" },
        bio:  { en: "Plant-based on a budget. Affordable vegan groceries from Israeli supers.",
                he: "אוכל צמחי בתקציב נמוך. קניות טבעוניות זולות מהסופר הישראלי." },
        tags: [{en:"Food",he:"אוכל"},{en:"Vegan",he:"טבעוני"},{en:"Budget",he:"תקציב"}],
        creds: 96, followers: "21.3K", er: "9.4%", erGood: true, posts: "3.0" },
      { handle: "@chef.maor",       initials: "מל", overlap: 33, badge: "mid",
        name: { en: "Maor Levi · Jaffa",             he: "מאור לוי · יפו" },
        bio:  { en: "Restaurant chef sharing 15-minute weeknight dinners. Knife-skill tutorials on Reels.",
                he: "שף מסעדה משתף ארוחות ערב של 15 דקות. טיפים לעבודה עם סכין בריל." },
        tags: [{en:"Food",he:"אוכל"},{en:"Chef",he:"שף"},{en:"Quick",he:"מהיר"}],
        creds: 92, followers: "47.1K", er: "5.6%", erGood: true, posts: "2.4" },
      { handle: "@noa.bakes",       initials: "נש", overlap: 29, badge: "mid",
        name: { en: "Noa Shalev · Herzliya",         he: "נועה שלו · הרצליה" },
        bio:  { en: "Sourdough, babka and friday-morning bakes. DMs open for brand collabs.",
                he: "מחמצת, באבקה ואפיות שישי בבוקר. דמ פתוח לשת״פ עם מותגים." },
        tags: [{en:"Food",he:"אוכל"},{en:"Baking",he:"אפייה"},{en:"Sourdough",he:"מחמצת"}],
        creds: 94, followers: "29.8K", er: "7.1%", erGood: true, posts: "2.6" },
      { handle: "@dan_drinks",      initials: "דס", overlap: 22, badge: "low",
        name: { en: "Dan Sa'ar · Tel Aviv",          he: "דן סער · תל אביב" },
        bio:  { en: "Israeli wine & natural drinks ✦ pairing notes ✦ boutique-winery collabs.",
                he: "יינות וטבעיים מישראל ✦ הצמדות לאוכל ✦ שת״פים עם יקבים בוטיק." },
        tags: [{en:"Food",he:"אוכל"},{en:"Wine",he:"יין"},{en:"Pairing",he:"הצמדות"}],
        creds: 89, followers: "18.7K", er: "5.0%", erGood: true, posts: "1.9" },
      { handle: "@kosher.kitchen",  initials: "אכ", overlap: 18, badge: "low",
        name: { en: "Avigail Katz · Bnei Brak",      he: "אביגיל כץ · בני ברק" },
        bio:  { en: "Kosher meal-prep for big families. Friday lists, costing per portion in shekels.",
                he: "הכנת ארוחות כשרות למשפחות גדולות. רשימות שישי, מחיר למנה בש״ח." },
        tags: [{en:"Food",he:"אוכל"},{en:"Kosher",he:"כשר"},{en:"Family",he:"משפחה"}],
        creds: 97, followers: "41.2K", er: "8.3%", erGood: true, posts: "3.1" },
    ],
  },

  electronics: {
    workspace:   { en: "Volt · Marketing ▾",          he: "וולט · שיווק ▾" },
    chip:        "niche.tech",
    target: {
      handle: "@volt_il",
      initials: "VO",
      followers: { en: "187K followers · matched daily",
                   he: "187 אלף עוקבים · מתעדכן יומית" },
    },
    meta: {
      a: { en: "creators match · ≥15% overlap with @volt_il · Tech · Tel Aviv",
           he: "יוצרים תואמים · ≥15% חפיפה עם @volt_il · טק · תל אביב" },
    },
    creators: [
      { handle: "@geekbar_il",      initials: "אג", overlap: 49, badge: "high",
        name: { en: "Asaf Goren · Tel Aviv",         he: "אסף גורן · תל אביב" },
        bio:  { en: "Hebrew-first phone & laptop reviews. Side-by-side benchmarks, no spec dumps.",
                he: "ביקורות סלולר ומחשבים בעברית. השוואות זה לצד זה, בלי הצפת מספרים." },
        tags: [{en:"Tech",he:"טק"},{en:"Reviews",he:"ביקורות"},{en:"Phones",he:"סלולר"}],
        creds: 93, followers: "112K", er: "5.8%", erGood: true, posts: "2.7" },
      { handle: "@gamer.shai",      initials: "שב", overlap: 44, badge: "high",
        name: { en: "Shai Barak · Petah Tikva",      he: "שי ברק · פתח תקווה" },
        bio:  { en: "PC gaming setups, peripherals & headset reviews. Building budget rigs in HE.",
                he: "סטאפים לגיימינג, ציוד היקפי וביקורות אוזניות. בנייה של מחשבים בתקציב." },
        tags: [{en:"Tech",he:"טק"},{en:"Gaming",he:"גיימינג"},{en:"Builds",he:"הרכבות"}],
        creds: 91, followers: "76.4K", er: "6.7%", erGood: true, posts: "3.4" },
      { handle: "@smarthome.eyal",  initials: "אכ", overlap: 38, badge: "high",
        name: { en: "Eyal Cohen · Modi'in",          he: "אייל כהן · מודיעין" },
        bio:  { en: "Israeli smart-home setups ✦ Shabbat-friendly automations ✦ HomeKit + Home Assistant.",
                he: "סמארט הום ישראלי ✦ אוטומציות לשבת ✦ HomeKit ו-Home Assistant." },
        tags: [{en:"Tech",he:"טק"},{en:"Smart home",he:"בית חכם"},{en:"DIY",he:"עשה זאת בעצמך"}],
        creds: 95, followers: "38.9K", er: "7.4%", erGood: true, posts: "2.1" },
      { handle: "@lens.roni",       initials: "רל", overlap: 35, badge: "mid",
        name: { en: "Roni Levin · Tel Aviv",         he: "רוני לוין · תל אביב" },
        bio:  { en: "Camera & lens reviews for Israeli weather. Sony, Fuji, GoPro in real conditions.",
                he: "ביקורות מצלמות ועדשות במזג אוויר ישראלי. Sony, Fuji, GoPro בשטח." },
        tags: [{en:"Tech",he:"טק"},{en:"Photo",he:"צילום"},{en:"Gear",he:"ציוד"}],
        creds: 90, followers: "44.2K", er: "5.1%", erGood: true, posts: "2.3" },
      { handle: "@dev.itay",        initials: "אר", overlap: 31, badge: "mid",
        name: { en: "Itay Rom · Haifa",              he: "איתי רום · חיפה" },
        bio:  { en: "AI tools, dev gear, mechanical keyboards. Reels in HE, deeper writeups in EN.",
                he: "כלי AI, ציוד לדבלופרים, מקלדות מכניות. ריל בעברית, הרחבות באנגלית." },
        tags: [{en:"Tech",he:"טק"},{en:"AI",he:"בינה מלאכותית"},{en:"Keyboards",he:"מקלדות"}],
        creds: 94, followers: "28.5K", er: "8.0%", erGood: true, posts: "2.9" },
      { handle: "@audio.tamar",     initials: "תמ", overlap: 27, badge: "mid",
        name: { en: "Tamar Mor · Tel Aviv",          he: "תמר מור · תל אביב" },
        bio:  { en: "Headphones, IEMs, hi-res audio. Honest A/Bs, never sponsored without a label.",
                he: "אוזניות, In-Ear ואודיו ברזולוציה גבוהה. השוואות הוגנות, ספונסר תמיד מסומן." },
        tags: [{en:"Tech",he:"טק"},{en:"Audio",he:"אודיו"},{en:"Reviews",he:"ביקורות"}],
        creds: 92, followers: "19.8K", er: "6.3%", erGood: true, posts: "2.0" },
      { handle: "@gadget.daddy",    initials: "אש", overlap: 23, badge: "low",
        name: { en: "Avi Shimoni · Rishon LeZion",   he: "אבי שמעוני · ראשון לציון" },
        bio:  { en: "Dad-tested gadgets — strollers with USB, kid tablets, family GPS. ₪/value math.",
                he: "גאדג'טים בבחינת אבא — עגלות עם USB, טאבלטים לילדים, GPS משפחתי. מתמטיקה של תמורה לכסף." },
        tags: [{en:"Tech",he:"טק"},{en:"Family",he:"משפחה"},{en:"Budget",he:"תקציב"}],
        creds: 88, followers: "33.7K", er: "4.4%", erGood: true, posts: "3.2" },
      { handle: "@unbox.maya",      initials: "מד", overlap: 17, badge: "low",
        name: { en: "Maya Dahan · Tel Aviv",         he: "מאיה דהן · תל אביב" },
        bio:  { en: "Unboxings + first-impressions in 60s. Translates spec sheets into HE for everyone.",
                he: "אנבוקסינג ורושם ראשון ב-60 שניות. מתרגמת מפרטים לעברית פשוטה." },
        tags: [{en:"Tech",he:"טק"},{en:"Unboxing",he:"אנבוקסינג"},{en:"Hebrew",he:"עברית"}],
        creds: 89, followers: "55.1K", er: "5.7%", erGood: true, posts: "4.0" },
    ],
  },

  health: {
    workspace:   { en: "Wellnest · Marketing ▾",      he: "וולנסט · שיווק ▾" },
    chip:        "niche.lifestyle",
    target: {
      handle: "@wellnest_il",
      initials: "WN",
      followers: { en: "412K followers · matched daily",
                   he: "412 אלף עוקבים · מתעדכן יומית" },
    },
    meta: {
      a: { en: "creators match · ≥15% overlap with @wellnest_il · Health & Wellness · Tel Aviv",
           he: "יוצרים תואמים · ≥15% חפיפה עם @wellnest_il · בריאות ואיכות חיים · תל אביב" },
    },
    creators: [
      { handle: "@dr.efrat",        initials: "אש", overlap: 52, badge: "high",
        name: { en: "Dr. Efrat Shaked · Tel Aviv",   he: "ד״ר אפרת שקד · תל אביב" },
        bio:  { en: "Family physician posting evidence-based health in plain HE. No quick-fix supplements.",
                he: "רופאת משפחה — תוכן בריאות מבוסס ראיות בעברית פשוטה. בלי תוספים פלא." },
        tags: [{en:"Health",he:"בריאות"},{en:"Evidence",he:"מבוסס מחקר"},{en:"Family",he:"משפחה"}],
        creds: 98, followers: "94.0K", er: "6.8%", erGood: true, posts: "2.2" },
      { handle: "@nutri.shir",      initials: "שב", overlap: 47, badge: "high",
        name: { en: "Shir Ben-Hayim · Ramat Gan",    he: "שיר בן-חיים · רמת גן" },
        bio:  { en: "Registered dietitian ✦ Israeli supermarket-friendly meal plans ✦ no fad diets.",
                he: "תזונאית רשומה ✦ תפריטים מהסופר הישראלי ✦ בלי דיאטות אופנה." },
        tags: [{en:"Health",he:"בריאות"},{en:"Nutrition",he:"תזונה"},{en:"Dietitian",he:"תזונאית"}],
        creds: 95, followers: "63.5K", er: "7.4%", erGood: true, posts: "3.0" },
      { handle: "@mindful.tal",     initials: "תכ", overlap: 39, badge: "high",
        name: { en: "Tal Kaplan · Tel Aviv",         he: "טל קפלן · תל אביב" },
        bio:  { en: "CBT therapist · everyday tools for anxiety, sleep, burnout. Hebrew-first content.",
                he: "מטפלת CBT · כלים יומיומיים לחרדה, שינה ושחיקה. תוכן בעברית קודם." },
        tags: [{en:"Health",he:"בריאות"},{en:"Mental",he:"נפש"},{en:"CBT",he:"CBT"}],
        creds: 96, followers: "41.8K", er: "8.1%", erGood: true, posts: "2.4" },
      { handle: "@mom.health.adi",  initials: "אג", overlap: 35, badge: "mid",
        name: { en: "Adi Gat · Hod Hasharon",        he: "עדי גת · הוד השרון" },
        bio:  { en: "Postnatal recovery, pelvic floor & first-year mom health. Working with Israeli HMOs.",
                he: "התאוששות לאחר לידה, רצפת אגן ובריאות אמהות בשנה הראשונה. בשת״פ עם קופ״ח." },
        tags: [{en:"Health",he:"בריאות"},{en:"Mom",he:"אמהות"},{en:"Recovery",he:"שיקום"}],
        creds: 93, followers: "37.2K", er: "6.5%", erGood: true, posts: "2.7" },
      { handle: "@fit.rotem",       initials: "רל", overlap: 31, badge: "mid",
        name: { en: "Rotem Lavi · Tel Aviv",         he: "רותם לביא · תל אביב" },
        bio:  { en: "Strength coach for women 30+. Form-first videos, no transformation gimmicks.",
                he: "מאמנת כוח לנשים 30+. דגש על טכניקה, בלי גימיקים של טרנספורמציה." },
        tags: [{en:"Health",he:"בריאות"},{en:"Fitness",he:"כושר"},{en:"Strength",he:"כוח"}],
        creds: 94, followers: "52.0K", er: "5.9%", erGood: true, posts: "3.3" },
      { handle: "@sleep.coach.eli", initials: "אנ", overlap: 26, badge: "mid",
        name: { en: "Elinor Nahum · Givatayim",      he: "אלינור נחום · גבעתיים" },
        bio:  { en: "Pediatric sleep coach ✦ no cry-it-out ✦ HE + EN reels, weekly Q&A.",
                he: "יועצת שינה לתינוקות ✦ ללא בכי מבוקר ✦ ריל בעברית ובאנגלית, שאלות בכל שבוע." },
        tags: [{en:"Health",he:"בריאות"},{en:"Sleep",he:"שינה"},{en:"Baby",he:"תינוקות"}],
        creds: 91, followers: "29.4K", er: "9.2%", erGood: true, posts: "2.1" },
      { handle: "@vita.alon",       initials: "אד", overlap: 22, badge: "low",
        name: { en: "Alon Dvir · Tel Aviv",          he: "אלון דביר · תל אביב" },
        bio:  { en: "Supplement & vitamin reviews — what local pharmacies actually carry, what's worth it.",
                he: "ביקורות תוספים וויטמינים — מה באמת יש בבתי המרקחת בארץ, ומה שווה." },
        tags: [{en:"Health",he:"בריאות"},{en:"Supplements",he:"תוספים"},{en:"Pharmacy",he:"מרקחת"}],
        creds: 87, followers: "22.6K", er: "5.4%", erGood: true, posts: "2.5" },
      { handle: "@derma.ortal",     initials: "אש", overlap: 18, badge: "low",
        name: { en: "Ortal Shapira · Haifa",         he: "אורטל שפירא · חיפה" },
        bio:  { en: "Dermatology PA · skincare actives, sunscreen for Israeli sun, no greenwashing.",
                he: "אחות בכירה בדרמטולוגיה · רכיבים פעילים בקוסמטיקה, שמש ישראלית, בלי גרינוושינג." },
        tags: [{en:"Health",he:"בריאות"},{en:"Skincare",he:"טיפוח"},{en:"Derm",he:"דרמטולוגיה"}],
        creds: 92, followers: "44.7K", er: "7.0%", erGood: true, posts: "2.8" },
    ],
  },

  beauty: {
    workspace:   { en: "Aurae · Marketing ▾",         he: "אוראיי · שיווק ▾" },
    chip:        "niche.beauty",
    target: {
      handle: "@aurae_il",
      initials: "AU",
      followers: { en: "224K followers · matched daily",
                   he: "224 אלף עוקבים · מתעדכן יומית" },
    },
    meta: {
      a: { en: "creators match · ≥15% overlap with @aurae_il · Beauty · Tel Aviv",
           he: "יוצרים תואמים · ≥15% חפיפה עם @aurae_il · יופי · תל אביב" },
    },
    creators: [
      { handle: "@mua.shani",       initials: "שכ", overlap: 53, badge: "high",
        name: { en: "Shani Cohen · Tel Aviv",        he: "שני כהן · תל אביב" },
        bio:  { en: "Pro MUA ✦ bridal, editorial & Mizrahi-skin colour theory ✦ tutorials in HE.",
                he: "מאפרת מקצועית ✦ כלות, אדיטוריאל וצבע לעור מזרחי ✦ טוטוריאלים בעברית." },
        tags: [{en:"Beauty",he:"יופי"},{en:"MUA",he:"איפור"},{en:"Bridal",he:"כלות"}],
        creds: 95, followers: "98.3K", er: "6.9%", erGood: true, posts: "3.2" },
      { handle: "@skin.dana",       initials: "דר", overlap: 46, badge: "high",
        name: { en: "Dana Raz · Ramat Gan",          he: "דנה רז · רמת גן" },
        bio:  { en: "Skincare routines tested in Tel Aviv humidity. Ingredient breakdowns, ₪/oz math.",
                he: "שגרות טיפוח בבדיקה בלחות של ת״א. ניתוח רכיבים, מחיר ליחידה." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Skincare",he:"טיפוח"},{en:"Reviews",he:"ביקורות"}],
        creds: 94, followers: "67.0K", er: "7.2%", erGood: true, posts: "2.8" },
      { handle: "@hair.by.lior",    initials: "לב", overlap: 40, badge: "high",
        name: { en: "Lior Ben-David · Tel Aviv",     he: "ליאור בן-דוד · תל אביב" },
        bio:  { en: "Curly & wavy hair specialist ✦ Israeli humidity-proof routines ✦ DMs for collabs.",
                he: "מומחית לשיער מתולתל וגלי ✦ שגרות עמידות בלחות ישראלית ✦ דמ פתוח לשת״פים." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Hair",he:"שיער"},{en:"Curly",he:"תלתלים"}],
        creds: 93, followers: "45.6K", er: "8.5%", erGood: true, posts: "3.0" },
      { handle: "@nails.tal",       initials: "תה", overlap: 34, badge: "mid",
        name: { en: "Tal Harel · Holon",             he: "טל הראל · חולון" },
        bio:  { en: "Nail-art reels ✦ minimal, editorial, holiday looks ✦ Israeli polish-brand collabs.",
                he: "ריל של עיצוב ציפורניים ✦ מינימלי, אדיטוריאל, חגים ✦ שת״פים עם מותגי לק מקומיים." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Nails",he:"ציפורניים"},{en:"Art",he:"אומנות"}],
        creds: 90, followers: "31.4K", er: "9.0%", erGood: true, posts: "4.1" },
      { handle: "@scent.yael",      initials: "יל", overlap: 30, badge: "mid",
        name: { en: "Yael Lavan · Tel Aviv",         he: "יעל לבן · תל אביב" },
        bio:  { en: "Perfume reviews in HE — niche houses, drugstore dupes, what lasts in heat.",
                he: "ביקורות בשמים בעברית — בתים נישתיים, חיקויים מהמרקחת, מה שורד בחום." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Fragrance",he:"בשמים"},{en:"Reviews",he:"ביקורות"}],
        creds: 92, followers: "26.8K", er: "6.4%", erGood: true, posts: "2.3" },
      { handle: "@mizrahi.glam",    initials: "רמ", overlap: 27, badge: "mid",
        name: { en: "Revital Malka · Ashdod",        he: "רויטל מלכה · אשדוד" },
        bio:  { en: "Bold colour, mizrahi bridal, henna-night looks. HE-first, EN subtitles on every reel.",
                he: "צבע נועז, איפור כלות מזרחי, מראים לחינה. עברית קודם, כתוביות באנגלית בכל ריל." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Mizrahi",he:"מזרחי"},{en:"Bridal",he:"כלות"}],
        creds: 91, followers: "39.7K", er: "7.6%", erGood: true, posts: "3.5" },
      { handle: "@modest.beauty",   initials: "מק", overlap: 22, badge: "low",
        name: { en: "Michal Klein · Bnei Brak",      he: "מיכל קליין · בני ברק" },
        bio:  { en: "Modest beauty content for religious women. Wigs, modest editorial, kosher beauty brands.",
                he: "תוכן יופי לציבור הדתי. פאות, אדיטוריאל צנוע, מותגי יופי כשרים." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Modest",he:"צנוע"},{en:"Wigs",he:"פאות"}],
        creds: 96, followers: "48.2K", er: "8.7%", erGood: true, posts: "2.6" },
      { handle: "@over40.gali",     initials: "גש", overlap: 17, badge: "low",
        name: { en: "Gali Stern · Herzliya",         he: "גלי שטרן · הרצליה" },
        bio:  { en: "Makeup & skincare for 40+ ✦ honest about what works on mature Israeli skin.",
                he: "איפור וטיפוח לגיל 40+ ✦ אמת על מה שעובד על עור ישראלי בוגר." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Mature",he:"בוגר"},{en:"Honest",he:"כנה"}],
        creds: 93, followers: "23.0K", er: "5.8%", erGood: true, posts: "2.0" },
    ],
  },
};

(function(){
  // Niche selection: window.__niche set by /food/, /beauty/, etc. stubs takes
  // priority; ?niche= URL param remains as a manual fallback.
  const params = new URLSearchParams(location.search);
  const key = (typeof window.__niche === "string" && window.__niche) || params.get("niche");
  if (!key || !NICHES[key]) return;
  const cfg = NICHES[key];

  function lang(){ return document.documentElement.lang === "he" ? "he" : "en"; }
  function pick(s){ return typeof s === "string" ? s : s[lang()]; }

  // Render template that doesn't depend on i18n keys for the dynamic content.
  function cardHTML(c, idx){
    const tagsHTML = c.tags.map(t => `<span class="niche-tag">${pick(t)}</span>`).join("");
    const erClass = c.erGood ? "value value-good" : "value";
    const t = lang() === "he"
      ? { overlap:"חפיפה", vER:"ER מאומת", real:"קהל אמיתי", fol:"עוקבים",
          er:"שיעור מעורבות", posts:"פוסטים/שבוע", view:"לפרופיל", brief:"שלח בריף",
          collabs:"שיתופי פעולה", collabPast:n=>`${n} שיתופי עבר` }
      : { overlap:"overlap", vER:"Verified ER", real:"real audience", fol:"Followers",
          er:"Eng. rate", posts:"Posts/wk", view:"View profile", brief:"Send brief",
          collabs:"Worked with", collabPast:n=>`${n} past collab${n===1?'':'s'}` };
    const avatarInner = c.photo
      ? `<img class="avatar-img" src="${c.photo}" alt="${c.handle}" loading="lazy" />`
      : c.initials;
    const profileHref = c.profileUrl || "profile.html";
    const collabsHTML = (c.workedWith && c.workedWith.length)
      ? `<div class="worked-with" tabindex="0" aria-label="${t.collabs}">
           <div class="worked-with-logos">
             ${c.workedWith.slice(0,3).map(b => `<img src="${b.logo}" alt="${b.handle}" loading="lazy" />`).join("")}
           </div>
           <span class="worked-with-label">${t.collabPast(c.workedWith.length)}</span>
           <div class="worked-with-popover">
             <div class="worked-with-popover-title">${t.collabs}</div>
             <ul>
               ${c.workedWith.map(b => `
                 <li>
                   <img src="${b.logo}" alt="" />
                   <div><b>${b.name}</b><span>${b.handle}</span></div>
                 </li>`).join("")}
             </ul>
           </div>
         </div>`
      : "";
    return `
      <div class="card">
        <div class="card-head">
          <div class="avatar a${(idx%8)+1}">${avatarInner}</div>
          <div>
            <div class="handle">${c.handle}</div>
            <div class="name">${pick(c.name)}</div>
          </div>
        </div>
        <div class="bio">${pick(c.bio)}</div>
        <div class="niche-row">${tagsHTML}</div>
        <div class="row">
          <span class="overlap-badge ${c.badge==='high'?'high':c.badge==='low'?'low':''}">${c.overlap}% <span>${t.overlap}</span></span>
          <span class="creds-badge"><span>${t.vER}</span> · ${c.creds}% <span>${t.real}</span></span>
        </div>
        ${collabsHTML}
        <div class="stats">
          <div class="stat-cell"><div class="label">${t.fol}</div><div class="value">${c.followers}</div></div>
          <div class="stat-cell"><div class="label">${t.er}</div><div class="${erClass}">${c.er}</div></div>
          <div class="stat-cell"><div class="label">${t.posts}</div><div class="value">${c.posts}</div></div>
        </div>
        <div class="card-actions">
          <a href="${profileHref}" class="btn">${t.view}</a>
          <button class="btn btn-primary" onclick="document.getElementById('m').classList.add('open')">${t.brief}</button>
        </div>
      </div>`;
  }

  function apply(){
    const L = lang();

    // Workspace pill (top-right) — strip data-i18n so it won't be overwritten next toggle.
    const ws = document.querySelector(".top-actions .btn");
    if (ws) { ws.removeAttribute("data-i18n"); ws.textContent = cfg.workspace[L]; }

    // Overlap target block
    const swatch = document.querySelector(".overlap-target .swatch");
    if (swatch) swatch.textContent = cfg.target.initials;
    const handleEl = document.querySelector(".overlap-target .meta b");
    if (handleEl) handleEl.textContent = cfg.target.handle;
    const followersEl = document.querySelector(".overlap-target .meta span");
    if (followersEl) { followersEl.removeAttribute("data-i18n"); followersEl.textContent = cfg.target.followers[L]; }

    // Active niche chip in sidebar
    document.querySelectorAll(".filters .filter-group .chip-row .chip").forEach(c => {
      if (c.getAttribute("data-i18n") === "niche.fashion") c.classList.remove("active");
      if (c.getAttribute("data-i18n") === cfg.chip)        c.classList.add("active");
    });

    // Results meta line
    const metaCount = document.querySelector(".results-meta strong");
    if (metaCount) metaCount.textContent = "84";
    const metaA = document.querySelector(".results-meta div:first-child span");
    if (metaA) { metaA.removeAttribute("data-i18n"); metaA.textContent = cfg.meta.a[L]; }

    // Replace grid
    const grid = document.querySelector(".grid");
    if (grid) grid.innerHTML = cfg.creators.map(cardHTML).join("");

    // Modal title — point at first creator
    const modalTitle = document.querySelector("#m .modal h3");
    if (modalTitle && cfg.creators[0]) {
      modalTitle.innerHTML = `<span data-i18n="modal.title">${L==='he'?'שליחת בריף ל':'Send brief to'}</span> ${cfg.creators[0].handle}`;
    }
  }

  function boot(){
    apply();
    // Reveal the page now that the niche overlay has applied (i18n.js skips the
    // reveal when window.__niche is set, to avoid a brief fashion-content flash).
    document.documentElement.style.visibility = "visible";
    // Re-apply whenever language flips
    new MutationObserver(apply).observe(document.documentElement, {
      attributes: true, attributeFilter: ["dir", "lang"],
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(boot, 0));
  } else {
    setTimeout(boot, 0);
  }
})();
