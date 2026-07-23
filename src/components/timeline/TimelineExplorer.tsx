"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Event } from "../../lib/content/schemas";
import { TimeLens } from "../interactions/TimeLens";
import { SpoilerGate } from "../ui/SpoilerGate";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type TimelineMode = "release" | "chronology" | "universe";

interface Props {
  events: Event[];
}

export function TimelineExplorer({ events }: Props) {
  const [mode, setMode] = useState<TimelineMode>("release");
  const listRef = useRef<HTMLDivElement>(null);

  const sortedEvents = useMemo(() => {
    const list = [...events];
    if (mode === "release") {
      list.sort((a, b) => {
        const numA = parseInt(a.id.split("_")[1]);
        const numB = parseInt(b.id.split("_")[1]);
        return numA - numB;
      });
    } else if (mode === "chronology") {
      list.sort((a, b) => a.inUniverseDateRange.localeCompare(b.inUniverseDateRange));
    } else if (mode === "universe") {
      list.sort((a, b) => a.universe.localeCompare(b.universe));
    }
    return list;
  }, [events, mode]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (listRef.current) {
      const items = gsap.utils.toArray<HTMLElement>('.timeline-item');
      
      items.forEach((item) => {
        gsap.fromTo(item, 
          { opacity: 0, x: -50 },
          {
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, [mode]);

  return (
    <div className="page-shell pt-32 pb-24 flex-1 flex flex-col relative">
      <header className="mb-16 flex justify-between items-end relative z-10 pointer-events-none border-b border-white/5 pb-8">
        <div>
          <h1 className="text-[var(--text-h1)] font-bold mb-4 tracking-tight leading-none bg-gradient-to-r from-bone to-cosmic bg-clip-text text-transparent">
            Timeline Explorer
          </h1>
          <p className="text-muted text-lg tracking-wide">A sequential record of universally significant events.</p>
        </div>
        <div className="hidden md:flex gap-6 pointer-events-auto">
          {(["release", "chronology", "universe"] as TimelineMode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase pb-2 transition-all duration-300 relative group ${
                mode === m ? "text-bone" : "text-muted hover:text-cosmic"
              }`}
            >
              {m}
              <span className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${
                mode === m ? "w-full bg-cosmic" : "w-0 bg-cosmic/50 group-hover:w-full"
              }`} />
            </button>
          ))}
        </div>
      </header>

      <TimeLens>
        <div ref={listRef} className="flex-1 relative border-l border-white/5 ml-4 md:ml-12 pl-8 md:pl-16 py-12 space-y-24">
          {sortedEvents.map(event => (
            <div key={event.id} className="timeline-item relative group">
              {/* Node indicator */}
              <div className="absolute -left-[37.5px] md:-left-[69.5px] top-2 w-4 h-4 rounded-full bg-void border border-white/20 group-hover:border-cosmic group-hover:scale-150 transition-all duration-500 z-10 flex items-center justify-center">
                <div className="w-1 h-1 bg-cosmic rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Connecting line glow */}
              <div className="absolute -left-[36px] md:-left-[68px] top-6 bottom-[-96px] w-[1px] bg-gradient-to-b from-cosmic to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <p className="text-[10px] font-mono text-cosmic/80 mb-3 tracking-[0.2em] uppercase">
                {event.inUniverseDateRange} <span className="mx-2 opacity-50">/</span> {event.universe}
              </p>
              
              <SpoilerGate prerequisiteIds={event.relatedFilms}>
                <div className="glass-panel p-8 rounded-[var(--radius-small)] transition-all duration-500 hover:bg-white/[0.02]">
                  <h2 className="text-3xl font-bold mb-4 tracking-wide group-hover:text-arc transition-colors duration-300">
                    <Link href={`/events/${event.id}`}>{event.title}</Link>
                  </h2>
                  <p className="text-sm text-muted/80 max-w-3xl mb-8 leading-relaxed font-light">
                    {event.shortSpoilerFreeSummary}
                  </p>
                  <div className="flex flex-wrap gap-3 transition-opacity duration-500 opacity-60 group-hover:opacity-100 group-[[data-lens-reveal='true']_*]:opacity-100 group-[[data-lens-reveal='true']_*]:text-cosmic">
                    {event.participants.map(p => (
                      <Link key={p} href={`/characters/${p}`} className="text-[10px] uppercase tracking-widest font-medium border border-white/10 px-3 py-1.5 rounded transition-colors duration-300 hover:border-cosmic/50 hover:bg-cosmic/10">
                        {p}
                      </Link>
                    ))}
                  </div>
                </div>
              </SpoilerGate>
            </div>
          ))}
        </div>
      </TimeLens>
    </div>
  );
}
