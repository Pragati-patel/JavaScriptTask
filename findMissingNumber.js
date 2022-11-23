const array=[1,2,4,5,6,8,9]

for(let i=0;i<array.length-1;i++){
if((array[i+1]-array[i])!==1)
console.log("missing number is",array[i]+1)
}