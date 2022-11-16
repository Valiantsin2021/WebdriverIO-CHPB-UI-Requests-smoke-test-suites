const ProtocoloPage = require('../../pageobjects/ProtocoloPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Protocolo page `, async function () {
  before(async function () {
    await ProtocoloPage.maximize()
    await ProtocoloPage.open()
    await ProtocoloPage.acceptCookies()
  })
  it(`Collect Protocolo Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ProtocoloPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ProtocoloPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Protocolo Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ProtocoloPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ProtocoloPage.images
    await checkLinks(links)
  })
})
