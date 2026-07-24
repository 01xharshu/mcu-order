"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { engine } from "@/engine/ExperienceEngine";
import { usePathname } from "next/navigation";
import { useProductStore } from "@/stores/productStore";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // If reduced motion is active, don't initialize smooth scrolling
    if (useProductStore.getState().reducedVisuals || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: false, // Must be false per spec §40 so R3F can drive it
    });

    engine.setLenis(lenis);

    lenis.on("scroll", (e: any) => {
      engine.setScrollTarget(e.progress);
    });

    // We still need a manual RAF loop for pages without WebGL Canvas running the engine tick
    // In a real implementation, this would detect if R3F is active
    let rafId: number;
    function raf(time: number) {
      engine.tick(time, 1 / 60); // Simplified dt for non-WebGL pages
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      engine.setLenis(null);
    };
  }, [pathname]); // Re-init on route change or handle scroll reset

  return <>{children}</>;
}
