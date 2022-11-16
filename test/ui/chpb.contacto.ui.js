const expectChai = require('chai').expect
const ContactoPage = require('../../pageobjects/ContactoPage')
const { showInnerMenu, hideInnerMenu } = require('../../utils/helper.js')
const {
  clubHeader,
  footerLinksText,
  bannersAttr,
  logoSize,
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
const {
  bannersLinks,
  title,
  sponsorsNumber,
  sponsorCategoriesText,
  contactoUrl,
  requiredText,
  namePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  titlePlaceholder,
  messagePlaceholder,
  descriptionMsg,
  submitBtnText,
  termAcceptanceText,
  contactTitles,
  contactText
} = require('../../utils/constants.contacto')
describe(`Should open Contacto page and check`, async function () {
  before(async function () {
    await ContactoPage.maximize()
    await ContactoPage.open()
  })
  it(`cookies modal is displayed`, async function () {
    console.info(`Check Contacto page open and cookies modal is displayed`)
    await expect(ContactoPage.cookiesModal).toExist()
    await ContactoPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Contacto page header is ${clubHeader}`, async function () {
    console.info(`Check Contacto page header is ${clubHeader}`)
    await ContactoPage.acceptCookies()
    await browser.url(contactoUrl)
    const headerText = await ContactoPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Contacto page title is displayed`, async function () {
    console.info(`Contacto page title is displayed`)
    const title = await ContactoPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Contacto page title is ${title}`, async function () {
    console.info(`Check Contacto page title is '${title}'`)
    const pageTitle = await ContactoPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Contacto page club logotype is displayed`, async function () {
    console.info(`Contacto page club logotype is displayed`)
    const logotype = await ContactoPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Contacto page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await ContactoPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await ContactoPage.header.waitForDisplayed()
    const topMenu = await ContactoPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await ContactoPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element\'s text corresponds '${el}'`, async function () {
      console.info(`Top menu each element\'s text corresponds '${el}'`)
      const topMenu = await ContactoPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(ContactoPage.topMenuContainer)
    const topMenuInner = await ContactoPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await ContactoPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element\'s text corresponds '${el}'`
      )
      const topMenuInner = await ContactoPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(ContactoPage.topMenuContainer)
    await ContactoPage.header.waitForDisplayed()
    const socialMedia = await ContactoPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await ContactoPage.socialMediaLinksTop
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
    const socialLinks = await ContactoPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Name input on the Contacto page is displayed`, async function () {
    console.info(`Name input on the Contacto page is displayed`)
    const nameInput = await ContactoPage.nameInput
    await expect(nameInput).toBeDisplayed()
  })
  it(`Name input on the Contacto page has attribute '${requiredText}'`, async function () {
    console.info(
      `Name input on the Contacto page has attribute '${requiredText}'`
    )
    const nameInput = await ContactoPage.nameInput
    await expect(nameInput).toHaveAttr(requiredText)
  })
  it(`Name input on the Contacto page has data-placeholder '${namePlaceholder}'`, async function () {
    console.info(
      `Name input on the Contacto page has placeholder '${namePlaceholder}'`
    )
    const nameInput = await ContactoPage.nameInput
    await expect(nameInput).toHaveAttr('data-placeholder', namePlaceholder)
  })
  it(`Name input on the Contacto page is displayed`, async function () {
    console.info(`Name input on the Contacto page is displayed`)
    const phoneInput = await ContactoPage.phoneInput
    await expect(phoneInput).toBeDisplayed()
  })
  it(`Phone input on the Contacto page has data-placeholder '${phonePlaceholder}'`, async function () {
    console.info(
      `Phone input on the Contacto page has placeholder '${phonePlaceholder}'`
    )
    const phoneInput = await ContactoPage.phoneInput
    await expect(phoneInput).toHaveAttr('data-placeholder', phonePlaceholder)
  })
  it(`Email input on the Contacto page is displayed`, async function () {
    console.info(`Email input on the Contacto page is displayed`)
    const emailInput = await ContactoPage.emailInput
    await expect(emailInput).toBeDisplayed()
  })
  it(`Email input on the Contacto page has attribute '${requiredText}'`, async function () {
    console.info(
      `Email input on the Contacto page has attribute '${requiredText}'`
    )
    const emailInput = await ContactoPage.emailInput
    await expect(emailInput).toHaveAttr(requiredText)
  })
  it(`Email input on the Contacto page has data-placeholder '${emailPlaceholder}'`, async function () {
    console.info(
      `Email input on the Contacto page has placeholder '${emailPlaceholder}'`
    )
    const emailInput = await ContactoPage.emailInput
    await expect(emailInput).toHaveAttr('data-placeholder', emailPlaceholder)
  })
  it(`Title input on the Contacto page is displayed`, async function () {
    console.info(`Title input on the Contacto page is displayed`)
    const titleInput = await ContactoPage.titleInput
    await expect(titleInput).toBeDisplayed()
  })
  it(`Title input on the Contacto page has attribute '${requiredText}'`, async function () {
    console.info(
      `Title input on the Contacto page has attribute '${requiredText}'`
    )
    const titleInput = await ContactoPage.titleInput
    await expect(titleInput).toHaveAttr(requiredText)
  })
  it(`Title input on the Contacto page has data-placeholder '${titlePlaceholder}'`, async function () {
    console.info(
      `Title input on the Contacto page has placeholder '${titlePlaceholder}'`
    )
    const titleInput = await ContactoPage.titleInput
    await expect(titleInput).toHaveAttr('data-placeholder', titlePlaceholder)
  })
  it(`Message input on the Contacto page is displayed`, async function () {
    console.info(`Message input on the Contacto page is displayed`)
    const messageInput = await ContactoPage.messageInput
    await expect(messageInput).toBeDisplayed()
  })
  it(`Message input on the Contacto page has attribute '${requiredText}'`, async function () {
    console.info(
      `Message input on the Contacto page has attribute '${requiredText}'`
    )
    const messageInput = await ContactoPage.messageInput
    await expect(messageInput).toHaveAttr(requiredText)
  })
  it(`Message input on the Contacto page has data-placeholder '${messagePlaceholder}'`, async function () {
    console.info(
      `Message input on the Contacto page has placeholder '${messagePlaceholder}'`
    )
    const messageInput = await ContactoPage.messageInput
    await expect(messageInput).toHaveAttr(
      'data-placeholder',
      messagePlaceholder
    )
  })
  it(`Description message on the Contacto page is displayed`, async function () {
    console.info(`Description message on the Contacto page is displayed`)
    const description = await ContactoPage.description
    await expect(description).toBeDisplayed()
  })
  it(`Description message on the Contacto page has text '${descriptionMsg}'`, async function () {
    console.info(
      `Description message on the Contacto page has text '${descriptionMsg}'`
    )
    const description = await ContactoPage.description
    await expect(description).toHaveText(descriptionMsg)
  })
  it(`Accept checkbox on the Contacto page is displayed`, async function () {
    console.info(`Accept checkbox on the Contacto page is displayed`)
    const checkbox = await ContactoPage.checkbox
    await expect(checkbox).toBeDisplayed()
  })
  it(`Term Acceptance text on the Contacto page is displayed`, async function () {
    console.info(`Term Acceptance text on the Contacto page is displayed`)
    const termAcceptance = await ContactoPage.termAcceptance
    await expect(termAcceptance).toBeDisplayed()
  })
  it(`Term Acceptance text on the Contacto page has text '${termAcceptanceText}'`, async function () {
    console.info(
      `Term Acceptance text on the Contacto page has text '${termAcceptanceText}'`
    )
    const termAcceptance = await ContactoPage.termAcceptance
    await expect(termAcceptance).toHaveText(termAcceptanceText)
  })
  it(`'Enviar mensaje' button on the Contacto page is displayed`, async function () {
    console.info(`'Enviar mensaje' button on the Contacto page is displayed`)
    const submitBtn = await ContactoPage.submitBtn
    await expect(submitBtn).toBeDisplayed()
  })
  it(`'Enviar mensaje' button on the Contacto page has text '${submitBtnText}'`, async function () {
    console.info(
      `Term Acceptance text on the Contacto page has text '${submitBtnText}'`
    )
    const submitBtnTxt = await ContactoPage.submitBtnText
    await expect(submitBtnTxt).toHaveText(submitBtnText)
  })
  it(`Contact details headers on the Contacto page are displayed`, async function () {
    console.info(`Contact details headers on the Contacto page are displayed`)
    const contactDetailsHeaders = await ContactoPage.contactHeaders
    for (let el of contactDetailsHeaders) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Contact details headers on the Contacto page have text corresponding to '${contactTitles}'`, async function () {
    console.info(`Contact details headers on the Contacto page are displayed`)
    const contactDetailsHeaders = await ContactoPage.contactHeaders.map(el =>
      el.waitAndGetText()
    )
    for (let i = 0; i < contactDetailsHeaders.length; i++) {
      expectChai(contactDetailsHeaders[i]).to.eq(contactTitles[i])
    }
  })
  it(`Contact details text on the Contacto page are displayed`, async function () {
    console.info(`Contact details text on the Contacto page are displayed`)
    const contactContext = await ContactoPage.contactContext
    for (let el of contactContext) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Contact details text on the Contacto page have text corresponding to '${contactText}'`, async function () {
    console.info(
      `Contact details text on the Contacto page have text corresponding to '${contactText}'`
    )
    const contactDetailsContext = await ContactoPage.contactContext.map(el =>
      el.waitAndGetText()
    )
    for (let i = 0; i < contactDetailsContext.length; i++) {
      expectChai(contactDetailsContext[i]).to.eq(contactText[i])
    }
  })
  it(`Image banners on the Contacto page are displayed`, async function () {
    console.info(`Image banners on the Contacto page are displayed`)
    const banners = await ContactoPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await ContactoPage.imageBanners
    for (let el of banners) {
      await expect(el).toHaveAttribute('data-sizes', bannersAttr)
    }
  })
  it(`Image banners on the Contacto page href attribute against '${bannersLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Image banners on the Contacto page href attribute against '${bannersLinks.join(
        ' , '
      )}'`
    )
    const bannerHrefs = await ContactoPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Contacto page is displayed`, async function () {
    console.info(`Footer on the Contacto page is displayed`)
    const footer = await ContactoPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await ContactoPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Sponsor categories each element\'s text corresponds '${el}'`
      )
      const sponsorCategories = await ContactoPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsorsDown = await ContactoPage.sponsorsList
    await expect(sponsorsDown).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsorsDown = await ContactoPage.sponsorsList
    for (let el of sponsorsDown) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
