const EntrenadorPage = require('../../pageobjects/EntrenadorPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Entrenador page `, async function () {
  before(async function () {
    await EntrenadorPage.maximize()
    await EntrenadorPage.open()
    await EntrenadorPage.acceptCookies()
  })
  it(`Collect Entrenador Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await EntrenadorPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await EntrenadorPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Entrenador Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await EntrenadorPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await EntrenadorPage.images
    await checkLinks(links)
  })
})
