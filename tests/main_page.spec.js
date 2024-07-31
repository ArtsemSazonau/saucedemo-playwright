import { test } from "@playwright/test";
import { MainPage } from "../page_obgect/MainPage";
import { InventoryPage } from "../page_obgect/InventoryPage";
import { userCredentials } from "../data/loginUsersDetails";




test ("Login as standard_user", async ({page}) => {
    const mainPage = new MainPage(page);
    const inventoryPage = new InventoryPage(page);
    await mainPage.visit();


    const username = userCredentials.standard_user.username;
    const password = userCredentials.standard_user.password;
    await mainPage.loginAsUser(username, password);

    await inventoryPage.verifyInventoryPage();
    //await page.pause();


});