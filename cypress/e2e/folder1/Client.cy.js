import { selectors } from "../../fixtures/css";

describe("Пойдем в кино", () => {
  it("проверка гллавной страницы", () => {
    cy.visit(selectors.urls.client);
    cy.get(selectors.client.pageTitle).should("be.visible");
  });
});
