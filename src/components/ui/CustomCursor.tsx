"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;
    
    gsap.set([cursor, dot], { xPercent: -50, yPercent: -50 });
    
    let xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    let yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
    let dotXTo = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3" });
    let dotYTo = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3" });
    
    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") || 
        target.closest("button")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* The trailing ring */}
      <div 
        ref={cursorRef} 
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-arc/40 pointer-events-none z-[var(--z-cursor)] transition-transform duration-300 ${
          isPointer ? "scale-150 border-arc bg-arc/5" : "scale-100"
        } hidden md:block mix-blend-screen`}
      />
      {/* The exact dot */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1 h-1 bg-arc rounded-full pointer-events-none z-[var(--z-cursor)] hidden md:block mix-blend-screen"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}} />
    </>
  );
}
