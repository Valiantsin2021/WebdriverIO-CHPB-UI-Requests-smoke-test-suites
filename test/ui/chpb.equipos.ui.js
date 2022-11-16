const expectChai = require('chai').expect
const EquiposPage = require('../../pageobjects/EquiposPage')
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
  equiposUrl,
  subHeaderText,
  equiposNamesText,
  temporadas,
  leftGridHeader,
  leftEquiposNamesText
} = require('../../utils/constants.equipos')
describe(`Should open Equipos page and check`, async function () {
  before(async function () {
    await EquiposPage.maximize()
    await EquiposPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Check Equipos page open and cookies modal is displayed`)
    await expect(EquiposPage.cookiesModal).toExist()
    await EquiposPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Equipos page header is ${clubHeader}`, async function () {
    console.info(`Check Equipos page header is ${clubHeader}`)
    await EquiposPage.acceptCookies()
    await browser.url(equiposUrl)
    const headerText = await EquiposPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Equipos page title is displayed`, async function () {
    console.info(`Equipos page title is displayed`)
    const title = await EquiposPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Equipos page title is ${title}`, async function () {
    console.info(`Check Equipos page title is '${title}'`)
    const pageTitle = await EquiposPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Equipos page club logotype is displayed`, async function () {
    console.info(`Equipos page club logotype is displayed`)
    const logotype = await EquiposPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Equipos page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await EquiposPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await EquiposPage.header.waitForDisplayed()
    const topMenu = await EquiposPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await EquiposPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element\'s text corresponds '${el}'`, async function () {
      console.info(`Top menu each element\'s text corresponds '${el}'`)
      const topMenu = await EquiposPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(EquiposPage.topMenuContainer)
    const topMenuInner = await EquiposPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await EquiposPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element\'s text corresponds '${el}'`
      )
      const topMenuInner = await EquiposPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(EquiposPage.topMenuContainer)
    await EquiposPage.header.waitForDisplayed()
    const socialMedia = await EquiposPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await EquiposPage.socialMediaLinksTop
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
    const socialLinks = await EquiposPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Sub header on the Equipos page is displayed`, async function () {
    console.info(`Sub header on the Equipos page is displayed`)
    const subHeader = await EquiposPage.subHeader
    await expect(subHeader).toBeDisplayed()
  })
  it(`Equipos page sub header is ${subHeaderText}`, async function () {
    console.info(`Equipos page sub header is ${subHeaderText}`)
    const subHeader = await EquiposPage.subHeader.waitAndGetText()
    expectChai(subHeader).to.eq(subHeaderText)
  })
  it(`Grid search button on the Equipos page is displayed`, async function () {
    console.info(`Grid search button on the Equipos page is displayed`)
    const searchBtn = await EquiposPage.searchBtn
    await expect(searchBtn).toBeDisplayed()
  })
  it(`Equipos names on the Equipos page are displayed`, async function () {
    console.info(`Equipos names on the Equipos page are displayed`)
    const equiposNames = await EquiposPage.equiposNames
    for (let el of equiposNames) {
      await expect(el).toBeDisplayed()
    }
  })
  equiposNamesText.forEach((el, i) => {
    it(`Equipos names each element names text corresponds '${el}'`, async function () {
      console.info(`Equipos names each element names text corresponds '${el}'`)
      const equiposNames = await EquiposPage.equiposNames
      expectChai(await equiposNames[i].getText()).to.eq(el)
    })
  })
  it(`Equipos images on the Equipos page are displayed`, async function () {
    console.info(`Equipos images on the Equipos page are displayed`)
    const equiposImg = await EquiposPage.equiposImg
    for (let el of equiposImg) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Left grid header on the Equipos page is displayed`, async function () {
    console.info(`Left grid header on the Equipos page is displayed`)
    const leftGrid = await EquiposPage.leftGrid
    await expect(leftGrid).toBeDisplayed()
  })
  it(`Left grid text is ${leftGridHeader}`, async function () {
    console.info(`Equipos page sub header is ${leftGridHeader}`)
    const leftGrid = await EquiposPage.leftGrid.waitAndGetText()
    expectChai(leftGrid).to.eq(leftGridHeader)
  })
  it(`Left grid equipos names on the Equipos page are displayed`, async function () {
    console.info(`Left grid equipos names on the Equipos page are displayed`)
    const gridEquipos = await EquiposPage.gridEquipos
    for (let el of gridEquipos) {
      await expect(el).toBeDisplayed()
    }
  })
  leftEquiposNamesText.forEach((el, i) => {
    it(`Left grid equipos each element names text corresponds '${el}'`, async function () {
      console.info(
        `Left grid equipos each element names text corresponds '${el}'`
      )
      const gridEquipos = await EquiposPage.gridEquipos.slice(1, -1)
      expectChai(await gridEquipos[i].getText()).to.eq(el)
    })
  })
  it(`Left grid stars on the Equipos page are displayed`, async function () {
    console.info(`Left grid stars on the Equipos page are displayed`)
    const stars = await EquiposPage.stars
    for (let el of stars) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Temporada dropdown on the Equipos page is displayed`, async function () {
    console.info(`Temporada dropdown on the Equipos page is displayed`)
    const temporadaDropdown = await EquiposPage.temporadaDropdown
    await expect(temporadaDropdown).toBeDisplayed()
  })
  it(`Temporada dropdown list on the Equipos page is displayed`, async function () {
    console.info(`Temporada dropdown list on the Equipos page is displayed`)
    await EquiposPage.temporadaDropdown.click()
    const temporadaDropdownOptions = await EquiposPage.temporadaDropdownOptions
    for (let el of temporadaDropdownOptions) {
      await expect(el).toBeDisplayed()
    }
  })
  temporadas.forEach((el, i) => {
    it(`Temporada dropdown list each element text corresponds '${el}'`, async function () {
      console.info(
        `Temporada dropdown list each element text corresponds '${el}'`
      )
      const temporadaDropdownOptions =
        await EquiposPage.temporadaDropdownOptions
      expectChai(await temporadaDropdownOptions[i].getText()).to.eq(el)
    })
  })
  it(`Image banners on the Equipos page are displayed`, async function () {
    console.info(`Image banners on the Equipos page are displayed`)
    const banners = await EquiposPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await EquiposPage.imageBanners
    for (let el of banners) {
      await expect(el).toHaveAttribute('data-sizes', bannersAttr)
    }
  })
  it(`Image banners on the Equipos page href attribute against '${bannersLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Image banners on the Equipos page href attribute against '${bannersLinks.join(
        ' , '
      )}'`
    )
    const bannerHrefs = await EquiposPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Equipos page is displayed`, async function () {
    console.info(`Footer on the Equipos page is displayed`)
    const footer = await EquiposPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await EquiposPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Sponsor categories each element\'s text corresponds '${el}'`
      )
      const sponsorCategories = await EquiposPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await EquiposPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await EquiposPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
