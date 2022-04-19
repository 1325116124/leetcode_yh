/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    // const binarySearch = function (arr,target) {
    //     let left = 0
    //     let right = arr.length - 1
    //     while(left <= right) {
    //         let mid = Math.floor((left + right) / 2)
    //         if(arr[mid] < target) {
    //             left = mid + 1
    //         } else if(arr[mid] > target) {
    //             right = mid - 1
    //         } else {
    //             return true
    //         }
    //     }
    //     return false
    // }

    // for(const item of matrix) {
    //     if(binarySearch(item,target)) return true
    // }
    // return false

    if(!matrix.length || !matrix[0].length) return false
    let x = matrix.length - 1, y = 0
    while(x >= 0 && y <= matrix[0].length - 1) {
        if(matrix[x][y] === target) return true
        else if(matrix[x][y] < target) {
            y++
        } else {
            x--
        }
    }
    return false
};