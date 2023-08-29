import LoginPage from "../support/pages/LoginPage";

describe("Login", () => {
  it("should login successfully with valid credentials", () => {
    LoginPage.visit();
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });
});
