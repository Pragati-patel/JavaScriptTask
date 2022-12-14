let n = 8
let str = ''
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= (2 * n + 1); j++) {
        if ((j === 1 || j === (2 * n + 1) || j === n+1) || (i === n)) str = str + '*'
        else str = str + ' '
    }
    if(i!==n)str=str+'\n'
}
console.log(str)
let str2 = ''
for (let z = 1; z <n; z++) {

    for (let o = 1; o <=n; o++) {
        str2 = str2 + ' '
    }
    str2 = str2 + '*' + '\n'
}
console.log( str2)