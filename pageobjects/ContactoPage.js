const BasePage = require('./BasePage')
class ContactoPage extends BasePage {
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
  get logotype() {
    return $('img.img-fluid')
  }
  get nameInput() {
    return $('#name')
  }
  get phoneInput() {
    return $('#lastName')
  }
  get emailInput() {
    return $('#email')
  }
  get titleInput() {
    return $('#title')
  }
  get messageInput() {
    return $('textarea[formcontrolname="description"]')
  }
  get description() {
    return $('div.small-grey')
  }
  get checkbox() {
    return $('input[type="checkbox"]')
  }
  get termAcceptance() {
    return $('span.mat-checkbox-label > span.ng-star-inserted')
  }
  get submitBtn() {
    return $('button[type="submit"]')
  }
  get submitBtnText() {
    return $('span.mat-button-wrapper > span')
  }
  get contactHeaders() {
    return $$('div.title[_ngcontent-clupik-app-front-c482]')
  }
  get contactContext() {
    return $$('div.value[_ngcontent-clupik-app-front-c482]')
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
    await super.open('club/contact')
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
}
module.exports = new ContactoPage()
