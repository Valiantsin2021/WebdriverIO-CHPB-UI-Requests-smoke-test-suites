const expectChai = require('chai').expect
const PatrocinadoresPage = require('../../pageobjects/PatrocinadoresPage')
const {
  checkMenu,
  showInnerMenu,
  hideInnerMenu
} = require('../../utils/helper.js')
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
  sponsorsUrl
} = require('../../utils/constants.patrocinadores')
describe(`Should open Patrocinadores page and check`, async function () {
  before(async function () {
    await PatrocinadoresPage.maximize()
    await PatrocinadoresPage.open()
  })
  it(`cookies modal is displayed`, async function () {
    console.info(
      `Check Patrocinadores page open and cookies modal is displayed`
    )
    await expect(PatrocinadoresPage.cookiesModal).toExist()
    await PatrocinadoresPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Patrocinadores page header is ${clubHeader}`, async function () {
    console.info(`Check Patrocinadores page header is ${clubHeader}`)
    await PatrocinadoresPage.acceptCookies()
    await browser.url(sponsorsUrl)
    const headerText = await PatrocinadoresPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Patrocinadores page title is displayed`, async function () {
    console.info(`Patrocinadores page title is displayed`)
    const title = await PatrocinadoresPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Patrocinadores page title is ${title}`, async function () {
    console.info(`Check Patrocinadores page title is '${title}'`)
    const pageTitle = await PatrocinadoresPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Patrocinadores page club logotype is displayed`, async function () {
    console.info(`Patrocinadores page club logotype is displayed`)
    const logotype = await PatrocinadoresPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Patrocinadores page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await PatrocinadoresPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await PatrocinadoresPage.header.waitForDisplayed()
    const topMenu = await PatrocinadoresPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await PatrocinadoresPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element\'s text corresponds '${el}'`, async function () {
      console.info(`Top menu each element\'s text corresponds '${el}'`)
      const topMenu = await PatrocinadoresPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(PatrocinadoresPage.topMenuContainer)
    const topMenuInner = await PatrocinadoresPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await PatrocinadoresPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element\'s text corresponds '${el}'`
      )
      const topMenuInner = await PatrocinadoresPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await PatrocinadoresPage.header.waitForDisplayed()
    await hideInnerMenu(PatrocinadoresPage.topMenuContainer)
    const socialMedia = await PatrocinadoresPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await PatrocinadoresPage.socialMediaLinksTop
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
    const socialLinks = await PatrocinadoresPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Image banners on the Patrocinadores page are displayed`, async function () {
    console.info(`Image banners on the Patrocinadores page are displayed`)
    const banners = await PatrocinadoresPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await PatrocinadoresPage.imageBanners
    for (let el of banners) {
      await expect(el).toHaveAttribute('data-sizes', bannersAttr)
    }
  })
  it(`Image banners on the Patrocinadores page href attribute against '${bannersLinks.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Image banners on the Patrocinadores page href attribute against '${bannersLinks.join(
        ' , '
      )}'`
    )
    const bannerHrefs = await PatrocinadoresPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Patrocinadores page is displayed`, async function () {
    console.info(`Footer on the Patrocinadores page is displayed`)
    const footer = await PatrocinadoresPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await PatrocinadoresPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Sponsor categories each element\'s text corresponds '${el}'`
      )
      const sponsorCategories = await PatrocinadoresPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsorsMain = await PatrocinadoresPage.sponsorsListMain
    const sponsorsDown = await PatrocinadoresPage.sponsorsListDown
    await expect(sponsorsMain).toBeElementsArrayOfSize(sponsorsNumber)
    await expect(sponsorsDown).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsorsMain = await PatrocinadoresPage.sponsorsListMain
    const sponsorsDown = await PatrocinadoresPage.sponsorsListDown
    for (let el of sponsorsMain) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
    for (let el of sponsorsDown) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
