"use client";

import { useState, useEffect, useRef } from "react";

export default function FocalLensLab() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };
    
    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setIsActive(true);
      }
    };
    
    const handleTouchEnd = () => {
      setIsActive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[var(--color-void-000)] text-[var(--color-white-1000)] relative overflow-hidden font-sans cursor-crosshair touch-none">
      
      {/* Background Simulating WebGL Base (Story Layer) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[var(--color-graphite-300)]">
        <div className="w-[600px] h-[600px] border border-[var(--color-carbon-200)] flex items-center justify-center relative">
          <span className="absolute bottom-4 left-4 text-xs font-mono text-[var(--color-mist-700)]">STORY LAYER: HOVER TO REVEAL CAUSALITY</span>
          <div className="text-[var(--color-mist-700)] opacity-50">SCENE RENDER</div>
        </div>
      </div>

      {/* Causal/Refraction Scene (Revealed via Lens Mask) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isActive ? 1 : 0,
          background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(255,54,93,0.15) 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`,
          maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-red-950/40">
          <div className="w-[600px] h-[600px] border border-[var(--color-continuity-edge)] flex items-center justify-center relative">
            <span className="absolute top-4 right-4 text-xs font-mono text-[var(--color-continuity-edge)]">CAUSAL LAYER</span>
            {/* Continuity Path Mock */}
            <div className="w-1 h-[200%] bg-[var(--color-continuity-core)] shadow-[0_0_20px_var(--color-continuity-edge)] rotate-45 transform origin-center"></div>
          </div>
        </div>
      </div>

      {/* Interface Overlay */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-between p-8 pointer-events-none">
        <header>
          <h1 className="title-hero">Focal Lens</h1>
          <p className="metadata-text mt-4">Interaction State: {isActive ? "TRACKING" : "IDLE"}</p>
        </header>

        <footer className="flex justify-between items-end">
          <div className="metadata-text text-[var(--color-mist-700)]">LABORATORY</div>
          <div className="metadata-text text-[var(--color-white-1000)]">
            {isActive ? "REVEALING CAUSAL PATH" : "MOVE POINTER TO REVEAL"}
          </div>
        </footer>
      </div>
    </div>
  );
}
