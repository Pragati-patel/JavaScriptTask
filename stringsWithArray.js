//input='abcbdbd'
// output= ["a", "a.b", "a.b.c", "a.b.c.b", "a.b.c.b.d", "a.b.c.b.d.b", ...]


let str='abcbdbd'
let res=[]
let temp=''
let array=str.split('')
for(let i=0;i<=array.length-1;i++){
   temp=temp+array[i]+'.'
   res.push(temp.slice(0, -1))
}
console.log(res)