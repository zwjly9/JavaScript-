// 循环

/* 
  for( ; ; ;) 循环括号内三个语句
  第二个为判断语句，返回的结果为true  or false 
  所以 只要将循环的i 赋值为 false ,循环即可停止
  i 赋值为 0, null, undefined, NaN, '', false 6种可以停止循环
  类似 while(true)  while(0)
*/

// 打印 0- 10， （）内只能有一句，不能写比较  {}不能有i--, i++
let i = 11
for(; i--; ) {  // 当i = 0，条件判断不成立，即可停止循环
  console.log(i);
}



// 数据类型-引用值
// typeof 数据类型永远是String 
console.log(typeof(1))  // number
console.log(typeof(typeof(1))) // string
console.log(typeof(NaN)); // number
console.log(typeof(null)); // object


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


/* 
parseInt(string, radix)
只要radix基数中包含第一个参数字符串中的所有字符，即可输出正常数字
否则解析至首个不包含的字符
*/
console.log(parseInt('123abc'));


// var a = 'a' + 1
// console.log(a);  // a1
// * / - %  都是str  -> number
// > >= < <= 也是比较数字
// 'a' > 'b' 比较的是ascii码
 

console.log(NaN == NaN);  // false

// var b = 2 > 1 > 3 // false
// var b = 2 > 1 == 1 // true
// var b = 2 > 1 === 1 // false
// console.log(b);

// var c = undefined > 0 // false
// var c = undefined < 0 // false
// var c = undefined == 0 // false
// var c = null > 0 // false
// var c = null < 0 // false
// var c = null == 0 // false
var c = null == undefined // true !!!!!
console.log(c);
// null 和 undefined和 0 没有任何关系,但在弱等于的时候 null == undefined

var d = '123'
console.log(typeof(+d), +d); // number 123 

var d = 'abd'
console.log(typeof(+d), +d); // number NaN 


/* 
isNaN() 方法
NaN不能直接通过 == 或者 === 来判断，所以需要isNaN方法来判断
isNaN参数如果不是数字，则会先转换为数值，在进行判断
*/
console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false
console.log(isNaN('123')); // false
console.log(isNaN('abc')); // true
console.log(isNaN(null)); // Number(null) -> 0 false
console.log(isNaN(undefined)); // Number(undefined) -> NaN true