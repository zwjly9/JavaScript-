/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  /**
 * 思路：
 * 构造一个矩阵A, A[i][j] = min{  rowSun[i], colSum[j] }, 然后rowSum[i] - A[i][j], colSum[j] - A[i][j]
 */
  
  const n = rowSum.length, m= colSum.length
  let i = 0, j = 0
  // 二维数组构造方法
  let res = new Array(n).fill(0).map(() => new Array(m).fill(0))
  while(i < n && j < m) {
    const temp = Math.min( rowSum[i], colSum[j] )
    res[i][j] = temp;
    rowSum[i] -= temp
    colSum[j] -= temp
    if(rowSum[i] === 0) {
      ++i
    }
    if(colSum[j] === 0) {
      ++j
    }
  }
  return res
};