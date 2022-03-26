// ❓ Kata_8Kyu_#9: Convert a Number to a String!
// 🔗 https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// Function should return any given number that is transformed into a string.

function numberToString(num) {
  let arr = []; // Created an empty array to be able to...
  arr.push(num); // push or add the given number into the array then...
  return arr.join(); // used the join method to transform the array into a string.
}