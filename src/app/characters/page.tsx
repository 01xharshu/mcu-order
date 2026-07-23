import Link from "next/link";
import { CharacterMagnetism } from "@/components/interactions/CharacterMagnetism";
import { CausalThreadWeaving } from "@/components/interactions/CausalThreadWeaving";
import { characters } from "../../content/characters";
import { SpoilerGate } from "@/components/ui/SpoilerGate";
import { AnimatedStaggerGrid } from "@/components/ui/AnimatedStaggerGrid";

export default function CharacterExplorer() {
  return (
    <div className="page-shell pt-32 pb-24">
      <header className="mb-20">
        <h1 className="text-[var(--text-h1)] font-bold mb-6 tracking-tight leading-none bg-gradient-to-r from-bone to-muted bg-clip-text text-transparent">
          Character<br/>Database
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          Trace the lives, relationships, and consequences of the individuals who shaped the universe.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-24 relative z-10">
        <div className="glass-panel rounded-[var(--radius-medium)] overflow-hidden h-[400px]">
          <CharacterMagnetism />
        </div>
        <div className="glass-panel rounded-[var(--radius-medium)] overflow-hidden h-[400px]">
          <CausalThreadWeaving />
        </div>
      </div>

      <AnimatedStaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {characters.map((char) => (
          <SpoilerGate key={char.id} prerequisiteIds={char.appearanceOrder}>
            <Link href={`/characters/${char.id}`} className="block group h-full">
              <div className="glass-panel rounded-[var(--radius-small)] p-8 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:bg-white/[0.02] hover:-translate-y-1">
                
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-arc opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700" />
                
                <h3 className="text-2xl font-semibold mb-2 relative z-10 tracking-wide">{char.name}</h3>
                {char.aliases.length > 0 && (
                  <p className="text-xs text-arc/80 tracking-[0.2em] uppercase mb-6 relative z-10 font-mono">
                    {char.aliases[0]}
                  </p>
                )}
                
                <p className="text-sm text-muted/70 line-clamp-4 relative z-10 leading-relaxed font-light mt-auto">
                  {char.spoilerSafeIdentity}
                </p>
                
                {/* Stylized corner bracket */}
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20 group-hover:border-arc/50 transition-colors duration-500" />
              </div>
            </Link>
          </SpoilerGate>
        ))}
      </AnimatedStaggerGrid>
      
      {/* Background radial glow */}
      <div className="fixed top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-vibranium/10 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
}
