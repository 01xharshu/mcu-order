"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function GlobalHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[var(--z-header)] h-[var(--header-height)] flex items-center px-[var(--page-gutter)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      scrolled ? "glass-panel border-b border-white/5" : "bg-transparent border-transparent"
    }`}>
      <div className="flex-1 flex items-center">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border border-arc/50 flex items-center justify-center group-hover:scale-110 group-hover:border-arc transition-all duration-500">
            <div className="w-1.5 h-1.5 bg-arc rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(120,231,255,0.8)] transition-all duration-500" />
          </div>
          <span className="font-bold tracking-[0.2em] text-bone uppercase text-xs mt-0.5 group-hover:text-white transition-colors">
            MCU Chronicle
          </span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-10">
        {[
          { name: "Experience", path: "/experience" },
          { name: "Timeline", path: "/timeline" },
          { name: "Characters", path: "/characters" },
          { name: "Watch", path: "/watch" }
        ].map((item) => (
          <Link 
            key={item.name} 
            href={item.path} 
            className="relative text-xs font-medium tracking-[0.15em] text-muted uppercase hover:text-bone transition-colors duration-300 group"
          >
            {item.name}
            <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-arc scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out opacity-50" />
          </Link>
        ))}
      </nav>
      
      <div className="flex-1 flex justify-end gap-6">
        <button className="text-muted hover:text-arc text-xs font-medium uppercase tracking-[0.15em] transition-colors flex items-center gap-2">
          <span>Search</span>
          <span className="text-[10px] bg-white/5 border border-white/10 px-1.5 rounded text-muted font-mono">⌘K</span>
        </button>
      </div>
    </header>
  );
}
