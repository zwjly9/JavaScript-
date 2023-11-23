/**
 * 977. 有序数组的平方
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @param {number[]} nums
 * @return {number[]}
 * 优化思路:缓存平方结果 减少计算
 */
var sortedSquares = function(nums) {
  let res = [];
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    if (Math.abs(nums[left]) >  Math.abs(nums[right])) {
      res.unshift(nums[left]*nums[left]);
      left ++
    } else if(Math.abs(nums[left]) <  Math.abs(nums[right])) {
      res.unshift(nums[right]*nums[right]);
      right --
    } else {
      res.unshift(nums[right]*nums[right]);
      left ++;
    }
  }
  console.log(res);
  return res
};


/**
 * 189. 轮转数组
给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  let n = nums.length;
  k %= n
  reverse(nums, 0 , n- 1);
  reverse(nums, 0 , k-1);
  reverse(nums, k, n -1);
};
// 反转数组
const reverse = (nums, start, end) => {
  while(start < end) {
    let temp = nums[start]
    nums[start] = nums[end];
    nums[end] = temp
    start += 1;
    end -= 1;
  }
}
