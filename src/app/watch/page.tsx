import Link from "next/link";
import { watchPaths } from "../../content/watchPaths";
import { WatchProgressSummary } from "@/components/watch/WatchProgressSummary";
import { AnimatedStaggerGrid } from "@/components/ui/AnimatedStaggerGrid";

export default function WatchPlanner() {
  return (
    <div className="page-shell pt-32 pb-24 relative">
      <header className="mb-20 relative z-10">
        <h1 className="text-[var(--text-h1)] font-bold mb-6 tracking-tight leading-none bg-gradient-to-r from-bone to-portal bg-clip-text text-transparent">
          Watch<br/>Planner
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          Track your journey through the universe. Choose a curated path or follow the chronological timeline.
        </p>
      </header>

      <AnimatedStaggerGrid className="grid md:grid-cols-2 gap-8 mb-24 relative z-10">
        {watchPaths.map(path => (
          <section key={path.id} className="glass-panel rounded-[var(--radius-medium)] p-10 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden flex flex-col h-full hover:-translate-y-1">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-portal/0 to-portal/0 group-hover:to-portal/5 transition-all duration-700" />
            
            <h2 className="text-3xl font-bold mb-4 group-hover:text-bone text-muted transition-colors relative z-10 tracking-wide">{path.title}</h2>
            <p className="text-muted/70 text-sm mb-10 relative z-10 font-light leading-relaxed flex-1">
              {path.description}
            </p>
            
            <div className="relative z-10 mt-auto">
              <Link href={`/watch/${path.id}`} className="inline-flex items-center gap-4 text-portal uppercase tracking-[0.2em] text-[10px] font-bold group/link">
                <span>Explore Path</span>
                <span className="w-8 h-[1px] bg-portal/50 group-hover/link:w-16 group-hover/link:bg-portal transition-all duration-500" />
              </Link>
            </div>
          </section>
        ))}
      </AnimatedStaggerGrid>

      <section className="relative z-10">
        <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-muted border-b border-white/5 pb-4">Your Progress</h3>
        <div className="glass-panel p-8 rounded-[var(--radius-medium)]">
          <WatchProgressSummary />
        </div>
      </section>
      
      {/* Background portal glow */}
      <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-portal/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-y-1/2 -translate-x-1/4" />
    </div>
  );
}
