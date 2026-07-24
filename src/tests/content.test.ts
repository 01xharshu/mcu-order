import { describe, it, expect } from 'vitest';
import { films } from '../content/films';
import { FilmSchema } from '../lib/content/schemas';
import { validateAllContent } from '../lib/content/validateAll';

describe('Content Validation', () => {
  it('should validate all films', () => {
    for (const film of films) {
      const result = FilmSchema.safeParse(film);
      expect(result.success).toBe(true);
    }
  });

  it('keeps future records explicit about uncertainty', () => {
    for (const film of films.filter((entry) => entry.status !== 'released')) {
      expect(film.chronologicalOrder).toBeNull();
      expect(film.fullConsequence).toBeUndefined();
      expect(film.sources.length).toBeGreaterThan(0);
    }
  });

  it('gives every released feature a full-story rewatch record', () => {
    for (const film of films.filter((entry) => entry.status === 'released')) {
      expect(film.fullStory).toBeTruthy();
      expect(film.fullConsequence).toBeTruthy();
      expect(film.keyTurns.length).toBeGreaterThanOrEqual(3);
      expect(film.memory).toBeTruthy();
    }
  });

  it('validates references and ordering across the catalog', () => {
    expect(validateAllContent()).toMatchObject({ valid: true, errors: [] });
  });
});
