const expectChai = require('chai').expect
const axios = require('axios')
async function showInnerMenu(callback) {
  await browser.execute(async function (menu) {
    let elements = await menu
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'flex'
    }
  }, await callback)
}
async function hideInnerMenu(callback) {
  await browser.execute(async function (menu) {
    let elements = await menu
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none'
    }
  }, await callback)
}
async function checkMenu(elArr, arr) {
  for (let i = 0; i < (await elArr.length); i++) {
    expectChai(await elArr[i].getText()).to.equal(arr[i])
  }
}
// async function checkTopMenu (arr, nodeList) {
//     arr.forEach((el, i) => {
//         it(`Top menu each element\'s text corresponds '${el}'`, async function () {
//             console.info(`Top menu each element\'s text corresponds '${el}'`)
//             const topMenu = await nodeList
//             expectChai(await topMenu[i].getText()).to.eq(el)
//         })
//     })
// }
// async function checkInnerMenu (arr, nodeList) {
//     arr.forEach((el, i) => {
//         it(`Top menu each inner dropdown element\'s text corresponds '${el}'`, async function () {
//             console.info(`Top menu each element\'s text corresponds '${el}'`)
//             const topMenu = await nodeList
//             expectChai(await topMenu[i].getText()).to.eq(el)
//         })
//     })
// }
async function checkLinks(links, baseUrl = '') {
  let filtered = []
  for (let i = 0; i < (await links.length); i++) {
    if (await links[i].getAttribute('href')) {
      filtered.push(await links[i].getAttribute('href'))
    } else if (await links[i].getAttribute('src')) {
      filtered.push(await links[i].getAttribute('src'))
    }
  }
  console.log(await links.length)
  console.log(filtered.length)
  for (let url of filtered) {
    if (url.startsWith('/')) {
      try {
        const response = await axios.get(baseUrl + url)
        expectChai(await response.status).to.eq(200)
        console.info(
          `url ${baseUrl}${url} status code is ${await response.status}`
        )
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        const response = await axios.get(url)
        expectChai(await response.status).to.eq(200)
        console.info(`url ${url} status code is ${await response.status}`)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
module.exports = { showInnerMenu, hideInnerMenu, checkLinks, checkMenu }
