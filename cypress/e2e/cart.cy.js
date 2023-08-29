import InventoryPage from "../support/pages/InventoryPage";
import LoginPage from "../support/pages/LoginPage";

describe("Login and Shopping Cart", () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.login("standard_user", "secret_sauce");
  });

  it("should add and remove items from the shopping cart", () => {
    // Assuming login is successful and you're on the inventory page
    InventoryPage.clickAddToCartButton(2); // Add 2 items
    InventoryPage.verifyCartItemCount(2); // Verify cart item count
    InventoryPage.clickRemoveFromCartButton(1); // Remove 1 item
    InventoryPage.verifyCartItemCount(1); // Verify cart item count
    InventoryPage.clickCartButton(); // Go to cart
    cy.scrollToTop();
    // Verify cart item count
    InventoryPage.clickCheckoutButton(); // Go to checkout page
    // Verify checkout page is displayed
    InventoryPage.verifyCheckoutPageIsDisplayed();
  });
});
