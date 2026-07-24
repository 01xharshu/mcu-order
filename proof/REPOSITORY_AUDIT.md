# Repository audit

**Evidence state:** directly observed — 2026-07-24

- Runtime: Next.js 16.2.11, React 19.2.4, TypeScript, React Three Fiber, Zustand, Lenis.
- Package manager: npm (`package-lock.json`).
- Routes present: `/`, `/characters`, `/films`, `/films/[slug]`, `/timeline`, `/watch`, `/about`, plus development labs.
- Baseline production build: passed on 2026-07-24.
- Existing uncommitted work preserved: `src/app/characters/page.tsx`, `src/app/characters/Characters.module.css`, and `src/content/characters.ts`.

## Findings

| Area | Classification | Directly observed issue |
| --- | --- | --- |
| Global tokens/type | REBUILD | Token foundation is usable, but route styles rely on unavailable utility classes and `@extend`, which is not valid plain CSS. |
| Header | REBUILD | The scroll state adds a blurred background bar, prohibited by the current direction. |
| Continuum Map | REBUILD | It contains an empty, framed preview panel and does not trap focus. |
| Home fallback | REBUILD | Generic placeholder image panels, card-grid route selection, and incorrect final-scene copy contradict the Continuum Engine brief. |
| Spoiler control | REBUILD | The component returns a literal `1` rather than a control. |
| Films/timeline/watch routes | REBUILD | They use unavailable Tailwind-style classes and dated record/dashboard language. |
| WebGL primitives | REBUILD | Current white/red planes do not express the authored story matter and must remain nonessential. |
| `origin_anchor.png` | REMOVE FROM PRODUCTION | Literal workshop, armor, comic rendering, and a circular reactor-like element conflict with the visual and rights firewall. |
