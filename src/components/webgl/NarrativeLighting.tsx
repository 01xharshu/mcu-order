/**
 * Narrative Lighting — THE MCU CONTINUUM
 * Master Prompt §18
 *
 * Strict limits: max 2 dynamic point/spot lights per scene.
 * No ambient light washing out the graphite field.
 */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { engine } from "@/engine/ExperienceEngine";

export function NarrativeLighting() {
  const lightRef = useRef<THREE.PointLight>(null);

  // Very basic setup for now.
  // In a full implementation, this would interpolate colors and positions
  // based on the active scene from the engine.
  
  useFrame(() => {
    if (!lightRef.current) return;
    
    // Example: shift light position slightly with scroll to create narrative progression
    const { current } = engine.getState();
    lightRef.current.position.y = 2 - current * 4;
  });

  return (
    <group>
      {/* Dim base to ensure graphite background isn't washed out */}
      <ambientLight intensity={0.1} />
      
      {/* Primary Narrative Light */}
      <pointLight 
        ref={lightRef}
        position={[2, 2, 2]} 
        intensity={1.2} 
        color="#f3f2ee" // optical-white
        distance={10}
      />
    </group>
  );
}
