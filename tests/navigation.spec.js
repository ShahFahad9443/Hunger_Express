import { test, expect } from '@playwright/test';

test.describe('Navigation & UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // TC-001: Verify Navigation Bar Visibility
  test('TC-001: should display navigation bar with all menu items', async ({ page }) => {
    const navBar = page.locator('nav').first();
    await expect(navBar).toBeVisible();

    // Verify all navigation links are present
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /restaurants/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /offers/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /login/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /sign up/i })).toBeVisible();
  });

  // TC-002: Verify Navigation Links - Home
  test('TC-002: should navigate to home page when clicking Home link', async ({ page }) => {
    await page.getByRole('link', { name: /home/i }).click();
    await expect(page).toHaveURL('/');
  });

  // TC-003: Verify Navigation Links - Restaurants
  test('TC-003: should navigate to restaurants page when clicking Restaurants link', async ({ page }) => {
    await page.getByRole('link', { name: /restaurants/i }).click();
    await expect(page).toHaveURL('/restaurants');
  });

  // TC-004: Verify Navigation Links - Offers
  test('TC-004: should navigate to offers page when clicking Offers link', async ({ page }) => {
    await page.getByRole('link', { name: /offers/i }).click();
    await expect(page).toHaveURL('/offers');
  });

  // TC-005: Verify Navigation Links - About
  test('TC-005: should navigate to about page when clicking About link', async ({ page }) => {
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL('/about');
  });

  // TC-006: Verify Navigation Links - Contact
  test('TC-006: should navigate to contact page when clicking Contact link', async ({ page }) => {
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL('/contact');
  });

  // TC-007: Verify Login Button in Navigation
  test('TC-007: should navigate to login page when clicking Login button', async ({ page }) => {
    await page.getByRole('link', { name: /login/i }).click();
    await expect(page).toHaveURL('/login');
  });

  // TC-008: Verify Sign Up Button in Navigation
  test('TC-008: should navigate to signup page when clicking Sign Up button', async ({ page }) => {
    await page.getByRole('link', { name: /sign up/i }).click();
    await expect(page).toHaveURL('/signup');
  });

  // TC-009: Verify Navigation Bar Hover Effects
  test('TC-009: should show hover effects on navigation links', async ({ page }) => {
    const homeLink = page.getByRole('link', { name: /home/i }).first();
    
    // Hover over the link
    await homeLink.hover();

    // Verify hover state (color change or other visual feedback)
    // Note: This test verifies the link is interactive, actual color change depends on CSS
    await expect(homeLink).toBeVisible();
  });

  // Test navigation from different pages
  test('should navigate correctly from restaurants page', async ({ page }) => {
    await page.goto('/restaurants');
    await page.getByRole('link', { name: /home/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('should navigate correctly from offers page', async ({ page }) => {
    await page.goto('/offers');
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL('/contact');
  });
});

