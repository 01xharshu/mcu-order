"use client";

import React, { useState, useEffect } from "react";
import { useWatchStore } from "../../lib/stores/watchStore";
import { films } from "../../content/films";
import Link from "next/link";

export function WatchProgressSummary() {
  const [mounted, setMounted] = useState(false);
  const watchedIds = useWatchStore((state) => state.watchedFilmIds);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (watchedIds.length === 0) {
    return (
      <div className="bg-elevated/30 border border-white/5 rounded-[var(--radius-medium)] p-8 text-center">
        <p className="text-muted mb-4">You haven't marked any films as watched yet.</p>
        <p className="text-sm">Progress is saved locally on your device.</p>
      </div>
    );
  }

  const watchedCount = watchedIds.length;
  const totalCount = films.length;
  const percent = Math.round((watchedCount / totalCount) * 100);

  return (
    <div className="bg-elevated/30 border border-white/5 rounded-[var(--radius-medium)] p-8">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-bold">Universe Coverage</p>
        <p className="text-xl font-mono text-portal">{percent}%</p>
      </div>
      <div className="w-full bg-void rounded-full h-2 mb-6 overflow-hidden">
        <div className="bg-portal h-2 rounded-full transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
      <p className="text-sm text-muted">You have watched {watchedCount} out of {totalCount} films.</p>
      <div className="mt-4">
        <button 
          onClick={() => useWatchStore.getState().clearProgress()}
          className="text-xs text-red-500 hover:text-red-400 border border-red-500/20 px-3 py-1 rounded transition-colors"
        >
          Reset Progress
        </button>
      </div>
    </div>
  );
}
