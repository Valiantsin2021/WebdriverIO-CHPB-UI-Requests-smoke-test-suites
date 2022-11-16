const expectChai = require('chai').expect
const AppersonalizadaPage = require('../../pageobjects/AppersonalizadaPage')
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
} = require('../../utils/constants.appersonalizada')
describe(`Should open App personalizada page and check`, async function () {
  before(async function () {
    await AppersonalizadaPage.maximize()
    await AppersonalizadaPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Check Home page open and cookies modal is displayed`)
    await expect(AppersonalizadaPage.cookiesModal).toExist()
    await AppersonalizadaPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`App personalizada page header is ${clubHeader}`, async function () {
    console.info(`Check App personalizada page header is ${clubHeader}`)
    await AppersonalizadaPage.acceptCookies()
    const headerText = await AppersonalizadaPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`App personalizada page subheaders are displayed`, async function () {
    console.info(`App personalizada page title is displayed`)
    const subheader = await AppersonalizadaPage.subHeader
    await expect(subheader[0]).toBeDisplayed()
  })
  it(`App personalizada page subheader is ${subHeaderText[0]}`, async function () {
    console.info(`Check App personalizada page subheader is '${subHeaderText}'`)
    const pageTitle = await AppersonalizadaPage.subHeader[0].waitAndGetText()
    expectChai(pageTitle).to.eq(subHeaderText[0])
  })
  it(`App personalizada page subheader is ${subHeaderText[2]}`, async function () {
    console.info(`Check App personalizada page subheader is '${subHeaderText}'`)
    const pageTitle = await AppersonalizadaPage.subHeader[2].waitAndGetText()
    expectChai(pageTitle).to.eq(subHeaderText[1])
  })
  it(`App personalizada page main image is displayed`, async function () {
    console.info(`App personalizada page main image is displayed`)
    const image = await AppersonalizadaPage.mainImages
    for (let el of image) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`App personalizada page title is displayed`, async function () {
    console.info(`App personalizada page title is displayed`)
    const title = await AppersonalizadaPage.title
    await expect(title).toBeDisplayed()
  })
  it(`App personalizada page title is ${title}`, async function () {
    console.info(`Check App personalizada page title is '${title}'`)
    const pageTitle = await AppersonalizadaPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Home page club logotype is displayed`, async function () {
    console.info(`Home page club logotype is displayed`)
    const logotype = await AppersonalizadaPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Home page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await AppersonalizadaPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await AppersonalizadaPage.header.waitForDisplayed()
    const topMenu = await AppersonalizadaPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await AppersonalizadaPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element's text corresponds '${el}'`, async function () {
      console.info(`Top menu each element's text corresponds '${el}'`)
      const topMenu = await AppersonalizadaPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(AppersonalizadaPage.topMenuContainer)
    const topMenuInner = await AppersonalizadaPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await AppersonalizadaPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element's text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element's text corresponds '${el}'`
      )
      const topMenuInner = await AppersonalizadaPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(AppersonalizadaPage.topMenuContainer)
    await AppersonalizadaPage.header.waitForDisplayed()
    const socialMedia = await AppersonalizadaPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await AppersonalizadaPage.socialMediaLinksTop
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
    const socialLinks = await AppersonalizadaPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Main text is displayed`, async function () {
    console.info(`Main text is displayed`)
    const mainText = await AppersonalizadaPage.mainText
    for (let el of mainText) {
      await expect(el).toBeDisplayed()
    }
  })
  mainText.forEach((el, i) => {
    it(`Main text each element's text corresponds '${el}'`, async function () {
      console.info(`Main text each element's text corresponds '${el}'`)
      const mainTxt = await AppersonalizadaPage.mainText
      expectChai(await mainTxt[i].getText()).to.eq(el)
    })
  })
  it(`Main text bold is displayed`, async function () {
    console.info(`Main text bold is displayed`)
    const mainText = await AppersonalizadaPage.mainTextBold
    for (let el of mainText) {
      await expect(el).toBeDisplayed()
    }
  })
  mainTextBold.forEach((el, i) => {
    it(`Main text bold each element's text corresponds '${el}'`, async function () {
      console.info(`Main text bold each element's text corresponds '${el}'`)
      const mainTxt = await AppersonalizadaPage.mainTextBold
      expectChai(await mainTxt[i].getText()).to.eq(el)
    })
  })
  it(`Main content links are displayed`, async function () {
    console.info(`Main content links are displayed`)
    const links = await AppersonalizadaPage.links
    for (let el of links) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners on the Home page are displayed`, async function () {
    console.info(`Image banners on the Home page are displayed`)
    const banners = await AppersonalizadaPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await AppersonalizadaPage.imageBanners
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
    const bannerHrefs = await AppersonalizadaPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Home page is displayed`, async function () {
    console.info(`Footer on the Home page is displayed`)
    const footer = await AppersonalizadaPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await AppersonalizadaPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element's text corresponds '${el}'`, async function () {
      console.info(`Sponsor categories each element's text corresponds '${el}'`)
      const sponsorCategories = await AppersonalizadaPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await AppersonalizadaPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await AppersonalizadaPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
