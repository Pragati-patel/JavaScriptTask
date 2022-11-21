const array1=['213','0','34','3','7']
const array2=['sd','f','ds','sdf','hj']

//  first way
 console.log(array1.reverse())

 //second way
 let result=[]
 array2.map((i)=>result.unshift(i))
 console.log(result)
 
 //third way
 const array3=[23,9,5,11,24324]
 let ans=[]
 for(let i=array3.length-1;i>=0;i--){
ans.push(array3[i])
 }
 console.log(ans)

