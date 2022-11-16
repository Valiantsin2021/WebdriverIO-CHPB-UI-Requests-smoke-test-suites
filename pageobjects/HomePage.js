const { email, pass } = require('../utils/constants')
const BasePage = require('./BasePage')
class HomePage extends BasePage {
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
  get logotype() {
    return $('div.img-header img[tabindex="0"]')
  }
  get loginBtn() {
    return $('button.user-topbar')
  }
  get loginTitle() {
    return $('span.clupik-dialog-title')
  }
  get exitBtn() {
    return $('button.exit-button')
  }
  get profileMenuButtons() {
    return $$('div.mat-menu-content button')
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
  get socialMediaLinksDown() {
    return $$('#social-links a')
  }
  get benalmadenaBrillaBanner() {
    return $('div.swiper-slide.swiper-slide-duplicate.swiper-slide-next')
  }
  get reservaHigueronBanner() {
    return $('div.swiper-slide.swiper-slide-duplicate.swiper-slide-active')
  }
  get pacoPepeBanner() {
    return $(
      'div.swiper-slide.swiper-slide-duplicate.swiper-slide-duplicate-prev'
    )
  }
  get partidosTable() {
    return $('div.mat-tab-label-content')
  }
  get imageBanners() {
    return $$('img[type="banner"]')
  }
  get bannersLinks() {
    return $$('a.banner-right')
  }
  get verMasBtn() {
    return $('span.mat-button-wrapper span')
  }
  get footer() {
    return $('#legal-footer')
  }
  get socialSlider() {
    return $('#social-slider-container')
  }
  get socialSlidesList() {
    return $$('.swiper-slide.social-slide')
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
    await super.open()
  }
  async maximize() {
    await super.maximize()
  }
  async acceptCookies() {
    await this.cookiesAcceptBtn.waitAndClick()
  }
  async doLogin(usernameInp, passInp, submitBtn) {
    await usernameInp.waitAndSetValue(email)
    await passInp.waitAndSetValue(pass)
    await submitBtn.waitAndClick()
  }
}

module.exports = new HomePage()
