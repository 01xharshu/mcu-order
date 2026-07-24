# Redesign ledger

## Action 0.1 — establish reality

**Responsible role:** Frontend engineering / visual QA  
**Status:** PASSED  
**Input:** Current repository, master build prompt, existing local changes.  
**Exact action:** Inspected framework, routes, styles, content, WebGL, user changes, and baseline build.  
**Output files:** `proof/REPOSITORY_AUDIT.md`  
**Test:** `npm run build` passed before changes.  
**Defect found:** The production UI is not safely styled without a utility-CSS build step; its fallback and route patterns contradict the locked direction.  
**Upstream cause:** Earlier implementation mixed incompatible visual directions and placeholder UI.  
**Revision:** Replace shared shell and semantic fallback first; keep WebGL nonessential.  
**Approved to continue:** YES

## Action 1.3 — lock replacement direction

**Responsible role:** Creative direction / editorial design  
**Status:** PASSED  
**Input:** Master specification sections 4–8 and 13–15.  
**Exact action:** Apply graphite field, optical-white typography, temporal-film image treatment, one seam, and semantic Causal Shear to the shared shell.  
**Output files:** Shared shell, semantic home fallback, temporal-film asset, films/timeline/watch route modes, `proof/VISUAL_QA.md`.  
**Defect found:** Existing design includes prohibited cards, framed placeholders, blurred navigation, workshop art, terminal language, and generic WebGL planes.  
**Approved to continue:** YES

## Action 2.1 — production shell and route repair

**Responsible role:** Frontend engineering / accessibility / visual QA  
**Status:** PASSED  
**Input:** Locked direction, existing routes, and directly observed defects.  
**Exact action:** Rebuilt the header, Continuum Map, spoiler control, semantic opening, Causal Shear comparison, and core reading routes.  
**Output files:** See `proof/ENGINEERING_REPORT.md`.  
**Screenshot / recording / test:** Desktop/mobile captures in `proof/`; lint, typecheck, unit, build, and Playwright smoke tests pass.  
**Defect found:** Legacy utility-class styling and generic interface patterns made important content visually unreliable.  
**Revision:** Replaced with CSS Modules and a semantic layout system.  
**Approved to continue:** YES
