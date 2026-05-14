// Per-niche demo overlay for each niche's discover page (niche/demo/index.html).
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
      a: { en: "creators match · ≥15% overlap with @pantry_il · Food",
           he: "יוצרים תואמים · ≥15% חפיפה עם @pantry_il · אוכל" },
    },
    creators: [
      { handle: "@linorlab",        initials: "לל", overlap: 47, badge: "high",
        photo: "../../assets/creators/linorlab.jpg",
        profileUrl: "profile-linorlab.html",
        name: { en: "Linor Levanter",       he: "לינור לבנטר" },
        bio:  { en: "Low-cal high-protein recipes & shaping tips — eat more, still lose weight without suffering.",
                he: "חיטוב, מתכונים וטיפים · אוכלים ומרזים בכיף בלי להיקרע באימונים." },
        tags: [{en:"Food",he:"אוכל"},{en:"Protein",he:"חלבון"},{en:"Recipes",he:"מתכונים"}],
        workedWith: [
          { handle:"@ninja.israel",   name:"Ninja Israel",   logo:"../../assets/brands/ninja.israel.jpg" },
          { handle:"@taubread",       name:"Taubread",       logo:"../../assets/brands/taubread.jpg" },
          { handle:"@skinnypasta.il", name:"Skinny Pasta IL",logo:"../../assets/brands/skinnypasta.il.jpg" },
        ],
        creds: 91, followers: "115K", er: "3.9%", erGood: true, posts: "2.5" },
      { handle: "@maya.agassi",     initials: "מא", overlap: 39, badge: "high",
        photo: "../../assets/creators/maya.agassi.jpg",
        profileUrl: "profile.html",
        name: { en: "Maya Agassi",        he: "מאיה אגסי" },
        bio:  { en: "Dizengoff Square foodie & content creator ✦ Bezalel grad ✦ honest TLV restaurant recs.",
                he: "הפודית של כיכר דיזינגוף ויוצרת תוכן ✦ בוגרת בצלאל ✦ המלצות כנות על מסעדות ת״א." },
        tags: [{en:"Food",he:"אוכל"},{en:"Restaurants",he:"מסעדות"}],
        workedWith: [
          { handle:"@night.cookie", name:"Night Cookie", logo:"../../assets/brands/night.cookie.jpg" },
          { handle:"@basher.fromagerieil", name:"Basher Fromagerie", logo:"../../assets/brands/basher.fromagerieil.jpg" },
          { handle:"@eatsane_israel", name:"Eatsane", logo:"../../assets/brands/eatsane_israel.jpg" },
        ],
        creds: 96, followers: "4.0K", er: "9.6%", erGood: true, posts: "2.0" },
      { handle: "@romi.eats",       initials: "רא", overlap: 38, badge: "high",
        photo: "../../assets/creators/romi.eats.jpg",
        profileUrl: "profile-romi.eats.html",
        name: { en: "Romi Avni",            he: "רומי אבני" },
        bio:  { en: "Food, workouts, recipes — and a lot of burgers.",
                he: "אוכל, אימונים, מתכונים והרבה המבורגרים." },
        tags: [{en:"Food",he:"אוכל"},{en:"Burgers",he:"המבורגרים"},{en:"Recipes",he:"מתכונים"}],
        workedWith: [
          { handle:"@legenda.gelato",  name:"Legenda Gelato",  logo:"../../assets/brands/legenda.gelato.jpg" },
          { handle:"@wow_lond",        name:"Wow London",      logo:"../../assets/brands/wow_lond.jpg" },
          { handle:"@beef_steakchips", name:"Beef Steak+Chips", logo:"../../assets/brands/beef_steakchips.jpg" },
        ],
        creds: 92, followers: "30.0K", er: "7.7%", erGood: true, posts: "1.5" },
      { handle: "@talya_kaplan_nutrition", initials: "טק", overlap: 34, badge: "mid",
        photo: "../../assets/creators/talya_kaplan_nutrition.jpg",
        profileUrl: "profile-talya_kaplan_nutrition.html",
        name: { en: "Talya Kaplan",        he: "טליה קפלן" },
        bio:  { en: "Clinical dietitian & fitness coach. Creator of \"You can (and should) eat it all\" — lose weight without giving up chocolate.",
                he: "דיאטנית קלינית ומאמנת כושר · יוצרת התוכנית ״מותר (ורצוי) לאכול הכל״ · לרדת במשקל בלי לוותר על שוקולד." },
        tags: [{en:"Nutrition",he:"תזונה"},{en:"Dietitian",he:"דיאטנית"},{en:"Food",he:"אוכל"}],
        workedWith: [
          { handle:"@taubread",            name:"Taubread",         logo:"../../assets/brands/taubread.jpg" },
          { handle:"@wondersofnature.il",  name:"Wonders of Nature",logo:"../../assets/brands/wondersofnature.il.jpg" },
        ],
        creds: 90, followers: "31.2K", er: "0.7%", erGood: false, posts: "2.0" },
      { handle: "@hm___fitnutrition", initials: "המ", overlap: 31, badge: "mid",
        photo: "../../assets/creators/hm___fitnutrition.jpg",
        profileUrl: "profile-hm___fitnutrition.html",
        name: { en: "Hadas & Maayan Lapidot", he: "הדס ומעין לפידות" },
        bio:  { en: "Twin dietitians, 42, eat everything · low-cal recipes that taste great · @myproteinisrael ambassadors.",
                he: "דיאטניות תאומות, בנות 42, אוכלות הכל · מתכונים מופחתי קלוריות טעימים · שגרירות @myproteinisrael." },
        tags: [{en:"Nutrition",he:"תזונה"},{en:"Dietitian",he:"דיאטנית"},{en:"Recipes",he:"מתכונים"}],
        workedWith: [
          { handle:"@skinnypasta.il",   name:"Skinny Pasta IL",  logo:"../../assets/brands/skinnypasta.il.jpg" },
          { handle:"@myproteinisrael",  name:"MyProtein Israel", logo:"../../assets/brands/myproteinisrael.jpg" },
        ],
        creds: 89, followers: "17.8K", er: "3.9%", erGood: true, posts: "2.2" },
      { handle: "@nitzanjerbi",     initials: "נג", overlap: 27, badge: "mid",
        photo: "../../assets/creators/nitzanjerbi.jpg",
        profileUrl: "profile-nitzanjerbi.html",
        name: { en: "Nitzan Jerbi Derfler", he: "ניצן ג׳רבי דרפלר" },
        bio:  { en: "Comedian & actress turning everyday life into content. Goal: a Sabichia collab.",
                he: "קומיקאית, שחקנית ואשת חייל — מכל זה יוצרת תוכן. יעד בחיים: שת״פ עם סביחיה." },
        tags: [{en:"Lifestyle",he:"לייפסטייל"},{en:"Comedy",he:"קומדיה"},{en:"Food",he:"אוכל"}],
        workedWith: [
          { handle:"@sprite_il",              name:"Sprite IL",        logo:"../../assets/brands/sprite_il.jpg" },
          { handle:"@nestle_icecream_israel", name:"Nestlé Ice Cream", logo:"../../assets/brands/nestle_icecream_israel.jpg" },
          { handle:"@muller_il",              name:"Müller Israel",    logo:"../../assets/brands/muller_il.jpg" },
        ],
        creds: 88, followers: "23.9K", er: "33.0%", erGood: true, posts: "0.5" },
      { handle: "@chen_fitness_crossfit_workout", initials: "חב", overlap: 24, badge: "mid",
        photo: "../../assets/creators/chen_fitness_crossfit_workout.jpg",
        profileUrl: "profile-chen_fitness_crossfit_workout.html",
        name: { en: "Chen Ben David",       he: "חן בן דוד" },
        bio:  { en: "Fitness coach & nutrition consultant · mom of 4 in 5 years (incl. twins) · sport, healthy food, travel & life tips.",
                he: "מאמנת כושר ויועצת תזונה · אמא ל-4 ב-5 שנים (כולל תאומים) · ספורט, אוכל בריא, טיולים וטיפים." },
        tags: [{en:"Fitness",he:"כושר"},{en:"Nutrition",he:"תזונה"},{en:"Family",he:"משפחה"}],
        workedWith: [
          { handle:"@skinnypasta.il", name:"Skinny Pasta IL", logo:"../../assets/brands/skinnypasta.il.jpg" },
          { handle:"@naturalion.il",  name:"Naturalion",      logo:"../../assets/brands/naturalion.il.jpg" },
        ],
        creds: 87, followers: "10.0K", er: "0.2%", erGood: false, posts: "1.5" },
      { handle: "@nivfitfood",      initials: "נז", overlap: 20, badge: "low",
        photo: "../../assets/creators/nivfitfood.jpg",
        profileUrl: "profile-nivfitfood.html",
        name: { en: "Niv Zitayat",          he: "ניב זיתאית" },
        bio:  { en: "Personal trainer & protein-products reviewer. Foods + workouts.",
                he: "מאמן אישי וסוקר מוצרי חלבון. אוכל ואימונים." },
        tags: [{en:"Fitness",he:"כושר"},{en:"Protein",he:"חלבון"},{en:"Reviews",he:"ביקורות"}],
        workedWith: [
          { handle:"@allinisrael",  name:"Allin",        logo:"../../assets/brands/allinisrael.jpg" },
          { handle:"@night.cookie", name:"Night Cookie", logo:"../../assets/brands/night.cookie.jpg" },
          { handle:"@pro_cream__",  name:"Pro+Cream",    logo:"../../assets/brands/pro_cream__.jpg" },
        ],
        creds: 86, followers: "6.5K", er: "0.7%", erGood: false, posts: "1.7" },
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
      a: { en: "creators match · ≥15% overlap with @volt_il · Tech",
           he: "יוצרים תואמים · ≥15% חפיפה עם @volt_il · טק" },
    },
    creators: [
      { handle: "@geekbar_il",      initials: "אג", overlap: 49, badge: "high",
        name: { en: "Asaf Goren",         he: "אסף גורן" },
        bio:  { en: "Hebrew-first phone & laptop reviews. Side-by-side benchmarks, no spec dumps.",
                he: "ביקורות סלולר ומחשבים בעברית. השוואות זה לצד זה, בלי הצפת מספרים." },
        tags: [{en:"Tech",he:"טק"},{en:"Reviews",he:"ביקורות"},{en:"Phones",he:"סלולר"}],
        creds: 93, followers: "112K", er: "5.8%", erGood: true, posts: "2.7" },
      { handle: "@gamer.shai",      initials: "שב", overlap: 44, badge: "high",
        name: { en: "Shai Barak",      he: "שי ברק" },
        bio:  { en: "PC gaming setups, peripherals & headset reviews. Building budget rigs in HE.",
                he: "סטאפים לגיימינג, ציוד היקפי וביקורות אוזניות. בנייה של מחשבים בתקציב." },
        tags: [{en:"Tech",he:"טק"},{en:"Gaming",he:"גיימינג"},{en:"Builds",he:"הרכבות"}],
        creds: 91, followers: "76.4K", er: "6.7%", erGood: true, posts: "3.4" },
      { handle: "@smarthome.eyal",  initials: "אכ", overlap: 38, badge: "high",
        name: { en: "Eyal Cohen",          he: "אייל כהן" },
        bio:  { en: "Israeli smart-home setups ✦ Shabbat-friendly automations ✦ HomeKit + Home Assistant.",
                he: "סמארט הום ישראלי ✦ אוטומציות לשבת ✦ HomeKit ו-Home Assistant." },
        tags: [{en:"Tech",he:"טק"},{en:"Smart home",he:"בית חכם"},{en:"DIY",he:"עשה זאת בעצמך"}],
        creds: 95, followers: "38.9K", er: "7.4%", erGood: true, posts: "2.1" },
      { handle: "@lens.roni",       initials: "רל", overlap: 35, badge: "mid",
        name: { en: "Roni Levin",         he: "רוני לוין" },
        bio:  { en: "Camera & lens reviews for Israeli weather. Sony, Fuji, GoPro in real conditions.",
                he: "ביקורות מצלמות ועדשות במזג אוויר ישראלי. Sony, Fuji, GoPro בשטח." },
        tags: [{en:"Tech",he:"טק"},{en:"Photo",he:"צילום"},{en:"Gear",he:"ציוד"}],
        creds: 90, followers: "44.2K", er: "5.1%", erGood: true, posts: "2.3" },
      { handle: "@dev.itay",        initials: "אר", overlap: 31, badge: "mid",
        name: { en: "Itay Rom",              he: "איתי רום" },
        bio:  { en: "AI tools, dev gear, mechanical keyboards. Reels in HE, deeper writeups in EN.",
                he: "כלי AI, ציוד לדבלופרים, מקלדות מכניות. ריל בעברית, הרחבות באנגלית." },
        tags: [{en:"Tech",he:"טק"},{en:"AI",he:"בינה מלאכותית"},{en:"Keyboards",he:"מקלדות"}],
        creds: 94, followers: "28.5K", er: "8.0%", erGood: true, posts: "2.9" },
      { handle: "@audio.tamar",     initials: "תמ", overlap: 27, badge: "mid",
        name: { en: "Tamar Mor",          he: "תמר מור" },
        bio:  { en: "Headphones, IEMs, hi-res audio. Honest A/Bs, never sponsored without a label.",
                he: "אוזניות, In-Ear ואודיו ברזולוציה גבוהה. השוואות הוגנות, ספונסר תמיד מסומן." },
        tags: [{en:"Tech",he:"טק"},{en:"Audio",he:"אודיו"},{en:"Reviews",he:"ביקורות"}],
        creds: 92, followers: "19.8K", er: "6.3%", erGood: true, posts: "2.0" },
      { handle: "@gadget.daddy",    initials: "אש", overlap: 23, badge: "low",
        name: { en: "Avi Shimoni",   he: "אבי שמעוני" },
        bio:  { en: "Dad-tested gadgets — strollers with USB, kid tablets, family GPS. ₪/value math.",
                he: "גאדג'טים בבחינת אבא — עגלות עם USB, טאבלטים לילדים, GPS משפחתי. מתמטיקה של תמורה לכסף." },
        tags: [{en:"Tech",he:"טק"},{en:"Family",he:"משפחה"},{en:"Budget",he:"תקציב"}],
        creds: 88, followers: "33.7K", er: "4.4%", erGood: true, posts: "3.2" },
      { handle: "@unbox.maya",      initials: "מד", overlap: 17, badge: "low",
        name: { en: "Maya Dahan",         he: "מאיה דהן" },
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
      a: { en: "creators match · ≥15% overlap with @wellnest_il · Health & Wellness",
           he: "יוצרים תואמים · ≥15% חפיפה עם @wellnest_il · בריאות ואיכות חיים" },
    },
    creators: [
      { handle: "@dr.efrat",        initials: "אש", overlap: 52, badge: "high",
        name: { en: "Dr. Efrat Shaked",   he: "ד״ר אפרת שקד" },
        bio:  { en: "Family physician posting evidence-based health in plain HE. No quick-fix supplements.",
                he: "רופאת משפחה — תוכן בריאות מבוסס ראיות בעברית פשוטה. בלי תוספים פלא." },
        tags: [{en:"Health",he:"בריאות"},{en:"Evidence",he:"מבוסס מחקר"},{en:"Family",he:"משפחה"}],
        creds: 98, followers: "94.0K", er: "6.8%", erGood: true, posts: "2.2" },
      { handle: "@nutri.shir",      initials: "שב", overlap: 47, badge: "high",
        name: { en: "Shir Ben-Hayim",    he: "שיר בן-חיים" },
        bio:  { en: "Registered dietitian ✦ Israeli supermarket-friendly meal plans ✦ no fad diets.",
                he: "תזונאית רשומה ✦ תפריטים מהסופר הישראלי ✦ בלי דיאטות אופנה." },
        tags: [{en:"Health",he:"בריאות"},{en:"Nutrition",he:"תזונה"},{en:"Dietitian",he:"תזונאית"}],
        creds: 95, followers: "63.5K", er: "7.4%", erGood: true, posts: "3.0" },
      { handle: "@mindful.tal",     initials: "תכ", overlap: 39, badge: "high",
        name: { en: "Tal Kaplan",         he: "טל קפלן" },
        bio:  { en: "CBT therapist · everyday tools for anxiety, sleep, burnout. Hebrew-first content.",
                he: "מטפלת CBT · כלים יומיומיים לחרדה, שינה ושחיקה. תוכן בעברית קודם." },
        tags: [{en:"Health",he:"בריאות"},{en:"Mental",he:"נפש"},{en:"CBT",he:"CBT"}],
        creds: 96, followers: "41.8K", er: "8.1%", erGood: true, posts: "2.4" },
      { handle: "@mom.health.adi",  initials: "אג", overlap: 35, badge: "mid",
        name: { en: "Adi Gat",        he: "עדי גת" },
        bio:  { en: "Postnatal recovery, pelvic floor & first-year mom health. Working with Israeli HMOs.",
                he: "התאוששות לאחר לידה, רצפת אגן ובריאות אמהות בשנה הראשונה. בשת״פ עם קופ״ח." },
        tags: [{en:"Health",he:"בריאות"},{en:"Mom",he:"אמהות"},{en:"Recovery",he:"שיקום"}],
        creds: 93, followers: "37.2K", er: "6.5%", erGood: true, posts: "2.7" },
      { handle: "@fit.rotem",       initials: "רל", overlap: 31, badge: "mid",
        name: { en: "Rotem Lavi",         he: "רותם לביא" },
        bio:  { en: "Strength coach for women 30+. Form-first videos, no transformation gimmicks.",
                he: "מאמנת כוח לנשים 30+. דגש על טכניקה, בלי גימיקים של טרנספורמציה." },
        tags: [{en:"Health",he:"בריאות"},{en:"Fitness",he:"כושר"},{en:"Strength",he:"כוח"}],
        creds: 94, followers: "52.0K", er: "5.9%", erGood: true, posts: "3.3" },
      { handle: "@sleep.coach.eli", initials: "אנ", overlap: 26, badge: "mid",
        name: { en: "Elinor Nahum",      he: "אלינור נחום" },
        bio:  { en: "Pediatric sleep coach ✦ no cry-it-out ✦ HE + EN reels, weekly Q&A.",
                he: "יועצת שינה לתינוקות ✦ ללא בכי מבוקר ✦ ריל בעברית ובאנגלית, שאלות בכל שבוע." },
        tags: [{en:"Health",he:"בריאות"},{en:"Sleep",he:"שינה"},{en:"Baby",he:"תינוקות"}],
        creds: 91, followers: "29.4K", er: "9.2%", erGood: true, posts: "2.1" },
      { handle: "@vita.alon",       initials: "אד", overlap: 22, badge: "low",
        name: { en: "Alon Dvir",          he: "אלון דביר" },
        bio:  { en: "Supplement & vitamin reviews — what local pharmacies actually carry, what's worth it.",
                he: "ביקורות תוספים וויטמינים — מה באמת יש בבתי המרקחת בארץ, ומה שווה." },
        tags: [{en:"Health",he:"בריאות"},{en:"Supplements",he:"תוספים"},{en:"Pharmacy",he:"מרקחת"}],
        creds: 87, followers: "22.6K", er: "5.4%", erGood: true, posts: "2.5" },
      { handle: "@derma.ortal",     initials: "אש", overlap: 18, badge: "low",
        name: { en: "Ortal Shapira",         he: "אורטל שפירא" },
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
      a: { en: "creators match · ≥15% overlap with @aurae_il · Beauty",
           he: "יוצרים תואמים · ≥15% חפיפה עם @aurae_il · יופי" },
    },
    creators: [
      { handle: "@mua.shani",       initials: "שכ", overlap: 53, badge: "high",
        name: { en: "Shani Cohen",        he: "שני כהן" },
        bio:  { en: "Pro MUA ✦ bridal, editorial & Mizrahi-skin colour theory ✦ tutorials in HE.",
                he: "מאפרת מקצועית ✦ כלות, אדיטוריאל וצבע לעור מזרחי ✦ טוטוריאלים בעברית." },
        tags: [{en:"Beauty",he:"יופי"},{en:"MUA",he:"איפור"},{en:"Bridal",he:"כלות"}],
        creds: 95, followers: "98.3K", er: "6.9%", erGood: true, posts: "3.2" },
      { handle: "@skin.dana",       initials: "דר", overlap: 46, badge: "high",
        name: { en: "Dana Raz",          he: "דנה רז" },
        bio:  { en: "Skincare routines tested in Tel Aviv humidity. Ingredient breakdowns, ₪/oz math.",
                he: "שגרות טיפוח בבדיקה בלחות של ת״א. ניתוח רכיבים, מחיר ליחידה." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Skincare",he:"טיפוח"},{en:"Reviews",he:"ביקורות"}],
        creds: 94, followers: "67.0K", er: "7.2%", erGood: true, posts: "2.8" },
      { handle: "@hair.by.lior",    initials: "לב", overlap: 40, badge: "high",
        name: { en: "Lior Ben-David",     he: "ליאור בן-דוד" },
        bio:  { en: "Curly & wavy hair specialist ✦ Israeli humidity-proof routines ✦ DMs for collabs.",
                he: "מומחית לשיער מתולתל וגלי ✦ שגרות עמידות בלחות ישראלית ✦ דמ פתוח לשת״פים." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Hair",he:"שיער"},{en:"Curly",he:"תלתלים"}],
        creds: 93, followers: "45.6K", er: "8.5%", erGood: true, posts: "3.0" },
      { handle: "@nails.tal",       initials: "תה", overlap: 34, badge: "mid",
        name: { en: "Tal Harel",             he: "טל הראל" },
        bio:  { en: "Nail-art reels ✦ minimal, editorial, holiday looks ✦ Israeli polish-brand collabs.",
                he: "ריל של עיצוב ציפורניים ✦ מינימלי, אדיטוריאל, חגים ✦ שת״פים עם מותגי לק מקומיים." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Nails",he:"ציפורניים"},{en:"Art",he:"אומנות"}],
        creds: 90, followers: "31.4K", er: "9.0%", erGood: true, posts: "4.1" },
      { handle: "@scent.yael",      initials: "יל", overlap: 30, badge: "mid",
        name: { en: "Yael Lavan",         he: "יעל לבן" },
        bio:  { en: "Perfume reviews in HE — niche houses, drugstore dupes, what lasts in heat.",
                he: "ביקורות בשמים בעברית — בתים נישתיים, חיקויים מהמרקחת, מה שורד בחום." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Fragrance",he:"בשמים"},{en:"Reviews",he:"ביקורות"}],
        creds: 92, followers: "26.8K", er: "6.4%", erGood: true, posts: "2.3" },
      { handle: "@mizrahi.glam",    initials: "רמ", overlap: 27, badge: "mid",
        name: { en: "Revital Malka",        he: "רויטל מלכה" },
        bio:  { en: "Bold colour, mizrahi bridal, henna-night looks. HE-first, EN subtitles on every reel.",
                he: "צבע נועז, איפור כלות מזרחי, מראים לחינה. עברית קודם, כתוביות באנגלית בכל ריל." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Mizrahi",he:"מזרחי"},{en:"Bridal",he:"כלות"}],
        creds: 91, followers: "39.7K", er: "7.6%", erGood: true, posts: "3.5" },
      { handle: "@modest.beauty",   initials: "מק", overlap: 22, badge: "low",
        name: { en: "Michal Klein",      he: "מיכל קליין" },
        bio:  { en: "Modest beauty content for religious women. Wigs, modest editorial, kosher beauty brands.",
                he: "תוכן יופי לציבור הדתי. פאות, אדיטוריאל צנוע, מותגי יופי כשרים." },
        tags: [{en:"Beauty",he:"יופי"},{en:"Modest",he:"צנוע"},{en:"Wigs",he:"פאות"}],
        creds: 96, followers: "48.2K", er: "8.7%", erGood: true, posts: "2.6" },
      { handle: "@over40.gali",     initials: "גש", overlap: 17, badge: "low",
        name: { en: "Gali Stern",         he: "גלי שטרן" },
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
      ? { overlap:"חפיפה", fol:"עוקבים",
          er:"שיעור מעורבות", posts:"פוסטים/שבוע", view:"לפרופיל", brief:"שלח בריף",
          collabs:"שיתופי פעולה", collabPast:n=>`${n} שיתופי עבר`,
          erTipLabel:"מה זה שיעור מעורבות",
          erTipBody:"ממוצע לייקים + תגובות לפוסט חלקי כמות העוקבים, ב-30 הימים האחרונים. אחוז גבוה יותר משמעו קהל שמגיב באמת — לא רק גולל.",
          overlapTipLabel:"מה זה חפיפת קהל",
          overlapTipBody:"אחוז העוקבים של היוצר/ת שעוקבים גם אחרי המותג שלך או אחרי מותג דומה. מחושב לילית מדגימת עוקבים פומבית — אחוז גבוה יותר משמעו קהל חם יותר ומוכן יותר." }
      : { overlap:"overlap", fol:"Followers",
          er:"Eng. rate", posts:"Posts/wk", view:"View profile", brief:"Send brief",
          collabs:"Worked with", collabPast:n=>`${n} past collab${n===1?'':'s'}`,
          erTipLabel:"About engagement rate",
          erTipBody:"Average likes + comments per post divided by follower count, over the last 30 days. A higher rate means the audience actively interacts — not just scrolls past.",
          overlapTipLabel:"About audience overlap",
          overlapTipBody:"Share of this creator's followers who also follow your brand or a close lookalike. Computed nightly from public follower samples — higher means a warmer, more pre-qualified audience." };
    const overlapTipHTML = `<span class="info-tip" tabindex="0" role="img" aria-label="${t.overlapTipLabel}">i<span class="info-tip-popup">${t.overlapTipBody}</span></span>`;
    const erTipHTML = `<span class="info-tip" tabindex="0" role="img" aria-label="${t.erTipLabel}">i<span class="info-tip-popup">${t.erTipBody}</span></span>`;
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
          <span class="overlap-badge ${c.badge==='high'?'high':c.badge==='low'?'low':''}">${c.overlap}% <span>${t.overlap}</span>${overlapTipHTML}</span>
        </div>
        ${collabsHTML}
        <div class="stats">
          <div class="stat-cell"><div class="label">${t.fol}</div><div class="value">${c.followers}</div></div>
          <div class="stat-cell"><div class="label">${t.er}${erTipHTML}</div><div class="${erClass}">${c.er}</div></div>
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
