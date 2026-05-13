# Influradar — Validation Outreach Templates

Purpose: validate the Influradar idea (Israeli influencer discovery for brands & agencies) by collecting honest reactions from potential users. **Not a sales pitch — ask for opinion, not signup.**

The working demo is the hook. Lead with the link, keep messages short, make "no" easy.

## Audience routing

| Audience | Demo URL | Role hint |
|---|---|---|
| Agency (running campaigns for clients) | `https://influradar-flax.vercel.app/` | media buyers, agency leads, influencer marketing managers |
| Brand (in-house marketing) | `https://influradar-flax.vercel.app/brand/` | brand managers, marketing leads, growth |

Tag links per channel + template for tracking. Example:
```
https://influradar-flax.vercel.app/brand/?utm_source=linkedin&utm_campaign=validation_v1&utm_content=brand_dm
https://influradar-flax.vercel.app/?utm_source=email&utm_campaign=validation_v1&utm_content=agency_email
```

`utm_source` ∈ {`linkedin`, `email`} · `utm_content` ∈ {`agency_connect`, `agency_dm`, `agency_email`, `brand_connect`, `brand_dm`, `brand_email`, `bump_d4`, `bump_d10`}

## Variables to fill programmatically

| Variable | Source |
|---|---|
| `{first_name}` | LinkedIn / contact list |
| `{company}` | LinkedIn |
| `{demo_url}` | `https://influradar-flax.vercel.app/brand/` (brand) or `https://influradar-flax.vercel.app/` (agency), with UTM tags appended |
| `{personalized_reason}` | 1 hand-written line per prospect — the response-rate lever |
| `{role_context}` | mapped from job title (brand-side / agency / freelance) |

---

## 1. LinkedIn — Connection request note (≤200 chars)

### Hebrew — Brand
> היי {first_name}, בניתי דמו של כלי לגילוי משפיענים ישראלים למותגים — אשמח 30 שניות מהזמן שלך + דעה כנה. {demo_url}

### Hebrew — Agency
> היי {first_name}, בניתי דמו של כלי לסוכנויות שמריצות קמפייני משפיענים בישראל. 30 שניות מבט + דעה כנה יעזרו לי המון 🙏 {demo_url}

### English — Brand / Agency
> Hi {first_name}, built a demo of an Israeli-influencer discovery tool for {brands/agencies}. 30 seconds + your honest take would help a lot 🙏 {demo_url}

---

## 2. LinkedIn — DM after connection accepted

### Hebrew
> תודה על האישור {first_name} 🙏
>
> רקע של שורה: בניתי דמו של **Influradar** — מנוע גילוי משפיענים ישראלים ל{מותגים/סוכנויות}, ואני מנסה להבין אם זה פותר בעיה אמיתית או לא.
>
> **הדמו** (30 שניות, בלי הרשמה): {demo_url}
>
> אם תהיה לך דקה אחרי שתסתכל/י — שתי שאלות:
> 1. זה נראה כמו משהו ש{company} הייתה משתמשת בו?
> 2. מה הכי חסר / מה הכי מעצבן?
>
> תשובה של משפט אחד שווה לי זהב. שיחת זום של 10 דק׳ גם אפשרית אם נוח יותר.

### English
> Thanks for connecting {first_name} 🙏
>
> One-line context: I built a demo of **Influradar** — an Israeli-influencer discovery engine for {brands/agencies}, and I'm trying to figure out if it solves a real problem or not.
>
> **Demo** (30 sec, no signup): {demo_url}
>
> If you have a minute after looking — two questions:
> 1. Does this look like something {company} would use?
> 2. What's missing / what's most annoying?
>
> A one-sentence answer is worth gold. Happy to do a 10-min Zoom instead if easier.

---

## 3. Email — Cold outreach

### Subject lines (A/B test)
- `דמו של כלי משפיענים — 30 שניות + דעה?` *(HE)*
- `בניתי משהו ל{company} — אשמח לדעתך` *(HE)*
- `Built a demo for {brands/agencies like company} — 30 sec look?` *(EN)*
- `Validating an idea — 10 min of your time?` *(EN)*

