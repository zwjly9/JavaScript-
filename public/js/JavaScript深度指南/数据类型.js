// typeof 数据类型永远是String 
console.log(typeof(1))  // number
console.log(typeof(typeof(1))) // string


// 显式类型转换 / 隐式类型转换
// Number()转换 -- 数字或者字符串数字 转数字， 非数类型 转NaN
console.log(typeof(Number('123')) + '-' + Number('123'));  // number - 123
console.log(typeof(Number('true')) + '-' + Number('true'));  // number - NaN
console.log(typeof(Number(true)) + '-' + Number(true));  // number - 1
console.log(typeof(Number(false)) + '-' + Number(false));  // number - 0
console.log(typeof(Number(null)) + '-' + Number(null));  // number - 0
console.log(typeof(Number(undefined)) + '-' + Number(undefined));  // number - NaN
console.log(typeof(Number('a')) + '-' + Number('a'));  // number - NaN
console.log(typeof(Number('1a')) + '-' + Number('1a'));  // number - NaN
console.log(typeof(Number('3.14')) + '-' + Number('3.14'));  // number - 3.14


// parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数，radix 是 2-36 之间的整数，表示被解析字符串的基数。只解析首个数字部分
console.log(typeof(parseInt('123')) + '-' + parseInt('123'));  // number - 123
console.log(typeof(parseInt('true')) + '-' + parseInt('true'));  // number - NaN
console.log(typeof(parseInt(true)) + '-' + parseInt(true));  // number - NaN
console.log(typeof(parseInt(false)) + '-' + parseInt(false));  // number - NaN
console.log(typeof(parseInt(null)) + '-' + parseInt(null));  // number - NaN
console.log(typeof(parseInt(undefined)) + '-' + parseInt(undefined));  // number - NaN
console.log(typeof(parseInt('a')) + '-' + parseInt('a'));  // number - NaN
console.log(typeof(parseInt('1a')) + '-' + parseInt('1a'));  // number - 1
console.log(typeof(parseInt('3.14')) + '-' + parseInt('3.14'));  // number - 3

console.log(parseInt(13, 2));

let a = null
console.log( !!a || a === 0);


let data1 = [20, 19, 18,16]
let data2 = [3,1,0,4]


function getMax(arr1, arr2) {
  let max = 0 
  let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length
  for(let i = 0; i < maxLength; i++) {
    let temp = arr1[i] + arr2[i]
    max = Math.max(temp, max)
  }
  max = Math.ceil(max/10)*10
  return max
}
let a1 = getMax(data1, data2)
console.log(a1);



function test(a) {
  function a() {

  }
  console.log(a);

  console.log(a);

  var a = 1
  console.log(a);
}
test()

// function 1  1