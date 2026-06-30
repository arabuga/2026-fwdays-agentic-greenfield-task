# Progress

## Current status

- **Last updated:** 2026-06-30
- **MVP:** 9/9 capability slices complete and archived.
- **QA:** proof pack + 9 Playwright demo clips with manifest.
- **Memory Bank:** adopted from `agent-ide-bootstrap` pattern; rules + filled `docs/memory/*`.
- **Homework:** project built; submission artifacts in progress (PR, video).

## Completed

- Project Factory scaffold (G0): hooks, CI, trace scripts, OpenSpec baseline.
- All MVP slices: shell → city-search → forecast → comfort-score → map →
  weekend-compare → top-clock → animated-bg → bottom-jokes.
- 50 unit tests green; lint + build + OpenSpec strict validate.
- QA traceability matrix, manual test plan, demo script, acceptance report.
- 9 automated demo recordings (`docs/qa/demo-recordings/`).
- Memory Bank layer (`.cursor/rules/memory-bank.mdc`, `docs/memory/*`).

## Pending (homework submission)

- [ ] Fill author name in `docs/homework-submission.md` and PR template.
- [ ] Record 1–2 min video demo (script in `docs/homework-submission.md`).
- [ ] Push branch to fork; open PR against `main` with filled template.
- [ ] Enable CodeRabbit on fork; iterate on review feedback.
- [ ] Submit PR link in course channel.

## Pending (optional hardening)

- [ ] Run `npm run qa:verify` with trajectory/eval evidence.
- [ ] Live deployment + Lighthouse (NFR-PERF-01/02).
- [ ] Product owner sign-off on `docs/qa/mvp-acceptance-report.md`.

## Risks / watchlist

- Video and PR author details are manual — not automatable by agent.
- Git ownership warning on this workstation may block push until `safe.directory` is set.
- Eval suite artifacts optional but strengthen "verification" story for graders.
