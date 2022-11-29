let input = "eov ejn    v  j " 
// output = eov_ejn_v_j
const res=[]
input.trim().split('').map((item,index)=>{
if(item===' '){
    if(input[index]!==input[index+1])
      res.push("_")
}else res.push(item)
})

console.log(res.join(''))