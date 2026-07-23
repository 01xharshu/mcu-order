"use client";

import { useEffect, useRef } from "react";
import SceneCanvas from "@/components/webgl/SceneCanvas";
import { useExperienceStore } from "@/lib/stores/experienceStore";
import clsx from "clsx";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setTarget = useExperienceStore(s => s.setTarget);
  const setHoldingTime = useExperienceStore(s => s.setHoldingTime);
  const current = useExperienceStore(s => s.current);
  const holdingTime = useExperienceStore(s => s.holdingTime);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const totalScrollable = document.body.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      setTarget(window.scrollY / totalScrollable);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setTarget]);

  const holdTimer = useRef<NodeJS.Timeout | null>(null);
  const handlePointerDown = () => { holdTimer.current = setTimeout(() => setHoldingTime(true), 180); };
  const handlePointerUp = () => { if (holdTimer.current) clearTimeout(holdTimer.current); setHoldingTime(false); };

  // Determine active scene
  const isPrologue = current < 0.08;
  const isOrigin = current >= 0.08 && current < 0.22;
  const isAssemble = current >= 0.22 && current < 0.38;
  const isWorlds = current >= 0.38 && current < 0.53;
  const isFracture = current >= 0.53 && current < 0.69;
  const isInfinity = current >= 0.69 && current < 0.82;
  const isLegacy = current >= 0.82 && current < 0.90;
  const isMultiverse = current >= 0.90;

  // Geometry calculation (simplified for this representative implementation)
  // We use standard inset clip-path where possible for smooth transitions
  let clipPath = "inset(15vh 30vw 15vh 50vw)"; // default
  
  if (isPrologue) {
    clipPath = holdingTime ? "inset(15vh 35vw 15vh 35vw)" : "inset(15vh 44vw 15vh 44vw)";
  } else if (isOrigin) {
    clipPath = holdingTime ? "inset(15vh 10vw 5vh 30vw)" : "inset(15vh 15vw 15vh 45vw)";
  } else if (isAssemble) {
    clipPath = "inset(15vh 5vw 15vh 5vw)"; 
  } else if (isWorlds) {
    clipPath = "inset(5vh 5vw 5vh 5vw)";
  } else if (isFracture) {
    clipPath = holdingTime ? "inset(10vh 5vw 10vh 5vw)" : "inset(10vh 20vw 10vh 20vw)";
  } else if (isInfinity) {
    clipPath = "inset(10vh 5vw 10vh 5vw)";
  } else if (isLegacy) {
    clipPath = "inset(10vh 10vw 10vh 10vw)";
  } else if (isMultiverse) {
    clipPath = "inset(10vh 10vw 10vh 10vw)";
  }

  return (
    <main 
      ref={containerRef}
      className={clsx("experience-container", holdingTime && "is-holding")}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ height: '1000vh' }} 
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Primary Red Continuity Line */}
        <div className={clsx("continuity-line continuity-line-v transition-transform duration-500", isFracture && "opacity-0")}></div>
        {isFracture && (
          <>
            <div className="continuity-line absolute bg-red-600 w-px h-1/2 top-0 left-[48%]"></div>
            <div className="continuity-line absolute bg-red-600 w-px h-1/2 bottom-0 left-[52%]"></div>
          </>
        )}

        {/* WebGL Layer masked by CSS clip-path */}
        <div 
          className="webgl-layer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ clipPath }}
        >
          <SceneCanvas />
        </div>

        {/* Layer 2: Connections */}
        <div className="connection-layer">
          <svg width="100%" height="100%" className="absolute inset-0 z-0">
            <pattern id="techGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(10, 11, 13, 0.05)" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#techGrid)" />
          </svg>

          {isPrologue && (
            <div className="absolute top-[25%] left-[62%] text-xs font-mono text-[var(--signal-red)]">
              // SUBJECT: UNRESOLVED<br />// THREAD: 001
            </div>
          )}
          {isOrigin && (
            <div className="absolute top-[48%] left-[20%] text-xs font-mono text-[var(--signal-red)]">
              SURVIVAL BECOMES RESPONSIBILITY<br />TECHNOLOGY OUTLIVES INTENTION
            </div>
          )}
          {isAssemble && (
            <div className="absolute top-[50%] left-[10%] text-xs font-mono text-[var(--signal-red)] flex gap-24">
              <span>CATALYST</span><span>CONSCIENCE</span><span>FORCE</span>
              <span>CONTROL</span><span>SIGHT</span><span>TRUST</span>
            </div>
          )}
          {isMultiverse && (
            <div className="absolute top-[40%] left-[15%] text-xs font-mono text-[var(--signal-red)] flex flex-col gap-8">
              <span>FOLLOW THE MAIN STORY</span>
              <span>UNDERSTAND WHEN IT HAPPENED</span>
              <span>OPEN EVERY FILM</span>
            </div>
          )}
        </div>

        {/* UI Layer */}
        <div className="ui-layer">
          <header className="site-header">
            <div className="logo tracking-widest text-sm font-bold uppercase">The MCU Chronicle</div>
            <div className="header-controls font-mono text-xs text-[var(--meta)] flex gap-8 uppercase">
              <button className="hover:text-[var(--ink)] transition-colors pointer-events-auto">Index</button>
            </div>
          </header>

          <section className="scene-content pointer-events-none">
            <div className="scene-grid">
              <div className="headline-col">
                
                {/* 1. Prologue */}
                <div className={clsx("absolute top-1/2 left-0 w-full -translate-y-1/2 transition-opacity duration-700", isPrologue ? "opacity-100" : "opacity-0")}>
                  <div className="metadata-text mb-6">PROLOGUE // THE ARCHIVE</div>
                  <h1 className="cinematic-heading text-[var(--ink)]">
                    <span className="line-mask"><span className="line-content">THE UNIVERSE</span></span>
                    <span className="line-mask"><span className="line-content">IS A FRAGMENT.</span></span>
                  </h1>
                </div>

                {/* 2. Origin */}
                <div className={clsx("absolute top-1/2 left-0 w-full -translate-y-1/2 transition-opacity duration-700", isOrigin ? "opacity-100" : "opacity-0")}>
                  <div className="metadata-text mb-6">EARTH / 2008 / ORIGIN</div>
                  <h1 className="cinematic-heading text-[var(--ink)] max-w-3xl">
                    <span className="line-mask"><span className="line-content">EVERYTHING</span></span>
                    <span className="line-mask"><span className="line-content">BEGAN WITH</span></span>
                    <span className="line-mask"><span className="line-content">A DECISION.</span></span>
                  </h1>
                </div>

                {/* 3. Assemble */}
                <div className={clsx("absolute top-3/4 left-0 w-full transition-opacity duration-700", isAssemble ? "opacity-100" : "opacity-0")}>
                  <h1 className="cinematic-heading text-[var(--ink)]">SEPARATE LIVES. <br/>ONE IMPOSSIBLE TEAM.</h1>
                </div>

                {/* 4. Worlds */}
                <div className={clsx("absolute top-3/4 left-1/4 w-full transition-opacity duration-700", isWorlds ? "opacity-100" : "opacity-0")}>
                  <h1 className="cinematic-heading text-[var(--ink)] text-center">THE UNIVERSE <br/>WAS ALWAYS LARGER.</h1>
                </div>

                {/* 5. Fracture */}
                <div className={clsx("absolute top-1/2 left-1/4 w-full transition-opacity duration-700", isFracture ? "opacity-100" : "opacity-0")}>
                  <h1 className="cinematic-heading text-[var(--ink)] text-center">POWER CREATED <br/>CONSEQUENCE.</h1>
                </div>

                {/* 6. Infinity */}
                <div className={clsx("absolute top-[10%] left-0 w-full transition-opacity duration-700", isInfinity ? "opacity-100" : "opacity-0")}>
                  <h1 className="cinematic-heading text-[var(--ink)]">EVERY PATH REACHED <br/>THE SAME END.</h1>
                </div>

                {/* 7. Legacy */}
                <div className={clsx("absolute top-1/2 left-1/2 w-full transition-opacity duration-700", isLegacy ? "opacity-100" : "opacity-0")}>
                  <h1 className="cinematic-heading text-[var(--ink)]">THEIR STORIES ENDED. <br/>THEIR DIRECTION DID NOT.</h1>
                </div>

                {/* 8. Multiverse */}
                <div className={clsx("absolute top-1/4 left-0 w-full transition-opacity duration-700 pointer-events-auto", isMultiverse ? "opacity-100" : "opacity-0")}>
                  <h1 className="cinematic-heading text-[var(--ink)] mb-12">CHOOSE HOW YOU <br/>ENTER THE STORY.</h1>
                  <div className="flex flex-col gap-4 font-mono text-sm tracking-widest text-[var(--ink-soft)]">
                    <a href="/timeline" className="hover:text-[var(--signal-red)]">TIMELINE</a>
                    <a href="/characters" className="hover:text-[var(--signal-red)]">CHARACTERS</a>
                    <a href="/films" className="hover:text-[var(--signal-red)]">FILMS</a>
                  </div>
                </div>

              </div>
            </div>

            <footer className="scene-footer absolute bottom-0 left-0 w-full px-8 pb-12">
              <div className="metadata font-mono text-xs text-[var(--meta)] uppercase">
                STATUS // {current.toFixed(2)}
              </div>
              <div className={clsx("instruction text-sm font-medium uppercase transition-colors duration-500", holdingTime ? "text-[var(--signal-red)]" : "text-[var(--ink-soft)]")}>
                {holdingTime ? "Viewing Connections" : "Hold to Reveal"}
              </div>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
