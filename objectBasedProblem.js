// input  =[
//     {name:"Mohit",age:"20"},
//     {name:"Raman",age:"21"},
//     {name:"Arun",age:"20"},
//     {name:"priya",age:"21"},
//     {name:"peehu",age:"26"},
//     {name:"pragati",age:"26"},
//     ]

// output ={
//     20:[{name:"Mohit",age:"20"},
//     {name:"Arun",age:"20"}],
//     21:[{name:"Raman",age:"21"}]
// }


const input = [
    { name: "Mohit", age: "20" },
    { name: "Raman", age: "21" },
    { name: "Arun", age: "20" },
    { name: "priya", age: "21" },
    { name: "peehu", age: "26" },
    { name: "pragati", age: "26" },
]
const res = {}
input.map((item) => {
    if (res)
        if (res.age !== item.age) {
            res[item.age] = input.filter((i) => i.age === item.age)
        }
})
console.log(res)