# Level Up Learning Center | ليفل أب

Website for Level Up Learning Center: English lessons for all ages in Haifa, Zalafa, Umm al-Fahm, online, and at students' homes in the North and the Triangle.

**Live site:** https://levelup-learning-english.netlify.app

## How it works

- The whole site is one file: `index.html` (HTML, CSS and a little JavaScript, no build step).
- Hosted free on Netlify. Every commit to `main` deploys automatically in about 30 seconds.
- The booking form doesn't store anything. It opens WhatsApp with the parent's details filled in.

## Common edits

Search `index.html` for `EDIT HERE` to find each spot.

| What | Where |
|---|---|
| WhatsApp number | `const WHATSAPP = "972..."` near the bottom (international format, no `+`) |
| Colors | `:root` block at the top of the `<style>` |
| Program prices | the `Programs & prices` section (`₪380`, `₪420`, ...) |
| At-home zone prices | the `We come to you` section (`₪600`, `₪680`, `₪760`) |
| Teaching days per city | the `Where we teach` section |
| Teacher photo | add `photo.jpg` to the repo and swap the "A" in `.photo` for `<img src="photo.jpg" alt="Ameen Agbaria">` |

## Rolling back

Netlify → Deploys → pick an older deploy → **Publish deploy**.
