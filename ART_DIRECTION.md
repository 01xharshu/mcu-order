# ART DIRECTION — The MCU Chronicle v8

## Approved Style: Cinematic Holographic Realism

The MCU Chronicle uses a single, locked illustration language to elevate the universe into a premium, high-end cinematic web application. The aesthetic combines deep atmospheric void backgrounds with vibrant, glowing high-tech UI layers and photorealistic textures.

### 1. Emotional Goal
To create a "wow" factor that feels immersive, futuristic, and dramatic. The user should feel like they are interacting with a high-end Stark Industries or TVA archival interface that projects physical history into digital space.

### 2. The Frame (1440 × 900 base)
Every tableau is composed as a 2.5D parallax space. 
- **Background Layer (Depth 5, Parallax 0.12):** Deep void, extreme shadow, volumetric lighting (e.g., the glowing embers of a forge, the dark expanse of space).
- **Middle-ground Layer (Depth 3, Parallax 0.35):** Secondary environmental context, heavily shadowed.
- **Subject Layer (Depth 1, Parallax 0.62):** The hero object or silhouette. Must have a strong graphic read and dramatic rim lighting.
- **Foreground / Connection Layer (Depth 0, Parallax 1.00):** Glassmorphic UI elements, glowing cyan or red annotations, and the Continuity Line.

### 3. Layer Separation & Depth Maps
Because we use a WebGL stencil buffer to reveal hidden "Connections," assets must be generated with strict attention to lighting. The primary Story layer should be dark and cinematic. The Connections layer (revealed on hold) introduces glassmorphism and vibrant glowing UI data overlays.

### 4. Global Prompt Structure
`A highly detailed cinematic digital illustration, premium dark mode aesthetic, cinematic holographic realism, deep void background, vibrant neon accents, glassmorphism, volumetric lighting, photorealistic textures mixed with high-tech UI elements,`

### 5. Color Palette & Lighting
- **Voids:** True black or extremely deep charcoal.
- **Lighting:** Directional volumetric light with high-contrast rim lighting.
- **Accents:** Cyan (Tech/Arc), Red (Aether/Reality), Gold (Legacy/Magic).

### 6. Required Tests before Asset Production
1. **The Stencil Test:** Can a graphic shape cut through the image without ruining the composition?
2. **The "Wow" Test:** Does this look like a high-end, modern cinematic web experience rather than a flat graphic novel?
