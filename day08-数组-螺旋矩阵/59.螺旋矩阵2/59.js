/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let loop = Math.floor(n / 2);
  let mid = Math.floor(n / 2);
  let startx = 0;
  let starty = 0;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let offset = 1;
  let count = 1;
  while (loop--) {
    let i = startx;
    let j = starty;
    //上面从左到右
    for (; j < startx + n - offset; j++) {
      res[i][j] = count++;
    }
    //右面从上到下
    for (; i < starty + n - offset; i++) {
      res[i][j] = count++;
    }
    //下面从右到左
    for (; j > startx; j--) {
      res[i][j] = count++;
    }
    //左面从下到上
    for (; i > starty; i--) {
      res[i][j] = count++;
    }
    startx++;
    starty++;
    offset += 2;
  }
  if (n % 2 !== 0) res[mid][mid] = count;
  return res;
};
