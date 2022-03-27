// ❓ Kata_8Kyu_#13: If you can't sleep, just count sheep!!
// 🔗 https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let sleep = []; 
  // Storage for the string. For now, it's an empty array because...
  
  for(let i = 1; i <= num; i++){
    sleep.push(i + " sheep..."); 
    // the number i concatenated with " sheep..." will be pushed into the array for every loop.
  }
  return sleep.join().replace(/,/g, ""); 
  // Join method to convert the array into a string, then replaced method to remove all the commas.
}

/*

Best practice! 
🔹 Create strings using Template Literals.

var countSheep = function (num){
  let sleep = ""; 
  
  for(let i = 1; i <= num; i++){
    sleep += `${i} sheep...`; 
  }
  return sleep;
}

*/