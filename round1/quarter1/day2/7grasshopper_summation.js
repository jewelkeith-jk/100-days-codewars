// ❓ Kata_8Kyu_#10: Grasshopper - Summation
// 🔗 https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// Function should find the summation of every number from 1 to num. 
// The given number will always be a positive integer greater than 0.

var summation = function (num) {
  let sum = 0; // Storage for the summation.

  for(let i = 0; i <= num; i++){ // For loop to find every number before the given number. Assignment operator (=) was added so that the loop will also refer to the given number.
    sum += i; // Every number before the given number and the given number itself will be added to the variable sum data which was 0 in line 5.
  }
  return sum;
}