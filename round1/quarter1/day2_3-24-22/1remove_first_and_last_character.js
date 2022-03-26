// ❓ Kata_8Kyu_#4:  Remove First and Last Character
// 🔗 https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// Function should remove the first and last characters of a string.
// No need to worry with strings having less than two characters.

function removeChar(str){
  let newStr = ""; // newStr will be the storage for the modified given string.

  if(str.length > 2){ // If str length is more than 2,
    newStr = str.substring(1, str.length-1); // then use subtring method to exclude first and last character of the given string.
  } 
  return newStr; // newStr will then be returned out of the function.
};