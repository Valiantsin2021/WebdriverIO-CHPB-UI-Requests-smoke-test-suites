const expectChai = require('chai').expect
const InscripcionesPage = require('../../pageobjects/InscripcionesPage')
const { showInnerMenu, hideInnerMenu } = require('../../utils/helper.js')
const {
  clubHeader,
  footerLinksText,
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
const {
  title,
  infoAlertTxt,
  dashBoardTitleTxt,
  dashboardTxt
} = require('../../utils/constants.inscripciones')
describe(`Should open Inscripciones page and check`, async function () {
  before(async function () {
    await InscripcionesPage.maximize()
    await InscripcionesPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Check Home page open and cookies modal is displayed`)
    await expect(InscripcionesPage.cookiesModal).toExist()
    await InscripcionesPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Inscripciones page header is ${clubHeader}`, async function () {
    console.info(`Check Inscripciones page header is ${clubHeader}`)
    await InscripcionesPage.acceptCookies()
    const headerText = await InscripcionesPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Inscripciones page title is displayed`, async function () {
    console.info(`Inscripciones page title is displayed`)
    const title = await InscripcionesPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Inscripciones page title is ${title}`, async function () {
    console.info(`Check Inscripciones page title is '${title}'`)
    const pageTitle = await InscripcionesPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Home page club logotype is displayed`, async function () {
    console.info(`Home page club logotype is displayed`)
    const logotype = await InscripcionesPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Home page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await InscripcionesPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await InscripcionesPage.header.waitForDisplayed()
    const topMenu = await InscripcionesPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await InscripcionesPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element's text corresponds '${el}'`, async function () {
      console.info(`Top menu each element's text corresponds '${el}'`)
      const topMenu = await InscripcionesPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(InscripcionesPage.topMenuContainer)
    const topMenuInner = await InscripcionesPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await InscripcionesPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element's text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element's text corresponds '${el}'`
      )
      const topMenuInner = await InscripcionesPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(InscripcionesPage.topMenuContainer)
    await InscripcionesPage.header.waitForDisplayed()
    const socialMedia = await InscripcionesPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await InscripcionesPage.socialMediaLinksTop
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
    const socialLinks = await InscripcionesPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Inscripciones page info alert is displayed`, async function () {
    console.info(`Inscripciones page info alert is displayed`)
    const infoAlert = await InscripcionesPage.infoAlert
    await expect(infoAlert).toBeDisplayed()
  })
  it(`Inscripciones page info alert is ${infoAlertTxt}`, async function () {
    console.info(`Check Inscripciones page info alert is '${infoAlertTxt}'`)
    const infoAlert = await InscripcionesPage.infoAlert.waitAndGetText()
    expectChai(infoAlert).to.eq(infoAlertTxt)
  })
  it(`Inscripciones page dashboard is displayed`, async function () {
    console.info(`Inscripciones page dashboard is displayed`)
    const dashboard = await InscripcionesPage.dashboard
    await expect(dashboard).toBeDisplayed()
  })
  it(`Inscripciones page dashboard title text is ${dashBoardTitleTxt}`, async function () {
    console.info(
      `Check Inscripciones page dashboard title text is '${dashBoardTitleTxt}'`
    )
    const dashboardTitle =
      await InscripcionesPage.dashboardTitle.waitAndGetText()
    expectChai(dashboardTitle).to.eq(dashBoardTitleTxt)
  })
  it(`Inscripciones page dashboard is displayed`, async function () {
    console.info(`Inscripciones page dashboard is displayed`)
    const dashboardText = await InscripcionesPage.dashboardText[1]
    await expect(dashboardText).toBeDisplayed()
  })
  it(`Inscripciones page dashboard text is ${dashboardTxt}`, async function () {
    console.info(`Check Inscripciones page dashboard text is '${dashboardTxt}'`)
    const dashboard = await InscripcionesPage.dashboardText[1].waitAndGetText()
    expectChai(dashboard).to.eq(dashboardTxt)
  })
  it(`Footer on the Home page is displayed`, async function () {
    console.info(`Footer on the Home page is displayed`)
    const footer = await InscripcionesPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await InscripcionesPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element's text corresponds '${el}'`, async function () {
      console.info(`Sponsor categories each element's text corresponds '${el}'`)
      const sponsorCategories = await InscripcionesPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await InscripcionesPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await InscripcionesPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
