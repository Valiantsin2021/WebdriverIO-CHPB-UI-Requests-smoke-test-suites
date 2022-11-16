const BasePage = require('./BasePage')
class AlbumesPage extends BasePage {
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
  get todosFotosBtn() {
    return $('a[href="/es/media/photos/all"]')
  }
  get albumsBtn() {
    return $('a[href="/es/media/photos/album"]')
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
    await super.open('media/photos/album')
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
}
module.exports = new AlbumesPage()
