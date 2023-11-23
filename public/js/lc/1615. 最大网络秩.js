/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
 var maximalNetworkRank = function(n, roads) {
  /* 
  * roads里面出现次数最多的两个数字a, b
  * 若roads里面有 [a,b] 或者 [b,a] -1
  * res = sum(a + b)
  */
  let arr = new Array(n).fill(0)
  roads.forEach(item => {
    arr[item[0]] += 1;
    arr[item[1]] += 1;
  })
  arr.sort((a,b) => b-a);
  return roads.some((item) => item.includes(arr[0]) && item.includes(arr[1])) ? arr[0] + arr[1] - 1 : arr[0] + arr[1];
};


function maximalNetworkRank(n, roads) {
  const edges = Array.from({ length: n }, () => new Set());
  for (const [u, v] of roads) {
      edges[u].add(v), edges[v].add(u);
  }

  let ans = 0;
  for (let u = 0; u < n; u++) {
      for (let v = u + 1; v < n; v++) {
          ans = Math.max(ans, edges[u].size + edges[v].size - (edges[u].has(v) ? 1 : 0));
      }
  }

  return ans;
};
