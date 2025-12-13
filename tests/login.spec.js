import { test, expect } from '@playwright/test';

test('should always pass - sample test case', () => {
  // This test will always pass
  expect(1 + 1).toBe(2);
  expect(true).toBeTruthy();
  expect('test').toBe('test');
});

