"use client";

import { useState } from "react";
import { CharacterMagnetism } from "@/components/interactions/CharacterMagnetism";
import { CausalThreadWeaving } from "@/components/interactions/CausalThreadWeaving";
import Link from "next/link";
import clsx from "clsx";

type Tab = "MAGNETISM" | "WEAVING" | "FOCAL_LENS";

export default function InteractionSandbox() {
  const [activeTab, setActiveTab] = useState<Tab>("MAGNETISM");

  return (
    <div className="min-h-screen bg-[var(--color-void-000)] text-[var(--color-white-1000)] font-sans flex flex-col p-8">
      <header className="mb-8">
        <h1 className="title-hero">Interaction Sandbox</h1>
        <p className="metadata-text mt-4">Unified Testing Environment for Prototype Interactions</p>
      </header>

      <nav className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab("MAGNETISM")}
          className={clsx(
            "metadata-text px-4 py-2 border transition-colors",
            activeTab === "MAGNETISM" ? "border-[var(--color-continuity-edge)] text-[var(--color-white-1000)]" : "border-[var(--color-carbon-200)] text-[var(--color-mist-700)] hover:border-[var(--color-graphite-300)]"
          )}
        >
          Character Magnetism
        </button>
        <button 
          onClick={() => setActiveTab("WEAVING")}
          className={clsx(
            "metadata-text px-4 py-2 border transition-colors",
            activeTab === "WEAVING" ? "border-[var(--color-continuity-edge)] text-[var(--color-white-1000)]" : "border-[var(--color-carbon-200)] text-[var(--color-mist-700)] hover:border-[var(--color-graphite-300)]"
          )}
        >
          Causal Weaving
        </button>
        <Link 
          href="/lab/continuity-refraction"
          className="metadata-text px-4 py-2 border border-[var(--color-carbon-200)] text-[var(--color-mist-700)] hover:border-[var(--color-continuity-edge)] hover:text-[var(--color-white-1000)] transition-colors flex items-center gap-2"
        >
          Focal Lens (Fullscreen) ↗
        </Link>
      </nav>

      <main className="flex-1 border border-[var(--color-carbon-200)] bg-[var(--color-void-000)] p-8 relative">
        {activeTab === "MAGNETISM" && (
          <div className="w-full max-w-4xl mx-auto mt-12 animate-in fade-in zoom-in-95 duration-300">
            <CharacterMagnetism />
          </div>
        )}
        
        {activeTab === "WEAVING" && (
          <div className="w-full max-w-4xl mx-auto mt-12 animate-in fade-in zoom-in-95 duration-300">
            <CausalThreadWeaving />
          </div>
        )}
      </main>
    </div>
  );
}
