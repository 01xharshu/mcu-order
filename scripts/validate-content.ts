import { validateContent } from "../src/lib/content/validation";

function main() {
  console.log("Validating MCU content records...");
  const success = validateContent();
  if (!success) {
    process.exit(1);
  }
}

main();
