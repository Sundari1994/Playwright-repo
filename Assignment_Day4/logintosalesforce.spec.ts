import test,{ chromium } from "@playwright/test";

test('Launch Broswer',async()=>{
    const brow=await chromium.launch({channel:"msedge",headless:false})
    const context = await brow.newContext()
    const page=await context.newPage()
    await page.goto("https://login.salesforce.com/") 
    await page.fill(`input[id="username"]`,`parrot.tps-b3cl@force.com`)
    await page.fill(`input[id="password"]`,`Sundari@123`)
    await page.click(`input[id="Login"]`)
    await page.waitForTimeout(3000)
    console.log('The title of the page is:'+ await page.title())
    })

      