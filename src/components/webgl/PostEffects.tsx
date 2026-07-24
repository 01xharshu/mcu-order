/**
 * Post Effects — THE MCU CONTINUUM
 * Master Prompt §18
 *
 * Strict limits: Bloom only.
 * No vignette, depth of field, or film grain unless explicitly 
 * recreating a specific camera format.
 */

import { EffectComposer, Bloom } from "@react-three/postprocessing";

export function PostEffects() {
  return (
    <EffectComposer>
      <Bloom 
        luminanceThreshold={1.05} // Only affect over-bright materials
        luminanceSmoothing={0.1} 
        intensity={0.55} // Max strength per §18
        mipmapBlur 
      />
    </EffectComposer>
  );
}
