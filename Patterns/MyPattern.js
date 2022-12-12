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

let R = ''
let temp = 0
for (let i = 1; i <= 6; i++) {
    R = R + '*'
    if (i <= 3) {
        for (let j = 1; j <= 4; j++) {
            if ((i === 1 || i == 3) && (j == 4)) R = R + ' '
            else if (i === 2 && j !== 4) R = R + ' '
            else R = R + '*'
        }
    } else{        
        for (let z = 0; z <= temp; z++) {
            if(z===temp)R=R+'*'
           else R=R+' '
        }
        
    }
    temp += 1
    R = R + '\n'
}
console.log(R)