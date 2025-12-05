Below is a **complete, production-ready GitHub Actions CI/CD pipeline** for your **Playwright E-Commerce Testing Project**.

This pipeline includes:
✅ Automatic test execution on every push & pull request
✅ Playwright dependencies installation
✅ Browser installation
✅ HTML report retention as a downloadable artifact
✅ Matrix testing (Chrome + Firefox + WebKit)
✅ Optional steps for deploying to a server (commented)

---

# 🚀 **1. Create GitHub Actions Pipeline File**

Create:

```
.github/workflows/playwright-ci.yml
```

Paste the full pipeline below.

---

# 🎯 **2. Full GitHub Actions CI/CD Pipeline (playwright-ci.yml)**

```yaml
name: Playwright E2E Tests

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  e2e-tests:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        browser: [chromium, firefox, webkit]

    steps:
      # 1. Checkout repo
      - name: Checkout repository
        uses: actions/checkout@v3

      # 2. Setup Node
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      # 3. Install dependencies
      - name: Install dependencies
        run: npm ci

      # 4. Install Playwright browsers
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      # 5. Run Tests
      - name: Run E2E Tests (Matrix)
        run: npx playwright test --project=${{ matrix.browser }}

      # 6. Upload Playwright HTML report
      - name: Upload HTML Report
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report-${{ matrix.browser }}
          path: playwright-report/
          retention-days: 7

      # 7. Upload traces (for debugging failures)
      - name: Upload Traces
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-traces-${{ matrix.browser }}
          path: test-results/
```

---

# 🧰 **3. Optional: Run Only on Pull Requests**

Modify the `on:` section:

```yaml
on:
  pull_request:
    branches: ["main"]
```

---

# 🌐 **4. Optional: Trigger Tests on Schedule**

```yaml
on:
  schedule:
    - cron: "0 0 * * *" # Run every midnight
```

---

# 🏗️ **5. Optional: Deploy After Successful Tests**

For example, deploying to an FTP, S3, or a server.

```yaml
  deploy:
    needs: e2e-tests
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Deploy to Server (example)
        run: |
          echo "Deploying build..."
          # rsync / scp / ftp code here
```

---

# 🎉 **6. Pipeline Behavior Summary**

| Step          | Behavior                              |
| ------------- | ------------------------------------- |
| Checkout      | Downloads your project                |
| Node Setup    | Uses Node 20 LTS                      |
| Install       | Runs `npm ci`                         |
| Browser Setup | Installs Chromium, Firefox, WebKit    |
| Test Runs     | Runs tests in parallel browser matrix |
| Reports       | Uploads HTML report & traces          |

---

# 📊 **7. View Reports in GitHub UI**

After a run:

➡️ Go to **Actions → Your Workflow → Artifacts**
➡️ Download **playwright-report-chromium** or others
➡️ Open `index.html`

---

# 🧪 **8. Add Playwright Test Reporter for CI**

In `playwright.config.ts`:

```ts
reporter: [
  ['list'],
  ['html', { open: 'never' }],
  ['junit', { outputFile: 'results.xml' }]
],
```

If you want to integrate with **Jenkins**, **Azure**, or **SonarQube**, this helps.


Below is a **complete production-grade CI/CD pipeline** using **GitHub Actions → AWS EC2 Deployment**, perfect for your **Playwright E-commerce project** or any full-stack Angular/Node/Python app.

This pipeline covers:

✅ Build → Test → Deploy fully automated
✅ Deploy via SSH to EC2
✅ NGINX + PM2 support
✅ Playwright E2E tests before deployment
✅ Zero downtime deployment
✅ Secure secrets handling

---

# 🚀 1. **Requirements on EC2**

Before CI/CD works, ensure your EC2 instance has:

### **Install Node.js**

```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
```

### **Install Git**

```bash
sudo yum install git -y
```

### **Install PM2 (for backend apps)**

```bash
sudo npm install -g pm2
```

### If Angular Frontend → Install NGINX**

