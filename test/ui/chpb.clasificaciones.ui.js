const expectChai = require('chai').expect
const ClasificacionesPage = require('../../pageobjects/ClasificacionesPage')
const { showInnerMenu, hideInnerMenu } = require('../../utils/helper.js')
const {
  clubHeader,
  footerLinksText,
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
const {
  bannersLinks,
  title,
  clasificacionesUrl,
  subHeaderText,
  leftGridHeader,
  leftPartidosNamesText,
  temporadas,
  equiposDropdownText
} = require('../../utils/constants.clasificaciones')
describe(`Should open Clasificaciones page and check`, async function () {
  before(async function () {
    await ClasificacionesPage.maximize()
    await ClasificacionesPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(
      `Check Clasificaciones page open and cookies modal is displayed`
    )
    await expect(ClasificacionesPage.cookiesModal).toExist()
    await ClasificacionesPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Clasificaciones page header is ${clubHeader}`, async function () {
    console.info(`Check Clasificaciones page header is ${clubHeader}`)
    await ClasificacionesPage.acceptCookies()
    await browser.url(clasificacionesUrl)
    const headerText = await ClasificacionesPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Clasificaciones page title is displayed`, async function () {
    console.info(`Clasificaciones page title is displayed`)
    const title = await ClasificacionesPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Clasificaciones page title is ${title}`, async function () {
    console.info(`Check Clasificaciones page title is '${title}'`)
    const pageTitle = await ClasificacionesPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Clasificaciones page club logotype is displayed`, async function () {
    console.info(`Clasificaciones page club logotype is displayed`)
    const logotype = await ClasificacionesPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Clasificaciones page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Clasificaciones page club logotype has attribute 'sizes' equal to '${logoSize}'`
    )
    const logotype = await ClasificacionesPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await ClasificacionesPage.header.waitForDisplayed()
    const topMenu = await ClasificacionesPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await ClasificacionesPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element's text corresponds '${el}'`, async function () {
      console.info(`Top menu each element's text corresponds '${el}'`)
      const topMenu = await ClasificacionesPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(ClasificacionesPage.topMenuContainer)
    const topMenuInner = await ClasificacionesPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await ClasificacionesPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element's text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element's text corresponds '${el}'`
      )
      const topMenuInner = await ClasificacionesPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(ClasificacionesPage.topMenuContainer)
    await ClasificacionesPage.header.waitForDisplayed()
    const socialMedia = await ClasificacionesPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await ClasificacionesPage.socialMediaLinksTop
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
    const socialLinks = await ClasificacionesPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Dropdown buttons are displayed`, async function () {
    console.info(`Dropdown buttons are displayed`)
    const dropdowns = await ClasificacionesPage.dropdownBtns
    for (let el of dropdowns) {
      await expect(el).toBeDisplayed()
    }
    await ClasificacionesPage.temporadasDropdown.click()
  })
  temporadas.forEach((el, i) => {
    it(`Temporadas dropdown each element text corresponds '${el}'`, async function () {
      console.info(`Temporadas dropdown each element text corresponds '${el}'`)
      const temporadasList = await ClasificacionesPage.temporadaDropdownOptions
      expectChai(await temporadasList[i].getText()).to.eq(el)
    })
  })
  it(`Week Nav Bar is displayed`, async function () {
    console.info(`Week Nav Bar is displayed`)
    await browser.keys('Escape')
    await expect(ClasificacionesPage.weekNavBar).toBeDisplayed()
    await ClasificacionesPage.equiposDropdown.click()
  })
  equiposDropdownText.forEach((el, i) => {
    it(`Equipos dropdown each element text corresponds '${el}'`, async function () {
      console.info(`Equipos dropdown each element text corresponds '${el}'`)
      const equiposNames = await ClasificacionesPage.dropdownEquiposNames
      expectChai(await equiposNames[i].getText()).to.eq(el)
    })
  })
  it(`Games Dashboard is displayed`, async function () {
    console.info(`Games Dashboard is displayed`)
    await expect(ClasificacionesPage.gamesDashboard).toBeDisplayed()
  })
  it(`Sub header on the Clasificaciones page is displayed`, async function () {
    console.info(`Sub header on the Clasificaciones page is displayed`)
    const subHeader = await ClasificacionesPage.gridsubHeader
    await expect(subHeader).toBeDisplayed()
  })
  it(`Clasificaciones page sub header is ${subHeaderText}`, async function () {
    console.info(`Clasificaciones page sub header is ${subHeaderText}`)
    const subHeader = await ClasificacionesPage.gridsubHeader.waitAndGetText()
    expectChai(subHeader).to.eq(subHeaderText)
  })
  it(`Grid search button on the Clasificaciones page is displayed`, async function () {
    console.info(`Grid search button on the Clasificaciones page is displayed`)
    const searchBtn = await ClasificacionesPage.searchBtn
    await expect(searchBtn).toBeDisplayed()
  })
  it(`Equipos names on the Clasificaciones page are displayed`, async function () {
    console.info(`Partidos names on the Clasificaciones page are displayed`)
    const equiposNames = await ClasificacionesPage.gridEquipos
    for (let el of equiposNames) {
      await expect(el).toBeDisplayed()
    }
  })
  leftPartidosNamesText.forEach((el, i) => {
    it(`Equipos names text corresponds '${el}'`, async function () {
      console.info(`Equipos names text corresponds '${el}'`)
      const equipos = await ClasificacionesPage.gridEquipos.slice(1, -1)
      expectChai(await equipos[i].getText()).to.eq(el)
    })
  })
  it(`Left grid header on the Clasificaciones page is displayed`, async function () {
    console.info(`Left grid header on the Clasificaciones page is displayed`)
    const leftGrid = await ClasificacionesPage.leftGrid
    await expect(leftGrid).toBeDisplayed()
  })
  it(`Left grid text is ${leftGridHeader}`, async function () {
    console.info(`Clasificaciones page sub header is ${leftGridHeader}`)
    const leftGrid = await ClasificacionesPage.leftGrid.waitAndGetText()
    expectChai(leftGrid).to.eq(leftGridHeader)
  })
  it(`Left grid Partidos names on the Clasificaciones page are displayed`, async function () {
    console.info(
      `Left grid Partidos names on the Clasificaciones page are displayed`
    )
    const gridEquipos = await ClasificacionesPage.gridEquipos
    for (let el of gridEquipos) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Left grid stars on the Clasificaciones page are displayed`, async function () {
    console.info(`Left grid stars on the Clasificaciones page are displayed`)
    const stars = await ClasificacionesPage.stars
    for (let el of stars) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners on the Clasificaciones page are displayed`, async function () {
    console.info(`Image banners on the Clasificaciones page are displayed`)
    const banners = await ClasificacionesPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await ClasificacionesPage.imageBanners
    for (let el of banners) {
      await expect(el).toHaveAttribute('data-sizes', bannersAttr)
    }
  })
  it(`Image banners on the Clasificaciones page href attribute against '${bannersLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Image banners on the Clasificaciones page href attribute against '${bannersLinks.join(
        ' , '
      )}'`
    )
    const bannerHrefs = await ClasificacionesPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Clasificaciones page is displayed`, async function () {
    console.info(`Footer on the Clasificaciones page is displayed`)
    const footer = await ClasificacionesPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await ClasificacionesPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element's text corresponds '${el}'`, async function () {
      console.info(`Sponsor categories each element's text corresponds '${el}'`)
      const sponsorCategories = await ClasificacionesPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await ClasificacionesPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await ClasificacionesPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
