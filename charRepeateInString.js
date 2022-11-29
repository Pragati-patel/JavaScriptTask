// input="aabbbbcccdddddaa"
// output: "a4b4c3d5


let str = "aabbbbcccdddddaa";
const ans=[]
str.split('').forEach((item)=>{
if(!ans.includes(item)){
    ans.push(item)
    let temp= str.split('').filter((i)=>i===item)
    ans.push(temp.length)}
})
console.log(ans.join(''))