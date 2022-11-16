const HistoriaPage = require('../../pageobjects/HistoriaPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Historia page `, async function () {
  before(async function () {
    await HistoriaPage.maximize()
    await HistoriaPage.open()
    await HistoriaPage.acceptCookies()
  })
  it(`Collect Historia Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await HistoriaPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await HistoriaPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Historia Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await HistoriaPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await HistoriaPage.images
    await checkLinks(links)
  })
})
