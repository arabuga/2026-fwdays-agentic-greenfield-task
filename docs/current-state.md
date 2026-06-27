# Current State — Weather Explorer

Last updated: 2026-06-27

## Phase

Project Factory workflow is active.

Completed:

- G0: scaffold, factory loop, hooks, CI, trace scripts.
- G1: requirements, product brief, visual design.
- G2 partial: baseline OpenSpec exists for `comfort-score`, `shell`, and
  `city-search`.
- G3: MVP capability plan exists.
- G4 archived: `add-comfort-score`.
- G4 archived: `add-shell`.
- G4 archived: `add-city-search`.

## Current Slice

Last completed slice: `add-city-search`

Status:

- Domain implementation complete in `lib/scoring/comfort.ts`.
- Unit tests and output eval exist with `@trace FR-COMFORT-*`.
- Review-gate completed; confirmed findings were fixed and recorded in
  `openspec/changes/archive/2026-06-26-add-comfort-score/review-findings.json`.
- Change archived at `openspec/changes/archive/2026-06-26-add-comfort-score`.
- Shell implementation complete in `app/page.tsx`, `app/layout.tsx`, and
  `app/globals.css`.
- Shell content is framework-free and tested in `lib/shell/shell-content.test.ts`.
- Review-gate completed for `add-shell`; confirmed findings were fixed and
  recorded in `openspec/changes/archive/2026-06-27-add-shell/review-findings.json`.
- Change archived at `openspec/changes/archive/2026-06-27-add-shell`.
- City search pure helpers are tested in `lib/city-search/geocoding.test.ts`.
- Interactive search UI lives in `components/city-search/city-search.tsx` and
  syncs selected city URL params without forecast fetching.
- Review-gate completed for `add-city-search`; confirmed findings were fixed
  and recorded in
  `openspec/changes/archive/2026-06-27-add-city-search/review-findings.json`.
- Change archived at `openspec/changes/archive/2026-06-27-add-city-search`.

## Validation Snapshot

Last green:

- `npm run lint`
- `npm run test:run`
- `npm run build`
- `npx @fission-ai/openspec@latest validate --all --strict`
- `node scripts/check-traceability.mjs --pre-commit --check-fresh`
- `node scripts/check-trajectory.mjs`

Archived `add-city-search` green:

- `npm run test:run`
- `npm run lint`
- `npm run build`
- `npx @fission-ai/openspec@latest validate add-shell --strict`
- `npx @fission-ai/openspec@latest validate add-city-search --strict`
- `npx @fission-ai/openspec@latest validate --all --strict`
- `node scripts/check-traceability.mjs --pre-commit --check-fresh`

Expected warnings:

- Partial G2: specs/tests/recordings are missing for capabilities not started yet.
- Full MVP evidence is incomplete until UI slices add recordings and browser proof.
- `check-trajectory` warns for `add-city-search` until a commit carries
  `Slice: add-city-search`.

## Known Deferrals

- Comfort badge rendering and weekend highlight strip are deferred to the
  `add-forecast` UI integration slice.
- Full G2 is not complete; only `comfort-score`, `shell`, and `city-search`
  have baseline specs.
- Forecast data, map rendering, live clock, footer jokes, and animated
  background remain deferred to later UI slices.

## Control Debt

Agent behavior is currently governed by `AGENTS.md`, quality gates, and slice
tasks. That is sufficient for the current workshop step, but the repo still needs
a deterministic control later: a check that verifies agents updated required
handoff/review artifacts (`docs/current-state.md`, review evidence, gate notes)
when a gate passes or a slice is archived.

Candidate future enforcement:

- Add `scripts/check-current-state.mjs`, or extend `scripts/check-trajectory.mjs`.
- Fail release/archive checks if `docs/current-state.md` is missing or stale.
- Require current-state to mention the active/archived slice and next action.

## Next Actions

1. Continue UI critical path with `add-forecast`.
2. Add deterministic current-state freshness enforcement after archive flow stabilizes.
