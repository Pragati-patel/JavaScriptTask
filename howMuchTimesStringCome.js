// input = "This is my book, this is very nice"
// how much times "is" come in this string
// output= 4

const str='This is my book, this is very nice'
let res=0
const arr=str.split('');
arr.map((v,i)=>{
    let temp = arr[i].concat(arr[i+1])
if(temp==="is")
res+=1
})
 
console.log(res)