const FotosPage = require('../../pageobjects/FotosPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Fotos page `, async function () {
  before(async function () {
    await FotosPage.maximize()
    await FotosPage.open()
    await FotosPage.acceptCookies()
  })
  it(`Collect Fotos links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await FotosPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await FotosPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Fotos images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await FotosPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await FotosPage.images
    await checkLinks(links)
  })
})
