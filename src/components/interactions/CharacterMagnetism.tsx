"use client";

import { useState, useRef } from "react";
import clsx from "clsx";

interface CharacterNode {
  id: string;
  name: string;
  x: number;
  y: number;
  relatedIds: string[];
}

const NODES: CharacterNode[] = [
  { id: "stark", name: "Tony Stark", x: 200, y: 200, relatedIds: ["rhodes", "parker", "rogers"] },
  { id: "rhodes", name: "James Rhodes", x: 300, y: 150, relatedIds: ["stark"] },
  { id: "parker", name: "Peter Parker", x: 100, y: 300, relatedIds: ["stark"] },
  { id: "rogers", name: "Steve Rogers", x: 400, y: 300, relatedIds: ["stark", "barnes"] },
  { id: "barnes", name: "Bucky Barnes", x: 500, y: 250, relatedIds: ["rogers"] },
  { id: "strange", name: "Stephen Strange", x: 150, y: 100, relatedIds: ["parker"] },
];

export function CharacterMagnetism() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getMagneticOffset = (node: CharacterNode) => {
    if (!hoveredId) return { x: 0, y: 0 };
    if (hoveredId === node.id) return { x: 0, y: 0 };
    
    const isRelated = node.relatedIds.includes(hoveredId) || NODES.find(n => n.id === hoveredId)?.relatedIds.includes(node.id);
    
    if (isRelated) {
      // Pull closer to hovered node
      const target = NODES.find(n => n.id === hoveredId)!;
      const dx = target.x - node.x;
      const dy = target.y - node.y;
      return { x: dx * 0.15, y: dy * 0.15 }; // 15% closer
    } else {
      // Push slightly away
      const target = NODES.find(n => n.id === hoveredId)!;
      const dx = node.x - target.x;
      const dy = node.y - target.y;
      return { x: dx * 0.05, y: dy * 0.05 };
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] border border-white/10 rounded-[var(--radius-medium)] bg-void overflow-hidden"
    >
      <div className="absolute top-4 left-4 text-xs tracking-widest text-reality uppercase font-bold">
        Prototype: Character Magnetism
      </div>
      
      {/* Edges */}
      <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-30">
        {hoveredId && NODES.map(node => {
          if (node.id !== hoveredId) return null;
          return node.relatedIds.map(relId => {
            const target = NODES.find(n => n.id === relId);
            if (!target) return null;
            const sourceOffset = getMagneticOffset(node);
            const targetOffset = getMagneticOffset(target);
            return (
              <line 
                key={`${node.id}-${relId}`}
                x1={node.x + sourceOffset.x} 
                y1={node.y + sourceOffset.y} 
                x2={target.x + targetOffset.x} 
                y2={target.y + targetOffset.y} 
                stroke="#ef4444" 
                strokeWidth="2"
                strokeDasharray="4 4"
                className="transition-all duration-500 ease-out"
              />
            );
          });
        })}
      </svg>

      {/* Nodes */}
      {NODES.map(node => {
        const offset = getMagneticOffset(node);
        const isHovered = hoveredId === node.id;
        const isRelated = hoveredId && (node.relatedIds.includes(hoveredId) || NODES.find(n => n.id === hoveredId)?.relatedIds.includes(node.id));
        const isUnrelated = hoveredId && !isHovered && !isRelated;
        
        return (
          <button
            key={node.id}
            onPointerEnter={() => setHoveredId(node.id)}
            onPointerLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId(node.id)}
            onBlur={() => setHoveredId(null)}
            className={clsx(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-bold text-xs whitespace-nowrap transition-all duration-500 ease-out",
              isHovered ? "bg-reality text-void z-20 scale-110 px-4 py-2" : "bg-elevated text-muted border border-white/10 px-3 py-1 z-10 hover:border-reality",
              isRelated && "border-reality/50 text-bone",
              isUnrelated && "opacity-20 blur-[1px]"
            )}
            style={{
              left: node.x + offset.x,
              top: node.y + offset.y,
            }}
          >
            {node.name}
          </button>
        );
      })}
    </div>
  );
}
