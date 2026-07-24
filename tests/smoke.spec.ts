import { expect, test } from "@playwright/test";

test.describe("Continuum smoke tests", () => {
  test("renders a semantic opening before optional visuals", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/THE MCU EXPERIENCE/);
    await expect(page.getByRole("heading", { name: /EVERY LIFE CHANGES TIME/i })).toBeVisible();
    await expect(page.getByLabel("Primary navigation").getByRole("link", { name: "CHARACTERS" })).toBeVisible();
  });

  test("gives fans direct paths into the full archive", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "ENTER THE FULL ARCHIVE", exact: true })).toHaveAttribute("href", "/films");
    await expect(page.getByRole("link", { name: /ENTER THE TIMELINE/i })).toHaveAttribute("href", "/timeline");
    await expect(page.getByRole("link", { name: /EXPLORE THE LIVES/i })).toHaveAttribute("href", "/characters");
  });

  test("assembles a rewatch route from a fan memory", async ({ page }) => {
    await page.goto("/");
    const impossible = page.getByRole("tab", { name: /THE IMPOSSIBLE/i });
    await impossible.click();
    await expect(impossible).toHaveAttribute("aria-selected", "true");
    await page.getByRole("button", { name: "ASSEMBLE THIS REWATCH" }).click();
    await expect(page.getByText("YOUR THE IMPOSSIBLE ROUTE", { exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: /ENDGAME/i })).toHaveAttribute("href", "/films/avengers-endgame");
  });

  test("navigates to the timeline reading mode", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Primary navigation").getByRole("link", { name: "TIMELINE" }).click();
    await expect(page).toHaveURL(/\/timeline$/);
    await expect(page.getByText("TIME RIBBON", { exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "CHRONOLOGY" })).toBeVisible();
  });

  test("changes the watch-path mode without leaving the route", async ({ page }) => {
    await page.goto("/watch");
    const chronological = page.getByRole("button", { name: "CHRONOLOGICAL" });
    await chronological.click();
    await expect(chronological).toHaveAttribute("aria-pressed", "true");
    await expect(page).toHaveURL(/\/watch$/);
  });

  test("resolves the direct reading routes", async ({ page }) => {
    for (const route of ["/continuum", "/search", "/sources", "/characters/tony-stark", "/films/iron-man"]) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
    }
  });

  test("renders a designed not-found state", async ({ page }) => {
    const response = await page.request.get("/films/not-a-film");
    expect(response.status()).toBe(404);
    await page.goto("/films/not-a-film");
    await expect(page.getByRole("heading", { name: /that thread/i })).toBeVisible();
  });

  test("keeps the causal comparison available by keyboard", async ({ page }) => {
    await page.goto("/");
    const comparison = page.getByLabel(/Compare before, choice, and after/i);
    await comparison.focus();
    await comparison.press("Enter");
    await expect(comparison).toHaveAttribute("aria-expanded", "true");
    await comparison.press("Escape");
    await expect(comparison).toHaveAttribute("aria-expanded", "false");
  });
});
