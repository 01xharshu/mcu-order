import { notFound } from "next/navigation";
import { films } from "../../../content/films";

export function generateStaticParams() {
  return films.map((film) => ({
    slug: film.id,
  }));
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const film = films.find((f) => f.id === resolvedParams.slug);

  if (!film) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{film.title}</h1>
        <div className="flex gap-4 text-sm text-mcu-primary/70 mb-8">
          <span>Release Year: {film.releaseYear}</span>
          <span>Phase: {film.phase}</span>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Premise</h2>
          <p className="text-lg leading-relaxed">{film.spoilerSafePremise}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
          <p className="text-lg leading-relaxed">{film.whyItMatters}</p>
        </section>
      </div>
    </main>
  );
}
