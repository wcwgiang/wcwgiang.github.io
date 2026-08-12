# wcwgiang.github.io

Personal homepage / digital résumé for Wayne C.W. Giang, Ph.D.
Plain HTML, CSS, and a few lines of JS — no build step.

## Files
Primary site (the "fancy" layout, served at the root):
- `index.html` — all content (edit copy here)
- `fancy.css` — design tokens + layout; light/dark themes near the top
- `fancy.js` — theme toggle, accordion, research-theme publication filter, scroll-spy

Backup site (the minimal single-column version, reachable at `/basic.html`):
- `basic.html`, `styles.css`, `script.js`

Shared:
- `assets/` — `resume.pdf`, `cv.pdf`, `favicon.svg`, and (optional) `headshot.jpg`
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll processing)

## Deploy to GitHub Pages (user site, root URL)

1. Create a **new public repo named exactly** `wcwgiang.github.io`
   (must match your GitHub username for the root-URL user site).
2. Push this folder to the `main` branch:
   ```bash
   git remote add origin git@github.com:wcwgiang/wcwgiang.github.io.git
   git add -A && git commit -m "Initial site"
   git branch -M main && git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute. Live at **https://wcwgiang.github.io/**.

## To update
Edit the files, commit, push. Pages redeploys automatically.

## Still to personalize
- Replace the Google Scholar `user=XXXX` links with your real Scholar ID.
- Confirm LinkedIn / GitHub handles.
- Drop a `headshot.jpg` into `assets/` (square works best) — hidden automatically if absent.
- Optional custom domain: add a `CNAME` file containing the domain and set the DNS.
