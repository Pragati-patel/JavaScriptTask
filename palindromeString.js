// You have been given a String S. You need to find and print whether this string is a palindrome or not. If yes, print "YES" (without quotes), else print "NO" (without quotes).

// Input Format
// The first and only line of input contains the String S. The String shall consist of lowercase English alphabets only.

// Output Format
// Print the required answer on a single line.

// Sample Input ------ aba
// Sample Output-------- YES

const str='aba'
if(str.split('').reverse().join('')===str)
console.log('YES')
else console.log('NO')