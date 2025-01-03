let arr1 =[1,2,3,4,5]
let arr2 =[2,3,4,5,6]

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
         console.log("Elements are same"+arr1[i]+"and"+arr2[j])
        }
        else{
            console.log("Elements are not same"+arr1[i]+"and"+arr2[j])
        }
        
    }
}