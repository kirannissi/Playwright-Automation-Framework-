import {Given ,When, Then} from "@cucumber/cucumber";
import {chromium, Page, Browser} from "@playwright/test";

let browser: Browser;
let page: Page;

Given('User navigates to the application url {string}', async function (url) {
    browser= await chromium.launch({headless:false});
    page= await browser.newPage();
    await page.goto(url);
});

When('I click element {string}', async function (element){
    await page.locator(element).click();
 });

Then('I enter {string} in the field {string}', async function (text,element) {
    await page.locator(element).fill(text);
}); 

When('I click dropdown {string} and select {string}', async function (element, value) {
    await page.locator(element).selectOption(value);
});

Then('The element {string} is visible', async function (element) {
    await page.locator(element).isVisible();
}); 

When('I click {string}', async function (element) {
    await page.locator(element).click();
});

When('I click first element {string}', async function () {
    
});

When('I scroll page to element {string}', async function (element) {
    
});

When('I click {string} with text {string}',async function (element, text) {
    
});
When('I hover over element {string}', async function (element) {
  
});

Then('I should see element {string}', (element) => {
  
});

Then('I should not see element {string}', (element) => {
  
});

Then('I should not see text {string}', (text) => {
 
});

Then('I should see element {string} with text {string}', (element, text) => {
 
});

Then('I should not see element {string} with text {string}', (element, text) => {
  
});

Then('I should see element {string} with text matching {string}', (element, regex) => {
 
});

Then('I should see all elements {string} with text matching {string}', (element, regex) => {

});

Then('I should see element {string} without text {string}', (element, title) => {
  
});

Then('I should see all elements {string} with text {string}', (element, text) => {
  
});

Then('I should see element {string} with link {string}', (element, link) => {
  
});

Then('I should see element {string} with {string} attribute {string}', (element, attribute, value) => {
 
});

Then('I should not see element {string} with {string} attribute {string}', (element, attribute, value) => {
  
});

Then('The element {string} should not exist', (element) => {

});

Then('the element {string} exists with {string} attribute {string}', (element, attribute, value) => {
 
});

Then('The element {string} should be empty', (element) => {
  
});

Then('The element {string} should not be empty', (element) => {
  
});

Then('I should count element(s) {string} {string} {int}', (element, operator, count) => {
  
});

Then('I should see {string} dates in descending order', (element) => {
 
});

Then('I navigate to previous page', () => {
 
});

Then('html content of element {string} matches fixture {string}', (element, fixture) => {
 
});

Then('the javascript tag exists {string}', (url) => {
  
});

// Usage: Then The element ".class" has CSS pseudo "::after" "content" with value '" *"'
Then('The element {string} has CSS pseudo {string} {string} with value {string}', (element, pseudo, property, value) => {
  
});

Then('The element {string} should be within the viewport', (element) => {
  
});

Then('I should see element {string} is a link', (element) => {
  
});

