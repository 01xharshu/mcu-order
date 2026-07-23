import { useWatchStore } from "../stores/watchStore";
import { usePreferenceStore } from "../stores/preferenceStore";
import { films } from "../../content/films";
import { Film } from "./schemas";

export function isSpoiler(prerequisiteFilmIds: string[]): boolean {
  // Can't use Zustand hooks directly outside of React components unless we read the state.
  // Actually, we can get the state directly from the store.
  const spoilerLevel = usePreferenceStore.getState().spoilerLevel;
  if (spoilerLevel === "full") return false;

  const watchedIds = useWatchStore.getState().watchedFilmIds;
  
  // If ANY prerequisite is NOT watched, this is a spoiler.
  return prerequisiteFilmIds.some(id => !watchedIds.includes(id));
}

export function filterSpoilers<T extends { relatedFilms?: string[], appearanceOrder?: string[], prerequisiteIds?: string[] }>(
  items: T[]
): T[] {
  const spoilerLevel = usePreferenceStore.getState().spoilerLevel;
  if (spoilerLevel === "full") return items;

  return items.filter(item => {
    const dependencies = item.prerequisiteIds || item.relatedFilms || item.appearanceOrder || [];
    return !isSpoiler(dependencies);
  });
}
