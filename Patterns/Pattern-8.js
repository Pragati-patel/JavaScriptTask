// let n=4;
// let a=1;
// let b=3;
// let res=''

// // b-=1
// for(let i=1;i<=n;i++){
//     for(let z=b;z>=1;z--){
//         res=res+' '
//     }
//     for(let j=1;j<=a;j++){
//          res=res+'*'
//     }
//     b-=1
//     a+=2
//     res=res+'\n'
// }
// console.log(res)









let n=4;
let a=7;
let res=''

for(let i=0;i<n;i++){
    for(let z=1;z<=i;z++){
        res=res+' '
    }
    for(let j=1;j<=a;j++){
         res=res+'*'
    }
    a-=2
    res=res+'\n'
}
console.log(res)
