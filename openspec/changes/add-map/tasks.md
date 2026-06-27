## 1. Dependencies and database schema

- [x] 1.1 Add `leaflet` and `react-leaflet` runtime dependencies.
- [x] 1.2 No database schema changes.

## 2. Failing tests first (red) — written from the spec, before implementation

- [x] 2.1 Unit: OSM tile URL and attribution helpers — `@trace FR-MAP-01, FR-MAP-04`.
- [x] 2.2 Unit: marker popup label uses city name — `@trace FR-MAP-02`.
- [x] 2.3 Unit: reverse geocode URL builder and click normalization — `@trace FR-MAP-03`.
- [x] 2.4 Unit: map skeleton footprint constants — `@trace FR-MAP-05`.
- [x] 2.5 Run tests and confirm RED before implementation.

## 3. Domain/content logic (green)

- [x] 3.1 Add pure map helpers in `lib/map/`.
- [x] 3.2 Add map i18n strings in `lib/i18n/uk.ts` and `lib/i18n/en.ts`.

## 4. Services and actions (green)

- [x] 4.1 Add client-side reverse geocoding fetcher.

## 5. UI and route handlers

- [x] 5.1 Add `components/map/map-panel.tsx` with dynamic client map import.
- [x] 5.2 Add Leaflet map view with marker, popup, click handler, attribution.
- [x] 5.3 Wire map panel into `WeatherExplorer` and replace shell placeholder.

## 6. Validation, docs, and archive prep

- [x] 6.1 `npm run test:run`
- [x] 6.2 `npm run lint`
- [x] 6.3 `npm run build`
- [x] 6.4 `npx @fission-ai/openspec@latest validate add-map --strict`
- [x] 6.5 `npx @fission-ai/openspec@latest validate --all --strict`
- [x] 6.6 `node scripts/check-traceability.mjs --pre-commit --check-fresh`
- [x] 6.7 Update `docs/current-state.md`
- [ ] 6.8 Run review-gate workflow; fix confirmed findings; re-run 6.1–6.6
- [ ] 6.9 Manual browser smoke: select city, map centers, click updates location.
- [ ] 6.10 Archive after 6.1–6.9 pass
