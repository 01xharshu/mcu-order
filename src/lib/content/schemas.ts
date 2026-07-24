/**
 * THE MCU CONTINUUM — Content Schemas
 * Master Prompt §29, lines 2940–2965
 */

import { z } from "zod";

export const SourceCitationSchema = z.object({
  id: z.string(),
  type: z.enum(["film-scene", "director-commentary", "official-timeline"]),
  timestamp: z.string().optional(),
  quote: z.string().optional(),
});

export const FilmSchema = z.object({
  id: z.string(),
  title: z.string(),
  releaseYear: z.number(),
  releaseOrder: z.number(),
  chronologicalOrder: z.number().nullable(),
  phase: z.number(),
  
  // Safe mode fields
  spoilerSafePremise: z.string(),
  whyItMattersSafe: z.string(),
  
  // Watched/Full mode fields
  fullConsequence: z.string().optional(),
  
  // Edges
  prerequisiteIds: z.array(z.string()),
  watchNextIds: z.array(z.string()),
  
  // Evidence
  sources: z.array(SourceCitationSchema).optional(),
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
  
  // Safe mode
  safeIdentity: z.string(),
  
  // Full mode
  coreContradiction: z.string().optional(),
  
  // Deep tracking
  lifeBeats: z.array(CharacterBeatSchema),
  decisions: z.array(CharacterDecisionSchema),
  relationships: z.array(CharacterRelationshipSchema),
});

export type CharacterDossier = z.infer<typeof CharacterDossierSchema>;
