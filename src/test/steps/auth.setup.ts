require('dotenv').config();
import {Given ,When} from "@cucumber/cucumber";
import {chromium, Page, Browser, test} from "@playwright/test";
let browser: Browser;
let page: Page;
let baseurl= process.env.BASE_URL as String;
let username= process.env.USER_NAME as String;
let password= process.env.PASSWORD as String;


When('I Log into the UT Environment', async ({page}) => {
   
    browser= await chromium.launch({headless:false});
    page= await browser.newPage();
    await page.goto(baseurl);
    await page.locator('.MuiButton-root').click();
    await page.locator('input[type=submit]').click();
    await page.locator('input[type=email]').fill(username);
    await page.locator('input[type=submit]').click();
    await page.locator('input[name=passwd]').fill(password);
    await page.locator('input[type=submit]').click();
    await page.locator('input[type=submit]').click();
   
});
