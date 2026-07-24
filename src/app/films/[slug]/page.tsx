import { films } from "@/content/films";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const film = films.find(f => f.id === params.slug);
  if (!film) return { title: "Not Found" };
  
  return {
    title: `${film.title} | The MCU Continuum`,
    description: film.spoilerSafePremise,
  };
}

export default function FilmDossierPage({ params }: Props) {
  const film = films.find(f => f.id === params.slug);
  if (!film) notFound();

  return (
    <main className="route-container page-gutter">
      <header className="continuum-section">
        <Link href="/films" className="mono text-xs ink-muted uppercase tracking-widest mb-4 inline-block hover:text-white">
          ← Return to Record
        </Link>
        <h1 className="text-6xl uppercase tracking-tight">{film.title}</h1>
        
        <div className="flex gap-4 mt-6 mono text-xs uppercase tracking-wide">
          <span className="ink-muted border border-border-subtle px-3 py-1 rounded">
            Phase {film.phase}
          </span>
          <span className="ink-muted border border-border-subtle px-3 py-1 rounded">
            Rel: {film.releaseYear} // {film.releaseOrder ? String(film.releaseOrder).padStart(2, '0') : 'TBD'}
          </span>
          <span className="ink-muted border border-border-subtle px-3 py-1 rounded">
            Chr: {film.chronologicalOrder ? String(film.chronologicalOrder).padStart(2, '0') : 'TBD'}
          </span>
        </div>
      </header>

      <section className="continuum-section reading-plane p-8 rounded-lg">
        <div className="max-w-3xl">
          <h2 className="text-2xl uppercase mb-4 text-ink-on-light">Public Record</h2>
          <p className="text-lg leading-relaxed text-ink-muted-on-light mb-8">
            {film.spoilerSafePremise}
          </p>

          <h2 className="text-2xl uppercase mb-4 text-ink-on-light mt-12">Continuum Impact</h2>
          <p className="text-lg leading-relaxed text-ink-muted-on-light">
            {film.whyItMattersSafe}
          </p>
        </div>
      </section>
    </main>
  );
}
