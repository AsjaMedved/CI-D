import { creds } from "../../fixtures/creds";
import { seats } from "../../fixtures/seats";
import { selectors } from "../../fixtures/css";

describe("бронирование фильма", () => {
  it("получаем зал и бронируем места", () => {
    cy.visit(selectors.urls.admin);
    cy.login(creds.valid.email, creds.valid.password);

    cy.getHallName(selectors.admin.hallControl).then((nameHall) => {
      cy.visit(selectors.urls.client);
      cy.get(selectors.client.dayButton).eq(2).click();

      cy.contains(nameHall).should("be.visible");

      cy.SeanceTime(nameHall, selectors.client.seanceButton);

      seats.forEach(({ row, col }) => {
        cy.get(selectors.client.seat(row, col)).click();
      });

      cy.get(selectors.client.acceptButton).click();

      cy.checkText(selectors.client.ticketCost, "400");
      cy.checkText(selectors.client.ticketHall, nameHall);
    });
  });
});
