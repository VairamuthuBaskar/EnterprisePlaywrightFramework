// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test", async ({ page }) => {
    // (alias) new LoginPage(page: Page): LoginPage
    // import LoginPage

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("v.baskar.connect-gxrf@force.com");
    await loginPage.fillPassword("Unlock*9");
    

    const homePage = await loginPage.clickLoginButton();
    await page.waitForTimeout(30000);
    await homePage.expectServiceTitleToBeVisible();
});