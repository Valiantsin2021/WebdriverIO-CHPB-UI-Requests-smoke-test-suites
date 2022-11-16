const ClasesPadelPage = require('../../pageobjects/ClasesPadelPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Clases padel page `, async function () {
  before(async function () {
    await ClasesPadelPage.maximize()
    await ClasesPadelPage.open()
    await ClasesPadelPage.acceptCookies()
  })
  it(`Collect Clases padel Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ClasesPadelPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ClasesPadelPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Clases padel Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ClasesPadelPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ClasesPadelPage.images
    await checkLinks(links)
  })
})
