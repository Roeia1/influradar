# Influradar — interactive mockup

A static, single-page-each mockup of the Influradar product, intended for buyer-conversation validation. No backend, no build step — pure HTML/CSS/JS.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing page (hero, value props, trusted-by, CTA) |
| `app.html` | Discovery view (sidebar filters + creator card grid + brief modal) |
| `profile.html` | Creator detail page (engagement chart, audience snapshot, credibility donut) |
| `pricing.html` | Pricing tiers (Starter / Pro / Agency) + FAQ |
| `lists.html` | Campaign list (creators with status: interested / brief sent / responded / passed) |
| `styles.css` | Shared design system |
| `i18n.js` | English ⇄ Hebrew toggle with RTL support, persisted in localStorage |
| `favicon.svg` | Site icon |

## Running locally

```sh
cd influradar
python3 -m http.server 8080
# or
npx serve .
```

Then open <http://localhost:8080>.

## Deploying to Vercel (recommended, ~5 minutes)

1. Initialise git and push to GitHub:
   ```sh
   cd influradar
   git init
   git add .
   git commit -m "initial mockup"
   gh repo create influradar --public --source=. --push
   ```
2. Go to <https://vercel.com/new>, import the GitHub repo. Vercel will detect it as a static site — leave all defaults. Hit Deploy.
3. After it deploys you get a `influradar-xxx.vercel.app` URL. To add a custom domain, in the Vercel project settings → Domains → Add. Follow their DNS instructions.

Auto-deploys on every git push. Free tier covers this entirely.

## Buying a custom domain

- `influradar.com` — check Namecheap or Cloudflare (~$10/year). Cloudflare is cheapest at renewal.
- `influradar.co.il` — register via [domain.net.il](https://domain.net.il) (~₪70/year, requires an Israeli registrar like Domain The Net Technologies, Galcomm, or 010net).

Recommend grabbing both — `.co.il` for the Israeli credibility, `.com` as fallback / international.

## TODO before sending the link to buyers

- [ ] Generate an Open Graph image (`og.png`, 1200×630) for nice WhatsApp / LinkedIn previews. Use Figma or [og-image-generator.vercel.app](https://og-image-generator.vercel.app).
- [ ] Replace fake "trusted by" logos on `index.html` with real brand logos *only if* you have permission to use them. Otherwise keep the styled text names — they read as obvious placeholders, which is honest.
- [ ] Update OG meta tags in each HTML head with your real domain.
- [ ] Add Hebrew alt text on hero illustrations once added.
- [ ] Update prices on `pricing.html` if you settle on different tiers after buyer conversations.

## Notes on the i18n implementation

- All translatable text uses `data-i18n="key"` and is replaced from `I18N[lang]` in `i18n.js`.
- Placeholders use `data-i18n-placeholder="key"`.
- `<html dir="rtl">` is toggled with the language; the CSS already accommodates RTL with logical properties (`margin-inline-start`, `inset-inline-start`, etc.).
- Language preference is persisted in `localStorage` under `influradar_lang`.
