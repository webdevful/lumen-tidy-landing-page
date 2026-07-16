# 00 Header — Bucket Acceptance

Date: 2026-07-16
Builder verdict: PASS — owner-return repair

Evidence: `original.png`, failed `current-after.png`, and
`current-after-logo-repair-20260716-{desktop,tablet,mobile}.png`.

- Owner return: the 2026-07-14 implementation incorrectly rendered the square
  `favicon.png` plus a separate `Lumen Tidy` text span as the header brand.
- Replaced that composition with the approved transparent WLFS `logo.png`,
  which visibly reads cursive `web`, one vertical divider, and `Lumen Tidy`.
- Direct pixel inspection confirms the selected asset is 925 x 160 and is not
  `favicon.png` or `favicon-tab.png`.

- Restored Tidex's fixed 1280 px navigation pill, 72 px inner height, rounded geometry, centered link group, logo slot, and right CTA.
- Restored the decoded entrance from `translateY(-140px)`/opacity 0 to the ready state over 750/500 ms.
- Current-page and hover link states use the source blue treatment; the CTA uses the source lift, darken, and inset-shadow response.
- Tablet/mobile retains the pill and switches to an accessible menu with `aria-expanded`, body scroll lock, and close-on-navigation behavior. Playwright
  confirmed the closed menu is non-interactive and the opened menu becomes
  visible/interactable at 768 px and 390 px. The source CTA slot remains visible
  beside the menu at both breakpoints.
- Browser proof: `../RUNTIME-BEHAVIOR-PROOF.json`.

Accepted for whole-page reassembly.
