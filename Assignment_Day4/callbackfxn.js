let browser = "Chrome";
function checkBrowserVersion(browserversion)
{
    setTimeout(()=>{
    browserversion(browser)},2000)
}
function validatebrowser(browserversion){
    console.log(`Browser is :${browserversion}`)
}
checkBrowserVersion(validatebrowser)