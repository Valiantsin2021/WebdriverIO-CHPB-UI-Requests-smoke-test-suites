const DocumentacionPage = require('../../pageobjects/DocumentacionPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Documentacion Page `, async function () {
  before(async function () {
    await DocumentacionPage.maximize()
    await DocumentacionPage.open()
    await DocumentacionPage.acceptCookies()
  })
  it(`Collect Documentacion Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await DocumentacionPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await DocumentacionPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Documentacion Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await DocumentacionPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await DocumentacionPage.images
    await checkLinks(links)
  })
})
