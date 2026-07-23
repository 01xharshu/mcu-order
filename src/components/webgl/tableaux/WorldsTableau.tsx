"use client";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function WorldsTableau() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const current = useExperienceStore.getState().current;
    const alpha = Math.max(0, Math.min(1, (current - 0.36) / 0.02));
    const fadeOut = Math.max(0, Math.min(1, 1 - (current - 0.51) / 0.02));
    groupRef.current.visible = alpha > 0.01 && fadeOut > 0.01;
    groupRef.current.position.z = THREE.MathUtils.lerp(THREE.MathUtils.lerp(-5, 0, alpha), 5, 1 - fadeOut);
  });

  const holdingTime = useExperienceStore(s => s.holdingTime);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      {/* 3 Environments */}
      <mesh position={[-4, 0, 0]}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color="#C78450" wireframe={holdingTime} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#8EA2AC" wireframe={holdingTime} />
      </mesh>
      <mesh position={[4, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#607E91" wireframe={holdingTime} />
      </mesh>
    </group>
  );
}
