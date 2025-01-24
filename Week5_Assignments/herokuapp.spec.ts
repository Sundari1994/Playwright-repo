import test from '@playwright/test'

test('eventlistherokuapp upload',async({page})=>{
 await page.goto('https://the-internet.herokuapp.com/upload')
 const filechoose= page.waitForEvent('filechooser')
await page.locator('#drag-drop-upload').click()
await page.waitForTimeout(2000)
const fileup = await filechoose
fileup.setFiles(['loginCred.jpg','createlead.png'])
})
test('normal upload',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    
   const up= page.locator('//input[@id="file-upload"]')
   up.click()
   up.setInputFiles('loginCred.jpg')
   await page.locator('//input[@id="file-submit"]').click()
   })

