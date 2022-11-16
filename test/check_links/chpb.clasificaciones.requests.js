const ClasificacionesPage = require('../../pageobjects/ClasificacionesPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Clasificaciones page `, async function () {
  before(async function () {
    await ClasificacionesPage.maximize()
    await ClasificacionesPage.open()
    await ClasificacionesPage.acceptCookies()
  })
  it(`Collect Clasificaciones Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ClasificacionesPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ClasificacionesPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Clasificaciones Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ClasificacionesPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ClasificacionesPage.images
    await checkLinks(links)
  })
})
