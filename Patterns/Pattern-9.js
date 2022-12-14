let a=1;
let b=4
let str=''
for(let i=1;i<=5;i++){
    for(let z=1;z<=b;z++){
        str=str+' '
    }
    b-=1
    for(let j=1;j<=i;j++){
        str=str+a+' '
        if(a<9)str=str+' '
        a+=1
    }
    str=str+'\n'
}
console.log(str)