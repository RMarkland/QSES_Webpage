# QSES Website Builder Agent

## Mission
Build and maintain a refreshed website for the University of Delaware Quantum Science and Engineering Society (QSES), with a polished employer-facing landing page for a graduate-level quantum career fair.

The site should serve two connected audiences:

- Students, faculty, and collaborators looking for QSES events, membership, accomplishments, and contact paths.
- Recruiters, HR teams, technical hiring managers, corporate relations staff, and sponsor representatives evaluating whether to join or sponsor the QSE career fair.

## Source Of Truth
Read these first before making substantial content or layout changes:

- `DESIGN_BREIF.md`: project brief and visual direction.
- `raw/QSES_Webpage.html`: legacy QSES page content, including purpose, accomplishments, socials, and calls to join.
- `raw/QSE Career Fair Organizer - Itinerary.csv`: event schedule.
- `raw/QSE Career Fair Organizer - Attendance Funds.csv`: proposed package prices and attendance assumptions.
- `raw/QSE Career Fair Organizer - Fair Costs.csv`: budget, audience counts, and funding context.
- `raw/UD Quantum Career Fair Sponsors and Exhibitors.pdf`: current public exhibitor fees, included amenities, and sponsorship tiers.
- `raw/QSE Career Fair - Sheet1.csv`: employer prospect research. Treat emails and unpublished points of contact as private planning data; do not publish them on the site without explicit approval.
- `raw/UDelaware_Employers.html`: University of Delaware visual and content tone reference.
- `raw/UMaryland_CareerFair.html`, `raw/UMichigan_CareerFair.html`, `raw/UVirginia_CareerFair.html`: peer career fair and sponsorship structure references.

## Current Stack
Use a static site unless the project outgrows it. The scaffold under `site/` works without a build step:

- HTML pages per route.
- Shared CSS in `site/assets/css/styles.css`.
- Shared progressive JS in `site/assets/js/main.js`.
- Curated public data in `site/assets/data/`.
- Raw source files remain in `raw/` and should not be edited during normal site work.

No package manager or framework is required for the current scaffold.

## Information Architecture
Keep the public site focused and easy to scan:

- `site/index.html`: main public homepage, including the QSES purpose statement and bridge to the employer landing page.
- `site/about/index.html`: QSES Home page for the club section.
- `site/about/members/index.html`: member and officer information.
- `site/about/events/index.html`: QSES club events and accomplishments.
- `site/research/index.html`: member research page, currently under construction.
- `site/about/funding/index.html`: fellowship opportunities and application help, currently under construction.
- `site/career-fair/index.html`: primary career fair landing page for employers and students, including registration areas and the fair schedule. Do not create a separate public career fair schedule page unless explicitly requested.
- `site/contact/index.html`: general contact and social links.

Top-level navigation should stay restrained: `Home`, `Career Fair`, `Research`, and `Contact`. Put About, Members, Events, and Funding under the Home dropdown, and all employer and student fair content under the Career Fair dropdown.

## Employer Landing Page Requirements
The employer page must include, in this order unless there is a clear content reason to change it:

1. Hero with event name, date, location, and primary CTA.
2. Audience statistics.
3. Employer benefits.
4. Employer package tiers.
5. Schedule.
6. Student registration and employer registration steps.
7. FAQ.
8. Final CTA.

Primary employer CTA text: `Register Your Company`

Secondary CTA text: `View Sponsorship Options`

When a registration link is unknown, use a visible placeholder such as `Registration link coming soon` and list it in `TODO.md`.

## Design Rules
Follow the brief and UD employer page tone:

- White or off-white page background.
- Navy or charcoal text.
- UD yellow as the main accent.
- Add a restrained teal/blue secondary accent from the legacy QSES page.
- Institutional SaaS feel: credible, polished, quiet, and easy to scan.
- Cards may be used for repeated items and packages, with border radius no larger than 8px.
- Use subtle borders and shadows sparingly.
- Prefer dense but readable information layouts over marketing fluff.
- Avoid generic stock-photo-heavy design, excessive gradients, dark form surfaces, complicated animations, or overly playful visuals.

## Content Rules
Write for busy recruiters and technical hiring managers:

- Lead with who attends, what employers get, what it costs, how to register, and what happens during the day.
- Use the current public numbers: 150 target students and 15 companies. Use the exhibitor fees and sponsorship tiers from `raw/UD Quantum Career Fair Sponsors and Exhibitors.pdf`.
- Make quantum relevance explicit: quantum computing, photonics, semiconductor skills, cryogenics, national labs, defense, software, electrical engineering, materials science, physics, and computer science.
- Do not publish raw prospect emails or unconfirmed company commitments.
- Mark unconfirmed details as `TBD`, `proposed`, or `coming soon` rather than making them sound final.

## Workflow For Future Changes
1. Re-read `DESIGN_BREIF.md` and the relevant raw source files.
2. Identify whether the change is public content, design system, data, or routing.
3. Update curated data in `site/assets/data/` before hard-coding repeated schedule, package, or statistic content.
4. Update the relevant HTML page and shared CSS/JS.
5. Update `TODO.md` in the same pass: mark completed items, add newly discovered placeholders, and record any launch blockers created by the edit.
6. Check the page in a browser or static server at desktop and mobile widths.
7. Verify CTAs, navigation, contrast, keyboard focus, and no text overlap.
8. Document unknowns in the final handoff.

## Accessibility And Quality Checklist
Before calling a page ready:

- Each page has one clear `h1`.
- Navigation links are consistent across pages.
- Buttons and links have clear accessible names.
- Colors meet reasonable contrast on white/off-white backgrounds.
- Layout does not break at mobile widths.
- FAQ accordions work with keyboard and remain readable without JavaScript.
- Images have useful alt text or are omitted until meaningful assets are available.
- Public pages do not expose private planning contact data.
