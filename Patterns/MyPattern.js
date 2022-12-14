// let p=''
// for(let i=1;i<=6;i++){
//     p=p+'*'
//     if(i<=3){
//         for(let j=1;j<=4;j++){
//             if((i===1 || i==3) && (j==4))p=p+' '
//             else if(i===2 && j!==4) p=p+' '
//             else p=p+'*'
//         }
//     }
//     p=p+'\n'
// }
// console.log(p)

// let R = ''
// let temp = 0
// for (let i = 1; i <= 6; i++) {
//     R = R + '*'
//     if (i <= 3) {
//         for (let j = 1; j <= 4; j++) {
//             if ((i === 1 || i == 3) && (j == 4)) R = R + ' '
//             else if (i === 2 && j !== 4) R = R + ' '
//             else R = R + '*'
//         }
//     } else{        
//         for (let z = 0; z <= temp; z++) {
//             if(z===temp)R=R+'*'
//            else R=R+' '
//         }

//     }
//     temp += 1
//     R = R + '\n'
// }
// console.log(R)

// let A=''
// let x=1
// for(let i=0;i<=4;i++){
//     for(let j=1;j<5-i;j++){
//         A=A+' '
//     }
//     A=A+'*'
//     for(let j=1;j<x;j++){
//         if(i==2)A=A+'*'
//         else A=A+' '
//     }
//     x+=2
//     if(i>0)A=A+'*'
//     A=A+'\n'
// }
// console.log(A)

let G = ''
let control=3
for (let i = 0; i <= 4; i++) {
    for (let j = 1; j < control; j++) {
        G=G+' '
    }
    if(control<=1)control=control+1
    else control=control-1
    G=G+'*'+'\n'
}
console.log(G)
