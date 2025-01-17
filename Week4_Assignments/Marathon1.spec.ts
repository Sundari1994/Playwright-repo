import {test,expect} from '@playwright/test'
import {Salesforceun,Salesforcepw} from '/Playwright/lead.json'
const firstname ="Tps"
const lastname ="Ganapathy"
const Salutation = "Ms."
const opport ="Manager"

test('Marathon1',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
   await page.locator('#username').fill(Salesforceun)
    await page.locator('#password').fill(Salesforcepw)
    await page.locator('#Login').click()
    await page.getByTitle("App Launcher").click()
    await page.locator(`//button[text()="View All"]`).click()
    await page.getByPlaceholder('Search apps or items...').fill('Marketing')
    await page.locator('//mark[text()="Marketing"]').click()
   await expect(page.locator('//span[text()="Leads"]')).toBeVisible()
    await page.locator('//span[text()="Leads"]').click()
    await page.waitForTimeout(5000) 
  await page.locator(`(//span[text()="Leads"]//following::lightning-icon)[1]`).click()  
  await page.locator(`//span[text()='New Lead']`).click()
    await page.locator('//button[@name="salutation"]').click()
    await page.locator(`//span[text()='${Salutation}']`).click()
    await page.getByPlaceholder('First Name').fill(firstname)
await page.locator('//label[text()="Last Name"]').fill(lastname)
await page.locator('//label[text()="Company"]').fill('Infosys')
await page.locator('//button[text()="Save"]').click()
let toastMessage = await page.locator(`//span[contains(@class,"toastMessage")]`).innerText()//single string
console.log(toastMessage)
let expectedToastMessage = `Lead "${Salutation} ${firstname} ${lastname}" was created.`
expect(toastMessage).toContain(expectedToastMessage)
await page.locator('(//button[@name="Submit"]//following::button)[1]').click()
await page.locator('//span[text()="Convert"]').click()
await page.locator('//span[text()="Opportunity"]').click()
const opponame= page.locator('(//span[text()="Opportunity Name"]/following::input)[1]')
await opponame.clear()
await opponame.fill(opport)
await page.locator('//button[text()="Convert"]').click()
await page.locator('//button[text()="Go to Leads"]').click()
await expect(page.locator('//span[text()="Opportunities"]')).toBeVisible()
await page.locator('//span[text()="Opportunities"]').click()
await page.getByPlaceholder('Search this list...').fill(opport)
await page.getByPlaceholder('Search this list...').focus()
await page.keyboard.press('Enter')
await page.waitForTimeout(5000)
await page.locator('(//a[text()="Manager"])[1]').click()
await page.waitForTimeout(5000)
const sellead = await page.locator('(//lightning-formatted-text[text()="Manager"])').innerText()
expect(sellead).toEqual(opport)
})