# Lumen Tidy Design Contract

## Source Baseline

- Source URL: `https://tidex.webflow.io/`
- Source/inspiration label: Tidex
- Capture: `/Volumes/WDF-NAS-01/04-Projects/Internal-Projects/Codebases/worktrees/lumen-tidy-order-7/captures/tidex-webflow-io/desktop/screenshot-fullpage.png`
- Source intake manifest: `/Volumes/WDF-NAS-01/04-Projects/Internal-Projects/Codebases/worktrees/lumen-tidy-order-7/captures/tidex-webflow-io/source-intake/SOURCE-INTAKE-MANIFEST.md`
- Rebuild guide: `/Volumes/WDF-NAS-01/04-Projects/Internal-Projects/Codebases/worktrees/lumen-tidy-order-7/captures/tidex-webflow-io/desktop/REBUILD-GUIDE.md`
- Structure: navigation, centered split-image hero, three-image proof row, yellow about/results band, four alternating service cards, six-person team grid, yellow testimonial slider, contact image/form, dark footer.
- Runtime: 750ms navbar entrance, scroll reveal families from bottom/left/right, responsive mobile menu, five-slide testimonial carousel with previous/next controls, service-image hover zoom, and form success state.

## Tokens

> Read real values from the source capture (computed styles), not from memory.

```json
{
  "color": {
    "ink": "#0c0c0c",
    "paper": "#ffffff",
    "white": "#ffffff",
    "muted": "#f9f9f9",
    "line": "#e6e6e6",
    "accent": "#0b68fe",
    "accentDark": "#084fbe",
    "secondary": "#f9e930"
  },
  "typography": {
    "heading": "Poppins, sans-serif",
    "body": "Inter, sans-serif"
  }
}
```

## Visual Slot Contract

Classify every source visual slot through `docs/VISUAL-ASSET-CATALOG.md` and
preserve each family with approved owned/licensed/API/open-source/owner-approved
assets. Do not replace non-photo slots with raw stock photos, flattened stills,
dead embeds, or worker-authored art.

## Category

- Primary: `cleaning-maintenance`
- Secondary: `home-services`
