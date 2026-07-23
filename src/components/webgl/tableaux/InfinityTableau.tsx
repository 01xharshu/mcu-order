"use client";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function InfinityTableau() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const current = useExperienceStore.getState().current;
    const alpha = Math.max(0, Math.min(1, (current - 0.67) / 0.02));
    const fadeOut = Math.max(0, Math.min(1, 1 - (current - 0.80) / 0.02));
    groupRef.current.visible = alpha > 0.01 && fadeOut > 0.01;
    groupRef.current.position.z = THREE.MathUtils.lerp(THREE.MathUtils.lerp(-5, 0, alpha), 5, 1 - fadeOut);
  });

  const holdingTime = useExperienceStore(s => s.holdingTime);
  
  // Build particle geometry safely for R3F
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.1} />
      {/* Dust particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position" 
            args={[positions, 3]} 
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#A8A8A3" transparent opacity={holdingTime ? 0.8 : 0.2} />
      </points>
    </group>
  );
}
