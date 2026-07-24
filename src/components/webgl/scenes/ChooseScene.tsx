import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function ChooseScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!meshRef.current) return;
    const { current } = engine.getState();
    const prog = Math.max(0, Math.min(1, (current - 0.920) / (1.000 - 0.920)));
    
    // Branched topology
    meshRef.current.rotation.z = prog * Math.PI * 0.25;
    meshRef.current.position.y = prog * 2;
  });

  return (
    <group position={[0, -70, 0]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[15, 2]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}
