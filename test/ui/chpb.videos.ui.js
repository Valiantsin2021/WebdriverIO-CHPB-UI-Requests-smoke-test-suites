const expectChai = require('chai').expect
const VideosPage = require('../../pageobjects/VideosPage')
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
  compartirText
} = require('../../utils/constants.videos')
describe(`Should open Videos page and check`, async function () {
  before(async function () {
    await VideosPage.maximize()
    await VideosPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Check Home page open and cookies modal is displayed`)
    await expect(VideosPage.cookiesModal).toExist()
    await VideosPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Videos page header is ${clubHeader}`, async function () {
    console.info(`Check Videos page header is ${clubHeader}`)
    await VideosPage.acceptCookies()
    const headerText = await VideosPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Videos page title is displayed`, async function () {
    console.info(`Videos page title is displayed`)
    const title = await VideosPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Videos page title is ${title}`, async function () {
    console.info(`Check Videos page title is '${title}'`)
    const pageTitle = await VideosPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Videos page 'Compartir' button is displayed`, async function () {
    console.info(`Videos page 'Compartir' button is displayed`)
    const compartirBtn = await VideosPage.compartirBtn
    await expect(compartirBtn).toBeDisplayed()
  })
  it(`Videos page 'Compartir' button text is ${compartirText}`, async function () {
    console.info(`Videos page 'Compartir' button text is ${compartirText}`)
    const compartirBtn = await VideosPage.compartirBtn.waitAndGetText()
    expectChai(compartirBtn).to.eq(compartirText)
  })
  it(`Videos page video frame is displayed`, async function () {
    console.info(`Videos page video frame is displayed`)
    const player = await VideosPage.player
    await expect(player).toBeDisplayed()
  })
  it(`Home page club logotype is displayed`, async function () {
    console.info(`Home page club logotype is displayed`)
    const logotype = await VideosPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Home page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await VideosPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await VideosPage.header.waitForDisplayed()
    const topMenu = await VideosPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await VideosPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element\'s text corresponds '${el}'`, async function () {
      console.info(`Top menu each element\'s text corresponds '${el}'`)
      const topMenu = await VideosPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(VideosPage.topMenuContainer)
    const topMenuInner = await VideosPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await VideosPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element\'s text corresponds '${el}'`
      )
      const topMenuInner = await VideosPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(VideosPage.topMenuContainer)
    await VideosPage.header.waitForDisplayed()
    const socialMedia = await VideosPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await VideosPage.socialMediaLinksTop
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
    const socialLinks = await VideosPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Main content links are displayed`, async function () {
    console.info(`Main content links are displayed`)
    const links = await VideosPage.links
    for (let el of links) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners on the Home page are displayed`, async function () {
    console.info(`Image banners on the Home page are displayed`)
    const banners = await VideosPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await VideosPage.imageBanners
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
    const bannerHrefs = await VideosPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Home page is displayed`, async function () {
    console.info(`Footer on the Home page is displayed`)
    const footer = await VideosPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await VideosPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element\'s text corresponds '${el}'`, async function () {
      console.info(
        `Sponsor categories each element\'s text corresponds '${el}'`
      )
      const sponsorCategories = await VideosPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await VideosPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await VideosPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
