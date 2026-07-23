# CURRENT UI AUDIT

## Findings from Previous Iterations

1. **Generic Layouts:** The site currently uses standard cards, grids, pills, filters, and dashboard layouts to display information. It feels like an admin panel for an API rather than a cinematic journey.
2. **Weak Typography:** The typography hierarchy is muddled. Labels are too large, line-heights are unrefined, and the text lacks the editorial confidence and negative space required by the prompt.
3. **Misapplied WebGL:** The word "WebGL" was treated as a mandate to throw floating 3D primitives and particle systems into the background without narrative justification.
4. **Color Overuse:** Too many simultaneous accent colors and glows (purple-blue glows on borders, etc.).
5. **Mobile Failure:** Mobile views are simply squished desktop views rather than thoughtfully recomposed layouts.
6. **Competing CTAs:** Users are presented with too many buttons and options at once, diluting the focal point of the scene.

## Action Plan

- **keep**: The strictly typed content schemas and population scripts.
- **rebuild**: The entire layout structure in `app/page.tsx` and the `experience` route. The global CSS variables. The WebGL Canvas setup (strip it down to a blank slate).
- **remove**: All glowing borders, generic glassmorphism panels, card grids on the main timeline, and arbitrary particle effects.
