"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface CharacterNode {
  id: string;
  name: string;
  x: number;
  y: number;
  relatedIds: string[];
}

const NODES: CharacterNode[] = [
  { id: "stark", name: "Tony Stark", x: 150, y: 150, relatedIds: ["rhodes", "parker", "rogers"] },
  { id: "rhodes", name: "James Rhodes", x: 350, y: 100, relatedIds: ["stark"] },
  { id: "parker", name: "Peter Parker", x: 100, y: 350, relatedIds: ["stark"] },
  { id: "rogers", name: "Steve Rogers", x: 400, y: 300, relatedIds: ["stark"] },
];

export function CausalThreadWeaving() {
  const [dragSource, setDragSource] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [connectedPair, setConnectedPair] = useState<[string, string] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!dragSource || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPointer({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleUp = (e: PointerEvent) => {
      if (!dragSource || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;

      // Find drop target
      const dropTarget = NODES.find(n => {
        if (n.id === dragSource) return false;
        const dist = Math.hypot(n.x - px, n.y - py);
        return dist < 50; // Hit radius
      });

      if (dropTarget) {
        const sourceNode = NODES.find(n => n.id === dragSource)!;
        if (sourceNode.relatedIds.includes(dropTarget.id) || dropTarget.relatedIds.includes(sourceNode.id)) {
          // Valid connection
          setConnectedPair([sourceNode.id, dropTarget.id]);
        } else {
          // Invalid connection resets
          setConnectedPair(null);
        }
      }
      setDragSource(null);
    };

    if (dragSource) {
      window.addEventListener("pointermove", handleMove);
      window.addEventListener("pointerup", handleUp);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragSource]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] border border-[var(--color-carbon-200)] bg-[var(--color-void-000)] overflow-hidden select-none font-sans"
    >
      <div className="absolute top-4 left-4 metadata-text z-30">
        PROTOTYPE: CAUSAL THREAD WEAVING
        <p className="text-[var(--color-mist-700)] font-normal mt-1 normal-case tracking-normal font-sans">Drag from one character to a related character to discover their connection.</p>
      </div>

      {/* SVG Canvas for threads */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {/* Active dragging thread */}
        {dragSource && (
          <line 
            x1={NODES.find(n => n.id === dragSource)!.x}
            y1={NODES.find(n => n.id === dragSource)!.y}
            x2={pointer.x}
            y2={pointer.y}
            stroke="var(--color-continuity-edge)"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
        )}
        
        {/* Established valid connection */}
        {connectedPair && (
          <line 
            x1={NODES.find(n => n.id === connectedPair[0])!.x}
            y1={NODES.find(n => n.id === connectedPair[0])!.y}
            x2={NODES.find(n => n.id === connectedPair[1])!.x}
            y2={NODES.find(n => n.id === connectedPair[1])!.y}
            stroke="var(--color-continuity-core)"
            strokeWidth="4"
            style={{ filter: "drop-shadow(0 0 8px var(--color-continuity-edge))" }}
          />
        )}
      </svg>

      {/* Nodes */}
      {NODES.map(node => (
        <div
          key={node.id}
          onPointerDown={() => {
            setDragSource(node.id);
            setConnectedPair(null);
          }}
          className={clsx(
            "absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center border-2 px-4 py-2 cursor-pointer transition-colors duration-200 z-20 font-mono",
            dragSource === node.id ? "bg-[var(--color-carbon-200)] border-[var(--color-continuity-edge)] text-[var(--color-white-1000)] shadow-[0_0_15px_var(--color-continuity-edge)]" : "bg-[var(--color-void-000)] border-[var(--color-graphite-300)] text-[var(--color-mist-700)] hover:border-[var(--color-continuity-core)] hover:text-[var(--color-white-1000)]"
          )}
          style={{ left: node.x, top: node.y }}
        >
          <span className="font-bold text-xs whitespace-nowrap">{node.name}</span>
          {dragSource === node.id && (
            <span className="text-[10px] text-[var(--color-continuity-edge)] mt-1">WEAVING...</span>
          )}
        </div>
      ))}

      {/* Result Panel */}
      {connectedPair && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[var(--color-carbon-200)] border border-[var(--color-continuity-edge)] px-6 py-4 backdrop-blur text-center z-30">
          <p className="metadata-text text-[var(--color-continuity-core)] mb-2">CONNECTION FORMED</p>
          <p className="text-sm font-bold text-[var(--color-white-1000)]">
            {NODES.find(n => n.id === connectedPair[0])?.name} & {NODES.find(n => n.id === connectedPair[1])?.name}
          </p>
          <p className="text-xs text-[var(--color-mist-700)] mt-1">
            {
              (() => {
                const RELATIONSHIPS: Record<string, string> = {
                  "stark-rogers": "First met in The Avengers (2012)",
                  "rogers-stark": "First met in The Avengers (2012)",
                  "stark-rhodes": "Long-time allies since Iron Man (2008)",
                  "rhodes-stark": "Long-time allies since Iron Man (2008)",
                  "stark-parker": "Mentorship established in Captain America: Civil War (2016)",
                  "parker-stark": "Mentorship established in Captain America: Civil War (2016)",
                };
                const pairKey = `${connectedPair[0]}-${connectedPair[1]}`;
                return RELATIONSHIPS[pairKey] || "Known connection in the MCU";
              })()
            }
          </p>
          <button 
            onClick={() => setConnectedPair(null)}
            className="mt-3 text-[10px] uppercase text-[var(--color-mist-700)] hover:text-[var(--color-white-1000)] underline"
          >
            Clear Thread
          </button>
        </div>
      )}
    </div>
  );
}
