// input>>>> a=[1,2,3]
// output>>> [4,1,2]
//additon of first and last element should be placed on first index or array and remove the last element from the array
let a=[1,2,3]
 a.unshift(a[0]+a[a.length-1])
 a.pop()
 console.log(a)