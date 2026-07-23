import { films } from "../../content/films";
import { characters } from "../../content/characters";
import { events } from "../../content/events";
import { filterSpoilers } from "../content/spoilerFilter";

export type SearchResultType = "Film" | "Character" | "Event";

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  url: string;
}

export function searchContent(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) return [];

  const lowerQuery = query.toLowerCase();

  const safeFilms = filterSpoilers(films);
  const safeCharacters = filterSpoilers(characters);
  const safeEvents = filterSpoilers(events);

  const results: SearchResult[] = [];

  safeFilms.forEach(f => {
    if (f.title.toLowerCase().includes(lowerQuery) || f.spoilerSafePremise.toLowerCase().includes(lowerQuery)) {
      results.push({
        id: f.id,
        type: "Film",
        title: f.title,
        description: f.spoilerSafePremise,
        url: `/films/${f.id}`
      });
    }
  });

  safeCharacters.forEach(c => {
    if (c.name.toLowerCase().includes(lowerQuery) || c.aliases.some(a => a.toLowerCase().includes(lowerQuery))) {
      results.push({
        id: c.id,
        type: "Character",
        title: c.name,
        description: c.spoilerSafeIdentity,
        url: `/characters/${c.id}`
      });
    }
  });

  safeEvents.forEach(e => {
    if (e.title.toLowerCase().includes(lowerQuery)) {
      results.push({
        id: e.id,
        type: "Event",
        title: e.title,
        description: e.shortSpoilerFreeSummary,
        url: `/events/${e.id}`
      });
    }
  });

  return results.slice(0, 10);
}
