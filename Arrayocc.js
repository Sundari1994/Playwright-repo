let browsername=["Chrome","edge","Firefox","edge","Chrome","Chromium"]
const occurrences = {};
let a=[]
let b=[]

/*browsername.forEach(item => {
  if (occurrences[item]) {
    occurrences[item]++;
  } else {
    occurrences[item] = 1;
  }
});

console.log(occurrences);
let numbers=[90876543,345678,67890]
console.log(numbers.sort())
console.log(numbers.sort((a,b)=>a-b))//doing this will push the larger number to last[callback function]*/

for (let index = 0; index < browsername.length; index++) {
    if (a.indexOf(browsername[index])===-1) {
        a.push(browsername[index])
      } else {
        if (b.indexOf(browsername[index])===-1)
        {
            b.push(browsername[index])
        }
      }
    
}
console.log(a)
console.log(b)