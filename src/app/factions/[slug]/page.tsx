import { notFound } from "next/navigation";
import { factions } from "../../../content/factions";

export function generateStaticParams() {
  return factions.map((f) => ({
    slug: f.id,
  }));
}

export default async function FactionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const faction = factions.find((f) => f.id === resolvedParams.slug);

  if (!faction) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{faction.name}</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
          <p className="text-lg leading-relaxed">{faction.purpose}</p>
        </section>
      </div>
    </main>
  );
}
