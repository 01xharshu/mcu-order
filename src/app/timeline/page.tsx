import { Metadata } from "next";
import { films } from "@/content/films";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Timeline | The MCU Continuum",
  description: "The chronological sequence of the Continuum.",
};

export default function TimelinePage() {
  const chronologicalFilms = films.filter(f => f.chronologicalOrder !== null)
    .sort((a, b) => (a.chronologicalOrder || 0) - (b.chronologicalOrder || 0));

  return (
    <main className="route-container page-gutter">
      <header className="continuum-section">
        <h1 className="text-6xl uppercase tracking-tight">The Sacred Timeline</h1>
        <p className="text-xl ink-secondary mt-4 max-w-2xl">
          The events of the universe, indexed in sequence of absolute temporal occurrence.
        </p>
      </header>
      
      <section className="continuum-section">
        <div className="flex flex-col gap-8 border-l border-border-active pl-8 ml-4">
          {chronologicalFilms.map((film) => (
            <div key={film.id} className="relative">
              {/* Node on the timeline */}
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[38px] top-2" />
              
              <span className="mono text-xs ink-muted mb-1 block">
                CHRONO INDEX {String(film.chronologicalOrder).padStart(2, '0')} // RELEASE PHASE {film.phase}
              </span>
              <h2 className="text-2xl mb-2">{film.title}</h2>
              <Link href={`/films/${film.id}`} className="semantic-link uppercase text-sm tracking-wide">
                Examine Record <span className="arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
