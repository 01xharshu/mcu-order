import { films } from "../../content/films";
import { characters } from "../../content/characters";
import { events } from "../../content/events";
import { artifacts } from "../../content/artifacts";
import { factions } from "../../content/factions";
import { locations } from "../../content/locations";
import { watchPaths } from "../../content/watchPaths";
import { sources } from "../../content/sources";

export function validateContent() {
  const errors: string[] = [];

  const filmIds = new Set(films.map(f => f.id));
  const characterIds = new Set(characters.map(c => c.id));
  const eventIds = new Set(events.map(e => e.id));
  const artifactIds = new Set(artifacts.map(a => a.id));
  const factionIds = new Set(factions.map(f => f.id));
  const locationIds = new Set(locations.map(l => l.id));
  const sourceIds = new Set(sources.map(s => s.id));

  // Check Characters
  characters.forEach(char => {
    char.appearanceOrder.forEach(fId => {
      if (!filmIds.has(fId)) errors.push(`Character ${char.id} references missing film: ${fId}`);
    });
    char.relationships.forEach(rel => {
      if (!characterIds.has(rel.characterId)) errors.push(`Character ${char.id} references missing related character: ${rel.characterId}`);
    });
    char.sources.forEach(sId => {
      if (!sourceIds.has(sId)) errors.push(`Character ${char.id} references missing source: ${sId}`);
    });
  });

  // Check Events
  events.forEach(evt => {
    evt.participants.forEach(pId => {
      if (!characterIds.has(pId)) errors.push(`Event ${evt.id} references missing participant: ${pId}`);
    });
    evt.relatedFilms.forEach(fId => {
      if (!filmIds.has(fId)) errors.push(`Event ${evt.id} references missing film: ${fId}`);
    });
  });

  // Output results
  if (errors.length > 0) {
    console.error(`Validation failed with ${errors.length} errors:`);
    errors.forEach(e => console.error(e));
    return false;
  }
  
  console.log("Validation passed! No dead links found.");
  return true;
}
