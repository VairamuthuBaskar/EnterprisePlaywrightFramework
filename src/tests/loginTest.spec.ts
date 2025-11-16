// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { encrypt } from "../utils/CryptojsUtils";
import { decrypt } from "../utils/CryptojsUtils";
import * as EncryptoUtils from "../utils/EncryptEnvFile";

test.skip("Test - Normal Login", async ({ page }) => {
    // (alias) new LoginPage(page: Page): LoginPage
    // import LoginPage

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("v.baskar.connect-gxrf@force.com");
    await loginPage.fillPassword("Unlock*9");
    
    const homePage = await loginPage.clickLoginButton();
    await page.waitForTimeout(30000);
    // await homePage.expectServiceTitleToBeVisible();
});

test.skip("Test - Using Environment Variable Login", async ({ page }) => {
    // (alias) new LoginPage(page: Page): LoginPage
    // import LoginPage

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(process.env.userid!);
    await loginPage.fillPassword(process.env.password!);
    
    const homePage = await loginPage.clickLoginButton();
    await page.waitForTimeout(30000);
    // await homePage.expectServiceTitleToBeVisible();
});

test.skip("Sample Env Test", async({ page }) => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);

});

test("Login - Encryption & Decryption", async ({ page }) => {
    // const plainText = 'Hello, Mars!';
    // const encryptedText = encrypt(plainText);
    // console.log('SALT:', process.env.SALT);
    // console.log('Encrypted:', encryptedText);
    // const decryptedText = decrypt(encryptedText);
    // console.log('Decrypted:', decryptedText);
    EncryptoUtils.encryptEnvFile();
    
});

test("Login - Decryption - Final Way after Encryption", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
});

