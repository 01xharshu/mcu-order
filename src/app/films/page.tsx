import Link from "next/link";
import { films } from "@/content/films";

export default function FilmArchive() {
  return (
    <div className="page-shell py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Film Archive</h1>
        <p className="text-muted text-lg max-w-2xl">
          The complete cinematic record. Explore films by release phase, saga, or in-universe chronology.
        </p>
      </header>

      {/* Editorial Feature */}
      <section className="mb-16 border border-white/10 rounded-[var(--radius-medium)] p-8 md:p-12 bg-space relative overflow-hidden group">
        <div className="relative z-10">
          <p className="text-sm tracking-widest text-arc uppercase mb-4">Featured Record</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Iron Man</h2>
          <p className="text-muted max-w-xl mb-8">
            The spark that ignited a universe. A billionaire industrialist is held captive and must build an armored suit to escape.
          </p>
          <Link href="/films/iron-man" className="inline-block border border-white/20 px-6 py-3 rounded-[var(--radius-small)] hover:bg-white/10 transition-colors text-sm font-medium">
            Access Record
          </Link>
        </div>
        {/* Abstract domain visual placeholder */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-arc/10 to-transparent pointer-events-none" />
      </section>

      {/* Controls & List */}
      <div className="flex flex-col md:flex-row gap-8 mb-8 items-center border-b border-white/10 pb-4">
        <div className="flex gap-4 text-sm font-medium">
          <button className="text-bone border-b-2 border-arc pb-1">Release Order</button>
          <button className="text-muted hover:text-bone pb-1 transition-colors">Chronological</button>
        </div>
        <div className="ml-auto flex gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer text-muted hover:text-bone transition-colors">
            <input type="checkbox" className="rounded border-white/20 bg-transparent text-arc focus:ring-arc" />
            Hide Watched
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {films.map((film) => (
          <Link href={`/films/${film.id}`} key={film.id} className="block group">
            <div className="border border-white/10 rounded-[var(--radius-medium)] p-6 bg-elevated/30 hover:bg-elevated/80 transition-colors h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs tracking-widest text-muted uppercase">Phase {film.phase}</span>
                <span className="text-xs font-mono text-muted">{film.releaseYear}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-arc transition-colors">{film.title}</h3>
              <p className="text-sm text-muted line-clamp-3 mb-6 flex-1">
                {film.spoilerSafePremise}
              </p>
              <div className="mt-auto text-xs font-medium tracking-wide text-muted group-hover:text-bone transition-colors uppercase">
                View Details &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
