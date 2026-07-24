/**
 * Experience Canvas — THE MCU CONTINUUM
 * Master Prompt §18
 *
 * Core WebGL mounting point. 
 * Handles lifecycle, resize, context loss, and rendering setup.
 */

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { CameraRig } from "./CameraRig";
import { NarrativeLighting } from "./NarrativeLighting";
import { TopologyEngine } from "./TopologyEngine";
import { PostEffects } from "./PostEffects";
import { governor } from "@/engine/qualityGovernor";

export function ExperienceCanvas() {
  const [contextLost, setContextLost] = useState(false);
  if (contextLost) {
    return (
      <div className="webgl-status">
        <p>The reading experience remains available. The optional visual layer could not start.</p>
      </div>
    );
  }

  const settings = governor.getSettings();

  return (
    <Canvas
      gl={{
        powerPreference: "high-performance",
        antialias: false, // PostEffects handles AA or we accept aliasing per spec
        stencil: true, // Required for Infinity scene absence
        depth: true,
      }}
      dpr={settings.dpr}
      camera={{ position: [0, 0, 5], fov: 36 }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          setContextLost(true);
        });
      }}
      className="!pointer-events-none" // Events handled at document level
    >
      <Suspense fallback={null}>
        {/* The Camera setup (fov: 32-36 desktop, 40-44 mobile) */}
        <CameraRig />

        {/* Narrative Lighting (max 2 dynamic lights) */}
        <NarrativeLighting />

        {/* The Scenes / Topology */}
        <TopologyEngine />

        {/* Global effects (bloom only) */}
        {settings.bloom && <PostEffects />}
      </Suspense>
    </Canvas>
  );
}
