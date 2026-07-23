import React from "react";
import { Film } from "../../lib/content/schemas";

export function FilmFeature({ film }: { film: Film }) {
  return (
    <div className="border border-white/20 bg-black/50 p-6 rounded-xl">
      <h3 className="text-2xl font-bold mb-2">{film.title}</h3>
      <div className="flex gap-4 text-sm text-mcu-primary/60 mb-4">
        <span>Year: {film.releaseYear}</span>
        <span>Phase: {film.phase}</span>
      </div>
      <p className="text-mcu-primary/80">{film.spoilerSafePremise}</p>
    </div>
  );
}
