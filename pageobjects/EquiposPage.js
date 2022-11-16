const BasePage = require('./BasePage')
class EquiposPage extends BasePage {
  get title() {
    return $('div.clupik-title-h1')
  }
  get cookiesAcceptBtn() {
    return $('#pdcc-modal-accept')
  }
  get cookiesConfigBtn() {
    return $('#pdcc-modal-config')
  }
  get cookiesModal() {
    return $('#pdcc-modal-bg')
  }
  get header() {
    return $('h1.ng-star-inserted')
  }
  get subHeader() {
    return $('div.clupik-text-body-normal')
  }
  get equiposNames() {
    return $$('#team-select-component div.title')
  }
  get equiposImg() {
    return $$('img[type="team"]')
  }
  get leftGrid() {
    return $('div.mat-tab-label-content div.title.ng-star-inserted')
  }
  get gridEquipos() {
    return $$('div.aside-left div.title')
  }
  get subHeader() {
    return $('div.subsection-header')
  }
  get searchBtn() {
    return $('div.fa.fa-search')
  }
  get stars() {
    return $$('i.far')
  }
  get temporadaDropdown() {
    return $('div.mat-select-arrow-wrapper')
  }
  get temporadaDropdownOptions() {
    return $$('span.mat-option-text')
  }
  get logotype() {
    return $('img.img-fluid')
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
    await super.open('team/select')
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
}
module.exports = new EquiposPage()
