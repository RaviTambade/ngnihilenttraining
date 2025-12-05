## **complete Playwright Starter Project** for an E-Commerce system with:

- ✅ Product Catalog
- ✅ Shopping Cart
- ✅ Order Processing
- ✅ Order Tracking
- ✅ Payment (Credit Card, Debit Card, UPI)
- ✅ Page Object Model (POM)
- ✅ Reusable fixtures
- ✅ Test data
- ✅ 25+ ready-made test cases
- ✅ Full folder structure
- ✅ Playwright config

 

### 🏗️ **1. Project Folder Structure**

```
ecommerce-playwright/
│
├── playwright.config.ts
├── package.json
│
├── tests/
│   ├── product/
│   │   ├── product-list.spec.ts
│   │   ├── product-details.spec.ts
│   │
│   ├── cart/
│   │   ├── cart-add.spec.ts
│   │   ├── cart-remove.spec.ts
│   │   ├── cart-update.spec.ts
│   │
│   ├── checkout/
│   │   ├── checkout-basic.spec.ts
│   │   ├── checkout-payment-credit.spec.ts
│   │   ├── checkout-payment-debit.spec.ts
│   │   ├── checkout-payment-upi.spec.ts
│   │
│   ├── order/
│   │   ├── order-success.spec.ts
│   │   ├── order-tracking.spec.ts
│   │
│   ├── api/
│   │   ├── mock-products.spec.ts
│   │
│   ├── common/
│       ├── login.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductListPage.ts
│   ├── ProductDetailsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── PaymentPage.ts
│   ├── OrderPage.ts
│
├── fixtures/
│   ├── test-data.json
│   ├── user.fixture.ts
│
└── utils/
    ├── env.ts
    ├── api-helpers.ts
```

---

### ⚙️ **2. package.json**

```json
{
  "name": "ecommerce-playwright",
  "version": "1.0.0",
  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:report": "npx playwright show-report"
  },
  "devDependencies": {
    "@playwright/test": "^1.44.0"
  }
}
```

---

### 🔧 **3. Playwright Config (playwright.config.ts)**

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:4200',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['html', { open: 'never' }]]
});
```

---

### 📦 **4. Reusable Test Data (fixtures/test-data.json)**

```json
{
  "user": {
    "email": "john@example.com",
    "password": "Password@123"
  },
  "products": ["Laptop", "Mobile", "Headphones"],
  "address": "Pune, Maharashtra",
  "upi": "john@upi",
  "credit": {
    "number": "4111 1111 1111 1111",
    "expiry": "12/29",
    "cvv": "123"
  },
  "debit": {
    "number": "5000 0000 0000 0000",
    "expiry": "10/28",
    "cvv": "456"
  }
}
```

---

### 🧩 **5. Fixture for Login (fixtures/user.fixture.ts)**

```ts
import { test as base } from '@playwright/test';
import testData from './test-data.json';

export const test = base.extend({
  login: async ({ page }, use) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill(testData.user.email);
    await page.getByLabel('Password').fill(testData.user.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await use(true);
  }
});

export const expect = test.expect;
```

---

### 📄 **6. Page Object Model Files**

---

#### **LoginPage.ts**

```ts
export class LoginPage {
  constructor(private page) {}

