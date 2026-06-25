# Add Comfort Score

## Why

Weekend trip decisions need a single readable signal beyond raw forecast numbers.
`FR-COMFORT-01` … `FR-COMFORT-05` require a pure scoring function, Ukrainian
rationale, badge tiers, and a weekend highlight derived from daily forecast inputs.

## What Changes

- Pure `comfortScore()` in `lib/scoring/comfort.ts` with unit tests
- Badge tier helper and weekend highlight computation
- Output eval for rain/cold rationale honesty (`FR-COMFORT-03`)

## Impact

- Affected specs: `comfort-score`
- Affected code: `lib/scoring/`, `evals/cases/comfort.eval.ts`
- Dependencies: none (domain-only slice; UI wiring lands in `add-forecast` follow-up)
