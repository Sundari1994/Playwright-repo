import test from "@playwright/test";
import {expect} from "@playwright/test";
import { validateHeaderName } from "node:http";
test('Create account',async({page})=>{
    await page.goto("https://login.salesforce.com/") 
    //Enter username using getByLabel 
    await page.getByLabel("Username").fill("parrot.tps-b3cl@force.com")
    //Enter password using getByLabel 
    await page.getByLabel("Password").fill("Sundari@123")
    //Click Login
    await page.locator("#Login").click()
    //Verify the title and url of the page using appropriate assertions 
   await page.waitForTimeout(5000)
       //Autoretrying assert
           const org= await page.title()
         //  page.waitForTimeout(2000)
         expect(await page.title()).toEqual("Home | Salesforce")
         const url = page.url()
         expect (page.url()).toEqual("https://force-fun-9957.lightning.force.com/lightning/page/home")
    //Click App Launcher using the class locator 
    await page.getByRole('heading', { name: 'Home' }).locator('span')
    // Click View All using getByText 
    await page.getByText('View All Cards').click()
    // Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
   const drop=page.locator('//div[@class="slds-input__icon-group slds-input__icon-group_right"]')
   //Click Service using index based XPath
   drop.nth(2)
    //Click Accounts using attribute based CSS selector
    await page.locator(`//a[@class="slds-text-align_center appItem selected"]`).click()
    //Click New using getByRole
    await page.locator(`//a[@title="New"]`).click()
    page.waitForTimeout(5000)
    //Enter Account name using attribute based CSS selector 
    let newname='Sundari'
    await page.locator(`input[name='Name']`).fill(newname)
    //Click Save button using XPath 
    await page.locator(`//button[@name='SaveEdit']`).click()
    //Verify the toast message displayed
    let toastMessage = await page.locator(`//span[contains(@class,"toastMessage")]`).textContent()
    console.log(toastMessage)
    let expectedToastMessage = `Account "${newname}" was created.`
    expect(toastMessage).toContain(expectedToastMessage)
   
})