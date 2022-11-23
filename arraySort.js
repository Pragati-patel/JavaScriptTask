const array = [89, 23, 123, 3, 12];

//sort method work with strings only, with the numbers it will give wrong answer
//first way
let temp = 0
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array)

//second way
// console.log(array.sort(function(a,b){return a-b}), 'second way')

// string sorting
// const arr = ['gdf','bef','jih','pkoj','as','rger']
// console.log(arr.sort())


