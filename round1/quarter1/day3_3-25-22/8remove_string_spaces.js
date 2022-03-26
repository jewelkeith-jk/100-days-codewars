// ❓ Kata_8Kyu_#11: Remove String Spaces
// 🔗 https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Function should return the string without spaces.

function noSpace(x){
  return x.replace(/ /g, "") 
}

// Replace method was used. 
// In it is a Regex that is a space to match a space in the string.
// g flag was added next to the regex so that every space, not only once, can be matched in any given string. 
// Next to it is an empty string to replace the space pattern in the regex found in the string.

/*
Best practice!
🔹 /\s/ instead of / / because /\s/ removes every whitespace character (\r, \n, \t, \f and \v) along with actual space.

function noSpace(x){
  return x.replace(/\s/g, '');
}

*/