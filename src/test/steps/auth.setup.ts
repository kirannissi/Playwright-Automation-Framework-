require('dotenv').config();
import {Given ,When} from "@cucumber/cucumber";
import {chromium, Page, Browser, test} from "@playwright/test";
let browser: Browser;
let page: Page;

    //const baseUrl = process.env.BASE_URL as string;
    //const userName = process.env.USERNAME as string;
    //const password = process.env.PASSWORD as string;

When('I Log into the UT Environment', async ({page}) => {
    
    //await page.goto('https://app-ut.bradkeninsite.com/');
    await page.goto(process.env.BASE_URL);
    await page.goto('.MuiButton-root');
    await page.locator('input[type=submit]').click();
    await page.locator('input[type=email]').fill(process.env.USERNAME);
    await page.locator('input[type=submit]').click();
    await page.locator('input[name=passwd]').fill(process.env.PASSWORD);
    await page.locator('input[type=submit]').click();
    await page.locator('input[type=submit]').click();
   
});
