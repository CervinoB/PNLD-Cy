import LoginPage from "../support/pages/LoginPage";

describe("Login", () => {
  it("should login successfully with valid credentials", () => {
    LoginPage.visit();
    LoginPage.fillUsername("standard_user");
    LoginPage.fillPassword("secret_sauce");
    LoginPage.clickLoginButton();

    // Verifique a redireção para a página de dashboard ou use outras asserções necessárias
    cy.url().should("include", "/inventory.html");
  });
});