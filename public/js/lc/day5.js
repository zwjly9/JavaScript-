/**
 * 3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = new Set();
  let left = -1, ans = 0;
  for(let i = 0 ; i < s.length; ++i) {
    if(i !== 0) {
      res.delete(s.charAt(i -1))
    }
    while(left + 1 < s.length && !res.has(s.charAt(left + 1))) {
      res.add(s.charAt(left + 1))
      ++left;
    }
    ans = Math.max(ans, left - i + 1)
  }
  return ans
};


/**
 * 567. 字符串的排列
给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
换句话说，s1 的排列之一是 s2 的 子串 。
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {

};


let obj = {
  name: {
    day: 1
  },
  age: {
    day: 2
  }
}
console.log(obj.hasOwnProperty("name"));


/*
给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。
所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
示例 1：
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"
示例 2：
输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"
*/
function address(data) {
  let str = data.replaceAll('.', '[.]')
}
let data = "255.100.50.0"
address(data)