  async login(email: string, password: string) {
    await this.page.getByLabel('Email').fill(email);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
```

---

#### **ProductListPage.ts**

```ts
export class ProductListPage {
  constructor(private page) {}

  async clickProduct(name: string) {
    await this.page.getByText(name).click();
  }
}
```

---

#### **ProductDetailsPage.ts**

```ts
export class ProductDetailsPage {
  constructor(private page) {}

  async addToCart() {
    await this.page.getByRole('button', { name: 'Add to Cart' }).click();
  }
}
```

---

#### **CartPage.ts**

```ts
export class CartPage {
  constructor(private page) {}

  async goToCart() {
    await this.page.goto('/cart');
  }

  async removeFirstItem() {
    await this.page.getByRole('button', { name: 'Remove' }).first().click();
  }

  async updateQuantity(qty: number) {
    await this.page.getByRole('spinbutton').fill(qty.toString());
  }

  async checkout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}
```

---

#### **CheckoutPage.ts**

```ts
export class CheckoutPage {
  constructor(private page) {}

  async enterAddress(address: string) {
    await this.page.getByLabel('Address').fill(address);
  }

  async continueToPayment() {
    await this.page.getByRole('button', { name: /payment/i }).click();
  }
}
```

---

#### **PaymentPage.ts**

```ts
export class PaymentPage {
  constructor(private page) {}

  async payWithCreditCard(data) {
    await this.page.click('#credit');
    await this.page.fill('#cardNumber', data.number);
    await this.page.fill('#expiry', data.expiry);
    await this.page.fill('#cvv', data.cvv);
    await this.page.click('#pay');
  }

  async payWithDebitCard(data) {
    await this.page.click('#debit');
    await this.page.fill('#cardNumber', data.number);
    await this.page.fill('#expiry', data.expiry);
    await this.page.fill('#cvv', data.cvv);
    await this.page.click('#pay');
  }

  async payWithUPI(id: string) {
    await this.page.click('#upi');
    await this.page.fill('#upiId', id);
    await this.page.click('#pay');
  }
}
```

---

#### **OrderPage.ts**

```ts
export class OrderPage {
  constructor(private page) {}

  async trackOrder(orderId: string) {
    await this.page.goto('/order-tracking');
    await this.page.fill('#orderId', orderId);
    await this.page.click('#track');
  }
}
```

---

#### 🧪 **7. 25 Full E-Commerce Test Cases**

Below are the core 25 tests—ready to paste.

---

### ⭐ **Product Catalog Tests**

#### **1. Product List Loads**

```ts
test('Product list loads successfully', async ({ page }) => {
  await page.goto('/products');
  await expect(page.getByText('Laptop')).toBeVisible();
});
```

---

#### **2. Product → Product Detail**

```ts
test('Open product details', async ({ page }) => {
  await page.goto('/products');
  await page.getByText('Laptop').click();
  await expect(page.getByRole('heading', { name: 'Laptop' })).toBeVisible();
});
```

---


### ⭐ **Cart Tests**

#### **3. Add item to cart**

```ts
test('Add product to cart', async ({ page }) => {
  await page.goto('/products');
  await page.getByText('Mobile').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await expect(page.getByText('Item added to cart')).toBeVisible();
});
```

---

#### **4. Remove item**

```ts
test('Remove item from cart', async ({ page }) => {
  await page.goto('/cart');
  await page.getByRole('button', { name: 'Remove' }).first().click();
});
```

---

####
```ts
test('Update cart quantity', async ({ page }) => {
  await page.goto('/cart');
  await page.getByRole('spinbutton').fill('3');
});
```

---

#### **6. Cart persists after refresh**

```ts
test('Cart persists after refresh', async ({ page }) => {
  await page.goto('/cart');
  const qty = await page.getByRole('spinbutton').inputValue();

  await page.reload();

  expect(await page.getByRole('spinbutton').inputValue()).toBe(qty);
});
```

---


### ⭐ **Checkout Tests**

#### **7. Checkout screen loads**

```ts
test('Checkout starts successfully', async ({ page }) => {
  await page.goto('/cart');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page.getByLabel('Address')).toBeVisible();
});
```

---

#### **8. Fill address**

```ts
test('Fill address during checkout', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByLabel('Address').fill('Pune, MH');
});
```

---

#### **9. Proceed to payment**

```ts
test('Navigate to payment section', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByRole('button', { name: 'Continue to Payment' }).click();
});
```

---

# ⭐ **Payment Tests**

#### **10. Payment by Credit Card**

```ts
test('Pay using Credit Card', async ({ page }) => {
  await page.goto('/payment');

  await page.click('#credit');
  await page.fill('#cardNumber', '4111 1111 1111 1111');
  await page.fill('#expiry', '12/29');
  await page.fill('#cvv', '123');
  await page.click('#pay');

  await expect(page.getByText('Payment Successful')).toBeVisible();
});
```

---

#### **11. Payment by Debit Card**

```ts
test('Pay using Debit Card', async ({ page }) => {
  await page.goto('/payment');

  await page.click('#debit');
  await page.fill('#cardNumber', '5000 0000 0000 0000');
  await page.fill('#expiry', '10/28');
  await page.fill('#cvv', '456');
  await page.click('#pay');

  await expect(page.getByText('Payment Successful')).toBeVisible();
});
```

---

#### **12. Payment by UPI**

```ts
test('Pay using UPI', async ({ page }) => {
  await page.goto('/payment');

  await page.click('#upi');
  await page.fill('#upiId', 'john@upi');
  await page.click('#pay');

  await expect(page.getByText('Payment Successful')).toBeVisible();
});
```

---


### ⭐ **Order Processing Tests**

#### **13. Order success page**

```ts
test('Order placed successfully', async ({ page }) => {
  await page.goto('/order-success');
  await expect(page.getByText('Your Order is Confirmed')).toBeVisible();
});
```

---

#### **14. Order summary displays items**

```ts
test('Order summary loads', async ({ page }) => {
  await page.goto('/order-success');
  await expect(page.getByText('Laptop')).toBeVisible();
});
```

---


### ⭐ **Order Tracking Tests**

#### **15. Track order**

```ts
test('Track order by ID', async ({ page }) => {
  await page.goto('/order-tracking');

  await page.fill('#orderId', 'ORD123456');
  await page.click('#track');

  await expect(page.getByText('In Transit')).toBeVisible();
});
```

---


### ⭐ **Authentication Tests**

####
```ts
test('User login', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill('john@example.com');
  await page.getByLabel('Password').fill('Password@123');
  await page.click('button:has-text("Login")');
});
```

---

#### **17. Logout**

```ts
test('User logout', async ({ page }) => {
  await page.goto('/');
  await page.click('#logout');
});
```

---


### ⭐ **Search Tests**

#### **18. Search for product**

```ts
test('Search for Mobile', async ({ page }) => {
  await page.goto('/products');

  await page.getByRole('textbox', { name: /search/i }).fill('mobile');
  await page.keyboard.press('Enter');

  await expect(page.getByText(/mobile/i)).toBeVisible();
});
```

---


### ⭐ **API + Mocking Tests**

#### **19. Mock product API**

```ts
test('Mock product API and verify UI', async ({ page }) => {
  await page.route('/api/products', async route => {
    await route.fulfill({
      body: JSON.stringify([{ id: 1, name: 'Mocked Product' }])
    });
  });

  await page.goto('/products');

  await expect(page.getByText('Mocked Product')).toBeVisible();
});
```

---

#### **20. Intercept checkout**

```ts
test('Mock checkout response', async ({ page }) => {
  await page.route('/api/checkout', async route => {
    await route.fulfill({ body: JSON.stringify({ success: true }) });
  });

  await page.goto('/checkout');
});
```

---


### ⭐ **UI/UX Tests**

#### **21. Mobile responsive menu**

```ts
test.use({ viewport: { width: 375, height: 700 } });

test('Mobile menu works', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Menu' }).click();
});
```

---

#### **22. Banner visible**

```ts
test('Home banner visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Big Sale')).toBeVisible();
});
```

---


### ⭐ **Negative Tests**

#### **23. Invalid login**

```ts
test('Invalid login error message', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Email').fill('wrong@example.com');
  await page.getByLabel('Password').fill('123123');
  await page.click('button:has-text("Login")');

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});
```

---

#### **24. Payment fails**

```ts
test('Payment failure scenario', async ({ page }) => {
  await page.goto('/payment');

  await page.click('#credit');
  await page.fill('#cardNumber', '0000 0000 0000 0000');
  await page.click('#pay');

  await expect(page.getByText('Payment Failed')).toBeVisible();
});
```

---

### ⭐ **Accessibility Test**

#### **25. All images should contain alt text**

```ts
test('Images have alt attributes', async ({ page }) => {
  await page.goto('/products');

  const images = await page.locator('img').elementHandles();
  for (const i of images) {
    const alt = await i.getAttribute('alt');
    expect(alt?.length).toBeGreaterThan(0);
  }
});
```

 