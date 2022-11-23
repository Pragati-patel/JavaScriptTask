const array = [-3, 2, 3, -4, 3, 1]
let adding = 0
let compair = []
for (let r = 0; r < array.length - 1; r++) {

    let a = 0
    let value = r
    for (let i = 0; i < array.length - 1; i++) {
        let sum = 0
        for (j = 0; j <= a; j++) {
            let temp = array[value]
            sum += temp;
            value += 1;
        }
        a += 1
        if (sum)
            adding += sum


    }
    compair.push(adding)
    adding = 0

}
console.log(compair.sort(function (a, b) { return b - a })[0])