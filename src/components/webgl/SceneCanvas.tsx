"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { PrologueTableau } from "./tableaux/PrologueTableau";
import { OriginTableau } from "./tableaux/OriginTableau";
import { AssembleTableau } from "./tableaux/AssembleTableau";
import { WorldsTableau } from "./tableaux/WorldsTableau";
import { FractureTableau } from "./tableaux/FractureTableau";
import { InfinityTableau } from "./tableaux/InfinityTableau";
import { LegacyTableau } from "./tableaux/LegacyTableau";
import { MultiverseTableau } from "./tableaux/MultiverseTableau";
import { useExperienceStore } from "@/lib/stores/experienceStore";

function ProgressSmoother() {
  const target = useExperienceStore(s => s.target);
  const current = useExperienceStore(s => s.current);
  const setCurrent = useExperienceStore(s => s.setCurrent);

  useFrame((state, delta) => {
    const diff = target - current;
    if (Math.abs(diff) > 0.0001) {
      setCurrent(THREE.MathUtils.lerp(current, target, 4.0 * delta));
    }
  });
  return null;
}

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 35 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
    >
      <color attach="background" args={['#0A0B0D']} />
      
      <Suspense fallback={null}>
        <ProgressSmoother />
        <PrologueTableau />
        <OriginTableau />
        <AssembleTableau />
        <WorldsTableau />
        <FractureTableau />
        <InfinityTableau />
        <LegacyTableau />
        <MultiverseTableau />
      </Suspense>
    </Canvas>
  );
}
