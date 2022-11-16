const BasePage = require('./BasePage')
class InscripcionesPage extends BasePage {
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
  get header() {
    return $('h1.ng-star-inserted')
  }
  get title() {
    return $('h1.title')
  }
  get infoAlert() {
    return $('div.alert-info')
  }
  get dashboard() {
    return $('app-registration-public-list>div.dashboard')
  }
  get dashboardTitle() {
    return $('div.subsection-header h3.title')
  }
  get dashboardText() {
    return $$('div.dashboard > span')
  }
  get logotype() {
    return $('img.img-fluid')
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
    await super.open('registrations/public/list')
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
}
module.exports = new InscripcionesPage()
