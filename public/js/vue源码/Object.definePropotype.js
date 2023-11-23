var obj = {}
function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('正在访问' + key + '属性');
      return val
    },
    set(newValue) {
      console.log('正在修改' + key + "属性");
      if(val === newValue) {
        return
      }
      val = newValue;
    }
  })
}
defineReactive(obj, 'a', 10)
obj.a++;
console.log(obj.a);