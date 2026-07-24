import { films } from "@/content/films";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Films | The MCU Continuum",
  description: "The complete cinematic record of the Marvel Cinematic Universe.",
};

export default function FilmsPage() {
  // Sort by release order
  const releasedFilms = films.filter(f => f.releaseOrder !== null)
    .sort((a, b) => (a.releaseOrder || 0) - (b.releaseOrder || 0));

  return (
    <main className="route-container page-gutter">
      <header className="continuum-section">
        <h1 className="text-6xl uppercase tracking-tight">The Cinematic Record</h1>
        <p className="text-xl ink-secondary mt-4 max-w-2xl">
          The definitive index of universal events, mapped chronologically by observation date.
        </p>
      </header>

      <section className="continuum-section">
        <div className="films-grid">
          {releasedFilms.map((film) => (
            <article key={film.id} className="film-card">
              <span className="mono text-xs ink-muted mb-2 block">
                PHASE {film.phase} // RELEASE {String(film.releaseOrder).padStart(2, '0')}
              </span>
              <h2 className="text-2xl mb-3">{film.title}</h2>
              <p className="text-base ink-secondary mb-6">{film.spoilerSafePremise}</p>
              
              <Link href={`/films/${film.id}`} className="semantic-link uppercase text-sm tracking-wide">
                Examine Record <span className="arrow">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
