# ASSET BRIEF

## 1. Chronicle Core
The central hero object that remains on screen and transforms throughout the journey.
- **Form:** A sculptural, asymmetrical object. Not a stock sci-fi orb, torus, or MCU replica (no Arc Reactor, no Tesseract).
- **Material:** Blackened metal, warm bone, engraved channels for light.
- **Lighting:** Internal light paths that trace its geometry.
- **States:** 
  1. Dormant (dark, minimal light).
  2. Spark (heat, side light).
  3. Assemble (locked mechanisms).
  4. Fracture (splitting apart, tension).
  5. Infinity (half dissolves into dust).
  6. Legacy (golden paths rebuild from broken edges).
  7. Multiverse (opens completely).

*Implementation Strategy (Code):* Without a provided GLB, we will construct a procedural WebGL sculpture using a combination of layered Icosahedron/Dodecahedron geometries, clipped by noise shaders to create asymmetry, and rendered with custom physical materials and emission maps.

## 2. Environment Plates / Backgrounds
- No massive starry skybox. 
- Backgrounds are represented by deep, dark voids (`#050505`) with subtle, localized lighting (a thin horizon line, a directional spotlight).
- Subtle, slow-moving grain overlay.

## 3. FX Budget
- One primary effect: "Temporal Filament" (engraved light paths).
- Ambient: Sparse depth dust.
- No heavy bloom (capped at 0.45), no chromatic aberration until the multiverse scene.
