/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找
 */

var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while(left <= right) {
    // 防止整数溢出
    let mid = Math.floor(left + (right - left) / 2)
    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
};

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 0; 
    let right = n;
    let mid = Math.floor(left + (right-left)/2)
    while(left !== right -1) {
      if(isBadVersion(mid)) {
        right = mid;
        mid = Math.floor(left + (right-left)/2)
      } else {
        left = mid;
        mid = Math.floor(left + (right-left)/2)
      }
    }
    return left
  };
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0 ; right = nums.length - 1;
  while(left <= right) {
    const mid = Math.floor(left + (right - left) /2 )
    if(nums[mid] > target) {
      right = mid - 1
    } else if(nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return left
};