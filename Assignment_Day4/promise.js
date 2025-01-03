let data 
function fetchDataFromDatabase(data)
{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data===true)
                {
               resolve("Data fetched Successfully!")
            }
                else
                {
                reject("Data not Found!")
                }
              },3000)
})
}
fetchDataFromDatabase(true).then((display)=>console.log(display)).catch((fail)=>console.log(fail))
fetchDataFromDatabase(false).then((display)=>console.log(display)).catch((fail)=>console.log(fail))
console.log('Fetching data from database............')