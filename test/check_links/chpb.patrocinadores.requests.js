const PatrocinadoresPage = require('../../pageobjects/PatrocinadoresPage')
const { baseUrl } = require('../../utils/constants')
const { sponsorsUrl } = require('../../utils/constants.patrocinadores')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Patrocinadores page `, async function () {
  before(async function () {
    await PatrocinadoresPage.maximize()
    await PatrocinadoresPage.open()
    await PatrocinadoresPage.acceptCookies()
    await browser.url(sponsorsUrl)
  })
  it(`Collect Patrocinadores Page links 'href' attributes and perform HTTP 'GET' requests on them\
   validating the status code is 200`, async function () {
    const footer = await PatrocinadoresPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await PatrocinadoresPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Patrocinadores Page images 'src' attributes and perform HTTP 'GET' requests on them\
   validating the status code is 200`, async function () {
    const footer = await PatrocinadoresPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await PatrocinadoresPage.images
    await checkLinks(links)
  })
})
