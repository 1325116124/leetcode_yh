/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function(a, b) {
    const MAX = Math.pow(2,31) - 1, MIN = -Math.pow(2,31)
    if(a === MAX && b === -1) return MIN
    if(a === MIN && b === -1) return MAX
    let result = 0
    const sign = (a > 0) ^ (b > 0)
    a = Math.abs(a)
    b = Math.abs(b)
    while(b < a) {
        b += b
        result++
    }
    return sign ? -result : result
};