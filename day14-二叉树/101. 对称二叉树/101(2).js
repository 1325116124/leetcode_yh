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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root === null) return true
  const queue = []
  queue.push(root.left)
  queue.push(root.right)
  while(queue.length) {
    const left = queue.shift()
    const right = queue.shift()
    if(left === null && right === null) continue
    if(left===null||right===null||left.val!==right.val){
      return false;
    }
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true
};
