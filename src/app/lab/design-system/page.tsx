export default function DesignSystemLab() {
  if (process.env.NODE_ENV === 'production') {
    return <div>Lab not available in production</div>;
  }

  return (
    <div className="p-16 max-w-6xl mx-auto flex flex-col gap-16">
      <header>
        <h1 className="title-hero">Design System</h1>
        <p className="metadata-text mt-4">Cinematic Continuity Interface — Lab</p>
      </header>

      <section>
        <h2 className="metadata-text mb-4 text-[var(--color-mist-700)]">Type Scale</h2>
        <div className="flex flex-col gap-6 p-8 border border-[var(--color-graphite-300)] rounded-lg">
          <div className="title-hero">Display Hero</div>
          <div className="title-scene">Display Scene</div>
          <div className="archival-heading">Title XL (Archival Heading)</div>
          <div className="body-lg">Body Large: The universe is a fragment. Everything began with a decision.</div>
          <div className="body-standard">Body Standard: Separate lives. One team. The universe was always larger. Power created consequence.</div>
          <div className="metadata-text">Metadata / Mono</div>
        </div>
      </section>

      <section>
        <h2 className="metadata-text mb-4 text-[var(--color-mist-700)]">Colors & Interaction</h2>
        <div className="flex gap-4">
          <div className="w-24 h-24 bg-[var(--color-void-000)] border border-[var(--color-carbon-200)] flex items-center justify-center text-xs">Void 000</div>
          <div className="w-24 h-24 bg-[var(--color-carbon-200)] flex items-center justify-center text-xs">Carbon 200</div>
          <div className="w-24 h-24 bg-[var(--color-graphite-300)] flex items-center justify-center text-xs">Graphite 300</div>
          <div className="w-24 h-24 bg-[var(--color-continuity-core)] text-[var(--color-void-000)] flex items-center justify-center text-xs font-bold">Core</div>
          <div className="w-24 h-24 bg-[var(--color-continuity-edge)] flex items-center justify-center text-xs font-bold">Edge</div>
        </div>
        
        <div className="mt-8">
          <button className="px-6 py-3 bg-[var(--color-continuity-core)] text-[var(--color-void-000)] font-bold rounded-full hover:bg-[var(--color-white-1000)] transition-colors mr-4">
            Primary Action
          </button>
          <button className="px-6 py-3 border border-[var(--color-graphite-300)] text-[var(--color-mist-700)] rounded-full hover:text-[var(--color-white-1000)] hover:border-[var(--color-white-1000)] transition-colors">
            Secondary Action
          </button>
        </div>
      </section>
    </div>
  );
}
