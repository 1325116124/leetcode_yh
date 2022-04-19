/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let startX = 0;
  let startY = 0;
  let result = [];
  let offset = 1;
  let loop = Math.floor(row / 2);
  if (col === 1) {
    for (let i = 0; i < row; i++) {
      result.push(matrix[i][j]);
    }
    return result;
  }
  if (row === 1) {
    return matrix[0];
  }
  while (loop--) {
    let i = startX;
    let j = startY;
    for (; j < startY + col - offset; j++) {
      result.push(matrix[i][j]);
    }
    for (; i < startX + row - offset; i++) {
      result.push(matrix[i][j]);
    }
    for (; j > startY; j--) {
      result.push(matrix[i][j]);
    }
    for (; i > startX; i--) {
      result.push(matrix[i][j]);
    }
    startX++;
    startY++;
    offset += 2;
  }
  if (row % 2 !== 0) {
    let lastRow = Math.floor(row / 2);
    for (let k = startY; k <= startY + col - offset; k++) {
      result.push(matrix[lastRow][k]);
    }
  }
  if (row % 2 !== 0 && col % 2 !== 0) result.pop();
  return result;
};
