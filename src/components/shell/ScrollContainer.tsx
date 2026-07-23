"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function ScrollContainer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger when DOM is fully loaded and fonts are ready
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => ScrollTrigger.refresh());
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
