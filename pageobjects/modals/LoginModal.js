const BasePage = require('../BasePage')
class LoginModal extends BasePage {
  get title() {
    return $('span.clupik-dialog-title')
  }
  get usernameInput() {
    return $('#username')
  }
  get usernameInputPlaceholder() {
    return $('label[aria-owns="username"] mat-label')
  }
  get passwordInput() {
    return $('#password')
  }
  get passwordInputPlaceholder() {
    return $('label[aria-owns="password"] mat-label')
  }
  get loginLink() {
    return $('#mat-tab-link-0')
  }
  get signupLink() {
    return $('#mat-tab-link-1')
  }
  get visibilityIcon() {
    return $('mat-icon[matsuffix="matSuffix"]')
  }
  get forgotPassLink() {
    return $('a.btn-only-text')
  }
  get dontRememberTitle() {
    return $('div.option span')
  }
  get loginBtn() {
    return $('button[type="submit"]')
  }
  get loginBtnTxt() {
    return $('button[type="submit"] span.ng-star-inserted')
  }
  get loginEmailBtn() {
    return $('div.actions-login button')
  }
  get loginEmailBtnTxt() {
    return $('div.actions-login button span span')
  }
  get exitBtn() {
    return $('button.exit-button')
  }
  get links() {
    return $$('app-authentication a')
  }
}
module.exports = new LoginModal()
