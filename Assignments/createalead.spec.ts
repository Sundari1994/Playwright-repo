import test from "@playwright/test";

test('Create a Lead',async({page})=>{
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
 await page.locator(`//a[text()='Create Lead']`).click()
  //fill in details
  await page.locator('#createLeadForm_companyName').fill("CTS")
  await  page.locator('//input[@id="createLeadForm_firstName"]').fill("Sundari")
   await page.locator('//input[@id="createLeadForm_lastName"]').fill("Ganapathy")
   await page.locator('//input[@name="departmentName"]').fill("EEE")
   await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill("Project Engineer")
   await page.locator('//input[@id="createLeadForm_personalTitle"]').fill("Mr.")
   await page.locator('#createLeadForm_annualRevenue').fill("56789000")
   await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill("987654321")
   await page.selectOption('#createLeadForm_dataSourceId',{label:"Conference"})
await page.locator('//input[@value="Create Lead"]').click()
console.log("Lead created successfully")
await page.waitForTimeout(2000)
const Companyname= await page.locator(`//*[@id="viewLead_companyName_sp"]`).innerText()
//await page.waitForTimeout(2000)
if(Companyname=="CTS"){
  console.log("Companyname is CTS")
}
else{
  console.log("Companyname is not matching with CTS")
}
await page.waitForTimeout(2000)
const Firstname= await page.locator(`//*[@id="viewLead_firstName_sp"]`).innerText()
await page.waitForTimeout(2000) 
if(Firstname=="Sundari"){
  console.log("Firstname is Sundari")
}
else{
  console.log("Firstname is not matching with Sundari")
}
await page.waitForTimeout(2000)
const Lastname= await page.locator(`//*[@id="viewLead_lastName_sp"]`).innerText()
await page.waitForTimeout(2000) 
if(Lastname=="Ganapathy"){
  console.log("Lastname is Ganapathy")
}
else{
  console.log("Lastname is not matching with Ganapathy")
}
//await page.waitForTimeout(4000)  
 console.log(await page.title())
await page.waitForTimeout(2000)    
 
   })
   
    