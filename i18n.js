// Minimal i18n for the Influradar mockup.
// Adds [data-i18n="key"] text replacement + RTL toggle.
// Persists choice in localStorage.

const I18N = {
  en: {
    // --- Header / nav ---
    "nav.discover": "Discover",
    "nav.lists": "Saved lists",
    "nav.briefs": "Briefs sent",
    "nav.analytics": "Analytics",
    "nav.pricing": "Pricing",
    "nav.signin": "Sign in",
    "nav.demo": "See demo",
    "nav.menu": "Menu",
    "brand.beta": "beta · IL",
    "filter.toggle": "Filters",
    "filter.active": "3 active",
    "filter.close": "Close",

    // --- Landing ---
    "land.eyebrow": "Built exclusively for Israeli influencer-marketing agencies",
    "land.h1.a": "Source 30 vetted Israeli ",
    "land.h1.b": "micro-influencers",
    "land.h1.c": " before your next client meeting.",
    "land.lede": "The discovery, vetting and outreach tool built specifically for Israeli agencies. Cut sourcing from 12 hours to 30 minutes — with Hebrew-native search, audience credibility scores, and client-ready exports.",
    "land.cta.primary": "Try the demo",
    "land.cta.secondary": "See pricing",
    "land.trusted": "Built for the verticals Israeli agencies live in",
    "land.vertical.fashion": "Fashion",
    "land.vertical.beauty": "Beauty",
    "land.vertical.food": "Food & café",
    "land.vertical.pharma": "Pharma & wellness",
    "land.vertical.lifestyle": "Lifestyle",
    "land.vertical.d2c": "D2C",
    "land.stat1.big": "12 hrs",
    "land.stat1.lbl": "Saved per campaign vs. manual sourcing",
    "land.stat2.big": "11,400+",
    "land.stat2.lbl": "Israeli creators indexed, refreshed daily",
    "land.stat3.big": "94%",
    "land.stat3.lbl": "Median real-audience score on results",
    "land.stat4.big": "0%",
    "land.stat4.lbl": "Commission. You keep the full client margin",
    "land.f1.title": "Hebrew-native search where it counts",
    "land.f1.body": "Filter by Hebrew bio keywords, Israeli cities, and niches global tools miss — modest fashion, IDF lifestyle, mizrahi food, religious creators. Build shortlists your clients can't get anywhere else.",
    "land.f2.title": "Audience credibility on every result",
    "land.f2.body": "Every creator is scored for follower authenticity, engagement legitimacy and growth anomalies. Defend your shortlist in the client meeting — no more bought-followers surprises three days into the campaign.",
    "land.f3.title": "Bulk outreach, brief templates, client-ready exports",
    "land.f3.body": "Send 20 briefs in one workflow with templates per client. Export white-label PDF shortlists with your agency branding. Track responses in shared lists across your team.",
    "land.f4.title": "Multi-client workspaces by design",
    "land.f4.body": "Separate projects per client, track creator history (\"have we used them for ToTo before?\"), assign owners on your team, and keep audit trails for billing — all in one workspace.",
    "land.cta2.title": "Your account managers stop scrolling. Your margins go up.",
    "land.cta2.body": "Early-access pricing for the first 50 agencies — 40% off your first 6 months. Cancel anytime.",
    "land.cta2.button": "Claim early-access pricing",

    "land.agency.h2": "Built for the agency workflow",
    "land.agency.sub": "Everything an Israeli agency needs to source, vet, pitch, and deliver — without leaving the tool.",
    "land.agency.i1.title": "Pitch faster",
    "land.agency.i1.body": "Generate a branded shortlist PDF in 2 clicks. Show up to your client meeting with 15 vetted picks instead of a Google Sheet.",
    "land.agency.i2.title": "Vet defensively",
    "land.agency.i2.body": "Every creator comes pre-scored for audience authenticity, engagement legitimacy, and posting cadence. Justify each pick.",
    "land.agency.i3.title": "Run more campaigns",
    "land.agency.i3.body": "Bulk-send briefs, manage 5 client campaigns in parallel, and never resend the same creator twice with history tracking.",
    "land.agency.i4.title": "Keep your margin",
    "land.agency.i4.body": "Subscription pricing. Zero transaction fees, zero commission on deals. We never touch your client's budget or your invoice.",
    "land.agency.i5.title": "Stay current",
    "land.agency.i5.body": "All profile data refreshes from the source daily. No stale follower counts, no inflated ER from cached snapshots three months old.",
    "land.agency.i6.title": "Work in Hebrew",
    "land.agency.i6.body": "Full Hebrew interface, Hebrew creator bios indexed properly, RTL exports. Your junior planners can work in the language they think in.",

    "land.quote": "We used to lose a full day per campaign sourcing Israeli creators between Heepsy, Modash and manual Instagram scrolling. With Influradar I have 15 vetted picks before standup.",
    "land.quote.name": "Mockup, Inc.",
    "land.quote.role": "Media Director · Tel Aviv-based agency",

    // --- App / search ---
    "app.search.placeholder": "Search by handle, bio keyword, or hashtag (e.g. #אופנהישראלית)",
    "app.sort.er": "Sort: Engagement rate ↓",
    "app.sort.fol_up": "Followers ↑",
    "app.sort.fol_down": "Followers ↓",
    "app.sort.recent": "Last posted",
    "app.results.meta.a": "creators match · Fashion · 10K–100K",
    "app.results.meta.b": "Data refreshed 2h ago via IG Business Discovery",
    "filter.niche": "Niche",
    "filter.followers": "Followers",
    "filter.er": "Engagement rate",
    "filter.workedWith": "Worked with brand",
    "filter.workedWith.placeholder": "e.g. @night.cookie",
    "filter.workedWith.help": "Find creators who've already collab'd with a competitor or lookalike.",
    "filter.language": "Language",
    "filter.account": "Account",
    "filter.business_only": "Business / Creator only",
    "filter.verified": "Verified (blue check)",
    "filter.recent_active": "Posted in last 14 days",
    "filter.reset": "Reset filters",
    "card.view": "View profile",
    "card.brief": "Send brief",
    "card.stat.followers": "Followers",
    "card.stat.er": "Eng. rate",
    "card.stat.posts": "Posts/wk",
    "card.creds": "94% real audience · verified ER",
    "footer.source": "Profile data refreshed daily from Meta's Business Discovery API. Audience scores computed nightly.",
    "niche.fashion": "Fashion",
    "niche.beauty": "Beauty",
    "niche.fitness": "Fitness",
    "niche.food": "Food",
    "niche.travel": "Travel",
    "niche.tech": "Tech",
    "niche.parenting": "Parenting",
    "niche.lifestyle": "Lifestyle",
    "lang.hebrew": "Hebrew",
    "lang.english": "English",
    "lang.arabic": "Arabic",
    "lang.russian": "Russian",

    // --- Modal ---
    "modal.title": "Send brief to",
    "modal.sub": "We'll deliver the brief to the creator and surface their response in your inbox. Track status in Saved lists.",
    "modal.notice": "This brief is included in your Pro plan (3 of 25 sent this month). Briefs are sent from your agency email so the creator replies directly to you.",
    "modal.campaign": "Campaign type",
    "modal.budget": "Budget (ILS)",
    "modal.brief": "Brief",
    "modal.placeholder.brief": "What's the campaign, what's the product, what makes this a fit for the creator's audience?",
    "modal.placeholder.budget": "e.g. 2,500 – 4,000",
    "modal.cancel": "Cancel",
    "modal.send": "Send brief",

    // --- Profile page ---
    "profile.about": "About",
    "profile.audience": "Audience snapshot",
    "profile.engagement": "Engagement (last 12 posts)",
    "profile.recent": "Recent posts",
    "profile.cred.title": "Audience credibility",
    "profile.cred.body": "Real-audience score based on follower quality, engagement legitimacy and growth pattern.",
    "profile.stat.followers": "Followers",
    "profile.stat.er": "Avg. engagement rate",
    "profile.stat.posts": "Posts / week",
    "profile.stat.lang": "Primary language",
    "profile.stat.location": "Location signal",
    "profile.aud.age": "Age 25–34",
    "profile.aud.female": "Female audience",
    "profile.aud.israel": "In Israel",
    "profile.aud.tlv": "In Tel Aviv area",
    "profile.back": "← Back to search",

    // --- Pricing ---
    "pricing.h1": "Agency pricing, Israeli prices",
    "pricing.sub": "14-day free trial, no credit card required. Pre-launch pricing: 40% off your first 6 months for the first 50 agencies.",
    "pricing.starter.name": "Starter",
    "pricing.pro.name": "Pro",
    "pricing.agency.name": "Agency",
    "pricing.featured": "Most popular",
    "pricing.cycle": "/ month",
    "pricing.starter.cta": "Start free trial",
    "pricing.pro.cta": "Start free trial",
    "pricing.agency.cta": "Contact sales",
    "pricing.faq.title": "Frequently asked",
    "pricing.faq.q1": "How is this different from Heepsy, Modash, or Favikon?",
    "pricing.faq.a1": "We focus on Israel exclusively, and we're built for agency workflows — not generic discovery. Hebrew-native search, deeper Israeli creator coverage (modest fashion, mizrahi food, Hebrew tech creators), multi-client workspaces, branded PDF exports, and pricing in ILS. Global tools treat Israel as a footnote — we treat it as the entire product.",
    "pricing.faq.q2": "Can my team share a workspace?",
    "pricing.faq.a2": "Yes. Pro includes 2 seats, Agency includes 5 (additional seats ₪49/seat/month). Lists, briefs sent, and creator history are shared across the team. You can also separate work by client project so account managers only see what's theirs.",
    "pricing.faq.q3": "Can I export shortlists as branded PDFs for client meetings?",
    "pricing.faq.a3": "Yes. Pro and Agency tiers include client-ready PDF exports — upload your agency logo and the report is generated white-label. Includes per-creator credibility scores so you can defend your picks in the meeting.",
    "pricing.faq.q4": "Do you take a cut of the deals or charge per-message fees?",
    "pricing.faq.a4": "Never. Influradar is subscription only. Zero commission, zero per-message fees, zero markup on what you bill your client. The deal between you, the creator and the client is yours — we don't touch invoices.",
    "pricing.faq.q5": "How fresh is the data? Will I get embarrassed by stale follower counts in a client meeting?",
    "pricing.faq.a5": "Profile data refreshes daily, audience credibility scores re-compute nightly. Every result shows its last-refresh timestamp. We pull from Meta's official source, so the numbers match what the creator sees in their own dashboard.",
    "pricing.faq.q6": "Can I cancel anytime?",
    "pricing.faq.a6": "Yes. Monthly plans cancel anytime. Annual plans (40% discount) lock in the price for 12 months.",

    // --- Lists ---
    "lists.h1": "Campaign lists",
    "lists.sub": "Shortlists you've built. Track outreach status across creators in one place.",
    "lists.new": "+ New list",
    "lists.tab.spring": "Adira · Spring fashion drop",
    "lists.tab.fitness": "PurePlate · Fitness Q3",
    "lists.tab.food": "Bean Bar · New Florentin branch",
    "lists.table.creator": "Creator",
    "lists.table.niche": "Niche",
    "lists.table.followers": "Followers",
    "lists.table.status": "Status",
    "lists.table.notes": "Notes",
    "lists.status.interested": "Interested",
    "lists.status.brief": "Brief sent",
    "lists.status.responded": "Responded",
    "lists.status.passed": "Passed",

    // --- Pricing plan descriptions & features ---
    "plan.starter.desc": "For solo account managers running 1–2 client campaigns / month",
    "plan.pro.desc": "For boutique agencies running 2–4 client campaigns / month",
    "plan.agency.desc": "For agencies running 5+ client campaigns / month",
    "plan.s.f1": "1 seat",
    "plan.s.f2": "Up to 100 profile views / month",
    "plan.s.f3": "Basic niche & engagement filters",
    "plan.s.f4": "5 brief intros / month",
    "plan.s.f5": "Hebrew + English UI",
    "plan.s.f6": "Audience credibility scores",
    "plan.s.f7": "Client-ready PDF exports",
    "plan.s.f8": "Multi-client workspaces",
    "plan.p.f1": "2 seats included (+₪49/extra seat)",
    "plan.p.f2": "Unlimited profile views",
    "plan.p.f3": "All filters: audience, language mix, location, credibility",
    "plan.p.f4": "25 brief intros / month + bulk send",
    "plan.p.f5": "Audience credibility scores",
    "plan.p.f6": "Audience snapshot (age, gender, location)",
    "plan.p.f7": "Saved lists + campaign tracking",
    "plan.p.f8": "Client-ready PDF exports (white-label)",
    "plan.p.f9": "Creator history (across all your campaigns)",
    "plan.a.f1": "5 seats included (+₪49/extra seat)",
    "plan.a.f2": "Everything in Pro",
    "plan.a.f3": "Multi-client workspaces (separate by project)",
    "plan.a.f4": "Unlimited brief intros + brief templates per client",
    "plan.a.f5": "Audit trail for billing & client reporting",
    "plan.a.f6": "Side-by-side creator comparison view",
    "plan.a.f7": "API access (1,000 calls / day)",
    "plan.a.f8": "Priority Hebrew support (response < 2h business)",
    "plan.a.f9": "Dedicated onboarding call + creator-seed import",
    "plan.legal": "Prices in ILS, exclude VAT. 40% off for the first 6 months while early-access slots last (42 of 50 remaining).",

    // --- Workspace switcher (top bar) ---
    "workspace.castro": "ACW · Adira ▾",
    "workspace.agency": "ACW Agency ▾",

    // --- Agency bulk-action bar ---
    "agency.bulk.count": "3 selected",
    "agency.bulk.list": "↳ Adira · S/S Drop shortlist",
    "agency.bulk.add": "+ Add to list",
    "agency.bulk.export": "Export client PDF",
    "agency.bulk.send": "Send 3 briefs",

    // --- Niche secondary tags (cards & profile) ---
    "tag.vintage": "Vintage",
    "tag.sustainable": "Sustainable",
    "tag.editorial": "Editorial",
    "tag.minimalist": "Minimalist",
    "tag.menswear": "Menswear",
    "tag.craft": "Craft",
    "tag.streetwear": "Streetwear",
    "tag.sneakers": "Sneakers",
    "tag.budget": "Budget",
    "tag.thrift": "Thrift",
    "tag.modest": "Modest",
    "tag.workwear": "Workwear",
    "tag.knitwear": "Knitwear",
    "tag.print": "Print",
    "tag.color": "Color",
    "tag.heen": "HE / EN",

    // --- Credibility badge ---
    "creds.verifiedER": "Verified ER",
    "creds.realAudience": "real audience",

    // --- Profile extras ---
    "profile.btn.save": "+ Save to list",
    "profile.spark.start": "12 posts ago",
    "profile.spark.end": "Today",
    "profile.use.title": "Use this profile",
    "profile.use.l1": "+ Add to Spring fashion drop",
    "profile.use.l2": "+ Compare with another creator",
    "profile.use.l3": "⤓ Export PDF for client deck",
    "profile.use.l4": "⊕ Check creator history (your campaigns)",
    "profile.use.body": "Data refreshed 2h ago via Meta Business Discovery. Audience credibility scored nightly. Last engagement-rate check: today 09:14.",
    "profile.about.body": "Slow fashion, vintage finds & sustainable styling. Sharing fits from my Florentin closet. Hebrew + English captions. Open to brand collaborations aligned with sustainability values.",
    "profile.about.lang.v": "Hebrew (74%) · English (26%)",
    "profile.about.location.v": "Tel Aviv (high confidence)",
    "profile.audience.note": "Audience demographics inferred from a sample of 1,200 recent engagers. Available for verified creators only.",

    // --- Demo creator names & bios (shown across app/profile/lists) ---
    "creator.noamfit.name": "Noam Levi",
    "creator.yael.name": "Yael Shamir",
    "creator.ronen.name": "Ronen Avraham",
    "creator.maya.name": "Maya Kohen",
    "creator.daniel.name": "Daniel Ben-David",
    "creator.shira.name": "Shira Gold",
    "creator.adi.name": "Adi Klein",
    "creator.tamar.name": "Tamar Mizrahi",
    "creator.noamfit.bio": "Slow fashion, vintage finds & sustainable styling. Sharing fits from my Florentin closet. Hebrew + English captions.",
    "creator.yael.bio": "Editor at Vogue IL ✦ minimalist daily fits ✦ collabs: yael@shamirstudio.co.il",
    "creator.ronen.bio": "Menswear ✂️ tailoring stories from Levinsky market. Behind the scenes of every piece I make.",
    "creator.maya.bio": "Streetwear & sneakers. Reviews, drops, and city fits across TLV. DMs open for paid collabs.",
    "creator.daniel.bio": "Smart casual menswear on a budget. Weekly thrift hauls + outfit math (₪ per wear).",
    "creator.shira.bio": "Modest fashion ✡️ everyday looks for working women. Hebrew captions, English alt text.",
    "creator.adi.bio": "Handmade knitwear & slow style ✦ studio in Florentin ✦ DMs for collabs and pre-orders",
    "creator.tamar.bio": "Bilingual content (HE/EN) on color, print and Israeli design ✦ open to fashion-label collabs",

    // --- Lists table: niche cells + notes ---
    "lists.niche.vintage": "Fashion · Vintage",
    "lists.niche.editorial": "Fashion · Editorial",
    "lists.niche.menswear": "Fashion · Menswear",
    "lists.niche.modest": "Fashion · Modest",
    "lists.niche.knitwear": "Fashion · Knitwear",
    "lists.niche.streetwear": "Fashion · Streetwear",
    "lists.note.noamfit": "Available end of May, asked for product samples",
    "lists.note.yael": "Sent 2 days ago, waiting",
    "lists.note.ronen": "Strong niche fit, ER unusually high — recheck audience",
    "lists.note.shira": "Modest workwear angle — pair with new spring jacket SKU",
    "lists.note.adi": "Aesthetic match, ask about studio visit content",
    "lists.note.maya": "ER below threshold for budget tier",

    // --- Brand landing ---
    "brand.land.eyebrow": "For Israeli brands and in-house marketing teams",
    "brand.land.h1.a": "Take influencer marketing in-house. ",
    "brand.land.h1.b": "Own your creator roster.",
    "brand.land.h1.c": " Stop paying agency retainers for work you can do yourself.",
    "brand.land.lede": "Influradar is the in-house influencer platform for Israeli brands. Discover creators your audience already follows, vet them on real metrics, and run outreach yourself — without the 15–25% agency markup or the black-box reporting.",
    "brand.land.cta.primary": "Try the demo",
    "brand.land.cta.secondary": "See pricing",
    "brand.land.trusted": "Built for Israeli brand teams in",
    "brand.land.stat1.big": "₪38K",
    "brand.land.stat1.lbl": "Saved per quarter vs. agency sourcing retainer",
    "brand.land.stat2.big": "11,400+",
    "brand.land.stat2.lbl": "Israeli creators indexed, refreshed daily",
    "brand.land.stat3.big": "94%",
    "brand.land.stat3.lbl": "Median real-audience score on results",
    "brand.land.stat4.big": "100%",
    "brand.land.stat4.lbl": "Your data, your roster. Never lost when you switch teams.",
    "brand.land.f1.title": "Find creators your audience already follows",
    "brand.land.f1.body": "Audience-overlap matching: see which Israeli creators have the highest follower overlap with your own brand's followers. Stop paying for reach that doesn't convert — partner with creators whose audience already trusts you.",
    "brand.land.f2.title": "Vet on metrics, not on a deck",
    "brand.land.f2.body": "Every creator is scored for follower authenticity, engagement legitimacy, and brand-safety signals. No more relying on the agency's PowerPoint — see the same numbers a creator sees in their own dashboard.",
    "brand.land.f3.title": "Build a creator roster you own",
    "brand.land.f3.body": "Save creators, track who delivered last campaign, leave private notes the agency never saw. Your roster, your performance history — it stays with the brand, not with whoever ran your last campaign.",
    "brand.land.f4.title": "Outreach in your brand voice",
    "brand.land.f4.body": "Send briefs directly from your brand's email. Use templates that match your tone, not an agency boilerplate. Track responses, manage approvals, run the campaign — without a middleman taking 20%.",
    "brand.land.quote": "Our agency charged us ₪14K a month just to source creators — and half of them were the same names they pitched our competitors. We brought it in-house with Influradar in two weeks. Our last campaign converted better than anything the agency ran for us.",
    "brand.land.quote.name": "Mockup Brand Co.",
    "brand.land.quote.role": "Brand Marketing Lead · Israeli D2C brand",
    "brand.land.band.h2": "Built for the in-house brand workflow",
    "brand.land.band.sub": "Everything an Israeli brand team needs to discover, vet, brief, and measure — without a sourcing agency in the middle.",
    "brand.land.band.i1.title": "Cut the middleman",
    "brand.land.band.i1.body": "A typical agency retainer for influencer sourcing runs ₪10K–15K/month. Influradar runs ₪249/month and gives you the same data — minus the markup, minus the deck-driven timeline.",
    "brand.land.band.i2.title": "Own your creator history",
    "brand.land.band.i2.body": "When you switch agencies, your creator roster, performance notes, and outreach history stay with your brand. No more starting from zero every 18 months.",
    "brand.land.band.i3.title": "Vet for fit, not reach",
    "brand.land.band.i3.body": "Filter by audience demographics, language mix, location signals, and credibility score. Find the 5,000-follower creator whose audience is 80% your buyer — not the 200K name who looks good in a deck.",
    "brand.land.band.i4.title": "Transparent pricing",
    "brand.land.band.i4.body": "Subscription only. No commission on creator deals, no per-message fees, no markup on what you pay the creator. The whole budget goes to the creator, where it should.",
    "brand.land.band.i5.title": "Lookalike sourcing + brand safety",
    "brand.land.band.i5.body": "Search creators by who they've already worked with. Punch in your competitor's @handle and see every Israeli creator who's collab'd with them — your ready-made shortlist of proven-fit partners. The same data flags awkward overlaps before you brief, so brand safety is built in by default.",
    "brand.land.band.i6.title": "Hebrew-native",
    "brand.land.band.i6.body": "Full Hebrew UI, search Hebrew creator bios properly, and discover niches global tools miss — modest fashion, mizrahi food, religious creators, IDF lifestyle. Built for the Israeli market exclusively.",
    "brand.land.cta2.title": "Run influencer marketing in-house. Keep the budget for media.",
    "brand.land.cta2.body": "Early-access pricing for the first 50 brands — 40% off your first 6 months. Cancel anytime.",
    "brand.land.cta2.button": "Claim early-access pricing",

    // --- Brand pricing ---
    "brand.pricing.h1": "Pricing built for Israeli brands",
    "brand.pricing.sub": "Less than what an agency charges you for a single sourcing day. Try free for 14 days. 40% off your first 6 months for the first 50 brands.",
    "brand.pricing.solo.name": "Solo",
    "brand.plan.solo.desc": "For one brand manager running 1–2 campaigns / month in-house",
    "brand.plan.s.f1": "1 seat",
    "brand.plan.s.f2": "Up to 100 profile views / month",
    "brand.plan.s.f3": "Basic niche & engagement filters",
    "brand.plan.s.f4": "5 brief intros / month",
    "brand.plan.s.f5": "Hebrew + English UI",
    "brand.plan.s.f6": "Audience credibility scores",
    "brand.plan.s.f7": "Audience-overlap matching",
    "brand.plan.s.f8": "Brand-safety screening",
    "brand.pricing.solo.cta": "Start free trial",
    "brand.pricing.team.name": "Team",
    "brand.plan.team.desc": "For brand marketing teams running campaigns in-house",
    "brand.plan.p.f1": "3 seats included (+₪49/extra seat)",
    "brand.plan.p.f2": "Unlimited profile views",
    "brand.plan.p.f3": "All filters: audience, language mix, location, credibility",
    "brand.plan.p.f4": "25 brief intros / month + bulk send",
    "brand.plan.p.f5": "Audience-overlap matching to your brand's followers",
    "brand.plan.p.f6": "Audience snapshot (age, gender, location)",
    "brand.plan.p.f7": "Lookalike search: find creators by past brand collabs (competitor & lookalike sourcing)",
    "brand.plan.p.f8": "Private creator roster + performance notes",
    "brand.plan.p.f9": "Campaign tracking & response inbox",
    "brand.pricing.team.cta": "Start free trial",
    "brand.pricing.ent.name": "Enterprise",
    "brand.pricing.ent.price": "Custom",
    "brand.plan.ent.desc": "For multi-brand portfolios and retail groups (Fox Group, BSR, Delta, etc.)",
    "brand.plan.e.f1": "Unlimited seats across all your brands",
    "brand.plan.e.f2": "Everything in Team",
    "brand.plan.e.f3": "Separate workspaces per brand in your portfolio",
    "brand.plan.e.f4": "Unlimited brief intros",
    "brand.plan.e.f5": "SSO + role-based permissions",
    "brand.plan.e.f6": "Side-by-side creator comparison view",
    "brand.plan.e.f7": "API access (1,000 calls / day)",
    "brand.plan.e.f8": "Dedicated success manager + Hebrew support",
    "brand.plan.e.f9": "Custom onboarding + competitor creator seed",
    "brand.pricing.ent.cta": "Contact sales",
    "brand.plan.legal": "Prices in ILS, exclude VAT. 40% off for the first 6 months while early-access slots last (42 of 50 remaining).",
    "brand.pricing.faq.q1": "We already work with an agency. Why would we bring this in-house?",
    "brand.pricing.faq.a1": "Most Israeli agencies charge a ₪10–15K/month retainer for influencer sourcing — work that Influradar does for ₪249/month. Brands that want speed, transparency, and ownership of their creator roster bring it in-house. Brands that want full-service campaign execution still use an agency for production, contracts and reporting — and use Influradar to brief them with the exact creators they want.",
    "brand.pricing.faq.q2": "How is this different from Heepsy, Modash, or Favikon?",
    "brand.pricing.faq.a2": "Israel-first, not Israel-as-an-afterthought. Hebrew-native search, deeper Israeli creator coverage (modest fashion, mizrahi food, Hebrew tech creators), ILS pricing, and brand-side features global tools don't have — audience-overlap matching to your brand's actual followers, competitor-partnership screening, and a creator roster that's yours forever.",
    "brand.pricing.faq.q3": "What is \"audience overlap\" matching?",
    "brand.pricing.faq.a3": "We measure what percentage of a creator's audience already follows your brand's Instagram account. A creator with 50% overlap is partnering with an audience that already knows you — different campaign math than reaching cold followers. Available on Team and Enterprise plans, once you connect your brand's Instagram.",
    "brand.pricing.faq.q4": "Do you take a cut of the creator deals?",
    "brand.pricing.faq.a4": "Never. Influradar is subscription only. Zero commission on what you pay the creator, zero per-message fees, zero markup. Your full media budget goes to the creator. We don't touch invoices or contracts — those are between you and the creator (or the creator's agency).",
    "brand.pricing.faq.q5": "What if our marketing team has no influencer experience?",
    "brand.pricing.faq.a5": "The Team plan includes a 1-hour onboarding session, brief templates that match Israeli market norms, and a credibility-score-first workflow that protects you from common mistakes (bought followers, engagement pods, declining accounts). Most brand teams run their first campaign within 3 weeks of starting the trial.",
    "brand.pricing.faq.q6": "Can I cancel anytime?",
    "brand.pricing.faq.a6": "Yes. Monthly plans cancel anytime. Annual plans (40% discount) lock in the price for 12 months. If you cancel, your creator roster and campaign history export as CSV — you keep the data.",
    "brand.pricing.faq.q7": "Can I find creators who've worked with my competitor?",
    "brand.pricing.faq.a7": "Yes — and it's one of the most-used features. Type a brand's @handle into the \"Worked with brand\" filter and Influradar surfaces every Israeli creator who's tagged, mentioned, or run sponsored content with them in the last 12 months. Use it to find lookalike partners that already fit your category, or to spot competitor overlaps before you brief. Available on Team and Enterprise.",

    // --- Brand app overrides ---
    "brand.workspace.castro": "Adira · Marketing ▾",
    "brand.modal.notice": "This brief is included in your Team plan (3 of 25 sent this month). The brief is sent from your brand email — no middleman, no agency boilerplate.",
    "brand.filter.overlap": "Audience overlap with your brand",
    "brand.filter.overlap.meta": "412K followers · matched daily",
    "brand.filter.overlap.swap": "Change ▾",
    "brand.app.sort.overlap": "Sort: Audience overlap ↓",
    "brand.app.results.meta.a": "creators match · ≥15% overlap with @adira_il · Fashion",
    "brand.app.results.meta.b": "Overlap refreshed nightly · Profile data 2h ago",
    "brand.card.overlap": "overlap",
  },
  he: {
    // --- Header / nav ---
    "nav.discover": "גילוי",
    "nav.lists": "רשימות שמורות",
    "nav.briefs": "בריפים שנשלחו",
    "nav.analytics": "אנליטיקה",
    "nav.pricing": "מחירון",
    "nav.signin": "התחברות",
    "nav.demo": "צפו בדמו",
    "nav.menu": "תפריט",
    "brand.beta": "בטא · ישראל",
    "filter.toggle": "סינון",
    "filter.active": "3 פעילים",
    "filter.close": "סגור",

    // --- Landing ---
    "land.eyebrow": "נבנה אך ורק לסוכנויות שיווק משפיענים ישראליות",
    "land.h1.a": "ספקו 30 ",
    "land.h1.b": "מיקרו-משפיענים",
    "land.h1.c": " ישראלים מאומתים לפני הפגישה הבאה עם הלקוח.",
    "land.lede": "כלי הגילוי, הסינון והפנייה שנבנה במיוחד לסוכנויות ישראליות. חתכו את זמן הסורסינג מ-12 שעות ל-30 דקות — עם חיפוש בעברית, ציוני אמינות קהל, ויצוא בעיצוב הסוכנות שלכם.",
    "land.cta.primary": "נסו את הדמו",
    "land.cta.secondary": "מחירון",
    "land.trusted": "בנוי לוורטיקלים שבהם סוכנויות ישראליות חיות",
    "land.vertical.fashion": "אופנה",
    "land.vertical.beauty": "יופי",
    "land.vertical.food": "אוכל ובתי קפה",
    "land.vertical.pharma": "פארמה ובריאות",
    "land.vertical.lifestyle": "לייפסטייל",
    "land.vertical.d2c": "D2C",
    "land.stat1.big": "12 שעות",
    "land.stat1.lbl": "נחסכות בכל קמפיין מול סורסינג ידני",
    "land.stat2.big": "11,400+",
    "land.stat2.lbl": "יוצרים ישראלים באינדקס, מתעדכן יומית",
    "land.stat3.big": "94%",
    "land.stat3.lbl": "חציון ציון קהל אמיתי בתוצאות",
    "land.stat4.big": "0%",
    "land.stat4.lbl": "עמלה. אתם שומרים את כל המרג'ין מהלקוח",
    "land.f1.title": "חיפוש בעברית — שם זה חשוב",
    "land.f1.body": "סננו לפי מילות מפתח בביו בעברית, ערים ישראליות, ונישות שכלים גלובליים מפספסים — אופנה צנועה, חיילי מילואים, אוכל מזרחי, יוצרים דתיים. בנו רשימות שהלקוח לא יקבל בשום מקום אחר.",
    "land.f2.title": "ציון אמינות קהל לכל תוצאה",
    "land.f2.body": "כל יוצר מקבל ציון לאיכות עוקבים, לגיטימיות מעורבות וחריגות צמיחה. הגנו על הרשימה הקצרה בפגישת הלקוח — בלי הפתעות של עוקבים קנויים שלושה ימים לתוך הקמפיין.",
    "land.f3.title": "פנייה בכמות, תבניות בריפים, ויצוא ללקוח",
    "land.f3.body": "שלחו 20 בריפים בזרימה אחת עם תבניות לכל לקוח. ייצאו PDF של רשימה קצרה בעיצוב הסוכנות שלכם. עקבו אחרי תגובות ברשימות משותפות לצוות.",
    "land.f4.title": "סביבות עבודה לפי לקוח",
    "land.f4.body": "פרויקטים נפרדים לכל לקוח, היסטוריית יוצרים (\"עבדנו איתם בעבר עבור ToTo?\"), שיוך אחראים בצוות, ושמירת תיעוד לצורך חשבונאות — הכל בסביבת עבודה אחת.",
    "land.cta2.title": "מנהלי הלקוח שלכם מפסיקים לגלול. המרג'ין שלכם עולה.",
    "land.cta2.body": "מחיר השקה ל-50 הסוכנויות הראשונות — 40% הנחה לחצי שנה ראשונה. ביטול בכל עת.",
    "land.cta2.button": "תפסו את מחיר ההשקה",

    "land.agency.h2": "נבנה עבור זרימת העבודה של סוכנות",
    "land.agency.sub": "כל מה שסוכנות ישראלית צריכה כדי לגלות, לסנן, להציג ולהוציא לפועל — בלי לצאת מהכלי.",
    "land.agency.i1.title": "הציגו מהר יותר",
    "land.agency.i1.body": "ייצרו PDF ממותג של רשימה קצרה בשני קליקים. הגיעו לפגישת הלקוח עם 15 בחירות מאומתות במקום גוגל שיט.",
    "land.agency.i2.title": "סיננו דפנסיבית",
    "land.agency.i2.body": "כל יוצר מגיע עם ציון מוקדם לאמינות קהל, לגיטימיות מעורבות וקצב פרסום. הצדיקו כל בחירה.",
    "land.agency.i3.title": "הריצו יותר קמפיינים",
    "land.agency.i3.body": "פנייה בכמות, ניהול 5 קמפיינים במקביל, ובלי לשלוח את אותו יוצר פעמיים — בזכות מעקב היסטוריה.",
    "land.agency.i4.title": "שמרו על המרג'ין",
    "land.agency.i4.body": "מנוי חודשי. אפס עמלות עסקה, אפס עמלה על העסקאות. אנחנו לא נוגעים בתקציב הלקוח או בחשבונית שלכם.",
    "land.agency.i5.title": "נשארים מעודכנים",
    "land.agency.i5.body": "כל נתוני הפרופיל מתעדכנים מהמקור יומית. בלי מספרי עוקבים מיושנים, בלי ER מנופח מתמונת מצב משלושה חודשים.",
    "land.agency.i6.title": "עובדים בעברית",
    "land.agency.i6.body": "ממשק עברי מלא, ביו של יוצרים בעברית מסונכרן כראוי, ויצואים RTL. הג'וניורים שלכם עובדים בשפה שהם חושבים בה.",

    "land.quote": "פעם איבדנו יום שלם לכל קמפיין בסורסינג של יוצרים ישראלים בין Heepsy, Modash וגלילה ידנית באינסטגרם. עם Influradar יש לי 15 בחירות מאומתות לפני הסטנדאפ.",
    "land.quote.name": "Mockup, Inc.",
    "land.quote.role": "מנהל מדיה · סוכנות מתל אביב",

    // --- App / search ---
    "app.search.placeholder": "חפשו לפי שם משתמש, מילת מפתח בביו, או האשטאג (לדוגמה #אופנהישראלית)",
    "app.sort.er": "מיון: שיעור עניין ↓",
    "app.sort.fol_up": "עוקבים ↑",
    "app.sort.fol_down": "עוקבים ↓",
    "app.sort.recent": "פוסט אחרון",
    "app.results.meta.a": "יוצרים תואמים · אופנה · 10K–100K",
    "app.results.meta.b": "המידע עודכן לפני שעתיים דרך IG Business Discovery",
    "filter.niche": "נישה",
    "filter.followers": "עוקבים",
    "filter.er": "שיעור עניין",
    "filter.workedWith": "עבד/ה עם מותג",
    "filter.workedWith.placeholder": "לדוגמה: @night.cookie",
    "filter.workedWith.help": "מצאי יוצרים שכבר עשו שת״פ עם מתחרה או מותג דומה.",
    "filter.language": "שפה",
    "filter.account": "סוג חשבון",
    "filter.business_only": "Business / Creator בלבד",
    "filter.verified": "מאומת (וי כחול)",
    "filter.recent_active": "פרסם ב-14 ימים אחרונים",
    "filter.reset": "אפס סינונים",
    "card.view": "צפייה בפרופיל",
    "card.brief": "לשלוח בריף",
    "card.stat.followers": "עוקבים",
    "card.stat.er": "שיעור עניין",
    "card.stat.posts": "פוסטים בשבוע",
    "card.creds": "94% קהל אמיתי · ER מאומת",
    "footer.source": "נתוני הפרופיל מתעדכנים יומית דרך Meta Business Discovery API. ציוני אמינות קהל מחושבים בלילה.",
    "niche.fashion": "אופנה",
    "niche.beauty": "יופי",
    "niche.fitness": "כושר",
    "niche.food": "אוכל",
    "niche.travel": "טיולים",
    "niche.tech": "טכנולוגיה",
    "niche.parenting": "הורות",
    "niche.lifestyle": "לייפסטייל",
    "lang.hebrew": "עברית",
    "lang.english": "אנגלית",
    "lang.arabic": "ערבית",
    "lang.russian": "רוסית",

    // --- Modal ---
    "modal.title": "שליחת בריף ל-",
    "modal.sub": "אנחנו נעביר את הבריף ליוצר ונציג את התגובה בתיבה שלכם. עקבו אחר הסטטוס ברשימות השמורות.",
    "modal.notice": "הבריף כלול במנוי הפרו (3 מתוך 25 בחודש). הבריף נשלח מהמייל של הסוכנות — היוצר עונה ישירות אליכם.",
    "modal.campaign": "סוג קמפיין",
    "modal.budget": "תקציב (₪)",
    "modal.brief": "בריף",
    "modal.placeholder.brief": "מה הקמפיין, מה המוצר, ומדוע זה מתאים לקהל היוצר?",
    "modal.placeholder.budget": "לדוגמה 2,500 – 4,000",
    "modal.cancel": "ביטול",
    "modal.send": "שליחת בריף",

    // --- Profile page ---
    "profile.about": "על היוצר",
    "profile.audience": "פילוח קהל",
    "profile.engagement": "מעורבות (12 פוסטים אחרונים)",
    "profile.recent": "פוסטים אחרונים",
    "profile.cred.title": "אמינות קהל",
    "profile.cred.body": "ציון קהל אמיתי המבוסס על איכות עוקבים, לגיטימיות מעורבות ודפוסי צמיחה.",
    "profile.stat.followers": "עוקבים",
    "profile.stat.er": "שיעור מעורבות ממוצע",
    "profile.stat.posts": "פוסטים בשבוע",
    "profile.stat.lang": "שפה ראשית",
    "profile.stat.location": "אזור",
    "profile.aud.age": "גילאי 25–34",
    "profile.aud.female": "קהל נשי",
    "profile.aud.israel": "בישראל",
    "profile.aud.tlv": "באזור תל אביב",
    "profile.back": "→ חזרה לחיפוש",

    // --- Pricing ---
    "pricing.h1": "מחירון סוכנויות, מחירים ישראליים",
    "pricing.sub": "התנסות חינם של 14 ימים, בלי כרטיס אשראי. מחיר השקה: 40% הנחה לחצי שנה ראשונה ל-50 הסוכנויות הראשונות.",
    "pricing.starter.name": "Starter",
    "pricing.pro.name": "Pro",
    "pricing.agency.name": "Agency",
    "pricing.featured": "הכי פופולרי",
    "pricing.cycle": "/ חודש",
    "pricing.starter.cta": "התחל התנסות חינם",
    "pricing.pro.cta": "התחל התנסות חינם",
    "pricing.agency.cta": "צור קשר עם המכירות",
    "pricing.faq.title": "שאלות נפוצות",
    "pricing.faq.q1": "במה זה שונה מ-Heepsy, Modash או Favikon?",
    "pricing.faq.a1": "אנחנו מתמקדים בישראל בלעדית, ונבנינו עבור זרימת עבודה של סוכנות — לא עבור חיפוש גנרי. חיפוש בעברית, כיסוי עמוק יותר ליוצרים ישראלים (אופנה צנועה, אוכל מזרחי, יוצרי טכנולוגיה בעברית), סביבות עבודה ללקוחות נפרדים, יצוא PDF ממותג ותמחור בשקלים. כלים גלובליים מתייחסים לישראל כהערת שוליים — אנחנו מתייחסים אליה כאל כל המוצר.",
    "pricing.faq.q2": "אפשר לחלוק סביבת עבודה בצוות?",
    "pricing.faq.a2": "כן. Pro כולל 2 מושבים, Agency כולל 5 (מושבים נוספים ב-₪49 למושב לחודש). רשימות, בריפים שנשלחו והיסטוריית יוצרים משותפים לכל הצוות. אפשר גם להפריד עבודה לפי פרויקט לקוח כדי שמנהלי לקוחות יראו רק את שלהם.",
    "pricing.faq.q3": "אפשר לייצא רשימות קצרות כ-PDF ממותג לפגישות לקוח?",
    "pricing.faq.a3": "כן. מסלולי Pro ו-Agency כוללים יצוא PDF מוכן ללקוח — העלו את הלוגו של הסוכנות והדוח נוצר בלייבל לבן. כולל ציוני אמינות לכל יוצר כדי שתוכלו להגן על הבחירות בפגישה.",
    "pricing.faq.q4": "האם אתם לוקחים אחוז מהעסקאות או עמלות הודעות?",
    "pricing.faq.a4": "אף פעם לא. Influradar הוא מנוי בלבד. אפס עמלה, אפס עמלה להודעות, אפס מארק-אפ על מה שאתם מחייבים את הלקוח. העסקה בינכם לבין היוצר והלקוח שלכם — אנחנו לא נוגעים בחשבוניות.",
    "pricing.faq.q5": "כמה הנתונים טריים? לא יהיה לי מביך עם מספרי עוקבים מיושנים בפגישת לקוח?",
    "pricing.faq.a5": "נתוני הפרופיל מתעדכנים יומית, וציוני אמינות קהל מחושבים מחדש בלילה. כל תוצאה מציגה חותמת זמן של רענון אחרון. אנחנו מושכים מהמקור הרשמי של Meta, אז המספרים תואמים את מה שהיוצר רואה בדשבורד שלו.",
    "pricing.faq.q6": "אפשר לבטל בכל רגע?",
    "pricing.faq.a6": "כן. תוכניות חודשיות ניתנות לביטול בכל עת. תוכניות שנתיות (40% הנחה) נועלות את המחיר ל-12 חודשים.",

    // --- Lists ---
    "lists.h1": "רשימות קמפיין",
    "lists.sub": "רשימות קצרות שבניתם. עקבו אחרי מצב הפנייה לכל יוצר במקום אחד.",
    "lists.new": "+ רשימה חדשה",
    "lists.tab.spring": "Adira · קולקציית אביב",
    "lists.tab.fitness": "PurePlate · כושר רבעון 3",
    "lists.tab.food": "Bean Bar · סניף פלורנטין חדש",
    "lists.table.creator": "יוצר",
    "lists.table.niche": "נישה",
    "lists.table.followers": "עוקבים",
    "lists.table.status": "סטטוס",
    "lists.table.notes": "הערות",
    "lists.status.interested": "מתעניין",
    "lists.status.brief": "נשלח בריף",
    "lists.status.responded": "הגיב",
    "lists.status.passed": "נדחה",

    // --- Pricing plan descriptions & features ---
    "plan.starter.desc": "למנהלי לקוח עצמאיים עם 1–2 קמפיינים בחודש",
    "plan.pro.desc": "לסוכנויות בוטיק עם 2–4 קמפיינים ללקוח בחודש",
    "plan.agency.desc": "לסוכנויות עם 5+ קמפיינים ללקוח בחודש",
    "plan.s.f1": "1 מושב",
    "plan.s.f2": "עד 100 צפיות בפרופילים בחודש",
    "plan.s.f3": "סינון בסיסי לפי נישה ומעורבות",
    "plan.s.f4": "5 בריפים בחודש",
    "plan.s.f5": "ממשק בעברית ובאנגלית",
    "plan.s.f6": "ציוני אמינות קהל",
    "plan.s.f7": "יצוא PDF ללקוח",
    "plan.s.f8": "סביבות עבודה מרובות לקוחות",
    "plan.p.f1": "כולל 2 מושבים (+₪49 למושב נוסף)",
    "plan.p.f2": "צפיות פרופיל ללא הגבלה",
    "plan.p.f3": "כל הסינונים: קהל, שפות, מיקום, אמינות",
    "plan.p.f4": "25 בריפים בחודש + שליחה גורפת",
    "plan.p.f5": "ציוני אמינות קהל",
    "plan.p.f6": "פילוח קהל (גיל, מגדר, מיקום)",
    "plan.p.f7": "רשימות שמורות + מעקב קמפיינים",
    "plan.p.f8": "יצוא PDF ללקוח (ממותג בלייבל לבן)",
    "plan.p.f9": "היסטוריית יוצר (בכל הקמפיינים שלך)",
    "plan.a.f1": "כולל 5 מושבים (+₪49 למושב נוסף)",
    "plan.a.f2": "כל מה שב-Pro",
    "plan.a.f3": "סביבות עבודה מרובות לקוחות (מופרדות לפי פרויקט)",
    "plan.a.f4": "בריפים ללא הגבלה + תבניות בריף ללקוח",
    "plan.a.f5": "מעקב פעולות לחיוב ודיווח ללקוח",
    "plan.a.f6": "תצוגת השוואה בין יוצרים",
    "plan.a.f7": "גישת API (1,000 קריאות ליום)",
    "plan.a.f8": "תמיכה בעברית בעדיפות (תגובה תוך פחות מ-2 שעות עסקים)",
    "plan.a.f9": "שיחת אונבורדינג ייעודית + ייבוא יוצרים זרעיים",
    "plan.legal": "מחירים בשקלים, לא כולל מע״מ. 40% הנחה לחצי שנה ראשונה כל עוד יש מקומות במחיר ההשקה (נשארו 42 מתוך 50).",

    // --- Workspace switcher (top bar) ---
    "workspace.castro": "ACW · אדירה ▾",
    "workspace.agency": "ACW סוכנות ▾",

    // --- Agency bulk-action bar ---
    "agency.bulk.count": "3 נבחרו",
    "agency.bulk.list": "↳ אדירה · שורטליסט קולקציית קיץ",
    "agency.bulk.add": "+ הוספה לרשימה",
    "agency.bulk.export": "ייצוא PDF ללקוח",
    "agency.bulk.send": "שליחת 3 בריפים",

    // --- Niche secondary tags ---
    "tag.vintage": "וינטג'",
    "tag.sustainable": "בר-קיימא",
    "tag.editorial": "עריכה",
    "tag.minimalist": "מינימליסט",
    "tag.menswear": "אופנת גברים",
    "tag.craft": "מלאכה",
    "tag.streetwear": "סטריטוור",
    "tag.sneakers": "סניקרס",
    "tag.budget": "תקציב",
    "tag.thrift": "יד שנייה",
    "tag.modest": "צנוע",
    "tag.workwear": "אופנת עבודה",
    "tag.knitwear": "סריגה",
    "tag.print": "הדפסים",
    "tag.color": "צבע",
    "tag.heen": "עברית / אנגלית",

    // --- Credibility badge ---
    "creds.verifiedER": "ER מאומת",
    "creds.realAudience": "קהל אמיתי",

    // --- Profile extras ---
    "profile.btn.save": "+ הוסף לרשימה",
    "profile.spark.start": "לפני 12 פוסטים",
    "profile.spark.end": "היום",
    "profile.use.title": "השתמש בפרופיל הזה",
    "profile.use.l1": "+ הוסף ל'קולקציית אביב'",
    "profile.use.l2": "+ השווה ליוצר נוסף",
    "profile.use.l3": "⤓ ייצא PDF למצגת לקוח",
    "profile.use.l4": "⊕ בדוק היסטוריית יוצר (הקמפיינים שלך)",
    "profile.use.body": "הנתונים רועננו לפני שעתיים דרך Meta Business Discovery. אמינות קהל מחושבת בלילה. בדיקת ER אחרונה: היום 09:14.",
    "profile.about.body": "אופנה איטית, ממצאי וינטג' וסטיילינג בר-קיימא. משתפת פיטים מהארון שלי בפלורנטין. כיתובים בעברית ובאנגלית. פתוחה לשיתופי פעולה עם מותגים בעלי ערכי קיימות.",
    "profile.about.lang.v": "עברית (74%) · אנגלית (26%)",
    "profile.about.location.v": "תל אביב (סבירות גבוהה)",
    "profile.audience.note": "פילוח דמוגרפי של הקהל מחושב מדגימה של 1,200 מגיבים אחרונים. זמין רק ליוצרים מאומתים.",

    // --- Demo creator names & bios ---
    "creator.noamfit.name": "נועם לוי",
    "creator.yael.name": "יעל שמיר",
    "creator.ronen.name": "רונן אברהם",
    "creator.maya.name": "מאיה כהן",
    "creator.daniel.name": "דניאל בן-דוד",
    "creator.shira.name": "שירה גולד",
    "creator.adi.name": "עדי קליין",
    "creator.tamar.name": "תמר מזרחי",
    "creator.noamfit.bio": "אופנה איטית, ממצאי וינטג' וסטיילינג בר-קיימא. משתפת פיטים מהארון שלי בפלורנטין. כיתובים בעברית ובאנגלית.",
    "creator.yael.bio": "עורכת בווג ישראל ✦ פיטים יומיומיים מינימליסטיים ✦ שת״פ: yael@shamirstudio.co.il",
    "creator.ronen.bio": "אופנת גברים ✂️ סיפורי תפירה משוק לוינסקי. מאחורי הקלעים של כל פריט שאני מייצר.",
    "creator.maya.bio": "סטריטוור וסניקרס. ביקורות, דרופים ופיטים עירוניים ברחבי תל אביב. DMs פתוחים לשת״פ בתשלום.",
    "creator.daniel.bio": "אופנת גברים סמארט-קז'ואל בתקציב. הולים שבועיים מיד שנייה + חישובי אאוטפיט (₪ ללבישה).",
    "creator.shira.bio": "אופנה צנועה ✡️ לוקים יומיומיים לנשים עובדות. כיתובים בעברית, תוכן נלווה באנגלית.",
    "creator.adi.bio": "סריגה בעבודת יד וסגנון איטי ✦ סטודיו בפלורנטין ✦ DMs לשת״פ והזמנות מראש",
    "creator.tamar.bio": "תוכן דו-לשוני (עברית/אנגלית) על צבע, הדפסים ועיצוב ישראלי ✦ פתוחה לשת״פים עם מותגי אופנה",

    // --- Lists table: niche cells + notes ---
    "lists.niche.vintage": "אופנה · וינטג'",
    "lists.niche.editorial": "אופנה · עריכה",
    "lists.niche.menswear": "אופנה · אופנת גברים",
    "lists.niche.modest": "אופנה · צנוע",
    "lists.niche.knitwear": "אופנה · סריגה",
    "lists.niche.streetwear": "אופנה · סטריטוור",
    "lists.note.noamfit": "זמינה לסוף מאי, ביקשה דוגמיות",
    "lists.note.yael": "נשלח לפני יומיים, מחכה לתשובה",
    "lists.note.ronen": "התאמת נישה חזקה, ER גבוה במיוחד — לבדוק קהל מחדש",
    "lists.note.shira": "זווית של אופנת עבודה צנועה — לשלב עם דגם הז'קט החדש לאביב",
    "lists.note.adi": "התאמה אסתטית, לשאול על תוכן ביקור בסטודיו",
    "lists.note.maya": "ER מתחת לסף לתקציב הזה",

    // --- Brand landing ---
    "brand.land.eyebrow": "למותגים ישראליים וצוותי שיווק פנימיים",
    "brand.land.h1.a": "תשווקו עם משפיענים בתוך הבית. ",
    "brand.land.h1.b": "המאגר הוא שלכם.",
    "brand.land.h1.c": " מספיק לשלם ריטיינר לסוכנות על עבודה שאתם יכולים לעשות לבד.",
    "brand.land.lede": "Influradar היא הפלטפורמה הפנימית למשפיענים עבור מותגים ישראליים. גלו יוצרים שהקהל שלכם כבר עוקב אחריהם, סננו לפי מדדים אמיתיים, ונהלו פנייה בעצמכם — בלי 15%–25% עמלה לסוכנות ובלי דוחות מעורפלים.",
    "brand.land.cta.primary": "נסו את הדמו",
    "brand.land.cta.secondary": "מחירון",
    "brand.land.trusted": "בנוי לצוותי שיווק במותגים ישראליים בתחומי",
    "brand.land.stat1.big": "₪38K",
    "brand.land.stat1.lbl": "חיסכון רבעוני מול ריטיינר סורסינג בסוכנות",
    "brand.land.stat2.big": "11,400+",
    "brand.land.stat2.lbl": "יוצרים ישראלים באינדקס, מתעדכן יומית",
    "brand.land.stat3.big": "94%",
    "brand.land.stat3.lbl": "חציון ציון קהל אמיתי בתוצאות",
    "brand.land.stat4.big": "100%",
    "brand.land.stat4.lbl": "המידע שלכם, המאגר שלכם. לא הולך לאיבוד כשמחליפים סוכנות.",
    "brand.land.f1.title": "מצאו יוצרים שהקהל שלכם כבר עוקב אחריהם",
    "brand.land.f1.body": "התאמה לפי חפיפת קהל: ראו אילו יוצרים ישראלים יש להם את החפיפה הגבוהה ביותר עם העוקבים של המותג שלכם. הפסיקו לשלם על חשיפה שלא ממירה — שתפו פעולה עם יוצרים שהקהל שלהם כבר סומך עליכם.",
    "brand.land.f2.title": "סינון לפי מספרים, לא לפי מצגת",
    "brand.land.f2.body": "כל יוצר מקבל ציון לאמינות עוקבים, לגיטימיות מעורבות, וסיגנלים של בטיחות מותג. די להישען על מצגת של הסוכנות — תראו את אותם מספרים שהיוצר רואה בדאשבורד שלו.",
    "brand.land.f3.title": "בנו מאגר יוצרים שאתם הבעלים שלו",
    "brand.land.f3.body": "שמרו יוצרים, עקבו מי הביא תוצאות בקמפיין האחרון, הוסיפו הערות פרטיות שהסוכנות לא ראתה. המאגר שלכם, ההיסטוריה שלכם — נשארים במותג, לא אצל מי שניהל את הקמפיין האחרון.",
    "brand.land.f4.title": "פנייה בקול של המותג שלכם",
    "brand.land.f4.body": "שלחו בריפים ישירות מהמייל של המותג. השתמשו בתבניות שמתאימות לטון שלכם, לא בבויילרפלייט של סוכנות. עקבו אחרי תגובות, נהלו אישורים, הריצו את הקמפיין — בלי שמתווך לוקח 20%.",
    "brand.land.quote": "הסוכנות גבתה מאיתנו ₪14K לחודש רק בשביל לסרוק יוצרים — וחצי מהם היו אותם שמות שהיא הציעה למתחרים שלנו. הכנסנו את זה הביתה עם Influradar בשבועיים. הקמפיין האחרון שלנו המיר טוב יותר מכל מה שהסוכנות הריצה לנו.",
    "brand.land.quote.name": "Mockup Brand Co.",
    "brand.land.quote.role": "ראש שיווק מותג · מותג D2C ישראלי",
    "brand.land.band.h2": "נבנה עבור זרימת עבודה פנימית של מותג",
    "brand.land.band.sub": "כל מה שצוות מותג ישראלי צריך כדי לגלות, לסנן, לתת בריף ולמדוד — בלי סוכנות סורסינג באמצע.",
    "brand.land.band.i1.title": "חתכו את המתווך",
    "brand.land.band.i1.body": "ריטיינר טיפוסי של סוכנות לסורסינג משפיענים נע בין ₪10K-₪15K לחודש. Influradar עולה ₪249 לחודש ונותן לכם את אותו מידע — בלי המרק-אפ, בלי הלו\"ז מבוסס-מצגות.",
    "brand.land.band.i2.title": "ההיסטוריה היא שלכם",
    "brand.land.band.i2.body": "כשאתם מחליפים סוכנות, מאגר היוצרים, ההערות על ביצועים וההיסטוריה של הפניות נשארים במותג. לא צריך להתחיל מאפס כל 18 חודשים.",
    "brand.land.band.i3.title": "התאמה, לא רק חשיפה",
    "brand.land.band.i3.body": "סננו לפי דמוגרפיה של הקהל, תמהיל שפות, סיגנלים של מיקום, וציון אמינות. תמצאו את היוצר עם 5,000 עוקבים שהקהל שלו 80% קונה שלכם — לא את השם של 200K שנראה טוב במצגת.",
    "brand.land.band.i4.title": "תמחור שקוף",
    "brand.land.band.i4.body": "מנוי בלבד. אפס עמלה על עסקאות עם יוצרים, אפס דמי הודעה, אפס מרק-אפ על מה שאתם משלמים ליוצר. כל התקציב הולך ליוצר, כמו שצריך.",
    "brand.land.band.i5.title": "חיפוש לוקאלייק + בטיחות מותג",
    "brand.land.band.i5.body": "חפשו יוצרים לפי מי שהם כבר עבדו איתו. הזינו את ה-@handle של המתחרה ותקבלו את כל היוצרים הישראלים שעשו איתו שת״פ — שורט-ליסט מוכן של שותפים בהתאמה מוכחת. אותו מידע מתריע על חפיפות מביכות לפני שאתם נותנים בריף, אז בטיחות מותג מובנית כברירת מחדל.",
    "brand.land.band.i6.title": "עברית מהיסוד",
    "brand.land.band.i6.body": "ממשק עברי מלא, חיפוש ביו של יוצרים בעברית כמו שצריך, וגילוי נישות שכלים גלובליים מפספסים — אופנה צנועה, אוכל מזרחי, יוצרים דתיים, סגנון חיים צה\"לי. נבנה רק לשוק הישראלי.",
    "brand.land.cta2.title": "תריצו שיווק משפיענים בתוך הבית. שמרו את התקציב למדיה.",
    "brand.land.cta2.body": "מחיר השקה ל-50 המותגים הראשונים — 40% הנחה לחצי שנה ראשונה. ביטול בכל עת.",
    "brand.land.cta2.button": "תפסו את מחיר ההשקה",

    // --- Brand pricing ---
    "brand.pricing.h1": "מחירון שנבנה למותגים ישראליים",
    "brand.pricing.sub": "פחות ממה שסוכנות גובה מכם על יום סורסינג אחד. ניסיון חינם ל-14 ימים. 40% הנחה לחצי שנה ראשונה ל-50 המותגים הראשונים.",
    "brand.pricing.solo.name": "סולו",
    "brand.plan.solo.desc": "למנהל שיווק יחיד שמריץ 1-2 קמפיינים בחודש בתוך הבית",
    "brand.plan.s.f1": "משתמש 1",
    "brand.plan.s.f2": "עד 100 צפיות בפרופיל / חודש",
    "brand.plan.s.f3": "סינון נישה ומעורבות בסיסיים",
    "brand.plan.s.f4": "5 בריפים / חודש",
    "brand.plan.s.f5": "ממשק עברי + אנגלית",
    "brand.plan.s.f6": "ציוני אמינות קהל",
    "brand.plan.s.f7": "התאמה לפי חפיפת קהל",
    "brand.plan.s.f8": "סינון בטיחות מותג",
    "brand.pricing.solo.cta": "התחילו ניסיון חינם",
    "brand.pricing.team.name": "צוות",
    "brand.plan.team.desc": "לצוותי שיווק במותג שמריצים קמפיינים בתוך הבית",
    "brand.plan.p.f1": "3 משתמשים כלולים (+₪49 למשתמש נוסף)",
    "brand.plan.p.f2": "צפיות פרופיל ללא הגבלה",
    "brand.plan.p.f3": "כל הסינונים: קהל, תמהיל שפות, מיקום, אמינות",
    "brand.plan.p.f4": "25 בריפים / חודש + שליחה בכמות",
    "brand.plan.p.f5": "התאמה לפי חפיפת קהל עם העוקבים של המותג",
    "brand.plan.p.f6": "תמונת קהל (גיל, מגדר, מיקום)",
    "brand.plan.p.f7": "חיפוש לוקאלייק: יוצרים לפי שיתופי פעולה קודמים (מתחרים ומותגים דומים)",
    "brand.plan.p.f8": "מאגר יוצרים פרטי + הערות ביצועים",
    "brand.plan.p.f9": "מעקב קמפיינים + תיבת תגובות",
    "brand.pricing.team.cta": "התחילו ניסיון חינם",
    "brand.pricing.ent.name": "Enterprise",
    "brand.pricing.ent.price": "מותאם אישית",
    "brand.plan.ent.desc": "לפורטפוליו רב-מותגי וקבוצות קמעונאיות (קבוצת פוקס, BSR, דלתא וכו')",
    "brand.plan.e.f1": "משתמשים ללא הגבלה בכל המותגים שלכם",
    "brand.plan.e.f2": "הכל מתוכנית 'צוות'",
    "brand.plan.e.f3": "סביבות עבודה נפרדות לכל מותג בפורטפוליו",
    "brand.plan.e.f4": "בריפים ללא הגבלה",
    "brand.plan.e.f5": "SSO + הרשאות לפי תפקיד",
    "brand.plan.e.f6": "תצוגת השוואה side-by-side של יוצרים",
    "brand.plan.e.f7": "גישת API (1,000 קריאות / יום)",
    "brand.plan.e.f8": "מנהל הצלחה ייעודי + תמיכה בעברית",
    "brand.plan.e.f9": "הקמה מותאמת + יבוא יוצרים מהמתחרים",
    "brand.pricing.ent.cta": "צרו קשר עם המכירות",
    "brand.plan.legal": "מחירים בש\"ח, לפני מע\"מ. 40% הנחה לחצי שנה ראשונה — מקומות מוגבלים (נשארו 42 מתוך 50).",
    "brand.pricing.faq.q1": "כבר עובדים עם סוכנות. למה שנכניס את זה הביתה?",
    "brand.pricing.faq.a1": "רוב הסוכנויות בישראל גובות ₪10-₪15K לחודש כריטיינר לסורסינג משפיענים — עבודה ש-Influradar עושה ב-₪249 לחודש. מותגים שרוצים מהירות, שקיפות ובעלות על המאגר שלהם מכניסים את זה הביתה. מותגים שרוצים שירות מלא של הפקת קמפיין עדיין משתמשים בסוכנות להפקה, חוזים ודיווח — ומשתמשים ב-Influradar כדי לתת לסוכנות את היוצרים המדויקים שהם רוצים.",
    "brand.pricing.faq.q2": "במה זה שונה מ-Heepsy, Modash או Favikon?",
    "brand.pricing.faq.a2": "ישראל קודם, לא ישראל כהערת שוליים. חיפוש בעברית, כיסוי עמוק יותר של יוצרים ישראלים (אופנה צנועה, אוכל מזרחי, יוצרי טק בעברית), תמחור בש\"ח, ופיצ'רים בצד המותג שלכלים גלובליים אין — התאמה לפי חפיפת קהל עם המותג שלכם, סינון שיתופי פעולה עם מתחרים, ומאגר יוצרים ששלכם לתמיד.",
    "brand.pricing.faq.q3": "מה זה התאמה לפי \"חפיפת קהל\"?",
    "brand.pricing.faq.a3": "אנחנו מודדים איזה אחוז מהקהל של יוצר כבר עוקב אחרי חשבון האינסטגרם של המותג שלכם. יוצר עם חפיפה של 50% משתף פעולה עם קהל שכבר מכיר אתכם — מתמטיקה אחרת לגמרי מלהגיע לעוקבים קרים. זמין בתוכניות 'צוות' ו-Enterprise, אחרי שתחברו את האינסטגרם של המותג.",
    "brand.pricing.faq.q4": "אתם לוקחים אחוזים מהעסקאות עם היוצרים?",
    "brand.pricing.faq.a4": "אף פעם. Influradar הוא מנוי בלבד. אפס עמלה על מה שאתם משלמים ליוצר, אפס דמי הודעה, אפס מרק-אפ. כל תקציב המדיה הולך ליוצר. אנחנו לא נוגעים בחשבוניות או חוזים — אלה ביניכם לבין היוצר (או הסוכן של היוצר).",
    "brand.pricing.faq.q5": "מה אם לצוות השיווק שלנו אין ניסיון במשפיענים?",
    "brand.pricing.faq.a5": "תוכנית 'צוות' כוללת שעת onboarding, תבניות בריפים שמתאימות לנורמות של השוק הישראלי, וזרימת עבודה ש-credibility score היא קודם — מה שמגן עליכם מטעויות נפוצות (עוקבים קנויים, פודי מעורבות, חשבונות בדעיכה). רוב צוותי המותג מריצים קמפיין ראשון תוך 3 שבועות מתחילת הניסיון.",
    "brand.pricing.faq.q6": "אפשר לבטל בכל עת?",
    "brand.pricing.faq.a6": "כן. תוכניות חודשיות מתבטלות בכל עת. תוכניות שנתיות (40% הנחה) נועלות מחיר ל-12 חודשים. אם תבטלו, מאגר היוצרים והיסטוריית הקמפיינים מיוצאים כ-CSV — המידע נשאר אצלכם.",
    "brand.pricing.faq.q7": "אפשר למצוא יוצרים שעבדו עם המתחרה שלנו?",
    "brand.pricing.faq.a7": "כן — וזה אחד הפיצ׳רים הכי בשימוש. הזינו @handle של מותג בפילטר \"עבד/ה עם מותג\" ואינפלורדאר תראה לכם כל יוצר ישראלי שתייג, הזכיר או הריץ תוכן ממומן עם המותג ב-12 החודשים האחרונים. השתמשו בזה כדי למצוא שותפים דומים שכבר מתאימים לקטגוריה, או לזהות חפיפות לפני שאתם נותנים בריף. זמין ב-Team וב-Enterprise.",

    // --- Brand app overrides ---
    "brand.workspace.castro": "אדירה · שיווק ▾",
    "brand.modal.notice": "הבריף כלול בתוכנית 'צוות' (3 מתוך 25 בחודש). הבריף נשלח מהמייל של המותג שלכם — בלי מתווך, בלי בויילרפלייט של סוכנות.",
    "brand.filter.overlap": "חפיפת קהל עם המותג שלך",
    "brand.filter.overlap.meta": "412K עוקבים · מתאמת מדי לילה",
    "brand.filter.overlap.swap": "החלף ▾",
    "brand.app.sort.overlap": "מיון: חפיפת קהל ↓",
    "brand.app.results.meta.a": "יוצרים תואמים · חפיפה ≥15% עם @adira_il · אופנה",
    "brand.app.results.meta.b": "חפיפת קהל מתעדכנת לילית · פרופילים לפני שעתיים",
    "brand.card.overlap": "חפיפה",
  }
};

