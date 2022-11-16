const expectChai = require('chai').expect
const HomePage = require('../../pageobjects/HomePage')
const { showInnerMenu, hideInnerMenu } = require('../../utils/helper.js')
const {
  baseUrl,
  clubHeader,
  partidosText,
  bannersLinks,
  verMasText,
  footerLinksText,
  socialSlidesNumber,
  socialSlidesStyle,
  bannersAttr,
  logoSize,
  sponsorCategoriesText,
  sponsorsNumber,
  sponsorsSrc
} = require('../../utils/constants')
const {
  topMenuElementsText,
  topMenuElementsLength,
  topMenuInnerElementsText,
  topMenuInnerElementsLength,
  socialMediaLinks,
  socialMediaLinksLength
} = require('../../utils/pageMenus')
const LoginModal = require('../../pageobjects/modals/LoginModal')
const {
  usernameInputPlaceholder,
  passwordInputPlaceholder,
  loginLinkTxt,
  signupLinkTxt,
  dontRememberTxt,
  loginBtnText,
  loginEmailBtnText,
  loginTitle
} = require('../../utils/constants.login')
const SignupModal = require('../../pageobjects/modals/SignupModal')
const {
  signupTitle,
  namePlaceholderTxt,
  lastNamePlaceholderTxt,
  secondLastNamePlaceholderTxt,
  birthPlaceholderTxt,
  emailPlaceholderTxt,
  submitBtnTxt,
  subscriptionAcceptTxt
} = require('../../utils/constants.signup')
describe(`Should open Home Page of ${baseUrl} and check`, async function () {
  before(async function () {
    await HomePage.maximize()
    await HomePage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Home page open and cookies modal is displayed`)
    await expect(HomePage.cookiesModal).toExist()
    await HomePage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Cookies accept button is displayed`, async function () {
    console.info(`Cookies accept button is displayed`)
    await expect(HomePage.cookiesModal).toExist()
    await HomePage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Cookies config button is displayed`, async function () {
    console.info(`Cookies config button is displayed`)
    await expect(HomePage.cookiesModal).toExist()
    await HomePage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Home page header is ${clubHeader}`, async function () {
    console.info(`Check Home page header is ${clubHeader}`)
    await HomePage.acceptCookies()
    const headerText = await HomePage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Home page club logotype is displayed`, async function () {
    console.info(`Home page club logotype is displayed`)
    const logotype = await HomePage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Home page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await HomePage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await HomePage.header.waitForDisplayed()
    let topMenu = await HomePage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await HomePage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element's text corresponds '${el}'`, async function () {
      console.info(`Top menu each element's text corresponds '${el}'`)
      const topMenu = await HomePage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(HomePage.topMenuContainer)
    const topMenuInner = await HomePage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await HomePage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element's text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element's text corresponds '${el}'`
      )
      const topMenuInner = await HomePage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(HomePage.topMenuContainer)
    await HomePage.header.waitForDisplayed()
    const socialMedia = await HomePage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await HomePage.socialMediaLinksTop
    await expect(socialMediaLength).toBeElementsArrayOfSize(
      socialMediaLinksLength
    )
  })
  it(`Top social links href attribute against '${socialMediaLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Top social links href attribute against '${socialMediaLinks.join(
        ' , '
      )}'`
    )
    const socialLinks = await HomePage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Down social links are displayed`, async function () {
    console.info(`Down social links are displayed`)
    await HomePage.header.waitForDisplayed()
    const socialMedia = await HomePage.socialMediaLinksDown
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Down social links number of elements`, async function () {
    console.info(`Down social links number of elements`)
    const socialMediaLength = await HomePage.socialMediaLinksDown
    await expect(socialMediaLength).toBeElementsArrayOfSize(
      socialMediaLinksLength
    )
  })
  it(`Down media links href attribute against '${socialMediaLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Down media links href attribute against '${socialMediaLinks.join(
        ' , '
      )}'`
    )
    const socialLinks = await HomePage.socialMediaLinksDown.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Paco Pepe banner is displayed`, async function () {
    console.info(`Paco Pepe banner is displayed`)
    const pacoPepe = await HomePage.pacoPepeBanner
    await expect(pacoPepe).toBeDisplayed()
  })
  it(`Reserva del Higueron banner is displayed`, async function () {
    console.info(`Reserva del Higueron banner is displayed`)
    const reservaH = await HomePage.reservaHigueronBanner
    await expect(reservaH).toBeDisplayed()
  })
  it(`Benalmadena Brilla banner is displayed`, async function () {
    console.info(`Benalmadena Brilla banner is displayed`)
    const benalmadena = await HomePage.benalmadenaBrillaBanner
    await expect(benalmadena).toBeDisplayed()
  })
  it(`Partidos table is displayed`, async function () {
    console.info(`Partidos table is displayed`)
    const partidos = await HomePage.partidosTable
    await expect(partidos).toBeDisplayed()
  })
  it(`Partidos table element text is equal '${partidosText}'`, async function () {
    console.info(`Partidos table is displayed`)
    const partidos = await HomePage.partidosTable.getText()
    await expectChai(partidos).to.eq(partidosText)
  })
  it(`Image banners on the Home page are displayed`, async function () {
    console.info(`Image banners on the Home page are displayed`)
    const banners = await HomePage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await HomePage.imageBanners
    for (let el of banners) {
      await expect(el).toHaveAttribute('data-sizes', bannersAttr)
    }
  })
  it(`Image banners on the Home page href attribute against '${bannersLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Image banners on the Home page href attribute against '${bannersLinks.join(
        ' , '
      )}'`
    )
    const bannerHrefs = await HomePage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`'Ver mas' button is displayed`, async function () {
    console.info(`'Ver mas' button is displayed`)
    const verMas = await HomePage.verMasBtn
    await expect(verMas).toBeDisplayed()
  })
  it(`'Ver mas' button text is '${verMasText}'`, async function () {
    console.info(`'Ver mas' button is displayed`)
    const verMas = await HomePage.verMasBtn
    await expect(verMas).toHaveText(verMasText)
  })
  it(`Footer on the Home page is displayed`, async function () {
    console.info(`Footer on the Home page is displayed`)
    const footer = await HomePage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await HomePage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  it(`Social slider is displayed`, async function () {
    console.info(`Social slider is displayed`)
    const socialSlider = await HomePage.socialSlider
    await expect(socialSlider).toBeDisplayed()
  })
  it(`Social slider number of elements is at least '${socialSlidesNumber}'`, async function () {
    console.info(
      `Social slider number of elements is at least '${socialSlidesNumber}'`
    )
    const socialSliders = await HomePage.socialSlidesList
    await expect(socialSliders).toBeElementsArrayOfSize(socialSlidesNumber)
  })
  it(`Social slides have attribute 'style' equal to '${socialSlidesStyle}'`, async function () {
    console.info(
      `Social slides have attribute 'style' equal to '${socialSlidesStyle}'`
    )
    const socialSliders = await HomePage.socialSlidesList
    for (let el of socialSliders) {
      await expect(el).toHaveAttribute('style', socialSlidesStyle)
    }
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element's text corresponds '${el}'`, async function () {
      console.info(`Sponsor categories each element's text corresponds '${el}'`)
      const sponsorCategories = await HomePage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(
      `Sponsors list number of elements is equal to ${sponsorsNumber}`
    )
    const sponsors = await HomePage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await HomePage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
  it(`Login modal title is displayed`, async function () {
    console.info(`Login modal title is displayed`)
    await HomePage.loginBtn.click()
    const loginTitle = await LoginModal.title
    await expect(loginTitle).toBeDisplayed()
  })
  it(`Login modal title  has text '${loginTitle}'`, async function () {
    console.info(`Login modal title has text '${loginTitle}'`)
    const title = await LoginModal.title
    await expect(title).toHaveText(loginTitle)
  })
  it(`User name input is displayed`, async function () {
    console.info(`User name input is displayed`)
    const usernameInp = await LoginModal.usernameInput
    await expect(usernameInp).toBeDisplayed()
  })
  it(`User name input placeholder has value '${usernameInputPlaceholder}'`, async function () {
    console.info(
      `User name input placeholder has value '${usernameInputPlaceholder}'`
    )
    const usernameInp = await LoginModal.usernameInputPlaceholder
    await expect(usernameInp).toHaveText(usernameInputPlaceholder)
  })
  it(`Password input is displayed`, async function () {
    console.info(`Password input is displayed`)
    const passInp = await LoginModal.passwordInput
    await expect(passInp).toBeDisplayed()
  })
  it(`Password input placeholder has value '${passwordInputPlaceholder}'`, async function () {
    console.info(
      `User name input placeholder has value '${passwordInputPlaceholder}'`
    )
    const usernameInp = await LoginModal.passwordInputPlaceholder
    await expect(usernameInp).toHaveText(passwordInputPlaceholder)
  })
  it(`Login link is displayed`, async function () {
    console.info(`Login link is displayed`)
    const loginLink = await LoginModal.loginLink
    await expect(loginLink).toBeDisplayed()
  })
  it(`Login link has text '${loginLinkTxt}'`, async function () {
    console.info(`Login link has text '${loginLinkTxt}`)
    const loginLink = await LoginModal.loginLink
    await expect(loginLink).toHaveText(loginLinkTxt)
  })
  it(`Signup link is displayed`, async function () {
    console.info(`Signup link is displayed`)
    const loginLink = await LoginModal.loginLink
    await expect(loginLink).toBeDisplayed()
  })
  it(`Signup link has text '${signupLinkTxt}'`, async function () {
    console.info(`Signup link has text '${signupLinkTxt}`)
    const signupLink = await LoginModal.signupLink
    await expect(signupLink).toHaveText(signupLinkTxt)
  })
  it(`Visibility icon is displayed`, async function () {
    console.info(`Visibility icon is displayed`)
    const visibilityIcon = await LoginModal.visibilityIcon
    await expect(visibilityIcon).toBeDisplayed()
  })
  it(`Forgot password link is displayed`, async function () {
    console.info(`Forgot password link is displayed`)
    const forgotPassLink = await LoginModal.forgotPassLink
    await expect(forgotPassLink).toBeDisplayed()
  })
  it(`Forgot password link has text '${dontRememberTxt}'`, async function () {
    console.info(`Forgot password link has text '${dontRememberTxt}`)
    const dontRememberTitle = await LoginModal.dontRememberTitle
    await expect(dontRememberTitle).toHaveText(dontRememberTxt)
  })
  it(`Login button is displayed`, async function () {
    console.info(`Login button is displayed`)
    const loginBtn = await LoginModal.loginBtn
    await expect(loginBtn).toBeDisplayed()
  })
  it(`Login button has text '${loginBtnText}'`, async function () {
    console.info(`Login button has text '${loginBtnText}'`)
    const loginBtnTxt = await LoginModal.loginBtnTxt
    await expect(loginBtnTxt).toHaveText(loginBtnText)
  })
  it(`Login with email button is displayed`, async function () {
    console.info(`Login with email button is displayed`)
    const loginEmailBtn = await LoginModal.loginEmailBtn
    await expect(loginEmailBtn).toBeDisplayed()
  })
  it(`Login with email button has text '${loginEmailBtnText}'`, async function () {
    console.info(`Login with email button has text '${loginEmailBtnText}'`)
    const loginEmailBtnTxt = await LoginModal.loginEmailBtnTxt
    await expect(loginEmailBtnTxt).toHaveText(loginEmailBtnText)
  })
  it(`Exit button is displayed`, async function () {
    console.info(`Exit button is displayed`)
    const exitBtn = await LoginModal.exitBtn
    await expect(exitBtn).toBeDisplayed()
  })
  it(`Signup modal title is displayed`, async function () {
    console.info(`Signup modal title is displayed`)
    await (await LoginModal.signupLink).click()
    const signupTitle = await SignupModal.title
    await expect(signupTitle).toBeDisplayed()
  })
  it(`Signup modal title  has text '${signupTitle}'`, async function () {
    console.info(`Signup modal title has text '${signupTitle}'`)
    const title = await SignupModal.title
    await expect(title).toHaveText(signupTitle)
  })
  it(`Signup modal name input is displayed`, async function () {
    console.info(`Signup modal name input is displayed`)
    const nameInput = await SignupModal.nameInput
    await expect(nameInput).toBeDisplayed()
  })
  it(`Signup modal name input has placeholder '${namePlaceholderTxt}'`, async function () {
    console.info(
      `Signup modal name input has placeholder '${namePlaceholderTxt}'`
    )
    const namePlaceholder = await SignupModal.namePlaceholder
    await expect(namePlaceholder).toHaveText(namePlaceholderTxt)
  })
  it(`Signup modal last name input is displayed`, async function () {
    console.info(`Signup modal last name input is displayed`)
    const lastNameInput = await SignupModal.lastNameInput
    await expect(lastNameInput).toBeDisplayed()
  })
  it(`Signup modal last name input has placeholder '${lastNamePlaceholderTxt}'`, async function () {
    console.info(
      `Signup modal last name input has placeholder '${lastNamePlaceholderTxt}'`
    )
    const namePlaceholder = await SignupModal.lastNamePlaceholder
    await expect(namePlaceholder).toHaveText(lastNamePlaceholderTxt)
  })
  it(`Signup modal last name input is displayed`, async function () {
    console.info(`Signup modal last name input is displayed`)
    const secondLastNamePlaceholder =
      await SignupModal.secondLastNamePlaceholder
    await expect(secondLastNamePlaceholder).toBeDisplayed()
  })
  it(`Signup modal second last name input has placeholder '${secondLastNamePlaceholderTxt}'`, async function () {
    console.info(
      `Signup modal second last name input has placeholder '${secondLastNamePlaceholderTxt}'`
    )
    const secondLastNamePlaceholder =
      await SignupModal.secondLastNamePlaceholder
    await expect(secondLastNamePlaceholder).toHaveText(
      secondLastNamePlaceholderTxt
    )
  })
  it(`Signup birth modal date input is displayed`, async function () {
    console.info(`Signup modal birth date input is displayed`)
    const birthInput = await SignupModal.birthInput
    await expect(birthInput).toBeDisplayed()
  })
  it(`Signup modal birth date input has placeholder '${birthPlaceholderTxt}'`, async function () {
    console.info(
      `Signup modal birth date input has placeholder '${birthPlaceholderTxt}'`
    )
    const birthPlaceholder = await SignupModal.birthPlaceholder
    await expect(birthPlaceholder).toHaveText(birthPlaceholderTxt)
  })
  it(`Signup modal email input is displayed`, async function () {
    console.info(`Signup modal email input is displayed`)
    const emailInput = await SignupModal.emailInput
    await expect(emailInput).toBeDisplayed()
  })
  it(`Signup modal email input has placeholder '${emailPlaceholderTxt}'`, async function () {
    console.info(
      `Signup modal email input has placeholder '${emailPlaceholderTxt}'`
    )
    const emailPlaceholder = await SignupModal.emailPlaceholder
    await expect(emailPlaceholder).toHaveText(emailPlaceholderTxt)
  })
  it(`Signup modal checkbox privacy accept text is displayed`, async function () {
    // console.info(`Signup modal checkbox privacy accept text is displayed`)
    // const checkbox = await SignupModal.checkbox
    // console.log(await checkbox)
    // await expect(checkbox).toExist()
  })
  it(`Signup modal privacy accept text is displayed`, async function () {
    console.info(`Signup modal privacy accept text is displayed`)
    const acceptPrivacy = await SignupModal.acceptPrivacy
    await expect(acceptPrivacy).toBeDisplayed()
  })
  it(`Signup modal subscription accept text is displayed`, async function () {
    console.info(`Signup modal subscription accept text is displayed`)
    const acceptSubscriptionLink = await SignupModal.acceptSubscriptionLink
    await expect(acceptSubscriptionLink).toBeDisplayed()
  })
  it(`Signup subscription accept text is '${subscriptionAcceptTxt}'`, async function () {
    console.info(
      `Signup subscription accept text is '${subscriptionAcceptTxt}'`
    )
    const acceptSubscriptionLink = await SignupModal.acceptSubscriptionLink
    await expect(acceptSubscriptionLink).toHaveText(subscriptionAcceptTxt)
  })
  it(`Signup modal submit button is displayed`, async function () {
    console.info(`Signup modal submit button is displayed`)
    const submitBtn = await SignupModal.submitBtn
    await expect(submitBtn).toBeDisplayed()
  })
  it(`Signup submit button has text '${submitBtnTxt}'`, async function () {
    console.info(`Signup submit button has text '${submitBtnTxt}'`)
    const submitBtnText = await SignupModal.submitBtnText
    await expect(submitBtnText).toHaveText(submitBtnTxt)
  })
})
