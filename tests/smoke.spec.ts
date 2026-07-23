import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/The MCU Chronicle/);
  });

  test('navigation to timeline works', async ({ page }) => {
    await page.goto('/');
    
    // Check navigation link exists
    const timelineLink = page.getByRole('link', { name: 'Timeline' }).first();
    await expect(timelineLink).toBeVisible();
    
    // Navigate and check URL
    await timelineLink.click();
    await expect(page).toHaveURL(/.*\/timeline/);
    await expect(page.getByRole('heading', { name: 'Timeline Explorer' })).toBeVisible();
  });

  test('global search shortcut works', async ({ page }) => {
    await page.goto('/');
    
    // Press Cmd+K
    await page.keyboard.press('Meta+k');
    
    const searchInput = page.getByPlaceholder('Search characters, films, events...');
    await expect(searchInput).toBeVisible();
    
    await searchInput.fill('Iron Man');
    
    // Should see results
    await expect(page.locator('text=Iron Man is Born').first()).toBeVisible();
  });
});