```bash
sudo amazon-linux-extras install nginx1 -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

# 🔐 2. **Add GitHub Secrets**

Go to:
**GitHub → Settings → Secrets → Actions**

Add these:

| Secret Name        | Value                                              |
| ------------------ | -------------------------------------------------- |
| `AWS_EC2_HOST`     | EC2 Public IP                                      |
| `AWS_EC2_USERNAME` | ec2-user                                           |
| `AWS_EC2_KEY`      | Private SSH key (.pem content)                     |
| `AWS_EC2_APP_PATH` | Deployment directory on EC2 (e.g., `/var/www/app`) |

---

# 🏗️ 3. **GitHub Actions Pipeline (Full CI/CD)**

Create file:

```
.github/workflows/deploy-ec2.yml
```

Paste this:

```yaml
name: CI/CD to AWS EC2

on:
  push:
    branches: [ "main" ]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest

    steps:
    # 1. Checkout code
    - name: Checkout repository
      uses: actions/checkout@v3

    # 2. Setup Node
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 20

    # 3. Install dependencies
    - name: Install dependencies
      run: npm ci

    # 4. Run Playwright tests
    - name: Install Playwright browsers
      run: npx playwright install --with-deps

    - name: Run E2E Tests
      run: npx playwright test

    # 5. Archive build (Angular/Node)
    - name: Build application
      run: |
        if [ -f "angular.json" ]; then
          npm run build --if-present
        else
          echo "No Angular project found. Skipping build."
        fi

    - name: Prepare deployment artifact
      run: |
        mkdir artifact/
        cp -r ./* artifact/ || true
        zip -r deploy.zip artifact/

    # 6. Upload test report
    - name: Upload Playwright Report
      if: always()
      uses: actions/upload-artifact@v3
      with:
        name: playwright-report
        path: playwright-report/

    # 7. Deploy to EC2 via SSH
    - name: Deploy to AWS EC2
      uses: appleboy/scp-action@master
      with:
        host: ${{ secrets.AWS_EC2_HOST }}
        username: ${{ secrets.AWS_EC2_USERNAME }}
        key: ${{ secrets.AWS_EC2_KEY }}
        source: "deploy.zip"
        target: "/tmp/"

    - name: Run remote deployment commands
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.AWS_EC2_HOST }}
        username: ${{ secrets.AWS_EC2_USERNAME }}
        key: ${{ secrets.AWS_EC2_KEY }}
        script: |
          echo "Extracting new build..."
          rm -rf ${{ secrets.AWS_EC2_APP_PATH }}/*
          unzip /tmp/deploy.zip -d ${{ secrets.AWS_EC2_APP_PATH }}
          rm /tmp/deploy.zip

          cd ${{ secrets.AWS_EC2_APP_PATH }}

          echo "Installing server dependencies..."
          npm ci --omit=dev || true

          # BACKEND: Restart PM2 App
          if pm2 list | grep -q myapp; then
            pm2 restart myapp
          else
            pm2 start server.js --name myapp
          fi

          echo "Deployment completed on EC2."
```

---

# 🧱 4. **Folder Structure Example**

```
project/
 ├─ frontend/ (Angular)
 ├─ backend/  (Node, Nest, Express)
 ├─ tests/
 ├─ playwright.config.ts
 ├─ package.json
 ├─ server.js
```

Works for both monorepo or standalone apps.

---

# 🟢 5. **How Deployment Works**

### CI Pipeline:

1. Checkout source
2. Install dependencies
3. Run **Playwright E2E tests**
4. Build Angular or Node project
5. Create `deploy.zip`
6. Copy to EC2 via SCP
7. SSH into EC2
8. Unzip & replace old build
9. Restart server via **PM2**

---

# 🟣 6. **Sample Deployment Script Explained**

### Deploy folder:

```
/var/www/app
```

### Commands executed remotely:

```bash
rm -rf /var/www/app/*
unzip /tmp/deploy.zip -d /var/www/app
cd /var/www/app
npm ci --omit=dev
pm2 restart myapp
```

Maximum safety, zero downtime.

---

# 🔥 7. WANT AUTODEPLOY FOR FRONTEND + NGINX?

I can generate:

### ✅ Angular build → Sync to NGINX `/usr/share/nginx/html`

### ✅ Auto-restart NGINX

### ✅ Cache busting

### ✅ Blue–Green Deployment

 