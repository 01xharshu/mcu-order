import { notFound } from "next/navigation";
import { artifacts } from "../../../content/artifacts";

export function generateStaticParams() {
  return artifacts.map((a) => ({
    slug: a.id,
  }));
}

export default async function ArtifactPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const artifact = artifacts.find((a) => a.id === resolvedParams.slug);

  if (!artifact) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{artifact.name}</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg leading-relaxed">{artifact.description}</p>
        </section>
      </div>
    </main>
  );
}
