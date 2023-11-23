/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

var asteroidCollision = function(asteroids) {
  let arr = []
  for(const aster of asteroids) {
    let status = true;
    while(status && aster < 0 && arr.length > 0 && arr[arr.length - 1] > 0) {
      status = arr[arr.length - 1] < -aster
      if(arr[arr.length - 1] <= -aster) {
        arr.pop()
      }
    }
    if(status) {
      arr.push(aster)
    }
  }
  const size = arr.length;
  const ans = new Array(size).fill(0);
  for (let i = size - 1; i >= 0; i--) {
    ans[i] = arr.pop();
  }
  return ans;
};