function applyI18n(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] !== undefined) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const k = el.getAttribute("data-i18n-placeholder");
    if (dict[k] !== undefined) el.setAttribute("placeholder", dict[k]);
  });
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  try { localStorage.setItem("influradar_lang", lang); } catch(_) {}
  // Reveal page after translations apply, unless a niche overlay is also
  // about to run — in that case let niche-demo.js do the reveal so the
  // user doesn't see fashion content briefly before the niche swap.
  if (!window.__niche) document.documentElement.style.visibility = "visible";
}

function initI18n(){
  let lang = "en";
  try { lang = localStorage.getItem("influradar_lang") || "en"; } catch(_) {}
  applyI18n(lang);
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.addEventListener("click", () => applyI18n(b.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", initI18n);

// Mobile UX: drawer + bottom-sheet toggles
function toggleMobileNav(){
  document.body.classList.toggle("mobile-nav-open");
  document.body.classList.remove("filter-sheet-open");
}
function toggleFilterSheet(){
  document.body.classList.toggle("filter-sheet-open");
  document.body.classList.remove("mobile-nav-open");
}
function closeMobileSheets(){
  document.body.classList.remove("mobile-nav-open");
  document.body.classList.remove("filter-sheet-open");
}

// --- Demo filter interactivity (toggle chips, recount, bulk select, reset) ---
(function(){
  function activeFilterCount(){
    return document.querySelectorAll(".filters .chip.active").length
         + document.querySelectorAll(".filters input[type=checkbox]:checked").length;
  }
  function animateCount(el, target){
    if (!el) return;
    var cur = parseInt(el.textContent.replace(/[^\d]/g,''),10) || target;
    var dist = Math.abs(target - cur);
    var dur = Math.min(420, 80 + dist*8);
    var start = performance.now();
    function tick(t){
      var p = Math.min(1, (t-start)/dur);
      var ease = 1 - Math.pow(1-p,3);
      el.textContent = Math.round(cur + (target-cur)*ease);
      if (p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  function recompute(){
    var countEl = document.querySelector(".results-meta strong");
    var toggleCount = document.querySelector(".filter-toggle .count");
    var n = activeFilterCount();
    // Demo-only heuristic: more active filters → fewer results
    var base = 312;
    var target = Math.max(8, base - n*38 + Math.round((Math.random()-.5)*14));
    animateCount(countEl, target);
    if (toggleCount){
      var word = (document.documentElement.dir === "rtl") ? " פעילים" : " active";
      toggleCount.textContent = n + word;
    }
  }
  function onChipClick(e){
    var chip = e.target.closest(".filters .chip");
    if (!chip) return;
    chip.classList.toggle("active");
    recompute();
  }
  function onCheckChange(e){
    if (!e.target.closest(".filters")) return;
    if (e.target.matches("input[type=checkbox]")) recompute();
  }
  function onReset(e){
    var btn = e.target.closest(".filters .btn-block");
    if (!btn) return;
    // Default state: Fashion + HE/EN chips; business+recent checkboxes
    document.querySelectorAll(".filters .chip").forEach(function(c){ c.classList.remove("active"); });
    var defaults = ["niche.fashion","lang.hebrew","lang.english"];
    defaults.forEach(function(key){
      var el = document.querySelector('.filters .chip[data-i18n="'+key+'"]');
      if (el) el.classList.add("active");
    });
    document.querySelectorAll(".filters input[type=checkbox]").forEach(function(cb,i){
      cb.checked = (i===0 || i===2); // business-only + posted-in-14-days
    });
    recompute();
  }

  // Bulk-select: clicking .card-check toggles selection + count
  function onCardCheck(e){
    var chk = e.target.closest(".card-check");
    if (!chk) return;
    e.stopPropagation();
    var card = chk.closest(".card");
    chk.classList.toggle("on");
    card.classList.toggle("selected");
    var n = document.querySelectorAll(".card-check.on").length;
    var badge = document.querySelector(".bulk-bar .count-badge");
    var send  = document.querySelector('[data-i18n="agency.bulk.send"]');
    if (badge){
      var rtl = document.documentElement.dir === "rtl";
      badge.textContent = rtl ? (n + " נבחרו") : (n + " selected");
    }
    if (send){
      var rtl = document.documentElement.dir === "rtl";
      send.textContent = rtl ? ("שליחת " + n + " בריפים") : ("Send " + n + " briefs");
    }
    var bar = document.querySelector(".bulk-bar");
    if (bar) bar.style.display = (n>0 ? "" : "none");
  }

  document.addEventListener("click", function(e){
    onChipClick(e);
    onReset(e);
    onCardCheck(e);
  });
  document.addEventListener("change", onCheckChange);
})();
