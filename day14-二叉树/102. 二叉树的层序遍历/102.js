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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [], queue = []
  queue.push(root)
  if(root === null) {
    return res
  }
  while(queue.length) {
    const temp = []
    const length = queue.length
    for(let i=0;i<length;i++) {
      const node = queue.shift()
      temp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(temp)
  }
  return res
};
