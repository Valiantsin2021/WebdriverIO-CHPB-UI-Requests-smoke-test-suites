const ContactoPage = require('../../pageobjects/ContactoPage')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
const { contactoUrl } = require('../../utils/constants.contacto')
describe(`Should check broken links on Contacto page `, async function () {
  before(async function () {
    await ContactoPage.maximize()
    await ContactoPage.open()
    await ContactoPage.acceptCookies()
    await browser.url(contactoUrl)
  })
  it(`Collect Contacto Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ContactoPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ContactoPage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Contacto Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const footer = await ContactoPage.footer
    await expect(footer).toBeDisplayed()
    await browser.pause(2000)
    const links = await ContactoPage.images
    await checkLinks(links)
  })
})
