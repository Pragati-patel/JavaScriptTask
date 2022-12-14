let n=9
let str=''
let a=1
let space=n/2
for(let i=1;i<=n;i++){
    for(let z=1;z<=space;z++){
        str=str+' '
    }
    for(let j=1;j<=a;j++){
        str=str+'*'
    }
    str=str+'\n'
    if(i<=n/2){
        a=a+2
        space-=1
    }else {
        a=a-2
        space+=1
    }
}
console.log(str)