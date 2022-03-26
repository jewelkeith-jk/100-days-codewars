// ❓ Kata_8Kyu_#6: Even or Odd
// 🔗 https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// Function should return "Even" for given even numbers. 
// Otherwise, it should return "Odd" for given odd numbers.

function even_or_odd(number) {
  if(number % 2 === 1){ // If the number has a remainder of 1,
    return "Odd"; // then return "Odd".
  } else if(number % 2 === 0){ // If the number has a remainder of 0,
    return "Even"; // then return "Even".
  }
  return "Odd";
}