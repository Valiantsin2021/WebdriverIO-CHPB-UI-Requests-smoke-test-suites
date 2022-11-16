const BasePage = require('./BasePage')
class ProtocoloPage extends BasePage {
  get title() {
    return $('h1.title')
  }
  get cookiesAcceptBtn() {
    return $('#pdcc-modal-accept')
  }
  get cookiesModal() {
    return $('#pdcc-modal-bg')
  }
  get header() {
    return $('h1.ng-star-inserted')
  }
  get subHeader() {
    return $('div > h3')
  }
  get mainImage() {
    return $('div.ql-editor> img')
  }
  get mainText() {
    return $$('div.ql-editor>ul li')
  }
  get mainTextBold() {
    return $$('ul strong')
  }
  get linksDown() {
    return $$('p > a')
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
    await super.open('content/pages/11700')
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
}
module.exports = new ProtocoloPage()
