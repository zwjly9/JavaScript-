// map暴力
// var removeDuplicates = function(nums) {
//   let i = 0
//   let count = new Map()
//   for(let i = 0; i < nums.length; i++ ) {
//     count.has(nums[i]) ? count.set(nums[i], count.get(nums[i]) + 1) : count.set(nums[i], 1)
//   }
//   for(let key of  count.keys()){
//     nums[i] = key
//     i++
//   }
//   return i
// };
let nums = [-1,0,0,0,0,3,3]
// 快慢指针
var removeDuplicates = function(nums) {
  if(nums.length === 0) {
    return 0
  }
  let fast = 1, slow = 1
  while(fast <= nums.length -1) {
    if(nums[fast] !== nums[fast -1]) {
      nums[slow] = nums[fast]
      fast++
      slow++
    }else {
      fast++
    }
  }
  return slow
};
console.log(removeDuplicates(nums));