/**
 * Experience Canvas — THE MCU CONTINUUM
 * Master Prompt §18
 *
 * Core WebGL mounting point. 
 * Handles lifecycle, resize, context loss, and rendering setup.
 */

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { CameraRig } from "./CameraRig";
import { NarrativeLighting } from "./NarrativeLighting";
import { TopologyEngine } from "./TopologyEngine";
import { PostEffects } from "./PostEffects";
import { governor } from "@/engine/qualityGovernor";
import { engine } from "@/engine/ExperienceEngine";

export function ExperienceCanvas() {
  const [mounted, setMounted] = useState(false);
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (contextLost) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-graphite-100 text-optical-white">
        <p>WebGL Context Lost. Please refresh the page.</p>
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
