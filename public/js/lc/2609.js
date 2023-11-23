/* 
  00001101010101
  相同字符的最大连续 000  11 
  取1和0较小的一个
*/
function findMaxLength(s) {
  let pre = 0, cur = 0, max = 0
  for(let i = 0; i < s.length; i++) {
    cur++
    if(i === s.length - 1 || s[i] !== s[i+1]) {
      if(s[i] === '1') {
        max = Math.max(max, Math.min(cur, pre)*2)
      }
      pre = cur
      cur = 0
    }
  }
  return max
}
let s = '000011010110101010'
console.log(findMaxLength(s));


function unequalTriplets(nums) {
  let result = 1
  let map = new Map()
  nums.forEach(element => {
    if(map.has(element)) {
      map.set(element, map.get(element) + 1)
    } else {
      map.set(element, 1)
    }
  });
  if(map.size < 3) {
    return 0
  } else {
    for (let value of map.values()) {
      result *= value;
    }
    return result*factorial(map.size) / 6
  }
}
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const arr = [4,4,2,4,3]
console.log(unequalTriplets(arr));  


let count = [1,3,2,2,4]
let res = {}
for(let t of count) {
  res[t] = res[t] || 0
  res[t] ++
}
console.log(res);


