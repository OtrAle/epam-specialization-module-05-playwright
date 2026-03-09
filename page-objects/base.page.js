class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(path) {
    await this.page.goto(path);
  }

  async waitForVisible(locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async clickWhenVisible(locator, timeout = 5000) {
    await this.waitForVisible(locator, timeout);
    await locator.click();
  }
}

module.exports = BasePage;