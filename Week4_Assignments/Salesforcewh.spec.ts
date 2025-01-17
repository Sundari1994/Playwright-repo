import {test,expect} from "@playwright/test";
import {Salesforceun,Salesforcepw}from "/Playwright/lead.json"
test('Window Handle',async({context,page})=>{
    await page.goto("https://login.salesforce.com/") 
    //Enter username using getByLabel 
        await page.getByLabel("Username").fill(Salesforceun)
        //Enter password using getByLabel 
        await page.getByLabel("Password").fill(Salesforcepw)
        //Click Login
        await page.locator("#Login").click()
        //Verify the title and url of the page using appropriate assertions 
       await page.waitForLoadState('load')
           //Autoretrying assert
            // expect(await page.title()).toEqual("Home | Salesforce")
             //Click on the "Learn More” button under Mobile Publisher
             //const org= await page.title()
             //page.waitForTimeout(7000)
             const newPromise= context.waitForEvent('page')
             await page.waitForTimeout(2000)
          await page.locator(`//span[text()='Learn More']`).click()
         //- Capture the title of the new window that opens
  const titleofnewwindow =await newPromise
  await titleofnewwindow.title()
//- Click the ‘Confirm’ button on the page
await expect(titleofnewwindow.locator('//button[text()="Confirm"]')).toBeVisible()
await titleofnewwindow.locator('//button[text()="Confirm"]'). click()
//- Assert the title and url of the page
await page.waitForTimeout(5000)
const pagetitle=await titleofnewwindow.title()
const newurl = titleofnewwindow.url()
console.log(pagetitle)
console.log(newurl)
expect(pagetitle).toEqual('Service Cloud: AI-powered Customer Service Agent Console | Salesforce US')
expect(newurl).toEqual('https://www.salesforce.com/service/cloud/')
})