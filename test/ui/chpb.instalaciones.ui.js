const expectChai = require('chai').expect
const InstalacionesPage = require('../../pageobjects/InstalacionesPage')
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
const { bannersLinks, title } = require('../../utils/constants.instalaciones')
describe(`Should open Instalaciones page and check`, async function () {
  before(async function () {
    await InstalacionesPage.maximize()
    await InstalacionesPage.open()
  })
  it(`cookies modal is displayed`, async function () {
    console.info(`Check Instalaciones page open and cookies modal is displayed`)
    await expect(InstalacionesPage.cookiesModal).toExist()
    await InstalacionesPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Instalaciones page header is ${clubHeader}`, async function () {
    console.info(`Check Instalaciones page header is ${clubHeader}`)
    await InstalacionesPage.acceptCookies()
    const headerText = await InstalacionesPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Instalaciones page title is displayed`, async function () {
    console.info(`Instalaciones page title is displayed`)
    const title = await InstalacionesPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Instalaciones page title is ${title}`, async function () {
    console.info(`Check Instalaciones page title is '${title}'`)
    const pageTitle = await InstalacionesPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`instalaciones page club logotype is displayed`, async function () {
    console.info(`INstalaciones page club logotype is displayed`)
    const logotype = await InstalacionesPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`INstalaciones page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await InstalacionesPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Instalaciones Page main image content is displayed`, async function () {
    console.info(`Instalaciones Page main image content is displayed`)
    await expect(InstalacionesPage.mainImg).toExist()
    await expect(InstalacionesPage.mainImg).toBeDisplayed()
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await InstalacionesPage.header.waitForDisplayed()
    const topMenu = await InstalacionesPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await InstalacionesPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element's text corresponds '${el}'`, async function () {
      console.info(`Top menu each element's text corresponds '${el}'`)
      const topMenu = await InstalacionesPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(InstalacionesPage.topMenuContainer)
    const topMenuInner = await InstalacionesPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await InstalacionesPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element's text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element's text corresponds '${el}'`
      )
      const topMenuInner = await InstalacionesPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(InstalacionesPage.topMenuContainer)
    await InstalacionesPage.header.waitForDisplayed()
    const socialMedia = await InstalacionesPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await InstalacionesPage.socialMediaLinksTop
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
    const socialLinks = await InstalacionesPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Image banners on the INstalaciones page are displayed`, async function () {
    console.info(`Image banners on the INstalaciones page are displayed`)
    const banners = await InstalacionesPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await InstalacionesPage.imageBanners
    for (let el of banners) {
      await expect(el).toHaveAttribute('data-sizes', bannersAttr)
    }
  })
  it(`Image banners on the INstalaciones page href attribute against '${bannersLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Image banners on the INstalaciones page href attribute against '${bannersLinks.join(
        ' , '
      )}'`
    )
    const bannerHrefs = await InstalacionesPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the INstalaciones page is displayed`, async function () {
    console.info(`Footer on the INstalaciones page is displayed`)
    const footer = await InstalacionesPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await InstalacionesPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element's text corresponds '${el}'`, async function () {
      console.info(`Sponsor categories each element's text corresponds '${el}'`)
      const sponsorCategories = await InstalacionesPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await InstalacionesPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await InstalacionesPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
