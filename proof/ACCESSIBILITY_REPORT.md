# Accessibility report

**Evidence state:** automated route audit plus implemented equivalents — 2026-07-24

## Passing evidence

- `npm run test:a11y` audits `/`, `/films`, `/timeline`, `/watch`, `/search`, `/sources`, and `/characters/tony-stark` with axe; no serious or critical violation remains.
- Every audited route has semantic headings, a landmark, visible focus, and a global skip link.
- Causal Shear has an accessible name, `aria-expanded`, keyboard Space/Enter/Arrow/Escape handling, an explicit toggle, pointer cancellation, and a reduced-motion static triptych.
- The Continuum Map is a focus-trapped dialog with Escape recovery.
- Search, film filters, timeline ordering, watched state, and saved-path controls are native keyboard controls.

## Remaining evidence

Manual screen-reader task recordings, 200% zoom recordings, Safari/Firefox/Android/iOS audits, and the WebGL static/failure parity recording are still required before Accessibility Ownership can be signed.
