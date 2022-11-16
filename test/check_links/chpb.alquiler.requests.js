const AlquilerPage = require('../../pageobjects/AlquilerPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Alquiler page `, async function () {
  before(async function () {
    await AlquilerPage.maximize()
    await AlquilerPage.open()
    await AlquilerPage.acceptCookies()
  })
  it(`Collect Alquiler Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await AlquilerPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await AlquilerPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Alquiler Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await AlquilerPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await AlquilerPage.images
    await checkLinks(links)
  })
})
