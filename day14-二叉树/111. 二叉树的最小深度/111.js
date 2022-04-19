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
var minDepth = function(root) {
  const stack = []
  let deep = 0
  if(!root) {
    return deep
  }
  stack.push(root)
  while(stack.length) {
    const len = stack.length
    deep++
    for(let i=0;i<len;i++) {
      const node = stack.shift()
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
      if(!node.left && !node.right) {
        return deep
      }
    }
  }
  return deep
};
