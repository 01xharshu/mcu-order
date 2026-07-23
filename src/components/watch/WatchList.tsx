"use client";

import React, { useState, useEffect } from "react";
import { useWatchStore } from "../../lib/stores/watchStore";
import { films } from "../../content/films";
import { WatchPath } from "../../lib/content/schemas";
import Link from "next/link";

export function WatchList({ path }: { path: WatchPath }) {
  const [mounted, setMounted] = useState(false);
  const watchedIds = useWatchStore((state) => state.watchedFilmIds);
  const markWatched = useWatchStore((state) => state.markWatched);
  const unmarkWatched = useWatchStore((state) => state.unmarkWatched);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="animate-pulse h-64 bg-white/5 rounded-lg"></div>;

  return (
    <div className="flex flex-col gap-4">
      {path.orderedFilmIds.map((filmId, index) => {
        const film = films.find(f => f.id === filmId);
        if (!film) return null;
        
        const isWatched = watchedIds.includes(film.id);

        return (
          <div key={film.id} className={`flex items-center justify-between p-4 rounded-lg border transition-all ${isWatched ? 'bg-white/5 border-portal/50 opacity-60' : 'bg-elevated/30 border-white/10'}`}>
            <div className="flex items-center gap-4">
              <span className="text-muted font-mono text-sm w-6 text-right">{index + 1}</span>
              <div>
                <h3 className="text-xl font-bold">
                  <Link href={`/films/${film.id}`} className="hover:text-portal transition-colors">{film.title}</Link>
                </h3>
                <p className="text-sm text-muted">Phase {film.phase} &middot; {film.releaseYear}</p>
              </div>
            </div>
            <button 
              onClick={() => isWatched ? unmarkWatched(film.id) : markWatched(film.id)}
              className={`px-4 py-2 text-sm font-bold tracking-wide uppercase rounded transition-colors ${
                isWatched 
                ? 'text-portal border border-portal/30 hover:bg-portal/10' 
                : 'bg-portal text-void hover:bg-portal/80'
              }`}
            >
              {isWatched ? 'Watched' : 'Mark Watched'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
