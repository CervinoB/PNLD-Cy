class InventoryPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }
  clickAddToCartButton() {
    cy.get(".btn_inventory")
      .should("be.visible")
      .each(($button, index) => {
        if (index % 2 === 0) {
          // Select even index buttons
          $button.click();
        }
      });
  }

  clickRemoveFromCartButton() {
    cy.get(".btn_secondary").should("be.visible").last().click();
  }

  clickCartButton() {
    cy.get(".shopping_cart_link").should("be.visible").click();
  }

  clickCheckoutButton() {
    cy.get("#checkout").should("be.visible").click();
  }

  scrollToTop() {
    cy.window().scrollTo("top");
  }
}

export default new InventoryPage();
