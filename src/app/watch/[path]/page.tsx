import { notFound } from "next/navigation";
import { watchPaths } from "../../../content/watchPaths";
import { WatchList } from "@/components/watch/WatchList";

export function generateStaticParams() {
  return watchPaths.map((p) => ({
    path: p.id,
  }));
}

export default async function WatchPathPage({ params }: { params: Promise<{ path: string }> }) {
  const resolvedParams = await params;
  const watchPath = watchPaths.find((p) => p.id === resolvedParams.path);

  if (!watchPath) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{watchPath.title}</h1>
        <p className="text-xl text-mcu-primary/70 mb-12">
          {watchPath.description}
        </p>
        
        <WatchList path={watchPath} />
      </div>
    </main>
  );
}
