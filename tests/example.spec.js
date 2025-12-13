import { test, expect } from '@playwright/test';

test.describe('Hunger Express Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Hunger Express - Food Ordering & Delivery/i);
  });

  test('should have a visible main content area', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main content area is visible
    const mainContent = page.locator('main, [role="main"], .app, #root');
    await expect(mainContent.first()).toBeVisible();
  });

  test('should have a visible main content area 2', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main content area is visible
    const mainContent = page.locator('main, [role="main"], .app, #root');
    await expect(mainContent.first()).toBeVisible();
  });
});

