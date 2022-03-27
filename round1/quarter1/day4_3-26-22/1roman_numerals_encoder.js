// ❓ Kata_6Kyu_#1: Roman Numerals Encoder
// 🔗 https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function solution(number){
  // number to string to array
  let str = number.toString();
  let arr = str.split("")
  // storage for expanded form and roman numeral
  let newArr = []
  let roman = "";
  // roman numeral table
  const lookup = {
    4:"IV", 9:"IX", 40:"XL", 90:"XC", 400:"CD", 900:"CM",
    1: "I", 2: "II", 3: "III", 5: "V", 6: "VI", 7: "VII",
    8: "VIII", 10: "X", 20: "XX", 30: "XXX", 50: "L", 60: "LX",
    70: "LXX", 80: "LXXX", 100: "C", 200: "CC", 300: "CCC", 500: "D",
    600: "DC", 700: "DCC", 800: "DCCC", 1000: "M", 2000: "MM", 3000: "MMM"
  };
  // ones
  if(arr.length === 1){
    newArr.push(arr[0]*1);
  }
  // tens
  if(arr.length === 2){
    newArr.push(arr[0]*10);
    newArr.push(arr[1]*1);
  }
  // hundreds
  if(arr.length === 3){
    newArr.push(arr[0]*100);
    newArr.push(arr[1]*10);
    newArr.push(arr[2]*1);
  }
  // one thousands
  if(arr.length === 4){
    newArr.push(arr[0]*1000);
    newArr.push(arr[1]*100);
    newArr.push(arr[2]*10);
    newArr.push(arr[3]*1);
  }
  // lookup at table
  for(let i = 0; i < newArr.length; i++){
    if(lookup.hasOwnProperty(newArr[i]) === true){
      roman += lookup[newArr[i]];
    }
  }
  return roman;
}

/*
Best solutions!

✅ by Ramón @hola_soy_milk
🔗 https://youtu.be/ArY7OlDcXis

✅ by Yazeed @yazeedBee 
🔗 https://youtu.be/g_ISxHcg-RM

*/