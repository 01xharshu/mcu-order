import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function SnapshotScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!meshRef.current) return;
    const { current } = engine.getState();
    const prog = Math.max(0, Math.min(1, (current - 0.350) / (0.485 - 0.350)));
    
    // Flat field
    meshRef.current.position.y = -20 + prog * 1;
  });

  return (
    <group position={[0, -20, 0]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[12, 6]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
