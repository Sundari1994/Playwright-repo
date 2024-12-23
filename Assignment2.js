const browserVersion = "Chrome"
getBrowserVersion()
function getBrowserVersion(){
    
    if(browserVersion=="Chrome"){
        let browserVersion ="Firefox"//if var is used in if condition we can't use startswith
     console.log("The brwoserversion is chrome"+browserVersion)
    }
    else{
        console.log("The brwoserversion is not chrome"+browserVersion) 
    }
    console.log(browserVersion)
}