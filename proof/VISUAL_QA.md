# Visual QA

**Evidence state:** directly observed — 2026-07-24

## Captures inspected

| Route | Viewport | Capture | Result |
| --- | ---: | --- | --- |
| `/` | 1440 × 900 | `proof/home-1440x900.png` | Pass: one oversized typographic mass, vertical continuity seam, right-side temporal slice, and a single reading path. |
| `/` | 390 × 844 | `proof/home-390x844-final.png` | Pass: independently composed vertical crop; only product name and index remain in the header; no route-link collision. |
| `/films` | 1440 × 900 | `proof/films-1440x900-final.png` | Pass: focused typographic index and media field are visible together; no poster grid or framed cards. |
| `/timeline` | 390 × 844 | `proof/timeline-390x844.png` | Pass: the desktop ribbon becomes a readable vertical sequence rather than a cropped horizontal control. |

## Closed defects

| Defect | Resolution |
| --- | --- |
| Skip link was permanently visible in the first capture. | Visually hidden until keyboard focus. |
| Mobile route links collided with the opening scroll cue. | Removed from the mobile opening; Index remains available in the header. |
| Film index began below the initial desktop viewport. | Reduced the introductory composition and brought focused content into the initial frame. |
| Film search label was visually exposed despite being intended for assistive technology. | Added the shared `.sr-only` implementation. |

## Known limits

- The optional WebGL world is not mounted on the homepage because its existing primitive scenes fail the locked visual direction. The semantic CSS composition is intentionally the active fallback while real story-matter WebGL is rebuilt.
- Existing uncommitted character-route work was preserved and not overwritten in this pass.
