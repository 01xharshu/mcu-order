import fs from "fs";
import path from "path";

const generateCharacters = (count: number) => {
  const chars = [];
  for (let i = 1; i <= count; i++) {
    chars.push(`  {
    id: "char_${i}",
    name: "Character ${i}",
    aliases: ["Alias ${i}"],
    spoilerSafeIdentity: "A hero from Earth.",
    readableLifeStory: "A long story of heroism and sacrifice.",
    appearanceOrder: ["iron-man"],
    relationships: [{ characterId: "char_${i === count ? 1 : i + 1}", description: "Friend" }],
    sources: [],
  }`);
  }
  return `import { Character } from "../lib/content/schemas";\n\nexport const characters: Character[] = [\n${chars.join(",\n")}\n];\n`;
};

const generateEvents = (count: number) => {
  const events = [];
  for (let i = 1; i <= count; i++) {
    events.push(`  {
    id: "evt_${i}",
    title: "Event ${i}",
    shortSpoilerFreeSummary: "Something happened.",
    fullSpoilerSummary: "Something major happened with consequences.",
    inUniverseDateRange: "201${Math.floor(i / 10)}",
    universe: "Main Continuity",
    participants: ["char_1", "char_2"],
    relatedFilms: ["iron-man"],
    causes: [],
    consequences: [],
    artifacts: [],
    sourceLinks: [],
    confidenceLevel: "High" as const,
  }`);
  }
  return `import { Event } from "../lib/content/schemas";\n\nexport const events: Event[] = [\n${events.join(",\n")}\n];\n`;
};

const generateArtifacts = (count: number) => {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push(`  {
    id: "art_${i}",
    name: "Artifact ${i}",
    description: "A powerful object.",
    firstAppearance: "iron-man",
    properties: ["Energy"],
    sources: [],
  }`);
  }
  return `import { Artifact } from "../lib/content/schemas";\n\nexport const artifacts: Artifact[] = [\n${items.join(",\n")}\n];\n`;
};

const generateFactions = (count: number) => {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push(`  {
    id: "fac_${i}",
    name: "Faction ${i}",
    description: "A group of people.",
    purpose: "To protect the world.",
    leaderIds: ["char_${i}"],
    memberIds: ["char_${i+1}"],
    sources: [],
  }`);
  }
  return `import { Faction } from "../lib/content/schemas";\n\nexport const factions: Faction[] = [\n${items.join(",\n")}\n];\n`;
};

const generateLocations = (count: number) => {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push(`  {
    id: "loc_${i}",
    name: "Location ${i}",
    description: "A place in the universe.",
    planet: "Earth",
    universe: "Main Continuity",
    significance: "Important battles took place here.",
    sources: [],
  }`);
  }
  return `import { Location } from "../lib/content/schemas";\n\nexport const locations: Location[] = [\n${items.join(",\n")}\n];\n`;
};

const watchPathsContent = `import { WatchPath } from "../lib/content/schemas";

export const watchPaths: WatchPath[] = [
  {
    id: "release_order",
    title: "Release Order",
    description: "The order the films were released in theaters.",
    orderedFilmIds: ["iron-man", "incredible_hulk", "iron_man_2"],
  },
  {
    id: "chronological",
    title: "Chronological Order",
    description: "The order of events in the MCU timeline.",
    orderedFilmIds: ["captain_america_first_avenger", "captain_marvel", "iron_man_1"],
  }
];
`;

const sourcesContent = `import { Source } from "../lib/content/schemas";

export const sources: Source[] = [
  {
    id: "marvel_cinematic_universe_wiki",
    title: "Marvel Cinematic Universe Wiki",
    url: "https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki",
    type: "Wiki",
    retrievedAt: new Date().toISOString(),
  }
];
`;

const writeFiles = () => {
  const dir = path.join(__dirname, "../src/content");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, "characters.ts"), generateCharacters(48));
  fs.writeFileSync(path.join(dir, "events.ts"), generateEvents(40));
  fs.writeFileSync(path.join(dir, "artifacts.ts"), generateArtifacts(16));
  fs.writeFileSync(path.join(dir, "factions.ts"), generateFactions(16));
  fs.writeFileSync(path.join(dir, "locations.ts"), generateLocations(14));
  fs.writeFileSync(path.join(dir, "watchPaths.ts"), watchPathsContent);
  fs.writeFileSync(path.join(dir, "sources.ts"), sourcesContent);
  console.log("Mock data generated!");
};

writeFiles();
