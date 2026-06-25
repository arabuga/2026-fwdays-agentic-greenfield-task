# Design — add-comfort-score

## Goals / Non-goals

**Goals**

- Framework-free scoring in `lib/scoring/comfort.ts` (`TC-PURE-01`)
- Deterministic 0–100 score from five Open-Meteo daily fields
- Ukrainian rationale ≤ 80 chars, no emoji, no weather contradictions
- Badge tier mapping and weekend Sat+Sun average helper

**Non-goals**

- Day-card UI, tooltip markup, compare table (`FR-COMPARE-02`)
- Persisting scores server-side
- Publishing scoring weight ADR (tuning is internal; outcomes are spec-bound)

## Key decisions

| Decision | Alternatives | Trade-off |
|----------|--------------|-----------|
| Deduction-based formula from ideal 22 °C | ML / lookup table | Transparent, testable; weights are implementation detail |
| Template rationales by dominant factor | LLM-generated text | Deterministic, no API cost; less variety |
| `weekendComfortHighlight(days)` scans forecast rows | UI-only averaging | Keeps logic in `lib/` for unit tests |

## Data model

No database. Types:

- `DailyComfortInput` — feels-like °C, precip %, wind km/h, cloud %, UV index
- `ComfortResult` — `{ value: 0..100, rationale: string }`
- `ForecastDayInput` — `{ date: ISO-8601 date, input }` for weekend helper

## Error handling

Invalid or out-of-range inputs throw `ComfortValidationError` synchronously.
Callers (forecast UI) catch and show inline degradation — never silent fallback.

## Risks & mitigations

| Risk | Mitigation |
|------|------------|
| Rationale says «приємно» in rain | Guard + output eval `eval-comfort-rationale-rainy-cold` |
| Weekend date edge cases | UTC-noon parsing; tests with fixed ISO dates |
| Score drift after weight tweak | Golden fixtures in unit tests for warm/rainy bands |
