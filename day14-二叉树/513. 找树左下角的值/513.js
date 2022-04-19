/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  const stack = []
  stack.push(root)
  let res = 0
  while(stack.length) {
    const len = stack.length
    res = stack[0].val
    for(let i=0;i<len;i++) {
      const node = stack.shift()
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
  }
  return res
};
