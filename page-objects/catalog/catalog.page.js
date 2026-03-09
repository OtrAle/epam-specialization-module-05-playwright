const BasePage = require('../base.page');
const Search = require('../catalog/components/search.component');
const Grid = require('../catalog/components/grid.component');
const Filters = require('../catalog/components/filters.component');

class CatalogPage extends BasePage {
  constructor(page) {
    super(page);              
    this.search = new Search(page); 
    this.grid = new Grid(page);
    this.filters = new Filters(page);
  }

  async open() {
    await super.open('/');
  }
}

module.exports = CatalogPage;