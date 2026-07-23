"use client";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function MultiverseTableau() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const current = useExperienceStore.getState().current;
    const alpha = Math.max(0, Math.min(1, (current - 0.88) / 0.02));
    groupRef.current.visible = alpha > 0.01;
    groupRef.current.position.z = THREE.MathUtils.lerp(-5, 0, alpha);
  });

  const holdingTime = useExperienceStore(s => s.holdingTime);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1} />
      {/* Multiverse paths */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, 0, -i * 2]} rotation={[0, 0, i]}>
          <ringGeometry args={[2, 2.1 + (i * 0.1), 32]} />
          <meshBasicMaterial color="#ffffff" wireframe={holdingTime} />
        </mesh>
      ))}
    </group>
  );
}
