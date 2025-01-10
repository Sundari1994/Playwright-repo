import test from "@playwright/test";


test('Edit a Lead',async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main") 
   //Login
    await page.locator("//input[@id='username']").fill("demoSalesManager")
    await page.locator(`//input[@name='PASSWORD']`).fill("crmsfa")
    await page.waitForTimeout(2000)
    await page.locator("//input[@class='decorativeSubmit']").click()
     //click on the button
  await page.locator(`text=CRM/SFA`).click()
  //click lead
  await page.locator(`//a[text()='Leads']`).click()
  //Create Lead
 await page.locator(`//a[text()='Create Lead']`).click()
 //click find lead
 await page.locator(`//a[text()='Find Leads']`).click()
 //enter first name
 
 await page.locator('//*[@id="ext-gen248"]').fill('Sundari')
 //Click on find lead
 await page.locator(`//button[text()='Find Leads']`).click()
 //take first lead
 await page.locator(`//a[text()='11399']`).click()
 //edit lead
 await page.locator(`//a[text()='Edit']`).click()
 //Edit Company name
 await page.locator(`#updateLeadForm_companyName`).clear()
 await page.locator(`#updateLeadForm_companyName`).fill('CTSTestleaf')
// Edit Annual Revenue
await page.locator(`#updateLeadForm_annualRevenue`).clear()
await page.locator(`#updateLeadForm_annualRevenue`).fill('456789')
//Edit Department 
await page.locator(`#updateLeadForm_departmentName`).clear()
await page.locator(`#updateLeadForm_departmentName`).fill('BFSI')
// Enter Description 
await page.locator(`#updateLeadForm_description`).clear()
await page.locator(`#updateLeadForm_description`).fill('Together brings great revenue')
// Click Update
await page.locator(`//input[@name='submitButton']`)
//Verify the edited fields and print the title of the page
const Companyname= await page.getByText('CTSTestleaf (11399)').allTextContents()
console.log(Companyname)
await page.waitForTimeout(2000)
if(Companyname=="CTSTestleaf"){
    console.log("Companyname is CTSTestleaf")
  }
  else{
    console.log("Companyname is not matching with CTS")
  }

  await page.waitForTimeout(2000)
  
  //await page.waitForTimeout(4000)  
  const Revenue= await page.locator(`//span[@id="viewLead_annualRevenue_sp"]`).allInnerTexts()
  console.log(Revenue)
  //await page.waitForTimeout(4000) 
  if(Revenue=='$456,789.00'){
    console.log("Revenue is $456,789.00")
  }
  else{
    console.log("Revenue is not matching with $456,789.00")
  }
  const Dept= await page.locator(`//span[@id="viewLead_departmentName_sp"]`).allTextContents()
  console.log(Dept)
  //await page.waitForTimeout(4000) 
  if(Dept=='BFSI'){
    console.log("Department is BFSI")
  }
  else{
    console.log("Department is not matching with BFSI")
  }
   console.log(await page.title())
  await page.waitForTimeout(2000)    
 
})

