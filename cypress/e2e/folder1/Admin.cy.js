import { creds } from "../../fixtures/creds";
import { seats } from "../../fixtures/seats";
import { selectors } from "../../fixtures/css";

describe("Админка", () => {
  it("валидный логин", () => {
    cy.visit(selectors.urls.admin);
    cy.login(creds.valid.email, creds.valid.password);
    cy.get(selectors.admin.pageTitle).should("be.visible");
  });

  it("невалидный логин", () => {
    cy.visit(selectors.urls.admin);
    cy.login(creds.invalid.email, creds.invalid.password);
    cy.contains(selectors.admin.errorMessage).should("be.visible");
  });
});
