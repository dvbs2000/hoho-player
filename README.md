# Hoho 3D Player website

Privacy policy and support pages for Hoho 3D Player (Apple Vision Pro), published with GitHub Pages at
https://dvbs2000.github.io/hoho-player/

- `privacy/` — privacy policy (Chinese and English)
- `support/` — contact and FAQ (Chinese and English)
- `contact.json` — the contact line at the bottom of the app's home page (app 1.0.1 and later). One line per language:
  `"zh-Hans"` for Chinese, `"default"` for every other language; later languages may add their own code (`"ja"`, `"de"`, …).
  An empty line hides the contact line. Links are Markdown: `[Discord](https://discord.gg/…)`, `[email](mailto:…)`
  (https and mailto only). Keep it to one short line, and never about payment or discounts (App Review 3.1.1). The app
  reads the file when the home page shows, at most every few hours, and falls back to
  `https://cdn.jsdelivr.net/gh/dvbs2000/hoho-player@main/contact.json` when this site can't be reached.

Static HTML and CSS only; the app's source code is not part of this repository.
