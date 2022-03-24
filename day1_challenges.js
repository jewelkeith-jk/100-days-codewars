// 🔴 Kata #1: Sum of positive
// 🔗 https://www.codewars.com/kata/5715eaedb436cf5606000381

// Function should return the total sum of all positive numbers in an array.

const array = [-1, 1, -2, 2, -3, 3]; // The variable "array" is assigned to an array consisting of positive and negative numbers.

function positiveSum(arr) {
  let sum = 0; // The purpose of the scope variable "sum" is to store in it the total sum of all positive numbers in an array.
  
  for(let i = 0; i < arr.length; i++){ // The variable "i" purpose in the for loop is to access each element/number in an array. Remember the zero-based indexing.
    if(arr[i] > 0){ // If the nth element/number in the array, arr[i], is less than 0,
      sum = sum + arr[i]; // Add the nth element/number to the variable sum's data.
    }
  }
  return sum; // The funtion will finally return the variable "sum" that's been assigned to the total sum of all positive numbers (greater than 0) in an array which was processed through the for loop and if statement. 
};

console.log(positiveSum(array)); // The console will print out the total sum of all positive number in the array of the variable "array" (line 2).

// 🔴 Kata #2: Return Negative
// 🔗 https://www.codewars.com/kata/55685cd7ad70877c23000102

// The function should return any given number converted to its negative value.
// Consider that a number given might be negative already.

function makeNegative(num) {
    if(num > 0){ // If num is greater than 0 like a positive number,
      num = num * -1; // then multiply num by -1 to make it a negative number.
    } else if(num < 0) { // If num is less than 0 like a negative number,
      num = num * 1; // then multiply num by -1 to still return a negative number.
    }
    return num; // Returns the output of num that went through the if statements.
  }
  console.log(makeNegative(1)); // Postive 1 will become negative 1.
  console.log(makeNegative(-1)); // Negative 1 will still stay the same.