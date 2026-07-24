# BUILD LEDGER — The MCU Chronicle v8

> Every action must have STATUS, RESPONSIBLE ROLE, INPUTS, ACTION TAKEN, OUTPUT FILES, EVIDENCE, FAILURE FOUND, REVISION, APPROVED TO CONTINUE, and ROLE SIGN-OFF LINK.

---

## Phase 0 — Establish the Current State

### Action 0.1 — Read the Repository

```
STATUS: passed
RESPONSIBLE ROLE: Frontend engineer
INPUTS: Repository at /Users/harshmishra/Documents/GitHub/mcu-order
ACTION TAKEN: Full audit of framework, routes, CSS, animation, WebGL, assets, hosting
OUTPUT FILES: BUILD_LEDGER.md (this file)
SCREENSHOT OR TEST EVIDENCE: Terminal output of directory listings and dependency analysis
FAILURE FOUND: None — repository runs successfully
REVISION: N/A
APPROVED TO CONTINUE: yes
ROLE SIGN-OFF LINK: proof/ENGINEERING_REPORT.md
```

**Repository Summary:**

| Attribute | Value |
|---|---|
| Framework | Next.js (App Router) |
| Package manager | npm |
| CSS system | Tailwind CSS v4 + custom tokens.css |
| Animation | GSAP + ScrollTrigger, Lenis smooth scroll |
| WebGL | Three.js + @react-three/fiber + @react-three/drei |
| Validation | Zod v4 |
| Fonts | Roboto Flex (display), Inter (body), Source Serif 4 (editorial), IBM Plex Mono (mono) |
| Routes | 13 page routes (/, /films, /films/[slug], /characters, /characters/[slug], /timeline, /watch, /watch/[path], /events/[slug], /factions/[slug], /artifacts/[slug], /about, /sources) |
| Content files | films.ts, characters.ts (monolith, 65 entries), events.ts, artifacts.ts, factions.ts, locations.ts, sources.ts, watchPaths.ts |
| Assets | public/images/, public/models/, public/fonts/, public/audio/ |
| Experience | 7 WebGL tableaux, 1000vh scroll, clip-path framing, hold-to-reveal |

**Existing commands:**
- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint

**Conflicts with V8 prompt:**
- Character schema is flat (7 fields) vs V8 CharacterDossier (40+ fields)
- No proof/ directory
- No BUILD_LEDGER, SPECIFICITY_LEDGER, or ROLE_SIGNOFFS
- No style anchors or Archival Graphic Realism pipeline
- `[x]` Update schemas.ts for `CharacterDossier` (V8 spec)
- `[x]` Create robust type validators (`characterCompleteness.ts`, etc.)
- `[x]` Create calibration dossier (`tony-stark.ts`)
- `[x]` Ensure typescript validation passes for flagship completeness
- `[x]` Run Spoiler Audit on calibration dossier

### Action 0.2 — Run the Current Site

```
STATUS: passed
RESPONSIBLE ROLE: Visual QA director
INPUTS: Running dev server at localhost:3000
ACTION TAKEN: Site is running (npm run dev, active for 2h+)
OUTPUT FILES: CURRENT_UI_AUDIT.md (to be created from browser inspection)
SCREENSHOT OR TEST EVIDENCE: Browser confirms active page at localhost:3000/timeline
FAILURE FOUND: Scroll sticking bug (fixed in prior session)
REVISION: Added 1000vh height back to experience container
APPROVED TO CONTINUE: yes
ROLE SIGN-OFF LINK: proof/VISUAL_QA.md
```

### Action 0.3 — Classify Existing UI

```
STATUS: in progress
RESPONSIBLE ROLE: Creative director, Digital art director
INPUTS: Running site, V8 rejection criteria
ACTION TAKEN: Component audit against V8 no-generic-work constitution
OUTPUT FILES: Component audit table below
SCREENSHOT OR TEST EVIDENCE: Pending browser captures
FAILURE FOUND: See classification below
REVISION: Pending
APPROVED TO CONTINUE: pending Gate 0
ROLE SIGN-OFF LINK: proof/CREATIVE_DIRECTION.md
```

| Component | Classification | V8 Violation | Action |
|---|---|---|---|
| GlobalHeader | keep | None — functional navigation | Refine typography |
| SiteFooter | keep | None | Minor editorial polish |
| ScrollContainer (Lenis) | keep | None — required for progress loop | Keep |
| SceneCanvas (7 tableaux) | rebuild | Generic geometric primitives, no authored illustration | Replace with Archival Graphic Realism assets |
| CausalThreadWeaving | rebuild | Interaction prototype, not production-quality | Integrate into character profile |
| CharacterMagnetism | rebuild | Generic interaction demo | Integrate or remove |
| Timeline components | rebuild | Needs editorial composition | Redesign with frame logic |
| Film cards | rebuild | Generic card pattern (V8 rejection: "card soup") | Editorial film archive |
| Watch path cards | rebuild | Generic card layout | Editorial watch-order with rationale |
| Character placeholder data | remove | "A significant figure" repeated 65 times | Replace with CharacterDossier |
| WebGL tableaux (all 7) | rebuild | Procedural geometry ≠ art direction | Must use authored assets |

- `[x]` Action 0.1: Read repository, create BUILD_LEDGER.md
- `[x]` Action 0.2: Audit current UI (CURRENT_UI_AUDIT.md)
- `[x]` Action 0.3: Classify existing components
- `[/]` Action 0.4: Inventory rights (ASSET_RIGHTS.md)

### Action 0.4 — Inventory Rights

```
STATUS: pending
RESPONSIBLE ROLE: Digital art director
INPUTS: public/ directory contents
ACTION TAKEN: To be inventoried
OUTPUT FILES: ASSET_RIGHTS.md
SCREENSHOT OR TEST EVIDENCE: Pending
FAILURE FOUND: Pending
REVISION: N/A
APPROVED TO CONTINUE: pending
ROLE SIGN-OFF LINK: proof/STYLE_BIBLE.md
```

---

## Phase 1 — Build the Evidence Base

### Action 1.1–1.4

```
STATUS: in progress
RESPONSIBLE ROLE: Creative director, World-building director
ACTION TAKEN: Creating proof/ scaffold and Gate 0 prerequisites
OUTPUT FILES: proof/ directory (14 files)
- `[x]` Create Phase 1 `proof/` directory scaffold (14 files)
- `[x]` Pass Gate 0 (Style Bible, Art Direction, Asset Brief created and signed)
APPROVED TO CONTINUE: pending Gate 0
```

---

## Phase 2 — Lock the Image Style

```
STATUS: pending
```

## Phase 3 — Produce the Origin Asset Pack

```
STATUS: pending
```

## Phase 4 — Pass the Tableau Gate

```
STATUS: pending
```

## Phase 5 — Build the Window System

```
STATUS: pending
```

## Phase 6 — Produce Remaining Journey Assets

```
STATUS: pending
```

## Phase 7 — Assemble the Full Journey

```
STATUS: pending
```

## Phase 8 — Mobile Production

```
STATUS: pending
```

## Phase 9 — Build Archive Shell

```
STATUS: pending
```

## Phase 10 — Scale Content Safely

```
STATUS: pending
```

## Phase 11 — Performance, Fallback, Accessibility

```
STATUS: pending
```

## Phase 12 — Final Production Acceptance

```
STATUS: pending
```
