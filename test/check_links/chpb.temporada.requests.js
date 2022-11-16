const TemporadaPage = require('../../pageobjects/TemporadaPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Temporada page `, async function () {
  before(async function () {
    await TemporadaPage.maximize()
    await TemporadaPage.open()
    await TemporadaPage.acceptCookies()
  })
  it(`Collect Temporada Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await TemporadaPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await TemporadaPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Temporada Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await TemporadaPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await TemporadaPage.images
    await checkLinks(links)
  })
})
