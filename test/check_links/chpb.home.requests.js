const HomePage = require('../../pageobjects/HomePage')
const LoginModal = require('../../pageobjects/modals/LoginModal')
const SignupModal = require('../../pageobjects/modals/SignupModal')
const { baseUrl } = require('../../utils/constants')
const { checkLinks } = require('../../utils/helper')
describe(`Should check broken links on Home page `, async function () {
  before(async function () {
    await HomePage.maximize()
    await HomePage.open()
    await HomePage.acceptCookies()
  })
  it(`Collect Home Page links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const socialSlider = await HomePage.socialSlider
    await expect(socialSlider).toBeDisplayed()
    await browser.pause(2000)
    const links = await HomePage.links
    await checkLinks(links, baseUrl)
  })
  it(`Collect Home Page images 'src' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const socialSlider = await HomePage.socialSlider
    await expect(socialSlider).toBeDisplayed()
    await browser.pause(2000)
    const links = await HomePage.images
    await checkLinks(links)
  })
  it(`Collect Login modal links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const socialSlider = await HomePage.socialSlider
    await expect(socialSlider).toBeDisplayed()
    const loginBtn = await HomePage.loginBtn
    await loginBtn.waitAndClick()
    await browser.pause(2000)
    const links = await LoginModal.links
    await checkLinks(links)
  })
  it(`Collect Signup modal links 'href' attributes and perform HTTP 'GET' requests on them validating the status code is 200`, async function () {
    const socialSlider = await HomePage.socialSlider
    await expect(socialSlider).toBeDisplayed()
    await LoginModal.signupLink.waitAndClick()
    await browser.pause(2000)
    const links = await SignupModal.links
    await checkLinks(links)
  })
})
