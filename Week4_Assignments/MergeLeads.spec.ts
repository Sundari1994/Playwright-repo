import {test,expect} from '@playwright/test'
import {username,password} from '/../Playwright/lead.json'
test('Merge Lead',async({context,page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    page.waitForLoadState('load')
    await page.locator("//input[@id='username']").fill(username)
    await page.locator(`//input[@name='PASSWORD']`).fill(password)
    await page.waitForTimeout(2000)
    await page.locator("//input[@class='decorativeSubmit']").click()
   //click on the button
  await page.locator(`text=CRM/SFA`).click()
  //click lead
  await page.locator(`//a[text()='Leads']`).click()
  //Merge Lead
  await page.locator(`//a[text()='Merge Leads']`).click()
  //Click From Lead widget 
  const newPromise= context.waitForEvent('page')
  await page.waitForTimeout(2000)
  await page.locator('(//table[@id="widget_ComboBox_partyIdFrom"]//following::a)[1]').click()
  //  Select the first resulting lead id 
  const firstlead= await newPromise;
  await expect(firstlead.locator(`//tbody//tr//td//div//a`).first ()).toBeVisible()
  await firstlead.locator(`//tbody//tr//td//div//a`).first (). click()
   // - Click To Lead widget
   const newPromise1= context.waitForEvent('page')
   await page.waitForTimeout(2000)
   await page.locator('(//table[@id="widget_ComboBox_partyIdTo"]//following::a)[1]').click()
  //  - Select the second resulting lead id 
  const Secondlead =await newPromise1
  await expect(Secondlead.locator(`((//table)[5])//tr//td//div//a`).first()).toBeVisible()
  await Secondlead.locator(`((//table)[5])//tr//td//div//a`).first().click()
  // - Click Merge button // - Get the message and type of the alert
  await page.locator('//a[text()="Merge"]').click()
  page.on('dialog',alertType=>{
    const typeofAlert= alertType.type()
    console.log(typeofAlert)
    if(typeofAlert=="confirm"){
        alertType.accept('Alert is accepted')
    }})
  //  - Accept the alert and //  - Click Merge button 
  await page.locator('//a[text()="Merge"]').click()
  // - Assert the title of the page Expected
  await page.waitForTimeout(5000)
  const pagetitle=await page.title()
  console.log(pagetitle)
  expect(pagetitle).toEqual('View Lead | opentaps CRM')
   
})