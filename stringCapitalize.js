// input = "pragati patel"
// output = 'Pragati Patel'

const str='pragati patel'
let res =''
str.split(' ').map((item)=>{
    res= res + item.charAt(0).toUpperCase() + item.slice(1)+' '
})
console.log(res)