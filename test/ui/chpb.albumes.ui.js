const expectChai = require('chai').expect
const AlbumesPage = require('../../pageobjects/AlbumesPage')
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
  todasFotosText,
  albumesText,
  compartirText
} = require('../../utils/constants.albumes')
describe(`Should open Albumes page and check`, async function () {
  before(async function () {
    await AlbumesPage.maximize()
    await AlbumesPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Check Home page open and cookies modal is displayed`)
    await expect(AlbumesPage.cookiesModal).toExist()
    await AlbumesPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Albumes page header is ${clubHeader}`, async function () {
    console.info(`Check Albumes page header is ${clubHeader}`)
    await AlbumesPage.acceptCookies()
    const headerText = await AlbumesPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Albumes page title ia displayed`, async function () {
    console.info(`Albumes page title is displayed`)
    const title = await AlbumesPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Albumes page title is ${title}`, async function () {
    console.info(`Check Albumes page title is '${title}'`)
    const pageTitle = await AlbumesPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Albumes page 'Todas las fotos' button is displayed`, async function () {
    console.info(`Albumes page 'Todas las fotos' button is displayed`)
    const todosFotos = await AlbumesPage.todosFotosBtn
    await expect(todosFotos).toBeDisplayed()
  })
  it(`Albumes page 'Todas las fotos' button text is ${todasFotosText}`, async function () {
    console.info(`Check Albumes page title is '${todasFotosText}'`)
    const todasFotos = await AlbumesPage.todosFotosBtn.waitAndGetText()
    expectChai(todasFotos).to.eq(todasFotosText)
  })
  it(`Albumes page 'Álbumes' button is displayed`, async function () {
    console.info(`Albumes page 'Álbumes' button is displayed`)
    const todosFotos = await AlbumesPage.albumsBtn
    await expect(todosFotos).toBeDisplayed()
  })
  it(`Albumes page 'Álbumes' button text is ${albumesText}`, async function () {
    console.info(`Albumes page 'Álbumes' button text is ${albumesText}`)
    const albumes = await AlbumesPage.albumsBtn.waitAndGetText()
    expectChai(albumes).to.eq(albumesText)
  })
  it(`Albumes page 'Compartir' button is displayed`, async function () {
    console.info(`Albumes page 'Compartir' button is displayed`)
    const compartirBtn = await AlbumesPage.compartirBtn
    await expect(compartirBtn).toBeDisplayed()
  })
  it(`Albumes page 'Compartir' button text is ${compartirText}`, async function () {
    console.info(`Albumes page 'Compartir' button text is ${compartirText}`)
    const compartirBtn = await AlbumesPage.compartirBtn.waitAndGetText()
    expectChai(compartirBtn).to.eq(compartirText)
  })
  it(`Home page club logotype is displayed`, async function () {
    console.info(`Home page club logotype is displayed`)
    const logotype = await AlbumesPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Home page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await AlbumesPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await AlbumesPage.header.waitForDisplayed()
    const topMenu = await AlbumesPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await AlbumesPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element's text corresponds '${el}'`, async function () {
      console.info(`Top menu each element's text corresponds '${el}'`)
      const topMenu = await AlbumesPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(AlbumesPage.topMenuContainer)
    const topMenuInner = await AlbumesPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await AlbumesPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element's text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element's text corresponds '${el}'`
      )
      const topMenuInner = await AlbumesPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(AlbumesPage.topMenuContainer)
    await AlbumesPage.header.waitForDisplayed()
    const socialMedia = await AlbumesPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await AlbumesPage.socialMediaLinksTop
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
    const socialLinks = await AlbumesPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Main content links are displayed`, async function () {
    console.info(`Main content links are displayed`)
    const links = await AlbumesPage.links
    for (let el of links) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners on the Home page are displayed`, async function () {
    console.info(`Image banners on the Home page are displayed`)
    const banners = await AlbumesPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await AlbumesPage.imageBanners
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
    const bannerHrefs = await AlbumesPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Home page is displayed`, async function () {
    console.info(`Footer on the Home page is displayed`)
    const footer = await AlbumesPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await AlbumesPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element's text corresponds '${el}'`, async function () {
      console.info(`Sponsor categories each element's text corresponds '${el}'`)
      const sponsorCategories = await AlbumesPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await AlbumesPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await AlbumesPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
