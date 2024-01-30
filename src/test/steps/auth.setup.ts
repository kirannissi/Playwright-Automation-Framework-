require('dotenv').config();
import {Given ,When} from "@cucumber/cucumber";
import {chromium, Page, Browser, test} from "@playwright/test";
let browser: Browser;
let page: Page;

Given('User Log into the UT Environment', async ({page}) => {
   
    browser= await chromium.launch({headless:false});
    page= await browser.newPage();
    await page.goto(process.env.BASE_URL);
    await page.locator('.MuiButton-root').click();
    await page.locator('input[type=submit]').click();
    await page.locator('input[type=email]').fill(process.env.USER_NAME);
    await page.locator('input[type=submit]').click();
    await page.locator('input[name=passwd]').fill(process.env.PASSWORD);
    await page.locator('input[type=submit]').click();
    await page.locator('input[type=submit]').click();
});
