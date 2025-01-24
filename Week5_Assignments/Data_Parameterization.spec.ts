import test from'@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import logininfo from '../Week5_Assignments/logininfo.json'
import path from 'path'
const logindata=parse(fs.readFileSync(path.join(__dirname,'../Week5_Assignments/datapara.csv'),'utf-8')
                 ,{columns:true})

for (let data of logindata){
 
   test(`Data Parametrization ${data.TestcaseID}`,async({page})=>{  
      await page.goto("http://leaftaps.com/opentaps/control/main") 
    //Login
     await page.locator("//input[@id='username']").fill(data.Username)
     await page.locator(`//input[@name='PASSWORD']`).fill(data.Password)
     await page.waitForTimeout(2000)
     
     await page.locator("//input[@class='decorativeSubmit']").click()
     await page.locator(`//*[contains(text(),"CRM/SFA")]`).click()
     //click lead
     await page.locator(`//a[text()='Leads']`).click()
    await page.locator(`//a[text()='Create Lead']`).click()
     //fill in details
     await page.locator('#createLeadForm_companyName').fill(logininfo.companyname)
     await  page.locator('//input[@id="createLeadForm_firstName"]').fill(logininfo.firstname)
      await page.locator('//input[@id="createLeadForm_lastName"]').fill(logininfo.lastname)
      await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({label:'Direct Mail'})
      await page.locator('//select[@id="createLeadForm_marketingCampaignId"]').selectOption({value:'DEMO_MKTG_CAMP'})
      await page.waitForTimeout(7000)
      const count =  page.locator('//*[@id="createLeadForm_marketingCampaignId"]/option')
     const counter=await count.allInnerTexts()
     const numbercount=(( counter).length)-1
     for(let i=1;i<=numbercount;i++){
     console.log(counter[i])
     }
     console.log(`There are ${numbercount} types of campaign`)
     console.log(await count.allInnerTexts())
     
      await page.locator('//select[@id="createLeadForm_industryEnumId"]').selectOption({index:5})
      await page.locator('#createLeadForm_currencyUomId').selectOption({label:'INR - Indian Rupee'})
      await page.locator('#createLeadForm_generalCountryGeoId').selectOption({value:'IND'})
      await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption({index:3})
      await page.waitForTimeout(7000)
      const state= page.locator('//*[@id="createLeadForm_generalStateProvinceGeoId"]/option')
      const statecounter=await state.allInnerTexts()
     const statenumbercount=((statecounter).length)-1
     for(let i=1;i<=statenumbercount;i++){
     console.log(statecounter[i])
     }
     console.log(`There are ${statenumbercount} number of states`)
      console.log(await state.allInnerTexts())
     
      
   await page.locator('//input[@value="Create Lead"]').click()
   console.log("Lead created successfully")
})
   }

