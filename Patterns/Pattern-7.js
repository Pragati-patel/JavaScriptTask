let res=''
for(let i=1;i<=4;i++){
    for(let j=1;j<=7;j++){
        if(i===1){
            if(j<=2 || j>=6)res=res+'*'
            else res=res+' '
        }else if(i===2){
            if(j===1 || j===7 || j===4)res=res+' '
            else res=res+'*'
        }else if(i===3){
            if(j>=3 && j<=5)res=res+'*'
            else res=res+' '
        }else if(i===4){
            if(j==4)res=res+'*'
            else res=res+' '
        }
    }
    res=res+'\n'

}
console.log(res)