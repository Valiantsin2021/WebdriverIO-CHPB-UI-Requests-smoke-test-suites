const AlbumesPage = require('../../pageobjects/AlbumesPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Albumes page `, async function () {
  before(async function () {
    await AlbumesPage.maximize()
    await AlbumesPage.open()
    await AlbumesPage.acceptCookies()
  })
  it(`Collect Albumes links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await AlbumesPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await AlbumesPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Albumes images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await AlbumesPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await AlbumesPage.images
    await checkLinks(links)
  })
})
