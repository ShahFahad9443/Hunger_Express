# Playwright Test Suite - Hunger Express

This directory contains automated Playwright tests that cover all manual test cases from `MANUAL_TEST_CASES.md`.

## Test Files Overview

### 1. `navigation.spec.js`
Tests navigation bar functionality and all navigation links.
- **Test Cases Covered**: TC-001 to TC-009
- **Total Tests**: 11 tests

### 2. `home.spec.js`
Tests home page functionality including hero section and features.
- **Test Cases Covered**: TC-010 to TC-016
- **Total Tests**: 7 tests

### 3. `login.spec.js`
Tests login page functionality including form validation and interactions.
- **Test Cases Covered**: TC-017 to TC-025
- **Total Tests**: 9 tests

### 4. `signup.spec.js`
Tests signup page functionality including form validation and interactions.
- **Test Cases Covered**: TC-026 to TC-034
- **Total Tests**: 9 tests

### 5. `restaurants.spec.js`
Tests restaurants page displaying all restaurant information.
- **Test Cases Covered**: TC-035 to TC-041
- **Total Tests**: 7 tests

### 6. `offers.spec.js`
Tests offers page displaying all special offers and deals.
- **Test Cases Covered**: TC-042 to TC-049
- **Total Tests**: 9 tests

### 7. `about.spec.js`
Tests about page functionality.
- **Test Cases Covered**: TC-050 to TC-051
- **Total Tests**: 2 tests

### 8. `contact.spec.js`
Tests contact page including form validation and FAQ section.
- **Test Cases Covered**: TC-052 to TC-064
- **Total Tests**: 13 tests

### 9. `responsive.spec.js`
Tests responsive design across different viewport sizes.
- **Test Cases Covered**: TC-065 to TC-068
- **Total Tests**: 6 tests


## Running Tests

### Run All Tests
```bash
npm run test
```

### Run Tests in UI Mode
```bash
npm run test:ui
```

### Run Tests in Headed Mode (Visible Browser)
```bash
npm run test:headed
```

### Run Specific Test File
```bash
npx playwright test tests/navigation.spec.js
```

### Run Tests for Chromium Browser
```bash
npx playwright test --project=chromium
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

## Test Coverage

The automated test suite covers **72 manual test cases** organized into:

- ✅ Navigation & UI Tests (9 cases)
- ✅ Home Page Tests (7 cases)
- ✅ Login Page Tests (9 cases)
- ✅ Signup Page Tests (9 cases)
- ✅ Restaurants Page Tests (7 cases)
- ✅ Offers Page Tests (8 cases)
- ✅ About Page Tests (2 cases)
- ✅ Contact Page Tests (13 cases)
- ✅ Responsive Design Tests (4 cases)

## Test Structure

Each test file follows this structure:
```javascript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    // Setup before each test
  });

  test('TC-XXX: Test description', async ({ page }) => {
    // Test implementation
  });
});
```

## Configuration

Test configuration is in `playwright.config.js`:
- **Base URL**: `http://localhost:3000`
- **Test Directory**: `./tests`
- **Browser**: Chromium (Desktop Chrome)
- **Screenshots**: Captured on failure
- **Traces**: Collected on retry

## Notes

- Tests assume the development server is running on `http://localhost:3000`
- The webServer configuration in `playwright.config.js` automatically starts the dev server if not running
- Some tests may need adjustment based on actual backend implementation (form submissions, validation, etc.)
- Cross-browser tests run on all configured browsers by default

## Troubleshooting

### Tests Fail to Connect
- Ensure the development server is running: `npm run dev`
- Check that the server is accessible at `http://localhost:3000`

### Browser Not Found
- Install Playwright browsers: `npx playwright install`

### Flaky Tests
- Increase timeout in `playwright.config.js` if needed
- Check for race conditions in test code
- Use `waitFor` methods for dynamic content

## CI/CD Integration

The test suite is configured to run in CI environments:
- Tests retry 2 times on failure in CI
- HTML reports are generated for CI
- Screenshots and videos are captured on failure

