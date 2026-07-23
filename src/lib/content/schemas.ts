import { z } from "zod";

export const FilmSchema = z.object({
  id: z.string(),
  title: z.string(),
  releaseYear: z.number(),
  phase: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.null()]),
  abstractVisual: z.string().optional(),
  spoilerSafePremise: z.string(),
  whyItMatters: z.string(),
  postCreditSpoilerGate: z.string().optional(),
  watchNextIds: z.array(z.string()).default([]),
  prerequisiteIds: z.array(z.string()).default([]),
  sources: z.array(z.string()).default([]),
});

export const CharacterSchema = z.object({
  id: z.string(),
  name: z.string(),
  aliases: z.array(z.string()).default([]),
  spoilerSafeIdentity: z.string(),
  readableLifeStory: z.string(),
  appearanceOrder: z.array(z.string()).default([]),
  relationships: z.array(
    z.object({
      characterId: z.string(),
      description: z.string(),
    })
  ).default([]),
  sources: z.array(z.string()).default([]),
});

export const EventSchema = z.object({
  id: z.string(),
  title: z.string(),
  shortSpoilerFreeSummary: z.string(),
  fullSpoilerSummary: z.string(),
  inUniverseDateRange: z.string(),
  releaseDatePosition: z.number().optional(),
  universe: z.string().default("Main Continuity"),
  location: z.string().optional(),
  participants: z.array(z.string()).default([]),
  relatedFilms: z.array(z.string()).default([]),
  causes: z.array(z.string()).default([]),
  consequences: z.array(z.string()).default([]),
  artifacts: z.array(z.string()).default([]),
  sourceLinks: z.array(z.string()).default([]),
  confidenceLevel: z.enum(["High", "Medium", "Low", "Disputed"]).default("High"),
});

export const ArtifactSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  firstAppearance: z.string(),
  currentLocation: z.string().optional(),
  properties: z.array(z.string()).default([]),
  sources: z.array(z.string()).default([]),
});

export const FactionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  purpose: z.string(),
  leaderIds: z.array(z.string()).default([]),
  memberIds: z.array(z.string()).default([]),
  sources: z.array(z.string()).default([]),
});

export const LocationSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  planet: z.string().default("Earth"),
  universe: z.string().default("Main Continuity"),
  significance: z.string(),
  sources: z.array(z.string()).default([]),
});

export const SourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string().url(),
  type: z.enum(["Official Site", "Wiki", "Interview", "Video", "Other"]),
  retrievedAt: z.string(), // ISO date string
});

export const WatchPathSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  orderedFilmIds: z.array(z.string()),
});

// Infer types
export type Film = z.infer<typeof FilmSchema>;
export type Character = z.infer<typeof CharacterSchema>;
export type Event = z.infer<typeof EventSchema>;
export type Artifact = z.infer<typeof ArtifactSchema>;
export type Faction = z.infer<typeof FactionSchema>;
export type Location = z.infer<typeof LocationSchema>;
export type Source = z.infer<typeof SourceSchema>;
export type WatchPath = z.infer<typeof WatchPathSchema>;
