var plusOne = function(digits) {
  let n = digits.length - 1
  while(digits[n] === 9 ) {
    digits[n] = 0;
    if(n === 0) {
      break
    }
    n--;
  }
  if(n !== digits.length - 1) {
    digits.push(0)
    if(n === 0) {
      digits[0]  = 1
    }
  }
  digits[n]++
  return digits
};
console.log(plusOne([9]));