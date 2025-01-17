import {test,expect} from "@playwright/test";
//Classwork Assignment: Frame
test('Handling frame with frame index',async({page})=>{
  await page.goto("https://leafground.com/frame.xhtml")
  
  const allFrames = page.frames()
  //index-0 represents the homepage so the iframe index startes from 1
  //normal frame
 const firstFrame=allFrames[1]
 console.log(await firstFrame.locator('#Click').innerText())
  await firstFrame.locator('#Click').click()
  const insideframe=await firstFrame.locator('#Click').innerText()
   expect(insideframe).toEqual('Hurray! You Clicked Me.')
  //nested frame(innerframe)
  const childFrame =allFrames[4]
  console.log(await childFrame.locator('#Click').innerText())
  await childFrame.locator('#Click').click()
  const nestedframe=await childFrame.locator('#Click').innerText()
  expect(nestedframe).toEqual('Hurray! You Clicked Me.')

})
