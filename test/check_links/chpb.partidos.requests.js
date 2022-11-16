const PartidosPage = require('../../pageobjects/PartidosPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Partidos page `, async function () {
  before(async function () {
    await PartidosPage.maximize()
    await PartidosPage.open()
    await PartidosPage.acceptCookies()
  })
  it(`Collect Equipos Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await PartidosPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await PartidosPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Equipos Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await PartidosPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await PartidosPage.images
    await checkLinks(links)
  })
})
