// ❓ Kata_8Kyu_#7: Reversed Strings
// 🔗 https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Function should return a string in reverse form.

function solution(str){
  return str.split("").reverse().join().replace(/,/g, "");
}

// split method to convert the string into an array to be able to use the...
// reverse method which will reverse the order of the elements in the new array
// join method to convert the array into a string
// replace method to remove the commas in the new string