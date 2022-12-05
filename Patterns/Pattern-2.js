// /------------------    pattern-2  -------------/
// *
// **
// ***
// ****
// *****

// with  two loops
let res = ''
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {

        res = res + '*'
    }
    res = res + '\n'
}
console.log(res)





// with one loop
// let res = ''
// for (let i = 1; i <= 5; i++) {
//         res = res + "*"
//     console.log(res)
// }



