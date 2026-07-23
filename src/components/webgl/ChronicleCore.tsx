"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function ChronicleCore() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  const basePositionX = isMobile ? 0 : 2.5;
  const basePositionY = isMobile ? -1.5 : 0;
  
  const coreRef = useRef<THREE.Group>(null);
  const outerShellRef = useRef<THREE.Mesh>(null);
  const innerGoldRef = useRef<THREE.Mesh>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  
  const rotationY = useRef(0);

  useFrame((state, delta) => {
    if (!coreRef.current || !outerShellRef.current || !innerGoldRef.current || !coreMeshRef.current) return;

    const current = useExperienceStore.getState().current;
    const holdingTime = useExperienceStore.getState().holdingTime;
    
    // Time multiplier for idle rotation
    const timeMultiplier = holdingTime ? 0.2 : 1.0;
    rotationY.current += delta * 0.15 * timeMultiplier;
    
    // Overall Rotation
    const progressRotationX = current * Math.PI;
    const progressRotationY = current * Math.PI * 2;
    coreRef.current.rotation.set(0.2 + progressRotationX, -0.4 + rotationY.current + progressRotationY, 0);

    // Subtle parallax pointer
    const { x, y } = useExperienceStore.getState().pointer;
    coreRef.current.position.x = THREE.MathUtils.lerp(coreRef.current.position.x, basePositionX + (x * 0.2), 4 * delta);
    coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, basePositionY + (y * 0.2), 4 * delta);

    // SCENE BEHAVIORS
    
    // 3. Assemble (0.25 - 0.41): Scale locks down tightly
    let scaleTarget = 1.0;
    if (current >= 0.25 && current < 0.41) scaleTarget = 0.9;
    
    // 4. Fracture (0.41 - 0.57): Outer shell moves outward, splits
    let fractureOffset = 0;
    if (current >= 0.41) fractureOffset = Math.min((current - 0.41) * 2, 0.2);
    
    // 5. Infinity (0.57 - 0.72): Inner gold paths fade out (dissolve)
    let goldOpacity = 0.15;
    if (current >= 0.57 && current < 0.72) {
      goldOpacity = THREE.MathUtils.lerp(0.15, 0.02, (current - 0.57) * 6);
    }
    
    // 6. Legacy (0.72 - 0.87): Gold paths return, much brighter
    if (current >= 0.72) {
      goldOpacity = THREE.MathUtils.lerp(0.02, 0.4, (current - 0.72) * 6);
    }

    // 7. Multiverse (0.87 - 1.00): Core fully opens / scales up
    if (current >= 0.87) {
      scaleTarget = THREE.MathUtils.lerp(1.0, 1.5, (current - 0.87) * 7);
      fractureOffset = THREE.MathUtils.lerp(0.2, 0.5, (current - 0.87) * 7);
    }

    // Apply scale
    coreRef.current.scale.lerp(new THREE.Vector3(scaleTarget, scaleTarget, scaleTarget), 4 * delta);
    
    // Apply fracture
    const s = 1 + fractureOffset;
    outerShellRef.current.scale.lerp(new THREE.Vector3(s, s, s), 4 * delta);

    // Apply material opacity
    (innerGoldRef.current.material as THREE.MeshBasicMaterial).opacity = THREE.MathUtils.lerp(
      (innerGoldRef.current.material as THREE.MeshBasicMaterial).opacity,
      goldOpacity,
      4 * delta
    );
  });

  return (
    <group ref={coreRef} position={[basePositionX, basePositionY, 0]}>
      <mesh ref={coreMeshRef}>
        <dodecahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.7} metalness={0.8} flatShading />
      </mesh>

      <mesh ref={outerShellRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <icosahedronGeometry args={[2.1, 0]} />
        <meshStandardMaterial color="#151515" roughness={0.4} metalness={1.0} wireframe transparent opacity={0.5} />
      </mesh>

      <mesh ref={innerGoldRef} rotation={[-Math.PI / 6, Math.PI / 3, 0]}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="#D2B66A" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}
