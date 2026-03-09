class Grid {
  constructor(page) {
    this.page = page;
    this.searchCompleted = this.page.getByTestId('search_completed');
    this.searchCaption = this.page.getByTestId('search-term');
  }
}

module.exports = Grid;