/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let len1 = a.length - 1
    let len2 = b.length - 1
    let carry = 0
    let res = ""
    while(len1 >=0 || len2 >= 0) {
        const temp1 = len1 >= 0 ? a[len1] - '0' : 0
        const temp2 = len2 >= 0 ? b[len2] - '0' : 0
        const sum = temp1 + temp2 + carry
        carry = Math.floor(sum / 2)
        res += (sum % 2)
        len1--
        len2--
    }
    if(carry) res += carry
    res = res.split("").reverse().join("")
    return res
};