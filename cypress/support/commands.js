import { selectors } from "../fixtures/css";

Cypress.Commands.add("login", (email, password) => {
  cy.get(selectors.admin.emailInput).type(email);
  cy.get(selectors.admin.passwordInput).type(password);
  cy.get(selectors.admin.loginButton).click();
});

Cypress.Commands.add("getHallName", (selector) => {
  return cy
    .get(selector)
    .invoke("text")
    .then((text) => {
      const nameHall = text.trim();
      expect(nameHall).to.eq(text.trim());
      return nameHall;
    });
});

Cypress.Commands.add("SeanceTime", (hallName, seanceSelector) => {
  cy.contains(hallName)
    .closest(".movie")
    .within(() => {
      cy.get(seanceSelector).click();
    });
});

Cypress.Commands.add("checkText", (selector, expected) => {
  cy.get(selector)
    .invoke("text")
    .then((text) => {
      expect(text.trim()).to.eq(expected);
    });
});
