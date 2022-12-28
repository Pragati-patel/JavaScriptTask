// array =[1,2,3,4,5]
// user input = 8
// return the index of those element who get 8 after addition 
//example 3+5=8---> index of 3 & 5 = 2, 4
          



const array=[1,2,3,4,5]
const input = 8
for(let i=0;i<array.length-1;i++){
         array.forEach((item,index)=> {
             if(item != array[i] && item+array[i] ===  input)
             console.log(i,index)})
}