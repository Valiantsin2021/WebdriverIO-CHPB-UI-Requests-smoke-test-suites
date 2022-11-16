const AppersonalizadaPage = require('../../pageobjects/AppersonalizadaPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on App Personalizada page `, async function () {
  before(async function () {
    await AppersonalizadaPage.maximize()
    await AppersonalizadaPage.open()
    await AppersonalizadaPage.acceptCookies()
  })
  it(`Collect App Personalizada Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await AppersonalizadaPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await AppersonalizadaPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect App Personalizada Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await AppersonalizadaPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await AppersonalizadaPage.images
    await checkLinks(links)
  })
})
