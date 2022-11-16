const BasePage = require('./BasePage')
class HistoriaPage extends BasePage {
  get title() {
    return $('h1.title')
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
  get mainImg() {
    return $('p > img')
  }
  get header() {
    return $('h1.ng-star-inserted')
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
    return $$('body img')
  }
  async open() {
    await super.open('content/pages/11698')
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
}
module.exports = new HistoriaPage()
