# Lumen Tidy Header Logo Repair

Ticket: `LPF_REPAIR-lumen-tidy-header-2026-07-16`

## Owner Return

The released header used the square browser favicon as a visible page logo and
rendered `Lumen Tidy` as a separate text node. The required LPF identity is one
transparent WLFS header lockup: cursive `web`, one vertical divider, and
`Lumen Tidy`.

## Source And Defect Evidence

- Original Tidex header: `qa/lpf-section-buckets/lumen-tidy/00-header/original.png`
- Failed released composition: `qa/lpf-section-buckets/lumen-tidy/00-header/current-after.png`
- Approved identity asset: `public/images/lumen-tidy/brand/logo.png` (925 x 160)
- Browser-only square icon: `public/images/lumen-tidy/brand/favicon.png` (512 x 512)

## Repair

- `src/components/Header.astro` now renders `logo.png` as the only visible brand
  image with the accessible text `web | Lumen Tidy`.
- Removed the square-favicon image and separate visible product-name span.
- `src/styles/global.css` preserves the source-derived pill header and sizes the
  full lockup to 160 px desktop/tablet and 150 px mobile without distortion.
- Navigation, CTA, entrance animation, and responsive menu behavior were not
  removed. The source tablet/mobile header keeps both the CTA and the menu, so
  the repaired implementation now preserves that same two-control action slot.
- The coupled WLFS identity gate found the same failed favicon-plus-text
  composition in the dark footer. `src/components/Footer.astro` now uses
  `logo_white.png` as one lockup, and `src/layouts/BaseLayout.astro` reserves
  square favicon assets for the required head links.

## Local Browser Proof

Playwright rendered the production build at 1440 x 900, 768 x 1024, and
390 x 844. Header crops are stored as
`qa/lpf-section-buckets/lumen-tidy/00-header/current-after-logo-repair-20260716-{desktop,tablet,mobile}.png`.

Measured results:

- Desktop pill: 1280 x 72 at x=80; logo: 160 x 27.67, natural 925 x 160.
- Tablet pill: 691.22 x 72; logo: 160 x 27.67; menu open/closed states passed.
- Mobile pill: 374.41 x 64; logo: 150 x 25.94; menu open/closed states passed.
- Rendered logo source: `/images/lumen-tidy/brand/logo.png`.
- Rendered alt text: `web | Lumen Tidy`.

## Validation

- `npm run design:lint`: PASS with the existing DESIGN.md frontmatter warning.
- `npm run build`: PASS.
- Direct asset inspection: PASS; the logo visibly contains `web | Lumen Tidy`.
- Desktop/tablet/mobile browser render: PASS.
- Responsive menu interaction: PASS.
- Tablet/mobile CTA plus menu geometry: PASS; the 390 px header visibly fits
  the full WLFS lockup, `Get a quote`, and hamburger control without overflow.
- Footer lockup desktop/tablet/mobile: PASS; `logo_white.png` renders at its
  intrinsic 925 x 160 ratio.
- Head favicon links: PASS for 32 x 32, 16 x 16, and base square assets.
- Canonical viewport-stitched full-page captures: PASS at 1440 x 11644,
  768 x 13701, and 390 x 12519 with all reveal sections rendered.
- Strict refreshed demo visual diff: PASS at desktop, tablet, and mobile.
- Independent non-builder judge: PASS for all 9 category/detail/demo pairs and
  every detected section after a first capture-only return was corrected.
- Ordered local LPF preflight: PASS (17 pass, 2 explicit skips, advisory local
  funnel failure expected before storefront deployment).

## Explicit Preflight Scope

The ticket is bounded to the WLFS/header/footer/browser identity repair. Two
whole-page gates were explicitly skipped and recorded in the preflight report:

- `scroll-fidelity`: the existing product uses a re-authored class system and
  carries a known pre-ticket 10/24 source-selector coverage result; the current
  identity patch does not add, remove, or rename scroll targets.
- `style-parity`: the existing product carries pre-ticket dominant `h3`
  typography drift outside the header/footer identity buckets. The repaired
  header CTA/brand geometry is directly source-compared and judge-passed.

The local storefront funnel check correctly failed before release because the
new versioned `hero-preview-20260716.png` was not yet deployed on
`webdevful.com`. The public funnel gate is rerun after both deployments.

Release, public verification, and storefront funnel results are recorded after
the deployment gate completes.
