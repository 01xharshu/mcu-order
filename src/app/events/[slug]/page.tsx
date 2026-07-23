import { notFound } from "next/navigation";
import { events } from "../../../content/events";

export function generateStaticParams() {
  return events.map((e) => ({
    slug: e.id,
  }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const event = events.find((e) => e.id === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{event.title}</h1>
        <div className="flex gap-4 text-sm text-mcu-primary/70 mb-8">
          <span>Date: {event.inUniverseDateRange}</span>
          <span>Universe: {event.universe}</span>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="text-lg leading-relaxed">{event.shortSpoilerFreeSummary}</p>
        </section>
      </div>
    </main>
  );
}
