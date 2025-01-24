import {test,expect} from '@playwright/test'
import {Salesforceun,Salesforcepw} from '/Playwright/lead.json'
const firstname ="Tps"
test('Sales File Upload',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
   await page.locator('#username').fill(Salesforceun)
    await page.locator('#password').fill(Salesforcepw)
    await page.locator('#Login').click()
    await page.getByTitle("App Launcher").click()
    await page.locator(`//button[text()="View All"]`).click()
    await page.getByPlaceholder('Search apps or items...').fill('Accounts')
    await page.locator('//mark[text()="Accounts"]').click()
    await page.waitForLoadState('load')
    await page.locator('//div[text()="New"]').click()
    await page.waitForTimeout(5000) 
    await page.locator('(//label[text()="Account Name"]/following::div/input)[1]').fill(firstname)
    //Rating
    await page.locator('(//label[text()="Rating"]/following::button[1])').click()
    await expect(page.locator('(//span[text()="Warm"])')).toBeVisible()
    const Rating=await page.locator('(//span[text()="Warm"])').innerText()
    console.log(Rating)
    await page.locator('(//span[text()="Warm"])').click()
    //Type
    await page.locator('(//label[text()="Type"]//following::button[1])').click()
    await expect(page.locator('(//span[text()="Prospect"])')).toBeVisible()
    const Type=await page.locator('(//span[text()="Prospect"])').innerText()
    console.log(Type)
    await page.locator('(//span[text()="Prospect"])').click()
    //Ownership
    await page.locator('(//label[text()="Ownership"]//following::button[1])').click()
    await expect(page.locator('(//span[text()="Public"])')).toBeVisible()
    const Ownership=await page.locator('(//span[text()="Public"])').innerText()
    console.log(Ownership)
    await page.locator('(//span[text()="Public"])').click()
    //Industry
    await page.locator('(//label[text()="Industry"]//following::button[1])').click()
    await expect(page.locator('(//span[text()="Banking"])')).toBeVisible()
    const Industry=await page.locator('(//span[text()="Banking"])').innerText()
    console.log(Industry)
    await page.locator('(//span[text()="Banking"])').click()
    await page.locator('//button[text()="Save"]').click()
    let toastMessage = await page.locator(`//span[contains(@class,"toastMessage")]`).innerText()//single string
    console.log(toastMessage)
    let expectedToastMessage = `Account "${firstname}" was created.`
    expect(toastMessage).toContain(expectedToastMessage)
    await page.waitForLoadState('load')
    //upload files
    await expect(page.locator('//div[text()="Upload Files"]')).toBeVisible()
    const fileInput = page.locator('input[type="file"]');
await fileInput.setInputFiles('C:/Playwright/tests/Day1/evenoddnumber.js');
    await page.locator('//span[text()="Done"]').click()
    

})
