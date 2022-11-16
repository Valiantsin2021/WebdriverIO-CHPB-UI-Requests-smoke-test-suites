const expectChai = require('chai').expect
const HomePage = require('../../pageobjects/HomePage')
const LoginModal = require('../../pageobjects/modals/LoginModal')
const {
  baseUrl,
  clubHeader,
  cookiesAccept,
  cookiesConfig
} = require('../../utils/constants')
describe(`Should open ${baseUrl} and check`, function () {
  it(`Home page open and loading progress circle is visible`, async function () {
    console.info(`Home page open and page url is ${baseUrl}`)
    await HomePage.maximize()
    await HomePage.open()
    await expect(browser).toHaveUrl(baseUrl)
  })
  it(`Home page open and cookies modal is visible`, async function () {
    console.info(`Check Home page open and cookies modal is visible`)
    await expect(HomePage.cookiesModal).toExist()
  })
  it(`Cookies accept button has text ${cookiesAccept}`, async function () {
    console.info(`Cookies accept button has text ${cookiesAccept}`)
    const cookiesAcceptBtn = await HomePage.cookiesAcceptBtn
    await expect(cookiesAcceptBtn).toHaveText(cookiesAccept)
  })
  it(`Cookies accept button has text ${cookiesConfig}`, async function () {
    console.info(`Cookies accept button has text ${cookiesConfig}`)
    const cookiesConfigBtn = await HomePage.cookiesConfigBtn
    await expect(cookiesConfigBtn).toHaveText(cookiesConfig)
    await HomePage.acceptCookies()
  })
  it(`Home page header is ${clubHeader}`, async function () {
    console.info(`Check Home page header is ${clubHeader}`)
    const headerText = await HomePage.header.waitAndGetText()
    expectChai(headerText).to.eq(clubHeader)
  })
  it(`Home page club logotype is visible`, async function () {
    console.info(`Home page club logotype is visible`)
    const logotype = await HomePage.logotype
    await expect(logotype).toBeDisplayed()
  })
  it(`click on login button and check login modal is visible`, async function () {
    console.info(`click on login button and check login modal is visible`)
    const loginBtn = await HomePage.loginBtn
    await loginBtn.waitAndClick()
    const loginTitle = await HomePage.loginTitle
    await expect(loginTitle).toBeDisplayed()
  })
  it(`successfull login with valid credentials`, async function () {
    console.info(`successfull login with valid credentials`)
    const usernameInp = LoginModal.usernameInput
    const passinp = LoginModal.passwordInput
    const submitBtn = LoginModal.loginBtn
    await HomePage.doLogin(usernameInp, passinp, submitBtn)
    await browser.pause(3000)
    await browser.keys(['Meta', 'Escape'])
    await HomePage.loginBtn.waitAndClick()
    await HomePage.profileMenuButtons.forEach(el => expect(el).toBeDisplayed())
  })
  it(`successfull logout`, async function () {
    console.info(`successfull logout`)
    await expect(HomePage.profileMenuButtons).toBeElementsArrayOfSize(3)
  })
})
