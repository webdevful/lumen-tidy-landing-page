# 00 Header — Bucket Acceptance

Date: 2026-07-14  
Builder verdict: PASS

Evidence: `original.png`, `current-before.png`, `current-after.png`.

- Restored Tidex's fixed 1280 px navigation pill, 72 px inner height, rounded geometry, centered link group, logo slot, and right CTA.
- Restored the decoded entrance from `translateY(-140px)`/opacity 0 to the ready state over 750/500 ms.
- Current-page and hover link states use the source blue treatment; the CTA uses the source lift, darken, and inset-shadow response.
- Tablet/mobile retains the pill and switches to an accessible menu with `aria-expanded`, body scroll lock, and close-on-navigation behavior.
- Browser proof: `../RUNTIME-BEHAVIOR-PROOF.json`.

Accepted for whole-page reassembly.
