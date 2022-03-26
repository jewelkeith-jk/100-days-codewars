// ❓ Kata_8Kyu_#8: Convert boolean values to strings 'Yes' or 'No'.
// 🔗 https://www.codewars.com/kata/53369039d7ab3ac506000467

// Fumction should return "Yes" if the argument is a boolean value of true. 
// Otherwise, it should return "No".

function boolToWord(bool){
  if(bool === true){ // If bool is true,
    return "Yes"; // then return "Yes".
  } else{
    return "No"; // Otherwise, return "No".
  }
}