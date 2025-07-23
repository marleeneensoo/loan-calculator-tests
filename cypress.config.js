const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: 'https://taotlus.bigbank.ee',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
