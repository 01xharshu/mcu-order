import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function SnapScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!meshRef.current) return;
    const { current } = engine.getState();
    const prog = Math.max(0, Math.min(1, (current - 0.610) / (0.730 - 0.610)));
    
    // Absent topology - disintegrates
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 1 - (prog * 1.5);
    meshRef.current.scale.setScalar(1 + prog);
  });

  return (
    <group position={[0, -40, 0]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={1} />
      </mesh>
    </group>
  );
}
