"use client";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function LegacyTableau() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const current = useExperienceStore.getState().current;
    const alpha = Math.max(0, Math.min(1, (current - 0.80) / 0.02));
    const fadeOut = Math.max(0, Math.min(1, 1 - (current - 0.88) / 0.02));
    groupRef.current.visible = alpha > 0.01 && fadeOut > 0.01;
    groupRef.current.position.z = THREE.MathUtils.lerp(THREE.MathUtils.lerp(-5, 0, alpha), 5, 1 - fadeOut);
  });

  const holdingTime = useExperienceStore(s => s.holdingTime);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, -5, 5]} intensity={3} color="#B59A52" />
      {/* Golden dawn pillars */}
      <mesh position={[-2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 5, 16]} />
        <meshStandardMaterial color="#B59A52" metalness={0.8} wireframe={holdingTime} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 5, 16]} />
        <meshStandardMaterial color="#B59A52" metalness={0.8} wireframe={holdingTime} />
      </mesh>
    </group>
  );
}
