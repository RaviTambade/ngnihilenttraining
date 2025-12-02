//Auomation test for shop application
// Flow: Products → Details → Checkout
//Tools: Playwright or Cypress or Selenium
//Playwright  tool provided by Microsoft

//Prerequisites:
  //Node.js installed
  //npm initialized project

//Steps to setup Playwright test:
//1.Install Playwright: npm i -D @playwright/test
//2.Add test script in package.json: "test": "playwright test"
//3.Create test file shop.spec.js in tests folder
//4.Run test: npm test


const { test, expect } = require('@playwright/test');

test('Full flow: Products → Details → Checkout', async ({ page }) => {
  // Step 1: Go to home page
  await page.goto('http://localhost:4200');

  // Step 2: Navigate to Products
  await page.getByRole('link', { name: 'Go to Products' }).click();

  // Step 3: Open Laptop details
  await page.getByText('Laptop').click();

  // Step 4: Click Add to Cart → Checkout
  await page.getByRole('button', { name: 'Add to Cart → Checkout' }).click();

  // Step 5: Verify checkout message
  await expect(page.getByText('Order placed successfully!')).toBeVisible();
});
