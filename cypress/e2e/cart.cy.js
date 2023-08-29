import InventoryPage from "../support/pages/InventoryPage";
import LoginPage from "../support/pages/LoginPage";

describe("Login", () => {
  it("should login successfully with valid credentials", () => {
    LoginPage.visit();
    LoginPage.fillUsername("standard_user");
    LoginPage.fillPassword("secret_sauce");
    LoginPage.clickLoginButton();

    InventoryPage.clickAddToCartButton();
    InventoryPage.clickRemoveFromCartButton();
    InventoryPage.scrollToTop();
    InventoryPage.clickCartButton();
    InventoryPage.clickCheckoutButton();
  });
});
