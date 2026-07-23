import { sources } from "../../content/sources";

export default function SourcesPage() {
  return (
    <main className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sources</h1>
        <p className="text-xl text-mcu-primary/70 mb-12">
          The Marvel Cinematic Universe is vast. Here are the sources used to compile this database.
        </p>
        
        <div className="flex flex-col gap-6">
          {sources.map(source => (
            <div key={source.id} className="border border-white/10 p-6 rounded-lg bg-black/40 backdrop-blur-md">
              <h2 className="text-xl font-semibold mb-2">{source.title}</h2>
              <div className="flex gap-4 text-sm text-mcu-primary/50 mb-4">
                <span className="px-2 py-1 bg-white/5 rounded-full">{source.type}</span>
                <span>Retrieved: {new Date(source.retrievedAt).toLocaleDateString()}</span>
              </div>
              <a href={source.url} target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-400 underline">
                Visit Source →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
