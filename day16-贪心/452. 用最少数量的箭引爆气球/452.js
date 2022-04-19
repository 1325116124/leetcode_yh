/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort(((a, b) => {
    return a[0] - b[0]
  }))
  let res = 0
  let end = points[0][1]
  for(let i=1;i<points.length-1;i++) {
    if(points[i+1][0] <= end) {
      end = Math.min(end,points[i][1])
    } else {
      res++
      end = points[i][1]
    }
  }
  return res
};
