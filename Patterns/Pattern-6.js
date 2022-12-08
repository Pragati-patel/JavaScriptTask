let res = ''


for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i > 1) {
            if (j > 4) {

                res = res + '*'
            } else {

                res = res + ' '
            }
        } else {
            res = res + '*'
        }
    }

    res = res + '\n'
}
let Q = ''
for (let kk = 1; kk <= 9; kk++) {
    if(kk>4) Q = Q + '*'
    else Q=Q+' '
}
console.log(res+Q)


let s=''
for(let aa=1;aa<=5;aa++){
    for(let bb=1;bb<=5;bb++){
        if(aa!==3){
            if(aa>=3 && bb==5 )s=s+'*'
            else if(aa<=3 && (bb==1 || bb==5)) s=s+'*'
            else s=s+' '
        }else{
            s=s+'*'
        }
    }
    s=s+'\n'
}
console.log(s)