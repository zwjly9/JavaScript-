function deepClode(obj, cache = []) {
  if (obj === null || typeof obj != 'object') {
    return obj
  }

  if (Object.prototype.toString.call(obj) === '[object Date]') return new Date(obj)
  if (Object.prototype.toString.call(obj) === '[object RegExp]') return new RegExp(obj)
  if (Object.prototype.toString.call(obj) === '[object Error]') return new Error(obj)

  let item = cache.filter(item => item.origin === obj)[0]
  if (item) return item.newObj

  let newObj = Array.isArray(obj) ? [] : {}

  cache.push({
    origin: obj,
    newObj
  })
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] == "object") {
      newObj[key] = deepClode(obj[key], cache)
    } else {
      newObj[key] = obj[key]
    }
  });
  return newObj
}