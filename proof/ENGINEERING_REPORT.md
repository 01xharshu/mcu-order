# Engineering report

**Evidence state:** directly observed — 2026-07-24

## Verification

| Command | Result |
| --- | --- |
| `npm run lint` | Passed with zero warnings/errors. |
| `npm run typecheck` | Passed. |
| `npm run validate:data` | Passed: 41 records, 41 source records, and future-chronology checks. |
| `npm run test` | Passed: 3 unit tests. |
| `npm run build` | Passed: Next.js production build. |
| `npm run test:e2e` | Passed: 6 Chromium route and interaction smoke tests. |
| `npm run test:a11y` | Passed: 7 axe audits with no serious or critical violation. |
| `npm run lighthouse` | Passed: 0.99–1.00 performance, 1.00 accessibility, best-practices, and SEO on `/`, `/films`, and `/sources`. |

## Repairs included

- Separated Vitest unit-test discovery from Playwright e2e tests.
- Updated smoke tests for semantic routes and the watch composer.
- Removed unused and invalid legacy implementation paths that blocked linting.
- Replaced invalid CSS `@extend` usage with standard CSS.
- Added a usable spoiler control, an accessible focus trap in the index, visible focus treatment, a keyboard-only skip link, and a no-motion Causal Shear presentation.
- Added direct `/continuum`, `/search`, `/sources`, and character-life routes; static film routes; global loading/error/not-found UI; robots, sitemap, canonical metadata, and security headers.
- Replaced non-functional film filters with release/upcoming/watched/phase controls, added persisted watched state and saved watch paths, and made the Causal Shear available in the film and timeline reading modes.
