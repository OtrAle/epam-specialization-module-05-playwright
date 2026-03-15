# Playwright E2E Search Functionality -  Practice Software Testing

This repository contains an **End-to-End (E2E)** automation suite focused on testing the **Search functionality** of the [Practice Software Testing](https://practicesoftwaretesting.com/) application.

It uses **Playwright** and follows the **Page Object Model (POM)** structure for clarity and scalability.

## Key Features

- **Page Object Model (POM):** Maintains separation between UI elements and test logic, with dedicated components for search, grid, and filters.
- **Component-based architecture:** Each UI section (search bar, product grid, filters) has its own dedicated component class.
- **Centralized test data:** Multi-scenario test inputs are managed in test-data.js, enabling data-driven iteration over search terms, valid and invalid length boundaries.
- **Cross-browser testing:** Tests run across Chromium, Firefox, and WebKit using Playwright's built-in browser engines.
- **Parallel execution:** Tests run concurrently using 2 workers for faster feedback.
- **HTML Reports:** An HTML report is automatically generated after each test run, providing a visual summary of passed and failed tests.
- **Tag-based test filtering:** Tests are tagged with `@smoke`, `@regression`, and `@negative` allowing selective execution of test suites via CLI.

## Requirements 

- Node.js
- npm
- Git
- Chromium, Firefox, and WebKit 

## Installation

```bash
git clone https://github.com/OtrAle/epam-specialization-module-05-playwright
npm install
npx playwright install
```

## Execution Commands
Run from the project root directory:

| Command | Description |
|----------|-------------|
| `npm test` | Runs all tests in all browsers |
| `npm run test:smoke` | Runs smoke tests only |
| `npm run test:regression` | Runs regression tests only |
| `npm run test:negative` | Runs negative tests only |
| `npm run test:chrome` | Runs all tests in Chromium only |
| `npm run test:firefox` | Runs all tests in Firefox only |
| `npm run test:safari` | Runs all tests in WebKit only |

## Project Structure

| Path | Purpose |
|------|----------|
| `/src/data/test-data.js` | Centralized test data and scenarios. |
| `/src/tests/search.spec.js` | Test spec for the search functionallity. |
| `/src/page-objects/` | Page Objects for selectors and search related actions. |
| `/playwright.config.js` | Playwright configuration file. |
| `/package.json` | Dependencies and npm scripts. |
| `/playwright-report` and `/test-results` | Created when running test, contains HTML report and JSON files. |

##  Test Scenarios Covered

- ✅ UC-5 SEARCH: Entering a valid search term displays matching products in the grid.
- ✅ UC-6 SEARCH: The search input enforces minimum and maximum character length boundaries.
- ✅ UC-7 SEARCH: Entering a search term outside the allowed length boundaries does not trigger a search.
- ✅ UC-8 SEARCH: Performing a new search resets any previously applied filters.
- ✅ UC-9 SEARCH: Clearing the search input restores the default product grid state.

## Author 

Laura Alejandra Hernández Martínez
