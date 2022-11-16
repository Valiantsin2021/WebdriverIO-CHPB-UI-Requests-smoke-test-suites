const expectChai = require('chai').expect
const EntrenadorPage = require('../../pageobjects/EntrenadorPage')
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
  subHeader,
  mainText,
  mainTextBold,
  links
} = require('../../utils/constants.entrenador')
describe(`Should open Entrenador page and check`, async function () {
  before(async function () {
    await EntrenadorPage.maximize()
    await EntrenadorPage.open()
  })
  it(`cookies modal is displayed`, async function () {
    console.info(`Check Home page open and cookies modal is displayed`)
    await expect(EntrenadorPage.cookiesModal).toExist()
    await EntrenadorPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Entrenador page header is ${clubHeader}`, async function () {
    console.info(`Check Entrenador page header is ${clubHeader}`)
    await EntrenadorPage.acceptCookies()
    const headerText = await EntrenadorPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Entrenador page title is displayed`, async function () {
    console.info(`Entrenador page title is displayed`)
    const title = await EntrenadorPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Entrenador page title is ${title}`, async function () {
    console.info(`Check Entrenador page title is '${title}'`)
    const pageTitle = await EntrenadorPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Entrenador page sub header is displayed`, async function () {
    console.info(`Entrenador page sub header is displayed`)
    const subHeader = await EntrenadorPage.subHeader
    await expect(subHeader).toBeDisplayed()
  })
  it(`Entrenador page sub header is ${subHeader}`, async function () {
    console.info(`Check Entrenador page sub header is '${subHeader}'`)
    const subHead = await EntrenadorPage.subHeader.waitAndGetText()
    expectChai(subHead).to.eq(subHeader)
  })
  it(`Home page club logotype is displayed`, async function () {
    console.info(`Home page club logotype is displayed`)
    const logotype = await EntrenadorPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Home page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await EntrenadorPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await EntrenadorPage.header.waitForDisplayed()
    const topMenu = await EntrenadorPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await EntrenadorPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element's text corresponds '${el}'`, async function () {
      console.info(`Top menu each element's text corresponds '${el}'`)
      const topMenu = await EntrenadorPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(EntrenadorPage.topMenuContainer)
    const topMenuInner = await EntrenadorPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await EntrenadorPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element's text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element's text corresponds '${el}'`
      )
      const topMenuInner = await EntrenadorPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(EntrenadorPage.topMenuContainer)
    await EntrenadorPage.header.waitForDisplayed()
    const socialMedia = await EntrenadorPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await EntrenadorPage.socialMediaLinksTop
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
    const socialLinks = await EntrenadorPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Main text is displayed`, async function () {
    console.info(`Main text is displayed`)
    const mainText = await EntrenadorPage.mainText
    for (let el of mainText) {
      await expect(el).toBeDisplayed()
    }
  })
  mainText.forEach((el, i) => {
    it(`Main text each element's text corresponds '${el}'`, async function () {
      console.info(`Main text each element's text corresponds '${el}'`)
      const mainTxt = await EntrenadorPage.mainText
      expectChai(await mainTxt[i].getText()).to.eq(el)
    })
  })
  it(`Main text bold is displayed`, async function () {
    console.info(`Main text bold is displayed`)
    const mainText = await EntrenadorPage.mainTextBold
    for (let el of mainText) {
      await expect(el).toBeDisplayed()
    }
  })
  mainTextBold.forEach((el, i) => {
    it(`Main text bold each element's text corresponds '${el}'`, async function () {
      console.info(`Main text bold each element's text corresponds '${el}'`)
      const mainTxt = await EntrenadorPage.mainTextBold
      expectChai(await mainTxt[i].getText()).to.eq(el)
    })
  })
  it(`Main content links are displayed`, async function () {
    console.info(`Main content links are displayed`)
    const links = await EntrenadorPage.links
    for (let el of links) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Main content links href attribute against '${links.join(
    ' , '
  )}'`, async function () {
    console.info(
      `Image banners on the Home page href attribute against '${links.join(
        ' , '
      )}'`
    )
    const mainLinks = await EntrenadorPage.linksDown.map(el =>
      el.getAttribute('href')
    )
    console.table(mainLinks)
    for (let i = 0; i < mainLinks.length; i++) {
      expectChai(mainLinks[i]).to.eq(links[i])
    }
  })
  it(`Image banners on the Home page are displayed`, async function () {
    console.info(`Image banners on the Home page are displayed`)
    const banners = await EntrenadorPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await EntrenadorPage.imageBanners
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
    const bannerHrefs = await EntrenadorPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Home page is displayed`, async function () {
    console.info(`Footer on the Home page is displayed`)
    const footer = await EntrenadorPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await EntrenadorPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element's text corresponds '${el}'`, async function () {
      console.info(`Sponsor categories each element's text corresponds '${el}'`)
      const sponsorCategories = await EntrenadorPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await EntrenadorPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await EntrenadorPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
