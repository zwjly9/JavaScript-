/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
  let sum = 0
  for(let i = left; i <= right ; i++) {
    const s = words[i]
    if("aeiou".includes(s[0]) &&"aeiou".includes(s[s.length -1])) {
      sum++
    }
  }
  return sum
};


/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
  let colorMap = {}
  let arr = rings.match(/.{1,2}/g);
  arr.forEach(item =>{
    if(colorMap[item[1]]) {
      colorMap[item[1]].push(item[0])
    }
  })
};

