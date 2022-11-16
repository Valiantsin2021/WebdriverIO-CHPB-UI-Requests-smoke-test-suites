const ContabilidadPage = require('../../pageobjects/ContabilidadPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Contabilidad Page `, async function () {
  before(async function () {
    await ContabilidadPage.maximize()
    await ContabilidadPage.open()
    await ContabilidadPage.acceptCookies()
  })
  it(`Collect Contabilidad Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ContabilidadPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ContabilidadPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Contabilidad Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ContabilidadPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ContabilidadPage.images
    await checkLinks(links)
  })
})
