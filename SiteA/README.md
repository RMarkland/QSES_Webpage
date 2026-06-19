# QSES Website Scaffold

This folder contains a lightweight static website scaffold for the University of Delaware Quantum Science and Engineering Society and its employer-facing QSE Career Fair landing page.

## How To Preview
No dependencies are required. Open `site/index.html` directly in a browser.

Optional preview server:

```powershell
cd SiteA\site
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure
- `AGENTS.md`: website-building instructions and workflow for future agent work.
- `TODO.md`: launch checklist that should be updated whenever site edits are made.
- `DESIGN_BREIF.md`: project brief.
- `raw/`: supplied research, legacy pages, budgets, and event planning data.
- `site/`: public static website scaffold.
- `site/about/`: About, Members, Events, and Funding section pages.
- `site/research/`: member research page.
- `site/CareerFair/`: combined employer- and student-facing QSE Career Fair page, including schedule, exhibitor fees, sponsorships, registration, and FAQ.
- `site/assets/data/`: curated public data extracted from the raw materials.
- `site/assets/css/styles.css`: shared visual system.
- `site/assets/js/main.js`: small progressive enhancement script.

## Current Dependency Recommendation
Install nothing for the current scaffold. It is plain HTML, CSS, and JavaScript.

If this later becomes a component-heavy site, a Node-based tool such as Astro or Vite would be reasonable, but it is not needed yet.
