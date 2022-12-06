let res = ''
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (j < i) {
            res = res + ' '
        } else {
            res = res + '*'
        }
    }
    res = res+'\n'
}
console.log(res)