/**
 * THE MCU CONTINUUM — Content Validation
 * Master Prompt §54, lines 5003–5009
 */

import { films } from "../../content/films";
import { FilmSchema } from "./schemas";

export type ValidationResult = {
  valid: boolean;
  errors: string[];
  summary: {
    films: number;
    releasedFilms: number;
    upcomingFilms: number;
    sourceRecords: number;
  };
};

export function validateAllContent(): ValidationResult {
  const errors: string[] = [];
  const seenIds = new Set<string>();
  const seenReleaseOrder = new Set<number>();

  for (const film of films) {
    const result = FilmSchema.safeParse(film);
    if (!result.success) {
      errors.push(`${film.id}: ${result.error.issues.map((issue) => issue.message).join(", ")}`);
    }

    if (seenIds.has(film.id)) errors.push(`${film.id}: duplicate id`);
    seenIds.add(film.id);

    if (seenReleaseOrder.has(film.releaseOrder)) errors.push(`${film.id}: duplicate release order`);
    seenReleaseOrder.add(film.releaseOrder);

    for (const prereq of film.prerequisiteIds) {
      if (!films.find(f => f.id === prereq)) {
        errors.push(`${film.id}: unresolved prerequisite ${prereq}`);
      }
    }

    for (const next of film.watchNextIds) {
      if (!films.find((entry) => entry.id === next)) errors.push(`${film.id}: unresolved next film ${next}`);
    }

    if (film.status !== "released" && film.chronologicalOrder !== null) {
      errors.push(`${film.id}: upcoming and TBD titles cannot assert a chronology position`);
    }

    if (film.status !== "released" && film.fullConsequence) {
      errors.push(`${film.id}: upcoming and TBD titles cannot carry a full-story consequence`);
    }

    if (film.sources.some((source) => source.supportsClaimIds.length === 0)) {
      errors.push(`${film.id}: every source must declare the claim records it supports`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    summary: {
      films: films.length,
      releasedFilms: films.filter((film) => film.status === "released").length,
      upcomingFilms: films.filter((film) => film.status !== "released").length,
      sourceRecords: films.reduce((total, film) => total + film.sources.length, 0),
    },
  };
}
