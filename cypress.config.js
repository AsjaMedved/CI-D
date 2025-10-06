const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "mx9ts8",
    baseUrl: "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
