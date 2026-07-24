/**
 * THE MCU CONTINUUM — Content Validation
 * Master Prompt §54, lines 5003–5009
 */

import { films } from "../../content/films";
import { FilmSchema } from "./schemas";

export function validateAllContent() {
  let errors = 0;

  console.log("Validating Films...");
  for (const film of films) {
    const result = FilmSchema.safeParse(film);
    if (!result.success) {
      console.error(`Validation failed for film: ${film.id}`);
      console.error(result.error.issues);
      errors++;
    }
    
    // Check prerequisites
    for (const prereq of film.prerequisiteIds) {
      if (!films.find(f => f.id === prereq)) {
        console.error(`Invalid prerequisite ${prereq} in film ${film.id}`);
        errors++;
      }
    }
  }

  if (errors > 0) {
    console.error(`Content validation failed with ${errors} errors.`);
    return false;
  }

  console.log("Content validation passed.");
  return true;
}
