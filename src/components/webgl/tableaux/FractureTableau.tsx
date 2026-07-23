"use client";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function FractureTableau() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const current = useExperienceStore.getState().current;
    const alpha = Math.max(0, Math.min(1, (current - 0.51) / 0.02));
    const fadeOut = Math.max(0, Math.min(1, 1 - (current - 0.67) / 0.02));
    groupRef.current.visible = alpha > 0.01 && fadeOut > 0.01;
    groupRef.current.position.z = THREE.MathUtils.lerp(THREE.MathUtils.lerp(-5, 0, alpha), 5, 1 - fadeOut);
  });

  const holdingTime = useExperienceStore(s => s.holdingTime);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, 5]} intensity={2} color="#8DAEB6" />
      <directionalLight position={[5, -5, 5]} intensity={2} color="#B51F28" />
      
      {/* Opposing groups */}
      <mesh position={[-2, 0, 0]}>
        <octahedronGeometry args={[1.5]} />
        <meshStandardMaterial color="#0A0B0D" wireframe={holdingTime} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <octahedronGeometry args={[1.5]} />
        <meshStandardMaterial color="#0A0B0D" wireframe={holdingTime} />
      </mesh>
    </group>
  );
}
