import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/films", "/timeline", "/watch", "/search", "/sources", "/characters/tony-stark"];

test.describe("semantic route accessibility", () => {
  for (const route of routes) {
    test(`${route} has no serious or critical axe violations`, async ({ page }) => {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).analyze();
      const blocking = results.violations.filter((violation) => ["critical", "serious"].includes(violation.impact ?? ""));
      expect(blocking).toEqual([]);
    });
  }
});
