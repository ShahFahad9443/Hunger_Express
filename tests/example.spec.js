import { test, expect } from '@playwright/test';

test.describe('Hunger Express Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Hunger Express - Food Ordering & Delivery/i);
  });

  test('should display welcome message', async ({ page }) => {
    await page.goto('/');
    
    // Check for the main heading
    const heading = page.getByRole('heading', { name: /Welcome to Hunger Express/i });
    await expect(heading).toBeVisible();
    
    // Check for the description
    const description = page.getByText(/AI based Food Ordering and Delivery Web Application/i);
    await expect(description).toBeVisible();
  });
  test('should display welcome message 2', async ({ page }) => {
    await page.goto('/');
    
    // Check for the main heading
    const heading = page.getByRole('heading', { name: /Welcome to Hunger Express/i });
    await expect(heading).toBeVisible();
    
    // Check for the description
    const description = page.getByText(/AI based Food Ordering and Delivery Web Application/i);
    await expect(description).toBeVisible();
  });

  test('should have proper page structure', async ({ page }) => {
    await page.goto('/');
    
    // Check that the home container exists
    const homeContainer = page.locator('.home');
    await expect(homeContainer).toBeVisible();
    
    // Check that there's at least one heading
    const headings = page.locator('h1');
    await expect(headings).toHaveCount(1);
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const heading = page.getByRole('heading', { name: /Welcome to Hunger Express/i });
    await expect(heading).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(heading).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(heading).toBeVisible();
  });
});

