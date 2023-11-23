function fn1(){
  console.log(1)
}
function fn2(){
  console.log(2)
}
fn1.call(fn2); //1
fn1.call.call(fn2) // 2
// 首先 fn1 通过原型链机制找到 Function.prototype 找到 call 方法，并且让 call 方法执行，此时 call 这个方法中的 this 就是要操作的 fn1，在 call 方法执行过程中让 fn1 的 “this 关键字” 变为 fn2，然后再执行 fn1，fn1 的执行结果为 1。
// fn1.call.call(fn2) 最后一个 call 方法执行，fn1.call -> 执行时，让里面的 this 变为 fn2 ，所以 fn1.call 即为 fn2 执行。

// 重写call方法
function call(Fn, obj, ...args) {
  // 非严格模式下判断
  if(obj === undefined || obj === null) {
    obj = globalThis;
  }
  obj.temp = Fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result
}

// 重写apply方法
function apply(Fn, obj, args) {
  // 非严格模式下判断
  if(obj === undefined || obj === null) {
    obj = globalThis;
  }
  obj.temp = Fn;
  let result = obj.temp(...args);
  delete obj.temp;
  return result
}


function add(a, b) {
  return a + b + this.c
}
let obj = {
  c: 521
}

globalThis.c = 1314;

console.log(call(add, obj, 10, 20));