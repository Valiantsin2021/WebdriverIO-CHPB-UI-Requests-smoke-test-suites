const HockeyPage = require('../../pageobjects/HockeyPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Hockey page `, async function () {
  before(async function () {
    await HockeyPage.maximize()
    await HockeyPage.open()
    await HockeyPage.acceptCookies()
  })
  it(`Collect Hockey Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await HockeyPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await HockeyPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Hockey Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await HockeyPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await HockeyPage.images
    await checkLinks(links)
  })
})
