/**
 * THE MCU CONTINUUM — Content Schemas
 * Master Prompt §29, lines 2940–2965
 */

import { z } from "zod";

export const CanonConfidenceSchema = z.enum([
  "confirmed",
  "strong-inference",
  "interpretation",
  "disputed",
  "unknown",
]);

export const SourceCitationSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  url: z.string().url(),
  publisher: z.string().min(1),
  sourceType: z.enum([
    "released-work",
    "official-press",
    "official-site",
    "official-credits",
    "licensed-book",
    "reputable-secondary",
  ]),
  accessedAt: z.string().date(),
  supportsClaimIds: z.array(z.string()),
});

export const FilmSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  releaseDate: z.string().nullable(),
  releaseYear: z.number().int(),
  releaseOrder: z.number().int().positive(),
  chronologicalOrder: z.number().nullable(),
  phase: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  saga: z.string().nullable(),
  status: z.enum(["released", "upcoming", "tbd"]),
  runtimeMinutes: z.number().int().positive().nullable(),
  
  // Editorial synopsis and archive fields
  spoilerSafePremise: z.string(),
  whyItMattersSafe: z.string(),
  fullStory: z.string().optional(),
  fullConsequence: z.string().optional(),
  keyTurns: z.array(z.string()).default([]),
  memory: z.string().optional(),
  
  // Edges
  prerequisiteIds: z.array(z.string()),
  watchNextIds: z.array(z.string()),
  
  // Evidence
  sources: z.array(SourceCitationSchema).min(1),
  claimConfidence: CanonConfidenceSchema.default("confirmed"),
});

export type Film = z.infer<typeof FilmSchema>;
export type SourceCitation = z.infer<typeof SourceCitationSchema>;

export const CharacterBeatSchema = z.object({
  id: z.string(),
  filmId: z.string(),
  title: z.string(),
  description: z.string(),
  year: z.number().optional(),
});

export const CharacterDecisionSchema = z.object({
  id: z.string(),
  filmId: z.string(),
  description: z.string(),
  consequence: z.string(),
});

export const CharacterRelationshipSchema = z.object({
  targetCharacterId: z.string(),
  nature: z.string(),
  evolution: z.array(z.string()),
});

export const CharacterDossierSchema = z.object({
  id: z.string(),
  name: z.string(),
  actor: z.string(),
  tier: z.enum(["flagship", "major", "supporting", "minor"]),
  
  // Editorial framing
  safeIdentity: z.string(),
  
  // Full mode
  coreContradiction: z.string().optional(),
  
  // Deep tracking
  lifeBeats: z.array(CharacterBeatSchema),
  decisions: z.array(CharacterDecisionSchema),
  relationships: z.array(CharacterRelationshipSchema),
});

export type CharacterDossier = z.infer<typeof CharacterDossierSchema>;
