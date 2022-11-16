const EquiposPage = require('../../pageobjects/EquiposPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Equipos page `, async function () {
  before(async function () {
    await EquiposPage.maximize()
    await EquiposPage.open()
    await EquiposPage.acceptCookies()
  })
  it(`Collect Equipos Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await EquiposPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await EquiposPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Equipos Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await EquiposPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await EquiposPage.images
    await checkLinks(links)
  })
})
