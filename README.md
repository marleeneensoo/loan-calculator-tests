#Loan Calculator E2E Test Suite

This project contains automation tests for verifying the functionality of the loan calculator modal, using Cypress.

Requirements:
* Node.js v20 or newer
* npm v10 or newer
* Chrome or Electron browser installed
* Internet access to open the Bigbank loan calculator

1.Clone the project
git clone 
cd loan-calculator-tests

2. Install dependencies
npm install

Ensure Node.js v20 or higher is installed.

3. Run tests
Run in headless mode:
npx cypress run
npx cypress run --browser chrome  (to run the tests in the Chrome browser)

Run in interactive mode:
npx cypress open
Then select the test file (loanCalculatorTest.cy.js) to run it from the Cypress UI

4. Test Reporting (Mochawesome)
This project uses Mochawesome for generating HTML and JSON test reports. Mochawesome is already a dev dependency. After npm install, it works out of the box.
Reports will be located in:
cypress/reports/
Open the .html file in your browser to view the report.
