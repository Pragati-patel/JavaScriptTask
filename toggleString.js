// <!-- You have been given a String S consisting of uppercase and lowercase English alphabets. You need to change the case of each alphabet in this String. That is, all the uppercase letters should be converted to lowercase and all the lowercase letters should be converted to uppercase. You need to then print the resultant String to output.

// Input Format
// The first and only line of input contains the String S

// Output Format
// Print the resultant String on a single line.

// Constraints
//  where S denotes the length of string S.

// Sample Input -------- abcdE
// Sample Output----------ABCDe
//  -->


const s = "abcdE"
const res=[];
// console.log(s.split(''))
(s.split('')).map((i)=>{
    if(i===i.toUpperCase() )
    res.push(i.toLowerCase())
    else
    res.push(i.toUpperCase())

})
console.log(res)