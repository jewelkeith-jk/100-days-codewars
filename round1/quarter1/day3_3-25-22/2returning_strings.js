// ❓ Kata_8Kyu_#12: Returning Strings
// 🔗 https://www.codewars.com/kata/55a70521798b14d4750000a4

// Function should return the string without spaces.

// Function should return a greeting statement that uses an input, name.
// "Hello, <name> how are you doing today?"

function greet(name){
  return "Hello, " + name + " how are you doing today?"; // Concatenation of strings
}

/*

Best practice! 
🔹 create strings using template literals
🔹 const/let declaration
🔹 arrow functions

const greet = name => `Hello, ${name} how are you doing today?`;

*/