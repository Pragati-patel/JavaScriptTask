const array =[23,78,4,57,0,45]
//first way
// array.sort(function(a,b){return a-b})
// console.log("min = " , array[0])
// console.log("max = " , array[array.length-1])

//second way
let temp=0
for(let i=0;i<array.length;i++){
if(array[i]>temp){
    temp=array[i]
}
}
console.log(temp)