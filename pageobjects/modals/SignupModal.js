const BasePage = require('../BasePage')
class SignupModal extends BasePage {
  get title() {
    return $('span.clupik-dialog-title')
  }
  get nameInput() {
    return $('#firstName')
  }
  get namePlaceholder() {
    return $('label[aria-owns="firstName"] mat-label')
  }
  get nameError() {
    return $('#mat-error-1')
  }
  get lastNameInput() {
    return $('#lastName')
  }
  get lastNamePlaceholder() {
    return $('label[for="lastName"] mat-label')
  }
  get lastNameError() {
    return $('#mat-error-0 span')
  }
  get secondLastNameInput() {
    return $('#secondSurname')
  }
  get secondLastNamePlaceholder() {
    return $('label[for="secondSurname"] mat-label')
  }
  get birthInput() {
    return $('#datepicker')
  }
  get birthPlaceholder() {
    return $('label[for="datepicker"] mat-label')
  }
  get birthError() {
    return $('span.date-error')
  }
  get emailInput() {
    return $('#email')
  }
  get emailPlaceholder() {
    return $('label[for="email"] mat-label')
  }
  get emailError() {
    return $('#mat-error-3 span')
  }
  get checkbox() {
    $$('input[type="checkbox"]')
  }
  get submitBtn() {
    return $('button[type="submit"]')
  }
  get submitBtnText() {
    return $('button[type="submit"] span')
  }
  get acceptPrivacy() {
    return $('div.conditions')
  }
  get acceptSubscriptionLink() {
    return $(
      '//span[text()="Acepto recibir los avisos y comunicaciones del club"]'
    )
  }
  get exitBtn() {
    return $('button.exit-button')
  }
  get links() {
    return $('app-authentication a')
  }
}
module.exports = new SignupModal()
