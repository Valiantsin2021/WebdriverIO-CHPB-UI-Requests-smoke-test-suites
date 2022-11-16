const InstalacionesPage = require('../../pageobjects/InstalacionesPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Instalaciones page `, async function () {
  before(async function () {
    await InstalacionesPage.maximize()
    await InstalacionesPage.open()
    await InstalacionesPage.acceptCookies()
  })
  it(`Collect Instalaciones Page links 'href' attributes and perform HTTP 'GET' requests on them\
   validating the status code is 200`, async function () {
    const footer = await InstalacionesPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await InstalacionesPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Instalaciones Page images 'src' attributes and perform HTTP 'GET' requests on them\
   validating the status code is 200`, async function () {
    const footer = await InstalacionesPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await InstalacionesPage.images
    await checkLinks(links)
  })
})
