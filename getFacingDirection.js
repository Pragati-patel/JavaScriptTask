/**
 * The function which return the direction she is facing to.
 */
let facingDirection = " "
function getFacingDirection(direction) {
    facingDirection = direction;

}
/**
 * The array of objects of her steps during the journey.
 */
const steps = [
    { direction: 'East', distance: 300 },
    { direction: 'South', distance: 300 },
    { direction: 'East', distance: 450 },
    { direction: 'North', distance: 700 },
    { direction: 'East', distance: 500 },
    { direction: 'North', distance: 50 },
    { direction: 'West', distance: 15 },
]
/**
 * Use the above array to call the 'getFacingDirection' function using loop and log the output.
 */
// steps?.map((item,index)=>{
//     return getFacingDirection(item.direction)
// })
steps.forEach((i)=>getFacingDirection(i.direction))
console.log(facingDirection)