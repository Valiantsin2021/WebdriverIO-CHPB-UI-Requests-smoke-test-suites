const expectChai = require('chai').expect
const PartidosPage = require('../../pageobjects/PartidosPage')
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
  partidosUrl,
  subHeaderText,
  leftGridHeader,
  leftPartidosNamesText,
  partidosBtnText,
  misPartidosText,
  equiposDropdownText,
  seccionDropdownText
} = require('../../utils/constants.partidos')
describe(`Should open Partidos page and check`, async function () {
  before(async function () {
    await PartidosPage.maximize()
    await PartidosPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Check Partidos page open and cookies modal is displayed`)
    await expect(PartidosPage.cookiesModal).toExist()
    await PartidosPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Partidos page header is ${clubHeader}`, async function () {
    console.info(`Check Partidos page header is ${clubHeader}`)
    await PartidosPage.acceptCookies()
    await browser.url(partidosUrl)
    const headerText = await PartidosPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Partidos page title is displayed`, async function () {
    console.info(`Partidos page title is displayed`)
    const title = await PartidosPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Partidos page title is ${title}`, async function () {
    console.info(`Check Partidos page title is '${title}'`)
    const pageTitle = await PartidosPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Partidos page club logotype is displayed`, async function () {
    console.info(`Partidos page club logotype is displayed`)
    const logotype = await PartidosPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Partidos page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await PartidosPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await PartidosPage.header.waitForDisplayed()
    const topMenu = await PartidosPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await PartidosPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element\'s text corresponds '${el}'`, async function () {
      console.info(`Top menu each element\'s text corresponds '${el}'`)
      const topMenu = await PartidosPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(PartidosPage.topMenuContainer)
    const topMenuInner = await PartidosPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await PartidosPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element\'s text corresponds '${el}'`
      )
      const topMenuInner = await PartidosPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(PartidosPage.topMenuContainer)
    await PartidosPage.header.waitForDisplayed()
    const socialMedia = await PartidosPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await PartidosPage.socialMediaLinksTop
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
    const socialLinks = await PartidosPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`'Partidos del club' button is displayed`, async function () {
    console.info(`'Partidos del club' button is displayed`)
    await expect(PartidosPage.partidosDelClubLink).toBeDisplayed()
  })
  it(`'Partidos del club' button text is ${partidosBtnText}`, async function () {
    console.info(`'Partidos del club' button text is ${partidosBtnText}`)
    const button = await PartidosPage.partidosDelClubLink.waitAndGetText()
    expectChai(button).to.eq(partidosBtnText)
  })
  it(`'Mis partidos' link is displayed`, async function () {
    console.info(`'Partidos del club' button is displayed`)
    await expect(PartidosPage.misPartidosLink).toBeDisplayed()
  })
  it(`'Mis partidos' link text is ${misPartidosText}`, async function () {
    console.info(`'Partidos del club' button text is ${misPartidosText}`)
    const link = await PartidosPage.misPartidosLink.waitAndGetText()
    expectChai(link).to.eq(misPartidosText)
  })
  it(`Equipos Dropdown button is displayed`, async function () {
    console.info(`Equipos Dropdown button is displayed`)
    await expect(PartidosPage.equiposDropdown).toBeDisplayed()
    await PartidosPage.equiposDropdown.click()
  })
  equiposDropdownText.forEach((el, i) => {
    it(`Equipos dropdown each element text corresponds '${el}'`, async function () {
      console.info(`Equipos dropdown each element text corresponds '${el}'`)
      const equiposNames = await PartidosPage.dropdownEquiposNames
      expectChai(await equiposNames[i].getText()).to.eq(el)
    })
  })
  it(`Seccion Dropdown button is displayed`, async function () {
    console.info(`Seccion Dropdown button is displayed`)
    await expect(PartidosPage.seccionDropdown).toBeDisplayed()
    await browser.keys('Escape')
    await PartidosPage.seccionDropdown.click()
  })
  seccionDropdownText.forEach((el, i) => {
    it(`Seccion dropdown each element text corresponds '${el}'`, async function () {
      console.info(`Seccion dropdown each element text corresponds '${el}'`)
      const seccionNames = await PartidosPage.dropdownSeccionNames
      expectChai(await seccionNames[i].getText()).to.eq(el)
    })
  })
  it(`Week Nav Bar is displayed`, async function () {
    console.info(`Week Nav Bar is displayed`)
    await expect(PartidosPage.weekNavBar).toBeDisplayed()
  })
  it(`Games Dashboard is displayed`, async function () {
    console.info(`Games Dashboard is displayed`)
    await expect(PartidosPage.gamesDashboard).toBeDisplayed()
  })
  it(`Sub header on the Partidos page is displayed`, async function () {
    console.info(`Sub header on the Partidos page is displayed`)
    const subHeader = await PartidosPage.gridsubHeader
    await expect(subHeader).toBeDisplayed()
  })
  it(`Partidos page sub header is ${subHeaderText}`, async function () {
    console.info(`Partidos page sub header is ${subHeaderText}`)
    const subHeader = await PartidosPage.gridsubHeader.waitAndGetText()
    expectChai(subHeader).to.eq(subHeaderText)
  })
  it(`Grid search button on the Partidos page is displayed`, async function () {
    console.info(`Grid search button on the Partidos page is displayed`)
    const searchBtn = await PartidosPage.searchBtn
    await expect(searchBtn).toBeDisplayed()
  })
  it(`Equipos names on the Partidos page are displayed`, async function () {
    console.info(`Partidos names on the Partidos page are displayed`)
    const equiposNames = await PartidosPage.gridEquipos
    for (let el of equiposNames) {
      await expect(el).toBeDisplayed()
    }
  })
  leftPartidosNamesText.forEach((el, i) => {
    it(`Equipos names text corresponds '${el}'`, async function () {
      console.info(`Equipos names text corresponds '${el}'`)
      const equipos = await PartidosPage.gridEquipos.slice(1, -1)
      expectChai(await equipos[i].getText()).to.eq(el)
    })
  })
  it(`Left grid header on the Partidos page is displayed`, async function () {
    console.info(`Left grid header on the Partidos page is displayed`)
    const leftGrid = await PartidosPage.leftGrid
    await expect(leftGrid).toBeDisplayed()
  })
  it(`Left grid text is ${leftGridHeader}`, async function () {
    console.info(`Partidos page sub header is ${leftGridHeader}`)
    const leftGrid = await PartidosPage.leftGrid.waitAndGetText()
    expectChai(leftGrid).to.eq(leftGridHeader)
  })
  it(`Left grid Partidos names on the Partidos page are displayed`, async function () {
    console.info(`Left grid Partidos names on the Partidos page are displayed`)
    const gridEquipos = await PartidosPage.gridEquipos
    for (let el of gridEquipos) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Left grid stars on the Partidos page are displayed`, async function () {
    console.info(`Left grid stars on the Partidos page are displayed`)
    const stars = await PartidosPage.stars
    for (let el of stars) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners on the Partidos page are displayed`, async function () {
    console.info(`Image banners on the Partidos page are displayed`)
    const banners = await PartidosPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await PartidosPage.imageBanners
    for (let el of banners) {
      await expect(el).toHaveAttribute('data-sizes', bannersAttr)
    }
  })
  it(`Image banners on the Partidos page href attribute against '${bannersLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Image banners on the Partidos page href attribute against '${bannersLinks.join(
        ' , '
      )}'`
    )
    const bannerHrefs = await PartidosPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Partidos page is displayed`, async function () {
    console.info(`Footer on the Partidos page is displayed`)
    const footer = await PartidosPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await PartidosPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Sponsor categories each element\'s text corresponds '${el}'`
      )
      const sponsorCategories = await PartidosPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await PartidosPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await PartidosPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
