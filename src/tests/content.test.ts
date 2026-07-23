import { describe, it, expect } from 'vitest';
import { films } from '../content/films';
import { FilmSchema } from '../lib/content/schemas';

describe('Content Validation', () => {
  it('should validate all films', () => {
    for (const film of films) {
      const result = FilmSchema.safeParse(film);
      expect(result.success).toBe(true);
    }
  });
});
