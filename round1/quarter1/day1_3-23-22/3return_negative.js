// ❓ Kata_8Kyu_#3: Return Negative
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