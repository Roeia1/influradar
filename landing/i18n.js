/* ============================================================================
   Zarkor — landing-only i18n. Shared by /landing/food/ + /landing/agency/.
   Fully isolated: no reference to /i18n.js or any demo asset (§6).
   Pages are authored Hebrew-first (lang="he" dir="rtl"); EN is the mirror.
   Patterns:
     data-i18n="key"               -> textContent (also updates <title>)
     data-i18n="key" + data-i18n-attr="content" -> sets that attribute
   Persists choice in localStorage under a landing-specific key.
   ============================================================================ */

const LP_I18N = {
  he: {
    "nav.cta": "קביעת שיחה של 15 דק׳",
    "softener": "או פשוט תגיבו למייל שלי — מה שנוח לכם.",
    "fn.sign": "— רועי, מייסד",

    "lbl.fol": "עוקבים",
    "lbl.er": "מעורבות",
    "lbl.ppw": "פוסטים/שבוע",
    "tag.food": "אוכל",
    "tag.protein": "חלבון",
    "tag.burgers": "המבורגרים",
    "tag.restaurants": "מסעדות",
    "tag.lifestyle": "לייפסטייל",
    "tag.comedy": "קומדיה",
    "tag.fitness": "כושר",
    "f.worked3": "3 שיתופי עבר",
    "st.tocontact": "ליצירת קשר",
    "st.contacted": "נוצר קשר",
    "st.replied": "הגיב/ה",

    "book.h": "בואו נדבר 15 דקות.",
    "book.p": "אני מתקשר למספר שתשאירו. בלי מצגת, בלי מכירה — אני אוסף קלט מצוותי מותגים וסוכנויות לפני שאני מחליט מה לבנות הלאה.",

    "pr.h": "תמחור פשוט. בלי עמלות.",
    "pr.early": "גישה מוקדמת: 40% הנחה ל-6 החודשים הראשונים — ל-50 הלקוחות הראשונים.",
    "pr.mo": "/חודש",
    "pr.t1.name": "Starter",
    "pr.t2.name": "Pro",
    "pr.t3.name": "Agency",
    "pr.cta": "קביעת שיחה של 15 דקות",
    "pr.t1.desc": "למותג או מסעדה בודדים שמאתרים בעצמם.",
    "pr.t1.f1": "משתמש אחד",
    "pr.t1.f2": "150 צפיות בפרופילים בחודש",
    "pr.t1.f3": "10 בריפים בחודש",
    "pr.t1.f4": "רשימות שמורות ומעקב סטטוס",
    "pr.t1.f5": "ממשק עברית + אנגלית",
    "pr.t2.desc": "לצוות שיווק פנימי שמריץ כמה קמפיינים.",
    "pr.t2.f1": "3 משתמשים",
    "pr.t2.f2": "צפיות בפרופילים — ללא הגבלה",
    "pr.t2.f3": "40 בריפים בחודש",
    "pr.t2.f4": "כל מה שב-Starter",
    "pr.t2.f5": "תמיכה בעדיפות",
    "pr.t3.desc": "לצוות שמנהל כמה מותגים או לקוחות.",
    "pr.t3.f1": "8 משתמשים",
    "pr.t3.f2": "צפיות ובריפים — ללא הגבלה",
    "pr.t3.f3": "מרחבי עבודה לכמה לקוחות",
    "pr.t3.f4": "ייצוא PDF בלייבל שלכם",
    "pr.badge": "הכי פופולרי",
    "a.pr.badge": "לסוכנויות",

    /* ---- Food landing ---- */
    "f.title": "Zarkor — יוצרי תוכן ישראלים בתחום האוכל שכבר מפרסמים על מקומות כמוכם",
    "f.meta": "חיפוש בין אלפי יוצרי תוכן ישראלים בתחום האוכל לפי נישה ומעורבות. ראו מי כבר מתייג את המתחרים שלכם. פנייה ישירה מהמותג — בלי סוכנות, בלי עמלה.",
    "f.eyebrow": "למותגי מזון, מסעדות ובתי קפה בישראל",
    "f.h1a": "מצאו ",
    "f.h1grad": "יוצרי תוכן בתחום האוכל",
    "f.h1b": " שכבר מפרסמים על מקומות כמו שלכם.",
    "f.lede": "חיפוש בין אלפי יוצרי תוכן ישראלים לפי נישה ומעורבות. ראו מי כבר מתייג את המתחרים שלכם. פנו אליהם ישירות מהמותג — בלי סוכנות, בלי עמלה, בלי לנחש.",
    "f.cta": "קביעת שיחה של 15 דקות",
    "f.fn.body": "אני בונה את Zarkor כי כל צוות מותג ישראלי שדיברתי איתו אמר אותו דבר: למצוא יוצרי תוכן מקומיים שבאמת מזיזים לקוחות זה איטי, ידני, וברובו ניחוש. אני עדיין לא מוכר כלום — אני עושה שיחות של 15 דקות עם מותגים וסוכנויות כדי להבין מה באמת שבור לפני שאני בונה עוד. אם איתור יוצרי תוכן ישראלים זה כאב אצלכם, אשמח לשמוע על זה.",
    "f.r2.kick": "מעורבות אמיתית",
    "f.r2.h": "לא רק כמה עוקבים — כמה מהם באמת מגיבים.",
    "f.r2.p": "שיעור מעורבות אמיתי — צפיות, לייקים ותגובות ביחס לכמות העוקבים — וקצב פרסום עקבי. אתם רואים מי מדבר עם קהל ישראלי שמקשיב, לא רק עוקב.",
    "f.r2.l1": "שיעור מעורבות מהפוסטים האחרונים",
    "f.r2.l2": "קצב פרסום ועקביות",
    "f.r2.recent": "מעורבות ב-8 הפוסטים האחרונים",
    "f.r3.kick": "פנייה בקול שלכם",
    "f.r3.h": "בריף מהמייל של המותג שלכם — בלי מתווך.",
    "f.r3.p": "טיוטה בנימה של המותג, ערוכה ומוכנה. נשלחת ישירות מכתובת המייל שלכם, לא דרך סוכנות ולא דרכנו. אנחנו מקשרים — העסקה היא ביניכם לבין יוצר התוכן.",
    "f.r3.l1": "טיוטה ראשונית בנימת המותג",
    "f.r3.l2": "נשלח מהמייל שלכם, לא ממתווך",
    "f.r3.l3": "בלי עמלה, בלי בוילרפלייט של סוכנות",
    "f.r3.mtitle": "שליחת בריף ל־",
    "f.r3.msub": "נעביר את הבריף ליוצרת התוכן ונציג את התגובה בתיבה שלכם. מעקב סטטוס ברשימות השמורות.",
    "f.r3.notice": "הבריף נשלח מכתובת המייל של Pantry & Co. — בלי מתווך, בלי בוילרפלייט של סוכנות.",
    "f.r3.f1": "סוג קמפיין",
    "f.r3.f1v": "ריל בודד · השקת תפריט אביב ▾",
    "f.r3.f2": "תקציב (₪)",
    "f.r3.f3": "בריף",
    "f.r3.f3v": "היי מאיה, אנחנו Pantry & Co. — אוהבים את ההמלצות הכנות שלך על מסעדות בת״א. נשמח לריל סביב תפריט האביב החדש שלנו, בנימה שלך, בלי תסריט נוקשה.",
    "f.r3.cancel": "ביטול",
    "f.r3.send": "שליחת בריף",
    "f.r4.kick": "רשימות ומעקב",
    "f.r4.h": "כל יוצרי התוכן והסטטוסים — במקום אחד.",
    "f.r4.p": "בנו רשימה קצרה, סמנו מי כבר נוצר איתו קשר, מי הגיב, ומי בהמתנה. בלי גיליון אקסל, בלי לאבד חוטים בין קמפיינים.",
    "f.r4.l1": "רשימות שמורות לכל קמפיין",
    "f.r4.l2": "סטטוס פנייה לכל יוצר תוכן",
    "f.r4.listname": "רשימת אביב",
    "f.r4.listsub": "5 יוצרי תוכן · עודכן היום",
    "f.r4.tab1": "רשימת אביב",
    "f.r4.tab2": "בריאות Q3",
    "f.r4.tab3": "פתיחות מסעדות",
    "f.r4.cCre": "יוצר תוכן",
    "f.r4.cFol": "עוקבים · מעורבות",
    "f.r4.cSt": "סטטוס",
    "f.final.h": "איתור יוצרי תוכן ישראלים לא צריך להיות ניחוש.",

    /* ---- Agency landing ---- */
    "a.title": "Zarkor — כיסוי יוצרי תוכן ישראלים שהכלים הגלובליים מפספסים",
    "a.meta": "מצאו יוצרי תוכן ישראלים מסוננים בדקות — המאגר הישראלי שלכלים הגלובליים אין. מרחבי עבודה לכמה לקוחות, בריפים בכמות וייצוא PDF בלייבל שלכם.",
    "a.eyebrow": "לסוכנויות שיווק משפיענים בישראל",
    "a.h1a": "מצאו ",
    "a.h1grad": "יוצרי תוכן ישראלים",
    "a.h1b": " מסוננים בדקות — בלי שעות של גלילה.",
    "a.lede": "חיפוש בין אלפי יוצרי תוכן ישראלים לפי נישה ומעורבות — המאגר הישראלי שלכלים הגלובליים אין. מרחבי עבודה לכמה לקוחות, בריפים בכמות, וייצוא PDF בלייבל שלכם לפגישות.",
    "a.cta": "קביעת שיחה של 15 דקות",
    "a.fn.body": "אני בונה את Zarkor כי כל סוכנות שדיברתי איתה אמרה אותו דבר: הכלים הגלובליים בקושי מכסים את ישראל, אז חצי מעבודת האיתור עדיין ידנית. אני עדיין לא מוכר כלום — אני עושה שיחות של 15 דקות עם מותגים וסוכנויות כדי להבין מה באמת שבור לפני שאני בונה עוד. אם איתור יוצרי תוכן ישראלים זה כאב אצלכם, אשמח לשמוע על זה.",
    "a.r1.fsearch": "חיפוש בביו (עברית)",
    "a.r1.fniche": "נישה",
    "a.r1.fer": "שיעור מעורבות",
    "a.r1.ffol": "טווח עוקבים",
    "a.r2.kick": "כיסוי ישראלי",
    "a.r2.h": "מאגר יוצרי התוכן הישראלים שלכלים הגלובליים אין.",
    "a.r2.p": "Modash ו-Heepsy בקושי מכסים את ישראל — אז חצי מעבודת האיתור עדיין ידנית. Zarkor בנוי על יוצרי תוכן ישראלים, כולל חיפוש בביו ובכיתובים בעברית — אז מי שכותב על עצמו ״קומיקאית״ באמת יעלה בתוצאות.",
    "a.r2.l1": "אלפי יוצרי תוכן ישראלים",
    "a.r2.l2": "התאמת ביו וכיתובים בעברית",
    "a.r2.l3": "סינון לפי נישה ומעורבות",
    "a.r3.kick": "כמה לקוחות",
    "a.r3.h": "מרחב עבודה נפרד לכל לקוח.",
    "a.r3.p": "החליפו בין לקוחות בלחיצה. רשימות, בריפים והיסטוריה נשארים מופרדים לכל מותג — בלי בלבול בין קמפיינים, בלי גיליון משותף שדולף.",
    "a.r3.l1": "מעבר מהיר בין לקוחות",
    "a.r3.l2": "פרויקטים ורשימות מבודדים",
    "a.r3.l3": "הרשאות לפי חבר צוות",
    "a.r3.switch": "החלפת לקוח",
    "a.r3.add": "+ לקוח חדש",
    "a.r3.p1": "אביב · 5 יוצרי תוכן",
    "a.r3.p2": "השקת קיץ · 12",
    "a.r3.p3": "שגרירים · 3",
    "a.r4.kick": "בריפים בכמות",
    "a.r4.h": "בחרו 20, שלחו בריף אחד — לכולם.",
    "a.r4.p": "סמנו רשימה שלמה ושלחו בריף מותאם בפעולה אחת, מהמייל של הלקוח. מה שלקח בוקר שלם של העתקות הופך לדקה.",
    "a.r4.l1": "בחירה מרובה ושליחה אחת",
    "a.r4.l2": "נשלח מהמייל של הלקוח",
    "a.r4.l3": "מעקב סטטוס לכל בריף",
    "a.r4.selected": "20 יוצרי תוכן נבחרו",
    "a.r4.sendall": "שליחת 20 בריפים",
    "a.r4.sent": "20 בריפים נשלחו מהמייל של Pantry & Co.",
    "a.r5.kick": "לייבל שלכם",
    "a.r5.h": "רשימה קצרה מוכנה לפגישה — עם הלוגו שלכם.",
    "a.r5.p": "ייצוא PDF נקי עם המיתוג של הסוכנות, מוכן לשלוח ללקוח. בלי ״הוכן על ידי כלי אחר״ — רק השם שלכם.",
    "a.r5.l1": "לוגו ומיתוג הסוכנות",
    "a.r5.l2": "נתוני יוצר תוכן ופוסטים לדוגמה",
    "a.r5.l3": "מוכן לשליחה ללקוח",
    "a.r5.for": "רשימה קצרה ל־",
    "a.r5.samples": "פוסטים לדוגמה",
    "a.r5.prepared": "הוכן על ידי Mendel Creative דרך",
    "a.pr.t1.desc": "למותג בודד או פרילנסר.",
    "a.pr.t1.x1": "מרחבי עבודה לכמה לקוחות",
    "a.pr.t1.x2": "ייצוא PDF בלייבל שלכם",
    "a.pr.t2.desc": "לצוות פנימי שמריץ כמה קמפיינים.",
    "a.pr.t2.f4": "בריפים בכמות",
    "a.pr.t3.desc": "לסוכנות שמנהלת כמה לקוחות.",
    "a.pr.t3.f1": "8 משתמשים",
    "a.pr.t3.f2": "צפיות ובריפים — ללא הגבלה",
    "a.pr.t3.f3": "מרחבי עבודה לכמה לקוחות",
    "a.pr.t3.f4": "בריפים בכמות",
    "a.pr.t3.f5": "ייצוא PDF בלייבל שלכם",
    "a.pr.t3.f6": "בלי עמלה — כל המרווח נשאר אצלכם",
    "a.final.h": "הכיסוי הישראלי שהכלים הגלובליים מפספסים — אצלכם.",
  },

  en: {
    "nav.cta": "Book 15 min",
    "softener": "Or just reply to my email — happy either way.",
    "fn.sign": "— Roei, founder",

    "lbl.fol": "Followers",
    "lbl.er": "Eng. rate",
    "lbl.ppw": "Posts/wk",
    "tag.food": "Food",
    "tag.protein": "Protein",
    "tag.burgers": "Burgers",
    "tag.restaurants": "Restaurants",
    "tag.lifestyle": "Lifestyle",
    "tag.comedy": "Comedy",
    "tag.fitness": "Fitness",
    "f.worked3": "3 past collabs",
    "st.tocontact": "To contact",
    "st.contacted": "Contacted",
    "st.replied": "Replied",

    "book.h": "Let's talk for 15 minutes.",
    "book.p": "I'll call the number you leave. No pitch, no sale — I'm gathering input from brand and agency teams before deciding what to build next.",

    "pr.h": "Simple pricing. No commission.",
    "pr.early": "Early access: 40% off your first 6 months — for the first 50 customers.",
    "pr.mo": "/mo",
    "pr.t1.name": "Starter",
    "pr.t2.name": "Pro",
    "pr.t3.name": "Agency",
    "pr.cta": "Book 15 min",
    "pr.t1.desc": "For a single brand or restaurant sourcing on their own.",
    "pr.t1.f1": "1 seat",
    "pr.t1.f2": "150 profile views / mo",
    "pr.t1.f3": "10 brief intros / mo",
    "pr.t1.f4": "Saved lists & status tracking",
    "pr.t1.f5": "Hebrew + English UI",
    "pr.t2.desc": "For an in-house team running several campaigns.",
    "pr.t2.f1": "3 seats",
    "pr.t2.f2": "Unlimited profile views",
    "pr.t2.f3": "40 brief intros / mo",
    "pr.t2.f4": "Everything in Starter",
    "pr.t2.f5": "Priority support",
    "pr.t3.desc": "For a team managing several brands or clients.",
    "pr.t3.f1": "8 seats",
    "pr.t3.f2": "Unlimited views & briefs",
    "pr.t3.f3": "Multi-client workspaces",
    "pr.t3.f4": "White-label PDF exports",
    "pr.badge": "Most popular",
    "a.pr.badge": "For agencies",

    /* ---- Food landing ---- */
    "f.title": "Zarkor — find Israeli food content creators who already post about places like yours",
    "f.meta": "Search thousands of Israeli food content creators by niche and engagement. See who already tags your competitors. Reach out from your brand — no agency, no commission.",
    "f.eyebrow": "For Israeli food brands, restaurants & cafés",
    "f.h1a": "Find ",
    "f.h1grad": "food content creators",
    "f.h1b": " who already post about places like yours.",
    "f.lede": "Search thousands of Israeli content creators by niche and engagement. See which ones already tag your competitors. Reach out from your brand — no agency, no commission, no guessing.",
    "f.cta": "Book 15 min",
    "f.fn.body": "I'm building Zarkor because every Israeli brand team I've talked to said the same thing: finding local content creators who actually move customers is slow, manual, and mostly guesswork. I'm not selling anything yet — I'm running 15-minute calls with brands and agencies to learn what's really broken before I build more. If sourcing Israeli content creators is a pain for you, I'd genuinely like to hear about it.",
    "f.r2.kick": "Real engagement",
    "f.r2.h": "Not just how many followers — how many actually engage.",
    "f.r2.p": "Real engagement rate — views, likes and comments measured against follower count — plus consistent posting cadence. You see who's talking to an Israeli audience that's actually listening, not just following.",
    "f.r2.l1": "Engagement rate from recent posts",
    "f.r2.l2": "Posting cadence & consistency",
    "f.r2.recent": "Engagement, last 8 posts",
    "f.r3.kick": "Outreach in your voice",
    "f.r3.h": "A brief from your brand's inbox — no middleman.",
    "f.r3.p": "A draft in your brand's voice, edited and ready. Sent straight from your email — not through an agency, and not through us. We make the intro; the deal is between you and the content creator.",
    "f.r3.l1": "First-draft in your brand voice",
    "f.r3.l2": "Sent from your email, not a middleman",
    "f.r3.l3": "No commission, no agency boilerplate",
    "f.r3.mtitle": "Send brief to ",
    "f.r3.msub": "We'll deliver the brief to the content creator and surface their response in your inbox. Track status in Saved lists.",
    "f.r3.notice": "This brief is sent from Pantry & Co.'s email — no middleman, no agency boilerplate.",
    "f.r3.f1": "Campaign type",
    "f.r3.f1v": "Single Reel · Spring menu launch ▾",
    "f.r3.f2": "Budget (₪)",
    "f.r3.f3": "Brief",
    "f.r3.f3v": "Hi Maya — we're Pantry & Co. We love your honest TLV restaurant recs. We'd love a Reel around our new spring menu, in your voice, no rigid script.",
    "f.r3.cancel": "Cancel",
    "f.r3.send": "Send brief",
    "f.r4.kick": "Lists & tracking",
    "f.r4.h": "Every content creator and status — in one place.",
    "f.r4.p": "Build a shortlist, mark who's been contacted, who replied, who's pending. No spreadsheet, no lost threads between campaigns.",
    "f.r4.l1": "Saved lists per campaign",
    "f.r4.l2": "Outreach status per content creator",
    "f.r4.listname": "Spring shortlist",
    "f.r4.listsub": "5 content creators · updated today",
    "f.r4.tab1": "Spring shortlist",
    "f.r4.tab2": "Healthy-eating Q3",
    "f.r4.tab3": "Restaurant openings",
    "f.r4.cCre": "Content creator",
    "f.r4.cFol": "Followers · ER",
    "f.r4.cSt": "Status",
    "f.final.h": "Sourcing Israeli content creators shouldn't be guesswork.",

    /* ---- Agency landing ---- */
    "a.title": "Zarkor — Israeli content-creator coverage that global tools miss",
    "a.meta": "Find vetted Israeli content creators in minutes — the Israeli database global tools don't have. Multi-client workspaces, bulk briefs and white-label PDF exports.",
    "a.eyebrow": "For Israeli influencer-marketing agencies",
    "a.h1a": "Find vetted ",
    "a.h1grad": "Israeli content creators",
    "a.h1b": " in minutes — without hours of scrolling.",
    "a.lede": "Search thousands of Israeli content creators by niche and engagement — the Israeli database global tools don't have. Multi-client workspaces, bulk briefs, white-label PDF exports for client meetings.",
    "a.cta": "Book 15 min",
    "a.fn.body": "I'm building Zarkor because every agency I've talked to said the same thing: the global tools barely cover Israel, so half the sourcing work is still manual. I'm not selling anything yet — I'm running 15-minute calls with brands and agencies to learn what's really broken before I build more. If sourcing Israeli content creators is a pain for you, I'd genuinely like to hear about it.",
    "a.r1.fsearch": "Bio search (Hebrew)",
    "a.r1.fniche": "Niche",
    "a.r1.fer": "Engagement rate",
    "a.r1.ffol": "Follower range",
    "a.r2.kick": "Israeli coverage",
    "a.r2.h": "The Israeli content creators global tools don't have.",
    "a.r2.p": "Modash and Heepsy barely cover Israel — so half the sourcing is still manual. Zarkor is built on Israeli content creators, with Hebrew bio and caption search — so someone who calls themselves “קומיקאית” actually shows up.",
    "a.r2.l1": "Thousands of Israeli content creators",
    "a.r2.l2": "Hebrew bio & caption matching",
    "a.r2.l3": "Filter by niche, engagement",
    "a.r3.kick": "Multi-client",
    "a.r3.h": "A separate workspace for every client.",
    "a.r3.p": "Switch clients in one click. Lists, briefs and history stay separated per brand — no cross-campaign confusion, no shared spreadsheet leaking.",
    "a.r3.l1": "Fast switching between clients",
    "a.r3.l2": "Isolated projects & lists",
    "a.r3.l3": "Per-teammate permissions",
    "a.r3.switch": "Switch client",
    "a.r3.add": "+ New client",
    "a.r3.p1": "Spring · 5 content creators",
    "a.r3.p2": "Summer launch · 12",
    "a.r3.p3": "Ambassadors · 3",
    "a.r4.kick": "Bulk briefs",
    "a.r4.h": "Select 20, send one brief — to all of them.",
    "a.r4.p": "Tick a whole list and send a tailored brief in one action, from the client's email. What took a whole morning of copy-paste becomes a minute.",
    "a.r4.l1": "Multi-select, single send",
    "a.r4.l2": "Sent from the client's email",
    "a.r4.l3": "Status tracking per brief",
    "a.r4.selected": "20 content creators selected",
    "a.r4.sendall": "Send 20 briefs",
    "a.r4.sent": "20 briefs sent from Pantry & Co.'s email",
    "a.r5.kick": "White-label",
    "a.r5.h": "A shortlist ready for the meeting — with your logo.",
    "a.r5.p": "A clean PDF export with the agency's branding, ready to send to the client. No “made with another tool” — just your name.",
    "a.r5.l1": "Agency logo & branding",
    "a.r5.l2": "Content-creator stats & sample posts",
    "a.r5.l3": "Ready to send to the client",
    "a.r5.for": "Shortlist for ",
    "a.r5.samples": "Sample posts",
    "a.r5.prepared": "Prepared by Mendel Creative via",
    "a.pr.t1.desc": "For a single brand or freelancer.",
    "a.pr.t1.x1": "Multi-client workspaces",
    "a.pr.t1.x2": "White-label PDF exports",
    "a.pr.t2.desc": "For an in-house team running several campaigns.",
    "a.pr.t2.f4": "Bulk briefs",
    "a.pr.t3.desc": "For an agency managing several clients.",
    "a.pr.t3.f1": "8 seats",
    "a.pr.t3.f2": "Unlimited views & briefs",
    "a.pr.t3.f3": "Multi-client workspaces",
    "a.pr.t3.f4": "Bulk briefs",
    "a.pr.t3.f5": "White-label PDF exports",
    "a.pr.t3.f6": "No commission — keep your full margin",
    "a.final.h": "The Israeli coverage global tools miss — yours.",
  },
};

(function () {
  var KEY = "zarkor_landing_lang";
  var DEFAULT = "he";

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }

  function apply(lang) {
    var dict = LP_I18N[lang] || LP_I18N[DEFAULT];
    var html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "he" ? "rtl" : "ltr");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (!(key in dict)) continue;
      var val = dict[key];
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        // TITLE: setting textContent also updates the browser tab title.
        el.textContent = val;
      }
    }

    var btns = document.querySelectorAll(".lang-toggle [data-lang]");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("active", btns[j].getAttribute("data-lang") === lang);
    }
  }

  function init() {
    var lang = stored() || DEFAULT;
    apply(lang);

    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".lang-toggle [data-lang]");
      if (!btn) return;
      var l = btn.getAttribute("data-lang");
      save(l);
      apply(l);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
