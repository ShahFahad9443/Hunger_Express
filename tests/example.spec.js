import { test, expect } from '@playwright/test';

test.describe('Hunger Express Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Hunger Express - Food Ordering & Delivery/i);
  });
});

