"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export function TimeLens({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!active) return;
      if (e.key === "Escape") setActive(false);
      if (e.key === "ArrowRight") setPos(p => ({ ...p, x: p.x + 20 }));
      if (e.key === "ArrowLeft") setPos(p => ({ ...p, x: p.x - 20 }));
      if (e.key === "ArrowUp") setPos(p => ({ ...p, y: p.y - 20 }));
      if (e.key === "ArrowDown") setPos(p => ({ ...p, y: p.y + 20 }));
      if (e.key === "=" || e.key === "+") setScale(s => Math.min(s + 0.1, 3));
      if (e.key === "-") setScale(s => Math.max(s - 0.1, 0.5));
    };

    const handleWheel = (e: WheelEvent) => {
      if (!active) return;
      e.preventDefault(); // Prevent scroll while lens is active
      setScale(s => Math.max(0.5, Math.min(3, s - e.deltaY * 0.001)));
    };

    window.addEventListener("keydown", handleKeyDown);
    if (active) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [active]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const update = () => setDimensions({ width: element.clientWidth, height: element.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={clsx("relative w-full h-full min-h-[500px]", active && "cursor-none")}
      onPointerMove={(e) => {
        if (!active) return;
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
      }}
    >
      <div className="absolute right-4 top-4 z-50">
        <button 
          onClick={() => setActive(!active)}
          className="bg-time/20 text-time border border-time/50 px-4 py-2 rounded-[var(--radius-small)] text-xs uppercase tracking-widest font-bold hover:bg-time/30 transition-colors"
        >
          {active ? "Deactivate Time Lens (Esc)" : "Activate Time Lens"}
        </button>
      </div>

      <div className={clsx("relative w-full h-full", active && "opacity-50")}>
        {children}
      </div>

      {active && (
        <div 
          className="absolute pointer-events-none rounded-full border-2 border-time/50 shadow-[0_0_0_9999px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden z-40 backdrop-blur-md"
          style={{
            width: 250 * scale,
            height: 250 * scale,
            left: pos.x - (125 * scale),
            top: pos.y - (125 * scale),
            transition: "width 0.2s, height 0.2s"
          }}
        >
          {/* Inner lens content wrapper, shifted opposite to lens position to create masking effect */}
          <div 
            className="absolute"
            style={{
              left: -(pos.x - (125 * scale)),
              top: -(pos.y - (125 * scale)),
              width: dimensions.width,
              height: dimensions.height,
            }}
          >
            {/* The revealed content: We render children again but with a data-attribute to apply detailed styles via CSS */}
            <div data-lens-reveal="true" className="w-full h-full">
              {children}
            </div>
          </div>
          
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(34,197,94,0.2)]" />
          <div className="absolute w-2 h-2 bg-time/50 rounded-full" />
        </div>
      )}
    </div>
  );
}
