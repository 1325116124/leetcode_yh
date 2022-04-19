/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = []
  const path = new Array(n).fill([]).map(() => new Array(n).fill("."))
  const dfs = function (row) {
    if(row === n) {
      res.push(changeArrayToStr(path))
      return
    }
    for(let i=0;i<n;i++) {
      if(isValid(row,i,path)) {
        path[row][i] = "Q"
        dfs(row+1)
        path[row][i] = "."
      }
    }
  }

  const isValid = (row,col,path) => {
    for(let i=0;i<row;i++) {
      if(path[i][col] === "Q") {
        return false
      }
    }

    for(let i=row-1,j=col-1; i>=0 && j>=0;i--,j--) {
      if(path[i][j] === "Q") {
        return false
      }
    }

    for(let i=row-1,j=col+1;i>=0&&j<n;i--,j++) {
      if(path[i][j] === "Q") {
        return false
      }
    }
    return true
  }

  const changeArrayToStr = function (path) {
    const newPath = []
    path.forEach(row => {
      let str = ''
      row.forEach(item => {
        str += item
      })
      newPath.push(str)
    })
    return newPath
  }

  dfs(0)
  return res
};


