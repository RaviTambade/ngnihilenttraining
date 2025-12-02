import { test, expect } from '@playwright/test';

import users from '../utils/sample.json';


test('homepage opens', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await expect(page.locator('h1')).toHaveText('Product List');

});
