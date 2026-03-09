class Filters {
  constructor(page) {
    this.page = page;
    this.ecoFriendlyFilter = this.page.getByTestId('eco-friendly-filter');
  }
}

module.exports = Filters;