### Body — Hebrew
> היי {first_name},
>
> בניתי דמו של **Influradar** — מנוע גילוי משפיענים ישראלים ל{מותגים/סוכנויות}. במקום להסביר במייל, יותר קל פשוט להראות:
>
> 👉 **{demo_url}** *(30 שניות, בלי הרשמה, עברית מלאה)*
>
> מה תראה/י שם:
> • חיפוש יוצרים לפי נישה, גודל קהל, אזור ושפה
> • דאטה ישראלית אמיתית (נטענה ידנית בשלב הזה)
> • workflow של רשימות + השוואה — בנוי ל{תהליך עבודה במותג / סוכנות}
>
> פניתי אליך כי {personalized_reason}.
>
> **השאלה:** אחרי שתסתכל/י — האם זה נראה כמו משהו ש{company} הייתה משתמשת בו? מה הכי חסר?
>
> תשובה של 2 שורות בכתב מצוינת. שיחת זום של 10 דק׳ גם אפשרית אם נוח לך יותר.
>
> ואם זה לגמרי לא רלוונטי — גם זו תשובה מועילה 🙏
>
> תודה,
> רועי

### Body — English
> Hi {first_name},
>
> I built a demo of **Influradar** — an Israeli-influencer discovery engine for {brands/agencies}. Easier to show than explain:
>
> 👉 **{demo_url}** *(30 sec, no signup, fully in Hebrew)*
>
> What you'll see:
> • Creator search by niche, audience size, region, language
> • Real Israeli data (manually seeded for now)
> • Lists + comparison workflow built for the {brand / agency} flow
>
> Reaching out because {personalized_reason}.
>
> **The ask:** after a look — does this look like something {company} would use? What's the biggest thing missing?
>
> A two-line written reply is great. Happy to do a 10-min Zoom instead if easier.
>
> And if it's totally not relevant — that's a useful answer too 🙏
>
> Thanks,
> Roei

---

## 4. Follow-up sequence

Send only if no reply. Keep each bump shorter than the previous.

### Day 4 — soft bump (Hebrew)
> {first_name}, רק מוודא שהמייל הקודם לא נבלע. הדמו פה אם תרצה/י הצצה של 30 שניות: {demo_url}
>
> גם "לא רלוונטי" עוזר לי 🙏

### Day 4 — soft bump (English)
> {first_name}, just making sure the previous note didn't get buried. Demo here if you want a 30-second look: {demo_url}
>
> Even a "not relevant" helps me 🙏

### Day 10 — final close-out (Hebrew)
> {first_name}, אני סוגר את סבב הפידבק הראשון השבוע. אם זה רלוונטי — שורה אחת ממך תעשה הבדל. אם לא — אאסוף לעצמי שזה לא הקהל הנכון, וזה גם בסדר. תודה!

### Day 10 — final close-out (English)
> {first_name}, I'm closing the first feedback round this week. If this is relevant — one line from you would make a real difference. If not — I'll take that as "wrong audience," which is also useful. Thanks!

---

## Operational notes

1. **Personalization is the lever.** Fully templated cold messages get ~1–3% reply rates; one researched line per prospect (`{personalized_reason}`) pushes it to 10–20%. Worth the time.
2. **LinkedIn rate limits.** ~20–25 connection requests/day from a warm account before throttling. Email scales better for volume.
3. **Track replies by template + channel** (sheet or Notion is fine for the first ~100 sends). Columns: name, company, channel, template variant, sent date, replied (Y/N), sentiment, would-pay signal.
4. **Add product analytics to the demo** (PostHog or Plausible — free tier). Non-repliers still leave signal: time on page, filters touched, did they reach the lists view.
5. **Pre-populate the demo with a "wow" default state.** First 3 seconds determine whether they stay. Show a hot-niche search result, not an empty search box.
6. **Mobile check.** Many LinkedIn DMs open on phones — verify the demo's first 5 seconds on mobile.
7. **The 3-question DM format doubles as a survey.** Some people will reply with answers instead of taking a call — that's still gold.

## Channel-specific gotchas

- **LinkedIn connection notes:** 200-char hard limit (free accounts). Test in LinkedIn UI before bulk send — emoji and Hebrew characters can push you over.
- **LinkedIn DMs:** no formatting (bold/italic strip out). Use line breaks for structure.
- **Email:** Hebrew + emoji subject lines hit spam filters more aggressively. Warm up the sender domain first (SPF/DKIM/DMARC) and ramp send volume gradually (~20/day for week 1).
