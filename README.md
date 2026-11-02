# Level Up Learning Center | ليفل أب

Website for Level Up Learning Center: English lessons for all ages in Haifa, Zalafa, Umm al-Fahm, online, and at students' homes in the North and the Triangle.

**Live site:** https://levelup-learning-eng.pages.dev

## How it works

- Two pages, no build step: `index.html` (English) and `ar/index.html` (Arabic, right-to-left, served at `/ar`). Each page has an `EN | عربي` switch in the header.
- Content changes (prices, schedule, bio) need to be made in **both** files.
- Hosted free on Cloudflare Pages. Every commit to `main` deploys automatically in about a minute.
- The booking form doesn't store anything. It opens WhatsApp with the parent's details filled in.

## Common edits

Search `index.html` for `EDIT HERE` to find each spot.

| What | Where |
|---|---|
| WhatsApp number | `const WHATSAPP = "972..."` near the bottom of **both** pages (international format, no `+`) |
| Colors | `:root` block at the top of the `<style>` |
| Program prices | the `Programs & prices` section (`₪380`, `₪420`, ...) |
| At-home zone prices | the `We come to you` section (`₪600`, `₪680`, `₪760`) |
| Teaching days per city | the `Where we teach` section |
| Teacher photo | replace `photo.jpg` (square, about 600×600) |

## Rolling back

Cloudflare → Workers & Pages → levelup-learning-eng → Deployments → pick an older one → **Rollback to this deployment**.
