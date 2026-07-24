import { validateAllContent } from "../src/lib/content/validateAll";

const result = validateAllContent();

console.log(`Validated ${result.summary.films} films (${result.summary.releasedFilms} released, ${result.summary.upcomingFilms} upcoming/TBD) with ${result.summary.sourceRecords} source records.`);

if (!result.valid) {
  for (const error of result.errors) console.error(`CONTENT ERROR: ${error}`);
  process.exitCode = 1;
}
