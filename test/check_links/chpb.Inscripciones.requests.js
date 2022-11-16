const InscripcionesPage = require('../../pageobjects/InscripcionesPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Historia page `, async function () {
  before(async function () {
    await InscripcionesPage.maximize()
    await InscripcionesPage.open()
    await InscripcionesPage.acceptCookies()
  })
  it(`Collect Inscripciones Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await InscripcionesPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await InscripcionesPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Inscripciones Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await InscripcionesPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await InscripcionesPage.images
    await checkLinks(links)
  })
})
