import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function PreludeScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!meshRef.current) return;
    const { current } = engine.getState();
    // In the prelude interval (0.000 to 0.075), mapping scroll to depth.
    // Normalized internal progress for Prelude:
    const prog = Math.max(0, Math.min(1, current / 0.075));
    
    // Flat field acquires depth (Z push)
    meshRef.current.position.z = -2 + prog * 1.5;
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 1 - prog;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <planeGeometry args={[10, 5]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
