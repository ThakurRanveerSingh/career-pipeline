# Career Pipeline

A single-page, no-build-step tracker for a 90-day job search sprint (Jul 14 – Oct 12, 2026), built for an RPA/automation engineer targeting an **Agentic Automation Architect** role. Styled as an automation console — pipeline nodes, process-flow visuals, blueprint grid.

**Live:** https://thakurranveersingh.github.io/career-pipeline/

## What it tracks

- **Pipeline status** — 3 phases (Position & Prove → Volume & Visibility → Convert) as connected nodes, with the active phase auto-detected from today's date and days remaining shown for both the phase and the full sprint.
- **Daily task queue** — 4 tasks/day that differ by phase and weekday vs. weekend, each with an expandable "how to achieve it" note.
- **Phase milestones** — one-time checklist per phase, doesn't reset daily.
- **Cumulative counters** — applications sent, referral messages sent, LinkedIn posts published, each with a soft target.
- **Streaks & totals** — current/longest streak of fully-completed days, total tasks completed all-time.
- **Daily improvement tip** — rotates deterministically by date.

## Data & privacy

All progress is stored in your browser's `localStorage` — nothing is sent to a server, and nothing job-search-related lives in this repo. Progress is per-browser/per-device; it won't sync between your laptop and phone.

## Running locally

No build step. Either:

- Open `index.html` directly in a browser, or
- Serve the folder with any static file server, e.g. `python3 -m http.server 8000`

## Deploying

Push to `main` — GitHub Pages (configured on this repo, serving from `main` / root) redeploys automatically within a minute or two.

## Customizing

Task text, "how" guidance, milestones, counter targets, and daily tips are all defined near the top of [`app.js`](app.js) in the `TASKS`, `MILESTONES`, `COUNTERS_CONFIG`, and `TIPS` objects — edit those to retarget the sprint dates, phases, or content.

## License

MIT — see [LICENSE](LICENSE).
