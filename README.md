# Level Up Learning Center | ليفل أب

Website for Level Up Learning Center: English lessons for all ages in Haifa, Zalafa, Umm al-Fahm, online, and at students' homes in the North and the Triangle.

**Live site:** https://levelup-learning-eng.pages.dev

## How it works

- Two pages, no build step: `index.html` (English) and `ar/index.html` (Arabic, right-to-left, served at `/ar`). Each page has an `EN | عربي` switch in the header.
- Each page is split into audience tabs: `#home`, `#kids`, `#teens`, `#adults`, `#exams`, `#private`, `#about`. Link straight to one, e.g. `/ar/#kids`.
- Shared styles and script live in `assets/site.css` and `assets/site.js` (tabs, scroll animations, WhatsApp).
- Content changes (prices, schedule, bio) need to be made in **both** HTML files.
- Hosted free on Cloudflare Pages. Every commit to `main` deploys automatically in about a minute.
- The booking form doesn't store anything. It opens WhatsApp with the parent's details filled in.

## Common edits

Search `index.html` for `EDIT HERE` to find each spot.

| What | Where |
|---|---|
| WhatsApp number | `var WHATSAPP = "972..."` at the top of `assets/site.js` (one place for both pages) |
| Colors | `:root` block at the top of `assets/site.css` |
| Program prices | the price card in each tab (Kids `₪260/₪460`, Teens `₪300/₪540`, Adults `₪900`, Private `₪520/₪980`) |
| At-home zone prices | the Private & at home tab (`₪680`, `₪760`, `₪880`) |
| Teaching days per city | the About tab, `Where we teach` |
| Teacher photo | replace `photo.jpg` (square, about 600×600) |

## Rolling back

Cloudflare → Workers & Pages → levelup-learning-eng → Deployments → pick an older one → **Rollback to this deployment**.
