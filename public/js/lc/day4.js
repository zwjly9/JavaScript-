/**
 * 283. 移动零
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let left = 0; let n = nums.length - 1;
  while(left <= n) {
    if(nums[left] === 0) {
      nums.splice(left, 1);
      nums.push(0);
      n --;
    }else {
      left ++;
    }
  }
  console.log(nums);
  return nums
};

/**
 * 167. 两数之和 II - 输入有序数组
给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
你所设计的解决方案必须只使用常量级的额外空间。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  let left = 0; let right = numbers.length - 1;
  while(left < right) {
    let sum = numbers[left] + numbers[right]
    if(sum > target) {
      right --
    } else if(sum < target) {
      left ++
    } else {
      return [left, right]
    }
  }
  return [-1, -1]
};


/**
 * 344. 反转字符串
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1
  while(left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++;
    right--;
  }
  return s.join()
};

/**
 * 557. 反转字符串中的单词 III
给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  let arr = s.split(" ");
  let res = ""
  arr.forEach((item) => {
    res = res + item.split("").reverse().join("") + " "
  })
  return res.slice(0, res.length - 1)
};


/**
 * 876. 链表的中间结点
给定一个头结点为 head 的非空单链表，返回链表的中间结点。
如果有两个中间结点，则返回第二个中间结点。
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  // 快慢指针
  let slow = head;
  let fast = head;
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
};

/**
 * 19. 删除链表的倒数第 N 个结点
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let slow = head, fast = head;
  while(n--) {
    fast = fast.next
  }
  if(!fast) {
    return head.next
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};