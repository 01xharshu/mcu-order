import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function AssembleScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (!groupRef.current) return;
    const { current } = engine.getState();
    const prog = Math.max(0, Math.min(1, (current - 0.205) / (0.350 - 0.205)));
    
    // Six life slices synchronize
    groupRef.current.position.y = -10 + prog * 2;
  });

  return (
    <group ref={groupRef} position={[0, -10, 0]}>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[(i - 2.5) * 1.5, 0, (i % 2) * -1]}>
          <planeGeometry args={[1, 3]} />
          <meshBasicMaterial color="#33ffaa" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}
