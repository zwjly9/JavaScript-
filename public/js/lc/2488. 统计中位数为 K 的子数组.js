/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  /* 
  * 以K为基准，双指针
  *  */
  const kIndex = nums.indexOf(k)
  let left = kIndex, right = kIndex;
  while(left > 0 && right <= nums.length) {
    
  }
};
