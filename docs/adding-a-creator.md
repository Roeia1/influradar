# Adding a new creator to the demo

A playbook for adding a real Israeli creator (like [@maya.agassi](https://www.instagram.com/maya.agassi/)) to the discovery grid and, optionally, giving them a dedicated profile page with real posts and past brand collabs.

The data comes from Instagram's public `web_profile_info` endpoint — the same one the IG web client uses. No auth, no API key. The creator just needs a public Business or Creator account.

---

## 0. Prerequisites

- The creator's IG handle.
- The creator's profile must be public (Business or Creator account).
- `python3` + `curl` available locally.
- You're inside the repo root.

Throughout this doc, replace `HANDLE` with the creator's IG username (without `@`).

```sh
export HANDLE=maya.agassi
```

---

## 1. Pull the profile JSON

```sh
curl -s -H "x-ig-app-id: 936619743392459" \
     -A "Mozilla/5.0" \
     "https://www.instagram.com/api/v1/users/web_profile_info/?username=$HANDLE" \
     > /tmp/$HANDLE.json
```

Useful fields under `data.user`:

| Field | Use |
|------|-----|
| `full_name` | Display name |
| `biography` | Bio text (HE + EN often mixed) |
| `edge_followed_by.count` | Follower count |
| `edge_owner_to_timeline_media.count` | Total posts |
| `profile_pic_url_hd` | Avatar URL (signed, expires) |
| `edge_owner_to_timeline_media.edges` | Most recent posts (up to ~12) |
| `is_business_account`, `is_verified` | Flags |
| `category_name` | IG's category label |
| `external_url` | Linktree / website |

Quick peek:

```sh
python3 -c "
import json, os
d = json.load(open('/tmp/' + os.environ['HANDLE'] + '.json'))['data']['user']
print('name :', d['full_name'])
print('bio  :', (d['biography'] or '').replace(chr(10), ' / '))
print('flw  :', d['edge_followed_by']['count'])
print('cat  :', d.get('category_name'))
"
```

---

## 2. Download the profile picture

```sh
mkdir -p assets/creators
python3 << 'PY'
import json, urllib.request, os
d = json.load(open(f'/tmp/{os.environ["HANDLE"]}.json'))['data']['user']
url = d.get('profile_pic_url_hd') or d['profile_pic_url']
req = urllib.request.Request(url, headers={
  'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.instagram.com/'})
out = f'assets/creators/{os.environ["HANDLE"]}.jpg'
open(out, 'wb').write(urllib.request.urlopen(req, timeout=20).read())
print(out)
PY
```

Verify the saved file is a real JPEG (not an error blob):

```sh
file assets/creators/$HANDLE.jpg   # → JPEG image data
```

---

## 3. Pick a niche bucket

The discovery grid groups creators by niche via `brand/niche-demo.js`. Pick whichever fits:

| Niche key | What it covers |
|-----------|---------------|
| `food`    | restaurants, recipes, cafés, baking, drinks |
| `beauty`  | makeup, skincare, hair, nails, fragrance |
| `electronics` | phones, gaming, AI, audio, gadgets |
| `health`  | doctors, dietitians, fitness, mental health |

If none fit, you're adding a new niche — that's a bigger refactor; copy an existing niche object in `niche-demo.js` as a template.

---

## 4. Add the creator entry

Open `brand/niche-demo.js` and find the `creators` array under your chosen niche (e.g. `NICHES.food.creators`). Add an object using this schema. Bold fields are required.

```js
{
  // ── REQUIRED ──
  handle:    "@maya.agassi",
  initials:  "מא",                  // Hebrew initials, fallback if no photo
  overlap:   39,                     // % overlap with the demo target brand
  badge:     "high",                 // "high" | "mid" | "low" — colors the overlap chip
  name: { en: "Maya Agassi · Tel Aviv",  he: "מאיה אגסי · תל אביב" },
  bio:  { en: "Dizengoff Square foodie ...", he: "הפודית של כיכר דיזינגוף ..." },
  tags: [
    { en:"Food",        he:"אוכל"    },
    { en:"Tel Aviv",    he:"תל אביב" },
    { en:"Restaurants", he:"מסעדות"  },
  ],
  creds:     96,                     // 0–100 audience-credibility score
  followers: "4.0K",                 // pre-formatted string
  er:        "9.6%",                 // engagement rate display
  erGood:    true,                   // true → render in green
  posts:     "2.0",                  // posts/week display

  // ── OPTIONAL ──
  photo:      "../../assets/creators/maya.agassi.jpg",       // overrides the gradient+initials avatar
  profileUrl: "../food/demo/profile.html",                   // overrides the default "View profile" link
  workedWith: [                                              // past brand collabs (logo + name + handle)
    { handle:"@night.cookie",        name:"Night Cookie",      logo:"../../assets/brands/night.cookie.jpg" },
    { handle:"@basher.fromagerieil", name:"Basher Fromagerie", logo:"../../assets/brands/basher.fromagerieil.jpg" },
    { handle:"@eatsane_israel",      name:"Eatsane",           logo:"../../assets/brands/eatsane_israel.jpg" },
  ],
}
```

Path quirks:

- `photo` and `workedWith[].logo` are evaluated relative to `<base href="../../brand/">` (set by the niche stub), so `../../assets/...` resolves to repo-root `/assets/...`.
- `profileUrl` follows the same base. Use `../food/demo/profile.html` to point at a niche-specific profile, or omit it to fall back to `brand/profile.html`.

Order entries by `overlap` descending — that's the visual convention.

---

## 5. (Optional) Past brand collabs

For each brand the creator has worked with, repeat the profile-pull pattern:

```sh
BRAND=night.cookie
mkdir -p assets/brands
curl -s -H "x-ig-app-id: 936619743392459" -A "Mozilla/5.0" \
  "https://www.instagram.com/api/v1/users/web_profile_info/?username=$BRAND" \
  > /tmp/$BRAND.json
BRAND=$BRAND python3 << 'PY'
import json, urllib.request, os
b = os.environ['BRAND']
d = json.load(open(f'/tmp/{b}.json'))['data']['user']
print('name:', d['full_name'])
url = d.get('profile_pic_url_hd') or d['profile_pic_url']
req = urllib.request.Request(url, headers={
  'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.instagram.com/'})
open(f'assets/brands/{b}.jpg', 'wb').write(urllib.request.urlopen(req, timeout=20).read())
PY
```

Then drop the brand into the creator's `workedWith` array.

The card renders the first 3 brand logos as an overlapping row, and reveals all of them in a popover on hover.

---

## 6. (Optional) Dedicated profile page with real posts

For featured creators (like Maya), build a niche-specific profile at `<niche>/demo/profile.html`. Use [`food/demo/profile.html`](../food/demo/profile.html) as a template — it bakes in Maya's data directly with a small inline localizer for HE/EN.

### Pull the 6 most recent post thumbnails

```sh
mkdir -p assets/creators/$HANDLE-posts
python3 << 'PY'
import json, urllib.request, os
h = os.environ['HANDLE']
d = json.load(open(f'/tmp/{h}.json'))['data']['user']
edges = d['edge_owner_to_timeline_media']['edges']
posts = [{
  'shortcode': e['node']['shortcode'],
  'thumb':     e['node']['thumbnail_src'],
  'ts':        e['node']['taken_at_timestamp'],
  'likes':     e['node'].get('edge_liked_by', {}).get('count')
               or e['node'].get('edge_media_preview_like', {}).get('count', 0),
  'comments':  e['node']['edge_media_to_comment']['count'],
} for e in edges]
posts.sort(key=lambda p: p['ts'], reverse=True)
headers = {'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.instagram.com/'}
for i, p in enumerate(posts[:6]):
  req = urllib.request.Request(p['thumb'], headers=headers)
  open(f'assets/creators/{h}-posts/{i+1}-{p["shortcode"]}.jpg', 'wb').write(
    urllib.request.urlopen(req, timeout=20).read())
  print(f'{i+1}: ♥ {p["likes"]} · {p["comments"]} comments')
PY
```

Note the printed engagement numbers — paste them into the profile page's post grid alongside the corresponding thumbnail filename:

```html
<div class="post-grid">
  <div class="post-thumb post-thumb-img"
       style="background-image:url('../../assets/creators/HANDLE-posts/1-SHORTCODE.jpg')">
    <span>♥ 200 · 99</span>
  </div>
  ...
</div>
```

### Wire the profile link

Set `profileUrl: "../<niche>/demo/profile.html"` on the creator entry in `niche-demo.js`. The card's "View profile" button will route there.

---

## 7. Verify locally

```sh
python3 -m http.server 8080
# open http://127.0.0.1:8080/<niche>/demo/
```

Checklist:

- [ ] Card avatar shows the real profile picture (not the gradient+initials fallback).
- [ ] `View profile` button lands on the dedicated profile page (if you built one).
- [ ] Past collabs row appears with overlapping logos; hover reveals the full list.
- [ ] HE/EN toggle works on both the card grid and the profile page.
- [ ] Profile picture and post thumbnails load (200 OK, no broken-image icons).

---

## Data honesty

Some fields come straight from IG and are **real**: handle, name, follower count, post thumbnails, post engagement counts, brand collab logos. Others are not visible on the public profile and have to be **estimated** if you want to fill them in:

| Field | Real / Estimated |
|------|------------------|
| `handle`, `name`, `followers` | Real |
| `bio`, `tags`, `posts/week` (rough) | Real / observed |
| `overlap` % | Estimated (requires audience-overlap analysis) |
| `er` engagement rate | Real if computed from scraped posts: `(likes+comments)/posts/followers` |
| `creds` audience credibility | Estimated (requires audience-quality analysis) |
| Audience demographics on the profile page | Estimated |

For a private internal pitch, mixing real identity with plausible estimates is fine. For a buyer demo where the creator might see it, either mark estimated metrics with a `~` prefix or swap them for dashes. Never publish estimated metrics under a real creator's name in public marketing material — that's the line.

---

## File touch-list

A typical featured-creator addition touches:

- `brand/niche-demo.js` — the creator entry (always)
- `assets/creators/<handle>.jpg` — avatar (always)
- `assets/creators/<handle>-posts/*.jpg` — recent post thumbnails (if featured)
- `assets/brands/<brand>.jpg` — past collab logos (if any)
- `<niche>/demo/profile.html` — dedicated profile page (if featured)

That's it.
