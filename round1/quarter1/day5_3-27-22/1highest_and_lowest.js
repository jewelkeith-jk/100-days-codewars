// ❓ Kata_7Kyu_#1: Highest and Lowest
// 🔗 https://www.codewars.com/kata/554b4ac871d6813a03000035

// Return the highest and lowest number from a given string of space separated numbers.

function highAndLow(numbers){
  // seperate numbers in the string
  let arr = numbers.split(" ");

  // containers
  let parse = [];
  let highLow = [];
  let result = "";

  // string to number
  for(let i = 0; i < arr.length; i++){
    parse.push(parseInt(arr[i], 10));
  };

  // ascending order
  parse.sort(function(a,b){return a-b});

  // last number + first number 
  highLow.push(parse[parse.length-1]) + highLow.push(parse[0]);

  // array to string
  result = highLow.join();

  // remove comma
  return result.replace(/,/, " ");
};

/*
Best solution!

function highAndLow(numbers){
  const nums = numbers.split(' ');
  return Math.max(...nums) + ' ' + Math.min(...nums)
}

*/ 