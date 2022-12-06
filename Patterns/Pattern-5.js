//       *
//       **
//       ***
//       ****
//       *****
//        ****
//         ***
//          **
//           *



let res = ''
let a = 1;
let N = 1
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= a; j++) {
        res = res + '*'
    }
    res = res + '\n'
    if (i >= 5) {
        a -= 1
        for (let z = 1; z <= N; z++)
            res = res + ' '
         N+=1   
    } else {
        a += 1
    }

}
console.log(res)