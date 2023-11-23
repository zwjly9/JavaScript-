/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  /*
  * 双指针 双数组排序
  * 慢指针加1后，快指针减
  * */
  spells.sort((a, b) => {
    return a -b
  })
  potions.sort((a, b) => {
    return a -b
  })
  let n = Math.min(spells.length, potions.length)
  let minArr = [], maxArr = []
  if(n === spells.length) {
    minArr = spells
    maxArr = potions
  }else {
    minArr = potions
    maxArr = spells
  }
  let slow = 0, fast = maxArr.length - 1, sum = 0, result = []
  while(slow <= n) {
    if(maxArr[slow] * minArr[fast] >= success) {
      fast--
      sum++
    }else {
      slow++
      result.push(sum)
    }
  }
};


// const a = [1,2,3]

// const b = new RegExp()
// console.log(typeof b)

// const a = function () {
//   return void 0
// }
// let b = a()
// console.log(b)

// console.log(arr instanceof Array)
/*
* 数据类型
* undefined boolean string number object(null、array、正则) function symbol
* 对于引用类型，可以使用instanceof 操作符去判断
* */

/*
Boolean() 方法  等同于 !!
只有 "" 0 undefined null NaN 才会转换为 false
*/

/*
* 空值合并操作符 ?? 当左侧的值为null 或者undefined 时，返回右侧的值
* || 强制判断 true false ,存在假值问题比如0 ，”“
* 可选链 ?. 无值的话返回的是 undefined
* */

/*
* Number() 和 parseInt()
*              Number    parseInt
* Boolean   -> 0 ,1      0,1
* 数字       -> 数字       数字
* null      -> 0         NaN
* undefined -> NaN       NaN
* '123blue' -> NaN       123
* '123'     -> 123       123
* '2.2'     -> 2.2       2
* ''        -> 0         NaN
* */


/*
* js中字符串的值是不可变的，可以理解为所有的全都是const， 两个字符串合并，原理是创建一个新的字符串，将要合并的填充，然后销毁原来的两个字符串
* */

/*
* for in 和 for of
* for in更适合遍历对象, 对于数组返回索引值 index索引为字符串型数字，不能直接进行几何运算
* for of遍历的是数组元素值，而且for of遍历的只是数组内的元素，不包括原型属性和索引
* */

/*
function test(a,b) {
  console.log(arguments[1])
}
*/

/*
* function在定义时可以定义参数，使用时传参，然后使用arguments数组去接受参数并做相关处理
* 严格模式下。不允许通过arguments对参数进行重写
* */

function buildUrl() {
  var qs = "?debug=true"

  with (location) {
    var url = href + qs
  }
  return url
}
a = buildUrl()
console.log(a)