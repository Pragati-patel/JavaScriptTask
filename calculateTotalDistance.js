/**
 * The function to calculate distance.
 */
let totalDistanceTraveled=0;


// function calculateDistance(direction, distance) {
//     totalDistanceTraveled = totalDistanceTraveled+distance

// }

/**
 * Steps she followed
 */
// calculateDistance('East', 300)
// calculateDistance('South', 300)
// calculateDistance('East', 450)
// calculateDistance('North', 700)
// calculateDistance('East', 500)
// calculateDistance('North', 50)
// calculateDistance('West', 15)


//  * Bonus 🤩: If you find the way to calculate the total distance then trying modifying the function according to steps below and try to get same output.
 
function calculateDistance(direction, distance) {
totalDistanceTraveled = totalDistanceTraveled + parseInt(distance)

}

 calculateDistance('East', '300m')
 calculateDistance('South', '300m')
 calculateDistance('East', '450m')
 calculateDistance('North', '700m')
 calculateDistance('East', '500m')
  calculateDistance('North', '50m')
 calculateDistance('West', '15m')
 

 console.log(totalDistanceTraveled)

/**
 * Your task is to modify the function whichever way you want just to log the total distance she traveled.
 */