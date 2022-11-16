# JS automation tests using WebdriverIO

to run tests separately run wdio wdio.conf.js --mochaOpts.grep <myText>

## This repository purpose is to functional test automation of [Orange hrm project] https://opensource-demo.orangehrmlive.com/

## Test report page https://valiantsin2021.github.io/WebdriverIO-CHPB-UI-Requests-smoke-test-suites/

## The test suites purpose is to perform the following assertions:

1. Make UI tests of web app each page elements
2. Make http requests to check broken links and images on all web app pages
3. Perform smoke test (login)

## Job done:

1.  Page Object model implemented
2.  Chrome, MSEdge, Firefox tests via ENV variable
3.  Test suite UI/ requests/ smoke
4.  Allure reporter
5.  Screenshots with timestamp on failure
6.  Separate config file to run in headless mode
7.  Custom commands in wdio.conf.js file
8.  Chai expect assertion
9.  Jenkinsfile (ui, and smoke suites run with Chrome browser and artefacts saved)
10. Github Actions yml file (ui, and smoke suites run with Chrome browser and artefacts saved)
11. Allure report publish on gh-pages
12. Add precommit hook for Prettier/Eslint

## Extras

#### Negative login test suite added (test factory for negative test data)

#### Smoke test suite added (check the impossibility to create the same Job Title again)

## Setup:

1. Clone this repository
2. Install dependencies with "npm install"
3. To run tests - open terminal and navigate to the path of the cloned project and:

   - all test suites with Chrome browser: npm test
   - ui test suite with Crome browser: npm run ui:chrome
   - ui test suite with Microsoft Edge browser: npm run ui:edge
   - smoke test suite with Chrome browser: npm run smoke:chrome
   - smoke test suite with Microsoft Edge browser: npm run smoke:edge
   - ui, requests and smoke suites with Chrome browser headless mode: npm run wdio-headless
   - choose browser and suite manually - please add ENV and run with "npm run clean && npx cross-env ENV=(chrome | edge | firefox) npm run wdio -- --suite (ui | requests | smoke)"
   - To clean reports directory and screenshots: npm run clean
