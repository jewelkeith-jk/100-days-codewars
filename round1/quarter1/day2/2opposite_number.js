// ❓ Kata_8Kyu_#5: Opposite number
// 🔗 https://www.codewars.com/kata/56dec885c54a926dcd001095

// Function should return the opposite of a given integer or a floating-point number.

function opposite(number) {
  if(number > 0){ // If "number" is greater than 0 like a positive number,
    number = number * -1; // then multiply "number" by -1 to make it a negative number.
  } else if(number < 0) { // If "number" is less than 0 like a negative number,
    number = number * -1; // then multiply "number" by -1 to make it a positive number.
  }
  return number; // Returns the output of "number" that went through the if statements.
}