const BasePage = require('./BasePage')
class ClasificacionesPage extends BasePage {
  get title() {
    return $('h1.title')
  }
  get cookiesAcceptBtn() {
    return $('#pdcc-modal-accept')
  }
  get cookiesModal() {
    return $('#pdcc-modal-bg')
  }
  get dropdownBtns() {
    return $$('div.mat-select-arrow-wrapper')
  }
  get temporadasDropdown() {
    return this.dropdownBtns[0]
  }
  get equiposDropdown() {
    return this.dropdownBtns[2]
  }
  get dropdownEquiposNames() {
    return $$('div[role="listbox"] span')
  }
  get temporadaDropdownOptions() {
    return $$('span.mat-option-text')
  }
  get header() {
    return $('h1.ng-star-inserted')
  }
  get leftGrid() {
    return $('div.mat-tab-label-content div.title.ng-star-inserted')
  }
  get gridEquipos() {
    return $$('div.aside-left div.title')
  }
  get gridsubHeader() {
    return $('div.subsection-header')
  }
  get searchBtn() {
    return $('div.fa.fa-search')
  }
  get stars() {
    return $$('i.far')
  }
  get logotype() {
    return $('img.img-fluid')
  }
  get weekNavBar() {
    return $('div.week-navbar')
  }
  get gamesDashboard() {
    return $('#games-widget-container div.primary-tabs')
  }
  get imageBanners() {
    return $$('img[type="banner"]')
  }
  get topMenuContainer() {
    return $$('ul.menu.submenu.top')
  }
  get topMenuInnerElements() {
    return $$('div.linkmenu')
  }
  get topMenuDropdownElements() {
    return $$('div.li-title')
  }
  get socialMediaLinksTop() {
    return $$('ul.social-media-icons.ng-star-inserted a')
  }
  get bannersLinks() {
    return $$('a.banner-right')
  }
  get footer() {
    return $('#legal-footer')
  }
  get footerLinks() {
    return $$('#legal-footer a')
  }
  get sponsorsCategories() {
    return $$('div.content-sponsor-swipe > div.name')
  }
  get sponsorsList() {
    return $$('div.sponsor-images> img')
  }
  get links() {
    return $$('body a')
  }
  get images() {
    return $$('body img ')
  }
  async open() {
    await super.open('competitions/standings')
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
}
module.exports = new ClasificacionesPage()
