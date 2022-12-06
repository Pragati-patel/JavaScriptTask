let res = ''
let a = 5
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j >= a) {

            res = res + '*'
        }else(
            res=res+ " "
        )
    }
    res = res + '\n'
    a-=1
}


console.log(res)