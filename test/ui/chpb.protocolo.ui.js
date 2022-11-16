const expectChai = require('chai').expect
const ProtocoloPage = require('../../pageobjects/ProtocoloPage')
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
  mainText,
  mainTextBold,
  subHeaderText
} = require('../../utils/constants.protocolo')
describe(`Should open Protocolo page and check`, async function () {
  before(async function () {
    await ProtocoloPage.maximize()
    await ProtocoloPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Check Home page open and cookies modal is displayed`)
    await expect(ProtocoloPage.cookiesModal).toExist()
    await ProtocoloPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Protocolo page header is ${clubHeader}`, async function () {
    console.info(`Check Protocolo page header is ${clubHeader}`)
    await ProtocoloPage.acceptCookies()
    const headerText = await ProtocoloPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Protocolo page subheader is displayed`, async function () {
    console.info(`Protocolo page title is displayed`)
    const subheader = await ProtocoloPage.subHeader
    await expect(subheader).toBeDisplayed()
  })
  it(`Protocolo page subheader is ${subHeaderText}`, async function () {
    console.info(`Check Protocolo page subheader is '${subHeaderText}'`)
    const pageTitle = await ProtocoloPage.subHeader.waitAndGetText()
    expectChai(pageTitle).to.eq(subHeaderText)
  })
  it(`Protocolo page main image is displayed`, async function () {
    console.info(`Protocolo page main image is displayed`)
    const image = await ProtocoloPage.mainImage
    await expect(image).toBeDisplayed()
  })
  it(`Protocolo page title is displayed`, async function () {
    console.info(`Protocolo page title is displayed`)
    const title = await ProtocoloPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Protocolo page title is ${title}`, async function () {
    console.info(`Check Protocolo page title is '${title}'`)
    const pageTitle = await ProtocoloPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Protocolo page sub header is displayed`, async function () {
    console.info(`Protocolo page sub header is displayed`)
    const subHeader = await ProtocoloPage.subHeader
    await expect(subHeader).toBeDisplayed()
  })
  it(`Home page club logotype is displayed`, async function () {
    console.info(`Home page club logotype is displayed`)
    const logotype = await ProtocoloPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Home page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await ProtocoloPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await ProtocoloPage.header.waitForDisplayed()
    const topMenu = await ProtocoloPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await ProtocoloPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element\'s text corresponds '${el}'`, async function () {
      console.info(`Top menu each element\'s text corresponds '${el}'`)
      const topMenu = await ProtocoloPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(ProtocoloPage.topMenuContainer)
    const topMenuInner = await ProtocoloPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await ProtocoloPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element\'s text corresponds '${el}'`
      )
      const topMenuInner = await ProtocoloPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(ProtocoloPage.topMenuContainer)
    await ProtocoloPage.header.waitForDisplayed()
    const socialMedia = await ProtocoloPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await ProtocoloPage.socialMediaLinksTop
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
    const socialLinks = await ProtocoloPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Main text is displayed`, async function () {
    console.info(`Main text is displayed`)
    const mainText = await ProtocoloPage.mainText
    for (let el of mainText) {
      await expect(el).toBeDisplayed()
    }
  })
  mainText.forEach((el, i) => {
    it(`Main text each element\'s text corresponds '${el}'`, async function () {
      console.info(`Main text each element\'s text corresponds '${el}'`)
      const mainTxt = await ProtocoloPage.mainText
      expectChai(await mainTxt[i].getText()).to.eq(el)
    })
  })
  it(`Main text bold is displayed`, async function () {
    console.info(`Main text bold is displayed`)
    const mainText = await ProtocoloPage.mainTextBold
    for (let el of mainText) {
      await expect(el).toBeDisplayed()
    }
  })
  mainTextBold.forEach((el, i) => {
    it(`Main text bold each element\'s text corresponds '${el}'`, async function () {
      console.info(`Main text bold each element\'s text corresponds '${el}'`)
      const mainTxt = await ProtocoloPage.mainTextBold
      expectChai(await mainTxt[i].getText()).to.eq(el)
    })
  })
  it(`Main content links are displayed`, async function () {
    console.info(`Main content links are displayed`)
    const links = await ProtocoloPage.links
    for (let el of links) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners on the Home page are displayed`, async function () {
    console.info(`Image banners on the Home page are displayed`)
    const banners = await ProtocoloPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await ProtocoloPage.imageBanners
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
    const bannerHrefs = await ProtocoloPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Home page is displayed`, async function () {
    console.info(`Footer on the Home page is displayed`)
    const footer = await ProtocoloPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await ProtocoloPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Sponsor categories each element\'s text corresponds '${el}'`
      )
      const sponsorCategories = await ProtocoloPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await ProtocoloPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await ProtocoloPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
