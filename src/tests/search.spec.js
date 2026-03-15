const { test, expect } = require('@playwright/test');
const CatalogPage = require('../page-objects/catalog/catalog.page');
const { searchTerms, validLengthSearchTerms, invalidLengthSearchTerms } = require('../data/test-data');


test.describe('Browse products - Search Functionality', {tag: '@regression'}, () => {
    test.describe.configure({ mode: 'parallel'});
    let catalog;
  
    test.beforeEach(async ({ page }) => {
        catalog = new CatalogPage(page);
        await catalog.open();
    });

    test.afterEach(async ({ page }) => {
        await page.context().clearCookies();
    });

    test.describe('Validation Rules', () => {
        
        for (const [index, { term, scenario }] of searchTerms.entries()) {
            test(`UC-5 [${scenario}] Search using valid keyword: "${term}“`, {tag: index === 0 ? ['@smoke'] : []}, async ({ page }) => {
                await catalog.search.searchFor(term);
                await expect (catalog.grid.searchCompleted).toBeAttached();    
            });
        }
        
        for (const {scenario, length, term} of validLengthSearchTerms) {
            test(`UC-6 [${scenario}] Search accepts "${term}" (${length} chars)`, async ({ page }) => {
                await catalog.search.searchFor(term);
                await expect (catalog.grid.searchCompleted).toBeAttached();
                await expect (catalog.grid.searchCaption).toHaveText(term);
            });
        }

        for (const {scenario, length, term} of invalidLengthSearchTerms){
            test(`UC-7 [${scenario}] Search rejects "${term}" (${length} chars)`, {tag: '@negative'}, async ({ page }) => {
                await catalog.search.searchFor(term);
                await expect(catalog.grid.searchCaption).not.toBeAttached();
            });
        }

    });

    test.describe('State Management', () => {
        
        test('UC-8: New search resets all active filters', async ({ page }) => {
            await catalog.filters.ecoFriendlyFilter.check();
            await expect(catalog.filters.ecoFriendlyFilter).toBeChecked();
            await catalog.search.searchFor("hammer");
            await expect (catalog.grid.searchCompleted).toBeAttached();
            await expect(catalog.filters.ecoFriendlyFilter).not.toBeChecked();
        });
      
        test('UC-9: Restore the original product view by clearing the search', {tag: '@smoke'}, async ({ page }) => {
            await catalog.search.searchFor("hammer");
            await expect (catalog.grid.searchCompleted).toBeAttached();
            await expect (catalog.grid.searchCaption).toHaveText("hammer");
            await catalog.search.searchReset.click();
            await expect(catalog.grid.searchCaption).not.toBeAttached();
        });

    });

});