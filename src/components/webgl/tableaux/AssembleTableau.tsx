"use client";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function AssembleTableau() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const current = useExperienceStore.getState().current;
    const alpha = Math.max(0, Math.min(1, (current - 0.20) / 0.02));
    const fadeOut = Math.max(0, Math.min(1, 1 - (current - 0.36) / 0.02));
    groupRef.current.visible = alpha > 0.01 && fadeOut > 0.01;
    groupRef.current.position.z = THREE.MathUtils.lerp(THREE.MathUtils.lerp(-5, 0, alpha), 5, 1 - fadeOut);
  });

  const holdingTime = useExperienceStore(s => s.holdingTime);
  
  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={2} color="#8EA2AC" />
      {/* 6 Silhouettes */}
      {[-3, -1.8, -0.6, 0.6, 1.8, 3].map((x, i) => (
        <mesh key={i} position={[x, 0, Math.sin(i) * 2]}>
          <capsuleGeometry args={[0.4, 1.2, 4, 16]} />
          <meshStandardMaterial color="#0A0B0D" wireframe={holdingTime} />
        </mesh>
      ))}
    </group>
  );
}
