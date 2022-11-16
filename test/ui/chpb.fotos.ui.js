const expectChai = require('chai').expect
const FotosPage = require('../../pageobjects/FotosPage')
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
} = require('../../utils/constants.fotos')
describe(`Should open Fotos page and check`, async function () {
  before(async function () {
    await FotosPage.maximize()
    await FotosPage.open()
  })
  it(`Cookies modal is displayed`, async function () {
    console.info(`Check Home page open and cookies modal is displayed`)
    await expect(FotosPage.cookiesModal).toExist()
    await FotosPage.cookiesAcceptBtn.waitForDisplayed()
  })
  it(`Fotos page header is ${clubHeader}`, async function () {
    console.info(`Check Fotos page header is ${clubHeader}`)
    await FotosPage.acceptCookies()
    const headerText = await FotosPage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Fotos page title ia displayed`, async function () {
    console.info(`Fotos page title is displayed`)
    const title = await FotosPage.title
    await expect(title).toBeDisplayed()
  })
  it(`Fotos page title is ${title}`, async function () {
    console.info(`Check Fotos page title is '${title}'`)
    const pageTitle = await FotosPage.title.waitAndGetText()
    expectChai(pageTitle).to.eq(title)
  })
  it(`Fotos page main images are displayed`, async function () {
    console.info(`Fotos page main image are displayed`)
    const image = await FotosPage.mainImages
    for (let el of image) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Fotos page images grid is displayed`, async function () {
    console.info(`Fotos page images grid is displayed`)
    const grid = await FotosPage.grid
    await expect(grid).toBeDisplayed()
  })
  it(`Fotos page 'Todas las fotos' button is displayed`, async function () {
    console.info(`Fotos page 'Todas las fotos' button is displayed`)
    const todosFotos = await FotosPage.todosFotosBtn
    await expect(todosFotos).toBeDisplayed()
  })
  it(`Fotos page 'Todas las fotos' button text is ${todasFotosText}`, async function () {
    console.info(`Check Fotos page title is '${todasFotosText}'`)
    const todasFotos = await FotosPage.todosFotosBtn.waitAndGetText()
    expectChai(todasFotos).to.eq(todasFotosText)
  })
  it(`Fotos page 'Álbumes' button is displayed`, async function () {
    console.info(`Fotos page 'Álbumes' button is displayed`)
    const todosFotos = await FotosPage.albumsBtn
    await expect(todosFotos).toBeDisplayed()
  })
  it(`Fotos page 'Álbumes' button text is ${albumesText}`, async function () {
    console.info(`Fotos page 'Álbumes' button text is ${albumesText}`)
    const albumes = await FotosPage.albumsBtn.waitAndGetText()
    expectChai(albumes).to.eq(albumesText)
  })
  it(`Fotos page 'Compartir' button is displayed`, async function () {
    console.info(`Fotos page 'Compartir' button is displayed`)
    const compartirBtn = await FotosPage.compartirBtn
    await expect(compartirBtn).toBeDisplayed()
  })
  it(`Fotos page 'Compartir' button text is ${compartirText}`, async function () {
    console.info(`Fotos page 'Compartir' button text is ${compartirText}`)
    const compartirBtn = await FotosPage.compartirBtn.waitAndGetText()
    expectChai(compartirBtn).to.eq(compartirText)
  })
  it(`Home page club logotype is displayed`, async function () {
    console.info(`Home page club logotype is displayed`)
    const logotype = await FotosPage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`Home page club logotype has attribute 'sizes' equal to '${logoSize}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${logoSize}'`
    )
    const logotype = await FotosPage.logotype
    await expect(logotype).toHaveAttribute('sizes', logoSize)
  })
  it(`Top menu elements are displayed`, async function () {
    console.info(`Top menu elements are displayed`)
    await FotosPage.header.waitForDisplayed()
    const topMenu = await FotosPage.topMenuDropdownElements
    for (let el of topMenu) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of elements`, async function () {
    console.info(`Top menu number of elements`)
    const topMenuLength = await FotosPage.topMenuDropdownElements
    await expect(topMenuLength).toBeElementsArrayOfSize(topMenuElementsLength)
  })
  topMenuElementsText.forEach((el, i) => {
    it(`Top menu each element's text corresponds '${el}'`, async function () {
      console.info(`Top menu each element's text corresponds '${el}'`)
      const topMenu = await FotosPage.topMenuDropdownElements
      expectChai(await topMenu[i].getText()).to.eq(el)
    })
  })
  it(`Top menu inner elements are displayed`, async function () {
    console.info(`Top menu inner elements are displayed`)
    await showInnerMenu(FotosPage.topMenuContainer)
    const topMenuInner = await FotosPage.topMenuInnerElements
    for (let el of topMenuInner) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top menu number of inner elements`, async function () {
    console.info(`Top menu number of inner elements`)
    const topMenuInnerLength = await FotosPage.topMenuInnerElements
    await expect(topMenuInnerLength).toBeElementsArrayOfSize(
      topMenuInnerElementsLength
    )
  })
  topMenuInnerElementsText.forEach((el, i) => {
    it(`Top menu each inner dropdown element's text corresponds '${el}'`, async function () {
      console.info(
        `Top menu each inner dropdown element's text corresponds '${el}'`
      )
      const topMenuInner = await FotosPage.topMenuInnerElements
      expectChai(await topMenuInner[i].getText()).to.eq(el)
    })
  })
  it(`Top social links are displayed`, async function () {
    console.info(`Top social links are displayed`)
    await hideInnerMenu(FotosPage.topMenuContainer)
    await FotosPage.header.waitForDisplayed()
    const socialMedia = await FotosPage.socialMediaLinksTop
    for (let el of socialMedia) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Top social links number of elements`, async function () {
    console.info(`Top social links number of elements`)
    const socialMediaLength = await FotosPage.socialMediaLinksTop
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
    const socialLinks = await FotosPage.socialMediaLinksTop.map(el =>
      el.getAttribute('href')
    )
    console.table(socialLinks)
    for (let i = 0; i < socialLinks.length; i++) {
      expectChai(socialLinks[i]).to.eq(socialMediaLinks[i])
    }
  })
  it(`Main content links are displayed`, async function () {
    console.info(`Main content links are displayed`)
    const links = await FotosPage.links
    for (let el of links) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners on the Home page are displayed`, async function () {
    console.info(`Image banners on the Home page are displayed`)
    const banners = await FotosPage.imageBanners
    for (let el of banners) {
      await expect(el).toBeDisplayed()
    }
  })
  it(`Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`, async function () {
    console.info(
      `Image banners have attribute 'data-sizes' equal to '${bannersAttr}'`
    )
    const banners = await FotosPage.imageBanners
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
    const bannerHrefs = await FotosPage.bannersLinks.map(el =>
      el.getAttribute('href')
    )
    console.table(bannerHrefs)
    for (let i = 0; i < bannerHrefs.length; i++) {
      expectChai(bannerHrefs[i]).to.eq(bannersLinks[i])
    }
  })
  it(`Footer on the Home page is displayed`, async function () {
    console.info(`Footer on the Home page is displayed`)
    const footer = await FotosPage.footer
    await expect(footer).toBeDisplayed()
  })
  footerLinksText.forEach((el, i) => {
    it(`Footer links text corresponds '${el}'`, async function () {
      console.info(`Footer links text corresponds '${el}'`)
      const footerLinks = await FotosPage.footerLinks.slice(0, -1)
      expectChai(await footerLinks[i].getText()).to.eq(el)
    })
  })
  sponsorCategoriesText.forEach((el, i) => {
    it(`Sponsor categories each element's text corresponds '${el}'`, async function () {
      console.info(`Sponsor categories each element's text corresponds '${el}'`)
      const sponsorCategories = await FotosPage.sponsorsCategories
      expectChai(await sponsorCategories[i].getText()).to.eq(el)
    })
  })
  it(`Sponsors list number of elements is ${sponsorsNumber}`, async function () {
    console.info(`Sponsors list number of elements is ${sponsorsNumber}`)
    const sponsors = await FotosPage.sponsorsList
    await expect(sponsors).toBeElementsArrayOfSize(sponsorsNumber)
  })
  it(`Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`, async function () {
    console.info(
      `Sponsors list elements have attribute 'data-src' that contains '${sponsorsSrc}'`
    )
    const sponsors = await FotosPage.sponsorsList
    for (let el of sponsors) {
      await expect(el).toHaveAttrContaining('data-src', sponsorsSrc)
    }
  })
})
