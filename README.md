# 🛒 Ecommerce Playwright POM Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-green?logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue?logo=githubactions)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A scalable **End-to-End UI Automation Framework** built with **Playwright Test** using the **Page Object Model (POM)** design pattern for an ecommerce web application.

This project demonstrates clean automation architecture, reusable page components, data-driven testing, cross-browser execution, and reporting—following practices commonly used in real-world QA automation projects.

---

## 📌 Features

- ✅ Page Object Model (POM) architecture
- ✅ Clean separation between test logic and page implementation
- ✅ Data-driven testing using external JSON data
- ✅ Cross-browser execution
  - Chromium
  - Firefox
  - WebKit
  - Microsoft Edge
- ✅ HTML reports
- ✅ Automatic screenshots, videos, and traces on failures
- ✅ GitHub Actions CI/CD ready
- ✅ Easy to maintain and extend

---

# 🏗 Framework Architecture

## Before POM

```
Test Spec
├── Navigation
├── Locators
├── Actions
└── Assertions
```

As projects grow, test files become difficult to maintain because UI locators and business logic are mixed together.

---

## After POM

```
Test Spec
      │
      ▼
Page Objects
├── Locators
├── Reusable Actions
└── Business Logic
```

Test files focus only on business scenarios while page classes encapsulate implementation details.

---

## Benefits

- Improved maintainability
- Better code reusability
- Reduced duplication
- Cleaner test cases
- Easier scalability
- Faster framework maintenance

---

# 📁 Project Structure

```text
ecommerce-playwright-pom-framework
│
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── AccountPage.js
│   ├── CategoryPage.js
│   └── ProductPage.js
│
├── tests/
│   ├── TC01_LaunchApplication.spec.js
│   ├── TC02_Login.spec.js
│   └── TC03_AddToCart.spec.js
│
├── utils/
│   └── CloudBerryStoreTestData.json
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# 🧪 Test Coverage

Current automated scenarios include:

- Launch Application
- Verify page title
- Data-driven Login
- Add Product to Cart
- Cross-browser execution
- Failure artifact generation
- HTML reporting

The framework can easily be extended with additional page objects and test suites.

---

# ⚙️ Tech Stack

- Playwright Test
- JavaScript (ES6)
- Node.js
- Page Object Model (POM)
- Git & GitHub
- GitHub Actions
- JSON Test Data

---

# 🚀 Getting Started

## Prerequisites

- Node.js 18+
- npm
- Git

---

## Clone the Repository

```bash
git clone https://github.com/affan-bugbuster/Ecommerce-playwright-pom-framework.git
cd Ecommerce-playwright-pom-framework
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Run a specific test

```bash
npx playwright test tests/TC02_Login.spec.js
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Run a specific browser

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

---

# 📊 Reports

Playwright automatically captures rich artifacts whenever a test fails.

### Failure Artifacts

- 📸 Screenshot
- 🎥 Video
- 📄 Trace File

Artifacts are stored in:

```text
test-results/
```

Generate and view the HTML report:

```bash
npx playwright show-report
```

HTML report location:

```text
playwright-report/
```

---

# 🔄 Continuous Integration

This framework includes a GitHub Actions workflow for automated execution.

The CI pipeline can:

- Install dependencies
- Install Playwright browsers
- Execute all tests
- Generate HTML reports
- Upload failure artifacts

---

# 🎯 Skills Demonstrated

This project demonstrates practical QA automation skills including:

- End-to-End UI Automation
- Playwright Test Framework
- Page Object Model (POM)
- Data-Driven Testing
- Cross-Browser Testing
- Test Reporting
- Framework Design
- Git & GitHub
- CI/CD Integration
- Clean Code Practices

---

# 📈 Future Enhancements

- API Testing Integration
- Visual Regression Testing
- Parallel Execution Optimization
- Environment Configuration
- Docker Support
- Allure Reporting
- Jenkins Pipeline Integration

---

# 👨‍💻 Author

**Affan Ahmed**

QA Automation Engineer

**Skills**

- Playwright
- Selenium
- JavaScript
- API Testing
- CI/CD
- Test Automation

**GitHub**

https://github.com/affan-bugbuster

**LinkedIn**

(https://www.linkedin.com/in/affanahmedq/)

---
