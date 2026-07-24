/**
 * Camera Rig — THE MCU CONTINUUM
 * Master Prompt §18
 *
 * Controlled camera system.
 * FOV: 32-36 desktop, 40-44 mobile.
 * No OrbitControls.
 */

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { engine } from "@/engine/ExperienceEngine";

export function CameraRig() {
  const { camera, size } = useThree();

  useEffect(() => {
    // Set FOV based on aspect ratio (mobile vs desktop)
    const isMobile = size.width < 768;
    // @ts-ignore
    camera.fov = isMobile ? 42 : 34;
    camera.updateProjectionMatrix();
  }, [size, camera]);

  useFrame((state, delta) => {
    // The engine ticks from the layout's RAF, but we can also tick it here if we want R3F to drive it.
    // For now, engine is ticked by LenisProvider.
    // Read from the engine for any parallax or camera movement.
    
    if (engine.reducedMotion) return;

    // Subtle pointer parallax per §18
    const { pointerCurrent } = engine.getState();
    
    // Parallax limits: max 1.5 deg rotation, max 0.2 units translation
    const targetX = pointerCurrent.x * 0.2;
    const targetY = pointerCurrent.y * 0.2;
    
    // Lerp is handled by the engine, so we just assign
    state.camera.position.x = targetX;
    state.camera.position.y = -targetY;
    
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
