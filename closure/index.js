// 概念性  当一个函数被创建，闭包就形成了

// function test() {
//  var a = 1;
//  var b = 2;

//  function test2() {
//   console.log(a, b);
//  }

// //  debugger 
//   return test2()
// }

// const test2 = test()
// test2()


/* function test2() {
  console.log(a);
}
function test() {
  var a = 1;
  return test2()
}
test2() 不是test的闭包 */


function calculator(initialNumber) {
  var  num = Number(initialNumber) || 0
  function changeValue(value) {
    num += value
  }
  function add(value) {
    changeValue(value)
  }
  function minus(value) {
    changeValue(-value)
  }
  function value() {
    return num
  }
  return { add, minus, value }
}

const cal = calculator(100)

cal.add(5)

console.log(cal.value());

const  time = 28
function    formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  let timeString = '';
  if (hours >0) {
    timeString += `${hours}时`;
  } 
  if (minutes > 0) {
    timeString += `${minutes}分`;
  } 
  timeString += `${remainingSeconds}秒`;
  return timeString;
}

console.log(formatTime(time));
