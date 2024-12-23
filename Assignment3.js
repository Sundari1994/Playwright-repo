/*let test=[];
test.push('smoke')
test.push('sanity')
test.push('regression')
console.log(test)*/
function runTests(string){
    let test='smoke'
    switch(test){
        case 'smoke':
            console.log("the test type is smoke")
            break
        case 'sanity':
            console.log("the test type is sanity") 
            break  
        case 'regression':
            console.log("the test type is regression")
            break
        default:
    }
}
runTests()