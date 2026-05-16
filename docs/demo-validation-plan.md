# Zarkor — Demo Validation Plan

Working document capturing decisions for the cold-outreach validation round whose goal is to determine whether Zarkor is a viable idea worth implementing.

---

## 1. Validation goal

Send static landing pages to a cold list of Israeli brands and agencies and measure whether the *idea* is viable — not whether features are polished. Output: a yes/no on "should we build this."

Signals we're listening for:
- Cold-email reply rate (positioning works / doesn't).
- Of replies: how many book a 15-minute Calendly call (real interest vs. politeness).
- On calls: what feature/promise they latch onto first (tells us the wedge).
- "Would you pay ₪89–209/month for this?" — meaningfully answered only in conversation.

---

## 2. Audiences

Three target audiences, two landing variants.

| Audience | Description | Landing variant | Outreach framing |
|---|---|---|---|
| **SMB brands** | Stores, restaurants, small local D2C. Founder or one in-house marketer does sourcing themselves. No agency. Don't know global tools (Modash/Heepsy) exist. | Niche brand landing (`/landing/food/`, `/landing/beauty/`, etc.) | "Find Tel Aviv creators that actually drive customers." |
| **Agencies** | Israeli influencer-marketing agencies running campaigns weekly for multiple clients. Know global tools, frustrated by their poor IL coverage. | Agency landing (`/landing/agency/`) | "30 vetted IL creators in 30 minutes, not 12 hours." |
| **Enterprise brands** | Castro, Strauss, Super-Pharm, Fox, etc. In-house marketing team that behaves like an agency internally. Know global tools. Often use an agency today. | **Same as agency landing** — no separate variant in this round. | "For marketing teams running multiple influencer campaigns at once." |

Roughly 50/50 split between brand-side (SMB + enterprise) and agency-side for this validation round.

### Why no separate enterprise variant
- Enterprise sales cycles are 3–6 months — they won't return viability validation in this timeframe.
- Enterprise marketing teams operate like agencies internally (campaigns, briefs, multi-stakeholder, reporting). Agency landing's framing maps cleanly.
- A third variant costs ~3 days; better to spend that on the two we're committed to.
- If a specific enterprise contact signals interest, build a variant THEN based on what they said.

---

## 3. Messaging consistency rule (important)

**No anti-agency framing anywhere in the public landings.** Specifically:
- Brand niche pages do NOT say "stop paying agency retainers," "cut the middleman," "save ₪38K vs. agency," etc. SMBs don't have agencies; enterprise brands shouldn't see anti-agency copy from a tool that also markets to agencies.
- Agency landing positions the tool as their workflow accelerator, not as something that helps their clients fire them.
- Enterprise contacts viewing the agency landing see "for influencer marketing teams" — neutral.

If an internal user later decides to use the tool to reduce agency reliance, that's their choice. We don't advertise it.

---

## 4. Consumption mode

- **Cold + self-serve.** Send link in a cold email, hope they click, hope they book a call or reply.
- **Single Calendly link** as the primary conversion CTA. Phone-call event type — Calendly captures their number and Roei calls them.
- **No tour mode, no onboarding overlay, no interactive feedback widget.** The landing IS the artifact.
- **Realistic funnel assumption:** ~100 sent → ~15 click → ~8 actually read → ~3 book a call. Plan list sizes accordingly (100+ per audience).
- **No tracking** (no UTM params, no analytics pixel, no logged per-recipient tracking links). At 100-email scale, the Calendly intake form provides enough segmentation. Stay lean. **One CSV mail-merge field is allowed** (`{name}`, optionally `{business}`) — a merge field is personalization, not tracking; it's never logged or used to identify who clicked. See §16.
- **Cosmetic landing personalization is allowed** (`?b=` query param → client-side greeting). This is explicitly carved out of the "no per-recipient links" rule: the param is *never logged, never sent anywhere, no analytics* — it only renders a greeting in the browser. The §4 rule exists to prevent surveillance, not a hello. A missing/shared param degrades silently to the generic page. See §16.

### Implication: the landing page does ~100% of the work
There is no clickable demo behind it. What the cold visitor sees on the landing page IS the entire product story. Selling-point priority must be ruthless.

---

## 5. Demo format decision — landing-only with HTML-as-preview blocks

**The clickable demo is dropped from the cold-outreach funnel.**

### Why
- Broken interactions (search, sort, filters, "Send brief" modal, "Reset filters" button) actively damage credibility — cold visitors pattern-match to "vaporware."
- 30-second attention budget can't be served by a clickable demo where the visitor wanders into half-built pages (e.g. "Briefs sent" placeholder).
- Mobile experience: a screenshot-scroll landing is excellent on phones; sidebar-filter demo UX is awkward.
- Conversion goal is **calls booked**, not "demo engagement." Focused landing converts better than sprawling exploration.
- Industry pattern: pre-launch SaaS (Linear, Notion, Resend, Vercel) all use this shape. Cold prospects pattern-match to "real product."

### How
- Each feature claim is paired with an **HTML preview block** — actual rendered HTML styled to *look like* a screenshot of the product (browser chrome on the hero preview, plain rounded frames on the rest).
- `pointer-events: none` on the preview body so nothing inside is clickable. There are no broken interactions because there are no interactions.
- Browser-chrome treatment on the hero preview only (macOS-style dots + faked URL bar); plain rounded frame on subsequent preview blocks (prevents repetition fatigue).
- Layout: alternating side-by-side on desktop (text-left / preview-right, then flipped), stacked on mobile.

### Fidelity standard — DECIDED
- **No pixel-matching to `/food/demo/`.** Standard is "evocative, clearly-our-product screenshot," not a faithful clone. Copy markup/CSS from the demo where it's convenient, but there is no obligation to match it.
- Previews live **only in the landing pages**, never surfaced in the demo. The demo will NOT be shown on validation calls (Roei confirmed) — so a preview depicting unbuilt UI carries no "now show me" liability on the call.

### Fabricated vs. real previews — DECIDED
- **Food landing — all 4 previews depict features that exist in `/food/demo/`** (competitor mentions, engagement metrics, brief modal, saved lists). Real screenshots.
- **Agency landing — 2 of 5 are real** (filter+grid, HE creator card). **3 are forward-looking concept UI** (multi-client workspace switcher, bulk briefs, white-label PDF export) — these exist nowhere in code. Accepted: render them clean but deliberately simpler/lower-detail than the real-feature previews, creating an honest "built vs. headed-there" visual hierarchy and cutting build time on the hardest three. Comfortable because the demo is never shown on calls and the Calendly framing is explicitly research, not a product pitch.

### What stays around but unlinked
- The old `/food/demo/` directory — kept on disk, no link from any landing. May be useful as visual reference or for showing in a call if a prospect wants to dig in.
- Old root demo files (`/app.html`, `/profile.html`, `/lists.html`, `/pricing.html`) — kept on disk, unlinked.

---

## 6. Directory structure & isolation rule

```
/landing/
  styles.css                — landing-only CSS (tokens + components). Shared across sibling landings.
  i18n.js                   — landing-only translations. Shared across sibling landings.
  agency/
    index.html              — agency landing (NEW)
  food/
    index.html              — food brand landing (NEW)
  beauty/, health/, electronics/  — DEFERRED until those niches have real creator data

/index.html                 — DELETE (was old agency landing). No root redirect.
/food/index.html            — DELETE (was old brand landing — replaced by /landing/food/).
/food/demo/                 — KEPT, unlinked.
/app.html, profile.html, lists.html, pricing.html  — KEPT, unlinked (old agency demo).
```

### Isolation rule
- **Nothing in `/landing/` loads anything from outside `/landing/`.** No `<link>` or `<script>` references to `/styles.css`, `/i18n.js`, `/niche-demo.js`, etc.
- **Within `/landing/`, sibling landings share** `styles.css` and `i18n.js`. Tokens, components, and translations are all in those shared files.
- **The demo doesn't load anything from `/landing/`** either. Demo keeps its existing `/styles.css` and `/i18n.js`.
- If a landing component visually resembles a demo component (e.g. card layout), the LANDING component is implemented in `/landing/styles.css` from scratch. No CSS-class reuse across the boundary.

---

## 7. Selling points — hero vs. supporting tier

### SMB BRANDS (niche landings — `/landing/food/`, future `/landing/beauty/`, etc.)

**Hero tier (above the fold):**
1. **"See which creators are already posting about places like yours."** *(M1 — competitor visibility, ON TOP)*
   - Concrete, viscerally actionable, bypasses tool-comparison framing.
2. **"Find Israeli [niche] creators who actually drive customers."**
   - Names the outcome (drive customers) and the niche (locality-aware).

**Supporting tier (feature rows below):**
- Real engagement metrics (ER, posting cadence, language mix from captions — *not* audience demographics, which require creator opt-in)
- Saved lists / status tracking
- Brief modal — outreach in brand voice, from brand email
- Hebrew-native UI
- Inline pricing block (§9)

**Killed entirely from brand pages:**
- Audience-overlap matching (undeliverable from BDA)
- Follower authenticity score (undeliverable)
- Brand-safety screening (undeliverable)
- "Stop paying agency retainers" / "Cut the middleman" (SMBs have no agency; conflicts with §3)
- "Israeli coverage global tools miss" (SMBs don't know global tools)

### AGENCIES (`/landing/agency/`)

**Hero tier:**
1. **"30 vetted IL creators in 30 minutes, not 12 hours."**
2. **"Israeli creator coverage that global tools miss."** *(works here — agencies know about Modash/Heepsy)*

**Supporting tier:**
- Multi-client workspaces (workspace switcher, separate projects per client)
- White-label PDF exports for client meetings
- Bulk briefs (send 20 in one workflow)
- No commission — keep your full margin
- Hebrew-native UI
- Inline pricing block (§9)

**Killed entirely:** same three undeliverables as brands (overlap, authenticity, brand-safety).

---

## 8. Hero copy — drafts

### Food brand landing (`/landing/food/`)

- **Eyebrow:** `For Israeli food brands, restaurants & cafés`
- **H1:** `Find <grad>food creators</grad> who already post about places like yours.`
- **Lede:** `Search thousands of Israeli creators by city, niche, and engagement. See which ones already tag your competitors. Reach out from your brand — no agency, no commission, no guessing.`

### Agency landing (`/landing/agency/`)

- **Eyebrow:** `For Israeli influencer-marketing agencies`
- **H1:** `30 vetted <grad>Israeli creators</grad> in 30 minutes — not 12 hours of scrolling.`
- **Lede:** `Search thousands of Israeli creators by niche, city, and engagement. Hebrew-native bio search that global tools miss. Multi-client workspaces, bulk briefs, white-label PDF exports for client meetings.`

### CTAs (both landings)

- Primary: `Book 15 min` → Calendly
- Below button (small muted text): *Or just reply to my email — happy either way.*

The "11,400+ creators indexed" number is dropped from both unless we can defend it; the lede uses "thousands of" instead.

---

## 9. Page structure (single scrollable page, ~7 sections)

```
1. Hero               — eyebrow + h1 + lede + Calendly CTA + reply softener
2. Founder note       — replaces "Mockup, Inc." testimonial (§10)
3. Feature row 1      — competitor visibility (HTML preview)
4. Feature row 2      — real engagement metrics (HTML preview)
5. Feature row 3      — outreach in your voice (HTML preview)
6. Feature row 4      — saved lists / pipeline tracking (HTML preview)
7. Inline pricing     — 3 tier cards, 1 line note, shared Calendly CTA (§11)
8. Final CTA strip    — last-chance Book 15 min + reply softener
```

Agency landing replaces feature rows 3 & 4 with:
- Row 3: Multi-client workspace switcher
- Row 4: Bulk briefs / white-label PDF export

### HTML preview block pattern

```html
<div class="preview-frame">
  <div class="preview-chrome">
    <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
    <span class="url">zarkor.app/discover</span>
  </div>
  <div class="preview-body">
    <!-- card/profile/modal markup, copied (not linked) from demo. New class names. -->
  </div>
</div>
```

- `pointer-events: none` on `.preview-body`.
- Browser chrome only on Hero preview. Plain rounded frame on subsequent rows.

---

## 10. Trust signals

**Drop entirely:**
- Fake "trusted by" logos strip (`logo-fake` placeholders).
- "Mockup, Inc." and "Mockup Brand Co." testimonial blocks.
- Unsourced stats: "12 hrs saved per campaign," "94% real-audience score," "₪38K saved per quarter," etc. None are defensible from real data.
- "11,400+ creators indexed" — dropped from hero stat strip unless defensible.

**Add:**
- **Founder note section** replacing the testimonial slot. Headshot + signed note from Roei. **Audience-tailored** — one swapped clause between the two landings, same structure.

**Food landing — FINAL copy:**

> **I'm Roei.** I'm building Zarkor because every Israeli brand team I've talked to said the same thing: finding local creators who actually move customers is slow, manual, and mostly guesswork. I'm not selling anything yet — I'm running 15-minute calls with brands and agencies to learn what's really broken before I build more. If sourcing Israeli creators is a pain for you, I'd genuinely like to hear about it.
>
> — *Roei, founder*

**Agency landing — FINAL copy** (swapped clause in **bold**):

> **I'm Roei.** I'm building Zarkor because **every agency I've talked to said the same thing: the global tools barely cover Israel, so half the sourcing work is still manual.** I'm not selling anything yet — I'm running 15-minute calls with brands and agencies to learn what's really broken before I build more. If sourcing Israeli creators is a pain for you, I'd genuinely like to hear about it.
>
> — *Roei, founder*

HE version mirrors each variant via `i18n.js`.

**Headshot:** Roei will provide a real photo later. Build a clean **monogram placeholder** ("R" in a circle, brand color) in the photo slot in the interim — a fake stock face is worse than an honest monogram for an honesty-framed note. Photo drops into the same slot when ready, no layout change.

The founder-note pattern converts the "no real customer yet" weakness into an honesty signal — and matches the Calendly description's "no pitch, no sale" framing. Consistent narrative across the page.

---

## 11. Inline pricing block

### Tier values for cold validation round

| Tier | Was | **Validation price — FINAL** | Notes |
|---|---|---|---|
| Starter | ₪119/mo | **₪89/mo** | Took the floor — sub-₪90 minimizes price-based bounce. Not a price commitment; raise post-validation. |
| Pro | ₪209/mo | **₪209/mo** | Unchanged. |
| Agency | ₪319/mo (TBC) | **₪349/mo** | Resolved up from ₪319 — agencies are least price-sensitive (they bill clients), and a higher agency anchor makes Pro read as the value pick for in-house brand teams. |

The lower Starter price reduces "too expensive" as a rejection reason during validation. You're testing whether the IDEA is viable, not optimizing price.

### Tier card simplification on brand landings

**Remove from the Starter card on brand-niche landings** any greyed-out feature lines that are:
- **Undeliverable** (e.g., "audience credibility scores")
- **Agency-only** (e.g., "multi-client workspaces")

Reason: SMBs reading the Starter card don't recognize these features as relevant. Greyed-out lines that don't apply to them just create noise. Keep only feature differentiators that an SMB brand actually cares about (e.g. seat count, profile views/mo, brief intros/mo, HE+EN UI).

The agency landing's pricing block keeps the full feature differentiation including multi-client and PDF export (those are real selling points for that audience).

### Pricing block layout
- 3 tier cards in a tight grid.
- 1 line above the cards: *"Early-access: 40% off your first 6 months for the first 50 customers."*
- 1 shared Calendly CTA below the grid: `Book 15 min →`
- No FAQ inline. (FAQ section is dropped — adds page length without cold-conversion value.)
- The standalone `/pricing.html` and `/food/demo/pricing.html` stay on disk, unlinked. Not part of the validation funnel.

---

## 12. Calendly setup

### Event type
- **15 minutes, phone call.** Invitee leaves their number; Roei calls them. (Lower friction than Zoom for older brand owners.)

### Meeting description (single field, bilingual)

> **שיחה של 15 דקות בטלפון. אני מתקשר למספר שתשאיר/י.**
>
> אני רועי, בונה את Zarkor — כלי לחיפוש משפיענים ישראלים. הייתי שמח 15 דקות מהזמן שלך כדי להבין איך את/ה (או הצוות) מאתר/ים היום קריאיטורים, מה כואב בתהליך, והאם מה שאני בונה באמת יעזור. בלי מצגת, בלי מכירה — אני אוסף קלט מצוותי מותגים וסוכנויות לפני שאני קובע מה לבנות הלאה.
>
> ---
>
> **15-minute phone call. I'll call the number you provide.**
>
> I'm Roei, building Zarkor — a tool for sourcing Israeli influencers. I'd love 15 minutes to hear how you (or your team) currently find creators, what's painful, and whether what I'm building would actually help. No pitch, no sale — gathering input from brand and agency teams before deciding what to build next.

### Invitee questions (3 required + 1 optional)

1. **(Required, single-select)** "Are you on the brand or agency side?"
   - Brand / in-house marketing
   - Influencer-marketing agency
   - In-house at a large brand
   - Other
2. **(Required, short text)** "What's your company, and what's your role?"
3. **(Required, single-select)** "How do you currently find influencers?"
   - Manually on Instagram
   - Through an agency
   - Using a tool *(which one?)*
   - We don't do influencer marketing yet
   - Other
4. **(Optional, short text)** "Anything specific you'd like to discuss? Features you wish existed, current frustrations, etc."

Phone, name, and email are automatically captured by Calendly's phone-call event type.

### Where the Calendly link lives in the landing
- Hero CTA (primary)
- Pricing block CTA (single shared button below the tier grid)
- Final CTA strip (last-chance closer at page bottom)

All three CTAs go to the SAME Calendly URL. The "or just reply to my email — happy either way" softener appears below each CTA in small muted text.

---

## 13. Outstanding work before any cold send

### Phase 0 — Rebrand Influradar → Zarkor (do first; touches everything downstream)

- [ ] Decide on a wordmark/logo treatment for "Zarkor" (even a clean type-only wordmark is fine for validation — no need for a designed logo).
- [ ] Replace "Influradar" → "Zarkor" in all NEW landing copy, page `<title>`, founder note, preview chrome URL (`zarkor.app/discover`), inline pricing.
- [ ] Replace "Influradar" → "Zarkor" in surviving artifacts that a prospect could reach: `/food/demo/` (kept, unlinked — but may be shown later), README.md, any `assets/` brand strings, Calendly description (§12), Calendly account/event name.
- [ ] Repo/dir naming (`projects/influradar`, worktree paths) is cosmetic and internal — rename opportunistically, not blocking.
- [ ] Point `zarkor.app` at the Vercel deployment; verify HTTPS (`.app` is HSTS-preloaded — HTTP will hard-fail, this is expected).

### Phase 1 — Build new landings (NEW DIRECTORY)

**`/landing/styles.css`:**
- [ ] Build from scratch: design tokens (colors, type scale, button base), preview-frame components, feature-row layouts, hero, pricing-block. Fully isolated from `/styles.css`.

**`/landing/i18n.js`:**
- [ ] Landing-only translations. Copy or rewrite from `/i18n.js` as needed — no link.

**`/landing/` cosmetic personalization (shared, per §16 Q20):**
- [ ] Tiny isolated JS (inline or `/landing/personalize.js`, NOT linked to demo): read `?b=` param, URL-decode, inject greeting into the thin bar above the Founder Note on both landings. No param / empty / shared → render nothing, no layout shift. No logging, no network, no analytics.

**`/landing/agency/index.html`:**
- [ ] Build from scratch using hero copy in §8 + page structure in §9.
- [ ] 5 HTML preview blocks: filter+grid, HE creator card (both full-fidelity, real features), workspace switcher, bulk briefs, white-label PDF mockup (these 3 = simpler concept-fidelity).
- [ ] **White-label PDF mockup contents (APPROVED):** agency logo top-left · title "Campaign shortlist for [Client]" · 5–6 creator rows, each with photo, handle, followers, ER, 3 sample-post thumbnails · footer "Prepared by [Agency] via Zarkor."
- [ ] Inline pricing block per §11.
- [ ] Founder note section per §10.

**`/landing/food/index.html`:**
- [ ] Build from scratch using hero copy in §8 + page structure in §9.
- [ ] 4 HTML preview blocks: card with competitor mentions, engagement sparkline, brief modal, saved lists.
- [ ] Inline pricing block per §11 with brand-card simplification (no overlap/multi-client greyed-out lines).
- [ ] Founder note section per §10.
- [ ] Source preview content from `niche-demo.js` data (food creators: Linor Levanter, Maya Agassi, Romi Avni, etc.) — but rewrite the HTML markup with new class names, do not link to demo HTML.
- [ ] Tune `@nitzanjerbi` ER value 33.0% → **13%** (locked). Use this creator **only on the agency HE-card preview** (where ER is incidental); keep out of food's engagement preview entirely.
- [ ] Previews are intentionally **all-strong** — no deliberately-mediocre "honesty cue" creator (considered and rejected; would weaken the hero punch). Don't add one later thinking it improves credibility.

### Phase 2 — Delete obsolete files

- [ ] Delete `/index.html` (old agency landing — replaced by `/landing/agency/`).
- [ ] Delete `/food/index.html` (old brand landing — replaced by `/landing/food/`).
- [ ] **Do NOT delete** `/food/demo/`, `/app.html`, `/profile.html`, `/lists.html`, `/pricing.html` — keep around, unlinked.

### Phase 3 — Calendly setup
- [ ] Finish the Calendly account setup (in progress — user mentioned this).
- [ ] Configure 15-min phone-call event with description and invitee questions per §12.
- [ ] Paste the Calendly URL into all three CTA slots in both landings.

### Skip (not in scope before send)
- `/landing/beauty/`, `/landing/health/`, `/landing/electronics/` — only food has real creator data. These wait.
- Root redirect — not needed. `/` can 404 or stay as the old (soon-to-be-deleted) agency landing temporarily; cold links go directly to `/landing/agency/` or `/landing/food/`.

---

## 14. Outreach mechanics (to plan separately)

Open items, downstream of "the landings are ready":
- Cold list sources for SMB food brands (where do we find 100+ Tel Aviv restaurants / cafés?).
- Cold list sources for agencies (~200 in Israel — directories, LinkedIn, IL marketing forums).
- ~~Cold email template per audience~~ — **RESOLVED, see §16.**
- ~~Outreach send cadence (drip vs. batch)~~ — see follow-up cadence below.

### Follow-up cadence & deliverability — migrated from the (now-deleted) `docs/outreach/validation-templates.md`

That file predated §15/§16 and mostly contradicted the final plan (it assumed
a clickable demo as the hook, the retired `*.vercel.app` URL, UTM tracking,
and demo-side analytics — all explicitly rejected). It was deleted. Only the
two genuinely-useful, plan-consistent operational notes were salvaged here.

**Bump sequence (send only if no reply; each bump shorter than the last; same
personal Gmail thread; link = the landing, never a demo; no UTM; `{שם}`/`{name}`
merge only).** Two bumps total — past Day 10 it's noise.

- **Day 4 — soft bump (HE):** `{שם}, רק מוודא שהמייל הקודם לא נבלע. הדף כאן אם בא לך הצצה: [קישור]. גם ״לא רלוונטי״ עוזר לי 🙏`
- **Day 4 — soft bump (EN):** `{name}, just making sure the last note didn't get buried. The page is here if you want a look: [link]. Even a "not relevant" helps me 🙏`
- **Day 10 — close-out (HE):** `{שם}, אני סוגר את סבב הפידבק הראשון השבוע. אם זה רלוונטי — שורה אחת ממך תעשה הבדל. אם לא — אאסוף שזה לא הקהל הנכון, וזה גם בסדר. תודה!`
- **Day 10 — close-out (EN):** `{name}, I'm closing the first feedback round this week. If this is relevant, one line from you would make a real difference. If not, I'll take that as "wrong audience" — also useful. Thanks!`

**Deliverability / volume ramp.** The from-address is a personal Gmail (§16),
so SPF/DKIM/DMARC are Google's problem, not ours — but a personal Gmail still
gets flagged for sudden cold volume. Ramp: ~20/day in week 1, then scale
gradually; don't fire 100 in a day from a cold-started thread pattern. Keep
subject lines emoji-free (the §16 subjects already are — deliberate: Hebrew +
emoji subjects trip spam filters harder). Batch-drip ~20–30/day rather than
one big blast.

---

## 15. Deferred (not in this round)

- **Round 1 scope CONFIRMED: food + agency only.** Health and beauty are the explicitly-planned *next* niches (Round 2), once each has hand-collected real creator data — not electronics first. Build them only after Round 1 gives a viability signal worth extending.
- Third landing variant for enterprise brands. Build only if a specific enterprise contact signals interest.
- Audience-overlap matching as a real feature. Revisit when brand + creator IG tokens are wired and what's computable becomes clear.
- Follower authenticity scoring. Revisit if/when follower-profile sampling becomes legally + technically feasible.
- Rate transparency / typical creator pricing. Available only after creators opt in and self-report (Phase 2 of token plan).
- In-product feedback widget, tour mode, onboarding flow. Cold self-serve doesn't need them.
- Tracking (UTM, analytics pixel, logged per-recipient tracking links). At 100-email scale, Calendly intake form is enough. *(Note: a single `{name}`/`{business}` CSV merge field IS allowed — that's personalization, not tracking. See §4 + §16.)*
- Cleanup of `/food/demo/` audience-overlap UI. The demo is no longer in the cold funnel — cleanup deferred until demo is reactivated for any purpose.
- Cleanup of `/beauty/`, `/health/`, `/electronics/` demos. Waiting on real creator data per niche.
- Standalone `/pricing.html` and `/food/demo/pricing.html` pages — kept on disk, not part of the validation flow.

### Domain & brand — DECIDED (supersedes earlier "free vercel.app" call)

- **Brand name: `Zarkor`.** Replaces "Influradar" everywhere — landings, demo, Calendly, README, assets, page titles, founder note, preview chrome.
- **Domain purchased: `zarkor.app`** (custom domain, owned). Landings ship at `zarkor.app/landing/food/` and `zarkor.app/landing/agency/`.
- **Technical note:** the `.app` gTLD is on the HSTS preload list — **HTTPS-only, no plaintext fallback**. Vercel provisions TLS automatically, so this is a non-issue in practice; just don't hand-write any `http://zarkor.app` links anywhere (always `https://`).
- **Calendly white-labeling still skipped** — free-tier `calendly.com/...` link is fine for validation. Owning the domain doesn't change that.
- **Email stays personal Gmail** (§16) — owning `@zarkor.app` mail is deliberately *not* set up; the founder-research framing wants a personal address.
- This also retires the Q21 deliverability concern about bare `*.vercel.app` links — `zarkor.app` is a real owned domain, not a flagged free host.

---

## 16. Cold email templates — FINAL

Resolved here rather than deferred (§14): the email earns the entire top of the funnel. A perfect landing converts zero people who never click.

### Decisions
- **Language: Hebrew primary.** Cold IL SMB founders and agency owners reply to Hebrew at multiples of English. An EN version exists as a fallback for clearly-English-facing recipients only.
- **One merge field allowed:** `{שם}` / `{name}` (recipient first name) is the primary merge; `{עסק}` / `{business}` is an optional second weave, used **only when list data is clean** — a wrong business name converts worse than none. This is NOT a reversal of the §4 no-tracking rule: a CSV merge field is not a UTM param, pixel, or logged per-recipient link. See reconciled wording in §4 / §15.
- **Split subject lines by audience:** plain-curiosity for brands (curiosity outperforms for cold IL founders), outcome-led for agencies (they respond to the coverage-gap hook).
- **Link target: the landing page, not Calendly.** The landing sells; Calendly is one click deeper. The "or just reply" line is the zero-friction path for non-clickers.
- **From: personal Gmail (`roei.avrahami2@gmail.com`).** Coherent with the §10 founder-research framing; a polished `@zarkor.app` blast would clash with "I'm not selling anything yet." (Domain is owned but email stays personal — deliberate.)
- **Length: 4 sentences.** Who I am → why them → one link → frictionless out.

### Food / brand

**Subject (HE):** `שאלה קצרה על איך אתם מאתרים משפיענים`
**Subject (EN):** `A quick question about how you find influencers`

> **HE:**
> היי {שם},
> אני רועי, בונה כלי שעוזר למותגים ישראלים כמו {עסק} למצוא קריאיטורים מקומיים — בלי סוכנות ובלי לנחש. עשיתי דף קצר שמראה איך זה נראה: [קישור]. אם איתור משפיענים זה כאב ראש אצלכם, אשמח ל-15 דקות בטלפון לשמוע איך אתם עושים את זה היום — בלי מצגת, בלי מכירה. או פשוט תגיבו למייל, גם זה מעולה.
> רועי

> **EN:**
> Hi {name},
> I'm Roei — I'm building a tool that helps Israeli brands like {business} find local creators, without an agency and without guessing. I put together a short page showing what it looks like: [link]. If sourcing influencers is a headache for you, I'd love 15 minutes by phone to hear how you do it today — no pitch, no sale. Or just reply to this email, that works too.
> Roei

*(`{עסק}`/`{business}` clause is droppable to "מותגים ישראלים" / "Israeli brands" when list data is unreliable.)*

### Agency

**Subject (HE):** `קריאיטורים ישראלים שהכלים הגלובליים מפספסים`
**Subject (EN):** `Israeli creators the global tools miss`

> **HE:**
> היי {שם},
> אני רועי, בונה כלי שנותן לסוכנויות כיסוי אמיתי של קריאיטורים ישראלים — מה שהכלים הגלובליים (Modash/Heepsy) מפספסים. עשיתי דף קצר שמראה איך זה נראה: [קישור]. אם כיסוי ישראלי וזמן איתור זה כאב אצלכם, אשמח ל-15 דקות בטלפון לשמוע איך הצוות שלכם עובד היום — בלי מצגת, בלי מכירה. או פשוט תגיבו למייל.
> רועי

> **EN:**
> Hi {name},
> I'm Roei — I'm building a tool that gives agencies real Israeli creator coverage, the part global tools (Modash/Heepsy) barely touch. I put together a short page showing what it looks like: [link]. If Israeli coverage and sourcing time are pain points for your team, I'd love 15 minutes by phone to hear how you work today — no pitch, no sale. Or just reply to this email.
> Roei

`[קישור]`/`[link]` = `zarkor.app/landing/food/?b={business}` or `zarkor.app/landing/agency/?b={business}` (the `?b=` drives the cosmetic landing greeting, below). Drop the `?b=` param when `{business}` is unreliable — the landing falls back to the generic page silently.

### Additional merge decisions (Q20)

**Hot tier — DECIDED.** The food list splits in two:
- **Hot tier (~15 dream leads):** hand-written opener naming a real IL food creator who already posts about places like theirs — *"שמתי לב ש-{קריאיטור} כבר מתייגת מקומות כמוכם…"* / *"I noticed {creator} already tags places like yours…"*. This is the M1 hero delivered 1:1 and the **single highest-signal personalization in the whole plan**. Manual research (~2–4 min/lead), not a CSV merge. A few deep conversations from this tier beat a wide thin blast for a viability yes/no.
- **Cold blast (~85 leads):** the §16 template with `{name}` + conditional `{business}` only.
- Agency list stays one uniform blast (no hot tier — the agency hook is the coverage gap, not a specific creator).

**`{city}` — REJECTED.** Marginal lift, extra list-hygiene burden. Not added.

### Landing cosmetic personalization — DECIDED (`?b=`)

- Email link carries `?b={business}` (URL-encoded). Isolated JS inside `/landing/` reads the param and injects a greeting into **one subtle slot only** — a thin bar directly above the Founder Note (§10), e.g. *"היי {עסק} 👋 — הדף הזה למותגים כמוכם."* Never the H1, never the hero.
- **Hard fallback:** no param, empty param, or shared link → the bar does not render at all; page is the clean generic version. No layout shift.
- **No logging, no analytics, no network call.** Pure client-side string render. This is the §4 carve-out — cosmetic, not tracking.
- Lives in `/landing/` only (respects §6 isolation — does not touch the demo).

---

## 17. Preview content map — APPROVED (Q22)

Concrete content for every preview block. Sourced from real `niche-demo.js` data. Builder follows this exactly; no creator substitutions without re-decision.

### Food landing — 4 previews, full fidelity, real data

| # | Preview | Content |
|---|---|---|
| 1 | Competitor visibility *(M1 hero)* | 3-card grid: **Linor Levanter** (115K), **Romi Avni** (30K), **Maya Agassi** (4.0K). Each card shows a "כבר עבדה עם" brand-logo row with recognizable IL food brands (Skinny Pasta IL, Taubread, Legenda Gelato). |
| 2 | Real engagement metrics | **Romi Avni** detail: ER 7.7%, 30K followers, ~1.5 posts/wk, HE/EN caption-mix bar. No outliers shown. |
| 3 | Brief modal | Pantry & Co. → **Maya Agassi**, brand-voice draft pre-filled, "from your email" line visible. |
| 4 | Saved lists / pipeline | "Pantry & Co. — Spring shortlist": 4–5 saved creators, status chips (To contact / Contacted / Replied). |

### Agency landing — 5 previews

| # | Preview | Fidelity | Content |
|---|---|---|---|
| 1 | Filter + grid | Full (real) | Filters sidebar (city, niche, ER range, follower range, Hebrew bio search) + result grid. |
| 2 | HE creator card | Full (real) | RTL Hebrew card, Hebrew bio-search match highlighted — **ניצן ג׳רבי דרפלר**, ER shown as **13%** (tuned). |
| 3 | Workspace switcher | Concept | Top-bar dropdown: "Pantry & Co. ▾ / Client B / Client C", isolated projects. |
| 4 | Bulk briefs | Concept | Select 20 → one "Send 20 briefs" action + confirmation state. |
| 5 | White-label PDF | Concept | Per §13 spec (agency logo · "Campaign shortlist for [Client]" · 5–6 creator rows · footer "Prepared by [Agency] via Zarkor"). |

### Locked rules
- `@nitzanjerbi` ER = **13%**, used **only** on agency preview #2. Never in food preview #2.
- All previews are **intentionally all-strong**. No mediocre "honesty cue" creator (considered, rejected — weakens hero).
- All creator data traces to `niche-demo.js`; markup rewritten with new class names, not linked (§6 isolation).
