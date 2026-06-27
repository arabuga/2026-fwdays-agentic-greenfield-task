# Current State — Weather Explorer

Last updated: 2026-06-27

## Phase

Project Factory workflow is active.

Completed:

- G0: scaffold, factory loop, hooks, CI, trace scripts.
- G1: requirements, product brief, visual design.
- G2 partial: baseline OpenSpec exists for `comfort-score`, `shell`,
  `city-search`, `forecast`, and `map`.
- G3: MVP capability plan exists.
- G4 archived: `add-comfort-score`.
- G4 archived: `add-shell`.
- G4 archived: `add-city-search`.
- G4 archived: `add-forecast`.
- G4 archived: `add-map`.

## Current Slice

Active slice: `add-weekend-compare`

Last completed slice: `add-map`

Status:

- Leaflet OSM map, marker popup, click-to-set via Nominatim reverse geocode, and
  Tailwind/Leaflet layout fixes are shipped under `components/map/` and `lib/map/`.
- Review-gate completed for `add-map`; archived at
  `openspec/changes/archive/2026-06-27-add-map`.
- Manual browser smoke passed on 2026-06-27.
- Commit `e1f856e` carries `Slice: add-map`.

## Validation Snapshot

Last green (`add-map` archive, 2026-06-27):

- `npm run test:run` (30 tests)
- `npm run lint`
- `npm run build`
- `npx @fission-ai/openspec@latest validate --all --strict`
- `node scripts/check-traceability.mjs --pre-commit`

Expected warnings:

- Partial G2: specs/tests/recordings missing for `top-clock`, `animated-bg`,
  `bottom-jokes`, `weekend-compare`.
- Full MVP evidence incomplete until recordings land.

## Known Deferrals

- `add-weekend-compare` not started yet (next on critical path).
- Live clock, footer jokes, and animated background remain deferred polish slices.

## Next Actions

1. OpenSpec propose + implement `add-weekend-compare` (pin up to 3 cities,
   weekend compare toggle, Sat/Sun table with comfort).
2. Review-gate, smoke, archive `add-weekend-compare`.
3. Finish polish slices: `add-top-clock`, `add-animated-bg`, `add-bottom-jokes`.
