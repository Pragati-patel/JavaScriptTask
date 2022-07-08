/**
 * In this challenge you have to apply function currying.
 * The 'calculateTotalDisplacement' function takes object as input and,
 * the object contain x and y coordinates of her current and final position.
 *
 * You have to use the formula to calculate total displacement. The formula is:
 * displacement = √[(x₂ - x₁)² + (y₂ - y₁)²]
 * Note: You can't use this formula directly in your code 😄, for that you have to use Math.pow()
 */

/**
 * The function which return the total displacement she covered.
 */
function calculateTotalDisplacement(coordinates) {

}

const initialPosition = { x: 0, y: 0 };
const finalPosition = { x: 20, y: 15 };

const totalDisplacement = calculateTotalDisplacement(initialPosition)(finalPosition);

console.log(totalDisplacement);
