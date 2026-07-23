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
      className="relative w-full h-[500px] border border-white/10 rounded-[var(--radius-medium)] bg-void overflow-hidden select-none"
    >
      <div className="absolute top-4 left-4 text-xs tracking-widest text-mind uppercase font-bold z-30">
        Prototype: Causal Thread Weaving
        <p className="text-muted/50 font-normal mt-1 normal-case tracking-normal">Drag from one character to a related character to discover their connection.</p>
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
            stroke="#eab308"
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
            stroke="#22c55e"
            strokeWidth="3"
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
            "absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center border-2 px-4 py-2 cursor-pointer transition-colors duration-200 z-20",
            dragSource === node.id ? "bg-mind/20 border-mind text-bone shadow-[0_0_15px_rgba(234,179,8,0.5)]" : "bg-elevated border-white/10 text-muted hover:border-white/30 hover:text-bone"
          )}
          style={{ left: node.x, top: node.y }}
        >
          <span className="font-bold text-xs whitespace-nowrap">{node.name}</span>
          {dragSource === node.id && (
            <span className="text-[10px] text-mind uppercase mt-1">Weaving...</span>
          )}
        </div>
      ))}

      {/* Result Panel */}
      {connectedPair && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-elevated/90 border border-success/30 px-6 py-4 rounded-[var(--radius-small)] backdrop-blur text-center z-30 animate-in fade-in slide-in-from-bottom-4">
          <p className="text-xs text-success uppercase tracking-widest font-bold mb-2">Connection Formed</p>
          <p className="text-sm font-bold text-bone">
            {NODES.find(n => n.id === connectedPair[0])?.name} & {NODES.find(n => n.id === connectedPair[1])?.name}
          </p>
          <p className="text-xs text-muted mt-1">First met in Captain America: Civil War (2016)</p>
          <button 
            onClick={() => setConnectedPair(null)}
            className="mt-3 text-[10px] uppercase text-muted hover:text-bone underline"
          >
            Clear Thread
          </button>
        </div>
      )}
    </div>
  );
}
