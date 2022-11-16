const BasePage = require('./BasePage')
class VideosPage extends BasePage {
  get title() {
    return $('h1.tag')
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
  get player() {
    return $('iframe.embed-responsive-item')
  }
  get compartirBtn() {
    return $('a span')
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
    await super.open('media/videos/all')
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
}
module.exports = new VideosPage()
