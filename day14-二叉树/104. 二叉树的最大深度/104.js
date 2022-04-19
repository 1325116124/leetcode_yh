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
var maxDepth = function(root) {
  const queue = []
  let deep = 0
  queue.push(root)
  if(root === null) {
    return deep
  }
  while(queue.length) {
    const length = queue.length
    deep++
    for(let i=0;i<length;i++) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return deep
};
