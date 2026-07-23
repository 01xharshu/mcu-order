import fs from "fs";
import path from "path";

const charNames = [
  "Tony Stark", "Steve Rogers", "Thor Odinson", "Bruce Banner", "Natasha Romanoff", "Clint Barton",
  "James Rhodes", "Sam Wilson", "Bucky Barnes", "Wanda Maximoff", "Vision", "Pietro Maximoff",
  "Nick Fury", "Maria Hill", "Phil Coulson", "Peggy Carter", "Sharon Carter", "Scott Lang",
  "Hope van Dyne", "Hank Pym", "Janet van Dyne", "T'Challa", "Shuri", "Okoye",
  "Nakia", "Stephen Strange", "Wong", "Peter Parker", "Carol Danvers", "Kamala Khan",
  "Monica Rambeau", "Peter Quill", "Gamora", "Drax", "Rocket", "Groot",
  "Nebula", "Mantis", "Loki", "Sylvie", "Mobius", "Marc Spector",
  "Steven Grant", "Layla El-Faouly", "Matt Murdock", "Kingpin", "Yelena Belova", "Kate Bishop"
];

const eventTitles = [
  "Tony Stark kidnapped in Afghanistan", "Steve Rogers receives Super Soldier Serum", "Captain America frozen in ice",
  "Captain Marvel returns to Earth", "Tony Stark declares I am Iron Man", "Avengers Initiative formed",
  "Thor exiled to Earth", "Battle of New York", "Fall of SHIELD",
  "Creation of Ultron", "Destruction of Sokovia", "Sokovia Accords signed",
  "Avengers Civil War", "Doctor Strange defeats Dormammu", "Destruction of Asgard",
  "Thanos attacks the Statesman", "The Snap", "Scott Lang escapes Quantum Realm",
  "The Time Heist", "The Blip / Final Battle", "Loki escapes timeline",
  "Westview Anomaly", "Sam Wilson becomes Captain America", "Ten Rings beacon activated",
  "Memory spell breaks multiverse", "Tiamut emergence stopped", "Incursions begin",
  "Wakanda vs Talokan", "Kang defeated in Quantum Realm", "Guardians defeat High Evolutionary",
  "Marvels entangle powers", "Deadpool enters Void", "New Avengers formed",
  "Fantastic Four arrive", "Doctor Doom appears", "Secret Wars begin",
  "Event 37", "Event 38", "Event 39", "Event 40"
];

const artifactNames = [
  "Iron Man Armor Mark I", "Captain America's Shield", "Mjolnir", "Stormbreaker", "Tesseract",
  "Scepter", "Aether", "Orb", "Eye of Agamotto", "Infinity Gauntlet",
  "Ten Rings", "Darkhold", "Quantum Tunnel", "Vibranium", "Arc Reactor", "Yaka Arrow"
];

const factionNames = [
  "Avengers", "S.H.I.E.L.D.", "HYDRA", "Guardians of the Galaxy", "Dora Milaje",
  "Masters of the Mystic Arts", "TVA", "Ten Rings", "Red Room", "Eternals",
  "Deviants", "Nova Corps", "Ravagers", "Flag Smashers", "Illuminati", "X-Men"
];

const locationNames = [
  "Stark Tower / Avengers Tower", "Avengers Compound", "Asgard", "Wakanda", "Kamar-Taj",
  "Sanctum Sanctorum", "Quantum Realm", "TVA Headquarters", "Knowhere", "Xandar",
  "Titan", "Vormir", "Madripoor", "Ta Lo"
];

const generateFile = (filename: string, content: string) => {
  fs.writeFileSync(path.join(__dirname, "..", "src", "content", filename), content);
};

// 1. Characters
let charsStr = `import { Character } from "../lib/content/schemas";\n\nexport const characters: Character[] = [\n`;
charNames.forEach((name, i) => {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  charsStr += `  {
    id: "${id}",
    name: "${name}",
    aliases: [],
    spoilerSafeIdentity: "A significant figure in the MCU.",
    readableLifeStory: "Played a key role in the events of the universe.",
    appearanceOrder: [],
    relationships: [],
    sources: [],
  },\n`;
});
charsStr += `];\n`;
generateFile("characters.ts", charsStr);

// 2. Events
let eventsStr = `import { Event } from "../lib/content/schemas";\n\nexport const events: Event[] = [\n`;
eventTitles.forEach((title, i) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  eventsStr += `  {
    id: "${id}",
    title: "${title}",
    shortSpoilerFreeSummary: "A major turning point.",
    fullSpoilerSummary: "Significant consequences rippled through the timeline.",
    inUniverseDateRange: "Unknown",
    universe: "Earth-616",
    participants: [],
    relatedFilms: [],
    causes: [],
    consequences: [],
    artifacts: [],
    sourceLinks: [],
    confidenceLevel: "High" as const,
  },\n`;
});
eventsStr += `];\n`;
generateFile("events.ts", eventsStr);

// 3. Artifacts
let artifactsStr = `import { Artifact } from "../lib/content/schemas";\n\nexport const artifacts: Artifact[] = [\n`;
artifactNames.forEach((name, i) => {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  artifactsStr += `  {
    id: "${id}",
    name: "${name}",
    description: "An object of immense power or significance.",
    firstAppearance: "Unknown",
    properties: [],
    sources: [],
  },\n`;
});
artifactsStr += `];\n`;
generateFile("artifacts.ts", artifactsStr);

// 4. Factions
let factionsStr = `import { Faction } from "../lib/content/schemas";\n\nexport const factions: Faction[] = [\n`;
factionNames.forEach((name, i) => {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  factionsStr += `  {
    id: "${id}",
    name: "${name}",
    description: "A group operating within the MCU.",
    purpose: "Various organizational goals.",
    leaderIds: [],
    memberIds: [],
    sources: [],
  },\n`;
});
factionsStr += `];\n`;
generateFile("factions.ts", factionsStr);

// 5. Locations
let locsStr = `import { Location } from "../lib/content/schemas";\n\nexport const locations: Location[] = [\n`;
locationNames.forEach((name, i) => {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  locsStr += `  {
    id: "${id}",
    name: "${name}",
    description: "A significant place.",
    planet: "Unknown",
    universe: "Earth-616",
    significance: "Crucial events occurred here.",
    sources: [],
  },\n`;
});
locsStr += `];\n`;
generateFile("locations.ts", locsStr);

console.log("Real mock data populated!");
