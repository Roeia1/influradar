# Zarkor — cold-outreach validation landings

Static, no-backend, no-build HTML/CSS/JS. The deliverable for this round is
**two landing pages** sent in cold emails to Israeli brands and agencies, to
test whether the idea is worth building. Full rationale and every decision
live in [`docs/demo-validation-plan.md`](docs/demo-validation-plan.md) — that
document is the spec; this README is just the map.

> Renamed from **Influradar → Zarkor**. Domain **`zarkor.app`** is owned
> (Vercel auto-provisions TLS; `.app` is HSTS-preloaded, so always link
> `https://`, never `http://`).

## The validation artifact: `/landing/`

| Path | Purpose |
|------|---------|
| `landing/food/index.html` | Food-brand landing — sent to SMB food brands, restaurants, cafés |
| `landing/agency/index.html` | Agency landing — sent to agencies & enterprise marketing teams |
| `landing/styles.css` | Isolated design system, shared by both landings |
| `landing/i18n.js` | Isolated EN⇄HE translations + RTL toggle (Hebrew default) |
| `landing/personalize.js` | Cosmetic `?name=` founder-note greeting — no logging, no analytics, no network |

**Isolation rule (plan §6):** nothing in `/landing/` loads `/styles.css`,
`/i18n.js`, or `/niche-demo.js`. The two landings share only the files inside
`/landing/`. Third-party embeds (the Calendly widget) are fine.

- Hebrew-first: pages render `lang="he" dir="rtl"` before JS; EN is the mirror.
  Language choice persists in `localStorage` under `zarkor_landing_lang`.
- All three CTAs (hero, pricing, final) smooth-scroll to the embedded Calendly
  widget (`#book` → `calendly.com/roei-avrahami2/15min-zarkor`).
- `?name=<recipient>` weaves the name into the founder-note greeting itself
  (e.g. *"היי Maya, נעים להכיר 👋"*) and nothing else. Missing/empty/shared/
  unfilled-merge-token → generic greeting, no layout shift. Works on both
  landings. It is never logged or sent anywhere (plan §4/§16).

## Kept but unlinked (not in the cold funnel)

The old interactive demo and its supporting pages stay on disk for reference
and possible deep-dives on calls — **no landing links to them**:

- `food/demo/` (and `beauty/`, `health/`, `electronics/` niche demos/stubs)
- `app.html`, `profile.html`, `lists.html`, `pricing.html`
- `niche-demo.js`, root `styles.css`, root `i18n.js` (demo `localStorage`
  key is `zarkor_lang`)

`/index.html` and `/food/index.html` (the previous landings) were deleted —
replaced by `/landing/agency/` and `/landing/food/`. `/` may 404; cold links
go straight to the two `/landing/` URLs.

## Running locally

From the repo root:

```sh
python3 -m http.server 8080      # or:  npx serve .
```

Then open <http://localhost:8080/landing/food/> or
<http://localhost:8080/landing/agency/>. Append `?name=Maya` to preview
the personalized founder-note greeting.

## Deploying

Static site on Vercel — import the repo, keep all defaults, Deploy. It
auto-deploys on every push and the free tier covers it. Add `zarkor.app` in
Vercel → Project → Domains and follow the DNS instructions; TLS is automatic.

Landings ship at `https://zarkor.app/landing/food/` and
`https://zarkor.app/landing/agency/`.

## Before sending the cold emails

Tracked in `docs/demo-validation-plan.md` §13. Still external/manual:

- [ ] Calendly: confirm the 15-min phone-call event, description, and the
      3 required + 1 optional invitee questions (plan §12). The embed URL is
      already wired into both landings.
- [ ] Optional `og.png` (1200×630) for nice WhatsApp/LinkedIn previews — the
      OG `<meta>` tags reference `zarkor.app/og.png`.
- [ ] Cold-list sourcing + send cadence (plan §14). Email copy is final in
      plan §16 (Hebrew-primary, from personal Gmail, one `{name}`/`{business}`
      merge field — not tracking).

## Related docs

- [`docs/demo-validation-plan.md`](docs/demo-validation-plan.md) — the spec:
  audiences, messaging rules, selling-point tiers, preview content map (§17).
- [`docs/adding-a-creator.md`](docs/adding-a-creator.md) — playbook for pulling
  a real creator's data from Instagram into the demo dataset.

(The old `docs/outreach/validation-templates.md` was deleted — it predated and
contradicted plan §15/§16. The two still-useful bits, the follow-up bump
cadence and the deliverability/volume ramp, were merged into
`demo-validation-plan.md` §14.)
