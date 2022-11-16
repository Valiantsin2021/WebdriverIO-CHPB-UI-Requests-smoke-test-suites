const VideosPage = require('../../pageobjects/VideosPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Videos page`, async function () {
  before(async function () {
    await VideosPage.maximize()
    await VideosPage.open()
    await VideosPage.acceptCookies()
  })
  it(`Collect Videos links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await VideosPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await VideosPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Videos images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await VideosPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await VideosPage.images
    await checkLinks(links)
  })
})
