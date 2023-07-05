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
