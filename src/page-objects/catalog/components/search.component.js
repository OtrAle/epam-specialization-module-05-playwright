class Search {
  constructor(page) {
    this.page = page;
    this.searchInput = this.page.getByTestId('search-query');
    this.searchSubmit = this.page.getByTestId('search-submit');
    this.searchReset = this.page.getByTestId('search-reset');
  }

  async searchFor(term) {
    await this.searchInput.fill(term);
    await this.searchSubmit.click();
  }
}

module.exports = Search;