import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters | The MCU Continuum",
  description: "The Lives Field of the Continuum.",
};

export default function CharactersPage() {
  return (
    <main className="route-container page-gutter">
      <header className="continuum-section">
        <h1 className="text-6xl uppercase tracking-tight">The Lives Field</h1>
        <p className="text-xl ink-secondary mt-4 max-w-2xl">
          The causal vectors of the universe, mapped by decision points and contradictions.
        </p>
      </header>
      
      <section className="continuum-section text-center py-32 border-y border-border-subtle">
        <h2 className="text-3xl uppercase tracking-wide ink-muted">Record Currently Restricted</h2>
        <p className="text-base ink-muted mt-4">
          The Temporal Variance Authority is indexing these vectors.
        </p>
      </section>
    </main>
  );
}
