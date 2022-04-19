/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let end = intervals[0][1]
  let start = intervals[0][0]
  const res = []
  for(let i=1;i<intervals.length;i++) {
    if(intervals[i][0] > end) {
      res.push([start,end])
      start = intervals[i][0]
      end = intervals[i][1]
    } else {
      end = Math.max(end,intervals[i][1])
    }
  }
  res.push([start,end])
  return res
};
