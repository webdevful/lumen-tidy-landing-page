# 01 Hero — Bucket Acceptance

Date: 2026-07-14  
Builder verdict: PASS

Evidence: `original.png`, `current-before.png`, `current-after.png`.

- Rebuilt the hero and proof collage as one source-authored 140 vh sticky interaction rather than two unrelated sections.
- Preserved the centered 768 px type column, two-action row, five 352 px desktop media slots, and three visible tablet/mobile slots.
- Desktop scroll output matches the decoded Tidex vectors: `[45vw,110%]`, `[30vw,80%]`, `[0,70%]`, `[-30vw,90%]`, `[-45vw,120%]`, with the wrapper scaling and fading to zero at 58%.
- Mobile output matches the five decoded vectors and translates content by 8 rem at the 70% endpoint.
- Removed invented image-hover motion; source entrance timing and scroll behavior are retained.

Accepted for whole-page reassembly. Runtime values are recorded in `../RUNTIME-BEHAVIOR-PROOF.json`.
