/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let arr = s.split("")
    let count = 0
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === " ") count++
    }
    let sum = arr.length + 2 * count - 1
    for(let i=arr.length-1;i>=0;i--) {
        if(arr[i] === " ") {
            arr[sum--] = "0"
            arr[sum--] = "2"
            arr[sum--] = "%"
        } else {
            arr[sum--] = arr[i]
        }
    }
    return arr.join("")
};