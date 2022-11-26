const fruits={
    Apple:{weight:"20"},
    Banana:{weight:"30"},
    orange:{weight:"25"},
}

// output = [
//     {name:"Apple",weight:"20"},
//     {name:"Banana",weight:"30"},
//     {name:"Orange",weight:"25"},
//     ]
const keyss=Object.keys(fruits)
const valuess=Object.values(fruits)

//   console.log(keyss)
//   console.log(valuess)

valuess.map((i,v)=>{
//   console.log(i,v)
//   keyss.map((j)=>{
            i["name"]=keyss[v]
//   })
})
  console.log(valuess)