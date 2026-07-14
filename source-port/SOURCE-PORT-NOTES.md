# Source-port baseline notes (generated)

- De-froze `page.html`: stripped 114 frozen runtime inline prop(s) across
  50 element(s) (opacity/transform/translate/rotate/scale/will-change/
  transform-style/filter/perspective — the GSAP/IX2 mid-animation freeze).
- Removed 5 non-portable runtime script tag(s)
  (webflow.js/jQuery/webfont — never vendor these; reimplement natively).
- Copied 1 persisted source stylesheet(s) into `source-port/css/`
  (includes Webflow's base `w-*` component layout).
- Generated 6 authored-interaction stub(s) with the source's own
  timings/easings/targets in `public/scripts/source-interactions.js` — each
  carries a `WDF-BUILD-TODO` marker that `qa:lpl-build-contract` blocks on.

Preview the baseline with: `npx serve source-port` (or open `source-port/index.html`).

## What the build still owes (BUILD-CONTRACT.json)

1. Rebuild the page as `src/pages/index.astro` from this baseline, preserving
   the section skeleton (`qa:lpl-source-contract`).
2. Replace ALL media with local owned/licensed/API-downloaded files with
   provenance; replace ALL copy with original product copy; wire WLFS identity.
3. Implement every stubbed interaction natively and delete its stub entry;
   prove behavior with real browser state changes.
4. Transcribe design facts from `DESIGN-TOKENS.json`/`STATE-RULES.json` — never
   re-measure from screenshots.
5. Finish with `npm run qa:lpl-preflight -- --slug <slug> --product-repo . \
   --capture-dir /Volumes/WDF-NAS-01/04-Projects/Internal-Projects/Codebases/worktrees/lumen-tidy-order-7/captures/tidex-webflow-io/desktop --url <demo-url>`.
