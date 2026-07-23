import { notFound } from "next/navigation";
import { characters } from "../../../content/characters";

export function generateStaticParams() {
  return characters.map((c) => ({
    slug: c.id,
  }));
}

export default async function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const character = characters.find((c) => c.id === resolvedParams.slug);

  if (!character) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{character.name}</h1>
        {character.aliases.length > 0 && (
          <p className="text-xl text-mcu-primary/70 mb-8">{character.aliases.join(", ")}</p>
        )}
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Identity</h2>
          <p className="text-lg leading-relaxed">{character.spoilerSafeIdentity}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Life Story</h2>
          <p className="text-lg leading-relaxed">{character.readableLifeStory}</p>
        </section>
      </div>
    </main>
  );
}
