# Trade Journal

A self-contained static web app (no build step, no backend). Upload your Fidelity
"Accounts History" CSV and it gives you win rate, profit factor, expectancy,
streaks, a shortcomings breakdown, and a full trade log — all computed and
stored locally in your browser (nothing is ever uploaded to a server).

## Files
- `index.html` — the whole app (HTML/CSS/JS, no framework, no build step)
- `manifest.json` — PWA manifest (lets Android/Chrome install it as a real app)
- `logo192.png`, `logo512.png`, `logo-mono.png` — app icons
- `hero-bull.jpg` — hero banner image

## Deploy via GitHub + Vercel (same pipeline as your other projects)

1. Create a new GitHub repo and push these files to it as-is (root of the repo,
   no subfolder — `index.html` should sit at the repo root).
2. In Vercel: **Add New... → Project**, import that repo.
3. Framework preset: choose **"Other"** (this is a plain static site — no
   build command, no output directory needed; Vercel will serve the files directly).
4. Deploy.

That's it — no environment variables, no backend, no database. Once it's live,
open the Vercel URL in Chrome on Android and use **⋮ → Install app** to add it
to your home screen as a standalone app.

## Notes
- Data is stored in `localStorage`, scoped to whatever domain you deploy this
  on. If you later move it to a different domain, you'll need to re-upload
  your CSVs there — browsers don't share localStorage across domains.
- To update the look or add features, just edit `index.html` directly — it's
  a single plain file.
