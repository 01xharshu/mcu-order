# REFERENCE AUDIT

## Lusion Benchmark Observations

- **Hero Silhouette and Focal Subject:** Lusion always provides a single, unmistakably dominant object taking up significant viewport space. It is highly detailed but surrounded by massive negative space.
- **Grid and Safe Areas:** The edges of the screen are kept incredibly clean. Navigation and metadata sit neatly in the extreme corners (semantic HTML layer).
- **Type Scale and Line Breaks:** Very large statement typography with forced line breaks to create shape, never flowing arbitrarily based on viewport width.
- **Amount of Copy:** No more than one or two sentences per viewport during the visual journey. Long paragraphs only exist in deep archival/about pages.
- **Foreground, Subject, and Background Layers:** Definite separation. The subject interacts with light and scroll, the background parallax is minimal and subtle, and UI foreground is entirely static text.
- **Scroll-Controlled Transformations:** Scroll acts as a time-scrubber. Going backwards seamlessly reverses the exact animation sequence without jitter.
- **Pointer Behavior:** The pointer influences light direction or slight parallax offset (maximum 5-10% of screen size), avoiding dizzying 360 camera spins on mousemove.
- **Entry and Exit Timing:** Text staggers in with masked lines (reveals), objects settle with heavy damping and slow ease-outs.
- **Color Count:** Highly restrained. Monochromatic foundations with one deliberate accent color for storytelling.
- **Stillness vs Movement:** Once a scene settles on scroll-stop, it achieves a nearly still "hero frame." The visuals aren't constantly vibrating or rotating endlessly.
- **Mobile Differences:** Drastically simplified UI, no complex multi-touch interactions. Text moves above or below the subject to prevent obscuring the focal point.
